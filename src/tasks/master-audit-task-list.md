# Master Audit Task List

---
**source_report:** `/reports/master-audit-2026-03-15.md`  
**date_generated:** 2026-03-15  
**trigger:** `audit && process reports`  
**total_tasks:** 26  
**estimated_effort:** 18-24 hours  
**priority_distribution:** 1 Critical, 4 High, 12 Medium, 9 Low
---

## Overview

This task list consolidates all findings from the comprehensive 9-audit quality review. Tasks are organized by implementation phase and priority.

**Overall Health:** 82/100 ⚠️ Good → **Target:** 98/100 ✅ Excellent

---

## 🔴 Phase 1: CSS Migration Sprint (CRITICAL)
**Duration:** 2-3 days  
**Impact:** +13 points overall health (82 → 95)

### Task 1.1: Complete CSS Variable Migration ⚠️ IN PROGRESS
**Priority:** 🔴 Critical  
**Estimated Effort:** 4-6 hours  
**Blocks:** Tokens, CSS, A11y, Styles audits  
**Files Remaining:** 12/14 (2 complete)

**Subtasks:**
- [x] Migrate UnifiedHeader.tsx
- [x] Migrate UnifiedFooter.tsx  
- [ ] Migrate Hero.tsx
- [ ] Migrate FullWidthSection.tsx
- [ ] Migrate Button.tsx
- [ ] Migrate MiniCart.tsx
- [ ] Migrate Home.tsx
- [ ] Migrate ShopHome.tsx
- [ ] Migrate Experiences.tsx
- [ ] Migrate Events.tsx
- [ ] Migrate HandDrawnComponentLibrary.tsx
- [ ] Migrate FullWidthLandingPage.tsx
- [ ] Identify and migrate 2 additional files

**Resources:**
- Migration prompt: `/prompts/css-migration-hardcoded-to-variables.md`
- Tracking doc: `/docs/CSS-MIGRATION-STATUS.md`
- WordPress variables: `/guidelines/development/wordpress-css-variables.md`
- Color tokens: `/guidelines/design-tokens/colors.md`

**Acceptance Criteria:**
- [ ] All hardcoded hex colors replaced with CSS variables
- [ ] Dark mode verified for each migrated file
- [ ] No visual regressions
- [ ] Tracking doc updated

**Impact:**
- Tokens: 72 → 92 (+20)
- CSS: 65 → 90 (+25)
- A11y: 68 → 88 (+20)
- Styles: 50 → 100 (+50)

---

### Task 1.2: Add Color Linting Rules
**Priority:** 🔴 Critical  
**Estimated Effort:** 1 hour  
**Blocks:** Future hardcoded color violations

**Description:** Prevent regression of hardcoded colors after migration.

**Subtasks:**
- [ ] Add Stylelint rule to block hex colors in CSS
- [ ] Add ESLint rule to warn on Tailwind arbitrary color values
- [ ] Add pre-commit hook to check for hardcoded colors
- [ ] Document linting rules in `/guidelines/development/linting.md`

**Acceptance Criteria:**
- [ ] Build fails if hardcoded colors detected
- [ ] Clear error messages guide developers to CSS variables
- [ ] Documented exceptions for special cases (SVG filters, etc.)

---

## 🟠 Phase 2: Accessibility & Sitemap (HIGH PRIORITY)
**Duration:** 3-4 days  
**Impact:** WCAG AA compliance, SEO improvement

### Task 2.1: Add Missing Routes to Sitemap
**Priority:** 🟠 High  
**Estimated Effort:** 1 hour  
**Affects:** Sitemap audit (85 → 95)

**Missing Routes:**
- [ ] `/handdrawn-demo` - Demo component library
- [ ] `/handdrawn-demo/landing-page` - Demo landing page
- [ ] `/privacy` - Privacy policy
- [ ] `/accessibility` - Accessibility statement
- [ ] `/shipping` - Shipping policy
- [ ] `/cookies` - Cookie policy
- [ ] `/returns` - Returns policy (alias)

**Files to Update:**
- `/pages/Sitemap.tsx`
- `/guidelines/architecture/sitemap.md`

**Acceptance Criteria:**
- [ ] All 7 routes added to sitemap page
- [ ] Routes organized in correct sections
- [ ] Links verified working
- [ ] Sitemap guideline updated

---

### Task 2.2: Fix Accessibility Focus Indicators
**Priority:** 🟠 High  
**Estimated Effort:** 2 hours  
**Affects:** A11y audit (after color migration: 88 → 92)

**Components Missing Focus:**
- [ ] Search input expand button (UnifiedHeader.tsx)
- [ ] Mini cart icon button (MiniCart.tsx)
- [ ] Mobile menu items (Sheet component)

