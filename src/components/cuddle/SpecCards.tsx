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
      <div className="mx-auto max-w-[1280px] px-6 pt-[120px] pb-[160px] md:px-14 md:pt-[140px] md:pb-[200px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.3, ease: EASE }}
          className="mb-24 md:mb-32 max-w-3xl md:pl-[4%]"
        >
          <h2
            className="inline-flex flex-wrap items-baseline gap-x-4 text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.05]"
            style={{ fontFamily: "var(--font-display)", color: "#21262B", textWrap: "balance", letterSpacing: "-0.01em" }}
          >
            <span>Engineered for</span>
            <img
              src={assets.handRecovery}
              alt="Recovery."
              className="inline-block h-[0.95em] md:h-[1.1em] w-auto translate-y-[0.08em]"
            />
          </h2>
          <p
            className="mt-6 max-w-xl text-base md:text-lg opacity-65"
            style={{ color: "#21262B", fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Precision-crafted parameters for your 8-hour physical downtime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-20 md:grid-cols-12 md:gap-x-20">
          {/* Sticky image */}
          <div className="md:col-span-5 md:col-start-1">
            <div className="md:sticky md:top-28">
              <motion.img
                src={assets.engineeringImage}
                alt="Detail of Cuddle Project silk engineering"
                className="w-full max-w-[520px]"
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.6, ease: EASE }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Stat blocks */}
          <div className="md:col-span-6 md:col-start-7 space-y-32 md:space-y-40">
            {specs.map((s, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 1.3, ease: EASE, delay: i * 0.1 }}
              >
                <p className="small-caps-label" style={{ color: "#8CA196" }}>{s.label}</p>
                <p
                  className="mt-5 text-[clamp(2.6rem,5.2vw,4rem)] leading-[1.02]"
                  style={{ fontFamily: "var(--font-display)", color: "#21262B", letterSpacing: "-0.015em" }}
                >
                  {s.stat}
                </p>
                <p
                  className="mt-8 max-w-md text-base md:text-lg opacity-75"
                  style={{ color: "#21262B", fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {s.desc}
                </p>
                <p className="mt-6 text-sm md:text-[0.95rem] italic" style={{ color: "#C97C5D", fontFamily: "var(--font-body)" }}>
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