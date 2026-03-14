# Typography Design Tokens

**Category:** Design Tokens  
**Domain:** Typography  
**Version:** 1.0  
**Last Updated:** 2024-03-13  
**Status:** Active

---

## Overview

The Wire Brand typography system uses fluid, responsive sizing with `clamp()` functions to ensure beautiful, readable text at all screen sizes. The system combines editorial serif headings with clean sans-serif body text.

**Key Characteristics:**
- Fluid typography using `clamp()` for seamless scaling
- Editorial serif for expressive headlines (Playfair Display recommended)
- Humanist sans-serif for readability (Inter or Open Sans recommended)
- Strict standardization of viewport-based scaling
- WCAG 2.1 AA readability compliance

---

## Token Definitions

### Font Family Tokens

| Token Name | Value | CSS Variable | Usage |
|------------|-------|--------------|-------|
| `twb-font-serif` | `'Playfair Display', 'Georgia', serif` | `--twb-font-serif` | Headlines, hero titles, editorial content |
| `twb-font-sans` | `'Inter', 'Open Sans', system-ui, sans-serif` | `--twb-font-sans` | Body text, UI elements, navigation |
| `twb-font-mono` | `'Fira Code', 'Courier New', monospace` | `--twb-font-mono` | Code blocks (documentation only) |

### Fluid Typography Scale

**Formula:** `clamp(min_rem, preferred_vw + preferred_rem, max_rem)`

| Element | Weight | Fluid Clamp Rule | Line Height | Role |
|---------|--------|------------------|-------------|------|
| `twb-text-h1` | 700 | `clamp(2.4rem, 5vw + 1rem, 4.5rem)` | 1.2 | Page and hero titles |
| `twb-text-h2` | 600 | `clamp(2rem, 4vw + 1rem, 3.5rem)` | 1.25 | Main section headings |
| `twb-text-h3` | 600 | `clamp(1.5rem, 3vw + 0.5rem, 2.25rem)` | 1.3 | Product names, cards |
| `twb-text-h4` | 500 | `clamp(1.25rem, 2vw + 0.5rem, 1.75rem)` | 1.3 | Subheadings, labels |
| `twb-text-body-large` | 400 | `clamp(1.125rem, 1.5vw + 0.5rem, 1.5rem)` | 1.6 | Lead paragraphs |
| `twb-text-body` | 400 | `clamp(1rem, 1vw + 0.5rem, 1.125rem)` | 1.6 | Standard paragraphs |
| `twb-text-caption` | 400 | `clamp(0.875rem, 1vw + 0.25rem, 1rem)` | 1.5 | Metadata, bylines |

### Font Weight Tokens

| Token Name | Value | CSS Variable | Usage |
|------------|-------|--------------|-------|
| `twb-font-weight-normal` | `400` | `--twb-font-weight-normal` | Body text |
| `twb-font-weight-medium` | `500` | `--twb-font-weight-medium` | Subheadings, emphasis |
| `twb-font-weight-semibold` | `600` | `--twb-font-weight-semibold` | H2, H3 headings |
| `twb-font-weight-bold` | `700` | `--twb-font-weight-bold` | H1, strong emphasis |

---

## Implementation

### CSS Variables

**File:** `/styles/globals.css`

```css
:root {
  /* === FONT FAMILIES === */
  --twb-font-serif: 'Playfair Display', 'Georgia', serif;
  --twb-font-sans: 'Inter', 'Open Sans', system-ui, sans-serif;
  --twb-font-mono: 'Fira Code', 'Courier New', monospace;

  /* === FLUID TYPOGRAPHY SCALE === */
  --twb-text-h1: clamp(2.4rem, 5vw + 1rem, 4.5rem);
  --twb-text-h2: clamp(2rem, 4vw + 1rem, 3.5rem);
  --twb-text-h3: clamp(1.5rem, 3vw + 0.5rem, 2.25rem);
  --twb-text-h4: clamp(1.25rem, 2vw + 0.5rem, 1.75rem);
  --twb-text-body-large: clamp(1.125rem, 1.5vw + 0.5rem, 1.5rem);
  --twb-text-body: clamp(1rem, 1vw + 0.5rem, 1.125rem);
  --twb-text-caption: clamp(0.875rem, 1vw + 0.25rem, 1rem);

  /* === FONT WEIGHTS === */
  --twb-font-weight-normal: 400;
  --twb-font-weight-medium: 500;
  --twb-font-weight-semibold: 600;
  --twb-font-weight-bold: 700;

  /* === LINE HEIGHTS === */
  --twb-leading-tight: 1.2;
  --twb-leading-snug: 1.3;
  --twb-leading-normal: 1.5;
  --twb-leading-relaxed: 1.6;
  --twb-leading-loose: 1.7;
}

/* Base styles */
body {
  font-family: var(--twb-font-sans);
  font-size: var(--twb-text-body);
  line-height: var(--twb-leading-relaxed);
  color: var(--twb-color-text-primary);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--twb-font-serif);
  color: var(--twb-color-text-primary);
}

h1 {
  font-size: var(--twb-text-h1);
  font-weight: var(--twb-font-weight-bold);
  line-height: var(--twb-leading-tight);
}

h2 {
  font-size: var(--twb-text-h2);
  font-weight: var(--twb-font-weight-semibold);
  line-height: var(--twb-leading-snug);
}

h3 {
  font-size: var(--twb-text-h3);
  font-weight: var(--twb-font-weight-semibold);
  line-height: var(--twb-leading-snug);
}

h4 {
  font-size: var(--twb-text-h4);
  font-weight: var(--twb-font-weight-medium);
  line-height: var(--twb-leading-snug);
}
```

