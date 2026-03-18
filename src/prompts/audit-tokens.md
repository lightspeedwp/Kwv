# Audit Tokens — Design Token Compliance Audit

**Type:** Audit  
**Created:** 2026-03-18  
**Status:** Active  
**Trigger Word:** `audit tokens`  
**Project:** Handcrafted Wines

---

## Prompt Purpose

**Objective:** Verify that ALL UI uses CSS variables from `/styles/` for colors, spacing, typography, borders, radius. Identify and fix hardcoded values.

**When to Use:** After building new components/pages, or periodically to verify compliance.

**Reference Guidelines:**
- `/guidelines/development/wordpress-css-variables.md` ⚠️ **MANDATORY**
- `/guidelines/design-tokens/colors.md`
- `/guidelines/design-tokens/typography.md`
- `/guidelines/design-tokens/spacing.md`

---

## Workflow Steps

### Step 1: Read Token Definitions

1. Read `/styles/themes-variables.css` for core tokens (spacing, typography)
2. Read `/styles/themes-light.css` for light mode colors
3. Read `/styles/themes-dark.css` for dark mode colors
4. Note all available `--twb-*` tokens

**Handcrafted Wines Token Namespaces:**
- Colors: `--twb-color-*` (bg, text, border, plum, clay, vine, gold, paper, ink)
- Spacing: `--twb-spacing-*` (0-24 scale)
- Typography: `--twb-font-*`, `--twb-font-size-*`
- Borders: `--twb-border-*`, `--twb-color-border-*`
- Radius: `--twb-radius-*` (card, organic-1/2/3)
- Shadows: `--twb-shadow-*` (sm, md, lg, paper)

### Step 2: Scan for Violations

Search all `.tsx` files in `/components/`, `/pages/` for:

1. **Hardcoded colors:** 
   - Hex values (`#f5efe4`, `#1e1a17`, `#5a2d3b`)
   - `rgb()`, `rgba()`, `hsl()`, `hsla()`
   - Tailwind color classes (`bg-[#hex]`, `text-[#hex]`, `border-[#hex]`)
2. **Hardcoded spacing:** 
   - Raw `px` or `rem` in padding, margin, gap
   - Should use `var(--twb-spacing-*)` or `clamp()`
3. **Hardcoded fonts:** 
   - Font family names (`'Playfair Display'`, `'Inter'`, `sans-serif`)
   - Should use `var(--twb-font-primary)` or `var(--twb-font-secondary)`
4. **Hardcoded font sizes:** 
   - Raw pixel/rem sizes
   - Should use `clamp()` or `var(--twb-font-size-*)`
5. **Hardcoded radius:** 
   - Raw pixel values
   - Should use `var(--twb-radius-*)`

### Step 3: Fix Violations

For each violation:

1. Identify nearest matching CSS variable
2. Replace hardcoded value with variable reference
3. If no matching variable exists, flag for review (do not create new tokens without approval)

**Replacement Map:**
```
bg-[#f5efe4] → bg-[var(--twb-color-bg-primary)]
text-[#1e1a17] → text-[var(--twb-color-text-primary)]
text-white → text-[var(--twb-color-text-on-dark)]
bg-[#5a2d3b] → bg-[var(--twb-color-plum)]
padding: 16px → className="twb-card" (with CSS)
font-family: 'Playfair' → font-family: var(--twb-font-primary)
border-radius: 12px → border-radius: var(--twb-radius-card)
```

### Step 4: Report

Save to `/reports/tokens/token-compliance-audit-YYYY-MM-DD.md` with:

```markdown
# Token Compliance Audit - Handcrafted Wines

**Date:** YYYY-MM-DD  
**Scope:** All components and pages  
**Status:** [Complete/In Progress]

## Summary
- **Total files scanned:** [count]
- **Violations found:** [count]
- **Violations fixed:** [count]
- **Health score:** [0-100]

## Violations by Category
| Category | Count | Fixed |
|---|---|---|
| Hardcoded colors | X | X |
| Hardcoded spacing | X | X |
| Hardcoded fonts | X | X |
| Hardcoded font sizes | X | X |
| Hardcoded radius | X | X |

## Files Modified
[List of files where tokens were applied]

## Remaining Issues
[List unfixable issues or missing tokens]

## Token Gap Analysis
[Any needed tokens not currently defined]
```

---

## Success Criteria

- [ ] Zero hardcoded hex/rgb/hsl color values
- [ ] Zero hardcoded px/rem spacing values
- [ ] Zero hardcoded font family names
- [ ] Zero hardcoded font sizes (use clamp or tokens)
- [ ] Zero hardcoded border-radius values
- [ ] 100% CSS variable usage for all styling
- [ ] Report saved to `/reports/tokens/`

---

## Common Violations (Handcrafted Wines)

### ❌ Bad

```tsx
// Hardcoded colors
<div className="bg-[#f5efe4] text-[#1e1a17]">

// Hardcoded spacing
<div style={{ padding: '16px', margin: '24px' }}>

// Hardcoded fonts
<h1 style={{ fontFamily: 'Playfair Display' }}>

// Hardcoded sizes
<p style={{ fontSize: '1.125rem' }}>

// Hardcoded radius
<div style={{ borderRadius: '12px' }}>
```

### ✅ Good

```tsx
// CSS variables
<div className="bg-[var(--twb-color-bg-primary)] text-[var(--twb-color-text-primary)]">

// BEM classes (with CSS variables)
<div className="twb-card">

// Typography component
<Typography variant="h1">

// Fluid scaling
<h1 className="text-[clamp(2.4rem,5vw+1rem,4.5rem)]">

// Token radius
<div className="rounded-[var(--twb-radius-card)]">
```

---

**Maintained by:** Handcrafted Wines Development Team  
**Last Updated:** 2026-03-18  
**Related Prompts:** `audit css`, `audit styles`, `apply bem`
