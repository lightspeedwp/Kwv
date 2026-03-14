# Iconography Design Tokens

**Category:** Design Tokens  
**Domain:** Icons & Symbols  
**Version:** 1.0  
**Last Updated:** 2024-03-13  
**Status:** Active

---

## Overview

The Wire Brand icon system uses Lucide React icons to maintain consistency, clarity, and accessibility. Icons should feel organic and aligned with the handcrafted aesthetic while remaining functional and recognizable.

**Key Characteristics:**
- Lucide React library (clean, customizable stroke-based icons)
- Consistent sizing and spacing
- Accessible with proper labels
- Organic, hand-drawn feel where appropriate
- Wine-themed custom icons for brand moments

---

## Icon Library

### Primary Icon Set: Lucide React

**Package:** `lucide-react@0.487.0`

**Why Lucide:**
- Stroke-based icons (align with hand-drawn aesthetic)
- Extensive library (1000+ icons)
- Customizable size, color, stroke width
- Tree-shakeable (import only needed icons)
- TypeScript support

**Import Pattern:**
```tsx
import { Wine, ShoppingCart, User, Menu, Search, X } from 'lucide-react';
```

---

## Icon Sizes

### Size Specifications

| Token Name | Pixel Size | CSS Class | Usage |
|------------|------------|-----------|-------|
| `twb-icon-xs` | `16px` | `h-4 w-4` | Inline text, small badges |
| `twb-icon-sm` | `20px` | `h-5 w-5` | Form inputs, buttons, navigation |
| `twb-icon-md` | `24px` | `h-6 w-6` | Standard icons, cards, sections |
| `twb-icon-lg` | `32px` | `h-8 w-8` | Feature icons, empty states |
| `twb-icon-xl` | `48px` | `h-12 w-12` | Hero sections, large callouts |
| `twb-icon-2xl` | `64px` | `h-16 w-16` | Marketing graphics, awards |

### Size Usage Guidelines

**XS (16px):** Inline with text, small UI elements
```tsx
<span className="flex items-center gap-1 text-sm">
  <CheckCircle className="h-4 w-4 text-[var(--twb-color-vine)]" />
  Available
</span>
```

**SM (20px):** Buttons, form fields, navigation
```tsx
<button className="flex items-center gap-2">
  <ShoppingCart className="h-5 w-5" />
  <span>Add to Cart</span>
</button>
```

**MD (24px):** Standard UI, card headers, section icons
```tsx
<div className="flex items-center gap-3">
  <Wine className="h-6 w-6 text-[var(--twb-color-plum)]" />
  <h3>Red Wines</h3>
</div>
```

**LG-2XL (32px-64px):** Feature areas, empty states, hero sections
```tsx
<div className="text-center py-12">
  <Package className="h-16 w-16 text-[var(--twb-color-clay)] mx-auto mb-4" />
  <h2>Your cart is empty</h2>
</div>
```

---

## Icon Colors

### Color Tokens

| Context | Color Token | CSS Value | Usage |
|---------|-------------|-----------|-------|
| Primary | `twb-color-ink` | `#1e1a17` | Default icons, body content |
| Secondary | `twb-color-vine` | `#5c6b4f` | Supporting icons, metadata |
| Accent | `twb-color-plum` | `#5a2d3b` | Interactive icons, CTAs |
| Warning | `twb-color-clay` | `#b86b4b` | Warning states, alerts |
| Error | `twb-border-error` | `#c44536` | Error icons, validation |
| Success | `twb-border-success` | `#5c6b4f` | Success icons, confirmation |
| Decorative | `twb-color-gold` | `#c8a96b` | Premium features, awards |
| Disabled | `twb-color-ink` at 40% | rgba(30,26,23,0.4) | Disabled states |

### Color Usage Examples

```tsx
// Primary (default)
<User className="h-6 w-6 text-[var(--twb-color-ink)]" />

// Interactive/CTA
<ShoppingCart className="h-5 w-5 text-[var(--twb-color-plum)]" />

// Success
<CheckCircle className="h-5 w-5 text-[var(--twb-border-success)]" />

// Error
<AlertCircle className="h-5 w-5 text-[var(--twb-border-error)]" />

// Premium/Award
<Award className="h-6 w-6 text-[var(--twb-color-gold)]" />
```

