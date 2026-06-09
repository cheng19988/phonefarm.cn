/**
 * Site image map — ingested assets under public/images/{real,factory,deck,hero,card}.
 */
import realImageManifest from "./real-images-manifest.json";

const existing = new Set<string>(realImageManifest as string[]);

function asset(realPath: string, fallback: string): string {
  const name = realPath.split("/").pop() ?? "";
  if (existing.has(name)) return realPath;
  return fallback;
}

function pub(sub: string, file: string): string {
  return `/images/${sub}/${file}`;
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
  mbHero: pub("real", "motherboard-box-hero.jpg"),
  mbFront: pub("real", "motherboard-box-front.jpg"),
  mbInside: pub("real", "motherboard-box-inside.jpg"),
  pfHero: pub("real", "phone-farm-box-hero.png"),
  pfFront: pub("real", "phone-farm-box-front.png"),
  pfDetail: pub("real", "phone-farm-box-front.png"),
  arrayHero: pub("real", "phone-array-hero.png"),
  iphoneHero: pub("real", "iphone-farm-hero.png"),
  factoryWorkshop: pub("factory", "factory-workshop.jpg"),
  factoryPacking: pub("factory", "factory-packing.jpg"),
  factoryQc: pub("real", "factory-qc.png"),
  deck1: pub("deck", "deck-slide-1.png"),
  deck2: pub("deck", "deck-slide-2.png"),
};

const GALLERY_FILES = [
  "factory-workshop.jpg",
  "factory-packing.jpg",
  "gallery-01.png",
  "gallery-02.png",
  "gallery-03.png",
  "gallery-04.jpg",
  "gallery-05.jpg",
  "gallery-06.jpg",
  "gallery-07.jpg",
  "gallery-08.png",
  "gallery-09.jpg",
  "gallery-10.jpg",
];

export const FACTORY_GALLERY = GALLERY_FILES.map((f) => pub("factory", f));

