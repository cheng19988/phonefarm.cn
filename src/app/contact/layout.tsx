import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/config";

export const metadata = buildMetadata({
  title: "联系我们 - 获取报价",
  description: `联系广州手机农场销售团队。电话、WhatsApp、Telegram、邮箱咨询整机盒、主板盒及企业批量部署方案。`,
  path: "/contact",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
