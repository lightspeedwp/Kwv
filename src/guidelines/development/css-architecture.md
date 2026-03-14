# CSS Architecture Guidelines

**Category:** Development  
**Domain:** CSS/Styling  
**Version:** 2.0  
**Last Updated:** 2026-03-13  
**Status:** Active

---

## Overview

The Wire Brand uses a modular CSS architecture with light/dark mode support, BEM methodology for component classes, and WordPress-aligned CSS variables.

**Key Characteristics:**
- Modular file structure (variables, themes, utilities)
- WordPress-aligned CSS variable naming (`--wp-preset-*`)
- BEM methodology for component classes (`twb-` namespace)
- Automatic light/dark mode support
- Tailwind CSS v4 integration

---

## File Structure

```
/styles/
├── globals.css              # Main entry point, imports all files
├── themes.css               # Theme orchestration (imports others)
├── themes-variables.css     # Core design tokens (fonts, spacing)
├── themes-light.css         # Light mode colors
├── themes-dark.css          # Dark mode colors
└── utilities.css            # BEM component classes
```

### Import Order (Critical)

**globals.css imports themes.css, which imports in this order:**

1. **themes-variables.css** - Theme-agnostic tokens
2. **themes-light.css** - Default light mode colors
3. **themes-dark.css** - Dark mode overrides (.dark class)
4. **utilities.css** - BEM component classes

---

## CSS Variable Naming Conventions

### WordPress-Aligned Variables

Use `--wp-preset-*` pattern for WordPress compatibility:

```css
/* Font Families */
--wp-preset-font-family-serif: 'Playfair Display', serif;
--wp-preset-font-family-sans-serif: 'Inter', sans-serif;

/* Font Sizes */
--wp-preset-font-size-h1: clamp(2.4rem, 5vw + 1rem, 4.5rem);
--wp-preset-font-size-medium: clamp(1rem, 1vw + 0.5rem, 1.125rem);

/* Spacing */
--wp-preset-spacing-40: 1rem;
--wp-preset-spacing-60: 2rem;

/* Colors */
--wp-preset-color-paper: #f5efe4;
--wp-preset-color-plum: #5a2d3b;
```

### The Wire Brand Variables

Use `--twb-*` prefix for component usage (aliases WordPress variables):

```css
/* Typography */
--twb-font-serif: var(--wp-preset-font-family-serif);
--twb-text-h1: var(--wp-preset-font-size-h1);

/* Colors */
--twb-color-paper: var(--wp-preset-color-paper);
--twb-color-text-primary: var(--twb-color-ink);

/* Spacing */
--twb-spacing-section: clamp(3rem, 6vw, 5rem);

/* Borders, Shadows, Radius */
--twb-border-primary: rgba(30, 26, 23, 0.15);
--twb-shadow-md: 0 4px 6px rgba(30, 26, 23, 0.07);
--twb-radius-lg: 0.75rem;
```

**Why Two Naming Systems?**
- `--wp-preset-*`: WordPress editor compatibility, follows WP standards
- `--twb-*`: Shorter, cleaner for component usage, aliases `--wp-preset-*`

---

## BEM Methodology

### BEM Pattern

**Block__Element--Modifier**

```css
.twb-block {}                    /* Component */
.twb-block__element {}           /* Child element */
.twb-block--modifier {}          /* Variation */
.twb-block__element--modifier {} /* Element variation */
```

### Example: Hero Component

```html
<section class="twb-hero twb-hero--tall">
  <div class="twb-hero__overlay"></div>
  <img class="twb-hero__media" src="..." alt="...">
  <div class="twb-hero__content">
    <h1 class="twb-hero__title">Wines Made with Sun and Patience</h1>
    <p class="twb-hero__subtitle">Handcrafted in Paarl Valley</p>
    <div class="twb-hero__actions">
      <a href="/shop" class="twb-btn twb-btn--primary">Shop Wines</a>
      <a href="/visit" class="twb-btn twb-btn--secondary">Visit Us</a>
    </div>
  </div>
  <div class="twb-hero__scroll-indicator">↓</div>
</section>
```

```css
/* Block */
.twb-hero {
  position: relative;
  display: flex;
  align-items: center;
  background-color: var(--twb-color-bg-primary);
}

/* Modifier */
.twb-hero--tall {
  min-height: calc(100dvh - 90px);
}

/* Elements */
.twb-hero__overlay { /* ... */ }
.twb-hero__media { /* ... */ }
.twb-hero__content { /* ... */ }
.twb-hero__title { /* ... */ }
```

