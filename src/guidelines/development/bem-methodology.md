# BEM Methodology Guidelines

**Category:** Development  
**Domain:** CSS Architecture  
**Version:** 1.0.0  
**Last Updated:** 2026-03-16  
**Status:** Active  
**Trigger:** `apply bem` (automated audit + fix)

---

## Overview

**BEM (Block Element Modifier)** is a CSS naming methodology that creates reusable, maintainable, and scalable component classes. Handcrafted Wines uses BEM with the `twb-` namespace (The Wire Brand) for all component styling.

**Why BEM:**
- ✅ **Reusable** - Components work anywhere
- ✅ **Maintainable** - Clear naming = easy updates
- ✅ **Scalable** - No naming conflicts as codebase grows
- ✅ **WordPress-ready** - Exports to theme.json easily
- ✅ **Retro aesthetic** - Organic, hand-drawn design system

---

## BEM Naming Convention

### **Block__Element--Modifier Pattern**

```css
.twb-{block} { }                    /* Block (component root) */
.twb-{block}__{element} { }         /* Element (child component) */
.twb-{block}--{modifier} { }        /* Modifier (variant) */
.twb-{block}__{element}--{modifier} { }  /* Element modifier */
```

---

## Core Concepts

### **1. Block (Component Root)**

**Definition:** A standalone, meaningful component

**Naming:** `twb-{blockname}`

**Examples:**
```css
.twb-hero { }       /* Hero section */
.twb-card { }       /* Card component */
.twb-button { }     /* Button component */
.twb-navbar { }     /* Navigation bar */
```

**Rules:**
- ✅ Use kebab-case (lowercase with hyphens)
- ✅ Always start with `twb-` namespace
- ✅ Describe what it IS, not what it looks like
- ❌ Never nest blocks (`.twb-card .twb-button` is wrong)

---

### **2. Element (Block Child)**

**Definition:** A child part of a block that has no standalone meaning

**Naming:** `twb-{block}__element}`

**Examples:**
```css
.twb-hero__title { }        /* Title inside hero */
.twb-hero__subtitle { }     /* Subtitle inside hero */
.twb-hero__actions { }      /* Button group inside hero */

.twb-card__image { }        /* Image inside card */
.twb-card__title { }        /* Title inside card */
.twb-card__price { }        /* Price inside card */
```

**Rules:**
- ✅ Use double underscore `__` separator
- ✅ Element name describes its purpose within the block
- ❌ Never create sub-elements (`.twb-card__header__title` is wrong)
- ❌ Elements don't exist outside their block

---

### **3. Modifier (Variant)**

**Definition:** A different state or version of a block or element

**Naming:** `twb-{block}--{modifier}` or `twb-{block}__{element}--{modifier}`

**Examples:**
```css
/* Block modifiers */
.twb-hero--tall { }         /* Tall hero variant */
.twb-hero--short { }        /* Short hero variant */
.twb-card--featured { }     /* Featured card variant */
.twb-button--primary { }    /* Primary button variant */
.twb-button--outline { }    /* Outline button variant */

/* Element modifiers */
.twb-hero__title--large { }     /* Large title variant */
.twb-card__image--rounded { }   /* Rounded image variant */
```

**Rules:**
- ✅ Use double hyphen `--` separator
- ✅ Modifier describes HOW it differs (size, color, state)
- ✅ Can apply to blocks OR elements
- ❌ Never use modifiers alone (always with block/element)

---

## Real-World Examples

### **Example 1: Hero Component**

#### **HTML/TSX:**
```tsx
<section className="twb-hero twb-hero--tall">
  <div className="twb-hero__content">
    <h1 className="twb-hero__title">
      Handcrafted Wines from Paarl
    </h1>
    <p className="twb-hero__subtitle">
      Four generations of family winemaking
    </p>
    <div className="twb-hero__actions">
      <Button variant="primary">Explore Wines</Button>
      <Button variant="outline">Book Tasting</Button>
    </div>
  </div>
  <div className="twb-hero__scroll-indicator">
    <ScrollDownArrow />
  </div>
</section>
```

