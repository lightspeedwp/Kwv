# Audit WebGL — Canvas & WebGL Usage Inventory

**Type:** Audit  
**Created:** 2026-03-18  
**Status:** Active  
**Trigger Word:** `audit webgl`  
**Project:** Handcrafted Wines

---

## Prompt Purpose

**Objective:** Inventory all canvas/WebGL usage, assess performance, identify safe integration points for future enhancements, ensure visual effects respect `prefers-reduced-motion` and theme standards.

**When to Use:** Before planning WebGL effects, background elements, or particle systems. Pre-performance audit for visual effects.

**Reference Guidelines:**
- `/guidelines/design-tokens/animations.md`
- `/guidelines/design-tokens/dark-light-mode.md`
- `/guidelines/accessibility/wcag-compliance.md`

**Important:** No `konva` package support. Use raw Canvas API or WebGL directly.

---

## Workflow Steps

### Step 1: Existing Canvas/WebGL Inventory

Scan codebase for:

1. **Canvas elements:** Search for `<canvas` in all `.tsx` files
2. **WebGL contexts:** Search for `getContext('webgl')`, `getContext('2d')`, `getContext('webgl2')`
3. **Animation libraries:** Search for Three.js, PixiJS, p5.js imports
4. **CSS alternatives:** Identify existing visual effects with CSS (gradients, `backdrop-filter`, `filter`)
5. **Shader usage:** Search for GLSL shader strings

**Current Status:** Handcrafted Wines currently has ZERO WebGL/Canvas usage (all effects CSS-based).

### Step 2: Performance Impact Assessment (Future)

For any future canvas/WebGL:

1. **Frame rate:** Runs on `requestAnimationFrame`? Throttled?
2. **Memory:** Textures, buffers properly disposed on unmount?
3. **Resize:** Responds to `window.resize` without leaking listeners?
4. **Mobile:** Disabled or simplified on < 768px viewports?
5. **GPU load:** Particle count, shader passes, geometry vertices

### Step 3: Safe Integration Points

Recommend locations where WebGL could enhance hand-drawn aesthetic:

1. **Hero backgrounds:** Subtle animated organic textures, paper grain animation (MUST NOT compete with text readability)
2. **Section transitions:** Smooth organic transitions between sections
3. **Accent elements:** Small canvas-based organic flourishes, vineyard particles
4. **Loading states:** Paper texture shimmer, wine pour animation
5. **Interactive elements:** Hover-triggered organic ripple effects

**Performance Budget:** Max 4ms frame time impact (leaves 12ms for other rendering)

**For Each Recommendation:**
- **CSS Fallback:** What CSS-only alternative renders when WebGL unavailable?
- **Disable Conditions:** `prefers-reduced-motion: reduce`, low-power devices, mobile viewports

### Step 4: Accessibility & Motion Compliance

1. **`prefers-reduced-motion`:** All canvas animations MUST check media query and stop/reduce to static
2. **`prefers-color-scheme`:** WebGL effects MUST respect theme — read CSS variables for color palette
3. **Focus management:** Canvas elements must not trap keyboard focus — `tabIndex` and `aria-hidden="true"` for decorative
4. **Screen reader:** Decorative canvases hidden from assistive tech
5. **Seizure safety:** No effects flash > 3 times/second (WCAG 2.3.1)

### Step 5: Handcrafted Wines WebGL Opportunities

**Potential Use Cases:**
1. **Paper texture animation:** Subtle grain movement on backgrounds (CSS currently sufficient)
2. **Vineyard particles:** Floating organic particles on hero (CSS `transform` + `opacity` preferred)
3. **Wine pour animation:** Product detail page effect (consider CSS first)
4. **Organic noise background:** Behind hero content (SVG pattern with CSS animation sufficient)

**Recommendation:** **CSS-first approach.** Current hand-drawn aesthetic achieves goals without WebGL complexity. Reserve WebGL for:
- Interactive wine label viewer (future feature)
- 3D bottle visualization (future feature)
- Complex data visualizations (harvest timeline, vineyard map)

### Step 6: Report

Save to `/reports/webgl/webgl-audit-YYYY-MM-DD.md` with current inventory, recommendations, and integration strategy.

---

## Success Criteria

- [ ] Complete inventory of all canvas/WebGL usage
- [ ] Performance budget defined for future additions
- [ ] Safe integration points identified with CSS fallbacks
- [ ] All effects (current/future) respect `prefers-reduced-motion` and theme
- [ ] No seizure-risk flash rates
- [ ] Report saved to `/reports/webgl/`

---

## Handcrafted Wines Decision: CSS-First

**Rationale:**
- Hand-drawn aesthetic achieved with CSS/SVG
- Performance budget conservative (mobile users)
- Complexity not justified for current features
- Accessibility easier with CSS
- Theme switching simpler with CSS variables

**Future WebGL Candidates:**
- ✅ Interactive wine bottle 3D viewer
- ✅ Vineyard terrain visualization
- ✅ Harvest data visualization
- ❌ Background particles (CSS sufficient)
- ❌ Paper texture (CSS/SVG sufficient)
- ❌ Section transitions (CSS sufficient)

---

**Maintained by:** Handcrafted Wines Development Team  
**Last Updated:** 2026-03-18  
**Related Prompts:** `audit performance`, `audit animations`
