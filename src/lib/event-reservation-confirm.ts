import { EVENT_TICKET_AMOUNTS_KES } from '@/lib/event-tickets';
import { formatEventTicketNumber } from '@/lib/event-confirmation-email';
import { sendEventConfirmationEmail } from '@/lib/send-event-confirmation';
import type { Pool } from 'pg';

export type ReservationConfirmRow = {
  id: number;
  eventTitle: string;
  eventDate: string;
  firstName: string;
  lastName: string | null;
  email: string;
  phone: string | null;
  ticketType: string | null;
  lanyardCategory: string | null;
  bookingStatus: string;
  ticketNumber: string | null;
  paidAt: string | null;
  confirmationSentAt: string | null;
};

export type PaymentRefRow = {
  source: string;
  merchantReference: string | null;
  providerTrackingId: string | null;
  reference: string | null;
  amountKes: number | null;
  paidAt: string;
};

function isUndefinedColumn(err: unknown): boolean {
  return (
    typeof err === 'object' &&
    err !== null &&
    'code' in err &&
    (err as { code: string }).code === '42703'
  );
}

export async function renumberEventRegistrationTicketsPg(
  p: Pool,
  eventTitle: string,
  eventDate: string
): Promise<void> {
  try {
    await p.query(
      `
      UPDATE event_reservations
      SET ticket_number = NULL
      WHERE event_title = $1
      `,
      [eventTitle]
    );

    const registered = await p.query(
      `
      SELECT id FROM event_reservations
      WHERE event_title = $1 AND event_date = $2 AND booking_status != 'cancelled'
      ORDER BY created_at ASC, id ASC
      `,
      [eventTitle, eventDate]
    );

    for (let i = 0; i < registered.rows.length; i++) {
      const ticketNumber = formatEventTicketNumber(i + 1);
      await p.query(`UPDATE event_reservations SET ticket_number = $2 WHERE id = $1`, [
        registered.rows[i].id,
        ticketNumber,
      ]);
    }
  } catch (err) {
    if (!isUndefinedColumn(err)) throw err;
  }
}

/** @deprecated Use renumberEventRegistrationTicketsPg */
export const renumberConfirmedEventTicketsPg = renumberEventRegistrationTicketsPg;

export async function getReservationForConfirmPg(
  p: Pool,
  id: number
): Promise<ReservationConfirmRow | null> {
  try {
    const r = await p.query(
      `
      SELECT id, event_title, event_date, first_name, last_name, email, phone,
             ticket_type, lanyard_category, booking_status, ticket_number, paid_at, confirmation_sent_at
      FROM event_reservations WHERE id = $1
      `,
      [id]
    );
    if (!r.rows[0]) return null;
    const row = r.rows[0];
    return {
      id: Number(row.id),
      eventTitle: String(row.event_title),
      eventDate: String(row.event_date),
      firstName: String(row.first_name),
      lastName: row.last_name ? String(row.last_name) : null,
      email: String(row.email),
      phone: row.phone ? String(row.phone) : null,
      ticketType: row.ticket_type ? String(row.ticket_type) : null,
      lanyardCategory: row.lanyard_category ? String(row.lanyard_category) : null,
      bookingStatus: String(row.booking_status),
      ticketNumber: row.ticket_number ? String(row.ticket_number) : null,
      paidAt: row.paid_at ? new Date(row.paid_at).toISOString() : null,
      confirmationSentAt: row.confirmation_sent_at
        ? new Date(row.confirmation_sent_at).toISOString()
        : null,
    };
  } catch (err) {
    if (isUndefinedColumn(err)) return null;
    throw err;
  }
}

