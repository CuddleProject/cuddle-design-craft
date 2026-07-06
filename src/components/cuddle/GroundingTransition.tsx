import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { assets } from "@/assets/cuddle";

export function GroundingTransition() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  // Pillow emerges gradually from the evolving color — opacity only, no scaling or dramatic movement.
  const pillowOpacity = useTransform(scrollYProgress, [0, 0.25, 0.65, 1], [0, 0.35, 0.92, 1]);
  const titleOpacity = useTransform(scrollYProgress, [0.2, 0.55, 1], [0, 0.9, 1]);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[600px] w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #C97C5D 0%, #A88774 40%, #8CA196 100%)",
      }}
    >
      <motion.div
        className="absolute inset-0"
        style={{ opacity: pillowOpacity as unknown as number }}
      >
        <img
          src={assets.groundingPillowcase}
          alt="A hand touching a sage silk pillowcase"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 50% 50%, rgba(33,38,43,0) 65%, rgba(33,38,43,0.22) 100%)",
          }}
        />
      </motion.div>

      <div aria-hidden className="grain-overlay" style={{ opacity: 0.06 }} />

      <div className="absolute inset-0 flex items-end md:items-center px-8 pb-16 md:px-20 md:pb-0">
        <motion.img
          src={assets.groundingTitle}
          alt="The Grounding Pillowcase."
          className="w-[86%] md:w-[46%] max-w-[640px]"
          style={{ opacity: titleOpacity as unknown as number }}
        />
      </div>
    </section>
  );
}