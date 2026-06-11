/** Honeypot + timing checks for RFQ spam (no external deps). */

const MIN_SUBMIT_MS = 2500;
const MAX_RFQ_PER_EMAIL_HOUR = 5;

export function isContactSpam(form: FormData): string | null {
  const honeypot = String(form.get("_company_website") || "").trim();
  if (honeypot) return "spam";

  const startedAt = Number(form.get("_form_started") || 0);
  if (startedAt > 0 && Date.now() - startedAt < MIN_SUBMIT_MS) {
    return "too_fast";
  }

  const email = String(form.get("email") || "").trim();
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "invalid_email";
  }

  return null;
}

export async function isContactRateLimited(
  countRecentForEmail: (email: string, since: Date) => Promise<number>,
  email: string
): Promise<boolean> {
  const since = new Date(Date.now() - 60 * 60 * 1000);
  const count = await countRecentForEmail(email.toLowerCase(), since);
  return count >= MAX_RFQ_PER_EMAIL_HOUR;
}

