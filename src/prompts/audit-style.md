# Audit Style — Hand-Drawn Design Language Compliance

**Type:** Audit  
**Created:** 2026-03-18  
**Status:** Active  
**Trigger Word:** `audit style`  
**Project:** Handcrafted Wines

---

## Prompt Purpose

**Objective:** Audit all pages and components for adherence to the Handcrafted Wines hand-drawn, organic design language — identify legacy KWV branding patterns, mismatched palettes, non-compliant typography, and missing decorative elements.

**When to Use:** After migrating pages to design system, or when reviewing visual consistency.

**Reference Guidelines:**
- `/guidelines/design-tokens/colors.md`
- `/guidelines/design-tokens/typography.md`
- `/guidelines/design-tokens/borders.md`
- `/guidelines/design-tokens/radii.md`
- `/guidelines/design-tokens/shadows.md`
- `/reports/01-visual-design-report.md`

---

## Handcrafted Wines Design Language

**Core Aesthetic:** Warm, organic, hand-drawn inspired by wine-making and Paarl valley terroir

**Color Palette (`twb-` namespace):**
- Paper (#f5efe4) - Warm parchment backgrounds
- Ink (#1e1a17) - Deep charcoal text
- Vine (#5c6b4f) - Vineyard green accents
- Clay (#b86b4b) - Terracotta warm accents
- Plum (#5a2d3b) - Wine-inspired primary CTAs
- Gold (#c8a96b) - Muted premium gold

**Typography:**
- Headings: Serif (Playfair Display style)
- Body: Humanist sans-serif (Inter/Open Sans)
- Fluid scaling with `clamp()`

**Decorative Elements:**
- HandDrawnUnderline
- BrushStrokeBorder
- BrushStrokeDivider
- OrganicBorder
- WaxSealStamp
- WineLabelStamp
- PaperTexture

---

## Workflow Steps

### Step 1: Legacy Branding Pattern Scan

Scan all `.tsx` and `.css` files for KWV legacy content:

1. **Legacy color references:** Search for old KWV colors, burgundy (#8B0000), legacy palettes
2. **Old component patterns:** Identify components still using pre-redesign patterns (corporate flat cards, no organic elements)
3. **Inconsistent sections:** Flag pages mixing Handcrafted Wines aesthetic with legacy styling
4. **Brand mark usage:** Verify logo, colors, accent treatments follow boutique wine farm brand (not corporate KWV)
5. **Content tone:** Check for corporate language ("leveraging", "solutions", "synergies") instead of family farm voice

**Search Terms:**
- "KWV"
- "Cathedral Cellar"
- "Paarl Rock"
- "corporate"
- Hex colors not in twb palette

### Step 2: Typography Compliance

1. **Font stack violations:** Search for hardcoded `font-family` — only `var(--twb-font-*)` permitted
2. **Weight consistency:** Verify font weights use CSS variables, not numeric literals
3. **Size tokens:** All font sizes must use `clamp()` or `var(--twb-font-size-*)`
4. **Heading classes:** All headings should use `.twb-heading` or Typography component

**Check:**
- No hardcoded `font-family: 'Playfair Display'` (use variable)
- No hardcoded `font-size: 2rem` (use clamp or variable)
- No `font-weight: 700` in TSX (use CSS variable)

### Step 3: Border & Radius Treatment

1. **Border tokens:** All borders must use `var(--twb-border-*)` or `var(--twb-color-border-*)`
2. **Radius tokens:** All `border-radius` must use `var(--twb-radius-*)`:
   - `--twb-radius-card` (standard cards)
   - `--twb-radius-organic-1/2/3` (hand-drawn organic borders)
3. **Organic accents:** Verify decorative borders use OrganicBorder or BrushStrokeBorder components
4. **Hand-drawn elements:** Check for missing decorative flourishes on interactive elements

**Expected Patterns:**
- Product cards: Organic radius, subtle shadow
- Buttons: Organic radius, shadow on hover
- Inputs: Organic radius, border focus ring
- Sections: BrushStrokeDivider between major sections

### Step 4: Shadow & Depth Compliance

1. **Shadow tokens:** All `box-shadow` must use `var(--twb-shadow-*)`
2. **Paper effect:** Verify paper texture background where appropriate
3. **Layering:** Cards should have subtle depth with shadows
4. **No hardcoded shadows:** Search for inline `box-shadow` with raw values

**Shadow Tokens:**
- `--twb-shadow-sm` - Subtle card depth
- `--twb-shadow-md` - Standard elevation
- `--twb-shadow-lg` - Prominent elements
- `--twb-shadow-paper` - Paper texture effect

### Step 5: Spacing & Layout Compliance

1. **Spacing tokens:** All padding, margin, gap use `var(--twb-spacing-*)` or `clamp()`
2. **Section spacing:** Verify consistent section padding across pages
3. **Organic spacing:** Natural, not grid-perfect (slight irregularity acceptable for hand-drawn feel)
4. **Container patterns:** Verify container widths follow standards

**Check:**
- Section padding: `clamp(3rem, 5vh + 2rem, 8rem)`
- Container padding: `clamp(1rem, 4vw, 3rem)`
- Grid gaps: `clamp(1rem, 2vw, 2rem)`

### Step 6: Decorative Component Usage

Inventory decorative elements across pages:

1. **HandDrawnUnderline:** Used on key headings?
2. **BrushStrokeBorder:** Used on featured content?
3. **BrushStrokeDivider:** Used between major sections?
4. **OrganicBorder:** Used on cards/containers?
5. **WaxSealStamp:** Used for awards, certifications?
6. **WineLabelStamp:** Used for wine-related content?
7. **PaperTexture:** Used as background overlay?

**Expected Usage:**
- Homepage: Multiple decorative elements
- About pages: Hand-drawn underlines on headings
- Shop: Organic borders on product cards
- Wine Club: Wax seal stamp for exclusivity

### Step 7: Report

Save report to `/reports/style/hand-drawn-style-audit-YYYY-MM-DD.md` with compliance status, violations, and recommendations.

---

## Success Criteria

- [ ] Zero KWV legacy references (brand, colors, content)
- [ ] All typography uses `twb-` font variables exclusively
- [ ] All borders and radii use `twb-` design tokens
- [ ] Organic, hand-drawn aesthetic applied consistently
- [ ] Decorative elements used appropriately across pages
- [ ] All spacing uses `var(--twb-spacing-*)` or `clamp()`
- [ ] Family farm voice (not corporate) in all content
- [ ] Report saved to `/reports/style/`

---

**Maintained by:** Handcrafted Wines Development Team  
**Last Updated:** 2026-03-18  
**Related Prompts:** `audit tokens`, `audit css`, `apply bem`
