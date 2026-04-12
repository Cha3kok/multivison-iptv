"use client";

import { useState } from "react";
import { Check, Zap, Shield, Star, Rocket, Crown } from "lucide-react";

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

  return (
    <section id="pricing" className="bg-[#0d0d0d] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Pricing
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Simple, honest pricing
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            No hidden fees. No contracts. Cancel anytime. Free 3-hour trial available.
          </p>
        </div>

        {/* Device selector */}
        <div className="flex flex-col items-center mb-12">
          <p className="text-zinc-400 text-sm mb-4">How many devices do you need?</p>
          <div className="inline-flex bg-[#1a1a1a] border border-white/10 rounded-full p-1 gap-1">
            {deviceOptions.map((d) => (
              <button
                key={d}
                onClick={() => setDevices(d)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  devices === d
                    ? "bg-amber-500 text-white shadow"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {d} {d === 1 ? "Device" : "Devices"}
              </button>
            ))}
          </div>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
          {plans.map((plan) => {
            const price = plan.prices[devices];
            const period = plan.period[devices];
            const Icon = plan.icon;

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col rounded-2xl border transition-all ${
                  plan.highlight
                    ? "bg-[#111111] border-amber-500/60 shadow-[0_0_40px_rgba(245,158,11,0.15)] pb-8 pt-10 px-6 lg:-mt-4"
                    : "bg-[#111111] border-white/10 hover:border-amber-500/30 p-6"
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-black text-[11px] font-bold px-4 py-1.5 rounded-full tracking-wider whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}

                {/* Icon */}
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-4 ${
                  plan.highlight ? "bg-amber-500/20" : "bg-white/5"
                }`}>
                  <Icon size={18} className="text-amber-400" />
                </div>

                {/* Plan name & subtitle */}
                <p className="text-white font-bold text-base leading-tight mb-1">{plan.name}</p>
                <p className="text-zinc-500 text-xs mb-5 leading-snug">{plan.subtitle}</p>

                {/* Price */}
                <div className="mb-5">
                  <span className="text-white text-3xl font-bold">${price.toFixed(2)}</span>
                  <span className="text-zinc-500 text-sm ml-1">{period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-2.5 mb-7 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-zinc-300">
                      <Check size={14} className="text-amber-400 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={`https://wa.me/212710141872?text=${encodeURIComponent(
                    `multivision-iptv.com - ${plan.name} / ${devices} ${devices === 1 ? "Device" : "Devices"} - $${price.toFixed(2)}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center font-semibold py-2.5 rounded-full text-sm transition-colors ${
                    plan.highlight
                      ? "bg-amber-500 hover:bg-amber-400 text-white"
                      : "bg-white/10 hover:bg-amber-500 hover:text-white text-zinc-300"
                  }`}
                >
                  Get Started
                </a>
              </div>
            );
          })}
        </div>

        <p className="text-center text-zinc-600 text-sm mt-10">
          All plans include a free 3-hour trial. Contact us on WhatsApp — no credit card required.
        </p>
      </div>
    </section>
  );
}
