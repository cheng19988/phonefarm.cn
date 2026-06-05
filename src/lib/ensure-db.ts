import { execSync } from "node:child_process";
import { prisma } from "@/lib/prisma";
import { seedDatabase } from "@/lib/seed-db";

const globalForDb = globalThis as unknown as { dbReady?: Promise<void> };

function isMissingTableError(error: unknown) {
  const code = (error as { code?: string })?.code;
  const message = error instanceof Error ? error.message : String(error);
  return code === "P2021" || message.includes("does not exist");
}

async function initializeDatabase() {
  try {
    await prisma.$queryRawUnsafe("SELECT 1 FROM Product LIMIT 1");
    return;
  } catch (error) {
    if (!isMissingTableError(error)) throw error;
  }

  console.log("[ensure-db] Creating SQLite schema...");
  execSync("npx prisma db push --skip-generate", {
    stdio: "inherit",
    env: process.env,
  });

  console.log("[ensure-db] Seeding products and admin user...");
  await seedDatabase(prisma);
}

export function ensureDatabase(): Promise<void> {
  if (!globalForDb.dbReady) {
    globalForDb.dbReady = initializeDatabase();
  }
  return globalForDb.dbReady;
}
