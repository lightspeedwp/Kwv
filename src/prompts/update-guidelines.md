# Update Guidelines

**Type:** Maintenance  
**Created:** 2026-03-18  
**Status:** Active  
**Trigger Word:** `update guidelines`  
**Project:** Handcrafted Wines

---

## Prompt Purpose

**Objective:** Update guideline files to ensure they accurately reflect the current codebase and follow standardized frontmatter/template format.

**When to Use:** After changes to design tokens, components, CSS variables, routes, or any system documented in guidelines.

**Reference Guidelines:**
- `/guidelines/_templates.md`
- `/guidelines/development/file-organization.md` ⚠️ **MANDATORY**

---

## Workflow Steps

### Step 1: Identify Guidelines Needing Updates

Read following to determine what changed:

1. Check `/styles/` for CSS variable changes (colors, spacing, typography, borders)
2. Check `/components/`, `/pages/` for new or modified components
3. Check `/routes.tsx` for route changes
4. Check `/data/` for data structure changes
5. Check `/CHANGELOG.md` `[Unreleased]` section for recent work

**Handcrafted Wines Specific:**
- Theme CSS files (`themes-variables.css`, `themes-light.css`, `themes-dark.css`)
- Shop components (ProductCard, Cart, Checkout)
- UnifiedHeader/Footer changes
- Product data structure (products.ts)
- Farm story data (farmStory.ts)

### Step 2: For Each Guideline File Needing Update

**Read the file first.** Then apply these rules:

1. **Update frontmatter:**
   - Increment `Version` (patch for fixes, minor for additions, major for rewrites)
   - Set `Last Updated` to today's date (`YYYY-MM-DD`)
   - Verify `Status` is correct (`Active`, `Draft`, or `Deprecated`)
   - Verify `Template Used` references correct template

2. **Verify content accuracy:**
   - CSS variable names match what's in `/styles/` (all `--twb-*` prefixed)
   - Component names match what's in `/components/` and `/pages/`
   - File paths are valid
   - Route paths match `/routes.tsx`
   - Data structures match `/data/*.ts` files

3. **Apply template structure:**
   - If file doesn NOT follow template from `/guidelines/_templates/`, rewrite using appropriate template
   - Rewriting with template produces more consistent results than patching

4. **Check file size:**
   - Guidelines must be under 350 lines (20kB limit per `/guidelines/development/file-organization.md`)
   - If over, split into sub-files with parent index

### Step 3: Update Version History

Add row to Version History table at bottom of each updated file.

### Step 4: Update Cross-References

If file names or locations changed, update all files that reference them:
- `/guidelines/Guidelines.md` (main guidelines, Quick Reference table)
- `/guidelines/INDEX.md` (master index)
- `/guidelines/_templates.md` (template index)
- Any file that links to the updated guideline

---

## Success Criteria

- [ ] All updated files have current frontmatter (Version, Last Updated)
- [ ] All CSS variable references match `/styles/` (`--twb-*` namespace)
- [ ] All component references match `/components/`, `/pages/`
- [ ] All route references match `/routes.tsx`
- [ ] All files follow template structure
- [ ] All files under 350 lines (20kB)
- [ ] Version History tables updated
- [ ] Cross-references valid

---

## Handcrafted Wines Guidelines to Check

**Design Tokens (14 files):**
- `/guidelines/design-tokens/colors.md` (Paper, Ink, Vine, Clay, Plum, Gold)
- `/guidelines/design-tokens/typography.md` (Serif headings, Sans body)
- `/guidelines/design-tokens/spacing.md` (fluid with clamp)
- `/guidelines/design-tokens/dark-light-mode.md` ⚠️ **MANDATORY**

**Architecture (3 files):**
- `/guidelines/architecture/sitemap.md` (all routes)
- `/guidelines/architecture/component-structure.md` (containers)
- `/guidelines/architecture/routing.md` (react-router usage)

**Accessibility (3 files):**
- `/guidelines/accessibility/wcag-compliance.md` ⚠️ **MANDATORY**
- `/guidelines/accessibility/keyboard-navigation.md`
- `/guidelines/accessibility/screen-readers.md`

**Development (6 files):**
- `/guidelines/development/wordpress-css-variables.md` ⚠️ **MANDATORY**
- `/guidelines/development/css-architecture.md` ⚠️ **MANDATORY**
- `/guidelines/development/file-organization.md` ⚠️ **MANDATORY**
- `/guidelines/development/jsdoc-standards.md` ⚠️ **MANDATORY**

**Patterns (4 files):**
- `/guidelines/patterns/hero-standards.md` (mobile height, scroll arrow)
- `/guidelines/patterns/layout-patterns.md`

---

## Common Update Scenarios

### Scenario 1: New Design Token Added

**Example:** Added `--twb-color-rose` for limited edition wines

**Guidelines to Update:**
1. `/guidelines/design-tokens/colors.md` - Add new token to palette table
2. `/guidelines/development/wordpress-css-variables.md` - Add to variable reference
3. `/styles/themes-light.css` + `/styles/themes-dark.css` - Add CSS variable

### Scenario 2: New Component Created

**Example:** Created `WineClubCard` component

**Guidelines to Update:**
1. `/guidelines/architecture/component-structure.md` - Add to component inventory
2. `/guidelines/patterns/` - Create new pattern guideline if reusable
3. CHANGELOG.md - Add entry under `[Unreleased]` → Added

### Scenario 3: Route Added/Changed

**Example:** Added `/wine-club/tiers` route

**Guidelines to Update:**
1. `/guidelines/architecture/sitemap.md` - Add route to sitemap
2. `/guidelines/architecture/routing.md` - Update route examples if relevant
3. CHANGELOG.md - Add entry under `[Unreleased]` → Added

---

## Notes

- **Do NOT create new guideline files** unless existing files cannot cover content. Check existing files first.
- **Prefer rewriting** non-standard files using template over patching them.
- **This prompt does not create reports or task lists.** It is maintenance operation.
- **Protected files:** Never modify structure of `Guidelines.md`, `INDEX.md`, `PROMPT-TRIGGERS.md`, `_templates.md`

---

**Maintained by:** Handcrafted Wines Development Team  
**Last Updated:** 2026-03-18  
**Related Prompts:** `cleanup guidelines`, `audit guidelines`
