/**
 * Product and factory images.
 *
 * Real photos: public/images/real/ — see docs/image-replacement-guide.md
 * Manifest is generated at build time (scripts/prebuild.mjs). Missing files keep placeholders.
 */

import realImageManifest from "./real-images-manifest.json";

const REAL_BASE = "/images/real";
const existingRealFiles = new Set<string>(realImageManifest as string[]);

function pickReal(webPath: string, fallback: string): string {
  const filename = webPath.slice(webPath.lastIndexOf("/") + 1);
  return existingRealFiles.has(filename) ? webPath : fallback;
}

/** Reserved real-photo paths (filenames per docs/image-replacement-guide.md) */
export const REAL_IMAGES = {
  motherboardBox: {
    front: `${REAL_BASE}/motherboard-box-front.webp`,
    inside: `${REAL_BASE}/motherboard-box-inside.webp`,
    cables: `${REAL_BASE}/motherboard-box-cables.webp`,
    packing: `${REAL_BASE}/motherboard-box-packing.webp`,
  },
  phoneFarmBox32: {
    front: `${REAL_BASE}/phone-farm-box-32-front.webp`,
    inside: `${REAL_BASE}/phone-farm-box-32-inside.webp`,
    testing: `${REAL_BASE}/phone-farm-box-32-testing.webp`,
    packing: `${REAL_BASE}/phone-farm-box-32-packing.webp`,
  },
  phoneArray12: {
    front: `${REAL_BASE}/phone-array-12-front.webp`,
    drawer: `${REAL_BASE}/phone-array-12-drawer.webp`,
    testing: `${REAL_BASE}/phone-array-12-testing.webp`,
  },
  iphoneFarmBox: {
    front: `${REAL_BASE}/iphone-farm-box-front.webp`,
    inside: `${REAL_BASE}/iphone-farm-box-inside.webp`,
  },
  network: {
    routerSetup: `${REAL_BASE}/otg-lan-router-setup.webp`,
    switchCabling: `${REAL_BASE}/switch-network-cabling.webp`,
  },
  workshop: {
    assemblyTable: `${REAL_BASE}/workshop-assembly-table.webp`,
    testingBench: `${REAL_BASE}/workshop-testing-bench.webp`,
    exportPacking: `${REAL_BASE}/export-packing-box.webp`,
    cableRouting: `${REAL_BASE}/cable-routing-detail.webp`,
  },
} as const;

const card = (name: string) => `/images/card_800x800/${name}-card_800x800.webp`;
const hero = (name: string) => `/images/hero_1600x900/${name}-hero_1600x900.webp`;
const detail = (name: string) => `/images/detail_1200x900/${name}-detail_1200x900.webp`;

