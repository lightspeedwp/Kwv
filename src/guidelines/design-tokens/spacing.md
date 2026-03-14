# Spacing Design Tokens

**Category:** Design Tokens  
**Domain:** Spacing  
**Version:** 1.0  
**Last Updated:** 2024-03-13  
**Status:** Active

---

## Overview

The Wire Brand spacing system uses fluid `clamp()` values to ensure layouts breathe on large screens while remaining compact on mobile devices. All spacing is proportional and follows a consistent scale.

**Key Characteristics:**
- Fluid spacing using `clamp()` for responsive layouts
- Consistent vertical rhythm
- Proportional scale based on base unit (1rem = 16px)
- Mobile-first approach with scaling for larger viewports

---

## Token Definitions

### Fluid Spacing Scale

| Token Name | Clamp Value | Approx Range | CSS Variable | Usage |
|------------|-------------|--------------|--------------|-------|
| `twb-space-section-y` | `clamp(3rem, 5vh + 2rem, 8rem)` | 48px → 128px | `--twb-space-section-y` | Section vertical padding |
| `twb-space-container-x` | `clamp(1rem, 4vw, 3rem)` | 16px → 48px | `--twb-space-container-x` | Container horizontal padding |
| `twb-space-grid-gap` | `clamp(1rem, 2vw, 2rem)` | 16px → 32px | `--twb-space-grid-gap` | Grid and flex gaps |

### Fixed Spacing Scale (Component-Level)

| Token Name | Value | CSS Variable | Usage |
|------------|-------|--------------|-------|
| `twb-space-0` | `0` | `--twb-space-0` | Reset spacing |
| `twb-space-1` | `0.25rem` (4px) | `--twb-space-1` | Minimal spacing, icon gaps |
| `twb-space-2` | `0.5rem` (8px) | `--twb-space-2` | Tight spacing, inline elements |
| `twb-space-3` | `0.75rem` (12px) | `--twb-space-3` | Small gaps, form labels |
| `twb-space-4` | `1rem` (16px) | `--twb-space-4` | Base unit, default gaps |
| `twb-space-5` | `1.25rem` (20px) | `--twb-space-5` | Medium gaps |
| `twb-space-6` | `1.5rem` (24px) | `--twb-space-6` | Comfortable gaps |
| `twb-space-8` | `2rem` (32px) | `--twb-space-8` | Large gaps, card padding |
| `twb-space-10` | `2.5rem` (40px) | `--twb-space-10` | Section spacing |
| `twb-space-12` | `3rem` (48px) | `--twb-space-12` | Large section spacing |
| `twb-space-16` | `4rem` (64px) | `--twb-space-16` | XL spacing |
| `twb-space-20` | `5rem` (80px) | `--twb-space-20` | XXL spacing |
| `twb-space-24` | `6rem` (96px) | `--twb-space-24` | Hero padding |

---

## Implementation

### CSS Variables

**File:** `/styles/globals.css`

```css
:root {
  /* === FLUID SPACING (Layout-Level) === */
  --twb-space-section-y: clamp(3rem, 5vh + 2rem, 8rem);
  --twb-space-container-x: clamp(1rem, 4vw, 3rem);
  --twb-space-grid-gap: clamp(1rem, 2vw, 2rem);

  /* === FIXED SPACING SCALE (Component-Level) === */
  --twb-space-0: 0;
  --twb-space-1: 0.25rem;  /* 4px */
  --twb-space-2: 0.5rem;   /* 8px */
  --twb-space-3: 0.75rem;  /* 12px */
  --twb-space-4: 1rem;     /* 16px - base unit */
  --twb-space-5: 1.25rem;  /* 20px */
  --twb-space-6: 1.5rem;   /* 24px */
  --twb-space-8: 2rem;     /* 32px */
  --twb-space-10: 2.5rem;  /* 40px */
  --twb-space-12: 3rem;    /* 48px */
  --twb-space-16: 4rem;    /* 64px */
  --twb-space-20: 5rem;    /* 80px */
  --twb-space-24: 6rem;    /* 96px */
}
```

