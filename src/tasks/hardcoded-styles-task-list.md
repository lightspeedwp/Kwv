# Hardcoded Styles Migration Task List

**Version:** 1.0  
**Created:** 2026-03-15  
**Source Report:** `/reports/styles/2026-03-15.md`  
**Health Score:** 72/100 ⚠️ Needs Improvement  
**Status:** Active

---

## Overview

This task list tracks the migration of 96 hardcoded hex color values to CSS variables. All violations are concentrated in 6 checkout/order components. Main customer-facing pages are 100% clean.

**Priority:** Complete CSS variable migration to enable dark mode and ensure brand consistency.

---

## Critical Tasks (Fix Immediately) - Phase 1

### **Checkout Forms Migration** (2 hours)

- [ ] **Migrate ShippingAddressForm.tsx** (1 hour)
  - **Violations:** 34 hardcoded colors
  - **File:** `/components/shop/checkout/ShippingAddressForm.tsx`
  - **Replacements:**
    - `text-[#333333]` → `text-[var(--twb-color-text-primary)]` (15 instances)
    - `text-[#111111]` → `text-[var(--twb-color-text-primary)]` (5 instances)
    - `focus:border-[#2C1810]` → `focus:border-[var(--twb-color-plum)]` (4 instances)
    - `border-gray-300` → `border-[var(--twb-border-primary)]` (10 instances)
  - **Impact:** Dark mode incompatible, brand inconsistency
  - **Priority:** 🔴 Critical

- [ ] **Migrate BillingAddressForm.tsx** (1 hour)
  - **Violations:** 32 hardcoded colors
  - **File:** `/components/shop/checkout/BillingAddressForm.tsx`
  - **Replacements:**
    - `text-[#333333]` → `text-[var(--twb-color-text-primary)]` (14 instances)
    - `text-[#111111]` → `text-[var(--twb-color-text-primary)]` (4 instances)
    - `focus:border-[#2C1810]` → `focus:border-[var(--twb-color-plum)]` (4 instances)
    - `border-gray-300` → `border-[var(--twb-border-primary)]` (10 instances)
  - **Impact:** Dark mode incompatible, brand inconsistency
  - **Priority:** 🔴 Critical

**Subtotal:** 66 violations → 2 hours

---

### **Order Confirmation Migration** (1 hour)

- [ ] **Migrate OrderStatusHeader.tsx** (1 hour)
  - **Violations:** 25 hardcoded colors
  - **File:** `/components/shop/order/OrderStatusHeader.tsx`
  - **Replacements:**
    - `text-[#333333]` → `text-[var(--twb-color-text-primary)]` (20 instances)
    - `border-[#D3D3D3]` → `border-[var(--twb-border-secondary)]` (5 instances)
  - **Impact:** Dark mode incompatible, visual inconsistency
  - **Priority:** 🔴 Critical

**Subtotal:** 25 violations → 1 hour

---

## High Priority Tasks (This Sprint) - Phase 2

### **Form Controls Migration** (30 minutes)

- [ ] **Migrate PickupLocationSelect.tsx** (10 minutes)
  - **Violations:** 3 hardcoded colors
  - **File:** `/components/shop/checkout/PickupLocationSelect.tsx`
  - **Replacements:**
    - `border-[#333333]` → `border-[var(--twb-border-primary)]`
    - `text-[#333333]` → `text-[var(--twb-color-text-primary)]` (2 instances)
  - **Priority:** 🟡 High

- [ ] **Migrate RadioButton.tsx** (10 minutes)
  - **Violations:** 1 hardcoded color
  - **File:** `/components/shop/checkout/RadioButton.tsx`
  - **Replacements:**
    - `peer-checked:border-[#8B0000]` → `peer-checked:border-[var(--twb-color-plum)]`
  - **Priority:** 🟡 High

- [ ] **Migrate Checkbox.tsx** (10 minutes)
  - **Violations:** 1 hardcoded color
  - **File:** `/components/shop/checkout/Checkbox.tsx`
  - **Replacements:**
    - `peer-checked:bg-[#111111]` → `peer-checked:bg-[var(--twb-color-plum)]`
    - `peer-checked:border-[#111111]` → `peer-checked:border-[var(--twb-color-plum)]`
  - **Priority:** 🟡 High

**Subtotal:** 5 violations → 30 minutes

---

## Medium Priority Tasks (Next Sprint)

### **Magic Number Font Sizes** (~50 violations)

- [ ] **Audit text-[XXpx] instances** (1 hour)
  - Search for: `text-\[[0-9]+px\]`
  - Common violations:
    - `text-[19px]` (should be `text-[var(--twb-font-size-body)]`)
    - `text-[23px]` (should map to named size variable)
  - **Files:** ShippingAddressForm.tsx, BillingAddressForm.tsx, OrderStatusHeader.tsx
  - **Impact:** Inconsistent typography
  - **Priority:** 🟢 Medium

