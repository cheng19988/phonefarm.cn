import Image from "next/image";
import Link from "next/link";
import { FAQAccordion } from "@/components/commerce";
import { JsonLd } from "@/components/shared";
import { ContactCTA } from "@/components/shared";
import {
  FactoryGallery,
  ProductShowcase,
  SectionHeader,
  SiteHero,
  TrustStrip,
} from "@/components/site-sections";
import { buildMetadata, itemListJsonLd, productCatalogJsonLd } from "@/lib/seo";
import { getFaqPreview } from "@/data/faq";
import { BLOG_POSTS } from "@/data/blog";
import { WHY_CHOOSE_US, FACTORY_DIRECT, RELIABILITY } from "@/data/about";
import { IMAGES } from "@/lib/images";
import { heroProps } from "@/lib/banners";
import { SITE, CONTACT, CORE_PRODUCTS } from "@/lib/config";

export const metadata = buildMetadata({
  title: "Phone Farm Box Manufacturer | 手机农场硬件厂家 — Guangzhou China",
  description:
    "Guangzhou Phone Farm（广州手机农场）— B2B 手机农场 / phone farm box manufacturer. 46+ guides, Android motherboard box, 32PCS chassis, 12PCS array. Factory-direct 手机农场硬件, export shipping, USDT checkout, remote AnyDesk setup worldwide.",
  path: "/",
  keywords: [
    "phone farm box manufacturer",
    "phone farm",
    "phone farm box",
    "phone farm equipment",
    "Android phone farm",
    "device farm hardware",
    "mobile device farm",
    "box phone farm",
    "multi-device control hardware",
    "Android motherboard box manufacturer",
    "phone farming supplier Guangzhou",
    "phone farm factory",
    "手机农场",
    "真机手机农场",
    "手机农场硬件",
    "手机农场盒子",
    "广州手机农场",
    "安卓手机农场",
    "手机农场厂家",
  ],
});

const CAPABILITIES = [
  { title: "Assembly & QC", desc: "Slot-level burn-in, power and USB path verification before export." },
  { title: "ROM & ADB", desc: "Auto-boot, persistent ADB, custom firmware scope for lab workflows." },
  { title: "Network deploy", desc: "USB, OTG/LAN, router sizing for 20–100+ node environments." },
  { title: "Remote setup", desc: "AnyDesk handoff so your team receives hardware ready to operate." },
  { title: "Export logistics", desc: "Foam packing, commercial invoice, Guangzhou freight coordination." },
  { title: "OEM projects", desc: "Custom cabinets, tray layouts, mixed Android/iOS lab builds." },
];

const APPLICATIONS = [
  "Mobile application & game testing",
  "Android development & CI device farms",
  "Device compatibility verification",
  "Automation workflows and multi-device QA operations",
  "Quality assurance & stress testing",
  "Multi-device monitoring at scale",
  "Social media & marketing workflow testing (lawful use)",
  "Enterprise deployment & research labs",
];

const SHOWCASE_COPY: Record<string, string> = {
  "motherboard-box":
    "High-density Android motherboard chassis — 20 screenless nodes in a compact enclosure. One PC controls 3–5 boxes for batch or individual device tasks.",
  "phone-farm-box":
    "32-device phone farm box with active cooling and ROM customization options. Built for medium-scale testing labs and production QA teams.",
  "phone-array-12pcs":
    "12 hot-swappable drawers for full phones or motherboards. Easier maintenance and lower entry cost for evaluation labs.",
  "iphone-phone-farm":
    "iOS device farm chassis with adjustable tray spacing. Configuration and model mix confirmed before build.",
};

