# Border Radius Design Tokens

**Category:** Design Tokens  
**Domain:** Border Radius  
**Version:** 1.0  
**Last Updated:** 2024-03-13  
**Status:** Active

---

## Overview

The Wire Brand border radius system creates organic, handcrafted shapes that avoid perfect geometric precision. Radii should feel slightly irregular and natural, reflecting the artisanal nature of winemaking.

**Key Characteristics:**
- Soft, organic curves (no sharp corners except intentional)
- Subtle asymmetry for handcrafted feel
- Contextual application (wine bottles vs. cards vs. buttons)
- Variable radii for visual interest
- Accessible focus ring compatibility

---

## Token Definitions

### Base Radius Tokens

| Token Name | CSS Value | Usage | Visual Effect |
|------------|-----------|-------|---------------|
| `twb-radius-none` | `0` | Sharp corners (frames, stamps, labels) | Geometric, intentional |
| `twb-radius-xs` | `2px` | Subtle softening (badges, tags) | Barely noticeable |
| `twb-radius-sm` | `4px` | Input fields, small buttons | Gentle softness |
| `twb-radius-md` | `8px` | Standard cards, product tiles | Organic baseline |
| `twb-radius-lg` | `12px` | Large cards, modals | Welcoming roundness |
| `twb-radius-xl` | `16px` | Hero images, feature sections | Soft, inviting |
| `twb-radius-2xl` | `24px` | Rounded containers, large CTAs | Pronounced curves |
| `twb-radius-3xl` | `32px` | Large decorative elements | Strong organic shape |
| `twb-radius-full` | `9999px` | Pills, circular avatars, badges | Perfect circles/pills |

### Organic Radius Tokens (Asymmetric)

These tokens create intentionally irregular shapes for handcrafted aesthetics.

| Token Name | CSS Value | Usage |
|------------|-----------|-------|
| `twb-radius-organic-sm` | `6px 8px 7px 9px` | Small cards with character |
| `twb-radius-organic-md` | `10px 14px 12px 16px` | Product cards, wine labels |
| `twb-radius-organic-lg` | `16px 22px 18px 24px` | Large feature cards |
| `twb-radius-wine-label` | `4px 12px 8px 10px` | Wine label aesthetic |
| `twb-radius-stamp` | `0 8px 0 8px` | Stamp/seal effect (alternating corners) |

### Contextual Radius Tokens

| Token Name | Reference | CSS Variable | Usage |
|------------|-----------|--------------|-------|
| `twb-radius-button-primary` | `8px` | `--twb-radius-button-primary` | Primary CTA buttons |
| `twb-radius-button-secondary` | `6px` | `--twb-radius-button-secondary` | Secondary/text buttons |
| `twb-radius-card` | `12px` | `--twb-radius-card` | Standard card components |
| `twb-radius-card-organic` | `10px 14px 12px 16px` | `--twb-radius-card-organic` | Premium/featured cards |
| `twb-radius-input` | `4px` | `--twb-radius-input` | Form inputs |
| `twb-radius-modal` | `16px` | `--twb-radius-modal` | Modal dialogs |
| `twb-radius-image` | `8px` | `--twb-radius-image` | Content images |
| `twb-radius-badge` | `9999px` | `--twb-radius-badge` | Badges, pills, tags |

---

## Implementation

### CSS Variables (globals.css)

```css
:root {
  /* Base Radius */
  --twb-radius-none: 0;
  --twb-radius-xs: 2px;
  --twb-radius-sm: 4px;
  --twb-radius-md: 8px;
  --twb-radius-lg: 12px;
  --twb-radius-xl: 16px;
  --twb-radius-2xl: 24px;
  --twb-radius-3xl: 32px;
  --twb-radius-full: 9999px;
  
  /* Organic Radius (Asymmetric) */
  --twb-radius-organic-sm: 6px 8px 7px 9px;
  --twb-radius-organic-md: 10px 14px 12px 16px;
  --twb-radius-organic-lg: 16px 22px 18px 24px;
  --twb-radius-wine-label: 4px 12px 8px 10px;
  --twb-radius-stamp: 0 8px 0 8px;
  
  /* Contextual Radius */
  --twb-radius-button-primary: 8px;
  --twb-radius-button-secondary: 6px;
  --twb-radius-card: 12px;
  --twb-radius-card-organic: 10px 14px 12px 16px;
  --twb-radius-input: 4px;
  --twb-radius-modal: 16px;
  --twb-radius-image: 8px;
  --twb-radius-badge: 9999px;
}
```

