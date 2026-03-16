# Apply BEM Methodology Prompt

**Category:** Code Quality  
**Domain:** CSS Architecture / Component Styling  
**Version:** 1.0.0  
**Last Updated:** 2026-03-16  
**Status:** Active  
**Trigger:** `apply bem`

---

## Purpose

Audit all `.tsx` React components for BEM methodology compliance, detect violations, apply fixes using 100% CSS variables from the existing design system, and recommend design token or CSS architecture expansions when needed.

**This prompt ensures:**
- ✅ All components use BEM classes (`twb-` namespace)
- ✅ Zero inline styles (replaced with CSS variables)
- ✅ Consistent naming conventions
- ✅ Full light/dark mode support
- ✅ WCAG 2.2 AA/AAA color contrast compliance
- ✅ WordPress-aligned CSS variable usage

---

## Workflow (6-Phase Process)

### **Phase 1: Discovery & Inventory** 📋

**Objective:** Build complete inventory of existing CSS architecture and BEM classes.

**Actions:**

1. **Read CSS Files:**
   - `/styles/globals.css` - Main entry point
   - `/styles/themes.css` - Theme orchestration
   - `/styles/themes-variables.css` - Core tokens (font families, spacing, base values)
   - `/styles/themes-light.css` - Light mode colors
   - `/styles/themes-dark.css` - Dark mode colors
   - `/styles/utilities.css` - BEM component classes

2. **Catalog Existing BEM Classes:**
   - Extract all `.twb-*` blocks (e.g., `.twb-hero`, `.twb-card`)
   - Extract all `__elements` (e.g., `.twb-hero__title`, `.twb-card__image`)
   - Extract all `--modifiers` (e.g., `.twb-hero--tall`, `.twb-card--wine`)
   - Build searchable inventory

3. **Catalog CSS Variables:**
   - Extract all `--wp-preset-*` variables (WordPress-aligned)
   - Extract all `--twb-*` variables (component aliases)
   - Build searchable inventory with values

4. **Document Findings:**
   - Create `/reports/bem/css-inventory-YYYY-MM-DD.md`
   - List all BEM blocks, elements, modifiers
   - List all CSS variables by category (colors, typography, spacing, etc.)

---

### **Phase 2: Component Audit** 🔍

**Objective:** Scan all `.tsx` files for BEM violations and anti-patterns.

**Violation Types to Detect:**

#### **1. Missing BEM Blocks**
**Pattern:** Components without root BEM class
```tsx
// ❌ BAD - No BEM class
<section className="relative flex items-center justify-center min-h-screen">
  <h1>Welcome</h1>
</section>

// ✅ GOOD - BEM block
<section className="twb-hero twb-hero--tall">
  <h1 className="twb-hero__title">Welcome</h1>
</section>
```

#### **2. Inline Styles (Anti-Pattern)**
**Pattern:** `style={{ ... }}` with hardcoded values
```tsx
// ❌ BAD - Inline styles
<div style={{ backgroundColor: '#f5efe4', padding: '2rem' }}>

// ✅ GOOD - CSS variables via BEM or Tailwind
<div className="bg-[var(--twb-color-bg-primary)] p-[var(--twb-spacing-section)]">
```

#### **3. Tailwind Instead of BEM (Context-Dependent)**
**Pattern:** Complex Tailwind chains where BEM exists

**When Tailwind is OK:**
- Utility classes for spacing/layout (ok to mix with BEM)
- One-off unique components
- Rapid prototyping

**When BEM Required:**
- Reusable components (appears 2+ times)
- Core brand components (Hero, Card, Button, etc.)
- Complex component patterns

```tsx
// ❌ BAD - Hero with pure Tailwind (BEM exists!)
<section className="relative flex items-center justify-center min-h-[calc(100dvh-90px)] bg-[var(--twb-color-bg-primary)]">
  <div className="relative z-20 max-w-[960px] px-[var(--twb-spacing-inner)] py-[var(--twb-spacing-section)] text-center">
    <h1 className="font-serif text-[var(--twb-text-h1)] font-bold mb-8">Title</h1>
  </div>
</section>

// ✅ GOOD - BEM with Tailwind utilities
<section className="twb-hero twb-hero--tall">
  <div className="twb-hero__content">
    <h1 className="twb-hero__title">Title</h1>
  </div>
</section>
```

