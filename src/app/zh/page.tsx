import Image from "next/image";
import Link from "next/link";
import { FAQAccordion } from "@/components/commerce";
import { ContactCTA, JsonLd } from "@/components/shared";
import { FactoryGallery, PageBanner, SectionHeader } from "@/components/site-sections";
import {
  ZH_APPLICATIONS,
  ZH_ARTICLE_LINKS,
  ZH_FACTORY,
  ZH_FAQ_ITEMS,
  ZH_HERO,
  ZH_INTRO,
  ZH_PRODUCTS,
} from "@/data/zh-content";
import { bannerProps } from "@/lib/banners";
import { IMAGES } from "@/lib/images";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import { CONTACT, SEO_KEYWORDS_ZH, SITE } from "@/lib/config";

export const metadata = buildMetadata({
  title: "手机农场硬件厂家 — 广州手机农场 | 真机群控主板盒与整机盒",
  description:
    "广州手机农场 — 专业手机农场(Phone Farm)硬件厂家。安卓主板盒20节点、32PCS整机盒、12PCS热插拔阵列、iPhone农场盒。工厂直销、ROM定制、出口打包、AnyDesk远程安装。批量询价欢迎联系。",
  path: "/zh",
  absoluteTitle: true,
  locale: "zh-CN",
  keywords: [...SEO_KEYWORDS_ZH, "phone farm box", "Guangzhou phone farm"],
});

export default function ZhHomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(ZH_FAQ_ITEMS.slice(0, 8))} />
      <PageBanner
        title={ZH_HERO.title}
        subtitle={ZH_HERO.subtitle}
        {...bannerProps("about")}
      />

      <section className="section border-b border-sky-400/12">
        <div className="container-wide max-w-4xl mx-auto text-center space-y-6">
          <p className="eyebrow">{ZH_HERO.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">{ZH_INTRO.heading}</h2>
          {ZH_INTRO.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="text-slate-300 text-base md:text-lg leading-relaxed text-left md:text-center">
              {p}
            </p>
          ))}
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link href="/products" className="btn-primary">查看产品目录</Link>
            <Link href="/contact" className="btn-outline">批量询价 / RFQ</Link>
            <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              WhatsApp 咨询
            </a>
          </div>
          <p className="text-sm text-slate-500">
            English site: <Link href="/" className="text-cyan-400 hover:text-cyan-300">www.phonefarm.cn</Link>
          </p>
        </div>
      </section>

      <section className="section-alt border-b border-sky-400/12">
        <div className="container-wide">
          <SectionHeader title="手机农场核心产品" subtitle="三款标准SKU支持在线USDT结账; bulk/OEM请询价。" center />
          <div className="grid md:grid-cols-3 gap-8">
            {ZH_PRODUCTS.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="card-flat hover:border-cyan-500/30 transition-all block h-full"
              >
                <h3 className="text-lg font-bold text-white mb-3 leading-snug">{p.name}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{p.desc}</p>
                <ul className="text-xs text-cyan-400/90 space-y-1">
                  {p.params.map((param) => (
                    <li key={param}>{param}</li>
                  ))}
                </ul>
                <span className="inline-block mt-4 text-sm text-cyan-400 font-medium">查看规格 →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-b border-sky-400/12">
        <div className="container-wide grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader title="手机农场应用场景" subtitle="开发、测试与合法多设备运维。" />
            <ul className="grid sm:grid-cols-2 gap-3">
              {ZH_APPLICATIONS.map((a) => (
                <li key={a} className="card-flat py-4 px-5 text-sm text-slate-300">{a}</li>
              ))}
            </ul>
          </div>
          <div className="product-showcase-image min-h-[260px]">
            <Image src={IMAGES.motherboardBox.hero} alt="安卓主板盒手机农场硬件" fill className="object-cover" sizes="50vw" />
          </div>
        </div>
      </section>

      <section className="section-alt border-b border-sky-400/12">
        <div className="container-wide max-w-4xl">
          <SectionHeader title={ZH_FACTORY.heading} subtitle="广州工厂组装、测试、出口与远程交付。" center />
          <ul className="param-list max-w-2xl mx-auto">
            {ZH_FACTORY.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-center mt-8">
            <Link href="/about" className="text-cyan-400 font-medium hover:text-cyan-300">了解工厂团队 →</Link>
          </p>
        </div>
      </section>

      <section className="section border-b border-sky-400/12">
        <div className="container-wide">
          <SectionHeader title="广州工厂实拍" subtitle="组装、QC、包装 — 真实工厂环境。" center />
          <FactoryGallery
            images={[
              { src: IMAGES.companyWorkshop, label: "组装车间" },
              { src: IMAGES.qc, label: "QC测试" },
              { src: IMAGES.companyWarehouse, label: "出口包装" },
              { src: IMAGES.phoneFarmBox.hero, label: "32PCS整机盒" },
              { src: IMAGES.realDevice.hero, label: "12PCS阵列" },
              { src: "/images/factory/gallery-11.png", label: "生产线" },
            ]}
          />
        </div>
      </section>

      <section className="section-alt border-b border-sky-400/12">
        <div className="container-wide max-w-3xl">
          <SectionHeader title="手机农场常见问题" subtitle="采购、技术、付款与交付 — 16条中文解答。" center />
          <FAQAccordion items={ZH_FAQ_ITEMS.slice(0, 8)} />
          <div className="text-center mt-6">
            <Link href="/zh/faq" className="btn-outline">查看全部中文 FAQ</Link>
          </div>
        </div>
      </section>

      <section className="section-compact border-b border-sky-400/12">
        <div className="container-wide max-w-3xl">
          <SectionHeader title="相关技术文章" subtitle="部分为英文,含详细部署步骤。" center />
          <ul className="space-y-3">
            {ZH_ARTICLE_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                  {link.title} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-compact">
        <div className="container-wide max-w-3xl">
          <ContactCTA title="需要手机农场配置报价? · Get Configuration Quote" />
          <p className="text-center text-xs text-slate-600 mt-4">
            {SITE.name} · {SITE.location} · 硬件仅供开发测试等合法用途
          </p>
        </div>
      </section>
    </>
  );
}