- [ ] **Create missing font size variables if needed** (30 minutes)
  - Map all hardcoded sizes to CSS variables
  - Add to `themes-variables.css`
  - Document in typography guidelines
  - **Priority:** 🟢 Medium

- [ ] **Migrate font sizes to CSS variables** (1 hour)
  - Replace all `text-[XXpx]` with `text-[var(--twb-font-size-*)]`
  - Test responsive scaling
  - **Priority:** 🟢 Medium

**Subtotal:** ~50 violations → 2.5 hours

---

## Low Priority Tasks (Future)

- [ ] **Audit hardcoded spacing values** (1 hour)
  - Find: `h-[XXpx]`, `w-[XXpx]`, custom padding/margins
  - Examples: `h-[58px]` (input height)
  - Map to `--twb-spacing-*` tokens
  - **Priority:** 🔵 Low

- [ ] **Migrate spacing to CSS variables** (2 hours)
  - Replace magic number spacing with tokens
  - Test layout stability
  - **Priority:** 🔵 Low

- [ ] **Create ESLint rule to prevent hardcoded colors** (2 hours)
  - Rule: `no-hardcoded-colors`
  - Detect: `className=.*\[#[0-9A-Fa-f]{3,6}\]`
  - Auto-fix suggestion to CSS variable
  - **Priority:** 🔵 Low

---

## Color Mapping Reference

### **Quick Reference Table**

| Hardcoded Color | Purpose | CSS Variable |
|-----------------|---------|--------------|
| `#333333` | Text (dark gray) | `var(--twb-color-text-primary)` |
| `#111111` | Text (near-black) | `var(--twb-color-text-primary)` |
| `#2C1810` | Focus border (brown) | `var(--twb-color-plum)` |
| `#8B0000` | Radio checked (dark red) | `var(--twb-color-plum)` |
| `#D3D3D3` | Border (light gray) | `var(--twb-border-secondary)` |
| `gray-300` | Border (Tailwind) | `var(--twb-border-primary)` |

---

## Progress Tracking

### **Phase 1: Critical (3.5 hours)**

- [ ] ShippingAddressForm.tsx (34 violations)
- [ ] BillingAddressForm.tsx (32 violations)
- [ ] OrderStatusHeader.tsx (25 violations)
- **Total:** 91/96 violations (95%)

### **Phase 2: High Priority (30 minutes)**

- [ ] PickupLocationSelect.tsx (3 violations)
- [ ] RadioButton.tsx (1 violation)
- [ ] Checkbox.tsx (1 violation)
- **Total:** 5/96 violations (5%)

### **Phase 3: Medium Priority (2.5 hours)**

- [ ] Magic number font sizes (~50 violations)

### **Phase 4: Low Priority (5 hours)**

- [ ] Hardcoded spacing values
- [ ] ESLint rule creation

---

## Success Criteria

- [ ] 0/96 hardcoded color violations remaining
- [ ] All checkout forms support dark mode
- [ ] All form controls use brand plum color
- [ ] Typography uses CSS variables
- [ ] Automated linting prevents future violations

**Target Health Score:** 100/100

---

## Testing Checklist

After each migration phase:

- [ ] Forms display correctly in light mode
- [ ] Forms display correctly in dark mode
- [ ] Focus states use brand plum color (#5a2d3b equivalent)
- [ ] Text remains readable (4.5:1 contrast minimum)
- [ ] Borders visible in both themes
- [ ] No console errors or warnings
- [ ] Interactive states work (hover, focus, active)
- [ ] Typography scales responsively

---

## Violation Breakdown

### **By File:**

| File | Violations | Priority | Time |
|------|------------|----------|------|
| ShippingAddressForm.tsx | 34 | 🔴 Critical | 1h |
| BillingAddressForm.tsx | 32 | 🔴 Critical | 1h |
| OrderStatusHeader.tsx | 25 | 🔴 Critical | 1h |
| PickupLocationSelect.tsx | 3 | 🟡 High | 10m |
| RadioButton.tsx | 1 | 🟡 High | 10m |
| Checkbox.tsx | 1 | 🟡 High | 10m |
| **Total** | **96** | | **3.5h** |

### **By Color:**

- `#333333` - 60+ instances (most common)
- `#111111` - 10+ instances
- `#D3D3D3` - 5 instances
- `#2C1810` - 4 instances
- `#8B0000` - 1 instance
- `gray-300` - 16 instances

---

## Notes

- ✅ Main customer-facing pages (24 pages) are 100% clean
- ⚠️ Only checkout/order pages need migration
- ✅ No inline `style=""` attributes found (all violations in className)
- ✅ Good: All colors are in Tailwind className, easy to find/replace
- ⚠️ Dark mode currently broken for checkout flow due to hardcoded colors

---

**Last Updated:** 2026-03-15  
**Next Review:** After Phase 1 migration (3.5 hours)  
**Target Completion:** 2026-03-22
