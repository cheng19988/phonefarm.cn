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
    question: "What are the dimensions and weight of each box?",
    answer:
      "Motherboard box (20 nodes): 55 x 38 x 16 cm, ~7 kg. 32PCS box: 62 x 42 x 22 cm, ~12 kg. 12PCS array: 48 x 36 x 18 cm, ~6 kg. See the spec table on each product page or /pricing buyer essentials section.",
  },
  {
    category: "product",
    question: "What is the power draw and voltage?",
    answer:
      "All standard chassis use 220V AC. Typical continuous load: ~100W (20-node box), ~160W (32PCS), ~60W (12PCS array). For 110V destinations discuss transformer options in RFQ.",
  },
  {
    category: "product",
    question: "Which Android and iPhone models are supported?",
    answer:
      "Android: mainstream Samsung Galaxy and other widely supported boards — exact model confirmed in written quote before production. iPhone: custom per model and iOS version. Send target model list in RFQ; sample order recommended for new combinations.",
  },
  {
    category: "product",
    question: "How many devices can one PC control?",
    answer:
      "For Android motherboard boxes: typically 3-5 boxes (60-100 nodes) per PC depending on CPU, RAM and software. USB mode uses more host resources than OTG/LAN. Send your target node count and we recommend a PC spec.",
  },
  {
    category: "product",
    question: "USB mode or OTG/LAN mode - which should I choose?",
    answer:
      "USB mode (blue indicator): simpler setup, good for small labs and first evaluation. OTG/LAN mode (green indicator): better for 20+ devices on one network segment - box and PC share a router, devices scanned by IP range. See /manual for setup steps.",
  },
  {
    category: "product",
    question: "Motherboard box vs full phone array - what's the difference?",
    answer:
      "Motherboard box: highest density, lowest power, boards without screen. Phone array: hot-swap drawers, can hold full phones, easier maintenance. Choose based on whether you need quick device swaps or maximum nodes per watt.",
  },
  {
    category: "product",
    question: "Android vs iPhone farm box?",
    answer:
      "Android boxes use mainstream Samsung and other boards with established ADB/group-control tooling. iPhone boxes require specific models, higher cost and custom quote - send iOS version and model list in RFQ.",
  },
  {
    category: "product",
    question: "Can you customize ROM?",
    answer:
      "Yes. Common requests: auto power-on after AC connect, persistent ADB authorization, disabled OTA prompts. Scope and lead time depend on board model - describe requirements in RFQ.",
  },
  {
    category: "product",
    question: "Can I choose the device model?",
    answer:
      "Yes for Android - subject to supply. iPhone models depend on stock. We confirm availability before final quote. Sample order recommended for new model combinations.",
  },
  {
    category: "technical",
    question: "What PC is recommended?",
    answer:
      "Windows 10 or 11, 16 GB+ RAM, SSD, i5/Ryzen 5 or better for multi-box control. Avoid running heavy antivirus real-time scan on ADB folders. For 5+ boxes consider Xeon/E5 class with adequate USB controllers - share your scale for a written spec.",
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
      "ADB authorization files allow PC to communicate with boards without repeated on-screen prompts. Files must be placed in the correct Windows user profile folder. Replacing PC or reinstalling OS requires re-authorization - backup your authorization folder.",
  },
  {
    category: "technical",
    question: "Devices not detected - first checks?",
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
      "Yes. Basic remote setup is included with hardware orders (AnyDesk). We walk through power-on, USB/OTG mode, ADB authorization, mirror, batch control, OTG scan and common errors until operational. Schedule within 5 business days of hardware arrival.",
  },
  {
    category: "order",
    question: "How is hardware packed for international shipping?",
    answer:
      "Each chassis is foam-lined in a reinforced export carton with commercial invoice and packing list. Bulk orders ship multiple cartons; pallet and stretch wrap available on request. Sea or express freight from Guangzhou.",
  },
  {
    category: "order",
    question: "Can I get photos or video before shipment?",
    answer:
      "Yes. On request we share factory photos, burn-in status, carton packing photos or short packing video before dispatch. Remote AnyDesk inspection before bulk payment can also be arranged — ask in RFQ or with sales after PO.",
  },
  {
    category: "order",
    question: "Do you support sample orders?",
    answer:
      "Yes. One box or 12PCS array for evaluation before bulk order. Sample lead time typically 3-5 business days for standard config.",
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
      "Yes from Guangzhou. Express 3-7 days, sea freight 15-30 days. We can introduce freight forwarders. Import duties are buyer responsibility.",
  },
  {
    category: "order",
    question: "How long is production time?",
    answer:
      "Standard in-stock config: 3-5 business days. Custom ROM or OEM cabinet: 7-30 days depending on scope. Confirmed in written quote.",
  },
  {
    category: "payment",
    question: "What payment methods are supported?",
    answer:
      "Bank transfer for corporate orders. For confirmed bulk orders, payment methods are discussed with sales - USDT (TRON TRC20) available when applicable. No automatic checkout on this website.",
  },
  {
    category: "payment",
    question: "Is USDT supported?",
    answer:
      "Yes for confirmed orders when agreed with sales. This site does not display live payment checkout - quote and proforma invoice first.",
  },
  {
    category: "payment",
    question: "What happens if a board, fan or cable fails?",
    answer:
      "During warranty: email or WhatsApp sales with order number and photo of the fault. We start with remote AnyDesk diagnosis. Confirmed hardware defects: spare part shipment or repair guidance (freight per agreement). Out of warranty: replacement parts quoted — see Replacement Parts on /services.",
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
      "Custom-assembled or ROM-modified units generally cannot be returned after dispatch. Standard catalog config may differ - confirm in quote. See /manual warranty section.",
  },
  {
    category: "product",
    question: "What is a box phone farm?",
    answer:
      "A box phone farm is a metal chassis integrating many Android motherboards or phones with centralized power and cooling. Group-control software on a Windows PC connects via USB or OTG/LAN for batch or individual device tasks. Used for app testing, QA automation, device management and lawful multi-device operations.",
  },
  {
    category: "product",
    question: "What are the application fields for phone farm hardware?",
    answer:
      "Common fields include: in-game and app testing; e-commerce store group management; customer service routing; matrix customer acquisition workflows (where permitted); Android development bug detection and stress testing; cloud device rental labs; social media marketing device pools; software integration testing. Hardware is for development and testing only.",
  },
  {
    category: "product",
    question: "Can I control all phones at once?",
    answer:
      "Yes. Group-control software supports batch operations on all connected devices simultaneously, or individual control per device.",
  },
  {
    category: "technical",
    question: "Screen goes black after mirroring — what to do?",
    answer:
      "Increase screen standby timeout in phone settings. Unlock device once after boot. See /manual#troubleshooting for password-page black screen and control issues.",
  },
  {
    category: "technical",
    question: "Screen mirrors but mouse cannot control the device?",
    answer:
      "Enable Developer options → USB settings (safe mode) → USB simulation click. Re-enable accessibility/input service in your control software.",
  },
  {
    category: "technical",
    question: "Unrecognized USB device?",
    answer:
      "Change USB port or PC; replace cable; re-seat connection; try another phone/board in the same slot to isolate hardware vs cable fault.",
  },
  {
    category: "technical",
    question: "What PC spec for 3–5 boxes?",
    answer:
      "Windows 10/11, Xeon E5-2680 V2 multi-core or better, 32 GB RAM recommended, SSD, multiple USB 2.0 root ports or powered hubs. Nanjin X79-class boards support 120+ USB with expansion cards. See /manual#recommended-pc.",
  },
  {
    category: "order",
    question: "What is included in a standard motherboard box shipment?",
    answer:
      "Typically: chassis with 20 boards, USB cables, 220V power cord, spare motherboard power leads, setup guide and control software trial (scope confirmed in quote). Router and switches are separate SKUs.",
  },
  {
    category: "payment",
    question: "Are there hidden fees?",
    answer:
      "Standard hardware is one-time purchase — no recurring platform fee from us. Shipping, import duties and optional software licenses are quoted separately. Custom ROM or OEM scope confirmed in writing before payment.",
  },
  {
    category: "payment",
    question: "Do you provide customer support?",
    answer:
      "Yes — dedicated sales contact, remote AnyDesk setup included with hardware orders, and warranty-period remote diagnostics.",
  },
];

export function getFaqByCategory(category: string) {
  return FAQ_ITEMS.filter((item) => item.category === category);
}

export function getFaqPreview(count = 5) {
  return FAQ_ITEMS.slice(0, count);
}
