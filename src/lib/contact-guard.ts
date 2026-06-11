/** Honeypot + timing checks for RFQ spam (no external deps). */

const MIN_SUBMIT_MS = 2500;

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
