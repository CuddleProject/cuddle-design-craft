
# Cuddle Project Homepage — Implementation Plan (Phase 1)

Single source of truth: CLAUDE.md > rebuild-brief.md > SKILL-cuddle-design-craft.md > Homepage Mockup PDF. All LOCKED DECISIONS honored. No code, assets, or generation until you approve this plan **and** confirm "All images have been uploaded. Begin Build Mode."

---

## 1. Stack & Project Structure

Existing Lovable stack stays put: **TanStack Start + React + Vite + Tailwind v4**. Do not migrate to plain Vite/React Router even though the brief mentions "Vite + React + Tailwind" — the Lovable-generated project uses TanStack Start file routing and the brief instructs us to keep the structure Lovable-compatible.

- Home route: `src/routes/index.tsx` (replace placeholder).
- Reusable homepage sections: `src/components/home/<Section>.tsx`, one file per section (11 sections).
- Shared chrome: `src/components/layout/SiteHeader.tsx`, `src/components/layout/SiteFooter.tsx`, `src/components/layout/MarketingLayout.tsx` (or inline in `__root.tsx`).
- Motion primitives: `src/components/motion/Reveal.tsx`, `Stagger.tsx`, `Parallax.tsx`, `Marquee.tsx` — all wrap Framer Motion and read `useReducedMotion()`.
- Design tokens: extended in `src/styles.css` under `@theme` (Tailwind v4 CSS-first — no `tailwind.config.js`).
- Fonts: Questrial + Montserrat weight 200 loaded via `<link>` in `src/routes/__root.tsx` head (per Tailwind v4 rule: never `@import` remote fonts in CSS).
- Assets: served from `public/assets/` exactly per the brief's asset map (not `src/assets` — the brief locks the path). Handwritten PNGs are `<img>` elements, never a script font.
- Head/SEO: `head()` on the index route sets real title/description/og; FAQPage JSON-LD injected as a `<script type="application/ld+json">` in the FAQ section (answers also live in DOM on load).

Non-goals for this phase: no PDPs, no cart, no Shop/Science/Quiet Hours/About routes. Header/footer links point to `#` placeholders (or `/` sections) with a comment marking Phase 2. Sensory Check CTA links to `#` for now.

---

## 2. Design System

### Color tokens (add to `src/styles.css`)
```
--parchment: #F4F1EA
--pale-oak:  #D2C2B4
--muted-teal:#8CA196
--pale-sky:  #BCCCD4
--jet-black: #21262B
--terracotta-clay: #C97C5D   /* CTA / accent only */
```
Also map to `@theme inline` so `bg-parchment`, `text-jet-black`, `bg-terracotta`, etc. exist as Tailwind utilities. No pure `#000`/`#FFF`. Terracotta capped ≤ ~5 uses per viewport.

### Typography
- Display: `Questrial`, fluid `clamp(2.5rem, 6vw, 4.5rem)` H1, `clamp(2rem, 4vw, 3rem)` H2, line-height 1.1–1.2, tracking 0–0.02em.
- Body: `Montserrat` weight 200, 16–18px, line-height 1.7–1.8, tracking 0.01em.
- Small caps labels: 11–12px, tracking 0.15–0.2em, uppercase.
- `text-wrap: balance` on all display headings.
- Max 3 visible type sizes per viewport.
- Handwritten images: sized 1.1–1.4× cap-height of surrounding text, baseline-aligned, intrinsic aspect ratio preserved, never cropped.

### Spacing rhythm
- 8px base unit (4px allowed only for fine text spacing).
- Section vertical padding: 120–160px desktop, 64–88px mobile.
- Content max-width 1200px; text columns capped ~680px.
- Asymmetric layouts must have counter-balancing whitespace; no crowding.

---

## 3. Page Architecture (section order — locked)

Header (sticky) → 1. Masthead → 2. Hero sequence → 3. Grounding transition → 4. Featured Collection → 5. Marquee → 6. FAQ → 7. Spec cards → 8. Founder's Note → 9. Testimonials → 10. Sensory Check → 11. Footer.

