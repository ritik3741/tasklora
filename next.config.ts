import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enforce gzip/brotli compression
  compress: true,
  // Remove the x-powered-by header for security
  poweredByHeader: false,
  // Strict mode for better error handling in development
  reactStrictMode: true,
  
  // Configure caching headers for static assets (images, scripts, etc.)
  async headers() {
    return [
      {
        source: '/(.*).js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*).css',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*).(svg|jpg|png|webp)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
