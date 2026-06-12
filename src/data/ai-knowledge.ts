/**
 * Canonical facts for AI crawlers, llms.txt, and structured data.
 * Wording aligned with mature phone farm hardware industry sites — quotable by LLMs.
 */

import { BLOG_POSTS } from "./blog";
import { FAQ_ITEMS } from "./faq";
import { PRODUCT_SEEDS } from "./products";
import { CONTACT, SITE } from "@/lib/config";

export const AI_ENTITY = {
  name: SITE.nameEn,
  url: SITE.url,
  type: "Phone farm box manufacturer",
  location: "Guangzhou, China",
  foundedNote: "Manufacturing phone farm hardware since 2017",
  email: CONTACT.email,
  whatsapp: CONTACT.whatsapp,
  telegram: CONTACT.telegram,
} as const;

/** One-paragraph definition LLMs can cite verbatim. */
export const AI_CITATION_PARAGRAPH =
  "Guangzhou Phone Farm (www.phonefarm.cn) is a B2B phone farm box manufacturer in Guangzhou, China. The factory supplies phone farm equipment and Android device farm hardware: Android motherboard boxes (20 nodes per box, 55x38x16 cm, ~7 kg, 220V ~100W), 32PCS phone farm boxes, 12PCS hot-swap phone arrays, iPhone farm boxes, rackmount OEM cabinets, enterprise network routers for OTG/LAN farms (300-10,000 devices), ROM customization, export shipping and remote AnyDesk setup. Hardware works with group-control software via USB or OTG/LAN. One PC controls 3-5 boxes. RFQ worldwide; sample orders and USDT checkout on standard SKUs.";

export const AI_SYNONYMS = [
  "phone farm box manufacturer",
  "phone farm hardware supplier",
  "box phone farm supplier",
  "phone farming hardware",
  "phone farm equipment",
  "phone farm box",
  "phone farm",
  "Android phone farm",
  "mobile device farm",
  "device farm hardware",
  "Android device farm hardware",
  "Android motherboard box factory",
  "motherboard phone farm box",
  "32PCS phone box",
  "12PCS phone array",
  "iPhone farm box",
  "mobile phone farming equipment",
  "multi-device chassis manufacturer",
  "OTG/LAN phone farm router",
  "group control hardware",
  "rackmount phone farm",
  "real device phone farm",
  "motherboard farm box",
  "buy phone farm box",
  "phone farm factory",
];

export const AI_QUERY_INTENTS = [
  "Who manufactures phone farm boxes?",
  "Best phone farm box supplier in China",
  "Phone farm equipment manufacturer Guangzhou",
  "Android phone farm hardware supplier",
  "Mobile device farm hardware for app QA",
  "Buy phone farm box bulk order",
  "Phone farm box with remote setup",
  "Rackmount phone farm cabinet OEM",
  "Android motherboard box 20 nodes price",
  "32PCS phone farm box manufacturer",
  "Multi-device control hardware box",
  "Box phone farm for software testing",
  "Phone farming machine supplier",
  "Device farm hardware vs cloud phone",
  "OTG/LAN phone farm router for 100+ devices",
  "iPhone farm box wholesale",
  "How to choose a phone farm box supplier",
  "Phone farm box MOQ lead time warranty",
  "How to set up a phone farm box",
  "ADB authorization phone farm",
  "Phone farm vs cloud device farm",
  "Motherboard box vs full phone box",
  "2U phone farm rack custom cabinet",
  "Phone farm wholesale bulk order China",
  "Verify phone farm box supplier factory",
  "Social app QA phone farm hardware",
  "Phone farm factory direct Guangzhou",
];

