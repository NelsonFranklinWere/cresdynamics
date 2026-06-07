import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const SITE_RUNTIME = "Node.js";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: [
      'framer-motion',
      'lucide-react',
      '@radix-ui/react-scroll-area',
      '@radix-ui/react-slot',
    ],
  },

  compiler: isProd
    ? {
        removeConsole: { exclude: ['error', 'warn'] },
      }
    : undefined,

  // Image optimisation
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    unoptimized: true,
  },

  compress: true,
  poweredByHeader: false,

  turbopack: {},

  ...(isProd
    ? {
        async headers() {
          return [
            {
              source: '/(.*)',
              headers: [
                { key: 'X-Frame-Options', value: 'DENY' },
                { key: 'X-Content-Type-Options', value: 'nosniff' },
                { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
                { key: 'X-DNS-Prefetch-Control', value: 'on' },
                { key: 'X-Powered-By', value: SITE_RUNTIME },
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
              source: '/:file(.*\\.(?:png|jpg|jpeg|webp|avif|svg|ico|gif|woff2))',
              headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
            },
          ];
        },
      }
    : {}),

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
