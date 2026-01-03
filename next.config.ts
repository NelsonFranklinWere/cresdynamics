import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Performance Optimizations
  images: {
    formats: ['image/webp', 'image/avif'], // Modern image formats
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // Responsive breakpoints
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Size variations
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days cache
    unoptimized: false, // Enable optimization in development
  },

  // Compression and optimization
  compress: true, // Enable gzip compression
  poweredByHeader: false, // Remove X-Powered-By header

  // Turbopack configuration for Next.js 16
  turbopack: {}, // Explicitly enable Turbopack

  // Bundle analysis and optimization - only for production builds
  ...(process.env.NODE_ENV === 'production' ? {
    webpack: (config: any, { dev, isServer }: any) => {
      // Optimize bundle size
      if (!dev && !isServer) {
        config.optimization.splitChunks.cacheGroups = {
          ...config.optimization.splitChunks.cacheGroups,
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
          },
        };
      }
      return config;
    },
  } : {}),

  // Headers for performance - only in production
  ...(process.env.NODE_ENV === 'production' ? {
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              key: 'Referrer-Policy',
              value: 'origin-when-cross-origin',
            },
            {
              key: 'X-DNS-Prefetch-Control',
              value: 'on',
            },
          ],
        },
        {
          source: '/backround.png',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
        {
          source: '/logo.png',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
        {
          source: '/static/(.*)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
        {
          source: '/_next/image(.*)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
      ];
    },
  } : {}),

  // Note: Removed static export to support API routes on Vercel
  // Vercel will handle deployment automatically
  trailingSlash: true,
};

export default nextConfig;
