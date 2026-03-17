import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Necessário para GitHub Pages
  basePath: '/site-daiane-camargo',
  assetPrefix: '/site-daiane-camargo',
  images: {
    unoptimized: true, // Necessário para imagens estáticas no GitHub
  },
};

export default nextConfig;