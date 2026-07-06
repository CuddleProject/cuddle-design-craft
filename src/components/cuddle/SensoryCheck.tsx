import { motion } from "motion/react";
import { useState } from "react";
import { assets } from "@/assets/cuddle";
import { EASE } from "./Reveal";

export function SensoryCheck() {
  const [hover, setHover] = useState(false);
  return (
    <section
      id="quiet-hours"
      className="relative overflow-hidden atmosphere-silk-glow"
      style={{ color: "#F4F1EA" }}
    >
      {/* Diffused silk-glow — the light that also bleeds into the footer */}
      <div
        aria-hidden
        className="silk-glow-pulse pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[130%] w-[130%] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(201,124,93,0.35) 0%, rgba(201,124,93,0.15) 35%, rgba(201,124,93,0) 70%)",
          filter: "blur(40px)",
          opacity: hover ? 1 : 0.9,
          transition: "opacity 1200ms cubic-bezier(0.22,1,0.36,1)",
        }}
      />
      <div aria-hidden className="grain-overlay" style={{ opacity: 0.05 }} />
      <div className="relative mx-auto max-w-[1000px] px-6 pt-[180px] pb-[160px] md:px-10 md:pt-[240px] md:pb-[200px] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.4, ease: EASE }}
          className="inline-flex flex-wrap items-baseline justify-center gap-x-4 text-[clamp(2.1rem,4.4vw,3.4rem)] leading-[1.1]"
          style={{ fontFamily: "var(--font-display)", color: "#F4F1EA", textWrap: "balance", letterSpacing: "-0.005em" }}
        >
          <img
            src={assets.handNotSure}
            alt="Not sure"
            className="inline-block h-[0.95em] md:h-[1.1em] w-auto translate-y-[0.08em]"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <span>if this is for you?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.2, delay: 0.25, ease: EASE }}
          className="mx-auto mt-10 max-w-xl text-base md:text-lg"
          style={{ color: "#F4F1EA", opacity: 0.72, fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          Take the 30-second sensory check and find out exactly which kind of friction is keeping you up.
        </motion.p>

        <motion.a
          href="#check"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.2, delay: 0.5, ease: EASE }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="group relative mt-16 inline-flex items-center justify-center"
        >
          {/* Silk halo around the button */}
          <span
            aria-hidden
            className="absolute inset-0 -m-16 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(closest-side, rgba(201,124,93,0.55) 0%, rgba(201,124,93,0.18) 50%, rgba(201,124,93,0) 78%)",
              filter: "blur(28px)",
              opacity: hover ? 1 : 0.7,
              transform: hover ? "scale(1.15)" : "scale(1)",
              transition:
                "opacity 900ms cubic-bezier(0.22,1,0.36,1), transform 1200ms cubic-bezier(0.22,1,0.36,1)",
            }}
          />
          <img
            src={assets.ctaStartCheck}
            alt="Start the check →"
            className="relative h-14 md:h-20 w-auto transition-all duration-[900ms] ease-out group-hover:translate-x-1"
            style={{ filter: hover ? "brightness(0) invert(1)" : "brightness(0) invert(1)" }}
          />
        </motion.a>
      </div>
      {/* Bottom bleed — hands the light to the footer */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        style={{
          background:
            "linear-gradient(180deg, rgba(33,38,43,0) 0%, rgba(33,38,43,0.55) 60%, #21262B 100%)",
        }}
      />
    </section>
  );
}