/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    console.log("=== Rewrites path ===");
    return process.env.NODE_ENV === "development"
      ? [
          {
            source: "/:path*",
            destination: "http://localhost:8080/:path*",
          },
        ]
      : [];
  },
};

module.exports = nextConfig;
