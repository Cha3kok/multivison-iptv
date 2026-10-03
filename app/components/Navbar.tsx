"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Tv } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "Product", href: "/product" },
  { label: "Channels", href: "/#channels" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Setup", href: "/setup" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 mt-[42px] transition-all duration-300 ${
        scrolled || open
          ? "bg-ink/80 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.8)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5 text-white font-bold text-lg tracking-tight">
          <span className="w-9 h-9 rounded-xl bg-brand-gradient flex items-center justify-center shadow-lg shadow-brand-500/40 group-hover:rotate-[-8deg] group-hover:scale-105 transition-transform">
            <Tv className="text-white" size={18} />
          </span>
          <span>
            Multivision<span className="text-gradient">IPTV</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative text-sm text-zinc-400 hover:text-white px-3 py-2 rounded-full hover:bg-white/5 transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/#pricing" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Sign In
          </Link>
          <Link
            href="/#pricing"
            className="bg-brand-gradient text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-[0_6px_24px_-8px_rgba(124,58,237,0.9)] hover:shadow-[0_6px_28px_-4px_rgba(192,38,211,0.9)] hover:-translate-y-px transition-all"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden grid transition-all duration-300 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-white/10 px-4 pb-6 pt-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg px-3 py-2.5 text-sm transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#pricing"
              onClick={() => setOpen(false)}
              className="mt-3 bg-brand-gradient text-white text-sm font-semibold px-4 py-3 rounded-full text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
