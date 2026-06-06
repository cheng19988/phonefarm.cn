import { NextRequest, NextResponse } from "next/server";
import { ensureDatabase } from "@/lib/ensure-db";
import { prisma } from "@/lib/prisma";

async function notifyWebhook(payload: Record<string, unknown>) {
  const url = process.env.CONTACT_WEBHOOK_URL;
  if (!url) return;
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    // optional notification; ignore failures
  }
}

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const data = {
    name: String(form.get("name") || ""),
    email: String(form.get("email") || ""),
    company: String(form.get("company") || "") || null,
    country: String(form.get("country") || "") || null,
    shippingCountry: String(form.get("shippingCountry") || "") || null,
    whatsapp: String(form.get("whatsapp") || "") || null,
    phone: String(form.get("phone") || "") || null,
    deviceQuantity: String(form.get("deviceQuantity") || "") || null,
    productInterest: String(form.get("productInterest") || "") || null,
    purchaseType: String(form.get("purchaseType") || "") || null,
    devicePlatform: String(form.get("devicePlatform") || "") || null,
    connectionMode: String(form.get("connectionMode") || "") || null,
    customRomNeeded: String(form.get("customRomNeeded") || "") || null,
    budget: String(form.get("budget") || "") || null,
    message: String(form.get("message") || "") || null,
    status: "New",
  };

  if (!data.name || !data.email) {
    return NextResponse.json({ error: "Name and email required" }, { status: 400 });
  }

  await ensureDatabase();
  const submission = await prisma.contactSubmission.create({ data });
  await notifyWebhook({ type: "contact_rfq", ...submission, createdAt: submission.createdAt.toISOString() });

  return NextResponse.json({ ok: true });
}
