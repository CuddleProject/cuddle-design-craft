# Cuddle Project — Homepage Rebuild Brief (FINAL v8)

> Single source of truth for the homepage rebuild. Supersedes v7 (changes: Framer Motion named as the animation library; POLISH PASSES phase added; design-craft skill referenced). Written for Claude Code working in the repo root — CLAUDE.md and the skill at `.claude/skills/cuddle-design-craft/SKILL.md` apply to all work. All assets live in `public/assets/`.

---

## STEP 0 — Rename remaining files, then verify

### 0a. Seven handwritten-phrase images still have numeric names. Rename first (git mv):

| Current | Rename to | Content |
|---|---|---|
| 5.png | handwritten-calmer-way.png | "calmer way" |
| 6.png | handwritten-recovery.png | "Recovery." |
| 7.png | handwritten-irons-out.png | "irons out" |
| 8.png | handwritten-sensitive-sleepers.png | "sensitive sleepers" |
| 11.png | handwritten-not-sure.png | "Not sure" |
| 13.png | footer-cta-cuddle-your-tension-away.png | "Cuddle Your Tension Away →" (horizontal, with arrow) |
| 14.png | footer-subscribe-for-updates.png | "Subscribe for updates" |

### 0b. Verify transparency (PNG alpha check, as done before) on: all `product-*` cutouts, all three `home-testimonial-avatar-*` files (02 and 03 especially — previously boxed), all handwritten/typography images, both logos. Report any file that should be transparent but isn't — do not proceed with a baked-background image where a cutout is required.

### 0c. Full asset map (post-rename). Every image reference in code must resolve to one of these:

