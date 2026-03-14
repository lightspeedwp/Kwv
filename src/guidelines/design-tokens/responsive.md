# Responsive Design Tokens

**Category:** Design Tokens  
**Domain:** Responsive Design & Breakpoints  
**Version:** 1.0  
**Last Updated:** 2024-03-13  
**Status:** Active

---

## Overview

The Wire Brand responsive system creates fluid, mobile-first experiences that adapt seamlessly across devices. All layouts prioritize mobile usability while progressively enhancing for larger screens.

**Key Principles:**
- Mobile-first development
- Fluid typography and spacing
- Content-driven breakpoints
- Touch-first interactions on mobile
- Hover states on desktop only

---

## Breakpoint System

### Breakpoint Tokens

| Token Name | Min Width | Max Width | Target Device | Usage |
|------------|-----------|-----------|---------------|-------|
| `mobile` (default) | 0px | 767px | Mobile phones | Single column, stacked layouts |
| `md` (tablet) | 768px | 1023px | Tablets | 2-column layouts, larger touch targets |
| `lg` (desktop) | 1024px | 1279px | Small laptops | 3-4 columns, hover states visible |
| `xl` (wide) | 1280px | 1919px | Desktop monitors | Max-width containers, multi-column grids |
| `2xl` (ultra-wide) | 1920px+ | - | Large displays | Extra spacing, limited max-widths |

### Tailwind Breakpoint Classes

```tsx
// Mobile-first: Default styles apply to mobile, then override for larger screens

// Mobile only (no prefix)
className="text-sm p-4 grid-cols-1"

// Tablet and up (md:)
className="md:text-base md:p-6 md:grid-cols-2"

// Desktop and up (lg:)
className="lg:text-lg lg:p-8 lg:grid-cols-3"

// Wide desktop and up (xl:)
className="xl:text-xl xl:p-12 xl:grid-cols-4"

// Ultra-wide (2xl:)
className="2xl:max-w-[1920px] 2xl:mx-auto"
```

---

## Container Widths

### Container Token System

| Container | Mobile | Tablet | Desktop | Wide | Usage |
|-----------|--------|--------|---------|------|-------|
| `container.full` | 100% | 100% | 100% | 100% | Full-width backgrounds |
| `container.site` | 100% | 100% | 1280px | 1440px | Standard content (headers, grids) |
| `container.wide` | 100% | 100% | 1280px | 1280px | Visual-heavy sections |
| `container.content` | 100% | 90% | 960px | 960px | Text-heavy content (60-80 char line length) |
| `container.narrow` | 100% | 85% | 720px | 720px | Forms, single-column content |

### Implementation

```tsx
// Full-width background with constrained content
<section className="w-full bg-[var(--twb-color-paper)]">
  <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
    {/* Content */}
  </div>
</section>

// Content container (text-heavy)
<article className="max-w-[960px] mx-auto px-4 md:px-6">
  {/* Article content */}
</article>

// Narrow container (forms)
<form className="max-w-[720px] mx-auto px-4">
  {/* Form fields */}
</form>
```

---

## Fluid Typography

### Fluid Type Scale (using clamp())

**Responsive typography that scales smoothly between breakpoints:**

| Element | Mobile | Desktop | CSS Implementation |
|---------|--------|---------|-------------------|
| H1 | 32px (2rem) | 72px (4.5rem) | `clamp(2rem, 5vw + 1rem, 4.5rem)` |
| H2 | 28px (1.75rem) | 56px (3.5rem) | `clamp(1.75rem, 4vw + 1rem, 3.5rem)` |
| H3 | 24px (1.5rem) | 40px (2.5rem) | `clamp(1.5rem, 3vw + 0.5rem, 2.5rem)` |
| H4 | 20px (1.25rem) | 32px (2rem) | `clamp(1.25rem, 2.5vw + 0.5rem, 2rem)` |
| H5 | 18px (1.125rem) | 24px (1.5rem) | `clamp(1.125rem, 2vw + 0.5rem, 1.5rem)` |
| Body | 16px (1rem) | 18px (1.125rem) | `clamp(1rem, 1vw + 0.5rem, 1.125rem)` |
| Small | 14px (0.875rem) | 16px (1rem) | `clamp(0.875rem, 0.5vw + 0.5rem, 1rem)` |

