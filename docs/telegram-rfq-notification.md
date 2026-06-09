# Telegram RFQ notifications (phonefarm.cn)

Optional. The site and Contact form work without Telegram. RFQ submissions are always saved to the database first; Telegram is a best-effort alert only.

## Environment variables

| Variable | Description |
|----------|-------------|
| `TELEGRAM_BOT_TOKEN` | Token from [@BotFather](https://t.me/BotFather) |
| `TELEGRAM_NOTIFY_CHAT_ID` | Chat or group ID that receives RFQ alerts |

Optional: `CONTACT_WEBHOOK_URL` — JSON POST webhook for the same payload (also non-blocking).

## Vercel Production setup

1. Open [Vercel](https://vercel.com) → **phonefarm.cn** project → **Settings** → **Environment Variables**.
2. Add both variables for **Production** (and Preview if you want staging alerts).
3. **Redeploy** the latest `main` deployment (Deployments → ⋯ → Redeploy). New env vars do not apply until redeploy.
4. In Telegram, start a chat with your bot or add it to the target group so it can send messages.
5. Get `TELEGRAM_NOTIFY_CHAT_ID`:
   - Personal chat: message [@userinfobot](https://t.me/userinfobot) or call `getUpdates` after messaging the bot.
   - Group: add the bot, send a message, read `chat.id` from `getUpdates` (often negative for groups).

## Verify (local, uses your `.env` only)

```bash
npm run test:telegram
```

Success prints `Telegram test message sent successfully`. Missing vars exit with a clear error — no tokens are logged.

## Verify (production)

1. After redeploy, submit a test RFQ on **https://www.phonefarm.cn/contact** (use a test name/email you can recognize).
2. Confirm the form shows success and the row appears in **Admin → Contacts**.
3. Confirm the Telegram chat receives a plain-text message starting with `New RFQ - phonefarm.cn`.

If Telegram is misconfigured or the API fails, the Contact form still returns `{ ok: true }` and the RFQ is stored. Check Vercel **Runtime Logs** for `[notify] telegram failed` warnings.

## Message format

Alerts include name, email, company, product type, quantity, device/connection fields, message body, and a link to `/admin`. No Markdown — safe for all clients.
