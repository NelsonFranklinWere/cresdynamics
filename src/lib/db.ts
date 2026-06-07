import { Pool } from 'pg';
import { EVENT_TICKET_AMOUNTS_KES } from '@/lib/event-tickets';
import {
  attachPaymentCheckoutDetailsLocal,
  createPaymentLocal,
  deleteEventReservationLocal,
  insertEventReservationLocal,
  isLocalEventStoreEnabled,
  updateEventReservationBookingStatusLocal,
} from '@/lib/local-event-store';
import {
  renumberConfirmedEventTicketsPg,
  sendConfirmationForReservationPg,
} from '@/lib/event-reservation-confirm';
import {
  createBlogPostLocal,
  deleteBlogPostLocal,
  getBlogPostByIdLocal,
  getBlogPostBySlugLocal,
  isLocalBlogStoreEnabled,
  listBlogPostsLocal,
  updateBlogPostLocal,
} from '@/lib/local-blog-store';
import type { BlogPostInput, BlogPostRow, BlogPostStatus } from '@/lib/blog-utils';

export type { BlogPostInput, BlogPostRow, BlogPostStatus };

let pool: Pool | null = null;

export function getPool(): Pool | null {
  const url = process.env.DATABASE_URL;
  if (!url) return null;
  if (!pool) {
    pool = new Pool({
      connectionString: url,
      max: 10,
      idleTimeoutMillis: 30_000,
      connectionTimeoutMillis: 10_000,
    });
  }
  return pool;
}

export type ContactLeadInput = {
  fullName: string;
  email: string;
  contactPhone: string;
  projectTitle: string;
  projectDetail: string;
  subscribe: boolean;
};

export async function insertContactLead(input: ContactLeadInput): Promise<number | null> {
  const p = getPool();
  if (!p) return null;
  const r = await p.query(
    `INSERT INTO contact_leads (full_name, email, contact_phone, project_title, project_detail, subscribe)
     VALUES ($1, $2, $3, $4, $5, $6)
     RETURNING id`,
    [
      input.fullName,
      input.email,
      input.contactPhone,
      input.projectTitle,
      input.projectDetail,
      input.subscribe,
    ]
  );
  return Number(r.rows[0].id);
}

export type ContactLeadRow = {
  id: number;
  fullName: string;
  email: string;
  contactPhone: string;
  projectTitle: string;
  projectDetail: string;
  subscribe: boolean;
  createdAt: string; // ISO
};

export async function listContactLeads(limit = 200): Promise<ContactLeadRow[]> {
  const p = getPool();
  if (!p) return [];
  const r = await p.query(
    `
    select id, full_name, email, contact_phone, project_title, project_detail, subscribe, created_at
    from contact_leads
    order by created_at desc
    limit $1
    `,
    [limit]
  );
  return r.rows.map((row) => ({
    id: Number(row.id),
    fullName: String(row.full_name),
    email: String(row.email),
    contactPhone: String(row.contact_phone),
    projectTitle: String(row.project_title),
    projectDetail: String(row.project_detail),
    subscribe: Boolean(row.subscribe),
    createdAt: new Date(row.created_at).toISOString(),
  }));
}

export type CareerApplicationInput = {
  fullName: string;
  email: string;
  phone: string;
  role: string;
  linkedin: string;
  portfolio: string;
  experienceSummary: string;
  whyCres: string;
  /** Original CV filename when a file was uploaded (stored in email; DB stores name only). */
  cvOriginalFilename?: string | null;
};

export async function insertCareerApplication(input: CareerApplicationInput): Promise<number | null> {
  const p = getPool();
  if (!p) return null;
  const r = await p.query(
    `INSERT INTO career_applications (full_name, email, phone, role, linkedin, portfolio, experience_summary, why_cres, cv_original_filename)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
     RETURNING id`,
    [
      input.fullName,
      input.email,
      input.phone || null,
      input.role,
      input.linkedin || null,
      input.portfolio || null,
      input.experienceSummary,
      input.whyCres,
      input.cvOriginalFilename ?? null,
    ]
  );
  return Number(r.rows[0].id);
}

export type CareerApplicationRow = {
  id: number;
  fullName: string;
  email: string;
  phone: string | null;
  role: string;
  linkedin: string | null;
  portfolio: string | null;
  experienceSummary: string;
  whyCres: string;
  cvOriginalFilename: string | null;
  createdAt: string; // ISO
};

export async function listCareerApplications(limit = 200): Promise<CareerApplicationRow[]> {
  const p = getPool();
  if (!p) return [];
  const r = await p.query(
    `
    select
      id,
      full_name,
      email,
      phone,
      role,
      linkedin,
      portfolio,
      experience_summary,
      why_cres,
      cv_original_filename,
      created_at
    from career_applications
    order by created_at desc
    limit $1
    `,
    [limit]
  );
  return r.rows.map((row) => ({
    id: Number(row.id),
    fullName: String(row.full_name),
    email: String(row.email),
    phone: row.phone ? String(row.phone) : null,
    role: String(row.role),
    linkedin: row.linkedin ? String(row.linkedin) : null,
    portfolio: row.portfolio ? String(row.portfolio) : null,
    experienceSummary: String(row.experience_summary),
    whyCres: String(row.why_cres),
    cvOriginalFilename: row.cv_original_filename ? String(row.cv_original_filename) : null,
    createdAt: new Date(row.created_at).toISOString(),
  }));
}

export type EventReservationInput = {
  eventTitle: string;
  eventDate: string;
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  company?: string;
  ticketType?: string;
  attendanceType?: string;
  lanyardCategory?: string;
  bookingStatus?: string;
};

export async function insertEventReservation(
  input: EventReservationInput
): Promise<number | null> {
  const p = getPool();
  if (p) {
    try {
      const r = await p.query(
        `
        INSERT INTO event_reservations
          (event_title, event_date, first_name, last_name, email, phone, company, ticket_type, attendance_type, lanyard_category, booking_status)
        VALUES
          ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
        ON CONFLICT (event_title, event_date, email) DO UPDATE SET
          last_name = EXCLUDED.last_name,
          phone = EXCLUDED.phone,
          company = EXCLUDED.company,
          ticket_type = EXCLUDED.ticket_type,
          attendance_type = EXCLUDED.attendance_type,
          lanyard_category = EXCLUDED.lanyard_category,
          booking_status = CASE
            WHEN event_reservations.booking_status = 'paid' THEN event_reservations.booking_status
            ELSE EXCLUDED.booking_status
          END,
          updated_at = now()
        RETURNING id
        `,
        [
          input.eventTitle,
          input.eventDate,
          input.firstName,
          input.lastName ?? null,
          input.email,
          input.phone ?? null,
          input.company ?? null,
          input.ticketType ?? null,
          input.attendanceType ?? null,
          input.lanyardCategory ?? null,
          input.bookingStatus ?? 'pending',
        ]
      );
      return Number(r.rows[0].id);
    } catch (err) {
      console.error('event_reservations postgres insert failed:', err);
      if (!isLocalEventStoreEnabled()) return null;
    }
  } else if (!isLocalEventStoreEnabled()) {
    return null;
  }

  try {
    return await insertEventReservationLocal(input);
  } catch (err) {
    console.error('event_reservations local store failed:', err);
    return null;
  }
}

