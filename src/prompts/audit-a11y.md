# Audit A11y — WCAG 2.1 AA Quick Compliance Audit

**Type:** Audit (Quick Check)  
**Created:** 2026-03-18  
**Status:** Active  
**Trigger Word:** `audit a11y`  
**Project:** Handcrafted Wines

---

## Prompt Purpose

**Objective:** Quick WCAG 2.1 AA accessibility audit covering semantic HTML, keyboard navigation, ARIA labels, focus states, touch targets, and reduced motion support. For comprehensive audits, use `audit accessibility`.

**When to Use:** After building new UI components, or periodically as a quality gate (quick check).

**Reference Guidelines:**
- `/guidelines/accessibility/wcag-compliance.md` ⚠️ **MANDATORY**
- `/tasks/a11y-task-list.md` (current progress: 21/28 tasks, 75%)

---

## Workflow Steps

### Step 1: Semantic HTML Audit

Scan `.tsx` files for:

1. **Heading hierarchy:** Each page has one `<h1>`, headings are sequential (no H1 → H3 skip)
2. **Landmark elements:** `<main id="main-content">`, `<nav>`, `<header>`, `<footer>` used appropriately
3. **List markup:** Related items use `<ul>`/`<ol>` + `<li>`, not stacked `<div>`
4. **Button vs link:** `<button>` for actions, `<Link>` for navigation — no `<div onClick>`

**Expected landmarks (main site):**
- `<header>` in UnifiedHeader
- `<nav>` in UnifiedHeader navigation
- `<main id="main-content">` in Layout component
- `<footer>` in UnifiedFooter

**Expected landmarks (checkout):**
- `<header>` in CheckoutHeader
- `<main id="main-content">` in CheckoutLayout
- `<footer>` in CheckoutFooter

### Step 2: Keyboard Navigation

1. **Interactive elements:** All clickable elements are focusable (`<button>`, `<Link>`, or `tabIndex`)
2. **Focus order:** Logical tab order follows visual layout
3. **Focus visibility:** All interactive elements have visible `:focus-visible` styles with 2px ring
4. **Skip link:** Site has skip-to-content link as first focusable element (both layouts)

**Focus pattern (Handcrafted Wines):**
```tsx
className="
  focus:outline-none 
  focus-visible:ring-2 
  focus-visible:ring-[var(--twb-color-focus-ring)] 
  focus-visible:ring-offset-2
"
```

### Step 3: ARIA Labels

1. **Icon-only buttons:** Must have `aria-label` or `<span className="sr-only">`
2. **Form inputs:** All inputs have associated `<label>` or `aria-label`
3. **Dynamic content:** Modals, dropdowns have proper ARIA roles and states
4. **Images:** All `<img>` have meaningful `alt` text (or `alt=""` for decorative)
5. **Decorative elements:** Decorative SVGs have `aria-hidden="true"`

**Handcrafted Wines decorative components (all should have aria-hidden):**
- HandDrawnUnderline
- BrushStrokeBorder
- BrushStrokeDivider
- OrganicBorder
- WaxSealStamp
- WineLabelStamp
- PaperTexture

### Step 4: Touch Targets

Per `/guidelines/design-tokens/touch-targets.md`:

1. All interactive elements meet 44x44px minimum (WCAG AA)
2. Sufficient spacing between adjacent touch targets (8px+)
3. Icon-only buttons use padding to expand touch area

**Priority components:**
- UnifiedHeader navigation links
- Mobile menu items
- Cart quantity controls (+/-)
- Add to cart buttons
- Checkout form inputs
- Close buttons (Sheet, Modal)

### Step 5: Reduced Motion

1. Animations respect `prefers-reduced-motion` media query (check globals.css)
2. No essential information conveyed only through animation
3. All CSS transitions/animations have reduced motion alternatives

**Check:**
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Step 6: Color Contrast

1. Text color vs background meets 4.5:1 ratio (normal text) or 3:1 (large text ≥18px)
2. Interactive elements have sufficient contrast in all states (default, hover, focus, disabled)
3. Information is not conveyed by color alone

**Test combinations:**
- Light mode: `--twb-color-text-primary` on `--twb-color-bg-primary`
- Dark mode: `--twb-color-text-primary` on `--twb-color-bg-primary`
- Buttons: text on `--twb-color-plum`, `--twb-color-clay`, `--twb-color-vine`

### Step 7: Report

Save report to `/reports/a11y/a11y-quick-audit-YYYY-MM-DD.md` with:
- Files scanned
- Violations by category (semantic, keyboard, ARIA, touch, motion, contrast)
- Fixes applied
- Remaining issues with priority levels
- Link to comprehensive audit if deeper review needed

---

## Success Criteria

- [ ] All pages have correct heading hierarchy (one h1, sequential levels)
- [ ] All interactive elements are keyboard accessible (tab order, visible focus)
- [ ] All icon-only buttons have labels (`aria-label` or sr-only text)
- [ ] All touch targets meet 44x44px minimum
- [ ] Reduced motion support exists for all animations
- [ ] Color contrast meets WCAG AA (4.5:1 text, 3:1 large text)
- [ ] Report saved to `/reports/a11y/`
- [ ] Task list updated if new violations found

---

## Quick Test Checklist

**5-Minute Manual Test:**
- [ ] Tab through homepage — all interactive elements have focus ring
- [ ] Press Tab from URL bar — first element is "Skip to main content"
- [ ] Toggle theme — both modes readable, no contrast failures
- [ ] Open mobile menu — opens/closes, keyboard navigable
- [ ] Add product to cart — button has visible focus, announces to screen reader
- [ ] Open MiniCart — Sheet opens, Escape closes, focus returns to trigger

---

## Current A11y Status (Handcrafted Wines)

**Progress:** 21/28 tasks complete (75%)  
**Health Score:** 100/100 ✅  
**Last Audit:** 2026-03-18

**Completed:**
- ✅ All critical tasks (3/3)
- ✅ All high-priority tasks (8/8)
- ✅ 10 medium/low priority tasks

**Remaining (7 tasks):**
- 8 medium-priority tasks (page language, contrast verification, etc.)
- 0 low-priority tasks remaining

**Task List:** `/tasks/a11y-task-list.md`

---

**Maintained by:** Handcrafted Wines Development Team  
**Last Updated:** 2026-03-18  
**Related Prompts:** `audit accessibility` (comprehensive), `audit layout`, `audit images`  
**Related Guidelines:** `/guidelines/accessibility/wcag-compliance.md`
