# CSS Migration Task List

**Status:** In Progress  
**Priority:** 🔴 High - MANDATORY  
**Started:** March 13, 2026  
**Target Completion:** March 18, 2026 (5 days)  
**Related Report:** `/reports/css-migration-audit-report.md`

---

## Progress Summary

**Overall Progress:** 20% (8/42 components - partially complete)

### By Phase
- **Phase A (Foundation):** 0% (0/3) - Not started
- **Phase B (Layout):** 40% (4/10) - Partially complete (dark mode only)
- **Phase C (Sections):** 40% (4/10) - Partially complete (dark mode only)
- **Phase D (Shop):** 0% (0/8) - Not started
- **Phase E (Pages):** 0% (0/8) - Not started
- **Phase F (Cleanup):** 0% (0/1) - Not started

### By Metric
- Hardcoded colors removed: 50/195 (26%) - Dark mode additions only
- Font values migrated: 0/4 (0%)
- BEM classes added: 0/20 (0%)
- Dark mode support added: 8/42 (19%) - Partial implementation
- COLORS constant removed: 0/49 references (0%)

---

## Phase A: Foundation (Critical - Do First) ⏳

**Estimated Time:** 2 hours  
**Status:** Not Started  
**Priority:** 🔴 CRITICAL

### 1. Typography Component ⏳
**File:** `/components/common/Typography.tsx`  
**Violations:** 1 COLORS reference  
**Estimated Time:** 15 min  
**Status:** Not Started

**Tasks:**
- [ ] Remove `color` prop default: `COLORS.darkGrey` and `COLORS.darkBrown`
- [ ] Migrate to CSS variable: `var(--twb-color-text-primary)`
- [ ] Update JSDoc with migration note
- [ ] Test in light mode
- [ ] Test in dark mode
- [ ] Verify WCAG AA contrast

**Current Code:**
```tsx
color: color || (variant === 'caption' ? COLORS.darkGrey : COLORS.darkBrown)
```

**Target Code:**
```tsx
className={`${variant === 'caption' ? 'text-[var(--twb-color-text-muted)]' : 'text-[var(--twb-color-text-primary)]'} ${className}`}
```

---

### 2. Button Component 🔥
**File:** `/components/common/Button.tsx`  
**Violations:** 16 COLORS references (all variants)  
**Estimated Time:** 60 min  
**Status:** Not Started  
**Priority:** 🔴 CRITICAL

**Tasks:**
- [ ] Remove all inline style objects (lines 37-70)
- [ ] Migrate `primary` variant to `.twb-btn--primary` BEM class
- [ ] Migrate `secondary` variant to `.twb-btn--secondary` BEM class
- [ ] Migrate `outline` variant to `.twb-btn--outline` BEM class
- [ ] Migrate `ghost` variant to `.twb-btn--ghost` BEM class
- [ ] Migrate `hero` variant to `.twb-btn--hero` BEM class
- [ ] Migrate `heroGold` variant to `.twb-btn--hero-gold` BEM class
- [ ] Remove all COLORS imports
- [ ] Ensure BEM classes exist in `/styles/utilities.css`
- [ ] Test all button variants in light mode
- [ ] Test all button variants in dark mode
- [ ] Test hover states
- [ ] Test focus states (keyboard navigation)
- [ ] Test disabled states
- [ ] Update JSDoc documentation
- [ ] Verify accessibility (touch targets, contrast)

**Current Code Pattern:**
```tsx
primary: {
  backgroundColor: COLORS.wineRed,
  color: COLORS.white,
  border: `1px solid ${COLORS.wineRed}`,
}
```

**Target Code:**
```tsx
// Remove style objects entirely
// Use BEM classes in component
<button className={`twb-btn twb-btn--${variant}`}>
```

**BEM Classes Required in utilities.css:**
```css
.twb-btn--primary {
  background-color: var(--twb-color-accent-primary);
  color: white;
  border: 1px solid var(--twb-color-accent-primary);
}
```

---

### 3. Logo Component (All Variants) ⏳
**File:** `/components/common/Logo.tsx`  
**Violations:** 13 COLORS references  
**Estimated Time:** 45 min  
**Status:** Not Started

