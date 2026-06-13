import { FUTURE_AI_EVENT, FUTURE_AI_EVENT_SLUG } from '@/lib/future-ai-event';
import { buildEventRescheduleEmail } from '@/lib/event-reschedule-email';
import { getPool } from '@/lib/db';
import { hasResendConfigured, sendResendEmail } from '@/lib/resend-fallback';

export type RescheduleAttendee = {
  id: number;
  firstName: string;
  lastName: string | null;
  email: string;
  phone: string | null;
  ticketType: string | null;
  bookingStatus: string;
};

export type RescheduleSendResult = {
  email: string;
  firstName: string;
  reservationId: number;
  sent: boolean;
  error?: string;
  skipped?: boolean;
  skipReason?: string;
};

export type RescheduleNotifyReport = {
  eventTitle: string;
  totalEligible: number;
  attempted: number;
  sent: number;
  failed: number;
  skipped: number;
  results: RescheduleSendResult[];
  eventRecordUpdated: boolean;
};

const COMMUNICATION_TYPE = 'reschedule_july_2026';

export async function listFutureAiAttendeesForReschedule(): Promise<RescheduleAttendee[]> {
  const p = getPool();
  if (!p) return [];

  const r = await p.query(
    `
    SELECT DISTINCT ON (lower(email))
      id,
      first_name,
      last_name,
      email,
      phone,
      ticket_type,
      booking_status
    FROM event_reservations
    WHERE event_title = $1
      AND booking_status IN ('pending', 'paid')
    ORDER BY lower(email), id DESC
    `,
    [FUTURE_AI_EVENT.title]
  );

  return r.rows.map((row) => ({
    id: Number(row.id),
    firstName: String(row.first_name),
    lastName: row.last_name ? String(row.last_name) : null,
    email: String(row.email),
    phone: row.phone ? String(row.phone) : null,
    ticketType: row.ticket_type ? String(row.ticket_type) : null,
    bookingStatus: String(row.booking_status),
  }));
}

export async function upsertFutureAiEventRecord(): Promise<boolean> {
  const p = getPool();
  if (!p) return false;

  await p.query(
    `
    INSERT INTO events (slug, title, date_label, date_short, status, note, venue)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    ON CONFLICT (slug) DO UPDATE SET
      date_label = EXCLUDED.date_label,
      date_short = EXCLUDED.date_short,
      status = EXCLUDED.status,
      note = EXCLUDED.note,
      venue = EXCLUDED.venue,
      updated_at = now()
    `,
    [
      FUTURE_AI_EVENT_SLUG,
      FUTURE_AI_EVENT.title,
      FUTURE_AI_EVENT.dateLabel,
      FUTURE_AI_EVENT.dateShort,
      FUTURE_AI_EVENT.status,
      FUTURE_AI_EVENT.rescheduleNote,
      FUTURE_AI_EVENT.venue,
    ]
  );
  return true;
}

async function alreadySentRescheduleEmail(p: NonNullable<ReturnType<typeof getPool>>, email: string) {
  const r = await p.query(
    `
    SELECT 1 FROM event_communication_log
    WHERE event_slug = $1
      AND communication_type = $2
      AND lower(email) = lower($3)
      AND success = true
    LIMIT 1
    `,
    [FUTURE_AI_EVENT_SLUG, COMMUNICATION_TYPE, email]
  );
  return (r.rowCount ?? 0) > 0;
}

async function logCommunication(
  p: NonNullable<ReturnType<typeof getPool>>,
  row: {
    reservationId: number;
    email: string;
    firstName: string;
    success: boolean;
    error?: string;
  }
) {
  await p.query(
    `
    INSERT INTO event_communication_log
      (event_slug, communication_type, reservation_id, email, first_name, success, error_message)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    `,
    [
      FUTURE_AI_EVENT_SLUG,
      COMMUNICATION_TYPE,
      row.reservationId,
      row.email,
      row.firstName,
      row.success,
      row.error ?? null,
    ]
  );

  if (row.success) {
    try {
      await p.query(
        `UPDATE event_reservations SET reschedule_email_sent_at = now() WHERE id = $1`,
        [row.reservationId]
      );
    } catch {
      /* column may not exist on older DBs until migration */
    }
  }
}

