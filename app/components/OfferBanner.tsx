"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";

const OFFER_DURATION_MS = 24 * 60 * 60 * 1000; // 24 hours
const STORAGE_KEY = "iptv_offer_end";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function getEndTime(): number {
  if (typeof window === "undefined") return Date.now() + OFFER_DURATION_MS;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    const end = parseInt(stored, 10);
    if (end > Date.now()) return end;
  }
  const end = Date.now() + OFFER_DURATION_MS;
  localStorage.setItem(STORAGE_KEY, String(end));
  return end;
}

export default function OfferBanner() {
  const [timeLeft, setTimeLeft] = useState({ h: 23, m: 59, s: 59 });
  const [dismissed, setDismissed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const end = getEndTime();

    const tick = () => {
      const diff = end - Date.now();
      if (diff <= 0) {
        setDismissed(true);
        return;
      }
      const totalSeconds = Math.floor(diff / 1000);
      const h = Math.floor(totalSeconds / 3600);
      const m = Math.floor((totalSeconds % 3600) / 60);
      const s = totalSeconds % 60;
      setTimeLeft({ h, m, s });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  function dismiss() {
    setDismissed(true);
  }

  if (!mounted || dismissed) return null;

  return (
    <div className="fixed top-0 inset-x-0 z-[60] bg-[linear-gradient(90deg,#6d28d9,#c026d3,#7c3aed,#6d28d9)] bg-[length:300%_100%] animate-[gradient-pan_8s_ease_infinite] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-center gap-3 flex-wrap text-center">
        {/* Badge */}
        <span className="bg-black/30 text-white text-[11px] font-black px-2.5 py-1 rounded-full tracking-widest uppercase">
          Limited Offer
        </span>

        <p className="text-sm font-bold">
          🔥 <span className="text-yellow-300">-20% OFF</span> all plans — offer ends in:
        </p>

        {/* Countdown */}
        <div className="flex items-center gap-1 font-mono">
          {[
            { value: timeLeft.h, label: "H" },
            { value: timeLeft.m, label: "M" },
            { value: timeLeft.s, label: "S" },
          ].map(({ value, label }, i) => (
            <span key={label} className="flex items-center gap-1">
              {i > 0 && <span className="font-black text-white/60 -mt-0.5">:</span>}
              <span className="bg-black/25 rounded px-1.5 py-0.5 text-sm font-black tabular-nums min-w-[2rem] text-center">
                {pad(value)}
                <span className="text-[9px] font-bold block leading-none opacity-70">{label}</span>
              </span>
            </span>
          ))}
        </div>

        <Link
          href="/#pricing"
          className="bg-white text-brand-700 hover:bg-white/90 text-xs font-bold px-4 py-1.5 rounded-full transition-colors whitespace-nowrap"
        >
          Claim Now
        </Link>

        <button
          onClick={dismiss}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
          aria-label="Dismiss"
        >
          <X size={15} />
        </button>
      </div>
    </div>
  );
}