### Component hierarchy
```text
<RootShell>
  <SiteHeader/>                 sticky from load; logo swaps by section bg
  <main>
    <Masthead/>                 home-hero-banner + home-hero-title overlay, optional parallax, scroll indicator
    <HeroSequence/>             4 rows in normal flow, staggered reveals, gradient parchment→pale-sky→terracotta
    <GroundingTransition/>      full-bleed pillowcase photo + white handwritten title overlay, scroll-snap-stop:always, blur→sharp reveal, parallax
    <FeaturedCollection/>       scattered cutouts (pillowcase = blue+sage layered), circular "See more" cursor label on hover, all-products CTA image
    <SpecMarquee/>              slow seamless ticker: "22-momme · 6A-grade mulberry silk · 100% tagless · 60-night trial"
    <FAQSection/>               centered heading with handwritten accent; desktop = questions overlaid on photo at scattered positions with ⊕, inline expand-below; mobile <768px = standard stacked accordion
    <SpecCards/>                sticky image left, 3 stat rows right, terracotta comparison lines
    <FoundersNote/>             scroll-driven gradient + synchronized text-color inversion, quote with handwritten "irons out"
    <Testimonials/>             3 avatars, staggered reveal, handwritten "sensitive sleepers" accent, no medical language
    <SensoryCheck/>              handwritten "Not sure" heading, static bg, simple fade, CTA button image
  </main>
  <SiteFooter/>                 dark bg, white logo, footer CTA image, 3 nav columns, newsletter, socials, legal
</main>
```

### Header/Footer detail
- Header: `Shop · The Science` (left) — centered logo (black on light sections, white on dark/photo sections; swap via IntersectionObserver watching section bg intent, or a data attribute on each section root) — `Quiet Hours · About Us` (right) — cart icon. About Us link **must** exist.
- Footer columns: Shop (All Products · Gift Sets · Sensory Check) / About (Our Brand · Our Product · Our Philosophy) / Support (Care Guide · Shipping & Returns · FAQ · Contact). Newsletter with `footer-subscribe-for-updates.png` label, copy verbatim, email field, terracotta Subscribe button. Social: Instagram, Facebook, X. Legal: `2026 © Cuddle Project. All rights reserved.`

---

## 4. Motion Strategy (Framer Motion `motion/react`)

Eight rules from the brief are treated as invariants. Concrete implementation:

- **Reveal primitive:** `initial={{opacity:0, y:24}}` → `whileInView={{opacity:1, y:0}}`, `viewport={{once:true, margin:"-10%"}}`, `transition={{duration:0.7, ease:[0.22,1,0.36,1]}}`. All entrances share this easing/duration family.
- **Stagger:** parent `staggerChildren: 0.12–0.2`, illustration leads, text follows (or per brief order).
- **Hero sequence gradient:** background gradient scroll-tied via `useScroll` + `useTransform` on the HeroSequence wrapper — parchment → pale-sky → brief terracotta accent.
- **Headline breathing:** only on largest headlines (Masthead title if applicable, FAQ heading, Spec-cards heading), letter-spacing 0.02em → 0.05em on reveal; disabled below 768px.
- **Parallax:** only on `home-transition-grounding-pillowcase.png` and `home-faq-banner.png`, 10–15% differential via `useScroll` `useTransform` on `y`. Never on illustrations.
- **Sticky pinning:** spec-cards left image via `position: sticky; top:` (CSS, not JS). Releases naturally on scroll out.
- **Marquee:** one instance only, Section 5, slow seamless loop (`transform: translateX` keyframes, 40–60s duration), `aria-hidden`, pauses under reduced-motion.
- **CTA hover:** 250–350ms `easeInOut`. Arrow glyphs shift 4px.
- **Scroll-snap:** container-level `scroll-snap-type: y proximity`; `scroll-snap-stop: always` only on GroundingTransition.
- **Founder's Note:** scroll-driven color inversion via `useTransform` mapping scroll progress to `backgroundColor`/`color` tokens; no time-based loop.
- **Reduced motion:** global `useReducedMotion()` short-circuits parallax, letter-spacing breathing, marquee autoplay, blur→sharp filter; entrances degrade to simple opacity fades.
- **Anti-patterns:** no spring/bounce presets, no linear easing, no width/height animation (except FAQ accordion height via Framer Motion `height: auto`), no spins, no gradient text, no pulse (except masthead SCROLL indicator).

---

## 5. Responsive Strategy

Breakpoints: **mobile-first**, 768px (tablet), 1024px (desktop). Desktop is highest priority.

- Scattered/asymmetric layouts collapse to single-column with alternating alignment on mobile.
- HeroSequence: on mobile, the four rows stack; illustrations shrink to 70–80% weight.
- GroundingTransition: keeps full-bleed; handwritten title overlay repositions center; parallax off <768px.
- FeaturedCollection: scattered floating on desktop → single-column with visible "See more" label under each product on touch (no cursor label).
- FAQ: **desktop** = overlaid questions on photo at scattered positions; **mobile <768px** = photo full-width, standard stacked accordion below.
- SpecCards: sticky-left / scroll-right on desktop; mobile stacks image above stats, no sticky.
- FoundersNote: scroll-driven gradient still runs; letter-spacing breathing off <768px.
- Marquee: slows further or pauses on mobile.
- Touch targets ≥ 44px. Header collapses to hamburger only if strictly needed by mockup; otherwise minimize.

