import { SeoGuidePageView } from "@/components/seo-guide-page";
import { getSeoGuide } from "@/data/seo-guides";
import { buildMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

export const metadata = buildMetadata({
  title: "Rackmount & 2U Phone Farm Rack Guide",
  description:
    "Rackmount phone farm cabinets, 2U-style device farm racks, OEM cooling and power planning for large Android phone farms. Guangzhou custom cabinet RFQ.",
  path: "/rackmount-phone-farm",
  keywords: [
    "rackmount phone farm",
    "2U phone farm rack",
    "phone farm rack",
    "custom phone farm box",
    "device farm hardware",
  ],
});

export default function RackmountPhoneFarmPage() {
  const guide = getSeoGuide("rackmount-phone-farm");
  if (!guide) notFound();
  return <SeoGuidePageView guide={guide} path="/rackmount-phone-farm" />;
}
