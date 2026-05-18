/**
 * Compress all raster images in public/ for faster first paint on slow networks.
 * Run: npm run compress-images
 */
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

import { fileURLToPath } from 'url';
const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = path.join(ROOT, 'public');
const MAX_WIDTH = 1920;
const JPEG_QUALITY = 82;
const PNG_QUALITY = 80;
const WEBP_QUALITY = 82;

const RASTER = new Set(['.png', '.jpg', '.jpeg', '.webp']);

let processed = 0;
let savedBytes = 0;

async function compressFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!RASTER.has(ext)) return;

  const before = fs.statSync(filePath).size;
  const image = sharp(filePath, { failOn: 'none' });
  const meta = await image.metadata();
  if (!meta.width) return;

  let pipeline = image.rotate();
  if (meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  if (ext === '.png') {
    await pipeline.png({ quality: PNG_QUALITY, compressionLevel: 9, effort: 10 }).toFile(filePath + '.tmp');
  } else if (ext === '.webp') {
    await pipeline.webp({ quality: WEBP_QUALITY, effort: 6 }).toFile(filePath + '.tmp');
  } else {
    await pipeline
      .jpeg({ quality: JPEG_QUALITY, mozjpeg: true, progressive: false })
      .toFile(filePath + '.tmp');
  }

  const after = fs.statSync(filePath + '.tmp').size;
  if (after < before) {
    fs.renameSync(filePath + '.tmp', filePath);
    savedBytes += before - after;
    console.log(`  ✓ ${path.relative(PUBLIC, filePath)}  ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB`);
  } else {
    fs.unlinkSync(filePath + '.tmp');
    console.log(`  · ${path.relative(PUBLIC, filePath)}  (already optimal)`);
  }
  processed++;
}

async function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full);
    else await compressFile(full).catch((err) => console.warn(`  ✗ ${full}: ${err.message}`));
  }
}

console.log('\n🖼  Compressing public images…\n');
await walk(PUBLIC);
console.log(`\n✅  ${processed} files · saved ${(savedBytes / 1024 / 1024).toFixed(1)} MB\n`);