export type EventReservationRow = {
  id: number;
  eventTitle: string;
  eventDate: string;
  firstName: string;
  lastName: string | null;
  email: string;
  phone: string | null;
  company: string | null;
  ticketType: string | null;
  attendanceType: string | null;
  lanyardCategory: string | null;
  bookingStatus: string;
  createdAt: string; // ISO
  updatedAt: string; // ISO
  paymentStatus: string | null; // pending | paid | failed etc. from linked payment
  paidAt: string | null;
  paidBy: string | null;
  paidSource: string | null;
  ticketNumber: string | null;
  confirmationSentAt: string | null;
};

export type UpdateEventReservationResult = {
  ok: boolean;
  bookingStatus?: string;
  paidAt?: string | null;
  paidBy?: string | null;
  ticketNumber?: string | null;
  confirmationEmailSent?: boolean;
};

function ticketAmountFromType(ticketType: string | null): number {
  if (!ticketType) return 0;
  return EVENT_TICKET_AMOUNTS_KES[ticketType.toLowerCase()] ?? 0;
}

function isPgUndefinedColumn(err: unknown): boolean {
  return (
    typeof err === 'object' &&
    err !== null &&
    'code' in err &&
    (err as { code: string }).code === '42703'
  );
}

function normalizeBookingStatus(status: string): 'pending' | 'paid' | 'cancelled' {
  const s = status.trim().toLowerCase();
  if (s === 'paid' || s === 'cancelled') return s;
  return 'pending';
}

async function syncReservationPaymentsForStatus(
  reservationId: number,
  bookingStatus: 'pending' | 'paid' | 'cancelled',
  markedByEmail: string | null,
  reservation?: {
    email: string;
    phone: string | null;
    ticketType: string | null;
    eventTitle: string;
    eventDate: string;
  }
): Promise<void> {
  const p = getPool();
  if (!p) return;

  if (bookingStatus === 'paid') {
    const metaMarked = {
      reservationId,
      markedBy: markedByEmail,
      markedAt: new Date().toISOString(),
      manualAdminMark: true,
    };
    const updated = await p.query(
      `
      UPDATE payments
      SET status = 'paid',
          payment_link_active = false,
          updated_at = now(),
          metadata_json = COALESCE(metadata_json, '{}'::jsonb) || $2::jsonb
      WHERE (
          (metadata_json->>'reservationId')::int = $1
          OR metadata_json->>'reservationId' = $1::text
        )
        AND status IS DISTINCT FROM 'paid'
      `,
      [reservationId, JSON.stringify(metaMarked)]
    );

    let linkedCount = updated.rowCount ?? 0;

    if (linkedCount === 0 && reservation) {
      const byEmail = await p.query(
        `
        UPDATE payments
        SET status = 'paid',
            payment_link_active = false,
            updated_at = now(),
            metadata_json = COALESCE(metadata_json, '{}'::jsonb) || $3::jsonb
        WHERE lower(email) = lower($2)
          AND event_title = $4
          AND event_date = $5
          AND purpose = 'event_ticket'
          AND status IS DISTINCT FROM 'paid'
        `,
        [
          reservationId,
          reservation.email,
          JSON.stringify(metaMarked),
          reservation.eventTitle,
          reservation.eventDate,
        ]
      );
      linkedCount = byEmail.rowCount ?? 0;
    }

    if (linkedCount === 0 && reservation) {
      await createPayment({
        source: 'manual',
        status: 'paid',
        email: reservation.email,
        phone: reservation.phone,
        amountKes: ticketAmountFromType(reservation.ticketType),
        currency: 'KES',
        purpose: 'event_ticket',
        eventTitle: reservation.eventTitle,
        eventDate: reservation.eventDate,
        metadata: metaMarked,
      });
    }
    return;
  }

  if (bookingStatus === 'pending') {
    await p.query(
      `
      UPDATE payments
      SET status = 'pending', updated_at = now()
      WHERE (metadata_json->>'reservationId')::int = $1
        AND source = 'manual'
        AND status = 'paid'
      `,
      [reservationId]
    );
  }
}

