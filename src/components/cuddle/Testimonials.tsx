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
      <div className="mx-auto max-w-[1280px] px-6 py-[160px] md:px-14 md:py-[220px]">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.3, ease: EASE }}
          className="mb-32 md:mb-40 inline-flex flex-wrap items-baseline gap-x-4 text-[clamp(1.8rem,3.8vw,3rem)] md:pl-[4%]"
          style={{ fontFamily: "var(--font-display)", color: "#21262B", textWrap: "balance", letterSpacing: "-0.005em" }}
        >
          <span>What</span>
          <img
            src={assets.handSensitiveSleepers}
            alt="sensitive sleepers"
            className="inline-block h-[0.95em] md:h-[1.1em] w-auto translate-y-[0.08em]"
          />
          <span>actually notice.</span>
        </motion.h2>

        {/* Asymmetric grid — each testimonial an individual story */}
        <div className="grid grid-cols-1 gap-24 md:grid-cols-12 md:gap-x-8 md:gap-y-36">
          {items.map((t, i) => {
            // Distinct placement per card — nothing shares vertical rhythm
            const placement = [
              "md:col-span-5 md:col-start-1",
              "md:col-span-4 md:col-start-8 md:mt-40",
              "md:col-span-5 md:col-start-3 md:-mt-16",
            ][i];
            return (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 1.3, delay: i * 0.2, ease: EASE }}
                className={`flex flex-col ${placement}`}
              >
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="mb-10 h-56 w-56 md:h-64 md:w-64 object-contain -ml-4"
                  loading="lazy"
                />
                <blockquote
                  className="text-[clamp(1.15rem,1.6vw,1.4rem)] leading-[1.55]"
                  style={{ fontFamily: "var(--font-display)", color: "#21262B", textWrap: "balance", maxWidth: "28ch" }}
                >
                  "{t.quote}"
                </blockquote>
                <figcaption
                  className="mt-8 text-[10.5px] tracking-[0.28em] uppercase"
                  style={{ color: "#21262B", fontFamily: "var(--font-body)" }}
                >
                  <span className="opacity-85">{t.name}</span>
                  <span className="mx-2 opacity-30">/</span>
                  <span className="opacity-55">{t.detail}</span>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}