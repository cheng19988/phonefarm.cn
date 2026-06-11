import { NextRequest, NextResponse } from "next/server";
import { isContactRateLimited, isContactSpam } from "@/lib/contact-guard";
import { ensureDatabase } from "@/lib/ensure-db";
import { notifyNewContactSubmission } from "@/lib/notifications";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const spamReason = isContactSpam(form);
  if (spamReason === "spam") {
    return NextResponse.json({ ok: true });
  }
  if (spamReason === "too_fast") {
    return NextResponse.json({ error: "Please wait a moment and try again." }, { status: 429 });
  }
  if (spamReason === "invalid_email") {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }
  const data = {
    name: String(form.get("name") || "").trim(),
    email: String(form.get("email") || "").trim().toLowerCase(),
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

  const rateLimited = await isContactRateLimited(
    (email, since) =>
      prisma.contactSubmission.count({
        where: { email, createdAt: { gte: since } },
      }),
    data.email
  );
  if (rateLimited) {
    return NextResponse.json({ error: "Too many RFQ submissions. Please try again later or contact us on WhatsApp." }, { status: 429 });
  }

  try {
    const submission = await prisma.contactSubmission.create({ data });
    try {
      await notifyNewContactSubmission(submission);
    } catch (error) {
      console.warn("[contact] notification failed:", error instanceof Error ? error.message : "unknown");
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] create failed:", error);
    return NextResponse.json({ error: "Unable to save RFQ" }, { status: 503 });
  }
}
