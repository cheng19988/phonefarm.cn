import path from "node:path";
import { PROJECT_ROOT } from "@/lib/project-root";

const VERCEL_SQLITE_PATH = "file:/tmp/phonefarm.db";
const VERCEL_DB_FILE = "/tmp/phonefarm.db";

function cleanDatabaseUrl(raw: string) {
  return raw.trim().replace(/^["']|["']$/g, "");
}

/** Resolve SQLite path for local dev and Vercel serverless. */
export function resolveDatabaseUrl() {
  const raw = cleanDatabaseUrl(process.env.DATABASE_URL || "file:./prisma/dev.db");

  if (!raw.startsWith("file:")) {
    if (process.env.VERCEL) {
      console.warn(
        "[database] DATABASE_URL is not SQLite file: — falling back to /tmp on Vercel"
      );
      return VERCEL_SQLITE_PATH;
    }
    return raw;
  }

  let filePath = raw.slice("file:".length);
  if (filePath.startsWith("//")) filePath = filePath.slice(1);

  const isAbsolute =
    path.isAbsolute(filePath) || /^[A-Za-z]:[\\/]/.test(filePath);
  if (process.env.VERCEL && !isAbsolute) {
    return VERCEL_SQLITE_PATH;
  }

  return raw;
}

export function resolveDbFilePath(databaseUrl: string) {
  const url = cleanDatabaseUrl(databaseUrl);
  if (!url.startsWith("file:")) {
    return path.join(PROJECT_ROOT, "prisma", "dev.db");
  }
  let filePath = url.slice("file:".length);
  if (filePath.startsWith("//")) filePath = filePath.slice(1);
  if (path.isAbsolute(filePath)) return filePath;
  if (process.env.VERCEL) return VERCEL_DB_FILE;
  return path.join(PROJECT_ROOT, filePath);
}