#### **CSS (utilities.css):**
```css
/* Block: Hero */
.twb-hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: var(--twb-color-bg-primary);
}

/* Block Modifier: Tall variant */
.twb-hero--tall {
  min-height: calc(100dvh - 90px); /* Mobile header offset */
}

/* Block Modifier: Medium variant */
.twb-hero--medium {
  min-height: 60vh;
}

/* Element: Content container */
.twb-hero__content {
  position: relative;
  z-index: 20;
  max-width: 960px;
  padding: var(--twb-spacing-section) var(--twb-spacing-inner);
  text-align: center;
}

/* Element: Title */
.twb-hero__title {
  font-family: var(--twb-font-serif);
  font-size: var(--twb-text-h1);
  font-weight: var(--twb-font-weight-bold);
  line-height: var(--twb-leading-tight);
  color: var(--twb-color-text-primary);
  margin-bottom: var(--wp-preset-spacing-50);
}

/* Element: Subtitle */
.twb-hero__subtitle {
  font-family: var(--twb-font-sans);
  font-size: var(--twb-text-body-large);
  line-height: var(--twb-leading-relaxed);
  color: var(--twb-color-text-secondary);
  margin-bottom: var(--wp-preset-spacing-60);
}

/* Element: Actions (button group) */
.twb-hero__actions {
  display: flex;
  gap: var(--wp-preset-spacing-40);
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

/* Element: Scroll indicator */
.twb-hero__scroll-indicator {
  position: absolute;
  bottom: var(--wp-preset-spacing-60);
  left: 50%;
  transform: translateX(-50%);
  z-index: 30;
}
```

---

### **Example 2: Card Component**

#### **HTML/TSX:**
```tsx
<article className="twb-card twb-card--wine">
  <img 
    src={wine.image} 
    alt={wine.name}
    className="twb-card__image"
  />
  <div className="twb-card__content">
    <span className="twb-card__badge twb-card__badge--new">New Arrival</span>
    <h3 className="twb-card__title">{wine.name}</h3>
    <p className="twb-card__description">{wine.description}</p>
    <div className="twb-card__footer">
      <span className="twb-card__price">R{wine.price}</span>
      <Button className="twb-card__button" variant="primary">
        Add to Cart
      </Button>
    </div>
  </div>
</article>
```

#### **CSS (utilities.css):**
```css
/* Block: Card */
.twb-card {
  display: flex;
  flex-direction: column;
  background-color: var(--twb-color-bg-secondary);
  border-radius: var(--twb-radius-card);
  overflow: hidden;
  transition: box-shadow 0.3s ease;
}

.twb-card:hover {
  box-shadow: var(--twb-shadow-lg);
}

/* Block Modifier: Wine card variant */
.twb-card--wine {
  border-left: 4px solid var(--twb-color-plum);
}

/* Block Modifier: Featured card variant */
.twb-card--featured {
  border: 2px solid var(--twb-color-gold);
  box-shadow: var(--twb-shadow-xl);
}

/* Element: Image */
.twb-card__image {
  width: 100%;
  height: 240px;
  object-fit: cover;
}

/* Element: Content container */
.twb-card__content {
  padding: var(--twb-spacing-card);
  display: flex;
  flex-direction: column;
  gap: var(--wp-preset-spacing-30);
  flex: 1;
}

/* Element: Badge */
.twb-card__badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  font-size: var(--twb-text-caption);
  font-weight: var(--twb-font-weight-semibold);
  border-radius: var(--twb-radius-full);
  background-color: var(--twb-color-bg-tertiary);
  color: var(--twb-color-text-primary);
  width: fit-content;
}

/* Element Modifier: New badge */
.twb-card__badge--new {
  background-color: var(--twb-color-gold);
  color: var(--twb-color-ink);
}

/* Element: Title */
.twb-card__title {
  font-family: var(--twb-font-serif);
  font-size: var(--twb-text-h4);
  font-weight: var(--twb-font-weight-bold);
  color: var(--twb-color-text-primary);
  line-height: var(--twb-leading-tight);
}

/* Element: Description */
.twb-card__description {
  font-size: var(--twb-text-body);
  color: var(--twb-color-text-secondary);
  line-height: var(--twb-leading-normal);
  flex: 1;
}

/* Element: Footer */
.twb-card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--wp-preset-spacing-30);
  padding-top: var(--wp-preset-spacing-30);
  border-top: 1px solid var(--twb-color-border-primary);
}

/* Element: Price */
.twb-card__price {
  font-size: var(--twb-text-h5);
  font-weight: var(--twb-font-weight-bold);
  color: var(--twb-color-plum);
}
```

