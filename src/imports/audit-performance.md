# Audit Performance — Render Performance & Asset Optimization

**Type:** Audit  
**Created:** 2026-03-15  
**Status:** Ready  
**Trigger Word:** `audit performance`

---

## Prompt Purpose

**Objective:** Audit the codebase for performance bottlenecks — identify slow renders, heavy images, large animations, costly CSS effects, excessive re-renders, and assess whether existing or proposed WebGL layers would harm performance. Propose concrete optimizations.

**When to Use:** After adding animations, images, complex components, or WebGL effects. Periodically as a quality gate before releases.

**Reference Guidelines:**
- `/guidelines/performance.md`
- `/guidelines/design-tokens/animations.md`
- `/guidelines/build-rules.md`

---

## Workflow Steps

### Step 1: Component Render Analysis

Scan all `.tsx` files for render performance issues:

1. **Inline object/array creation:** Find `style={{}}`, `className={[].join()}`, or object literals passed as props inside JSX — these create new references every render.
2. **Missing memoization:** Large components that receive stable props but re-render frequently should use `React.memo`.
3. **Expensive computations in render:** Find `filter()`, `map()`, `sort()`, `reduce()` operations not wrapped in `useMemo`.
4. **State management scope:** State updates in parent components that trigger unnecessary child re-renders.
5. **Event handler creation:** `onClick={() => ...}` in loops without `useCallback` or extraction to named handlers.

### Step 2: Image & Asset Optimization

1. **Image dimensions:** Find `<img>` and `ImageWithFallback` elements without explicit `width`/`height` attributes — these cause layout shift (CLS).
2. **Image format:** Identify PNG images that could be WebP/AVIF. Identify images > 200KB.
3. **Lazy loading:** Images below the fold should use `loading="lazy"`.
4. **Background images:** CSS `background-image` declarations should use appropriately sized images — no 4K images for 400px containers.
5. **SVG optimization:** Find SVG files > 10KB that could be simplified.
6. **Duplicate assets:** Find identical or near-identical images imported in multiple locations.

### Step 3: Animation & Effect Performance

1. **CSS animations:** Identify animations that trigger layout (animate `width`, `height`, `top`, `left`, `margin`) instead of compositable properties (`transform`, `opacity`).
2. **`backdrop-filter`:** Inventory all `backdrop-filter: blur()` usage — each instance is GPU-intensive. Flag pages with > 5 simultaneous blur elements.
3. **Box shadow complexity:** Find elements with multiple complex box-shadows, especially with `color-mix()` — these are more expensive than token-based shadows.
4. **Animation count:** Pages with > 10 concurrent CSS animations should be flagged for review.
5. **`will-change`:** Verify `will-change` is used judiciously (only on elements that actually animate), not blanket-applied.
6. **Infinite animations:** List all `animation: ... infinite` — these continuously consume GPU resources even when off-screen.

### Step 4: CSS Performance

1. **File sizes:** Cross-reference with CSS audit — files > 400 lines that haven't been split.
2. **Selector complexity:** Find deeply nested selectors (> 4 levels) that slow CSS matching.
3. **Unused CSS:** Identify CSS classes defined but never referenced in any `.tsx` file.
4. **Import chain depth:** Trace `@import` chains — flag any that go > 3 levels deep.
5. **`color-mix()` usage:** While supported, excessive `color-mix()` in frequently-repainted elements can be costly — flag hot-path usage.

### Step 5: WebGL Performance Assessment

1. **Existing WebGL:** For any canvas/WebGL elements found, assess:
   - Frame time (should be < 16ms for 60fps)
   - Memory allocation (textures, buffers)
   - Cleanup on unmount (prevent memory leaks)
2. **Proposed WebGL:** For any planned WebGL additions, evaluate:
   - Would a CSS-only alternative achieve 90% of the visual effect at 10% of the cost?
   - Mobile impact — should it be disabled on viewports < 768px?
   - Battery impact — should it pause when the tab is not visible (`document.hidden`)?
3. **Alternatives:** For each WebGL usage, propose whether CSS gradients, `backdrop-filter`, SVG filters, or CSS `@property` animations could replace it.

### Step 6: Bundle & Import Analysis

1. **Large imports:** Find components that import heavy libraries — suggest code splitting if applicable (note: `React.lazy` is not used in this project; static imports only).
2. **Data file sizes:** Flag data files (`.ts` with arrays/objects) > 100 items that are fully loaded but only partially rendered.
3. **Icon imports:** Verify Phosphor icons use named imports (`import { Icon } from '@phosphor-icons/react'`), not barrel imports.
4. **Duplicate dependencies:** Check for libraries that provide overlapping functionality.

### Step 7: Report

Save report to `/reports/YYYY-MM/performance-audit.md` with:
- Component render issues (by file, with fix suggestion)
- Image optimization opportunities (file, current size, recommendation)
- Animation performance concerns (element, property animated, fix)
- CSS performance issues
- WebGL assessment (existing and proposed)
- Bundle concerns
- Fixes applied
- Remaining issues with priority (P1: visible jank, P2: measurable impact, P3: optimization opportunity)

---

## Success Criteria

- [ ] No inline object/array creation in hot render paths
- [ ] All below-fold images use `loading="lazy"`
- [ ] All animations use compositable properties (`transform`, `opacity`)
- [ ] No page has > 5 concurrent `backdrop-filter: blur()` elements
- [ ] All infinite animations have off-screen or reduced-motion handling
- [ ] WebGL effects have CSS fallbacks and mobile disable conditions
- [ ] Report saved to `/reports/`
