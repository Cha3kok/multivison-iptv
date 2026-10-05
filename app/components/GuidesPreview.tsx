import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./motion/Reveal";
import { getAllPosts } from "../lib/mdx";

// The pillar first, then the guides people need right after subscribing.
const featured = [
  "iptv-subscription-usa",
  "what-is-iptv",
  "best-iptv-apps-firestick",
  "watch-live-sports-without-cable",
  "iptv-vs-cable-tv",
];

export default function GuidesPreview() {
  const bySlug = new Map(getAllPosts().map((p) => [p.slug, p]));
  const posts = featured.flatMap((slug) => bySlug.get(slug) ?? []);
  const [pillar, ...rest] = posts;
  if (!pillar) return null;

  return (
    <section id="guides" className="relative bg-ink py-28 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="IPTV USA Guides"
          title={<>Everything you need to <span className="text-gradient">switch from cable</span></>}
          subtitle="Plain-English guides to prices, setup on every device, and watching live sports without a cable bill."
        />

        <div className="grid lg:grid-cols-[1.2fr_2fr] gap-5">
          <Reveal>
            <Link
              href={`/blog/${pillar.slug}`}
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-brand-500/30 bg-gradient-to-br from-brand-900/50 via-surface to-surface p-8 transition-all hover:-translate-y-1 hover:border-brand-400/60"
            >
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-300 mb-4">
                  <BookOpen size={14} /> Start here
                </span>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-200 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">{pillar.excerpt}</p>
              </div>
              <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300">
                Read the guide <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-5">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 70}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-white/[0.07] bg-surface/70 p-6 transition-all hover:-translate-y-1 hover:border-brand-500/40"
                >
                  <p className="text-xs font-medium text-zinc-400 mb-2">{post.category}</p>
                  <h3 className="text-white font-semibold leading-snug mb-2 group-hover:text-brand-200 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300 hover:text-white transition-colors">
            See all IPTV guides <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
