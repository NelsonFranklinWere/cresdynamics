#!/bin/bash
# Script to generate static HTML site for faster loading

echo "🚀 Generating static HTML site for CresDynamics..."

# Backup dynamic routes temporarily
echo "📦 Backing up dynamic routes..."
mv src/app/api src/app/api_backup 2>/dev/null || true
mv src/app/admin src/app/admin_backup 2>/dev/null || true
mv src/app/pay src/app/pay_backup 2>/dev/null || true
mv src/app/management src/app/management_backup 2>/dev/null || true

# Configure for static export
echo "⚙️  Configuring for static export..."
cp next.config.ts next.config.ts.backup
sed -i '' 's/const nextConfig: NextConfig = {/const nextConfig: NextConfig = {\n  \/\/ Enable static export\n  output: '\''export'\'',\n  trailingSlash: true,\n/' next.config.ts

# Build static site
echo "🔨 Building static site..."
npm run build

# Restore configuration and routes
echo "🔄 Restoring configuration..."
mv next.config.ts.backup next.config.ts
mv src/app/api_backup src/app/api 2>/dev/null || true
mv src/app/admin_backup src/app/admin 2>/dev/null || true
mv src/app/pay_backup src/app/pay 2>/dev/null || true
mv src/app/management_backup src/app/management 2>/dev/null || true

# Update static-site directory
echo "📁 Updating static site directory..."
rm -rf static-site
mv out static-site

echo "✅ Static site generated successfully!"
echo "📊 Site stats:"
echo "   - Total size: $(du -sh static-site/ | cut -f1)"
echo "   - HTML files: $(find static-site/ -name '*.html' | wc -l)"
echo "   - Total files: $(find static-site/ -type f | wc -l)"
echo ""
echo "🌐 Serve locally with: cd static-site && python3 -m http.server 8080"
