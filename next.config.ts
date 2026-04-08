import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Redirect www to non-www (canonical domain)
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.zonnepanelenkenner.nl" }],
        destination: "https://zonnepanelenkenner.nl/:path*",
        permanent: true, // 301 redirect
      },
    ];
  },

  // Security & performance headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
