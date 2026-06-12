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
    slug: "phone-farm-device-operations-guide",
    title: "What Is a Phone Farm? Device Operations & Professional Use",
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
  {
    slug: "phone-farm-cooling-power-chassis-vs-open-racks",
    title: "Phone Farm Cooling and Power: Why Chassis Design Beats Open Racks at 100+ Nodes",
    category: "Hardware Design",
    date: "2026-06-08",
    excerpt:
      "How centralized power, triple-fan cooling and metal chassis layout reduce downtime compared to open USB racks at scale.",
    content: `Open racks with consumer phones look cheap until you count cable chaos, uneven airflow and USB power sag. Professional phone farm boxes integrate power distribution, cooling fans and fixed slot geometry.

**Why chassis wins at 100+ nodes**
- Predictable airflow path vs phones stacked on shelves
- One power entry per box instead of 100 wall adapters
- Labeled USB/Ethernet trees per chassis
- Stackable footprint for warehouse or rack rows

**Power planning**
Motherboard boxes draw ~100W at 20 nodes; 32PCS chassis ~160W. Plan circuit load when running 10+ boxes continuously.

**Cooling**
Clean fan filters monthly in dusty sites. Leave 5–10 cm gap between stacked boxes.

Products: /products/motherboard-box · /products/phone-farm-box · QC process: /quality-assurance`,
  },
  {
    slug: "how-many-devices-one-pc-control-usb-otg-lan",
    title: "How Many Devices Can One PC Control? USB vs OTG/LAN Scaling Rules",
    category: "Technical Guide",
    date: "2026-06-07",
    excerpt:
      "Practical PC limits for 20-node motherboard boxes and 32PCS chassis — CPU, RAM, USB controllers and router sizing.",
    content: `**Typical factory guidance**
- 1 PC → 3–5 motherboard boxes (60–100 headless nodes)
- 1 PC → 2–4 × 32PCS boxes (software dependent)
- Heavy mirroring reduces headroom — batch jobs tolerate more nodes than live mirror farms

**USB mode limits**
Windows USB host controllers saturate before CPU. Symptoms: "insufficient USB resources". Fix: powered USB 2.0 hubs, PCIe cards, or migrate to OTG/LAN.

**OTG/LAN mode**
Devices on router segment; PC scans IP range. Scales past USB limits but needs DHCP capacity and enterprise router above 300 devices.

**Written PC baseline**
Xeon E5-2680 V2 class, 32 GB RAM, SSD, multiple USB 2.0 root ports. See /manual#recommended-pc.

RFQ with target node count: /contact · Packages: /packages`,
  },
  {
    slug: "phone-farm-lead-times-moq-shenzhen-factory",
    title: "Phone Farm Box Lead Times and MOQ: What to Expect from a Guangzhou Factory",
    category: "Procurement",
    date: "2026-06-06",
    excerpt:
      "Sample units, bulk MOQ, custom ROM production windows and export packing timelines for B2B buyers.",
    content: `**Sample / pilot orders**
12PCS array or single motherboard box often ships in 3–5 business days when in stock configuration.

**Standard bulk**
20-node motherboard box and 32PCS chassis: confirm MOQ in RFQ — typical integrator orders start at 5–20 units.

**Custom ROM**
Add 7–15 production days for auto-boot, ADB persistence and firmware hardening scope.

**Export**
Foam packing, commercial invoice, DHL/FedEx air or sea LCL for pallet loads. HS code reference 8471609000 on motherboard box exports.

**What speeds up delivery**
Confirm Android model list, connection mode (USB vs OTG/LAN) and destination country in first RFQ email.

Buyer checklist: /phone-farm-buyer-guide · Contact: /contact`,
  },
  {
    slug: "custom-rom-phone-farm-auto-boot-adb",
    title: "Custom ROM for Phone Farms: Auto-Boot, ADB Persistence, and Lab Hardening",
    category: "Technical Guide",
    date: "2026-06-05",
    excerpt:
      "ROM customization scope for unattended boot, stable ADB after power loss and reducing OTA interruptions in device labs.",
    content: `**Common ROM requests**
- Auto power-on after AC connect
- ADB debugging persists without on-screen prompts
- Disable OTA nag screens in locked-down labs
- Extended screen timeout defaults

**Why it matters**
Phone farms reboot after outages. Without ROM hardening, operators re-authorize dozens of devices manually.

**Scope limits**
Advanced per-app hooks or carrier-specific builds quoted separately. We confirm board model compatibility before flash.

**Coordination**
Send target software stack (group-control tool, mirror client) in RFQ so ROM matches your automation workflow.

Services: /services · Manual ADB section: /manual#adb-auth · Products: /products`,
  },
  {
    slug: "stack-cable-multi-box-phone-farm-without-usb-collapse",
    title: "How to Stack and Cable a Multi-Box Phone Farm Without USB Collapse",
    category: "Deployment",
    date: "2026-06-04",
    excerpt:
      "Physical layout, powered hub placement, labeling and when to switch boxes to OTG/LAN before USB trees fail.",
    content: `**Layout rules**
- One powered USB 2.0 hub per box branch — avoid daisy-chaining consumer hubs
- Label each box ID on chassis and in software groups
- Keep data cables under 2 m where possible; use active extensions for long runs

**Stacking**
Metal chassis stack with airflow gaps. Heaviest boxes on lower shelf; network gear on separate shelf with UPS.

**Migration trigger**
When mirror refresh slows or Windows reports USB resource errors on 40+ nodes, plan OTG/LAN for the next box group.

**Router handoff**
Box and PC on same subnet; green LED = OTG/LAN mode. Router sizing: /products/network-equipment.

Installation reference: /manual · OTG/LAN tutorial: /blog/otg-lan-network-setup`,
  },
  {
    slug: "when-choose-20-node-motherboard-vs-32pcs-chassis",
    title: "When to Choose 20-Node Motherboard Box vs 32PCS Full-Phone Chassis",
    category: "Buyer's Guide",
    date: "2026-06-03",
    excerpt:
      "Density, shipment size, power per node and maintenance trade-offs between our two flagship Android chassis SKUs.",
    content: `**Choose 20-node motherboard box when**
- You want lowest power per node (headless boards)
- Shipment units should stay compact (55×38×16 cm, ~7 kg)
- Scaling by adding 3–5 boxes per PC is enough
- Integrator/reseller needs stackable standard SKU

**Choose 32PCS phone farm box when**
- One chassis must hold 32 devices with unified cooling
- ROM customization and medium-scale QA lab in one enclosure
- Fewer total boxes to cable on the floor

**Choose 12PCS array when**
- Hot-swappable drawers for frequent device swaps
- Pilot evaluation before bulk MOQ

Compare specs: /products/motherboard-box · /products/phone-farm-box · /products/phone-array-12pcs`,
  },
  {
    slug: "export-packing-hs-codes-phone-farm-china",
    title: "Export Packing and HS Codes for Phone Farm Equipment from China",
    category: "Export & Logistics",
    date: "2026-06-02",
    excerpt:
      "Commercial invoice fields, foam packing, air vs sea freight and HS code 8471609000 reference for customs brokers.",
    content: `**Export documentation**
Commercial invoice with product description, quantity, unit value, HS code and Guangzhou origin. We support buyer forwarder handoff.

**Packing**
Foam-lined cartons per box; pallet option for 10+ units. Pre-shipment photos or short packing video on request.

**HS code reference**
Motherboard box chassis commonly declared under 8471609000 (automatic data processing units/components) — buyer's broker confirms final classification for destination country.

**Freight modes**
DHL/FedEx for samples and urgent lots; sea LCL for bulk chassis orders.

Full export guide: /blog/phone-farm-equipment-export-shipping · RFQ: /contact`,
  },
  {
    slug: "phone-farm-hardware-game-qa-parallel-sessions",
    title: "Phone Farm Hardware for Game QA: Parallel Sessions on Real Android Boards",
    category: "Applications",
    date: "2026-06-01",
    excerpt:
      "Why mobile game studios use real-device phone farm boxes for compatibility, GPU behavior and multi-account session testing.",
    content: `**Why emulators fall short**
GPU drivers, touch latency, background process limits and carrier-specific behavior differ on real boards.

**Lab setup**
Motherboard boxes reduce power and heat vs full phones while keeping real SoC behavior. Batch launch, screen mirror and log capture via group-control software.

**Parallel sessions**
Run compatibility matrices across Android versions simultaneously — one operator supervises 60–100 nodes from stacked boxes.

**Network testing**
OTG/LAN mode isolates device segments for regional IP or latency simulation when combined with VPN per node.

Hardware: /products/motherboard-box · QA guide: /blog/mobile-device-farm-app-qa-guide`,
  },
  {
    slug: "start-building-phone-farm-factory-direct-guangzhou",
    title: "Start Building Your Phone Farm Today: Factory-Direct Hardware from Guangzhou",
    category: "Getting Started",
    date: "2026-05-31",
    excerpt:
      "From first RFQ to remote AnyDesk commissioning — how Guangzhou Phone Farm helps teams deploy multi-device labs worldwide.",
    content: `**Step 1 — Define scale**
Target node count, Android vs iPhone, USB vs OTG/LAN, destination country.

**Step 2 — Choose chassis**
20-node motherboard box, 32PCS farm box or 12PCS evaluation array. See /packages for starter bundles.

**Step 3 — RFQ**
Email or WhatsApp with quantity and connection mode. We return written quote with lead time and ROM scope.

**Step 4 — Production & QC**
Slot burn-in, power/USB path check, export packing from Guangzhou workshop.

**Step 5 — Remote setup**
AnyDesk handoff after delivery — ADB authorization, mode switch and software walkthrough included on hardware orders.

About our factory: /about · Contact: /contact · Manual: /manual`,
  },
  {
    slug: "modern-automation-real-devices-over-scripts",
    title: "Modern Automation Prefers Real Devices Over Scripts — Here's Why",
    category: "Knowledge Base",
    date: "2026-05-30",
    excerpt:
      "When headless scripts and emulators fail, structured phone farm hardware delivers predictable real-device behavior for QA and operations.",
    content: `**Scripts and emulators**
Low entry cost, fast iteration — but miss sensor fusion, real IMEI/GPU paths and OS-level restrictions mobile apps detect.

**Real device farms**
Physical Android boards in a box phone farm chassis give fidelity for app QA, compatibility matrices and lawful multi-device workflows on hardware you control offline.

**Structured hardware advantage**
Centralized power, cooling and labeled USB/LAN paths beat ad-hoc phone stacks that fail under 24/7 load.

**Hybrid approach**
Use cloud or scripts for unit tests; deploy phone farm boxes for release gates and device-specific regression.

Compare: /blog/phone-farm-vs-cloud-device-farm · Catalog: /products · Guide: /phone-farming`,
  },
];
