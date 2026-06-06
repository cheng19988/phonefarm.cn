export type FaqItem = { question: string; answer: string; category: string };

export const FAQ_CATEGORIES = [
  { id: "product", title: "Product & Configuration" },
  { id: "technical", title: "Installation & Technical" },
  { id: "order", title: "Order & Shipping" },
  { id: "payment", title: "Payment & After-sales" },
] as const;

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: "product",
    question: "How many devices can one PC control?",
    answer:
      "For Android motherboard boxes: typically 3?5 boxes (60?100 nodes) per PC depending on CPU, RAM and software. USB mode uses more host resources than OTG/LAN. Send your target node count and we recommend a PC spec.",
  },
  {
    category: "product",
    question: "USB mode or OTG/LAN mode ? which should I choose?",
    answer:
      "USB mode (blue indicator): simpler setup, good for small labs and first evaluation. OTG/LAN mode (green indicator): better for 20+ devices on one network segment ? box and PC share a router, devices scanned by IP range. See /manual for setup steps.",
  },
  {
    category: "product",
    question: "Motherboard box vs full phone array ? what's the difference?",
    answer:
      "Motherboard box: highest density, lowest power, boards without screen. Phone array: hot-swap drawers, can hold full phones, easier maintenance. Choose based on whether you need quick device swaps or maximum nodes per watt.",
  },
  {
    category: "product",
    question: "Android vs iPhone farm box?",
    answer:
      "Android boxes use mainstream Samsung and other boards with established ADB/group-control tooling. iPhone boxes require specific models, higher cost and custom quote ? send iOS version and model list in RFQ.",
  },
  {
    category: "product",
    question: "Can you customize ROM?",
    answer:
      "Yes. Common requests: auto power-on after AC connect, persistent ADB authorization, disabled OTA prompts. Scope and lead time depend on board model ? describe requirements in RFQ.",
  },
  {
    category: "product",
    question: "Can I choose the device model?",
    answer:
      "Yes for Android ? subject to supply. iPhone models depend on stock. We confirm availability before final quote. Sample order recommended for new model combinations.",
  },
  {
    category: "technical",
    question: "What PC is recommended?",
    answer:
      "Windows 10 or 11, 16 GB+ RAM, SSD, i5/Ryzen 5 or better for multi-box control. Avoid running heavy antivirus real-time scan on ADB folders. For 5+ boxes consider Xeon/E5 class with adequate USB controllers ? share your scale for a written spec.",
  },
  {
    category: "technical",
    question: "Why does Windows show insufficient USB resources?",
    answer:
      "Too many devices on one USB host controller. Fix: use powered USB 2.0 hubs, split boxes across separate controllers, reduce simultaneous mirrors, or switch heavy loads to OTG/LAN mode. Details in /manual troubleshooting.",
  },
  {
    category: "technical",
    question: "What is ADB authorization and why does it matter?",
    answer:
      "ADB authorization files allow PC to communicate with boards without repeated on-screen prompts. Files must be placed in the correct Windows user profile folder. Replacing PC or reinstalling OS requires re-authorization ? backup your authorization folder.",
  },
  {
    category: "technical",
    question: "Devices not detected ? first checks?",
    answer:
      "1) Cable and power 2) Developer options + USB debugging enabled 3) Authorization files in place 4) No conflicting phone assistant software 5) Try another USB 2.0 port. Contact us with AnyDesk if still stuck.",
  },
  {
    category: "technical",
    question: "What router is recommended for OTG/LAN?",
    answer:
      "~20 devices: stable consumer router often sufficient. 50+: dedicated soft router with gigabit backbone. Router must assign stable IPs on same segment as control PC. We can bundle pre-configured router in quote.",
  },
  {
    category: "technical",
    question: "Can you help install remotely?",
    answer:
      "Yes. Basic remote setup is included with hardware orders (AnyDesk). We walk through mirror, batch control, OTG scan and common errors until operational.",
  },
  {
    category: "order",
    question: "Do you support sample orders?",
    answer:
      "Yes. One box or 12PCS array for evaluation before bulk order. Sample lead time typically 3?5 business days for standard config.",
  },
  {
    category: "order",
    question: "How do I get a quote?",
    answer:
      "Email qiuxui646@gmail.com, WhatsApp +852 6215 5642, or use the /contact RFQ form. Include: quantity, Android/iPhone, motherboard or full phone, USB or OTG/LAN, destination country, customization needs.",
  },
  {
    category: "order",
    question: "What information should I provide for RFQ?",
    answer:
      "Target device count, model (if known), connection mode, shipping country, timeline, ROM/custom needs and whether you need router/switch bundle. Photos of your site help for large projects.",
  },
  {
    category: "order",
    question: "Do you ship internationally?",
    answer:
      "Yes from Guangzhou. Express 3?7 days, sea freight 15?30 days. We can introduce freight forwarders. Import duties are buyer responsibility.",
  },
  {
    category: "order",
    question: "How long is production time?",
    answer:
      "Standard in-stock config: 3?5 business days. Custom ROM or OEM cabinet: 7?30 days depending on scope. Confirmed in written quote.",
  },
  {
    category: "payment",
    question: "What payment methods are supported?",
    answer:
      "Bank transfer for corporate orders. For confirmed bulk orders, payment methods are discussed with sales ? USDT (TRon TRC20) available when applicable. No automatic checkout on this website.",
  },
  {
    category: "payment",
    question: "Is USDT supported?",
    answer:
      "Yes for confirmed orders when agreed with sales. This site does not display live payment checkout ? quote and proforma invoice first.",
  },
  {
    category: "payment",
    question: "What is the warranty?",
    answer:
      "Chassis: 12 months. Motherboards: 90 days. Accessories (fans, cables): 12 months. Misuse, unauthorized modification and normal wear excluded.",
  },
  {
    category: "payment",
    question: "Can custom products be returned?",
    answer:
      "Custom-assembled or ROM-modified units generally cannot be returned after dispatch. Standard catalog config may differ ? confirm in quote. See /manual warranty section.",
  },
  {
    category: "payment",
    question: "What support is included?",
    answer:
      "Remote setup assistance until first successful operation, warranty-period remote diagnostics via AnyDesk, spare parts supply for out-of-warranty repairs quoted separately.",
  },
];

export function getFaqByCategory(category: string) {
  return FAQ_ITEMS.filter((item) => item.category === category);
}

export function getFaqPreview(count = 5) {
  return FAQ_ITEMS.slice(0, count);
}