**Requirements:**
- Visible focus ring (2px solid, high contrast)
- Color: `var(--twb-color-gold)` or appropriate contrast
- Offset: 2px from element
- Respects `prefers-reduced-motion`

**Acceptance Criteria:**
- [ ] All interactive elements have visible focus
- [ ] Focus indicators meet WCAG 2.4.7 (Focus Visible)
- [ ] Keyboard navigation tested
- [ ] No visual regressions

---

### Task 2.3: Add ARIA Labels for Filters & Sorting
**Priority:** 🟠 High  
**Estimated Effort:** 2 hours  
**Affects:** A11y audit (92 → 95)

**Components to Fix:**
- [ ] Product filter dropdowns - Add `aria-label`
- [ ] Sort controls - Add `aria-sort` and `aria-label`
- [ ] Loading states - Add `aria-live="polite"`
- [ ] Filter chips - Add `aria-label` for remove buttons

**Files:**
- `/components/shop/ProductFilters.tsx` (if exists)
- `/pages/shop/Shop.tsx`
- `/pages/shop/ShopHome.tsx`

**Acceptance Criteria:**
- [ ] All filters have descriptive labels
- [ ] Screen reader announces sort changes
- [ ] Loading states announced to screen readers
- [ ] Tested with NVDA/VoiceOver

---

### Task 2.4: Run Automated Accessibility Testing
**Priority:** 🟠 High  
**Estimated Effort:** 1 hour  
**Depends On:** Tasks 1.1, 2.2, 2.3

**Tools:**
- axe-core DevTools extension
- Lighthouse accessibility audit
- Pa11y automated testing

**Pages to Test:**
- [ ] Homepage
- [ ] Shop pages (all categories)
- [ ] Product detail page
- [ ] Cart & Checkout
- [ ] About pages
- [ ] Experiences pages
- [ ] Contact page

**Acceptance Criteria:**
- [ ] Zero critical or serious issues
- [ ] Lighthouse score ≥ 95
- [ ] axe-core report generated
- [ ] Issues documented and triaged

---

## 🟡 Phase 3: Polish & Performance (MEDIUM PRIORITY)
**Duration:** 2-3 days

### Task 3.1: Split utilities.css File
**Priority:** 🟡 Medium  
**Estimated Effort:** 2 hours  
**Affects:** CSS audit (90 → 95), Performance

**Current:** Single 1200+ line file  
**Target:** Modular files by category

**Proposed Structure:**
```
/styles/utilities/
  ├── typography.css
  ├── layout.css
  ├── components.css
  ├── decorative.css
  └── index.css (imports all)
```

**Acceptance Criteria:**
- [ ] All BEM classes split into logical files
- [ ] Import order maintained (cascade preserved)
- [ ] No visual regressions
- [ ] Build time improved

---

### Task 3.2: Update Guideline Versions
**Priority:** 🟡 Medium  
**Estimated Effort:** 1 hour  
**Affects:** Guidelines audit (92 → 96)

**Guidelines to Update:**
- [ ] `/guidelines/design-tokens/colors.md` - Version 2.0 → 3.0
- [ ] `/guidelines/development/wordpress-css-variables.md` - Version 1.0 → 2.0
- [ ] `/guidelines/accessibility/wcag-compliance.md` - Add contrast testing section
- [ ] `/guidelines/patterns/hero-standards.md` - Update mobile height calculation

**Changes Needed:**
- Version bump in YAML frontmatter
- Last updated date to 2026-03-15
- Document recent changes in changelog section

---

### Task 3.3: Create CSS Migration Guideline
**Priority:** 🟡 Medium  
**Estimated Effort:** 1.5 hours  
**Affects:** Guidelines audit (96 → 98), Future migrations

**Content:**
- Step-by-step migration process
- CSS variable reference table
- Common patterns and anti-patterns
- Testing checklist
- Dark mode verification steps
- Linting setup

**File:** `/guidelines/development/css-migration.md`

**Template:** Use `/guidelines/_templates/guideline-template.md`

---

### Task 3.4: Fix Mobile Touch Targets
**Priority:** 🟡 Medium  
**Estimated Effort:** 1.5 hours  
**Affects:** Responsive audit (90 → 95), A11y

**Components to Fix:**
- [ ] Search icon button - 36×36px → 44×44px
- [ ] Account icon button - 36×36px → 44×44px
- [ ] Theme toggle - 36×36px → 44×44px
- [ ] Mini cart button - Check size
- [ ] Product "Add to Cart" buttons - 38px → 44px tall

**WCAG Requirement:** Minimum 44×44px (or 24×24px with adequate spacing)

**Files:**
- `/components/layout/UnifiedHeader.tsx`
- `/components/shop/cart/MiniCart.tsx`
- `/components/shop/ProductCard.tsx`

