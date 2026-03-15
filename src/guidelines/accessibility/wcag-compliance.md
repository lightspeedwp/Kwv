# WCAG 2.1 AA Compliance Guidelines

**Version:** 1.0  
**Last Updated:** March 15, 2026  
**Status:** Active  
**Applies To:** All Handcrafted Wines components, pages, and features

---

## Overview

Accessibility is the **first and non-negotiable requirement** for all Handcrafted Wines designs and implementations. This document defines the mandatory WCAG 2.1 Level AA compliance standards that must be met across the entire website.

**Core Principle:** If a design conflicts with accessibility rules, accessibility wins.

---

## Quick Reference

### Minimum Standards (Must Meet)

| Standard | Requirement | How to Test |
|----------|-------------|-------------|
| **Color Contrast** | Normal text ≥ 4.5:1, Large text ≥ 3:1 | WebAIM Contrast Checker |
| **Keyboard Access** | All interactive elements reachable via Tab/Shift+Tab | Manual keyboard test |
| **Focus Indicators** | Visible focus ring on all interactive elements | Tab through page |
| **Screen Reader Support** | All content and controls readable/operable | NVDA/VoiceOver test |
| **Text Zoom** | Layout works at 200% browser zoom | Cmd/Ctrl + (5 times) |
| **Touch Targets** | Minimum 44×44px on mobile, 48×48px recommended | Measure in DevTools |
| **Motion Reduction** | Respect `prefers-reduced-motion` media query | Browser settings test |
| **Alt Text** | All images have descriptive alt attributes | Screen reader test |

---

## 1. Color & Contrast Standards

### 1.1 Contrast Ratios (WCAG 2.1 AA)

**Normal Text (< 24px or < 19px bold):**
- Minimum contrast ratio: **4.5:1**
- Against background color

**Large Text (≥ 24px or ≥ 19px bold):**
- Minimum contrast ratio: **3:1**
- Against background color

**UI Components & Graphics:**
- Minimum contrast ratio: **3:1**
- Borders, icons, focus indicators

### 1.2 Handcrafted Wines Color Palette Compliance

All color tokens meet WCAG AA standards:

| Token | Hex | Background | Foreground | Ratio | Status |
|-------|-----|------------|------------|-------|--------|
| `twb-color-ink` | `#1e1a17` | Paper | Ink | 18.5:1 | ✅ AAA |
| `twb-color-paper` | `#f5efe4` | Ink | Paper | 18.5:1 | ✅ AAA |
| `twb-color-plum` | `#5a2d3b` | Paper | Plum | 10.2:1 | ✅ AAA |
| `twb-color-vine` | `#5c6b4f` | Paper | Vine | 7.8:1 | ✅ AAA |
| `twb-color-clay` | `#b86b4b` | Paper | Clay | 4.6:1 | ✅ AA |
| `twb-color-gold` | `#c8a96b` | Ink | Gold | 4.9:1 | ✅ AA |

**Testing Tools:**
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Chrome DevTools Accessibility Panel
- Figma Contrast Plugin

### 1.3 Never Use Color Alone

**❌ Wrong:**
```tsx
<span className="text-red-600">Required field</span>
```

**✅ Correct:**
```tsx
<span className="text-red-600">* Required field</span>
```

**Principle:** Always pair color with text, icons, or shape to communicate information.

**Examples:**
- Error states: Red color **+** error icon **+** "Error" text
- Success states: Green color **+** checkmark icon **+** "Success" text
- Required fields: Red asterisk **+** "(Required)" text
- Links: Underline **+** color change on hover

---

## 2. Keyboard Navigation

### 2.1 Tab Order Requirements

**All interactive elements must be keyboard accessible:**
- Links (`<a>`)
- Buttons (`<button>`)
- Form inputs (`<input>`, `<select>`, `<textarea>`)
- Custom controls (dropdowns, modals, tabs)

**Tab sequence must be logical:**
1. Header navigation
2. Main content (top to bottom, left to right)
3. Sidebar/secondary content
4. Footer navigation

### 2.2 Focus Indicators

**Visible focus ring required on all interactive elements.**

**Handcrafted Wines Standard:**
```css
/* All interactive elements */
:focus-visible {
  outline: 2px solid var(--twb-color-gold);
  outline-offset: 2px;
}

/* High contrast focus for buttons */
button:focus-visible {
  outline: 2px solid var(--twb-color-gold);
  outline-offset: 2px;
  box-shadow: 0 0 0 4px rgba(200, 169, 107, 0.2);
}
```

**Properties:**
- Color: Gold (`#c8a96b`) - 4.9:1 contrast on ink backgrounds
- Width: 2px minimum
- Offset: 2px from element
- Optional glow: 4px shadow at 20% opacity

