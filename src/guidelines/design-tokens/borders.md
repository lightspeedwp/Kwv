# Border Design Tokens

**Category:** Design Tokens  
**Domain:** Borders  
**Version:** 1.0  
**Last Updated:** 2024-03-13  
**Status:** Active

---

## Overview

The Wire Brand border system creates structure, hierarchy, and visual separation while maintaining an organic, handcrafted aesthetic. Borders should feel intentional but not rigid, using subtle color variations and thickness to convey meaning.

**Key Characteristics:**
- Subtle, organic color palette (vine, clay, plum tints)
- Varied thickness for hierarchy
- Decorative borders for premium content
- Accessible contrast for functional borders
- Hand-drawn aesthetic for featured elements

---

## Token Definitions

### Border Width Tokens

| Token Name | CSS Value | Usage |
|------------|-----------|-------|
| `twb-border-none` | `0` | No border |
| `twb-border-hairline` | `0.5px` | Ultra-subtle dividers (decorative only) |
| `twb-border-thin` | `1px` | Standard borders (cards, inputs, dividers) |
| `twb-border-base` | `2px` | Emphasized borders (focused inputs, cards) |
| `twb-border-thick` | `3px` | Strong borders (callouts, CTAs) |
| `twb-border-heavy` | `4px` | Premium borders (awards, featured content) |
| `twb-border-accent` | `6px` | Top accent bars (sections, modals) |

### Border Color Tokens

| Token Name | Hex Value | CSS Variable | Usage | Contrast |
|------------|-----------|--------------|-------|----------|
| `twb-border-primary` | `#1e1a17` (ink) | `--twb-border-primary` | Strong separation, frames | High contrast |
| `twb-border-secondary` | `#5c6b4f` (vine) | `--twb-border-secondary` | Organic dividers, subtle structure | Medium contrast |
| `twb-border-tertiary` | `#e8dfd1` | `--twb-border-tertiary` | Subtle separation, light dividers | Low contrast |
| `twb-border-accent-plum` | `#5a2d3b` (plum) | `--twb-border-accent-plum` | Primary CTA borders, premium | High contrast |
| `twb-border-accent-clay` | `#b86b4b` (clay) | `--twb-border-accent-clay` | Warm accents, highlights | Medium contrast |
| `twb-border-accent-gold` | `#c8a96b` (gold) | `--twb-border-accent-gold` | Awards, premium indicators | Low contrast (decorative) |
| `twb-border-focus` | `#5a2d3b` (plum) | `--twb-border-focus` | Focus rings, keyboard navigation | High contrast |
| `twb-border-error` | `#c44536` | `--twb-border-error` | Error states, validation | High contrast (red) |
| `twb-border-success` | `#5c6b4f` (vine) | `--twb-border-success` | Success states, confirmation | Medium contrast (green) |

### Border Style Tokens

| Token Name | CSS Value | Usage |
|------------|-----------|-------|
| `twb-border-solid` | `solid` | Standard borders |
| `twb-border-dashed` | `dashed` | Placeholder states, work-in-progress |
| `twb-border-dotted` | `dotted` | Subtle decorative separation |
| `twb-border-double` | `double` | Premium frames, wine labels |
| `twb-border-none` | `none` | Remove borders |

---

## Implementation

### CSS Variables (globals.css)

```css
:root {
  /* Border Width */
  --twb-border-none: 0;
  --twb-border-hairline: 0.5px;
  --twb-border-thin: 1px;
  --twb-border-base: 2px;
  --twb-border-thick: 3px;
  --twb-border-heavy: 4px;
  --twb-border-accent: 6px;
  
  /* Border Colors */
  --twb-border-primary: #1e1a17;
  --twb-border-secondary: #5c6b4f;
  --twb-border-tertiary: #e8dfd1;
  --twb-border-accent-plum: #5a2d3b;
  --twb-border-accent-clay: #b86b4b;
  --twb-border-accent-gold: #c8a96b;
  --twb-border-focus: #5a2d3b;
  --twb-border-error: #c44536;
  --twb-border-success: #5c6b4f;
  
  /* Border Styles */
  --twb-border-solid: solid;
  --twb-border-dashed: dashed;
  --twb-border-dotted: dotted;
  --twb-border-double: double;
  --twb-border-none: none;
}
```