#### **4. Inconsistent Naming**
**Pattern:** Variations of BEM naming
```tsx
// ❌ BAD - Inconsistent
<div className="hero-container">       // Missing namespace
<div className="twbHero">              // Wrong casing (should be kebab-case)
<div className="twb_hero">             // Wrong separator (should be hyphen)
<div className="twb-hero-title">       // Missing __ for element

// ✅ GOOD - Consistent BEM
<div className="twb-hero">             // Block
<div className="twb-hero__title">      // Element
<div className="twb-hero--tall">       // Modifier
```

#### **5. Orphan BEM Classes**
**Pattern:** BEM classes used in TSX but not defined in CSS
```tsx
// Component uses these classes:
<div className="twb-testimonial">
  <p className="twb-testimonial__quote">...</p>
</div>

// ❌ BAD - utilities.css doesn't define .twb-testimonial
// Result: Classes do nothing, styles break

// ✅ GOOD - utilities.css has definitions
.twb-testimonial { ... }
.twb-testimonial__quote { ... }
```

#### **6. Hardcoded Colors/Values**
**Pattern:** Direct hex/rgb values instead of CSS variables
```tsx
// ❌ BAD - Hardcoded values
<div className="bg-[#f5efe4] text-[#1e1a17]">
<div style={{ color: 'rgb(92, 107, 79)' }}>
<div className="shadow-[0_4px_6px_rgba(30,26,23,0.07)]">

// ✅ GOOD - CSS variables
<div className="bg-[var(--twb-color-bg-primary)] text-[var(--twb-color-text-primary)]">
<div className="text-[var(--twb-color-vine)]">
<div className="shadow-[var(--twb-shadow-md)]">
```

---

### **Phase 3: Violation Analysis** 📊

**Objective:** Categorize violations, prioritize fixes, identify patterns.

**Actions:**

1. **Create Violation Report:**
   - File: `/reports/bem/violations-YYYY-MM-DD.md`
   - Group violations by type
   - Count violations by component
   - Severity levels: 🔴 Critical, 🟠 High, 🟡 Medium, 🟢 Low

2. **Severity Definitions:**

| Severity | Criteria | Examples |
|----------|----------|----------|
| 🔴 **CRITICAL** | Breaks dark mode, WCAG fail, inline styles | `style={{ color: '#fff' }}` |
| 🟠 **HIGH** | Missing BEM on core components | Hero, Card, Button without BEM |
| 🟡 **MEDIUM** | Orphan classes, inconsistent naming | `.twb-hero-title` vs `.twb-hero__title` |
| 🟢 **LOW** | Tailwind where BEM could be used | One-off components |

3. **Pattern Detection:**
   - Identify repeated violations (same pattern in multiple files)
   - Detect missing BEM blocks that need creation
   - Find CSS variable gaps (colors/tokens not yet defined)

---

### **Phase 4: CSS Variable Mapping** 🗺️

**Objective:** Map all inline values to existing or new CSS variables.

**Inline Style → CSS Variable Mapping Table:**

| Inline Value | CSS Variable | File | Notes |
|--------------|--------------|------|-------|
| `#f5efe4` | `var(--twb-color-paper)` | `themes-light.css` | Light mode background |
| `#1e1a17` | `var(--twb-color-ink)` | `themes-light.css` | Text primary |
| `padding: 2rem` | `var(--twb-spacing-section)` | `themes-variables.css` | Section padding |
| `font-family: serif` | `var(--twb-font-serif)` | `themes-variables.css` | Heading font |
| `min-height: calc(100dvh - 90px)` | *Use BEM modifier* `.twb-hero--tall` | `utilities.css` | Hero tall variant |

**Token Gap Analysis:**

**If a value has NO matching CSS variable:**
- 🔴 **STOP** - Do not hardcode!
- 📝 Document the gap in violation report
- 🎯 Recommend: `audit tokens` or `audit css`

**Example Token Gaps:**
```tsx
// Found in component:
<div style={{ borderRadius: '12px' }}>  // No --twb-radius-xl exists!
<div className="text-[18px]">            // No --twb-text-body-lg exists!

// Recommendation in report:
⚠️ **Token Gap Detected:**
- Missing: `--twb-radius-xl` (12px)
- Missing: `--twb-text-body-lg` (18px)

**Action Required:** Run `audit tokens` to expand design system.
```

---

### **Phase 5: Apply Fixes** 🔧

**Objective:** Automatically fix violations using existing CSS variables and BEM classes.

**Fix Strategy by Violation Type:**

#### **Fix 1: Add Missing BEM Blocks**
```tsx
// Before
<section className="relative flex items-center min-h-screen">

// After (using existing BEM from utilities.css)
<section className="twb-hero twb-hero--tall">
```

