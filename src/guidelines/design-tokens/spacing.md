---
title: "Spacing Tokens"
---

## Purpose

Spacing tokens encode the foundational rhythm for margins, padding and gaps across the site. A consistent spacing scale ensures visual harmony and predictable layouts as components nest and rearrange responsively.

## Scale Definition

- **Base unit:** 4 px. All tokens are multiples of this root to simplify calculations and maintain modularity.
- **Named steps:** xs (4 px), sm (8 px), md (16 px), lg (24 px), xl (32 px), 2xl (40 px), 3xl (48 px), 4xl (64 px).
- **Fluid ranges:** Where appropriate, interpolate between these steps using CSS `clamp()` to adapt spacing proportionally between viewport widths. For example:

```css
--space-md: clamp(1rem, 2vw, 1.5rem);
```

- **Negative spaces:** Provide matching negative tokens (e.g., `-md`) for outsets and overlays. Use sparingly.

## Usage Guidelines

- **Hierarchy:** The larger the container, the larger the space token should be; avoid mixing too many sizes within the same block.
- **Vertical rhythm:** Stack sections using multiples of `md` or `lg` rather than arbitrary values to create a consistent vertical flow.
- **Horizontal gaps:** Use `sm` and `md` for internal element spacing (e.g., between buttons in a button group).
- **Fluid layouts:** In responsive components (cards, grids), use `clamp()` tokens so spacing tightens on small screens and loosens on wide screens.
- **Do not hard-code pixels** in templates. Always reference tokens via CSS custom properties or Tailwind utilities (`gap-md`, `p-lg`, etc.).

## Implementation

Define the tokens as CSS custom properties in your global styles or within `theme.json` for WordPress:

```css
:root {
  --space-xs: 0.25rem; /* 4px */
  --space-sm: 0.5rem;  /* 8px */
  --space-md: 1rem;    /* 16px */
  --space-lg: 1.5rem;  /* 24px */
  --space-xl: 2rem;    /* 32px */
  --space-2xl: 2.5rem; /* 40px */
  --space-3xl: 3rem;   /* 48px */
  --space-4xl: 4rem;   /* 64px */
}
```

In Tailwind, map these variables to utility classes via the configuration file so that you can use `p-md`, `mt-xl`, etc.

## Validation

Review pages at breakpoints 320 px, 768 px, 1024 px, and 1440 px to confirm that spacing scales smoothly and aligns to the grid. Use browser devtools to verify that only token values are used for margin, padding, and gap properties. Any deviations should be refactored into tokens.
