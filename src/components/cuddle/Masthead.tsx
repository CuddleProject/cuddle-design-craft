import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";
import { assets } from "@/assets/cuddle";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Masthead() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "8%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.05]);
  // Parallax: title drifts up more slowly than background (depth)
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-4%"]);
  const titleOpacityScroll = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.9, 0.4]);

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

      {/* Editorial title composition — handwritten PNG as the primary title */}
      <div className="pointer-events-none absolute inset-0">
        <div className="mx-auto flex h-full max-w-[1400px] flex-col justify-center px-6 md:px-14">
          <h1 className="sr-only">Cuddle your tension away.</h1>
          <motion.div
            className="relative w-[86%] md:w-[68%] max-w-[900px] -mt-[8%] md:-mt-[6%]"
            style={{ y: titleY, opacity: titleOpacityScroll as unknown as number }}
          >
            <motion.img
              src={assets.heroTitle}
              alt="Cuddle your tension away"
              draggable={false}
              initial={{ opacity: 0, y: 14 }}
              animate={
                reduce
                  ? { opacity: 1, y: 0 }
                  : { opacity: 1, y: [0, -6, 0] }
              }
              transition={
                reduce
                  ? { duration: 1.4, ease: EASE }
                  : {
                      opacity: { duration: 1.8, delay: 0.5, ease: EASE },
                      y: {
                        duration: 9,
                        delay: 0.5,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "mirror",
                      },
                    }
              }
              className="relative block w-full select-none mix-blend-multiply"
              style={{ filter: "drop-shadow(0 1px 0 rgba(244,241,234,0.35))" }}
            />
          </motion.div>
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