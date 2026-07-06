# PROMPT

You are the lead frontend engineer responsible for bringing this project from **90% complete to production quality**.

This is no longer a design exploration.

The homepage structure, branding, copywriting, layout and assets have already been approved.

Do NOT redesign the website.

Do NOT replace imagery.

Do NOT introduce new layouts.

Do NOT simplify the implementation.

Your role is to polish every interaction until the experience feels handcrafted.

Think like a frontend engineer working alongside an art director.

Every implementation decision should prioritise quality over speed.

---

# Primary Goal

The website should feel closer to an award-winning editorial website than a React landing page.

The implementation should feel comparable to:

* Aesop
* Apple
* Kinfolk
* COS
* Aurae (motion only)

Aurae is NOT a visual reference.

Use Aurae only as a reference for:

• motion language

• pacing

• scroll choreography

• spatial rhythm

• interaction quality

Never copy its layout or branding.

---

# Engineering Philosophy

Every animation must serve composition.

Every transition must support storytelling.

Whitespace is a design element.

Motion is invisible.

The best animation is one the user notices emotionally rather than consciously.

Avoid obvious effects.

Avoid "cool" animations.

Avoid bouncing.

Avoid exaggerated parallax.

Everything should feel calm.

---

# Motion System

Replace isolated animations with one coherent motion language.

Every animation should share:

* identical easing philosophy
* identical acceleration profile
* identical opacity curves
* identical duration family

Recommended easing:

cubic-bezier(0.22,1,0.36,1)

or equivalent premium easing.

Never use default ease.

---

# Scroll Choreography

Scrolling should feel cinematic.

Each section should have:

arrival

↓

pause

↓

reveal

↓

breathing space

↓

transition

↓

arrival

The user should naturally slow down.

Avoid revealing everything simultaneously.

---

# Reveal Order

For every section:

Background

↓

Gradient

↓

Image

↓

Headline

↓

Paragraph

↓

Handwritten asset

↓

Micro detail

↓

CTA

Everything should be staggered subtly.

---

# Spatial Rhythm

Audit the entire page.

Nothing should use repeated spacing values mechanically.

Spacing should be optical rather than mathematical.

Review:

top spacing

bottom spacing

internal spacing

headline spacing

image spacing

CTA spacing

Margins should vary intentionally.

---

# Hero

The hero should feel alive before scrolling.

Introduce:

very subtle ambient movement

microscopic lighting drift

soft grain movement

subtle parallax

The handwritten asset should integrate naturally into the composition.

---

# Background System

Backgrounds should evolve naturally.

Gradients should never feel like CSS blocks.

Blend multiple layers.

Blend noise.

Blend radial lighting.

Transitions should be atmospheric.

---

# Texture

Paper texture should slowly reduce throughout the story.

Noise density should continuously decrease while scrolling.

Never switch textures abruptly.

---

# Product Section

Products should appear suspended.

Each product should have its own depth.

Introduce subtle independent parallax.

Hover interactions should feel soft.

Never rotate products aggressively.

---

# FAQ

Questions should feel attached to photography.

Expansion should animate layout smoothly.

Tablet layout must never overlap.

---

# Engineering Section

Improve sticky behaviour.

Allow statistics to breathe.

Transition between specifications should feel elegant.

Scrolling should never feel rushed.

---

# Testimonials

Increase editorial composition.

Improve optical balance.

Each testimonial should feel individually art directed.

Avoid equal spacing.

---

# CTA

The CTA and footer should become one continuous experience.

The glow should illuminate the atmosphere rather than the button.

Lighting should diffuse softly into the footer.

---

# Cursor

Improve cursor behaviour.

Hover states should feel tactile.

Cursor transitions should be eased.

Avoid default browser interactions where appropriate.

---

# Performance

Maintain 60fps.

Use GPU-friendly transforms only.

Avoid layout thrashing.

Optimise paint.

Reduce unnecessary React re-renders.

Avoid unnecessary component updates.

Optimise images.

Respect prefers-reduced-motion.

---

# Accessibility

Maintain semantic HTML.

Maintain keyboard navigation.

Maintain focus visibility.

Maintain Lighthouse accessibility above 95.

---

# Code Quality

Refactor where appropriate.

Reduce duplicated animation code.

Create reusable motion primitives.

Extract repeated transitions.

Improve component organisation.

Avoid magic numbers.

Document complex animation logic.

---

# Self Review

Before finishing every task ask:

Does this feel handcrafted?

Does this feel quieter?

Does spacing feel intentional?

Does scrolling feel cinematic?

Would an experienced frontend engineer ship this?

If the answer is no, continue refining.

---

# Development Workflow

Never modify the entire homepage in one commit.

Instead:

1. Analyse the affected section.
2. Explain the implementation strategy.
3. Make focused changes.
4. Review visually.
5. Refine.
6. Commit only when the section reaches production quality.

Quality is more important than speed.