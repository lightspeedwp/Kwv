# Hero Component Standards

**Category:** Patterns | **Domain:** Hero Sections | **Version:** 1.0 | **Status:** Active - **MANDATORY**

## Overview
Standardized Hero section specifications for consistent experience across The Wire Brand.

## Mobile Height (Mandatory)
✅ **All Hero sections must use `min-h-[calc(100dvh-90px)]` on mobile**
- Accounts for sticky header (~90px)
- Hero fits exactly within remaining viewport
- Desktop heights can vary (`md:min-h-[60vh]` standard, `md:min-h-[80vh]` landing pages)

## Scroll Down Arrow
✅ **Required on all Hero sections:**
- Visibility: Always present
- Styling: Circle around arrow (use `ScrollDownArrow` component)
- Placement: `absolute bottom-8 left-1/2 -translate-x-1/2`
- Z-Index: `z-30` (sits above all content/backgrounds)
- Spacing: Always a gap between arrow and content above (never overlap text/buttons)

## Content Padding
✅ **Standard padding:**
- Top: `py-20`
- Bottom: `pb-32` (mandatory to clear scroll arrow on all screen sizes)

## Typography
✅ **Hero titles:**
- Support `stretchy` prop for single-line scaling
- Use fluid typography (`clamp()` sizing)

## Call to Actions
✅ **Hero buttons:**
- Use `variant="hero"` or `variant="heroGold"`
- Uppercase tracking + `shadow-lg`

---

**Maintained by:** Design System Team  
**Next Review:** 2024-04-13