---

## Common Icon Mappings

### Navigation Icons

| Icon | Component | Usage |
|------|-----------|-------|
| `Menu` | Mobile menu trigger | Hamburger menu |
| `X` | Close buttons | Dismiss modals, sheets |
| `ChevronDown` | Dropdowns | Indicate expandable menus |
| `ChevronRight` | Breadcrumbs, links | Forward navigation |
| `Home` | Homepage link | Breadcrumb home |
| `Search` | Search input | Search functionality |

```tsx
import { Menu, X, ChevronDown, ChevronRight, Home, Search } from 'lucide-react';
```

### E-commerce Icons

| Icon | Component | Usage |
|------|-----------|-------|
| `ShoppingCart` | Cart button | Shopping cart |
| `ShoppingBag` | Checkout | Shopping bag/purchases |
| `Heart` | Wishlist | Add to favorites |
| `Star` | Ratings | Product ratings |
| `Package` | Orders | Order tracking |
| `CreditCard` | Payment | Payment methods |
| `Truck` | Shipping | Delivery information |

```tsx
import { ShoppingCart, ShoppingBag, Heart, Star, Package, CreditCard, Truck } from 'lucide-react';
```

### Wine-Specific Icons

| Icon | Component | Usage |
|------|-----------|-------|
| `Wine` | Wine categories | Red, white, rosé wines |
| `GlassWater` | Wine tasting | Tasting notes, experiences |
| `Award` | Awards | Wine awards, accolades |
| `Grape` | Vineyards | Vineyard tours, grape varieties |
| `Sparkles` | Premium | Premium wines, special editions |

```tsx
import { Wine, GlassWater, Award, Sparkles } from 'lucide-react';
```

### Form & UI Icons

| Icon | Component | Usage |
|------|-----------|-------|
| `CheckCircle` | Success states | Successful validation |
| `AlertCircle` | Error/warning | Error messages, alerts |
| `Info` | Information | Tooltips, help text |
| `Eye` | Show password | Toggle password visibility |
| `EyeOff` | Hide password | Toggle password visibility |
| `Calendar` | Date picker | Date selection |
| `Clock` | Time | Opening hours, timestamps |

```tsx
import { CheckCircle, AlertCircle, Info, Eye, EyeOff, Calendar, Clock } from 'lucide-react';
```

### Social Media Icons

| Icon | Component | Usage |
|------|-----------|-------|
| `Facebook` | Facebook link | Social media |
| `Instagram` | Instagram link | Social media |
| `Twitter` | Twitter/X link | Social media |
| `Mail` | Email | Contact, newsletter |
| `Phone` | Phone | Contact information |
| `MapPin` | Location | Address, map |

```tsx
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
```

---

## Stroke Width

### Default Stroke

**Lucide default:** `2px` stroke width

**Customization:**
```tsx
<Wine className="h-6 w-6" strokeWidth={2} /> {/* Default */}
<Wine className="h-6 w-6" strokeWidth={1.5} /> {/* Lighter */}
<Wine className="h-6 w-6" strokeWidth={2.5} /> {/* Heavier */}
```

### Stroke Width Guidelines

| Stroke Width | Usage | Feel |
|--------------|-------|------|
| `1` | Decorative, large icons | Delicate, elegant |
| `1.5` | UI icons, subtle elements | Light, refined |
| `2` (default) | Standard icons | Balanced, clear |
| `2.5` | Emphasis, CTAs | Bold, prominent |
| `3` | Heavy emphasis, logos | Strong, impactful |

---

## Icon Accessibility

### Screen Reader Labels

**Icon-only buttons MUST have labels:**
```tsx
// ❌ Bad: No label
<button>
  <Search className="h-5 w-5" />
</button>

// ✅ Good: aria-label
<button aria-label="Search">
  <Search className="h-5 w-5" />
</button>

// ✅ Good: Visually hidden text
<button>
  <Search className="h-5 w-5" />
  <span className="sr-only">Search</span>
</button>

// ✅ Best: Visible text
<button className="flex items-center gap-2">
  <Search className="h-5 w-5" />
  <span>Search</span>
</button>
```

### Decorative Icons

**Mark as decorative with `aria-hidden`:**
```tsx
<h2 className="flex items-center gap-2">
  <Wine className="h-6 w-6" aria-hidden="true" />
  <span>Red Wines</span> {/* Text provides context */}
</h2>
```