---

## BEM Best Practices

### **✅ DO:**

1. **Use CSS variables (never hardcoded values)**
   ```css
   /* ✅ GOOD */
   .twb-hero {
     background-color: var(--twb-color-bg-primary);
     padding: var(--twb-spacing-section);
   }
   
   /* ❌ BAD */
   .twb-hero {
     background-color: #f5efe4;
     padding: 3rem;
   }
   ```

2. **Keep blocks independent**
   ```css
   /* ✅ GOOD - Block works anywhere */
   .twb-card {
     background-color: var(--twb-color-bg-secondary);
   }
   
   /* ❌ BAD - Card depends on parent */
   .twb-section .twb-card {
     background-color: var(--twb-color-bg-secondary);
   }
   ```

3. **Use modifiers for variants**
   ```css
   /* ✅ GOOD - Modifier for size variant */
   .twb-button { }
   .twb-button--large { }
   .twb-button--small { }
   
   /* ❌ BAD - Separate classes */
   .twb-button { }
   .twb-large-button { }
   .twb-small-button { }
   ```

4. **Describe purpose, not appearance**
   ```css
   /* ✅ GOOD - Purpose-driven */
   .twb-hero__title { }
   .twb-card__price { }
   
   /* ❌ BAD - Appearance-driven */
   .twb-hero__big-text { }
   .twb-card__purple-text { }
   ```

---

### **❌ DON'T:**

1. **Never create grandchild elements**
   ```css
   /* ❌ BAD - Too deep nesting */
   .twb-card__header__title { }
   
   /* ✅ GOOD - Flat structure */
   .twb-card__title { }
   ```

2. **Never mix BEM with descendant selectors**
   ```css
   /* ❌ BAD - Breaks BEM independence */
   .twb-hero .twb-hero__title { }
   
   /* ✅ GOOD - Element class only */
   .twb-hero__title { }
   ```

3. **Never use camelCase or PascalCase**
   ```css
   /* ❌ BAD - Wrong casing */
   .twbHero { }
   .twb-heroTitle { }
   
   /* ✅ GOOD - kebab-case */
   .twb-hero { }
   .twb-hero__title { }
   ```

4. **Never skip the namespace**
   ```css
   /* ❌ BAD - No namespace */
   .hero { }
   .card { }
   
   /* ✅ GOOD - twb- namespace */
   .twb-hero { }
   .twb-card { }
   ```

---

## BEM + Tailwind Hybrid Approach

**Handcrafted Wines uses BEM for components + Tailwind for utilities.**

### **When to use BEM:**
- ✅ Core brand components (Hero, Card, Button, etc.)
- ✅ Components appearing 2+ times
- ✅ Complex components with many states
- ✅ Components needing light/dark mode variants

### **When to use Tailwind:**
- ✅ Unique layouts (one-off pages)
- ✅ Simple utility styling (spacing, display, flexbox)
- ✅ Responsive modifiers (`md:`, `lg:`)
- ✅ Rapid prototyping

### **Hybrid Example:**

```tsx
{/* ✅ GOOD - BEM block + Tailwind utilities */}
<section className="twb-hero twb-hero--tall">
  <div className="twb-hero__content flex flex-col gap-4 md:gap-6">
    <h1 className="twb-hero__title">Handcrafted Wines</h1>
    <p className="twb-hero__subtitle">From our family to yours</p>
  </div>
</section>

{/* BEM handles component structure, Tailwind handles layout utilities */}
```

---

## Retro Design Compliance

**All BEM classes must follow retro aesthetic:**

### **Design Principles:**

1. **Organic, hand-drawn aesthetic**
   - Slightly imperfect spacing (not rigid grids)
   - Organic border-radius (`0.5rem`, `0.75rem`)
   - Hand-drawn feel (subtle texture)

2. **Warm, earthy colors**
   - Paper, Ink, Vine, Clay, Plum, Gold
   - No bright neon, no pure black/white

3. **Serif + Sans pairings**
   - Headings: Playfair Display (serif)
   - Body: Inter (sans-serif)

