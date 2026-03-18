# Audit Theme — Light/Dark Mode Token Compliance

**Type:** Audit  
**Created:** 2026-03-18  
**Status:** Active  
**Trigger Word:** `audit theme`  
**Project:** Handcrafted Wines

---

## Prompt Purpose

**Objective:** Audit the entire codebase for light/dark mode compliance — verify theme switching mechanism, eliminate hardcoded color/font values in TSX/TS, validate token inversion per dark-light-mode.md, and confirm WCAG 1.4.3 contrast in both modes.

**When to Use:** After design token updates, theme refactors, or when adding new pages/components.

**Reference Guidelines:**
- `/guidelines/design-tokens/dark-light-mode.md` ⚠️ **MANDATORY**
- `/guidelines/development/wordpress-css-variables.md` ⚠️ **MANDATORY**
- `/guidelines/design-tokens/colors.md`

---

## Handcrafted Wines Theme Architecture

**CSS Files:**
- `/styles/themes.css` - Theme orchestration (light/dark switching logic)
- `/styles/themes-variables.css` - Core tokens (spacing, typography, non-color)
- `/styles/themes-light.css` - Light mode colors (`:root` selector)
- `/styles/themes-dark.css` - Dark mode colors (`.dark` selector)

**Mechanism:**
- Light mode: `:root` selector (default, system preference)
- Dark mode: `.dark` class on `<html>` element
- Toggle: ThemeToggle component adds/removes `.dark` class
- Persistence: localStorage saves preference

---

## Workflow Steps

### Step 1: Theme Switching Mechanism

1. **Verify toggle:** Theme switching uses `.dark` class on `document.documentElement` and works across all routes
2. **Persistence:** Theme preference persists across navigation (localStorage)
3. **No flash:** No FOUC (flash of unstyled content) or wrong theme on load
4. **System preference:** Verify `prefers-color-scheme` media query is respected as fallback
5. **Component:** Check ThemeToggle component in UnifiedHeader works correctly

**Test Routes:**
- Main site (UnifiedHeader)
- Checkout flow (CheckoutHeader - should have theme toggle or inherit)
- All pages (toggle should persist across navigation)

### Step 2: Hardcoded Value Scan

Scan all `.ts` and `.tsx` files for violations:

#### A. Hardcoded Hex Colors

Search for:
- `bg-[#hex]` (Tailwind with hex)
- `text-[#hex]`
- `border-[#hex]`
- `#f5efe4`, `#1e1a17`, `#5a2d3b`, etc. (Handcrafted Wines colors)

**Exception:** CSS variable references are allowed:
```tsx
// ✅ GOOD - CSS variable
className="bg-[var(--twb-color-bg-primary)]"

// ❌ BAD - Hardcoded hex
className="bg-[#f5efe4]"
```

#### B. RGB/HSL Literals

Search for:
- `rgb(`, `rgba(`, `hsl(`, `hsla(` in inline styles
- Should use CSS variables instead

#### C. Hardcoded Text Colors

Search for:
- `text-white` (should be `text-[var(--twb-color-text-on-dark)]`)
- `text-black`
- `text-gray-*`

**Exception:** Tailwind gray utilities for borders/dividers may be acceptable if they work in both modes.

#### D. Font-Family Literals

Search for:
- Hardcoded font names in inline styles
- Should use CSS variables (`var(--twb-font-*)`)

**Note:** Tailwind font utilities (font-sans, font-serif) are acceptable.

#### E. Theme Constants File

Check `/constants/theme.ts` (if exists):
- Any hardcoded values there must migrate to CSS variables
- Should only export CSS variable references, not hex colors

### Step 3: Token Inversion Validation

Per `/guidelines/design-tokens/dark-light-mode.md`:

