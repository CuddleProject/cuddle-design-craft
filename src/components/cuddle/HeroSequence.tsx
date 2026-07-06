import { motion, useReducedMotion } from "motion/react";
import { assets } from "@/assets/cuddle";
import { EASE } from "./Reveal";

function Row({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-20%" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.28, delayChildren: 0.1 } },
      }}
      className="relative grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-20"
    >
      {children}
    </motion.div>
  );
}

const child = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 1.3, ease: EASE } },
};

export function HeroSequence() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden atmosphere-light">
      <div className="mx-auto max-w-[1280px] px-6 pt-[160px] pb-[200px] md:px-16 md:pt-[220px] md:pb-[260px] space-y-[200px] md:space-y-[280px]">
        {/* Row 1 — pen illustration large left, terse text tucked right */}
        <Row>
          <motion.div variants={child} className="md:col-span-6 md:pl-[6%]">
            <img
              src={assets.storyPen}
              alt="A hand clicking a pen on a cluttered desk"
              className="w-[78%] md:w-full max-w-[460px]"
              loading="lazy"
            />
          </motion.div>
          <motion.p
            variants={child}
            className="md:col-span-5 md:col-start-8 text-[clamp(1.6rem,3.4vw,2.6rem)] leading-[1.2]"
            style={{ fontFamily: "var(--font-display)", color: "#21262B", textWrap: "balance", maxWidth: "22ch" }}
          >
            You've clicked the same pen forty times this hour.
          </motion.p>
        </Row>

        {/* Row 2 — text left indented, typography accent floating right */}
        <Row>
          <motion.p
            variants={child}
            className="md:col-span-6 md:col-start-2 text-[clamp(1.6rem,3.4vw,2.6rem)] leading-[1.2] order-2 md:order-1"
            style={{ fontFamily: "var(--font-display)", color: "#21262B", textWrap: "balance", maxWidth: "20ch" }}
          >
            That's your body trying to calm itself down.
          </motion.p>
          <motion.div variants={child} className="md:col-span-4 md:col-start-9 order-1 md:order-2 flex md:justify-end md:pt-8">
            <img
              src={assets.storyFocus}
              alt=""
              aria-hidden
              className="w-[80%] md:w-full max-w-[420px]"
              loading="lazy"
            />
          </motion.div>
        </Row>

        {/* Row 3 — sleep illustration large, text with breathing room */}
        <Row>
          <motion.div variants={child} className="md:col-span-6 md:pl-[10%] md:pt-6">
            <img
              src={assets.storySleep}
              alt="A person sleeping"
              className="w-[78%] md:w-full max-w-[460px]"
              loading="lazy"
            />
          </motion.div>
          <motion.p
            variants={child}
            className="md:col-span-5 md:col-start-8 text-[clamp(1.6rem,3.4vw,2.6rem)] leading-[1.2]"
            style={{ fontFamily: "var(--font-display)", color: "#21262B", textWrap: "balance", maxWidth: "24ch" }}
          >
            We just never let it finish the job when the day ends.
          </motion.p>
        </Row>

        {/* Closing small-caps line */}
        <motion.p
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20, letterSpacing: "0.18em" }}
          whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0, letterSpacing: "0.42em" }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.8, ease: EASE }}
          className="text-center uppercase text-[clamp(0.8rem,1.3vw,0.95rem)]"
          style={{ color: "#21262B", fontFamily: "var(--font-body)", fontWeight: 300, opacity: 0.7 }}
        >
          This is where it takes over.
        </motion.p>
      </div>
    </section>
  );
}