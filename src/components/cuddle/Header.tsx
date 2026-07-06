import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ShoppingBag } from "lucide-react";
import { assets } from "@/assets/cuddle";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className="absolute inset-0 -z-10 transition-[background-color,backdrop-filter] duration-500"
        style={{
          backgroundColor: scrolled ? "rgba(244,241,234,0.85)" : "rgba(244,241,234,0)",
          backdropFilter: scrolled ? "blur(14px)" : "blur(0)",
          WebkitBackdropFilter: scrolled ? "blur(14px)" : "blur(0)",
          borderBottom: scrolled ? "1px solid rgba(33,38,43,0.06)" : "1px solid transparent",
        }}
      />
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
        <nav className="hidden gap-8 text-[11px] tracking-[0.22em] uppercase text-jet-black/80 md:flex" style={{ color: "#21262B" }}>
          <a href="#collection" className="transition-opacity hover:opacity-60">Shop</a>
          <a href="#spec" className="transition-opacity hover:opacity-60">The Science</a>
        </nav>
        <a href="/" className="flex-1 md:flex-none flex justify-center">
          <img src={assets.brandLogoBlack} alt="Cuddle Project" className="h-8 md:h-9 w-auto" />
        </a>
        <nav className="hidden items-center gap-8 text-[11px] tracking-[0.22em] uppercase md:flex" style={{ color: "#21262B" }}>
          <a href="#quiet-hours" className="transition-opacity hover:opacity-60">Quiet Hours</a>
          <a href="#about" className="transition-opacity hover:opacity-60">About Us</a>
          <button aria-label="Cart" className="transition-opacity hover:opacity-60">
            <ShoppingBag className="h-4 w-4" strokeWidth={1.4} />
          </button>
        </nav>
        <button aria-label="Cart" className="md:hidden" style={{ color: "#21262B" }}>
          <ShoppingBag className="h-5 w-5" strokeWidth={1.4} />
        </button>
      </div>
    </motion.header>
  );
}