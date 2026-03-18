# Apply BEM — BEM Class Compliance Audit & Fix

**Type:** Audit + Fix  
**Created:** 2026-03-18  
**Status:** Active  
**Trigger Word:** `apply bem`  
**Project:** Handcrafted Wines

---

## Prompt Purpose

**Objective:** Review the Handcrafted Wines codebase to identify components and pages where BEM (Block Element Modifier) classes are missing, inconsistent, or replaced by inline styles or Tailwind utilities. Where violations are found, apply BEM classes that map to existing CSS rules in `/styles/` — prioritizing design tokens, WordPress-aligned variables (`--twb-*` namespace), and pre-existing component CSS.

**When to Use:** After building new components, importing Figma frames, or periodically to enforce BEM consistency across the UI layer.

**Related Guidelines:**
- `/guidelines/development/css-architecture.md` ⚠️ **MANDATORY**
- `/guidelines/development/wordpress-css-variables.md` ⚠️ **MANDATORY**
- `/guidelines/design-tokens/colors.md`

---

## What Is BEM in Handcrafted Wines?

This project uses BEM with the `twb-` namespace (The Wire Brand):

| Convention | Example |
|---|---|
| **Block** | `.twb-hero`, `.twb-card`, `.twb-button` |
| **Element** | `.twb-hero__heading`, `.twb-card__title` |
| **Modifier** | `.twb-button--primary`, `.twb-hero--centered` |
| **Tailwind utilities** | Permitted in moderation for layout (`flex`, `gap-4`) |

**Rules:**
- BEM classes live in `/styles/` CSS files
- Every visual component should have a BEM block class on its root element
- Child elements use `__` element separator; visual variants use `--` modifier
- Tailwind utilities are permitted for layout/spacing
- Inline `style` attributes are permitted ONLY for dynamic/computed values (e.g., `style={{ '--progress': percent }}`)
- **All color/background/text styling MUST use CSS variables** (no `bg-[#hex]` or `text-[#hex]`)

---

## Workflow Steps

### Step 1: Read Existing CSS Inventory

1. Read `/styles/globals.css` to understand the import structure
2. Read `/styles/themes.css` for theme orchestration
3. Read `/styles/themes-variables.css` for design tokens (spacing, typography, etc.)
4. Read `/styles/themes-light.css` for light mode colors
5. Read `/styles/themes-dark.css` for dark mode colors
6. Read `/styles/utilities.css` for BEM component classes
7. Build a mental inventory of all available BEM selectors (`.twb-*` classes)

### Step 2: Scan TSX Files for BEM Violations

Search all `.tsx` files in `/components/` and `/pages/` for the following violation types:

#### Violation Type A — Missing BEM Block Class

Components whose root element has no `className` or uses only Tailwind utilities / inline styles instead of a BEM block class.

```tsx
// ❌ Violation — no BEM class
<div style={{ display: 'flex', gap: '16px', padding: '24px' }}>

// ✅ Correct — BEM block + Tailwind utilities
<div className="twb-feature-grid flex gap-4">
```

#### Violation Type B — Hardcoded Colors Instead of CSS Variables

Elements using inline `style` or Tailwind classes with hardcoded hex colors instead of CSS variables.

```tsx
// ❌ Violation — hardcoded colors
<h2 className="bg-[#5a2d3b] text-white">
<div style={{ backgroundColor: '#f5efe4', color: '#1e1a17' }}>

// ✅ Correct — CSS variables
<h2 className="twb-heading twb-heading--h2 bg-[var(--twb-color-bg-primary)] text-[var(--twb-color-text-primary)]">
<div className="twb-card">
```

#### Violation Type C — Missing Text Styling Classes

Elements using Tailwind font/text utilities instead of Typography component or BEM classes.

```tsx
// ❌ Violation — Tailwind typography
<h1 className="text-4xl font-bold text-gray-900">

// ✅ Correct — Typography component
<Typography variant="h1" className="twb-heading">

// ✅ Also correct — BEM class
<h1 className="twb-heading twb-heading--h1">
```

