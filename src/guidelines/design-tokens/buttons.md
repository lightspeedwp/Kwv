# Button Design Tokens

**Category:** Design Tokens  
**Domain:** Buttons  
**Version:** 1.0  
**Last Updated:** 2024-03-13  
**Status:** Active

---

## Overview

The Wire Brand button system creates clear, accessible, and brand-aligned interactive elements. Buttons should feel tactile and organic, reflecting handcrafted winemaking while maintaining usability.

**Key Characteristics:**
- Clear visual hierarchy (primary, secondary, tertiary)
- Accessible contrast ratios (WCAG 2.1 AA minimum)
- Tactile interactive states (hover, focus, active)
- Minimum 44×44px touch targets (mobile)
- Organic shapes with subtle asymmetry for premium variants

---

## Button Variants

### Primary Button (CTA)

**Purpose:** Main call-to-action, highest visual priority  
**Color:** Plum background, white text

**States:**
| State | Background | Text | Border | Shadow |
|-------|------------|------|--------|--------|
| Default | `twb-color-plum` | White | None | `twb-shadow-xs` |
| Hover | Darken 10% | White | None | `twb-shadow-md` |
| Focus | `twb-color-plum` | White | 2px plum ring | `twb-shadow-glow-plum` |
| Active/Pressed | Darken 20% | White | None | `twb-shadow-inner` |
| Disabled | `twb-color-plum` at 40% opacity | White at 60% opacity | None | None |

**Implementation:**
```tsx
<button className="bg-[var(--twb-color-plum)] text-white px-6 py-3 rounded-[var(--twb-radius-button-primary)] shadow-twb-xs hover:shadow-twb-md hover:bg-[#4a2530] active:shadow-twb-inner active:bg-[#3a1d26] focus:outline-none focus:ring-2 focus:ring-[var(--twb-color-plum)] focus:ring-offset-2 transition-all duration-twb-fast disabled:opacity-40 disabled:cursor-not-allowed">
  Shop Wines
</button>
```

### Secondary Button (Outlined)

**Purpose:** Secondary actions, less visual weight than primary  
**Color:** Vine border and text, transparent background

**States:**
| State | Background | Text | Border | Shadow |
|-------|------------|------|--------|--------|
| Default | Transparent | `twb-color-vine` | 2px `twb-color-vine` | None |
| Hover | `twb-color-vine` at 5% | `twb-color-vine` | 2px `twb-color-vine` | `twb-shadow-xs` |
| Focus | Transparent | `twb-color-vine` | 2px `twb-color-vine` ring | None |
| Active | `twb-color-vine` at 10% | `twb-color-vine` | 2px `twb-color-vine` | `twb-shadow-inner` |
| Disabled | Transparent | `twb-color-vine` at 40% | 2px at 40% opacity | None |

**Implementation:**
```tsx
<button className="border-2 border-[var(--twb-color-vine)] text-[var(--twb-color-vine)] px-6 py-3 rounded-[var(--twb-radius-button-secondary)] hover:bg-[var(--twb-color-vine)]/5 hover:shadow-twb-xs active:bg-[var(--twb-color-vine)]/10 active:shadow-twb-inner focus:outline-none focus:ring-2 focus:ring-[var(--twb-color-vine)] focus:ring-offset-2 transition-all duration-twb-fast disabled:opacity-40 disabled:cursor-not-allowed">
  Learn More
</button>
```

### Tertiary Button (Ghost/Text)

**Purpose:** Low-priority actions, minimal visual weight  
**Color:** Ink text, no border, subtle background on hover

**States:**
| State | Background | Text | Border | Shadow |
|-------|------------|------|--------|--------|
| Default | Transparent | `twb-color-ink` | None | None |
| Hover | `twb-color-ink` at 5% | `twb-color-ink` | None | None |
| Focus | Transparent | `twb-color-ink` | None (ring only) | None |
| Active | `twb-color-ink` at 10% | `twb-color-ink` | None | None |
| Disabled | Transparent | `twb-color-ink` at 40% | None | None |

**Implementation:**
```tsx
<button className="text-[var(--twb-color-ink)] px-4 py-2 rounded-[var(--twb-radius-button-secondary)] hover:bg-[var(--twb-color-ink)]/5 active:bg-[var(--twb-color-ink)]/10 focus:outline-none focus:ring-2 focus:ring-[var(--twb-color-ink)] focus:ring-offset-2 transition-all duration-twb-fast disabled:opacity-40 disabled:cursor-not-allowed">
  Skip
</button>
```