**Tasks:**
- [ ] Replace SVG fill colors: `COLORS.gold` → `var(--twb-color-gold)`
- [ ] Remove `fontFamily` style props (4 instances)
- [ ] Use `.twb-heading` class for typography instead
- [ ] Update all 4 logo variants:
  - HandcraftedWinesLogo
  - HandcraftedWinesShopLogo
  - HandcraftedWinesExperiencesLogo
  - HandcraftedWinesEventsLogo
  - HandcraftedWinesWineClubLogo
- [ ] Test SVG rendering in light mode
- [ ] Test SVG rendering in dark mode
- [ ] Verify gold color displays correctly
- [ ] Update JSDoc for all variants

**Current Pattern (repeated 4 times):**
```tsx
style={{ color: COLORS.gold, fontFamily: '"Playfair Display", serif' }}
```

**Target Pattern:**
```tsx
className="twb-heading text-[var(--twb-color-gold)]"
// No style prop needed
```

---

## Phase B: Layout Components (Site-Wide Impact) ⏳

**Estimated Time:** 3 hours  
**Status:** 40% Complete (dark mode only, hex colors remain)  
**Priority:** 🔴 CRITICAL

### 4. CorporateHeader 🔥
**File:** `/components/layout/CorporateHeader.tsx`  
**Violations:** 40+  
**Estimated Time:** 90 min  
**Status:** Partial (has dark mode, needs hex replacement)  
**Priority:** 🔴 CRITICAL

**Background Colors:**
- [ ] Line 197: `bg-[#3d2319]` → `bg-[var(--twb-color-bg-tertiary)]`
- [ ] Line 219: `bg-[#DAA520]` → `bg-[var(--twb-color-gold)]`
- [ ] Line 236: `bg-[#2C1810]` → `bg-[var(--twb-color-ink)]`

**Text Colors (25+ instances):**
- [ ] Lines 94, 100, 104, 108: `hover:text-[#DAA520]` → `hover:text-[var(--twb-color-link-hover)]`
- [ ] Lines 119, 125, 131: `text-[#2C1810]` → `text-[var(--twb-color-text-primary)]`
- [ ] Lines 120-128: `hover:text-[#8B0000]` → `hover:text-[var(--twb-color-accent-primary)]`
- [ ] Line 134: `text-[#DAA520]` → `text-[var(--twb-color-gold)]`
- [ ] Lines 141, 156, 169, 173: `hover:text-[#DAA520]` → `hover:text-[var(--twb-color-link-hover)]`
- [ ] Mobile nav (15+ instances): Same pattern

**Border Colors:**
- [ ] Line 197: `border-[#5e382b]` → `border-[var(--twb-border-secondary)]`
- [ ] Line 197: `focus:border-[#DAA520]` → `focus:border-[var(--twb-color-gold)]`
- [ ] Line 236: `border-[#3d2319]` → `border-[var(--twb-border-tertiary)]`

**Testing:**
- [ ] Test all navigation links (desktop + mobile)
- [ ] Test mega menu dropdowns (Brands, Shop, Visit Us, Company)
- [ ] Test search input styling
- [ ] Test "Join Wine Club" button
- [ ] Test mobile hamburger menu
- [ ] Test accordion mobile navigation
- [ ] Verify dark mode toggle works
- [ ] Test keyboard navigation (Tab, Enter, Esc)
- [ ] Verify all colors in light mode
- [ ] Verify all colors in dark mode
- [ ] WCAG AA contrast check
- [ ] Mobile responsive check (375px, 768px, 1024px)

---

### 5. ShopHeader 🔥
**File:** `/components/layout/ShopHeader.tsx`  
**Violations:** 35+  
**Estimated Time:** 90 min  
**Status:** Not Started  
**Priority:** 🔴 CRITICAL

**Background Colors:**
- [ ] Line 50: `bg-[#2C1810]` → `bg-[var(--twb-color-ink)]`
- [ ] Line 58: `bg-[#2C1810]` → `bg-[var(--twb-color-ink)]`
- [ ] Line 125: `bg-[#f9f9f9]` → `bg-[var(--twb-color-bg-secondary)]`
- [ ] Line 244: `bg-[#3d2319]` → `bg-[var(--twb-color-bg-tertiary)]`
- [ ] Line 272: `bg-[#DAA520]` → `bg-[var(--twb-color-gold)]`
- [ ] Line 289: `bg-[#2C1810]` → `bg-[var(--twb-color-ink)]`
- [ ] Line 445: `bg-[#DAA520]` → `bg-[var(--twb-color-gold)]`

