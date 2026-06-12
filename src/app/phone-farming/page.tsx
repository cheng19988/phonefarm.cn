import { SeoGuidePageView } from "@/components/seo-guide-page";
import { getSeoGuide } from "@/data/seo-guides";
import { buildMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

export const metadata = buildMetadata({
  title: "Phone Farming – Multi-Device Hardware Guide",
  description:
    "Phone farming with box phone farm hardware: software testing, multi-device automation, USB/OTG modes and why physical device farms outperform cloud emulators.",
  path: "/phone-farming",
});

export default function PhoneFarmingPage() {
  const guide = getSeoGuide("phone-farming");
  if (!guide) notFound();
  return <SeoGuidePageView guide={guide} />;
}