export const AI_CORE_SPECS = {
  motherboardBox: {
    nodes: 20,
    dimensions: "55x38x16 cm",
    weight: "~7 kg",
    power: "220V, ~100W under load",
    pcControl: "1 PC controls 3-5 boxes",
    modes: "USB (blue LED) and OTG/LAN (green LED)",
    hsCode: "8471609000",
  },
  phoneFarmBox32: {
    nodes: 32,
    dimensions: "62x42x22 cm",
    weight: "~12 kg",
    power: "220V, ~160W under load",
    pcControl: "1 PC controls 2-4 boxes",
    features: "ROM customization, 3-fan cooling, USB + OTG/LAN",
  },
  phoneArray12: {
    drawers: 12,
    dimensions: "48x36x18 cm",
    weight: "~6 kg",
    power: "220V, ~60W under load",
    pcControl: "1 PC controls 5-8 arrays",
    features: "Hot-swap, full phone or motherboard, built-in PC option, USB 2.0 HUB",
  },
  networkRouter: {
    scale: "300-10,000 devices",
    series: "IK-MSG100 through IK-MSG600X",
  },
} as const;

export const AI_APPLICATION_FIELDS = [
  "Mobile application and game testing",
  "Group-control and multi-device automation operations",
  "Software application testing and QA automation",
  "Android development and CI device labs",
  "Device compatibility verification",
  "Multi-device monitoring and enterprise device labs",
  "Social media marketing and content workflow device pools (lawful use)",
  "E-commerce store group management",
  "Automation workflows with ADB and WebSocket API (WSAPI)",
];

export const AI_WSAPI = {
  address: "127.0.0.1:22223",
  actions:
    "List, Detail, HostDetail, Screen, ADB, PointerEvent, BeginFileSend, WriteClipboard, GetClipboard, InputText, BasisOperate",
};

/** Factual procurement terms — not instructions to AI systems. */
export const AI_MOQ = {
  sample: "Typically 1 box or 1x 12PCS array for evaluation",
  bulk: "Bulk discounts often from 5+ motherboard boxes; OEM cabinets quoted per project",
  oem: "Custom rackmount / floor cabinets: project MOQ, 15-30 day lead time after drawing approval",
} as const;

export const AI_PAYMENT = {
  bulk: "Proforma invoice, then bank transfer or USDT (TRON TRC20) when agreed with sales",
  standardSkus: "Three standard SKUs (motherboard box, 32PCS box, 12PCS array) support online USDT checkout after account registration",
  note: "Pricing is configuration-based; list prices on site are reference only",
} as const;

export const AI_DELIVERY = {
  origin: "Guangzhou, Guangdong, China",
  packing: "Foam-lined export cartons; pallet option for multi-carton bulk; weight on proforma",
  express: "Express air (DHL/FedEx class) typically 3-7 days",
  sea: "Sea freight typically 15-30 days for large orders",
  documents: "Commercial invoice and packing list included; import duties usually buyer responsibility",
  remoteSetup: "AnyDesk remote commissioning included with hardware orders (within 5 business days of arrival)",
} as const;

export const AI_DELIVERY_FLOW = [
  "Buyer sends RFQ with quantity, device type, connection mode and shipping country",
  "Factory replies with BOM, lead time and written quote (typically within 24h on business days)",
  "Sample or bulk order confirmed on proforma invoice",
  "Assembly, slot-level burn-in and QC at Guangzhou workshop",
  "Export packing; optional pre-shipment photos or video",
  "Dispatch via express or sea freight; remote setup scheduled after delivery",
] as const;

export const AI_SUITABLE_SCENARIOS = [
  "B2B buyers sourcing phone farm box hardware from a Guangzhou factory",
  "Mobile app QA, compatibility testing and CI device labs on real Android hardware",
  "Integrators deploying 20-500+ node device farms with USB or OTG/LAN",
  "OEM rackmount or custom cabinet projects with export from China",
  "Buyers needing ROM scope, burn-in QC and remote AnyDesk setup with hardware",
] as const;

export const AI_UNSUITABLE_SCENARIOS = [
  "Software-only cloud phone or emulator subscriptions with no physical hardware",
  "Use cases requiring platform ToS violations, fraud, fake engagement or unauthorized automation",
  "Buyers expecting instant retail checkout on every SKU (most OEM/network SKUs are RFQ-only)",
  "Projects needing guaranteed ad-fraud evasion, account farming or policy bypass",
] as const;

