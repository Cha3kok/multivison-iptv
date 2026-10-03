"use client";

import { useState } from "react";
import { Plus, MessageCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./motion/Reveal";
import { homeFaqs as faqs } from "../lib/faqs";

function FAQItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div
      className={`rounded-2xl border transition-all duration-300 ${
        open ? "border-brand-500/40 bg-surface shadow-[0_10px_40px_-20px_rgba(124,58,237,0.6)]" : "border-white/[0.07] bg-surface/60 hover:border-white/15"
      }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
      >
        <span className="text-white font-medium text-sm sm:text-base">{q}</span>
        <span
          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
            open ? "bg-brand-gradient rotate-45" : "bg-white/5 border border-white/10"
          }`}
        >
          <Plus size={16} className={open ? "text-white" : "text-brand-300"} />
        </span>
      </button>
      <div className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <p className="text-zinc-400 text-sm leading-relaxed px-6 pb-6">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-night py-28 overflow-hidden">
      <div aria-hidden className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title={<>IPTV USA: <span className="text-gradient">your questions answered</span></>}
          subtitle="Can't find the answer? Chat with us 24/7 on WhatsApp."
        />

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 60}>
              <FAQItem q={faq.q} a={faq.a} open={open === i} onToggle={() => setOpen(open === i ? null : i)} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <a
            href="https://wa.me/212710141872?text=multivision-iptv.com%20-%20I%20have%20a%20question"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-brand-300 hover:text-white transition-colors"
          >
            <MessageCircle size={16} />
            Still have questions? Message us on WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
