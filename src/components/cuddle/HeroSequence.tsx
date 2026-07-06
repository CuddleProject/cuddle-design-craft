import { motion, useReducedMotion } from "motion/react";
import { assets } from "@/assets/cuddle";
import { EASE } from "./Reveal";

function Row({ children, delayBase = 0 }: { children: React.ReactNode; delayBase?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-15%" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.18, delayChildren: delayBase } },
      }}
      className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-16"
    >
      {children}
    </motion.div>
  );
}

const child = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

export function HeroSequence() {
  const reduce = useReducedMotion();
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #F4F1EA 0%, #F4F1EA 18%, #E4E1DD 40%, #BCCCD4 70%, #D9AA92 100%)",
      }}
    >
      <div className="mx-auto max-w-[1200px] px-6 py-[120px] md:px-10 md:py-[180px] space-y-[140px] md:space-y-[200px]">
        {/* Row 1 — pen illustration left, text right */}
        <Row>
          <motion.div variants={child} className="md:col-span-5">
            <img
              src={assets.storyPen}
              alt="A hand clicking a pen on a cluttered desk"
              className="w-[68%] md:w-full max-w-[380px]"
              loading="lazy"
            />
          </motion.div>
          <motion.p
            variants={child}
            className="md:col-span-6 md:col-start-7 text-[clamp(1.5rem,3.2vw,2.4rem)] leading-[1.25] font-[var(--font-display)]"
            style={{ fontFamily: "var(--font-display)", color: "#21262B", textWrap: "balance" }}
          >
            You've clicked the same pen forty times this hour.
          </motion.p>
        </Row>

        {/* Row 2 — text left, focus typography right */}
        <Row>
          <motion.p
            variants={child}
            className="md:col-span-6 text-[clamp(1.5rem,3.2vw,2.4rem)] leading-[1.25] order-2 md:order-1"
            style={{ fontFamily: "var(--font-display)", color: "#21262B", textWrap: "balance" }}
          >
            That's your body trying to calm itself down.
          </motion.p>
          <motion.div variants={child} className="md:col-span-5 md:col-start-8 order-1 md:order-2 flex md:justify-end">
            <img
              src={assets.storyFocus}
              alt="Bold typographic illustration"
              className="w-[80%] md:w-full max-w-[420px]"
              loading="lazy"
            />
          </motion.div>
        </Row>

        {/* Row 3 — sleep illustration left, text right */}
        <Row>
          <motion.div variants={child} className="md:col-span-5">
            <img
              src={assets.storySleep}
              alt="A person sleeping"
              className="w-[68%] md:w-full max-w-[380px]"
              loading="lazy"
            />
          </motion.div>
          <motion.p
            variants={child}
            className="md:col-span-6 md:col-start-7 text-[clamp(1.5rem,3.2vw,2.4rem)] leading-[1.25]"
            style={{ fontFamily: "var(--font-display)", color: "#21262B", textWrap: "balance" }}
          >
            We just never let it finish the job when the day ends.
          </motion.p>
        </Row>

        {/* Row 4 — centered small caps */}
        <motion.p
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20, letterSpacing: "0.15em" }}
          whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0, letterSpacing: "0.32em" }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.4, ease: EASE }}
          className="text-center uppercase text-[clamp(0.85rem,1.4vw,1rem)]"
          style={{ color: "#21262B", fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          This is where it takes over.
        </motion.p>
      </div>
    </section>
  );
}