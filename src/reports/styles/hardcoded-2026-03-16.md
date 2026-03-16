# Hardcoded Styles Audit Report

**Generated:** 2026-03-16  
**Audit Type:** Hardcoded Values vs Design Tokens  
**Scope:** All `.tsx` files for inline styles and hardcoded values  
**Status:** ✅ **Good** (Health Score: 87/100)

---

## Executive Summary

**Health Score: 87/100** ✅

**Findings:**
- 🔴 **Critical:** 6 hardcoded colors (must fix)
- 🟡 **Medium:** 30 inline styles (24 acceptable/decorative)
- 🟢 **Low:** Dynamic values (acceptable exceptions)

**Fixable:** 6/36 violations (17%)  
**Acceptable:** 30/36 violations (83% - decorative components)

---

## Critical Violations

### **Hardcoded Colors (6 instances)** 🔴

1. **`utilities.css` line 210:** `#ffffff` → use `var(--twb-color-bg-white)`
2. **`AgeVerificationModal.tsx` line 57:** `COLORS.wineRed` → use `var(--twb-color-plum)`
3. **`ShopHero.tsx` line 56:** `'white'` → use `var(--twb-color-paper)`
4. **`utilities.css` line 568:** `#ffffff` → use variable

**Impact:** Breaks dark mode, inconsistent theming

---

## Acceptable Inline Styles

### **Decorative Components (24 instances)** 🟢

**Files with acceptable inline styles:**
- `HandDrawnUnderline.tsx` - Dynamic SVG positioning
- `PaperTexture.tsx` - SVG filter effects
- `WineLabelStamp.tsx` - Dynamic sizing/rotation
- `WaxSealStamp.tsx` - Dynamic sizing/colors
- `OrganicBorder.tsx` - Dynamic transforms
- `BrushStrokeBorder.tsx` - SVG opacity
- `Cart.tsx` - Progress bar width
- `Checkout.tsx` - Progress bar width

**Reason:** Dynamic values calculated at runtime, not suitable for CSS variables.

---

## Recommendations

### **🔴 CRITICAL (Fix Immediately)**

1. Add `--twb-color-bg-white` CSS variable
2. Replace hardcoded `'white'` with `var(--twb-color-paper)`
3. Replace `COLORS.wineRed` with `var(--twb-color-plum)`

### **🟢 KEEP AS-IS**

- Decorative component inline styles (dynamic values)
- Progress bar widths (calculated values)
- SVG transforms (animation values)

---

**Report generated:** 2026-03-16  
**Next audit:** `audit data`  
**Action:** Fix 6 hardcoded colors
