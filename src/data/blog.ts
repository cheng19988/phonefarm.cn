export const BLOG_POSTS = [
  {
    slug: "phone-farm-setup-manual",
    title: "手机农场整机盒安装手册：ADB 与 OTG 配置",
    category: "安装手册",
    date: "2026-05-01",
    excerpt: "完整安装指南 — 设备说明、安装步骤、USB/OTG 模式、ADB 授权及故障排除。",
    content: `本手册介绍广州手机农场整机盒/主板盒从开箱到投产的全流程（参考 cxtfactory.com 安装文档改写）。

【设备说明】
一盒集成 20 块手机主板(或 32PCS 整机盒),去除屏幕/电池/摄像头后装入金属机箱,配合群控软件实现批量操控。220V 供电,满载约 100W。外箱 55×38×16cm,约 7KG。一台 PC 可控制 3-5 个盒子。

【安装步骤】
1. 系统:Windows 10/11,卸载手机助手类软件,关闭拦截 ADB 的杀毒软件
2. 安装群控管理软件,向主板供应商获取 ADB 授权文件
3. 将授权文件解压至 C:\\Users\\用户名\\.android,重启电脑
4. 盒子通电,USB 连接 PC,首次投屏解锁务必点击「允许」
5. 蓝灯=USB/WiFi 模式,绿灯=OTG/以太网模式

【OTG/LAN 以太网配置】
盒子与 PC 同路由器 → 软件添加 IP 段(如 192.168.3.1-254) → 扫描 → 保存 adb tcpip 5555 → 按开关两次切 OTG → 再扫 IP。以太网模式请关闭 WiFi。20+ 设备推荐软路由。

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
软件测试、数字营销、内容创作、市场研究等合法用途。广州手机农场严格反对任何违法用途,硬件仅供开发测试使用。

【为何选择我们】
广州工厂直销,提供主板盒、32PCS 整机盒、12PCS 阵列、iPhone 方案、网络路由器及企业交换机,自 2017 年服务国内外客户。`,
  },
  {
    slug: "otg-lan-network-setup",
    title: "OTG/LAN 以太网模式配置教程",
    category: "技术指南",
    date: "2026-03-28",
    excerpt: "以太网 OTG 模式 IP 扫描、adb tcpip 命令及软路由推荐。",
    content: `以太网 OTG 比 WiFi USB 模式更稳定。

步骤：盒子与 PC 同路由器 → 软件添加 IP 段 → 扫描 → 保存 adb tcpip 5555 → 按开关两次切 OTG → 扫 IP。

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
