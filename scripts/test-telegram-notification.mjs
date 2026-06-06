/**
 * Send a test Telegram message using env vars only. Never logs tokens.
 */
import { config } from "dotenv";

config({ quiet: true });

const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
const chatId = process.env.TELEGRAM_NOTIFY_CHAT_ID?.trim();

if (!token || !chatId) {
  console.error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_NOTIFY_CHAT_ID");
  process.exit(1);
}

const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    chat_id: chatId,
    text: "Telegram test from phonefarm.cn RFQ system",
    disable_web_page_preview: true,
  }),
});

if (!res.ok) {
  const body = await res.text().catch(() => "");
  console.error("Telegram test failed:", res.status, body.slice(0, 200));
  process.exit(1);
}

console.log("Telegram test message sent successfully");