1. **Background/foreground pairs:** Verify semantic pairs invert correctly:
   - Light mode: `--twb-color-bg-primary` (paper #f5efe4) / `--twb-color-text-primary` (ink #1e1a17)
   - Dark mode: `--twb-color-bg-primary` (dark #1a1715) / `--twb-color-text-primary` (light #f5efe4)

2. **Secondary surfaces:** Verify secondary backgrounds have appropriate contrast
3. **Brand colors:** Plum, Clay, Vine, Gold should remain consistent or adjust for readability
4. **Border tokens:** Visible in both modes
5. **Shadow tokens:** Darker in light mode, lighter/more prominent in dark mode

**Test Color Pairs:**
```css
/* Light mode (:root) */
--twb-color-bg-primary: #f5efe4;
--twb-color-text-primary: #1e1a17;

/* Dark mode (.dark) */
--twb-color-bg-primary: #1a1715;
--twb-color-text-primary: #f5efe4;
```

### Step 4: Contrast Compliance (WCAG 1.4.3)

Test color combinations in both modes:

1. **Normal text (4.5:1 minimum):**
   - Light mode: text-primary on bg-primary
   - Dark mode: text-primary on bg-primary
2. **Large text (3:1 minimum):** Headings, 18px+ text
3. **Interactive states:** Buttons, links, form elements in default, hover, focus, disabled states
4. **Plum buttons:** White text on plum background (both modes)
5. **Footer:** Light text on dark background

**Use WebAIM Contrast Checker:**
https://webaim.org/resources/contrastchecker/

### Step 5: Component-Specific Checks

**Priority Components (High usage):**
1. UnifiedHeader (navigation, dark background in both modes?)
2. UnifiedFooter (dark background, light text)
3. Hero (overlay text on images)
4. Cards (product cards, experience cards)
5. Buttons (all variants: primary, secondary, outline)
6. Forms (inputs, selects, textareas)
7. Modals/Sheets (background, text)

**Check Each Component:**
- Uses CSS variables for all colors
- Readable in both light and dark modes
- No hardcoded text-white or bg-[#hex]
- Proper contrast in all states

### Step 6: Dark Mode Specific Issues

**Common Issues:**
1. **Washed-out colors:** Neon or pastel colors invisible in dark mode
2. **Shadows disappear:** Box shadows too subtle on dark backgrounds
3. **Borders invisible:** Border colors blend with background
4. **Images:** Product images/photos need border/shadow in dark mode
5. **Overlays:** Dark overlays on images may need opacity adjustment

### Step 7: Report

Save report to `/reports/theme/theme-audit-YYYY-MM-DD.md` with:

```markdown
# Theme Audit - Handcrafted Wines

**Date:** YYYY-MM-DD  
**Scope:** Light/Dark mode compliance  
**Status:** [Complete/In Progress]

## Executive Summary
- **Health Score:** [0-100]
- **Files scanned:** [.ts/.tsx count]
- **Hardcoded violations:** [count]
- **Token inversion issues:** [count]
- **Contrast failures:** [count]
- **Theme switching status:** [Working/Broken]

## Theme Switching
- [ ] Toggle works on all routes
- [ ] Preference persists across navigation
- [ ] No FOUC (flash of unstyled content)
- [ ] System preference respected

## Hardcoded Values
### Hex Colors ([count] violations)
[List by file + line]

### RGB/HSL ([count] violations)
[List by file + line]

### Text Color Classes ([count] violations)
[List text-white, text-black, text-gray-*]

### Font-Family ([count] violations)
[List hardcoded font names]

## Token Inversion
[List any semantic token pairs that don't invert correctly]

## Contrast Compliance
### Light Mode
- Text combinations: [pass/fail with ratios]
- Button states: [pass/fail]
- Interactive elements: [pass/fail]

### Dark Mode
- Text combinations: [pass/fail with ratios]
- Button states: [pass/fail]
- Interactive elements: [pass/fail]

## Fixes Applied
[List all violations fixed]

## Remaining Issues
[List with priority]

## Recommendations
[Next steps, token gaps, component updates]
```

---

## Success Criteria

- [ ] Theme switching works on all routes without flash or stranded tokens
- [ ] Zero hardcoded hex/rgb values in `.ts`/`.tsx` files
- [ ] Zero `text-white` or `text-black` (use semantic variables)
- [ ] All semantic token pairs invert correctly per dark-light-mode.md
- [ ] WCAG 1.4.3 contrast met in both light and dark modes (4.5:1 text, 3:1 large text)
- [ ] ThemeToggle component works correctly
- [ ] localStorage persistence working
- [ ] Report saved to `/reports/theme/`

---

## Current Theme Status (Handcrafted Wines)

**Last Implementation:** 2026-03-17  
**Health Score:** 100/100 ✅ **PERFECT** (6-wave implementation complete)

**Achievements:**
- ✅ Light mode: 100/100 (all 46 files migrated)
- ✅ Dark mode: 100/100 (original implementation flawless)
- ✅ Automatic theme switching working
- ✅ Zero hardcoded colors remaining
- ✅ All components support both modes
- ✅ WCAG AA contrast maintained

**Task List:** `/tasks/light-mode-task-list.md` (46/46 files, 100% complete)

**Wave Execution (Completed 2026-03-17):**
- Wave 1: CSS Foundation (Health: 12 → 30)
- Wave 2: Headers/Footers/Shop (Health: 30 → 50)
- Wave 3: Product/Cart/Checkout (Health: 50 → 65)
- Wave 4: Experience/Events (Health: 65 → 80)
- Wave 5: Edge cases/Account (Health: 80 → 95)
- Wave 6: Final polish (Health: 95 → 100)

**This audit should verify the completed implementation remains intact.**

---

## Quick Test (3 Minutes)

**Manual Testing:**
1. Open homepage in light mode
2. Toggle to dark mode — all text readable?
3. Navigate to /shop — theme persists?
4. Refresh page — theme persists?
5. Check product cards — images have borders/shadows in dark mode?
6. Check footer — readable in both modes?
7. Check buttons — all variants work in both modes?
8. Check forms — inputs visible and styled in both modes?

**Pass all 8 tests = Theme implementation working correctly ✅**

---

**Maintained by:** Handcrafted Wines Development Team  
**Last Updated:** 2026-03-18  
**Related Prompts:** `audit css`, `apply bem`, `audit tokens`  
**Related Guidelines:** `/guidelines/design-tokens/dark-light-mode.md`
