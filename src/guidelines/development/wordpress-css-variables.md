# WordPress-Aligned CSS Variables & Classes

**Status:** ✅ Active Standard  
**Priority:** 🔴 MANDATORY for all new code  
**Last Updated:** March 13, 2026

---

## 📑 Table of Contents

1. [Overview](#overview)
2. [WordPress theme.json Alignment](#wordpress-themejson-alignment)
3. [Variable Naming Convention](#variable-naming-convention)
4. [Migration Rules](#migration-rules)
5. [Color Variables Reference](#color-variables-reference)
6. [Typography Variables Reference](#typography-variables-reference)
7. [Spacing Variables Reference](#spacing-variables-reference)
8. [BEM Class Reference](#bem-class-reference)
9. [Migration Examples](#migration-examples)
10. [Testing & Validation](#testing--validation)

---

## Overview

### Purpose

All styling in The Wire Brand project must use WordPress-aligned CSS variables and BEM classes instead of inline hex colors or hardcoded values. This ensures:

1. **WordPress Compatibility** - Seamless integration with WordPress theme.json
2. **Theme Consistency** - Single source of truth for design tokens
3. **Dark Mode Support** - Automatic theme switching via CSS variables
4. **Maintainability** - Update colors/fonts in one place
5. **Accessibility** - WCAG-compliant color combinations enforced

### Strict Rules

❌ **NEVER USE:**
```tsx
// Bad - Inline hex colors
<div className="bg-[#f5efe4] text-[#1e1a17]">

// Bad - Hardcoded font values
<h1 style={{ fontSize: '48px', fontFamily: 'Playfair Display' }}>

// Bad - Magic numbers
<div style={{ padding: '24px', margin: '16px' }}>
```

✅ **ALWAYS USE:**
```tsx
// Good - CSS variables
<div className="bg-[var(--twb-color-bg-primary)] text-[var(--twb-color-text-primary)]">

// Good - BEM classes
<div className="twb-section twb-section--paper">

// Good - WordPress-aligned classes
<h1 className="twb-heading twb-heading--h1">
```

---

## WordPress theme.json Alignment

### WordPress Preset Patterns

WordPress uses a specific pattern for CSS variables:

```css
/* WordPress Standard Pattern */
--wp-preset-color-{slug}
--wp-preset-font-size-{slug}
--wp-preset-spacing-{slug}
--wp-preset-font-family-{slug}
```

### The Wire Brand Mapping

We use `twb-` prefix (The Wire Brand) aligned with WordPress patterns:

```css
/* The Wire Brand Variables (WordPress-compatible) */
--twb-color-{semantic-name}
--twb-font-size-{scale}
--twb-spacing-{scale}
--twb-font-family-{role}
```

### Future WordPress Integration

When migrating to WordPress, our variables map directly:

```css
/* Current (Development) */
--twb-color-bg-primary: #f5efe4;

/* WordPress theme.json */
{
  "settings": {
    "color": {
      "palette": [
        {
          "slug": "bg-primary",
          "color": "#f5efe4",
          "name": "Background Primary"
        }
      ]
    }
  }
}

/* WordPress Output */
--wp--preset--color--bg-primary: #f5efe4;
```

---

## Variable Naming Convention

### Color Variables

**Pattern:** `--twb-color-{category}-{variant}`

#### Background Colors
```css
--twb-color-bg-primary      /* Main background (paper) */
--twb-color-bg-secondary    /* Secondary background */
--twb-color-bg-tertiary     /* Tertiary background (cards) */
--twb-color-bg-inverse      /* Inverse background */
```

#### Text Colors
```css
--twb-color-text-primary    /* Primary text (ink) */
--twb-color-text-secondary  /* Secondary text */
--twb-color-text-muted      /* Muted/subtle text */
--twb-color-text-inverse    /* Text on dark backgrounds */
--twb-color-text-on-dark    /* Text on dark overlays */
--twb-color-text-on-accent  /* Text on accent colors */
```

#### Accent Colors
```css
--twb-color-accent-primary    /* Primary accent (plum) */
--twb-color-accent-secondary  /* Secondary accent (clay) */
--twb-color-accent-premium    /* Premium accent (gold) */
```

#### Semantic Colors
```css
--twb-color-vine    /* Vineyard green */
--twb-color-clay    /* Terracotta */
--twb-color-plum    /* Wine-inspired plum */
--twb-color-gold    /* Premium gold */
--twb-color-paper   /* Warm parchment */
--twb-color-ink     /* Deep charcoal */
```

#### Interactive Colors
```css
--twb-color-link-default     /* Default link color */
--twb-color-link-hover       /* Link hover state */
--twb-color-link-visited     /* Visited link */
--twb-color-link-active      /* Active/pressed link */
```

#### Utility Colors
```css
--twb-color-success    /* Success state */
--twb-color-warning    /* Warning state */
--twb-color-error      /* Error state */
--twb-color-info       /* Info state */
```

### Typography Variables

**Pattern:** `--twb-font-{property}-{variant}`

#### Font Families
```css
--twb-font-family-heading    /* Serif for headings */
--twb-font-family-body       /* Sans-serif for body */
--twb-font-family-mono       /* Monospace (optional) */
```

#### Font Sizes (Fluid Scale)
```css
--twb-font-size-xs      /* Extra small: clamp(0.75rem, ...) */
--twb-font-size-sm      /* Small: clamp(0.875rem, ...) */
--twb-font-size-base    /* Base: clamp(1rem, ...) */
--twb-font-size-lg      /* Large: clamp(1.125rem, ...) */
--twb-font-size-xl      /* Extra large: clamp(1.25rem, ...) */
--twb-font-size-2xl     /* 2X large: clamp(1.5rem, ...) */
--twb-font-size-3xl     /* 3X large: clamp(1.875rem, ...) */
--twb-font-size-4xl     /* 4X large: clamp(2.25rem, ...) */
--twb-font-size-5xl     /* 5X large: clamp(3rem, ...) */
```

#### Font Weights
```css
--twb-font-weight-light      /* 300 */
--twb-font-weight-normal     /* 400 */
--twb-font-weight-medium     /* 500 */
--twb-font-weight-semibold   /* 600 */
--twb-font-weight-bold       /* 700 */
```

#### Line Heights
```css
--twb-line-height-tight      /* 1.25 */
--twb-line-height-snug       /* 1.375 */
--twb-line-height-normal     /* 1.5 */
--twb-line-height-relaxed    /* 1.625 */
--twb-line-height-loose      /* 2 */
```

### Spacing Variables

**Pattern:** `--twb-spacing-{scale}`

```css
--twb-spacing-0     /* 0 */
--twb-spacing-1     /* 0.25rem (4px) */
--twb-spacing-2     /* 0.5rem (8px) */
--twb-spacing-3     /* 0.75rem (12px) */
--twb-spacing-4     /* 1rem (16px) */
--twb-spacing-6     /* 1.5rem (24px) */
--twb-spacing-8     /* 2rem (32px) */
--twb-spacing-12    /* 3rem (48px) */
--twb-spacing-16    /* 4rem (64px) */
--twb-spacing-24    /* 6rem (96px) */
```

### Border Variables

**Pattern:** `--twb-border-{variant}`

```css
--twb-border-primary     /* rgba(30, 26, 23, 0.15) */
--twb-border-secondary   /* rgba(92, 107, 79, 0.25) */
--twb-border-tertiary    /* rgba(245, 239, 228, 0.15) */
--twb-border-accent      /* var(--twb-color-gold) */
```

### Shadow Variables

**Pattern:** `--twb-shadow-{size}`

```css
--twb-shadow-sm     /* Small shadow */
--twb-shadow-md     /* Medium shadow */
--twb-shadow-lg     /* Large shadow */
--twb-shadow-xl     /* Extra large shadow */
```

---

## Migration Rules

### Rule 1: No Inline Hex Colors

❌ **NEVER:**
```tsx
<div className="bg-[#f5efe4]">
<p className="text-[#1e1a17]">
<button style={{ backgroundColor: '#5a2d3b' }}>
```

✅ **ALWAYS:**
```tsx
<div className="bg-[var(--twb-color-bg-primary)]">
<p className="text-[var(--twb-color-text-primary)]">
<button className="twb-btn twb-btn--primary">
```

### Rule 2: No Hardcoded Font Values

❌ **NEVER:**
```tsx
<h1 style={{ fontSize: '48px' }}>
<p className="text-[16px] font-[Inter]">
```

✅ **ALWAYS:**
```tsx
<h1 className="twb-heading twb-heading--h1">
<p className="twb-text twb-text--body">
```

### Rule 3: Use BEM Classes Where Possible

❌ **NEVER:**
```tsx
<section className="py-20 bg-white text-gray-900">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-4xl font-bold mb-6">
```

✅ **ALWAYS:**
```tsx
<section className="twb-section twb-section--paper">
  <div className="twb-section__container">
    <h2 className="twb-section__title">
```

### Rule 4: Dark Mode Support Required

Every component must support dark mode via CSS variables:

```tsx
// Good - Automatic dark mode support
<div className="bg-[var(--twb-color-bg-primary)]">
  // Automatically switches: #f5efe4 → #1e1a17

// Also acceptable - Explicit dark mode override
<div className="bg-white dark:bg-[var(--twb-color-bg-primary)]">
```

### Rule 5: WordPress-First Thinking

When choosing variable names, think "How would this map to theme.json?"

```css
/* Good - Maps to WordPress */
--twb-color-bg-primary
/* WordPress: --wp--preset--color--bg-primary */

/* Bad - Doesn't map cleanly */
--twb-bg-main-color-light
```

---

## Color Variables Reference

### Complete List (Light/Dark Modes)

See `/styles/themes-light.css` and `/styles/themes-dark.css` for full definitions.

#### Light Mode Values
| Variable | Value | Usage |
|----------|-------|-------|
| `--twb-color-bg-primary` | `#f5efe4` | Main page background (paper) |
| `--twb-color-bg-secondary` | `#faf7f2` | Secondary sections |
| `--twb-color-bg-tertiary` | `#ffffff` | Cards, panels |
| `--twb-color-text-primary` | `#1e1a17` | Primary text (ink) |
| `--twb-color-text-secondary` | `#5c6b4f` | Secondary text (vine) |
| `--twb-color-text-muted` | `#6b6461` | Subtle text |
| `--twb-color-accent-primary` | `#5a2d3b` | Primary CTAs (plum) |
| `--twb-color-accent-secondary` | `#b86b4b` | Secondary actions (clay) |
| `--twb-color-accent-premium` | `#c8a96b` | Premium indicators (gold) |
| `--twb-color-gold` | `#c8a96b` | Gold accents |
| `--twb-color-vine` | `#5c6b4f` | Vineyard green |
| `--twb-color-clay` | `#b86b4b` | Terracotta |
| `--twb-color-plum` | `#5a2d3b` | Wine plum |
| `--twb-color-paper` | `#f5efe4` | Parchment |
| `--twb-color-ink` | `#1e1a17` | Deep charcoal |

#### Dark Mode Values
| Variable | Value | Usage |
|----------|-------|-------|
| `--twb-color-bg-primary` | `#1e1a17` | Main background (inverted) |
| `--twb-color-bg-secondary` | `#2a2420` | Secondary sections |
| `--twb-color-bg-tertiary` | `#332f2a` | Cards, panels |
| `--twb-color-text-primary` | `#f5efe4` | Primary text (inverted) |
| `--twb-color-text-secondary` | `#d4b87f` | Secondary text (gold) |
| `--twb-color-text-muted` | `#9a8d7f` | Subtle text |
| `--twb-color-accent-primary` | `#8a4d5b` | Primary CTAs (lighter plum) |
| `--twb-color-accent-secondary` | `#d4856a` | Secondary actions (lighter clay) |
| `--twb-color-accent-premium` | `#d4b87f` | Premium (lighter gold) |

---

## Typography Variables Reference

### Complete List

See `/styles/themes-variables.css` for full definitions.

#### Font Families
```css
--twb-font-family-heading: 'Playfair Display', Georgia, serif;
--twb-font-family-body: 'Inter', system-ui, sans-serif;
```

#### Font Sizes (Fluid with clamp)
```css
--twb-font-size-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
--twb-font-size-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);
--twb-font-size-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
--twb-font-size-lg: clamp(1.125rem, 1rem + 0.625vw, 1.25rem);
--twb-font-size-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);
--twb-font-size-2xl: clamp(1.5rem, 1.3rem + 1vw, 2rem);
--twb-font-size-3xl: clamp(1.875rem, 1.5rem + 1.875vw, 2.5rem);
--twb-font-size-4xl: clamp(2.25rem, 1.75rem + 2.5vw, 3.5rem);
--twb-font-size-5xl: clamp(3rem, 2rem + 5vw, 4.5rem);
```

#### Font Weights
```css
--twb-font-weight-light: 300;
--twb-font-weight-normal: 400;
--twb-font-weight-medium: 500;
--twb-font-weight-semibold: 600;
--twb-font-weight-bold: 700;
```

#### Line Heights
```css
--twb-line-height-tight: 1.25;
--twb-line-height-snug: 1.375;
--twb-line-height-normal: 1.5;
--twb-line-height-relaxed: 1.625;
--twb-line-height-loose: 2;
```

---

## BEM Class Reference

### Component Classes

All BEM classes use the `twb-` namespace and are defined in `/styles/utilities.css`.

#### Button Classes
```css
.twb-btn                  /* Base button */
.twb-btn--primary         /* Primary button (plum) */
.twb-btn--secondary       /* Secondary button (gold) */
.twb-btn--outline         /* Outline variant */
.twb-btn--ghost           /* Ghost/transparent */
.twb-btn--sm              /* Small size */
.twb-btn--lg              /* Large size */
```

#### Section Classes
```css
.twb-section              /* Base section */
.twb-section--paper       /* Paper background */
.twb-section--white       /* White background */
.twb-section--dark        /* Dark background */
.twb-section__container   /* Section container */
.twb-section__title       /* Section title */
.twb-section__subtitle    /* Section subtitle */
.twb-section__description /* Section description */
```

#### Card Classes
```css
.twb-card                 /* Base card */
.twb-card--elevated       /* Card with shadow */
.twb-card--bordered       /* Card with border */
.twb-card__header         /* Card header */
.twb-card__body           /* Card body */
.twb-card__footer         /* Card footer */
.twb-card__title          /* Card title */
.twb-card__description    /* Card description */
```

#### Typography Classes
```css
.twb-heading              /* Base heading */
.twb-heading--h1          /* H1 styling */
.twb-heading--h2          /* H2 styling */
.twb-heading--h3          /* H3 styling */
.twb-heading--h4          /* H4 styling */
.twb-text                 /* Base text */
.twb-text--body           /* Body text */
.twb-text--body-large     /* Large body */
.twb-text--caption        /* Caption/small */
.twb-text--muted          /* Muted color */
```

#### Form Classes
```css
.twb-form                 /* Base form */
.twb-form__group          /* Form group */
.twb-form__label          /* Form label */
.twb-form__input          /* Form input */
.twb-form__textarea       /* Form textarea */
.twb-form__select         /* Form select */
.twb-form__checkbox       /* Checkbox */
.twb-form__radio          /* Radio button */
.twb-form__error          /* Error message */
.twb-form__help           /* Help text */
```

---

## Migration Examples

### Example 1: Hero Component

#### Before (Hardcoded)
```tsx
<div className="bg-black">
  <div className="text-white">
    <h1 style={{ fontSize: '48px', fontFamily: 'Playfair Display' }}>
      Title
    </h1>
    <p className="text-gray-300">Description</p>
    <button className="bg-[#5a2d3b] text-white px-6 py-3">
      Click Me
    </button>
  </div>
</div>
```

#### After (CSS Variables + BEM)
```tsx
<div className="bg-black dark:bg-[var(--twb-color-bg-primary)]">
  <div className="text-white dark:text-[var(--twb-color-text-on-dark)]">
    <h1 className="twb-heading twb-heading--h1">
      Title
    </h1>
    <p className="twb-text twb-text--body text-[var(--twb-color-text-muted)]">
      Description
    </p>
    <button className="twb-btn twb-btn--primary">
      Click Me
    </button>
  </div>
</div>
```

### Example 2: Card Component

#### Before (Hardcoded)
```tsx
<div className="bg-white shadow-md p-6 border border-gray-200">
  <h3 className="text-2xl font-bold text-[#2C1810] mb-4">
    Card Title
  </h3>
  <p className="text-gray-600 mb-6">
    Card description text goes here.
  </p>
  <button className="bg-[#BFA15F] text-white px-4 py-2 rounded">
    Learn More
  </button>
</div>
```

#### After (CSS Variables + BEM)
```tsx
<div className="twb-card twb-card--elevated">
  <div className="twb-card__header">
    <h3 className="twb-card__title">
      Card Title
    </h3>
  </div>
  <div className="twb-card__body">
    <p className="twb-card__description">
      Card description text goes here.
    </p>
  </div>
  <div className="twb-card__footer">
    <button className="twb-btn twb-btn--secondary">
      Learn More
    </button>
  </div>
</div>
```

### Example 3: Form Component

#### Before (Hardcoded)
```tsx
<form className="max-w-md mx-auto">
  <label className="block text-sm font-bold text-[#2C1810] mb-2">
    Email Address
  </label>
  <input 
    type="email"
    className="w-full border border-gray-300 px-4 py-2 rounded"
    placeholder="Enter email"
  />
  <button className="w-full bg-[#5a2d3b] text-white py-3 mt-4">
    Submit
  </button>
</form>
```

#### After (CSS Variables + BEM)
```tsx
<form className="twb-form">
  <div className="twb-form__group">
    <label className="twb-form__label">
      Email Address
    </label>
    <input 
      type="email"
      className="twb-form__input"
      placeholder="Enter email"
    />
  </div>
  <button className="twb-btn twb-btn--primary twb-btn--full-width">
    Submit
  </button>
</form>
```

### Example 4: Section Component

#### Before (Hardcoded)
```tsx
<section className="py-20 bg-[#f5efe4]">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-[#2C1810] mb-6 text-center">
      Section Title
    </h2>
    <p className="text-gray-600 text-center max-w-3xl mx-auto">
      Section description
    </p>
  </div>
</section>
```

#### After (CSS Variables + BEM)
```tsx
<section className="twb-section twb-section--paper">
  <div className="twb-section__container">
    <h2 className="twb-section__title">
      Section Title
    </h2>
    <p className="twb-section__description">
      Section description
    </p>
  </div>
</section>
```

---

## Testing & Validation

### Pre-Migration Checklist

Before migrating a component:

- [ ] Identify all inline hex colors
- [ ] Identify all hardcoded font values
- [ ] Identify all magic numbers (spacing, sizing)
- [ ] Check if BEM classes exist for the pattern
- [ ] Verify dark mode requirements

### Migration Checklist

During migration:

- [ ] Replace hex colors with CSS variables
- [ ] Replace hardcoded fonts with variable or BEM classes
- [ ] Add dark mode support (`dark:` classes or variables)
- [ ] Test in light mode
- [ ] Test in dark mode
- [ ] Verify contrast ratios (WCAG AA)
- [ ] Test responsive behavior

### Post-Migration Checklist

After migration:

- [ ] No inline hex colors remain
- [ ] No hardcoded font values remain
- [ ] All colors use CSS variables
- [ ] BEM classes used where appropriate
- [ ] Dark mode works correctly
- [ ] Accessibility maintained
- [ ] Visual regression test passed

### Validation Tools

#### Search for Hardcoded Values

```bash
# Find inline hex colors
grep -r "bg-\[#" src/

# Find text colors
grep -r "text-\[#" src/

# Find hardcoded font sizes
grep -r "text-\[.*px\]" src/

# Find style props
grep -r "style={{" src/
```

#### Contrast Checker

Use WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/

All color combinations must meet:
- Normal text: **4.5:1** minimum (WCAG AA)
- Large text: **3.0:1** minimum (WCAG AA)

---

## WordPress theme.json Future Mapping

### Example theme.json Structure

When we migrate to WordPress, our variables will map like this:

```json
{
  "version": 2,
  "settings": {
    "color": {
      "palette": [
        {
          "slug": "bg-primary",
          "color": "#f5efe4",
          "name": "Background Primary"
        },
        {
          "slug": "text-primary",
          "color": "#1e1a17",
          "name": "Text Primary"
        },
        {
          "slug": "accent-primary",
          "color": "#5a2d3b",
          "name": "Accent Primary"
        }
      ]
    },
    "typography": {
      "fontFamilies": [
        {
          "slug": "heading",
          "fontFamily": "Playfair Display, Georgia, serif",
          "name": "Heading Font"
        },
        {
          "slug": "body",
          "fontFamily": "Inter, system-ui, sans-serif",
          "name": "Body Font"
        }
      ],
      "fontSizes": [
        {
          "slug": "small",
          "size": "clamp(0.875rem, 0.8rem + 0.375vw, 1rem)",
          "name": "Small"
        },
        {
          "slug": "medium",
          "size": "clamp(1rem, 0.9rem + 0.5vw, 1.125rem)",
          "name": "Medium"
        }
      ]
    },
    "spacing": {
      "spacingScale": {
        "steps": 0
      },
      "spacingSizes": [
        {
          "slug": "small",
          "size": "1rem",
          "name": "Small"
        },
        {
          "slug": "medium",
          "size": "2rem",
          "name": "Medium"
        }
      ]
    }
  }
}
```

---

## Enforcement

### Code Review Checklist

All pull requests must pass:

- ✅ No inline hex colors
- ✅ No hardcoded font values
- ✅ CSS variables used for all colors
- ✅ BEM classes used where applicable
- ✅ Dark mode support verified
- ✅ WCAG AA contrast maintained

### Automated Linting (Future)

```json
// .eslintrc.json (future rule)
{
  "rules": {
    "no-hardcoded-colors": "error",
    "no-inline-styles": "warn",
    "require-css-variables": "error"
  }
}
```

---

## References

- **CSS Architecture Guide:** `/guidelines/development/css-architecture.md`
- **Color Tokens:** `/guidelines/design-tokens/colors.md`
- **Typography Tokens:** `/guidelines/design-tokens/typography.md`
- **BEM Utilities:** `/styles/utilities.css`
- **Theme Variables:** `/styles/themes-variables.css`
- **Light Theme:** `/styles/themes-light.css`
- **Dark Theme:** `/styles/themes-dark.css`

---

## Changelog

### March 13, 2026 - Initial Creation
- Created WordPress-aligned CSS variable guidelines
- Documented naming conventions
- Added migration examples
- Created validation checklist
- Mapped future WordPress theme.json structure

---

**Status:** ✅ **ACTIVE STANDARD**  
**Enforcement:** 🔴 **MANDATORY for all new code**  
**Next Review:** Monthly or after WordPress migration planning
