export const SITE = {
  name: "广州手机农场",
  nameEn: "Guangzhou Phone Farm",
  domain: "phonefarm.cn",
  url: "https://phonefarm.cn",
  tagline: "Phone Farm Hardware - RFQ",
  taglineEn: "Phone Farm Box Manufacturer - Guangzhou, China",
  location: "中国广州",
  locationEn: "Guangzhou, China",
  address: "广东省广州市",
  description:
    "广州手机农场 - 手机农场硬件设备厂家，提供安卓主板盒、32PCS 整机盒、12PCS 手机阵列、iPhone 农场盒、路由器/交换机、ROM 定制、远程安装与 OEM 批量交付。",
  descriptionEn:
    "Guangzhou Phone Farm - hardware manufacturer for phone farm boxes, Android motherboard arrays, multi-device deployment, ROM customization and remote setup support.",
} as const;

const RFQ_EMAIL_SUBJECT = "RFQ - Guangzhou Phone Farm";

export const CONTACT = {
  telegram: "@huicheng1998",
  telegramUrl: "https://t.me/huicheng1998",
  whatsapp: "+85262155642",
  whatsappUrl: "https://wa.me/85262155642",
  email: "qiuxui646@gmail.com",
  /** Opens Gmail compose in browser (reliable when no local mail client). */
  emailHref: `https://mail.google.com/mail/?view=cm&fs=1&to=qiuxui646@gmail.com&su=${encodeURIComponent(RFQ_EMAIL_SUBJECT)}`,
  emailMailto: `mailto:qiuxui646@gmail.com?subject=${encodeURIComponent(RFQ_EMAIL_SUBJECT)}`,
} as const;

export const PAYMENT = {
  network: "TRON TRC20",
  currency: "USDT",
  address: "TH42KshQyz15iWk5svAwS475RM8oYQjwjW",
  contract: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
  minAmount: 10,
  expiryMinutes: 30,
} as const;

export const RFQ_COPY = {
  pricingNote: "Price depends on configuration - Contact for bulk quote",
  pricingNoteZh: "价格随配置而定 - 批量询价",
  paymentNote:
    "For confirmed bulk orders, payment methods can be discussed with sales, including USDT when applicable.",
  paymentNoteZh: "确认批量订单后，可与销售协商付款方式（含 USDT 等）。",
} as const;

export const NAV = [
  { href: "/products", label: "Products", labelZh: "产品" },
  { href: "/packages", label: "Packages", labelZh: "套餐" },
  { href: "/pricing", label: "Pricing", labelZh: "报价" },
  { href: "/services", label: "Services", labelZh: "服务" },
  { href: "/manual", label: "Manual", labelZh: "手册" },
  { href: "/blog", label: "Blog", labelZh: "文章" },
  { href: "/faq", label: "FAQ", labelZh: "常见问题" },
  { href: "/about", label: "About", labelZh: "关于" },
  { href: "/contact", label: "Contact", labelZh: "联系" },
] as const;

export const PRODUCT_CATALOG_GROUPS = [
  { id: "motherboard-box", label: "Android Motherboard Box", labelZh: "安卓主板盒" },
  { id: "phone-farm-box", label: "Phone Farm Box", labelZh: "整机盒" },
  { id: "phone-array", label: "Phone Array", labelZh: "手机阵列" },
  { id: "iphone", label: "iPhone Farm Box", labelZh: "iPhone 农场盒" },
  { id: "network", label: "Network / Router", labelZh: "网络设备" },
  { id: "accessories", label: "Accessories", labelZh: "配件" },
  { id: "oem-custom", label: "OEM / Custom", labelZh: "OEM 定制" },
] as const;

export const PRODUCT_NAV = [
  { href: "/products/motherboard-box", label: "Motherboard Box" },
  { href: "/products/phone-farm-box", label: "32PCS Phone Farm Box" },
  { href: "/products/phone-array-12pcs", label: "12PCS Phone Array" },
  { href: "/products/iphone-phone-farm", label: "iPhone Farm Box" },
  { href: "/products/network-equipment", label: "Router / Switch" },
] as const;

export const CORE_PRODUCTS = [
  {
    slug: "motherboard-box",
    title: "Android Motherboard Box",
    titleZh: "安卓主板盒",
    href: "/products/motherboard-box",
    params: [
      "20 boards / box",
      "220V - ~100W",
      "55x38x16 cm - ~7 kg",
      "USB + OTG/LAN",
      "1 PC -> 3-5 boxes",
    ],
    use: "Compact bulk deployment, low power per node",
  },
  {
    slug: "phone-farm-box",
    title: "32PCS Phone Farm Box",
    titleZh: "32PCS 整机盒",
    href: "/products/phone-farm-box",
    params: [
      "32 devices / box",
      "3-fan cooling",
      "ROM customization",
      "USB + OTG/LAN",
      "Medium-scale batch ops",
    ],
    use: "Medium-scale device management & testing",
  },
  {
    slug: "phone-array-12pcs",
    title: "12PCS Phone Array",
    titleZh: "12PCS 手机阵列",
    href: "/products/phone-array-12pcs",
    params: [
      "12 hot-swap drawers",
      "Full phone or motherboard",
      "Built-in PC option",
      "USB 2.0 HUB",
      "Easier maintenance",
    ],
    use: "Lab teams, sample evaluation, small batches",
  },
  {
    slug: "iphone-phone-farm",
    title: "iPhone Farm Box",
    titleZh: "iPhone 农场盒",
    href: "/products/iphone-phone-farm",
    params: [
      "iOS device slots",
      "Hot-swap drawers",
      "Model depends on stock",
      "Custom quote only",
      "Remote setup included",
    ],
    use: "iOS app testing & multi-device management",
  },
] as const;