---

## 6. Asset Mapping (from brief §0c — nothing invented)

All paths under `public/assets/`. Every image in code must resolve to one of these:

| Section | Assets used |
|---|---|
| Header | `brand-logo-black.png`, `brand-logo-white.png` |
| Masthead | `home-hero-banner.png`, `home-hero-title.png` |
| HeroSequence | `home-story-pen-illustration.png`, `home-story-focus-typography.png`, `home-story-sleep-illustration.png` |
| GroundingTransition | `home-transition-grounding-pillowcase.png`, `home-transition-grounding-title.png` |
| FeaturedCollection | `product-grounding-pillowcase-blue.png`, `product-grounding-pillowcase-sage.png`, `product-blackout-sleep-mask.png`, `product-zero-tug-hair-tie.png`, `product-complete-sanctuary-set.png`, `home-products-cta-all-products.png` |
| FAQ | `home-faq-banner.png`, `handwritten-calmer-way.png` |
| SpecCards | `home-engineering-image.png`, `handwritten-recovery.png` |
| Founder's Note | `handwritten-irons-out.png` |
| Testimonials | `handwritten-sensitive-sleepers.png`, `home-testimonial-avatar-01.png`, `home-testimonial-avatar-02.png`, `home-testimonial-avatar-03.png` |
| Sensory Check | `handwritten-not-sure.png`, `home-cta-button-start-check.png` |
| Footer | `brand-logo-white.png`, `footer-cta-cuddle-your-tension-away.png`, `footer-subscribe-for-updates.png` |

STEP 0 pre-conditions from the brief will be enforced at build start:
- 0a: Confirm the seven numeric-name files have already been renamed (`5.png`→`handwritten-calmer-way.png`, etc.). If not renamed at upload, we'll rename before wiring.
- 0b: PNG alpha check on all `product-*`, `home-testimonial-avatar-02/03`, all handwritten/typography images, both logos. Report anything with a baked background before layout.
- 0c: The complete map above is verified against uploads before writing markup.

---

## 7. Copy (locked verbatim — no rewrites)

HeroSequence rows 1–4, marquee terms, FAQ four Q&As, spec-cards table (labels/stats/descriptions/terracotta comparison lines), Founder's Note quote + tag ("— Sunny Wong, Founder"), Featured Collection taglines, Testimonials heading, Sensory Check heading + subline, Footer copy — all pulled verbatim from `rebuild-brief.md`. Testimonial quote bodies remain the current placeholders (brief says "unchanged"). No sleep-quality causal claims on pillowcase/hair ties; no Cardiff/SLEEP study reference; no HRV/cortisol/EEG language anywhere on this page.

---

## 8. Accessibility

- Semantic landmarks: `<header>`, `<main>`, `<nav>`, `<footer>`; one H1 (Masthead), H2 per major section.
- All meaningful images have alt text; decorative cutouts get `alt=""`.
- Handwritten image accents used inside a heading: whole heading has a proper text alt, e.g. `<h2>A smoother surface, a <img alt="calmer way" ... /> into sleep.</h2>`.
- Marquee: `aria-hidden="true"` (text also present elsewhere via specs).
- FAQ accordion: buttons with `aria-expanded`, `aria-controls`; answers in DOM on load (not conditionally rendered) — visibility toggled via CSS/height animation. FAQPage JSON-LD.
- Focus rings: 2px terracotta @ 60% opacity, 2px offset. Keyboard operable header, FAQ, CTAs, newsletter form.
- `prefers-reduced-motion`: reduces to simple opacity fades; parallax/marquee/breathing off.
- Color contrast: text on photos uses a soft top-to-bottom black-to-transparent scrim (0→30%), not hard overlay boxes; verified AA on all photo overlays.

---

## 9. Performance

- Set explicit `width`/`height` (or `aspect-ratio`) on every image → zero CLS.
- `loading="eager"` on masthead; `loading="lazy" decoding="async"` on everything below the fold.
- Preload the two fonts + masthead image via `<link rel="preload">` in root head.
- Animate only `transform` and `opacity` (except FAQ height).
- No heavy JS libraries beyond Framer Motion. No icon packs.
- Scroll-linked effects use `useScroll`/`useTransform` (rAF-scheduled, cheap).
- Verify smoothness at 4× CPU throttle in Pass 6.

---

## 10. Implementation Order (Build Mode)

Executed only after: (a) plan approved, (b) you say "All images have been uploaded. Begin Build Mode.", (c) STEP 0 asset checks pass.

