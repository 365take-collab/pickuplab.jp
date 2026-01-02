import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 画像最適化のドメイン設定
  images: {
    domains: ['pickuplab.jp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pickuplab.jp',
      },
    ],
  },
};

export default nextConfig;