### Tailwind Configuration (if extending)

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      borderRadius: {
        'twb-xs': '2px',
        'twb-sm': '4px',
        'twb-md': '8px',
        'twb-lg': '12px',
        'twb-xl': '16px',
        'twb-2xl': '24px',
        'twb-3xl': '32px',
        'twb-organic-sm': '6px 8px 7px 9px',
        'twb-organic-md': '10px 14px 12px 16px',
        'twb-organic-lg': '16px 22px 18px 24px',
        'twb-wine-label': '4px 12px 8px 10px',
        'twb-stamp': '0 8px 0 8px',
      }
    }
  }
}
```

---

## Usage Guidelines

### When to Use Each Radius

#### Sharp Corners (`twb-radius-none`)
- Wine label frames
- Stamp graphics
- Vintage badges
- Geometric design elements
- Intentional contrast with organic shapes

#### Subtle Rounding (`twb-radius-xs` to `twb-radius-sm`)
- Form inputs
- Small badges
- Inline tags
- Subtle UI refinements

#### Standard Rounding (`twb-radius-md` to `twb-radius-lg`)
- Product cards
- Content cards
- Buttons
- Modals
- Navigation elements

#### Strong Rounding (`twb-radius-xl` to `twb-radius-3xl`)
- Hero images
- Large feature sections
- Decorative containers
- Promotional banners

#### Organic Asymmetric Radii
- Premium product cards
- Featured wine bottles
- Hand-drawn element containers
- Storytelling sections
- Highlight/callout boxes

### Component-Specific Radius Rules

#### Buttons
```tsx
// Primary CTA
className="rounded-[var(--twb-radius-button-primary)]" // 8px

// Secondary
className="rounded-[var(--twb-radius-button-secondary)]" // 6px

// Pill-style (newsletter signup)
className="rounded-full" // 9999px
```

#### Cards
```tsx
// Standard product card
className="rounded-[var(--twb-radius-card)]" // 12px

// Premium/featured wine card
style={{ borderRadius: 'var(--twb-radius-card-organic)' }} // Organic asymmetric

// News/blog card
className="rounded-twb-lg" // 12px
```

#### Images
```tsx
// Product images
className="rounded-[var(--twb-radius-image)]" // 8px

// Hero images
className="rounded-twb-xl" // 16px

// Avatar/circular
className="rounded-full"
```

#### Form Inputs
```tsx
// Text inputs
className="rounded-[var(--twb-radius-input)]" // 4px

// Select dropdowns
className="rounded-[var(--twb-radius-input)]" // 4px

// Checkboxes (custom)
className="rounded-twb-xs" // 2px
```

---

## Organic Radius System

### Philosophy

The asymmetric radius system creates subtle imperfections that:
- Evoke handcrafted authenticity
- Avoid digital perfection
- Create visual interest and character
- Reflect winemaking's artisanal nature

### Application Rules

**Use organic radii for:**
- Featured products
- Premium content
- Storytelling sections
- Brand highlight areas
- Main hero elements

**Avoid organic radii for:**
- Form inputs (confusing for users)
- Navigation elements (needs clarity)
- Data tables (requires precision)
- Utility components (buttons, badges)

### Examples

#### Premium Product Card
```tsx
<div 
  className="bg-[var(--twb-color-paper)] shadow-twb-md p-6"
  style={{ borderRadius: 'var(--twb-radius-card-organic)' }}
>
  <img 
    src={wine.image} 
    alt={wine.name}
    className="rounded-[var(--twb-radius-image)] mb-4"
  />
  <h3 className="font-serif text-[var(--twb-color-ink)]">{wine.name}</h3>
</div>
```

#### Wine Label Frame
```tsx
<div 
  className="bg-[var(--twb-color-paper)] border-2 border-[var(--twb-color-ink)] p-8"
  style={{ borderRadius: 'var(--twb-radius-wine-label)' }}
>
  {/* Wine label content */}
</div>
```

#### Stamp/Seal Graphic
```tsx
<div 
  className="bg-[var(--twb-color-clay)] text-[var(--twb-color-paper)] px-4 py-2 font-bold uppercase text-xs"
  style={{ borderRadius: 'var(--twb-radius-stamp)' }}
>
  Award Winner
