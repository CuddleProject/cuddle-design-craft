export function Marquee() {
  const text =
    "22-momme  —  6A-grade mulberry silk  —  100% tagless  —  60-night trial  —  ";
  const repeated = text.repeat(6);
  return (
    <section
      aria-hidden
      className="relative overflow-hidden border-y"
      style={{ backgroundColor: "#F4F1EA", borderColor: "rgba(33,38,43,0.08)" }}
    >
      <div
        className="marquee-track flex whitespace-nowrap py-8 text-[clamp(1.05rem,1.7vw,1.4rem)]"
        style={{
          color: "#21262B",
          opacity: 0.42,
          fontFamily: "var(--font-display)",
          letterSpacing: "0.02em",
        }}
      >
        <span className="pr-8">{repeated}</span>
        <span className="pr-8">{repeated}</span>
      </div>
      {/* Edge fades — cinematic hint the strip is continuous */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-24"
        style={{ background: "linear-gradient(90deg, #F4F1EA 0%, rgba(244,241,234,0) 100%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-24"
        style={{ background: "linear-gradient(270deg, #F4F1EA 0%, rgba(244,241,234,0) 100%)" }}
      />
    </section>
  );
}