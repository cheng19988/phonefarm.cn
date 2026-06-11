import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header, Footer } from "@/components/layout";
import { FloatingContact } from "@/components/floating-contact";
import { JsonLd } from "@/components/shared";
import { organizationJsonLd } from "@/lib/seo";
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
    default: `${SITE.nameEn} | ${SITE.taglineEn}`,
    template: `%s | ${SITE.nameEn}`,
  },
  description: SITE.descriptionEn,
  metadataBase: new URL(SITE.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE.nameEn,
    images: [{ url: `${SITE.url}${IMAGES.motherboardBox.hero}`, width: 1600, height: 900, alt: SITE.nameEn }],
  },
  twitter: {
    card: "summary_large_image",
    images: [`${SITE.url}${IMAGES.motherboardBox.hero}`],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
  },
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
