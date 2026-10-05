"use client";

import { useState } from "react";
import { Check, Zap, Shield, Star, Rocket, Crown } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./motion/Reveal";

type DeviceCount = 1 | 2 | 3 | 4;

const deviceOptions: DeviceCount[] = [1, 2, 3, 4];

const plans = [
  {
    id: "1month",
    icon: Zap,
    name: "1 Month Plan",
    subtitle: "Try our Premium IPTV Service",
    prices: { 1: 19.99, 2: 29.99, 3: 39.99, 4: 49.99 },
    period: { 1: "/month", 2: "/month", 3: "/month", 4: "/month" },
    highlight: false,
    badge: null,
    features: [
      "4K / UHD Streaming Quality",
      "21,000+ Live Channels",
      "65,000+ VOD Movies & Series",
      "All Sports & PPV Events",
      "Anti-Freeze Technology",
      "24/7 Customer Support",
    ],
  },
  {
    id: "3months",
    icon: Shield,
    name: "3 Months Plan",
    subtitle: "Quarterly Entertainment Hub",
    prices: { 1: 39.99, 2: 59.99, 3: 74.99, 4: 89.99 },
    period: { 1: "/3 months", 2: "/3 months", 3: "/3 months", 4: "/3 months" },
    highlight: false,
    badge: null,
    features: [
      "Everything in Monthly Plan",
      "Electronic Program Guide (EPG)",
      "Instant Activation",
      "Compatible with All Devices",
      "No Hidden Fees",
      "Priority Support",
    ],
  },
  {
    id: "12months",
    icon: Star,
    name: "12 Months Plan",
    subtitle: "Best for Long-term Viewing",
    prices: { 1: 79.99, 2: 119.99, 3: 149.99, 4: 179.99 },
    period: { 1: "/year", 2: "/year", 3: "/year", 4: "/year" },
    highlight: true,
    badge: "BEST SELLER",
    features: [
      "Everything in 6 Months Plan",
      "Best Value — Save Over 50%",
      "Anti-Freeze V10 Engine",
      "Full VOD Library Access",
      "Catch-Up TV (7 Days Replay)",
      "VIP Dedicated Support",
    ],
  },
  {
    id: "6months",
    icon: Rocket,
    name: "6 Months Plan",
    subtitle: "Most Balanced Choice",
    prices: { 1: 55.99, 2: 84.99, 3: 109.99, 4: 134.99 },
    period: { 1: "/6 months", 2: "/6 months", 3: "/6 months", 4: "/6 months" },
    highlight: false,
    badge: null,
    features: [
      "Everything in 3 Months Plan",
      "Premium Server Stability",
      "Multi-Language Subtitles",
      "All PPV & Boxing Events",
      "Zero Buffer Guarantee",
      "Instant Setup Guide",
    ],
  },
  {
    id: "24months",
    icon: Crown,
    name: "24 Months Plan",
    subtitle: "Ultimate Family Savings",
    prices: { 1: 129.99, 2: 189.99, 3: 239.99, 4: 289.99 },
    period: { 1: "/2 years", 2: "/2 years", 3: "/2 years", 4: "/2 years" },
    highlight: false,
    badge: null,
    features: [
      "Everything in 12 Months Plan",
      "Maximum Savings Guarantee",
      "Premium VOD First Access",
      "Family Sharing Mode",
      "Custom Channel Lists",
      "Lifetime Update Access",
    ],
  },
];