### Tailwind Usage

```tsx
// Fluid spacing for sections
<section className="py-[var(--twb-space-section-y)] px-[var(--twb-space-container-x)]">

// Fixed spacing for components
<div className="p-8 gap-4"> // Using Tailwind's default scale (maps to twb-space-*)

// Arbitrary values for precise control
<div className="mt-[var(--twb-space-12)]">
```

---

## Usage Guidelines

### When to Use Fluid Spacing

✅ **Use fluid spacing (`clamp()`) for:**
- Section vertical padding (`.section`, `.hero`)
- Container horizontal padding
- Grid/flexbox gaps in large layouts
- Any spacing that should scale with viewport

### When to Use Fixed Spacing

✅ **Use fixed spacing tokens for:**
- Component internal padding (cards, buttons, inputs)
- Margins between adjacent elements
- Icon-text gaps
- Form field spacing

### Component-Specific Usage

| Component | Spacing Token(s) | Rationale |
|-----------|------------------|-----------|
| `Section` | `py-[var(--twb-space-section-y)]` | Fluid vertical rhythm |
| `Container` | `px-[var(--twb-space-container-x)]` | Responsive side padding |
| `Card` | `p-8` (32px) | Comfortable internal spacing |
| `Button` | `px-6 py-3` (24px × 12px) | Standard touch target |
| `Grid` | `gap-[var(--twb-space-grid-gap)]` | Responsive grid gaps |

---

## Accessibility Considerations

### Touch Targets

- **Minimum size:** 44×44px (tap targets must be at least `twb-space-10` + `twb-space-1`)
- **Recommended:** 48×48px (use `twb-space-12`)
- **Buttons:** Default padding `px-6 py-3` creates 48px height with 16px font

### Spacing for Readability

- **Paragraph spacing:** `mb-4` (16px) minimum between paragraphs
- **Heading spacing:** `mt-8 mb-4` (32px top, 16px bottom) for clear hierarchy
- **Line length:** Limit to 70-80 characters (use `container.content`)

---

## Examples

### Correct Usage

```tsx
// Example 1: Full section with fluid spacing
<section className="py-[var(--twb-space-section-y)] px-[var(--twb-space-container-x)]">
  <div className="container max-w-[1440px] mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--twb-space-grid-gap)]">
      {/* Card content */}
    </div>
  </div>
</section>

// Example 2: Card with fixed spacing
<article className="p-8 space-y-4">
  <h3 className="text-2xl font-semibold">Product Title</h3>
  <p className="text-base">Description with proper spacing</p>
  <button className="px-6 py-3">Add to Cart</button>
</article>
```

### Incorrect Usage

```tsx
// ❌ Don't do this: Hardcoded pixel values
<div className="py-[64px] px-[32px]">

// ✅ Do this instead: Use tokens
<div className="py-[var(--twb-space-section-y)] px-[var(--twb-space-container-x)]">

// ❌ Don't do this: Inconsistent spacing
<div className="mt-7 mb-3 p-5">

// ✅ Do this instead: Use scale
<div className="mt-8 mb-4 p-6">
```

---

## Related Tokens

### Complementary Categories
- `/guidelines/design-tokens/typography.md` - Font sizes scale with spacing
- `/guidelines/design-tokens/responsive.md` - Breakpoint behavior
- `/guidelines/design-tokens/touch-targets.md` - Minimum spacing for interactive elements

---

## Validation Checklist

- [x] All tokens use `twb-` prefix
- [x] All tokens defined in `/styles/globals.css`
- [x] Fluid spacing uses `clamp()` formula
- [x] Fixed spacing follows 4px base grid
- [x] Touch target minimums met (44px+)
- [x] Documentation complete
- [x] Examples tested

---

## Change Log

### Version 1.0 (2024-03-13)
- Initial spacing token system
- 3 fluid spacing tokens defined
- 13 fixed spacing tokens defined
- Accessibility touch target standards established

---

**Maintained by:** Design System Team  
**Review Cycle:** Monthly or with major design updates  
**Next Review:** 2024-04-13