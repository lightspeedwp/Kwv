# BEM Compliance Task List

**Generated From:** `/reports/bem/violations-2026-03-16.md`  
**Created:** 2026-03-16  
**Status:** 🟡 In Progress (21/23 tasks)  
**Health Score:** 67/100

---

## Critical Tasks (6 tasks)

- [ ] **BEM-001:** Add missing CSS variable `--twb-color-bg-white` to `themes-light.css` and `themes-dark.css`
- [ ] **BEM-002:** Replace hardcoded `COLORS.wineRed` with `var(--twb-color-plum)` in `AgeVerificationModal.tsx` line 57
- [ ] **BEM-003:** Replace hardcoded `'white'` with `var(--twb-color-paper)` in `ShopHero.tsx` line 56
- [ ] **BEM-004:** Replace hardcoded `#ffffff` with `var(--twb-color-bg-white)` in `utilities.css` line 210
- [ ] **BEM-005:** Fix WCAG contrast failure in `.twb-badge--premium` (light mode: 3.2:1 → 4.5:1)
- [ ] **BEM-006:** Refactor inline background image in `ShopNewsletter.tsx` to use `<ImageWithFallback>` component

---

## High Priority Tasks (8 tasks)

- [ ] **BEM-007:** Refactor Hero component (`/components/sections/Hero.tsx`) to use BEM structure
  - Replace Tailwind with `.twb-hero`, `.twb-hero--tall`, `.twb-hero__content`, `.twb-hero__title`, `.twb-hero__subtitle`, `.twb-hero__actions`
  - Impact: Used on 15+ pages
  
- [ ] **BEM-008:** Create `.twb-newsletter__pattern` BEM class for Newsletter background pattern
- [ ] **BEM-009:** Create `.twb-slider__arrow` BEM class for ShopCategorySlider arrows
- [ ] **BEM-010:** Create `.twb-map-embed` BEM class for ShopInfoFooter map styling
- [ ] **BEM-011:** Increase Hero overlay opacity default from `0.4` to `0.5` for better contrast
- [ ] **BEM-012:** Add pattern tokens `--twb-pattern-dot-size` and `--twb-pattern-dot-spacing`
- [ ] **BEM-013:** Update `Newsletter.tsx` to use pattern tokens instead of inline `backgroundSize`
- [ ] **BEM-014:** Add JSDoc headers to new BEM classes

---

## Medium Priority Tasks (7 tasks)

- [ ] **BEM-015:** Audit all `/components/shop/*` files for BEM conversion opportunities
- [ ] **BEM-016:** Create BEM documentation guide for new components
- [ ] **BEM-017:** Add remaining H5/H6 typography tokens
- [ ] **BEM-018:** Create `.twb-slider__track` and `.twb-slider__range` for ShopSidebar
- [ ] **BEM-019:** Update utilities.css JSDoc comments with usage examples
- [ ] **BEM-020:** Test all BEM classes in dark mode
- [ ] **BEM-021:** Validate WCAG contrast for all new BEM classes

---

## Completed Tasks (2 tasks)

- [x] **BEM-022:** ~~Initial BEM audit complete~~ (2026-03-16)
- [x] **BEM-023:** ~~Violations report generated~~ (2026-03-16)

---

**Next Actions:**
1. Fix 6 critical hardcoded color violations
2. Refactor Hero component to BEM
3. Add 3 missing CSS variables
4. Run `apply bem` again to re-audit
