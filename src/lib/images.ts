/**
 * Site image map — real assets from public/images/real + factory.
 * Fallbacks used only when files are missing.
 */
import realImageManifest from "./real-images-manifest.json";

const existing = new Set<string>(realImageManifest as string[]);

function asset(path: string, fallback: string): string {
  const name = path.split("/").pop() ?? "";
  if (existing.has(name)) return path;
  const file = path.replace(/^\/images\/real\//, "");
  if (existing.has(file)) return `/images/real/${file}`;
  return fallback;
}

const fb = {
  card: (n: string) => `/images/card_800x800/${n}-card_800x800.webp`,
  hero: (n: string) => `/images/hero_1600x900/${n}-hero_1600x900.webp`,
  detail: (n: string) => `/images/detail_1200x900/${n}-detail_1200x900.webp`,
};

const FALLBACK_NAMES = {
  phoneFarm: "phonefarm.cn-product-box-2025-10-25-11-27-img-0551-a9b35",
  mb: "phonefarm.cn-components-electronicscomponentslayout-64e0d",
  array: "phonefarm.cn-product-box-2025-10-25-11-28-img-0553-47327",
  iphone: "phonefarm.cn-product-box-2025-10-25-11-37-img-0566-ee21b",
  network: "phonefarm.cn-rack-cabinet-moderntechserverdeviceshowcase-89e28",
  remote: "phonefarm.cn-service-scenes-moderndevicemanagementcontrol-ae6b9",
  workshop: "phonefarm.cn-components-electronicsassemblylab-19f44",
};

const R = {
  mbHero: "/images/real/motherboard-box-hero.jpg",
  mbFront: "/images/real/motherboard-box-front.jpg",
  mbInside: "/images/real/motherboard-box-inside.jpg",
  pfHero: "/images/real/phone-farm-box-hero.jpg",
  pfFront: "/images/real/phone-farm-box-front.png",
  factoryWorkshop: "/images/factory/factory-workshop.jpg",
  factoryPacking: "/images/factory/factory-packing.jpg",
  factoryQc: "/images/real/factory-qc.png",
};

export const FACTORY_GALLERY = [
  "/images/factory/factory-workshop.jpg",
  "/images/factory/factory-packing.jpg",
  "/images/real/factory-qc.png",
  "/images/factory/gallery-1.png",
  "/images/factory/gallery-2.png",
  "/images/factory/gallery-3.png",
  "/images/factory/gallery-4.jpg",
  "/images/factory/gallery-5.jpg",
].filter(Boolean);

export const IMAGES = {
  homeHero: asset(R.mbHero, fb.hero(FALLBACK_NAMES.phoneFarm)),
  phoneFarmBox: {
    card: asset(R.pfFront, fb.card(FALLBACK_NAMES.phoneFarm)),
    hero: asset(R.pfHero, fb.hero(FALLBACK_NAMES.phoneFarm)),
    detail: asset(R.pfHero, fb.detail(FALLBACK_NAMES.phoneFarm)),
  },
  motherboardBox: {
    card: asset(R.mbFront, fb.card(FALLBACK_NAMES.mb)),
    hero: asset(R.mbHero, fb.hero(FALLBACK_NAMES.mb)),
    detail: asset(R.mbInside, fb.detail(FALLBACK_NAMES.mb)),
  },
  androidFarm: {
    card: asset(R.pfFront, fb.card(FALLBACK_NAMES.array)),
    hero: asset(R.pfHero, fb.hero(FALLBACK_NAMES.array)),
    detail: asset(R.mbInside, fb.detail(FALLBACK_NAMES.array)),
  },
  iphoneFarm: {
    card: fb.card(FALLBACK_NAMES.iphone),
    hero: fb.hero(FALLBACK_NAMES.iphone),
    detail: fb.detail(FALLBACK_NAMES.iphone),
  },
  realDevice: {
    card: asset(R.pfFront, fb.card(FALLBACK_NAMES.array)),
    hero: asset(R.pfHero, fb.hero(FALLBACK_NAMES.array)),
    detail: asset(R.mbInside, fb.detail(FALLBACK_NAMES.array)),
  },
  emptyBox: {
    card: fb.card("phonefarm.cn-components-electronicsassembly-detail-f936c"),
    hero: fb.hero("phonefarm.cn-components-electronicsassembly-detail-f936c"),
    detail: fb.detail("phonefarm.cn-components-electronicsassembly-detail-f936c"),
  },
  usbHub: {
    card: fb.card("phonefarm.cn-components-electronicscomponentsassembly-19059"),
    hero: fb.hero("phonefarm.cn-components-electronicscomponentsassembly-19059"),
    detail: fb.detail("phonefarm.cn-components-electronicscomponentsassembly-19059"),
  },
  power: {
    card: fb.card("phonefarm.cn-components-electronicsassemblylabworkbench-9e7df"),
    hero: fb.hero("phonefarm.cn-components-electronicsassemblylabworkbench-9e7df"),
    detail: fb.detail("phonefarm.cn-components-electronicsassemblylabworkbench-9e7df"),
  },
  cooling: {
    card: fb.card("phonefarm.cn-components-electronics-workbenchdetail-6f814"),
    hero: fb.hero("phonefarm.cn-components-electronics-workbenchdetail-6f814"),
    detail: fb.detail("phonefarm.cn-components-electronics-workbenchdetail-6f814"),
  },
  network: {
    card: fb.card(FALLBACK_NAMES.network),
    hero: fb.hero(FALLBACK_NAMES.network),
    detail: fb.detail(FALLBACK_NAMES.network),
  },
  customCabinet: {
    card: fb.card("phonefarm.cn-rack-cabinet-moderntechlab-datarack-2fb2e"),
    hero: fb.hero("phonefarm.cn-rack-cabinet-moderntechlab-datarack-2fb2e"),
    detail: fb.detail("phonefarm.cn-rack-cabinet-moderntechlab-datarack-2fb2e"),
  },
  remoteControl: {
    card: fb.card(FALLBACK_NAMES.remote),
    hero: fb.hero(FALLBACK_NAMES.remote),
    detail: fb.detail(FALLBACK_NAMES.remote),
  },
  serviceScene: fb.hero("phonefarm.cn-service-scenes-moderntechoffice-devicecontrol-2663b"),
  factory: asset(R.factoryWorkshop, fb.hero("phonefarm.cn-rack-cabinet-modernlab-serverworkbench-a0099")),
  workshop: asset(R.factoryWorkshop, fb.hero(FALLBACK_NAMES.workshop)),
  office: fb.hero("phonefarm.cn-service-scenes-moderntechofficeworkspace-23aa6"),
  meeting: fb.hero("phonefarm.cn-service-scenes-modernoffice-lab-28010"),
  warehouse: asset(R.factoryPacking, fb.hero("phonefarm.cn-rack-cabinet-industrial-server-8317a")),
  companyFront: asset(R.factoryWorkshop, "/images/company/%E5%89%8D%E5%8F%B0.png"),
  companyOffice: asset("/images/factory/gallery-4.jpg", "/images/company/%E5%8A%9E%E5%85%AC%E5%AE%A4.png"),
  companyMeeting: asset("/images/factory/gallery-5.jpg", "/images/company/%E4%BC%9A%E8%AE%AE%E5%AE%A4.png"),
  companyWorkshop: asset(R.factoryWorkshop, "/images/company/%E7%94%9F%E4%BA%A7%E8%BD%A6%E9%97%B4.png"),
  companyWarehouse: asset(R.factoryPacking, "/images/company/%E4%BB%93%E5%BA%93.png"),
  qc: asset(R.factoryQc, fb.detail(FALLBACK_NAMES.workshop)),
  manual: {
    otgLan: fb.hero(FALLBACK_NAMES.network),
    motherboardCables: asset(R.mbInside, fb.detail(FALLBACK_NAMES.mb)),
  },
} as const;

export const HAS_REAL_IMAGES = existing.size > 0;

export function getProductGallery(slug: string): string[] {
  const map: Record<string, string[]> = {
    "motherboard-box": [IMAGES.motherboardBox.hero, IMAGES.motherboardBox.detail, IMAGES.motherboardBox.card],
    "phone-farm-box": [IMAGES.phoneFarmBox.hero, IMAGES.phoneFarmBox.detail, IMAGES.phoneFarmBox.card],
    "phone-array-12pcs": [IMAGES.realDevice.hero, IMAGES.realDevice.detail, IMAGES.motherboardBox.detail],
    "iphone-phone-farm": [IMAGES.iphoneFarm.hero, IMAGES.iphoneFarm.detail],
  };
  const imgs = map[slug] ?? [IMAGES.motherboardBox.hero, IMAGES.motherboardBox.detail];
  return [...new Set(imgs.filter(Boolean))];
}
