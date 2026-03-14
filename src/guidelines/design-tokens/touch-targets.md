# Touch Target Design Tokens

**Category:** Design Tokens  
**Domain:** Touch Targets & Mobile Accessibility  
**Version:** 1.0  
**Last Updated:** 2024-03-13  
**Status:** Active

---

## Overview

The Wire Brand touch target system ensures all interactive elements are accessible on mobile devices. Touch targets must meet WCAG 2.5.5 Level AAA standards (44×44px minimum) for comfortable, accurate interaction.

**Key Requirements:**
- **Minimum size:** 44×44px (WCAG 2.5.5 AAA)
- **Recommended size:** 48×48px (more comfortable)
- **Spacing:** 8px minimum between targets
- **Visual feedback:** Clear tap states
- **Performance:** No 300ms tap delay

---

## Touch Target Specifications

### Minimum Sizes (WCAG 2.5.5)

| Element Type | Minimum Size | Recommended Size | Notes |
|--------------|--------------|------------------|-------|
| Button | 44×44px | 48×48px | Includes padding |
| Link | 44×44px | 48×48px | Increase padding if text is small |
| Icon button | 44×44px | 48×48px | Icon + padding |
| Checkbox | 44×44px total | 48×48px total | Visible checkbox + label area |
| Radio button | 44×44px total | 48×48px total | Visible radio + label area |
| Form input | 44px height | 48px height | Full width acceptable |
| Card (tappable) | 44px height minimum | No minimum | Full card is target |
| Navigation link | 44px height | 56px height | Mobile nav links |

### Visual vs. Touch Target

**Visual element can be smaller than touch target:**

```tsx
// Visual icon is 20px, but touch area is 44px
<button className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center">
  <Search className="h-5 w-5" /> {/* 20px visual */}
</button>
```

---

## Implementation Patterns

### Button Touch Targets

**Icon-only button:**
```tsx
<button className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-[var(--twb-radius-sm)] hover:bg-[var(--twb-color-ink)]/5 active:bg-[var(--twb-color-ink)]/10">
  <Heart className="h-5 w-5 text-[var(--twb-color-plum)]" />
</button>
```

**Text button:**
```tsx
<button className="px-6 py-3 min-h-[44px] bg-[var(--twb-color-plum)] text-white rounded-[var(--twb-radius-button-primary)]">
  Add to Cart
</button>
```

**Small text with extended tap area:**
```tsx
<button className="py-4 px-2 min-h-[44px] text-sm text-[var(--twb-color-vine)] hover:text-[var(--twb-color-plum)]">
  Learn More
</button>
```

### Link Touch Targets

**Inline link in paragraph:**
```tsx
<p>
  Visit our{' '}
  <a
    href="/wine-club"
    className="text-[var(--twb-color-plum)] underline py-2 inline-block"
  >
    Wine Club
  </a>
  {' '}for exclusive offers.
</p>
```

**Navigation link (mobile):**
```tsx
<Link
  to="/wines"
  className="flex items-center justify-between h-14 px-6 text-white hover:bg-white/10"
>
  <span>Wines</span>
  <ChevronRight className="h-5 w-5" />
</Link>
```

**Card link (full card is tappable):**
```tsx
<Link
  to={`/wines/${wine.id}`}
  className="block p-6 min-h-[44px] border border-[var(--twb-border-tertiary)] rounded-twb-md hover:shadow-twb-md transition-shadow"
>
  <img src={wine.image} alt={wine.name} />
  <h3 className="mt-4">{wine.name}</h3>
</Link>
```

### Form Input Touch Targets

**Text input:**
```tsx
<input
  type="text"
  className="w-full h-11 px-4 py-3 border border-[var(--twb-border-tertiary)] rounded-[var(--twb-radius-input)] text-base"
/>
```

**Checkbox with label:**
```tsx
<label className="inline-flex items-center gap-3 cursor-pointer min-h-[44px] py-2">
  <input
    type="checkbox"
    className="h-5 w-5 rounded-twb-xs border-2 border-[var(--twb-border-secondary)] text-[var(--twb-color-plum)]"
  />
  <span>I agree to terms and conditions</span>
</label>
```

**Radio button with label:**
```tsx
<label className="inline-flex items-center gap-3 cursor-pointer min-h-[44px] py-2">
  <input
    type="radio"
    name="shipping"
    className="h-5 w-5 border-2 border-[var(--twb-border-secondary)] text-[var(--twb-color-plum)]"
  />
  <span>Standard Shipping (3-5 days)</span>
</label>
```

---

## Touch Target Spacing

### Minimum Spacing Between Targets

**WCAG requirement:** 8px minimum spacing

**Implementation:**
```tsx
// Button group with adequate spacing
<div className="flex gap-4">
  <button className="min-h-[44px] px-6 py-3">Primary</button>
  <button className="min-h-[44px] px-6 py-3">Secondary</button>
</div>

// Icon buttons with spacing
<div className="flex gap-2">
  <button className="p-3 min-w-[44px] min-h-[44px]">
    <Heart className="h-5 w-5" />
  </button>
  <button className="p-3 min-w-[44px] min-h-[44px]">
    <Share className="h-5 w-5" />
  </button>
</div>
```

### Exception: Segmented Controls

**Attached buttons can have no spacing:**
```tsx
<div className="inline-flex rounded-[var(--twb-radius-sm)] border border-[var(--twb-border-secondary)] overflow-hidden">
  <button className="px-4 py-2 min-h-[44px] border-r border-[var(--twb-border-secondary)]">
    All
  </button>
  <button className="px-4 py-2 min-h-[44px] border-r border-[var(--twb-border-secondary)]">
    Red
  </button>
  <button className="px-4 py-2 min-h-[44px]">
    White
  </button>
</div>
```

