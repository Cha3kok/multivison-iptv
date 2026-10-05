import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { SITE_URL } from "./lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "IPTV USA — 50,000+ Live Channels in 4K | Multivision IPTV",
    template: "%s — Multivision IPTV",
  },
  description:
    "IPTV USA from $5.42/month: 50,000+ live channels, sports and 4K movies on any device. No cable box, no contract. Try Multivision IPTV free for 3 hours.",
  keywords: [
    "IPTV USA",
    "IPTV service USA",
    "best IPTV USA",
    "IPTV subscription USA",
    "US IPTV provider",
    "IPTV for Firestick",
    "cable TV alternative",
    "4K IPTV",
    "Multivision IPTV",
  ],
  authors: [{ name: "Multivision IPTV" }],
  creator: "Multivision IPTV",
  icons: {
    icon: "/favicon.svg",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Multivision IPTV",
    title: "IPTV USA — 50,000+ Live Channels in 4K | Multivision IPTV",
    description:
      "Live TV, sports and 4K movies on any device, from $5.42/month. No cable, no contract. Free 3-hour trial.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "IPTV USA — live TV without the cable bill, from $5.42/month" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV USA — 50,000+ Live Channels in 4K | Multivision IPTV",
    description:
      "Live TV, sports and 4K movies on any device, from $5.42/month. No cable, no contract. Free 3-hour trial.",
    images: ["/og-image.png"],
  },
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-US"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
