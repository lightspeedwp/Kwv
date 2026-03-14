# Color Design Tokens

**Category:** Design Tokens  
**Domain:** Colors  
**Version:** 1.0  
**Last Updated:** 2024-03-13  
**Status:** Active

---

## Overview

The Wire Brand color palette embodies a warm, organic, hand-drawn aesthetic inspired by wine-making and the Paarl valley terroir. Colors are intentionally earthy and authentic, avoiding digital or synthetic tones.

**Key Characteristics:**
- Warm, natural tones rooted in vineyard and cellar environments
- Organic, imperfect aesthetics (no pixel-perfect digital colors)
- Accessible contrast ratios (WCAG 2.1 AA minimum)
- Semantic naming for functional clarity

---

## Token Definitions

### Primary Palette Tokens

| Token Name | Hex Value | CSS Variable | Usage | WCAG Contrast Notes |
|------------|-----------|--------------|-------|---------------------|
| `twb-color-paper` | `#f5efe4` | `--twb-color-paper` | Warm parchment backgrounds, main site background | Background color for body text |
| `twb-color-ink` | `#1e1a17` | `--twb-color-ink` | Deep charcoal text, body copy, headings | 13.5:1 contrast on paper |
| `twb-color-vine` | `#5c6b4f` | `--twb-color-vine` | Vineyard green accents, secondary CTAs, organic elements | 4.8:1 contrast on paper |
| `twb-color-clay` | `#b86b4b` | `--twb-color-clay` | Sun-baked terracotta, warm accents, badges | 3.2:1 contrast on paper (large text only) |
| `twb-color-plum` | `#5a2d3b` | `--twb-color-plum` | Wine-inspired primary CTAs, hover states | 9.8:1 contrast on paper |
| `twb-color-gold` | `#c8a96b` | `--twb-color-gold` | Muted premium gold, awards, special callouts | 2.8:1 contrast on paper (decorative) |

### Semantic Tokens

| Token Name | References | CSS Variable | Usage |
|------------|------------|--------------|-------|
| `twb-color-bg-primary` | `var(--twb-color-paper)` | `--twb-color-bg-primary` | Primary background (body, cards, sections) |
| `twb-color-bg-secondary` | `#faf7f2` | `--twb-color-bg-secondary` | Subtle backgrounds (alternating sections, hover states) |
| `twb-color-text-primary` | `var(--twb-color-ink)` | `--twb-color-text-primary` | All body text, headings |
| `twb-color-text-secondary` | `var(--twb-color-vine)` | `--twb-color-text-secondary` | Metadata, labels, supporting text |
| `twb-color-accent-primary` | `var(--twb-color-plum)` | `--twb-color-accent-primary` | Primary buttons, links, wine-related elements |
| `twb-color-accent-secondary` | `var(--twb-color-clay)` | `--twb-color-accent-secondary` | Secondary accents, badges, highlights |
| `twb-color-accent-premium` | `var(--twb-color-gold)` | `--twb-color-accent-premium` | Awards, premium indicators, special callouts |

### Interactive State Tokens

| Token Name | Base Color | CSS Variable | Usage |
|------------|------------|--------------|-------|
| `twb-color-link` | `#5a2d3b` (plum) | `--twb-color-link` | Standard link color |
| `twb-color-link-hover` | `#7a3d4b` | `--twb-color-link-hover` | Link hover state (20% lighter plum) |
| `twb-color-link-visited` | `#4a1d2b` | `--twb-color-link-visited` | Visited link (darker plum) |
| `twb-color-focus-ring` | `#5c6b4f` (vine) | `--twb-color-focus-ring` | Keyboard focus indicator |

---

## Implementation

### CSS Variables

**File:** `/styles/globals.css`

