import { Tv2, Wifi, MonitorPlay, Globe, Clock, HeadphonesIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./motion/Reveal";
import Spotlight from "./motion/Spotlight";

const features = [
  {
    icon: Tv2,
    title: "50,000+ Live Channels",
    description:
      "American entertainment, sports, news, kids and international channels — a massive library covering every genre and region.",
  },
  {
    icon: MonitorPlay,
    title: "4K Ultra HD Streaming",
    description:
      "Crystal-clear picture quality with Dolby Audio support. Watch like you're in the studio.",
  },
  {
    icon: Wifi,
    title: "Zero Buffering",
    description:
      "Our optimized CDN network ensures smooth, uninterrupted streaming even during peak hours.",
  },
  {
    icon: Globe,
    title: "Works Everywhere",
    description:
      "Compatible with Smart TV, Firestick, Android, iOS, MAG, and any IPTV player. Any device, any time.",
  },
  {
    icon: Clock,
    title: "7-Day Catch-Up TV",
    description:
      "Missed your favorite show? Replay anything from the last 7 days across supported channels.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description:
      "Round-the-clock customer support via live chat and WhatsApp. We're always here when you need us.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-night py-28 overflow-hidden">
      <div aria-hidden className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
      <div aria-hidden className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-brand-500/10 blur-[100px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title={<>Everything you need, <span className="text-gradient">nothing you don&apos;t</span></>}
          subtitle="Built for American households that are done overpaying for cable. No contracts, no hidden fees, no equipment."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 90}>
              <Spotlight className="group h-full rounded-2xl border border-white/[0.07] hover:border-brand-500/40 bg-surface/70 p-8 transition-all duration-500 hover:-translate-y-1">
                <div className="relative w-12 h-12 mb-6">
                  <div className="absolute inset-0 rounded-xl bg-brand-gradient opacity-20 group-hover:opacity-100 blur-md transition-opacity duration-500" />
                  <div className="relative w-12 h-12 rounded-xl bg-surface-2 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-[-6deg] transition-transform duration-500">
                    <Icon size={22} className="text-brand-300 group-hover:text-white transition-colors" />
                  </div>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
