import { motion } from "motion/react";
import { assets } from "@/assets/cuddle";
import { EASE } from "./Reveal";

export function SensoryCheck() {
  return (
    <section className="relative" style={{ backgroundColor: "#BCCCD4" }}>
      <div className="mx-auto max-w-[900px] px-6 py-[140px] md:px-10 md:py-[180px] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="inline-flex flex-wrap items-baseline justify-center gap-x-3 text-[clamp(2rem,4.2vw,3.2rem)]"
          style={{ fontFamily: "var(--font-display)", color: "#21262B", textWrap: "balance" }}
        >
          <img src={assets.handNotSure} alt="Not sure" className="inline-block h-[1em] md:h-[1.15em] w-auto translate-y-[0.15em]" />
          <span>if this is for you?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          className="mx-auto mt-8 max-w-xl text-base md:text-lg opacity-80"
          style={{ color: "#21262B" }}
        >
          Take the 30-second sensory check and find out exactly which kind of friction is keeping you up.
        </motion.p>

        <motion.a
          href="#check"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
          className="mt-12 inline-flex items-center gap-3 transition-opacity hover:opacity-70"
        >
          <img src={assets.ctaStartCheck} alt="Start the check →" className="h-12 md:h-14 w-auto" />
        </motion.a>
      </div>
    </section>
  );
}