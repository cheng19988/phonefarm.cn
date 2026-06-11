import { BLOG_POSTS_EXTRA } from "./blog-posts-extra";

export const BLOG_POSTS = [
  {
    slug: "usb-mode-vs-otg-lan-mode",
    title: "USB Mode vs OTG/LAN Mode for Phone Farm Box",
    category: "Technical Guide",
    date: "2026-06-01",
    excerpt: "Compare USB and OTG/LAN connection modes for phone farm hardware: requirements, scale limits and common issues.",
    content: `This guide explains how Guangzhou Phone Farm boxes support two connection paths and when to choose each for development, testing and device management labs.

**Difference**
- USB mode (blue LED): devices connect through USB to the control PC, often via powered USB 2.0 hubs.
- OTG/LAN mode (green LED): devices share a router segment with the PC; software discovers devices by IP range.

**When to choose USB**
- First evaluation or small labs (1-2 boxes)
- Simpler initial setup without router planning
- Teams still validating software on fewer nodes

**When to choose OTG/LAN**
- 20+ devices on one network segment
- Reducing USB host controller load on the PC
- Multi-box farms where Ethernet stability matters

**PC requirements**
- Windows 10/11, adequate RAM (16 GB+ for multi-box USB)
- For heavy USB loads: separate controllers or migrate to OTG/LAN
- See /manual#recommended-pc for written specs

**Router requirements (OTG/LAN)**
- Enough DHCP leases for all devices + PC
- 50+ devices: dedicated soft router recommended
- See /manual#router-network-notes

**Common issues**
- USB: "insufficient USB resources" -> powered USB 2.0 hub, fewer mirrors, or OTG/LAN
- OTG/LAN: scan finds nothing -> same subnet, firewall, green mode, router model

**Next steps**
- Product catalog: /products
- Installation steps: /manual
- Send quantity and environment: /contact`,
  },
  {
    slug: "adb-authorization-multi-device-setup",
    title: "Why ADB Authorization Matters in Multi-device Hardware Setup",
    category: "Technical Guide",
    date: "2026-05-20",
    excerpt: "What ADB authorization means, why devices show unauthorized, and how to prepare for remote support.",
    content: `ADB authorization allows a Windows control PC to communicate with Android boards in a phone farm box without repeated on-screen approval prompts.

**What ADB authorization means**
- Supplier-provided files stored under the Windows user profile
- PC and boards establish a trusted debugging relationship
- Required for stable batch control and mirror software

**Why devices show unauthorized**
- Authorization folder missing or wrong Windows user profile
- User clicked "Deny" on USB debugging prompt
- Board was factory reset or ROM reflashed
- New PC without copied authorization backup

**What changes after reinstalling Windows**
- Authorization folder path is tied to the user profile
- Backup the .android folder before OS reinstall
- Plan re-authorization or restore from backup

**How to prepare for remote support**
- Install AnyDesk on control PC
- Confirm box powered and reachable on USB or LAN
- Note product model, box count and connection mode
- Have router model ready if using OTG/LAN

**Related resources**
- Manual section: /manual#adb-auth
- Hardware catalog: /products
- RFQ with setup photos: /contact

Hardware is provided for development, testing, device management, and other lawful use only.`,
  },
  {
    slug: "how-to-prepare-phone-farm-rfq",
    title: "How to Prepare an RFQ for Phone Farm Hardware",
    category: "Technical Guide",
    date: "2026-05-10",
    excerpt: "Checklist for B2B buyers: quantity, device type, connection mode, shipping country, customization and sample vs bulk orders.",
    content: `A clear RFQ helps Guangzhou Phone Farm return accurate configuration, lead time and quotation within 24 hours.

**1. Quantity**
- Target node count (e.g. 60 Android boards)
- Number of chassis/boxes if known
- Sample order (1 box) vs bulk MOQ

**2. Device type**
- Android motherboard box vs full phone array vs iPhone box
- Preferred board or phone model if any

**3. Connection mode**
- USB, OTG/LAN, or not sure yet
- Existing router model if OTG/LAN

**4. Shipping country**
- Destination for freight planning
- Import broker or Incoterms preference if applicable

**5. Customization**
- ROM needs (auto-boot, ADB persistence)
- OEM cabinet or branding
- Router/switch bundle

**6. Sample vs bulk order**
- Sample: evaluate build quality and software compatibility first
- Bulk: proforma invoice, agreed payment terms, production schedule

**What we reply with**
- BOM and configuration proposal
- Setup notes for your software stack
- Factory quote and lead time

**Send RFQ**
- Contact form: /contact
- Product reference: /products
- Setup reference: /manual`,
  },
  {
    slug: "phone-farm-setup-manual",
    title: "Phone Farm Box Setup Manual: ADB & OTG Configuration",
    category: "Installation Manual",
    date: "2026-05-01",
    excerpt: "Complete setup guide — hardware overview, installation steps, USB/OTG modes, ADB authorization and troubleshooting.",
    content: `This manual covers the full workflow from unboxing to production for Guangzhou Phone Farm phone farm boxes and motherboard boxes.

**Hardware overview**
Each box integrates 20 Android motherboards (or a 32PCS full-phone chassis). Boards ship without display, battery or camera modules, mounted in a metal enclosure for batch control software. 220V power, ~100W at full load. Outer dimensions 55×38×16 cm, ~7 kg. One PC typically controls 3–5 boxes.

**Installation steps**
1. OS: Windows 10/11 — remove phone assistant apps; disable antivirus that blocks ADB
2. Install batch-control software; obtain ADB authorization files from the board supplier
3. Extract authorization files to C:\\Users\\<username>\\.android, then reboot
4. Power on the box, connect USB to PC; on first mirror unlock, always tap **Allow**
5. Blue LED = USB/WiFi mode; green LED = OTG/Ethernet mode

**OTG/LAN Ethernet setup**
Box and PC on the same router → add IP range in software (e.g. 192.168.3.1–254) → scan → save \`adb tcpip 5555\` → double-press mode switch for OTG → scan IPs again. Disable WiFi in Ethernet mode. For 20+ devices, use a dedicated soft router.

**Important notes**
Keep ADB authorization files secure; never tap **Deny** on data access; do not upgrade OS or factory reset; keep Developer Options enabled; on rooted devices, do not update Magisk. Keep a spare screen of the same model for emergencies.

**Sales, delivery & support**
Custom builds are non-returnable after shipment. We can coordinate international freight forwarders. Motherboard warranty 90 days; chassis 12 months; accessories 1 year. Free AnyDesk remote support until your farm is online.`,
  },
  {
    slug: "mobile-phone-farming-guide",
    title: "What Is a Phone Farm? How It Works & Setup Requirements",
    category: "Knowledge Base",
    date: "2026-04-15",
    excerpt: "Understand phone farm hardware requirements, control software, power/network needs and legitimate use cases.",
    content: `A phone farm connects multiple real devices to one PC. Control software runs batch or independent automation tasks across the fleet.

**How it works**
Devices connect via USB or OTG/LAN to a phone farm box or motherboard box. PC-side control software manages the fleet. Scripts can drive test cases, app validation and other lawful automation workflows.

**Setup requirements**
- Clear business goal and target device count
- Stable 220V power and reliable high-speed network
- Smartphones or motherboards, USB data cables
- Phone farm box, motherboard box or iPhone farm chassis
- Trusted control software (we can help configure)

**Use cases**
App compatibility testing, multi-device management, QA automation, enterprise device labs, software integration testing and other lawful technical applications. Hardware is for development, testing and legitimate device operations only.

**Why Guangzhou Phone Farm**
Guangzhou-based hardware supply — motherboard boxes, 32PCS chassis, 12PCS arrays, iPhone solutions and network routers. Contact us via RFQ for configuration and pricing.`,
  },
  {
    slug: "otg-lan-network-setup",
    title: "OTG/LAN Ethernet Mode Configuration Tutorial",
    category: "Technical Guide",
    date: "2026-03-28",
    excerpt: "Ethernet OTG mode: IP scanning, adb tcpip commands and soft-router recommendations.",
    content: `Ethernet OTG is more stable than WiFi-based USB mode for larger farms.

**Steps**
1. Connect box and PC to the same router
2. Add IP range in control software
3. Scan for devices
4. Save \`adb tcpip 5555\`
5. Double-press the mode switch to enter OTG
6. Scan IPs again

For 20+ devices, we recommend an enterprise soft router. See /manual#router-network-notes for sizing notes.`,
  },
  {
    slug: "motherboard-box-vs-phone-box",
    title: "Motherboard Box vs Full Phone Box: How to Choose",
    category: "Hardware Selection",
    date: "2026-03-10",
    excerpt: "Compare headless motherboard boxes and full-phone chassis: cost, SIM support and maintenance.",
    content: `**Motherboard box**
Lower cost, 20 headless nodes per chassis. Ideal for screenless automation, ADB-driven workflows and high-density labs.

**Full phone box (32PCS)**
Includes SIM/camera paths where configured; mod ROM options for auto-boot; easier per-device maintenance with hot-swap layout.

**Scaling**
2 boxes = 40 nodes, 3 boxes = 60 nodes. One PC typically controls 3–5 boxes depending on software and connection mode.

Compare SKUs: /products/motherboard-box and /products/phone-farm-box`,
  },
  {
    slug: "automation-api-wsapi-guide",
    title: "Batch Control WebSocket API Automation Guide",
    category: "Technical Guide",
    date: "2026-02-20",
    excerpt: "WSAPI overview for Python, Node.js and other languages.",
    content: `Control software exposes a WebSocket API (WSAPI) at 127.0.0.1:22223 on the control PC.

**Common endpoints**
- List — enumerate connected devices
- Detail — device metadata
- Screen — mirror stream
- ADB — shell commands
- BeginFileSend — push files
- PointerEvent — inject touch events

For custom software integration or OEM automation scope, contact Guangzhou Phone Farm via /contact.`,
  },
  {
    slug: "enterprise-oem-deployment",
    title: "Enterprise OEM Phone Farm Bulk Deployment",
    category: "Enterprise Solutions",
    date: "2026-01-15",
    excerpt: "Rack cabinets, ROM customization, bulk provisioning and international logistics.",
    content: `Enterprise OEM services include custom chassis, ROM scope, rack integration, bulk provisioning and a dedicated account manager.

Guangzhou Phone Farm has supported domestic and international enterprise customers since 2017.

**Typical scope**
- Mixed Android/iOS lab builds
- Custom tray layouts and cabinet branding
- Router/switch bundles for OTG/LAN at scale
- Export packing and freight handoff from Guangzhou

Send project requirements: /contact`,
  },
  ...BLOG_POSTS_EXTRA,
];

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