### Interactive Icons

**Icons that convey state must have ARIA attributes:**
```tsx
<button aria-pressed={isFavorite} aria-label="Add to favorites">
  <Heart
    className={cn("h-5 w-5", isFavorite && "fill-[var(--twb-color-plum)]")}
  />
</button>
```

---

## Icon Animation Patterns

### Hover Rotation (Wine Glass)
```tsx
<motion.div
  whileHover={{ rotate: [0, -5, 5, -5, 0] }}
  transition={{ duration: 0.5 }}
>
  <Wine className="h-8 w-8 text-[var(--twb-color-plum)]" />
</motion.div>
```

### Bounce on Click
```tsx
<motion.button
  whileTap={{ scale: 0.9 }}
  className="p-2"
>
  <ShoppingCart className="h-6 w-6" />
</motion.button>
```

### Spin (Loading States)
```tsx
<Loader2 className="h-5 w-5 animate-spin text-[var(--twb-color-plum)]" />
```

### Pulse (Notifications)
```tsx
<motion.div
  animate={{ scale: [1, 1.1, 1] }}
  transition={{ duration: 2, repeat: Infinity }}
>
  <Bell className="h-6 w-6 text-[var(--twb-color-clay)]" />
</motion.div>
```

---

## Custom SVG Icons (Wine Brand)

### When to Create Custom Icons

**Create custom icons for:**
- Wine bottle shapes (specific to brands)
- Vineyard/terroir illustrations
- Cork/barrel graphics
- Tasting note symbols
- Wine club badges

### Custom Icon Implementation

**Store in:** `/components/icons/`

**Example: Wine Bottle Icon**
```tsx
/**
 * WineBottleIcon
 * 
 * Custom wine bottle icon for The Wire Brand.
 * Hand-drawn aesthetic with organic curves.
 */
export function WineBottleIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M8 2h8M9 2v4c0 1-1 2-1 3v11a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V9c0-1-1-2-1-3V2" />
      <line x1="7" y1="13" x2="17" y2="13" />
    </svg>
  );
}
```

### Custom Icon Guidelines

- **Stroke-based** (match Lucide style)
- **24×24px** viewBox (standard)
- **2px stroke width** (default)
- **currentColor** for fill/stroke (allows color customization)
- **aria-hidden** for decorative icons
- **Consistent linecap/linejoin** (round)

---

## Icon Spacing

### Icon + Text Spacing

**Use `gap-2` (8px) for standard icon-text pairs:**
```tsx
<div className="flex items-center gap-2">
  <Wine className="h-5 w-5" />
  <span>Red Wine</span>
</div>
```

**Use `gap-3` (12px) for larger icons:**
```tsx
<div className="flex items-center gap-3">
  <Wine className="h-6 w-6" />
  <h3 className="text-xl">Red Wine</h3>
</div>
```

### Icon-Only Buttons

**Minimum padding for touch targets:**
```tsx
<button className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center">
  <Search className="h-5 w-5" />
</button>
```

---

## Performance Optimization

### Tree-Shaking (Import Only Needed Icons)

**✅ Good: Named imports**
```tsx
import { Wine, ShoppingCart, User } from 'lucide-react';
```

**❌ Bad: Default import (bundles all icons)**
```tsx
import * as Icons from 'lucide-react'; // Avoid
```

### Icon Caching

Icons are automatically cached by the browser. No additional optimization needed for Lucide React icons.

---

## Related Guidelines

- [Buttons](/guidelines/design-tokens/buttons.md) - Icon button patterns
- [Navigation](/guidelines/design-tokens/navigation.md) - Navigation icons
- [Forms](/guidelines/design-tokens/forms.md) - Form validation icons
- [Colors](/guidelines/design-tokens/colors.md) - Icon color palette

---

## Changelog

### Version 1.0 (2024-03-13)
- Lucide React established as primary icon library
- Icon sizing system defined (xs to 2xl)
- Color usage guidelines documented
- Common icon mappings created
- Accessibility requirements established
- Animation patterns added
- Custom SVG icon guidelines created

---

**Questions or Issues?**  
Contact the design system team or reference the main [Design Tokens Overview](/guidelines/design-tokens/).