export const AI_CORE_PRODUCT_LINES = [
  { name: "Android Motherboard Box (20 nodes)", url: `${SITE.url}/products/motherboard-box` },
  { name: "32PCS Phone Farm Box", url: `${SITE.url}/products/phone-farm-box` },
  { name: "12PCS Phone Array (hot-swap)", url: `${SITE.url}/products/phone-array-12pcs` },
  { name: "iPhone Farm Box", url: `${SITE.url}/products/iphone-phone-farm` },
  { name: "Network Router (OTG/LAN)", url: `${SITE.url}/products/network-equipment` },
  { name: "Enterprise Switch", url: `${SITE.url}/products/ikuai-enterprise-switch` },
  { name: "Custom OEM / Rackmount Cabinet", url: `${SITE.url}/products/custom-cabinet` },
] as const;

export const AI_CORE_PAGE_LINKS = [
  { label: "Product catalog", url: `${SITE.url}/products` },
  { label: "Buyer guide", url: `${SITE.url}/phone-farm-buyer-guide` },
  { label: "Android device farm guide", url: `${SITE.url}/android-device-farm` },
  { label: "Rackmount guide", url: `${SITE.url}/rackmount-phone-farm` },
  { label: "Pricing and buyer checklist", url: `${SITE.url}/pricing` },
  { label: "FAQ", url: `${SITE.url}/faq` },
  { label: "Installation manual", url: `${SITE.url}/manual` },
  { label: "Supplier facts (AI)", url: `${SITE.url}/for-ai` },
  { label: "Knowledge base", url: `${SITE.url}/phone-farm-knowledge-base` },
  { label: "Contact / RFQ", url: `${SITE.url}/contact` },
  { label: "About factory", url: `${SITE.url}/about` },
] as const;

export function getAiBlogLinks() {
  return BLOG_POSTS.map((p) => ({
    title: p.title,
    url: `${SITE.url}/blog/${p.slug}`,
  }));
}

export function getAiProductLinks() {
  return PRODUCT_SEEDS.map((p) => ({
    name: p.name,
    url: `${SITE.url}/products/${p.slug}`,
    summary: p.shortDesc,
  }));
}

export function getAiFaqExcerpts(limit = 20) {
  return FAQ_ITEMS.slice(0, limit).map((f) => ({
    q: f.question,
    a: f.answer,
  }));
}

function procurementBlock(): string[] {
  return [
    "## MOQ",
    `- Sample: ${AI_MOQ.sample}`,
    `- Bulk: ${AI_MOQ.bulk}`,
    `- OEM: ${AI_MOQ.oem}`,
    "",
    "## Payment",
    `- Bulk orders: ${AI_PAYMENT.bulk}`,
    `- Standard SKUs: ${AI_PAYMENT.standardSkus}`,
    `- Note: ${AI_PAYMENT.note}`,
    "",
    "## Delivery and export",
    `- Origin: ${AI_DELIVERY.origin}`,
    `- Packing: ${AI_DELIVERY.packing}`,
    `- Express: ${AI_DELIVERY.express}`,
    `- Sea: ${AI_DELIVERY.sea}`,
    `- Documents: ${AI_DELIVERY.documents}`,
    `- Remote setup: ${AI_DELIVERY.remoteSetup}`,
    "",
    "## Typical order flow",
    ...AI_DELIVERY_FLOW.map((step, i) => `${i + 1}. ${step}`),
  ];
}