export async function getLatestPaymentForReservationPg(
  p: Pool,
  reservationId: number
): Promise<PaymentRefRow | null> {
  const r = await p.query(
    `
    SELECT source, merchant_reference, provider_tracking_id, reference, amount_kes, updated_at, created_at
    FROM payments
    WHERE (
      (metadata_json->>'reservationId')::int = $1
      OR metadata_json->>'reservationId' = $1::text
    )
    AND status = 'paid'
    ORDER BY updated_at DESC NULLS LAST, created_at DESC
    LIMIT 1
    `,
    [reservationId]
  );
  if (!r.rows[0]) return null;
  const row = r.rows[0];
  return {
    source: String(row.source),
    merchantReference: row.merchant_reference ? String(row.merchant_reference) : null,
    providerTrackingId: row.provider_tracking_id ? String(row.provider_tracking_id) : null,
    reference: row.reference ? String(row.reference) : null,
    amountKes: row.amount_kes != null ? Number(row.amount_kes) : null,
    paidAt: new Date(row.updated_at || row.created_at).toISOString(),
  };
}

function paymentReferenceLabel(payment: PaymentRefRow | null): string {
  if (!payment) {
    const paybill = process.env.EVENT_PAYBILL || '542542';
    const account = process.env.EVENT_PAYBILL_ACCOUNT || '43869';
    return `Paybill ${paybill} / Acc ${account}`;
  }
  if (payment.merchantReference) return payment.merchantReference;
  if (payment.providerTrackingId) return payment.providerTrackingId;
  if (payment.reference) return payment.reference;
  if (payment.source === 'pesapal') return 'Pesapal payment';
  const paybill = process.env.EVENT_PAYBILL || '542542';
  const account = process.env.EVENT_PAYBILL_ACCOUNT || '43869';
  return `Paybill ${paybill} / Acc ${account}`;
}

function ticketAmount(ticketType: string | null): number {
  if (!ticketType) return EVENT_TICKET_AMOUNTS_KES.standard;
  return EVENT_TICKET_AMOUNTS_KES[ticketType.toLowerCase()] ?? EVENT_TICKET_AMOUNTS_KES.standard;
}

export async function sendConfirmationForReservationPg(
  p: Pool,
  reservationId: number,
  options?: { force?: boolean }
): Promise<{ sent: boolean; ticketNumber?: string; error?: string }> {
  const reservation = await getReservationForConfirmPg(p, reservationId);
  if (!reservation || reservation.bookingStatus !== 'paid') {
    return { sent: false, error: 'Reservation not paid' };
  }
  if (reservation.confirmationSentAt && !options?.force) {
    return { sent: false, ticketNumber: reservation.ticketNumber ?? undefined, error: 'Already sent' };
  }
  if (!reservation.ticketNumber) {
    await renumberEventRegistrationTicketsPg(p, reservation.eventTitle, reservation.eventDate);
  }
  const refreshed = await getReservationForConfirmPg(p, reservationId);
  if (!refreshed?.ticketNumber) {
    return { sent: false, error: 'Could not assign ticket number' };
  }

  const payment = await getLatestPaymentForReservationPg(p, reservationId);
  const amount =
    payment?.amountKes && payment.amountKes > 0
      ? payment.amountKes
      : ticketAmount(refreshed.ticketType);
  const paymentDate = refreshed.paidAt || payment?.paidAt || new Date().toISOString();

  const result = await sendEventConfirmationEmail({
    firstName: refreshed.firstName,
    lastName: refreshed.lastName,
    email: refreshed.email,
    ticketType: refreshed.ticketType,
    ticketNumber: refreshed.ticketNumber,
    amountPaidKes: amount,
    paymentReference: paymentReferenceLabel(payment),
    paymentDate,
    lanyardCategory: refreshed.lanyardCategory,
    isVip: (refreshed.ticketType || '').toLowerCase() === 'vip',
  });

  if (result.sent) {
    try {
      await p.query(
        `UPDATE event_reservations SET confirmation_sent_at = now() WHERE id = $1`,
        [reservationId]
      );
    } catch (err) {
      if (!isUndefinedColumn(err)) throw err;
    }
  }

  return { sent: result.sent, ticketNumber: refreshed.ticketNumber, error: result.error };
}