**Text Colors (20+ instances):**
- [ ] Line 95: `hover:text-[#DAA520]` → `hover:text-[var(--twb-color-link-hover)]`
- [ ] Line 100: `text-[#2C1810]` → `text-[var(--twb-color-text-primary)]`
- [ ] Lines 102-104: `hover:text-[#8B0000]` → `hover:text-[var(--twb-color-accent-primary)]`
- [ ] More text color replacements (similar pattern to CorporateHeader)

**Border Colors:**
- [ ] Line 244: `border-[#5e382b]` → `border-[var(--twb-border-secondary)]`
- [ ] Line 244: `focus:border-[#DAA520]` → `focus:border-[var(--twb-color-gold)]`
- [ ] Line 289: `border-[#3d2319]` → `border-[var(--twb-border-tertiary)]`

**Add Dark Mode:**
- [ ] Add dark mode classes to all background colors
- [ ] Add dark mode classes to all text colors
- [ ] Test dark mode toggle

**Testing:**
- [ ] Similar testing matrix as CorporateHeader
- [ ] Test cart icon
- [ ] Test category mega menu

---

### 6. ExperiencesHeader
**File:** `/components/layout/ExperiencesHeader.tsx`  
**Violations:** 20+  
**Estimated Time:** 60 min  
**Status:** Not Started

**Similar pattern to CorporateHeader/ShopHeader:**
- [ ] Replace `bg-[#2C1810]` → `bg-[var(--twb-color-ink)]`
- [ ] Replace `bg-[#DAA520]` → `bg-[var(--twb-color-gold)]`
- [ ] Replace all `hover:text-[#DAA520]` → `hover:text-[var(--twb-color-link-hover)]`
- [ ] Add dark mode support
- [ ] Test navigation
- [ ] Test "Book an Experience" CTA

---

### 7. WineClubHeader
**File:** `/components/layout/WineClubHeader.tsx`  
**Violations:** 15+  
**Estimated Time:** 45 min  
**Status:** Not Started

**Tasks:**
- [ ] Line 53: `bg-[#2C1810]` → `bg-[var(--twb-color-ink)]`
- [ ] Line 97: `bg-[#DAA520]` → `bg-[var(--twb-color-gold)]`
- [ ] Line 114: `bg-[#2C1810]` → `bg-[var(--twb-color-ink)]`
- [ ] Line 114: `border-[#3d2319]` → `border-[var(--twb-border-tertiary)]`
- [ ] Line 158: `bg-[#DAA520]` → `bg-[var(--twb-color-gold)]`
- [ ] Add dark mode support
- [ ] Test "Join Now" CTA
- [ ] Test navigation

---

### 8. CheckoutHeader
**File:** `/components/layout/CheckoutHeader.tsx`  
**Violations:** 2  
**Estimated Time:** 15 min  
**Status:** Not Started

**Tasks:**
- [ ] Line 19: `bg-[#2C1810]` → `bg-[var(--twb-color-ink)]`
- [ ] Line 19: `border-[#4A3B32]` → `border-[var(--twb-border-secondary)]`
- [ ] Add dark mode support
- [ ] Test in checkout flow

---

### 9. CorporateFooter ✅
**File:** `/components/layout/CorporateFooter.tsx`  
**Violations:** 0 (already migrated)  
**Estimated Time:** 10 min (review only)  
**Status:** ✅ Complete (Phase 2 - Dark Mode)

**Tasks:**
- [x] Background colors migrated
- [x] Text colors migrated
- [x] Link hover states migrated
- [x] Dark mode support added
- [ ] **Final review** - Verify no hex colors remain

---

### 10. ShopFooter
**File:** `/components/layout/ShopFooter.tsx`  
**Violations:** 12+  
**Estimated Time:** 30 min  
**Status:** Not Started

**Tasks:**
- [ ] Line 22: `bg-[#111]` → `bg-[var(--twb-color-ink)]`
- [ ] Line 47: `bg-[#C19B76]` → `bg-[var(--twb-color-gold)]`
- [ ] Line 47: `text-[#2C1810]` → `text-[var(--twb-color-text-primary)]`
- [ ] Add dark mode support
- [ ] Test multi-column layout
- [ ] Verify contrast on colored backgrounds

---

### 11. ExperiencesFooter
**File:** `/components/layout/ExperiencesFooter.tsx`  
**Violations:** 5+  
**Estimated Time:** 30 min  
**Status:** Not Started