export async function updateEventReservationBookingStatus(
  id: number,
  bookingStatus: 'pending' | 'paid' | 'cancelled',
  options?: { markedByEmail?: string | null }
): Promise<UpdateEventReservationResult> {
  const markedBy = options?.markedByEmail?.trim() || null;

  if (isLocalEventStoreEnabled() && !getPool()) {
    const local = await updateEventReservationBookingStatusLocal(id, bookingStatus, markedBy);
    return {
      ok: local.ok,
      bookingStatus: local.bookingStatus,
      paidAt: local.paidAt,
      paidBy: local.paidBy,
      ticketNumber: local.ticketNumber,
      confirmationEmailSent: local.confirmationEmailSent,
    };
  }

  const p = getPool();
  if (!p) {
    if (isLocalEventStoreEnabled()) {
      return updateEventReservationBookingStatusLocal(id, bookingStatus, markedBy);
    }
    return { ok: false };
  }

  const existing = await p.query(
    `
    SELECT id, email, phone, ticket_type, event_title, event_date
    FROM event_reservations WHERE id = $1
    `,
    [id]
  );
  if (!existing.rows[0]) return { ok: false };

  const row = existing.rows[0];
  const wasPaid = normalizeBookingStatus(String(row.booking_status || 'pending')) === 'paid';
  const reservationCtx = {
    email: String(row.email),
    phone: row.phone ? String(row.phone) : null,
    ticketType: row.ticket_type ? String(row.ticket_type) : null,
    eventTitle: String(row.event_title),
    eventDate: String(row.event_date),
  };

  const paidSource =
    bookingStatus === 'paid'
      ? markedBy?.toLowerCase().includes('pesapal')
        ? 'pesapal'
        : 'manual'
      : null;

  let r;
  try {
    r = await p.query(
      `
      UPDATE event_reservations
      SET booking_status = $2,
          updated_at = now(),
          paid_at = CASE WHEN $2 = 'paid' THEN now() ELSE NULL END,
          paid_by = CASE WHEN $2 = 'paid' THEN $3 ELSE NULL END,
          paid_source = CASE WHEN $2 = 'paid' THEN $4 ELSE NULL END
      WHERE id = $1
      RETURNING booking_status, paid_at, paid_by
      `,
      [id, bookingStatus, markedBy, paidSource]
    );
  } catch (err) {
    if (!isPgUndefinedColumn(err)) throw err;
    r = await p.query(
      `
      UPDATE event_reservations
      SET booking_status = $2, updated_at = now()
      WHERE id = $1
      RETURNING booking_status, NULL::timestamptz AS paid_at, NULL::text AS paid_by
      `,
      [id, bookingStatus]
    );
  }

  if ((r.rowCount ?? 0) === 0) return { ok: false };

  try {
    await syncReservationPaymentsForStatus(id, bookingStatus, markedBy, reservationCtx);
  } catch (syncErr) {
    console.error('syncReservationPaymentsForStatus failed (reservation still updated):', syncErr);
  }

  if (bookingStatus === 'paid' || wasPaid) {
    try {
      await renumberConfirmedEventTicketsPg(p, reservationCtx.eventTitle, reservationCtx.eventDate);
    } catch (renumErr) {
      console.error('renumberConfirmedEventTickets failed:', renumErr);
    }
  }

  let confirmationEmailSent = false;
  let ticketNumber: string | null = null;
  if (bookingStatus === 'paid' && !wasPaid) {
    try {
      const confirm = await sendConfirmationForReservationPg(p, id);
      confirmationEmailSent = confirm.sent;
      ticketNumber = confirm.ticketNumber ?? null;
      if (!confirm.sent && confirm.error && confirm.error !== 'Already sent') {
        console.error('confirmation email not sent:', confirm.error);
      }
    } catch (confirmErr) {
      console.error('sendConfirmationForReservation failed:', confirmErr);
    }
  }

  if (bookingStatus === 'paid' && !ticketNumber) {
    try {
      const tn = await p.query(`SELECT ticket_number FROM event_reservations WHERE id = $1`, [id]);
      ticketNumber = tn.rows[0]?.ticket_number ? String(tn.rows[0].ticket_number) : null;
    } catch {
      /* column may not exist yet */
    }
  }

  const out = r.rows[0];
  return {
    ok: true,
    bookingStatus: normalizeBookingStatus(String(out.booking_status)),
    paidAt: out.paid_at ? new Date(out.paid_at).toISOString() : bookingStatus === 'paid' ? new Date().toISOString() : null,
    paidBy: out.paid_by ? String(out.paid_by) : markedBy,
    ticketNumber,
    confirmationEmailSent,
  };
}

export async function listEventReservations(limit = 200): Promise<EventReservationRow[]> {
  const p = getPool();
  if (!p) return [];

  const baseSelect = `
    select
      er.id,
      er.event_title,
      er.event_date,
      er.first_name,
      er.last_name,
      er.email,
      er.phone,
      er.company,
      er.ticket_type,
      er.attendance_type,
      er.lanyard_category,
      er.booking_status,
      er.created_at,
      er.updated_at,
      (
        select p.status
        from payments p
        where (
          (p.metadata_json->>'reservationId')::int = er.id
          OR p.metadata_json->>'reservationId' = er.id::text
        )
        order by p.created_at desc
        limit 1
      ) as payment_status
    from event_reservations er
    order by er.created_at desc
    limit $1
  `;

  const selectWithPaidCols = `
    select
      er.id,
      er.event_title,
      er.event_date,
      er.first_name,
      er.last_name,
      er.email,
      er.phone,
      er.company,
      er.ticket_type,
      er.attendance_type,
      er.lanyard_category,
      er.booking_status,
      er.created_at,
      er.updated_at,
      er.paid_at,
      er.paid_by,
      er.paid_source,
      er.ticket_number,
      er.confirmation_sent_at,
      (
        select p.status
        from payments p
        where (
          (p.metadata_json->>'reservationId')::int = er.id
          OR p.metadata_json->>'reservationId' = er.id::text
        )
        order by p.created_at desc
        limit 1
      ) as payment_status
    from event_reservations er
    order by er.created_at desc
    limit $1
  `;

  let r;
  try {
    r = await p.query(selectWithPaidCols, [limit]);
  } catch (err) {
    if (!isPgUndefinedColumn(err)) throw err;
    r = await p.query(baseSelect, [limit]);
  }

  return r.rows.map((row) => ({
    id: Number(row.id),
    eventTitle: String(row.event_title),
    eventDate: String(row.event_date),
    firstName: String(row.first_name),
    lastName: row.last_name ? String(row.last_name) : null,
    email: String(row.email),
    phone: row.phone ? String(row.phone) : null,
    company: row.company ? String(row.company) : null,
    ticketType: row.ticket_type ? String(row.ticket_type) : null,
    attendanceType: row.attendance_type ? String(row.attendance_type) : null,
    lanyardCategory: row.lanyard_category ? String(row.lanyard_category) : null,
    bookingStatus: normalizeBookingStatus(String(row.booking_status || 'pending')),
    createdAt: new Date(row.created_at).toISOString(),
    updatedAt: new Date(row.updated_at).toISOString(),
    paymentStatus: row.payment_status ? String(row.payment_status).toLowerCase() : null,
    paidAt: row.paid_at ? new Date(row.paid_at).toISOString() : null,
    paidBy: row.paid_by ? String(row.paid_by) : null,
    paidSource: row.paid_source ? String(row.paid_source) : null,
    ticketNumber: row.ticket_number ? String(row.ticket_number) : null,
    confirmationSentAt: row.confirmation_sent_at
      ? new Date(row.confirmation_sent_at).toISOString()
      : null,
  }));
}

export async function deleteEventReservation(id: number): Promise<{ ok: boolean; error?: string }> {
  if (isLocalEventStoreEnabled() && !getPool()) {
    return deleteEventReservationLocal(id);
  }

  const p = getPool();
  if (!p) {
    if (isLocalEventStoreEnabled()) return deleteEventReservationLocal(id);
    return { ok: false, error: 'Database unavailable' };
  }

  const existing = await p.query(
    `SELECT id, event_title, event_date, booking_status FROM event_reservations WHERE id = $1`,
    [id]
  );
  if (!existing.rows[0]) return { ok: false, error: 'Not found' };

  const eventTitle = String(existing.rows[0].event_title);
  const eventDate = String(existing.rows[0].event_date);
  const wasPaid = String(existing.rows[0].booking_status) === 'paid';

  await p.query(`DELETE FROM event_reservations WHERE id = $1`, [id]);

  if (wasPaid) {
    try {
      await renumberConfirmedEventTicketsPg(p, eventTitle, eventDate);
    } catch (err) {
      console.error('renumber after delete failed:', err);
    }
  }

  return { ok: true };
}