### TypeScript Component

**File:** `/components/common/Typography.tsx`

```typescript
/**
 * Typography Component
 * 
 * Standardized text rendering following The Wire Brand design tokens.
 * All sizes use fluid clamp() scaling for responsive typography.
 * 
 * @param variant - Typography style variant
 * @param children - Text content
 * @param className - Additional Tailwind classes
 */

import React from 'react';

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'body-large' | 'body' | 'caption';
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Typography({ variant, children, className = '', as }: TypographyProps) {
  const Component = as || getDefaultElement(variant);
  
  return (
    <Component 
      className={`twb-${variant} ${className}`}
      style={{ fontSize: `var(--twb-text-${variant})` }}
    >
      {children}
    </Component>
  );
}

function getDefaultElement(variant: string): React.ElementType {
  if (variant.startsWith('h')) return variant;
  return 'p';
}
```

### Tailwind Usage

```tsx
// Using CSS variables in Tailwind
<h1 className="text-[length:var(--twb-text-h1)] font-serif font-bold leading-[1.2]">

// Using the Typography component (recommended)
<Typography variant="h1">Welcome to The Wire Brand</Typography>
```

---

## Usage Guidelines

### When to Use

✅ **Use typography tokens when:**
- Rendering any text content (headings, paragraphs, labels)
- Creating new components with text
- Ensuring consistent font sizing across breakpoints
- Maintaining accessibility standards

### When NOT to Use

❌ **Avoid typography tokens when:**
- Creating SVG text (use explicit sizes)
- Working with third-party embedded content
- Rendering decorative ASCII art or specialized layouts

### Component-Specific Usage

| Component | Typography Token | Rationale |
|-----------|------------------|-----------|
| `Hero` | `twb-text-h1` | Large, impactful headlines |
| `SectionHeading` | `twb-text-h2` | Clear section hierarchy |
| `ProductCard` | `twb-text-h3` | Prominent product names |
| `Button` | `twb-text-body` (uppercase) | Readable CTAs |
| `Metadata` | `twb-text-caption` | Supporting information |

---

## Accessibility Considerations

### WCAG 2.1 AA Compliance

- **Minimum font sizes:**
  - Mobile: 16px (1rem) for body text ✅
  - Desktop: 18px (1.125rem) preferred for long-form content ✅
  
- **Line length:**
  - Target: 70-80 characters per line on desktop
  - Use `container.content` (max-w-[960px]) for long-form text
  
- **Line height:**
  - Body text: 1.5-1.7 (WCAG recommends 1.5 minimum) ✅
  - Headings: 1.2-1.3 ✅

### Testing

- Zoom test: Text must remain readable at 200% browser zoom
- Contrast test: All text must meet 4.5:1 contrast (normal) or 3:1 (large)
- Reflow test: Text must wrap without horizontal scrolling at 320px width

---

## Examples

### Correct Usage

```tsx
// Example 1: Hero section with fluid H1
<section className="hero">
  <Typography variant="h1" className="text-center">
    Handcrafted Wines from Paarl
  </Typography>
  <Typography variant="body-large" className="mt-4">
    Experience the terroir of South Africa's most beautiful valley
  </Typography>
</section>

// Example 2: Product card with H3 title
<article className="product-card">
  <Typography variant="h3">
    Cabernet Sauvignon Reserve 2021
  </Typography>
  <Typography variant="caption" className="text-[var(--twb-color-text-secondary)]">
    Paarl Valley | 14.5% ABV
  </Typography>
</article>
```

### Incorrect Usage

```tsx
// ❌ Don't do this: Hardcoded font sizes
<h1 className="text-5xl md:text-7xl">Title</h1>

// ✅ Do this instead: Use fluid tokens
<Typography variant="h1">Title</Typography>

// ❌ Don't do this: Skipping heading levels
<h1>Page Title</h1>
<h3>Section (should be H2)</h3>

// ✅ Do this instead: Logical hierarchy
<h1>Page Title</h1>
<h2>Section</h2>
```

---

## Related Tokens

### Complementary Categories
- `/guidelines/design-tokens/colors.md` - Text colors
- `/guidelines/design-tokens/spacing.md` - Margin/padding for text blocks
- `/guidelines/design-tokens/responsive.md` - Breakpoint behavior

### Often Used Together
- `twb-font-serif` + `twb-text-h1` (hero headings)
- `twb-font-sans` + `twb-text-body` (body content)
- `twb-text-caption` + `twb-color-text-secondary` (metadata)

---

## Validation Checklist

- [x] All tokens use `twb-` prefix
- [ ] All tokens defined in `/styles/globals.css`
- [ ] Typography component created
- [x] Accessibility requirements met (16px min, 1.5 line-height)
- [x] Fluid clamp() formulas standardized
- [x] Documentation complete
- [x] Examples tested

---

## Change Log

### Version 1.0 (2024-03-13)
- Initial typography token system
- 7 fluid typography scales defined
- Font family tokens established
- Line height and weight tokens added
- Accessibility compliance validated

---

**Maintained by:** Design System Team  
**Review Cycle:** Monthly or with major design updates  
**Next Review:** 2024-04-13