### Example: Card Component

```html
<article class="twb-card twb-card--wine">
  <div class="twb-card__media">
    <img class="twb-card__image" src="..." alt="...">
  </div>
  <div class="twb-card__content">
    <span class="twb-card__kicker">Shiraz 2021</span>
    <h3 class="twb-card__title">Paarl Shiraz</h3>
    <p class="twb-card__description">Bold, warm, with notes of dark cherry...</p>
  </div>
  <div class="twb-card__footer">
    <a href="..." class="twb-btn twb-btn--primary">View Wine</a>
  </div>
</article>
```

---

## Available BEM Components

### Layout Components

| Component | Block Class | Usage |
|-----------|-------------|-------|
| Hero | `.twb-hero` | Hero sections with media, content, CTAs |
| Section | `.twb-section` | Page sections with background variants |
| Container | `.twb-container` | Max-width content containers |
| Grid | `.twb-grid` | Responsive grid layouts |

### UI Components

| Component | Block Class | Usage |
|-----------|-------------|-------|
| Card | `.twb-card` | Product, post, experience cards |
| Button | `.twb-btn` | All button styles and variants |
| Badge | `.twb-badge` | Tags, labels, status indicators |
| Form Group | `.twb-form-group` | Form field containers |
| Divider | `.twb-divider` | Horizontal rules/separators |

---

## Light/Dark Mode Implementation

### Automatic Dark Mode

Dark mode activates via:
1. **Class-based:** Add `.dark` class to `<html>` or `<body>`
2. **Data attribute:** Add `data-theme="dark"` to `<html>`
3. **System preference:** Automatically via `prefers-color-scheme: dark`

### Usage in React

```tsx
// Toggle dark mode
const toggleDarkMode = () => {
  document.documentElement.classList.toggle('dark');
  // Or use data attribute:
  document.documentElement.dataset.theme = 
    document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
};

// Respect system preference
useEffect(() => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
  }
}, []);
```

### Dark Mode Color Overrides

**File:** `themes-dark.css`

```css
.dark {
  /* Override semantic tokens */
  --twb-color-bg-primary: #1e1a17;      /* Inverted ink */
  --twb-color-text-primary: #f5efe4;    /* Inverted paper */
  
  /* Lighter accents for better contrast */
  --twb-color-accent-primary: #8a4d5b;  /* Lighter plum */
  --twb-color-link: #8a4d5b;
  
  /* Adjusted borders and shadows */
  --twb-border-primary: rgba(245, 239, 228, 0.15);
  --twb-shadow-md: 0 4px 6px rgba(0, 0, 0, 0.3);
}
```

---

## Component Class Reference

### Hero Component

**File:** `utilities.css` → `.twb-hero`

**Variants:**
- `.twb-hero--tall` - Full viewport height (100dvh - 90px)
- `.twb-hero--medium` - 60vh height
- `.twb-hero--short` - 40vh height

**Elements:**
- `.twb-hero__content` - Content container (centered)
- `.twb-hero__media` - Background image/video
- `.twb-hero__overlay` - Dark overlay gradient
- `.twb-hero__title` - H1 heading
- `.twb-hero__subtitle` - Subtitle/description
- `.twb-hero__actions` - CTA button container
- `.twb-hero__scroll-indicator` - Scroll down arrow

---

### Card Component

**File:** `utilities.css` → `.twb-card`

**Variants:**
- `.twb-card--wine` - Wine product cards
- `.twb-card--experience` - Experience cards
- `.twb-card--post` - Blog/news cards

**Elements:**
- `.twb-card__media` - Image container
- `.twb-card__image` - Image element (scales on hover)
- `.twb-card__content` - Text content container
- `.twb-card__kicker` - Small label above title
- `.twb-card__title` - Card heading
- `.twb-card__description` - Body text
- `.twb-card__meta` - Metadata (date, author, etc.)
- `.twb-card__footer` - CTA/action area

**States:**
- `:hover` - Elevates card with shadow, scales image

---

### Button Component

**File:** `utilities.css` → `.twb-btn`

**Variants:**
- `.twb-btn--primary` - Plum background, white text
- `.twb-btn--secondary` - Outline style, plum border
- `.twb-btn--ghost` - Transparent, hover background
- `.twb-btn--link` - Link-style button

