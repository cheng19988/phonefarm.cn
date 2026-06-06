import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";

function csvEscape(value: string | null | undefined) {
  const s = value ?? "";
  if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

export async function GET() {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const rows = await prisma.contactSubmission.findMany({ orderBy: { createdAt: "desc" } });
  const header = [
    "createdAt",
    "name",
    "email",
    "company",
    "country",
    "productType",
    "quantity",
    "connectionMode",
    "message",
    "status",
  ].join(",");

  const lines = rows.map((r) =>
    [
      r.createdAt.toISOString(),
      csvEscape(r.name),
      csvEscape(r.email),
      csvEscape(r.company),
      csvEscape(r.country),
      csvEscape(r.productInterest || r.purchaseType),
      csvEscape(r.deviceQuantity),
      csvEscape(r.connectionMode),
      csvEscape(r.message),
      csvEscape(r.status),
    ].join(",")
  );

  const csv = [header, ...lines].join("\n");
  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="contact-rfq-export.csv"',
    },
  });
}
