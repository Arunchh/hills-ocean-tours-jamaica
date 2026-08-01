import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Fraunces, Outfit } from "next/font/google";
import { TawkWidget } from "@/components/layout/TawkWidget";
import { defaultLocale, htmlLang, isLocale } from "@/i18n/config";
import { getContent } from "@/i18n/index";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getContent("en").siteConfig.seo.siteUrl),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#009b3a",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const localeHeader = headersList.get("x-locale") ?? defaultLocale;
  const locale = isLocale(localeHeader) ? localeHeader : defaultLocale;

  return (
    <html
      lang={htmlLang[locale]}
      className={`${fraunces.variable} ${outfit.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased">
        {children}
        <TawkWidget />
      </body>
    </html>
  );
}
