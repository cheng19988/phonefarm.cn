import { SeoGuidePageView } from "@/components/seo-guide-page";
import { getSeoGuide } from "@/data/seo-guides";
import { buildMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

export const metadata = buildMetadata({
  title: "Authentic Phone Farm Hardware – Quality Guide",
  description:
    "Verify genuine phone farm box hardware: FRP-unlocked boards, factory QC, dedicated workbench assembly and tips to avoid counterfeit phone farm suppliers.",
  path: "/quality-assurance",
});

export default function QualityAssurancePage() {
  const guide = getSeoGuide("quality-assurance");
  if (!guide) notFound();
  return <SeoGuidePageView guide={guide} />;
}