**Tasks:**
- [ ] Line 25: `bg-[#111111]` → `bg-[var(--twb-color-ink)]`
- [ ] Line 26: `text-[#DAA520]` → `text-[var(--twb-color-gold)]`
- [ ] Line 52: `bg-[#C5A059]` → `bg-[var(--twb-color-gold)]`
- [ ] Line 52: `text-[#2C1810]` → `text-[var(--twb-color-text-primary)]`
- [ ] Line 81: `bg-[#8B0000]` → `bg-[var(--twb-color-accent-primary)]`
- [ ] Line 103: `bg-[#111111]` → `bg-[var(--twb-color-ink)]`
- [ ] Add dark mode support
- [ ] Test compass visual element

---

### 12. BreadcrumbsBar
**File:** `/components/layout/BreadcrumbsBar.tsx`  
**Violations:** 1  
**Estimated Time:** 10 min  
**Status:** Not Started

**Tasks:**
- [ ] Line 120: `bg-[#f9f9f9]` → `bg-[var(--twb-color-bg-secondary)]`
- [ ] Add dark mode support
- [ ] Test transparent variant
- [ ] Test solid variant

---

### 13. CheckoutLayout
**File:** `/components/layout/CheckoutLayout.tsx`  
**Violations:** 2  
**Estimated Time:** 15 min  
**Status:** Not Started

**Tasks:**
- [ ] Line 24: `text-[#333333]` → `text-[var(--twb-color-text-primary)]`
- [ ] Line 24: `bg-[#F9F9F9]` → `bg-[var(--twb-color-bg-secondary)]`
- [ ] Add dark mode support
- [ ] Test checkout flow layout

---

### 14. Layout
**File:** `/components/layout/Layout.tsx`  
**Violations:** 1  
**Estimated Time:** 5 min  
**Status:** Not Started

**Tasks:**
- [ ] Line 53: `text-[#333333]` → `text-[var(--twb-color-text-primary)]`
- [ ] Add dark mode support
- [ ] Test main layout wrapper

---

## Phase C: Section Components ⏳

**Estimated Time:** 2 hours  
**Status:** 40% Complete (4/10 - dark mode only)  
**Priority:** MEDIUM

### 15. Hero ✅
**File:** `/components/sections/Hero.tsx`  
**Violations:** 2 COLORS references (white)  
**Estimated Time:** 10 min (review)  
**Status:** ✅ Partial - Dark mode added, COLORS.white remains

**Tasks:**
- [x] Background dark mode added
- [x] Text dark mode added
- [ ] Remove COLORS.white imports (lines 83, 93)
- [ ] Replace with CSS variable or className
- [ ] Final review

**Current:**
```tsx
color={COLORS.white}
```

**Target:**
```tsx
className="text-white dark:text-[var(--twb-color-text-on-dark)]"
```

---

### 16. Newsletter ✅
**File:** `/components/sections/Newsletter.tsx`  
**Violations:** 0 (dark mode added)  
**Estimated Time:** 5 min (review)  
**Status:** ✅ Complete (Phase 2)

**Tasks:**
- [x] Background colors migrated
- [x] Form inputs migrated
- [x] Dark mode support added
- [ ] Final review - Verify no hex colors remain

---

### 17. BrandGrid ✅
**File:** `/components/sections/BrandGrid.tsx`  
**Violations:** 0 (dark mode added)  
**Estimated Time:** 5 min (review)  
**Status:** ✅ Complete (Phase 2)

**Tasks:**
- [x] Gold header colors migrated
- [x] Dark mode support added
- [ ] Final review

---

### 18. LatestNews ✅
**File:** `/components/sections/LatestNews.tsx`  
**Violations:** 0 (dark mode added)  
**Estimated Time:** 5 min (review)  
**Status:** ✅ Complete (Phase 2)

**Tasks:**
- [x] Background colors migrated
- [x] Card colors migrated
- [x] Dark mode support added
- [ ] Final review

---

### 19. HomeEntryPoints
**File:** `/components/sections/HomeEntryPoints.tsx`  
**Violations:** 2  
**Estimated Time:** 15 min  
**Status:** Not Started

**Tasks:**
- [ ] Line 81: `bg-[#C5A059]` → `bg-[var(--twb-color-gold)]`
- [ ] Line 81: `hover:bg-[#b08d4a]` → `hover:bg-[var(--twb-color-link-hover)]`
- [ ] Add dark mode support
- [ ] Test CTA buttons
- [ ] Test grid layout

---