export type PaymentRow = {
  id: number;
  source: string;
  reference: string | null;
  providerTrackingId: string | null;
  merchantReference: string | null;
  paymentLinkToken: string | null;
  paymentLinkActive: boolean;
  email: string | null;
  phone: string | null;
  amountKes: number | null;
  currency: string;
  status: string;
  purpose: string | null;
  eventTitle: string | null;
  eventDate: string | null;
  metadata: Record<string, unknown> | null;
  updatedAt: string; // ISO
  createdAt: string; // ISO
};

export async function listPayments(limit = 200): Promise<PaymentRow[]> {
  const p = getPool();
  if (!p) return [];
  const r = await p.query(
    `
    select
      id,
      source,
      reference,
      provider_tracking_id,
      merchant_reference,
      payment_link_token,
      payment_link_active,
      email,
      phone,
      amount_kes,
      currency,
      status,
      purpose,
      event_title,
      event_date,
      metadata_json,
      updated_at,
      created_at
    from payments
    order by created_at desc
    limit $1
    `,
    [limit]
  );
  return r.rows.map((row) => ({
    id: Number(row.id),
    source: String(row.source),
    reference: row.reference ? String(row.reference) : null,
    providerTrackingId: row.provider_tracking_id ? String(row.provider_tracking_id) : null,
    merchantReference: row.merchant_reference ? String(row.merchant_reference) : null,
    paymentLinkToken: row.payment_link_token ? String(row.payment_link_token) : null,
    paymentLinkActive: Boolean(row.payment_link_active),
    email: row.email ? String(row.email) : null,
    phone: row.phone ? String(row.phone) : null,
    amountKes: row.amount_kes === null || row.amount_kes === undefined ? null : Number(row.amount_kes),
    currency: String(row.currency),
    status: String(row.status),
    purpose: row.purpose ? String(row.purpose) : null,
    eventTitle: row.event_title ? String(row.event_title) : null,
    eventDate: row.event_date ? String(row.event_date) : null,
    metadata: row.metadata_json && typeof row.metadata_json === 'object'
      ? (row.metadata_json as Record<string, unknown>)
      : null,
    updatedAt: new Date(row.updated_at).toISOString(),
    createdAt: new Date(row.created_at).toISOString(),
  }));
}

export type CreatePaymentInput = {
  source: string;
  reference?: string | null;
  providerTrackingId?: string | null;
  merchantReference?: string | null;
  paymentLinkToken?: string | null;
  paymentLinkActive?: boolean;
  email?: string | null;
  phone?: string | null;
  amountKes?: number | null;
  currency?: string;
  status?: string;
  purpose?: string | null;
  eventTitle?: string | null;
  eventDate?: string | null;
  metadata?: Record<string, unknown> | null;
};

export async function createPayment(input: CreatePaymentInput): Promise<number | null> {
  const p = getPool();
  if (p) {
    try {
      const r = await p.query(
        `
        INSERT INTO payments
          (source, reference, provider_tracking_id, merchant_reference, payment_link_token, payment_link_active, email, phone, amount_kes, currency, status, purpose, event_title, event_date, metadata_json, updated_at)
        VALUES
          ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, now())
        RETURNING id
        `,
        [
          input.source,
          input.reference ?? null,
          input.providerTrackingId ?? null,
          input.merchantReference ?? null,
          input.paymentLinkToken ?? null,
          input.paymentLinkActive ?? true,
          input.email ?? null,
          input.phone ?? null,
          input.amountKes ?? null,
          input.currency ?? 'KES',
          input.status ?? 'pending',
          input.purpose ?? null,
          input.eventTitle ?? null,
          input.eventDate ?? null,
          input.metadata ?? null,
        ]
      );
      return Number(r.rows[0].id);
    } catch (err) {
      console.error('payments postgres insert failed:', err);
      if (!isLocalEventStoreEnabled()) return null;
    }
  } else if (!isLocalEventStoreEnabled()) {
    return null;
  }

  try {
    return await createPaymentLocal(input);
  } catch (err) {
    console.error('payments local store failed:', err);
    return null;
  }
}

export type UpdatePaymentStatusInput = {
  status: string;
  providerTrackingId?: string | null;
  merchantReference?: string | null;
  reference?: string | null;
  metadata?: Record<string, unknown> | null;
};

export async function updatePaymentStatus(input: UpdatePaymentStatusInput): Promise<void> {
  const p = getPool();
  if (!p) return;
  await p.query(
    `
    UPDATE payments
    SET status = $1,
        payment_link_active = CASE WHEN $1 = 'paid' THEN false ELSE payment_link_active END,
        metadata_json = COALESCE($2, metadata_json),
        updated_at = now()
    WHERE
      ($3::text IS NOT NULL AND provider_tracking_id = $3)
      OR ($4::text IS NOT NULL AND merchant_reference = $4)
      OR ($5::text IS NOT NULL AND reference = $5)
    `,
    [
      input.status,
      input.metadata ?? null,
      input.providerTrackingId ?? null,
      input.merchantReference ?? null,
      input.reference ?? null,
    ]
  );
}

export async function getPaymentByLinkToken(token: string): Promise<PaymentRow | null> {
  const p = getPool();
  if (!p) return null;
  const r = await p.query(
    `
    select
      id,
      source,
      reference,
      provider_tracking_id,
      merchant_reference,
      payment_link_token,
      payment_link_active,
      email,
      phone,
      amount_kes,
      currency,
      status,
      purpose,
      event_title,
      event_date,
      metadata_json,
      updated_at,
      created_at
    from payments
    where payment_link_token = $1
    limit 1
    `,
    [token]
  );
  if (r.rows.length === 0) return null;
  const row = r.rows[0];
  return {
    id: Number(row.id),
    source: String(row.source),
    reference: row.reference ? String(row.reference) : null,
    providerTrackingId: row.provider_tracking_id ? String(row.provider_tracking_id) : null,
    merchantReference: row.merchant_reference ? String(row.merchant_reference) : null,
    paymentLinkToken: row.payment_link_token ? String(row.payment_link_token) : null,
    paymentLinkActive: Boolean(row.payment_link_active),
    email: row.email ? String(row.email) : null,
    phone: row.phone ? String(row.phone) : null,
    amountKes: row.amount_kes === null || row.amount_kes === undefined ? null : Number(row.amount_kes),
    currency: String(row.currency),
    status: String(row.status),
    purpose: row.purpose ? String(row.purpose) : null,
    eventTitle: row.event_title ? String(row.event_title) : null,
    eventDate: row.event_date ? String(row.event_date) : null,
    metadata: row.metadata_json && typeof row.metadata_json === 'object'
      ? (row.metadata_json as Record<string, unknown>)
      : null,
    updatedAt: new Date(row.updated_at).toISOString(),
    createdAt: new Date(row.created_at).toISOString(),
  };
}

