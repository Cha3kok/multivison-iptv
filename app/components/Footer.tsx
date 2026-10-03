import Link from "next/link";
import { Tv, Mail } from "lucide-react";

const links: Record<string, { label: string; href: string }[]> = {
  Product: [
    { label: "Product Overview", href: "/product" },
    { label: "Features", href: "/#features" },
    { label: "Channels", href: "#channels" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Setup Guide", href: "/setup" },
    { label: "Free Trial", href: "/#pricing" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "FAQ", href: "/#faq" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "DMCA Policy", href: "/dmca" },
  ],
};

const WHATSAPP = "https://wa.me/212710141872";
const EMAIL = "multivisonsupport@gmail.com";

export default function Footer() {
  return (
    <footer className="relative bg-night border-t border-white/5 overflow-hidden">
      <div aria-hidden className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-brand-500/10 blur-[140px] rounded-full" />

      {/* Closing call to action */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="relative overflow-hidden rounded-3xl bg-brand-gradient px-8 py-12 sm:px-14 sm:py-14 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-[0_30px_80px_-30px_rgba(124,58,237,0.8)]">
          <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />
          <div aria-hidden className="absolute -right-20 -top-20 w-80 h-80 bg-live/30 blur-[90px] rounded-full animate-aurora" />
          <div className="relative text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
              Ready to cut the cable?
            </h2>
            <p className="text-white/80 text-base sm:text-lg">
              Try 50,000+ channels free for 3 hours. No card, no contract.
            </p>
          </div>
          <a
            href="https://wa.me/212710141872?text=multivision-iptv.com%20-%20Free%203-Hour%20Trial"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex-shrink-0 bg-white text-brand-700 font-bold px-8 py-4 rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all"
          >
            Start Free Trial →
          </a>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 text-white font-bold text-lg tracking-tight mb-4">
              <span className="w-9 h-9 rounded-xl bg-brand-gradient flex items-center justify-center shadow-lg shadow-brand-500/40">
                <Tv className="text-white" size={18} />
              </span>
              <span>Multivision<span className="text-gradient">IPTV</span></span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Premium IPTV service for the USA. 50,000+ live channels, 4K quality and no cable contract.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://wa.me/212710141872?text=multivision-iptv.com%20-%20Free%203-Hour%20Trial"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit bg-brand-500 hover:bg-brand-600 text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors"
              >
                Free Trial
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white text-xs transition-colors"
              >
                WhatsApp: +212 710-141872
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-1.5 text-zinc-400 hover:text-white text-xs transition-colors"
              >
                <Mail size={12} />
                {EMAIL}
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-white font-semibold text-sm mb-4">{group}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-zinc-400 hover:text-white text-sm transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-xs">
            &copy; {new Date().getFullYear()} MultivisionIPTV. All rights reserved.
          </p>
          <p className="text-zinc-600 text-xs">
            For entertainment purposes. Please comply with local laws.
          </p>
        </div>
      </div>
    </footer>
  );
}
