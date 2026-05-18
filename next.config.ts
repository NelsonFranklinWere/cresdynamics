import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react', '@radix-ui/react-scroll-area'],
  },

  // Image optimisation
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    // Serve /public files directly — avoids _next/image 400 with trailingSlash + Turbopack
    unoptimized: true,
  },

  // Server-side gzip compression
  compress: true,
  poweredByHeader: false,

  // Turbopack (Next.js 16 default bundler)
  turbopack: {},

  // Security + cache headers (production only)
  ...(process.env.NODE_ENV === 'production' ? {
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            { key: 'X-Frame-Options',           value: 'DENY' },
            { key: 'X-Content-Type-Options',     value: 'nosniff' },
            { key: 'Referrer-Policy',            value: 'origin-when-cross-origin' },
            { key: 'X-DNS-Prefetch-Control',     value: 'on' },
          ],
        },
        {
          source: '/_next/static/(.*)',
          headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
        },
        {
          source: '/_next/image(.*)',
          headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
        },
        {
          source: '/:file(.*\\.(?:png|jpg|jpeg|webp|avif|svg|ico|gif))',
          headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
        },
      ];
    },
  } : {}),

  // Canonical redirects
  async redirects() {
    return [
      { source: '/finance',       destination: '/finance-platforms/', permanent: true },
      { source: '/finance/',      destination: '/finance-platforms/', permanent: true },
      { source: '/data-security', destination: '/data-security/',     permanent: true },
    ];
  },

  trailingSlash: true,
};

export default nextConfig;
