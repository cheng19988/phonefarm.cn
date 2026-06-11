import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header, Footer } from "@/components/layout";
import { FloatingContact } from "@/components/floating-contact";
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
      <body className="site-shell antialiased">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <JsonLd data={organizationJsonLd()} />
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
