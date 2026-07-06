import { motion } from "motion/react";
import { assets } from "@/assets/cuddle";
import { EASE } from "./Reveal";

const specs = [
  {
    label: "Up to",
    stat: "22 momme",
    desc: "Silk density — denser than the 12–19 momme most silk pillowcase brands use.",
    cmp: "3–10 momme heavier than the industry standard.",
  },
  {
    label: "Graded",
    stat: "6A grade",
    desc: "Long, continuous-filament silk fiber — the highest commercial silk grading tier.",
    cmp: "Two grade tiers above standard commercial 4A silk.",
  },
  {
    label: "Every product",
    stat: "0 against your skin",
    desc: "Care label tucked into the inner seam, never against your cheek.",
    cmp: "Nothing to scratch, nothing to notice.",
  },
];

export function SpecCards() {
  return (
    <section id="spec" className="relative" style={{ backgroundColor: "#F4F1EA" }}>
      <div className="mx-auto max-w-[1200px] px-6 py-[120px] md:px-10 md:py-[160px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="mb-16 max-w-3xl"
        >
          <h2
            className="inline-flex flex-wrap items-baseline gap-x-3 text-[clamp(2rem,4.2vw,3.2rem)]"
            style={{ fontFamily: "var(--font-display)", color: "#21262B", textWrap: "balance" }}
          >
            <span>Engineered for</span>
            <img src={assets.handRecovery} alt="Recovery." className="inline-block h-[1em] md:h-[1.15em] w-auto translate-y-[0.15em]" />
          </h2>
          <p className="mt-4 max-w-xl text-base md:text-lg opacity-70" style={{ color: "#21262B" }}>
            Precision-crafted parameters for your 8-hour physical downtime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-x-16">
          {/* Sticky image */}
          <div className="md:col-span-5">
            <div className="md:sticky md:top-32">
              <motion.img
                src={assets.engineeringImage}
                alt="Detail of Cuddle Project silk engineering"
                className="w-full max-w-[440px]"
                initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.2, ease: EASE }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Stat blocks */}
          <div className="md:col-span-7 space-y-24 md:space-y-32">
            {specs.map((s, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.9, ease: EASE, delay: i * 0.05 }}
              >
                <p className="small-caps-label" style={{ color: "#8CA196" }}>{s.label}</p>
                <p
                  className="mt-3 text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.05]"
                  style={{ fontFamily: "var(--font-display)", color: "#21262B" }}
                >
                  {s.stat}
                </p>
                <p className="mt-6 max-w-md text-base md:text-lg opacity-80" style={{ color: "#21262B" }}>
                  {s.desc}
                </p>
                <p className="mt-4 text-sm md:text-base" style={{ color: "#C97C5D" }}>
                  {s.cmp}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}