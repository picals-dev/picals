import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static-r2.caelum.moe',
      },
      {
        protocol: 'https',
        hostname: 'pixiv-r2.caelum.moe',
      },
    ],
  },
}

export default nextConfig
