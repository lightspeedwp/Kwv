# Audit Design Tokens Prompt

**Trigger:** `audit tokens`  
**Version:** 1.0.0  
**Last Updated:** 2024-03-15  
**Purpose:** Audit design token implementation and identify hardcoded values

---

## Mission

Scan the entire codebase for hardcoded design values (colors, spacing, typography, etc.) that should use design tokens instead. Generate a comprehensive report with violation locations, severity ratings, and token replacement recommendations.

---

## Prerequisites

- `/guidelines/design-tokens/*.md` - All design token guidelines must be current
- `/guidelines/development/wordpress-css-variables.md` - CSS variable standards

---

## Workflow

### Step 1: Load Guidelines

Load all design token guidelines:
- `/guidelines/design-tokens/colors.md`
- `/guidelines/design-tokens/typography.md`
- `/guidelines/design-tokens/spacing.md`
- `/guidelines/design-tokens/shadows.md`
- `/guidelines/design-tokens/radii.md`
- `/guidelines/design-tokens/borders.md`
- `/guidelines/design-tokens/animations.md`

---

### Step 2: Scan Codebase

**Scan these file types:**
- `.tsx` files in `/components/`, `/pages/`
- `.css` files in `/styles/`
- `.ts` files with style objects

**Look for:**

#### Colors
```tsx
// ❌ Hardcoded hex colors
<div className="bg-[#f5efe4]">
<div style={{ backgroundColor: '#1e1a17' }}>

// ✅ Should use
<div className="bg-[var(--twb-color-bg-primary)]">
```

#### Spacing
```tsx
// ❌ Hardcoded pixel values
<div className="p-[16px]">
<div style={{ margin: '24px' }}>

// ✅ Should use
<div className="p-[var(--twb-spacing-4)]">
```

#### Typography
```tsx
// ❌ Hardcoded font sizes
<h1 style={{ fontSize: '48px' }}>

// ✅ Should use
<h1 className="text-[length:var(--twb-font-size-h1)]">
```

#### Shadows
```tsx
// ❌ Hardcoded shadows
<div style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>

// ✅ Should use
<div className="shadow-[var(--twb-shadow-md)]">
```

#### Border Radius
```tsx
// ❌ Hardcoded radius
<div className="rounded-[12px]">

// ✅ Should use
<div className="rounded-[var(--twb-radius-card)]">
```

---

### Step 3: Categorize Violations

**Severity Levels:**

- **Critical:** User-facing components with hardcoded colors (contrast issues)
- **High:** Repeated hardcoded values (10+ occurrences)
- **Medium:** Isolated hardcoded values in components
- **Low:** Hardcoded values in temporary/prototype code

---

### Step 4: Calculate Metrics

**Token Coverage:**
```
Token Coverage = (Files using tokens / Total style files) * 100%
```

**Violation Breakdown:**
- Total violations found
- By file type (.tsx, .css)
- By token category (color, spacing, typography)
- By severity (Critical, High, Medium, Low)

---

### Step 5: Generate Recommendations

For each violation, provide:
- **File path and line number**
- **Current code** (hardcoded value)
- **Recommended replacement** (token usage)
- **Token reference** (guideline link)

**Example:**
```
File: /components/common/Button.tsx:45
Severity: High
Current: <button className="bg-[#5a2d3b]">
Recommended: <button className="bg-[var(--twb-color-accent-plum)]">
Reference: /guidelines/design-tokens/colors.md#accent-colors
```

---

### Step 6: Create Migration Tasks

Generate actionable tasks:
1. Replace critical violations first
2. Batch similar violations by component
3. Define testing checkpoints

---

## Report Structure

**File:** `/reports/token-audit-report.md`

```markdown
# Design Token Audit Report

**Date:** YYYY-MM-DD
**Auditor:** AI Assistant
**Scope:** All .tsx, .css files

---

## Executive Summary

- **Token Coverage:** XX%
- **Total Violations:** XXX
- **Critical Violations:** XX
- **Files Scanned:** XXX

---

## Findings by Category

### Colors (XX violations)
[List violations with file locations]

### Spacing (XX violations)
[List violations with file locations]

### Typography (XX violations)
[List violations with file locations]

---

## Recommendations

### Priority 1: Critical (Do Immediately)
- [ ] Fix color contrast violations in Button component
- [ ] Replace hardcoded spacing in Hero section

### Priority 2: High (This Sprint)
- [ ] Batch replace repeated hardcoded values

### Priority 3: Medium (Next Sprint)
- [ ] Migrate isolated violations

---

## Migration Plan

**Phase 1:** Critical violations (1 day)
**Phase 2:** High-priority violations (2 days)
**Phase 3:** Medium-priority violations (3 days)

---

## Success Metrics

- [ ] Token coverage > 95%
- [ ] Zero critical violations
- [ ] All user-facing components use tokens
```

---

## Success Criteria

- [ ] All .tsx and .css files scanned
- [ ] Violations categorized by severity
- [ ] Token coverage percentage calculated
- [ ] Replacement recommendations provided for each violation
- [ ] Report generated at `/reports/token-audit-report.md`
- [ ] Migration tasks added to `/tasks/token-migration.md` (if violations > 10)

---

## Outputs

- **Primary:** `/reports/token-audit-report.md`
- **Secondary (if needed):** `/tasks/token-migration.md`

---

## Follow-Up Actions

After generating report:
1. Review critical violations immediately
2. Create task list for migration if violations > 10
3. Run `update guidelines` to ensure token guidelines are current
4. Schedule follow-up audit after migration

---

## Related Prompts

- `audit css` - Audit CSS architecture
- `audit styles` - Audit hardcoded styles vs. tokens (broader scope)
- `update guidelines` - Update design token guidelines

---

## Changelog

### Version 1.0.0 (2024-03-15)
- Initial audit tokens prompt
- Defined token categories (colors, spacing, typography, shadows, radii)
- Established severity levels
- Created report structure
