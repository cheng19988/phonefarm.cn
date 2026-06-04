export const BLOG_POSTS = [
  {
    slug: "phone-farm-setup-manual",
    title: "手机农场整机盒安装手册：ADB 与 OTG 配置",
    category: "安装手册",
    date: "2026-05-01",
    excerpt: "完整安装指南 — 设备说明、安装步骤、USB/OTG 模式、ADB 授权及故障排除。",
    content: `本手册介绍广州手机农场整机盒从开箱到投产的全流程。

设备说明：一盒 20 块手机主板，220V 供电，负载约 100W。外箱 55x38x16cm，约 7KG。

安装步骤：
1. 推荐 Windows 10/11
2. 卸载手机管理软件，关闭可能拦截 ADB 的杀毒软件
3. 安装群控管理软件
4. 将 ADB 授权文件放入 C:\\Users\\用户名\\.android
5. 重启电脑，通电连接 USB
6. 首次投屏解锁时点击「允许」

连接模式：蓝灯 USB（WiFi），绿灯 OTG（以太网）。

注意：勿升级系统、勿关闭 USB 调试、妥善保管 ADB 授权文件。

质保：机箱 12 个月，主板 90 天。AnyDesk 免费远程协助。`,
  },
  {
    slug: "mobile-phone-farming-guide",
    title: "什么是手机农场？工作原理与搭建要求",
    category: "知识库",
    date: "2026-04-15",
    excerpt: "了解手机农场硬件要求、群控软件、供电网络及合法应用场景。",
    content: `手机农场将多台设备连接至一台 PC 执行自动化任务。

搭建需要：稳定 220V 电源、高速网络、智能手机、USB 线、整机盒/主板盒、群控软件。

合法场景：软件测试、电商管理、技术开发等。

广州手机农场提供开发测试用途的真机硬件。`,
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
