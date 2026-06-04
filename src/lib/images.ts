const card = (name: string) => `/images/card_800x800/${name}-card_800x800.webp`;
const hero = (name: string) => `/images/hero_1600x900/${name}-hero_1600x900.webp`;
const detail = (name: string) => `/images/detail_1200x900/${name}-detail_1200x900.webp`;

export const IMAGES = {
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
