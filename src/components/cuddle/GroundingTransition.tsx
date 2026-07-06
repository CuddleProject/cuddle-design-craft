import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { assets } from "@/assets/cuddle";

export function GroundingTransition() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", reduce ? "-8%" : "8%"]);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[560px] w-full overflow-hidden"
      style={{ scrollSnapStop: "always", backgroundColor: "#8CA196" }}
    >
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y }}
        initial={{ filter: "blur(18px)", opacity: 0.6, scale: 1.08 }}
        whileInView={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={assets.groundingPillowcase}
          alt="A hand touching a sage silk pillowcase"
          className="h-[116%] w-full object-cover"
          loading="lazy"
        />
      </motion.div>

      <div className="absolute inset-0 flex items-center px-8 md:px-20">
        <motion.img
          src={assets.groundingTitle}
          alt="The Grounding Pillowcase."
          className="w-[80%] md:w-[52%] max-w-[720px]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </section>
  );
}