### Premium Button (Gold Accent)

**Purpose:** Special promotions, wine club, premium features  
**Color:** Gold background, dark text

**States:**
| State | Background | Text | Border | Shadow |
|-------|------------|------|--------|--------|
| Default | `twb-color-gold` | `twb-color-ink` | None | `twb-shadow-sm` |
| Hover | Darken 10% | `twb-color-ink` | None | `twb-shadow-glow-gold` |
| Focus | `twb-color-gold` | `twb-color-ink` | 2px gold ring | `twb-shadow-glow-gold` |
| Active | Darken 20% | `twb-color-ink` | None | `twb-shadow-inner` |

**Implementation:**
```tsx
<button className="bg-[var(--twb-color-gold)] text-[var(--twb-color-ink)] px-8 py-3 rounded-[var(--twb-radius-button-primary)] shadow-twb-sm hover:shadow-twb-glow-gold hover:bg-[#b89951] active:shadow-twb-inner active:bg-[#a88941] focus:outline-none focus:ring-2 focus:ring-[var(--twb-color-gold)] focus:ring-offset-2 transition-all duration-twb-moderate font-semibold">
  Join Wine Club
</button>
```

### Danger/Destructive Button

**Purpose:** Delete, cancel, dangerous actions  
**Color:** Red background, white text

**States:**
| State | Background | Text | Border | Shadow |
|-------|------------|------|--------|--------|
| Default | `#c44536` (error red) | White | None | `twb-shadow-xs` |
| Hover | Darken 10% | White | None | `twb-shadow-md` |
| Focus | `#c44536` | White | 2px red ring | None |
| Active | Darken 20% | White | None | `twb-shadow-inner` |

**Implementation:**
```tsx
<button className="bg-[var(--twb-border-error)] text-white px-6 py-3 rounded-[var(--twb-radius-button-primary)] shadow-twb-xs hover:shadow-twb-md hover:bg-[#b33d2f] active:shadow-twb-inner active:bg-[#9d3426] focus:outline-none focus:ring-2 focus:ring-[var(--twb-border-error)] focus:ring-offset-2 transition-all duration-twb-fast">
  Delete Item
</button>
```

---

## Button Sizes

### Size Specifications

| Size | Height | Padding (X) | Padding (Y) | Font Size | Min Touch Target |
|------|--------|-------------|-------------|-----------|------------------|
| Small | 32px | 12px | 6px | 14px | 44×44px (mobile) |
| Medium (Default) | 44px | 24px | 12px | 16px | 44×44px ✓ |
| Large | 56px | 32px | 16px | 18px | 56×56px ✓ |

**Mobile Touch Target:** All buttons must meet **44×44px minimum** on mobile devices (WCAG 2.5.5).

**Implementation:**
```tsx
// Small
<button className="px-3 py-1.5 text-sm min-h-[44px] md:min-h-[32px]">Small</button>

// Medium (default)
<button className="px-6 py-3 text-base min-h-[44px]">Medium</button>

// Large
<button className="px-8 py-4 text-lg min-h-[56px]">Large</button>
```

---

## Button States

### Hover State
- **Visual change:** Darker background + shadow elevation
- **Timing:** `150ms` transition
- **Cursor:** `pointer`

```tsx
className="hover:bg-[darker-shade] hover:shadow-twb-md transition-all duration-twb-fast cursor-pointer"
```

### Focus State (Keyboard Navigation)
- **Visual change:** 2px ring, offset 2px, plum/vine color
- **Timing:** Instant (no transition)
- **Required for accessibility**

```tsx
className="focus:outline-none focus:ring-2 focus:ring-[var(--twb-color-plum)] focus:ring-offset-2"
```

### Active/Pressed State
- **Visual change:** Inner shadow, scale down slightly
- **Timing:** `100ms` transition
- **Feel:** Tactile button press

```tsx
className="active:shadow-twb-inner active:scale-[0.98] transition-transform duration-100"
```

### Disabled State
- **Visual change:** 40% opacity, no pointer cursor
- **Behavior:** `pointer-events: none` or disabled attribute
- **Accessibility:** `aria-disabled="true"`

