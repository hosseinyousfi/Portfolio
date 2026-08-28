import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages (custom domain: codeevo.ir → served from root)
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
