import { Star, Quote } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./motion/Reveal";

const reviews = [
  {
    name: "James T.",
    location: "Manchester, UK",
    avatar: "JT",
    rating: 5,
    title: "Finally ditched satellite TV — best decision ever",
    body: "Paying £70/month for satellite TV was painful. I switched to Multivision IPTV and I get more channels, better picture quality, and it costs me less than a tenner a month. Zero buffering in 6 months of use.",
    plan: "12-Month Plan",
  },
  {
    name: "Sarah M.",
    location: "London, UK",
    avatar: "SM",
    rating: 5,
    title: "Setup was dead easy, works great on my Firestick",
    body: "I was worried it'd be complicated but the setup guide was clear and I was watching within 10 minutes. The sports channels are incredible — got every sports channel I wanted.",
    plan: "3-Month Plan",
  },
  {
    name: "David K.",
    location: "Birmingham, UK",
    avatar: "DK",
    rating: 5,
    title: "Been with them 2 years, never looked back",
    body: "I've tried a few IPTV services over the years and this is by far the most reliable. Customer support actually responds quickly. The catch-up TV feature alone is worth the price.",
    plan: "12-Month Plan",
  },
  {
    name: "Lisa R.",
    location: "Leeds, UK",
    avatar: "LR",
    rating: 5,
    title: "Perfect for the whole family",
    body: "5 connections means everyone in the house can watch something different at the same time. Kids have their channels, husband has sports, I have my soaps. Brilliant service.",
    plan: "12-Month Plan",
  },
  {
    name: "Ahmed H.",
    location: "Bradford, UK",
    avatar: "AH",
    rating: 5,
    title: "International channels are excellent",
    body: "I watch a lot of Arabic and Asian channels alongside UK ones. The international selection is massive. Picture quality is consistently sharp even on the foreign channels.",
    plan: "3-Month Plan",
  },
  {
    name: "Caroline W.",
    location: "Bristol, UK",
    avatar: "CW",
    rating: 4,
    title: "Great service, WhatsApp support is a huge plus",
    body: "Contacted them via WhatsApp at 11pm with a setup question and got a reply within minutes. That level of support is rare. The service itself has been rock solid for 4 months.",
    plan: "1-Month Plan",
  },
];

type Review = (typeof reviews)[number];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? "fill-yellow-400 text-yellow-400" : "text-zinc-600"}
        />
      ))}
    </div>
  );
}

const avatarColors: Record<string, string> = {
  JT: "from-blue-500 to-brand-500",
  SM: "from-pink-500 to-accent",
  DK: "from-brand-400 to-brand-700",
  LR: "from-emerald-500 to-live",
  AH: "from-orange-500 to-pink-500",
  CW: "from-teal-400 to-blue-600",
};

function ReviewCard({ r }: { r: Review }) {
  return (
    <figure className="group relative w-[320px] sm:w-[380px] flex-shrink-0 rounded-2xl border border-white/[0.07] bg-surface/80 p-6 hover:border-brand-500/40 transition-colors">
      <Quote aria-hidden size={36} className="absolute top-5 right-5 text-brand-500/15 group-hover:text-brand-500/30 transition-colors" />
      <div className="flex items-center gap-3 mb-4">
        <div
          className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarColors[r.avatar] ?? "from-brand-500 to-accent"} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
        >
          {r.avatar}
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{r.name}</p>
          <p className="text-zinc-500 text-xs">{r.location}</p>
        </div>
      </div>
      <Stars count={r.rating} />
      <h4 className="text-white font-semibold text-sm mt-3 mb-2">{r.title}</h4>
      <blockquote className="text-zinc-400 text-sm leading-relaxed">{r.body}</blockquote>
      <span className="inline-block mt-4 bg-brand-500/15 text-brand-300 text-xs px-2.5 py-1 rounded-full font-medium">
        {r.plan}
      </span>
    </figure>
  );
}

function ReviewRow({ items, reverse = false }: { items: Review[]; reverse?: boolean }) {
  return (
    <div className="mask-fade-x overflow-hidden pause-on-hover">
      <div className={`flex w-max gap-5 items-start ${reverse ? "animate-marquee-reverse" : "animate-marquee"} [animation-duration:60s]`}>
        {[...items, ...items].map((r, i) => (
          <div key={i} aria-hidden={i >= items.length}>
            <ReviewCard r={r} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const totalReviews = 2847;
  const avgRating = 4.9;

  return (
    <section id="reviews" className="relative bg-ink py-28 overflow-hidden">
      <div aria-hidden className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-500/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Customer Reviews"
          title={<>What our <span className="text-gradient">customers</span> say</>}
        />

        <Reveal className="flex justify-center -mt-6 mb-14">
          <div className="inline-flex items-center gap-5 bg-surface/80 border border-white/10 rounded-2xl px-8 py-5 backdrop-blur">
            <span className="text-5xl font-bold text-white tracking-tight">{avgRating}</span>
            <div className="text-left">
              <Stars count={5} />
              <p className="text-zinc-400 text-sm mt-1.5">
                Based on <span className="text-white font-medium">{totalReviews.toLocaleString()}</span> verified reviews
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="relative flex flex-col gap-5">
        <ReviewRow items={reviews.slice(0, 3).concat(reviews.slice(0, 3))} />
        <ReviewRow items={reviews.slice(3).concat(reviews.slice(3))} reverse />
      </div>
    </section>
  );
}
