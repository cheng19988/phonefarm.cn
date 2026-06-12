import type { NextConfig } from "next";

const seedData = ["./prisma/data/phonefarm-seed.db", "./prisma/data/seed-admin-meta.json"];
/** Keep static assets out of serverless bundles (public/ is served via CDN). */
const traceExcludeImages = ["./public/images/**"];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/blog/what-is-a-phone-farm-how-people-use-smartphones-to-earn-money",
        destination: "/blog/phone-farm-device-operations-guide",
        permanent: true,
      },
      {
        source: "/ai",
        destination: "/for-ai",
        permanent: true,
      },
    ];
  },
  serverExternalPackages: ["better-sqlite3", "@prisma/adapter-better-sqlite3"],
  outputFileTracingIncludes: {
    "/api/**": seedData,
    "/products/**": seedData,
    "/admin/**": seedData,
    "/account/**": seedData,
    "/orders/**": seedData,
  },
  outputFileTracingExcludes: {
    "/**": traceExcludeImages,
  },
};

export default nextConfig;
