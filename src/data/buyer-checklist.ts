/** Answers to the 12 questions procurement buyers ask most often. */

export type BuyerEssential = {
  id: string;
  question: string;
  answer: string;
};

export type PhysicalSpec = {
  slug: string;
  name: string;
  cartonSize: string;
  weight: string;
  voltage: string;
  power: string;
  pcControl: string;
  leadTime: string;
};

export const PHYSICAL_SPECS: PhysicalSpec[] = [
  {
    slug: "motherboard-box",
    name: "Android Motherboard Box (20 nodes)",
    cartonSize: "55 x 38 x 16 cm",
    weight: "~7 kg",
    voltage: "220V AC",
    power: "~100W continuous load",
    pcControl: "1 PC -> 3-5 boxes (60-100 nodes)",
    leadTime: "3-5 business days (standard config in stock)",
  },
  {
    slug: "phone-farm-box",
    name: "32PCS Phone Farm Box",
    cartonSize: "62 x 42 x 22 cm",
    weight: "~12 kg",
    voltage: "220V AC",
    power: "~160W continuous load (32 nodes)",
    pcControl: "1 PC -> 2-4 boxes (64-128 nodes); stronger CPU/RAM than 20-node setup",
    leadTime: "3-5 days in stock; 7-15 days with custom ROM",
  },
  {
    slug: "phone-array-12pcs",
    name: "12PCS Phone Array",
    cartonSize: "48 x 36 x 18 cm",
    weight: "~6 kg",
    voltage: "220V AC",
    power: "~60W continuous load (12 nodes)",
    pcControl: "1 PC -> 5-8 arrays (60-96 nodes) or use built-in PC option",
    leadTime: "3-5 days sample unit; +5-10 days for custom cradles",
  },
  {
    slug: "iphone-phone-farm",
    name: "iPhone Farm Box",
    cartonSize: "Quote-based (typical 8-20 slot chassis)",
    weight: "Quote-based",
    voltage: "220V AC",
    power: "Quote-based per slot count",
    pcControl: "macOS or Windows per tooling; scale with additional chassis",
    leadTime: "Depends on iPhone model supply - confirmed in quote",
  },
];

export const ANDROID_MODEL_GUIDANCE = {
  summary:
    "Android boxes use mainstream Samsung Galaxy boards and other widely supported chipsets with established ADB and group-control tooling. Exact model depends on supply and your ROM requirements.",
  typical:
    "Common builds: Samsung A-series and mid-range Galaxy boards (exact generation confirmed in written quote). Motherboard-box configs use headless boards without screen, battery or camera.",
  howToSpecify:
    "Send target model, Android version and any app compatibility requirements in RFQ. We confirm availability before final proforma. Sample order recommended for new model combinations.",
  iphoneNote:
    "iPhone farm boxes are fully custom - send iOS version and target iPhone models. Slot count, cradles and tooling path confirmed before production.",
};

