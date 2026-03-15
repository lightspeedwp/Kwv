# WordPress-Aligned CSS Variables

**Category:** Development Standards  
**Version:** 1.0  
**Last Updated:** 2024-03-15  
**Status:** Mandatory

---

## Overview

All styling in The Wire Brand project **MUST** use WordPress-aligned CSS variables instead of inline hex colors, pixel values, or hardcoded fonts. This ensures seamless integration with WordPress `theme.json` and enables dynamic theming.

**Why WordPress Alignment?**
- Direct mapping to WordPress block editor
- Single source of truth for design tokens
- Easier theme customization
- Better maintainability
- Automatic dark mode support

---

## Critical Rules

### ❌ NEVER Use These

```tsx
// ❌ WRONG: Inline hex colors
<div className="bg-[#f5efe4]">

// ❌ WRONG: Hardcoded pixel values
<div style={{ padding: '16px', marginBottom: '24px' }}>

// ❌ WRONG: Hardcoded font families
<h1 style={{ fontFamily: 'Playfair Display, serif' }}>

// ❌ WRONG: Tailwind dark: prefix
<div className="bg-cream dark:bg-slate-900">

// ❌ WRONG: Random spacing values
<div className="mt-[23px] mb-[17px]">
```

### ✅ ALWAYS Use These

```tsx
// ✅ CORRECT: WordPress CSS variables
<div className="bg-[var(--twb-color-bg-primary)]">

// ✅ CORRECT: Spacing variables
<div className="p-[var(--twb-spacing-4)] mb-[var(--twb-spacing-6)]">

// ✅ CORRECT: Typography variables
<h1 className="font-[var(--twb-font-family-heading)] text-[var(--twb-font-size-h1)]">

// ✅ CORRECT: BEM classes (recommended)
<div className="twb-card">
<h1 className="twb-heading twb-heading--h1">
```

---

## Variable Naming Convention

All custom variables use the `twb-` prefix (The Wire Brand).

### Format

```
--twb-{category}-{property}-{variant}
```

### Categories

- `color` - All color tokens
- `font` - Typography properties
- `spacing` - Padding, margin, gap
- `border` - Border styles and radii
- `shadow` - Box shadows
- `duration` - Animation/transition durations
- `easing` - Animation curves
- `icon` - Icon sizes

---

## Complete Variable Reference

### Color Variables

**Background Colors:**
```css
--twb-color-bg-primary      /* Main background */
--twb-color-bg-secondary    /* Alternate sections */
--twb-color-bg-tertiary     /* Elevated surfaces */
--twb-color-bg-inverse      /* Inverse backgrounds */
```

**Text Colors:**
```css
--twb-color-text-primary    /* Body text, headings */
--twb-color-text-secondary  /* Supporting text */
--twb-color-text-tertiary   /* Muted text */
--twb-color-text-inverse    /* Text on dark */
--twb-color-text-disabled   /* Disabled state */
```

**Accent Colors:**
```css
--twb-color-accent-plum     /* Primary CTAs */
--twb-color-accent-vine     /* Secondary accents */
--twb-color-accent-clay     /* Warm accents */
--twb-color-accent-gold     /* Premium highlights */
```

**State Colors:**
```css
--twb-color-state-hover     /* Hover state */
--twb-color-state-active    /* Active/pressed */
--twb-color-state-focus     /* Focus ring */
--twb-color-state-disabled  /* Disabled elements */
```

**Status Colors:**
```css
--twb-color-status-success  /* Success messages */
--twb-color-status-error    /* Error messages */
--twb-color-status-warning  /* Warnings */
--twb-color-status-info     /* Info messages */
```

**Border Colors:**
```css
--twb-color-border-primary    /* Standard borders */
--twb-color-border-secondary  /* Subtle dividers */
--twb-color-border-focus      /* Focus borders */
--twb-color-divider           /* Section dividers */
```

---

### Typography Variables

**Font Families:**
```css
--twb-font-family-heading   /* Serif for headings */
--twb-font-family-body      /* Sans-serif for body */
--twb-font-family-mono      /* Monospace for code */
```

