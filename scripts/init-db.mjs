#!/usr/bin/env node
/**
 * Applies src/db/schema.sql to DATABASE_URL.
 * Usage: DATABASE_URL=postgresql://... npm run db:init
 */
import { existsSync, readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import pg from 'pg';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

function loadEnvLocal() {
  const p = join(root, '.env.local');
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

loadEnvLocal();

const url = process.env.DATABASE_URL;
if (!url) {
  console.error('Set DATABASE_URL (e.g. postgresql://cres:cres@localhost:5432/cresdynamics)');
  process.exit(1);
}

const sql = readFileSync(join(root, 'src/db/schema.sql'), 'utf8');

const client = new pg.Client({ connectionString: url });
try {
  await client.connect();
  await client.query(sql);
  console.log('Schema applied successfully.');
} catch (e) {
  console.error(e);
  process.exit(1);
} finally {
  await client.end();
}
