import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { assets } from "@/assets/cuddle";
import { EASE } from "./Reveal";

export function FoundersNote() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bg = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#F4F1EA", "#8CA196", "#21262B"]
  );
  const color = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#21262B", "#F4F1EA", "#F4F1EA"]
  );

  return (
    <motion.section
      ref={ref}
      className="relative overflow-hidden"
      style={{ backgroundColor: bg as unknown as string }}
    >
      <motion.div
        style={{ color: color as unknown as string }}
        className="mx-auto max-w-[900px] px-6 py-[160px] md:px-10 md:py-[220px] text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1, ease: EASE }}
          className="inline-flex flex-wrap items-baseline justify-center gap-x-3 gap-y-2 text-[clamp(1.6rem,3.4vw,2.4rem)] leading-[1.35]"
          style={{ fontFamily: "var(--font-display)", textWrap: "balance" }}
        >
          <span>It doesn't just cover you; it</span>
          <img src={assets.handIronsOut} alt="irons out" className="inline-block h-[1em] md:h-[1.15em] w-auto translate-y-[0.15em]" />
          <span>the fragments of your day.</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          className="mx-auto mt-14 max-w-2xl text-base md:text-lg opacity-80"
        >
          Built by an over-thinker, for the over-stimulated. Welcome to your 8 hours of peace.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
          className="mt-10 text-sm tracking-[0.24em] uppercase opacity-70"
          style={{ fontFamily: "var(--font-body)" }}
        >
          — Sunny Wong, Founder
        </motion.p>
      </motion.div>
    </motion.section>
  );
}