---

### Task 3.5: Fix Mobile Demo Page Overflow
**Priority:** 🟡 Medium  
**Estimated Effort:** 1 hour  
**Affects:** Responsive audit (95 → 96)

**Pages:**
- [ ] `/pages/handdrawn-demo/HandDrawnComponentLibrary.tsx` - Code examples overflow
- [ ] `/pages/Sitemap.tsx` - Grid too tight on small screens

**Requirements:**
- Horizontal scroll for code blocks
- Responsive grid columns (4 → 2 → 1)
- Touch-friendly spacing
- Test at 320px (iPhone SE)

---

### Task 3.6: Add Horizontal Scroll for Filter Chips
**Priority:** 🟡 Medium  
**Estimated Effort:** 30 minutes  
**Affects:** Responsive audit, UX on mobile

**Issue:** Filter chips cause horizontal page scroll on iPhone SE (320px)

**Solution:**
- Wrap in horizontal scroll container
- Add fade gradients at edges
- Touch-friendly scroll area
- Keyboard accessible

**Files:** `/pages/shop/Shop.tsx` or `/components/shop/ProductFilters.tsx`

---

### Task 3.7: Prepare Product Data Split Strategy
**Priority:** 🟡 Medium  
**Estimated Effort:** 1 hour  
**Affects:** Data audit (future-proofing)

**Current:** `/data/products.ts` at 18.2kB (91% of limit)

**Document Strategy:**
- Option A: Split by category (wines, spirits, cheese)
- Option B: Split by type (red-wines, white-wines, etc.)
- Import/export pattern
- Type safety preservation
- Testing strategy

**Deliverable:** `/docs/DATA-SPLITTING-STRATEGY.md`

**Don't split yet** - just document the plan for when limit reached.

---

### Task 3.8: Extract Shared Product Constants
**Priority:** 🟡 Medium  
**Estimated Effort:** 45 minutes  
**Affects:** Data audit, DRY principles

**Issue:** Duplicate wine tasting notes and descriptions

**Solution:**
- Create `/data/product-constants.ts`
- Extract common tasting note patterns
- Extract shared description snippets
- Reference in product definitions

**Estimated Savings:** 1-2kB file size reduction

---

### Task 3.9: Add BEM Classes to Utility-Only Components
**Priority:** 🟡 Medium  
**Estimated Effort:** 2 hours  
**Affects:** CSS audit (95 → 98)

**Components Missing BEM:**
- [ ] ScrollDownArrow
- [ ] AgeVerificationModal
- [ ] NewsletterSignup
- [ ] ProductCard
- [ ] Breadcrumbs
- [ ] 3 more components

**Requirements:**
- Follow `twb-` namespace
- BEM methodology (Block__Element--Modifier)
- Document in component guideline
- Maintain Tailwind for responsive/state variants

---

### Task 3.10: Fix Heading Hierarchy
**Priority:** 🟡 Medium  
**Estimated Effort:** 1 hour  
**Affects:** A11y audit (95 → 96)

**Issue:** Some pages skip heading levels (H1 → H3)

**Pages to Audit:**
- [ ] All shop category pages
- [ ] Experience detail pages
- [ ] Event detail pages
- [ ] About pages

**Rule:** Never skip levels (H1 → H2 → H3, not H1 → H3)

---

### Task 3.11: Add Lang Attribute to Dynamic Content
**Priority:** 🟡 Medium  
**Estimated Effort:** 30 minutes  
**Affects:** A11y audit (96 → 97)

**Issue:** Some dynamically loaded content missing `lang="en"`

**Components:**
- [ ] Product descriptions (if multilingual planned)
- [ ] News post content
- [ ] User-generated content (reviews, if added)

**Only needed if content language differs from page default.**

---

### Task 3.12: Document CSS Custom Properties in WordPress Guideline
**Priority:** 🟡 Medium  
**Estimated Effort:** 1 hour  
**Affects:** CSS audit, WordPress integration

**Add Section to:** `/guidelines/development/wordpress-css-variables.md`

**Content:**
- Complete CSS variable reference table
- WordPress theme.json mapping
- Export process documentation
- Testing WordPress alignment

---

## 🟢 Phase 4: SEO & Automation (LOW PRIORITY)

### Task 4.1: Generate XML Sitemap
**Priority:** 🟢 Low  
**Estimated Effort:** 2 hours  
**Affects:** Sitemap audit (95 → 98), SEO

**Requirements:**
- `/public/sitemap.xml`
- All 72 routes included
- Change frequency hints
- Priority weighting
- Last modified dates

**Tools:** Consider using `react-router-sitemap` or custom script

---

