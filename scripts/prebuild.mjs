import { execSync } from "node:child_process";

if (!process.env.DATABASE_URL) {
  console.log("prebuild: DATABASE_URL not set — skipping prisma db push & seed (OK for Vercel build)");
  process.exit(0);
}

console.log("prebuild: syncing database schema...");
execSync("npx prisma db push", { stdio: "inherit" });

console.log("prebuild: seeding database...");
execSync("npx tsx prisma/seed.ts", { stdio: "inherit" });
