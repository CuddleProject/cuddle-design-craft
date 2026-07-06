## Status

**Batch 3 received — final 8 files. All 28/28 assets now in hand.**

Newly received:
- home-testimonial-avatar-03.png ✓
- home-transition-grounding-pillowcase.png ✓
- home-transition-grounding-title.png ⚠ appears fully white/blank on white chat background — expected if it's white-on-transparent (like brand-logo-white). Will verify alpha on-disk before wiring.
- product-blackout-sleep-mask.png ✓
- product-complete-sanctuary-set.png ✓
- product-grounding-pillowcase-blue.png ✓
- product-grounding-pillowcase-sage.png ✓
- product-zero-tug-hair-tie.png ✓

**Flag resolutions (confirmed by user this turn):**
1. home-hero-title.png — full sentence present, non-"AWAY" words are white. Ship as-is.
2. home-story-focus-typography.png — approved as-is despite profanity; overrides CLAUDE.md brand-voice note.

## Plan (unchanged from previously approved v1)

Implementation follows the approved specification exactly. No creative substitutions. Summary of order:

1. **Foundation** — Tailwind v4 tokens in `src/styles.css` (color, type scale, spacing, motion curves), fonts via `<link>` in `__root.tsx`, upload all 28 assets to Lovable Assets CDN, wire `.asset.json` pointers.
2. **Root & SEO** — `src/routes/__root.tsx` head metadata (title, description, og:*, twitter:card), semantic HTML shell, outlet.
3. **Home route** (`src/routes/index.tsx`) — sections built top-to-bottom per spec:
   - Announcement bar
   - Header (logo swap on dark/light contexts)
   - Hero masthead (full-bleed photo + diagonal title overlay)
   - Story rows ×3 (pen / focus-typography / sleep illustrations, editorial layout)
   - Product grid (5 products incl. dual-color pillowcase card)
   - Engineering / spec sticky-photo section
   - Grounding transition band (photo + white title overlay)
   - Testimonials (3 hand-drawn avatars)
   - FAQ (handwritten "calmer way" accent + full-width banner)
   - Footer (CTA link, subscribe, white logo)
4. **Motion** — framer-motion: hero reveal, section fades on scroll, sticky-photo parallax, hover states per spec.
5. **Responsive** — mobile-first breakpoints, editorial spacing maintained; verify at 375/768/1280/1920.
6. **QA passes** — build, typecheck, Playwright screenshot each section at each breakpoint, verify against mockup, iterate until self-check passes.

## Awaiting

Explicit **"Begin Build Mode"** from user before executing any of the above. No files touched yet.

## Open questions still on file (from §11)

Nine spec-clarification questions remain from v1 (routes for non-home links, cart behavior, exact motion durations if not specified, breakpoint values, etc.). I will proceed only where the spec is unambiguous; where it isn't, I will stop and ask before writing that section.
