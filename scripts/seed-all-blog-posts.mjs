#!/usr/bin/env node
/**
 * Upsert all expanded AI + logistics blog posts into production CMS.
 * Usage: node scripts/seed-all-blog-posts.mjs
 */
import { existsSync, readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import pg from 'pg';
import { BLOG_POSTS, assertBlogWordCounts } from './blog-posts-data.mjs';

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

assertBlogWordCounts(1100);

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });

try {
  let upserted = 0;
  for (const post of BLOG_POSTS) {
    const r = await pool.query(
      `
      INSERT INTO blog_posts (
        slug, title, excerpt, category, body, status,
        meta_title, meta_description, author, published_at, updated_at
      ) VALUES ($1,$2,$3,$4,$5,'published',$6,$7,'CRES Dynamics', now(), now())
      ON CONFLICT (slug) DO UPDATE SET
        title = EXCLUDED.title,
        excerpt = EXCLUDED.excerpt,
        category = EXCLUDED.category,
        body = EXCLUDED.body,
        status = 'published',
        meta_title = EXCLUDED.meta_title,
        meta_description = EXCLUDED.meta_description,
        published_at = COALESCE(blog_posts.published_at, now()),
        updated_at = now()
      RETURNING id, slug
      `,
      [
        post.slug,
        post.title,
        post.excerpt,
        post.category,
        post.body,
        post.metaTitle,
        post.metaDescription,
      ]
    );
    upserted += 1;
    console.log(`PUBLISHED ${r.rows[0].id} ${r.rows[0].slug}`);
  }
  console.log(`\nDone. ${upserted} posts published/updated.`);
} finally {
  await pool.end();
}