export type AttachCheckoutDetailsInput = {
  paymentId: number;
  email: string;
  phone: string;
  merchantReference: string;
  providerTrackingId?: string | null;
  metadata?: Record<string, unknown> | null;
};

export async function attachPaymentCheckoutDetails(input: AttachCheckoutDetailsInput): Promise<void> {
  const p = getPool();
  if (p) {
    try {
      await p.query(
        `
        update payments
        set email = $2,
            phone = $3,
            merchant_reference = $4,
            provider_tracking_id = $5,
            status = 'pending',
            metadata_json = COALESCE($6, metadata_json),
            updated_at = now()
        where id = $1
        `,
        [
          input.paymentId,
          input.email,
          input.phone,
          input.merchantReference,
          input.providerTrackingId ?? null,
          input.metadata ?? null,
        ]
      );
      return;
    } catch (err) {
      console.error('payments postgres update failed:', err);
      if (!isLocalEventStoreEnabled()) return;
    }
  } else if (!isLocalEventStoreEnabled()) {
    return;
  }

  try {
    await attachPaymentCheckoutDetailsLocal(input);
  } catch (err) {
    console.error('payments local store update failed:', err);
  }
}

export async function getPaymentByReferences(
  providerTrackingId?: string | null,
  merchantReference?: string | null,
  reference?: string | null
): Promise<PaymentRow | null> {
  const p = getPool();
  if (!p) return null;
  const r = await p.query(
    `
    select
      id,
      source,
      reference,
      provider_tracking_id,
      merchant_reference,
      payment_link_token,
      payment_link_active,
      email,
      phone,
      amount_kes,
      currency,
      status,
      purpose,
      event_title,
      event_date,
      metadata_json,
      updated_at,
      created_at
    from payments
    where
      ($1::text is not null and provider_tracking_id = $1)
      or ($2::text is not null and merchant_reference = $2)
      or ($3::text is not null and reference = $3)
    order by created_at desc
    limit 1
    `,
    [providerTrackingId ?? null, merchantReference ?? null, reference ?? null]
  );
  if (r.rows.length === 0) return null;
  const row = r.rows[0];
  return {
    id: Number(row.id),
    source: String(row.source),
    reference: row.reference ? String(row.reference) : null,
    providerTrackingId: row.provider_tracking_id ? String(row.provider_tracking_id) : null,
    merchantReference: row.merchant_reference ? String(row.merchant_reference) : null,
    paymentLinkToken: row.payment_link_token ? String(row.payment_link_token) : null,
    paymentLinkActive: Boolean(row.payment_link_active),
    email: row.email ? String(row.email) : null,
    phone: row.phone ? String(row.phone) : null,
    amountKes: row.amount_kes === null || row.amount_kes === undefined ? null : Number(row.amount_kes),
    currency: String(row.currency),
    status: String(row.status),
    purpose: row.purpose ? String(row.purpose) : null,
    eventTitle: row.event_title ? String(row.event_title) : null,
    eventDate: row.event_date ? String(row.event_date) : null,
    metadata:
      row.metadata_json && typeof row.metadata_json === 'object'
        ? (row.metadata_json as Record<string, unknown>)
        : null,
    updatedAt: new Date(row.updated_at).toISOString(),
    createdAt: new Date(row.created_at).toISOString(),
  };
}

export async function updatePaymentMetadataById(
  paymentId: number,
  metadata: Record<string, unknown>
): Promise<void> {
  const p = getPool();
  if (!p) return;
  await p.query(
    `
    update payments
    set metadata_json = $2,
        updated_at = now()
    where id = $1
    `,
    [paymentId, metadata]
  );
}

export type ChatLeadSessionInput = {
  sessionPublicId: string;
  visitorName: string;
  phone: string;
  email: string | null;
  pageUrl: string | null;
  userAgent: string | null;
};

export async function upsertChatSessionFromLead(input: ChatLeadSessionInput): Promise<void> {
  const p = getPool();
  if (!p) return;
  await p.query(
    `INSERT INTO chat_sessions (session_public_id, visitor_name, phone, email, page_url, user_agent, last_message_at)
     VALUES ($1, $2, $3, $4, $5, $6, now())
     ON CONFLICT (session_public_id) DO UPDATE SET
       visitor_name = EXCLUDED.visitor_name,
       phone = EXCLUDED.phone,
       email = EXCLUDED.email,
       page_url = EXCLUDED.page_url,
       user_agent = EXCLUDED.user_agent,
       last_message_at = now()`,
    [
      input.sessionPublicId,
      input.visitorName,
      input.phone,
      input.email,
      input.pageUrl,
      input.userAgent,
    ]
  );
}

export async function ensureChatSession(sessionPublicId: string): Promise<void> {
  const p = getPool();
  if (!p) return;
  await p.query(
    `INSERT INTO chat_sessions (session_public_id) VALUES ($1)
     ON CONFLICT (session_public_id) DO NOTHING`,
    [sessionPublicId]
  );
}

export async function insertChatMessage(
  sessionPublicId: string,
  role: 'user' | 'assistant',
  content: string
): Promise<void> {
  const p = getPool();
  if (!p) return;
  await p.query(`INSERT INTO chat_messages (session_public_id, role, content) VALUES ($1, $2, $3)`, [
    sessionPublicId,
    role,
    content,
  ]);
  await p.query(`UPDATE chat_sessions SET last_message_at = now() WHERE session_public_id = $1`, [
    sessionPublicId,
  ]);
}

/** First assistant greeting once per session (avoids duplicates if lead form is resubmitted). */
export async function insertFrankGreetingIfEmpty(
  sessionPublicId: string,
  greeting: string
): Promise<void> {
  const p = getPool();
  if (!p) return;
  await p.query(
    `INSERT INTO chat_messages (session_public_id, role, content)
     SELECT $1, 'assistant', $2
     WHERE NOT EXISTS (SELECT 1 FROM chat_messages WHERE session_public_id = $1)`,
    [sessionPublicId, greeting]
  );
  await p.query(`UPDATE chat_sessions SET last_message_at = now() WHERE session_public_id = $1`, [
    sessionPublicId,
  ]);
}

