# Shadow Design Tokens

**Category:** Design Tokens  
**Domain:** Shadows  
**Version:** 1.0  
**Last Updated:** 2024-03-13  
**Status:** Active

---

## Overview

The Wire Brand shadow system creates atmospheric depth and layering that feels organic and natural, avoiding harsh digital shadows. Shadows should feel like natural light filtering through a cellar or vineyard.

**Key Characteristics:**
- Soft, diffused shadows (no harsh edges)
- Warm undertones (subtle brown/amber hints)
- Multiple layered shadows for realistic depth
- Subtle shadows for organic, handcrafted feel
- Elevation hierarchy for information architecture

---

## Token Definitions

### Base Shadow Tokens

| Token Name | CSS Value | Usage | Elevation |
|------------|-----------|-------|-----------|
| `twb-shadow-none` | `none` | Flat elements, no elevation | 0 |
| `twb-shadow-xs` | `0 1px 2px rgba(30, 26, 23, 0.05)` | Subtle separation (input borders, dividers) | 1 |
| `twb-shadow-sm` | `0 2px 4px rgba(30, 26, 23, 0.08), 0 1px 2px rgba(30, 26, 23, 0.04)` | Cards, product tiles, small elevated elements | 2 |
| `twb-shadow-md` | `0 4px 8px rgba(30, 26, 23, 0.10), 0 2px 4px rgba(30, 26, 23, 0.06)` | Dropdown menus, tooltips, modal content | 3 |
| `twb-shadow-lg` | `0 8px 16px rgba(30, 26, 23, 0.12), 0 4px 8px rgba(30, 26, 23, 0.08)` | Modals, drawers, navigation panels | 4 |
| `twb-shadow-xl` | `0 16px 32px rgba(30, 26, 23, 0.16), 0 8px 16px rgba(30, 26, 23, 0.10)` | Full-screen overlays, mega menus | 5 |
| `twb-shadow-2xl` | `0 24px 48px rgba(30, 26, 23, 0.20), 0 12px 24px rgba(30, 26, 23, 0.12)` | Hero images with depth, promotional overlays | 6 |

### Specialty Shadow Tokens

| Token Name | CSS Value | Usage |
|------------|-----------|-------|
| `twb-shadow-inner` | `inset 0 2px 4px rgba(30, 26, 23, 0.06)` | Pressed states, inset panels |
| `twb-shadow-glow-plum` | `0 0 16px rgba(90, 45, 59, 0.3)` | Focused interactive elements (plum accent) |
| `twb-shadow-glow-gold` | `0 0 24px rgba(200, 169, 107, 0.4)` | Premium/award highlights |
| `twb-shadow-paper` | `0 4px 12px rgba(30, 26, 23, 0.08), 0 2px 4px rgba(92, 107, 79, 0.04)` | Paper-like texture shadow (warm + green undertone) |
| `twb-shadow-card-hover` | `0 12px 24px rgba(30, 26, 23, 0.14), 0 6px 12px rgba(30, 26, 23, 0.10)` | Elevated card hover state |

---

## Implementation

### CSS Variables (globals.css)

```css
:root {
  /* Base Shadows */
  --twb-shadow-none: none;
  --twb-shadow-xs: 0 1px 2px rgba(30, 26, 23, 0.05);
  --twb-shadow-sm: 0 2px 4px rgba(30, 26, 23, 0.08), 0 1px 2px rgba(30, 26, 23, 0.04);
  --twb-shadow-md: 0 4px 8px rgba(30, 26, 23, 0.10), 0 2px 4px rgba(30, 26, 23, 0.06);
  --twb-shadow-lg: 0 8px 16px rgba(30, 26, 23, 0.12), 0 4px 8px rgba(30, 26, 23, 0.08);
  --twb-shadow-xl: 0 16px 32px rgba(30, 26, 23, 0.16), 0 8px 16px rgba(30, 26, 23, 0.10);
  --twb-shadow-2xl: 0 24px 48px rgba(30, 26, 23, 0.20), 0 12px 24px rgba(30, 26, 23, 0.12);
  
  /* Specialty Shadows */
  --twb-shadow-inner: inset 0 2px 4px rgba(30, 26, 23, 0.06);
  --twb-shadow-glow-plum: 0 0 16px rgba(90, 45, 59, 0.3);
  --twb-shadow-glow-gold: 0 0 24px rgba(200, 169, 107, 0.4);
  --twb-shadow-paper: 0 4px 12px rgba(30, 26, 23, 0.08), 0 2px 4px rgba(92, 107, 79, 0.04);
  --twb-shadow-card-hover: 0 12px 24px rgba(30, 26, 23, 0.14), 0 6px 12px rgba(30, 26, 23, 0.10);
}
```