#### **Fix 2: Replace Inline Styles**
```tsx
// Before
<div style={{ backgroundColor: '#f5efe4', padding: '2rem' }}>

// After
<div className="bg-[var(--twb-color-bg-primary)] p-[var(--twb-spacing-section)]">
```

#### **Fix 3: Convert Tailwind to BEM (When BEM Exists)**
```tsx
// Before (Hero component using Tailwind)
<h1 className="font-serif text-[clamp(2.4rem,5vw+1rem,4.5rem)] font-bold text-center mb-8">

// After (using BEM from utilities.css)
<h1 className="twb-hero__title">
```

#### **Fix 4: Standardize Naming**
```tsx
// Before
<div className="hero-title">  // Missing namespace
<div className="twb-hero-title">  // Missing __ separator

// After
<div className="twb-hero__title">
```

#### **Fix 5: Create Missing BEM Definitions**

**If component needs BEM class that doesn't exist:**

1. Add to `/styles/utilities.css`
2. Use 100% CSS variables (no hardcoded values!)
3. Include light/dark mode support
4. Add JSDoc documentation

**Example: Add `.twb-testimonial`**

```css
/* ============================================
   TESTIMONIAL COMPONENT (BEM)
   Usage: <article class="twb-testimonial twb-testimonial--featured">
   ============================================ */

/**
 * Testimonial Block
 * 
 * Displays customer testimonials with quote, author, and optional image.
 * 
 * Light Mode: Paper background, ink text
 * Dark Mode: Dark surface, light text
 */
.twb-testimonial {
  padding: var(--twb-spacing-section);
  background-color: var(--twb-color-bg-secondary);
  border-radius: var(--twb-radius-card);
  border-left: 4px solid var(--twb-color-vine);
}

.twb-testimonial__quote {
  font-family: var(--twb-font-serif);
  font-size: var(--twb-text-body-large);
  font-style: italic;
  color: var(--twb-color-text-primary);
  margin-bottom: var(--wp-preset-spacing-40);
}

.twb-testimonial__author {
  font-family: var(--twb-font-sans);
  font-size: var(--twb-text-body);
  font-weight: var(--twb-font-weight-semibold);
  color: var(--twb-color-text-secondary);
}

/* Modifier: Featured testimonial */
.twb-testimonial--featured {
  border-color: var(--twb-color-plum);
  box-shadow: var(--twb-shadow-lg);
}
```

**Requirements for New BEM Classes:**
- ✅ Use `twb-` namespace
- ✅ Follow BEM naming (Block__Element--Modifier)
- ✅ 100% CSS variables (no hardcoded colors/values)
- ✅ Light/dark mode compatible
- ✅ WCAG 2.2 AA contrast (minimum 4.5:1 for text)
- ✅ JSDoc comment with usage example
- ✅ Retro design aesthetic (hand-drawn, organic)

---

### **Phase 6: WCAG Contrast Validation** ♿

**Objective:** Ensure all color combinations meet WCAG 2.2 AA/AAA standards.

**Actions:**

1. **Extract All Color Combinations:**
   - Text + Background pairs
   - Border + Background pairs
   - Icon + Background pairs

2. **Check Contrast Ratios:**

**WCAG 2.2 Requirements:**
- **Normal text (< 18px):** 4.5:1 (AA), 7:1 (AAA)
- **Large text (≥ 18px):** 3:1 (AA), 4.5:1 (AAA)
- **UI components:** 3:1 (AA)

3. **Validate Both Modes:**
   - Light mode: Check all `themes-light.css` colors
   - Dark mode: Check all `themes-dark.css` colors

4. **Common Violations:**

```css
/* ❌ FAIL - Insufficient contrast */
/* Light mode: #c8a96b (gold) on #f5efe4 (paper) = 2.1:1 */
.twb-badge {
  color: var(--twb-color-gold);
  background-color: var(--twb-color-bg-primary);
}

/* ✅ PASS - Sufficient contrast */
/* Light mode: #5a2d3b (plum) on #f5efe4 (paper) = 8.2:1 */
.twb-badge {
  color: var(--twb-color-plum);
  background-color: var(--twb-color-bg-primary);
}
```

5. **Report WCAG Failures:**
   - Document all contrast failures in violation report
   - Recommend color adjustments
   - Suggest `audit css` if systematic issue

---

## Output Requirements

### **1. Violation Report**

**File:** `/reports/bem/violations-YYYY-MM-DD.md`

**Sections:**
1. **Executive Summary**
   - Total violations by type
   - Severity breakdown
   - Health score (0-100)

2. **Violation Details by Type**
   - Missing BEM blocks (list all files)
   - Inline styles (list all instances with line numbers)
   - Orphan classes (list all undefined classes)
   - Naming inconsistencies (list all violations)
   - Token gaps (list all missing CSS variables)