export default function Pricing() {
  const [devices, setDevices] = useState<DeviceCount>(1);
  const selected = deviceOptions.indexOf(devices);

  return (
    <section id="pricing" className="relative bg-ink py-28 overflow-hidden">
      <div aria-hidden className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-brand-500/15 blur-[140px] rounded-full" />
      <div aria-hidden className="absolute inset-0 bg-grid opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title={<>Simple, <span className="text-gradient">honest</span> pricing</>}
          subtitle="No hidden fees. No contracts. Cancel anytime. Free 3-hour trial available."
        />

        {/* Device selector with sliding pill */}
        <Reveal className="flex flex-col items-center mb-14">
          <p className="text-zinc-400 text-sm mb-4">How many devices do you need?</p>
          <div className="relative grid grid-cols-4 bg-surface border border-white/10 rounded-full p-1">
            <span
              aria-hidden
              className="absolute top-1 bottom-1 left-1 w-[calc((100%-0.5rem)/4)] rounded-full bg-brand-gradient shadow-lg shadow-brand-500/40 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ transform: `translateX(${selected * 100}%)` }}
            />
            {deviceOptions.map((d) => (
              <button
                key={d}
                onClick={() => setDevices(d)}
                aria-pressed={devices === d}
                className={`relative z-10 px-3 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors ${
                  devices === d ? "text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                {d} {d === 1 ? "Device" : "Devices"}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Plans grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-stretch">
          {plans.map((plan, i) => {
            const price = plan.prices[devices];
            const period = plan.period[devices];
            const Icon = plan.icon;

            return (
              <Reveal key={plan.id} delay={i * 80} className={plan.highlight ? "lg:-my-4 relative z-10" : ""}>
                <div
                  className={`group relative flex flex-col h-full rounded-2xl transition-all duration-500 hover:-translate-y-1.5 ${
                    plan.highlight
                      ? "border-animated pb-8 pt-10 px-6 shadow-[0_0_60px_-10px_rgba(124,58,237,0.6)]"
                      : "bg-surface/80 border border-white/10 hover:border-brand-500/40 p-6 hover:shadow-[0_20px_50px_-20px_rgba(124,58,237,0.5)]"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-gradient text-white text-[11px] font-bold px-4 py-1.5 rounded-full tracking-wider whitespace-nowrap shadow-lg shadow-brand-500/40">
                      ★ {plan.badge}
                    </div>
                  )}

                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-6deg] ${
                      plan.highlight ? "bg-brand-gradient" : "bg-white/5 border border-white/10"
                    }`}
                  >
                    <Icon size={18} className={plan.highlight ? "text-white" : "text-brand-400"} />
                  </div>

                  <p className="text-white font-bold text-base leading-tight mb-1">{plan.name}</p>
                  <p className="text-zinc-400 text-xs mb-5 leading-snug">{plan.subtitle}</p>

                  <div className="mb-6 overflow-hidden">
                    <span
                      key={`${plan.id}-${devices}`}
                      className={`fade-up inline-block text-4xl font-bold tracking-tight ${plan.highlight ? "text-gradient" : "text-white"}`}
                    >
                      ${price.toFixed(2)}
                    </span>
                    <span className="text-zinc-400 text-sm ml-1">{period}</span>
                  </div>

                  <ul className="space-y-2.5 mb-7 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-zinc-300">
                        <span className="mt-0.5 w-4 h-4 rounded-full bg-brand-500/20 flex items-center justify-center flex-shrink-0">
                          <Check size={10} className="text-brand-300" strokeWidth={3} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/212710141872?text=${encodeURIComponent(
                      `multivision-iptv.com - ${plan.name} / ${devices} ${devices === 1 ? "Device" : "Devices"} - $${price.toFixed(2)}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative overflow-hidden block text-center font-semibold py-3 rounded-full text-sm transition-all ${
                      plan.highlight
                        ? "bg-brand-gradient text-white shadow-lg shadow-brand-500/40 hover:shadow-brand-500/70"
                        : "bg-white/[0.06] border border-white/10 text-zinc-200 hover:bg-brand-500 hover:border-brand-500 hover:text-white"
                    }`}
                  >
                    {plan.highlight && (
                      <span className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                    )}
                    <span className="relative">Get Started</span>
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <p className="text-center text-zinc-400 text-sm mt-12">
            All plans include a free 3-hour trial. Contact us on WhatsApp — no credit card required.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
