import { IMAGES } from "@/lib/images";

export const SERVICES = [
  {
    slug: "phone-farm-setup",
    title: "手机农场部署安装",
    titleEn: "Phone Farm Setup",
    description: "硬件组装、ADB 授权、供电布线、USB/OTG 模式配置及首启测试,直至成功运行。",
    image: IMAGES.serviceScene,
  },
  {
    slug: "remote-control-configuration",
    title: "远程控制软件配置",
    titleEn: "Remote Control Configuration",
    description: "屏幕镜像、批量 APK 安装、ADB 命令及可视化设备管理台配置。",
    image: IMAGES.remoteControl.hero,
  },
  {
    slug: "group-control-system-configuration",
    title: "群控系统配置",
    titleEn: "Group Control Configuration",
    description: "USB 与 OTG/LAN 以太网模式、IP 段扫描、批量同步操作及多分组管理。",
    image: IMAGES.remoteControl.detail,
  },
  {
    slug: "bulk-device-deployment",
    title: "批量设备部署",
    titleEn: "Bulk Deployment",
    description: "100+ 台大规模 provisioning:ROM 刷机、APK 预装、代理配置及健康监控。",
    image: IMAGES.factory,
  },
  {
    slug: "custom-hardware-solution",
    title: "定制硬件与 ROM 方案",
    titleEn: "Custom Hardware and ROM",
    description: "OEM 机箱设计、定制 ROM、节点数量优化及软件功能开发。",
    image: IMAGES.customCabinet.hero,
  },
  {
    slug: "enterprise-deployment",
    title: "企业级部署",
    titleEn: "Enterprise Deployment",
    description: "机架式整厂部署、冗余电源、网络分段、软路由及专属客户经理。",
    image: IMAGES.customCabinet.detail,
  },
  {
    slug: "maintenance-support",
    title: "运维与技术支持",
    titleEn: "Maintenance and Support",
    description: "硬件维护、备件更换、AnyDesk 远程诊断及 SLA 技术支持。",
    image: IMAGES.workshop,
  },
  {
    slug: "sample-solution",
    title: "样品方案",
    titleEn: "Sample Solution",
    description: "1 台样品评估套装,含安装手册、软件试用及专属 onboarding 电话。",
    image: IMAGES.phoneFarmBox.card,
  },
  {
    slug: "overseas-delivery",
    title: "海外交付",
    titleEn: "Overseas Delivery",
    description: "广州国际物流、货代协调、报关单证、快递与海运全球送达。",
    image: IMAGES.warehouse,
  },
];

export const BULK_PROCESS = [
  { step: "01", title: "需求沟通", desc: "提供设备型号、数量、应用场景及预算,销售 24 小时内回复方案。" },
  { step: "02", title: "方案报价", desc: "出具硬件配置清单、ROM 定制说明、报价单及交付周期。" },
  { step: "03", title: "商务洽谈", desc: "确认样品或批量订单,签订合作合同,对公账户付款或 USDT 在线支付。" },
  { step: "04", title: "工厂生产", desc: "广州工厂组装、QC 老化测试、安全包装,现货 3-5 天,定制 7-15 天。" },
  { step: "05", title: "物流交付", desc: "国内快递或国际货代发货,提供运单跟踪及远程安装指导直至上线。" },
  { step: "06", title: "售后支持", desc: "质保期内免费远程协助,备件更换及扩容升级长期合作支持。" },
];