**Font Sizes:**
```css
--twb-font-size-h1          /* clamp(2.4rem, 5vw + 1rem, 4.5rem) */
--twb-font-size-h2          /* clamp(2rem, 4vw + 1rem, 3.5rem) */
--twb-font-size-h3          /* clamp(1.75rem, 3vw + 1rem, 2.5rem) */
--twb-font-size-h4          /* clamp(1.5rem, 2.5vw + 1rem, 2rem) */
--twb-font-size-h5          /* clamp(1.25rem, 2vw + 0.5rem, 1.5rem) */
--twb-font-size-h6          /* clamp(1.125rem, 1.5vw + 0.5rem, 1.25rem) */
--twb-font-size-body        /* clamp(1rem, 1vw + 0.5rem, 1.125rem) */
--twb-font-size-sm          /* clamp(0.875rem, 0.8vw + 0.4rem, 1rem) */
--twb-font-size-xs          /* clamp(0.75rem, 0.6vw + 0.3rem, 0.875rem) */
```

**Font Weights:**
```css
--twb-font-weight-light     /* 300 */
--twb-font-weight-regular   /* 400 */
--twb-font-weight-medium    /* 500 */
--twb-font-weight-semibold  /* 600 */
--twb-font-weight-bold      /* 700 */
```

**Line Heights:**
```css
--twb-line-height-heading   /* 1.2 */
--twb-line-height-body      /* 1.6 */
--twb-line-height-relaxed   /* 1.8 */
--twb-line-height-tight     /* 1.4 */
```

---

### Spacing Variables

**Fixed Scale (use for precise layouts):**
```css
--twb-spacing-0   /* 0 */
--twb-spacing-1   /* 0.25rem (4px) */
--twb-spacing-2   /* 0.5rem (8px) */
--twb-spacing-3   /* 0.75rem (12px) */
--twb-spacing-4   /* 1rem (16px) */
--twb-spacing-5   /* 1.25rem (20px) */
--twb-spacing-6   /* 1.5rem (24px) */
--twb-spacing-8   /* 2rem (32px) */
--twb-spacing-10  /* 2.5rem (40px) */
--twb-spacing-12  /* 3rem (48px) */
--twb-spacing-16  /* 4rem (64px) */
--twb-spacing-20  /* 5rem (80px) */
--twb-spacing-24  /* 6rem (96px) */
```

**Fluid Scale (use for responsive spacing):**
```css
--twb-spacing-section-y  /* clamp(3rem, 5vh + 2rem, 8rem) */
--twb-spacing-container-x /* clamp(1rem, 4vw, 3rem) */
--twb-spacing-grid-gap   /* clamp(1rem, 2vw, 2rem) */
```

---

### Border Variables

**Border Widths:**
```css
--twb-border-width-thin   /* 1px */
--twb-border-width-medium /* 2px */
--twb-border-width-thick  /* 3px */
```

**Border Radius:**
```css
--twb-border-radius-none  /* 0 */
--twb-border-radius-sm    /* 0.25rem (4px) */
--twb-border-radius-md    /* 0.5rem (8px) */
--twb-border-radius-lg    /* 0.75rem (12px) */
--twb-border-radius-xl    /* 1rem (16px) */
--twb-border-radius-full  /* 9999px */
```

---

### Shadow Variables

```css
--twb-shadow-sm   /* Subtle elevation */
--twb-shadow-md   /* Standard cards */
--twb-shadow-lg   /* Elevated modals */
--twb-shadow-xl   /* Highest elevation */
--twb-shadow-inner /* Inset shadows */
```

---

### Motion Variables

**Durations:**
```css
--twb-duration-fast    /* 150ms */
--twb-duration-normal  /* 250ms */
--twb-duration-slow    /* 400ms */
```

**Easing:**
```css
--twb-easing-standard  /* cubic-bezier(0.4, 0.0, 0.2, 1) */
--twb-easing-decelerate /* cubic-bezier(0.0, 0.0, 0.2, 1) */
--twb-easing-accelerate /* cubic-bezier(0.4, 0.0, 1, 1) */
```

---

### Icon Variables

```css
--twb-icon-size-sm  /* 1rem (16px) */
--twb-icon-size-md  /* 1.5rem (24px) */
--twb-icon-size-lg  /* 2rem (32px) */
--twb-icon-size-xl  /* 3rem (48px) */
```

---

## Usage Examples

### Component with All Variable Types

