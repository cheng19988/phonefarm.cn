import { PAYMENT } from "./config";

/** Accept +/- this amount when matching on-chain USDT to expectedAmount. */
export const PAYMENT_AMOUNT_TOLERANCE = 0.01;

export function usdToUsdt(usd: number) {
  return Math.max(PAYMENT.minAmount, Math.round(usd * 100) / 100);
}

/** Display USDT with 2 decimals — matches stored expectedAmount. */
export function formatUsdtAmount(amount: number) {
  return usdToUsdt(amount).toFixed(2);
}

export function paymentStatusLabel(status: string) {
  switch (status) {
    case "pending":
      return "Pending";
    case "paid":
      return "Paid";
    case "underpaid":
      return "Underpaid";
    case "overpaid":
      return "Overpaid";
    case "expired":
      return "Expired";
    case "manual_review":
      return "Manual review";
    default:
      return status;
  }
}
