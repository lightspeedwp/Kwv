# CSS Migration: Hardcoded Values → WordPress-Aligned Variables

**Type:** Implementation Prompt  
**Priority:** 🔴 High  
**Trigger:** `migrate css variables`  
**Estimated Time:** 6-8 hours (full codebase with audit)  
**Created:** March 13, 2026

---

## 🎯 Objective

Replace ALL inline hex colors, hardcoded font values, and magic numbers with WordPress theme.json-aligned CSS variables and BEM classes across the entire codebase.

**This prompt executes in 3 stages:**
1. **Audit Phase** - Scan codebase and generate report
2. **Planning Phase** - Create prioritized task list
3. **Execution Phase** - Systematic migration (optional - can be run separately)

---

## 📋 Prerequisites

Before starting:

1. ✅ Read `/guidelines/development/wordpress-css-variables.md`
2. ✅ Review `/styles/themes-variables.css` for available variables
3. ✅ Review `/styles/utilities.css` for available BEM classes
4. ✅ Understand dark mode requirements from `/guidelines/design-tokens/dark-light-mode.md`

---

## 🔍 STAGE 1: Audit Phase (EXECUTE FIRST)

### Step 1.1: Scan Entire Codebase

**Objective:** Find ALL hardcoded values in the codebase.

**Search Patterns:**

1. **Inline Background Colors:**
   ```bash
   bg-\[#[0-9a-fA-F]{3,6}\]
   ```

2. **Inline Text Colors:**
   ```bash
   text-\[#[0-9a-fA-F]{3,6}\]
   ```

3. **Inline Border Colors:**
   ```bash
   border-\[#[0-9a-fA-F]{3,6}\]
   ```

4. **Style Objects with Colors:**
   ```bash
   style={{.*color.*}}
   style={{.*background.*}}
   ```

5. **Hardcoded Font Sizes:**
   ```bash
   text-\[[0-9]+px\]
   style={{.*fontSize.*}}
   ```

6. **Hardcoded Font Families:**
   ```bash
   font-\[['"].*['"]\]
   style={{.*fontFamily.*}}
   ```

7. **Hardcoded Font Weights:**
   ```bash
   style={{.*fontWeight.*}}
   ```

8. **Legacy COLORS Constant:**
   ```bash
   COLORS\.[a-zA-Z]+
   ```

### Step 1.2: Categorize Findings

**Categories:**
- **Critical** - User-facing components (headers, footers, hero sections)
- **High** - Common components (buttons, cards, forms)
- **Medium** - Section components (newsletter, brand grid)
- **Low** - Utility pages (legal, 404, etc.)

### Step 1.3: Count Occurrences

Track metrics:
- Total hardcoded hex colors
- Total hardcoded font values
- Total inline style objects
- Total COLORS constant references
- Files affected
- Components affected

### Step 1.4: Generate Audit Report

**Create:** `/reports/css-migration-audit-report.md`

**Report Structure:**

