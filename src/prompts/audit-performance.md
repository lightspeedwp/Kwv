# Audit Performance — Render Performance & Asset Optimization

**Type:** Audit  
**Created:** 2026-03-18  
**Status:** Active  
**Trigger Word:** `audit performance`  
**Project:** Handcrafted Wines

---

## Prompt Purpose

**Objective:** Audit the Handcrafted Wines codebase for performance bottlenecks — identify slow renders, heavy images, large animations, costly CSS effects, excessive re-renders, and assess WebGL particle effects performance. Propose concrete optimizations.

**When to Use:** After adding animations, images, complex components, or WebGL effects. Periodically as a quality gate before releases.

**Reference Guidelines:**
- `/guidelines/design-tokens/animations.md`
- `/guidelines/development/file-organization.md`

---

## Workflow Steps

### Step 1: Component Render Analysis

Scan all `.tsx` files for render performance issues:

1. **Inline object/array creation:** Find `style={{}}`, `className={[].join()}`, or object literals passed as props inside JSX — these create new references every render
2. **Missing memoization:** Large components (ProductCard, ExperienceCard, TeamMember) that receive stable props but re-render frequently should use `React.memo`
3. **Expensive computations in render:** Find `filter()`, `map()`, `sort()`, `reduce()` operations not wrapped in `useMemo`:
   - Product filtering in shop pages
   - News post sorting
   - FAQ filtering
4. **State management scope:** Cart state updates triggering unnecessary re-renders in non-cart components
5. **Event handler creation:** `onClick={() => ...}` in loops without `useCallback` or extraction to named handlers

**Priority Components to Check:**
- ProductCard (rendered in grids of 12-17 items)
- MiniCart (updates frequently)
- Cart (quantity controls, remove item)
- ShopSidebar (filter state)
- UnifiedHeader (search, cart count)

### Step 2: Image & Asset Optimization

1. **Image dimensions:** Find `<img>` and `ImageWithFallback` elements without explicit `width`/`height` attributes — causes CLS
2. **Image format:** Identify product images that could benefit from WebP/AVIF (Unsplash auto-format)
3. **Image sizes:** Check Unsplash URLs have appropriate `w=` parameter:
   - Product cards: `w=600-800`
   - Product detail: `w=1200`
   - Cart thumbnails: `w=400`
   - Hero backgrounds: `w=1920`
   - Team avatars: `w=400`
4. **Lazy loading:** Images below the fold should use `loading="lazy"`:
   - Product grids (first 4 eager, rest lazy)
   - Experience cards (first 3 eager, rest lazy)
   - News posts (all lazy except featured)
   - Team member avatars (all lazy)
5. **Duplicate assets:** Find identical Unsplash images imported in multiple locations
6. **SVG optimization:** Hand-drawn decorative SVGs should be under 10KB each

**Check Files:**
- `/data/products.ts` (17 product images)
- `/data/farmStory.ts` (team avatars, experience images)
- Hero components (background images)
- Decorative components (SVGs)

### Step 3: Animation & Effect Performance

1. **CSS animations:** Identify animations that trigger layout (animate `width`, `height`, `top`, `left`, `margin`) instead of compositable properties (`transform`, `opacity`)
2. **Hand-drawn effects:** Inventory all hand-drawn decorative elements that animate:
   - HandDrawnUnderline
   - BrushStrokeBorder
   - BrushStrokeDivider
   - OrganicBorder
   - ScrollDownArrow animations
3. **Blur effects:** Find `backdrop-filter: blur()` usage — GPU-intensive. Flag pages with > 3 simultaneous blur elements
4. **Box shadow complexity:** Find elements with multiple complex box-shadows (`var(--twb-shadow-*)`)
5. **Animation count:** Pages with > 8 concurrent CSS animations should be flagged
6. **`will-change`:** Verify used judiciously (only on elements that actually animate)
7. **Infinite animations:** List all `animation: ... infinite` — continuously consume GPU resources

**Handcrafted Wines Specific:**
- Decorative flourishes on hover (organic borders, underlines)
- Hero scroll down arrow animation
- Button hover states (shadow transitions)
- Theme toggle animation
- Mobile menu slide-in

### Step 4: CSS Performance

1. **File sizes:** Check all CSS files against 20kB limit per `/guidelines/development/file-organization.md`
2. **Selector complexity:** Find deeply nested selectors (> 4 levels) that slow CSS matching
3. **Unused CSS:** Identify `.twb-*` classes defined but never referenced in any `.tsx` file
4. **Import chain depth:** Trace `@import` chains in `/styles/globals.css` — should be flat (1 level)
5. **Variable resolution:** Excessive `var(var(var()))` nesting can be costly

**CSS Files to Check:**
- `/styles/globals.css` (entry point)
- `/styles/themes.css` (orchestration)
- `/styles/themes-variables.css` (core tokens)
- `/styles/themes-light.css` (light mode)
- `/styles/themes-dark.css` (dark mode)
- `/styles/utilities.css` (BEM classes)

### Step 5: WebGL Performance Assessment (Future)

**Note:** Currently no WebGL in project. This section assesses future integration potential.

1. **Proposed WebGL uses:**
   - Hero background particle effects (homepage, about)
   - Organic noise textures for paper effect
   - Interactive wine label animations
2. **Performance budget:** Maximum acceptable frame time impact: 4ms (leaves 12ms for other rendering)
3. **Mobile strategy:** Should WebGL be disabled on viewports < 768px?
4. **Battery impact:** Should effects pause when tab is not visible (`document.hidden`)?
5. **Alternatives:** CSS-only alternatives:
   - CSS gradients for paper texture
   - SVG filters for organic effects
   - CSS animations for floating elements