```css
:root {
  /* === PRIMARY PALETTE === */
  --twb-color-paper: #f5efe4;
  --twb-color-ink: #1e1a17;
  --twb-color-vine: #5c6b4f;
  --twb-color-clay: #b86b4b;
  --twb-color-plum: #5a2d3b;
  --twb-color-gold: #c8a96b;

  /* === SEMANTIC TOKENS === */
  --twb-color-bg-primary: var(--twb-color-paper);
  --twb-color-bg-secondary: #faf7f2;
  --twb-color-text-primary: var(--twb-color-ink);
  --twb-color-text-secondary: var(--twb-color-vine);
  --twb-color-accent-primary: var(--twb-color-plum);
  --twb-color-accent-secondary: var(--twb-color-clay);
  --twb-color-accent-premium: var(--twb-color-gold);

  /* === INTERACTIVE STATES === */
  --twb-color-link: #5a2d3b;
  --twb-color-link-hover: #7a3d4b;
  --twb-color-link-visited: #4a1d2b;
  --twb-color-focus-ring: #5c6b4f;
}

/* Dark mode variants (future enhancement) */
.dark {
  --twb-color-bg-primary: #1e1a17;
  --twb-color-bg-secondary: #2a2420;
  --twb-color-text-primary: #f5efe4;
  --twb-color-text-secondary: #c8a96b;
}
```

### TypeScript Constants

**File:** `/constants/theme.ts`

```typescript
/**
 * Color tokens for The Wire Brand
 */
export const COLORS = {
  // Primary palette
  paper: '#f5efe4',
  ink: '#1e1a17',
  vine: '#5c6b4f',
  clay: '#b86b4b',
  plum: '#5a2d3b',
  gold: '#c8a96b',
} as const;

/**
 * CSS Variable references
 */
export const CSS_VARS_COLORS = {
  bgPrimary: 'var(--twb-color-bg-primary)',
  bgSecondary: 'var(--twb-color-bg-secondary)',
  textPrimary: 'var(--twb-color-text-primary)',
  textSecondary: 'var(--twb-color-text-secondary)',
  accentPrimary: 'var(--twb-color-accent-primary)',
  accentSecondary: 'var(--twb-color-accent-secondary)',
  accentPremium: 'var(--twb-color-accent-premium)',
} as const;
```

### Tailwind Usage

```tsx
// Using arbitrary values with CSS vars (recommended)
<div className="bg-[var(--twb-color-paper)] text-[var(--twb-color-ink)]">

// Using Tailwind theme extension (requires tailwind.config.js update)
<div className="bg-paper text-ink">
```

---

## Usage Guidelines

### When to Use

✅ **Use these tokens when:**
- Styling any visible UI element (backgrounds, text, borders, shadows)
- Creating new components or pages
- Implementing interactive states (hover, focus, active)
- Defining theme-aware components

### When NOT to Use

❌ **Avoid these tokens when:**
- Creating one-off illustrations or graphics (use hex values directly)
- Working with external third-party embedded content
- Implementing brand-specific exceptions (e.g., sponsor logos)

### Component-Specific Usage

| Component | Token(s) | Rationale |
|-----------|----------|-----------|
| `Hero` | `bg-[var(--twb-color-paper)]`, `text-[var(--twb-color-ink)]` | Warm, welcoming first impression |
| `Button` (Primary) | `bg-[var(--twb-color-plum)]`, `hover:bg-[var(--twb-color-link-hover)]` | Wine-inspired CTA color |
| `Button` (Secondary) | `border-[var(--twb-color-vine)]`, `text-[var(--twb-color-vine)]` | Natural, organic feel |
| `Badge` | `bg-[var(--twb-color-clay)]`, `text-white` | Warm accent for labels |
| `Award Indicator` | `bg-[var(--twb-color-gold)]`, `text-[var(--twb-color-ink)]` | Premium, elegant |
| `Focus Ring` | `ring-[var(--twb-color-focus-ring)]` | High contrast for accessibility |

---

## Accessibility Considerations

### WCAG 2.1 AA Compliance

All color combinations must meet minimum contrast ratios:

- **Normal text (body copy):** 4.5:1 minimum
  - ✅ `ink` on `paper` = 13.5:1 (excellent)
  - ✅ `plum` on `paper` = 9.8:1 (excellent)
  - ✅ `vine` on `paper` = 4.8:1 (passes)
  - ⚠️ `clay` on `paper` = 3.2:1 (large text only, ≥18px regular or ≥14px bold)
  - ❌ `gold` on `paper` = 2.8:1 (decorative only, never for critical text)

- **Large text (≥18px or ≥14px bold):** 3.1 minimum
  - ✅ All colors pass except `gold` (use with caution)

### Testing

