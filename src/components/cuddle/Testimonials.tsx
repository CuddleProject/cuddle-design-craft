import { motion } from "motion/react";
import { assets } from "@/assets/cuddle";
import { EASE } from "./Reveal";

const items = [
  {
    avatar: assets.avatar01,
    quote: "I used to feel every seam on my old pillowcase at 3am. Now I don't feel anything at all — which is the whole point.",
    name: "Mira A.",
    detail: "Grounding Pillowcase — Sage",
  },
  {
    avatar: assets.avatar02,
    quote: "The mask is the first one that doesn't press on my eyelashes. I forget I'm wearing it.",
    name: "Jules P.",
    detail: "Blackout Sleep Mask",
  },
  {
    avatar: assets.avatar03,
    quote: "My hair doesn't kink where the tie used to sit. Small thing. Not a small difference.",
    name: "Daniel K.",
    detail: "Zero-Tug Hair Ties",
  },
];

export function Testimonials() {
  return (
    <section className="relative" style={{ backgroundColor: "#F4F1EA" }}>
      <div className="mx-auto max-w-[1200px] px-6 py-[120px] md:px-10 md:py-[160px]">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="mb-20 inline-flex flex-wrap items-baseline gap-x-3 text-[clamp(1.8rem,3.6vw,2.8rem)]"
          style={{ fontFamily: "var(--font-display)", color: "#21262B", textWrap: "balance" }}
        >
          <span>What</span>
          <img src={assets.handSensitiveSleepers} alt="sensitive sleepers" className="inline-block h-[1em] md:h-[1.15em] w-auto translate-y-[0.15em]" />
          <span>actually notice.</span>
        </motion.h2>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-10">
          {items.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.9, delay: i * 0.18, ease: EASE }}
              className="flex flex-col"
              style={{
                marginTop: i === 1 ? "3rem" : i === 2 ? "1.5rem" : 0,
              }}
            >
              <img src={t.avatar} alt={t.name} className="mb-6 h-40 w-40 object-contain" loading="lazy" />
              <blockquote
                className="text-lg md:text-xl leading-[1.5]"
                style={{ fontFamily: "var(--font-display)", color: "#21262B", textWrap: "balance" }}
              >
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 text-sm" style={{ color: "#21262B" }}>
                <span className="opacity-90">{t.name}</span>
                <span className="mx-2 opacity-40">·</span>
                <span className="opacity-60">{t.detail}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}