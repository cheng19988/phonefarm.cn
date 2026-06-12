/** Additional technical articles aligned with industry phone farm topics (English). */

export const BLOG_POSTS_EXTRA = [
  {
    slug: "what-is-a-phone-farm-box-and-how-does-it-work",
    title: "What Is a Phone Farm Box? How Box Phone Farms Improve Automation",
    category: "Knowledge Base",
    date: "2025-09-17",
    excerpt: "Definition of phone farm box hardware, group control software integration and benefits for testing and automation.",
    content: `A phone farm box is a metal chassis that integrates multiple Android motherboards or phones with centralized power, cooling and data routing. Group-control software on a Windows PC mirrors screens and sends batch commands.

**How it works**
Devices connect via USB or OTG/LAN. One box typically holds 20 motherboards (55×38×16 cm, ~7 kg). One PC controls 3–5 boxes. Blue LED = USB mode; green LED = OTG/LAN.

**Benefits**
Higher density than open racks, lower power per node when using headless boards, factory QC before shipment and stackable deployment for scaling labs.

**Products:** /products/motherboard-box · /products/phone-farm-box · /manual`,
  },
  {
    slug: "setting-up-your-first-phone-farm-box-a-beginners-guide",
    title: "Setting Up Your First Phone Farm Box: A Beginner's Guide",
    category: "Technical Guide",
    date: "2025-08-14",
    excerpt: "Step-by-step first box setup: Windows prep, ADB authorization, USB mode and first batch mirror test.",
    content: `**Step 1 — Windows prep**
Windows 10/11, uninstall phone assistant apps, disable antivirus blocking ADB during install.

**Step 2 — Software**
Install group-control software. Obtain ADB authorization files from board supplier.

**Step 3 — Authorization**
Extract to C:\\Users\\<username>\\.android and reboot.

**Step 4 — Connect**
Power box, USB to PC, tap Allow on first debug prompt.

**Step 5 — Verify**
Refresh device list, test mirror and single tap. Then test batch select.

Full manual: /manual · RFQ support: /contact`,
  },
  {
    slug: "important-tips-to-increase-efficiency-of-phone-farming",
    title: "Important Tips to Increase Efficiency of Phone Farming",
    category: "Technical Guide",
    date: "2025-08-14",
    excerpt: "Power, network, USB topology and software settings that reduce downtime in phone farm operations.",
    content: `**Hardware layout**
Stack boxes with airflow gaps. Label USB trees per box. Use powered USB 2.0 hubs.

**Network**
Migrate heavy loads to OTG/LAN before USB controllers saturate. Use enterprise router above 300 devices.

**Software**
Exclude ADB folders from antivirus. Stagger first boot after power events. Backup authorization before OS reinstall.

**Maintenance**
Clean fan filters monthly in dusty sites. Keep spare screen for authorization recovery.

Products: /products · Manual troubleshooting: /manual#troubleshooting`,
  },
  {
    slug: "the-difference-between-a-bot-farm-and-a-phone-farm",
    title: "The Difference Between a Bot Farm and a Phone Farm – Explained Simply",
    category: "Knowledge Base",
    date: "2025-10-14",
    excerpt: "Bot farms vs phone farms: virtual automation vs real-device hardware for testing and operations.",
    content: `**Bot farm**
Often refers to software bots running on servers or emulators — scripts without physical phones. Lower hardware cost but less fidelity for mobile-specific behavior.

**Phone farm**
Physical smartphones or motherboards in a box phone farm chassis. Real sensors, IMEI, GPU and network stack. Used for app testing, QA, device management and lawful automation on real devices.

**When to choose phone farm hardware**
When emulators or cloud phones cannot reproduce target device behavior, or when you need offline lab control and predictable per-node cost.

Hardware catalog: /products · Guide: /phone-farming`,
  },
  {
    slug: "role-of-bot-farms-in-automation-vs-phone-farms",
    title: "The Role of Bot Farms in Automation and How They Differ from Phone Farms",
    category: "Knowledge Base",
    date: "2025-02-27",
    excerpt: "How bot farm automation compares to physical phone farm deployments for digital operations.",
    content: `Bot farms excel at server-side or emulator-scale script execution. Phone farms excel when real Android/iOS hardware is required — compatibility testing, sensor-dependent apps and multi-device management workflows.

Many enterprises use both: emulators for early CI, physical phone farm boxes for release-candidate validation.

Learn more: /mobile-phone-farming · /blog/the-difference-between-a-bot-farm-and-a-phone-farm`,
  },
  {
    slug: "how-motherboard-farm-boxes-can-save-time-and-reduce-errors",
    title: "How Motherboard Farm Boxes Can Save Time and Reduce Errors",
    category: "Hardware Selection",
    date: "2025-10-28",
    excerpt: "Why pre-wired 20-node chassis beat DIY open racks for cable management and QC consistency.",
    content: `Open device racks require per-device power, cable routing and cooling design. Motherboard farm boxes factory-integrate 20 nodes with fused power bus, fan airflow and labeled USB paths.

**Time saved**
No per-slot wiring on site. Remote setup session verifies list in hours not days.

**Errors reduced**
Consistent ADB authorization workflow, identical ROM baseline per slot, QC burn-in before export.

SKU: /products/motherboard-box`,
  },
  {
    slug: "understanding-the-economics-of-device-farming-2025",
    title: "Understanding the Economics of Device Farming in 2025",
    category: "Industry",
    date: "2025-12-01",
    excerpt: "CapEx vs OpEx for physical device farms compared to cloud device subscriptions.",
    content: `**CapEx model (box phone farm)**
One-time hardware purchase, predictable per-node cost, full ADB access, no recurring cloud seat fees.

**OpEx model (cloud/emulator)**
Subscription per device-minute, faster spin-up, less hardware maintenance.

**Break-even factors**
Utilization hours, required hardware fidelity, data residency and scale. Labs running 24/7 often favor owned chassis after 6–18 months depending on cloud pricing.

Get configuration quote: /contact · Packages: /packages`,
  },
  {
    slug: "why-real-device-control-changes-everything-large-scale-testing",
    title: "Why Real Device Control Changes Everything in Large Scale Testing",
    category: "QA & Testing",
    date: "2026-04-22",
    excerpt: "Real IMEI, sensors and OEM skins matter for release testing at scale.",
    content: `Large-scale testing on emulators misses OEM-specific bugs, GPU paths and carrier behavior. Real device control via phone farm box hardware lets QA teams run parallel test matrices on physical fleets.

Combine motherboard boxes for density with 12PCS arrays for hot-swap maintenance during long test campaigns.

Products: /products · FAQ: /faq`,
  },
  {
    slug: "practical-applications-of-cell-phone-farms-in-software-development",
    title: "Practical Applications of Cell Phone Farms in Software Development",
    category: "Software Development",
    date: "2025-09-17",
    excerpt: "Dev use cases: CI device pools, regression matrices, stress testing and integration QA.",
    content: `**CI integration**
ADB scripts from Jenkins/GitLab against fixed device pool.

**Regression matrix**
Parallel installs across Android versions and OEM skins.

**Stress testing**
24/7 load on physical hardware with thermal monitoring.

**Integration QA**
WebSocket API (WSAPI) automation at 127.0.0.1:22223 for custom tooling.

Manual API section: /manual#api-automation · Hardware: /products/motherboard-box`,
  },
  {
    slug: "what-is-a-phone-farm-how-people-use-smartphones-to-earn-money",
    title: "What Is a Phone Farm? How People Use Smartphones in Device Operations",
    category: "Knowledge Base",
    date: "2025-08-19",
    excerpt: "Overview of phone farm concepts, hardware requirements and legitimate professional applications.",
    content: `A phone farm connects many smartphones to one PC for batch or individual tasks. Professional uses include app testing, QA automation, device management labs and integration testing — not platform terms violations.

**Hardware path**
Motherboard box (20 nodes), 32PCS chassis, 12PCS array, network router for OTG/LAN at scale.

**Requirements**
Stable power, network, group-control software, ADB authorization.

We supply hardware for development and testing only. Guide: /phone-farming · RFQ: /contact`,
  },
  {
    slug: "how-automation-helps-reduce-downtime-in-phone-farms",
    title: "How Automation Helps Reduce Downtime in Phone Farms",
    category: "Automation",
    date: "2026-05-26",
    excerpt: "Scripted health checks, WSAPI integration and network design to minimize offline nodes.",
    content: `**Automated health checks**
Periodic ADB ping scripts flag offline slots before batch jobs fail.

**WSAPI integration**
Automate screen capture, file push and input events without manual mirror clicks.

**Network resilience**
Enterprise router + fixed DHCP for OTG/LAN farms above 300 devices.

**Preventive maintenance**
Fan filter schedule, authorization backup, spare drawer in 12PCS array.

API guide: /blog/automation-api-wsapi-guide · Manual: /manual`,
  },
  {
    slug: "how-phone-farms-standardize-multi-device-testing",
    title: "How Phone Farms Are Used to Standardize Multi-Device Testing Processes",
    category: "QA & Testing",
    date: "2026-02-27",
    excerpt: "Standard device pools, ROM baselines and labeled slots for repeatable QA.",
    content: `Standardization requires identical ROM baseline per slot, labeled physical slots matching software groups and documented connection mode (USB vs OTG/LAN).

Factory-assembled boxes ship with consistent wiring and QC checklist — reducing variance vs ad-hoc desk setups.

Enterprise OEM: /products/custom-cabinet · /services`,
  },
  {
    slug: "why-hardware-layout-defines-performance-modern-phone-farm",
    title: "Why Hardware Layout Still Defines Performance in a Modern Mobile Phone Farm",
    category: "Hardware Design",
    date: "2026-03-27",
    excerpt: "Cooling airflow, power bus design and USB/Ethernet topology affect 24/7 farm uptime.",
    content: `Software alone cannot fix thermal throttling from poor airflow or voltage drop on overloaded power strips. Professional box phone farm chassis engineer fan paths, fused outputs and cable strain relief.

**Stacking**
Leave vertical airflow gap between boxes.

**USB topology**
One powered hub per logical tree; avoid deep chaining.

**Ethernet scale**
Soft router or IK-MSG series when exceeding consumer router limits.

Article: /blog/why-structured-box-setups-outperform-open-racks`,
  },
  {
    slug: "why-structured-box-setups-outperform-open-device-racks",
    title: "Why Structured Box Phone Setups Outperform Open Device Racks",
    category: "Hardware Design",
    date: "2026-03-27",
    excerpt: "Compare enclosed chassis vs open racks for security, cooling and cable management.",
    content: `Open racks expose cables to snags, dust and accidental disconnects. Box phone farm enclosures consolidate power, reduce footprint and simplify export shipping.

**Security**
Enclosed chassis limits physical access to devices.

**Operations**
One power cord per box vs dozens of phone chargers.

**Shipping**
Factory foam packing for integrated chassis vs loose devices.

Compare SKUs: /products · Quality guide: /quality-assurance`,
  },
  {
    slug: "phone-farm-management-challenges-hardware-design-solutions",
    title: "Phone Farm Management Challenges and How Hardware Design Solves Them",
    category: "Operations",
    date: "2026-01-28",
    excerpt: "Scaling farms: device identification, power events and USB resource limits.",
    content: `**Challenge: device identification**
Label slots physically and in software groups; use EditDeviceName via WSAPI.

**Challenge: USB saturation**
Migrate to OTG/LAN; add PCIe USB cards or reduce simultaneous mirrors.

**Challenge: power events**
UPS on control PC and network gear; stagger box boot after outage.

Hardware designed for farms addresses these at chassis level — see /products/motherboard-box and /manual#troubleshooting`,
  },
  {
    slug: "structured-device-expansion-phone-farming-machine",
    title: "How a Phone Farming Machine Supports Structured Device Expansion",
    category: "Scaling",
    date: "2026-01-28",
    excerpt: "Adding boxes, routers and power capacity in phases without rewiring the whole lab.",
    content: `Structured expansion plan:
1. Pilot — one 12PCS array or one motherboard box
2. Production — add boxes in groups of 3–5 per PC
3. Network — upgrade router at 300+ OTG/LAN devices
4. OEM — custom cabinet at 500+ nodes

Packages: /packages · Network router: /products/network-equipment`,
  },
  {
    slug: "first-multi-device-setup-without-risk",
    title: "A Simple Guide to Building Your First Multi-Device Setup Without Risk",
    category: "Beginner Guide",
    date: "2025-12-01",
    excerpt: "Sample order path, USB-first evaluation and when to scale to OTG/LAN.",
    content: `**Start small**
Order one 12PCS array or one motherboard box as sample. Validate software compatibility before bulk MOQ.

**USB first**
Master authorization and mirror workflow in USB mode before router planning.

**Document baseline**
Screenshot working config: software version, authorization path, PC spec.

**Scale**
Add boxes and router when batch jobs stable for 72+ hours.

Sample orders: /faq · Contact: /contact`,
  },
];
