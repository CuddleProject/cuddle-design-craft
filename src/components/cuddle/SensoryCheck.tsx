import { motion } from "motion/react";
import { assets } from "@/assets/cuddle";
import { EASE } from "./Reveal";

export function SensoryCheck() {
  return (
    <section
      id="quiet-hours"
      className="relative overflow-hidden atmosphere-sky"
    >
      <div aria-hidden className="grain-overlay" style={{ opacity: 0.06 }} />
      <div className="relative mx-auto max-w-[1000px] px-6 py-[180px] md:px-10 md:py-[240px] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.4, ease: EASE }}
          className="inline-flex flex-wrap items-baseline justify-center gap-x-4 text-[clamp(2.1rem,4.4vw,3.4rem)] leading-[1.1]"
          style={{ fontFamily: "var(--font-display)", color: "#21262B", textWrap: "balance", letterSpacing: "-0.005em" }}
        >
          <img
            src={assets.handNotSure}
            alt="Not sure"
            className="inline-block h-[0.95em] md:h-[1.1em] w-auto translate-y-[0.08em]"
          />
          <span>if this is for you?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.2, delay: 0.25, ease: EASE }}
          className="mx-auto mt-10 max-w-xl text-base md:text-lg opacity-75"
          style={{ color: "#21262B", fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          Take the 30-second sensory check and find out exactly which kind of friction is keeping you up.
        </motion.p>

        <motion.a
          href="#check"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.2, delay: 0.5, ease: EASE }}
          className="mt-16 inline-flex items-center gap-3 transition-all duration-500 hover:translate-x-2 hover:opacity-80"
        >
          <img src={assets.ctaStartCheck} alt="Start the check →" className="h-14 md:h-20 w-auto" />
        </motion.a>
      </div>
    </section>
  );
}