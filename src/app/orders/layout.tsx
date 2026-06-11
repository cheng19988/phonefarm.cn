import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Order",
  description: "Order status and payment.",
  noIndex: true,
});

export default function OrdersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
