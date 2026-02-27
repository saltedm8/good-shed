import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "thegoodsshed.co.uk",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
