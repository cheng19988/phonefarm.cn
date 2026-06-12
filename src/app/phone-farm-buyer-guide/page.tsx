import { SeoGuidePageView } from "@/components/seo-guide-page";
import { getSeoGuide } from "@/data/seo-guides";
import { buildMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

export const metadata = buildMetadata({
  title: "Phone Farm Box Buyer Guide - MOQ, Warranty & Export",
  description:
    "How to choose a phone farm box supplier: MOQ, lead time, packing size, gross weight, voltage, warranty, USDT payment, export shipping and remote setup. Guangzhou factory checklist.",
  path: "/phone-farm-buyer-guide",
  keywords: [
    "phone farm box buyer guide",
    "how to choose phone farm box supplier",
    "phone farm equipment",
    "buy phone farm box",
    "phone farm hardware supplier",
  ],
});

export default function PhoneFarmBuyerGuidePage() {
  const guide = getSeoGuide("phone-farm-buyer-guide");
  if (!guide) notFound();
  return <SeoGuidePageView guide={guide} path="/phone-farm-buyer-guide" />;
}
