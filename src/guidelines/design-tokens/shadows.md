---
title: "Shadow Tokens"
---

## Purpose

Shadow tokens add depth and layering to the interface. They help differentiate elevations between surfaces (e.g., cards vs. modals) while adhering to accessibility guidelines by maintaining sufficient contrast. In the hand‑drawn aesthetic, shadows should feel soft and organic rather than harsh or mechanical.

## Token Catalogue

| Token      | Description                                    | CSS Value                                 |
|-----------:|------------------------------------------------|-------------------------------------------|
| base-sm    | Subtle separation for buttons or inputs        | 0 1px 2px rgba(0, 0, 0, 0.05)             |
| base-md    | Card elevation                                  | 0 4px 8px rgba(0, 0, 0, 0.08)             |
| base-lg    | Overlay panels or modals                        | 0 8px 24px rgba(0, 0, 0, 0.1)             |
| stroke     | Outline shadow for hand‑drawn frames            | inset 0 0 0 1px rgba(0, 0, 0, 0.1)        |
| vignette   | Large soft fade for hero backgrounds            | 0 0 40px 10px rgba(0, 0, 0, 0.12)         |
| glow-light | Accent glow for highlights or CTAs              | 0 0 12px rgba(255, 255, 200, 0.5)         |
| glow-dark  | Glow for dark-mode hover states                 | 0 0 12px rgba(255, 255, 255, 0.3)         |

## Usage Guidelines

- **Select by elevation:** Use `base-sm` for small UI elements (tags, text inputs), `base-md` for medium surfaces (cards), and `base-lg` for overlays (modals, dropdowns). Avoid stacking multiple base shadows; instead choose the appropriate level.
- **Organic outlines:** The `stroke` token should be applied around irregular frames or images to emulate a hand‑drawn outline. Combine with slight border‑radius to avoid a mechanical look.
- **Ambient effects:** Use `vignette` behind large hero images or sections to softly fade edges. Apply via pseudo‑elements to separate content from decorative layers.
- **Accent glows:** `glow-light` and `glow-dark` add subtle emphasis on interactive elements (e.g., call‑to‑action buttons). Only apply on hover or active states; ensure that the glow contrasts sufficiently with the background.
- **Dark mode adjustments:** In dark mode, lighten the shadow colour (lower opacity or shift towards lighter hues) to maintain perceptible separation without muddying the design.

## Implementation

Define your shadow tokens in CSS variables or Tailwind configuration. Example:

```css
:root {
  --shadow-base-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-base-md: 0 4px 8px rgba(0,0,0,0.08);
  --shadow-base-lg: 0 8px 24px rgba(0,0,0,0.10);
  --shadow-stroke: inset 0 0 0 1px rgba(0,0,0,0.10);
  --shadow-vignette: 0 0 40px 10px rgba(0,0,0,0.12);
  --shadow-glow-light: 0 0 12px rgba(255,255,200,0.50);
  --shadow-glow-dark: 0 0 12px rgba(255,255,255,0.30);
}
```

In Tailwind, map these values to `boxShadow` settings so you can use `shadow-base-md`, `shadow-glow-light`, etc.

## Validation

Check shadows on light and dark backgrounds to ensure they remain visible and soft. Use high‑contrast mode or a black‑white overlay to verify that the shadows provide enough separation without overpowering the hand‑drawn patterns. Adjust opacity based on context (modals vs. cards). Avoid combining multiple glows or large vignettes in a single component.