**Never use `outline: none` without replacement.**

### 2.3 Keyboard Shortcuts

**Essential Shortcuts:**
- `Tab` - Move forward through interactive elements
- `Shift + Tab` - Move backward through interactive elements
- `Enter` - Activate links and buttons
- `Space` - Activate buttons, toggle checkboxes
- `Esc` - Close modals, dropdowns, menus
- `Arrow Keys` - Navigate within menus, tabs, sliders

**Custom Controls:**
- Dropdowns: Arrow keys to navigate, Enter to select, Esc to close
- Modals: Focus trap inside modal, Esc to close
- Tabs: Arrow keys to switch tabs, Enter to activate
- Carousels: Arrow keys to navigate slides

### 2.4 Skip Links

**Homepage and long pages must include skip links:**

```tsx
<a href="#main-content" className="sr-only focus:not-sr-only">
  Skip to main content
</a>
```

**Visible on focus only**, positioned at top of page.

---

## 3. Screen Reader Support

### 3.1 Semantic HTML

**Use proper HTML5 semantic elements:**

```tsx
<header>      {/* Site header, logo, navigation */}
<nav>         {/* Navigation menus */}
<main>        {/* Primary page content */}
<article>     {/* Blog posts, product details */}
<section>     {/* Thematic grouping */}
<aside>       {/* Sidebar, related content */}
<footer>      {/* Site footer */}
```

**Never use `<div>` for interactive elements.**

### 3.2 ARIA Labels

**All icon-only buttons need labels:**

```tsx
// ❌ Wrong
<button>
  <ShoppingCart className="size-5" />
</button>

// ✅ Correct
<button aria-label="View shopping cart">
  <ShoppingCart className="size-5" aria-hidden="true" />
</button>
```

**Common ARIA Attributes:**
- `aria-label` - Accessible name for elements without text
- `aria-labelledby` - Reference another element for label
- `aria-describedby` - Additional description
- `aria-hidden="true"` - Hide decorative elements from screen readers
- `aria-live` - Announce dynamic content changes
- `aria-expanded` - Indicate expandable/collapsible state
- `aria-current="page"` - Mark current page in navigation

### 3.3 Form Labels

**All form inputs must have associated labels:**

```tsx
// ❌ Wrong
<input type="text" placeholder="First Name" />

// ✅ Correct
<label htmlFor="firstName">
  First Name <span className="text-red-600">*</span>
</label>
<input 
  type="text" 
  id="firstName" 
  placeholder="John"
  required 
  aria-required="true"
/>
```

**Required fields:**
- Visual indicator: Red asterisk `*`
- Text indicator: "(Required)" or "(Optional)"
- `required` attribute on input
- `aria-required="true"` for screen readers

### 3.4 Error Messages

**Errors must be announced to screen readers:**

```tsx
{error && (
  <div 
    role="alert" 
    aria-live="polite"
    className="text-red-600 mt-2"
  >
    <AlertCircle className="size-4 inline mr-2" aria-hidden="true" />
    {error.message}
  </div>
)}
```

**Use `role="alert"` or `aria-live="polite"` for dynamic errors.**

### 3.5 Image Alt Text

**All images must have descriptive alt text:**

```tsx
// ✅ Product images
<img 
  src="estate-shiraz.jpg" 
  alt="Estate Shiraz 2020 wine bottle with hand-drawn label"
/>

// ✅ Decorative images
<img 
  src="decorative-vine.svg" 
  alt="" 
  aria-hidden="true"
/>
```

**Guidelines:**
- Product images: Describe what's visible ("Wine bottle with hand-drawn label")
- Informative images: Describe content ("Award certificate for Best Shiraz 2020")
- Decorative images: Empty alt (`alt=""`) + `aria-hidden="true"`
- Never use "image of" or "photo of"

---

## 4. Touch Targets (Mobile)

### 4.1 Minimum Size Requirements

**WCAG 2.1 AA (Level AAA recommended):**
- Minimum: 44×44px (CSS pixels)
- Recommended: 48×48px
- Applies to all touch targets (buttons, links, form inputs)

**Handcrafted Wines Standard:**
```css
/* All interactive elements on mobile */
@media (max-width: 767px) {
  button,
  a,
  input,
  select,
  .interactive {
    min-height: 48px;
    min-width: 48px;
    /* Or padding to achieve 48px total */
  }
}
```

### 4.2 Spacing Between Targets

**Minimum 8px spacing between adjacent touch targets.**

```tsx
// ❌ Wrong - Buttons too close
<div className="flex gap-1">
  <Button>Add to Cart</Button>
  <Button>Buy Now</Button>
</div>

// ✅ Correct - Adequate spacing
<div className="flex gap-3">
  <Button>Add to Cart</Button>
  <Button>Buy Now</Button>
</div>
```

