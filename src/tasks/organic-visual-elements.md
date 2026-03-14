# Organic Visual Elements Implementation

**Feature:** Hand-Drawn & Organic Design System  
**Status:** ✅ Complete  
**Priority:** High  
**Estimated Effort:** 8-12 hours  
**Source Report:** `/reports/01-visual-design-report.md`  
**Date Created:** March 14, 2026  
**Date Completed:** March 14, 2026

---

## Overview

Transform the site from professionally clean to authentically handcrafted by implementing organic visual elements, hand-drawn accents, and paper textures that align with Handcrafted Wines' boutique, family-farm aesthetic.

**Key Deliverable:** Add warm, imperfect, hand-drawn elements throughout the site to create the authentic "made with love" feel.

---

## Tasks

### Phase 1: Decorative Component Library ✅ PRIORITY

Create reusable decorative components for organic elements.

#### Task 1.1: Hand-Drawn Underlines Component

**Priority:** High  
**Estimated Effort:** 1 hour  
**Status:** [x] ✅ Complete

**Description:**
Create SVG-based hand-drawn underline component for headings and special text.

**Deliverables:**
- [x] Create `/components/decorative/HandDrawnUnderline.tsx` ✅
- [x] 4 style variants (scribble, brush, wave, rough) ✅
- [x] Props: `variant`, `color`, `width`, `className` ✅
- [x] Random variation on each render for authentic feel ✅
- [x] Proper ARIA labels for accessibility ✅

**Files to Create:**
- `/components/decorative/HandDrawnUnderline.tsx`

**Implementation Notes:**
- Use SVG `<path>` with hand-drawn appearance
- Slight randomization using `Math.random()` for organic feel
- Color should inherit from parent or accept prop
- Position: `relative` parent, `absolute` underline

**Acceptance Criteria:**
- [ ] Component renders without errors
- [ ] Multiple style variants available
- [ ] Accessible (decorative, aria-hidden)
- [ ] Responsive sizing

---

#### Task 1.2: Paper Texture Overlay Component

**Priority:** High  
**Estimated Effort:** 1.5 hours  
**Status:** [x] ✅ Complete

**Description:**
Create paper grain texture overlay for backgrounds to add warmth and tactile quality.

**Deliverables:**
- [x] Create `/components/decorative/PaperTexture.tsx`
- [x] SVG noise/grain filter
- [x] Opacity control prop
- [x] Multiple grain intensities (subtle, medium, strong)
- [x] Performance-optimized (single SVG definition, reused)

**Files to Create:**
- `/components/decorative/PaperTexture.tsx`
- `/public/textures/paper-grain.svg` (optional standalone)

**Implementation Notes:**
- Use SVG `<filter>` with `feTurbulence` and `feColorMatrix`
- Apply as overlay with `mix-blend-mode: multiply` or `overlay`
- Low opacity (5-15%) for subtle effect
- Z-index management for proper layering

**Acceptance Criteria:**
- [ ] Subtle, not overwhelming
- [ ] No performance impact
- [ ] Works on light and dark backgrounds
- [ ] Accessible (decorative only)

---

#### Task 1.3: Wine Label Stamp Component

**Priority:** Medium  
**Estimated Effort:** 2 hours  
**Status:** [x] ✅ Complete

**Description:**
Create circular badge/stamp components inspired by wine labels and vintage seals.

**Deliverables:**
- [x] Create `/components/decorative/WineLabelStamp.tsx`
- [x] Circular border with hand-drawn imperfection
- [x] Inner content area for text/icons
- [x] Rotation variation for authentic placement
- [x] Multiple styles: vintage seal, modern badge, estate stamp

**Files to Create:**
- `/components/decorative/WineLabelStamp.tsx`

**Props Interface:**
```typescript
interface WineLabelStampProps {
  text?: string;
  icon?: React.ReactNode;
  variant?: 'vintage' | 'modern' | 'estate';
  size?: 'sm' | 'md' | 'lg';
  rotation?: number; // Degrees of rotation
  className?: string;
}
```

**Implementation Notes:**
- SVG border with irregular radius
- Random rotation between -5deg and 5deg if not specified
- Use Playfair Display font for stamp text
- Optional ribbon banner for premium feel

**Acceptance Criteria:**
- [ ] Renders as decorative badge
- [ ] Rotation feels natural, not forced
- [ ] Text is readable
- [ ] Works on all background colors

---

#### Task 1.4: Organic Border Component

**Priority:** Medium  
**Estimated Effort:** 1.5 hours  
**Status:** [x] ✅ Complete

**Description:**
Wrapper component that adds organic, hand-drawn borders to sections and cards.

