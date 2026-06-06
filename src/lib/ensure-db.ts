import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { prisma } from "@/lib/prisma";
import { syncAdminFromEnv } from "@/lib/auth";
import { adminEnvConfigured } from "@/lib/admin-env";
import { resolveDatabaseUrl, resolveDbFilePath } from "@/lib/database-url";
import { seedDatabase } from "@/lib/seed-db";

const globalForDb = globalThis as unknown as { dbReady?: Promise<void> };

const SEED_DB = path.join(process.cwd(), "prisma", "data", "phonefarm-seed.db");

function isBuildPhase() {
  return process.env.NEXT_PHASE === "phase-production-build";
}

function deploySeedMarkerPath() {
  const deploymentId = process.env.VERCEL_DEPLOYMENT_ID || "local";
  return path.join("/tmp", `.phonefarm-seed-applied-${deploymentId}`);
}

function resolveDbPath(databaseUrl: string) {
  return resolveDbFilePath(databaseUrl);
}

function isMissingTableError(error: unknown) {
  const code = (error as { code?: string })?.code;
  const message = error instanceof Error ? error.message : String(error);
  return (
    code === "P2021" ||
    code === "P2010" ||
    message.includes("does not exist") ||
    message.includes("TableDoesNotExist") ||
    message.includes("没有名为")
  );
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

function isSchemaMismatchError(error: unknown) {
  const message = error instanceof Error ? error.message : String(error);
  return message.includes("no such column") || message.includes("SQLITE_ERROR");
}

async function contactTableReady() {
  try {
    await prisma.$queryRawUnsafe(
      "SELECT status, purchaseType, connectionMode FROM ContactSubmission LIMIT 1"
    );
    return true;
  } catch (error) {
    if (isMissingTableError(error) || isSchemaMismatchError(error)) return false;
    throw error;
  }
}

function copyBundledSeed(targetPath: string) {
  if (!fs.existsSync(SEED_DB)) {
    throw new Error(`Bundled seed database missing: ${SEED_DB}`);
  }
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.copyFileSync(SEED_DB, targetPath);
  console.log("[ensure-db] Copied bundled seed to", targetPath);
}

function shouldCopySeed(targetPath: string) {
  if (!fs.existsSync(SEED_DB)) return false;
  if (!fs.existsSync(targetPath)) return true;

  if (process.env.VERCEL) {
    const marker = deploySeedMarkerPath();
    if (!fs.existsSync(marker)) return true;
  }

  const seedSize = fs.statSync(SEED_DB).size;
  const targetSize = fs.statSync(targetPath).size;
  return targetSize < seedSize * 0.5;
}

function markDeploySeedApplied() {
  if (!process.env.VERCEL) return;
  fs.writeFileSync(deploySeedMarkerPath(), new Date().toISOString());
}

async function syncAdminIfConfigured() {
  if (!adminEnvConfigured()) return;
  await syncAdminFromEnv();
}

async function initializeDatabase() {
  if (isBuildPhase()) return;

  const targetPath = resolveDbPath(resolveDatabaseUrl());

  if (shouldCopySeed(targetPath)) {
    copyBundledSeed(targetPath);
    markDeploySeedApplied();
  }

  if ((await tableExists()) && (await contactTableReady())) {
    await syncAdminIfConfigured();
    return;
  }

  if (fs.existsSync(SEED_DB)) {
    copyBundledSeed(targetPath);
    markDeploySeedApplied();
    if ((await tableExists()) && (await contactTableReady())) {
      await syncAdminIfConfigured();
      return;
    }
  }

  if (process.env.VERCEL) {
    throw new Error(`Failed to initialize database on Vercel (seed: ${fs.existsSync(SEED_DB)}, target: ${targetPath})`);
  }

  console.log("[ensure-db] Local fallback: prisma db push + seed");
  execSync("npx prisma db push", { stdio: "inherit", env: process.env });
  await seedDatabase(prisma);
  await syncAdminIfConfigured();
}

export function ensureDatabase(): Promise<void> {
  if (isBuildPhase()) return Promise.resolve();
  if (!globalForDb.dbReady) {
    globalForDb.dbReady = initializeDatabase();
  }
  return globalForDb.dbReady;
}