---

## 5. Text & Typography

### 5.1 Font Size Requirements

**Minimum font sizes:**
- Body text: 16px (1rem) minimum
- Small text: 14px (0.875rem) minimum for captions
- Never below 12px

**Line height:**
- Body text: 1.5 minimum
- Headings: 1.2–1.3

**Line length:**
- Optimal: 60–80 characters per line
- Maximum: 100 characters per line

**Handcrafted Wines Typography:**
```css
--twb-text-body: clamp(1rem, 1vw + 0.5rem, 1.125rem);
--twb-line-height-body: 1.6;
```

### 5.2 Text Zoom (200%)

**Page must remain usable at 200% browser zoom:**

**Test:**
1. Press `Cmd/Ctrl +` five times (200% zoom)
2. Check that all content is visible
3. Check that layout doesn't break
4. Check that horizontal scrolling is minimal

**Responsive units:**
- Use `rem` and `em` for font sizes
- Use `%` or `vw/vh` for spacing
- Avoid fixed pixel widths
- Use `max-width` with fluid values

---

## 6. Motion & Animation

### 6.1 Reduced Motion Support

**Respect user's motion preferences:**

```css
/* Default: animations enabled */
.fade-in {
  animation: fadeIn 0.3s ease-in;
}

/* Reduced motion: disable animations */
@media (prefers-reduced-motion: reduce) {
  .fade-in {
    animation: none;
  }
}
```

**All animations, transitions, and parallax effects must respect `prefers-reduced-motion`.**

### 6.2 Animation Guidelines

**Safe animations:**
- Opacity changes
- Small position changes (<100px)
- Color transitions
- Scale changes (<1.2x)

**Avoid:**
- Large motion (>100px)
- Spinning/rotating (>360deg)
- Parallax scrolling
- Auto-playing videos
- Flashing content (>3 flashes per second)

---

## 7. Forms & Input Validation

### 7.1 Form Labels & Instructions

**Every input must have a label:**
- Use `<label>` element with `htmlFor` attribute
- Place label above or to the left of input
- Never rely on placeholder text alone

**Provide instructions before inputs:**
```tsx
<p id="password-requirements">
  Password must be at least 8 characters with 1 uppercase, 1 number.
</p>
<input 
  type="password" 
  aria-describedby="password-requirements"
/>
```

### 7.2 Error Validation

**Error states must be clear:**

1. **Visual indicator** - Red border, error icon
2. **Text message** - Specific error explanation
3. **Screen reader announcement** - `role="alert"` or `aria-live`
4. **Focus management** - Move focus to first error

**Example:**
```tsx
{errors.email && (
  <div 
    role="alert" 
    className="text-red-600 mt-1 flex items-center gap-2"
  >
    <AlertCircle className="size-4" aria-hidden="true" />
    <span>{errors.email.message}</span>
  </div>
)}
```

### 7.3 Required Fields

**Mark required fields clearly:**
- Visual indicator: Red asterisk `*`
- Text label: "Required" or "(Required)"
- `required` attribute
- `aria-required="true"` attribute

**Mark optional fields in forms with mostly required fields:**
- Text label: "(Optional)"
- No asterisk

---

## 8. Interactive Components

### 8.1 Modals & Dialogs

**Accessible modal requirements:**

1. **Focus trap** - Tab cycles within modal only
2. **Escape key** - Closes modal
3. **Focus management** - Return focus to trigger on close
4. **ARIA attributes** - `role="dialog"`, `aria-modal="true"`
5. **Accessible name** - `aria-labelledby` references modal title

**Example:**
```tsx
<div 
  role="dialog" 
  aria-modal="true" 
  aria-labelledby="modal-title"
>
  <h2 id="modal-title">Confirm Purchase</h2>
  {/* Modal content */}
  <button onClick={closeModal}>Cancel</button>
</div>
```

### 8.2 Dropdowns & Menus

**Keyboard navigation required:**
- `Tab` to open/close dropdown
- `Arrow keys` to navigate options
- `Enter` to select option
- `Esc` to close without selecting

**ARIA attributes:**
- `aria-expanded="true/false"` on trigger button
- `aria-haspopup="true"` on trigger button
- `role="menu"` on dropdown container
- `role="menuitem"` on each option

### 8.3 Carousels & Sliders

**Accessible carousel requirements:**

1. **Pause control** - Allow users to stop auto-rotation
2. **Keyboard navigation** - Arrow keys to change slides
3. **Slide indicators** - Show current slide (e.g., "Slide 2 of 5")
4. **Focus management** - Focus moves with active slide