export const BUYER_ESSENTIALS: BuyerEssential[] = [
  {
    id: "dimensions",
    question: "What are the device dimensions?",
    answer:
      "Motherboard box (20 nodes): 55 x 38 x 16 cm carton. 32PCS box: 62 x 42 x 22 cm. 12PCS array: 48 x 36 x 18 cm. iPhone and OEM cabinets are quote-based. Full table on each product page and /pricing.",
  },
  {
    id: "weight",
    question: "How much does each box weigh?",
    answer:
      "Approximate export weight: motherboard box ~7 kg; 32PCS box ~12 kg; 12PCS array ~6 kg. Bulk orders may ship on pallets - carton count and gross weight on proforma invoice.",
  },
  {
    id: "power",
    question: "What is the power consumption?",
    answer:
      "220V AC input. Typical continuous load: ~100W (20-node motherboard box), ~160W (32PCS box), ~60W (12PCS array). Actual draw depends on workload, mirror count and ROM. We size power strips and PDU in OEM quotes.",
  },
  {
    id: "voltage",
    question: "What voltage is required?",
    answer:
      "Standard factory config is 220V AC (China export). For 110V regions we can discuss transformer or regional PSU options in RFQ - confirm destination country before production.",
  },
  {
    id: "models",
    question: "Which phone models are supported?",
    answer:
      "Android: mainstream Samsung and other boards subject to supply - we confirm model list in quote. You can specify target model in RFQ. iPhone: custom quote per model and iOS version. Full phones or bare motherboards supported on 12PCS array.",
  },
  {
    id: "pc-control",
    question: "How many boxes can one PC control?",
    answer:
      "Typically 3-5 Android motherboard boxes (60-100 nodes) per Windows PC depending on CPU, RAM, USB controllers and connection mode. USB mode uses more host resources than OTG/LAN. 32PCS boxes: plan 2-4 per PC. We provide a written PC spec when you share target node count.",
  },
  {
    id: "lead-time",
    question: "How long is delivery / production time?",
    answer:
      "Standard in-stock config: 3-5 business days after payment confirmation. Custom ROM: 7-15 days. OEM cabinet: 7-30 days. Express freight 3-7 days; sea 15-30 days from Guangzhou. Exact schedule on proforma invoice.",
  },
  {
    id: "packaging",
    question: "How is hardware packed?",
    answer:
      "Each chassis is foam-lined inside a reinforced export carton. Commercial invoice and packing list included. Bulk orders: multiple cartons per shipment; pallet + stretch wrap available on request. No bare loose boards in shipping.",
  },
  {
    id: "warranty",
    question: "How long is the warranty?",
    answer:
      "Chassis / cabinet: 12 months. Motherboards: 90 days. Accessories (fans, cables, hubs): 12 months. Unauthorized modification, misuse and normal wear excluded. Terms on proforma and /terms.",
  },
  {
    id: "failure",
    question: "What if a board or fan fails?",
    answer:
      "During warranty: contact sales with order number and photo/video of the fault. We provide remote AnyDesk diagnosis first. Confirmed hardware defects: spare board, fan or cable shipped (freight per agreement) or slot repair guidance. Out of warranty: replacement parts quoted separately - see Replacement Parts service.",
  },
  {
    id: "pre-ship-photos",
    question: "Can I get photos before shipment?",
    answer:
      "Yes - on request we share factory photos, burn-in status, carton packing photos or short packing video before dispatch. Ask in RFQ or confirm with sales after PO. Remote AnyDesk inspection before bulk payment also available when arranged.",
  },
  {
    id: "remote-install",
    question: "Do you offer remote installation?",
    answer:
      "Yes. Basic remote setup via AnyDesk is included with hardware orders: power-on check, USB/OTG mode, ADB authorization, group-control software list and first batch operation. Schedule within 5 business days of hardware arrival. Advanced API integration quoted separately.",
  },
];

export type ProductProcurement = {
  moq: string;
  leadTime: string;
  packingSize: string;
  grossWeight: string;
  voltage: string;
  warranty: string;
  shippingMethod: string;
  paymentProcess: string;
};

const STANDARD_WARRANTY =
  "Chassis / cabinet: 12 months. Motherboards: 90 days. Fans, cables, hubs: 12 months.";
const STANDARD_SHIPPING =
  "From Guangzhou, China — express air (DHL/FedEx) typically 3-7 days; sea freight 15-30 days. Commercial invoice and packing list included. Import duties paid by buyer.";
const RFQ_PAYMENT =
  "Submit RFQ -> written quote and proforma -> bank transfer or agreed USDT (TRC20) -> production after payment confirmation.";
const CHECKOUT_PAYMENT =
  "Standard SKU: checkout with account -> USDT TRC20 within 30 minutes -> factory confirms and schedules production. Bulk/OEM: proforma invoice first.";

