#!/usr/bin/env node
/**
 * Send July 2026 reschedule update emails to Future of AI attendees.
 *
 * Usage (on server with .env.production):
 *   ADMIN_EMAIL=... ADMIN_PASSWORD=... node scripts/send-event-reschedule-update.mjs
 *   node scripts/send-event-reschedule-update.mjs --dry-run
 *   node scripts/send-event-reschedule-update.mjs --resend
 *
 * Requires admin credentials. Uses the live site API (APP_BASE_URL or https://cresdynamics.com).
 */

const base = (process.env.APP_BASE_URL || 'https://cresdynamics.com').replace(/\/+$/, '');
const email = process.env.ADMIN_EMAIL;
const password = process.env.ADMIN_PASSWORD;
const dryRun = process.argv.includes('--dry-run');
const resend = process.argv.includes('--resend');

if (!email || !password) {
  console.error('Set ADMIN_EMAIL and ADMIN_PASSWORD in the environment.');
  process.exit(1);
}

async function main() {
  const loginRes = await fetch(`${base}/api/admin/login/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (!loginRes.ok) {
    console.error('Admin login failed:', loginRes.status, await loginRes.text());
    process.exit(1);
  }

  const cookie = loginRes.headers.get('set-cookie')?.split(';')[0];
  if (!cookie) {
    console.error('No session cookie from login');
    process.exit(1);
  }

  const notifyRes = await fetch(`${base}/api/admin/events/reschedule-notify/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Cookie: cookie },
    body: JSON.stringify({ dryRun, resend }),
  });

  const data = await notifyRes.json().catch(() => ({}));
  console.log(JSON.stringify(data, null, 2));

  if (!notifyRes.ok || !data.ok) {
    process.exit(1);
  }

  const r = data.report;
  if (r) {
    console.log(`\nSummary: ${r.sent} sent, ${r.failed} failed, ${r.skipped} skipped, ${r.totalEligible} eligible`);
    const failed = (r.results || []).filter((x) => !x.sent && !x.skipped);
    if (failed.length) {
      console.log('\nFollow up manually (WhatsApp):');
      for (const f of failed) console.log(`  - ${f.firstName} <${f.email}> ${f.error || ''}`);
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