export type SpeakerApplicationInput = {
  fullName: string;
  email: string;
  phone: string;
  company?: string | null;
  topic: string;
  linkedin?: string | null;
  audienceWhy: string;
  bioPdfFilename: string;
  imageFilename: string;
};

export async function insertSpeakerApplication(input: SpeakerApplicationInput): Promise<number | null> {
  const p = getPool();
  if (!p) return null;
  const r = await p.query(
    `
    INSERT INTO speaker_applications
      (full_name, email, phone, company, topic, linkedin, audience_why, bio_pdf_filename, image_filename)
    VALUES
      ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    RETURNING id
    `,
    [
      input.fullName,
      input.email,
      input.phone,
      input.company ?? null,
      input.topic,
      input.linkedin ?? null,
      input.audienceWhy,
      input.bioPdfFilename,
      input.imageFilename,
    ]
  );
  return Number(r.rows[0].id);
}

export type SpeakerApplicationRow = {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  company: string | null;
  topic: string;
  linkedin: string | null;
  audienceWhy: string;
  bioPdfFilename: string;
  imageFilename: string;
  createdAt: string;
};

export async function listSpeakerApplications(limit = 200): Promise<SpeakerApplicationRow[]> {
  const p = getPool();
  if (!p) return [];
  const r = await p.query(
    `
    select
      id,
      full_name,
      email,
      phone,
      company,
      topic,
      linkedin,
      audience_why,
      bio_pdf_filename,
      image_filename,
      created_at
    from speaker_applications
    order by created_at desc
    limit $1
    `,
    [limit]
  );
  return r.rows.map((row) => ({
    id: Number(row.id),
    fullName: String(row.full_name),
    email: String(row.email),
    phone: String(row.phone),
    company: row.company ? String(row.company) : null,
    topic: String(row.topic),
    linkedin: row.linkedin ? String(row.linkedin) : null,
    audienceWhy: String(row.audience_why),
    bioPdfFilename: String(row.bio_pdf_filename),
    imageFilename: String(row.image_filename),
    createdAt: new Date(row.created_at).toISOString(),
  }));
}

/** Sponsor package tier for slot counting when status is Confirmed */
export type SponsorPackageTier =
  | 'gold'
  | 'silver'
  | 'community'
  | 'community_inkind'
  | 'custom';

export type SponsorApplicationInput = {
  companyName: string;
  contactFullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  companyWebsite?: string | null;
  packageSelected: string;
  packageTier: SponsorPackageTier;
  whySponsor: string;
  howHeard?: string | null;
};

export async function hasRecentSponsorApplicationByEmail(
  email: string,
  hours = 24
): Promise<boolean> {
  const p = getPool();
  if (!p) return false;
  const r = await p.query(
    `
    select 1 from sponsors_applications
    where lower(email) = lower($1)
      and created_at > now() - ($2::numeric * interval '1 hour')
    limit 1
    `,
    [email.trim(), hours]
  );
  return r.rows.length > 0;
}

export async function insertSponsorApplication(input: SponsorApplicationInput): Promise<number | null> {
  const p = getPool();
  if (!p) return null;
  const r = await p.query(
    `
    INSERT INTO sponsors_applications
      (company_name, contact_full_name, job_title, email, phone, company_website,
       package_selected, package_tier, why_sponsor, how_heard)
    VALUES
      ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    RETURNING id
    `,
    [
      input.companyName,
      input.contactFullName,
      input.jobTitle,
      input.email.trim(),
      input.phone,
      input.companyWebsite ?? null,
      input.packageSelected,
      input.packageTier,
      input.whySponsor,
      input.howHeard ?? null,
    ]
  );
  return Number(r.rows[0].id);
}

export type SponsorApplicationRow = {
  id: number;
  companyName: string;
  contactFullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  companyWebsite: string | null;
  packageSelected: string;
  packageTier: SponsorPackageTier;
  whySponsor: string;
  howHeard: string | null;
  status: string;
  notes: string | null;
  createdAt: string;
};

const SPONSOR_STATUSES = [
  'New',
  'Contacted',
  'In Discussion',
  'Confirmed',
  'Declined',
] as const;

export function isValidSponsorStatus(s: string): boolean {
  return SPONSOR_STATUSES.includes(s as (typeof SPONSOR_STATUSES)[number]);
}

export async function listSponsorApplications(limit = 500): Promise<SponsorApplicationRow[]> {
  const p = getPool();
  if (!p) return [];
  const r = await p.query(
    `
    select
      id,
      company_name,
      contact_full_name,
      job_title,
      email,
      phone,
      company_website,
      package_selected,
      package_tier,
      why_sponsor,
      how_heard,
      status,
      notes,
      created_at
    from sponsors_applications
    order by created_at desc
    limit $1
    `,
    [limit]
  );
  return r.rows.map((row) => ({
    id: Number(row.id),
    companyName: String(row.company_name),
    contactFullName: String(row.contact_full_name),
    jobTitle: String(row.job_title),
    email: String(row.email),
    phone: String(row.phone),
    companyWebsite: row.company_website ? String(row.company_website) : null,
    packageSelected: String(row.package_selected),
    packageTier: String(row.package_tier) as SponsorPackageTier,
    whySponsor: String(row.why_sponsor),
    howHeard: row.how_heard ? String(row.how_heard) : null,
    status: String(row.status),
    notes: row.notes ? String(row.notes) : null,
    createdAt: new Date(row.created_at).toISOString(),
  }));
}

export type SponsorSlotSummary = {
  totalApplications: number;
  goldRemaining: number;
  silverRemaining: number;
  communityRemaining: number;
};

export async function getSponsorSlotSummary(): Promise<SponsorSlotSummary | null> {
  const p = getPool();
  if (!p) return null;
  const r = await p.query(`
    select
      (select count(*)::int from sponsors_applications) as total,
      (select count(*)::int from sponsors_applications where status = 'Confirmed' and package_tier = 'gold') as gold_c,
      (select count(*)::int from sponsors_applications where status = 'Confirmed' and package_tier = 'silver') as silver_c,
      (select count(*)::int from sponsors_applications where status = 'Confirmed' and package_tier in ('community', 'community_inkind')) as comm_c
  `);
  const row = r.rows[0];
  const goldC = Number(row.gold_c) || 0;
  const silverC = Number(row.silver_c) || 0;
  const commC = Number(row.comm_c) || 0;
  return {
    totalApplications: Number(row.total) || 0,
    goldRemaining: Math.max(0, 1 - goldC),
    silverRemaining: Math.max(0, 3 - silverC),
    communityRemaining: Math.max(0, 10 - commC),
  };
}

