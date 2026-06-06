import { NextRequest, NextResponse } from "next/server";
import { ensureDatabase } from "@/lib/ensure-db";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";

const VALID_STATUSES = ["New", "Contacted", "Quoted", "Closed", "Spam"] as const;

export async function GET() {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  await ensureDatabase();

  const contacts = await prisma.contactSubmission.findMany({
    orderBy: { createdAt: "desc" },
    take: 50,
  });

  return NextResponse.json(contacts);
}

export async function PATCH(req: NextRequest) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  await ensureDatabase();

  const { id, status } = await req.json();
  if (!id || !status) return NextResponse.json({ error: "id and status required" }, { status: 400 });
  if (!VALID_STATUSES.includes(status)) {
    return NextResponse.json({ error: "Invalid status" }, { status: 400 });
  }

  const updated = await prisma.contactSubmission.update({
    where: { id },
    data: { status },
  });

  return NextResponse.json(updated);
}
