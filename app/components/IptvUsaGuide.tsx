import { Check, X } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./motion/Reveal";

const facts = [
  { label: "Live channels", value: "50,000+ (US and international)" },
  { label: "Movies & series on demand", value: "200,000+" },
  { label: "Picture quality", value: "Up to 4K Ultra HD" },
  { label: "Price", value: "$19.99/month, or from $5.42/month on the 24-month plan" },
  { label: "Contract", value: "None — one-time payment, no auto-renewal" },
  { label: "Devices", value: "Firestick, Smart TV, Android, iPhone, PC, Mac, MAG" },
  { label: "Simultaneous screens", value: "1 to 4" },
  { label: "Catch-up TV", value: "7 days on supported channels" },
  { label: "Free trial", value: "3 hours, no credit card" },
  { label: "Support", value: "24/7 on WhatsApp" },
];

const comparison: { feature: string; iptv: string; cable: string; iptvWins: boolean }[] = [
  { feature: "Monthly cost", iptv: "From $5.42", cable: "Monthly bill plus box rental and fees", iptvWins: true },
  { feature: "Contract", iptv: "None", cable: "Often 1–2 years", iptvWins: true },
  { feature: "Equipment", iptv: "A device you already own", cable: "Rented cable box", iptvWins: true },
  { feature: "Installation", iptv: "Self-setup in about 5 minutes", cable: "Technician appointment", iptvWins: true },
  { feature: "Watch on phone & tablet", iptv: "Yes, any device", cable: "Limited, depends on provider app", iptvWins: true },
  { feature: "International channels", iptv: "Thousands included", cable: "Paid add-on packages", iptvWins: true },
  { feature: "Works without internet", iptv: "No — needs 10 Mbps+", cable: "Yes", iptvWins: false },
];

export default function IptvUsaGuide() {
  return (
    <section id="what-is-iptv-usa" className="relative bg-ink py-28 overflow-hidden">
      <div aria-hidden className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="IPTV USA Explained"
          title={<>What is <span className="text-gradient">IPTV USA</span>?</>}
        />

        {/* Direct answer, written to be quoted on its own */}
        <Reveal className="max-w-3xl mx-auto -mt-8 mb-16 text-center">
          <p className="text-zinc-300 text-lg leading-relaxed text-pretty">
            <strong className="text-white">IPTV USA</strong> is live television delivered over the internet
            to viewers in the United States, instead of through a cable box or satellite dish. With an IPTV
            subscription you stream live channels, sports, movies and series on the devices you already own —
            a Smart TV, Firestick, phone or computer. <strong className="text-white">Multivision IPTV</strong>{" "}
            offers 50,000+ live channels and 200,000+ on-demand titles in up to 4K, from $5.42 per month with
            no contract.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_1.25fr] gap-8 items-start">
          {/* At a glance */}
          <Reveal>
            <div className="rounded-2xl border border-white/[0.07] bg-surface/70 overflow-hidden">
              <h3 className="text-white font-semibold text-lg px-6 py-5 border-b border-white/[0.07]">
                Multivision IPTV at a glance
              </h3>
              <dl className="divide-y divide-white/[0.06]">
                {facts.map((f) => (
                  <div key={f.label} className="grid grid-cols-[minmax(0,10rem)_1fr] gap-4 px-6 py-3.5 text-sm">
                    <dt className="text-zinc-500">{f.label}</dt>
                    <dd className="text-zinc-200">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          {/* IPTV vs cable */}
          <Reveal delay={120}>
            <div className="rounded-2xl border border-white/[0.07] bg-surface/70 overflow-hidden">
              <h3 className="text-white font-semibold text-lg px-6 py-5 border-b border-white/[0.07]">
                IPTV vs cable TV in the USA
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm min-w-[480px]">
                  <thead>
                    <tr className="text-left text-zinc-500">
                      <th scope="col" className="font-medium px-6 py-3">Feature</th>
                      <th scope="col" className="font-medium px-4 py-3 text-brand-300">Multivision IPTV</th>
                      <th scope="col" className="font-medium px-4 py-3">Cable TV</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.06]">
                    {comparison.map((row) => (
                      <tr key={row.feature}>
                        <th scope="row" className="text-left font-normal text-zinc-400 px-6 py-3.5">{row.feature}</th>
                        <td className="px-4 py-3.5 text-zinc-100">
                          <span className="inline-flex items-start gap-2">
                            {row.iptvWins ? (
                              <Check size={15} className="text-live mt-0.5 flex-shrink-0" />
                            ) : (
                              <X size={15} className="text-zinc-500 mt-0.5 flex-shrink-0" />
                            )}
                            {row.iptv}
                          </span>
                        </td>
                        <td className="px-4 py-3.5 text-zinc-400">{row.cable}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
