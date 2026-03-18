# Light Mode Implementation Audit

**Version:** 1.0  
**Created:** 2026-03-17  
**Trigger:** `audit light mode`  
**Category:** Design System  
**Estimated Duration:** 45-60 minutes

---

## Purpose

Audit all React templates, components, and pages to identify what is blocking a complete light mode implementation. Dark mode is **perfect and must not be touched**. This audit focuses exclusively on ensuring light backgrounds and dark foregrounds work correctly when `[data-theme="light"]` is explicitly set.

---

## Scope

### What to Audit

1. **CSS Theme Files** (`/styles/themes-*.css`)
   - Verify `[data-theme="light"]` selector exists and has complete token definitions
   - Verify all semantic tokens are defined for light mode
   - Check that `:root` defaults match light mode values

2. **Component Files** (All `.tsx` files in `/components/`)
   - Identify hardcoded dark backgrounds (e.g., `bg-black`, `bg-[#1e1a17]`, `bg-gray-900`)
   - Identify hardcoded light text (e.g., `text-white`, `text-[#f5efe4]`)
   - Identify inline `className` conditionals that only handle dark mode
   - Identify missing `bg-[var(--twb-color-bg-*)]` declarations
   - Identify text colors that don't use semantic variables

3. **Page Files** (All `.tsx` files in `/pages/`)
   - Same as component files
   - Special attention to hero sections, full-width sections, and footer areas
   - Check for sections with explicit dark backgrounds

4. **Layout Files** (`/components/layout/*.tsx`)
   - Headers, footers, navigation components
   - Verify they respond to theme changes
   - Check for hardcoded colors

5. **BEM Utilities** (`/styles/utilities.css`)
   - Verify BEM classes use CSS variables, not hardcoded colors
   - Check for classes with `background-color`, `color`, `border-color` that use hex values

---

## Audit Methodology

### Phase 1: CSS Theme System Verification (10 minutes)

**Goal:** Ensure the CSS variable foundation supports both themes

**Tasks:**
1. Read `/styles/themes-light.css`
2. Read `/styles/themes-dark.css`
3. Verify the following selectors exist:
   - `:root` (default light mode)
   - `[data-theme="light"]` (explicit light mode)
   - `.dark` (dark mode - DO NOT MODIFY)
4. Create a comparison table of all tokens:

| Token | `:root` | `[data-theme="light"]` | `.dark` | Status |
|-------|---------|------------------------|---------|--------|
| `--twb-color-bg-primary` | #f5efe4 | ??? | #1e1a17 | ??? |

**Expected Findings:**
- `[data-theme="light"]` selector is **missing** from themes-light.css
- All `:root` tokens are present but not duplicated for explicit light theme selection

**Fix Required:**
```css
/* Add to themes-light.css */
:root,
[data-theme="light"] {
  /* All light mode tokens duplicated here */
}
```

---

### Phase 2: Template-by-Template Component Audit (30 minutes)

**Goal:** Identify every component that has hardcoded dark mode styling

**Audit Pattern:**

For each component file, search for:

1. **Background violations:**
   - `bg-black` → Should be `bg-[var(--twb-color-bg-primary)]`
   - `bg-gray-900` → Should use semantic variable
   - `bg-[#1e1a17]` → Should use semantic variable
   - `bg-[rgb(30,26,23)]` → Should use semantic variable

2. **Text violations:**
   - `text-white` → Should be `text-[var(--twb-color-text-primary)]`
   - `text-gray-100` → Should use semantic variable
   - `text-[#f5efe4]` → Should use semantic variable

3. **Border violations:**
   - `border-white` → Should use semantic variable
   - `border-gray-700` → Should use semantic variable

4. **Conditional class violations:**
   - `${theme === 'dark' ? 'bg-black' : 'bg-white'}` → Both should use variables

**Search Strategy:**

Use file_search with these patterns:
- `bg-black` (case insensitive)
- `bg-gray-9` (finds bg-gray-900, bg-gray-950)
- `bg-\[#` (finds all hex backgrounds)
- `text-white` (case insensitive)
- `text-gray-1` (finds text-gray-100)
- `text-\[#` (finds all hex text colors)
- `border-white`
- `className.*dark.*bg-` (conditional classes)

**Template Categories to Audit:**

