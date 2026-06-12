import { IMAGES, getProductCardImage } from "@/lib/images";
import type { SpecTableData } from "@/data/network-specs";
import {
  ENTERPRISE_ROUTER_TABLE,
  POE_SWITCH_TABLE,
  STANDARD_SWITCH_TABLE,
} from "@/data/network-specs";

export type CatalogGroup =
  | "motherboard-box"
  | "phone-farm-box"
  | "phone-array"
  | "iphone"
  | "network"
  | "accessories"
  | "oem-custom";

export type ProductSeed = {
  slug: string;
  name: string;
  category: string;
  catalogGroup: CatalogGroup;
  shortDesc: string;
  targetBuyer: string;
  description: string;
  keyParams: string[];
  features: string[];
  specs: Record<string, string>;
  scenarios: string[];
  accessories: string[];
  delivery: string[];
  deploymentNotes: string[];
  customizationOptions: string[];
  faq: { q: string; a: string }[];
  detailSections?: { title: string; content: string }[];
  specTables?: SpecTableData[];
  priceUsd: number;
  stock: number;
  imageCard: string;
  imageHero: string;
  imageDetail: string;
};

export const PRODUCT_SEEDS: ProductSeed[] = [
  {
    slug: "motherboard-box",
    name: "Android Motherboard Box — 20-Node Phone Farm Chassis",
    category: "Motherboard Box",
    catalogGroup: "motherboard-box",
    shortDesc:
      "20-node Android motherboard chassis — screen, battery, camera and SIM slot removed; USB or OTG/LAN group control for group-control and testing workflows.",
    targetBuyer: "Integrators and labs running 20–100+ Android nodes with low power per box.",
    description:
      "The motherboard box removes the phone screen, battery, camera and SIM slot, integrates boards into a metal chassis and works with group-control software for batch or individual device operation. One box contains 20 mobile phone motherboards in a fixed-size enclosure. One Windows PC typically controls 3–5 boxes (60–100 nodes). Operate all devices at once or run different tasks per phone. Voltage 220V; ~100W when running under continuous load. VPN or proxy methods can change IP per device. Ethernet OTG/LAN and USB modes are switchable (blue LED = USB/WiFi, green LED = OTG/LAN). Carton 55×38×16 cm, ~7 kg — compact and stackable.",
    keyParams: ["20 boards/box", "220V ~100W", "55x38x16 cm", "USB + OTG/LAN", "1 PC -> 3-5 boxes"],
    features: [
      "Compact 20-node density — stackable metal chassis for warehouse or rack deployment",
      "3-cooling-fan system for continuous 24/7 operation",
      "Dual connection: USB mode (blue indicator) and OTG/LAN mode (green indicator)",
      "Mod ROM: auto power-on, auto ADB recognition, compatible with common market tools",
      "One operator controls 20 phones per box; batch or individual tasks via group-control software",
      "Compatible with group-control software, mirroring tools and WebSocket API after ADB authorization",
      "QC burn-in before shipping; remote AnyDesk setup support available",
    ],
    specs: {
      "Capacity / Nodes": "20 Android motherboards per box (fixed count)",
      "Device Type": "Motherboard only — screen, battery, camera, SIM slot removed",
      "Connection Mode": "USB 2.0 + OTG/LAN Ethernet (switchable)",
      Power: "220V AC, ~100W under continuous load",
      "Carton Size": "55 x 38 x 16 cm",
      Weight: "~7 kg",
      "PC Control": "1 PC controls 3–5 boxes (software dependent)",
      "HS Code": "8471609000 (export reference)",
      "PC Requirement": "Windows 10/11; E5-2680 V2 class or better for 3–5 boxes",
      "Router Requirement": "Soft router recommended for 20+ OTG/LAN devices",
      Customization: "ROM mod, auto-boot, ADB auto-detect, OEM silkscreen",
    },
    scenarios: [
      "Software application and game testing",
      "Multi-device automation and QA workflow operations",
      "Live streaming and content creation device pools",
      "Business marketing and multi-account management (lawful use)",
      "App compatibility and QA testing at scale",
      "Batch device provisioning and firmware validation",
      "Enterprise device operation workflow testing",
    ],
    detailSections: [
      {
        title: "What Are the Applications of Motherboard Box Farming?",
        content:
          "Motherboard box farming supports any online project that mobile phone users participate in — when operated within platform terms and applicable law. Common professional applications include multiplayer game testing, live streaming infrastructure, business marketing workflows, software application testing, QA automation and multi-device monitoring. The chassis lets one workstation manage hundreds of devices through stacked boxes and group-control software.",
      },
      {
        title: "Why Choose Our Motherboard Boxes?",
        content:
          "Factory-direct assembly from Guangzhou with slot-level QC, FRP-unlocked boards, dedicated provisioning workbench and export packing. We engineer for continuous operation: stable power distribution, cooling airflow and USB/Ethernet routing verified before shipment. ROM customization aligns boards to your automation stack. Remote setup via AnyDesk included with hardware orders.",
      },
    ],
    accessories: [
      "Metal chassis with 20 motherboard slots",
      "Power cable (220V)",
      "USB data cables per node",
      "Spare motherboard power leads",
      "Setup guide + remote support contact",
    ],
    delivery: [
      "Chassis warranty: 12 months",
      "Motherboard warranty: 90 days",
      "Custom-assembled units: no return after dispatch (see Manual)",
      "Foam export packing; pallet option for bulk",
      "Pre-shipment photos/video on request",
      "Remote AnyDesk setup included",
    ],
    deploymentNotes: [
      "Use Windows 10/11; uninstall conflicting phone assistant apps",
      "Place ADB authorization files before first mirror session",
      "Do not casually reset OS or disable developer options",
      "For OTG/LAN: box and PC on same router segment; scan IP range",
      "Monitor USB resource limits - use powered USB 2.0 hubs if expanding",
    ],
    customizationOptions: [
      "Motherboard model (Samsung and others - subject to supply)",
      "Mod ROM: auto power-on, ADB persistence",
      "Chassis label / silkscreen OEM",
      "Router/switch bundle for OTG/LAN deployment",
    ],
    faq: [
      { q: "How many boxes per PC?", a: "Typically 3–5 boxes per PC (60–100 nodes) depending on CPU/RAM and software. E5-2680 V2 multi-core or equivalent recommended. Share your target count for a written PC spec." },
      { q: "USB or OTG/LAN?", a: "USB is simpler for small setups. OTG/LAN scales better beyond ~20 devices on one network segment. Both modes switchable on the box." },
      { q: "Dimensions, weight and power?", a: "Carton 55 x 38 x 16 cm, ~7 kg. 220V, ~100W continuous load at 20 nodes." },
      { q: "Which Android models?", a: "Mainstream Samsung and other boards subject to supply — we confirm exact model list in written quote before production." },
      { q: "Can one person control all 20 phones at once?", a: "Yes — group-control software supports batch operations on all nodes or individual control per device." },
      { q: "Photos before shipment?", a: "Yes — burn-in and packing photos or short video on request before dispatch." },
      { q: "What if a board fails?", a: "Warranty: remote diagnosis then spare board or repair guidance. Out of warranty: replacement parts quoted separately." },
      { q: "Does it work with group-control software?", a: "Yes. After ADB authorization, common group-control and batch device tools connect via USB or OTG/LAN. We assist with first-time setup." },
      { q: "Can I change IP per device?", a: "Yes — VPN or proxy tools per device are supported when your workflow requires IP rotation." },
    ],
    priceUsd: 899,
    stock: 10,
    imageCard: IMAGES.motherboardBox.card,
    imageHero: IMAGES.motherboardBox.hero,
    imageDetail: IMAGES.motherboardBox.detail,
  },
  {
    slug: "phone-farm-box",
    name: "32PCS Phone Farm Box — High-Capacity Device Control",
    category: "Phone Farm Box",
    catalogGroup: "phone-farm-box",
    shortDesc: "32-device unified phone farm box — batch control, ROM customization and software development scope.",
    targetBuyer: "Teams deploying 32–200 devices for testing, device operations, production QA or reseller bulk orders.",
    description:
      "Box phone farm unified control for 32 PCS in one chassis. Support ROM customization — auto power-on, persistent ADB, custom firmware features. Triple-fan cooling for 24/7 operation. USB and OTG/LAN dual mode. We develop additional software integration scope on request; contact sales for customization and bulk device management planning.",
    keyParams: ["32 devices/box", "3-fan cooling", "62x42x22 cm", "~160W", "ROM customization"],
    features: [
      "32 nodes in one chassis - fewer cables than multiple 20-node boxes",
      "Mod ROM options for unattended boot and ADB stability",
      "Active cooling for 24/7 operation",
      "Batch APK install and mirror via group-control software",
      "Factory assembly, QC and export packing",
    ],
    specs: {
      "Capacity / Nodes": "32 devices per box",
      "Device Type": "Android motherboard or full phone (config-dependent)",
      "Connection Mode": "USB + OTG/LAN",
      Power: "220V AC, ~160W under continuous load",
      "Carton Size": "62 x 42 x 22 cm",
      Weight: "~12 kg",
      Cooling: "3x chassis fans",
      "PC Control": "1 PC controls 2-4 boxes (software dependent)",
      "Router Requirement": "Dedicated router segment for OTG/LAN at scale",
      Customization: "ROM features, slot layout, branding",
    },
    scenarios: [
      "Medium-scale software automation testing",
      "Multi-app compatibility validation",
      "Device management training lab",
      "Reseller bulk hardware supply",
    ],
    accessories: ["32-slot chassis", "Power + data cabling", "Cooling fans", "Setup documentation", "Optional router package"],
    delivery: [
      "Production 7-15 days for custom ROM",
      "Standard config 3-5 days if in stock",
      "12-month chassis / 90-day board warranty",
      "Pre-shipment photos on request",
      "Remote AnyDesk setup included",
    ],
    deploymentNotes: [
      "Plan router capacity before enabling OTG/LAN on 32 devices",
      "Stagger first boot to avoid USB power spikes",
      "Keep authorization backup when replacing PC",
    ],
    customizationOptions: ["ROM mod scope", "Device model per slot", "Included router/switch", "OEM exterior"],
    faq: [
      { q: "32PCS vs 20-node motherboard box?", a: "32PCS suits medium density with unified cooling and one chassis for 32 nodes. 20-node box is smaller per shipment unit — we help choose by quantity and floor space." },
      { q: "Dimensions and weight?", a: "Export carton 62 x 42 x 22 cm, ~12 kg. 220V, ~160W continuous load at 32 nodes." },
      { q: "Which phone models fit?", a: "Mainstream Samsung and other Android boards subject to supply — confirm model list in RFQ. Full phone or motherboard config available." },
      { q: "ROM customization scope?", a: "Common: auto boot after AC connect, ADB persistence, disabled OTA prompts. Advanced features quoted per project." },
      { q: "Photos before shipment?", a: "Yes — factory burn-in and packing photos or video available on request before dispatch." },
      { q: "Remote installation?", a: "Included via AnyDesk after delivery — USB/OTG setup, ADB auth and group-control software walkthrough." },
    ],
    detailSections: [
      {
        title: "High-Capacity Device Control for Medium-Scale Labs",
        content:
          "The 32PCS phone farm box reduces cable clutter versus multiple smaller chassis. One operator manages 32 devices from a single enclosure with centralized power and active triple-fan cooling. Scale by adding boxes — typically 2–4 boxes per control PC depending on software load. ROM customization aligns devices to unattended boot and stable ADB for 24/7 QA workflows.",
      },
      {
        title: "Why Choose Our 32PCS Phone Farm Box?",
        content:
          "Factory-direct assembly from Guangzhou with burn-in QC, export foam packing and remote AnyDesk setup included. We support batch APK deployment, mirror workflows and OTG/LAN migration when USB limits are reached. Contact sales for software integration scope and bulk reseller pricing.",
      },
      {
        title: "Applications for 32-Device Phone Farm Operations",
        content:
          "Medium-scale app compatibility testing, multi-account workflow validation (lawful use), device management training labs and reseller bulk supply. The unified chassis suits teams that want one shipment unit per 32 nodes instead of multiple 20-node boxes.",
      },
    ],
    priceUsd: 1499,
    stock: 5,
    imageCard: IMAGES.phoneFarmBox.card,
    imageHero: IMAGES.phoneFarmBox.hero,
    imageDetail: IMAGES.phoneFarmBox.detail,
  },
  {
    slug: "phone-array-12pcs",
    name: "12PCS Phone Array — Hot-Swappable Drawer Farm Box",
    category: "Phone Array",
    catalogGroup: "phone-array",
    shortDesc: "12 hot-swappable drawers — complete phone or motherboard, built-in PC option, USB 2.0 HUB.",
    targetBuyer: "Labs evaluating hardware, small dev teams, or maintenance-friendly deployments.",
    description:
      "Includes 12 hot-swappable drawers. Each drawer can hold a complete phone or motherboard. Built-in PC computer option available. Integrated USB 2.0 HUB for stable multi-device USB routing. Ideal when devices are swapped frequently during testing or sample evaluation.",
    keyParams: ["12 hot-swap drawers", "48x36x18 cm", "~6 kg", "Phone or motherboard", "Built-in PC option"],
    features: [
      "Hot-swappable drawers - replace device without shutting whole box",
      "Accepts full phone or bare motherboard",
      "Optional built-in control PC",
      "Integrated USB 2.0 HUB",
      "Sample orders and pilot deployments welcome",
    ],
    specs: {
      "Capacity / Nodes": "12 drawers",
      "Device Type": "Full Android phone or motherboard",
      "Connection Mode": "USB (primary); OTG/LAN with network add-on",
      Power: "220V AC, ~60W under continuous load",
      "Carton Size": "48 x 36 x 18 cm",
      Weight: "~6 kg",
      "Form Factor": "Desktop / bench array",
      "PC Control": "1 PC -> 5-8 arrays; built-in PC option available",
      Customization: "Drawer depth, phone model cradles",
    },
    scenarios: ["Pilot / sample evaluation", "App testing with frequent device swaps", "Training and demo lab", "Small batch QA"],
    accessories: ["12-drawer chassis", "Power supply", "USB hub", "Cradle inserts per model", "Setup guide"],
    delivery: [
      "Sample unit 3-5 days",
      "Custom cradles add 5-10 days",
      "12-month chassis / 90-day board warranty",
      "Pre-shipment photos on request",
      "Remote setup included",
    ],
    deploymentNotes: ["Label each drawer slot in software", "Match cradle to exact phone model", "Avoid mixing USB 3.0 ports without hub"],
    customizationOptions: ["Drawer count (12 standard)", "iPhone cradle (separate SKU)", "Built-in PC spec"],
    faq: [
      { q: "Full phone or motherboard?", a: "Both supported - specify in RFQ. Full phone suits quick testing; motherboard saves space and power." },
      { q: "Dimensions and weight?", a: "Export carton 48 x 36 x 18 cm, ~6 kg. 220V, ~60W continuous load at 12 nodes." },
      { q: "Which models fit the drawers?", a: "Cradle inserts matched to your phone model — send exact model in RFQ. Hot-swap without shutting the whole array." },
      { q: "What if a slot fails?", a: "Swap drawer or board; warranty covers hardware defects — contact sales with order number and fault photo." },
    ],
    detailSections: [
      {
        title: "Hot-Swappable Drawers for Flexible Device Testing",
        content:
          "Each of the 12 drawers accepts a complete phone or bare motherboard — swap hardware without shutting down the entire array. Ideal for app testing labs that rotate device samples, QA teams evaluating multiple Android models and training environments where students replace devices frequently.",
      },
      {
        title: "Built-In PC and USB Hub Integration",
        content:
          "Optional built-in control PC reduces cable runs for bench deployments. Integrated USB 2.0 HUB stabilizes multi-device routing compared to ad-hoc consumer hubs. Specify full phone vs motherboard configuration in RFQ so cradles match your target models.",
      },
      {
        title: "When to Start with a 12PCS Evaluation Array",
        content:
          "Pilot orders and sample evaluation before bulk MOQ on 20-node or 32PCS chassis. Lower entry cost, faster shipping (often 3–5 days) and maintenance-friendly layout for teams validating group-control software compatibility before scaling.",
      },
    ],
    priceUsd: 799,
    stock: 8,
    imageCard: IMAGES.realDevice.card,
    imageHero: IMAGES.realDevice.hero,
    imageDetail: IMAGES.realDevice.detail,
  },
  {
    slug: "iphone-phone-farm",
    name: "iPhone Farm Box",
    category: "iPhone Farm",
    catalogGroup: "iphone",
    shortDesc: "iOS multi-device chassis — remote control, task automation, hot-swap slots; custom quote.",
    targetBuyer: "Teams running iOS app testing, TestFlight validation, market research or enterprise iOS device labs.",
    description:
      "iPhone farm box for iOS system multi-device control. Transform workflow operations with physical iPhone hardware — real-time keyboard input, file transfer and copy-paste between PC and devices. Scale via additional chassis to hundreds of devices when combined with motherboard-style density planning. No jailbreak required for supported control workflows (model and tooling dependent). Hot-swappable drawer maintenance.",
    keyParams: ["iOS device slots", "Hot-swap design", "Model: quote-based", "Custom config", "Remote setup"],
    features: [
      "Physical iPhone hardware - not cloud virtual devices",
      "Hot-swap drawer maintenance",
      "Central power and cable routing",
      "Works with iOS test workflows (model-dependent)",
      "Remote installation guidance included",
    ],
    specs: {
      "Capacity / Nodes": "Quote-based (typical 8-20 slots)",
      "Device Type": "Full iPhone",
      "Connection Mode": "USB / network per deployment design",
      "Model Availability": "Depends on stock - confirm in RFQ",
      "PC Requirement": "macOS or Windows per tooling choice",
      Customization: "Slot count, model mix, cabinet finish",
    },
    scenarios: [
      "iOS app compatibility and TestFlight validation",
      "App download and install testing workflows",
      "Market research and website traffic validation",
      "Application testing and QA automation",
      "Social media interaction testing (lawful use)",
      "Multi-device iOS lab and enterprise device ops",
    ],
    detailSections: [
      {
        title: "How iPhone Farms Work",
        content:
          "Devices mount in hot-swap drawers with centralized power and data routing. Control PC runs mirroring or management software for remote control, task automation and scripted workflows. Remote keyboard, file transfer and clipboard sync supported on compatible models. Configuration confirmed before build based on iOS version and model mix.",
      },
      {
        title: "Why Choose Our iPhone Farm Box?",
        content:
          "Factory-assembled chassis with QC, export packing from Guangzhou and remote setup support. We confirm model availability, slot count and tooling compatibility in written quote before production.",
      },
    ],
    faq: [
      { q: "Which iPhone models?", a: "Send target model and iOS version in RFQ. We confirm availability and quote." },
      { q: "Jailbreak required?", a: "Depends on model and control workflow — we confirm supported tooling path in RFQ." },
      { q: "Remote control features?", a: "Real-time keyboard, file transfer and copy-paste supported on compatible setups via control software." },
    ],
    accessories: ["iPhone farm chassis", "Lightning/USB-C cables per model", "Power module", "Setup support"],
    delivery: ["Lead time depends on iPhone model supply", "Custom quote only — no fixed retail price"],
    deploymentNotes: ["Confirm iOS version and model before order", "Apple tooling policies vary by use case — discuss in RFQ"],
    customizationOptions: ["Slot count", "Specific iPhone generations", "Combined Android + iPhone cabinet"],
    priceUsd: 0,
    stock: 0,
    imageCard: IMAGES.iphoneFarm.card,
    imageHero: IMAGES.iphoneFarm.hero,
    imageDetail: IMAGES.iphoneFarm.detail,
  },
  {
    slug: "android-phone-farm",
    name: "Android Phone Farm System",
    category: "OEM / System",
    catalogGroup: "oem-custom",
    shortDesc: "Turnkey Android phone farm - multiple boxes, networking and setup as a complete project.",
    targetBuyer: "Buyers needing a full Android deployment package, not a single box SKU.",
    description:
      "Project-based Android phone farm supply: quantity of boxes, router/switch layout, ROM baseline and remote commissioning. Sized for integrators and enterprise labs.",
    keyParams: ["Multi-box project", "Samsung & mainstream boards", "Network design included", "Remote commissioning", "OEM quote"],
    features: [
      "Holistic deployment plan (boxes + network + power)",
      "Samsung and mainstream motherboard sourcing",
      "ROM baseline aligned to your test workflow",
      "On-site or remote commissioning",
      "Documentation for internal IT teams",
    ],
    specs: {
      Scope: "Multi-box Android deployment",
      "Typical Scale": "50-500+ nodes (project-based)",
      "Device Type": "Motherboard or full phone",
      "Connection Mode": "USB and/or OTG/LAN per site survey",
      "Delivery": "Phased shipment available",
      Customization: "Full OEM scope",
    },
    scenarios: ["Enterprise device lab build-out", "Integrator resale package", "Regional deployment with local support partner"],
    accessories: ["All hardware per BOM", "Network gear per design", "Cabling kit", "Commissioning hours"],
    delivery: ["Quote after site requirements", "Milestone payments for large projects", "SLA support optional"],
    deploymentNotes: ["Provide floor plan and power capacity in RFQ", "Allow time for network segmentation design"],
    customizationOptions: ["Any combination of box types", "API integration support", "Maintenance contract"],
    faq: [{ q: "Single box or full project?", a: "This SKU is for full-project quotes. For one box, see Motherboard Box or 32PCS Phone Farm Box." }],
    priceUsd: 0,
    stock: 0,
    imageCard: IMAGES.androidFarm.card,
    imageHero: IMAGES.androidFarm.hero,
    imageDetail: IMAGES.androidFarm.detail,
  },
  {
    slug: "real-device-phone-farm",
    name: "Real Device Phone Farm Solution",
    category: "OEM / System",
    catalogGroup: "oem-custom",
    shortDesc: "Real physical devices for testing and ops - alternative to cloud phones and emulators.",
    targetBuyer: "Organizations comparing real-device hardware vs cloud/emulator for testing and device ops.",
    description:
      "Consulting + hardware package using physical phones and boards. Focus on legitimate testing, device management workflows and automation integration - not cloud virtual instances.",
    keyParams: ["Physical devices", "Not cloud/emulator", "Workflow consulting", "Scale planning", "RFQ only"],
    features: [
      "Real IMEI, sensors and hardware fingerprints",
      "Architecture review before hardware BOM",
      "Mix of boxes, arrays and network gear",
      "Automation/API integration guidance",
      "Phased rollout support",
    ],
    specs: {
      Approach: "Real device hardware deployment",
      "vs Cloud Phone": "Dedicated physical device per slot",
      "vs Emulator": "True hardware sensor behavior",
      Scale: "Designed per RFQ",
      "Integration": "ADB / script / API options discussed post-order",
    },
    scenarios: ["Compatibility testing requiring real hardware", "Long-running stability tests", "Device ops workflow validation", "Hybrid lab (real + automated)"],
    accessories: ["Per approved BOM", "Documentation pack", "Remote hours bundle"],
    delivery: ["Discovery call -> BOM -> quote -> production"],
    deploymentNotes: ["Define success criteria before hardware order", "Network and power survey recommended"],
    customizationOptions: ["Full stack customization", "Training sessions", "Ongoing support retainer"],
    faq: [{ q: "Cloud phone replacement?", a: "We supply physical hardware for teams that need real devices. We do not sell cloud phone subscriptions." }],
    priceUsd: 0,
    stock: 0,
    imageCard: getProductCardImage("real-device-phone-farm"),
    imageHero: getProductCardImage("real-device-phone-farm").replace("/card/", "/hero/"),
    imageDetail: IMAGES.androidFarm.detail,
  },
  {
    slug: "empty-box-chassis",
    name: "Empty Chassis / Bare Box",
    category: "Accessories",
    catalogGroup: "accessories",
    shortDesc: "Empty industrial chassis for self-assembly or expansion - no boards included.",
    targetBuyer: "Customers supplying their own boards or expanding existing farms.",
    description: "Metal chassis shell with power routing and fan mounts. No motherboards or phones included. Used for custom assembly projects and spare enclosures.",
    keyParams: ["Chassis only", "No boards", "Fan mounts", "Custom slot layout", "Expansion use"],
    features: ["Industrial metal enclosure", "Pre-wired power bus (config varies)", "Fan mounting points", "OEM slot layout available"],
    specs: { Includes: "Empty chassis only", "Boards / Phones": "Not included", Customization: "Slot count and dimensions on request" },
    scenarios: ["Self-assembly projects", "Replacement enclosure", "R&D prototype housing"],
    accessories: ["Chassis shell", "Basic power harness (model-dependent)"],
    delivery: ["3-7 days standard empty chassis", "Custom layout 10-15 days"],
    deploymentNotes: ["Confirm board dimensions before ordering empty chassis"],
    customizationOptions: ["Slot pitch", "Color", "Branding"],
    faq: [{ q: "Boards included?", a: "No - chassis only. Add board SKU or send your own board spec." }],
    priceUsd: 0,
    stock: 0,
    imageCard: IMAGES.emptyBox.card,
    imageHero: IMAGES.emptyBox.hero,
    imageDetail: IMAGES.emptyBox.detail,
  },
  {
    slug: "usb-hub",
    name: "Industrial USB Hub",
    category: "Accessories",
    catalogGroup: "accessories",
    shortDesc: "Powered USB 2.0 hub for stable multi-device USB connections - not a full phone box.",
    targetBuyer: "Sites hitting USB resource limits or extending PC port count.",
    description: "Industrial-grade powered USB hub. Use when host PC ports are insufficient or USB tree stability is required. Specs vary by port count - confirm in RFQ.",
    keyParams: ["USB 2.0", "Powered hub", "Multi-port", "Stability focus", "Add-on accessory"],
    features: ["Powered ports reduce host load", "USB 2.0 recommended for phone farm stability", "Mountable enclosure options"],
    specs: { Type: "Powered USB 2.0 hub", "Port Count": "Quote-based (4/7/10+)", "Use Case": "Extend PC USB tree" },
    scenarios: ["Fix insufficient USB resources", "Split boxes across USB trees", "Lab bench extension"],
    accessories: ["Hub unit", "Power adapter", "USB uplink cable"],
    delivery: ["Usually in stock for common port counts"],
    deploymentNotes: ["Prefer USB 2.0 over USB 3.0 for long runs", "One hub per logical tree - avoid deep chaining"],
    customizationOptions: ["Port count", "Mounting bracket"],
    faq: [{ q: "Fixes USB resource error?", a: "Often yes - powered USB 2.0 hub with proper topology. See Manual troubleshooting section." }],
    priceUsd: 0,
    stock: 0,
    imageCard: IMAGES.usbHub.card,
    imageHero: IMAGES.usbHub.hero,
    imageDetail: IMAGES.usbHub.detail,
  },
  {
    slug: "power-supply-solution",
    name: "Central Power Module",
    category: "Accessories",
    catalogGroup: "accessories",
    shortDesc: "220V centralized power distribution for phone farm cabinets - replacement or upgrade part.",
    targetBuyer: "Maintenance, expansion or custom cabinet power design.",
    description: "Power distribution module for chassis/cabinet deployments. Not a standalone phone box - pairs with empty chassis or OEM cabinet projects.",
    keyParams: ["220V input", "Centralized bus", "Replacement part", "OEM cabinets", "7x24 design"],
    features: ["Stable 220V distribution", "Fused outputs per design", "Compatible with standard chassis"],
    specs: { Input: "220V AC", Output: "Per cabinet design", Application: "Chassis / cabinet power upgrade" },
    scenarios: ["Power module replacement", "Custom cabinet build", "Regional voltage adapter consultation"],
    accessories: ["Power module", "Input cable"],
    delivery: ["Quote based on cabinet model"],
    deploymentNotes: ["Verify total load before upgrading power module"],
    customizationOptions: ["Output channel count", "Surge protection tier"],
    faq: [{ q: "Standalone product?", a: "Accessory for boxes/cabinets - send chassis model in RFQ." }],
    priceUsd: 0,
    stock: 0,
    imageCard: IMAGES.power.card,
    imageHero: IMAGES.power.hero,
    imageDetail: IMAGES.power.detail,
  },
  {
    slug: "cooling-solution",
    name: "Cooling Fan Kit",
    category: "Accessories",
    catalogGroup: "accessories",
    shortDesc: "Replacement or supplemental fan kit for dense chassis - prevents thermal throttling.",
    targetBuyer: "Operations teams maintaining 24/7 farms in warm environments.",
    description: "Fan kits and airflow upgrades for phone farm chassis. Includes replacement fans and filters where applicable.",
    keyParams: ["Active cooling", "Replacement fans", "Filter kit", "24/7 ops", "Thermal maintenance"],
    features: ["Maintains airflow in stacked deployment", "Replaceable filters", "Compatible fan sizes per chassis model"],
    specs: { Type: "Axial chassis fans", Compatibility: "Per chassis model - confirm in RFQ" },
    scenarios: ["Hot climate sites", "Fan failure replacement", "Density upgrade cooling"],
    accessories: ["Fan unit(s)", "Optional filter pack"],
    delivery: ["Spare parts usually 3-5 days"],
    deploymentNotes: ["Clean filters every 30 days in dusty environments"],
    customizationOptions: ["Extra fan slots on OEM chassis"],
    faq: [{ q: "Which chassis fits?", a: "Send chassis photo or order number - we match fan spec." }],
    priceUsd: 0,
    stock: 0,
    imageCard: IMAGES.cooling.card,
    imageHero: IMAGES.cooling.hero,
    imageDetail: IMAGES.cooling.detail,
  },
  {
    slug: "network-equipment",
    name: "Network Management Router for Phone Farms",
    category: "Network",
    catalogGroup: "network",
    shortDesc: "Enterprise network management router for large phone farms — stable OTG/LAN for 300–10,000 devices.",
    targetBuyer: "Deployments scaling past consumer routers — 50, 300, 1000+ device OTG/LAN segments.",
    description:
      "Network management router designed for large mobile phone farms. When OTG/LAN Ethernet mode connects dozens or thousands of devices, router stability directly affects scan success, disconnect rate and batch automation reliability. We size enterprise managed routers and soft-router gateways for phone farm deployments from 300 to 10,000 mobile phones. Pair with enterprise switches for port density. See model tables below for IK-MSG router series specifications.",
    keyParams: ["OTG/LAN mode", "Soft router", "IP segmentation", "20+ devices", "Stability focus"],
    features: [
      "Pre-configured IP segment templates",
      "Switch port count matched to device count",
      "Recommendations for 20 / 50 / 100+ device tiers",
      "Integration notes in Manual",
    ],
    specs: {
      Role: "OTG/LAN network backbone for phone farm",
      "Scale Range": "300–10,000 devices (model dependent)",
      "Recommended For": "20+ devices USB migration; 300+ dedicated enterprise router",
      "Typical Setup": "Box + PC on same router; scan IP range; green OTG mode",
      "Switch Pairing": "Enterprise L2/L3 or PoE switches for port expansion",
      Customization: "VLAN / segment design, pre-configured IP plan on request",
    },
    specTables: [ENTERPRISE_ROUTER_TABLE],
    detailSections: [
      {
        title: "When You Need an Enterprise Router",
        content:
          "Consumer routers often drop connections above ~20 simultaneous OTG/LAN devices. For phone farm box deployments at hundreds or thousands of nodes, enterprise managed routers provide stable DHCP, higher session counts and gigabit backbone capacity. Share your device count and we recommend IK-MSG series model or bundled switch package.",
      },
    ],
    faq: [
      { q: "Minimum router spec?", a: "For 20 devices: stable consumer router often works. 300+: IK-MSG100 or higher. 10,000: IK-MSG600X class — send device count in RFQ." },
      { q: "Soft router vs hardware?", a: "Soft router on PC or dedicated appliance both work for mid scale. Enterprise IK-MSG series for production farms with 24/7 uptime requirements." },
      { q: "Switch required?", a: "For port count beyond router Ethernet ports, add enterprise switch — see /products/ikuai-enterprise-switch." },
    ],
    scenarios: ["OTG/LAN deployment at 300+ nodes", "USB-to-Ethernet migration", "Large LAN port expansion", "Multi-box farm network backbone"],
    accessories: ["Enterprise managed router (model per RFQ)", "Optional managed switch", "IP segment config cheat sheet"],
    delivery: ["Bundled with box order or standalone accessory", "Lead time per model availability"],
    deploymentNotes: ["Disable WiFi on phones in Ethernet mode", "Use gigabit backbone for 50+ devices", "Document router model before remote support"],
    customizationOptions: ["Router model selection", "Pre-configured IP plan", "Switch bundle"],
    priceUsd: 0,
    stock: 0,
    imageCard: IMAGES.network.card,
    imageHero: IMAGES.network.hero,
    imageDetail: IMAGES.network.detail,
  },
  {
    slug: "ikuai-enterprise-switch",
    name: "Enterprise-Level Network Switch",
    category: "Network",
    catalogGroup: "network",
    shortDesc: "Enterprise L2/L3 and PoE switches — pair with soft router gateway for phone farm LAN expansion.",
    targetBuyer: "Large OTG/LAN farms needing 24–48+ gigabit ports and PoE for access points.",
    description:
      "Enterprise-level switches recommended alongside soft-router gateway for phone farm deployments. Standard L2/L3 switches expand port count for device Ethernet connections; PoE models power access points and network gear in the same rack. Model specifications below — confirm port count and PoE budget in RFQ.",
    keyParams: ["L2/L3 switches", "PoE options", "24–48 port", "10G SFP+", "Phone farm LAN"],
    features: [
      "Standard and PoE switch families for farm LAN expansion",
      "336Gbps backplane on L3 models for high PPS",
      "Pairs with IK-MSG enterprise router series",
      "Rack-mount 1U form factors",
    ],
    specs: {
      Role: "LAN port expansion for OTG/LAN phone farms",
      "Standard Models": "IK-J7028, IK-J7028E, IK-J7028ES, IK-J7052",
      "PoE Models": "IK-J3126, IK-J3126H, IK-J7110, IK-J7120, IK-J7128",
      Pairing: "Use with network management router / soft router gateway",
      Customization: "Model selected by port count and PoE budget",
    },
    specTables: [STANDARD_SWITCH_TABLE, POE_SWITCH_TABLE],
    scenarios: ["Expand LAN ports beyond router", "PoE for APs in farm network closet", "Rack integration for 500+ node sites"],
    accessories: ["Switch unit", "Rack ears", "Config baseline on request"],
    delivery: ["Quote per model", "Often bundled with router + box RFQ"],
    deploymentNotes: ["Match switch tier to PPS requirements", "Use L3 when inter-VLAN routing needed"],
    customizationOptions: ["Standard vs PoE", "Port count", "SFP+ uplink"],
    faq: [
      { q: "Which switch for my farm?", a: "Send device count and rack layout. We size port count and PoE budget with router model." },
      { q: "PoE required?", a: "Only if powering access points or PoE devices from same switch — most phone farm boxes use separate 220V power." },
    ],
    priceUsd: 0,
    stock: 0,
    imageCard: IMAGES.network.card,
    imageHero: IMAGES.network.hero,
    imageDetail: IMAGES.network.detail,
  },
  {
    slug: "custom-cabinet",
    name: "OEM Custom Cabinet",
    category: "OEM / Custom",
    catalogGroup: "oem-custom",
    shortDesc: "Rack or floor cabinet OEM - capacity, cooling and cable routing per project drawing.",
    targetBuyer: "Enterprise rollouts requiring rack integration, branding and capacity planning.",
    description:
      "Custom cabinet manufacturing: node capacity, cooling airflow, cable routing, PDU layout and shipping crate design. Requires RFQ with target node count and site constraints.",
    keyParams: ["OEM cabinet", "Capacity planning", "Cooling design", "Cable routing", "Export crate"],
    features: [
      "Engineering drawing before production",
      "Rack or floor standing options",
      "Redundant cooling paths",
      "Labeled power and network zones",
      "Export-ready crating",
    ],
    specs: {
      "Capacity / Nodes": "Project-defined (50-500+ typical)",
      "Form Factor": "Rack 42U partial or custom floor cabinet",
      Cooling: "Multi-zone fans + optional AC consultation",
      "Network": "Integrated switch mounting",
      "Lead Time": "15-30 days after drawing approval",
    },
    scenarios: ["Data-center style device lab", "Branded OEM for integrators", "High-density regional hub"],
    accessories: ["Cabinet shell", "Internal trays", "PDU", "Switch shelf", "Documentation"],
    delivery: ["Drawing approval milestone", "Phased production for large orders"],
    deploymentNotes: ["Site survey recommended for power and HVAC", "Allow crane/access path for large cabinets"],
    customizationOptions: ["Any dimension within manufacturing limits", "Logo / color", "Slot module mix"],
    faq: [{ q: "MOQ for OEM cabinet?", a: "Single prototype cabinet possible; volume pricing at 3+ units - send target count." }],
    priceUsd: 0,
    stock: 0,
    imageCard: IMAGES.customCabinet.card,
    imageHero: IMAGES.customCabinet.hero,
    imageDetail: IMAGES.customCabinet.detail,
  },
  {
    slug: "remote-control-setup",
    name: "Remote Setup & Group Control Configuration",
    category: "Service / Setup",
    catalogGroup: "oem-custom",
    shortDesc: "Service: software install, ADB/OTG config, API hookup - sold with hardware or standalone.",
    targetBuyer: "Buyers who need hands-on commissioning without sending staff to Guangzhou.",
    description:
      "Remote installation service via AnyDesk/remote desktop: group-control software, ADB authorization, USB/OTG mode switch, router scan setup and basic automation API orientation.",
    keyParams: ["Remote via AnyDesk", "ADB + OTG setup", "Software config", "API orientation", "Post-sale support"],
    features: [
      "Screen mirror and batch control verification",
      "ADB authorization file placement",
      "OTG/LAN IP scan walkthrough",
      "Handover checklist",
      "Follow-up session within warranty window",
    ],
    specs: {
      Delivery: "Remote session(s) after hardware arrival",
      Duration: "Typically 2-4 hours for standard box",
      Prerequisites: "Windows PC, stable internet, hardware powered",
      "API Docs": "Provided after purchase for automation integration",
    },
    scenarios: ["First-time phone farm commissioning", "Migration from USB to OTG/LAN", "Staff training"],
    accessories: ["Not a hardware SKU - service hours bundle"],
    delivery: ["Schedule within 5 business days of hardware delivery", "Extra hours available"],
    deploymentNotes: ["Prepare TeamViewer/AnyDesk on control PC", "Have router admin access ready"],
    customizationOptions: ["On-site visit (quote separately)", "SLA support package"],
    faq: [{ q: "Included with box?", a: "Basic remote setup included with hardware orders; advanced API integration quoted separately." }],
    priceUsd: 0,
    stock: 0,
    imageCard: IMAGES.remoteControl.card,
    imageHero: IMAGES.remoteControl.hero,
    imageDetail: IMAGES.remoteControl.detail,
  },
];

