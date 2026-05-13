/**
 * extract-static.mjs
 * Collects every pre-rendered HTML page from the Next.js/Turbopack build output
 * plus all public assets into a single `static-site/` folder.
 *
 * Usage:  node scripts/extract-static.mjs
 */

import fs   from 'fs';
import path from 'path';

const ROOT     = new URL('..', import.meta.url).pathname.replace(/\/$/, '');
const APP_DIR  = path.join(ROOT, '.next', 'server', 'app');
const PUB_DIR  = path.join(ROOT, 'public');
const OUT_DIR  = path.join(ROOT, 'static-site');

// Clean previous output
if (fs.existsSync(OUT_DIR)) fs.rmSync(OUT_DIR, { recursive: true });

let copied = 0, skipped = 0;

function ensureDir(dir) { fs.mkdirSync(dir, { recursive: true }); }
function copyFile(src, dest) { ensureDir(path.dirname(dest)); fs.copyFileSync(src, dest); copied++; }
function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    entry.isDirectory() ? copyDir(s, d) : copyFile(s, d);
  }
}

// ── 1. Discover & copy ALL pre-rendered HTML files ───────────────────────────
console.log('\n📄  Extracting pre-rendered HTML pages…');

// Turbopack layout: .next/server/app/<route>.html  (flat, no trailing index)
// e.g. index.html, events.html, events/speak.html
function walkHtml(dir, rel = '') {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    const relPath  = rel ? `${rel}/${entry.name}` : entry.name;

    if (entry.isDirectory()) {
      walkHtml(fullPath, relPath);
    } else if (entry.name.endsWith('.html') && !entry.name.startsWith('_')) {
      // Map e.g. "events.html" → /events/index.html
      //          "index.html"  → /index.html
      //          "events/speak.html" → /events/speak/index.html
      const routeName = relPath.replace(/\.html$/, '');
      const destRel   = routeName === 'index' ? 'index.html' : `${routeName}/index.html`;
      const dest      = path.join(OUT_DIR, destRel);
      copyFile(fullPath, dest);
      console.log(`  ✓  /${routeName}`);
    }
  }
}

walkHtml(APP_DIR);

// ── 2. Public assets (images, icons, manifests) ───────────────────────────────
console.log('\n🖼   Copying public assets…');
const ASSET_EXTS = new Set([
  '.png','.jpg','.jpeg','.webp','.avif','.svg','.ico','.gif',
  '.mp4','.webm','.pdf','.txt','.xml','.json','.woff','.woff2','.ttf',
]);

function copyPublic(src, dest) {
  if (!fs.existsSync(src)) return;
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyPublic(s, d);
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (ASSET_EXTS.has(ext)) {
        copyFile(s, d);
        console.log(`  ✓  ${entry.name}`);
      }
    }
  }
}
copyPublic(PUB_DIR, OUT_DIR);

// ── 3. Compiled JS/CSS bundles (_next/static) ─────────────────────────────────
console.log('\n⚙️   Copying compiled JS/CSS bundles…');
const nextStaticSrc  = path.join(ROOT, '.next', 'static');
const nextStaticDest = path.join(OUT_DIR, '_next', 'static');
copyDir(nextStaticSrc, nextStaticDest);

// ── Summary ───────────────────────────────────────────────────────────────────
const htmlCount = fs.readdirSync(OUT_DIR, { recursive: true })
  .filter(f => typeof f === 'string' && f.endsWith('.html')).length;

console.log(`\n✅  Done! ${htmlCount} HTML pages · ${copied} total files · ${skipped} skipped`);
console.log(`   Output → ${OUT_DIR}\n`);
