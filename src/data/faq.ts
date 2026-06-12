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
      "Bulk and OEM: proforma invoice, then bank transfer or USDT (TRON TRC20) when agreed with sales. Three standard SKUs (motherboard box, 32PCS box, 12PCS array) also support online USDT checkout after free account registration. RFQ-only SKUs use quote and proforma first.",
  },
  {
    category: "payment",
    question: "Is USDT supported?",
    answer:
      "Yes. Bulk orders: USDT (TRC20) when agreed on proforma. Standard SKUs: online USDT checkout on /products after login — 30-minute payment window, exact USDT amount shown at checkout (1:1 with USD list price).",
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
  {
    category: "product",
    question: "What is the difference between a phone farm and a mobile device farm lab?",
    answer:
      "Both terms describe many real devices controlled from one PC. A phone farm often means dedicated chassis hardware (motherboard box, 32PCS box). A mobile device farm lab is the broader QA/CI environment including PCs, routers and software. We supply the hardware layer; you run lawful testing workflows.",
  },
  {
    category: "product",
    question: "What is an Android phone farm?",
    answer:
      "An Android phone farm is a fleet of real Android phones or motherboards connected to one PC for batch control, app QA and device management. Guangzhou Phone Farm supplies chassis hardware — see /android-device-farm and /products/motherboard-box.",
  },
  {
    category: "product",
    question: "What is phone farm equipment?",
    answer:
      "Phone farm equipment includes the chassis (motherboard box, 32PCS box, 12PCS array), power and data cabling, optional routers/switches for OTG/LAN, and export packing. Software and control PCs are configured on your side; we include remote setup support with hardware orders.",
  },
  {
    category: "order",
    question: "How do I choose a phone farm box manufacturer in China?",
    answer:
      "Verify factory assembly (not trader), sample order path, written warranty, burn-in QC, packing photos on request, and remote demo via AnyDesk. Compare specs: carton size, weight, voltage, MOQ and lead time. Full checklist: /phone-farm-buyer-guide",
  },
  {
    category: "order",
    question: "Can I buy a phone farm box with remote setup included?",
    answer:
      "Yes. Basic remote installation via AnyDesk is included with hardware orders — USB/OTG mode, ADB authorization and group-control software walkthrough. Schedule within 5 business days of hardware arrival.",
  },
  {
    category: "order",
    question: "What is the MOQ for phone farm hardware export orders?",
    answer:
      "Sample MOQ is typically 1 box or 1× 12PCS array for evaluation. Bulk MOQ depends on SKU — motherboard box bulk discounts often start around 5+ boxes. OEM cabinets are project-based. Confirmed on proforma invoice.",
  },
  {
    category: "payment",
    question: "Is USDT payment accepted for phone farm box orders?",
    answer:
      "Yes for confirmed orders when agreed with sales — TRON TRC20 USDT. Three standard SKUs (motherboard box, 32PCS box, 12PCS array) also support online USDT checkout after free account registration. Bulk orders usually use proforma invoice first.",
  },
  {
    category: "product",
    question: "Phone farm box vs cloud phone or emulator — when use real hardware?",
    answer:
      "Use real phone farm hardware when you need OEM-specific behavior, sensors, GPU paths and full ADB — typical for app QA, compatibility and production-like testing. Emulators suit early dev; cloud phones suit short bursts but cost more at scale. Guide: /blog/phone-farm-vs-cloud-device-farm",
  },
  {
    category: "product",
    question: "Can phone farm hardware support app QA and compatibility testing?",
    answer:
      "Yes — primary lawful use cases include mobile app QA, regression testing, compatibility across OEM Android skins, game performance soak tests and enterprise device lab workflows. Hardware is for development and testing only.",
  },
  {
    category: "product",
    question: "Do you offer rackmount or 2U phone farm cabinets?",
    answer:
      "Yes as OEM custom projects — partial rack, 42U-class cabinets or floor cabinets with custom tray layout, cooling and PDU. Lead time 15–30 days after drawing approval. Guide: /rackmount-phone-farm · Product: /products/custom-cabinet",
  },
  {
    category: "order",
    question: "Where can I buy phone farm box hardware in bulk?",
    answer:
      "Contact Guangzhou Phone Farm factory directly via /contact RFQ, WhatsApp or email. We export worldwide from Guangzhou. Standard SKUs may use online checkout; bulk and OEM use proforma invoice.",
  },
  {
    category: "order",
    question: "How does export shipping work for phone farm equipment?",
    answer:
      "Foam-lined cartons from Guangzhou. Express air 3–7 days or sea 15–30 days. Commercial invoice and packing list included. Import duties paid by buyer unless stated on proforma. Details: /blog/phone-farm-equipment-export-shipping",
  },
  {
    category: "product",
    question: "Can phone farm hardware be used for social media app testing and QA?",
    answer:
      "Yes for lawful app QA, compatibility testing and regression on social or short-video apps when your workflow complies with platform terms. Hardware provides real devices for UI testing, performance soak tests and multi-device lab workflows — not for policy violations or fraud. Guide: /blog/phone-farm-social-app-qa-testing",
  },
  {
    category: "product",
    question: "What is a multi-device lab for account isolation testing?",
    answer:
      "A multi-device lab uses separate physical devices (or isolated network paths) so QA teams validate login flows, MDM policies and enterprise apps without cross-device data leakage. Phone farm chassis provide the hardware layer; your software stack handles isolation. Hardware for development and testing only.",
  },
  {
    category: "product",
    question: "Can phone farm boxes support mobile ad SDK and ad verification testing?",
    answer:
      "Yes — device labs use real hardware to test ad SDK integration, rendering, latency and compatibility across OEM Android skins before production rollout. This is standard app and SDK QA, not fraudulent ad traffic. See /blog/mobile-device-farm-app-qa-guide",
  },
  {
    category: "order",
    question: "What is phone farm wholesale or bulk order pricing?",
    answer:
      "Wholesale pricing depends on SKU, quantity, ROM scope and export terms. Motherboard box bulk discounts often start around 5+ boxes; OEM cabinets are project-quoted. Request proforma via /contact — we reply within 24 hours on business days. Guide: /blog/phone-farm-wholesale-bulk-order",
  },
  {
    category: "order",
    question: "Is Guangzhou Phone Farm a phone farm factory with direct pricing?",
    answer:
      "Yes — we assemble chassis in Guangzhou (since 2017), not a trader reselling unknown hardware. Factory-direct RFQ via /contact, WhatsApp or email. About page: /about · Quality: /quality-assurance",
  },
  {
    category: "order",
    question: "What is included in a phone farm box order with remote setup?",
    answer:
      "Hardware shipment with export packing, setup documentation, and remote AnyDesk session covering USB/OTG mode, ADB authorization and group-control software walkthrough. Schedule within 5 business days of arrival. Services detail: /services · FAQ: /faq",
  },
  {
    category: "product",
    question: "What is the difference between a bot farm and a phone farm?",
    answer:
      "Bot farms often mean software automation on servers or emulators. Phone farms use physical Android boards or phones in a chassis for real-device testing and lawful multi-device operations. Comparison article: /blog/the-difference-between-a-bot-farm-and-a-phone-farm",
  },
  {
    category: "technical",
    question: "How does phone farm box cooling work at 24/7 operation?",
    answer:
      "Motherboard boxes use integrated chassis fans (~100W at 20 nodes); 32PCS boxes use triple-fan active cooling (~160W). Leave airflow gaps when stacking. Clean filters monthly in dusty environments. Guide: /blog/phone-farm-cooling-power-chassis-vs-open-racks",
  },
  {
    category: "technical",
    question: "How many phone farm devices can one PC control?",
    answer:
      "Typically 3–5 × 20-node motherboard boxes (60–100 nodes) or 2–4 × 32PCS boxes depending on software and mirroring load. USB mode hits controller limits before CPU; OTG/LAN scales further with router planning. Guide: /blog/how-many-devices-one-pc-control-usb-otg-lan",
  },
  {
    category: "order",
    question: "What are typical phone farm box lead times and MOQ?",
    answer:
      "Sample 12PCS arrays often ship in 3–5 days; standard bulk depends on stock and ROM scope (custom ROM adds 7–15 days). MOQ varies by SKU — confirm in RFQ. Guide: /blog/phone-farm-lead-times-moq-shenzhen-factory",
  },
  {
    category: "product",
    question: "When should I choose 20-node motherboard box vs 32PCS chassis?",
    answer:
      "20-node box: compact shipments, lowest power per headless node, stack 3–5 boxes per PC. 32PCS: one chassis for 32 devices with unified cooling. 12PCS array: hot-swap evaluation. Guide: /blog/when-choose-20-node-motherboard-vs-32pcs-chassis",
  },
  {
    category: "order",
    question: "What HS code is used for phone farm box export from China?",
    answer:
      "Motherboard box chassis commonly reference HS 8471609000 on commercial invoices — your customs broker confirms final classification for destination country. Export guide: /blog/export-packing-hs-codes-phone-farm-china",
  },
];

export function getFaqByCategory(category: string) {
  return FAQ_ITEMS.filter((item) => item.category === category);
}

export function getFaqPreview(count = 5) {
  return FAQ_ITEMS.slice(0, count);
}