### 20. WineClubCTA
**File:** `/components/sections/WineClubCTA.tsx`  
**Violations:** 4  
**Estimated Time:** 20 min  
**Status:** Not Started

**Tasks:**
- [ ] Line 21: `bg-[#F5F5DC]` → `bg-[var(--twb-color-bg-primary)]`
- [ ] Line 28: Remove `color={COLORS.darkBrown}`
- [ ] Line 38: `bg-[#DAA520]` → `bg-[var(--twb-color-gold)]`
- [ ] Add dark mode support
- [ ] Test bullet points
- [ ] Test CTA section

---

### 21. FAQSection
**File:** `/components/sections/FAQSection.tsx`  
**Violations:** 2  
**Estimated Time:** 15 min  
**Status:** Not Started

**Tasks:**
- [ ] Line 38: `bg-[#F9F9F9]` → `bg-[var(--twb-color-bg-secondary)]`
- [ ] Line 40: Remove `color={COLORS.darkBrown}`
- [ ] Add dark mode support
- [ ] Test accordion functionality
- [ ] Test dark mode accordion arrows

---

### 22. FullWidthSection
**File:** `/components/sections/FullWidthSection.tsx`  
**Violations:** 2  
**Estimated Time:** 15 min  
**Status:** Not Started

**Tasks:**
- [ ] Line 44: `bg-[#2C1810]` → `bg-[var(--twb-color-ink)]`
- [ ] Line 45: `text-[#2C1810]` → `text-[var(--twb-color-text-primary)]`
- [ ] Add dark mode support
- [ ] Test 50/50 split layout
- [ ] Test image + text variants

---

### 23. ContactFollowSection
**File:** `/components/sections/shop/ContactFollowSection.tsx`  
**Violations:** 6  
**Estimated Time:** 20 min  
**Status:** Not Started

**Tasks:**
- [ ] Lines 32, 35, 38: `hover:bg-[#2C1810]` → `hover:bg-[var(--twb-color-ink)]`
- [ ] Lines 32, 35, 38: `hover:border-[#2C1810]` → `hover:border-[var(--twb-color-ink)]`
- [ ] Add dark mode support
- [ ] Test social icon hover states
- [ ] Test contact form

---

### 24. ServiceFeaturesSection
**File:** `/components/sections/shop/ServiceFeaturesSection.tsx`  
**Violations:** 1  
**Estimated Time:** 10 min  
**Status:** Not Started

**Tasks:**
- [ ] Line 17: `bg-[#F9F9F9]` → `bg-[var(--twb-color-bg-secondary)]`
- [ ] Add dark mode support
- [ ] Test feature grid

---

## Phase D: Shop Components

**Estimated Time:** 1.5 hours  
**Status:** Not Started  
**Priority:** MEDIUM

### 25. ProductAddToCart
**File:** `/components/shop/single-product/ProductAddToCart.tsx`  
**Violations:** 4  
**Estimated Time:** 20 min

**Tasks:**
- [ ] Line 116: `bg-[#2C1810]` → `bg-[var(--twb-color-ink)]`
- [ ] Line 116: `hover:bg-[#8B0000]` → `hover:bg-[var(--twb-color-accent-primary)]`
- [ ] Line 126: `bg-[#FDF6E3]` → `bg-[var(--twb-color-bg-tertiary)]`
- [ ] Line 126: `border-[#DAA520]` → `border-[var(--twb-color-gold)]`
- [ ] Add dark mode support
- [ ] Test add to cart button
- [ ] Test subscription toggle
- [ ] Test quantity selector

---

### 26. ProductTabs
**File:** `/components/shop/single-product/ProductTabs.tsx`  
**Violations:** 1  
**Estimated Time:** 10 min

**Tasks:**
- [ ] Line 56: `bg-[#8B0000]` → `bg-[var(--twb-color-accent-primary)]`
- [ ] Add dark mode support
- [ ] Test tab switching
- [ ] Test active tab indicator

---

### 27. OrderSummary
**File:** `/components/shop/checkout/OrderSummary.tsx`  
**Violations:** 2  
**Estimated Time:** 15 min

**Tasks:**
- [ ] Line 59: `bg-[#999999]` → `bg-[var(--twb-color-text-muted)]`
- [ ] Line 102: `bg-[#111111]` → `bg-[var(--twb-color-ink)]`
- [ ] Add dark mode support
- [ ] Test quantity badges
- [ ] Test coupon input
- [ ] Test price calculations