const FALLBACK = {
  homeHero: hero("phonefarm.cn-product-box-0f5501e1584de9a625d220f62951bc6d-d04df"),
  phoneFarmBox: {
    card: card("phonefarm.cn-product-box-2025-10-25-11-27-img-0551-a9b35"),
    hero: hero("phonefarm.cn-product-box-2025-10-25-11-27-img-0551-a9b35"),
    detail: detail("phonefarm.cn-product-box-2025-10-25-11-27-img-0551-a9b35"),
  },
  motherboardBox: {
    card: card("phonefarm.cn-components-electronicscomponentslayout-64e0d"),
    hero: hero("phonefarm.cn-components-electronicscomponentslayout-64e0d"),
    detail: detail("phonefarm.cn-components-electronicscomponentslayout-64e0d"),
  },
  androidFarm: {
    card: card("phonefarm.cn-product-box-2025-10-25-11-28-img-0553-47327"),
    hero: hero("phonefarm.cn-product-box-2025-10-25-11-28-img-0553-47327"),
    detail: detail("phonefarm.cn-product-box-2025-10-25-11-28-img-0553-47327"),
  },
  iphoneFarm: {
    card: card("phonefarm.cn-product-box-2025-10-25-11-37-img-0566-ee21b"),
    hero: hero("phonefarm.cn-product-box-2025-10-25-11-37-img-0566-ee21b"),
    detail: detail("phonefarm.cn-product-box-2025-10-25-11-37-img-0566-ee21b"),
  },
  realDevice: {
    card: card("phonefarm.cn-product-box-0f5501e1584de9a625d220f62951bc6d-d04df"),
    hero: hero("phonefarm.cn-product-box-0f5501e1584de9a625d220f62951bc6d-d04df"),
    detail: detail("phonefarm.cn-product-box-0f5501e1584de9a625d220f62951bc6d-d04df"),
  },
  emptyBox: {
    card: card("phonefarm.cn-components-electronicsassembly-detail-f936c"),
    hero: hero("phonefarm.cn-components-electronicsassembly-detail-f936c"),
    detail: detail("phonefarm.cn-components-electronicsassembly-detail-f936c"),
  },
  usbHub: {
    card: card("phonefarm.cn-components-electronicscomponentsassembly-19059"),
    hero: hero("phonefarm.cn-components-electronicscomponentsassembly-19059"),
    detail: detail("phonefarm.cn-components-electronicscomponentsassembly-19059"),
  },
  power: {
    card: card("phonefarm.cn-components-electronicsassemblylabworkbench-9e7df"),
    hero: hero("phonefarm.cn-components-electronicsassemblylabworkbench-9e7df"),
    detail: detail("phonefarm.cn-components-electronicsassemblylabworkbench-9e7df"),
  },
  cooling: {
    card: card("phonefarm.cn-components-electronics-workbenchdetail-6f814"),
    hero: hero("phonefarm.cn-components-electronics-workbenchdetail-6f814"),
    detail: detail("phonefarm.cn-components-electronics-workbenchdetail-6f814"),
  },
  network: {
    card: card("phonefarm.cn-rack-cabinet-moderntechserverdeviceshowcase-89e28"),
    hero: hero("phonefarm.cn-rack-cabinet-moderntechserverdeviceshowcase-89e28"),
    detail: detail("phonefarm.cn-rack-cabinet-moderntechserverdeviceshowcase-89e28"),
  },
  customCabinet: {
    card: card("phonefarm.cn-rack-cabinet-moderntechlab-datarack-2fb2e"),
    hero: hero("phonefarm.cn-rack-cabinet-moderntechlab-datarack-2fb2e"),
    detail: detail("phonefarm.cn-rack-cabinet-moderntechlab-datarack-2fb2e"),
  },
  remoteControl: {
    card: card("phonefarm.cn-service-scenes-moderndevicemanagementcontrol-ae6b9"),
    hero: hero("phonefarm.cn-service-scenes-moderndevicemanagementcontrol-ae6b9"),
    detail: detail("phonefarm.cn-service-scenes-moderndevicemanagementcontrol-ae6b9"),
  },
  serviceScene: hero("phonefarm.cn-service-scenes-moderntechoffice-devicecontrol-2663b"),
  factory: hero("phonefarm.cn-rack-cabinet-modernlab-serverworkbench-a0099"),
  workshop: hero("phonefarm.cn-components-electronicsassemblylab-19f44"),
  office: hero("phonefarm.cn-service-scenes-moderntechofficeworkspace-23aa6"),
  meeting: hero("phonefarm.cn-service-scenes-modernoffice-lab-28010"),
  warehouse: hero("phonefarm.cn-rack-cabinet-industrial-server-8317a"),
  companyFront: "/images/company/%E5%89%8D%E5%8F%B0.png",
  companyOffice: "/images/company/%E5%8A%9E%E5%85%AC%E5%AE%A4.png",
  companyMeeting: "/images/company/%E4%BC%9A%E8%AE%AE%E5%AE%A4.png",
  companyWorkshop: "/images/company/%E7%94%9F%E4%BA%A7%E8%BD%A6%E9%97%B4.png",
  companyWarehouse: "/images/company/%E4%BB%93%E5%BA%93.png",
} as const;