---

## Tap State Feedback

### Visual Feedback (Required)

**All interactive elements must provide visual feedback on tap:**

**Background change:**
```tsx
<button className="active:bg-[var(--twb-color-plum)]/90 transition-colors">
  Tap me
</button>
```

**Scale transform:**
```tsx
<button className="active:scale-95 transition-transform">
  Tap me
</button>
```

**Opacity change:**
```tsx
<button className="active:opacity-80 transition-opacity">
  Tap me
</button>
```

**Shadow change:**
```tsx
<button className="shadow-twb-sm active:shadow-twb-inner transition-shadow">
  Tap me
</button>
```

### Tap Feedback Timing

**Duration:** 100-150ms (fast enough to feel responsive)

```tsx
className="transition-all duration-100 active:scale-95"
```

---

## Responsive Touch Target Scaling

### Desktop vs. Mobile Sizing

**Mobile-first approach:**
```tsx
// Mobile: 44px minimum, Desktop: can be smaller if mouse-only
<button className="min-h-[44px] md:min-h-[36px] px-4 py-2">
  Click or tap
</button>
```

**Icon buttons:**
```tsx
// Mobile: 44px, Desktop: 40px
<button className="p-3 min-w-[44px] min-h-[44px] md:p-2 md:min-w-[40px] md:min-h-[40px]">
  <Search className="h-5 w-5" />
</button>
```

---

## Common Touch Target Violations & Fixes

### ❌ Violation 1: Icon Button Too Small

**Problem:**
```tsx
<button className="p-1"> {/* Only 28px total */}
  <X className="h-4 w-4" />
</button>
```

**Fix:**
```tsx
<button className="p-3 min-w-[44px] min-h-[44px]">
  <X className="h-4 w-4" />
</button>
```

### ❌ Violation 2: Inline Link Too Small

**Problem:**
```tsx
<a href="/terms" className="text-xs underline">Terms</a>
{/* Text is 12px, no additional padding */}
```

**Fix:**
```tsx
<a href="/terms" className="text-xs underline py-3 inline-block">Terms</a>
{/* Added vertical padding to increase tap area */}
```

### ❌ Violation 3: Checkbox Without Label Area

**Problem:**
```tsx
<input type="checkbox" className="h-5 w-5" />
<span className="ml-2">Label</span>
{/* Checkbox is only 20px, label not part of target */}
```

**Fix:**
```tsx
<label className="inline-flex items-center gap-2 cursor-pointer min-h-[44px] py-2">
  <input type="checkbox" className="h-5 w-5" />
  <span>Label</span>
</label>
{/* Label extends tap target to 44px+ */}
```

### ❌ Violation 4: Buttons Too Close

**Problem:**
```tsx
<div className="flex gap-1"> {/* 4px spacing */}
  <button>Button 1</button>
  <button>Button 2</button>
</div>
```

**Fix:**
```tsx
<div className="flex gap-4"> {/* 16px spacing */}
  <button>Button 1</button>
  <button>Button 2</button>
</div>
```

---

## Touch Target Testing

### Manual Testing Checklist

- [ ] All interactive elements ≥ 44×44px on mobile
- [ ] Adjacent targets have ≥ 8px spacing
- [ ] Tap feedback is immediate and visible
- [ ] Small text links have extended tap areas
- [ ] Checkboxes/radios include label in tap area
- [ ] Form inputs are ≥ 44px height
- [ ] Icon buttons have adequate padding

### Browser DevTools Testing

**Chrome DevTools:**
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Select mobile device (iPhone, Pixel)
4. Enable "Show rulers" to measure targets
5. Tap elements to verify size and spacing

### Automated Testing

```tsx
// Jest + Testing Library
import { render, screen } from '@testing-library/react';

test('button meets minimum touch target size', () => {
  render(<button>Click me</button>);
  const button = screen.getByRole('button');
  const { height, width } = button.getBoundingClientRect();
  
  expect(height).toBeGreaterThanOrEqual(44);
  expect(width).toBeGreaterThanOrEqual(44);
});
```

---

## Platform-Specific Considerations

### iOS

**Prevents zoom on input focus:**
```tsx
<input
  type="text"
  className="text-base" // 16px minimum prevents iOS zoom
/>
```

**Active state styling:**
```css
/* Disable iOS default tap highlight */
-webkit-tap-highlight-color: transparent;
```

### Android

**Ripple effect (native):**  
Android automatically adds ripple on tap. No additional styling needed.

**Material Design target:** 48×48dp (slightly larger than WCAG)

---

## Accessibility + Touch Targets

### WCAG 2.5.5 Target Size (Level AAA)

**Requirement:** 44×44 CSS pixels minimum

**Exceptions allowed:**
- Inline text links (within paragraph)
- Essential targets (can't be made larger without breaking functionality)
- User agent controlled (browser default controls)

**Our standard:** Meet AAA everywhere possible (no exceptions unless absolutely necessary)

---

## Related Guidelines

- [Buttons](/guidelines/design-tokens/buttons.md) - Button sizing
- [Forms](/guidelines/design-tokens/forms.md) - Form input targets
- [Navigation](/guidelines/design-tokens/navigation.md) - Navigation touch targets
- [WCAG Compliance](/guidelines/accessibility/wcag-compliance.md) - Accessibility standards

---

## Changelog

### Version 1.0 (2024-03-13)
- Touch target minimums established (44×44px WCAG 2.5.5)
- Implementation patterns documented
- Spacing requirements defined (8px minimum)
- Tap state feedback patterns created
- Common violations and fixes documented
- Testing checklist provided
- Platform-specific considerations added

---

**Questions or Issues?**  
Contact the design system team or reference the main [Design Tokens Overview](/guidelines/design-tokens/).