3. **WCAG Contrast Failures**
   - All color pairs that fail AA/AAA
   - Suggested fixes

4. **Token Gap Analysis**
   - Missing CSS variables
   - Recommended values
   - Action: Run `audit tokens` or `audit css`

5. **Fix Recommendations**
   - Prioritized list of fixes
   - Estimated effort
   - Sample code for each fix type

---

### **2. Apply Fixes Automatically**

**After generating report, ask user:**

> **BEM Audit Complete!**  
> Found [X] violations across [Y] components.
>
> **Would you like me to apply fixes automatically?**
> - ✅ Yes - Apply all fixes now
> - 📝 Review - Show me the report first
> - 🎯 Selective - Let me choose which fixes to apply

**If user approves:**
- Apply all fixes across all `.tsx` files
- Create new BEM classes in `utilities.css` (if needed)
- Update components to use CSS variables
- Validate WCAG contrast

**Track Changes:**
- List all files modified
- List all BEM classes created
- List all inline styles removed
- Show before/after comparison

---

### **3. Token Gap Report (If Needed)**

**File:** `/reports/bem/token-gaps-YYYY-MM-DD.md`

**Include:**
- All values found in components with no CSS variable match
- Recommended variable names
- Suggested values
- Where to add (which CSS file)

**Example:**
```markdown
## Token Gaps Detected

### Typography Gaps
- **Missing:** `--twb-text-body-lg` (18px)
- **Found in:** `Hero.tsx`, `About.tsx`, `Testimonial.tsx`
- **Recommendation:** Add to `themes-variables.css`
  ```css
  --twb-text-body-lg: 1.125rem; /* 18px */
  ```

### Border Radius Gaps
- **Missing:** `--twb-radius-xl` (12px)
- **Found in:** `Card.tsx`, `Modal.tsx`
- **Recommendation:** Add to `themes-variables.css`
  ```css
  --twb-radius-xl: 0.75rem; /* 12px */
  ```

**Action Required:** Run `audit tokens` to expand design system.
```

---

## Retro Design Compliance

**All BEM classes must follow retro aesthetic guidelines:**

### **Design Principles**
1. **Organic, hand-drawn aesthetic**
   - Slightly imperfect borders (not pixel-perfect)
   - Organic border-radius values (0.5rem, 0.75rem, not 8px)
   - Hand-drawn feel (subtle texture, natural spacing)

2. **Warm, earthy color palette**
   - Paper (`#f5efe4`), Ink (`#1e1a17`), Vine (`#5c6b4f`)
   - Clay (`#b86b4b`), Plum (`#5a2d3b`), Gold (`#c8a96b`)
   - No bright neon colors, no pure black/white

3. **Serif + Sans pairings**
   - Headings: Playfair Display (serif)
   - Body: Inter (sans-serif)
   - No monospace or display fonts

4. **Natural spacing**
   - Fluid typography with `clamp()`
   - Organic padding/margins (multiples of 0.25rem)
   - No hard grid systems

**Reference Guidelines:**
- `/guidelines/design-tokens/colors.md`
- `/guidelines/design-tokens/typography.md`
- `/guidelines/design-tokens/spacing.md`
- `/guidelines/design-tokens/borders.md`
- `/guidelines/design-tokens/radii.md`

---

## Success Criteria

**BEM Audit Passes When:**

✅ **Zero inline styles** - All `style={{}}` removed  
✅ **All core components use BEM** - Hero, Card, Button, etc.  
✅ **100% CSS variable usage** - No hardcoded colors/values  
✅ **Consistent naming** - All `twb-BlockName__element--modifier`  
✅ **No orphan classes** - All BEM classes defined in `utilities.css`  
✅ **WCAG 2.2 AA compliance** - All color pairs ≥ 4.5:1 contrast  
✅ **Light/dark mode support** - All components work in both modes  
✅ **Retro aesthetic compliance** - Follows design token guidelines  

**Health Score Formula:**
```
Health Score = (
  (BEM Coverage × 0.30) +
  (CSS Variable Usage × 0.25) +
  (Zero Inline Styles × 0.20) +
  (WCAG Compliance × 0.15) +
  (Naming Consistency × 0.10)
) × 100
```

**Target:** ≥ 95/100

---

## Edge Cases & Special Rules

### **When Tailwind is Preferred Over BEM**

**OK to use Tailwind:**
- Unique one-off layouts (appears only once)
- Rapid prototyping / experimental features
- Utility classes (spacing, display, flexbox)
- Responsive modifiers (`md:`, `lg:`)