### Implementation in globals.css

```css
:root {
  /* Fluid Typography */
  --twb-text-h1: clamp(2rem, 5vw + 1rem, 4.5rem);
  --twb-text-h2: clamp(1.75rem, 4vw + 1rem, 3.5rem);
  --twb-text-h3: clamp(1.5rem, 3vw + 0.5rem, 2.5rem);
  --twb-text-h4: clamp(1.25rem, 2.5vw + 0.5rem, 2rem);
  --twb-text-h5: clamp(1.125rem, 2vw + 0.5rem, 1.5rem);
  --twb-text-body: clamp(1rem, 1vw + 0.5rem, 1.125rem);
  --twb-text-small: clamp(0.875rem, 0.5vw + 0.5rem, 1rem);
}

h1 {
  font-size: var(--twb-text-h1);
}

h2 {
  font-size: var(--twb-text-h2);
}

/* etc. */
```

---

## Fluid Spacing

### Section Spacing

**Vertical padding scales with viewport:**

| Spacing Type | Mobile | Desktop | CSS Implementation |
|--------------|--------|---------|-------------------|
| Section (small) | 48px (3rem) | 80px (5rem) | `clamp(3rem, 5vh + 1rem, 5rem)` |
| Section (medium) | 64px (4rem) | 128px (8rem) | `clamp(4rem, 6vh + 2rem, 8rem)` |
| Section (large) | 96px (6rem) | 160px (10rem) | `clamp(6rem, 8vh + 2rem, 10rem)` |
| Container side padding | 16px (1rem) | 48px (3rem) | `clamp(1rem, 4vw, 3rem)` |
| Grid gap | 16px (1rem) | 32px (2rem) | `clamp(1rem, 2vw, 2rem)` |

### Implementation

```tsx
// Section with fluid vertical padding
<section className="py-[clamp(3rem,5vh+1rem,5rem)] px-[clamp(1rem,4vw,3rem)]">
  {/* Content */}
</section>

// Grid with fluid gap
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[clamp(1rem,2vw,2rem)]">
  {/* Grid items */}
</div>
```

---

## Grid Layouts

### Responsive Grid Patterns

**Product Grid (1 → 2 → 3 → 4 columns):**
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {products.map(product => (
    <ProductCard key={product.id} {...product} />
  ))}
</div>
```

**Content Grid (1 → 2 columns):**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  <div>{/* Column 1 */}</div>
  <div>{/* Column 2 */}</div>
</div>
```

**Asymmetric Grid (1 column → 2/3 + 1/3):**
```tsx
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
  <div className="lg:col-span-2">{/* Main content (2/3) */}</div>
  <div>{/* Sidebar (1/3) */}</div>
</div>
```

---

## Responsive Images

### Image Sizing Strategy

**Full-width responsive:**
```tsx
<img
  src="/wine-bottle.jpg"
  alt="Cabernet Sauvignon"
  className="w-full h-auto"
/>
```

**Constrained aspect ratio:**
```tsx
<div className="aspect-[3/4] overflow-hidden rounded-twb-md">
  <img
    src="/wine-bottle.jpg"
    alt="Cabernet Sauvignon"
    className="w-full h-full object-cover"
  />
</div>
```

**Responsive sizing:**
```tsx
<img
  src="/wine-bottle.jpg"
  alt="Cabernet Sauvignon"
  className="w-full md:w-2/3 lg:w-1/2 h-auto mx-auto"
/>
```

---

## Mobile-Specific Patterns

### Mobile Navigation

**Hamburger menu (mobile only):**
```tsx
<button className="lg:hidden p-2 min-w-[44px] min-h-[44px]">
  <Menu className="h-6 w-6" />
</button>

<nav className="hidden lg:flex items-center gap-6">
  <Link to="/">Home</Link>
  <Link to="/wines">Wines</Link>
  {/* Desktop navigation */}
</nav>
```

### Stacked to Horizontal Layout

**Mobile: Stacked, Desktop: Horizontal:**
```tsx
<div className="flex flex-col md:flex-row gap-4">
  <button className="w-full md:w-auto">Primary</button>
  <button className="w-full md:w-auto">Secondary</button>
</div>
```