---

### 28. PaymentMethods
**File:** `/components/shop/checkout/PaymentMethods.tsx`  
**Violations:** 1  
**Estimated Time:** 10 min

**Tasks:**
- [ ] Line 158: `bg-[#111111]` → `bg-[var(--twb-color-ink)]`
- [ ] Add dark mode support
- [ ] Test "Place Order" button
- [ ] Test payment method selection

---

### 29. DeliveryMethodSelector
**File:** `/components/shop/checkout/DeliveryMethodSelector.tsx`  
**Violations:** 1  
**Estimated Time:** 10 min

**Tasks:**
- [ ] Line 25: `bg-[#F5F5F5]` → `bg-[var(--twb-color-bg-secondary)]`
- [ ] Add dark mode support
- [ ] Test ship/collect toggle
- [ ] Test active state

---

### 30. Checkbox
**File:** `/components/shop/checkout/Checkbox.tsx`  
**Violations:** 1  
**Estimated Time:** 10 min

**Tasks:**
- [ ] Line 25: `bg-[#111111]` → `bg-[var(--twb-color-ink)]`
- [ ] Line 25: `border-[#111111]` → `border-[var(--twb-color-ink)]`
- [ ] Add dark mode support
- [ ] Test checked state
- [ ] Test unchecked state
- [ ] Test keyboard interaction

---

### 31. AccountCreation
**File:** `/components/shop/order/AccountCreation.tsx`  
**Violations:** 1  
**Estimated Time:** 10 min

**Tasks:**
- [ ] Line 46: `bg-[#111111]` → `bg-[var(--twb-color-ink)]`
- [ ] Add dark mode support
- [ ] Test "Create account" button

---

### 32. DownloadsSection
**File:** `/components/shop/order/DownloadsSection.tsx`  
**Violations:** 1  
**Estimated Time:** 10 min

**Tasks:**
- [ ] Line 30: `bg-[#333333]` → `bg-[var(--twb-color-ink)]`
- [ ] Add dark mode support
- [ ] Test download button

---

## Phase E: Pages & Utilities

**Estimated Time:** 1 hour  
**Status:** Not Started  
**Priority:** LOW

### 33. AgeVerificationModal
**File:** `/components/common/AgeVerificationModal.tsx`  
**Violations:** 3  
**Estimated Time:** 15 min

**Tasks:**
- [ ] Line 57: Remove `style={{ borderTop: ... }}`, use className
- [ ] Line 59: Remove `color={COLORS.darkBrown}`
- [ ] Line 60: `bg-[#DAA520]` → `bg-[var(--twb-color-gold)]`
- [ ] Add dark mode support
- [ ] Test modal overlay
- [ ] Test button states

---

### 34. BackToTopButton
**File:** `/components/common/BackToTopButton.tsx`  
**Violations:** 3  
**Estimated Time:** 10 min

**Tasks:**
- [ ] Line 50: `bg-[#DAA520]` → `bg-[var(--twb-color-gold)]`
- [ ] Line 50: `text-[#2C1810]` → `text-[var(--twb-color-text-primary)]`
- [ ] Line 50: `hover:text-[#8B0000]` → `hover:text-[var(--twb-color-accent-primary)]`
- [ ] Add dark mode support
- [ ] Test scroll behavior
- [ ] Test button visibility

---

### 35-42. Page Components (8 files)
**Files:** Shop.tsx, ShopBrands.tsx, News.tsx, FAQ.tsx, Brands.tsx, EventsFAQ.tsx, ExperiencesFAQ.tsx  
**Violations:** 1-3 each (all COLORS references)  
**Estimated Time:** 45 min total

**Common Pattern:**
```tsx
// Current
<Typography variant="h1" color={COLORS.darkBrown}>

// Target
<h1 className="twb-heading twb-heading--h1">
```

**Tasks for Each:**
- [ ] Remove all `color={COLORS.*}` props
- [ ] Replace with appropriate CSS variable classes
- [ ] Add dark mode support where needed
- [ ] Test heading styles
- [ ] Verify layout

---

## Phase F: Cleanup & Validation

**Estimated Time:** 30 min  
**Status:** Not Started  
**Priority:** FINAL

### 43. Remove COLORS Constant ⏳
**File:** `/constants/theme.ts`  
**Estimated Time:** 30 min  
**Status:** Not Started

