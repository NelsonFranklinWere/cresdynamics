This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Branding & Assets

### Logo & Favicon Setup
The website includes comprehensive favicon and icon support:

- **Favicon**: Multiple sizes for all devices and browsers
- **App Icons**: PWA-ready icons for mobile installation
- **Browser Tab**: Logo appears in browser tab and bookmarks
- **Social Sharing**: Optimized images for social media

```bash
# Generate favicon files from logo.png
npm run generate-favicons
```

**Supported Icon Sizes:**
- 16x16, 32x32, 48x48, 64x64, 128x128 (favicon.ico)
- 192x192, 512x512 (PWA icons)
- 180x180 (Apple Touch Icon)

## Performance Optimizations

This project has been optimized for super-fast loading with the following performance enhancements:

### 🚀 Core Optimizations
- **Next.js Image Optimization**: Automatic WebP/AVIF conversion, lazy loading, responsive images
- **Font Optimization**: Preloaded critical fonts with `font-display: swap`
- **Bundle Splitting**: Dynamic imports for below-the-fold components
- **Critical CSS**: Optimized CSS loading and extraction
- **Service Worker**: Caching strategy for static assets
- **Resource Hints**: DNS prefetch, preconnect, preload, and prefetch

### 📊 Performance Features
- **Lazy Loading**: Components load on-demand to reduce initial bundle size
- **Code Splitting**: Automatic route-based and component-based splitting
- **Compression**: Gzip compression enabled
- **Caching**: Aggressive caching headers for static assets
- **Performance Monitoring**: Built-in Web Vitals tracking

### 🛠️ Development Tools
```bash
# Analyze bundle size
npm run build:analyze

# Performance testing
npm run lighthouse

# Production build with optimizations
npm run build
```

### 🎯 Performance Targets
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **First Input Delay**: < 100ms
- **Cumulative Layout Shift**: < 0.1

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
