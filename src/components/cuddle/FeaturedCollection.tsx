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
    className: "md:col-span-7 md:col-start-1 md:row-start-1",
  },
  {
    id: "mask",
    name: "The Blackout Sleep Mask",
    tagline: "Zero pressure. Total dark.",
    image: assets.prodMask,
    className: "md:col-span-5 md:col-start-8 md:row-start-1 md:mt-24",
  },
  {
    id: "hair-tie",
    name: "The Zero-Tug Hair Ties",
    tagline: "Hold without the pull.",
    image: assets.prodHairTie,
    className: "md:col-span-5 md:col-start-2 md:row-start-2 md:mt-8",
  },
  {
    id: "sanctuary",
    name: "The Complete Sanctuary Set",
    tagline: "The full ritual, bundled.",
    image: assets.prodSanctuary,
    className: "md:col-span-6 md:col-start-7 md:row-start-2 md:-mt-16",
  },
];

function Cursor({ visible, x, y }: { visible: boolean; x: number; y: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-40 hidden md:flex items-center justify-center rounded-full transition-opacity duration-200"
      style={{
        left: x,
        top: y,
        width: 96,
        height: 96,
        transform: "translate(-50%,-50%)",
        backgroundColor: "#21262B",
        color: "#F4F1EA",
        opacity: visible ? 1 : 0,
        fontFamily: "var(--font-body)",
        fontSize: 10,
        letterSpacing: "0.24em",
        textTransform: "uppercase",
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
      <div className="mx-auto max-w-[1200px] px-6 py-[120px] md:px-10 md:py-[160px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-20 max-w-2xl"
        >
          <p className="small-caps-label mb-4" style={{ color: "#8CA196" }}>The Objects</p>
          <h2 className="text-[clamp(2rem,4.2vw,3.2rem)]" style={{ fontFamily: "var(--font-display)", color: "#21262B" }}>
            Four bedside objects. One nightly ritual.
          </h2>
        </motion.div>

        <div ref={zoneRef} className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-x-8 md:gap-y-24 relative">
          {products.map((p, i) => (
            <motion.a
              key={p.id}
              href={`#product-${p.id}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.9, delay: i * 0.12, ease: EASE }}
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
                    className="absolute -right-6 -top-8 w-[55%] transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:rotate-1"
                    loading="lazy"
                  />
                )}
                <img
                  src={p.image}
                  alt={p.name}
                  className="relative w-full transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-xl md:text-2xl" style={{ fontFamily: "var(--font-display)", color: "#21262B" }}>{p.name}</h3>
                <p className="mt-1 text-sm md:text-base opacity-70" style={{ color: "#21262B" }}>{p.tagline}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-20 flex justify-end">
          <a href="#all-products" className="group inline-flex items-center gap-3 transition-opacity hover:opacity-70">
            <img src={assets.productsCtaAll} alt="All Products →" className="h-6 md:h-7 w-auto" />
          </a>
        </div>
      </div>
      <Cursor visible={cursor.visible} x={cursor.x} y={cursor.y} />
    </section>
  );
}