import Link from "next/link";
import { ContactCTA, JsonLd } from "@/components/shared";
import { FactoryGallery, PageBanner, SectionHeader } from "@/components/site-sections";
import { ZH_ABOUT } from "@/data/zh-content";
import { bannerProps } from "@/lib/banners";
import { IMAGES } from "@/lib/images";
import { buildMetadata, webPageJsonLd } from "@/lib/seo";
import { SEO_KEYWORDS_ZH, SITE } from "@/lib/config";

export const metadata = buildMetadata({
  title: "关于广州手机农场 — 专业手机农场硬件厂家",
  description:
    "广州手机农场自2017年起组装手机农场(Phone Farm)硬件：安卓主板盒、32PCS整机盒、12PCS阵列。工厂QC老化、出口打包、ROM定制与AnyDesk远程安装，服务全球B2B客户。",
  path: "/zh/about",
  absoluteTitle: true,
  locale: "zh-CN",
  keywords: [...SEO_KEYWORDS_ZH, "phone farm factory Guangzhou", "phone farm manufacturer"],
});

export default function ZhAboutPage() {
  const pageMeta = {
    name: "关于广州手机农场 — 专业手机农场硬件厂家",
    description:
      "广州手机农场自2017年起组装手机农场(Phone Farm)硬件：安卓主板盒、32PCS整机盒、12PCS阵列。工厂QC老化、出口打包、ROM定制与AnyDesk远程安装，服务全球B2B客户。",
  };

  return (
    <>
      <JsonLd data={webPageJsonLd({ ...pageMeta, path: "/zh/about" })} />
      <PageBanner title={ZH_ABOUT.title} subtitle={ZH_ABOUT.subtitle} {...bannerProps("about")} />
      <section className="section border-b border-[var(--border)]">
        <div className="container-wide max-w-3xl space-y-6">
          {ZH_ABOUT.paragraphs.map((p) => (
            <p key={p.slice(0, 20)} className="text-slate-300 text-base md:text-lg leading-relaxed">
              {p}
            </p>
          ))}
          <ul className="grid sm:grid-cols-2 gap-3 pt-4">
            {ZH_ABOUT.highlights.map((h) => (
              <li key={h} className="card-flat py-4 px-5 text-sm text-slate-300">{h}</li>
            ))}
          </ul>
          <p className="text-sm text-slate-500 pt-2">
            {SITE.nameEn} · {SITE.locationEn} · English: <Link href="/about" className="text-cyan-400">/about</Link>
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container-wide">
          <SectionHeader title="广州工厂实拍" subtitle="组装、QC、包装 — 真实工厂环境。" center />
          <FactoryGallery
            images={[
              { src: IMAGES.companyWorkshop, label: "组装车间" },
              { src: IMAGES.qc, label: "QC测试" },
              { src: IMAGES.companyWarehouse, label: "出口包装" },
              { src: IMAGES.phoneFarmBox.hero, label: "32PCS整机盒" },
            ]}
          />
        </div>
      </section>
      <section className="section-compact">
        <div className="container-wide max-w-3xl">
          <ContactCTA title="了解手机农场硬件方案? 欢迎询价" />
        </div>
      </section>
    </>
  );
}
