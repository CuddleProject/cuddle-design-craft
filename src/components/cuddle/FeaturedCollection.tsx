import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { assets } from "@/assets/cuddle";
import { EASE } from "./Reveal";

type Product = {
  id: string;
  name: string;
  tagline: string;
  image: string;
  secondaryImage?: string;
  className: string;
};

const products: Product[] = [
  {
    id: "pillowcase",
    name: "The Grounding Pillowcase",
    tagline: "Your landing interface.",
    image: assets.prodPillowSage,
    secondaryImage: assets.prodPillowBlue,
    // Larger, offset left. Two pillowcases now clearly overlap.
    className: "md:col-span-7 md:col-start-1 md:row-start-1 md:pl-[4%] md:pr-[12%]",
  },
  {
    id: "mask",
    name: "The Blackout Sleep Mask",
    tagline: "Zero pressure. Total dark.",
    image: assets.prodMask,
    // Smaller, tucked high right — asymmetric weight
    className: "md:col-span-4 md:col-start-9 md:row-start-1 md:mt-40",
  },
  {
    id: "hair-tie",
    name: "The Zero-Tug Hair Ties",
    tagline: "Hold without the pull.",
    image: assets.prodHairTie,
    // Small, lower-left indent
    className: "md:col-span-4 md:col-start-2 md:row-start-2 md:mt-24",
  },
  {
    id: "sanctuary",
    name: "The Complete Sanctuary Set",
    tagline: "The full ritual, bundled.",
    image: assets.prodSanctuary,
    // Largest, lifted up — the finale object
    className: "md:col-span-6 md:col-start-7 md:row-start-2 md:-mt-24 md:pl-[6%]",
  },
];

function Cursor({ visible, x, y }: { visible: boolean; x: number; y: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-40 hidden md:flex items-center justify-center rounded-full transition-[opacity,transform] duration-500 ease-out"
      style={{
        left: x,
        top: y,
        width: 110,
        height: 110,
        transform: `translate(-50%,-50%) scale(${visible ? 1 : 0.7})`,
        backgroundColor: "rgba(33,38,43,0.92)",
        color: "#F4F1EA",
        opacity: visible ? 1 : 0,
        fontFamily: "var(--font-body)",
        fontSize: 10,
        letterSpacing: "0.32em",
        textTransform: "uppercase",
        backdropFilter: "blur(4px)",
        boxShadow: "0 20px 60px -20px rgba(33,38,43,0.35)",
      }}
    >
      See more
    </div>
  );
}

export function FeaturedCollection() {
  const [cursor, setCursor] = useState({ visible: false, x: 0, y: 0 });
  const zoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = zoneRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => setCursor((c) => ({ ...c, x: e.clientX, y: e.clientY }));
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="collection" className="relative overflow-hidden" style={{ backgroundColor: "#F4F1EA" }}>
      <div className="mx-auto max-w-[1280px] px-6 pt-[180px] pb-[140px] md:px-14 md:pt-[240px] md:pb-[180px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.2, ease: EASE }}
          className="mb-28 md:mb-36 max-w-2xl md:pl-[4%]"
        >
          <p className="small-caps-label mb-5" style={{ color: "#8CA196" }}>The Objects</p>
          <h2
            className="text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.08]"
            style={{ fontFamily: "var(--font-display)", color: "#21262B", textWrap: "balance", letterSpacing: "-0.01em" }}
          >
            Four bedside objects.<br />One nightly ritual.
          </h2>
        </motion.div>

        <div ref={zoneRef} className="grid grid-cols-1 gap-20 md:grid-cols-12 md:gap-x-6 md:gap-y-32 relative">
          {products.map((p, i) => (
            <motion.a
              key={p.id}
              href={`#product-${p.id}`}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12%" }}
              transition={{ duration: 1.2, delay: i * 0.15, ease: EASE }}
              onMouseEnter={() => setCursor((c) => ({ ...c, visible: true }))}
              onMouseLeave={() => setCursor((c) => ({ ...c, visible: false }))}
              className={`group relative block ${p.className}`}
            >
              <div className="relative overflow-visible">
                {p.secondaryImage && (
                  <img
                    src={p.secondaryImage}
                    alt=""
                    aria-hidden
                    className="absolute right-[-14%] top-[-18%] w-[72%] rotate-[-4deg] transition-transform duration-[900ms] ease-out group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:rotate-[-2deg]"
                    loading="lazy"
                  />
                )}
                <img
                  src={p.image}
                  alt={p.name}
                  className="relative w-full transition-transform duration-[900ms] ease-out group-hover:scale-[1.025]"
                  loading="lazy"
                />
              </div>
              <div className="mt-8">
                <h3
                  className="text-xl md:text-[1.4rem] leading-tight"
                  style={{ fontFamily: "var(--font-display)", color: "#21262B" }}
                >
                  {p.name}
                </h3>
                <p className="mt-2 text-sm md:text-[0.95rem] opacity-60" style={{ color: "#21262B" }}>{p.tagline}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-32 md:mt-40 flex justify-end md:pr-[6%]">
          <a href="#all-products" className="group inline-flex items-center gap-3 transition-all duration-500 hover:translate-x-2 hover:opacity-80">
            <img src={assets.productsCtaAll} alt="All Products →" className="h-8 md:h-10 w-auto" />
          </a>
        </div>
      </div>
      <Cursor visible={cursor.visible} x={cursor.x} y={cursor.y} />
    </section>
  );
}