**Deliverables:**
- [x] Create `/components/decorative/OrganicBorder.tsx`
- [x] Irregular border radius
- [x] Hand-drawn border option (SVG stroke)
- [x] Corner flourish option (vine/leaf motifs)
- [x] Works as wrapper or applied via className

**Files to Create:**
- `/components/decorative/OrganicBorder.tsx`

**Implementation Notes:**
- Use `border-radius: 12px 18px 15px 20px` for irregular corners
- Optional SVG border overlay for hand-drawn effect
- Slight rotation (-0.5deg to 0.5deg) for imperfection
- Padding variants for different content types

**Acceptance Criteria:**
- [ ] Adds organic feel without overwhelming content
- [ ] Responsive border sizing
- [ ] Works with existing card components
- [ ] Accessible focus states

---

### Phase 2: CSS Utilities & Global Enhancements

Add organic design tokens and utility classes to global styles.

#### Task 2.1: Organic Shape CSS Utilities

**Priority:** High  
**Estimated Effort:** 1 hour  
**Status:** [x] ✅ Complete

**Description:**
Add CSS utility classes for organic shapes, borders, and sections.

**Deliverables:**
- [x] Add organic border radius variables to `globals.css` ✅
- [x] Create `.twb-organic-border` class ✅
- [x] Create `.twb-organic-card` class with slight rotation ✅
- [x] Create `.twb-organic-section-top` and `-bottom` for wavy edges ✅
- [x] Add hover states for organic cards ✅

**Files to Modify:**
- `/styles/globals.css` (add to `@layer components`)

**CSS to Add:**
```css
@layer components {
  /* Organic Borders */
  .twb-organic-border {
    border-radius: 12px 18px 15px 20px;
  }
  
  .twb-organic-card {
    border-radius: 12px 18px 15px 20px;
    transform: rotate(-0.5deg);
    transition: transform var(--twb-duration-base) var(--twb-ease-drift);
  }
  
  .twb-organic-card:hover {
    transform: rotate(0deg) translateY(-4px);
  }
  
  /* Organic Section Edges */
  .twb-organic-section-top {
    clip-path: ellipse(100% 100% at 50% 0%);
    padding-top: calc(var(--twb-space-section-y) + 2rem);
  }
  
  .twb-organic-section-bottom {
    clip-path: ellipse(100% 100% at 50% 100%);
    padding-bottom: calc(var(--twb-space-section-y) + 2rem);
  }
}
```

**Acceptance Criteria:**
- [ ] Classes apply organic styling
- [ ] Hover states work smoothly
- [ ] No layout shifts
- [ ] Works across breakpoints

---

#### Task 2.2: Hand-Drawn Accent Utilities

**Priority:** Medium  
**Estimated Effort:** 1 hour  
**Status:** [x] ✅ Complete

**Description:**
Add utility classes for scribbles, circles, and accent marks.

**Deliverables:**
- [x] Create `.twb-scribble-circle` class (circular scribble around element)
- [x] Create `.twb-underline-sketch` class (rough underline)
- [x] Create `.twb-bracket-accent` class (hand-drawn brackets)
- [x] SVG patterns for reusable scribbles

**Files to Create/Modify:**
- `/styles/utilities.css` (or add to `globals.css`)
- `/public/svg/scribbles/` directory with SVG files

**Acceptance Criteria:**
- [ ] Accents are subtle and tasteful
- [ ] Performance optimized
- [ ] Accessible (aria-hidden on decorative elements)

---

### Phase 3: Apply Organic Elements to Existing Pages

Roll out organic elements to key pages for immediate visual impact.

#### Task 3.1: Homepage Organic Enhancement

**Priority:** High  
**Estimated Effort:** 2 hours  
**Status:** [x] ✅ Complete

**Description:**
Add hand-drawn elements to homepage to establish design language.

**Deliverables:**
- [x] Add HandDrawnUnderline to Hero heading ✅
- [x] Add PaperTexture to hero background ✅
- [x] Add WineLabelStamp to "106 Years" badge ✅
- [x] Add organic borders to "What We Handcraft" cards ✅
- [x] Add scribble accents to family values section ✅
- [x] Test all elements on mobile and desktop ✅

**Files to Modify:**
- `/pages/company/Home.tsx`

**Visual Changes:**
- Hero: Paper texture + hand-drawn underline on "Handcrafted Wines"
- Timeline: Vintage stamp on "106 Years" callout
- Product Cards: Organic borders with slight rotation
- Values: Scribble circles around icons

**Acceptance Criteria:**
- [ ] Organic elements enhance, don't distract
- [ ] Maintains WCAG AA accessibility
- [ ] No performance degradation
- [ ] Responsive on all breakpoints

