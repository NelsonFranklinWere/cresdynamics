#!/usr/bin/env node

/**
 * Favicon Generation Script for CRES Dynamics
 *
 * This script helps generate proper favicon files from logo.png
 * Run this after installing dependencies: npm install sharp --save-dev
 *
 * Usage: node generate-favicons.js
 */

const fs = require('fs');
const path = require('path');

console.log('🔧 CRES Dynamics Favicon Generator');
console.log('=====================================');

const publicDir = path.join(__dirname, 'public');
const logoPath = path.join(publicDir, 'logo.png');

// Check if logo exists
if (!fs.existsSync(logoPath)) {
  console.error('❌ Error: logo.png not found in public directory');
  console.log('Please ensure logo.png exists in the public folder');
  process.exit(1);
}

console.log('✅ Found logo.png');

// Check if sharp is available
try {
  const sharp = require('sharp');
  console.log('✅ Sharp library available');

  // Generate different favicon sizes
  const sizes = [16, 32, 48, 64, 128, 192, 512];

  console.log('🎨 Generating favicon files...');

  sizes.forEach(size => {
    const outputPath = path.join(publicDir, `icon-${size}.png`);
    sharp(logoPath)
      .resize(size, size, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile(outputPath)
      .then(() => {
        console.log(`✅ Generated icon-${size}.png`);
      })
      .catch(err => {
        console.error(`❌ Error generating icon-${size}.png:`, err.message);
      });
  });

  // Generate Apple touch icon
  const appleIconPath = path.join(publicDir, 'apple-touch-icon.png');
  sharp(logoPath)
    .resize(180, 180, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 0 }
    })
    .png()
    .toFile(appleIconPath)
    .then(() => {
      console.log('✅ Generated apple-touch-icon.png');
    })
    .catch(err => {
      console.error('❌ Error generating apple-touch-icon.png:', err.message);
    });

} catch (error) {
  console.log('⚠️  Sharp library not found. Using basic file copying...');
  console.log('For better results, install sharp: npm install sharp --save-dev');

  // Basic fallback - just copy files
  const basicSizes = ['192', '512'];

  basicSizes.forEach(size => {
    const srcPath = path.join(publicDir, 'logo.png');
    const destPath = path.join(publicDir, `icon-${size}.png`);
    try {
      fs.copyFileSync(srcPath, destPath);
      console.log(`✅ Copied icon-${size}.png`);
    } catch (err) {
      console.error(`❌ Error copying icon-${size}.png:`, err.message);
    }
  });

  // Copy apple touch icon
  try {
    fs.copyFileSync(path.join(publicDir, 'logo.png'), path.join(publicDir, 'apple-touch-icon.png'));
    console.log('✅ Copied apple-touch-icon.png');
  } catch (err) {
    console.error('❌ Error copying apple-touch-icon.png:', err.message);
  }
}

console.log('');
console.log('🎉 Favicon generation complete!');
console.log('📱 Your logo will now appear in browser tabs and bookmarks');
console.log('');
console.log('Next steps:');
console.log('1. Test the favicon by opening the website in a browser');
console.log('2. Clear browser cache if favicon doesn\'t update immediately');
console.log('3. For production, consider using a favicon generator for optimal results');
