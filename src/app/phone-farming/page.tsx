import { SeoGuidePageView } from "@/components/seo-guide-page";
import { getSeoGuide } from "@/data/seo-guides";
import { buildMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

export const metadata = buildMetadata({
  title: "Phone Farming Guide | 手机农场硬件与部署指南",
  description:
    "手机农场（Phone Farm）硬件指南：真机群控、主板盒、32PCS 整机盒、USB/OTG 模式。Guangzhou Phone Farm 广州手机农场 factory-direct phone farming hardware for testing and QA.",
  path: "/phone-farming",
});

export default function PhoneFarmingPage() {
  const guide = getSeoGuide("phone-farming");
  if (!guide) notFound();
  return <SeoGuidePageView guide={guide} path="/phone-farming" />;
}
