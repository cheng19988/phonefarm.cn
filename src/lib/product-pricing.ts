/**
 * Reference pricing map (cxtfactory.com product equivalents).
 *
 * cxtfactory.com lists no public USD prices (RFQ only). Indicative list prices below
 * align our SKU specs to the same factory product types (20-node box, 32PCS, 12PCS array)
 * using the published CXT Alibaba range (~USD 480–1640 for 20-node chassis rigs) at a
 * conservative mid-tier chassis-only baseline. Device/motherboard modules remain RFQ.
 */
export const REFERENCE_PRICE_NOTES: Record<string, string> = {
  "motherboard-box":
    "Reference: CXT Android Motherboard Box — 20 nodes, 55×38×16 cm, ~7 kg, USB + OTG/LAN. Chassis list price; motherboard modules quoted per model.",
  "phone-farm-box":
    "Reference: CXT 32PCS Phone Box — unified 32-device chassis with ROM customization scope. List price for standard chassis; device mix confirmed on RFQ.",
  "phone-array-12pcs":
    "Reference: CXT 12PCS Phone Array — 12 hot-swappable drawers, phone or motherboard. List price for standard array chassis.",
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