#### Violation Type D — Inconsistent BEM Naming

Elements using ad-hoc class names that do not follow `twb-` namespace or BEM convention.

```tsx
// ❌ Violation — ad-hoc class
<span className="badge-text highlight">

// ✅ Correct — twb namespace + BEM
<span className="twb-badge twb-badge--highlighted">
```

#### Violation Type E — Missing CSS Rule for BEM Class

A TSX file references a BEM class name that has no corresponding CSS rule in `/styles/`. The class exists in JSX but does nothing because no CSS defines it.

### Step 3: Match Violations to Existing CSS

For each violation found:

1. **Check if an existing BEM class already covers the intent.** Search `/styles/utilities.css` for classes that provide the same visual outcome. Prefer reusing over creating.
2. **Check existing `.twb-*` classes** in utilities.css
3. **Map inline styles/hardcoded colors to CSS variables:**

| Hardcoded Value | CSS Variable |
|---|---|
| `bg-[#f5efe4]` | `bg-[var(--twb-color-bg-primary)]` |
| `text-[#1e1a17]` | `text-[var(--twb-color-text-primary)]` |
| `text-white` | `text-[var(--twb-color-text-on-dark)]` |
| `bg-[#5a2d3b]` | `bg-[var(--twb-color-plum)]` |
| `border-[#hex]` | `border-[var(--twb-color-border-primary)]` |

### Step 4: Apply Fixes

For each violation:

1. **If an existing CSS rule matches** — apply the BEM class to the element, remove redundant inline styles or hardcoded Tailwind colors
2. **If a minor CSS addition is needed** — add the rule to `/styles/utilities.css`. Use only CSS variables.
3. **If a new BEM block is needed** — create the CSS in `/styles/utilities.css` under the correct section
4. **Never hardcode values in CSS** — all properties must use `var()` references:
   - Colors: `var(--twb-color-*)` from themes-light.css / themes-dark.css
   - Spacing: `var(--twb-spacing-*)` from themes-variables.css
   - Typography: `var(--twb-font-*)` from themes-variables.css
   - Borders: `var(--twb-border-*)`, `var(--twb-radius-*)`
   - Shadows: `var(--twb-shadow-*)`

### Step 5: Gap Analysis — Missing Design Tokens

After applying fixes, assess whether the existing CSS variable inventory is sufficient:

1. **Were any CSS rules written with hardcoded values because no token existed?** Flag these.
2. **Are there repeated inline styles that suggest a missing utility class or token?** Document them.
3. **Are there color, spacing, or typography patterns not covered by the current token set?**

If gaps are found, add this to the report:

> **Token Gap Detected:** The current design token set does not cover all BEM class needs. Run `audit tokens` to identify missing variables and `audit css` to verify CSS architecture integrity.

### Step 6: Report

Save report to `/reports/bem/bem-compliance-audit-YYYY-MM-DD.md` with:

```markdown
# BEM Compliance Audit - Handcrafted Wines

**Date:** YYYY-MM-DD  
**Scope:** [Components/Pages scanned]  
**Status:** [Complete/In Progress]

## Summary
- **Files scanned:** [count]
- **Violations found:** [count]
- **Violations fixed:** [count]
- **New CSS rules created:** [count]
- **Existing CSS rules reused:** [count]
- **Health score:** [0-100]

## Violations by Type
| Type | Count | Fixed |
|---|---|---|
| A — Missing BEM block | X | X |
| B — Hardcoded colors | X | X |
| C — Missing text styling | X | X |
| D — Inconsistent naming | X | X |
| E — Missing CSS for class | X | X |

## Files Modified
- [list of TSX files where BEM classes were applied]

## CSS Files Modified
- `/styles/utilities.css` (if rules added)

## Token Gap Analysis
- [list any missing tokens or recommend `audit tokens` / `audit css`]
```

### Step 7: Task List (If Needed)

If violations remain unfixed (e.g., complex components requiring review, or token gaps needing user decision):