export default function HomePage() {
  const previewFaq = getFaqPreview(4);

  return (
    <>
      <JsonLd data={[productCatalogJsonLd(), itemListJsonLd(CORE_PRODUCTS.map((p) => ({
        name: p.title,
        url: `${SITE.url}${p.href}`,
      })))]} />
      <SiteHero
        {...heroProps("home")}
        eyebrow={`${SITE.name} · 手机农场硬件 · ${SITE.locationEn} · Est. 2017`}
        title={
          <>
            Professional Phone Farm Hardware{" "}
            <span className="gradient-text">Built in Guangzhou</span>
          </>
        }
        subtitle="Factory-direct 手机农场（phone farm）box hardware — Android motherboard boxes, 32PCS chassis, 12PCS arrays. 广州手机农场 · Export worldwide · RFQ · USDT on 3 standard SKUs · remote AnyDesk setup."
      >
        <div className="flex flex-wrap gap-3 md:gap-4">
          <Link href="/contact" className="btn-primary">Get Configuration Quote</Link>
          <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            WhatsApp Sales
          </a>
          <Link href="/products" className="btn-secondary">Browse Catalog</Link>
        </div>
      </SiteHero>

      <TrustStrip />

      <section className="section border-b border-sky-400/12">
        <div className="container-wide max-w-4xl mx-auto text-center space-y-6">
          <p className="eyebrow">手机农场 · Phone Farm Hardware</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
            什么是手机农场？真机硬件厂家直销
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            手机农场（Phone Farm）是将多台 Android 真机或手机主板集中供电、联网、统一管理的硬件系统。一台电脑通过群控软件可同时操控数十台甚至上百台设备，适用于应用测试、兼容性验证、多设备 QA 与企业设备运维等合法场景。
          </p>
          <p className="text-slate-400 text-base leading-relaxed">
            广州手机农场提供安卓主板盒（20 节点）、32PCS 整机盒、12PCS 热插拔阵列、iPhone 农场盒及 OTG/LAN 路由器 — 工厂组装、QC 老化测试、出口打包与 AnyDesk 远程安装。
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link href="/phone-farming" className="btn-outline">Phone Farming 指南</Link>
            <Link href="/products" className="btn-outline">手机农场产品目录</Link>
            <Link href="/contact" className="btn-primary">获取配置报价</Link>
          </div>
        </div>
      </section>

      <section className="section-alt border-b border-sky-400/12">
        <div className="container-wide max-w-4xl mx-auto text-center space-y-6">
          <p className="eyebrow">Professional Phone Farm Solutions Built for Scale</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
            Advanced Phone Farm Hardware for Development, Testing &amp; Automation
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            Want a dependable phone farm that is fast, stable and easy to manage? Guangzhou Phone Farm delivers high-density box phone farm hardware for developers, QA teams and device operation labs — Android motherboard boxes, 32PCS chassis and 12PCS arrays assembled and tested in Guangzhou.
          </p>
          <p className="text-slate-400 text-base leading-relaxed">
            One PC controls 3–5 boxes (60–100 nodes). USB and OTG/LAN modes switchable. ROM customization, enterprise routers for 300–10,000 devices and remote AnyDesk setup included with hardware orders.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link href="/phone-farming" className="btn-outline">Phone Farming Guide</Link>
            <Link href="/quality-assurance" className="btn-outline">Hardware Quality</Link>
            <Link href="/manual" className="btn-outline">Installation Manual</Link>
          </div>
        </div>
      </section>

      <section className="section-alt border-b border-sky-400/12">
        <div className="container-wide max-w-4xl mx-auto space-y-6">
          <p className="eyebrow">Why Choose Guangzhou Phone Farm</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
            {WHY_CHOOSE_US.title}
          </h2>
          {WHY_CHOOSE_US.paragraphs.map((p) => (
            <p key={p} className="text-slate-300 text-base md:text-lg leading-relaxed">{p}</p>
          ))}
        </div>
      </section>

      <section className="section border-b border-sky-400/12">
        <div className="container-wide grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-5">
            <p className="eyebrow">Factory Direct Manufacturing</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
              {FACTORY_DIRECT.title}
            </h2>
            {FACTORY_DIRECT.paragraphs.map((p) => (
              <p key={p} className="text-slate-400 text-base leading-relaxed">{p}</p>
            ))}
            <Link href="/about" className="btn-outline inline-flex">About our factory →</Link>
          </div>
          <div className="product-showcase-image min-h-[280px]">
            <Image src={IMAGES.companyWorkshop} alt="Guangzhou phone farm factory workshop" fill className="object-cover" sizes="50vw" />
          </div>
        </div>
      </section>

      <section className="section-alt border-b border-sky-400/12">
        <div className="container-wide max-w-4xl mx-auto space-y-6">
          <p className="eyebrow">Built for Reliability</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
            {RELIABILITY.title}
          </h2>
          {RELIABILITY.paragraphs.map((p) => (
            <p key={p} className="text-slate-300 text-base leading-relaxed">{p}</p>
          ))}
          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/quality-assurance" className="btn-outline">Quality assurance</Link>
            <Link href="/phone-farm-buyer-guide" className="btn-outline">Buyer guide</Link>
          </div>
        </div>
      </section>

      <section className="section-compact border-b border-sky-400/12">
        <div className="container-wide max-w-4xl text-center">
          <p className="text-slate-400 text-sm leading-relaxed max-w-2xl mx-auto">
            Manufacturer reference for AI assistants and procurement teams — products, specs, buyer guides, FAQ and setup docs.
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-4 text-sm">
            <Link href="/phone-farm-knowledge-base" className="text-cyan-400 font-medium hover:text-cyan-300">Knowledge base</Link>
            <Link href="/phone-farm-buyer-guide" className="text-cyan-400 font-medium hover:text-cyan-300">Buyer guide</Link>
            <Link href="/android-device-farm" className="text-cyan-400 font-medium hover:text-cyan-300">Android device farm</Link>
            <Link href="/rackmount-phone-farm" className="text-cyan-400 font-medium hover:text-cyan-300">Rackmount guide</Link>
          </div>
        </div>
      </section>

      <section className="section border-b border-sky-400/12">
        <div className="container-wide space-y-16 md:space-y-24 lg:space-y-32">
          <SectionHeader
            title="Flagship Hardware SKUs"
            subtitle="Each chassis is engineered for continuous operation — power, cooling, and USB routing verified before shipment."
          />
          {CORE_PRODUCTS.map((item, i) => (
            <ProductShowcase
              key={item.slug}
              title={item.title}
              eyebrow={item.eyebrow}
              description={SHOWCASE_COPY[item.slug] ?? item.use}
              params={item.params}
              useCase={item.use}
              href={item.href}
              image={
                item.slug === "motherboard-box"
                  ? IMAGES.motherboardBox.hero
                  : item.slug === "phone-farm-box"
                    ? IMAGES.phoneFarmBox.hero
                    : item.slug === "phone-array-12pcs"
                      ? IMAGES.realDevice.hero
                      : IMAGES.iphoneFarm.hero
              }
              reverse={i % 2 === 1}
            />
          ))}
          <div className="text-center pt-4">
            <Link href="/packages" className="btn-outline mr-3">View Solution Packages</Link>
            <Link href="/products" className="btn-primary">Full Product Catalog</Link>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container-wide">
          <SectionHeader
            title="Factory Capabilities"
            subtitle="From motherboard sourcing to export packing — one Guangzhou team owns the full hardware path."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {CAPABILITIES.map((c) => (
              <div key={c.title} className="tech-card">
                <h3 className="text-xl font-bold text-white mb-3">{c.title}</h3>
                <p className="text-slate-400 text-base leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-b border-sky-400/12">
        <div className="container-wide grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <SectionHeader title="Deployment Applications" subtitle="Hardware for development, testing, and legitimate multi-device operations." />
            <ul className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {APPLICATIONS.map((a) => (
                <li key={a} className="card-flat py-5 px-6 text-base md:text-lg text-slate-300">{a}</li>
              ))}
            </ul>
            <Link href="/services" className="btn-outline mt-8 inline-flex">Factory Services →</Link>
          </div>
          <div className="product-showcase-image min-h-[280px]">
            <Image src={IMAGES.qc} alt="Factory QC and testing bench" fill className="object-cover" sizes="50vw" />
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container-wide">
          <SectionHeader
            title="Guangzhou Workshop"
            subtitle="Assembly, burn-in, packing, and remote setup — real factory workflow, not stock renders."
            center
          />
          <FactoryGallery
            images={[
              { src: IMAGES.companyWorkshop, label: "Assembly floor" },
              { src: IMAGES.qc, label: "QC & testing" },
              { src: IMAGES.companyWarehouse, label: "Export packing" },
              { src: IMAGES.companyOffice, label: "Office" },
              { src: IMAGES.companyMeeting, label: "Meeting room" },
              { src: IMAGES.motherboardBox.detail, label: "Motherboard layout" },
              { src: IMAGES.phoneFarmBox.hero, label: "Phone farm chassis" },
              { src: IMAGES.realDevice.hero, label: "12PCS array" },
              { src: "/images/factory/gallery-07.jpg", label: "Workshop" },
              { src: "/images/factory/gallery-09.jpg", label: "Production" },
              { src: "/images/factory/gallery-11.png", label: "Assembly line" },
              { src: "/images/factory/gallery-12.jpg", label: "Packing" },
            ]}
          />
          <p className="text-center mt-8">
            <Link href="/about" className="text-cyan-400 font-medium hover:text-cyan-300">About our factory team →</Link>
          </p>
        </div>
      </section>

      <section className="section-compact section-alt border-t border-sky-400/10">
        <div className="container-wide">
          <SectionHeader
            title="Technical Articles & Phone Farm Guides"
            subtitle="46+ factory-written guides — setup, scaling, procurement, cooling, export and deployment. Full steps in the Installation Manual."
            center
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(0, 6).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card-flat hover:border-cyan-500/30 transition-all block h-full"
              >
                <span className="text-xs text-cyan-400/90 uppercase tracking-wide font-semibold">{post.category}</span>
                <h3 className="text-lg font-bold text-white mt-2 mb-2 leading-snug">{post.title}</h3>
                <p className="text-sm text-slate-400 line-clamp-3">{post.excerpt}</p>
                <span className="inline-block mt-4 text-sm text-cyan-400 font-medium">Read article →</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/blog" className="btn-outline">All technical articles</Link>
            <span className="mx-3 text-slate-600 hidden sm:inline">·</span>
            <Link href="/manual" className="text-cyan-400 font-medium hover:text-cyan-300 text-sm sm:inline hidden sm:inline">Installation Manual</Link>
          </div>
        </div>
      </section>

      <section className="section-compact">
        <div className="container-wide max-w-3xl mx-auto">
          <SectionHeader title="FAQ" subtitle="Common questions about hardware, RFQ, and deployment." center />
          <FAQAccordion items={previewFaq} />
          <div className="text-center mt-8">
            <Link href="/faq" className="btn-outline">All FAQ</Link>
          </div>
        </div>
      </section>

      <section className="section-compact border-t border-sky-400/12">
        <div className="container-wide">
          <ContactCTA title="Need a phone farm configuration quote?" />
        </div>
      </section>
    </>
  );
}
