# Production Pass (Acceptance Criteria)

## Purpose
This document defines production acceptance criteria only.
Do not duplicate implementation details already defined in:
- CLAUDE.md
- docs/rebuild-brief.md
- SKILL-cuddle-design-craft.md

## Engineering Objective
Bring the homepage from feature complete to production quality.
Do not redesign branding, copy, imagery or page structure.

## Working Principles
- Quality over speed.
- One logical change per commit.
- Explain implementation before coding.
- Refactor duplicated code when beneficial.
- Preserve performance and accessibility.

## Development Workflow
For every task:
1. Analyse the affected section.
2. Explain the implementation strategy.
3. Implement.
4. Review visually.
5. Refine.
6. Commit only after the section reaches production quality.

## Acceptance Criteria

### Motion
- One coherent motion language site-wide.
- Shared easing family.
- No bounce or spring animations.
- Motion respects prefers-reduced-motion.

### Spacing
- Optical spacing, not mathematical spacing.
- Section rhythm feels editorial.
- No repeated spacing patterns.

### Performance
- Lighthouse Performance >=95.
- Avoid layout shift.
- GPU-friendly transforms only.

### Accessibility
- Lighthouse Accessibility >=95.
- Semantic HTML.
- Keyboard navigation preserved.
- Visible focus states.

### Code Quality
- Reusable motion primitives.
- No duplicated animation logic.
- No unexplained magic numbers.

## Final Review Checklist
Before completing a task verify:
- Does it feel handcrafted?
- Does spacing feel intentional?
- Does scrolling feel cinematic?
- Would a senior frontend engineer approve this implementation?
If any answer is "No", continue refining.
