#!/usr/bin/env node
/**
 * Renumbers FoAIB-2026-XXX ticket numbers for all non-cancelled registrations
 * in registration order (created_at ASC).
 */
import { existsSync, readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import pg from 'pg';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const PREFIX = 'FoAIB-2026';
const EVENT_TITLE = 'The Future of AI in Business';
const EVENT_DATE = 'Saturday, 25th July 2026';

function loadEnvFile(name) {
  const p = join(root, name);
  if (!existsSync(p)) return;
  const text = readFileSync(p, 'utf8');
  for (const line of text.split('\n')) {
    const t = line.trim();
    if (!t || t.startsWith('#')) continue;
    const i = t.indexOf('=');
    if (i === -1) continue;
    const key = t.slice(0, i).trim();
    let val = t.slice(i + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    if (process.env[key] === undefined) process.env[key] = val;
  }
}

loadEnvFile('.env.production');
loadEnvFile('.env.local');

function formatTicketNumber(sequence) {
  return `${PREFIX}-${String(sequence).padStart(3, '0')}`;
}

const url = process.env.DATABASE_URL;
if (!url) {
  console.error('DATABASE_URL is not set — skipping ticket renumber.');
  process.exit(0);
}

const pool = new pg.Pool({ connectionString: url });

try {
  await pool.query(
    `UPDATE event_reservations SET ticket_number = NULL
     WHERE event_title = $1 AND event_date = $2`,
    [EVENT_TITLE, EVENT_DATE]
  );

  const { rows } = await pool.query(
    `SELECT id FROM event_reservations
     WHERE event_title = $1 AND event_date = $2 AND booking_status != 'cancelled'
     ORDER BY created_at ASC, id ASC`,
    [EVENT_TITLE, EVENT_DATE]
  );

  for (let i = 0; i < rows.length; i++) {
    await pool.query(`UPDATE event_reservations SET ticket_number = $2 WHERE id = $1`, [
      rows[i].id,
      formatTicketNumber(i + 1),
    ]);
  }

  console.log(`Renumbered ${rows.length} event registration ticket(s).`);
} catch (err) {
  console.error('Ticket renumber failed:', err);
  process.exit(1);
} finally {
  await pool.end();
}
