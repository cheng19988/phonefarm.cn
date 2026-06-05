export const SITE = {
  name: "广州手机农场",
  nameEn: "Guangzhou Phone Farm",
  domain: "phonefarm.cn",
  url: "https://phonefarm.cn",
  tagline: "真机手机农场设备 · 整机盒 · 主板盒 · 定制方案",
  taglineEn: "Real Device Phone Farm Hardware & Custom Solutions",
  location: "中国广州",
  locationEn: "Guangzhou, China",
  address: "广东省广州市",
  since: 2017,
  description:
    "广州手机农场位于中国广州，专注于真机手机农场设备、整机盒、主板盒、安卓手机农场、iPhone 手机农场、USB Hub、电源、散热、网络设备、定制机柜及批量交付服务。",
  descriptionEn:
    "Guangzhou Phone Farm manufactures real-device phone farm hardware, chassis boxes, motherboard arrays, Android and iPhone farms, and enterprise bulk deployment from Guangzhou, China.",
} as const;

export const CONTACT = {
  phone: "13059502618",
  telegram: "@huicheng1998",
  telegramUrl: "https://t.me/huicheng1998",
  whatsapp: "+852 6215 5642",
  whatsappUrl: "https://wa.me/85262155642",
  email: "qiuxui646@gmail.com",
} as const;

export const PAYMENT = {
  network: "Tron TRC20",
  currency: "USDT",
  address: "TH42KshQyz15iWk5svAwS475RM8oYQjwjW",
  contract: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
  minAmount: 10,
  expiryMinutes: 30,
} as const;

export const NAV = [
  { href: "/products", label: "产品中心" },
  { href: "/services", label: "定制方案" },
  { href: "/about", label: "关于我们" },
  { href: "/faq", label: "常见问题" },
  { href: "/blog", label: "安装指南" },
  { href: "/contact", label: "联系我们" },
] as const;

export const PRODUCT_NAV = [
  { href: "/products/motherboard-box", label: "主板盒 Motherboard Box" },
  { href: "/products/phone-farm-box", label: "32PCS 整机盒" },
  { href: "/products/phone-array-12pcs", label: "12PCS 手机阵列" },
  { href: "/products/iphone-phone-farm", label: "iPhone 农场盒" },
  { href: "/products/network-equipment", label: "网络路由器" },
] as const;