export const IMAGES = {
  homeHero: asset(R.mbHero, fb.hero(FALLBACK_NAMES.phoneFarm)),
  phoneFarmBox: {
    card: asset(R.pfFront, fb.card(FALLBACK_NAMES.phoneFarm)),
    hero: asset(R.pfHero, fb.hero(FALLBACK_NAMES.phoneFarm)),
    detail: asset(R.pfDetail, fb.detail(FALLBACK_NAMES.phoneFarm)),
  },
  motherboardBox: {
    card: asset(R.mbFront, fb.card(FALLBACK_NAMES.mb)),
    hero: asset(R.mbHero, fb.hero(FALLBACK_NAMES.mb)),
    detail: asset(R.mbInside, fb.detail(FALLBACK_NAMES.mb)),
  },
  androidFarm: {
    card: asset(R.pfFront, fb.card(FALLBACK_NAMES.array)),
    hero: asset(R.arrayHero, fb.hero(FALLBACK_NAMES.array)),
    detail: asset(R.mbInside, fb.detail(FALLBACK_NAMES.array)),
  },
  iphoneFarm: {
    card: asset(R.iphoneHero, fb.card(FALLBACK_NAMES.iphone)),
    hero: asset(R.iphoneHero, fb.hero(FALLBACK_NAMES.iphone)),
    detail: asset(R.iphoneHero, fb.detail(FALLBACK_NAMES.iphone)),
  },
  realDevice: {
    card: asset(R.arrayHero, fb.card(FALLBACK_NAMES.array)),
    hero: asset(R.arrayHero, fb.hero(FALLBACK_NAMES.array)),
    detail: asset(R.mbInside, fb.detail(FALLBACK_NAMES.array)),
  },
  emptyBox: {
    card: asset(R.mbInside, fb.card("phonefarm.cn-components-electronicsassembly-detail-f936c")),
    hero: asset(R.mbInside, fb.hero("phonefarm.cn-components-electronicsassembly-detail-f936c")),
    detail: asset(R.mbInside, fb.detail("phonefarm.cn-components-electronicsassembly-detail-f936c")),
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
    card: asset(R.pfFront, fb.card(FALLBACK_NAMES.network)),
    hero: asset(R.deck1, fb.hero(FALLBACK_NAMES.network)),
    detail: asset(R.deck2, fb.detail(FALLBACK_NAMES.network)),
  },
  customCabinet: {
    card: asset(R.pfHero, fb.card("phonefarm.cn-rack-cabinet-moderntechlab-datarack-2fb2e")),
    hero: asset(R.pfHero, fb.hero("phonefarm.cn-rack-cabinet-moderntechlab-datarack-2fb2e")),
    detail: asset(R.mbInside, fb.detail("phonefarm.cn-rack-cabinet-moderntechlab-datarack-2fb2e")),
  },
  remoteControl: {
    card: asset(R.deck1, fb.card(FALLBACK_NAMES.remote)),
    hero: asset(R.deck2, fb.hero(FALLBACK_NAMES.remote)),
    detail: fb.detail(FALLBACK_NAMES.remote),
  },
  serviceScene: asset(R.deck1, fb.hero("phonefarm.cn-service-scenes-moderntechoffice-devicecontrol-2663b")),
  factory: asset(R.factoryWorkshop, fb.hero("phonefarm.cn-rack-cabinet-modernlab-serverworkbench-a0099")),
  workshop: asset(R.factoryWorkshop, fb.hero(FALLBACK_NAMES.workshop)),
  office: asset(R.deck1, fb.hero("phonefarm.cn-service-scenes-moderntechofficeworkspace-23aa6")),
  meeting: asset(R.deck2, fb.hero("phonefarm.cn-service-scenes-modernoffice-lab-28010")),
  warehouse: asset(R.factoryPacking, fb.hero("phonefarm.cn-rack-cabinet-industrial-server-8317a")),
  companyFront: asset(R.factoryWorkshop, "/images/company/%E5%89%8D%E5%8F%B0.png"),
  companyOffice: asset(pub("factory", "gallery-04.jpg"), "/images/company/%E5%8A%9E%E5%85%AC%E5%AE%A4.png"),
  companyMeeting: asset(pub("factory", "gallery-05.jpg"), "/images/company/%E4%BC%9A%E8%AE%AE%E5%AE%A4.png"),
  companyWorkshop: asset(R.factoryWorkshop, "/images/company/%E7%94%9F%E4%BA%A7%E8%BD%A6%E9%97%B4.png"),
  companyWarehouse: asset(R.factoryPacking, "/images/company/%E4%BB%93%E5%BA%93.png"),
  qc: asset(R.factoryQc, fb.detail(FALLBACK_NAMES.workshop)),
  deck: { slide1: R.deck1, slide2: R.deck2 },
  manual: {
    otgLan: asset(R.deck1, fb.hero(FALLBACK_NAMES.network)),
    motherboardCables: asset(R.mbInside, fb.detail(FALLBACK_NAMES.mb)),
  },
} as const;

export const HAS_REAL_IMAGES = existing.size > 0;

export function getProductGallery(slug: string): string[] {
  const extra = FACTORY_GALLERY.slice(0, 3);
  const map: Record<string, string[]> = {
    "motherboard-box": [IMAGES.motherboardBox.hero, IMAGES.motherboardBox.detail, IMAGES.motherboardBox.card, ...extra],
    "phone-farm-box": [IMAGES.phoneFarmBox.hero, IMAGES.phoneFarmBox.detail, IMAGES.phoneFarmBox.card, IMAGES.qc],
    "phone-array-12pcs": [IMAGES.realDevice.hero, IMAGES.realDevice.detail, IMAGES.motherboardBox.detail],
    "iphone-phone-farm": [IMAGES.iphoneFarm.hero, IMAGES.iphoneFarm.detail, IMAGES.phoneFarmBox.card],
    "android-phone-farm": [IMAGES.phoneFarmBox.hero, IMAGES.androidFarm.hero, IMAGES.motherboardBox.detail],
  };
  const imgs = map[slug] ?? [IMAGES.motherboardBox.hero, IMAGES.motherboardBox.detail, IMAGES.qc];
  return [...new Set(imgs.filter(Boolean))].slice(0, 6);
}