### Tailwind Utility Classes

```css
/* Custom Border Utilities */
.border-twb-hairline { border-width: 0.5px; }
.border-twb-thin { border-width: 1px; }
.border-twb-base { border-width: 2px; }
.border-twb-thick { border-width: 3px; }
.border-twb-heavy { border-width: 4px; }
.border-twb-accent { border-width: 6px; }

.border-twb-primary { border-color: var(--twb-border-primary); }
.border-twb-secondary { border-color: var(--twb-border-secondary); }
.border-twb-tertiary { border-color: var(--twb-border-tertiary); }
.border-twb-accent-plum { border-color: var(--twb-border-accent-plum); }
.border-twb-accent-clay { border-color: var(--twb-border-accent-clay); }
.border-twb-accent-gold { border-color: var(--twb-border-accent-gold); }
```

---

## Usage Guidelines

### Border Hierarchy

#### Primary Borders (High Contrast)
**Purpose:** Clear separation, functional structure  
**Use cases:** Form inputs, card outlines, table borders

```tsx
className="border border-[var(--twb-border-primary)]"
```

#### Secondary Borders (Medium Contrast)
**Purpose:** Subtle organization, organic dividers  
**Use cases:** Section dividers, card groups, content separation

```tsx
className="border border-[var(--twb-border-secondary)]"
```

#### Tertiary Borders (Low Contrast)
**Purpose:** Minimal visual separation, decorative  
**Use cases:** Inner dividers, subtle structure, background patterns

```tsx
className="border border-[var(--twb-border-tertiary)]"
```

### Component-Specific Borders

#### Cards
```tsx
// Standard card
<div className="border border-[var(--twb-border-tertiary)] rounded-twb-md p-6">

// Emphasized card
<div className="border-2 border-[var(--twb-border-secondary)] rounded-twb-md p-6">

// Premium card
<div className="border-3 border-[var(--twb-border-accent-gold)] rounded-twb-organic-md p-8">
```

#### Buttons
```tsx
// Outlined primary
<button className="border-2 border-[var(--twb-border-accent-plum)] text-[var(--twb-color-plum)] rounded-twb-md px-6 py-3">

// Outlined secondary
<button className="border border-[var(--twb-border-secondary)] text-[var(--twb-color-vine)] rounded-twb-md px-6 py-3">

// Ghost (subtle)
<button className="border border-[var(--twb-border-tertiary)] hover:border-[var(--twb-border-secondary)] rounded-twb-md px-6 py-3">
```

#### Form Inputs
```tsx
// Default state
<input className="border border-[var(--twb-border-tertiary)] rounded-twb-sm px-4 py-2" />

// Focus state
<input className="border border-[var(--twb-border-tertiary)] focus:border-2 focus:border-[var(--twb-border-focus)] rounded-twb-sm px-4 py-2" />

// Error state
<input className="border-2 border-[var(--twb-border-error)] rounded-twb-sm px-4 py-2" />

// Success state
<input className="border-2 border-[var(--twb-border-success)] rounded-twb-sm px-4 py-2" />
```

#### Dividers
```tsx
// Standard horizontal divider
<hr className="border-t border-[var(--twb-border-tertiary)] my-8" />

// Emphasized divider
<hr className="border-t-2 border-[var(--twb-border-secondary)] my-12" />

// Decorative double-line divider
<div className="border-t-4 border-double border-[var(--twb-border-accent-gold)] my-16" />
```

---

## Decorative Border Patterns

### Top Accent Borders

Used to add brand color and hierarchy to sections:

