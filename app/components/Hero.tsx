import { Play, Shield, Zap, Sparkles, Radio, Trophy, Film, Tv2 } from "lucide-react";
import CountUp from "./motion/CountUp";

const TRIAL_URL = "https://wa.me/212710141872?text=multivision-iptv.com%20-%20Free%203-Hour%20Trial";

const stats = [
  { to: 50000, suffix: "+", label: "Live channels" },
  { to: 99.9, decimals: 1, suffix: "%", label: "Server uptime" },
  { to: 4, suffix: "K", label: "Ultra HD quality" },
  { to: 24, suffix: "/7", label: "Human support" },
];

const tiles = [
  { icon: Trophy, name: "Live Sports", tag: "LIVE", color: "from-brand-500/40 to-accent/30" },
  { icon: Film, name: "Movies 4K", tag: "NEW", color: "from-cyan-500/30 to-brand-500/30" },
  { icon: Tv2, name: "Entertainment", tag: "LIVE", color: "from-fuchsia-500/30 to-brand-500/30" },
];

const marquee = [
  "Pro Football", "College Football", "Basketball", "Baseball", "Hockey", "Soccer", "Boxing & MMA",
  "Motorsport", "Movies in 4K", "TV Series", "Documentaries", "Kids & Family", "24/7 News", "Music", "Reality TV", "Comedy",
  "International", "Catch-Up TV", "Pay-Per-View Events",
];

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as React.CSSProperties;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-ink overflow-hidden pt-36 pb-10">
      {/* Animated aurora background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-32 w-[640px] h-[640px] rounded-full bg-brand-500/30 blur-[120px] animate-aurora" />
        <div className="absolute top-20 -right-40 w-[560px] h-[560px] rounded-full bg-accent/20 blur-[120px] animate-aurora [animation-delay:-6s]" />
        <div className="absolute -bottom-40 left-1/3 w-[520px] h-[520px] rounded-full bg-live/15 blur-[120px] animate-aurora [animation-delay:-12s]" />
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.1fr_1fr] gap-14 items-center">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <div
            className="fade-up inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur text-zinc-200 text-xs font-medium pl-1.5 pr-4 py-1.5 rounded-full mb-8"
            style={delay(0)}
          >
            <span className="flex items-center gap-1.5 bg-live/15 text-live px-2.5 py-0.5 rounded-full font-semibold">
              <span className="relative flex w-1.5 h-1.5">
                <span className="absolute inset-0 rounded-full bg-live animate-ping" />
                <span className="relative w-1.5 h-1.5 rounded-full bg-live" />
              </span>
              LIVE
            </span>
            Streaming across all 50 states
          </div>

          <h1
            className="fade-up text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6 text-balance"
            style={delay(120)}
          >
            <span className="text-gradient">IPTV USA</span> — Live TV Without the Cable Bill
          </h1>

          <p
            className="fade-up text-lg sm:text-xl text-zinc-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed text-pretty"
            style={delay(240)}
          >
            Multivision IPTV streams 50,000+ live channels, sports and 200,000+ movies and series in
            4K to any device in the United States — from $5.42/month, with no contract and no cable box.
          </p>

          <div
            className="fade-up flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
            style={delay(360)}
          >
            <a
              href={TRIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-brand-gradient text-white font-semibold px-8 py-4 rounded-full text-base w-full sm:w-auto text-center shadow-[0_10px_40px_-10px_rgba(124,58,237,0.8)] hover:shadow-[0_10px_50px_-6px_rgba(192,38,211,0.8)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
              <span className="relative inline-flex items-center gap-2">
                <Sparkles size={18} />
                Start Free Trial
              </span>
            </a>
            <a
              href="#features"
              className="group flex items-center gap-3 text-zinc-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 backdrop-blur px-7 py-4 rounded-full text-base transition-all w-full sm:w-auto justify-center"
            >
              <span className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-brand-500 flex items-center justify-center transition-colors">
                <Play size={12} className="fill-current ml-0.5" />
              </span>
              See Features
            </a>
          </div>

          <div
            className="fade-up flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-zinc-400"
            style={delay(480)}
          >
            <span className="flex items-center gap-2"><Zap size={15} className="text-brand-400" />Instant activation</span>
            <span className="flex items-center gap-2"><Shield size={15} className="text-brand-400" />No contract</span>
            <span className="flex items-center gap-2"><Radio size={15} className="text-brand-400" />7-day catch-up</span>
          </div>
        </div>

        {/* Animated player mockup */}
        <div className="fade-up relative mx-auto w-full max-w-lg" style={delay(300)} aria-hidden>
          <div className="absolute -inset-6 bg-gradient-to-tr from-brand-500/30 via-accent/20 to-live/20 blur-3xl rounded-[3rem]" />

          <div className="relative animate-float-slow">
            <div className="rounded-3xl p-[1px] bg-gradient-to-br from-white/25 via-white/5 to-brand-500/40 shadow-2xl shadow-brand-900/60">
              <div className="rounded-3xl bg-surface/90 backdrop-blur-xl p-4">
                {/* Screen */}
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-brand-900 via-surface-2 to-ink">
                  <div className="absolute -inset-10 bg-[radial-gradient(circle_at_30%_30%,rgba(167,139,250,0.45),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(34,211,238,0.3),transparent_50%)] animate-aurora" />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> LIVE
                  </div>
                  <div className="absolute top-3 right-3 bg-black/50 backdrop-blur text-white text-[10px] font-bold px-2 py-0.5 rounded border border-white/20">
                    4K HDR
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="relative flex items-center justify-center w-16 h-16">
                      <span className="absolute inset-0 rounded-full bg-white/20 animate-ping [animation-duration:2.5s]" />
                      <span className="relative w-16 h-16 rounded-full bg-white/15 backdrop-blur border border-white/30 flex items-center justify-center">
                        <Play size={24} className="text-white fill-white ml-1" />
                      </span>
                    </span>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="flex items-center justify-between text-[11px] text-white/80 mb-2">
                      <span className="font-semibold text-white">Live Football · Game Day</span>
                      <span className="flex items-end gap-0.5 h-3">
                        {[0, 150, 300, 450].map((d) => (
                          <span key={d} className="w-0.5 h-full bg-live origin-bottom animate-eq" style={{ animationDelay: `${d}ms` }} />
                        ))}
                      </span>
                    </div>
                    <div className="h-1 rounded-full bg-white/20 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-brand-400 to-live rounded-full animate-progress" />
                    </div>
                  </div>
                </div>

                {/* Channel tiles */}
                <div className="grid grid-cols-3 gap-3 mt-4">
                  {tiles.map(({ icon: Icon, name, tag, color }, i) => (
                    <div
                      key={name}
                      className={`relative rounded-xl bg-gradient-to-br ${color} border border-white/10 p-3 ${i === 0 ? "ring-1 ring-brand-400/60" : ""}`}
                    >
                      <Icon size={16} className="text-white mb-2" />
                      <p className="text-white text-[11px] font-semibold truncate">{name}</p>
                      <p className="text-[9px] font-bold text-live tracking-wider mt-0.5">{tag}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating chips */}
          <div className="hidden sm:flex absolute -left-10 top-10 items-center gap-2 bg-surface/90 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 shadow-xl animate-float [animation-delay:-2s]">
            <span className="w-8 h-8 rounded-lg bg-live/15 flex items-center justify-center"><Zap size={16} className="text-live" /></span>
            <div>
              <p className="text-white text-xs font-semibold">Zero buffering</p>
              <p className="text-zinc-500 text-[10px]">Anti-freeze servers</p>
            </div>
          </div>
          <div className="hidden sm:flex absolute -right-6 -bottom-8 items-center gap-2 bg-surface/90 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 shadow-xl animate-float [animation-delay:-4s]">
            <span className="w-8 h-8 rounded-lg bg-brand-500/20 flex items-center justify-center"><Tv2 size={16} className="text-brand-300" /></span>
            <div>
              <p className="text-white text-xs font-semibold">Any device</p>
              <p className="text-zinc-500 text-[10px]">TV · Firestick · Phone</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="relative z-10 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl border border-white/10 bg-white/10 overflow-hidden">
          {stats.map((s) => (
            <div key={s.label} className="bg-ink/90 backdrop-blur px-6 py-6 text-center">
              <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                <CountUp to={s.to} decimals={s.decimals} suffix={s.suffix} />
              </p>
              <p className="text-zinc-500 text-xs sm:text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Channel marquee */}
      <div className="relative z-10 mt-14 mask-fade-x overflow-hidden pause-on-hover">
        <div className="flex w-max animate-marquee gap-3">
          {[...marquee, ...marquee].map((name, i) => (
            <span
              key={i}
              aria-hidden={i >= marquee.length}
              className="whitespace-nowrap text-sm text-zinc-400 bg-white/[0.03] border border-white/10 rounded-full px-5 py-2 hover:text-white hover:border-brand-400/50 transition-colors"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
