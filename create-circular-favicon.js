#!/usr/bin/env node

/**
 * Create Circular Favicon from Logo
 * Generates a circular version of the logo for use as favicon
 */

const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const logoPath = path.join(publicDir, 'logo.png');
const outputPath = path.join(publicDir, 'favicon-circular.png');
const appIconPath = path.join(__dirname, 'src/app/icon.png');

// Check if logo exists
if (!fs.existsSync(logoPath)) {
  console.error('❌ Error: logo.png not found in public directory');
  process.exit(1);
}

console.log('🔄 Creating circular favicon...');

// Try to use sharp for better quality
(async () => {
  try {
    const sharp = require('sharp');
    console.log('✅ Using Sharp library for high-quality circular icon');

    const size = 512; // Use larger size for better quality
    const radius = size / 2;

    // Create a circular mask using SVG
    const circleSvg = Buffer.from(`
      <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
        <circle cx="${radius}" cy="${radius}" r="${radius}" fill="white"/>
      </svg>
    `);

    // First, resize the logo to square
    const resizedLogo = await sharp(logoPath)
      .resize(size, size, {
        fit: 'cover',
        position: 'center'
      })
      .toBuffer();

    // Apply circular mask
    await sharp(resizedLogo)
      .composite([
        {
          input: circleSvg,
          blend: 'dest-in'
        }
      ])
      .png()
      .toFile(outputPath);
    
    console.log('✅ Created circular favicon: favicon-circular.png');
    
    // Also update the app icon
    const resizedLogo2 = await sharp(logoPath)
      .resize(size, size, {
        fit: 'cover',
        position: 'center'
      })
      .toBuffer();

    await sharp(resizedLogo2)
      .composite([
        {
          input: circleSvg,
          blend: 'dest-in'
        }
      ])
      .png()
      .toFile(appIconPath);

    console.log('✅ Updated app/icon.png with circular version');
    console.log('🎉 Circular favicon created successfully!');

  } catch (error) {
    console.log('⚠️  Sharp library not found. Installing...');
    console.log('Run: npm install sharp --save-dev');
    
    // Fallback: Use canvas or basic approach
    console.log('Using fallback method...');
    
    // For now, just copy and let CSS handle it, or use a simpler approach
    // Since we can't easily create circular images without sharp, let's install it
    const { execSync } = require('child_process');
    try {
      console.log('Installing sharp...');
      execSync('npm install sharp --save-dev', { stdio: 'inherit' });
      console.log('✅ Sharp installed. Please run this script again.');
    } catch (installError) {
      console.error('❌ Could not install sharp automatically.');
      console.error('Please run: npm install sharp --save-dev');
      console.error('Then run this script again.');
      process.exit(1);
    }
  }
})();

