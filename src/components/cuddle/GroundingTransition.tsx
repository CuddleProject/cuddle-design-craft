import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { assets } from "@/assets/cuddle";

export function GroundingTransition() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", reduce ? "-6%" : "6%"]);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[600px] w-full overflow-hidden"
      style={{ backgroundColor: "#8CA196" }}
    >
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y }}
        initial={{ filter: "blur(6px)", opacity: 0.85, scale: 1.04 }}
        whileInView={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={assets.groundingPillowcase}
          alt="A hand touching a sage silk pillowcase"
          className="h-[112%] w-full object-cover"
          loading="lazy"
        />
        {/* Almost imperceptible vignette for depth */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 50% 50%, rgba(33,38,43,0) 60%, rgba(33,38,43,0.18) 100%)",
          }}
        />
      </motion.div>

      <div aria-hidden className="grain-overlay" style={{ opacity: 0.06 }} />

      {/* Handwritten title — anchored bottom-left per mockup, quieter emotional pause */}
      <div className="absolute inset-0 flex items-end md:items-center px-8 pb-16 md:px-20 md:pb-0">
        <motion.img
          src={assets.groundingTitle}
          alt="The Grounding Pillowcase."
          className="w-[86%] md:w-[46%] max-w-[640px]"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </section>
  );
}