**Recommendation:**
- Hero particles: CSS-only approach preferred (use `transform` + `opacity` animations)
- Paper texture: CSS `background-image` with SVG noise pattern
- Wine labels: CSS transforms + shadows sufficient

### Step 6: Bundle & Import Analysis

1. **Large imports:** Find components that import heavy libraries
2. **Data file sizes:** Check `/data/*.ts` files per `/guidelines/development/file-organization.md`:
   - `products.ts`: 17 items ✅ (acceptable)
   - `farmStory.ts`: Mixed content ✅ (acceptable, under 20kB)
   - `newsPosts.ts`: If > 50 posts, consider pagination
3. **Icon imports:** Verify Lucide React icons use tree-shaking:
   ```tsx
   // ✅ Good
   import { ChevronDown, ShoppingCart } from 'lucide-react'
   
   // ❌ Bad
   import * as Icons from 'lucide-react'
   ```
4. **Duplicate dependencies:** Check for overlapping functionality

**Expected Imports:**
- `react-router` (NOT react-router-dom)
- `lucide-react` (icons)
- `motion/react` (animations - use sparingly)

### Step 7: Report

Save report to `/reports/performance/performance-audit-YYYY-MM-DD.md` with:

```markdown
# Performance Audit - Handcrafted Wines

**Date:** YYYY-MM-DD  
**Scope:** Full codebase  
**Status:** [Complete/In Progress]

## Executive Summary
- **Health Score:** [0-100]
- **Component render issues:** [count]
- **Image optimization opportunities:** [count]
- **Animation performance concerns:** [count]
- **CSS performance issues:** [count]
- **Bundle concerns:** [count]

## Component Render Issues
[List by file with fix suggestion]

## Image Optimization
[List file, current size/params, recommendation]

## Animation Performance
[List element, property animated, performance impact, fix]

## CSS Performance
[List issues, recommendations]

## WebGL Assessment
[Current: none | Proposed: recommendations with fallbacks]

## Bundle Analysis
[Import issues, data file sizes, optimization opportunities]

## Fixes Applied
[List all modifications made]

## Remaining Issues
[List with priority: P1 (visible jank), P2 (measurable impact), P3 (optimization opportunity)]

## Recommendations
[Next steps, component updates, optimization strategies]
```

---

## Success Criteria

- [ ] No inline object/array creation in hot render paths (ProductCard, Cart, MiniCart)
- [ ] All below-fold images use `loading="lazy"` (product grids, news posts)
- [ ] All animations use compositable properties (`transform`, `opacity`)
- [ ] No page has > 3 concurrent `backdrop-filter: blur()` elements
- [ ] All infinite animations have `prefers-reduced-motion` handling
- [ ] All Unsplash images have appropriate `w=` sizing parameter
- [ ] All CSS files under 20kB limit
- [ ] Report saved to `/reports/performance/`

---

## Performance Budget (Handcrafted Wines)

**Target Metrics:**
- **First Contentful Paint (FCP):** < 1.8s
- **Largest Contentful Paint (LCP):** < 2.5s (hero image)
- **Cumulative Layout Shift (CLS):** < 0.1
- **Time to Interactive (TTI):** < 3.8s
- **Total Blocking Time (TBT):** < 300ms

**Component-Specific:**
- ProductCard render: < 16ms (60fps)
- Cart quantity update: < 100ms
- Theme toggle: < 200ms
- Mobile menu animation: < 300ms
- Search filter: < 150ms

---

## Priority Files to Audit

**High Priority (User-facing, frequent renders):**
1. `/components/shop/ProductCard.tsx` (rendered 12-17 times)
2. `/components/shop/cart/MiniCart.tsx` (updates frequently)
3. `/pages/shop/Cart.tsx` (quantity controls)
4. `/components/layout/UnifiedHeader.tsx` (search, cart count)
5. `/components/shop/ShopSidebar.tsx` (filter state)

**Medium Priority:**
6. `/pages/shop/ProductDetail.tsx` (image gallery)
7. `/pages/company/News.tsx` (12 posts)
8. `/pages/experiences/Experiences.tsx` (5 cards)
9. `/components/sections/Hero.tsx` (large background images)
10. `/pages/Homepage.tsx` (multiple sections)

**Low Priority:**
11. `/pages/company/AboutTeam.tsx` (4 team members)
12. `/pages/company/FAQ.tsx` (28 Q&A)
13. Static pages (About, Sustainability, Awards)

---

## Common Performance Patterns (Handcrafted Wines)

### ✅ Good Patterns

```tsx
// Memoized product card
export const ProductCard = React.memo(({ product }: Props) => {
  // ... component
})

// Extracted event handler
const handleAddToCart = useCallback(() => {
  addToCart(product)
}, [product, addToCart])

// Lazy loaded images
<img 
  src={product.image} 
  alt={product.name}
  loading="lazy"
  width={600}
  height={600}
/>

// CSS variable usage (no inline objects)
<div className="twb-card">
```

### ❌ Bad Patterns

```tsx
// Creates new object every render
<div style={{ padding: '16px', borderRadius: '8px' }}>

// Not memoized, re-renders on every parent update
export const ProductCard = ({ product }: Props) => {

// Event handler in loop
products.map(p => (
  <button onClick={() => handleClick(p.id)}>
))

// No lazy loading on below-fold image
<img src={product.image} alt={product.name} />

// Missing width/height (CLS)
<img src={product.image} alt={product.name} loading="lazy" />
```

---

**Maintained by:** Handcrafted Wines Development Team  
**Last Updated:** 2026-03-18  
**Related Prompts:** `audit images`, `audit layout`, `audit webgl`  
**Related Guidelines:** `/guidelines/design-tokens/animations.md`
