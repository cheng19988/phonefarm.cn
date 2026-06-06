import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execSync } from "node:child_process";
import { adminEnvConfigured, getAdminCredentialEpoch } from "@/lib/admin-env";
import { syncAdminFromEnv } from "@/lib/auth";
import { reconnectPrismaClient, prisma } from "@/lib/prisma";
import { resolveDatabaseUrl, resolveDbFilePath } from "@/lib/database-url";
import { seedDatabase } from "@/lib/seed-db";

const globalForDb = globalThis as unknown as { dbReady?: Promise<void> };

const SEED_DB = path.join(process.cwd(), "prisma", "data", "phonefarm-seed.db");
const SEED_ADMIN_META = path.join(process.cwd(), "prisma", "data", "seed-admin-meta.json");

function isBuildPhase() {
  return process.env.NEXT_PHASE === "phase-production-build";
}

function deploySeedMarkerPath() {
  const deploymentId = process.env.VERCEL_DEPLOYMENT_ID || "local";
  return path.join(os.tmpdir(), `.phonefarm-seed-applied-${deploymentId}`);
}

function adminEpochMarkerPath() {
  return path.join(os.tmpdir(), ".phonefarm-admin-epoch");
}

function readBundledAdminEpoch() {
  if (!fs.existsSync(SEED_ADMIN_META)) return null;
  try {
    const meta = JSON.parse(fs.readFileSync(SEED_ADMIN_META, "utf8")) as {
      credentialEpoch?: string;
    };
    return meta.credentialEpoch ?? null;
  } catch {
    return null;
  }
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

async function copyBundledSeed(targetPath: string) {
  if (!fs.existsSync(SEED_DB)) {
    throw new Error(`Bundled seed database missing: ${SEED_DB}`);
  }
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.copyFileSync(SEED_DB, targetPath);
  await reconnectPrismaClient();
  console.log("[ensure-db] Copied bundled seed to", targetPath);
}

function shouldCopySeed(targetPath: string) {
  if (!fs.existsSync(SEED_DB)) return false;
  if (!fs.existsSync(targetPath)) return true;

  if (process.env.VERCEL) {
    if (!fs.existsSync(deploySeedMarkerPath())) return true;
    const runtimeEpoch = getAdminCredentialEpoch();
    const bundledEpoch = readBundledAdminEpoch();
    if (runtimeEpoch && bundledEpoch && runtimeEpoch !== bundledEpoch) return true;
  }

  const seedSize = fs.statSync(SEED_DB).size;
  const targetSize = fs.statSync(targetPath).size;
  return targetSize < seedSize * 0.5;
}

function markDeploySeedApplied() {
  if (!process.env.VERCEL) return;
  fs.writeFileSync(deploySeedMarkerPath(), new Date().toISOString());
}

function readAppliedAdminEpoch() {
  if (!fs.existsSync(adminEpochMarkerPath())) return null;
  try {
    return fs.readFileSync(adminEpochMarkerPath(), "utf8").trim() || null;
  } catch {
    return null;
  }
}

function markAdminEpochApplied(epoch: string) {
  fs.writeFileSync(adminEpochMarkerPath(), epoch);
}

async function ensureAdminCredentialsFresh() {
  if (!adminEnvConfigured()) return;

  const runtimeEpoch = getAdminCredentialEpoch();
  if (!runtimeEpoch) return;

  const appliedEpoch = readAppliedAdminEpoch();
  const bundledEpoch = readBundledAdminEpoch();
  const needsSync =
    appliedEpoch !== runtimeEpoch ||
    (bundledEpoch !== null && bundledEpoch !== runtimeEpoch);

  if (!needsSync) return;

  await syncAdminFromEnv();
  markAdminEpochApplied(runtimeEpoch);
  console.log("[ensure-db] Synced admin credentials from runtime env");
}

async function initializeDatabase() {
  if (isBuildPhase()) return;

  const targetPath = resolveDbFilePath(resolveDatabaseUrl());
  let copied = false;

  if (shouldCopySeed(targetPath)) {
    await copyBundledSeed(targetPath);
    markDeploySeedApplied();
    copied = true;
  }

  if ((await tableExists()) && (await contactTableReady())) {
    await ensureAdminCredentialsFresh();
    return;
  }

  if (fs.existsSync(SEED_DB)) {
    if (!copied) {
      await copyBundledSeed(targetPath);
      markDeploySeedApplied();
    }
    if ((await tableExists()) && (await contactTableReady())) {
      await ensureAdminCredentialsFresh();
      return;
    }
  }

  if (process.env.VERCEL) {
    throw new Error(`Failed to initialize database on Vercel (seed: ${fs.existsSync(SEED_DB)}, target: ${targetPath})`);
  }

  console.log("[ensure-db] Local fallback: prisma db push + seed");
  execSync("npx prisma db push", { stdio: "inherit", env: process.env });
  await seedDatabase(prisma);
  await ensureAdminCredentialsFresh();
}

export function ensureDatabase(): Promise<void> {
  if (isBuildPhase()) return Promise.resolve();
  if (!globalForDb.dbReady) {
    globalForDb.dbReady = initializeDatabase();
  }
  return globalForDb.dbReady;
}