### Tailwind Configuration (if extending)

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      boxShadow: {
        'twb-xs': '0 1px 2px rgba(30, 26, 23, 0.05)',
        'twb-sm': '0 2px 4px rgba(30, 26, 23, 0.08), 0 1px 2px rgba(30, 26, 23, 0.04)',
        'twb-md': '0 4px 8px rgba(30, 26, 23, 0.10), 0 2px 4px rgba(30, 26, 23, 0.06)',
        'twb-lg': '0 8px 16px rgba(30, 26, 23, 0.12), 0 4px 8px rgba(30, 26, 23, 0.08)',
        'twb-xl': '0 16px 32px rgba(30, 26, 23, 0.16), 0 8px 16px rgba(30, 26, 23, 0.10)',
        'twb-2xl': '0 24px 48px rgba(30, 26, 23, 0.20), 0 12px 24px rgba(30, 26, 23, 0.12)',
        'twb-inner': 'inset 0 2px 4px rgba(30, 26, 23, 0.06)',
        'twb-glow-plum': '0 0 16px rgba(90, 45, 59, 0.3)',
        'twb-glow-gold': '0 0 24px rgba(200, 169, 107, 0.4)',
        'twb-paper': '0 4px 12px rgba(30, 26, 23, 0.08), 0 2px 4px rgba(92, 107, 79, 0.04)',
        'twb-card-hover': '0 12px 24px rgba(30, 26, 23, 0.14), 0 6px 12px rgba(30, 26, 23, 0.10)',
      }
    }
  }
}
```

---

## Usage Guidelines

### Elevation Hierarchy

**Level 0 (No Shadow):** Flat elements integrated with background
- Inline text
- Flat icons
- Background textures

**Level 1-2 (Subtle):** Slight separation from background
- Input fields (`twb-shadow-xs`)
- Product cards at rest (`twb-shadow-sm`)
- Section dividers

**Level 3-4 (Medium):** Clear elevation and focus
- Dropdown menus (`twb-shadow-md`)
- Mobile navigation panels (`twb-shadow-lg`)
- Tooltips and popovers

**Level 5-6 (Strong):** Maximum elevation for critical UI
- Modals (`twb-shadow-xl`)
- Hero images with atmospheric depth (`twb-shadow-2xl`)
- Full-screen overlays

### Component-Specific Applications

#### Product Cards
```tsx
// At rest
className="shadow-twb-sm hover:shadow-twb-card-hover transition-shadow duration-300"

// Premium product variant
className="shadow-twb-md ring-1 ring-[var(--twb-color-gold)]/20"
```

#### Buttons
```tsx
// Primary button
className="shadow-twb-xs hover:shadow-twb-sm active:shadow-twb-inner"

// CTA with glow
className="shadow-twb-glow-plum hover:shadow-twb-lg"
```

#### Modals
```tsx
// Standard modal
className="shadow-twb-xl bg-[var(--twb-color-paper)] rounded-lg"

// Premium award modal
className="shadow-twb-2xl shadow-twb-glow-gold bg-[var(--twb-color-paper)]"
```

#### Navigation
```tsx
// Mega menu
className="shadow-twb-xl bg-[var(--twb-color-paper)] border-t-4 border-[var(--twb-color-plum)]"

