import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // السماح بأي مضيف
      },
    ],
  },
};
export default nextConfig;
