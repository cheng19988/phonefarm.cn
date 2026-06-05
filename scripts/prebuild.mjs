import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const seedDir = path.join(root, "prisma", "data");
const seedDb = path.join(seedDir, "phonefarm-seed.db");

fs.mkdirSync(seedDir, { recursive: true });

const dbUrl = `file:${seedDb.replace(/\\/g, "/")}`;
console.log("prebuild: building bundled seed database at", seedDb);

execSync("npx prisma db push", {
  stdio: "inherit",
  env: { ...process.env, DATABASE_URL: dbUrl },
});

execSync("npx tsx prisma/seed.ts", {
  stdio: "inherit",
  env: { ...process.env, DATABASE_URL: dbUrl },
});

console.log("prebuild: seed database ready");
