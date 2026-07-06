import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { assets } from "@/assets/cuddle";
import { EASE } from "./Reveal";

export function FoundersNote() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  // Living gradient: interpolate two radial-atmosphere layers instead of a flat color.
  const color = useTransform(
    scrollYProgress,
    [0, 0.4, 0.75, 1],
    ["#21262B", "#21262B", "#F4F1EA", "#F4F1EA"]
  );
  const gradientPos = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.55, 0.95]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden atmosphere-founder"
    >
      {/* Living gradient overlay that darkens toward jet-black as scroll progresses */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: useTransform(
            gradientPos,
            (v) =>
              `radial-gradient(120% 100% at 50% ${100 - v}%, rgba(33,38,43,0.95) 0%, rgba(33,38,43,0.4) 45%, rgba(33,38,43,0) 75%)`,
          ) as unknown as string,
          opacity: overlayOpacity as unknown as number,
        }}
      />
      <div aria-hidden className="grain-overlay" style={{ opacity: 0.05 }} />

      <motion.div
        style={{ color: color as unknown as string }}
        className="relative mx-auto max-w-[920px] px-6 pt-[220px] pb-[160px] md:px-10 md:pt-[320px] md:pb-[220px] text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.6, ease: EASE }}
          className="inline-flex flex-wrap items-baseline justify-center gap-x-4 gap-y-3 text-[clamp(1.8rem,4vw,3rem)] leading-[1.25]"
          style={{
            fontFamily: "var(--font-display)",
            textWrap: "balance",
            letterSpacing: "-0.005em",
            backgroundImage: "linear-gradient(135deg, #21262B 0%, #21262B 55%, #C97C5D 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
          }}
        >
          <span>It doesn't just cover you; it</span>
          <img
            src={assets.handIronsOut}
            alt="irons out"
            className="inline-block h-[0.95em] md:h-[1.1em] w-auto translate-y-[0.08em]"
            style={{ WebkitTextFillColor: "initial" }}
          />
          <span>the fragments of your day.</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.4, delay: 0.35, ease: EASE }}
          className="mx-auto mt-16 md:mt-20 max-w-xl text-base md:text-lg opacity-75"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          Built by an over-thinker, for the over-stimulated. Welcome to your 8 hours of peace.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.7, ease: EASE }}
          className="mt-14 text-[10px] tracking-[0.42em] uppercase opacity-50"
          style={{ fontFamily: "var(--font-body)" }}
        >
          — Sunny Wong, Founder
        </motion.p>
      </motion.div>
    </section>
  );
}