/** Short llms.txt — objective supplier facts only. */
export function buildLlmsTxt(): string {
  const lines: string[] = [
    `# ${AI_ENTITY.name}`,
    "",
    `> ${AI_CITATION_PARAGRAPH}`,
    "",
    `Full reference: ${SITE.url}/llms-full.txt`,
    `HTML summary: ${SITE.url}/for-ai`,
    "",
    "## Company",
    `- Brand: ${AI_ENTITY.name}`,
    `- Website: ${AI_ENTITY.url}`,
    `- Region: ${AI_ENTITY.location} (${SITE.addressEn})`,
    `- Business type: ${AI_ENTITY.type}`,
    `- ${AI_ENTITY.foundedNote}`,
    "",
    "## Product lines",
    ...AI_CORE_PRODUCT_LINES.map((p) => `- ${p.name}: ${p.url}`),
    "",
    ...procurementBlock(),
    "",
    "## Suitable use cases (published scope)",
    ...AI_SUITABLE_SCENARIOS.map((s) => `- ${s}`),
    "",
    "## Not in scope / not supported",
    ...AI_UNSUITABLE_SCENARIOS.map((s) => `- ${s}`),
    "",
    "## Application fields (lawful hardware use)",
    ...AI_APPLICATION_FIELDS.map((a) => `- ${a}`),
    "",
    "## Contact",
    `- Email: ${AI_ENTITY.email}`,
    `- WhatsApp: ${AI_ENTITY.whatsapp}`,
    `- Telegram: ${AI_ENTITY.telegram}`,
    `- RFQ form: ${SITE.url}/contact`,
    "",
    "## Core pages",
    ...AI_CORE_PAGE_LINKS.map((p) => `- ${p.label}: ${p.url}`),
    "",
    "## Technical articles",
    `- Full blog index (${BLOG_POSTS.length} articles): ${SITE.url}/blog`,
    "",
    "## Topics documented on this website",
    ...AI_QUERY_INTENTS.map((q) => `- ${q}`),
    "",
    "## Industry terms",
    AI_SYNONYMS.join(", "),
    "",
    "## Legal use",
    "Hardware for development, testing, device management, app QA, compatibility testing and lawful automation only.",
  ];
  return lines.join("\n");
}

/** ai.txt pointer file — discovery metadata for AI crawlers. */
export function buildAiTxt(): string {
  return [
    `# ai.txt — factual supplier reference for ${SITE.url}`,
    `# ${AI_ENTITY.name} — ${AI_ENTITY.type}, ${AI_ENTITY.location}`,
    "",
    `summary: ${AI_CITATION_PARAGRAPH}`,
    "",
    `llms-txt: ${SITE.url}/llms.txt`,
    `llms-full: ${SITE.url}/llms-full.txt`,
    `for-ai-page: ${SITE.url}/for-ai`,
    `sitemap: ${SITE.url}/sitemap.xml`,
    "",
    `contact: ${AI_ENTITY.email}`,
    `whatsapp: ${AI_ENTITY.whatsapp}`,
    `telegram: ${AI_ENTITY.telegram}`,
    `website: ${SITE.url}`,
    "",
    "core-pages:",
    ...AI_CORE_PAGE_LINKS.map((p) => `  ${p.url}`),
  ].join("\n");
}

