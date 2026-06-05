import { IMAGES } from "@/lib/images";

export type ProductSeed = {
  slug: string;
  name: string;
  category: string;
  shortDesc: string;
  description: string;
  features: string[];
  specs: Record<string, string>;
  scenarios: string[];
  accessories: string[];
  delivery: string[];
  maintenance: string[];
  faq: { q: string; a: string }[];
  priceUsd: number;
  stock: number;
  imageCard: string;
  imageHero: string;
  imageDetail: string;
};

function p(
  slug: string,
  name: string,
  category: string,
  shortDesc: string,
  imgs: { card: string; hero: string; detail: string },
  priceUsd: number,
  stock: number,
  extra?: Partial<ProductSeed>
): ProductSeed {
  return {
    slug,
    name,
    category,
    shortDesc,
    description:
      extra?.description ||
      `${name} — 广州手机农场工厂直销真机硬件，中国广州生产，自 2017 年起服务国内外企业客户。`,
    features: extra?.features || [
      "广州工厂直销，无中间商",
      "真机硬件，非云手机非模拟器",
      "集中供电 + 多风扇散热架构",
      "支持 USB 与 OTG/LAN 双连接模式",
      "发货前 QC 测试，含远程部署指导",
    ],
    specs: extra?.specs || {
      机箱规格: "工业金属机箱",
      节点容量: "标准 20 节点/盒",
      供电: "220V AC，负载约 100W",
      散热: "3-4 风扇主动散热",
      连接方式: "USB 2.0 + OTG/LAN 以太网",
      外箱尺寸: "55 x 38 x 16 cm",
      重量: "约 7 KG",
      质保: "机箱 12 个月，主板 90 天",
    },
    scenarios: extra?.scenarios || [
      "应用测试与 QA 自动化",
      "电商店铺群管理",
      "矩阵获客与内容运营",
      "企业级压力测试",
    ],
    accessories: extra?.accessories || [
      "工业机箱（含设备）",
      "USB 数据线",
      "电源线",
      "备用主板电源线",
      "群控管理软件试用",
    ],
    delivery: extra?.delivery || [
      "工厂 QC 与老化测试",
      "安全出口包装",
      "可协助联系国际货代",
      "含远程安装指导",
    ],
    maintenance: extra?.maintenance || [
      "妥善保管 ADB 授权文件",
      "勿升级系统或恢复出厂设置",
      "每 30 天清洁风扇滤网",
      "问题联系 AnyDesk 远程协助",
    ],
    faq: extra?.faq || [
      { q: "是否为真机硬件？", a: "是。广州手机农场所有产品均为物理手机或主板，非云手机或模拟器。" },
      { q: "是否支持国际发货？", a: "支持。从广州发往全球，提供快递与海运选项。" },
    ],
    priceUsd,
    stock,
    imageCard: imgs.card,
    imageHero: imgs.hero,
    imageDetail: imgs.detail,
  };
}

export const PRODUCT_SEEDS: ProductSeed[] = [
  p(
    "motherboard-box",
    "安卓主板盒 Android Motherboard Box",
    "主板盒",
    "20 节点安卓主板盒，去除屏幕/电池/摄像头，集成于机箱，配合群控软件实现批量操控。",
    IMAGES.motherboardBox,
    1580,
    10,
    {
      description:
        "安卓主板盒将 20 块手机主板集成于固定尺寸金属机箱。一台 PC 可控制 3-5 个盒子，支持 VPN 换 IP，OTG/LAN 双模式连接。",
      specs: {
        节点类型: "安卓主板（无屏）",
        容量: "20 节点/盒",
        电压: "220V AC",
        功耗: "约 100W",
        连接: "USB + OTG/LAN",
        外箱尺寸: "55 x 38 x 16 cm",
        重量: "约 7 KG",
      },
    }
  ),
  p(
    "phone-farm-box",
    "32PCS 手机农场整机盒 Phone Farm Box",
    "整机盒",
    "32 节点统一群控整机盒，支持 ROM 定制，3 风扇散热，适合批量部署。",
    IMAGES.phoneFarmBox,
    728,
    12,
    {
      description:
        "32PCS 整机盒支持 ROM 定制及软件功能开发。Mod ROM 可实现插电自动开机、ADB 自动识别，兼容主流群控工具。",
    }
  ),
  p(
    "phone-array-12pcs",
    "12PCS 手机阵列 Phone Array",
    "手机阵列",
    "12 个热插拔抽屉，可放置完整手机或主板，内置 PC，USB 2.0 HUB 集成。",
    IMAGES.realDevice,
    920,
    8,
    {
      description: "12PCS 手机阵列含 12 个热插拔抽屉，内置 PC 与 USB 2.0 HUB，便于维护扩展。",
      specs: { 容量: "12 抽屉", 设备: "完整手机或主板", 内置PC: "支持" },
    }
  ),
  p(
    "iphone-phone-farm",
    "iPhone 手机农场整机盒 iPhone Farm Box",
    "iPhone 农场",
    "iPhone 真机阵列，热插拔设计，适用于 iOS 测试与企业多设备管理。",
    IMAGES.iphoneFarm,
    1350,
    6
  ),
  p(
    "android-phone-farm",
    "安卓手机农场 Android Phone Farm",
    "安卓农场",
    "完整安卓手机农场方案，Samsung 系列主板，真机环境批量部署。",
    IMAGES.androidFarm,
    548,
    18
  ),
  p(
    "real-device-phone-farm",
    "真机手机农场 Real Device Phone Farm",
    "真机农场",
    "大规模真机手机农场整厂方案，工厂直销，适合企业与代理商。",
    IMAGES.customCabinet,
    998,
    10
  ),
  p("empty-box-chassis", "空盒 / 机箱 Empty Chassis", "空盒机箱", "工业级空机箱，定制组装与扩展。", IMAGES.emptyBox, 265, 22),
  p("usb-hub", "USB Hub 集线器", "USB Hub", "工业级 USB 集线器，稳定多设备连接。", IMAGES.usbHub, 95, 45),
  p("power-supply-solution", "电源方案 Power Supply", "电源", "220V 集中供电，保障 7x24 运行。", IMAGES.power, 115, 38),
  p("cooling-solution", "散热方案 Cooling System", "散热", "多风扇散热，防止密集部署过热。", IMAGES.cooling, 68, 42),
  p(
    "network-equipment",
    "网络路由器 Network Router",
    "网络设备",
    "企业软路由与交换机，稳定 OTG/LAN 多设备连接。",
    IMAGES.network,
    165,
    28,
    {
      description: "网络管理路由器与企业级交换机。20+ 设备场景推荐软路由，可稳定支持数百台手机。",
    }
  ),
  p("custom-cabinet", "定制机柜 Custom Cabinet", "定制机柜", "OEM 机架式机柜，企业大规模部署。", IMAGES.customCabinet, 2680, 4),
  p(
    "remote-control-setup",
    "远程控制与群控配置",
    "远程控制",
    "群控软件安装、ADB/OTG 配置及自动化 API 对接。",
    IMAGES.remoteControl,
    380,
    99
  ),
];

export function getProductSeed(slug: string) {
  return PRODUCT_SEEDS.find((item) => item.slug === slug);
}
