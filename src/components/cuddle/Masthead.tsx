import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { assets } from "@/assets/cuddle";

export function Masthead() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "12%"]);
  const blur = useTransform(scrollYProgress, [0, 1], ["0px", "6px"]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden" style={{ backgroundColor: "#21262B" }}>
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, filter: "blur(14px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ y, filter: reduce ? undefined : blur }}
      >
        <img
          src={assets.heroBanner}
          alt="A hand resting on a silk pillowcase, seen from above"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(33,38,43,0.15) 0%, rgba(33,38,43,0) 25%, rgba(33,38,43,0) 60%, rgba(33,38,43,0.35) 100%)" }}
        />
      </motion.div>

      <motion.img
        src={assets.heroTitle}
        alt="Cuddle Your Tension Away"
        className="pointer-events-none absolute left-[4%] top-[16%] w-[62%] md:w-[54%] max-w-[820px] select-none"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        draggable={false}
      />

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] tracking-[0.32em] uppercase" style={{ color: "#F4F1EA" }}>
        <span className="scroll-hint">Scroll</span>
        <span aria-hidden className="block h-6 w-px" style={{ background: "rgba(244,241,234,0.6)" }} />
      </div>
    </section>
  );
}