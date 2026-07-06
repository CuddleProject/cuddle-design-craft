import { Instagram, Facebook } from "lucide-react";
import { assets } from "@/assets/cuddle";

const cols = [
  { title: "Shop", links: ["All Products", "Gift Sets", "Sensory Check"] },
  { title: "About", links: ["Our Brand", "Our Product", "Our Philosophy"] },
  { title: "Support", links: ["Care Guide", "Shipping & Returns", "FAQ", "Contact"] },
];

export function Footer() {
  return (
    <footer className="relative" style={{ backgroundColor: "#21262B", color: "#F4F1EA" }}>
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32">
        {/* Top */}
        <div className="flex flex-col gap-14 md:flex-row md:items-start md:justify-between">
          <a
            href="#products"
            className="inline-block transition-all duration-500 hover:translate-x-2 hover:opacity-80"
          >
            <img src={assets.footerCta} alt="Cuddle Your Tension Away →" className="h-12 md:h-16 w-auto" />
          </a>
          <img src={assets.brandLogoWhite} alt="Cuddle Project" className="h-8 md:h-10 w-auto opacity-85 md:order-last" />
        </div>

        <div className="mt-20 grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-8">
          {cols.map((c) => (
            <div key={c.title} className="md:col-span-2">
              <p className="small-caps-label mb-5 opacity-60">{c.title}</p>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href={`#${l.toLowerCase().replace(/\s+/g, "-")}`} className="text-sm transition-opacity hover:opacity-70">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-6">
            <img src={assets.footerSubscribe} alt="Subscribe for updates" className="h-8 md:h-10 w-auto" />
            <p className="mt-4 max-w-md text-sm opacity-70">
              — only when we actually have something worth saying about sensory overload. No fluff.
            </p>
            <form className="mt-6 flex max-w-md items-center gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="you@quietly.com"
                className="flex-1 border-b bg-transparent py-3 text-sm outline-none placeholder:opacity-40 focus:border-parchment"
                style={{ borderColor: "rgba(244,241,234,0.35)", color: "#F4F1EA" }}
              />
              <button
                type="submit"
                className="rounded-full px-6 py-3 text-xs uppercase tracking-[0.24em] transition-colors"
                style={{ backgroundColor: "#C97C5D", color: "#F4F1EA" }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-24 flex flex-col gap-8 border-t pt-8 md:flex-row md:items-center md:justify-between" style={{ borderColor: "rgba(244,241,234,0.15)" }}>
          <div className="flex items-center gap-6 opacity-80">
            <a href="#instagram" aria-label="Instagram" className="transition-opacity hover:opacity-60"><Instagram className="h-4 w-4" strokeWidth={1.4} /></a>
            <a href="#facebook" aria-label="Facebook" className="transition-opacity hover:opacity-60"><Facebook className="h-4 w-4" strokeWidth={1.4} /></a>
            <a href="#x" aria-label="X" className="text-xs tracking-[0.24em] transition-opacity hover:opacity-60">X</a>
          </div>
          <p className="text-xs opacity-50">2026 © Cuddle Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}