</div>
```

---

## Radius + Border Combinations

### Border + Radius Harmony

When combining borders and radii, ensure visual harmony:

```tsx
// Thin border + subtle radius
className="border border-[var(--twb-color-vine)]/20 rounded-twb-md"

// Thick border + organic radius
style={{ 
  border: '3px solid var(--twb-color-plum)',
  borderRadius: 'var(--twb-radius-organic-md)'
}}

// No border + strong radius (image cards)
className="rounded-twb-xl overflow-hidden"
```

### Focus Ring Compatibility

All radius tokens are designed to work with focus rings:

```tsx
// Standard focus ring
className="rounded-twb-md focus:ring-2 focus:ring-[var(--twb-color-plum)] focus:ring-offset-2"

// Organic radius with focus
style={{ borderRadius: 'var(--twb-radius-organic-md)' }}
className="focus:ring-2 focus:ring-[var(--twb-color-plum)] focus:ring-offset-2"
```

---

## Responsive Radius Adjustments

### Mobile Considerations

On smaller screens, reduce large radii for maximum content area:

```tsx
// Desktop: large radius, Mobile: medium radius
className="rounded-twb-lg md:rounded-twb-xl lg:rounded-twb-2xl"

// Cards
className="rounded-twb-md md:rounded-twb-lg"
```

### Touch Target Radii

Maintain clear tap targets on mobile:

```tsx
// Mobile buttons (larger touch area)
className="rounded-twb-md px-6 py-3 min-h-[44px]"
```

---

## Accessibility Considerations

### Focus Indicators

Border radius must not interfere with focus indicators:

```tsx
// Ensure focus ring follows shape
className="rounded-twb-md focus:outline-none focus:ring-2 focus:ring-[var(--twb-color-plum)]"

// For organic shapes, use offset ring
style={{ borderRadius: 'var(--twb-radius-organic-md)' }}
className="focus:ring-2 focus:ring-offset-2 focus:ring-[var(--twb-color-plum)]"
```

### High Contrast Mode

In high contrast mode, maintain radius but ensure borders are visible:

```css
@media (prefers-contrast: high) {
  .card {
    border: 2px solid currentColor;
    border-radius: var(--twb-radius-card);
  }
}
```

---

## Migration Path

### From Legacy Radius

| Legacy Class | New Token | Notes |
|--------------|-----------|-------|
| `rounded` | `rounded-twb-sm` | 4px |
| `rounded-md` | `rounded-twb-md` | 8px |
| `rounded-lg` | `rounded-twb-lg` | 12px |
| `rounded-xl` | `rounded-twb-xl` | 16px |
| Custom organic | `twb-radius-card-organic` | Asymmetric variant |

---

## Examples Gallery

### Button Radius Variants
```tsx
// Primary CTA
<button className="bg-[var(--twb-color-plum)] text-white px-6 py-3 rounded-[var(--twb-radius-button-primary)]">
  Shop Wines
</button>

// Secondary
<button className="border border-[var(--twb-color-vine)] text-[var(--twb-color-vine)] px-6 py-3 rounded-[var(--twb-radius-button-secondary)]">
  Learn More
</button>

// Pill
<button className="bg-[var(--twb-color-clay)] text-white px-8 py-2 rounded-full">
  Join Wine Club
</button>
```

### Card Radius Variants
```tsx
// Standard card
<div className="bg-white rounded-[var(--twb-radius-card)] shadow-twb-sm p-6">
  {/* Content */}
</div>

// Organic premium card
<div 
  className="bg-[var(--twb-color-paper)] shadow-twb-md p-8"
  style={{ borderRadius: 'var(--twb-radius-card-organic)' }}
>
  {/* Premium content */}
</div>
```

---

## Related Guidelines

- [Shadows](/guidelines/design-tokens/shadows.md) - Shadow + radius combinations
- [Borders](/guidelines/design-tokens/borders.md) - Border thickness + radius pairings
- [Buttons](/guidelines/design-tokens/buttons.md) - Button radius standards
- [Forms](/guidelines/design-tokens/forms.md) - Input field radius rules

---

## Changelog

### Version 1.0 (2024-03-13)
- Initial border radius system created
- 9 base radius levels defined
- 5 organic asymmetric radii for handcrafted aesthetic
- 8 contextual radius tokens for components
- Accessibility and responsive guidelines documented

---

**Questions or Issues?**  
Contact the design system team or reference the main [Design Tokens Overview](/guidelines/design-tokens/).
