# Audit Accessibility — Comprehensive WCAG 2.1 AA Audit

**Type:** Audit  
**Created:** 2026-03-18  
**Status:** Active  
**Trigger Word:** `audit accessibility`  
**Project:** Handcrafted Wines

---

## Prompt Purpose

**Objective:** Comprehensive accessibility audit covering focus visibility, keyboard navigation, ARIA labelling for icon-only buttons, and touch target sizing — with strict enforcement of WCAG 2.1 Level AA compliance (4.5:1 text contrast, 44x44px touch targets for important controls).

**When to Use:** As a deep-dive complement to `audit a11y`. Use this for full comprehensive audits; use `audit a11y` for quick checks or specific WCAG criteria.

**Reference Guidelines:**
- `/guidelines/accessibility/wcag-compliance.md` ⚠️ **MANDATORY**
- `/guidelines/accessibility/keyboard-navigation.md`
- `/guidelines/accessibility/screen-readers.md`
- `/guidelines/design-tokens/touch-targets.md`

---

## Workflow Steps

### Step 1: Focus Visibility Audit

Scan all `.tsx` and `.css` files for:

1. **`:focus-visible` styles:** Every interactive element (buttons, links, inputs, selects, textareas, checkboxes, radios) MUST have a visible `:focus-visible` style. Search for elements missing this.
2. **Focus ring styling:** Focus indicators must use `focus-visible:ring-2 focus-visible:ring-[var(--twb-color-focus-ring)]` with `focus-visible:ring-offset-2` — no `outline: none` without replacement.
3. **Custom focus:** Components with custom focus styling (box-shadow, border-color change) must be clearly visible and meet 3:1 contrast against adjacent colors.
4. **Focus suppression:** Search for `outline: none`, `outline: 0`, or `:focus { outline: none }` — these are violations unless paired with a replacement focus indicator.
5. **Focus within:** Verify composite components (dropdowns, accordions, Sheet components) manage focus correctly within their scope.

**Handcrafted Wines Focus Pattern:**
```tsx
className="
  focus:outline-none 
  focus-visible:ring-2 
  focus-visible:ring-[var(--twb-color-focus-ring)] 
  focus-visible:ring-offset-2
"
```

### Step 2: Keyboard Navigation

