export type ManualSection = {
  id: string;
  title: string;
  content: string;
};

export const MANUAL_SECTIONS: ManualSection[] = [
  {
    id: "overview",
    title: "1. Overview",
    content: `A phone farm box is a metal chassis that powers and connects multiple physical Android phones or motherboards to one control PC. Group-control software mirrors screens and sends batch commands.

**Legitimate use cases:** app compatibility testing, QA automation, device management workflow validation, software integration testing, enterprise device lab operations.

Guangzhou Phone Farm supplies the hardware chassis, power, cabling and deployment support. Group-control software is configured per your chosen tool - we assist with ADB, USB and OTG/LAN setup.

This manual covers standard Android motherboard box / phone farm box deployment. iPhone deployments differ - contact sales.`,
  },
  {
    id: "before-start",
    title: "2. Before You Start",
    content: `**Control PC**
- Windows 10 or Windows 11 (64-bit)
- 16 GB RAM minimum for multi-box; 32 GB+ recommended
- SSD storage; stable power supply
- Uninstall or disable phone assistant apps that grab ADB ports
- Add antivirus exclusion for ADB / software install folder if needed

**USB**
- Prefer USB 2.0 ports and powered USB 2.0 hubs
- Avoid long USB 3.0 chains - can cause "insufficient USB resources"

**Network (OTG/LAN mode)**
- Router with enough DHCP leases for all devices + PC
- Box and PC on same subnet
- For 50+ devices: use dedicated soft router (see section 6)

**Power**
- Stable 220V (or use transformer per local voltage - confirm in RFQ)
- Do not share wall circuit with large inductive loads

**ADB authorization**
- Obtain authorization files from your board supplier before first session
- Backup authorization folder - required after PC replacement`,
  },
  {
    id: "package-checklist",
    title: "3. Package Checklist",
    content: `Verify shipment contents on arrival:

[ ] Phone farm box / chassis with devices or boards installed
[ ] 220V power cable
[ ] USB data cables (if not pre-installed)
[ ] Router or switch (if ordered as bundle)
[ ] Spare screen unit (if ordered - useful for emergency debugging)
[ ] Quick start card with support contacts
[ ] Remote support: AnyDesk session scheduled if pre-arranged

Report shipping damage within 48 hours with photos.`,
  },
  {
    id: "usb-mode",
    title: "4. USB Mode Setup",
    content: `**Indicator:** Blue LED = USB / WiFi path mode

1. Install group-control / mirroring software on Windows PC
2. Connect box to PC via USB (use powered hub if multiple boxes)
3. Power on box - wait for all boards to boot
4. Open software -> refresh device list
5. First mirror: unlock prompt on device - tap **Allow** and check "always allow"
6. Verify batch mirror and basic tap/swipe control

**If device list empty:** check cable, power, USB debugging, authorization files, try another USB 2.0 port.

**Do not:** click "Deny" on USB debugging prompt - may require factory rework to recover.`,
  },
  {
    id: "otg-lan-mode",
    title: "5. OTG / LAN Mode Setup",
    content: `**Indicator:** Green LED = OTG / Ethernet mode

1. Connect box and PC to **same router** (Ethernet preferred for PC)
2. Note router subnet (e.g. 192.168.1.x)
3. In software: add IP scan range (e.g. 192.168.1.1-254)
4. Run scan - devices should appear by IP
5. Execute \`adb tcpip 5555\` per device if required by your software
6. Toggle box switch twice if hardware requires mode change USB -> OTG
7. Rescan IP range

**Router performance notes:**
- 20 devices: consumer router often OK
- 50+ devices: soft router with gigabit LAN
- Disable phone WiFi when using Ethernet mode
- Fixed DHCP reservations reduce scan churn`,
  },
  {
    id: "adb-auth",
    title: "6. ADB Authorization",
    content: `Authorization files let PC talk to boards without repeated on-screen approval.

**Placement (Windows):**
\`C:\\Users\\<YourUsername>\\.android\`

Extract supplier-provided archive into this folder. Restart PC and software.

**After changing PC or reinstalling Windows:** copy backup authorization folder or re-authorize each board.

**Do not casually:**
- Factory reset boards
- Upgrade OS OTA without plan
- Disable developer options
- Revoke USB debugging authorizations

Keep one spare board with screen attached for authorization recovery if needed.`,
  },
  {
    id: "troubleshooting",
    title: "7. Troubleshooting",
    content: `**Device not detected**
 ->  Power, cable, USB debugging, authorization, try USB 2.0 port/hub

**ADB unauthorized**
 ->  Fix authorization folder; revoke and re-allow on device with screen attached

**Insufficient USB resources**
 ->  Powered USB 2.0 hub; fewer simultaneous mirrors; split across controllers; migrate to OTG/LAN

**Screen mirroring black**
 ->  Unlock device once; disable battery optimization for mirror app; check GPU load on PC

**Can view but cannot control**
 ->  Re-enable accessibility / input service in software; confirm not in read-only mode

**Router disconnects with many devices**
 ->  Upgrade router; separate VLAN; reduce DHCP lease churn; cable quality check

**OTG/LAN scan finds nothing**
 ->  Same subnet confirm; firewall off on PC; ping device IP; verify green mode

**Software cannot open**
 ->  Run as administrator; VC++ runtime; exclude antivirus

**Antivirus blocks software**
 ->  Add install folder and ADB to exclusions

**Wrong USB 3.0 port issue**
 ->  Move to USB 2.0 root port or hub

**XHCI / motherboard USB limit**
 ->  PCIe USB expansion card with independent controller; OTG/LAN for large scale`,
  },
  {
    id: "remote-support",
    title: "8. Remote Setup Support",
    content: `Included with hardware purchase (standard scope):

1. Schedule via email or WhatsApp after delivery
2. Install AnyDesk on control PC
3. Engineer connects - verifies power, USB/LAN, software list
4. Walk through authorization, mirror, batch action test
5. Handover checklist signed off by your operator

**After-sales:** warranty-period remote diagnosis for hardware defects and configuration regressions. Spare parts quoted separately after warranty.`,
  },
  {
    id: "api-automation",
    title: "9. API / Automation Interface",
    content: `For software testing, device operation workflows and internal automation integration, API documentation can be provided after purchase.

Typical integration paths:
- ADB shell commands scripted from CI
- Software vendor WebSocket/API (tool-dependent)
- Batch task templates in group-control platform

We do not provide tools for platform manipulation or terms-of-service violations. Use automation only within your legal and contractual boundaries.`,
  },
  {
    id: "warranty",
    title: "10. Warranty & After-sales",
    content: `**Standard terms**
- Chassis / cabinet: 12 months
- Motherboards: 90 days
- Accessories (fans, cables, hubs): 12 months

**Custom-assembled / ROM-modified units:** no return after dispatch unless written otherwise in quote.

**Remote support:** included during commissioning and warranty period for configuration issues.

**Shipping damage:** report within 48 hours with photos.

**Out of warranty:** parts and labor quoted separately.`,
  },
];

export const MANUAL_TOC = MANUAL_SECTIONS.map((s) => ({ id: s.id, title: s.title }));