export async function updateSponsorApplicationFields(
  id: number,
  patch: { status?: string; notes?: string | null }
): Promise<boolean> {
  const p = getPool();
  if (!p) return false;
  const updates: string[] = [];
  const vals: unknown[] = [];
  let i = 1;
  if (patch.status !== undefined) {
    if (!isValidSponsorStatus(patch.status)) return false;
    updates.push(`status = $${i++}`);
    vals.push(patch.status);
  }
  if (patch.notes !== undefined) {
    updates.push(`notes = $${i++}`);
    vals.push(patch.notes);
  }
  if (updates.length === 0) return false;
  vals.push(id);
  const r = await p.query(
    `update sponsors_applications set ${updates.join(', ')} where id = $${i}`,
    vals
  );
  return (r.rowCount ?? 0) > 0;
}

function mapBlogPostRow(row: Record<string, unknown>): BlogPostRow {
  return {
    id: Number(row.id),
    slug: String(row.slug),
    title: String(row.title),
    excerpt: row.excerpt != null ? String(row.excerpt) : null,
    category: row.category != null ? String(row.category) : null,
    body: String(row.body),
    status: String(row.status) as BlogPostStatus,
    metaTitle: row.meta_title != null ? String(row.meta_title) : null,
    metaDescription: row.meta_description != null ? String(row.meta_description) : null,
    author: String(row.author ?? 'CRES Dynamics'),
    publishedAt: row.published_at ? new Date(String(row.published_at)).toISOString() : null,
    createdAt: new Date(String(row.created_at)).toISOString(),
    updatedAt: new Date(String(row.updated_at)).toISOString(),
  };
}

export async function listBlogPosts(includeDrafts = false): Promise<BlogPostRow[]> {
  const p = getPool();
  if (!p) {
    if (isLocalBlogStoreEnabled()) return listBlogPostsLocal(includeDrafts);
    return [];
  }
  try {
    const r = await p.query(
      `
    SELECT id, slug, title, excerpt, category, body, status, meta_title, meta_description, author,
           published_at, created_at, updated_at
    FROM blog_posts
    ${includeDrafts ? '' : "WHERE status = 'published'"}
    ORDER BY COALESCE(published_at, created_at) DESC
    `
    );
    return r.rows.map(mapBlogPostRow);
  } catch (e: unknown) {
    if (e && typeof e === 'object' && 'code' in e && (e as { code: string }).code === '42P01') {
      return [];
    }
    throw e;
  }
}

export async function getBlogPostBySlug(slug: string, includeDrafts = false): Promise<BlogPostRow | null> {
  const p = getPool();
  if (!p) {
    if (isLocalBlogStoreEnabled()) {
      const post = await getBlogPostBySlugLocal(slug);
      if (!post) return null;
      if (!includeDrafts && post.status !== 'published') return null;
      return post;
    }
    return null;
  }
  const r = await p.query(
    `
    SELECT id, slug, title, excerpt, category, body, status, meta_title, meta_description, author,
           published_at, created_at, updated_at
    FROM blog_posts
    WHERE slug = $1 ${includeDrafts ? '' : "AND status = 'published'"}
  `,
    [slug]
  );
  if (!r.rows[0]) return null;
  return mapBlogPostRow(r.rows[0]);
}

export async function getBlogPostById(id: number): Promise<BlogPostRow | null> {
  const p = getPool();
  if (!p) {
    if (isLocalBlogStoreEnabled()) return getBlogPostByIdLocal(id);
    return null;
  }
  const r = await p.query(
    `
    SELECT id, slug, title, excerpt, category, body, status, meta_title, meta_description, author,
           published_at, created_at, updated_at
    FROM blog_posts
    WHERE id = $1
  `,
    [id]
  );
  if (!r.rows[0]) return null;
  return mapBlogPostRow(r.rows[0]);
}

export async function createBlogPost(input: BlogPostInput): Promise<number | null> {
  const p = getPool();
  if (!p) {
    if (isLocalBlogStoreEnabled()) return createBlogPostLocal(input);
    return null;
  }
  const publishedAt =
    input.status === 'published' ? input.publishedAt ?? new Date().toISOString() : input.publishedAt ?? null;
  try {
    const r = await p.query(
      `
      INSERT INTO blog_posts (
        slug, title, excerpt, category, body, status, meta_title, meta_description, author, published_at
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      RETURNING id
      `,
      [
        input.slug,
        input.title,
        input.excerpt ?? null,
        input.category ?? null,
        input.body,
        input.status,
        input.metaTitle ?? null,
        input.metaDescription ?? null,
        input.author ?? 'CRES Dynamics',
        publishedAt,
      ]
    );
    return Number(r.rows[0].id);
  } catch (e: unknown) {
    if (e && typeof e === 'object' && 'code' in e && (e as { code: string }).code === '23505') {
      return null;
    }
    throw e;
  }
}

export async function updateBlogPost(id: number, input: Partial<BlogPostInput>): Promise<boolean> {
  const p = getPool();
  if (!p) {
    if (isLocalBlogStoreEnabled()) return updateBlogPostLocal(id, input);
    return false;
  }
  const current = await getBlogPostById(id);
  if (!current) return false;
  const nextStatus = input.status ?? current.status;
  const publishedAt =
    nextStatus === 'published'
      ? input.publishedAt ?? current.publishedAt ?? new Date().toISOString()
      : input.publishedAt === null
        ? null
        : input.publishedAt ?? current.publishedAt;

  const r = await p.query(
    `
    UPDATE blog_posts SET
      slug = $2,
      title = $3,
      excerpt = $4,
      category = $5,
      body = $6,
      status = $7,
      meta_title = $8,
      meta_description = $9,
      author = $10,
      published_at = $11,
      updated_at = now()
    WHERE id = $1
    `,
    [
      id,
      input.slug ?? current.slug,
      input.title ?? current.title,
      input.excerpt !== undefined ? input.excerpt : current.excerpt,
      input.category !== undefined ? input.category : current.category,
      input.body ?? current.body,
      nextStatus,
      input.metaTitle !== undefined ? input.metaTitle : current.metaTitle,
      input.metaDescription !== undefined ? input.metaDescription : current.metaDescription,
      input.author ?? current.author,
      publishedAt,
    ]
  );
  return (r.rowCount ?? 0) > 0;
}

