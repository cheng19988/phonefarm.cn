import { execSync } from "node:child_process";
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const seedDir = path.join(root, "prisma", "data");
const seedDb = path.join(seedDir, "phonefarm-seed.db");

fs.mkdirSync(seedDir, { recursive: true });

const imageRoots = ["real", "factory", "deck", "card", "hero", "banner"];
const publicNames = new Set();
for (const sub of imageRoots) {
  const dir = path.join(root, "public", "images", sub);
  if (!fs.existsSync(dir)) continue;
  for (const name of fs.readdirSync(dir)) {
    if (!name.startsWith(".") && name !== ".gitkeep") publicNames.add(name);
  }
}
fs.writeFileSync(
  path.join(root, "src", "lib", "real-images-manifest.json"),
  JSON.stringify([...publicNames].sort(), null, 2) + "\n"
);
console.log("prebuild: public images manifest:", publicNames.size, "file(s)");

const adminEmail = (process.env.ADMIN_EMAIL || "admin@phonefarm.cn").trim().toLowerCase();
const adminPassword = process.env.ADMIN_PASSWORD || "admin123456";
const credentialEpoch = crypto
  .createHash("sha256")
  .update(`${adminEmail}|${adminPassword}`)
  .digest("hex");

fs.writeFileSync(
  path.join(seedDir, "seed-admin-meta.json"),
  JSON.stringify({ adminEmail, credentialEpoch }, null, 2)
);
console.log("prebuild: wrote seed-admin-meta.json (credential fingerprint only)");

const rebuildSeed = process.env.REBUILD_SEED_DB === "1";

if (rebuildSeed) {
  if (fs.existsSync(seedDb)) {
    fs.unlinkSync(seedDb);
    console.log("prebuild: removed previous seed database for rebuild");
  }
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
  console.log("prebuild: seed database rebuilt");
} else if (!fs.existsSync(seedDb)) {
  console.error("prebuild: bundled seed database missing — commit prisma/data/phonefarm-seed.db or set REBUILD_SEED_DB=1");
  process.exit(1);
} else {
  console.log("prebuild: using committed seed database");
}

try {
  execSync("node scripts/verify-copy.mjs", { cwd: root, stdio: "inherit" });
  console.log("prebuild: copy verification passed");
} catch {
  console.warn("prebuild: verify-copy reported issues (non-fatal)");
}

console.log("prebuild: done");
