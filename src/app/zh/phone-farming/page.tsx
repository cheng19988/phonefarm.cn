import Link from "next/link";
import { SeoGuidePageView } from "@/components/seo-guide-page";
import { ZH_PHONE_FARMING } from "@/data/zh-content";
import { getSeoGuide } from "@/data/seo-guides";
import { buildMetadata } from "@/lib/seo";
import { SEO_KEYWORDS_ZH } from "@/lib/config";
import { notFound } from "next/navigation";

export const metadata = buildMetadata({
  title: "手机农场硬件与部署指南 — 广州手机农场",
  description:
    "手机农场(Phone Farm)是什么？真机群控、安卓主板盒、32PCS整机盒、USB与OTG-LAN模式、应用场景与工厂直销方案。Guangzhou Phone Farm 广州手机农场完整中文导读。",
  path: "/zh/phone-farming",
  absoluteTitle: true,
  locale: "zh-CN",
  keywords: [...SEO_KEYWORDS_ZH, "phone farming guide", "phone farm deployment"],
});

export default function ZhPhoneFarmingPage() {
  const guide = getSeoGuide("phone-farming");
  if (!guide) notFound();

  return (
    <>
      <SeoGuidePageView
        guide={{
          ...guide,
          title: ZH_PHONE_FARMING.title,
          heroSubtitle: ZH_PHONE_FARMING.subtitle,
        }}
        path="/zh/phone-farming"
      />
      <section className="section-compact border-t border-[var(--border)]">
        <div className="container-wide max-w-3xl text-center">
          <Link href="/phone-farming" className="text-cyan-400 text-sm hover:text-cyan-300">
            English version: Phone Farming Guide →
          </Link>
        </div>
      </section>
    </>
  );
}
