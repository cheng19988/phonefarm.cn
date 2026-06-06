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
    title: "手机农场整机盒安装手册：ADB 与 OTG 配置",
    category: "安装手册",
    date: "2026-05-01",
    excerpt: "完整安装指南 - 设备说明、安装步骤、USB/OTG 模式、ADB 授权及故障排除。",
    content: `本手册介绍广州手机农场整机盒/主板盒从开箱到投产的全流程。

【设备说明】
一盒集成 20 块手机主板(或 32PCS 整机盒),去除屏幕/电池/摄像头后装入金属机箱,配合群控软件实现批量操控。220V 供电,满载约 100W。外箱 55x38x16cm,约 7KG。一台 PC 可控制 3-5 个盒子。

【安装步骤】
1. 系统:Windows 10/11,卸载手机助手类软件,关闭拦截 ADB 的杀毒软件
2. 安装群控管理软件,向主板供应商获取 ADB 授权文件
3. 将授权文件解压至 C:\\Users\\用户名\\.android,重启电脑
4. 盒子通电,USB 连接 PC,首次投屏解锁务必点击「允许」
5. 蓝灯=USB/WiFi 模式,绿灯=OTG/以太网模式

【OTG/LAN 以太网配置】
盒子与 PC 同路由器 -> 软件添加 IP 段(如 192.168.3.1-254) -> 扫描 -> 保存 adb tcpip 5555 -> 按开关两次切 OTG -> 再扫 IP。以太网模式请关闭 WiFi。20+ 设备推荐软路由。

【注意事项】
妥善保管 ADB 授权文件;勿点「拒绝」数据访问;勿升级系统/恢复出厂;勿关闭开发者选项;Root 机勿更新 Magisk。建议备一块同型号屏幕以便应急。

【销售/交付/售后】
定制产品发货后不退换。可协助联系国际货代出货。主板质保 90 天,机箱 12 个月,配件 1 年。AnyDesk 免费远程协助直至上线。`,
  },
  {
    slug: "mobile-phone-farming-guide",
    title: "什么是手机农场？工作原理与搭建要求",
    category: "知识库",
    date: "2026-04-15",
    excerpt: "了解手机农场硬件要求、群控软件、供电网络及合法应用场景。",
    content: `手机农场将多台真机设备连接至一台 PC,通过群控软件执行批量或独立自动化任务。

【工作原理】
设备通过 USB 或 OTG/LAN 接入整机盒/主板盒,PC 端群控软件统一管理。可编写脚本实现测试用例、应用验证等合法自动化流程。

【搭建要求】
- 明确业务目标与设备数量
- 稳定 220V 电源与高速网络
- 智能手机或主板、USB 数据线
- 整机盒/主板盒/iPhone 农场盒
- 可信群控软件(我们可协助配置)

【应用场景】
应用兼容性测试、多设备管理、QA 自动化、企业设备实验室、软件集成测试等合法技术用途。硬件仅供开发测试与合法设备运维使用。

【为何选择我们】
广州硬件供应 - 主板盒、32PCS 整机盒、12PCS 阵列、iPhone 方案、网络路由器。配置与报价请通过 RFQ 联系。`,
  },
  {
    slug: "otg-lan-network-setup",
    title: "OTG/LAN 以太网模式配置教程",
    category: "技术指南",
    date: "2026-03-28",
    excerpt: "以太网 OTG 模式 IP 扫描、adb tcpip 命令及软路由推荐。",
    content: `以太网 OTG 比 WiFi USB 模式更稳定。

步骤：盒子与 PC 同路由器 -> 软件添加 IP 段 -> 扫描 -> 保存 adb tcpip 5555 -> 按开关两次切 OTG -> 扫 IP。

20+ 设备推荐企业软路由。`,
  },
  {
    slug: "motherboard-box-vs-phone-box",
    title: "主板盒 vs 整机盒：如何选型",
    category: "硬件选型",
    date: "2026-03-10",
    excerpt: "对比无屏主板盒与完整整机盒的成本、SIM 支持与维护差异。",
    content: `主板盒：成本低，20 节点，适合无屏自动化。

整机盒：含 SIM/摄像头，Mod ROM 自动开机，维护更方便。

扩展：2 盒 40 台，3 盒 60 台，1 PC 控 3-5 盒。`,
  },
  {
    slug: "automation-api-wsapi-guide",
    title: "群控 WebSocket API 自动化开发指南",
    category: "技术指南",
    date: "2026-02-20",
    excerpt: "WSAPI 接口说明，支持 Python、Node.js 等语言调用。",
    content: `群控软件提供 WSAPI，地址 127.0.0.1:22223。

常用接口：List、Detail、Screen、ADB、BeginFileSend、PointerEvent。

如需定制软件开发请联系广州手机农场。`,
  },
  {
    slug: "enterprise-oem-deployment",
    title: "企业 OEM 手机农场批量部署方案",
    category: "企业方案",
    date: "2026-01-15",
    excerpt: "机架式机柜、ROM 定制、批量 provisioning 及国际物流。",
    content: `企业 OEM 服务含定制机箱、ROM、机柜集成、批量部署及专属客户经理。

广州手机农场自 2017 年服务国内外企业客户。`,
  },
];

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
