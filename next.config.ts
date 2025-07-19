import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Ensure proper routing for static export
  trailingSlash: true,
  // Use basePath only for GitHub Pages subdomain, not for custom domains
  basePath: process.env.NODE_ENV === 'production' && process.env.GITHUB_PAGES === 'true' && !process.env.CUSTOM_DOMAIN ? '/optimal-ai-security-guide' : '',
  assetPrefix: process.env.NODE_ENV === 'production' && process.env.GITHUB_PAGES === 'true' && !process.env.CUSTOM_DOMAIN ? '/optimal-ai-security-guide/' : '',
};

export default nextConfig;