```tsx
// Modal with plum accent
<div className="border-t-6 border-[var(--twb-border-accent-plum)] bg-[var(--twb-color-paper)] rounded-twb-lg shadow-twb-xl p-8">

// Section with clay accent
<section className="border-t-4 border-[var(--twb-border-accent-clay)] py-16">

// Award banner with gold accent
<div className="border-t-6 border-[var(--twb-border-accent-gold)] bg-white p-6">
```

### Wine Label Frame Borders

```tsx
<div 
  className="border-4 border-[var(--twb-border-primary)] p-8 relative"
  style={{ borderRadius: 'var(--twb-radius-wine-label)' }}
>
  {/* Inner border for double-frame effect */}
  <div className="border-2 border-[var(--twb-border-accent-gold)] p-6 border-double">
    <h3 className="font-serif text-center text-[var(--twb-color-ink)]">
      Reserve Collection
    </h3>
  </div>
</div>
```

### Stamp/Seal Borders

```tsx
<div 
  className="border-4 border-[var(--twb-border-primary)] bg-[var(--twb-color-clay)] text-white px-6 py-4 inline-block transform -rotate-3"
  style={{ borderRadius: 'var(--twb-radius-stamp)' }}
>
  <span className="font-bold uppercase text-sm tracking-wider">Award Winner 2025</span>
</div>
```

---

## Interactive State Borders

### Focus States (Accessibility Critical)

```tsx
// Keyboard focus ring
className="focus:outline-none focus:ring-2 focus:ring-[var(--twb-border-focus)] focus:ring-offset-2"

// Border-based focus (alternative)
className="border border-[var(--twb-border-tertiary)] focus:border-2 focus:border-[var(--twb-border-focus)]"

// Button focus
className="border-2 border-[var(--twb-border-accent-plum)] focus:ring-2 focus:ring-[var(--twb-border-focus)] focus:ring-offset-2"
```

### Hover States

```tsx
// Card hover (subtle border emphasis)
className="border border-[var(--twb-border-tertiary)] hover:border-[var(--twb-border-secondary)] transition-colors duration-200"

// Button hover (border color shift)
className="border-2 border-[var(--twb-border-secondary)] hover:border-[var(--twb-border-accent-plum)] transition-colors duration-200"
```

### Active/Pressed States

```tsx
// Button active
className="border-2 border-[var(--twb-border-accent-plum)] active:border-[var(--twb-border-primary)]"
```

### Error/Success States

```tsx
// Error input with icon
<div className="relative">
  <input className="border-2 border-[var(--twb-border-error)] rounded-twb-sm px-4 py-2 pr-10" />
  <AlertCircle className="absolute right-3 top-3 text-[var(--twb-border-error)]" />
</div>

// Success input
<input className="border-2 border-[var(--twb-border-success)] rounded-twb-sm px-4 py-2" />
```

---

## Border + Shadow Combinations

### Elevated Card with Border
```tsx
<div className="border border-[var(--twb-border-tertiary)] rounded-twb-md shadow-twb-sm hover:shadow-twb-md p-6">
```

### Premium Card (Border + Shadow + Glow)
```tsx
<div className="border-2 border-[var(--twb-border-accent-gold)] rounded-twb-organic-md shadow-twb-lg shadow-twb-glow-gold p-8">
```

### Modal with Accent Border
```tsx
<div className="border-t-6 border-[var(--twb-border-accent-plum)] bg-[var(--twb-color-paper)] rounded-twb-lg shadow-twb-xl p-8">
```

---

## Responsive Border Adjustments

### Mobile-First Border Strategy

```tsx
// Thinner borders on mobile, thicker on desktop
className="border md:border-2 border-[var(--twb-border-secondary)]"

// Remove decorative borders on mobile (save space)
className="border-0 md:border-t-4 md:border-[var(--twb-border-accent-plum)]"
```

---

## Accessibility Considerations

### Contrast Requirements

**Functional borders** (inputs, buttons, interactive elements):
- Must meet WCAG 2.1 AA contrast ratio: **3:1 minimum** against adjacent colors
- Use `twb-border-primary`, `twb-border-secondary`, `twb-border-focus`