**Example:**
```tsx
// ✅ GOOD - BEM block + Tailwind utilities
<section className="twb-hero twb-hero--tall">
  <div className="twb-hero__content flex flex-col gap-4 md:gap-6">
    <h1 className="twb-hero__title">Title</h1>
  </div>
</section>
```

### **When to Create New BEM Classes**

**Create BEM class if:**
- Component appears 2+ times across codebase
- Complex styling that would create 10+ Tailwind classes
- Core brand component (matches design system)
- Needs light/dark mode variants

**Don't create BEM class if:**
- One-off component (appears once)
- Simple utility styling (padding, margin)
- Experimental/prototype feature

---

## Integration with Other Audits

### **Relationship to `audit css`**

**`apply bem` focuses on:**
- Component-level BEM compliance
- Inline style removal
- CSS variable usage in components

**`audit css` focuses on:**
- CSS architecture health
- File organization
- Variable naming consistency
- Unused CSS classes

**When to run each:**
- Run `apply bem` → Fix component violations
- Run `audit css` → Fix architecture issues
- Run both if major refactor needed

### **Relationship to `audit tokens`**

**`apply bem` detects:**
- Missing CSS variables (token gaps)
- Hardcoded values that need tokens

**`audit tokens` expands:**
- Design token system
- Creates new CSS variables
- Updates token documentation

**Workflow:**
1. Run `apply bem`
2. If token gaps found → Run `audit tokens`
3. `audit tokens` creates new variables
4. Run `apply bem` again to apply new tokens

---

## Example Workflow

### **User Types:** `apply bem`

**AI Response:**

> **🔍 BEM Compliance Audit Starting...**
>
> **Phase 1: Discovery & Inventory**
> - Reading `/styles/` files...
> - Found 12 BEM blocks, 45 elements, 8 modifiers
> - Found 87 CSS variables (42 `--wp-preset-*`, 45 `--twb-*`)
> - Inventory complete: `/reports/bem/css-inventory-2026-03-16.md`
>
> **Phase 2: Component Audit**
> - Scanning 47 `.tsx` files...
> - Detected 23 violations across 8 components
> - Violations by type:
>   - 🔴 Inline styles: 8 instances
>   - 🟠 Missing BEM: 6 components
>   - 🟡 Orphan classes: 5 classes
>   - 🟡 Naming inconsistencies: 4 instances
>
> **Phase 3: Violation Analysis**
> - Critical violations: 8
> - High priority: 6
> - Medium priority: 9
> - Health Score: **67/100** ⚠️ Needs Improvement
>
> **Phase 4: CSS Variable Mapping**
> - Mapped 18/20 inline values to CSS variables
> - **Token Gaps Detected:** 2 missing variables
>   - Missing: `--twb-radius-xl` (used in Card.tsx, Modal.tsx)
>   - Missing: `--twb-text-caption` (used in Badge.tsx)
>
> **Phase 5: WCAG Validation**
> - Checked 34 color combinations
> - **3 contrast failures detected** (all in dark mode)
>   - Gold on dark surface: 2.8:1 (needs 4.5:1) ❌
>   - Clay on dark surface: 3.1:1 (needs 4.5:1) ❌
>   - Vine on paper: 3.9:1 (needs 4.5:1) ⚠️
>
> **Violation Report Generated:** `/reports/bem/violations-2026-03-16.md`
>
> ---
>
> **🎯 Recommendations:**
> 1. **Apply Fixes Now** - Fix 21/23 violations automatically
> 2. **Run `audit tokens`** - Add 2 missing CSS variables
> 3. **Run `audit css`** - Fix 3 WCAG contrast failures
>
> **Would you like me to apply fixes automatically?**
> - ✅ Yes - Apply all fixes now
> - 📝 Review - Show me the report first
> - 🎯 Selective - Let me choose which fixes

---

## Prompt Maintenance

**Update this prompt when:**
- New BEM blocks added to `utilities.css`
- CSS architecture changes (new files, new structure)
- New design tokens added
- WCAG standards updated (2.2 → 2.3)
- Retro design aesthetic evolves

**Version History:**
- v1.0.0 (2026-03-16): Initial prompt created

---

**End of Prompt**

**Related Prompts:**
- `audit css` - CSS architecture health
- `audit tokens` - Design token system audit
- `audit styles` - Hardcoded styles vs tokens
- `audit a11y` - WCAG accessibility audit

**Related Guidelines:**
- `/guidelines/development/css-architecture.md`
- `/guidelines/development/wordpress-css-variables.md`
- `/guidelines/design-tokens/*.md`
