# New Pattern — Scaffold a Reusable Section Component

**Type:** Implementation  
**Created:** 2026-03-18  
**Status:** Active  
**Trigger Word:** `new pattern`  
**Project:** Handcrafted Wines

---

## Prompt Purpose

**Objective:** Scaffold new reusable section component for Handcrafted Wines. Sections are page-level UI elements composed into page templates.

**When to Use:** When new reusable section needed (hero, CTA, feature grid, testimonials, etc.).

**Note:** Handcrafted Wines calls these "sections" not "patterns". Located in `/components/sections/`.

---

## Input Required

User must provide:
1. **Section name** — e.g., "WineClubBenefits", "AwardsShowcase", "TeamGrid"
2. **Section category** — hero, content, grid, CTA, testimonial
3. **Props/data** — what data section accepts
4. **Reusability** — used on one page or multiple?

---

## Workflow Steps

### Step 1: Verify Reusability

Per `/guidelines/architecture/component-structure.md`:
- **If used on ONE page:** Keep as page-local component
- **If used on TWO+ pages:** Elevate to `/components/sections/`

Check existing sections first to avoid duplicates.

### Step 2: Create Section Component

1. Create `/components/sections/{SectionName}.tsx`
2. Define TypeScript interface with JSDoc documentation
3. Use semantic HTML (`<section>`, `<article>`)
4. Accept data via props — no hardcoded content
5. Keep under 300 lines — extract sub-components if needed

**Required:**
- JSDoc file header with description, features, params
- TypeScript interface exported
- Accessibility: semantic HTML, ARIA labels, keyboard support
- Responsive: mobile-first with `md:` and `lg:` breakpoints

### Step 3: Design System Compliance

All generated code must:
- Use `var(--twb-font-*)` for fonts
- Use `var(--twb-spacing-*)` or `clamp()` for spacing
- Use `var(--twb-color-*)` for all colors
- Use Tailwind utilities for layout (grid, flex, gap)
- Use BEM classes (`.twb-*`) for custom styles if needed
- Use `lucide-react` for icons
- Meet 44x44px touch targets
- Include `@media (prefers-reduced-motion: reduce)` for animations

### Step 4: Hand-Drawn Aesthetic

Include organic, hand-drawn elements where appropriate:
- Use `var(--twb-radius-organic-*)` for border radius
- Add decorative components (HandDrawnUnderline, BrushStrokeBorder)
- Use warm, earthy color palette (Paper, Ink, Vine, Clay, Plum, Gold)
- Fluid typography with `clamp()`

### Step 5: Create CSS (If Needed)

If complex styling needed beyond Tailwind:
1. Create `/styles/utilities.css` entry with `.twb-{section-name}` classes
2. All values via CSS variables
3. Include responsive breakpoints
4. Include hover/focus states

### Step 6: Register and Document

1. Export from `/components/sections/index.ts` if exists
2. Add CHANGELOG entry under `[Unreleased]` → Added
3. Update component inventory in guidelines if significant

---

## Success Criteria

- [ ] Section component created with TypeScript interface
- [ ] JSDoc documentation complete
- [ ] 100% CSS variable compliance
- [ ] Responsive breakpoints included (mobile, tablet, desktop)
- [ ] Accessibility: semantic HTML, ARIA labels, keyboard support
- [ ] Reduced motion support for animations
- [ ] Hand-drawn aesthetic applied
- [ ] Touch targets meet 44x44px
- [ ] CHANGELOG updated

---

## Handcrafted Wines Existing Sections

**Reusable Sections:**
- Hero (configurable hero with multiple variants)
- FullWidthSection (50/50 split: image + text)
- BrandGrid (grid of category cards)
- FAQSection (accordion wrapper)
- Newsletter (full-width signup strip)
- LatestNews (3-column post grid)
- FourGenerations (timeline component)
- ShopNewsletter (shop-specific variant)

**Common Patterns:**
- Product grids (4 → 2 → 1 columns)
- Experience cards (3 → 2 → 1 columns)
- Team member grid (2 → 1 columns)
- Awards showcase (3 columns)
- Timeline (horizontal on desktop, vertical on mobile)

---

**Maintained by:** Handcrafted Wines Development Team  
**Last Updated:** 2026-03-18  
**Related Prompts:** `new template`, `new block`