export const PRODUCT_BEST_FOR: Record<string, string> = {
  "motherboard-box": "Medium bulk deployment",
  "phone-farm-box": "Medium bulk deployment",
  "phone-array-12pcs": "Small testing lab",
  "iphone-phone-farm": "Custom cabinet project",
  "android-phone-farm": "Medium bulk deployment",
  "real-device-phone-farm": "Enterprise device lab",
  "empty-box-chassis": "Custom cabinet project",
  "usb-hub": "Replacement parts buyer",
  "power-supply-solution": "Replacement parts buyer",
  "cooling-solution": "Replacement parts buyer",
  "network-equipment": "OTG/LAN scale-up project",
  "ikuai-enterprise-switch": "Large farm LAN expansion",
  "custom-cabinet": "Custom cabinet project",
  "remote-control-setup": "Reseller sample order",
};

/** Per-SKU SEO titles and keywords for product detail pages. */
export const PRODUCT_SEO: Record<
  string,
  { title: string; description?: string; keywords: string[] }
> = {
  "motherboard-box": {
    title: "Android Motherboard Phone Farm Box - 20 Nodes",
    description:
      "Buy Android motherboard phone farm box: 20 nodes, 55x38x16 cm, ~7 kg, 220V ~100W. Factory-direct device farm hardware for app QA and multi-device labs. RFQ Guangzhou.",
    keywords: [
      "motherboard phone farm box",
      "Android phone farm",
      "Android motherboard box",
      "buy phone farm box",
      "device farm hardware",
      "phone farm equipment",
    ],
  },
  "phone-farm-box": {
    title: "32PCS Phone Farm Box - Android Device Farm Hardware",
    description:
      "32PCS phone farm box with ROM customization, 3-fan cooling, USB and OTG/LAN. Mobile device farm chassis for medium-scale Android labs. Guangzhou factory RFQ.",
    keywords: [
      "32PCS phone farm box",
      "phone farm box",
      "Android device farm hardware",
      "buy phone farm box",
      "phone farm equipment",
      "mobile device farm",
    ],
  },
  "phone-array-12pcs": {
    title: "12PCS Phone Array - Mobile Device Farm Lab Hardware",
    description:
      "12PCS hot-swap phone array for pilot labs and frequent device swaps. Full phone or motherboard slots, optional built-in PC. Phone farm equipment RFQ.",
    keywords: [
      "12PCS phone array",
      "mobile device farm",
      "phone farm equipment",
      "device farm hardware",
      "phone farm box supplier",
    ],
  },
  "iphone-phone-farm": {
    title: "iPhone Farm Box - iOS Multi-Device Chassis",
    description:
      "iPhone farm box hardware for iOS device labs. Custom configuration per model and iOS version. Guangzhou phone farm factory wholesale RFQ.",
    keywords: [
      "iPhone farm box",
      "phone farm box wholesale",
      "phone farm hardware supplier",
      "device farm hardware",
    ],
  },
  "network-equipment": {
    title: "Phone Farm Network Router - OTG/LAN 100+ Devices",
    description:
      "Enterprise router for OTG/LAN phone farms. IK-MSG series supports 300-10,000 device tiers. Phone farm equipment for large Android device farms.",
    keywords: [
      "OTG/LAN phone farm",
      "phone farm network router",
      "device farm hardware",
      "Android phone farm",
    ],
  },
  "ikuai-enterprise-switch": {
    title: "Enterprise Switch for Phone Farm LAN",
    description:
      "L2/L3 and PoE enterprise switch for large phone farm LAN segments. Device farm infrastructure from Guangzhou factory.",
    keywords: ["phone farm network", "device farm hardware", "phone farm equipment"],
  },
  "custom-cabinet": {
    title: "Rackmount & Custom Phone Farm Cabinet - OEM",
    description:
      "Rackmount phone farm cabinets and 2U-style OEM chassis. Custom tray layout, cooling, PDU for 50-500+ node device farms. Factory quote.",
    keywords: [
      "rackmount phone farm",
      "2U phone farm rack",
      "custom phone farm box",
      "phone farm factory",
      "OEM phone farm cabinet",
    ],
  },
};

export function getProductSeo(slug: string) {
  return PRODUCT_SEO[slug];
}

export function getProductBestFor(slug: string) {
  return PRODUCT_BEST_FOR[slug] || "Contact for configuration";
}

export function getProductSeed(slug: string) {
  return PRODUCT_SEEDS.find((item) => item.slug === slug);
}

export function getProductsByCatalog(group: CatalogGroup) {
  return PRODUCT_SEEDS.filter((p) => p.catalogGroup === group);
}