| Category | Path | Priority | Estimated Violations |
|----------|------|----------|---------------------|
| Layout Components | `/components/layout/*.tsx` | 🔴 Critical | High (headers, footers) |
| Section Components | `/components/sections/*.tsx` | 🔴 Critical | High (heroes, CTAs) |
| Common Components | `/components/common/*.tsx` | 🟡 High | Medium (buttons, cards) |
| Shop Components | `/components/shop/**/*.tsx` | 🟡 High | Medium |
| Checkout Components | `/components/shop/checkout/*.tsx` | 🟢 Medium | Low |
| Experience Components | `/components/experiences/*.tsx` | 🟢 Medium | Low |
| Decorative Components | `/components/decorative/*.tsx` | ⚪ Low | Very Low (SVG-based) |
| Home Pages | `/pages/*.tsx` | 🔴 Critical | High |
| Company Pages | `/pages/company/*.tsx` | 🟡 High | Medium |
| Shop Pages | `/pages/shop/*.tsx` | 🟡 High | Medium |
| Experience Pages | `/pages/experiences/*.tsx` | 🟢 Medium | Low |

---

### Phase 3: Pattern Analysis (10 minutes)

**Goal:** Categorize violations into fixable patterns

**Common Patterns:**

1. **Hero sections with dark overlays:**
   ```tsx
   // CURRENT (dark-only)
   <div className="bg-black/50">
   
   // NEEDS (theme-aware)
   <div className="bg-[var(--twb-color-bg-primary)]/50">
   ```

2. **Full-width dark sections:**
   ```tsx
   // CURRENT (dark-only)
   <section className="bg-[#1e1a17] text-white">
   
   // NEEDS (theme-aware)
   <section className="bg-[var(--twb-color-bg-inverse)] text-[var(--twb-color-text-on-dark)]">
   ```

3. **White text on colored backgrounds:**
   ```tsx
   // CURRENT (hardcoded)
   <div className="bg-[#5a2d3b] text-white">
   
   // NEEDS (semantic)
   <div className="bg-[var(--twb-color-accent-primary)] text-[var(--twb-color-text-on-accent)]">
   ```

4. **Footer with dark background:**
   ```tsx
   // CURRENT (dark-only)
   <footer className="bg-[#1e1a17]">
   
   // NEEDS (theme-aware)
   <footer className="bg-[var(--twb-color-bg-inverse)]">
   ```

---

### Phase 4: Generate Report (5 minutes)

**Report Structure:**

