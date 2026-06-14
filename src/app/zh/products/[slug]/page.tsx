import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ContactCTA, JsonLd } from "@/components/shared";
import { PageBanner } from "@/components/site-sections";
import { RfqCTA } from "@/components/rfq-cta";
import { ZH_PRODUCTS } from "@/data/zh-content";
import { getProductSeed } from "@/data/products";
import { bannerProps } from "@/lib/banners";
import { getProductGallery } from "@/lib/images";
import { buildMetadata, productJsonLd } from "@/lib/seo";
import { SEO_KEYWORDS_ZH } from "@/lib/config";
import { ZH_PRODUCT_SLUGS } from "@/lib/i18n";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ZH_PRODUCT_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const zh = ZH_PRODUCTS.find((p) => p.slug === slug);
  if (!zh) return {};
  return buildMetadata({
    title: `${zh.name} | 广州手机农场`,
    description: `${zh.desc} 广州手机农场工厂直销手机农场硬件，批量询价欢迎联系。`,
    path: `/zh/products/${slug}`,
    absoluteTitle: true,
    locale: "zh-CN",
    keywords: [...SEO_KEYWORDS_ZH, "phone farm box", zh.slug],
    image: getProductSeed(slug)?.imageHero,
  });
}

export default async function ZhProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const zh = ZH_PRODUCTS.find((p) => p.slug === slug);
  const seed = getProductSeed(slug);
  if (!zh || !seed) notFound();

  const gallery = getProductGallery(slug);

  return (
    <>
      <JsonLd
        data={productJsonLd({
          name: zh.name,
          description: zh.desc,
          slug,
          image: seed.imageHero,
          priceUsd: seed.priceUsd,
          stock: seed.stock,
        })}
      />
      <PageBanner title={zh.name} subtitle={zh.desc} {...bannerProps("products")} />
      <section className="section">
        <div className="container-wide max-w-4xl space-y-8">
          <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-[var(--border)]">
            <Image src={gallery[0] ?? seed.imageHero} alt={zh.name} fill className="object-cover" sizes="896px" priority />
          </div>
          <ul className="param-list">
            {zh.params.map((param) => (
              <li key={param}>{param}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <Link href="/zh/contact" className="btn-primary">批量询价</Link>
            <Link href={`/products/${slug}`} className="btn-outline">English specs</Link>
            <Link href="/zh/products" className="btn-outline">返回产品目录</Link>
          </div>
          <RfqCTA title="发送RFQ获取配置报价" productSlug={slug} />
        </div>
      </section>
      <section className="section-compact">
        <div className="container-wide max-w-3xl">
          <ContactCTA title="需要此款手机农场硬件报价?" />
        </div>
      </section>
    </>
  );
}
