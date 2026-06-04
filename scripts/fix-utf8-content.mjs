import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

const faqTs = `export const FAQ_ITEMS = [
  {
    question: "什么是手机农场?",
    answer:
      "手机农场(Phone Farm)是将多台真机智能手机集中供电、联网、统一管理的硬件系统。通过群控软件,一台电脑可同时操控数十台甚至上百台设备,适用于批量测试、多账号运营、应用兼容性验证等合法业务场景。广州手机农场提供整机盒、主板盒及配套硬件方案。",
  },
  {
    question: "什么是真机手机农场?",
    answer:
      "真机手机农场使用物理智能手机或手机主板运行,具备真实 IMEI、传感器、GPS 和硬件指纹,而非云手机虚拟实例或软件模拟器。广州手机农场所有产品均为真机硬件,工厂直销,适合对设备真实性和稳定性要求较高的企业客户。",
  },
  {
    question: "手机农场和云手机有什么区别?",
    answer:
      "云手机是在共享服务器上运行的虚拟 Android 实例,多用户共用底层基础设施,容易被平台识别。真机手机农场使用独立物理设备,每台设备拥有独立硬件特征和网络环境,在账号安全、传感器精度和长期稳定运行方面更具优势。",
  },
  {
    question: "手机农场和模拟器有什么区别?",
    answer:
      "模拟器在电脑上通过软件模拟 Android/iOS 环境,平台可检测到虚拟环境特征。真机手机农场使用真实硬件,平台无法区分与普通用户设备,在多账号运营、广告验证、应用测试等场景下封号率和检测率显著更低。",
  },
  {
    question: "支持安卓手机农场吗?",
    answer:
      "支持。我们提供安卓主板盒(20 节点)、32PCS 整机盒、12PCS 手机阵列等多种规格,兼容 Samsung 等主流主板,支持 ADB 调试、群控软件和 ROM 定制。一台 PC 可控制 3-5 个盒子,轻松扩展至数百台设备。",
  },
  {
    question: "支持 iPhone 手机农场吗?",
    answer:
      "支持。我们提供 iPhone 手机农场整机盒方案,采用热插拔抽屉设计,支持完整 iPhone 设备接入,适用于 iOS 应用测试、TestFlight 验证及企业级多设备管理。详情请联系销售获取配置方案。",
  },
  {
    question: "可以定制数量和配置吗?",
    answer:
      "可以。我们支持定制节点数量、机箱尺寸、电源方案、散热布局、机柜规格及 ROM 功能。企业客户可提供设备型号、目标数量和业务场景,我们的工程团队将出具 OEM 定制方案和报价。",
  },
  {
    question: "是否支持远程控制?",
    answer:
      "支持。我们提供远程控制软件配置服务,包括屏幕镜像、批量 APK 安装、ADB 命令、设备分组管理。购买硬件后可获得安装指导,直至成功部署。远程协助通过 AnyDesk 等方式提供。",
  },
  {
    question: "是否支持群控系统配置?",
    answer:
      "支持。我们可配置 USB 模式(WiFi 连接)和 OTG/LAN 以太网模式,支持 IP 段扫描、批量同步操作、多分组管理,并可对接 WSAPI 自动化接口,满足代理商和企业批量部署需求。",
  },
  {
    question: "是否支持样品?",
    answer:
      "支持。欢迎先采购 1 台样品评估硬件质量、散热性能和软件兼容性。样品订单通常 3-5 个工作日发货,含硬件、线缆、电源及管理软件试用。确认满意后再下批量订单。",
  },
  {
    question: "最小起订量是多少?",
    answer:
      "标准产品 MOQ 为 1 台(样品)。批量采购 5 台起享优惠价格,企业机柜部署通常 10 台以上配备专属项目经理。代理商和 OEM 客户可洽谈长期合作价格。",
  },
  {
    question: "如何付款?",
    answer:
      "在线订单支持 USDT(Tron TRC20 网络,最低 10 USDT,30 分钟支付窗口)。批量采购和对公合作支持银行转账(T/T)、Wise、PayPal 及合同开票。请联系销售获取对公账户和合同模板。",
  },
  {
    question: "交付周期多久?",
    answer:
      "现货标准款 3-5 个工作日发货。定制 OEM 配置 7-15 个工作日生产。国内快递 1-3 天;国际快递 3-7 天;海运 15-30 天。我们可协助联系国际货代安排出口物流。",
  },
  {
    question: "如何联系广州手机农场?",
    answer:
      "电话:13059502618 / WhatsApp:+852 6215 5642 / Telegram:@huicheng1998 / 邮箱:qiuxui646@gmail.com / 地址:中国广州。工作日 24 小时内回复,欢迎批量采购和定制咨询。",
  },
  {
    question: "手机农场有哪些应用场景?",
    answer:
      "常见合法场景包括:软件兼容性测试与压力测试、Android 产品开发调试、电商店铺群管理、矩阵获客与内容运营、游戏多开测试、云手机硬件租赁支撑等。广州手机农场硬件仅供开发测试等合法用途,请勿用于违法违规活动。",
  },
  {
    question: "控制 3-5 个盒子需要什么电脑配置?",
    answer:
      "推荐多核多线程 CPU(如 E5 2680 V2 级别及以上)、16GB 以上内存、Windows 10/11 专业版、充足 USB 2.0 接口或独立供电 USB 扩展卡。20 台以上设备建议搭配企业软路由,避免普通路由器性能不足导致频繁断连。",
  },
  {
    question: "购买整机盒包含哪些内容?",
    answer:
      "标准配置含整机盒硬件、USB 数据线、盒子电源线、主板备用电源线及群控管理软件(含试用)。批量订单可按需求增配散热、网络设备、机柜及 ROM 定制服务,详情请联系销售确认清单。",
  },
  {
    question: "能否同时控制所有手机?",
    answer:
      "可以。群控软件支持单台独立操控,也可一键同步控制盒内全部设备窗口,适合批量安装、同步测试与自动化脚本执行,显著提升运维效率。",
  },
  {
    question: "质保与售后政策是什么?",
    answer:
      "机箱质保 12 个月,手机主板质保 90 天,其他配件质保 1 年。质保期内硬件问题可免费更换(买家承担双向运费)。我们提供免费远程协助(AnyDesk),指导连接部署直至正常使用。",
  },
  {
    question: "定制产品是否支持退换货?",
    answer:
      "整机盒为定制组装产品,发货后不支持退换,进入售后质保阶段。建议先采购样品评估,确认配置与兼容性后再下批量订单。",
  },
  {
    question: "电脑提示 USB 资源不足怎么办?",
    answer:
      "建议使用 Windows 10 专业版;确认数据线接 USB 2.0 口而非 3.0;可在 BIOS 关闭 XHCI;使用带独立供电的 USB 2.0 PCI 扩展卡。如仍不足,可咨询我们推荐支持 120+ USB 设备的主板方案。",
  },
];
`;

