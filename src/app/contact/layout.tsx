import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/config";

export const metadata = buildMetadata({
  title: "Contact — Request a Quote",
  description: `Contact ${SITE.nameEn} sales for phone farm box quotes — motherboard clusters, 32PCS chassis, OEM cabinets and bulk deployment.`,
  path: "/contact",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
