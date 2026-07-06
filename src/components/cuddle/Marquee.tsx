export function Marquee() {
  const text =
    "22-momme  ·  6A-grade mulberry silk  ·  100% tagless  ·  60-night trial  ·  ";
  const repeated = text.repeat(6);
  return (
    <section aria-hidden className="relative overflow-hidden border-y" style={{ backgroundColor: "#F4F1EA", borderColor: "rgba(33,38,43,0.06)" }}>
      <div className="marquee-track flex whitespace-nowrap py-6 text-[clamp(1rem,1.6vw,1.25rem)]" style={{ color: "#21262B", opacity: 0.55, fontFamily: "var(--font-display)" }}>
        <span className="pr-8">{repeated}</span>
        <span className="pr-8">{repeated}</span>
      </div>
    </section>
  );
}