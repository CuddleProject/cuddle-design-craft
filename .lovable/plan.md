
# Cuddle Project Homepage — Implementation Plan (unchanged from approved v1)

Priority: CLAUDE.md > rebuild-brief.md > SKILL-cuddle-design-craft.md > Homepage Mockup PDF. All LOCKED DECISIONS honored. No code until (a) plan approved (done), (b) all uploads complete, (c) you say "All images have been uploaded. Begin Build Mode.", and (d) STEP 0 asset checks pass.

## Current upload status
- Received 20 / 28 files (batches 1 + 2).
- Still missing 8: home-transition-grounding-pillowcase.png, home-transition-grounding-title.png, product-grounding-pillowcase-blue.png, product-grounding-pillowcase-sage.png, product-blackout-sleep-mask.png, product-zero-tug-hair-tie.png, product-complete-sanctuary-set.png, home-testimonial-avatar-03.png.
- Two asset flags awaiting your call: (a) home-hero-title.png appears to contain only "AWAY"; (b) home-story-focus-typography.png contains profanity — confirm brand-voice acceptance or provide replacement.

## Everything else below is unchanged from the approved plan.

## 1. Stack & Project Structure
TanStack Start + React + Vite + Tailwind v4 (Lovable-compatible, no framework migration). Home route replaces `src/routes/index.tsx`. Homepage sections in `src/components/home/*`. Chrome in `src/components/layout/{SiteHeader,SiteFooter}.tsx`. Motion primitives in `src/components/motion/*` (Reveal, Stagger, Parallax, Marquee, reduced-motion hook). Tokens in `src/styles.css` via `@theme`. Fonts via `<link>` in `__root.tsx` head. Assets live under `public/assets/` per brief. FAQPage JSON-LD in FAQ section, answers in DOM on load.

## 2. Design System
Tokens: parchment #F4F1EA, pale-oak #D2C2B4, muted-teal #8CA196, pale-sky #BCCCD4, jet-black #21262B, terracotta-clay #C97C5D (CTA/accent only). No pure #000/#FFF. Terracotta capped ~5/viewport.
Type: Questrial display (fluid clamp), Montserrat 200 body 16–18px lh 1.7–1.8, small-caps labels tracked 0.15–0.2em, `text-wrap: balance` on displays, max 3 sizes per viewport, handwritten images sized 1.1–1.4× cap-height, never cropped.
Spacing: 8px base, 120–160px section pad desktop / 64–88px mobile, content max-width 1200px / text max 680px.

## 3. Page Architecture
Sticky Header → Masthead → HeroSequence (4 rows) → GroundingTransition → FeaturedCollection → SpecMarquee → FAQ → SpecCards → FoundersNote → Testimonials → SensoryCheck → Footer.
Header: Shop · The Science / centered logo (swap black/white by section bg) / Quiet Hours · About Us · cart.
Footer: dark bg, white logo, footer CTA image top-left, three nav columns (Shop / About / Support), newsletter with handwritten label + verbatim copy + terracotta Subscribe, socials (IG/FB/X), legal "2026 © Cuddle Project. All rights reserved."

## 4. Motion (Framer Motion `motion/react`, eight-rule spec)
Signature ease `[0.22, 1, 0.36, 1]`, 0.6–0.8s reveals, 0.12–0.2 stagger; parallax 10–15% only on grounding + FAQ photos; sticky pin only on spec-cards image (CSS); single slow marquee; CTA hovers 250–350ms; scroll-snap y proximity, stop:always only on GroundingTransition; headline breathing on largest headings desktop-only; scroll-driven gradient on HeroSequence + Founder's Note; `useReducedMotion()` kills parallax/breathing/marquee/blur.

## 5. Responsive
Mobile-first, 768/1024 breakpoints. Scattered layouts collapse single-column; FAQ overlay → stacked accordion <768px; spec cards drop sticky <1024px; parallax + breathing off <768px; touch targets ≥44px; "See more" cursor label becomes persistent under-product label on touch.

## 6. Copy
Verbatim from rebuild-brief.md: hero rows 1–4, marquee terms, four FAQ Q&As, spec-cards table (labels/stats/descriptions/comparison lines), Founder's Note quote + tag, Featured Collection taglines, Testimonials heading, Sensory Check heading + subline, Footer copy. No Cardiff/SLEEP, no HRV/cortisol/EEG, no medical-outcome testimonials.

## 7. Accessibility
Semantic landmarks, one H1, alt text on meaningful images (handwritten accents are alt inside heading text), `aria-hidden` marquee, FAQ buttons with `aria-expanded`/`aria-controls`, answers in DOM on load with height animation, focus rings 2px terracotta @ 60% offset 2px, scrim overlays on photo text for AA contrast, `prefers-reduced-motion` fallbacks.

## 8. Performance
Explicit width/height (aspect-ratio) on every image, eager masthead, lazy below fold, preload masthead + fonts, animate only transform+opacity (FAQ height excepted), scroll-linked effects via `useScroll`/`useTransform`, verified at 4× CPU throttle in Pass 6.

## 9. Implementation Order (Build Mode)
1. Tokens + fonts + theme + scroll-snap.
2. Motion primitives + reduced-motion hook.
3. SiteHeader + SiteFooter.
4. Sections top-down.
5. FAQPage JSON-LD + head metadata.
6. Responsive pass at 375 / 768 / 1024 / 1440.
7. Six mandatory polish passes (rhythm → typography → motion → micro-interactions → responsive → perf/a11y), one per commit, whole page each.
8. "Does this feel expensive?" per-section self-check; fix failures before declaring done.

## 10. Open Questions Still Awaiting Answers (from approved §11)
1. Upload complete? (batch 3 pending)
2. Confirm asset flags: home-hero-title.png contents; home-story-focus-typography.png profanity acceptance.
3. Filenames-on-upload look correct so far — no rename needed for batches 1+2. Batch 3 expected under final names.
4. Header logo swap trigger: OK to use `data-header="light|dark"` per section + IntersectionObserver?
5. Testimonial quote bodies: need three exact quotes (or approval for short non-medical placeholders).
6. Header/footer/Featured Collection/Sensory Check link targets: OK to point to `#` with Phase-2 comment?
7. Cart icon: purely visual placeholder for this phase — confirm.
8. Newsletter submit: client-side no-op + subtle success state — confirm, or wire to Lovable Cloud?
9. Founder's Note gradient palette: `parchment ↔ jet-black` bg with inverted text (no terracotta) — confirm.
10. SEO defaults for home title/description — confirm proposed strings or provide.
11. Pixel-exact scatter coordinates for Featured Collection cutouts, FAQ overlay, avatars: match by eye vs. mockup, or annotated spec?

**Waiting for:** Batch 3 (final 8 assets) + resolution of the two asset flags + answers to §10 above. Build begins only when you say "All images have been uploaded. Begin Build Mode."