**Tool:** [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

**Manual Test:**
1. Inspect element background color
2. Inspect element text color
3. Verify contrast ratio ≥ 4.5:1 (normal) or ≥ 3:1 (large)

### Common Issues

- **Issue:** Using `gold` for body text
  - **Fix:** Use `gold` only for decorative elements or large headings (24px+)
  
- **Issue:** Using `clay` for small labels
  - **Fix:** Increase font size to ≥18px or use `vine` instead

---

## Examples

### Correct Usage

```tsx
// Example 1: Hero section with proper contrast
<section className="bg-[var(--twb-color-paper)] text-[var(--twb-color-ink)]">
  <h1 className="text-5xl font-bold">The Wire Brand</h1>
  <p className="text-lg">Handcrafted wines from Paarl</p>
  <button className="bg-[var(--twb-color-plum)] text-white hover:bg-[var(--twb-color-link-hover)]">
    Shop Wines
  </button>
</section>

// Example 2: Award badge with premium gold
<span className="inline-block px-4 py-2 bg-[var(--twb-color-gold)] text-[var(--twb-color-ink)] text-2xl font-semibold">
  Gold Medal
</span>

// Example 3: Accessible focus ring
<button className="focus-visible:ring-2 focus-visible:ring-[var(--twb-color-focus-ring)] focus-visible:ring-offset-2">
  Learn More
</button>
```

### Incorrect Usage

```tsx
// ❌ Don't do this: Gold text on paper background (insufficient contrast)
<p className="text-[var(--twb-color-gold)]">
  Important information
</p>

// ✅ Do this instead: Use ink for critical text
<p className="text-[var(--twb-color-ink)]">
  Important information
</p>

// ❌ Don't do this: Hardcoded hex values
<div className="bg-[#f5efe4] text-[#1e1a17]">

// ✅ Do this instead: Use CSS variables
<div className="bg-[var(--twb-color-paper)] text-[var(--twb-color-ink)]">
```

---

## Related Tokens

### Complementary Categories
- `/guidelines/design-tokens/typography.md` - Font colors use these tokens
- `/guidelines/design-tokens/buttons.md` - Button variants use accent colors
- `/guidelines/design-tokens/borders.md` - Border colors reference primary palette

### Often Used Together
- `twb-color-paper` + `twb-color-ink` (default body styling)
- `twb-color-plum` + `white` (primary button)
- `twb-color-vine` + `white` (secondary button)
- `twb-color-gold` + `twb-color-ink` (premium badges)

---

## Migration Notes

### Deprecated Tokens

| Old Token | New Token | Migration Deadline | Status |
|-----------|-----------|-------------------|--------|
| `color.burgundy` (#6B2737) | `twb-color-plum` | 2024-04-01 | ⚠️ Deprecated |
| `color.vineyard` (#4A5D3F) | `twb-color-vine` | 2024-04-01 | ⚠️ Deprecated |
| `color.terracotta` (#D4856A) | `twb-color-clay` | 2024-04-01 | ⚠️ Deprecated |
| `color.cream` (#F9F5F0) | `twb-color-paper` | 2024-04-01 | ⚠️ Deprecated |
| `color.charcoal` (#3C3C3C) | `twb-color-ink` | 2024-04-01 | ⚠️ Deprecated |

### Breaking Changes

**Version 1.0 (2024-03-13):**
- Introduced `twb-` namespace for all color tokens
- Deprecated legacy "Handcrafted Wines" color scheme
- Migration path: Find/replace old tokens with new tokens across all component files

---

## Validation Checklist

- [x] All tokens use `twb-` prefix
- [x] All tokens defined in `/styles/globals.css`
- [ ] All tokens exported in `/constants/theme.ts`
- [x] Accessibility requirements met (WCAG 2.1 AA)
- [ ] Dark mode variants defined (future enhancement)
- [x] Documentation complete
- [x] Examples tested

---

## Change Log

### Version 1.0 (2024-03-13)
- Initial token definition for The Wire Brand
- 6 primary palette colors defined
- 7 semantic tokens created
- 4 interactive state tokens added
- Accessibility contrast ratios validated
- Migration path from legacy tokens established

---

**Maintained by:** Design System Team  
**Review Cycle:** Monthly or with major design updates  
**Next Review:** 2024-04-13