const PROCUREMENT_BY_SLUG: Record<string, ProductProcurement> = {
  "motherboard-box": {
    moq: "1 box (sample); bulk discounts from 5+ boxes",
    leadTime: "3-5 business days (standard in stock)",
    packingSize: "55 x 38 x 16 cm export carton",
    grossWeight: "~7 kg per carton",
    voltage: "220V AC",
    warranty: STANDARD_WARRANTY,
    shippingMethod: STANDARD_SHIPPING,
    paymentProcess: CHECKOUT_PAYMENT,
  },
  "phone-farm-box": {
    moq: "1 box; bulk from 3+ boxes",
    leadTime: "3-5 days in stock; 7-15 days with custom ROM",
    packingSize: "62 x 42 x 22 cm export carton",
    grossWeight: "~12 kg per carton",
    voltage: "220V AC",
    warranty: STANDARD_WARRANTY,
    shippingMethod: STANDARD_SHIPPING,
    paymentProcess: CHECKOUT_PAYMENT,
  },
  "phone-array-12pcs": {
    moq: "1 unit (sample evaluation)",
    leadTime: "3-5 days; +5-10 days for custom cradles",
    packingSize: "48 x 36 x 18 cm export carton",
    grossWeight: "~6 kg per carton",
    voltage: "220V AC",
    warranty: STANDARD_WARRANTY,
    shippingMethod: STANDARD_SHIPPING,
    paymentProcess: CHECKOUT_PAYMENT,
  },
  "iphone-phone-farm": {
    moq: "Project quote — typically 1 chassis minimum",
    leadTime: "Depends on iPhone model supply (confirmed in quote)",
    packingSize: "Custom chassis — dimensions on proforma",
    grossWeight: "On proforma invoice",
    voltage: "220V AC",
    warranty: STANDARD_WARRANTY,
    shippingMethod: STANDARD_SHIPPING,
    paymentProcess: RFQ_PAYMENT,
  },
  "network-equipment": {
    moq: "1 unit or bundled with box order",
    leadTime: "3-7 days common models; quote for large tiers",
    packingSize: "Router OEM carton — size per model (IK-MSG series)",
    grossWeight: "2-8 kg typical per unit",
    voltage: "220V AC (110V adapter discuss in RFQ)",
    warranty: "12 months hardware",
    shippingMethod: STANDARD_SHIPPING,
    paymentProcess: RFQ_PAYMENT,
  },
  "ikuai-enterprise-switch": {
    moq: "1 unit or rack bundle",
    leadTime: "Quote per port count / PoE budget",
    packingSize: "Enterprise switch carton — model on proforma",
    grossWeight: "3-12 kg depending on port count",
    voltage: "220V AC",
    warranty: "12 months",
    shippingMethod: STANDARD_SHIPPING,
    paymentProcess: RFQ_PAYMENT,
  },
};

const DEFAULT_PROCUREMENT: ProductProcurement = {
  moq: "1 unit sample or project MOQ on quote",
  leadTime: "3-30 days depending on SKU and customization",
  packingSize: "Foam-lined export carton; pallet optional for bulk",
  grossWeight: "On proforma packing list",
  voltage: "220V AC standard",
  warranty: STANDARD_WARRANTY,
  shippingMethod: STANDARD_SHIPPING,
  paymentProcess: RFQ_PAYMENT,
};

export function getProductProcurement(slug: string): ProductProcurement {
  const physical = getPhysicalSpec(slug);
  const base = PROCUREMENT_BY_SLUG[slug] ?? { ...DEFAULT_PROCUREMENT };

  if (physical && !PROCUREMENT_BY_SLUG[slug]) {
    return {
      ...base,
      packingSize: `${physical.cartonSize} export carton`,
      grossWeight: physical.weight,
      voltage: physical.voltage,
      leadTime: physical.leadTime,
    };
  }

  return base;
}

export function getPhysicalSpec(slug: string): PhysicalSpec | undefined {
  return PHYSICAL_SPECS.find((s) => s.slug === slug);
}

export function getBuyerEssentialsForProduct(slug: string): BuyerEssential[] {
  const spec = getPhysicalSpec(slug);
  if (!spec) return BUYER_ESSENTIALS;

  return BUYER_ESSENTIALS.map((item) => {
    if (item.id === "dimensions") {
      return { ...item, answer: `${spec.name}: carton ${spec.cartonSize}. ${item.answer}` };
    }
    if (item.id === "weight") {
      return { ...item, answer: `${spec.name}: ${spec.weight}. ${item.answer}` };
    }
    if (item.id === "power") {
      return { ...item, answer: `${spec.name}: ${spec.power} at ${spec.voltage}. ${item.answer}` };
    }
    if (item.id === "pc-control") {
      return { ...item, answer: `${spec.name}: ${spec.pcControl}. ${item.answer}` };
    }
    if (item.id === "lead-time") {
      return { ...item, answer: `${spec.name}: ${spec.leadTime}. ${item.answer}` };
    }
    return item;
  });
}
