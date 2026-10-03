import SectionHeading from "./SectionHeading";
import Reveal from "./motion/Reveal";
import Spotlight from "./motion/Spotlight";

const categories = [
  { emoji: "🇺🇸", name: "US Channels", count: "800+" },
  { emoji: "🏆", name: "Sports", count: "300+" },
  { emoji: "🎬", name: "Movies & Series", count: "200,000+" },
  { emoji: "📰", name: "News", count: "200+" },
  { emoji: "👶", name: "Kids", count: "150+" },
  { emoji: "🌍", name: "International", count: "5,000+" },
  { emoji: "🎵", name: "Music", count: "100+" },
  { emoji: "🕹️", name: "Gaming & eSports", count: "80+" },
];

const rowA = [
  "🇺🇸 United States", "🇨🇦 Canada", "🇲🇽 Mexico", "🇬🇧 United Kingdom", "🇮🇪 Ireland", "🇫🇷 France", "🇩🇪 Germany",
  "🇪🇸 Spain", "🇮🇹 Italy", "🇵🇹 Portugal", "🇳🇱 Netherlands", "🇵🇱 Poland", "🇹🇷 Turkey",
  "🇮🇳 India", "🇵🇰 Pakistan", "🇦🇪 Arabic", "🇳🇬 Africa",
];
const rowB = [
  "Pro Football", "College Football", "Basketball", "Baseball", "Hockey", "Soccer", "Boxing & MMA",
  "Motorsport", "Golf", "Movies in 4K", "TV Series", "Documentaries", "Kids & Family", "24/7 News",
  "Local News", "Reality TV", "Comedy", "Pay-Per-View Events",
];

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="mask-fade-x overflow-hidden pause-on-hover">
      <div className={`flex w-max gap-3 ${reverse ? "animate-marquee-reverse" : "animate-marquee"} [animation-duration:55s]`}>
        {[...items, ...items].map((name, i) => (
          <span
            key={i}
            aria-hidden={i >= items.length}
            className="whitespace-nowrap rounded-xl border border-white/10 bg-surface/80 px-5 py-3 text-sm font-medium text-zinc-300 hover:text-white hover:border-brand-400/50 hover:bg-brand-500/10 transition-colors"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Channels() {
  return (
    <section id="channels" className="relative bg-night py-28 overflow-hidden">
      <div aria-hidden className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
      <div aria-hidden className="absolute -left-40 bottom-0 w-[500px] h-[500px] bg-accent/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Channel Lineup"
          title={<><span className="text-gradient">50,000+</span> channels at your fingertips</>}
          subtitle="Every genre American viewers watch, plus thousands of international channels in Spanish and dozens of other languages."
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <Reveal key={cat.name} delay={(i % 4) * 80}>
              <Spotlight className="group h-full rounded-2xl border border-white/[0.07] hover:border-brand-500/40 bg-surface/70 p-6 text-center transition-all duration-500 hover:-translate-y-1">
                <div className="text-4xl mb-3 transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-6">
                  {cat.emoji}
                </div>
                <div className="text-white font-semibold text-sm mb-1">{cat.name}</div>
                <div className="text-gradient text-sm font-bold">{cat.count}</div>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="relative mt-16 flex flex-col gap-3">
        <MarqueeRow items={rowA} />
        <MarqueeRow items={rowB} reverse />
      </div>
    </section>
  );
}
