import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import { Header, Footer } from "@/components/layout";
import { FloatingContact } from "@/components/floating-contact";
import { JsonLd } from "@/components/shared";
import { globalJsonLdBundle } from "@/lib/seo";
import { SITE } from "@/lib/config";
import { IMAGES } from "@/lib/images";
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
    default: "Phone Farm Box Manufacturer — Control Multiple Devices",
    template: "%s",
  },
  description: SITE.descriptionEn,
  applicationName: SITE.serpSiteName,
  keywords: [
    "phone farm box manufacturer",
    "box phone farm",
    "multi-device control hardware",
    "Android motherboard box",
    "phone farming",
    "Guangzhou phone farm",
    "手机农场",
    "广州手机农场",
    "手机农场硬件",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  metadataBase: new URL(SITE.url),
  alternates: {
    types: {
      "text/plain": [
        { url: "/llms.txt", title: "LLM site summary" },
        { url: "/llms-full.txt", title: "LLM full knowledge base" },
        { url: "/ai.txt", title: "AI discovery pointer" },
      ],
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE.serpSiteName,
    images: [{ url: `${SITE.url}${IMAGES.motherboardBox.hero}`, width: 1600, height: 900, alt: SITE.nameEn }],
  },
  twitter: {
    card: "summary_large_image",
    images: [`${SITE.url}${IMAGES.motherboardBox.hero}`],
  },
  icons: {
    icon: [
      { url: `/favicon-48.png?v=${SITE.iconVersion}`, sizes: "48x48", type: "image/png" },
      { url: `/icon.svg?v=${SITE.iconVersion}`, type: "image/svg+xml" },
    ],
    apple: [{ url: `/apple-icon.svg?v=${SITE.iconVersion}`, type: "image/svg+xml" }],
    shortcut: [`/favicon-48.png?v=${SITE.iconVersion}`],
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headerStore = await headers();
  const lang = headerStore.get("x-site-lang") === "zh-CN" ? "zh-CN" : "en";

  return (
    <html lang={lang} className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="site-shell antialiased">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <JsonLd data={globalJsonLdBundle()} />
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