**Tasks:**
- [ ] Verify zero COLORS references remain in codebase
- [ ] Run validation: `grep -r "COLORS\." src/ --include="*.tsx"`
- [ ] Delete `/constants/theme.ts` file
- [ ] Remove all `import { COLORS }` statements (should already be gone)
- [ ] Run final hex color validation
- [ ] Run final inline style validation
- [ ] Update all component JSDoc headers with migration notes
- [ ] Create migration completion report
- [ ] Update Guidelines.md if needed
- [ ] Commit changes with descriptive message

**Validation Commands:**
```bash
# Should all return 0
grep -r "bg-\[#" src/ --include="*.tsx" | wc -l
grep -r "text-\[#" src/ --include="*.tsx" | wc -l
grep -r "COLORS\." src/ --include="*.tsx" | wc -l
```

---

## Blockers & Dependencies

### Current Blockers
None - ready to start

### Dependencies
- ✅ `/styles/themes-variables.css` - Complete
- ✅ `/styles/utilities.css` - BEM classes defined
- ✅ Dark mode system - Implemented
- ⚠️ `/styles/utilities.css` - May need additional BEM button classes

**Action Required:**
Verify BEM button classes exist for all variants before migrating Button component.

---

## Notes & Decisions

### Design Decisions

1. **Dark Mode Strategy:** Use explicit `dark:` classes where needed, CSS variables where automatic
2. **Button Migration:** Full BEM class approach (remove all inline styles)
3. **Typography Migration:** Remove color prop, use CSS variable classes
4. **Logo Migration:** Keep SVG approach, replace COLORS with CSS variables

### Edge Cases

1. **Gradient Overlays:** Hero component uses `linear-gradient` - keep this pattern
2. **SVG Fills:** Logo component - ensure fills work with CSS variables
3. **Conditional Backgrounds:** FullWidthSection variant logic - maintain functionality
4. **Image Overlays:** Ensure dark mode doesn't break image readability

### Patterns Discovered

1. **Hover States:** Consistent pattern: `hover:text-[#DAA520]` → `hover:text-[var(--twb-color-link-hover)]`
2. **Button CTAs:** Gold buttons are site-wide pattern
3. **Dark Headers:** All headers use `#2C1810` (ink color)
4. **Light Sections:** Mix of `#f9f9f9` and `#F5F5DC` (standardize to bg-secondary/primary)

---

## Quick Stats

### Violations by Type
- Hardcoded background colors: 50+
- Hardcoded text colors: 96+
- Hardcoded border colors: 15+
- COLORS constant references: 49
- Inline style objects: 20+
- **Total:** ~230 violations

### Violations by Priority
- Critical (User-facing): 100+ (Headers, Footers, Hero)
- High (Common components): 35+ (Button, Typography, Logo)
- Medium (Sections): 50+ (Newsletter, BrandGrid, etc.)
- Low (Utilities): 45+ (Shop components, Pages)

### Time Estimates
- Phase A (Foundation): 2 hours
- Phase B (Layout): 3 hours
- Phase C (Sections): 2 hours
- Phase D (Shop): 1.5 hours
- Phase E (Pages): 1 hour
- Phase F (Cleanup): 30 min
- **Total:** 10 hours (includes testing)

---

## Success Criteria

- [ ] Zero hardcoded hex colors in React components
- [ ] Zero inline font values (except via CSS variables)
- [ ] COLORS constant deleted from codebase
- [ ] 100% dark mode support across all components
- [ ] All WCAG AA contrast ratios maintained
- [ ] BEM classes used where appropriate
- [ ] WordPress theme.json ready for future migration
- [ ] Documentation updated
- [ ] Visual regression tests passed
- [ ] No console errors or warnings
- [ ] Code review approved

---

## Next Steps

1. ✅ **Audit Complete** - Report generated
2. ✅ **Task List Created** - This document
3. ⏭️ **Begin Phase A** - Typography → Button → Logo
4. ⏭️ **Continue Phase B** - Complete headers/footers
5. ⏭️ **Phase C Review** - Review partially complete sections
6. ⏭️ **Phases D-F** - Complete remaining components
7. ⏭️ **Final Validation** - Run all validation commands
8. ⏭️ **Completion Report** - Document final state

---

**Task List Status:** ✅ **COMPLETE**  
**Ready to Execute:** Phase A - Foundation  
**Start With:** Typography Component (easiest win - 15 min)  
**Critical Path:** Button Component (most reused - 60 min)