```markdown
# CSS Migration Audit Report

**Date:** [Current Date]
**Auditor:** Figma Make AI
**Status:** Complete
**Related Task:** CSS Variable Migration

---

## Executive Summary

[2-3 paragraph overview of findings]

**Key Metrics:**
- Total Violations: [X]
- Files Affected: [X]
- Components Affected: [X]
- Estimated Migration Time: [X] hours

---

## Audit Findings

### 1. Hardcoded Hex Colors

**Total Occurrences:** [X]

#### Background Colors
| File | Line | Current Code | Proposed Variable |
|------|------|--------------|-------------------|
| /components/Hero.tsx | 42 | `bg-[#f5efe4]` | `bg-[var(--twb-color-bg-primary)]` |

#### Text Colors
| File | Line | Current Code | Proposed Variable |
|------|------|--------------|-------------------|

#### Border Colors
| File | Line | Current Code | Proposed Variable |
|------|------|--------------|-------------------|

---

### 2. Hardcoded Font Values

**Total Occurrences:** [X]

#### Font Sizes
| File | Line | Current Code | Proposed Class/Variable |
|------|------|--------------|------------------------|

#### Font Families
| File | Line | Current Code | Proposed Class/Variable |
|------|------|--------------|------------------------|

#### Font Weights
| File | Line | Current Code | Proposed Class/Variable |
|------|------|--------------|------------------------|

---

### 3. Inline Style Objects

**Total Occurrences:** [X]

| File | Line | Current Code | Issue | Proposed Fix |
|------|------|--------------|-------|--------------|

---

### 4. Legacy COLORS Constant

**Total References:** [X]

| File | Line | Current Code | Proposed Variable |
|------|------|--------------|-------------------|

---

## Components Prioritized by Impact

### Critical Priority (User-Facing)
- [ ] /components/layout/CorporateHeader.tsx - [X] violations
- [ ] /components/layout/CorporateFooter.tsx - [X] violations
- [ ] /components/sections/Hero.tsx - [X] violations

### High Priority (Common Components)
- [ ] /components/common/Button.tsx - [X] violations
- [ ] /components/common/Typography.tsx - [X] violations

### Medium Priority (Section Components)
- [ ] /components/sections/Newsletter.tsx - [X] violations
- [ ] /components/sections/BrandGrid.tsx - [X] violations

### Low Priority (Utility Pages)
- [ ] /pages/legal/Terms.tsx - [X] violations

---

## Migration Complexity Analysis

### Easy Wins (< 30 min each)
[Components with < 5 violations]

### Moderate Effort (30-60 min each)
[Components with 5-15 violations]

### High Effort (> 60 min each)
[Components with > 15 violations]

---

## Recommended Migration Order

1. **Phase A: Foundation** (2-3 hours)
   - Common components
   - Typography system
   - Button system

2. **Phase B: Layout** (2-3 hours)
   - Headers
   - Footers
   - Navigation

3. **Phase C: Sections** (2-3 hours)
   - Hero
   - Newsletter
   - Brand grids

4. **Phase D: Pages** (2-3 hours)
   - All page components
   - Shop pages
   - Legal pages

5. **Phase E: Cleanup** (1 hour)
   - Remove COLORS constant
   - Final validation
   - Documentation updates

---

## Risk Assessment

### Low Risk
[Components with good test coverage and simple structure]

### Medium Risk
[Components with complex styling or dependencies]

### High Risk
[Components critical to user flow with complex styling]

---

## Success Criteria

- [ ] Zero hardcoded hex colors in React components
- [ ] Zero inline font values (except via CSS variables)
- [ ] 100% dark mode support
- [ ] All WCAG AA contrast ratios maintained
- [ ] BEM classes used appropriately
- [ ] WordPress theme.json ready
- [ ] Documentation updated

---

## Appendix

### Files Analyzed
[Complete list of all .tsx/.ts files scanned]

### Search Commands Used
[List of grep/search patterns used]

### Variable Mapping Reference
[Quick reference of hex → CSS variable mappings]
```

---

## 🗂️ STAGE 2: Planning Phase (EXECUTE SECOND)

### Step 2.1: Create Master Task List

**Create:** `/tasks/css-migration-task-list.md`

**Task List Structure:**

```markdown
# CSS Migration Task List

**Status:** In Progress
**Priority:** High
**Started:** [Date]
**Target Completion:** [Date + 5 days]

---

## Progress Summary

**Overall Progress:** 0% (0/[X] components)

### By Phase
- Phase A (Foundation): 0% (0/[X])
- Phase B (Layout): 0% (0/[X])
- Phase C (Sections): 0% (0/[X])
- Phase D (Pages): 0% (0/[X])
- Phase E (Cleanup): 0% (0/[X])

### By Metric
- Hardcoded colors removed: 0/[X]
- Font values migrated: 0/[X]
- BEM classes added: 0/[X]
- Dark mode support added: 0/[X]

---

## Phase A: Foundation (Critical - Do First)

### 1. Typography Component
- [ ] Migrate all font-related props to CSS variables
- [ ] Replace inline font sizes with BEM classes
- [ ] Add dark mode support
- [ ] Update JSDoc documentation
- **Violations:** [X] | **Estimated Time:** [X] min

### 2. Button Component
- [ ] Replace all color props with CSS variables
- [ ] Migrate to BEM button classes
- [ ] Ensure dark mode variants work
- [ ] Test all button variants
- **Violations:** [X] | **Estimated Time:** [X] min

[Continue for all foundation components...]

---

## Phase B: Layout Components

### 1. CorporateHeader
- [ ] Replace hardcoded background colors
- [ ] Migrate text colors to CSS variables
- [ ] Update logo colors (if hardcoded)
- [ ] Ensure dark mode toggle works correctly
- **Violations:** [X] | **Estimated Time:** [X] min

[Continue for all layout components...]

---

## Phase C: Section Components

[Section-by-section task lists]

---

## Phase D: Page Components

[Page-by-page task lists]

---

## Phase E: Cleanup & Validation

- [ ] Remove COLORS constant from /constants/theme.ts
- [ ] Remove all unused color imports
- [ ] Run final validation (no hex colors remain)
- [ ] Update all JSDoc headers
- [ ] Create migration completion report
- [ ] Update guidelines if needed

---

## Blockers & Dependencies

### Current Blockers
[List any blocking issues]

### Dependencies
- Requires: `/styles/themes-variables.css` to be complete ✅
- Requires: `/styles/utilities.css` BEM classes ✅
- Requires: Dark mode system implemented ✅

---

## Notes & Decisions

### Design Decisions
[Any decisions made during migration]

### Edge Cases
[Any unusual patterns encountered]

### Future Improvements
[Items for future consideration]
```

### Step 2.2: Create Component-Specific Task Files

For complex components (> 15 violations), create detailed task files:

**Create:** `/tasks/css-migration-[component-name].md`

**Example:** `/tasks/css-migration-header.md`

```markdown
# CSS Migration: CorporateHeader

**Component:** /components/layout/CorporateHeader.tsx
**Violations:** 23
**Estimated Time:** 90 minutes
**Priority:** Critical
**Status:** Not Started

---

## Current State Analysis

### Violations Found

1. **Line 42:** `bg-[#2C1810]`
   - **Type:** Background color
   - **Replace with:** `bg-[var(--twb-color-ink)]`
   - **Dark mode:** `dark:bg-[var(--twb-color-bg-primary)]`

2. **Line 58:** `text-[#DAA520]`
   - **Type:** Text color
   - **Replace with:** `text-[var(--twb-color-gold)]`
   - **Dark mode:** Already adapts via variable

[List all violations...]

---

## Migration Checklist

### Colors
- [ ] Replace header background color (line 42)
- [ ] Replace nav link colors (lines 58, 62, 71)
- [ ] Replace dropdown background (line 103)
- [ ] Replace hover states (lines 89, 95)

### Typography
- [ ] Replace logo font size (line 35)
- [ ] Update nav font sizes (lines 61-72)

### Dark Mode
- [ ] Add dark mode background variant
- [ ] Add dark mode text variants
- [ ] Test theme toggle functionality

### Testing
- [ ] Visual test in light mode
- [ ] Visual test in dark mode
- [ ] Test all interactive states
- [ ] Verify WCAG AA contrast

---

## Before/After Code

### Before
```tsx
<header className="bg-[#2C1810] text-white">
  <nav>
    <a className="text-[#DAA520] hover:text-white">
```

### After
```tsx
<header className="bg-[var(--twb-color-ink)] dark:bg-[var(--twb-color-bg-primary)] text-white dark:text-[var(--twb-color-text-on-dark)]">
  <nav>
    <a className="text-[var(--twb-color-gold)] hover:text-[var(--twb-color-link-hover)]">
```

---

## Completion Criteria

- [x] All hardcoded colors replaced
- [x] All hardcoded fonts replaced
- [x] Dark mode support added
- [x] WCAG AA contrast verified
- [x] Visual regression test passed
- [x] JSDoc updated
```

---

## ⚙️ STAGE 3: Execution Phase (OPTIONAL - Can Run Separately)

### Step 3.1: Component-by-Component Approach

Migrate one component at a time following this order:

1. **Common Components** (Button, Typography) - Most reused
2. **Layout Components** (Header, Footer) - Site-wide impact
3. **Section Components** (Hero, Newsletter) - Page building blocks
4. **Page Components** (Home, About) - Entire pages
5. **Utility Components** - Edge cases

### Step 3.2: Migration Pattern Per Component

For each component:

1. **Read** the component file completely
2. **Identify** all hardcoded values:
   - Hex colors: `#f5efe4`, `#1e1a17`, etc.
   - Font sizes: `48px`, `text-2xl`, etc.
   - Spacing: `padding: '24px'`, etc.
3. **Map** to CSS variables:
   - Colors → `var(--twb-color-*)`
   - Fonts → `var(--twb-font-size-*)` or BEM classes
   - Spacing → `var(--twb-spacing-*)` or Tailwind utilities
4. **Replace** hardcoded values
5. **Add** dark mode support if missing
6. **Test** in both light and dark modes
7. **Commit** with descriptive message

---

## 🎨 Phase 3: Color Migration

### Step 3.1: Background Colors

**Pattern:** `bg-[#hexcode]` → `bg-[var(--twb-color-*)]`

#### Mapping Table

| Old Value | New Variable | Usage |
|-----------|-------------|-------|
| `bg-[#f5efe4]` | `bg-[var(--twb-color-bg-primary)]` | Main backgrounds (paper) |
| `bg-[#faf7f2]` | `bg-[var(--twb-color-bg-secondary)]` | Secondary sections |
| `bg-white` | `bg-white dark:bg-[var(--twb-color-bg-tertiary)]` | Cards/panels |
| `bg-[#2C1810]` | `bg-[var(--twb-color-ink)]` | Dark sections |
| `bg-black` | `bg-black dark:bg-[var(--twb-color-bg-primary)]` | Hero sections |

#### Example Migration

**Before:**
```tsx
<section className="py-20 bg-[#f5efe4]">
  <div className="bg-white p-6">
```

**After:**
```tsx
<section className="py-20 bg-[var(--twb-color-bg-primary)]">
  <div className="bg-white dark:bg-[var(--twb-color-bg-tertiary)] p-6">
```

### Step 3.2: Text Colors

**Pattern:** `text-[#hexcode]` → `text-[var(--twb-color-text-*)]`

#### Mapping Table

| Old Value | New Variable | Usage |
|-----------|-------------|-------|
| `text-[#1e1a17]` | `text-[var(--twb-color-text-primary)]` | Primary text |
| `text-[#2C1810]` | `text-[var(--twb-color-text-primary)]` | Primary text (legacy) |
| `text-gray-600` | `text-[var(--twb-color-text-muted)]` | Muted text |
| `text-[#5a2d3b]` | `text-[var(--twb-color-accent-primary)]` | Accent text |
| `text-[#c8a96b]` | `text-[var(--twb-color-gold)]` | Gold accents |
| `text-[#DAA520]` | `text-[var(--twb-color-gold)]` | Gold (legacy) |

#### Example Migration

**Before:**
```tsx
<h2 className="text-[#2C1810] font-bold">
  <span className="text-[#DAA520]">Gold</span>
</h2>
<p className="text-gray-600">Description</p>
```

**After:**
```tsx
<h2 className="text-[var(--twb-color-text-primary)] font-bold">
  <span className="text-[var(--twb-color-gold)]">Gold</span>
</h2>
<p className="text-[var(--twb-color-text-muted)]">Description</p>
```

### Step 3.3: Border Colors

**Pattern:** `border-[#hexcode]` → `border-[var(--twb-border-*)]`

#### Mapping Table

| Old Value | New Variable |
|-----------|-------------|
| `border-gray-200` | `border-[var(--twb-border-primary)]` |
| `border-[#DAA520]` | `border-[var(--twb-color-gold)]` |
| `border-white/10` | `border-white/10 dark:border-[var(--twb-border-tertiary)]` |

### Step 3.4: Special Colors (Legacy)

These legacy colors need mapping:

| Legacy Color | Hex | New Variable |
|--------------|-----|-------------|
| COLORS.darkBrown | `#2C1810` | `var(--twb-color-ink)` |
| COLORS.gold | `#BFA15F` | `var(--twb-color-gold)` |
| COLORS.burgundy | `#8B0000` | `var(--twb-color-accent-primary)` |
| COLORS.cream | `#F5F5DC` | `var(--twb-color-bg-primary)` |

**Action:** Remove COLORS imports and replace with CSS variables.

---

## ✍️ Phase 4: Typography Migration

### Step 4.1: Font Sizes

**Pattern:** Hardcoded sizes → BEM classes or CSS variables

#### Mapping Table

| Old Value | New Class/Variable | Usage |
|-----------|-------------------|-------|
| `text-4xl` | `twb-heading--h1` | Page titles |
| `text-3xl` | `twb-heading--h2` | Section titles |
| `text-2xl` | `twb-heading--h3` | Subsection titles |
| `text-xl` | `twb-heading--h4` | Card titles |
| `text-base` | `twb-text--body` | Body text |
| `text-sm` | `twb-text--caption` | Small text |
| `text-[48px]` | `var(--twb-font-size-5xl)` | Custom sizes |

#### Example Migration

**Before:**
```tsx
<h1 className="text-4xl md:text-5xl font-bold">
<p className="text-base">
```

**After:**
```tsx
<h1 className="twb-heading twb-heading--h1">
<p className="twb-text twb-text--body">
```

### Step 4.2: Font Families

**Pattern:** Inline font-family → CSS variables or remove (use defaults)

#### Mapping

| Old Value | New Variable |
|-----------|-------------|
| `font-['Playfair Display']` | Remove (use `.twb-heading`) |
| `font-['Inter']` | Remove (use `.twb-text`) |
| `style={{ fontFamily: 'Playfair Display' }}` | `className="twb-heading"` |

### Step 4.3: Font Weights

**Pattern:** Tailwind weights → CSS variables (optional)

| Old Value | New Variable | Keep Tailwind? |
|-----------|-------------|----------------|
| `font-bold` | `font-bold` | ✅ Keep |
| `font-semibold` | `font-semibold` | ✅ Keep |
| `font-normal` | `font-normal` | ✅ Keep |

**Note:** Font weights can remain as Tailwind utilities.

---

## 📦 Phase 5: BEM Class Migration

### Step 5.1: When to Use BEM Classes

Use BEM classes when:
- ✅ Component has a clear semantic pattern (button, card, section)
- ✅ Repeated pattern across multiple files
- ✅ Complex styling that benefits from pre-defined classes

Use Tailwind when:
- ✅ One-off utility styling (flex, grid, gap)
- ✅ Layout properties (margins, padding)
- ✅ Responsive modifiers

### Step 5.2: Button Migration

**Before:**
```tsx
<button className="bg-[#5a2d3b] text-white px-6 py-3 rounded hover:bg-[#8B0000]">
```

**After:**
```tsx
<button className="twb-btn twb-btn--primary">
```

### Step 5.3: Section Migration

**Before:**
```tsx
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-6">
```

**After:**
```tsx
<section className="twb-section twb-section--white">
  <div className="twb-section__container">
    <h2 className="twb-section__title">
```

### Step 5.4: Card Migration

**Before:**
```tsx
<div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
  <h3 className="text-2xl font-bold mb-4">
  <p className="text-gray-600">
```

**After:**
```tsx
<div className="twb-card twb-card--elevated">
  <h3 className="twb-card__title">
  <p className="twb-card__description">
```

---

## 🌓 Phase 6: Dark Mode Support

### Step 6.1: Add Dark Mode Where Missing

Every component should support dark mode. Check for:

```tsx
// ❌ Bad - No dark mode
<div className="bg-white text-black">

// ✅ Good - Explicit dark mode
<div className="bg-white dark:bg-[var(--twb-color-bg-tertiary)] text-[var(--twb-color-text-primary)]">

// ✅ Best - Automatic via CSS variable
<div className="bg-[var(--twb-color-bg-primary)] text-[var(--twb-color-text-primary)]">
```

### Step 6.2: Test Dark Mode

For each migrated component:

1. Open in browser
2. Click theme toggle (sun/moon icon)
3. Verify colors adapt correctly
4. Check contrast (use DevTools)
5. Toggle back to light mode
6. Verify no visual regressions

---

## ✅ Phase 7: Testing & Validation

### Step 7.1: Visual Regression Testing

For each component:

- [ ] Light mode: Matches original design
- [ ] Dark mode: Colors inverted correctly
- [ ] Hover states: Work in both modes
- [ ] Focus states: Visible in both modes
- [ ] Mobile: Responsive in both modes

### Step 7.2: Accessibility Testing

Run contrast checks:

```bash
# Use WebAIM Contrast Checker
https://webaim.org/resources/contrastchecker/

# Check all color combinations:
- Background + Text
- Accent + White
- Gold + Background
- Link + Background
```

**Minimum Requirements:**
- Normal text: **4.5:1** (WCAG AA)
- Large text: **3.0:1** (WCAG AA)
- UI components: **3.0:1** (WCAG AA)

### Step 7.3: Code Validation

After migration, verify:

```bash
# No inline hex colors remain
! grep -r "bg-\[#" src/ --include="*.tsx"
! grep -r "text-\[#" src/ --include="*.tsx"

# No hardcoded font sizes remain
! grep -r "text-\[.*px\]" src/ --include="*.tsx"

# No inline styles with colors
! grep -r "style={{.*color.*}}" src/ --include="*.tsx"
```

---

## 📝 Phase 8: Documentation

### Step 8.1: Update Component JSDoc

Add note to component documentation:

```tsx
/**
 * ComponentName
 * 
 * Description...
 * 
 * Features:
 * - Dark mode support via CSS variables ✅
 * - WordPress theme.json aligned ✅
 * - WCAG AA compliant ✅
 */
```

### Step 8.2: Create Migration Log

Track progress in `/tasks/css-migration-log.md`:

```markdown
## Components Migrated

### 2026-03-13
- ✅ CorporateHeader - Removed 15 hardcoded colors
- ✅ CorporateFooter - Replaced all hex values
- ✅ Hero - Added dark mode support

### Stats
- Components migrated: 3/42
- Hardcoded colors removed: 47
- CSS variables added: 23
- Dark mode support: 100%
```

---

## 🚀 Implementation Order

### Phase A: Foundation (Day 1)
1. Common Components
   - [ ] Button
   - [ ] Typography
   - [ ] Logo
   - [ ] Container

### Phase B: Layout (Day 1-2)
2. Layout Components
   - [ ] CorporateHeader ✅ (partially done)
   - [ ] CorporateFooter ✅ (partially done)
   - [ ] ShopHeader
   - [ ] ExperiencesHeader
   - [ ] WineClubHeader

### Phase C: Sections (Day 2-3)
3. Section Components
   - [ ] Hero ✅ (partially done)
   - [ ] Newsletter ✅ (partially done)
   - [ ] BrandGrid ✅ (partially done)
   - [ ] LatestNews ✅ (partially done)
   - [ ] HomeEntryPoints
   - [ ] WineClubCTA
   - [ ] FAQSection

### Phase D: Shop (Day 3-4)
4. Shop Components
   - [ ] ProductCard
   - [ ] ProductGrid
   - [ ] CartItem
   - [ ] CheckoutForm
   - [ ] OrderSummary

### Phase E: Pages (Day 4-5)
5. Page Components
   - [ ] Home ✅ (partially done)
   - [ ] About
   - [ ] Shop pages
   - [ ] Product detail pages
   - [ ] Experience pages
   - [ ] Legal pages

### Phase F: Cleanup (Day 5-6)
6. Final Cleanup
   - [ ] Remove COLORS constant
   - [ ] Remove unused imports
   - [ ] Lint all files
   - [ ] Final accessibility audit
   - [ ] Update documentation

---

## 🎯 Acceptance Criteria

Migration is complete when:

- ✅ **Zero hardcoded hex colors** in React components
- ✅ **Zero inline font values** (except via CSS variables)
- ✅ **100% dark mode support** across all components
- ✅ **All WCAG AA contrast** ratios maintained
- ✅ **BEM classes used** where appropriate
- ✅ **WordPress theme.json ready** for future migration
- ✅ **Documentation updated** with migration notes
- ✅ **Visual regression tests** passed
- ✅ **No console errors** or warnings
- ✅ **Code review approved**

---

## 🔧 Tools & Resources

### Search Commands

```bash
# Find all instances
find src/ -name "*.tsx" -exec grep -l "bg-\[#" {} \;

# Count occurrences
grep -r "bg-\[#" src/ --include="*.tsx" | wc -l

# Replace pattern (use with caution)
sed -i 's/bg-\[#f5efe4\]/bg-[var(--twb-color-bg-primary)]/g' filename.tsx
```

### Browser DevTools

```
1. Inspect Element
2. Check Computed styles
3. Verify CSS variable values
4. Toggle .dark class on <html>
5. Verify colors change
```

### Contrast Checker

https://webaim.org/resources/contrastchecker/

---

## ⚠️ Common Pitfalls

### Pitfall 1: Forgetting Dark Mode

```tsx
// ❌ Bad - Only works in light mode
<div className="bg-white">

// ✅ Good - Works in both modes
<div className="bg-white dark:bg-[var(--twb-color-bg-tertiary)]">
```

### Pitfall 2: Inconsistent Variable Names

```tsx
// ❌ Bad - Wrong variable
<div className="bg-[var(--twb-paper-color)]">

// ✅ Good - Correct variable
<div className="bg-[var(--twb-color-bg-primary)]">
```

### Pitfall 3: Missing BEM Namespace

```css
/* ❌ Bad - Missing prefix */
.btn { }

/* ✅ Good - Has twb- prefix */
.twb-btn { }
```

### Pitfall 4: Breaking Contrast

```tsx
// ❌ Bad - May fail WCAG AA in dark mode
<p className="text-gray-400">

// ✅ Good - Guaranteed WCAG AA
<p className="text-[var(--twb-color-text-muted)]">
```

---

## 📊 Progress Tracking

Create `/tasks/css-migration-progress.md`:

```markdown
# CSS Migration Progress

## Overall Progress: 40%

### By Category
- Common Components: 25% (1/4)
- Layout Components: 40% (2/5)
- Section Components: 50% (4/8)
- Shop Components: 0% (0/6)
- Pages: 15% (1/7)

### By Metric
- Hardcoded colors removed: 47/156 (30%)
- CSS variables added: 23/89 (26%)
- BEM classes added: 12/45 (27%)
- Dark mode support: 8/42 (19%)

## Next Up
1. Complete CorporateHeader migration
2. Complete CorporateFooter migration
3. Migrate ShopHeader
```

---

## 🎬 Example Execution

### Single Component Migration

```bash
# 1. Identify component
TARGET="src/components/sections/Hero.tsx"

# 2. Find hardcoded values
grep -n "bg-\[#\|text-\[#\|style={{" $TARGET

# 3. Open in editor
# ... make changes ...

# 4. Test locally
npm run dev
# ... visual inspection ...

# 5. Validate
grep -n "bg-\[#\|text-\[#" $TARGET  # Should return nothing

# 6. Commit
git add $TARGET
git commit -m "refactor(Hero): migrate to CSS variables and BEM classes

- Replace 8 hardcoded hex colors with CSS variables
- Add dark mode support
- Replace font sizes with BEM classes
- Maintain WCAG AA contrast ratios

Closes #42"
```

---

## 📚 References

- **Guidelines:** `/guidelines/development/wordpress-css-variables.md`
- **CSS Architecture:** `/guidelines/development/css-architecture.md`
- **Color Tokens:** `/guidelines/design-tokens/colors.md`
- **Typography Tokens:** `/guidelines/design-tokens/typography.md`
- **BEM Utilities:** `/styles/utilities.css`
- **Theme Variables:** `/styles/themes-variables.css`

---

## ✅ Completion Checklist

- [ ] All components audited
- [ ] All hardcoded colors replaced
- [ ] All hardcoded fonts replaced
- [ ] BEM classes applied appropriately
- [ ] Dark mode support 100%
- [ ] WCAG AA compliance verified
- [ ] Visual regression tests passed
- [ ] Documentation updated
- [ ] COLORS constant removed
- [ ] Code review approved

---

**Trigger Word:** `migrate css variables`  
**Estimated Time:** 6-8 hours (full codebase with audit)  
**Status:** Ready for execution