**Decorative borders** (dividers, accents):
- No contrast requirement (non-essential visual elements)
- Can use `twb-border-tertiary`, `twb-border-accent-gold`

### Focus Indicators

**Border-based focus rings:**
```tsx
className="focus:outline-none focus:border-2 focus:border-[var(--twb-border-focus)]"
```

**Ring-based focus (preferred):**
```tsx
className="focus:outline-none focus:ring-2 focus:ring-[var(--twb-border-focus)] focus:ring-offset-2"
```

### High Contrast Mode

```css
@media (prefers-contrast: high) {
  :root {
    --twb-border-tertiary: #888888; /* Increase contrast */
    --twb-border-secondary: #333333;
    --twb-border-primary: #000000;
  }
}
```

---

## Migration Path

### From Legacy Borders

| Legacy Border | New Token | Notes |
|---------------|-----------|-------|
| `border` | `border border-twb-tertiary` | Subtle default |
| `border-gray-300` | `border-twb-tertiary` | Aligned with palette |
| `border-gray-600` | `border-twb-secondary` | Organic green |
| `border-2` | `border-twb-base` | Semantic naming |
| Custom wine borders | `border-twb-accent-plum` | Brand color |

---

## Examples Gallery

### Product Card with Border
```tsx
<div className="border border-[var(--twb-border-tertiary)] rounded-twb-md hover:border-[var(--twb-border-secondary)] hover:shadow-twb-md transition-all duration-200 p-6">
  <img src={product.image} alt={product.name} className="rounded-twb-sm mb-4" />
  <h3 className="font-serif text-[var(--twb-color-ink)] text-xl mb-2">{product.name}</h3>
  <p className="text-[var(--twb-color-vine)] text-sm">{product.vintage}</p>
</div>
```

### Premium Wine Label Frame
```tsx
<div 
  className="border-4 border-[var(--twb-border-primary)] bg-[var(--twb-color-paper)] p-8"
  style={{ borderRadius: 'var(--twb-radius-wine-label)' }}
>
  <div className="border-2 border-double border-[var(--twb-border-accent-gold)] p-6 text-center">
    <h2 className="font-serif text-3xl text-[var(--twb-color-ink)] mb-2">Reserve Cabernet</h2>
    <p className="text-[var(--twb-color-vine)] uppercase text-sm tracking-widest">Est. 1918</p>
  </div>
</div>
```

### Form with Border States
```tsx
<form className="space-y-4">
  {/* Default */}
  <input 
    type="text"
    className="w-full border border-[var(--twb-border-tertiary)] rounded-twb-sm px-4 py-2 focus:border-2 focus:border-[var(--twb-border-focus)] focus:outline-none"
    placeholder="Name"
  />
  
  {/* Error */}
  <input 
    type="email"
    className="w-full border-2 border-[var(--twb-border-error)] rounded-twb-sm px-4 py-2"
    placeholder="Email (invalid)"
  />
  
  {/* Success */}
  <input 
    type="tel"
    className="w-full border-2 border-[var(--twb-border-success)] rounded-twb-sm px-4 py-2"
    placeholder="Phone (valid)"
  />
</form>
```

---

## Related Guidelines

- [Radii](/guidelines/design-tokens/radii.md) - Border radius pairings
- [Shadows](/guidelines/design-tokens/shadows.md) - Border + shadow combinations
- [Colors](/guidelines/design-tokens/colors.md) - Border color palette
- [Forms](/guidelines/design-tokens/forms.md) - Form border states
- [Buttons](/guidelines/design-tokens/buttons.md) - Button border styles

---

## Changelog

### Version 1.0 (2024-03-13)
- Initial border system created
- 7 border width tokens defined
- 9 border color tokens (semantic + accent)
- 5 border style variants
- Interactive state borders documented
- Decorative pattern examples added
- Accessibility guidelines included

---

**Questions or Issues?**  
Contact the design system team or reference the main [Design Tokens Overview](/guidelines/design-tokens/).