export async function deleteBlogPost(id: number): Promise<boolean> {
  const p = getPool();
  if (!p) {
    if (isLocalBlogStoreEnabled()) return deleteBlogPostLocal(id);
    return false;
  }
  const r = await p.query(`DELETE FROM blog_posts WHERE id = $1`, [id]);
  return (r.rowCount ?? 0) > 0;
}

export type ManagementDashboardStats = {
  generatedAt: string;
  events: {
    total: number;
    paid: number;
    pending: number;
    cancelled: number;
    last7Days: number;
    revenueCollectedKes: number;
    revenueExpectedKes: number;
  };
  messages: { total: number; subscribed: number; last7Days: number };
  applications: { total: number; last7Days: number };
  speakers: { total: number; last7Days: number };
  sponsors: {
    total: number;
    confirmed: number;
    inPipeline: number;
    newLeads: number;
    goldRemaining: number;
    silverRemaining: number;
    communityRemaining: number;
  };
  payments: { total: number; paid: number; pending: number; amountPaidKes: number };
  blog: { total: number; published: number; drafts: number };
};

export async function getManagementDashboardStatsFromDb(): Promise<ManagementDashboardStats | null> {
  const p = getPool();
  if (!p) return null;

  let blogTotal = 0;
  let blogPublished = 0;
  let blogDrafts = 0;
  try {
    const blogR = await p.query(`
      SELECT
        count(*)::int AS total,
        count(*) FILTER (WHERE status = 'published')::int AS published,
        count(*) FILTER (WHERE status = 'draft')::int AS drafts
      FROM blog_posts
    `);
    blogTotal = Number(blogR.rows[0]?.total) || 0;
    blogPublished = Number(blogR.rows[0]?.published) || 0;
    blogDrafts = Number(blogR.rows[0]?.drafts) || 0;
  } catch {
    /* blog_posts table may not exist on older databases */
  }

  const r = await p.query(`
    SELECT
      (SELECT count(*)::int FROM event_reservations) AS events_total,
      (SELECT count(*)::int FROM event_reservations WHERE booking_status = 'paid') AS events_paid,
      (SELECT count(*)::int FROM event_reservations WHERE booking_status NOT IN ('paid', 'cancelled')) AS events_pending,
      (SELECT count(*)::int FROM event_reservations WHERE booking_status = 'cancelled') AS events_cancelled,
      (SELECT count(*)::int FROM event_reservations WHERE created_at >= now() - interval '7 days') AS events_last7,
      (SELECT coalesce(sum(
        CASE lower(coalesce(ticket_type, ''))
          WHEN 'economy' THEN 1500
          WHEN 'standard' THEN 2500
          WHEN 'vip' THEN 3500
          ELSE 0
        END
      ), 0)::int FROM event_reservations WHERE booking_status = 'paid') AS events_revenue_collected,
      (SELECT coalesce(sum(
        CASE lower(coalesce(ticket_type, ''))
          WHEN 'economy' THEN 1500
          WHEN 'standard' THEN 2500
          WHEN 'vip' THEN 3500
          ELSE 0
        END
      ), 0)::int FROM event_reservations WHERE booking_status != 'cancelled') AS events_revenue_expected,
      (SELECT count(*)::int FROM contact_leads) AS messages_total,
      (SELECT count(*)::int FROM contact_leads WHERE subscribe = true) AS messages_subscribed,
      (SELECT count(*)::int FROM contact_leads WHERE created_at >= now() - interval '7 days') AS messages_last7,
      (SELECT count(*)::int FROM career_applications) AS applications_total,
      (SELECT count(*)::int FROM career_applications WHERE created_at >= now() - interval '7 days') AS applications_last7,
      (SELECT count(*)::int FROM speaker_applications) AS speakers_total,
      (SELECT count(*)::int FROM speaker_applications WHERE created_at >= now() - interval '7 days') AS speakers_last7,
      (SELECT count(*)::int FROM sponsors_applications) AS sponsors_total,
      (SELECT count(*)::int FROM sponsors_applications WHERE status = 'Confirmed') AS sponsors_confirmed,
      (SELECT count(*)::int FROM sponsors_applications WHERE status IN ('Contacted', 'In Discussion')) AS sponsors_pipeline,
      (SELECT count(*)::int FROM sponsors_applications WHERE status = 'New') AS sponsors_new,
      (SELECT count(*)::int FROM payments) AS payments_total,
      (SELECT count(*)::int FROM payments WHERE status = 'paid') AS payments_paid,
      (SELECT count(*)::int FROM payments WHERE status = 'pending') AS payments_pending,
      (SELECT coalesce(sum(amount_kes), 0)::int FROM payments WHERE status = 'paid') AS payments_amount_paid
  `);

  const slots = await getSponsorSlotSummary();
  const row = r.rows[0];

  return {
    generatedAt: new Date().toISOString(),
    events: {
      total: Number(row.events_total) || 0,
      paid: Number(row.events_paid) || 0,
      pending: Number(row.events_pending) || 0,
      cancelled: Number(row.events_cancelled) || 0,
      last7Days: Number(row.events_last7) || 0,
      revenueCollectedKes: Number(row.events_revenue_collected) || 0,
      revenueExpectedKes: Number(row.events_revenue_expected) || 0,
    },
    messages: {
      total: Number(row.messages_total) || 0,
      subscribed: Number(row.messages_subscribed) || 0,
      last7Days: Number(row.messages_last7) || 0,
    },
    applications: {
      total: Number(row.applications_total) || 0,
      last7Days: Number(row.applications_last7) || 0,
    },
    speakers: {
      total: Number(row.speakers_total) || 0,
      last7Days: Number(row.speakers_last7) || 0,
    },
    sponsors: {
      total: Number(row.sponsors_total) || 0,
      confirmed: Number(row.sponsors_confirmed) || 0,
      inPipeline: Number(row.sponsors_pipeline) || 0,
      newLeads: Number(row.sponsors_new) || 0,
      goldRemaining: slots?.goldRemaining ?? 1,
      silverRemaining: slots?.silverRemaining ?? 3,
      communityRemaining: slots?.communityRemaining ?? 10,
    },
    payments: {
      total: Number(row.payments_total) || 0,
      paid: Number(row.payments_paid) || 0,
      pending: Number(row.payments_pending) || 0,
      amountPaidKes: Number(row.payments_amount_paid) || 0,
    },
    blog: {
      total: blogTotal,
      published: blogPublished,
      drafts: blogDrafts,
    },
  };
}