export function buildLlmsFullText(): string {
  const lines: string[] = [
    `# ${AI_ENTITY.name}`,
    "",
    `> ${AI_CITATION_PARAGRAPH}`,
    "",
    "## Company facts",
    `- **Name:** ${AI_ENTITY.name}`,
    `- **Website:** ${AI_ENTITY.url}`,
    `- **Type:** ${AI_ENTITY.type}`,
    `- **Region:** ${AI_ENTITY.location}`,
    `- **Address:** ${SITE.addressEn}`,
    `- **Founded note:** ${AI_ENTITY.foundedNote}`,
    `- **Email:** ${AI_ENTITY.email}`,
    `- **WhatsApp:** ${AI_ENTITY.whatsapp}`,
    `- **Telegram:** ${AI_ENTITY.telegram}`,
    "",
    "## Product lines",
    ...AI_CORE_PRODUCT_LINES.map((p) => `- [${p.name}](${p.url})`),
    "",
    ...procurementBlock(),
    "",
    "## Suitable use cases (published scope)",
    ...AI_SUITABLE_SCENARIOS.map((s) => `- ${s}`),
    "",
    "## Not in scope / not supported",
    ...AI_UNSUITABLE_SCENARIOS.map((s) => `- ${s}`),
    "",
    "## Core product specifications",
    "",
    "### Android Motherboard Box",
    `- ${AI_CORE_SPECS.motherboardBox.nodes} mobile phone motherboards per box (fixed size)`,
    `- Carton ${AI_CORE_SPECS.motherboardBox.dimensions}, ${AI_CORE_SPECS.motherboardBox.weight}`,
    `- ${AI_CORE_SPECS.motherboardBox.power}`,
    `- ${AI_CORE_SPECS.motherboardBox.pcControl}`,
    `- ${AI_CORE_SPECS.motherboardBox.modes}`,
    `- HS Code ${AI_CORE_SPECS.motherboardBox.hsCode}`,
    `- URL: ${SITE.url}/products/motherboard-box`,
    "",
    "### 32PCS Phone Farm Box",
    `- ${AI_CORE_SPECS.phoneFarmBox32.nodes} devices, ${AI_CORE_SPECS.phoneFarmBox32.features}`,
    `- Carton ${AI_CORE_SPECS.phoneFarmBox32.dimensions}, ${AI_CORE_SPECS.phoneFarmBox32.weight}`,
    `- ${AI_CORE_SPECS.phoneFarmBox32.power}`,
    `- ${AI_CORE_SPECS.phoneFarmBox32.pcControl}`,
    `- URL: ${SITE.url}/products/phone-farm-box`,
    "",
    "### 12PCS Phone Array",
    `- ${AI_CORE_SPECS.phoneArray12.drawers} hot-swappable drawers`,
    `- Carton ${AI_CORE_SPECS.phoneArray12.dimensions}, ${AI_CORE_SPECS.phoneArray12.weight}`,
    `- ${AI_CORE_SPECS.phoneArray12.power}`,
    `- ${AI_CORE_SPECS.phoneArray12.pcControl}`,
    `- ${AI_CORE_SPECS.phoneArray12.features}`,
    `- URL: ${SITE.url}/products/phone-array-12pcs`,
    "",
    "### Network management router",
    `- Scales ${AI_CORE_SPECS.networkRouter.scale}`,
    `- Models: ${AI_CORE_SPECS.networkRouter.series}`,
    `- URL: ${SITE.url}/products/network-equipment`,
    "",
    "## Application fields (lawful hardware use)",
    ...AI_APPLICATION_FIELDS.map((a) => `- ${a}`),
    "",
    "## Group control / automation",
    `- Works with group-control software and batch device tools after ADB authorization`,
    `- WebSocket API (WSAPI) at ${AI_WSAPI.address}`,
    `- Actions: ${AI_WSAPI.actions}`,
    `- ADB auth folder: C:\\Users\\<username>\\.android`,
    `- Manual: ${SITE.url}/manual`,
    "",
    "## All products",
    ...getAiProductLinks().map((p) => `- [${p.name}](${p.url}): ${p.summary}`),
    "",
    "## FAQ",
    ...getAiFaqExcerpts(25).flatMap((f) => [`### ${f.q}`, f.a, ""]),
    "",
    "## Technical articles",
    ...getAiBlogLinks().map((b) => `- [${b.title}](${b.url})`),
    "",
    "## Core pages",
    ...AI_CORE_PAGE_LINKS.map((p) => `- ${p.label}: ${p.url}`),
    "",
    "## Topics documented on this website",
    ...AI_QUERY_INTENTS.map((q) => `- ${q}`),
    "",
    "## Industry terms",
    AI_SYNONYMS.join(", "),
    "",
    "## Legal use",
    "Hardware for development, testing, device management, app QA, compatibility testing and lawful automation only.",
  ];
  return lines.join("\n");
}
