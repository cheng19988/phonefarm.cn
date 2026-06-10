import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header, Footer } from "@/components/layout";
import { MobileNav } from "@/components/mobile-nav";
import { JsonLd } from "@/components/shared";
import { organizationJsonLd } from "@/lib/seo";
import { SITE } from "@/lib/config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.nameEn} | ${SITE.taglineEn}`,
    template: `%s | ${SITE.nameEn}`,
  },
  description: SITE.descriptionEn,
  metadataBase: new URL(SITE.url),
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="site-shell antialiased pb-16 md:pb-0">
        <JsonLd data={organizationJsonLd()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileNav />
      </body>
    </html>
  );
}
