import path from "node:path";

const VERCEL_SQLITE_PATH = "file:/tmp/phonefarm.db";

/** Resolve SQLite path for local dev and Vercel serverless. */
export function resolveDatabaseUrl() {
  const raw = process.env.DATABASE_URL || "file:./prisma/dev.db";
  if (!raw.startsWith("file:")) return raw;

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
  if (!databaseUrl.startsWith("file:")) {
    return path.join(process.cwd(), "dev.db");
  }
  let filePath = databaseUrl.slice("file:".length);
  if (filePath.startsWith("//")) filePath = filePath.slice(1);
  return path.isAbsolute(filePath) ? filePath : path.join(process.cwd(), filePath);
}
