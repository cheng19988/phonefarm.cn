import path from "node:path";

const VERCEL_SQLITE_PATH = "file:/tmp/phonefarm.db";

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
    return path.join(process.cwd(), "dev.db");
  }
  let filePath = url.slice("file:".length);
  if (filePath.startsWith("//")) filePath = filePath.slice(1);
  return path.isAbsolute(filePath) ? filePath : path.join(process.cwd(), filePath);
}