| File | Role |
|---|---|
| brand-logo-black.png | Logo on light backgrounds (header over light sections) |
| brand-logo-white.png | Logo on dark backgrounds (footer; header over dark/photo sections) |
| home-hero-banner.png | Masthead photo (girl + blue pillowcase overhead) |
| home-hero-title.png | Diagonal "CUDDLE YOUR TENSION AWAY" overlay on masthead |
| home-story-pen-illustration.png | Hero line 1 spot illustration (stressed desk) |
| home-story-focus-typography.png | Hero line 2 spot illustration (CALM lettering) |
| home-story-sleep-illustration.png | Hero line 3 spot illustration (sleeping) |
| home-transition-grounding-pillowcase.png | Full-bleed photo, hand touching sage pillowcase |
| home-transition-grounding-title.png | White handwritten "The Grounding Pillowcase." — OVERLAY on the photo above (this replaces v6's "title baked into photo" note; position center-left per mockup, keep as a separate absolutely-positioned layer) |
| product-grounding-pillowcase-blue.png + product-grounding-pillowcase-sage.png | Featured Collection pillowcase card — the two cutouts layered together per mockup |
| product-blackout-sleep-mask.png | Featured Collection mask cutout |
| product-zero-tug-hair-tie.png | Featured Collection hair-tie cutout |
| product-complete-sanctuary-set.png | Featured Collection gift-box cutout |
| home-products-cta-all-products.png | "ALL PRODUCTS →" link image |
| home-faq-banner.png | FAQ background photo (pillow stack + tea) |
| handwritten-calmer-way.png | FAQ heading accent: "A smoother surface, a [calmer way] into sleep." |
| home-engineering-image.png | Spec-cards left photo (sticky/pinned) |
| handwritten-recovery.png | Spec-cards heading accent: "Engineered for [Recovery.]" |
| handwritten-irons-out.png | Founder quote accent |
| handwritten-sensitive-sleepers.png | Testimonials heading accent |
| home-testimonial-avatar-01/02/03.png | Testimonial portraits |
| handwritten-not-sure.png | Sensory Check heading accent |
| home-cta-button-start-check.png | "START THE CHECK →" CTA image |
| footer-cta-cuddle-your-tension-away.png | Footer top-left link (~50% smaller than previous render) |
| footer-subscribe-for-updates.png | Footer newsletter label |

Report the completed map + any unresolved reference before touching layout code.

---

## LOCKED DECISIONS (final, do not revisit)
1. Hero = mockup layout in normal document flow, testimonial-style reveals. No pinning, no full-viewport frames, no progressive-bold.
2. FAQ = questions overlaid on the photo, inline expand-below-question. No modal.
3. Motion = the eight rules below. Low-interference, fluid (ref: aurae-temlis.webflow.io).
4. All handwritten text = the image assets above. Never a script webfont.

## GLOBAL
```css
--parchment:#F4F1EA; --pale-oak:#D2C2B4; --muted-teal:#8CA196;
--pale-sky:#BCCCD4; --jet-black:#21262B; --terracotta-clay:#C97C5D; /* CTA/accent only */
--font-display:'Questrial',sans-serif; --font-body:'Montserrat',sans-serif; /* body weight 200 */
```
Header (sticky from load): Shop · The Science — logo centered (white/black variant per background) — Quiet Hours · About Us — cart icon. About Us link must exist.
Section order: Masthead → Hero sequence → Grounding transition → Featured Collection → marquee → FAQ → Spec cards → Founder's Note → Testimonials → Sensory Check → Footer.

## SECTIONS

**1. Masthead** — home-hero-banner.png full-bleed; home-hero-title.png overlaid diagonally upper-left-of-center; optional subtle parallax.

**2. Hero sequence (normal flow, four rows per mockup):**
1. home-story-pen-illustration.png upper-LEFT + text right: "You've clicked the same pen forty times this hour."
2. Text left: "That's your body trying to calm itself down." + home-story-focus-typography.png upper-RIGHT.
3. home-story-sleep-illustration.png LEFT + text right: "We just never let it finish the job when the day ends."
4. Centered small-caps alone: "THIS IS WHERE IT TAKES OVER."
Each pair: fade + 20–30px slide-up on viewport entry, illustration/text staggered 120–200ms, ease-out. Illustrations are floating spot art — never section backgrounds, never stretched. Background gradient across the zone: parchment → blend to pale-sky → pale-sky → terracotta-clay (brief).

**3. Grounding transition** — home-transition-grounding-pillowcase.png full-bleed, resolving blur→sharp; home-transition-grounding-title.png overlaid center-left; `scroll-snap-stop: always` so it can't be skipped.

**4. Featured Collection** — cutouts floating on background, scattered per mockup; pillowcase card layers blue + sage cutouts together. Staggered fade+slide-up per product. Hover: circular "See more" cursor label + image scale ~105%. Click → PDP. home-products-cta-all-products.png lower right → all products.
Taglines (locked): The Grounding Pillowcase — Your landing interface. / The Blackout Sleep Mask — Zero pressure. Total dark. / The Zero-Tug Hair Ties — Hold without the pull. / The Complete Sanctuary Set — The full ritual, bundled.

**5. Marquee** (between Collection and FAQ) — slow seamless loop, low-contrast, aria-hidden: "22-momme · 6A-grade mulberry silk · 100% tagless · 60-night trial · " repeating. Exact terms only.

**6. FAQ** — Heading: "A smoother surface, a [handwritten-calmer-way.png] into sleep." centered. Below: home-faq-banner.png full-width with the four questions overlaid at scattered positions (two upper-left, two lower-right), each with a circular ⊕; click expands the answer inline beneath that question, smooth height transition, one open at a time, subtle scrim for readability. Mobile <768px: photo full-width, standard stacked accordion below. Answers in DOM on load + FAQPage schema. FAQ copy locked (unchanged from v6):
- What is the best silk pillowcase for highly sensitive people? → The best silk pillowcase for sensitive sleepers has no irritation points — no seams against the cheek, no wash tags, no rough fiber. Cuddle Project's 100% tagless, 22-momme mulberry silk surface is built around that idea, which is why it's a popular choice for people who notice texture more than most.
- Why does momme count matter in silk bedding? → 22-momme is a mid-to-heavy weight for mulberry silk — dense enough to feel substantial against the skin, while remaining naturally breathable.
- What does "sensory friendly" mean for bedding? → "Sensory friendly" generally describes design choices — removing tags, seams, and rough fibers — aimed at reducing tactile irritation, rather than a clinical certification.
- Why does texture matter for sleep, not just comfort? → Reaching for something to touch, rub, or fidget with is a common, well-documented way people self-soothe during a stressful day. Cuddle Project applies the same idea to the eight hours nobody's paying attention to. This is a design philosophy behind our material choices, not a medical or therapeutic claim.

**7. Spec cards** — "Engineered for [handwritten-recovery.png]" / "Precision-crafted parameters for your 8-hour physical downtime." home-engineering-image.png pins (sticky) left while three stat blocks scroll right, then releases:

| Label | Stat | Description | Comparison (terracotta) |
|---|---|---|---|
| Up to | 22 momme | Silk density — denser than the 12–19 momme most silk pillowcase brands use. | 3–10 momme heavier than the industry standard. |
| Graded | 6A grade | Long, continuous-filament silk fiber — the highest commercial silk grading tier. | Two grade tiers above standard commercial 4A silk. |
| Every product | 0 against your skin | Care label tucked into the inner seam, never against your cheek. | Nothing to scratch, nothing to notice. |

**8. Founder's Note (gradient beat)** — scroll-driven gradient + synchronized text-color inversion. Quote: "It doesn't just cover you; it [handwritten-irons-out.png] the fragments of your day." / Built by an over-thinker, for the over-stimulated. Welcome to your 8 hours of peace. / — Sunny Wong, Founder

**9. Testimonials** — "What [handwritten-sensitive-sleepers.png] actually notice." Existing staggered reveal approved — keep. Use the three avatar assets (verify 02/03 transparency per Step 0b). Three placeholder quotes unchanged; no medical-outcome language (FTC 16 CFR 255).

**10. Sensory Check** — static background, simple fade. "[handwritten-not-sure.png] if this is for you?" / "Take the 30-second sensory check and find out exactly which kind of friction is keeping you up." / home-cta-button-start-check.png.

**11. Footer** — dark bg, brand-logo-white.png. footer-cta-cuddle-your-tension-away.png top-left (~50% smaller) → product page. Columns: Shop (All Products · Gift Sets · Sensory Check) / About (Our Brand · Our Product · Our Philosophy) / Support (Care Guide · Shipping & Returns · FAQ · Contact). Newsletter: footer-subscribe-for-updates.png label + "— only when we actually have something worth saying about sensory overload. No fluff." + email field + Subscribe (terracotta). Social: Instagram, Facebook, X. Legal: "2026 © Cuddle Project. All rights reserved."

## MOTION (eight rules — implemented with **Framer Motion**; animate transform+opacity only, soft easing, never linear, nothing bounces; exact easing/duration/stagger values live in the cuddle-design-craft skill)
1. Staggered reveals: fade + 20–30px slide-up, sequential delays, sitewide default.
2. Headline breathing: largest headlines only, letter-spacing ~0.02em→0.05em on reveal; skip on mobile.
3. Parallax: only home-transition-grounding-pillowcase.png and home-faq-banner.png, ~10–15% differential.
4. Sticky pinning: spec-cards photo only.
5. Marquee: the single Section 5 ticker, very slow.
6. CTA hover: smooth transitions, 250–350ms ease-in-out.
7. Scroll-snap: `y proximity`; `scroll-snap-stop: always` only on the Grounding transition.
8. `prefers-reduced-motion`: simple fades, no parallax, no marquee.

## POLISH PASSES (mandatory phase after the build compiles and all sections render)

No section ships on its first pass. After the full page builds and previews without errors, run these six focused passes IN ORDER — one pass per prompt/commit, whole page per pass, reporting what changed:

1. **Rhythm & spacing** — audit every section against the skill's spacing scale; fix crowding, off-scale values, unbalanced asymmetry. When in doubt, add whitespace.
2. **Typography** — enforce the type hierarchy: fluid display sizes, line-length limits, `text-wrap: balance` on headlines, handwritten-image sizing/baseline alignment, max 3 sizes per viewport.
3. **Motion timing** — unify all entrances to the signature easing/duration family; verify stagger order (illustration → text), viewport trigger margins, and that nothing fires too early/late or twice.
4. **Micro-interactions** — hover states (product scale, cursor label, link underlines, CTA transitions), keyboard focus rings, the masthead scroll indicator; hide hover-only affordances on touch.
5. **Responsive** — walk the whole page at 375px, 768px, 1024px: single-column collapses, FAQ accordion fallback, simplified hero crossfade, touch targets ≥44px, marquee behavior.
6. **Performance & accessibility** — image dimensions/aspect-ratios set (zero layout shift), lazy loading below the fold, smooth scroll at 4x CPU throttle, `prefers-reduced-motion` fallbacks verified, alt text on all meaningful images, color contrast on photo overlays.

After pass 6, run the skill's "does this feel expensive?" self-check section by section and report any section that fails, with a proposed fix, before declaring the rebuild complete.

## FIRST MESSAGE (paste as your opening instruction)
"Read CLAUDE.md, docs/rebuild-brief.md, and the skill at .claude/skills/cuddle-design-craft/SKILL.md in full — confirm you've loaded all three. Then execute STEP 0 in order: (0a) rename the seven numeric files with git mv, (0b) run the PNG transparency check on the listed files, (0c) produce the complete asset-to-reference map and flag anything unresolved. Stop and show me the results. Do not modify any layout code until I confirm. After I approve the plan and the build completes, remember the six POLISH PASSES are mandatory before the rebuild is considered done."
