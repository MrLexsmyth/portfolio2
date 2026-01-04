import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,       // Optimize Tailwind CSS
    scrollRestoration: true, // Optional: smooth page transitions
  },
  images: {
    domains: ["images.unsplash.com", "yourdomain.com"], // external images
    formats: ["image/avif", "image/webp"],             // modern formats
  },
  compiler: {
    styledComponents: false, // only if you might use styled-components
  },
  typescript: {
    ignoreBuildErrors: false, // fails build on TS errors
  },
};

export default nextConfig;
