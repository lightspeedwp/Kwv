# New Block — Scaffold an Atomic Component

**Type:** Implementation  
**Created:** 2026-03-18  
**Status:** Active  
**Trigger Word:** `new block`  
**Project:** Handcrafted Wines

---

## Prompt Purpose

**Objective:** Scaffold new atomic component for Handcrafted Wines. Atomic components are smallest reusable UI elements (buttons, cards, badges, inputs) — used INSIDE sections.

**When to Use:** When new atomic-level UI component needed.

**Note:** Handcrafted Wines doesn't strictly follow WordPress block architecture. Use this for small, reusable components.

---

## Input Required

User must provide:
1. **Component name** — e.g., "PriceTag", "RatingStars", "ProductBadge", "WineTypeIcon"
2. **Component category** — common, shop, decorative
3. **Variants** — size/style variants needed (primary, outline, small, large)

---

## Workflow Steps

### Step 1: Determine Component vs Section

**Component (atomic):**
- Single UI element (button, card, badge, input, icon)
- Used INSIDE sections — never standalone on page
- Small, focused responsibility

**Section (composite):**
- Composed of multiple components
- Used directly in page templates
- Larger, section-level scope

If request is actually section, redirect to `new pattern`.

### Step 2: Create Component File

1. Create `/components/{category}/{ComponentName}.tsx`
   - common: shared across site
   - shop: e-commerce specific
   - decorative: hand-drawn elements
2. Define TypeScript interface with JSDoc
3. Use semantic HTML (`<button>`, `<a>`, `<span>`)
4. Support all variants via `variant` prop
5. Keep under 200 lines — components should be simple

**Categories:**
- `/components/common/` - Button, Typography, Logo, ScrollDownArrow
- `/components/shop/` - ProductCard, AddToCartButton, QuantityControl
- `/components/decorative/` - HandDrawnUnderline, WaxSealStamp, OrganicBorder

### Step 3: Design System Compliance

All generated code must:
- Use `var(--twb-font-primary)` for typography
- Use `var(--twb-spacing-*)` for padding/margin
- Use `var(--twb-color-*)` for theming
- Use `var(--twb-radius-*)` for border radius
- Support keyboard navigation and focus states
- Include `aria-label` for icon-only variants
- Meet 44x44px minimum touch target for interactive elements
- Use hand-drawn aesthetic (organic borders, warm colors)

### Step 4: Variants

Common variant patterns:
```tsx
interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'small' | 'medium' | 'large'
  // ... other props
}
```

**Handcrafted Wines Variants:**
- Buttons: primary (plum), secondary (clay), outline, ghost
- Cards: standard, featured, compact
- Badges: new, sale, limited-edition, award

### Step 5: Create Styles (If Needed)

If complex styling beyond Tailwind:
1. Add `.twb-{component-name}` classes to `/styles/utilities.css`
2. Use CSS variables exclusively
3. Include hover, focus, active, disabled states
4. Include responsive variants if needed

### Step 6: Register and Document

1. Export from component index if exists
2. Add CHANGELOG entry under `[Unreleased]` → Added

---

## Success Criteria

- [ ] Component created with TypeScript interface
- [ ] All variants implemented
- [ ] JSDoc documentation complete
- [ ] 100% CSS variable compliance
- [ ] Keyboard accessible with visible focus states
- [ ] Touch target meets 44x44px for interactive elements
- [ ] Hand-drawn aesthetic applied (if visual component)
- [ ] Under 200 lines
- [ ] CHANGELOG updated

---

## Handcrafted Wines Existing Components

**Common:**
- Button (primary, secondary, outline variants)
- Typography (h1-h6, body, caption)
- Logo (wordmark + icon)
- ScrollDownArrow (hero scroll indicator)

**Shop:**
- ProductCard (grid display)
- AddToCartButton (with loading state)
- QuantityControl (+/- buttons)
- PriceDisplay (formatted currency)

**Decorative:**
- HandDrawnUnderline
- BrushStrokeBorder
- BrushStrokeDivider
- OrganicBorder
- WaxSealStamp
- WineLabelStamp
- PaperTexture

**Form:**
- CheckoutInput (form inputs with validation)
- Select (dropdown)
- Checkbox
- Radio

---

**Maintained by:** Handcrafted Wines Development Team  
**Last Updated:** 2026-03-18  
**Related Prompts:** `new pattern`, `new template`
