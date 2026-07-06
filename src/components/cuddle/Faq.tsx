import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Plus } from "lucide-react";
import { assets } from "@/assets/cuddle";
import { EASE } from "./Reveal";

const faqs = [
  {
    q: "What is the best silk pillowcase for highly sensitive people?",
    a: "The best silk pillowcase for sensitive sleepers has no irritation points — no seams against the cheek, no wash tags, no rough fiber. Cuddle Project's 100% tagless, 22-momme mulberry silk surface is built around that idea, which is why it's a popular choice for people who notice texture more than most.",
    pos: "left-[4%] top-[14%] md:left-[6%] md:top-[16%] md:max-w-[38%]",
  },
  {
    q: "Why does momme count matter in silk bedding?",
    a: "22-momme is a mid-to-heavy weight for mulberry silk — dense enough to feel substantial against the skin, while remaining naturally breathable.",
    pos: "left-[6%] top-[38%] md:left-[10%] md:top-[42%] md:max-w-[36%]",
  },
  {
    q: `What does "sensory friendly" mean for bedding?`,
    a: `"Sensory friendly" generally describes design choices — removing tags, seams, and rough fibers — aimed at reducing tactile irritation, rather than a clinical certification.`,
    pos: "right-[4%] top-[20%] md:right-[8%] md:top-[24%] md:max-w-[36%]",
  },
  {
    q: "Why does texture matter for sleep, not just comfort?",
    a: "Reaching for something to touch, rub, or fidget with is a common, well-documented way people self-soothe during a stressful day. Cuddle Project applies the same idea to the eight hours nobody's paying attention to. This is a design philosophy behind our material choices, not a medical or therapeutic claim.",
    pos: "right-[6%] top-[52%] md:right-[12%] md:top-[58%] md:max-w-[38%]",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  // FAQPage JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className="relative" style={{ backgroundColor: "#F4F1EA" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* heading */}
      <div className="mx-auto max-w-[1100px] px-6 pt-[160px] pb-24 md:px-10 md:pt-[220px] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.3, ease: EASE }}
          className="inline-flex flex-wrap items-baseline justify-center gap-x-4 gap-y-3 text-[clamp(1.9rem,3.8vw,3rem)] leading-[1.15]"
          style={{ fontFamily: "var(--font-display)", color: "#21262B", textWrap: "balance", letterSpacing: "-0.005em" }}
        >
          <span>A smoother surface, a</span>
          <img
            src={assets.handCalmerWay}
            alt="calmer way"
            className="inline-block h-[0.95em] md:h-[1.1em] w-auto translate-y-[0.08em]"
          />
          <span>into sleep.</span>
        </motion.h2>
      </div>

      {/* Desktop: photo with overlaid questions */}
      <div className="relative hidden md:block">
        <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 pb-[120px]">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <img
              src={assets.faqBanner}
              alt="A stack of silk pillows beside a warm cup"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(33,38,43,0.28), rgba(33,38,43,0.12) 45%, rgba(33,38,43,0.42))",
              }}
            />
            <div aria-hidden className="grain-overlay" style={{ opacity: 0.07 }} />

            {faqs.map((f, i) => (
              <div key={i} className={`absolute ${f.pos}`}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="group flex items-start gap-4 text-left"
                >
                  <span
                    className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-transform duration-300 group-hover:rotate-45"
                    style={{
                      borderColor: "rgba(244,241,234,0.85)",
                      backgroundColor: open === i ? "#F4F1EA" : "rgba(33,38,43,0.35)",
                      backdropFilter: "blur(8px)",
                      color: open === i ? "#21262B" : "#F4F1EA",
                    }}
                    aria-hidden
                  >
                    <Plus className="h-4 w-4" strokeWidth={1.6} />
                  </span>
                  <h3
                    className="text-lg leading-snug"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "#F4F1EA",
                      textShadow: "0 1px 12px rgba(33,38,43,0.5)",
                    }}
                  >
                    {f.q}
                  </h3>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="a"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: EASE }}
                      className="overflow-hidden pl-12 pr-2"
                    >
                      <p
                        className="mt-4 max-w-[420px] text-sm leading-relaxed"
                        style={{
                          color: "#F4F1EA",
                          textShadow: "0 1px 10px rgba(33,38,43,0.6)",
                          fontWeight: 300,
                        }}
                      >
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: photo above, stacked accordion below */}
      <div className="md:hidden">
        <img src={assets.faqBanner} alt="" className="w-full object-cover" loading="lazy" />
        <div className="px-6 py-12 space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="border-b" style={{ borderColor: "rgba(33,38,43,0.12)" }}>
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-start gap-3 py-4 text-left">
                <Plus className="mt-1 h-4 w-4 shrink-0 transition-transform" style={{ transform: open === i ? "rotate(45deg)" : "none", color: "#21262B" }} />
                <h3 className="text-base" style={{ fontFamily: "var(--font-display)", color: "#21262B" }}>{f.q}</h3>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 pl-7 text-sm leading-relaxed" style={{ color: "#21262B" }}>{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Also inject text answers into DOM (visually hidden) for SEO / when overlays hidden */}
      <div className="sr-only">
        {faqs.map((f, i) => (
          <div key={i}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}