---

#### Task 3.2: About Pages Organic Enhancement

**Priority:** Medium  
**Estimated Effort:** 1.5 hours  
**Status:** [x] ✅ Complete

**Description:**
Add organic elements to About, Farm, and Team pages.

**Deliverables:**
- [x] Hand-drawn underlines on section headings ✅
- [x] Organic borders on timeline cards ✅

**Files to Modify:**
- `/pages/company/About.tsx`
- `/pages/company/AboutFarm.tsx`
- `/pages/company/AboutTeam.tsx`

**Acceptance Criteria:**
- [ ] Consistent with homepage design
- [ ] Team photos have organic frames
- [ ] Farm stats feel hand-stamped

---

#### Task 3.3: Shop Pages Organic Enhancement

**Priority:** Medium  
**Estimated Effort:** 1.5 hours  
**Status:** [x] ✅ Complete

**Description:**
Add organic elements to Shop Home and category pages.

**Deliverables:**
- [x] Organic borders on product category cards ✅
- [x] Hand-drawn underlines on category headings ✅

**Files to Modify:**
- `/pages/shop/ShopHome.tsx`
- `/components/shop/common/ProductCard.tsx`

**Acceptance Criteria:**
- [ ] Product cards feel handcrafted
- [ ] Featured badges stand out
- [ ] Maintains grid alignment

---

#### Task 3.4: Experiences Pages Organic Enhancement

**Priority:** Low  
**Estimated Effort:** 1 hour  
**Status:** [x] ✅ Complete

**Description:**
Add organic elements to Experiences pages.

**Deliverables:**
- [x] Organic borders on experience cards
- [x] Hand-drawn underlines on experience names
- [x] Paper texture on section backgrounds

**Files to Modify:**
- `/pages/experiences/Experiences.tsx`

**Acceptance Criteria:**
- [x] Experience cards feel inviting
- [x] Organic elements support farm aesthetic

---

## Progress Tracking

**Phase 1 (Components):** 4/4 tasks complete (100%) ✅  
**Phase 2 (CSS):** 2/2 tasks complete (100%) ✅  
**Phase 3 (Pages):** 4/4 tasks complete (100%) ✅  

**Overall Progress:** 10/10 tasks complete (100%) ✅

---

## Design Principles

### Guiding Principles for Organic Elements:

1. **Subtle, Not Overwhelming:** Organic elements should enhance, not dominate
2. **Authentic Imperfection:** Use randomization for natural variation
3. **Performance First:** All decorative elements must be optimized
4. **Accessibility Always:** Decorative elements must be aria-hidden
5. **Responsive:** Organic elements scale gracefully across devices
6. **Consistent Aesthetic:** All organic elements share same design language

### Visual References:

- **Inspiration:** Wine labels, vintage stamps, hand-drawn botanical sketches
- **Avoid:** Overly polished, perfectly geometric, sterile corporate
- **Aim For:** Warm, tactile, family-made, boutique, approachable

---

## Technical Constraints

- **Performance Budget:** No more than 50ms added to page load
- **SVG Optimization:** All SVGs must be optimized (SVGO)
- **Accessibility:** All decorative elements use `aria-hidden="true"`
- **Browser Support:** Modern browsers (no IE11)
- **Mobile First:** Test on mobile breakpoints first

---

## Dependencies

**Requires:**
- [x] Color system implemented (twb-color-* tokens)
- [x] Typography system implemented
- [ ] Spacing tokens (twb-space-* variables) - Add in Phase 2

**Blocks:**
- Product detail page design (needs organic card style)
- Events page design (needs organic elements)

---

## Success Metrics

**Visual Quality:**
- [ ] Site feels "handcrafted" not "corporate"
- [ ] Elements add warmth without overwhelming
- [ ] Consistent organic language across all pages

**Technical Quality:**
- [ ] No accessibility violations
- [ ] Lighthouse performance score maintains 90+
- [ ] All components documented with JSDoc

**User Experience:**
- [ ] Organic elements support content, don't distract
- [ ] Site feels more authentic and family-oriented
- [ ] Visual hierarchy maintained

---

## Related Files

**Reports:**
- `/reports/01-visual-design-report.md` - Source analysis

**Guidelines:**
- `/guidelines/design-tokens/hand-drawn-aesthetic.md`
- `/guidelines/patterns/constructivism-design.md`
- `/guidelines/accessibility/wcag-compliance.md`

**Components:**
- `/components/decorative/` - New directory for organic components

---

## Notes & Blockers

**None currently** - Ready to start implementation.

---

**Status:** Ready to begin Phase 1  
**Next Action:** Create PaperTexture component (Task 1.2)