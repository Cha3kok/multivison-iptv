import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SetupClient from "./SetupClient";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "IPTV Setup Guide for Every Device",
  description:
    "Set up IPTV in about 5 minutes on Firestick, Smart TV, Android TV, iPhone, iPad or MAG box. Step-by-step instructions plus free setup help 24/7.",
  alternates: { canonical: `${SITE_URL}/setup` },
  openGraph: {
    title: "IPTV Setup Guide for Every Device — Multivision IPTV",
    description: "Get your IPTV running in minutes on any device with step-by-step setup guides.",
    url: `${SITE_URL}/setup`,
    images: ["/og-image.png"],
  },
};

const deviceGuides = [
  {
    href: "/blog/best-iptv-apps-firestick",
    device: "Amazon Firestick & Fire TV",
    summary: "Turn on Developer Options, install an IPTV player with Downloader, and add your login.",
  },
  {
    href: "/blog/iptv-smart-tv-setup",
    device: "Samsung, LG, Sony, TCL & Hisense Smart TVs",
    summary: "Which IPTV app works on Tizen, webOS and Google TV, and what to do if your TV has none.",
  },
  {
    href: "/blog/iptv-android-tv-setup",
    device: "Android TV & Google TV",
    summary: "Install TiviMate or IPTV Smarters Pro from the Play Store and set up the program guide.",
  },
  {
    href: "/blog/iptv-on-iphone-ipad",
    device: "iPhone & iPad",
    summary: "The best App Store players, adding your login, and casting to your TV with AirPlay.",
  },
  {
    href: "/blog/mag-box-iptv-setup",
    device: "MAG box",
    summary: "Register your MAC address, add the portal URL, and fix 'STB blocked' errors.",
  },
  {
    href: "/blog/best-android-box-for-iptv",
    device: "Choosing an Android TV box",
    summary: "The specs that matter for smooth IPTV, and which type of box to buy.",
  },
  {
    href: "/blog/iptv-buffering-fix-guide",
    device: "Fixing buffering",
    summary: "Nine fixes that work on every device, from Ethernet and 5 GHz Wi-Fi to app cache.",
  },
];

export default function SetupPage() {
  return (
    <>
      <Navbar />
      <SetupClient />

      <section className="bg-night border-t border-white/5 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-3">Detailed setup guides by device</h2>
          <p className="text-zinc-400 mb-10 max-w-2xl">
            Setting up IPTV takes three steps on any device: install a free IPTV player app, enter the
            Xtream Codes login or M3U link from your provider, and wait for the channels to load. These
            guides walk through each device in detail.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {deviceGuides.map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="group rounded-2xl border border-white/[0.07] bg-surface/70 p-6 transition-all hover:-translate-y-0.5 hover:border-brand-500/40"
              >
                <h3 className="text-white font-semibold mb-1.5 flex items-center justify-between gap-3">
                  {g.device}
                  <ArrowRight size={16} className="text-brand-300 transition-transform group-hover:translate-x-1" />
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{g.summary}</p>
              </Link>
            ))}
          </div>
          <p className="text-zinc-400 text-sm mt-10">
            New to IPTV? Start with <Link href="/blog/what-is-iptv" className="text-brand-300 hover:text-white">what IPTV is and how it works</Link>,
            then compare <Link href="/product" className="text-brand-300 hover:text-white">plans and pricing</Link>.
          </p>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
