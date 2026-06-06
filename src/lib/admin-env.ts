import { createHash } from "node:crypto";

/** Normalize env vars from Vercel / shell (quotes, whitespace). Never log return values. */
export function cleanEnvVar(value: string | undefined | null): string {
  if (!value) return "";
  return value.trim().replace(/^["']|["']$/g, "");
}

export function getAdminEmail(): string {
  return (cleanEnvVar(process.env.ADMIN_EMAIL) || "admin@phonefarm.cn").toLowerCase();
}

export function getAdminPassword(): string {
  return cleanEnvVar(process.env.ADMIN_PASSWORD);
}

export function adminEnvConfigured(): boolean {
  return Boolean(getAdminPassword());
}

/** Fingerprint for credential sync checks — never log or persist raw password. */
export function getAdminCredentialEpoch(): string | null {
  const password = getAdminPassword();
  if (!password) return null;
  const email = getAdminEmail();
  return createHash("sha256").update(`${email}|${password}`).digest("hex");
}
