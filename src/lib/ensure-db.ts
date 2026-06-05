import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { prisma } from "@/lib/prisma";
import { seedDatabase } from "@/lib/seed-db";

const globalForDb = globalThis as unknown as { dbReady?: Promise<void> };

const SEED_DB = path.join(process.cwd(), "prisma/data/phonefarm-seed.db");

function resolveDbPath(databaseUrl: string) {
  if (!databaseUrl.startsWith("file:")) {
    return path.join(process.cwd(), "dev.db");
  }
  let filePath = databaseUrl.slice("file:".length);
  if (filePath.startsWith("//")) filePath = filePath.slice(1);
  return path.isAbsolute(filePath) ? filePath : path.join(process.cwd(), filePath);
}

function isMissingTableError(error: unknown) {
  const code = (error as { code?: string })?.code;
  const message = error instanceof Error ? error.message : String(error);
  return code === "P2021" || message.includes("does not exist");
}

async function tableExists() {
  try {
    await prisma.$queryRawUnsafe("SELECT 1 FROM Product LIMIT 1");
    return true;
  } catch (error) {
    if (isMissingTableError(error)) return false;
    throw error;
  }
}

async function copyBundledSeed(targetPath: string) {
  if (!fs.existsSync(SEED_DB)) {
    throw new Error(`Bundled seed database missing: ${SEED_DB}`);
  }
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.copyFileSync(SEED_DB, targetPath);
  console.log("[ensure-db] Copied bundled seed to", targetPath);
}

async function initializeDatabase() {
  if (await tableExists()) return;

  const targetPath = resolveDbPath(process.env.DATABASE_URL || "file:./prisma/dev.db");

  if (fs.existsSync(SEED_DB)) {
    await copyBundledSeed(targetPath);
    if (await tableExists()) return;
  }

  if (process.env.VERCEL) {
    throw new Error("Failed to initialize database on Vercel from bundled seed");
  }

  console.log("[ensure-db] Local fallback: prisma db push + seed");
  execSync("npx prisma db push", { stdio: "inherit", env: process.env });
  await seedDatabase(prisma);
}

export function ensureDatabase(): Promise<void> {
  if (!globalForDb.dbReady) {
    globalForDb.dbReady = initializeDatabase();
  }
  return globalForDb.dbReady;
}