1. Create or update `/tasks/bem-task-list.md` with remaining items
2. Each task should specify the file, violation type, and recommended fix
3. Update `/tasks/task-list.md` with progress

---

## Success Criteria

- [ ] Every component has a BEM block class on its root element
- [ ] Zero hardcoded hex colors (no `bg-[#hex]`, `text-[#hex]`, `border-[#hex]`)
- [ ] Zero inline styles for values covered by CSS variables
- [ ] All BEM classes follow `twb-Block__Element--Modifier` convention
- [ ] Every BEM class referenced in TSX has a corresponding CSS rule
- [ ] All new CSS rules use 100% CSS variables (zero hardcoded values)
- [ ] Typography uses Typography component or `.twb-heading` classes
- [ ] Report saved to `/reports/bem/`
- [ ] Token gap analysis completed (recommends `audit tokens` / `audit css` if needed)

---

## Design System Compliance Reminders (Handcrafted Wines)

| Category | Rule |
|---|---|
| **Colors** | `twb-` CSS variables only — `var(--twb-color-plum)`, `var(--twb-color-ink)` |
| **Backgrounds** | `var(--twb-color-bg-primary)`, `var(--twb-color-bg-secondary)` |
| **Text** | `var(--twb-color-text-primary)`, `var(--twb-color-text-on-dark)` |
| **Spacing** | `var(--twb-spacing-*)` tokens only — `var(--twb-spacing-4)`, `var(--twb-spacing-8)` |
| **Typography** | Typography component or `.twb-heading` classes |
| **Font sizes** | CSS variable scale only — `var(--twb-font-size-h1)`, etc. |
| **Border radius** | `var(--twb-radius-*)` tokens — `var(--twb-radius-card)`, `var(--twb-radius-organic-1)` |
| **Shadows** | `var(--twb-shadow-*)` tokens — `var(--twb-shadow-md)`, `var(--twb-shadow-paper)` |
| **Icons** | `lucide-react` only |
| **Classes** | BEM `.twb-*` convention + Tailwind utilities for layout |
| **Hardcoded hex** | ZERO allowed in TSX — no `bg-[#hex]`, `text-[#hex]`, `border-[#hex]` |

---

## Protected Files (Do Not Modify)

- `/styles/globals.css` (main entry point)
- `/styles/themes.css` (orchestration)
- `/styles/themes-variables.css` (core tokens)
- `/styles/themes-light.css` (light mode colors)
- `/styles/themes-dark.css` (dark mode colors)

**Modifications allowed:**
- `/styles/utilities.css` (add BEM classes here)

---

## Example Fixes

### Example 1: Hardcoded Background Color

**Before (Violation):**
```tsx
<section className="bg-[#f5efe4] py-12">
  <h2 className="text-[#1e1a17]">Our Story</h2>
</section>
```

**After (Fixed):**
```tsx
<section className="twb-section bg-[var(--twb-color-bg-primary)] py-12">
  <h2 className="twb-heading twb-heading--h2">Our Story</h2>
</section>
```

### Example 2: Missing BEM Block

**Before (Violation):**
```tsx
<div style={{ padding: '24px', borderRadius: '12px', backgroundColor: '#fff' }}>
  <h3>Wine Details</h3>
</div>
```

**After (Fixed):**
```tsx
<div className="twb-card">
  <h3 className="twb-card__title">Wine Details</h3>
</div>
```

**CSS Added to `/styles/utilities.css`:**
```css
.twb-card {
  padding: var(--twb-spacing-6);
  border-radius: var(--twb-radius-card);
  background: var(--twb-color-bg-secondary);
}

.twb-card__title {
  font-size: var(--twb-font-size-h3);
  color: var(--twb-color-text-primary);
  margin-bottom: var(--twb-spacing-3);
}
```

---

**Maintained by:** Handcrafted Wines Development Team  
**Last Updated:** 2026-03-18  
**Related Prompts:** `audit css`, `audit tokens`, `audit a11y`