// Mobile drawer
className="shadow-twb-lg"
```

---

## Animation & Transitions

### Shadow Transitions

**Standard Transition:**
```css
transition: box-shadow 0.3s ease;
```

**Smooth Elevation Change:**
```css
transition: box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1);
```

**Quick Interactive Feedback:**
```css
transition: box-shadow 0.15s ease-out;
```

### Interactive States

#### Hover States
```tsx
// Card hover
className="shadow-twb-sm hover:shadow-twb-card-hover transition-shadow duration-300"

// Button hover
className="shadow-twb-xs hover:shadow-twb-md transition-shadow duration-200"
```

#### Focus States
```tsx
// Focus with glow
className="focus:shadow-twb-glow-plum focus:ring-2 focus:ring-[var(--twb-color-plum)] focus:outline-none"
```

#### Active/Pressed States
```tsx
// Button press
className="active:shadow-twb-inner transform active:scale-[0.98]"
```

---

## Accessibility Considerations

### Screen Readers
- Shadows are purely decorative and convey no semantic meaning
- Always pair elevation changes with proper ARIA attributes for state changes

### High Contrast Mode
```css
@media (prefers-contrast: high) {
  :root {
    --twb-shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.3);
    --twb-shadow-md: 0 4px 8px rgba(0, 0, 0, 0.4);
    --twb-shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.5);
  }
}
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    transition: box-shadow 0s !important;
  }
}
```

---

## Migration Path

### From Legacy Shadows

| Legacy Shadow | New Token | Notes |
|---------------|-----------|-------|
| `shadow-sm` | `shadow-twb-sm` | Slightly softer |
| `shadow-md` | `shadow-twb-md` | Now layered |
| `shadow-lg` | `shadow-twb-lg` | Warmer undertones |
| Custom wine shadows | `shadow-twb-paper` | Organic shadow variant |

### Migration Strategy

1. **Audit existing shadow usage** across all components
2. **Map to new tokens** using the table above
3. **Test on actual backgrounds** (especially `twb-color-paper`)
4. **Validate accessibility** in high contrast mode
5. **Update component documentation** with new shadow tokens

---

## Examples

### Product Card Component
```tsx
<div className="bg-[var(--twb-color-paper)] rounded-lg shadow-twb-sm hover:shadow-twb-card-hover transition-shadow duration-300">
  <img src={product.image} alt={product.name} className="rounded-t-lg" />
  <div className="p-6">
    <h3 className="text-[var(--twb-color-ink)] font-serif text-xl mb-2">
      {product.name}
    </h3>
    <p className="text-[var(--twb-color-vine)] text-sm">
      {product.vintage}
    </p>
  </div>
</div>
```

### Modal with Premium Glow
```tsx
<div className="fixed inset-0 bg-black/50 flex items-center justify-center">
  <div className="bg-[var(--twb-color-paper)] rounded-lg shadow-twb-2xl shadow-twb-glow-gold max-w-2xl p-8">
    <h2 className="text-[var(--twb-color-ink)] font-serif text-3xl mb-4">
      Award Winner
    </h2>
    {/* Modal content */}
  </div>
</div>
```

---

## Related Guidelines

- [Color Design Tokens](/guidelines/design-tokens/colors.md) - Shadow color references
- [Borders](/guidelines/design-tokens/borders.md) - Border + shadow combinations
- [Animations](/guidelines/design-tokens/animations.md) - Shadow transition timing
- [Buttons](/guidelines/design-tokens/buttons.md) - Button shadow states
- [Cards (future)](/guidelines/components/cards.md) - Card shadow patterns

---

## Changelog

### Version 1.0 (2024-03-13)
- Initial shadow system created
- 7 base elevation levels defined
- 5 specialty shadows for organic feel
- Warm undertones aligned with brand palette
- Accessibility considerations documented

---

**Questions or Issues?**  
Contact the design system team or reference the main [Design Tokens Overview](/guidelines/design-tokens/).
