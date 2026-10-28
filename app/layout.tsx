import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ScreenSplash } from "@/components/brand/ScreenSplash";
import { ChatWidget } from "@/components/chat/ChatWidget";
import { Analytics } from "@/components/consent/Analytics";
import { CookieConsent } from "@/components/consent/CookieConsent";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  adjustFontFallback: true,
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Retail POS for Independent Stores`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <SmoothScroll>
          <ScreenSplash />
          <SiteHeader />
          <main className="min-w-0 flex-1">{children}</main>
          <SiteFooter />
          <CookieConsent />
          <ChatWidget />
          <Analytics />
        </SmoothScroll>
      </body>
    </html>
  );
}
