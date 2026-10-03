import { CreditCard, Download, Tv2, MessageCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./motion/Reveal";

const steps = [
  {
    number: "01",
    icon: CreditCard,
    title: "Choose Your Plan",
    description:
      "Pick a subscription that suits you — monthly, quarterly, or annual. All plans include a free 3-hour trial. No credit card needed for the trial.",
    detail: "Instant activation after payment",
  },
  {
    number: "02",
    icon: Download,
    title: "Install an IPTV App",
    description:
      "Download any free IPTV player on your device — TiviMate, IPTV Smarters, or GSE IPTV. We support all major apps across all platforms.",
    detail: "Step-by-step guides provided for each device",
  },
  {
    number: "03",
    icon: Tv2,
    title: "Start Watching",
    description:
      "Enter your M3U URL or Xtream Codes login into the app. Your 50,000+ channels load instantly. Enjoy live TV, catch-up, and VOD.",
    detail: "Live in under 5 minutes",
  },
];

export default function Setup() {
  return (
    <section id="setup" className="relative bg-ink py-28 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Easy Setup"
          title={<>Up and running in <span className="text-gradient">3 simple steps</span></>}
          subtitle="No technical knowledge needed. If you can download an app, you can set this up."
        />

        <div className="relative">
          {/* Connector line with a traveling light (desktop) */}
          <div aria-hidden className="hidden lg:block absolute top-10 left-[16.66%] right-[16.66%] h-px bg-white/10 overflow-hidden">
            <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-brand-400 to-transparent animate-shimmer [animation-duration:3.5s]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {steps.map(({ number, icon: Icon, title, description, detail }, i) => (
              <Reveal key={number} delay={i * 150} className="relative flex flex-col items-center text-center">
                <div className="group relative mb-8">
                  <div className="absolute inset-0 rounded-2xl bg-brand-gradient blur-xl opacity-50 group-hover:opacity-90 transition-opacity" />
                  <div className="relative w-20 h-20 rounded-2xl bg-brand-gradient flex items-center justify-center shadow-xl rotate-3 group-hover:rotate-0 group-hover:scale-105 transition-transform duration-500">
                    <Icon size={30} className="text-white" />
                  </div>
                  <span className="absolute -top-3 -right-3 bg-ink border border-brand-500/50 text-brand-300 text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center">
                    {number}
                  </span>
                </div>

                <h3 className="text-white font-bold text-xl mb-3">{title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-5 max-w-xs">{description}</p>
                <span className="inline-flex items-center gap-1.5 bg-live/10 border border-live/25 text-live text-xs font-medium px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-live animate-pulse" />
                  {detail}
                </span>
              </Reveal>
            ))}
          </div>
        </div>

        {/* CTA strip */}
        <Reveal className="mt-20">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-brand-900/60 via-surface to-surface p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div aria-hidden className="absolute -left-20 -top-20 w-72 h-72 bg-brand-500/30 blur-[90px] rounded-full animate-aurora" />
            <div className="relative text-center sm:text-left">
              <p className="text-white font-semibold text-xl mb-1">Need help getting started?</p>
              <p className="text-zinc-400 text-sm">Our support team will set everything up for you — for free.</p>
            </div>
            <a
              href="https://wa.me/212710141872?text=Hi%2C%20I%20need%20help%20setting%20up%20my%20IPTV"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex-shrink-0 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-6 py-3.5 rounded-full text-sm shadow-lg shadow-green-500/25 hover:-translate-y-0.5 transition-all"
            >
              <MessageCircle size={16} />
              Get Free Setup Help
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
