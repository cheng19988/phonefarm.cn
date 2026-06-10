import type { NextConfig } from "next";

const seedData = ["./prisma/data/phonefarm-seed.db", "./prisma/data/seed-admin-meta.json"];
/** Keep static assets out of serverless bundles (public/ is served via CDN). */
const traceExcludeImages = ["./public/images/**"];

const nextConfig: NextConfig = {
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