**Sizes:**
- `.twb-btn--sm` - Smaller padding, caption text
- `.twb-btn--lg` - Larger padding, body-large text

**States:**
- `:hover` - Color change, slight scale
- `:focus-visible` - Focus ring (vine color)
- `:active` - Translate down 1px
- `:disabled` - Muted colors, no interactions

---

### Section Component

**File:** `utilities.css` → `.twb-section`

**Variants (Backgrounds):**
- `.twb-section--paper` - Paper color (#f5efe4)
- `.twb-section--white` - Pure white
- `.twb-section--muted` - Subtle gray
- `.twb-section--accent` - Accent background

**Elements:**
- `.twb-section__container` - Max-width container (1400px)
- `.twb-section__header` - Centered header area
- `.twb-section__title` - Section H2 heading
- `.twb-section__subtitle` - Section description

---

### Container Component

**File:** `utilities.css` → `.twb-container`

**Variants:**
- `.twb-container` - Default (1400px max-width)
- `.twb-container--content` - Narrow (960px, for text)
- `.twb-container--wide` - Wide (1280px)
- `.twb-container--full` - Full width, no padding

---

### Grid Component

**File:** `utilities.css` → `.twb-grid`

**Variants:**
- `.twb-grid--2-col` - 2 columns
- `.twb-grid--3-col` - 3 columns
- `.twb-grid--4-col` - 4 columns

**Responsive Behavior:**
- Mobile (<768px): Always 1 column
- Tablet (768-1023px): 2 columns max
- Desktop (1024px+): Full column count

---

### Form Components

**File:** `utilities.css` → `.twb-form-*`

**Components:**
- `.twb-form-group` - Field container with gap
- `.twb-form-label` - Field label (medium weight)
- `.twb-form-input` - Text input/textarea
- `.twb-form-helper` - Helper text below field
- `.twb-form-error` - Error message (red)

**States:**
- `.twb-form-input:focus` - Focus ring (vine color)
- `.twb-form-input--error` - Error state (red border)

---

### Badge Component

**File:** `utilities.css` → `.twb-badge`

**Variants:**
- `.twb-badge` - Default (muted background)
- `.twb-badge--primary` - Plum background
- `.twb-badge--success` - Vine green background
- `.twb-badge--error` - Red background
- `.twb-badge--premium` - Gold background

---

## WordPress Block Alignment

### Block Container Classes

```css
.wp-block-group {
  margin-block: var(--twb-spacing-section);
}

.wp-block-group__inner-container {
  max-width: 1400px;
  margin-inline: auto;
  padding-inline: var(--twb-spacing-inner);
}
```

### Alignment Classes

```css
.alignwide {
  max-width: 1280px;
  margin-inline: auto;
}

.alignfull {
  width: 100vw;
  max-width: 100vw;
  margin-inline: calc(50% - 50vw);
}
```

**Usage in WordPress:**
```html
<!-- Wide alignment -->
<div class="wp-block-group alignwide">
  <!-- Content -->
</div>

<!-- Full width -->
<div class="wp-block-image alignfull">
  <img src="..." alt="...">
</div>
```

---

## Using CSS Variables in Components

### In CSS

```css
.my-component {
  /* Typography */
  font-family: var(--twb-font-serif);
  font-size: var(--twb-text-h2);
  font-weight: var(--twb-font-weight-semibold);
  line-height: var(--twb-leading-tight);
  
  /* Colors */
  color: var(--twb-color-text-primary);
  background-color: var(--twb-color-bg-tertiary);
  
  /* Spacing */
  padding: var(--wp-preset-spacing-50);
  margin-bottom: var(--wp-preset-spacing-60);
  gap: var(--twb-spacing-gap-lg);
  
  /* Borders & Shadows */
  border: 1px solid var(--twb-border-primary);
  border-radius: var(--twb-radius-lg);
  box-shadow: var(--twb-shadow-md);
  
  /* Transitions */
  transition: all var(--twb-transition-base);
}
```

### In Tailwind (Arbitrary Values)

```tsx
<div className="
  bg-[var(--twb-color-bg-primary)]
  text-[var(--twb-color-text-primary)]
  p-[var(--wp-preset-spacing-50)]
  rounded-[var(--twb-radius-lg)]
  shadow-[var(--twb-shadow-md)]
">
  Content
</div>
```

### In Inline Styles (React)

```tsx
<div style={{
  backgroundColor: 'var(--twb-color-bg-primary)',
  color: 'var(--twb-color-text-primary)',
  padding: 'var(--wp-preset-spacing-50)',
  borderRadius: 'var(--twb-radius-lg)',
}}>
  Content
</div>
```

---

## Responsive Design Patterns

### Mobile-First Approach

```css
/* Mobile (default) */
.twb-grid {
  grid-template-columns: 1fr;
  gap: var(--wp-preset-spacing-40);
}

/* Tablet (768px+) */
@media (min-width: 768px) {
  .twb-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--wp-preset-spacing-60);
  }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .twb-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--twb-spacing-gap-lg);
  }
}
```

### Fluid Typography & Spacing

All typography and spacing use `clamp()` for automatic responsive scaling:

```css
/* Automatically scales from mobile to desktop */
--twb-text-h1: clamp(2.4rem, 5vw + 1rem, 4.5rem);
--twb-spacing-section: clamp(3rem, 6vw, 5rem);
```

No media queries needed for fluid scaling.

---

## Accessibility Considerations

### Focus States

All interactive elements have visible focus indicators:

```css
.twb-btn:focus-visible {
  outline: 2px solid var(--twb-color-focus-ring);
  outline-offset: 2px;
}

.twb-form-input:focus {
  border-color: var(--twb-color-focus-ring);
  box-shadow: 0 0 0 3px var(--twb-color-focus-bg);
}
```

### Color Contrast

All color combinations meet WCAG 2.1 AA standards:
- Text on paper: 13.5:1 (AAA)
- Links on paper: 7.2:1 (AAA)
- Buttons: Minimum 4.5:1

### Screen Reader Utilities

```css
.twb-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

**Usage:**
```html
<button class="twb-btn twb-btn--ghost">
  <span class="twb-sr-only">Close menu</span>
  <svg><!-- X icon --></svg>
</button>
```

---

## Migration from Old System

### Old (Deprecated)

```css
/* Inline Tailwind only */
<div className="bg-burgundy-600 text-cream p-6 rounded-lg">
```

### New (BEM + CSS Variables)

```css
/* BEM component class */
<div className="twb-card">
  <div className="twb-card__content">
    Content
  </div>
</div>

/* Or with CSS variables */
<div className="bg-[var(--twb-color-accent-primary)] text-white p-6 rounded-lg">
```

### Color Migration

| Old | New |
|-----|-----|
| `bg-burgundy-600` | `bg-[var(--twb-color-plum)]` or `.twb-btn--primary` |
| `bg-cream` | `bg-[var(--twb-color-paper)]` or `.twb-section--paper` |
| `text-charcoal` | `text-[var(--twb-color-ink)]` or default |

---

## Best Practices

### ✅ DO

- Use BEM classes for reusable components (`.twb-card`, `.twb-btn`)
- Use CSS variables for colors, spacing, shadows
- Use `--wp-preset-*` variables in WordPress context
- Use `--twb-*` variables in React components
- Create component variants with modifiers (`.twb-card--wine`)
- Add focus states to all interactive elements
- Test dark mode for all components

### ❌ DON'T

- Mix old color classes (`bg-burgundy-600`) with new system
- Use hardcoded colors (use variables)
- Create one-off custom classes (use BEM or utilities)
- Forget dark mode color overrides
- Skip accessibility focus indicators
- Use `!important` (restructure specificity instead)

---

## Testing Checklist

- [ ] Component works in light mode
- [ ] Component works in dark mode
- [ ] Focus states are visible
- [ ] Colors meet WCAG AA contrast
- [ ] Responsive on mobile (375px), tablet (768px), desktop (1440px)
- [ ] Typography scales fluidly
- [ ] Spacing is consistent with design tokens
- [ ] WordPress blocks align correctly (if applicable)

---

## Related Documentation

- `/guidelines/design-tokens/colors.md` - Color system
- `/guidelines/design-tokens/typography.md` - Typography system
- `/guidelines/design-tokens/spacing.md` - Spacing system
- `/guidelines/accessibility/wcag-compliance.md` - Accessibility standards
- `/guidelines/wordpress/blocks-reference.md` - WordPress integration

---

**Last Updated:** 2026-03-13  
**Next Review:** After component migration complete
