import { SeoGuidePageView } from "@/components/seo-guide-page";
import { getSeoGuide } from "@/data/seo-guides";
import { buildMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

export const metadata = buildMetadata({
  title: "Android Phone Farm & Device Farm Hardware",
  description:
    "Android phone farm explained: mobile device farm hardware, motherboard boxes, app QA labs, vs cloud emulators. Guangzhou phone farm box manufacturer RFQ.",
  path: "/android-device-farm",
  keywords: [
    "Android phone farm",
    "mobile device farm",
    "device farm hardware",
    "Android device farm hardware",
    "phone farm equipment",
  ],
});

export default function AndroidDeviceFarmPage() {
  const guide = getSeoGuide("android-device-farm");
  if (!guide) notFound();
  return <SeoGuidePageView guide={guide} path="/android-device-farm" />;
}
