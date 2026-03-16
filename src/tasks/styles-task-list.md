# Hardcoded Styles Task List

**Generated From:** `/reports/styles/hardcoded-2026-03-16.md`  
**Created:** 2026-03-16  
**Status:** ✅ Good (Health Score: 87/100)  
**Action Required:** Fix 6 hardcoded colors

---

## Critical Tasks (4 tasks)

- [ ] **STY-001:** Fix hardcoded `#ffffff` in `utilities.css` line 210
  - Replace with `var(--twb-color-bg-white)`
  - Requires adding CSS variable first (see TOK-001)
  
- [ ] **STY-002:** Fix hardcoded `COLORS.wineRed` in `AgeVerificationModal.tsx` line 57
  - Replace with `var(--twb-color-plum)`
  
- [ ] **STY-003:** Fix hardcoded `'white'` in `ShopHero.tsx` line 56
  - Replace `borderColor: 'white', color: 'white'` with `var(--twb-color-paper)`
  
- [ ] **STY-004:** Fix hardcoded `#ffffff` in `utilities.css` line 568
  - Replace with CSS variable

---

## Acceptable Inline Styles (No Action Required)

- [x] **STY-005:** ~~Decorative components use inline styles~~ (ACCEPTABLE)
  - `HandDrawnUnderline.tsx` - Dynamic SVG positioning
  - `PaperTexture.tsx` - SVG filter effects
  - `WineLabelStamp.tsx` - Dynamic sizing/rotation
  - `WaxSealStamp.tsx` - Dynamic sizing/colors
  - `OrganicBorder.tsx` - Dynamic transforms
  - Progress bars (`Cart.tsx`, `Checkout.tsx`) - Dynamic widths
  - **Reason:** Values calculated at runtime

---

## Completed Tasks (1 task)

- [x] **STY-006:** ~~Hardcoded styles audit complete~~ (2026-03-16)

---

**Next Actions:**
1. Add `--twb-color-bg-white` variable
2. Replace 4 hardcoded color references
3. Test light + dark mode after changes