4. **Fluid typography**
   - Use `clamp()` for responsive sizing
   - Example: `clamp(2.4rem, 5vw + 1rem, 4.5rem)`

### **Example BEM Class (Retro Compliant):**

```css
/**
 * Testimonial Component
 * 
 * Retro aesthetic: Organic spacing, warm colors, serif typography
 * Light/Dark mode: Automatically switches via CSS variables
 */
.twb-testimonial {
  padding: clamp(2rem, 4vw, 3rem);  /* Fluid spacing */
  background-color: var(--twb-color-bg-secondary);  /* Warm paper */
  border-radius: 0.75rem;  /* Organic curve */
  border-left: 4px solid var(--twb-color-vine);  /* Natural accent */
}

.twb-testimonial__quote {
  font-family: var(--twb-font-serif);  /* Playfair Display */
  font-size: clamp(1.125rem, 2vw, 1.25rem);  /* Fluid type */
  font-style: italic;
  color: var(--twb-color-text-primary);
  line-height: var(--twb-leading-relaxed);
}
```

---

## Light/Dark Mode Support

**All BEM classes MUST work in both light and dark modes.**

### **Implementation Strategy:**

1. **Use CSS variables (automatic theme switching)**
   ```css
   /* ✅ GOOD - Uses variables (auto light/dark) */
   .twb-card {
     background-color: var(--twb-color-bg-secondary);
     color: var(--twb-color-text-primary);
     border: 1px solid var(--twb-color-border-primary);
   }
   
   /* ❌ BAD - Hardcoded colors (light mode only) */
   .twb-card {
     background-color: #f5efe4;
     color: #1e1a17;
     border: 1px solid rgba(30, 26, 23, 0.15);
   }
   ```

2. **Test in both modes**
   - Always verify BEM classes look good in dark mode
   - Check WCAG contrast ratios (≥ 4.5:1)
   - Use browser DevTools to toggle `.dark` class

3. **Define colors in theme files**
   - **Light mode:** `/styles/themes-light.css`
   - **Dark mode:** `/styles/themes-dark.css`
   - **Variables:** Both files define same variables with different values

---

## WCAG Contrast Compliance

**All BEM classes must meet WCAG 2.2 AA standards:**

### **Contrast Requirements:**
- **Normal text (< 18px):** 4.5:1 minimum (AA), 7:1 preferred (AAA)
- **Large text (≥ 18px):** 3:1 minimum (AA), 4.5:1 preferred (AAA)
- **UI components:** 3:1 minimum

### **Common Violations:**

```css
/* ❌ FAIL - Gold on paper (2.1:1 - insufficient contrast) */
.twb-badge {
  color: var(--twb-color-gold);  /* #c8a96b */
  background-color: var(--twb-color-bg-primary);  /* #f5efe4 */
}

/* ✅ PASS - Plum on paper (8.2:1 - excellent contrast) */
.twb-badge {
  color: var(--twb-color-plum);  /* #5a2d3b */
  background-color: var(--twb-color-bg-primary);  /* #f5efe4 */
}
```

### **Testing Tools:**
- **WebAIM Contrast Checker:** https://webaim.org/resources/contrastchecker/
- **Browser DevTools:** Accessibility panel shows contrast ratios
- **Automated:** Run `apply bem` trigger (includes WCAG validation)

---

## File Organization

### **Where BEM Classes Live:**

**Primary file:** `/styles/utilities.css`

**Structure:**
```css
/* ============================================
   HERO COMPONENT (BEM)
   Usage: <section class="twb-hero twb-hero--tall">
   ============================================ */

.twb-hero { }
.twb-hero--tall { }
.twb-hero--medium { }
.twb-hero__content { }
.twb-hero__title { }
.twb-hero__subtitle { }
.twb-hero__actions { }

/* ============================================
   CARD COMPONENT (BEM)
   Usage: <article class="twb-card twb-card--wine">
   ============================================ */

.twb-card { }
.twb-card--wine { }
.twb-card--featured { }
.twb-card__image { }
.twb-card__content { }
.twb-card__title { }
.twb-card__price { }
```

**JSDoc Headers:**
- Each BEM block starts with JSDoc comment
- Includes usage example
- Lists all modifiers and elements