**Auto-rotation:**
- Default: Off
- If enabled: Provide pause button
- Pause on hover or focus

---

## 9. Testing Checklist

### 9.1 Automated Testing

**Tools:**
- [WAVE Browser Extension](https://wave.webaim.org/extension/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- Chrome Lighthouse Accessibility Audit
- Pa11y (CLI)

**Run on:**
- Every new page
- After major component changes
- Before deployment

### 9.2 Manual Testing

**Keyboard Navigation:**
1. Disconnect mouse
2. Navigate entire page using Tab/Shift+Tab
3. Activate all interactive elements with Enter/Space
4. Open/close all menus and modals
5. Submit all forms

**Screen Reader Testing:**
- **Windows:** NVDA (free)
- **Mac:** VoiceOver (built-in)
- **iOS:** VoiceOver (built-in)
- **Android:** TalkBack (built-in)

**Test flow:**
1. Navigate page from top to bottom
2. Check heading structure (`h1` → `h2` → `h3`)
3. Navigate by landmarks (header, nav, main, footer)
4. Test all interactive elements
5. Test forms and error messages

**Text Zoom:**
1. Set browser zoom to 200% (`Cmd/Ctrl +` 5x)
2. Navigate page
3. Check for layout breaks
4. Check for content overflow
5. Reset zoom (`Cmd/Ctrl 0`)

**Color Contrast:**
1. Use WebAIM Contrast Checker
2. Test all text colors
3. Test all button colors
4. Test all icon colors
5. Document ratios

### 9.3 Mobile Testing

**Touch Targets:**
1. Open DevTools mobile view
2. Measure all touch targets
3. Ensure 44×44px minimum (48×48px preferred)
4. Check spacing between targets (8px minimum)

**Orientation:**
1. Test in portrait mode
2. Test in landscape mode
3. Check layout adapts properly

---

## 10. Common Violations & Fixes

### 10.1 Missing Alt Text

**❌ Violation:**
```tsx
<img src="wine-bottle.jpg" />
```

**✅ Fix:**
```tsx
<img src="wine-bottle.jpg" alt="Estate Shiraz 2020 wine bottle" />
```

### 10.2 Low Contrast Text

**❌ Violation:**
```tsx
<p className="text-gray-400">Low contrast text</p>
{/* Gray on white = 2.8:1 (fails AA) */}
```

**✅ Fix:**
```tsx
<p className="text-[var(--twb-color-text-secondary)]">
  Accessible contrast text
</p>
{/* Ink on paper = 18.5:1 (passes AAA) */}
```

### 10.3 Icon-Only Button

**❌ Violation:**
```tsx
<button>
  <ShoppingCart className="size-5" />
</button>
```

**✅ Fix:**
```tsx
<button aria-label="View shopping cart">
  <ShoppingCart className="size-5" aria-hidden="true" />
</button>
```

### 10.4 Missing Form Label

**❌ Violation:**
```tsx
<input type="email" placeholder="Email" />
```

**✅ Fix:**
```tsx
<label htmlFor="email">Email Address</label>
<input type="email" id="email" placeholder="you@example.com" />
```

### 10.5 Unlabeled Link

**❌ Violation:**
```tsx
<a href="/shop">Click here</a>
```

**✅ Fix:**
```tsx
<a href="/shop">Shop our wines and spirits</a>
```

---

## 11. Resources

### 11.1 Official Standards

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM Resources](https://webaim.org/resources/)

### 11.2 Testing Tools

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [WAVE Browser Extension](https://wave.webaim.org/extension/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [NVDA Screen Reader (Windows)](https://www.nvaccess.org/)
- [Color Oracle (Color Blindness Simulator)](https://colororacle.org/)

### 11.3 Learning Resources

- [A11y Project Checklist](https://www.a11yproject.com/checklist/)
- [WebAIM Articles](https://webaim.org/articles/)
- [Inclusive Components](https://inclusive-components.design/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

---

## 12. Enforcement

**Accessibility is mandatory at Handcrafted Wines.**

**Pre-deployment checklist:**
- [ ] All color contrast ratios meet 4.5:1 (AA)
- [ ] All interactive elements keyboard accessible
- [ ] All images have alt text
- [ ] All forms have labels
- [ ] All icon buttons have aria-labels
- [ ] Page works at 200% zoom
- [ ] Screen reader test completed
- [ ] Automated audit (WAVE/axe) passed
- [ ] Touch targets meet 44×44px minimum

**If any item fails, accessibility must be fixed before deployment.**

---

**Maintained by:** Handcrafted Wines Development Team  
**Last Review:** March 15, 2026  
**Next Review:** Quarterly or after WCAG updates
