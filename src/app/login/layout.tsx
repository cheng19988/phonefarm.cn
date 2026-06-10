import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Account Login",
  description: "Sign in to view phone farm hardware orders and payment status.",
  path: "/login",
  noIndex: true,
});

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return children;
}