### Task 4.2: Add JSON-LD Structured Data
**Priority:** 🟢 Low  
**Estimated Effort:** 2 hours  
**Affects:** Sitemap audit (98 → 100), SEO

**Schema Types:**
- Organization (homepage)
- Product (product pages)
- Event (event pages)
- FAQPage (FAQ pages)
- BreadcrumbList (all pages)

**Tool:** Use `schema-dts` TypeScript package

---

### Task 4.3: Automate Token Validation
**Priority:** 🟢 Low  
**Estimated Effort:** 3 hours  
**Affects:** Tokens audit (92 → 95), CI/CD

**Features:**
- Scan for hardcoded hex colors
- Verify CSS variable usage
- Check token naming consistency
- Report coverage percentage

**Integration:** Add to pre-commit hook and CI pipeline

---

### Task 4.4: Set Up Guideline Review Cycle
**Priority:** 🟢 Low  
**Estimated Effort:** 1 hour  
**Affects:** Guidelines audit (98 → 100), Maintenance

**Process:**
- Quarterly guideline review
- Automated "Last Reviewed" date tracking
- Checklist for review process
- Assignment rotation

**Document in:** `/guidelines/repository-standards.md`

---

### Task 4.5: Add Automated CSS Linting
**Priority:** 🟢 Low  
**Estimated Effort:** 2 hours  
**Affects:** CSS audit (98 → 100), Code quality

**Tools:**
- Stylelint with CSS variable rules
- Custom rule for `--twb-` and `--wp-preset-` prefixes
- Integration with VS Code

**Config:** `.stylelintrc.json`

---

### Task 4.6: Create Automated Sitemap Generation Script
**Priority:** 🟢 Low  
**Estimated Effort:** 2 hours  
**Affects:** Sitemap audit (100), Maintenance

**Features:**
- Parse routes.tsx automatically
- Generate Sitemap.tsx component
- Update sitemap guideline
- Run on route changes

**Trigger:** `sitemap` (update existing trigger)

---

### Task 4.7: Add aria-sort to Sort Controls
**Priority:** 🟢 Low  
**Estimated Effort:** 30 minutes  
**Affects:** A11y audit (97 → 98)

**Requirement:** Announce current sort direction to screen readers

**Implementation:**
- `aria-sort="ascending"` or `aria-sort="descending"`
- Update on sort change
- Announce with `aria-live`

---

### Task 4.8: Test at 320px Viewport
**Priority:** 🟢 Low  
**Estimated Effort:** 1 hour  
**Affects:** Responsive audit (96 → 98)

**Device:** iPhone SE (smallest modern viewport)

**Pages to Test:**
- All main pages
- Product detail
- Cart & checkout
- Forms

**Check for:**
- Horizontal scroll
- Text overflow
- Touch target sizes
- Content legibility

---

### Task 4.9: Consider Moving FAQ to Markdown
**Priority:** 🟢 Low  
**Estimated Effort:** 2 hours  
**Affects:** Data audit (88 → 92), Content management

**Rationale:** Large FAQ answers embedded in JS increase file size

**Proposal:**
- Create `/content/faq/` directory
- One .md file per FAQ category
- Use markdown parser
- Dynamic import for better code splitting

**Evaluate:** Only if content team prefers markdown editing

---

## Summary

### By Phase
- **Phase 1 (Critical):** 2 tasks, 5-7 hours, +13 health points
- **Phase 2 (High):** 4 tasks, 6-7 hours, +10 health points
- **Phase 3 (Medium):** 12 tasks, 13-16 hours, +5 health points
- **Phase 4 (Low):** 9 tasks, 15-17 hours, +3 health points

### By Priority
- 🔴 Critical: 2 tasks (1 in progress)
- 🟠 High: 4 tasks
- 🟡 Medium: 12 tasks
- 🟢 Low: 9 tasks

### Impact Projection
- **After Phase 1:** 82 → 95 (+13) ✅ Excellent
- **After Phase 2:** 95 → 98 (+3) ✅ Excellent
- **After Phase 3:** 98 → 99 (+1) ✅ Excellent
- **After Phase 4:** 99 → 100 (+1) ✅ Perfect

---

## Next Actions

1. **Start immediately:** Task 1.1 (CSS Migration) - 12 files remaining
2. **Use prompt:** `/prompts/css-migration-hardcoded-to-variables.md`
3. **Track progress:** Update `/docs/CSS-MIGRATION-STATUS.md` after each file
4. **Test thoroughly:** Verify dark mode and WCAG contrast after each migration

---

**Task List Generated:** 2026-03-15  
**Source Report:** `/reports/master-audit-2026-03-15.md`  
**Master Task List:** `/tasks/task-list.md` (register this file there)
