import { SITE } from "@/lib/config";

type ContactSubmissionNotify = {
  id: string;
  name: string;
  email: string;
  company: string | null;
  country: string | null;
  shippingCountry: string | null;
  whatsapp: string | null;
  phone: string | null;
  deviceQuantity: string | null;
  productInterest: string | null;
  purchaseType: string | null;
  devicePlatform: string | null;
  connectionMode: string | null;
  customRomNeeded: string | null;
  budget: string | null;
  message: string | null;
  createdAt: Date;
};

const PURCHASE_TYPE_LABELS: Record<string, string> = {
  "motherboard-box": "Android motherboard box",
  "phone-farm-box": "32PCS phone farm box",
  "phone-array": "12PCS phone array",
  "phone-array-12pcs": "12PCS phone array",
  "iphone": "iPhone farm box",
  "iphone-phone-farm": "iPhone farm box",
  network: "Router / switch",
  oem: "OEM / custom cabinet",
  service: "Factory service",
  parts: "Replacement parts",
};

const DEVICE_PLATFORM_LABELS: Record<string, string> = {
  android: "Android",
  iphone: "iPhone",
  mixed: "Mixed / not sure",
};

const CONNECTION_MODE_LABELS: Record<string, string> = {
  usb: "USB",
  "otg-lan": "OTG-LAN",
  "not-sure": "Not sure",
};

const CUSTOM_ROM_LABELS: Record<string, string> = {
  yes: "Yes",
  no: "No",
  "not-sure": "Not sure",
};

function label(map: Record<string, string>, value: string | null | undefined, fallback = "-") {
  if (!value) return fallback;
  return map[value] || value;
}

function line(labelText: string, value: string | null | undefined) {
  const v = (value || "").trim();
  return `${labelText}: ${v || "-"}`;
}

/** Plain-text RFQ message for Telegram / logs (no Markdown). */
export function formatContactSubmissionMessage(submission: ContactSubmissionNotify) {
  const adminUrl = `${SITE.url.replace(/\/$/, "")}/admin`;
  const productType = label(PURCHASE_TYPE_LABELS, submission.purchaseType);
  const productDetail = submission.productInterest?.trim() || "-";
  const contactHandle = submission.whatsapp?.trim() || submission.phone?.trim() || "-";

  return [
    "New RFQ - phonefarm.cn",
    "",
    line("Name", submission.name),
    line("Email", submission.email),
    line("Company", submission.company),
    line("Country", submission.country),
    line("WhatsApp / Telegram", contactHandle),
    "",
    line("Product Type", productType),
    line("Product Detail", productDetail),
    line("Target Quantity", submission.deviceQuantity),
    line("Device Type", label(DEVICE_PLATFORM_LABELS, submission.devicePlatform)),
    line("Connection Mode", label(CONNECTION_MODE_LABELS, submission.connectionMode)),
    line("Custom ROM", label(CUSTOM_ROM_LABELS, submission.customRomNeeded)),
    line("Shipping Country", submission.shippingCountry),
    line("Budget", submission.budget),
    "",
    "Message:",
    (submission.message || "").trim() || "-",
    "",
    "Admin:",
    adminUrl,
  ].join("\n");
}

export async function sendContactWebhookNotification(payload: Record<string, unknown>) {
  const url = process.env.CONTACT_WEBHOOK_URL?.trim();
  if (!url) return;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      console.warn("[notify] webhook failed:", res.status);
    }
  } catch (error) {
    console.warn("[notify] webhook error:", error instanceof Error ? error.message : "unknown");
  }
}

export async function sendTelegramNotification(text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
  const chatId = process.env.TELEGRAM_NOTIFY_CHAT_ID?.trim();
  if (!token || !chatId) return;

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        disable_web_page_preview: true,
      }),
    });
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.warn("[notify] telegram failed:", res.status, body.slice(0, 200));
    }
  } catch (error) {
    console.warn("[notify] telegram error:", error instanceof Error ? error.message : "unknown");
  }
}

export async function notifyNewContactSubmission(submission: ContactSubmissionNotify) {
  const payload = {
    type: "contact_rfq",
    ...submission,
    createdAt: submission.createdAt.toISOString(),
  };

  const message = formatContactSubmissionMessage(submission);

  await Promise.all([
    sendContactWebhookNotification(payload),
    sendTelegramNotification(message),
  ]);
}
