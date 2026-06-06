import { IMAGES } from "@/lib/images";

export type ServiceItem = {
  slug: string;
  title: string;
  summary: string;
  provides: string[];
  buyerPrepares: string[];
  typicalDelivery: string;
  whenToChoose: string;
  image: string;
};

export const SERVICES: ServiceItem[] = [
  {
    slug: "oem-phone-farm-box",
    title: "OEM Phone Farm Box",
    summary: "Custom chassis, slot count and exterior branding for integrators and enterprise buyers.",
    provides: ["Engineering drawing", "Prototype or volume production", "QC and burn-in", "Export packing"],
    buyerPrepares: ["Target node count", "Device model list", "Branding artwork (if any)", "Destination market"],
    typicalDelivery: "15?30 days after drawing sign-off",
    whenToChoose: "You need branded hardware for resale or internal standardization.",
    image: IMAGES.customCabinet.hero,
  },
  {
    slug: "android-motherboard-assembly",
    title: "Android Motherboard Box Assembly",
    summary: "Factory assembly of 20-node (or custom count) Android motherboard boxes with tested boards.",
    provides: ["Board sourcing", "Chassis integration", "Power and fan test", "ADB baseline check"],
    buyerPrepares: ["Board model preference", "Quantity", "ROM requirements"],
    typicalDelivery: "3?15 days depending on board supply",
    whenToChoose: "You want ready-to-run boxes, not empty chassis.",
    image: IMAGES.motherboardBox.hero,
  },
  {
    slug: "rom-customization",
    title: "ROM Customization",
    summary: "Mod ROM features: auto boot, ADB persistence, controlled OTA behavior for farm operation.",
    provides: ["ROM scope document", "Flash and test per board batch", "Rollback plan", "Release notes"],
    buyerPrepares: ["Board model", "Required behaviors list", "Acceptance test cases"],
    typicalDelivery: "5?10 days per board type",
    whenToChoose: "Unattended operation or reduced manual taps after power cycle.",
    image: IMAGES.phoneFarmBox.hero,
  },
  {
    slug: "otg-lan-deployment",
    title: "OTG/LAN Deployment",
    summary: "Network-mode deployment: IP planning, router config, scan setup and stability tuning.",
    provides: ["IP segment design", "Router/switch recommendation", "Remote cutover support", "Stability checklist"],
    buyerPrepares: ["Current device count", "Existing router model", "Network diagram if available"],
    typicalDelivery: "1?3 remote sessions after hardware on-site",
    whenToChoose: "Scaling past USB limits or building multi-box LAN farms.",
    image: IMAGES.network.hero,
  },
  {
    slug: "router-switch-configuration",
    title: "Router & Switch Configuration",
    summary: "Pre-configuration of soft router and managed switch for phone farm segments.",
    provides: ["Configured router/switch", "IP map document", "Backup config file"],
    buyerPrepares: ["Device count tier", "ISP/router constraints", "Admin credentials for remote setup"],
    typicalDelivery: "Shipped with hardware or configured remotely",
    whenToChoose: "OTG/LAN mode with 20+ devices or multi-subnet design.",
    image: IMAGES.network.detail,
  },
  {
    slug: "remote-installation-support",
    title: "Remote Installation Support",
    summary: "AnyDesk-led commissioning: software, ADB, mirror, batch control until operational.",
    provides: ["Scheduled remote session", "Handover checklist", "Follow-up within 7 days"],
    buyerPrepares: ["Windows PC ready", "Hardware powered", "Internet stable", "AnyDesk installed"],
    typicalDelivery: "Within 5 business days of hardware receipt",
    whenToChoose: "First deployment or new IT staff onboarding.",
    image: IMAGES.remoteControl.hero,
  },
  {
    slug: "bulk-packing-export",
    title: "Bulk Packing & Export Shipping",
    summary: "Export crating, palletizing and freight forwarder coordination from Guangzhou.",
    provides: ["Export-standard packing", "Commercial invoice support", "Forwarder introduction", "Tracking handoff"],
    buyerPrepares: ["Destination address", "Incoterms preference", "Import broker if needed"],
    typicalDelivery: "Aligned with production completion",
    whenToChoose: "International bulk shipment or multi-carton orders.",
    image: IMAGES.warehouse,
  },
  {
    slug: "replacement-parts",
    title: "Replacement Parts Supply",
    summary: "Fans, cables, power modules, cradles and spare boards after initial order.",
    provides: ["Parts ID by original order", "Warranty assessment", "Express parts shipment"],
    buyerPrepares: ["Original order reference", "Photo of failed part", "Chassis model"],
    typicalDelivery: "3?7 days for common parts",
    whenToChoose: "Maintenance and uptime continuity post-warranty.",
    image: IMAGES.cooling.hero,
  },
  {
    slug: "software-api-integration",
    title: "Software / API Integration Support",
    summary: "Orientation for ADB, WebSocket/script hooks and internal automation ? for testing and ops workflows.",
    provides: ["API overview doc after purchase", "Sample integration call", "Engineer Q&A session"],
    buyerPrepares: ["Your automation stack (Python/Node/etc.)", "Use case description (testing/ops)"],
    typicalDelivery: "1?2 sessions post hardware acceptance",
    whenToChoose: "Connecting farm hardware to internal CI or device ops platform.",
    image: IMAGES.remoteControl.detail,
  },
];

export const BULK_PROCESS = [
  { step: "01", title: "RFQ", desc: "Send quantity, model, connection mode, country and customization needs via email, WhatsApp or contact form." },
  { step: "02", title: "Configuration & Quote", desc: "We return BOM, ROM scope, lead time and factory quote ? usually within 24 hours." },
  { step: "03", title: "Sample or PO", desc: "Optional sample box for evaluation. Bulk orders via proforma invoice and agreed payment terms." },
  { step: "04", title: "Production & QC", desc: "Assembly, burn-in, packing in Guangzhou. Standard 3?5 days; custom 7?30 days." },
  { step: "05", title: "Shipping", desc: "Express or sea freight worldwide. Forwarder support available." },
  { step: "06", title: "Remote Setup", desc: "AnyDesk commissioning until your team confirms successful operation." },
];
