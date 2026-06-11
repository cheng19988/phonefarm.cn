import { SeoGuidePageView } from "@/components/seo-guide-page";
import { getSeoGuide } from "@/data/seo-guides";
import { buildMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

export const metadata = buildMetadata({
  title: "Mobile Phone Farming – Requirements & Hardware",
  description:
    "How mobile phone farming works: requirements, group control software, motherboard boxes, phone farm chassis and router planning for OTG/LAN scale-up.",
  path: "/mobile-phone-farming",
});

export default function MobilePhoneFarmingPage() {
  const guide = getSeoGuide("mobile-phone-farming");
  if (!guide) notFound();
  return <SeoGuidePageView guide={guide} />;
}