```markdown
# Light Mode Implementation Audit Report

**Date:** YYYY-MM-DD  
**Auditor:** AI Assistant  
**Scope:** Full codebase (components, pages, styles)

---

## Executive Summary

- **Total Files Audited:** X
- **Files with Violations:** Y
- **Total Violations:** Z
- **Health Score:** (100 - violations) / 100

---

## Critical Findings

### CSS Theme System

**Issue:** Missing `[data-theme="light"]` selector  
**Impact:** Explicit light theme selection doesn't apply light mode variables  
**Fix:** Add selector to `/styles/themes-light.css`  
**Effort:** 5 minutes

---

## Violation Breakdown by Category

### Layout Components (Critical Priority)

| File | Violations | Type | Example |
|------|-----------|------|---------|
| UnifiedHeader.tsx | 3 | bg-black, text-white | Line 45: `bg-black` |
| UnifiedFooter.tsx | 5 | bg-[#1e1a17] | Line 89: `bg-[#1e1a17]` |

### Section Components (Critical Priority)

| File | Violations | Type | Example |
|------|-----------|------|---------|
| Hero.tsx | 2 | bg-black/50 | Line 23 |

... (continue for all categories)

---

## Recommended Fix Strategy

### Wave 1: CSS Foundation (5 min)
- Add `[data-theme="light"]` selector to themes-light.css

### Wave 2: Layout Components (30 min)
- Fix headers, footers, navigation (5 files)

### Wave 3: Critical Sections (45 min)
- Fix hero, CTA, newsletter sections (8 files)

### Wave 4: Remaining Components (2 hours)
- Fix all other components and pages

---

## Token Usage Guide

| Use Case | Incorrect | Correct |
|----------|-----------|---------|
| Main background | `bg-white` | `bg-[var(--twb-color-bg-primary)]` |
| Card background | `bg-white` | `bg-[var(--twb-color-bg-tertiary)]` |
| Dark section bg | `bg-black` | `bg-[var(--twb-color-bg-inverse)]` |
| Primary text | `text-black` | `text-[var(--twb-color-text-primary)]` |
| Text on dark | `text-white` | `text-[var(--twb-color-text-on-dark)]` |
| CTA background | `bg-[#5a2d3b]` | `bg-[var(--twb-color-accent-primary)]` |
| CTA text | `text-white` | `text-[var(--twb-color-text-on-accent)]` |

---

## Next Steps

1. Review and approve fix strategy
2. Execute Wave 1 (CSS foundation)
3. Test light/dark toggle after each wave
4. Document any exceptions (SVG-based decoratives)

---

## Appendix: Detailed Violation List

[Complete file-by-file breakdown with line numbers]
```

---

## Execution Instructions

### Running the Audit

```bash
# User types this trigger:
audit light mode
```

### Audit Steps

1. **Read theme files:**
   ```
   read /styles/themes-light.css
   read /styles/themes-dark.css
   ```

2. **Search for violations across all component files:**
   ```
   file_search content_pattern="bg-black" name_pattern="**/*.tsx"
   file_search content_pattern="bg-gray-9" name_pattern="**/*.tsx"
   file_search content_pattern="bg-\[#" name_pattern="**/*.tsx"
   file_search content_pattern="text-white" name_pattern="**/*.tsx"
   file_search content_pattern="text-\[#" name_pattern="**/*.tsx"
   ```

3. **Categorize results by directory:**
   - `/components/layout/` → Critical
   - `/components/sections/` → Critical
   - `/components/common/` → High
   - `/pages/` → High/Critical

4. **Count violations per file**

5. **Generate report:**
   - Create `/reports/light-mode/audit-YYYY-MM-DD.md`
   - Include all findings with line numbers
   - Provide fix recommendations
   - Estimate effort per wave

6. **Create task list:**
   - Create `/tasks/light-mode-task-list.md`
   - Break down by priority (Critical, High, Medium, Low)
   - Include file paths, line numbers, and specific fixes

---

## Success Criteria

### Audit Complete When:

- ✅ All `.tsx` files scanned for violations
- ✅ All violations categorized by severity
- ✅ Report generated with file paths and line numbers
- ✅ Task list created with actionable fixes
- ✅ Fix waves defined with time estimates

### Light Mode Implementation Complete When:

- ✅ `[data-theme="light"]` selector exists in themes-light.css
- ✅ Zero hardcoded `bg-black` in components
- ✅ Zero hardcoded `text-white` in components (except on colored backgrounds using semantic tokens)
- ✅ All sections use `bg-[var(--twb-color-bg-*)]`
- ✅ All text uses `text-[var(--twb-color-text-*)]`
- ✅ Theme toggle switches between light (paper bg, ink text) and dark (ink bg, paper text)
- ✅ Dark mode still works flawlessly (no changes to `.dark` selector)

---

## Important Constraints

### DO NOT TOUCH

- ❌ **DO NOT modify `.dark` selector in themes-dark.css**
- ❌ **DO NOT change dark mode token values**
- ❌ **DO NOT alter dark mode behavior**
- ❌ **DO NOT touch `prefers-color-scheme` media query**

### ONLY ADD/FIX

- ✅ **ADD** `[data-theme="light"]` selector to themes-light.css
- ✅ **FIX** components to use semantic CSS variables instead of hardcoded colors
- ✅ **ENSURE** light mode shows light backgrounds and dark text
- ✅ **VERIFY** theme toggle works for explicit light theme selection

---

## Related Documentation

- [Dark/Light Mode Guidelines](/guidelines/design-tokens/dark-light-mode.md)
- [WordPress CSS Variables](/guidelines/development/wordpress-css-variables.md)
- [BEM Compliance](/tasks/bem-task-list.md)
- [CSS Architecture](/guidelines/development/css-architecture.md)

---

## Notes

This audit is specifically designed to identify the gap between the **perfect dark mode** (which works flawlessly) and the **missing light mode** (which doesn't apply when explicitly selected).

The core issue is likely:
1. Missing `[data-theme="light"]` selector in CSS
2. Components using hardcoded dark backgrounds/light text
3. Assumption that `:root` (default) is sufficient for light mode

The fix is systematic:
1. Add explicit light theme selector to CSS
2. Replace all hardcoded colors with semantic variables
3. Test theme toggle between light and dark

**Expected outcome:** User can toggle between:
- **Light mode:** Paper background (#f5efe4), Ink text (#1e1a17)
- **Dark mode:** Ink background (#1e1a17), Paper text (#f5efe4)

Both modes work perfectly, with all components responding to theme changes.