```tsx
/**
 * ProductCard Component
 * 
 * Demonstrates proper use of all CSS variable categories.
 */

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article 
      className="
        bg-[var(--twb-color-bg-secondary)]
        border-[var(--twb-border-width-thin)]
        border-[var(--twb-color-border-primary)]
        rounded-[var(--twb-border-radius-lg)]
        p-[var(--twb-spacing-6)]
        shadow-[var(--twb-shadow-md)]
        transition-all
        duration-[var(--twb-duration-normal)]
      "
      style={{
        transitionTimingFunction: 'var(--twb-easing-standard)'
      }}
    >
      <h3 
        className="
          font-[var(--twb-font-family-heading)]
          text-[var(--twb-font-size-h3)]
          font-[var(--twb-font-weight-semibold)]
          leading-[var(--twb-line-height-heading)]
          text-[var(--twb-color-text-primary)]
          mb-[var(--twb-spacing-4)]
        "
      >
        {product.title}
      </h3>
      
      <p 
        className="
          font-[var(--twb-font-family-body)]
          text-[var(--twb-font-size-body)]
          leading-[var(--twb-line-height-body)]
          text-[var(--twb-color-text-secondary)]
          mb-[var(--twb-spacing-6)]
        "
      >
        {product.description}
      </p>
      
      <button 
        className="
          bg-[var(--twb-color-accent-plum)]
          text-[var(--twb-color-text-inverse)]
          px-[var(--twb-spacing-6)]
          py-[var(--twb-spacing-3)]
          rounded-[var(--twb-border-radius-sm)]
          font-[var(--twb-font-weight-medium)]
          transition-all
          duration-[var(--twb-duration-fast)]
          hover:bg-[var(--twb-color-state-hover)]
        "
      >
        Add to Cart
      </button>
    </article>
  );
}
```

---

## BEM Alternative (Recommended)

Instead of inline variable references, use BEM classes for cleaner JSX:

### CSS File

**File:** `/styles/utilities.css`

```css
.twb-product-card {
  background: var(--twb-color-bg-secondary);
  border: var(--twb-border-width-thin) solid var(--twb-color-border-primary);
  border-radius: var(--twb-border-radius-lg);
  padding: var(--twb-spacing-6);
  box-shadow: var(--twb-shadow-md);
  transition: all var(--twb-duration-normal) var(--twb-easing-standard);
}

.twb-product-card:hover {
  box-shadow: var(--twb-shadow-lg);
  transform: translateY(-2px);
}

.twb-product-card__title {
  font-family: var(--twb-font-family-heading);
  font-size: var(--twb-font-size-h3);
  font-weight: var(--twb-font-weight-semibold);
  line-height: var(--twb-line-height-heading);
  color: var(--twb-color-text-primary);
  margin-bottom: var(--twb-spacing-4);
}

.twb-product-card__description {
  font-family: var(--twb-font-family-body);
  font-size: var(--twb-font-size-body);
  line-height: var(--twb-line-height-body);
  color: var(--twb-color-text-secondary);
  margin-bottom: var(--twb-spacing-6);
}

.twb-product-card__button {
  background: var(--twb-color-accent-plum);
  color: var(--twb-color-text-inverse);
  padding: var(--twb-spacing-3) var(--twb-spacing-6);
  border-radius: var(--twb-border-radius-sm);
  font-weight: var(--twb-font-weight-medium);
  transition: all var(--twb-duration-fast) var(--twb-easing-standard);
}

.twb-product-card__button:hover {
  background: var(--twb-color-state-hover);
}
```

### Component (Clean JSX)

```tsx
export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="twb-product-card">
      <h3 className="twb-product-card__title">{product.title}</h3>
      <p className="twb-product-card__description">{product.description}</p>
      <button className="twb-product-card__button">Add to Cart</button>
    </article>
  );
}
```

---

## WordPress theme.json Mapping

### Variable Definition

**React/CSS:** `/styles/themes-light.css`
```css
:root {
  --twb-color-bg-primary: #f5efe4;
}
```

**WordPress:** `theme.json`
```json
{
  "settings": {
    "custom": {
      "twb": {
        "color": {
          "bg": {
            "primary": "#f5efe4"
          }
        }
      }
    }
  }
}
```

### Accessing in WordPress

