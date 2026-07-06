import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { assets } from "@/assets/cuddle";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Masthead() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "10%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.06]);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden"
      style={{ backgroundColor: "#EFEBE3" }}
    >
      {/* Photograph, parallax, subtle zoom */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, ease: EASE }}
        style={{ y, scale }}
      >
        <img
          src={assets.heroBanner}
          alt="A person holding a silk pillowcase against a cream backdrop"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        {/* Invisible vignette + subtle contrast lift */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 50% 45%, rgba(33,38,43,0) 55%, rgba(33,38,43,0.12) 82%, rgba(33,38,43,0.22) 100%)",
          }}
        />
        {/* Bottom fade for scroll cue legibility */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-32"
          style={{ background: "linear-gradient(180deg, rgba(244,241,234,0) 0%, rgba(244,241,234,0.55) 100%)" }}
        />
      </motion.div>

      {/* Film grain */}
      <div aria-hidden className="grain-overlay" />

      {/* Editorial title composition — HTML "Cuddle Your Tension" + tilted "AWAY" PNG accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="mx-auto flex h-full max-w-[1400px] flex-col justify-center px-6 md:px-14">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.35, ease: EASE }}
            className="relative select-none"
            style={{
              fontFamily: "var(--font-display)",
              color: "#0F1B3D",
              lineHeight: 0.94,
              letterSpacing: "-0.02em",
              fontSize: "clamp(3rem, 9.5vw, 8.5rem)",
              textWrap: "balance",
              maxWidth: "min(78vw, 1000px)",
            }}
          >
            <span className="block">Cuddle</span>
            <span className="block">Your Tension</span>
            {/* "AWAY" accent — screen-reader hidden because it's inside the H1 as an image */}
            <motion.img
              src={assets.heroTitle}
              alt=""
              aria-hidden
              draggable={false}
              initial={{ opacity: 0, y: -18, rotate: -6 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 1.4, delay: 0.9, ease: EASE }}
              className="absolute right-[2%] top-[-6%] md:right-[6%] md:top-[-10%] w-[46%] md:w-[36%] max-w-[420px] select-none"
            />
            <span className="sr-only"> away.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.3, ease: EASE }}
            className="mt-8 md:mt-10 max-w-md text-sm md:text-base"
            style={{ color: "#21262B", opacity: 0.72, fontFamily: "var(--font-body)", fontWeight: 300, letterSpacing: "0.01em" }}
          >
            22-momme, 6A-grade mulberry silk. Built for sensitive sleepers, engineered for eight hours of quiet.
          </motion.p>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] tracking-[0.36em] uppercase"
        style={{ color: "#21262B", opacity: 0.55, fontFamily: "var(--font-body)" }}
      >
        <span className="scroll-hint">Scroll</span>
        <span aria-hidden className="block h-6 w-px" style={{ background: "rgba(33,38,43,0.5)" }} />
      </div>
    </section>
  );
}