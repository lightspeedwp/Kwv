# Audit CSS — CSS Architecture Audit

**Type:** Audit  
**Created:** 2026-03-18  
**Status:** Active  
**Trigger Word:** `audit css`  
**Project:** Handcrafted Wines

---

## Prompt Purpose

**Objective:** Audit CSS file organization, imports, and compliance per `/guidelines/development/css-architecture.md`. Find broken imports, orphaned files, oversized files, duplicate rules, and hardcoded values.

**When to Use:** After CSS refactoring, adding new components, or periodically to verify architecture integrity.

**Reference Guidelines:**
- `/guidelines/development/css-architecture.md` ⚠️ **MANDATORY**
- `/guidelines/development/wordpress-css-variables.md` ⚠️ **MANDATORY**
- `/guidelines/design-tokens/colors.md`

---

## Handcrafted Wines CSS Architecture

```
/styles/
├── globals.css              # Main entry point
├── themes.css               # Theme orchestration (light/dark switching)
├── themes-variables.css     # Core tokens (spacing, typography, etc.)
├── themes-light.css         # Light mode colors (:root)
├── themes-dark.css          # Dark mode colors (.dark)
└── utilities.css            # BEM component classes (.twb-*)
```

**Import Chain:** `globals.css` → imports all other CSS files

---

## Workflow Steps

### Step 1: Import Chain Verification

1. Read `/styles/globals.css` — verify every `@import` resolves to an existing file
2. Check all imports in order:
   - `themes-variables.css` (first - base tokens)
   - `themes-light.css` (light mode)
   - `themes-dark.css` (dark mode)
   - `themes.css` (orchestration)
   - `utilities.css` (BEM classes)
3. List all broken imports
4. Verify Tailwind directives (@tailwind base, components, utilities)

### Step 2: Orphaned CSS Files

1. List all `.css` files in `/styles/`
2. For each file, verify it is imported by `globals.css` or another imported file
3. Flag files with zero importers as orphaned
4. Check if orphaned files are legacy/deprecated

**Expected Files (6):**
- globals.css (entry point)
- themes.css (orchestration)
- themes-variables.css (tokens)
- themes-light.css (light mode)
- themes-dark.css (dark mode)
- utilities.css (BEM classes)

**Any additional files should be justified or removed.**

### Step 3: File Size Check

Per `/guidelines/development/file-organization.md`:

1. Check all CSS files against the 20kB limit
2. Flag any files over the limit with suggested split points
3. Count lines (target: <400 lines per file)

**Expected Sizes:**
- themes-variables.css: 10-15kB (tokens)
- themes-light.css: 5-8kB (colors)
- themes-dark.css: 5-8kB (colors)
- utilities.css: 10-20kB (BEM classes)

### Step 4: Hardcoded Value Detection

Search all CSS files for hardcoded values that should use variables:

1. **Hex colors:** Search for `#` — should use `var(--twb-color-*)`
2. **RGB/HSL colors:** Search for `rgb(`, `hsl(` — should use variables
3. **Pixel values:** Search for `px` in spacing contexts — should use `var(--twb-spacing-*)`
4. **Font names:** Search for font-family with quoted names — should use `var(--twb-font-*)`
5. **Hardcoded rem/em:** Should use fluid `clamp()` or token variables

**Allowed hardcoded values:**
- Border widths (1px, 2px) for precision
- Zero values (0, 0px)
- Percentages for layout (100%, 50%)
- Viewport units (100vh, 100dvh)

### Step 5: BEM Class Convention

Search `utilities.css` for:

1. **Namespace compliance:** All custom classes should use `.twb-` prefix
2. **BEM structure:** Classes should follow Block__Element--Modifier pattern
3. **Consistent naming:** No mixed conventions (camelCase, snake_case in CSS)

**Valid patterns:**
- `.twb-button` (block)
- `.twb-button__icon` (element)
- `.twb-button--primary` (modifier)
- `.twb-card__title` (element)

**Invalid patterns:**
- `.button` (missing namespace)
- `.twbButton` (camelCase in CSS)
- `.twb_button` (snake_case)

### Step 6: Duplicate Rule Detection

1. Scan `utilities.css` for duplicate selectors or redundant rules
2. Identify rules that could be consolidated
3. Check for repeated color/spacing/typography declarations that could use CSS variables

### Step 7: Light/Dark Mode Compliance

Per `/guidelines/design-tokens/dark-light-mode.md`:

1. **Light mode:** All color variables defined in `:root` selector (themes-light.css)
2. **Dark mode:** All color variables overridden in `.dark` selector (themes-dark.css)
3. **Semantic tokens:** Background/foreground pairs invert correctly
4. **No hardcoded colors in utilities.css** — should reference theme variables

### Step 8: Fix and Report

1. Fix all broken imports
2. Delete confirmed orphaned files (not protected)
3. Move hardcoded values to CSS variables
4. Add missing `.twb-` namespaces
5. Save report to `/reports/css/css-architecture-audit-YYYY-MM-DD.md`

---

## Success Criteria

- [ ] Zero broken CSS imports
- [ ] Zero orphaned CSS files (or justified exceptions)
- [ ] All CSS files under 20kB (or split strategy documented)
- [ ] Zero hardcoded hex colors in CSS files
- [ ] All custom classes use `.twb-` prefix
- [ ] All BEM classes follow Block__Element--Modifier convention
- [ ] Light/dark mode color variables properly organized
- [ ] All spacing/typography uses token variables
- [ ] Report saved to `/reports/css/`

---

## Protected Files

**Do not delete or restructure:**
- globals.css (entry point)
- themes.css (orchestration)
- themes-variables.css (core tokens)
- themes-light.css (light mode colors)
- themes-dark.css (dark mode colors)

**Can modify:**
- utilities.css (add BEM classes here)

---

**Maintained by:** Handcrafted Wines Development Team  
**Last Updated:** 2026-03-18  
**Related Prompts:** `apply bem`, `audit tokens`, `audit theme`