1. **Tab order:** Interactive elements are reachable via Tab key in logical DOM order
2. **Escape key:** Modals, dropdowns, Sheet components, and popovers close on Escape
3. **Arrow keys:** Radio groups and select menus navigate with arrow keys
4. **Enter/Space:** Buttons and links activate on Enter; checkboxes toggle on Space
5. **Skip link:** A "Skip to main content" link exists as the first focusable element in both UnifiedHeader and CheckoutLayout
6. **Focus trap:** Modals and Sheet components trap focus within their bounds (Tab doesn't escape to background content)
7. **Focus restoration:** When a modal/Sheet closes, focus returns to the trigger element

**Test Routes:**
- Main site: All routes using UnifiedHeader + Layout
- Checkout: Routes using CheckoutLayout
- Shop: Product pages, cart, category pages

### Step 3: ARIA Labelling

1. **Icon-only buttons:** Every button containing only an icon (Lucide icon, SVG) MUST have `aria-label` describing the action (e.g., `aria-label="Close menu"`, `aria-label="Remove item from cart"`)
2. **Icon-only links:** Same rule for `<Link>` tags containing only an icon
3. **Form associations:** Every `<input>`, `<select>`, `<textarea>` must have a visible `<label>` or `aria-label`/`aria-labelledby`
4. **Dynamic regions:** Content that updates dynamically should use `aria-live` (polite or assertive as appropriate)
5. **Roles:** Custom widgets (accordions, Sheet components) must have correct ARIA roles
6. **States:** Toggle buttons must use `aria-pressed` or `aria-expanded`. Disabled controls must use `aria-disabled="true"` or `disabled` attribute.
7. **Decorative elements:** Decorative SVGs, hand-drawn elements, and ornamental components must have `aria-hidden="true"`

**Handcrafted Wines Decorative Components:**
- HandDrawnUnderline
- BrushStrokeBorder
- BrushStrokeDivider
- OrganicBorder
- WaxSealStamp
- WineLabelStamp
- PaperTexture

### Step 4: Touch Target Sizing

Per `/guidelines/design-tokens/touch-targets.md`:

| Control Type | Minimum Size | Handcrafted Wines Standard |
|---|---|---|
| All interactive elements | 44x44px | WCAG AA (we use 44x44 as baseline) |
| Primary buttons | 44x44px | Standard |
| Navigation links (UnifiedHeader) | 44x44px | Standard |
| Form inputs (CheckoutInput) | 44px height | Standard |
| Icon-only buttons | 44x44px | Standard |
| Close/dismiss buttons (Sheet, Modal) | 44x44px | Standard |
| Add to cart buttons | 44x44px | Standard |
| Quantity +/- buttons (MiniCart) | 44x44px | Standard |

Audit steps:
1. **Measure:** Check computed size of all interactive elements — flag anything below 44x44px
2. **Important controls:** All buttons, navigation links, form submits must meet 44x44px
3. **Spacing:** Adjacent touch targets must have at least 8px spacing between them
4. **Padding expansion:** Small visual elements (icon buttons) should use padding to expand their touch target to 44x44px even if the visual icon is smaller

**Components to Audit:**
- UnifiedHeader (nav links, search, account, cart, mobile menu)
- UnifiedFooter (all navigation links)
- Shop components (product cards, add to cart, quantity controls)
- Checkout components (all form inputs, buttons)
- MiniCart (close, quantity controls, checkout button)

### Step 5: Image & Media Accessibility

1. **Alt text:** All `<img>` tags have `alt` attributes — meaningful for content images (product names), empty (`alt=""`) for decorative (Hero backgrounds)
2. **SVG accessibility:** Inline SVGs have `role="img"` and `aria-label`, or `aria-hidden="true"` if decorative
3. **Background images:** Content conveyed via `backgroundImage` has an accessible text alternative nearby
4. **ImageWithFallback:** Component properly passes through alt attributes
5. **Product images:** All product images use product name as alt text

**Check Files:**
- All product-related pages (ProductDetail, WinesCategory, SpiritsCategory, CheeseCategory, GiftsCategory)
- Cart/Checkout pages (product thumbnails)
- Hero components (decorative backgrounds)

### Step 6: Color & Contrast

1. **Text contrast:** Normal text (< 18px) meets 4.5:1 ratio against background
2. **Large text contrast:** Text >= 18px or bold >= 14px meets 3:1 ratio
3. **UI component contrast:** Borders, focus rings, and form outlines meet 3:1 against adjacent colors
4. **Color independence:** No information conveyed by color alone — icons, text labels, or patterns must supplement color coding
5. **Light mode:** All color combinations in `:root` (themes-light.css) meet contrast requirements
6. **Dark mode:** All color combinations in `.dark` (themes-dark.css) meet contrast requirements

**Test Color Combinations:**
- `--twb-color-text-primary` on `--twb-color-bg-primary`
- `--twb-color-text-secondary` on `--twb-color-bg-primary`
- `--twb-color-text-on-dark` on `--twb-color-plum` (buttons)
- `--twb-color-text-on-dark` on dark backgrounds (footer, hero overlays)
- Button states (default, hover, focus, disabled)

### Step 7: Report

Save report to `/reports/a11y/accessibility-comprehensive-audit-YYYY-MM-DD.md` with:

```markdown
# Comprehensive Accessibility Audit - Handcrafted Wines

**Date:** YYYY-MM-DD  
**WCAG Level:** 2.1 Level AA  
**Scope:** [All pages / Specific section]  
**Status:** [Complete/In Progress]

## Executive Summary
- **Health Score:** [0-100]
- **Files scanned:** [count]
- **Total violations:** [count]
- **Critical violations:** [count]
- **High-priority violations:** [count]
- **Medium-priority violations:** [count]
- **Low-priority violations:** [count]

## Focus Visibility
- Files scanned: [count]
- Violations: [list by file]
- Missing `:focus-visible` styles: [count]
- Fixes applied: [count]

## Keyboard Navigation
- Routes tested: [list]
- Tab order issues: [list]
- Escape key issues: [list]
- Focus trap issues: [list]
- Fixes applied: [count]

## ARIA Labelling
- Icon-only buttons missing `aria-label`: [list by file + line]
- Form inputs missing labels: [list]
- Decorative elements missing `aria-hidden`: [list]
- Fixes applied: [count]

## Touch Target Sizing
- Elements below 44x44px: [list with current size]
- Spacing violations: [list]
- Fixes applied: [count]

## Image Accessibility
- Missing alt text: [list]
- Decorative images missing empty alt: [list]
- SVG accessibility issues: [list]
- Fixes applied: [count]

## Color & Contrast
- Text contrast failures: [list with ratio]
- UI component contrast failures: [list]
- Mode-specific issues: [light/dark]
- Fixes applied: [count]

## Remaining Issues
[List with priority: P1 (blocks users), P2 (degrades experience), P3 (best practice)]

## Recommendations
[Next steps, tools needed, follow-up audits]
```

---

## Success Criteria

- [ ] Every interactive element has visible `:focus-visible` styling with 2px ring
- [ ] Keyboard navigation works for all interactive flows (tab order, escape, enter/space)
- [ ] All icon-only buttons/links have `aria-label`
- [ ] All interactive elements meet 44x44px minimum touch target
- [ ] All images have appropriate `alt` attributes (descriptive or empty)
- [ ] Color contrast meets WCAG AA thresholds (4.5:1 text, 3:1 large text, 3:1 UI)
- [ ] Both light and dark modes pass contrast requirements
- [ ] Report saved to `/reports/a11y/`
- [ ] Task list created/updated if violations remain

---

## Testing Tools

**Recommended:**
- NVDA (Windows) + Chrome/Firefox
- VoiceOver (macOS) + Safari
- Chrome DevTools Accessibility Inspector
- WebAIM Contrast Checker
- axe DevTools browser extension

**Testing Checklist:**
- [ ] Screen reader navigation (headings, links, forms)
- [ ] Keyboard-only navigation (no mouse)
- [ ] Focus visibility at all breakpoints
- [ ] Touch target sizing on mobile viewport
- [ ] Color contrast in light mode
- [ ] Color contrast in dark mode
- [ ] Theme toggle functionality
- [ ] Form validation announcements

---

## Handcrafted Wines Specific Checks

### Components to Prioritize

**High Priority (User-facing, high traffic):**
- UnifiedHeader (navigation, search, cart)
- UnifiedFooter (site-wide navigation)
- Shop components (ProductCard, ProductDetail, AddToCartButton)
- Cart components (Cart, MiniCart, quantity controls)
- Checkout components (all form inputs, CheckoutInput)

**Medium Priority:**
- Experience components (booking forms, contact)
- About pages (team, farm, awards)
- News/Blog components

**Low Priority:**
- Decorative components (already have aria-hidden)
- Admin/internal tools (if any)

### Routes to Test

**Main Site:**
- `/` (Homepage)
- `/about` (About, Team, Farm, Awards, Sustainability)
- `/shop` (all product categories)
- `/visit` (Experiences)
- `/events` (Events)
- `/wine-club` (Wine Club)

**Shop:**
- `/shop/wines` (category)
- `/shop/spirits` (category)
- `/shop/cheese` (category)
- `/shop/gifts` (category)
- `/shop/product/:slug` (product detail)
- `/shop/cart` (cart)
- `/shop/checkout` (checkout)

**System:**
- `/dev-tools` (developer tools hub)
- `/sitemap` (sitemap)

---

**Maintained by:** Handcrafted Wines Development Team  
**Last Updated:** 2026-03-18  
**Related Prompts:** `audit a11y`, `audit layout`, `audit images`  
**Related Task List:** `/tasks/a11y-task-list.md`
