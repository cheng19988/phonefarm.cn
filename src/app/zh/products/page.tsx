import Link from "next/link";
import { ContactCTA, JsonLd } from "@/components/shared";
import { PageBanner, SectionHeader } from "@/components/site-sections";
import { ZH_PRODUCTS, ZH_PRODUCTS_PAGE } from "@/data/zh-content";
import { bannerProps } from "@/lib/banners";
import { getProductCardImage } from "@/lib/images";
import { buildMetadata, productCatalogJsonLd } from "@/lib/seo";
import { SEO_KEYWORDS_ZH } from "@/lib/config";
import Image from "next/image";

export const metadata = buildMetadata({
  title: "手机农场产品目录 — 主板盒、32PCS整机盒、12PCS阵列 | 广州手机农场",
  description:
    "广州手机农场产品目录：安卓主板盒(20节点)、32PCS手机农场整机盒、12PCS热插拔阵列、iPhone农场盒。真机手机农场硬件工厂直销，支持USB/OTG-LAN、ROM定制与出口RFQ。",
  path: "/zh/products",
  absoluteTitle: true,
  locale: "zh-CN",
  keywords: [...SEO_KEYWORDS_ZH, "phone farm box catalog", "Android phone farm hardware"],
});

export default function ZhProductsPage() {
  return (
    <>
      <JsonLd data={productCatalogJsonLd()} />
      <PageBanner title={ZH_PRODUCTS_PAGE.title} subtitle={ZH_PRODUCTS_PAGE.subtitle} {...bannerProps("products")} />
      <section className="section">
        <div className="container-wide">
          <SectionHeader title="手机农场核心SKU" subtitle="三款标准产品支持在线USDT；iPhone与OEM请询价。" center />
          <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-8">
            {ZH_PRODUCTS.map((p) => (
              <Link
                key={p.slug}
                href={`/zh/products/${p.slug}`}
                className="card-flat hover:border-cyan-500/30 transition-all flex flex-col sm:flex-row gap-5 h-full"
              >
                <div className="relative w-full sm:w-40 h-36 sm:h-auto shrink-0 rounded-lg overflow-hidden bg-slate-900">
                  <Image src={getProductCardImage(p.slug)} alt={p.name} fill className="object-cover" sizes="160px" />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg font-bold text-white mb-2 leading-snug">{p.name}</h2>
                  <p className="text-sm text-slate-400 leading-relaxed mb-3">{p.desc}</p>
                  <ul className="text-xs text-cyan-400/90 space-y-1">
                    {p.params.map((param) => (
                      <li key={param}>{param}</li>
                    ))}
                  </ul>
                  <span className="inline-block mt-4 text-sm text-cyan-400 font-medium">查看中文规格 →</span>
                </div>
              </Link>
            ))}
          </div>
          <p className="text-center text-sm text-slate-500 mt-10">
            English catalog: <Link href="/products" className="text-cyan-400 hover:text-cyan-300">/products</Link>
          </p>
        </div>
      </section>
      <section className="section-compact">
        <div className="container-wide max-w-3xl">
          <ContactCTA title="需要手机农场配置报价?" />
        </div>
      </section>
    </>
  );
}