### Hide on Mobile/Desktop

```tsx
// Hide on mobile, show on desktop
<div className="hidden lg:block">
  Desktop-only content
</div>

// Show on mobile, hide on desktop
<div className="block lg:hidden">
  Mobile-only content
</div>
```

---

## Touch vs. Mouse Interactions

### Hover States (Desktop Only)

**Apply hover only on devices with hover capability:**

```tsx
// Desktop: hover states visible
// Mobile: no hover (relies on tap feedback)
<button className="lg:hover:bg-[var(--twb-color-plum)]/90 active:bg-[var(--twb-color-plum)]/80">
  Interactive Button
</button>
```

**Media query for hover:**
```css
@media (hover: hover) and (pointer: fine) {
  .card:hover {
    transform: translateY(-4px);
    box-shadow: var(--twb-shadow-card-hover);
  }
}
```

### Touch Feedback (Mobile)

**Always provide active states for touch:**
```tsx
<button className="active:scale-95 transition-transform">
  Tap me
</button>
```

---

## Content Strategy by Breakpoint

### Mobile (0-767px)

**Content priorities:**
- Essential information first
- Single-column layouts
- Stacked elements
- Full-width CTAs
- Minimal text (scannable)

**Hide on mobile:**
- Decorative images
- Long testimonials
- Extra navigation links
- Redundant CTAs

### Tablet (768-1023px)

**Layout adjustments:**
- 2-column grids
- Side-by-side images + text
- Horizontal navigation (if space allows)
- Larger typography
- More white space

### Desktop (1024px+)

**Enhanced experience:**
- Multi-column layouts
- Hover effects
- Mega menus
- Richer imagery
- Expanded content
- Tooltips and popovers

---

## Performance Considerations

### Responsive Images

**Use `srcset` for different device resolutions:**
```tsx
<img
  src="/wine-bottle-800.jpg"
  srcSet="
    /wine-bottle-400.jpg 400w,
    /wine-bottle-800.jpg 800w,
    /wine-bottle-1200.jpg 1200w
  "
  sizes="
    (max-width: 768px) 100vw,
    (max-width: 1024px) 50vw,
    33vw
  "
  alt="Wine bottle"
  className="w-full h-auto"
/>
```

### Lazy Loading

**Defer offscreen images:**
```tsx
<img
  src="/wine-bottle.jpg"
  alt="Wine bottle"
  loading="lazy"
  className="w-full h-auto"
/>
```

---

## Testing Checklist

### Responsive Testing

- [ ] Test at all breakpoints (mobile, tablet, desktop, wide)
- [ ] Verify touch targets ≥ 44px on mobile
- [ ] Check text readability at all sizes
- [ ] Test images scale properly
- [ ] Verify navigation works on mobile and desktop
- [ ] Check forms are usable on small screens
- [ ] Test CTAs are accessible on all devices
- [ ] Verify no horizontal scroll on mobile

### Browser DevTools

**Chrome DevTools responsive mode:**
1. F12 to open DevTools
2. Ctrl+Shift+M for device toolbar
3. Test preset devices (iPhone, Pixel, iPad)
4. Test custom widths (375px, 768px, 1024px, 1440px)
5. Test orientation (portrait/landscape)

---

## Related Guidelines

- [Typography](/guidelines/design-tokens/typography.md) - Fluid type scale
- [Spacing](/guidelines/design-tokens/spacing.md) - Fluid spacing
- [Touch Targets](/guidelines/design-tokens/touch-targets.md) - Mobile touch requirements
- [Navigation](/guidelines/design-tokens/navigation.md) - Responsive navigation

---

## Changelog

### Version 1.0 (2024-03-13)
- Breakpoint system established (mobile, md, lg, xl, 2xl)
- Container widths defined for all breakpoints
- Fluid typography scale created (clamp())
- Fluid spacing system documented
- Responsive grid patterns added
- Mobile-specific patterns documented
- Touch vs. mouse interaction guidelines created
- Performance considerations added

---

**Questions or Issues?**  
Contact the design system team or reference the main [Design Tokens Overview](/guidelines/design-tokens/).