**In PHP template:**
```php
<?php
$bg_color = wp_get_global_settings()['custom']['twb']['color']['bg']['primary'];
?>
<div style="background-color: <?php echo $bg_color; ?>">
```

**In WordPress blocks:**
```html
<!-- wp:group {"style":{"color":{"background":"var(--wp--preset--color--bg-primary)"}}} -->
<div class="wp-block-group has-background">Content</div>
<!-- /wp:group -->
```

---

## Migration Checklist

### Audit Phase

- [ ] Search codebase for hex colors: `#[0-9a-fA-F]{6}`
- [ ] Search for pixel values: `\d+px` (excluding breakpoints)
- [ ] Search for hardcoded fonts: `fontFamily.*['"]`
- [ ] Search for `dark:` classes
- [ ] List all violations by file

### Replacement Phase

**Colors:**
```bash
# Find
className="bg-[#f5efe4]"

# Replace
className="bg-[var(--twb-color-bg-primary)]"
```

**Spacing:**
```bash
# Find
className="p-[16px]"

# Replace
className="p-[var(--twb-spacing-4)]"
```

**Typography:**
```bash
# Find
style={{ fontFamily: 'Playfair Display' }}

# Replace
className="font-[var(--twb-font-family-heading)]"
```

### Validation Phase

- [ ] No hex colors in JSX/TSX files
- [ ] No hardcoded pixel values (except max-width constraints)
- [ ] No hardcoded font-family declarations
- [ ] All components work in both light and dark modes
- [ ] Contrast ratios verified

---

## Automated Migration Script

**Prompt:** `/prompts/css-migration-hardcoded-to-variables.md`

This prompt will:
1. Scan all component files
2. Identify hardcoded values
3. Replace with appropriate CSS variables
4. Generate report of changes

---

## Common Patterns

### Hero Section

```tsx
<section className="
  min-h-[calc(100dvh-90px)]
  bg-[var(--twb-color-bg-primary)]
  text-[var(--twb-color-text-primary)]
  px-[var(--twb-spacing-container-x)]
  py-[var(--twb-spacing-section-y)]
">
```

### Container

```tsx
<div className="
  max-w-[1440px]
  mx-auto
  px-[var(--twb-spacing-container-x)]
">
```

### Card

```tsx
<div className="
  bg-[var(--twb-color-bg-secondary)]
  border-[var(--twb-border-width-thin)]
  border-[var(--twb-color-border-primary)]
  rounded-[var(--twb-border-radius-md)]
  p-[var(--twb-spacing-6)]
  shadow-[var(--twb-shadow-md)]
">
```

### Button

```tsx
<button className="
  bg-[var(--twb-color-accent-plum)]
  text-[var(--twb-color-text-inverse)]
  px-[var(--twb-spacing-6)]
  py-[var(--twb-spacing-3)]
  rounded-[var(--twb-border-radius-sm)]
  font-[var(--twb-font-weight-medium)]
  transition-all
  duration-[var(--twb-duration-normal)]
  hover:bg-[var(--twb-color-state-hover)]
">
```

---

## Exceptions

### When Hardcoded Values Are Allowed

1. **Max-width constraints:** `max-w-[1440px]` (design spec)
2. **Breakpoint queries:** `@media (min-width: 768px)` (CSS only)
3. **One-off measurements:** When no token exists and value won't repeat
4. **Vendor libraries:** Third-party component overrides (document reason)

**Always document exceptions with comments:**

```tsx
// Exception: One-off spacing for logo alignment
<div className="ml-[3px]">
```

---

## Related Guidelines

- [Dark/Light Mode](/guidelines/design-tokens/dark-light-mode.md) - Theme system
- [Colors](/guidelines/design-tokens/colors.md) - Color tokens
- [Typography](/guidelines/design-tokens/typography.md) - Font tokens
- [Spacing](/guidelines/design-tokens/spacing.md) - Spacing scale
- [Borders](/guidelines/design-tokens/borders.md) - Border tokens
- [Shadows](/guidelines/design-tokens/shadows.md) - Shadow tokens

---

## Changelog

### Version 1.0 (2024-03-15)
- Initial creation
- Defined complete variable reference
- Added WordPress theme.json mapping
- Provided migration checklist
- Included usage examples

---

**Maintained by:** The Wire Brand Development Team  
**Questions?** Reference this document in all CSS-related PRs