---

## Automated Audit & Fixes

**Trigger:** `apply bem`

**This trigger:**
1. Scans all `.tsx` files for BEM violations
2. Detects: missing BEM, inline styles, orphan classes, naming inconsistencies
3. Maps inline values to CSS variables
4. Applies fixes automatically
5. Validates WCAG contrast (light + dark mode)
6. Recommends `audit tokens` or `audit css` for design system gaps

**Example workflow:**
```
User: apply bem

AI:
1. Inventory existing BEM classes (12 blocks, 45 elements, 8 modifiers)
2. Scan 47 .tsx files
3. Found 23 violations (8 critical, 6 high, 9 medium)
4. Generate violation report
5. Ask: "Apply fixes automatically?"
6. User confirms
7. Fix all violations, update utilities.css
8. Report: 21/23 violations fixed, 2 token gaps detected
9. Recommend: Run `audit tokens` to add missing variables
```

---

## Migration Guide

### **Converting Tailwind to BEM:**

**Before (Pure Tailwind):**
```tsx
<section className="relative flex items-center justify-center min-h-[calc(100dvh-90px)] bg-[var(--twb-color-bg-primary)]">
  <div className="relative z-20 max-w-[960px] px-[var(--twb-spacing-inner)] py-[var(--twb-spacing-section)] text-center">
    <h1 className="font-serif text-[var(--twb-text-h1)] font-bold mb-8 text-[var(--twb-color-text-primary)]">
      Handcrafted Wines
    </h1>
  </div>
</section>
```

**After (BEM + Tailwind utilities):**
```tsx
<section className="twb-hero twb-hero--tall">
  <div className="twb-hero__content">
    <h1 className="twb-hero__title">
      Handcrafted Wines
    </h1>
  </div>
</section>
```

**CSS (utilities.css):**
```css
.twb-hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--twb-color-bg-primary);
}

.twb-hero--tall {
  min-height: calc(100dvh - 90px);
}

.twb-hero__content {
  position: relative;
  z-index: 20;
  max-width: 960px;
  padding: var(--twb-spacing-section) var(--twb-spacing-inner);
  text-align: center;
}

.twb-hero__title {
  font-family: var(--twb-font-serif);
  font-size: var(--twb-text-h1);
  font-weight: var(--twb-font-weight-bold);
  color: var(--twb-color-text-primary);
  margin-bottom: var(--wp-preset-spacing-60);
}
```

**Benefits:**
- ✅ 95% less markup classes
- ✅ Reusable (Hero works anywhere)
- ✅ Light/dark mode automatic
- ✅ WCAG compliant
- ✅ WordPress theme.json ready

---

## Common BEM Components

**Already implemented in `/styles/utilities.css`:**

1. `.twb-hero` - Hero sections (tall, medium, short variants)
2. `.twb-card` - Product/content cards (wine, featured variants)
3. `.twb-button` - Buttons (primary, outline, ghost variants)
4. `.twb-heading` - Typography headings (h1-h6)
5. `.twb-container` - Page containers (site, content, wide, full)
6. `.twb-section` - Page sections (primary, secondary, tertiary)

**To add new BEM components:**
1. Add to `/styles/utilities.css`
2. Follow JSDoc header pattern
3. Use 100% CSS variables
4. Test light + dark mode
5. Verify WCAG contrast
6. Run `apply bem` to validate

---

## Related Guidelines

- **CSS Architecture:** `/guidelines/development/css-architecture.md`
- **WordPress CSS Variables:** `/guidelines/development/wordpress-css-variables.md`
- **Design Tokens (all):** `/guidelines/design-tokens/`
- **Dark/Light Mode:** `/guidelines/design-tokens/dark-light-mode.md`
- **Prompt Trigger:** `/prompts/apply-bem.md`

---

## Changelog

### Version 1.0.0 (2026-03-16)
- Initial BEM methodology guideline
- Defined Block__Element--Modifier naming
- Documented real-world examples (Hero, Card)
- Established best practices and anti-patterns
- Integrated retro design compliance
- Added WCAG contrast requirements
- Created migration guide (Tailwind → BEM)
- Linked to `apply bem` automated trigger

---

**Questions?**  
Run `apply bem` to audit your components and get automated fixes!