1. Tokens + fonts + Tailwind theme wiring; global body styles; scroll-snap container.
2. Motion primitives (`Reveal`, `Stagger`, `Parallax`, `Marquee`, reduced-motion hook).
3. `SiteHeader` (sticky, logo swap) + `SiteFooter`.
4. Sections top-down: Masthead → HeroSequence → GroundingTransition → FeaturedCollection → SpecMarquee → FAQ → SpecCards → FoundersNote → Testimonials → SensoryCheck.
5. FAQ JSON-LD + head metadata on index route.
6. Responsive pass at 375 / 768 / 1024 / 1440.
7. **Polish passes (mandatory, one per commit, whole page each):**
   1. Rhythm & spacing
   2. Typography
   3. Motion timing
   4. Micro-interactions
   5. Responsive
   6. Performance & accessibility
8. Final "does this feel expensive?" self-check per section; fix any failing section before declaring done.

---

## 11. Ambiguities / Risks / Open Questions (please confirm before Build Mode)

1. **Assets not yet uploaded.** Zero of the 27+ files listed in §0c are in the repo. I will not build, substitute, or generate any of them. Please upload in batches; I will acknowledge each batch, update the inventory, and flag what's still missing. Build starts only when the inventory is complete.
2. **STEP 0a renames.** The brief expects renames to happen via `git mv` before wiring. Please confirm you'll upload the files under their **final** names (`handwritten-calmer-way.png`, etc.), or upload the numeric names and let me rename them once inside the sandbox.
3. **Stack confirmation.** The brief says "Vite + React + Tailwind". The Lovable project is TanStack Start + Vite + React + Tailwind v4. I will keep TanStack Start (Lovable-compatible) unless you tell me otherwise. Please confirm.
4. **Header logo swap trigger.** Brief says "white/black variant per background". Plan is to swap via a data attribute on each section (`data-header="light"|"dark"`) observed by an IntersectionObserver on the header. Confirm or specify a different trigger.
5. **Testimonial quote bodies.** Brief says "Three placeholder quotes unchanged" — I don't have the current quote text in these documents. Please paste the exact three quotes (or confirm I should use short, non-medical placeholders like "It feels…").
6. **Featured Collection card behavior.** Click → PDP. PDPs don't exist yet. OK to link to `#` placeholders with a Phase-2 comment? Same question for header/footer links (Shop, The Science, Quiet Hours, About Us, all footer nav) and the Sensory Check CTA.
7. **Cart icon.** Header includes a cart icon. Purely visual placeholder (no state) for this phase — confirm.
8. **Newsletter submit.** No backend requested. Plan: form with client-side validation, submit is a no-op with a subtle success state. Confirm, or should this write to Lovable Cloud?
9. **Founder's Note gradient palette.** Brief says "scroll-driven gradient + synchronized text-color inversion" but doesn't lock the start/end colors. Plan: `parchment → jet-black` background with `jet-black → parchment` text, no terracotta (terracotta reserved). Confirm.
10. **Scroll-snap scope.** Brief specifies `y proximity` sitewide with `stop: always` only on GroundingTransition. Proximity snap on long editorial pages can feel fighty. I'll implement as spec'd; if it feels wrong during Polish Pass 3, I'll flag before changing.
11. **SEO defaults.** Home title/description not specified. Proposed: title `Cuddle Project — Silk sleep essentials for sensitive sleepers`, description `22-momme, 6A-grade mulberry silk. 100% tagless. A calmer landing interface for your 8 hours. 60-night trial.` Please confirm or edit.
12. **Mockup PDF details I have not yet parsed pixel-for-pixel** (exact scatter positions of Featured Collection cutouts, exact FAQ overlay coordinates, masthead title diagonal angle, exact avatar layout). Plan is to match the mockup by eye during build; if you want pixel-exact coordinates, please annotate on the PDF or provide a spec.

---

## 12. What I will NOT do

- Not start any code, components, or asset generation until you approve **and** confirm all uploads.
- Not substitute a script webfont for handwritten images.
- Not use pure `#000`/`#FFF`, default Tailwind palette colors, or new hex values.
- Not add HRV / cortisol / EEG / Cardiff-SLEEP references or any sleep-quality claim on pillowcase/hair ties beyond the hedged form permitted.
- Not add card-heavy layouts, bootstrap-y grids, harsh borders, drop-shadow boxes, spring/bounce animation.
- Not rename "Quiet Hours" to "Journal".
- Not feature Deluxe Sanctuary Set or Universal Gift Duo on the homepage.
- Not migrate frameworks or restructure the Lovable project layout.

---

**Waiting for:** plan approval, answers to open questions §11, and image uploads (batched, 10 at a time). I will acknowledge each batch and re-issue the inventory delta. Build begins only when you say "All images have been uploaded. Begin Build Mode."