export async function sendFutureAiRescheduleUpdates(options?: {
  dryRun?: boolean;
  skipAlreadySent?: boolean;
  resend?: boolean;
}): Promise<RescheduleNotifyReport> {
  const dryRun = options?.dryRun ?? false;
  const skipAlreadySent = options?.resend ? false : (options?.skipAlreadySent ?? true);

  const attendees = await listFutureAiAttendeesForReschedule();
  const results: RescheduleSendResult[] = [];
  let sent = 0;
  let failed = 0;
  let skipped = 0;

  if (!hasResendConfigured() && !dryRun) {
    return {
      eventTitle: FUTURE_AI_EVENT.title,
      totalEligible: attendees.length,
      attempted: 0,
      sent: 0,
      failed: attendees.length,
      skipped: 0,
      results: attendees.map((a) => ({
        email: a.email,
        firstName: a.firstName,
        reservationId: a.id,
        sent: false,
        error: 'Resend API keys not configured',
      })),
      eventRecordUpdated: false,
    };
  }

  const p = getPool();
  let eventRecordUpdated = false;
  if (!dryRun && p) {
    eventRecordUpdated = await upsertFutureAiEventRecord();
  }

  const senderEmail = process.env.SENDER_EMAIL || 'onboarding@resend.dev';

  for (const attendee of attendees) {
    if (p && skipAlreadySent && (await alreadySentRescheduleEmail(p, attendee.email))) {
      skipped += 1;
      results.push({
        email: attendee.email,
        firstName: attendee.firstName,
        reservationId: attendee.id,
        sent: false,
        skipped: true,
        skipReason: 'Already sent successfully',
      });
      continue;
    }

    if (dryRun) {
      results.push({
        email: attendee.email,
        firstName: attendee.firstName,
        reservationId: attendee.id,
        sent: true,
        skipped: false,
      });
      sent += 1;
      continue;
    }

    const { subject, html, text } = buildEventRescheduleEmail(attendee.firstName);
    const result = await sendResendEmail({
      from: `Nelson Were <${senderEmail}>`,
      to: [attendee.email],
      replyTo: FUTURE_AI_EVENT.contactEmail,
      subject,
      html,
      text,
    });

    if (p) {
      await logCommunication(p, {
        reservationId: attendee.id,
        email: attendee.email,
        firstName: attendee.firstName,
        success: result.sent,
        error: result.error,
      });
    }

    if (result.sent) {
      sent += 1;
    } else {
      failed += 1;
    }

    results.push({
      email: attendee.email,
      firstName: attendee.firstName,
      reservationId: attendee.id,
      sent: result.sent,
      error: result.error,
    });
  }

  return {
    eventTitle: FUTURE_AI_EVENT.title,
    totalEligible: attendees.length,
    attempted: attendees.length - skipped,
    sent,
    failed,
    skipped,
    results,
    eventRecordUpdated,
  };
}

export async function getRescheduleNotifySummary(): Promise<{
  eligible: number;
  sent: number;
  failed: number;
  lastRunAt: string | null;
}> {
  const p = getPool();
  const eligible = (await listFutureAiAttendeesForReschedule()).length;
  if (!p) return { eligible, sent: 0, failed: 0, lastRunAt: null };

  const r = await p.query(
    `
    SELECT
      count(*) FILTER (WHERE success = true)::int AS sent,
      count(*) FILTER (WHERE success = false)::int AS failed,
      max(sent_at) AS last_run
    FROM event_communication_log
    WHERE event_slug = $1 AND communication_type = $2
    `,
    [FUTURE_AI_EVENT_SLUG, COMMUNICATION_TYPE]
  );
  const row = r.rows[0];
  return {
    eligible,
    sent: Number(row?.sent) || 0,
    failed: Number(row?.failed) || 0,
    lastRunAt: row?.last_run ? new Date(row.last_run).toISOString() : null,
  };
}

export function attendeesToCsv(rows: RescheduleAttendee[]): string {
  const header = 'name,email,phone,ticket_type,payment_status';
  const lines = rows.map((r) => {
    const name = [r.firstName, r.lastName].filter(Boolean).join(' ');
    const esc = (v: string) => `"${v.replace(/"/g, '""')}"`;
    const status = r.bookingStatus === 'paid' ? 'paid' : 'registered';
    return [esc(name), esc(r.email), esc(r.phone || ''), esc(r.ticketType || ''), esc(status)].join(',');
  });
  return [header, ...lines].join('\n');
}
