# Audit Styles — Design System Styling Audit

**Type:** Audit  
**Created:** 2026-03-18  
**Status:** Active  
**Trigger Word:** `audit styles`  
**Project:** Handcrafted Wines

---

## Prompt Purpose

**Objective:** Comprehensive styling compliance audit — CSS variable usage, icon library, router imports, font enforcement. Combines token, CSS, and class convention checks.

**When to Use:** Pre-deployment check or after major UI changes.

**Reference Guidelines:**
- `/guidelines/development/wordpress-css-variables.md` ⚠️ **MANDATORY**
- `/guidelines/design-tokens/colors.md`
- `/guidelines/design-tokens/typography.md`

---

## Workflow Steps

### Step 1: Import Library Check

Search all `.tsx` files for prohibited/correct imports:

1. **Icons:** Must use `lucide-react` ONLY (zero other icon libraries)
2. **Router:** Must use `react-router` ONLY (zero `react-router-dom`)
3. **Tailwind:** Verify Tailwind utility classes used for layout/spacing (acceptable)

**Valid:**
```tsx
import { ChevronDown, ShoppingCart } from 'lucide-react'
import { Link, useNavigate } from 'react-router'
```

**Invalid:**
```tsx
import { Icon } from '@phosphor-icons/react' // Wrong icon library
import { Link } from 'react-router-dom' // Wrong router package
```

### Step 2: CSS Variable Compliance

Scan all `.tsx` files for inline `style` props and hardcoded values:

1. **Colors:** Zero hardcoded hex/rgb/hsl → must use `var(--twb-color-*)`
2. **Spacing:** Zero hardcoded px/rem in padding/margin/gap → must use `var(--twb-spacing-*)` or `clamp()`
3. **Typography:** Zero hardcoded font names → must use `var(--twb-font-primary/secondary)`
4. **Font sizes:** Zero hardcoded sizes → must use `clamp()` or `var(--twb-font-size-*)`
5. **Border radius:** Zero hardcoded radius → must use `var(--twb-radius-*)`
6. **Borders:** Zero hardcoded border colors → must use `var(--twb-border-*)` or `var(--twb-color-border-*)`

**Check Pattern:**
```bash
# Search for violations
bg-[#hex] → should be bg-[var(--twb-color-bg-primary)]
text-[#hex] → should be text-[var(--twb-color-text-primary)]
style={{ padding: '16px' }} → should use className="twb-card"
```

### Step 3: Class Convention Check

1. **BEM classes:** Custom classes should use `.twb-*` namespace
2. **Tailwind utilities:** Acceptable for layout (`flex`, `grid`, `gap-*`)
3. **No arbitrary values:** Avoid `bg-[#hex]`, use CSS variables

### Step 4: Font Face Verification

1. Read `/styles/themes-variables.css` for defined font faces
2. Verify no component references font not defined in CSS
3. All headings use Typography component or `.twb-heading` classes

**Expected Fonts:**
- `--twb-font-primary`: Serif (headings)
- `--twb-font-secondary`: Sans-serif (body)

### Step 5: Fix and Report

1. Fix all violations found
2. Save to `/reports/styles/styles-compliance-audit-YYYY-MM-DD.md` with violation counts by category

---

## Success Criteria

- [ ] Zero prohibited icon library imports (only `lucide-react`)
- [ ] Zero `react-router-dom` imports (only `react-router`)
- [ ] Zero hardcoded colors, spacing, fonts, sizes, radius
- [ ] All custom classes use `.twb-*` namespace
- [ ] 100% CSS variable compliance
- [ ] Report saved to `/reports/styles/`

---

**Maintained by:** Handcrafted Wines Development Team  
**Last Updated:** 2026-03-18  
**Related Prompts:** `audit tokens`, `audit css`, `apply bem`