const servicesTs = `import { IMAGES } from "@/lib/images";

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
`;

fs.writeFileSync(path.join(root, "src/data/faq.ts"), faqTs, "utf8");
fs.writeFileSync(path.join(root, "src/data/services.ts"), servicesTs, "utf8");

const servicesPageTs = `import Image from "next/image";
import Link from "next/link";
import { SERVICES, BULK_PROCESS } from "@/data/services";
import { ContactCTA } from "@/components/shared";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "定制方案 - OEM 手机农场部署",
  description:
    "广州手机农场定制服务：手机农场部署、远程控制配置、群控系统、ROM 定制、批量部署、企业交付及海外物流。",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="section">
      <div className="container-wide">
        <h1 className="section-title">定制方案与服务</h1>
        <p className="section-subtitle">
          广州手机农场 OEM 工厂直销 — 从样品评估、硬件定制到批量部署与远程运维，一站式交付真机手机农场方案。
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((svc) => (
            <article key={svc.slug} className="card overflow-hidden group">
              <div className="relative aspect-video">
                <Image src={svc.image} alt={svc.title} fill className="object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="p-6">
                <p className="text-xs text-emerald-400 mb-1">{svc.titleEn}</p>
                <h2 className="text-xl font-bold text-white mb-2">{svc.title}</h2>
                <p className="text-slate-400 text-sm mb-4">{svc.description}</p>
                <Link href={\`/contact?service=\${svc.slug}\`} className="text-emerald-400 text-sm hover:text-emerald-300">
                  咨询此方案
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-bold text-white mb-6">批量采购 / 代理商 / 企业合作流程</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {BULK_PROCESS.map((step) => (
              <div key={step.step} className="card p-6">
                <span className="text-emerald-400 font-bold text-xl">{step.step}</span>
                <h3 className="font-bold text-white mt-2 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <ContactCTA title="获取 OEM 定制报价" />
      </div>
    </div>
  );
}
`;

fs.writeFileSync(path.join(root, "src/app/services/page.tsx"), servicesPageTs, "utf8");
console.log("Fixed UTF-8 content files");
