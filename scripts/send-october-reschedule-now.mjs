#!/usr/bin/env node
/**
 * One-shot: send October 2026 reschedule emails to Future of AI attendees.
 * Run on server: node scripts/send-october-reschedule-now.mjs [--dry-run]
 */
import { existsSync, readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import pg from 'pg';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

function loadEnvFile(name) {
  const p = join(root, name);
  if (!existsSync(p)) return;
  for (const line of readFileSync(p, 'utf8').split('\n')) {
    const t = line.trim();
    if (!t || t.startsWith('#')) continue;
    const i = t.indexOf('=');
    if (i === -1) continue;
    const key = t.slice(0, i).trim();
    let val = t.slice(i + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    if (process.env[key] === undefined) process.env[key] = val;
  }
}

loadEnvFile('.env.production');
loadEnvFile('.env.local');

const EVENT_TITLE = 'The Future of AI in Business';
const EVENT_SLUG = 'the-future-of-ai-in-business';
const COMM_TYPE = 'october_2026_reschedule';
const SUBJECT =
  'An update on The Future of AI in Business — new date: 31st October 2026';
const FROM_EMAIL = process.env.SENDER_EMAIL || 'info@cresdynamics.com';
const REPLY_TO = 'info@cresdynamics.com';
const dryRun = process.argv.includes('--dry-run');

function escapeHtml(v) {
  return String(v)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildEmail(firstName) {
  const text = `Dear ${firstName},

We're writing to you with an update on The Future of AI in Business.

After a meeting with a team from Google that had been engaging with us on this event, it has become clear that we need more room, both in scale and in preparation, than our original date allows. Unfortunately, the team we had lined up will no longer be able to make the original date work. Rather than compromise on what we're building, we've made the decision to move the event.

The Future of AI in Business will now take place on Saturday, 31st October 2026, at Sarit Expo Centre, Westlands, keeping the same time and format you registered for.

Your seat is already secured. There is nothing you need to do. Your ticket carries forward automatically to the new date, at the same tier you registered under.

If you would like to upgrade your tier, we will be in touch separately with details on how to do so.

If this new date no longer works for you and you would prefer a refund, simply reply to this email and we will process it promptly.

We know this shift asks for a little more patience, and we don't take that for granted. What's coming together for October will be worth the wait.

See you at Sarit.

Event Management Team, Cres Dynamics
The Future of AI in Business
info@cresdynamics.com`;

  const html = `<div style="font-family: Georgia, 'Times New Roman', serif; max-width: 640px; margin: 0 auto; color: #1a1a1a; line-height: 1.7; font-size: 15px;">
  <div style="background: linear-gradient(135deg, #060B18 0%, #0A2540 100%); padding: 28px 24px; text-align: center;">
    <p style="margin: 0 0 8px; color: #F39C24; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-family: Arial, sans-serif;">Event date update</p>
    <h1 style="margin: 0; color: #fff; font-size: 22px; font-weight: 700;">New date: 31st October 2026</h1>
    <p style="margin: 8px 0 0; color: #2FA6B3; font-size: 13px; font-family: Arial, sans-serif;">${escapeHtml(EVENT_TITLE)}</p>
  </div>
  <div style="padding: 28px 24px; background: #ffffff;">
    <p>Dear <strong>${escapeHtml(firstName)}</strong>,</p>
    <p>We're writing to you with an update on The Future of AI in Business.</p>
    <p>After a meeting with a team from Google that had been engaging with us on this event, it has become clear that we need more room, both in scale and in preparation, than our original date allows. Unfortunately, the team we had lined up will no longer be able to make the original date work. Rather than compromise on what we're building, we've made the decision to move the event.</p>
    <p><strong>The Future of AI in Business will now take place on Saturday, 31st October 2026, at Sarit Expo Centre, Westlands,</strong> keeping the same time and format you registered for.</p>
    <p><strong>Your seat is already secured.</strong> There is nothing you need to do. Your ticket carries forward automatically to the new date, at the same tier you registered under.</p>
    <p>If you would like to upgrade your tier, we will be in touch separately with details on how to do so.</p>
    <p>If this new date no longer works for you and you would prefer a refund, simply reply to this email and we will process it promptly.</p>
    <p>We know this shift asks for a little more patience, and we don't take that for granted. What's coming together for October will be worth the wait.</p>
    <p><strong>See you at Sarit.</strong></p>
    <p style="margin-top: 28px;">Event Management Team, Cres Dynamics<br/>The Future of AI in Business<br/><a href="mailto:info@cresdynamics.com" style="color:#2FA6B3;">info@cresdynamics.com</a></p>
  </div>
  <div style="background:#060B18;padding:16px 24px;text-align:center;font-family:Arial,sans-serif;font-size:12px;color:#94a3b8;">
    ${escapeHtml(EVENT_TITLE)} — Saturday, 31st October 2026 — Sarit Expo Centre, Westlands
  </div>
</div>`;

  return { subject: SUBJECT, html, text };
}

async function sendResend({ to, subject, html, text }) {
  const keys = [process.env.RESEND_API_KEY, process.env.RESEND_API_KEY_FALLBACK].filter(Boolean);
  let lastErr = 'No Resend API key';
  for (const key of keys) {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `Cres Dynamics Events <${FROM_EMAIL}>`,
        to: [to],
        reply_to: REPLY_TO,
        subject,
        html,
        text,
      }),
    });
    const data = await res.json().catch(() => ({}));
    if (res.ok) return { sent: true };
    lastErr = data?.message || data?.error || `HTTP ${res.status}`;
  }
  return { sent: false, error: String(lastErr) };
}

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
try {
  const { rows } = await pool.query(
    `
    SELECT DISTINCT ON (lower(email))
      id, first_name, email, booking_status
    FROM event_reservations
    WHERE event_title = $1 AND booking_status IN ('pending', 'paid')
    ORDER BY lower(email),
      CASE WHEN booking_status = 'paid' THEN 0 ELSE 1 END,
      id DESC
  `,
    [EVENT_TITLE]
  );

  console.log(`Eligible: ${rows.length}${dryRun ? ' (dry-run)' : ''}`);
  let sent = 0;
  let failed = 0;
  let skipped = 0;

  for (const row of rows) {
    const email = String(row.email);
    const firstName = String(row.first_name);
    const id = Number(row.id);

    const already = await pool.query(
      `SELECT 1 FROM event_communication_log
       WHERE event_slug = $1 AND communication_type = $2
         AND lower(email) = lower($3) AND success = true
       LIMIT 1`,
      [EVENT_SLUG, COMM_TYPE, email]
    );
    if ((already.rowCount ?? 0) > 0) {
      skipped += 1;
      console.log(`SKIP ${email}`);
      continue;
    }

    if (dryRun) {
      console.log(`DRY ${firstName} <${email}>`);
      sent += 1;
      continue;
    }

    const { subject, html, text } = buildEmail(firstName);
    const result = await sendResend({ to: email, subject, html, text });
    await pool.query(
      `INSERT INTO event_communication_log
        (event_slug, communication_type, reservation_id, email, first_name, success, error_message)
       VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [EVENT_SLUG, COMM_TYPE, id, email, firstName, result.sent, result.error || null]
    );

    if (result.sent) {
      sent += 1;
      console.log(`SENT ${email}`);
      try {
        await pool.query(
          `UPDATE event_reservations SET reschedule_email_sent_at = now() WHERE id = $1`,
          [id]
        );
      } catch {
        /* optional column */
      }
    } else {
      failed += 1;
      console.log(`FAIL ${email}: ${result.error}`);
    }

    await new Promise((r) => setTimeout(r, 550));
  }

  if (!dryRun) {
    const { subject, html, text } = buildEmail('Team');
    const team = await sendResend({
      to: REPLY_TO,
      subject: `[Team copy] ${subject}`,
      html,
      text,
    });
    console.log(team.sent ? 'Team copy sent' : `Team copy failed: ${team.error}`);
  }

  console.log(`\nDone. sent=${sent} failed=${failed} skipped=${skipped}`);
  if (failed > 0) process.exitCode = 1;
} finally {
  await pool.end();
}
