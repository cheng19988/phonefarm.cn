/** List-price footnotes for SKUs with online checkout. */
export const LIST_PRICE_NOTES: Record<string, string> = {
  "motherboard-box":
    "Chassis list price for 20-node Android motherboard box (55x38x16 cm, USB + OTG/LAN). Motherboard model and ROM scope confirmed on RFQ before bulk orders.",
  "phone-farm-box":
    "List price for standard 32PCS phone farm chassis with ROM customization scope. Device mix and cooling layout confirmed on RFQ.",
  "phone-array-12pcs":
    "List price for 12PCS hot-swap array chassis. Cradle inserts and built-in PC option quoted separately if needed.",
};

export function canBuyOnline(priceUsd: number, stock: number) {
  return priceUsd > 0 && stock > 0;
}

export function formatListPrice(priceUsd: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(priceUsd);
}