export const IMAGES = {
  homeHero: FALLBACK.homeHero,
  phoneFarmBox: {
    card: pickReal(REAL_IMAGES.phoneFarmBox32.front, FALLBACK.phoneFarmBox.card),
    hero: pickReal(REAL_IMAGES.phoneFarmBox32.front, FALLBACK.phoneFarmBox.hero),
    detail: pickReal(REAL_IMAGES.phoneFarmBox32.inside, FALLBACK.phoneFarmBox.detail),
    delivery: pickReal(REAL_IMAGES.workshop.exportPacking, FALLBACK.warehouse),
  },
  motherboardBox: {
    card: pickReal(REAL_IMAGES.motherboardBox.front, FALLBACK.motherboardBox.card),
    hero: pickReal(REAL_IMAGES.motherboardBox.front, FALLBACK.motherboardBox.hero),
    detail: pickReal(REAL_IMAGES.motherboardBox.inside, FALLBACK.motherboardBox.detail),
    cables: pickReal(REAL_IMAGES.motherboardBox.cables, FALLBACK.motherboardBox.detail),
  },
  androidFarm: FALLBACK.androidFarm,
  iphoneFarm: {
    card: pickReal(REAL_IMAGES.iphoneFarmBox.front, FALLBACK.iphoneFarm.card),
    hero: pickReal(REAL_IMAGES.iphoneFarmBox.front, FALLBACK.iphoneFarm.hero),
    detail: pickReal(REAL_IMAGES.iphoneFarmBox.inside, FALLBACK.iphoneFarm.detail),
  },
  realDevice: {
    card: pickReal(REAL_IMAGES.phoneArray12.front, FALLBACK.realDevice.card),
    hero: pickReal(REAL_IMAGES.phoneArray12.front, FALLBACK.realDevice.hero),
    detail: pickReal(
      REAL_IMAGES.phoneArray12.front,
      pickReal(REAL_IMAGES.phoneArray12.drawer, FALLBACK.realDevice.detail)
    ),
  },
  emptyBox: FALLBACK.emptyBox,
  usbHub: FALLBACK.usbHub,
  power: FALLBACK.power,
  cooling: FALLBACK.cooling,
  network: {
    card: pickReal(REAL_IMAGES.network.routerSetup, FALLBACK.network.card),
    hero: pickReal(REAL_IMAGES.network.routerSetup, FALLBACK.network.hero),
    detail: pickReal(REAL_IMAGES.network.routerSetup, FALLBACK.network.detail),
  },
  customCabinet: FALLBACK.customCabinet,
  remoteControl: FALLBACK.remoteControl,
  serviceScene: FALLBACK.serviceScene,
  factory: pickReal(REAL_IMAGES.workshop.assemblyTable, FALLBACK.factory),
  workshop: pickReal(REAL_IMAGES.workshop.testingBench, FALLBACK.workshop),
  office: FALLBACK.office,
  meeting: FALLBACK.meeting,
  warehouse: pickReal(REAL_IMAGES.workshop.exportPacking, FALLBACK.warehouse),
  companyFront: FALLBACK.companyFront,
  companyOffice: FALLBACK.companyOffice,
  companyMeeting: FALLBACK.companyMeeting,
  companyWorkshop: pickReal(REAL_IMAGES.workshop.assemblyTable, FALLBACK.companyWorkshop),
  companyWarehouse: pickReal(REAL_IMAGES.workshop.exportPacking, FALLBACK.companyWarehouse),
  manual: {
    otgLan: pickReal(REAL_IMAGES.network.routerSetup, FALLBACK.network.hero),
    motherboardCables: pickReal(REAL_IMAGES.motherboardBox.cables, FALLBACK.motherboardBox.detail),
  },
} as const;

export const HAS_REAL_IMAGES = existingRealFiles.size > 0;