```tsx
className="disabled:opacity-40 disabled:cursor-not-allowed"
aria-disabled={isDisabled}
disabled={isDisabled}
```

### Loading State
- **Visual change:** Spinner icon, disabled interaction
- **Implementation:** Show spinner, disable button

```tsx
<button disabled={isLoading} className="relative">
  {isLoading && (
    <span className="absolute inset-0 flex items-center justify-center">
      <Loader2 className="animate-spin h-5 w-5" />
    </span>
  )}
  <span className={isLoading ? 'opacity-0' : ''}>Submit</span>
</button>
```

---

## Icon Buttons

### Icon + Text
```tsx
<button className="flex items-center gap-2 bg-[var(--twb-color-plum)] text-white px-6 py-3 rounded-[var(--twb-radius-button-primary)]">
  <ShoppingCart className="h-5 w-5" />
  <span>Add to Cart</span>
</button>
```

### Icon Only (Square)
**Accessibility:** Must have `aria-label` or `aria-labelledby`

```tsx
<button 
  className="p-3 rounded-[var(--twb-radius-button-secondary)] border border-[var(--twb-border-secondary)] hover:bg-[var(--twb-color-vine)]/5 min-w-[44px] min-h-[44px] flex items-center justify-center"
  aria-label="Search"
>
  <Search className="h-5 w-5 text-[var(--twb-color-vine)]" />
</button>
```

### Icon Only (Circular)
```tsx
<button 
  className="p-3 rounded-full bg-[var(--twb-color-plum)] text-white hover:shadow-twb-glow-plum w-12 h-12 flex items-center justify-center"
  aria-label="Favorite"
>
  <Heart className="h-5 w-5" />
</button>
```

---

## Button Groups

### Horizontal Group
```tsx
<div className="flex gap-4">
  <button className="btn-primary">Save</button>
  <button className="btn-secondary">Cancel</button>
</div>
```

### Segmented Control (Attached Buttons)
```tsx
<div className="inline-flex rounded-[var(--twb-radius-button-primary)] border border-[var(--twb-border-secondary)] overflow-hidden">
  <button className="px-4 py-2 bg-[var(--twb-color-plum)] text-white border-r border-[var(--twb-border-secondary)]">
    All Wines
  </button>
  <button className="px-4 py-2 hover:bg-[var(--twb-color-ink)]/5 border-r border-[var(--twb-border-secondary)]">
    Red
  </button>
  <button className="px-4 py-2 hover:bg-[var(--twb-color-ink)]/5">
    White
  </button>
</div>
```

---

## Specialized Buttons

### Pill Button (Newsletter Signup)
```tsx
<button className="bg-[var(--twb-color-plum)] text-white px-8 py-3 rounded-full shadow-twb-xs hover:shadow-twb-md transition-all duration-twb-fast">
  Subscribe
</button>
```

### Social Media Button
```tsx
<button className="p-3 rounded-full border border-[var(--twb-border-tertiary)] hover:border-[var(--twb-color-plum)] hover:bg-[var(--twb-color-plum)] hover:text-white transition-all duration-twb-fast min-w-[44px] min-h-[44px]">
  <Facebook className="h-5 w-5" />
</button>
```

### Add to Cart Button (E-commerce)
```tsx
<button className="w-full bg-[var(--twb-color-plum)] text-white px-6 py-4 rounded-[var(--twb-radius-button-primary)] font-semibold shadow-twb-sm hover:shadow-twb-md active:shadow-twb-inner transition-all duration-twb-fast flex items-center justify-center gap-2">
  <ShoppingCart className="h-5 w-5" />
  <span>Add to Cart</span>
</button>
```

---

## Accessibility Requirements

### Keyboard Navigation
- [ ] All buttons reachable via `Tab`
- [ ] Activation via `Enter` or `Space`
- [ ] Clear focus indicator (2px ring)
- [ ] Logical tab order

### Screen Readers
- [ ] Descriptive text or `aria-label` for icon-only buttons
- [ ] `aria-disabled="true"` for disabled state
- [ ] `aria-busy="true"` for loading state
- [ ] `role="button"` for non-`<button>` elements

### Touch Targets
- [ ] Minimum 44×44px on mobile (WCAG 2.5.5)
- [ ] Adequate spacing between adjacent buttons (8px minimum)

### Contrast Ratios
- [ ] Text contrast ≥ 4.5:1 (normal text)
- [ ] Text contrast ≥ 3:1 (large text 18px+)
- [ ] Non-text contrast ≥ 3:1 (button against background)

