import { NextRequest, NextResponse } from "next/server";
import { ensureDatabase } from "@/lib/ensure-db";
import { cleanEnvVar } from "@/lib/admin-env";
import { createSession, findUserByEmail, syncAdminFromEnv, verifyPassword } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    await ensureDatabase();
  } catch (error) {
    console.error("[login] database init failed:", error);
    return NextResponse.json({ error: "Service unavailable" }, { status: 503 });
  }
  const body = await req.json();
  const email = cleanEnvVar(body.email).toLowerCase();
  const password = cleanEnvVar(body.password);
  if (!email || !password) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  await syncAdminFromEnv();
  const user = await findUserByEmail(email);
  if (!user || !(await verifyPassword(password, user.passwordHash))) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }
  await createSession({ id: user.id, email: user.email, name: user.name, role: user.role });
  return NextResponse.json({ ok: true });
}
