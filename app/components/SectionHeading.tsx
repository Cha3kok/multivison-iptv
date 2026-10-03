import type { ReactNode } from "react";
import Reveal from "./motion/Reveal";

type Props = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
};

export default function SectionHeading({ eyebrow, title, subtitle }: Props) {
  return (
    <Reveal className="text-center mb-16">
      <p className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/25 text-brand-300 text-xs font-semibold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-5">
        <span className="w-1.5 h-1.5 rounded-full bg-live shadow-[0_0_10px_#22d3ee]" />
        {eyebrow}
      </p>
      <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4 text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto text-pretty">{subtitle}</p>
      )}
    </Reveal>
  );
}
