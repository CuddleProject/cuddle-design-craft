# SKILL: Cuddle Design Craft
> Place this file at `.claude/skills/cuddle-design-craft/SKILL.md` in the repo.
> Purpose: encode the visual-execution craft that separates a generic build from a premium one, tuned specifically to Cuddle Project's "quiet, breathing, tactile" aesthetic. Apply these rules to ALL layout, styling, and animation work in this project. Brand rules and compliance live in CLAUDE.md; this skill governs HOW things look and move.

## 1. Spacing & Layout Rhythm
- Base unit 8px. All padding/margin/gap values are multiples of 8 (4 allowed for fine text spacing only).
- Section vertical padding: 120–160px desktop, 64–88px mobile. When unsure, add MORE whitespace — this brand breathes.
- Content max-width: 1200px for mixed sections; long-form text columns max 680px (~65–75 characters per line).
- Asymmetry is intentional (mockup uses scattered layouts) but must be optically balanced: offset elements need counterweight whitespace, never crowd two floated items on the same side.
- Never fill space for the sake of it. Empty space is a design element here, not a bug.

## 2. Typography Hierarchy
- Display (Questrial): use fluid sizing, e.g. h1 `clamp(2.5rem, 6vw, 4.5rem)`, h2 `clamp(2rem, 4vw, 3rem)`. Line-height 1.1–1.2 for display, letter-spacing normal-to-slightly-open (0 to 0.02em). Never bold-weight Questrial artificially.
- Body (Montserrat 200): 16–18px, line-height 1.7–1.8, letter-spacing 0.01em. Small caps labels: 11–12px, letter-spacing 0.15–0.2em, uppercase.
- Apply `text-wrap: balance` to headlines to prevent orphan words.
- Handwritten accents are image assets — size them relative to the adjacent text cap-height (roughly 1.1–1.4x the surrounding font size), baseline-aligned, never stretched.
- Maximum 3 type sizes visible in any one viewport. Restraint reads as expensive.

## 3. Color Discipline
- Tokens only (defined in CLAUDE.md). Never introduce new hex values, never use default Tailwind palette colors (no blue-500, gray-200, etc.).
- Terracotta Clay is scarce by design: CTAs, one marquee, one gradient peak, comparison lines. If terracotta appears more than ~5 times in a viewport-height, remove some.
- Text on photos: prefer a subtle scrim (linear-gradient black 0→30% opacity) or soft text-shadow over hard overlay boxes.
- No pure #000 or #FFF anywhere — use --jet-black and --parchment.

## 4. Motion Craft (implementation: Framer Motion)
- Library: Framer Motion (`motion/react`). Animate ONLY transform and opacity (GPU-composited); never animate width/height/top/left (layout thrash), except FAQ accordion height via Framer Motion's height:auto animation.
- Default reveal: `initial={{ opacity: 0, y: 24 }}` → `whileInView={{ opacity: 1, y: 0 }}`, `viewport={{ once: true, margin: "-10%" }}`, duration 0.6–0.8s.
- Signature easing: `[0.22, 1, 0.36, 1]` (soft ease-out) for entrances; `easeInOut` 0.25–0.35s for hovers. NEVER linear, NEVER spring/bounce presets.
- Stagger: parent `staggerChildren: 0.12–0.2`. Illustration leads, text follows (or per brief).
- Scroll-driven effects (hero gradient, parallax): `useScroll` + `useTransform`; wrap in `useReducedMotion()` check — reduced-motion users get simple fades, no parallax, no marquee autoplay.
- Duration discipline: micro-interactions 0.2–0.35s; reveals 0.6–0.8s; ambient (gradient/parallax) tied to scroll, not time. Nothing loops except the single marquee.

## 5. Imagery Treatment
- Cutout PNGs float directly on section backgrounds: no card containers, no borders, no drop-shadow boxes. If depth is needed, use a very soft, large-radius shadow (e.g. `0 24px 80px -32px rgb(33 38 43 / 0.25)`) sparingly.
- Full-bleed photos: `object-fit: cover`, subtle blur-to-sharp reveal on entry (filter blur 8px→0 + opacity), optional 10–15% parallax where the brief allows.
- Set explicit width/height or aspect-ratio on every image to prevent layout shift; `loading="lazy"` below the fold, eager for masthead.
- Never crop the handwritten-phrase images; render at intrinsic aspect ratio.

## 6. Micro-interactions ("feels expensive" details)
- Product hover: image scales to 1.05 over 0.3s ease-in-out; custom circular "See more" cursor label follows pointer (mix of position: fixed + pointer tracking), fades in 0.2s. Hide on touch devices.
- Links: underline animates in from left (background-size or scaleX transition), not instant.
- Buttons/CTAs: background/color transitions 0.25–0.35s; arrow glyphs shift 4px on hover.
- Focus states: visible keyboard focus rings (2px, terracotta at 60% opacity offset 2px) — accessible AND on-brand.
- Scroll indicator on masthead: small "SCROLL" label with a slow 1.5s fade pulse, the ONE permitted ambient text animation.

## 7. Responsive Craft
- Breakpoints: 768px (tablet), 1024px (desktop). Mobile-first CSS.
- Mobile simplifications are already specified in the brief (FAQ accordion fallback, simplified hero crossfade, no letter-spacing animation, no parallax). Additionally: scattered/asymmetric layouts collapse to single-column with alternating alignment; cutouts scale to 70–80% of desktop visual weight; marquee slows further or pauses.
- Touch targets minimum 44px. Hover-only affordances need visible mobile equivalents (e.g. "See more" cursor label becomes a small persistent label under each product on touch devices).

## 8. Anti-patterns (never do these)
- No bounces, springs, spins, pulses (except the scroll indicator), typewriter effects, or gradient text.
- No emoji in UI. No stock icon packs where the brand's hand-drawn language exists.
- No uniform card grids with borders+shadows — this brand scatters and floats.
- No pure-black overlays, no harsh 1px gray borders (use spacing to separate, or a 1px border at 8–10% opacity of jet-black if unavoidable).
- No default blue links, no browser-default focus outlines, no instant state jumps.
- Never let a first-pass output ship: every section goes through the polish passes defined in the rebuild brief.

## 9. "Does this feel expensive?" self-check (run per section before declaring done)
1. Is there enough negative space that nothing feels crowded?
2. Are all values on the spacing scale, all colors from tokens?
3. Do entrances share the same easing/duration family (coherent motion voice)?
4. Would removing one element improve it? (If yes, propose removal.)
5. Any layout shift, image pop-in, or animation jank at 4x CPU throttle?
6. Does it match the mockup's arrangement and the brief's locked copy exactly?
