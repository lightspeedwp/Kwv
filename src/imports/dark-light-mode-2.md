---
title: "Dark and Light Mode Guidance"
---

## Overview

This site supports both light and dark themes. The toggle is implemented by adding a `data-theme="dark"` attribute to the `html` or root element; components must respond by switching styles via CSS `[data-theme="dark"]` selectors and utility classes (`dark:` in Tailwind). A robust theme system ensures readability, accessibility, and brand coherence in both modes.

## Principles

- **High contrast:** Maintain a minimum contrast ratio of 4.5:1 for text and icons relative to backgrounds in both modes. This promotes readability for all users.
- **Surface inversion:** In light mode, primary surfaces (background, cards) are light with dark text. In dark mode, invert to dark backgrounds with light text. Use the same hue families across both modes (e.g., `paper` vs. `ink`) to preserve brand colour relationships.
- **Semantic tokens:** Define paired tokens for each semantic use case (e.g., `surface-default`, `surface-alt`, `text-primary`, `text-secondary`, `accent`, `border`, `interactive`, `error`). Provide separate values for light and dark contexts. Do not hard-code colours in components.
- **Softness:** Hand‑drawn aesthetic prefers softer dark backgrounds (not pure black) and slightly muted light backgrounds. Adjust saturation and brightness rather than purely inverting colours.
- **Focus indicators:** Ensure focus states are visible in both modes with clear outlines or glows. Use tokens like `focus-ring-light` and `focus-ring-dark`.

## Implementation

Define a theme map via CSS variables, switching values when `[data-theme="dark"]` is present:

```css
:root {
  /* Light mode */
  --surface-default: #F7F4F1; /* light paper */
  --surface-alt: #FFFFFF;
  --text-primary: #2B2B2B;
  --text-secondary: #555555;
  --accent: #A55C00; /* warm amber */
  --border: #D9D4CF;
  --focus-ring: #B88020;
}

[data-theme="dark"] {
  --surface-default: #191919; /* dark ink */
  --surface-alt: #222222;
  --text-primary: #F5F5F5;
  --text-secondary: #CCCCCC;
  --accent: #FFB366; /* lighter amber for contrast */
  --border: #444444;
  --focus-ring: #FFC488;
}
```

Use these variables in CSS or map them into Tailwind via the configuration. For example, `text-primary` maps to `text-[var(--text-primary)]`.

## Patterns to Avoid

- Do not rely on the `dark` class on `html`—use the `data-theme` attribute for consistency. Remove any leftover `.dark` selectors.
- Avoid using opaque pure black backgrounds (#000000) in dark mode; they create uncomfortable contrast with softer accent colours.
- Do not invert images or illustrations automatically. Provide separate assets or adjust colours in the SVGs for dark mode.

## Validation

Use automated tools (e.g., Axe, Lighthouse) to check contrast ratios. Manually review the site in both modes, including forms, hover states, disabled states, and interactive components. Verify that focus outlines are visible and that text does not disappear on dark backgrounds. Ensure that page transitions respect user `prefers-color-scheme` and that the `data-theme` attribute takes precedence over system preferences when toggled by the user.