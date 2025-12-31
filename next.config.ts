import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { unoptimized: true }, // Static images only
  output: 'export', // Static export for DigitalOcean
  trailingSlash: true,
};

export default nextConfig;