---

## Motion & Animation

### Standard Transition
```tsx
className="transition-all duration-twb-fast ease-out"
```

### Hover Scale (Subtle)
```tsx
className="transition-transform duration-twb-moderate hover:scale-105"
```

### Wine-Inspired Bounce (Premium CTA)
```tsx
import { motion } from 'motion/react';

<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.2, ease: [0.68, -0.22, 0.27, 1.22] }} // cork-pop
  className="btn-premium"
>
  Join Wine Club
</motion.button>
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  button {
    transition: none !important;
  }
}
```

---

## Button Component (Reusable)

```tsx
/**
 * Button Component
 * 
 * Reusable button following The Wire Brand design system.
 * 
 * @param {object} props
 * @param {'primary' | 'secondary' | 'tertiary' | 'premium' | 'danger'} props.variant
 * @param {'small' | 'medium' | 'large'} props.size
 * @param {boolean} props.disabled
 * @param {boolean} props.loading
 * @param {React.ReactNode} props.icon
 * @param {React.ReactNode} props.children
 */
export function Button({ 
  variant = 'primary', 
  size = 'medium', 
  disabled = false,
  loading = false,
  icon,
  className = '',
  children,
  ...props 
}) {
  const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-[var(--twb-radius-button-primary)] font-medium transition-all duration-twb-fast focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-40 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-[var(--twb-color-plum)] text-white shadow-twb-xs hover:shadow-twb-md hover:bg-[#4a2530] active:shadow-twb-inner focus:ring-[var(--twb-color-plum)]',
    secondary: 'border-2 border-[var(--twb-color-vine)] text-[var(--twb-color-vine)] hover:bg-[var(--twb-color-vine)]/5 active:bg-[var(--twb-color-vine)]/10 focus:ring-[var(--twb-color-vine)]',
    tertiary: 'text-[var(--twb-color-ink)] hover:bg-[var(--twb-color-ink)]/5 active:bg-[var(--twb-color-ink)]/10 focus:ring-[var(--twb-color-ink)]',
    premium: 'bg-[var(--twb-color-gold)] text-[var(--twb-color-ink)] shadow-twb-sm hover:shadow-twb-glow-gold hover:bg-[#b89951] focus:ring-[var(--twb-color-gold)]',
    danger: 'bg-[var(--twb-border-error)] text-white shadow-twb-xs hover:shadow-twb-md hover:bg-[#b33d2f] focus:ring-[var(--twb-border-error)]'
  };
  
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm min-h-[44px] md:min-h-[32px]',
    medium: 'px-6 py-3 text-base min-h-[44px]',
    large: 'px-8 py-4 text-lg min-h-[56px]'
  };
  
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading && <Loader2 className="h-5 w-5 animate-spin" />}
      {!loading && icon}
      {children}
    </button>
  );
}
```

---

## Migration Path

### From Legacy Buttons

| Legacy Class | New Component | Notes |
|--------------|---------------|-------|
| `.btn-wine` | `<Button variant="primary">` | Primary CTA |
| `.btn-outline` | `<Button variant="secondary">` | Outlined |
| `.btn-ghost` | `<Button variant="tertiary">` | Minimal |
| Custom gold button | `<Button variant="premium">` | Wine club |

---

## Related Guidelines

- [Colors](/guidelines/design-tokens/colors.md) - Button color palette
- [Radii](/guidelines/design-tokens/radii.md) - Button border radius
- [Shadows](/guidelines/design-tokens/shadows.md) - Button shadow states
- [Animations](/guidelines/design-tokens/animations.md) - Button transitions
- [Touch Targets](/guidelines/design-tokens/touch-targets.md) - Mobile accessibility
- [WCAG Compliance](/guidelines/accessibility/wcag-compliance.md) - Accessibility standards

---

## Changelog

### Version 1.0 (2024-03-13)
- Initial button system created
- 5 button variants defined (primary, secondary, tertiary, premium, danger)
- 3 size variants with mobile touch targets
- Interactive states documented (hover, focus, active, disabled, loading)
- Icon button patterns added
- Reusable Button component created
- Accessibility requirements documented

---

**Questions or Issues?**  
Contact the design system team or reference the main [Design Tokens Overview](/guidelines/design-tokens/).
