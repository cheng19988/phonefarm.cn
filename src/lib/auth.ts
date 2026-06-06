import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { prisma } from "./prisma";
import { getAdminCredentialEpoch, getAdminEmail, getAdminPassword } from "./admin-env";

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET || "huicheng-phonefarm-dev-secret-change-in-production"
);

export type SessionUser = {
  id: string;
  email: string;
  name: string | null;
  role: string;
};

export type DbUser = {
  id: string;
  email: string;
  passwordHash: string;
  name: string | null;
  role: string;
};

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

export async function findUserByEmail(email: string): Promise<DbUser | null> {
  const normalized = email.toLowerCase();
  const rows = await prisma.$queryRawUnsafe<DbUser[]>(
    `SELECT id, email, passwordHash, name, role FROM User WHERE LOWER(email) = ? LIMIT 1`,
    normalized
  );
  return rows[0] ?? null;
}

export async function createSession(user: SessionUser) {
  const token = await new SignJWT({
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("7d")
    .sign(secret);

  const jar = await cookies();
  jar.set("session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });
}

export async function getSession(): Promise<SessionUser | null> {
  const jar = await cookies();
  const token = jar.get("session")?.value;
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, secret);
    return {
      id: payload.id as string,
      email: payload.email as string,
      name: (payload.name as string) || null,
      role: payload.role as string,
    };
  } catch {
    return null;
  }
}

export async function destroySession() {
  const jar = await cookies();
  jar.delete("session");
}

export async function requireAdmin() {
  const session = await getSession();
  if (!session || session.role !== "admin") return null;
  return session;
}

export async function requireUser() {
  return getSession();
}

export async function ensureAdminUser() {
  const email = getAdminEmail();
  const existing = await findUserByEmail(email);
  if (existing) return existing;
  return prisma.user.create({
    data: {
      email,
      name: "Admin",
      role: "admin",
      passwordHash: await hashPassword(getAdminPassword() || "admin123456"),
    },
  });
}

/** Align admin row with runtime ADMIN_EMAIL / ADMIN_PASSWORD from Vercel. */
export async function syncAdminFromEnv() {
  const password = getAdminPassword();
  const email = getAdminEmail();
  if (!password) return false;

  await prisma.$executeRawUnsafe(
    `DELETE FROM User WHERE LOWER(email) = ? AND email <> ?`,
    email,
    email
  );

  await prisma.user.upsert({
    where: { email },
    update: { role: "admin", passwordHash: await hashPassword(password) },
    create: {
      email,
      name: "Admin",
      role: "admin",
      passwordHash: await hashPassword(password),
    },
  });

  const epoch = getAdminCredentialEpoch();
  if (epoch) {
    fs.writeFileSync(path.join(os.tmpdir(), ".phonefarm-admin-epoch"), epoch);
  }
  return true;
}
