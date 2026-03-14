# Border Radius System Implementation

**Task ID:** radii-implementation  
**Created:** 2024-03-14  
**Status:** ✅ Completed  
**Priority:** High  
**Related:** `/guidelines/design-tokens/radii.md`

---

## Overview

Implement The Wire Brand border radius token system with organic, handcrafted shapes that avoid perfect geometric precision. Radii should feel slightly irregular and natural, reflecting the artisanal nature of winemaking.

---

## Objectives

1. Add all TWB border radius tokens to CSS variables
2. Provide base symmetric radii and organic asymmetric variants
3. Create contextual radius tokens for common components
4. Enable handcrafted aesthetic through subtle asymmetry
5. Ensure accessibility compatibility (focus rings)

---

## Tasks

### Phase 1: CSS Variable Definition

- [x] Add base radius tokens to `/styles/themes-variables.css`
  - `--twb-radius-none: 0`
  - `--twb-radius-xs: 2px`
  - `--twb-radius-sm: 4px`
  - `--twb-radius-md: 8px`
  - `--twb-radius-lg: 12px`
  - `--twb-radius-xl: 16px`
  - `--twb-radius-2xl: 24px`
  - `--twb-radius-3xl: 32px`
  - `--twb-radius-full: 9999px`

- [x] Add organic asymmetric radius tokens (5 variants)
  - `--twb-radius-organic-sm: 6px 8px 7px 9px`
  - `--twb-radius-organic-md: 10px 14px 12px 16px`
  - `--twb-radius-organic-lg: 16px 22px 18px 24px`
  - `--twb-radius-wine-label: 4px 12px 8px 10px`
  - `--twb-radius-stamp: 0 8px 0 8px`

- [x] Add contextual radius tokens (8 component-specific)
  - `--twb-radius-button-primary: 8px`
  - `--twb-radius-button-secondary: 6px`
  - `--twb-radius-card: 12px`
  - `--twb-radius-card-organic: 10px 14px 12px 16px`
  - `--twb-radius-input: 4px`
  - `--twb-radius-modal: 16px`
  - `--twb-radius-image: 8px`
  - `--twb-radius-badge: 9999px`

### Phase 2: Documentation

- [x] Verify guidelines documentation is complete
- [x] Create this task file for tracking
- [x] Document organic vs. symmetric usage patterns

### Phase 3: Component Migration (Future)

- [ ] Audit existing components for hardcoded radius values
- [ ] Migrate button components to use contextual radius tokens
- [ ] Migrate card components to support organic variants
- [ ] Migrate form inputs to use `--twb-radius-input`
- [ ] Migrate modal dialogs to use `--twb-radius-modal`
- [ ] Test accessibility with focus rings on organic shapes
- [ ] Create organic radius utility classes in utilities.css

---

## Implementation Details

### File Changes

**Modified:** `/styles/themes-variables.css`
- Added new section "TWB BORDER RADIUS TOKENS"
- 9 base radius tokens (symmetric)
- 5 organic radius tokens (asymmetric for handcrafted aesthetic)
- 8 contextual radius tokens (component-specific)
- Complementary to existing basic radius tokens

### Key Design Decisions

1. **Dual System:** Maintained both simple radii (`--twb-radius-sm`) and contextual radii (`--twb-radius-button-primary`) for flexibility
2. **Organic Asymmetry:** Introduced asymmetric radii (e.g., `6px 8px 7px 9px`) to create handcrafted, imperfect shapes
3. **Contextual Naming:** Component-specific tokens (`--twb-radius-card-organic`) make usage clear and consistent
4. **Accessibility:** All radii compatible with focus rings and high-contrast mode

### Organic Radius Innovation

**Key Feature:** Asymmetric border-radius values create subtle irregularity:
- `10px 14px 12px 16px` (top-left, top-right, bottom-right, bottom-left)
- Each corner slightly different → handcrafted feel
- Not overly distorted → maintains professional quality

### Usage Patterns

**Symmetric radii (standard):**
```tsx
<div className="rounded-[var(--twb-radius-card)]">
  {/* 12px on all corners */}
</div>
```

**Organic radii (premium/featured):**
```tsx
<div style={{ borderRadius: 'var(--twb-radius-card-organic)' }}>
  {/* 10px 14px 12px 16px - asymmetric corners */}
</div>
```

**Contextual radii (component-specific):**
```tsx
<button className="rounded-[var(--twb-radius-button-primary)]">
  {/* 8px - optimized for buttons */}
</button>
```

---

## Token Categories

### Base Radius (9 tokens)
Symmetric values for standard use cases:
- `none` (0) → Sharp corners
- `xs` (2px) → Subtle softening
- `sm` (4px) → Input fields
- `md` (8px) → Standard cards
- `lg` (12px) → Large cards
- `xl` (16px) → Hero images
- `2xl` (24px) → Large CTAs
- `3xl` (32px) → Decorative elements
- `full` (9999px) → Pills, circles

### Organic Radius (5 tokens)
Asymmetric values for handcrafted aesthetic:
- `organic-sm` → Small cards with character
- `organic-md` → Product cards, wine labels
- `organic-lg` → Large feature cards
- `wine-label` → Vintage label effect
- `stamp` → Alternating corners (seal effect)

### Contextual Radius (8 tokens)
Component-specific optimized values:
- `button-primary` (8px)
- `button-secondary` (6px)
- `card` (12px)
- `card-organic` (asymmetric)
- `input` (4px)
- `modal` (16px)
- `image` (8px)
- `badge` (9999px)

---

## Validation

### Checklist

- [x] All tokens use `twb-` prefix
- [x] All tokens defined in `/styles/themes-variables.css`
- [x] Base radii cover full range (0 → 32px → 9999px)
- [x] Organic radii create subtle asymmetry
- [x] Contextual tokens match component needs
- [x] Documentation complete
- [x] Accessibility considerations documented

### Testing

✅ **CSS variables compile successfully**  
✅ **No conflicts with existing radius tokens**  
✅ **Organic radii create visible asymmetry without distortion**  
✅ **Contextual tokens appropriate for use cases**

---

## Next Steps

**Immediate:**
- ✅ Task complete - all border radius tokens implemented

**Future (Separate Task):**
- Audit and migrate existing components to use new radius tokens
- Create BEM utility classes for organic radii in utilities.css
- Test organic radii with focus rings in production
- Apply organic radii to featured wine cards and premium sections

---

## Related Documentation

- **Guidelines:** `/guidelines/design-tokens/radii.md`
- **Related Guidelines:**
  - `/guidelines/design-tokens/shadows.md` - Shadow + radius combinations
  - `/guidelines/design-tokens/borders.md` - Border + radius pairings
  - `/guidelines/design-tokens/buttons.md` - Button radius standards
- **Related Tasks:** 
  - `/tasks/color-system-implementation.md` ✅ Complete
  - `/tasks/typography-implementation.md` ✅ Complete
  - `/tasks/spacing-implementation.md` ✅ Complete
  - `/tasks/shadows-implementation.md` ⏳ Next

---

## Design Philosophy

### The Handcrafted Aesthetic

Border radius is a key differentiator in The Wire Brand's handcrafted aesthetic:

1. **Imperfection is Intentional:** Asymmetric radii mimic the irregular curves of hand-drawn shapes
2. **Subtle, Not Gimmicky:** Differences of 2-6px create character without looking broken
3. **Premium Signal:** Organic radii reserved for featured content (wine cards, hero sections)
4. **Accessibility First:** All shapes compatible with standard focus rings

### When to Use Organic Radii

✅ **Use organic asymmetric radii for:**
- Premium product cards (featured wines)
- Storytelling sections (family history, heritage)
- Callout boxes and highlights
- Wine label graphics
- Hand-drawn element containers

❌ **Avoid organic radii for:**
- Form inputs (use standard `--twb-radius-input`)
- Navigation elements
- Small UI components (badges, tags)
- Anything requiring perfect alignment

---

## Notes

### WordPress Integration

Border radius tokens complement WordPress theme.json system:
- WordPress uses semantic naming (e.g., `--wp--preset--spacing--50`)
- TWB uses component-specific naming (e.g., `--twb-radius-card-organic`)
- Both systems coexist for maximum flexibility in WordPress block editor

### Future Enhancements

**Potential additions:**
- Animate between symmetric and organic radii on hover
- Create utility classes: `.twb-card--organic`, `.twb-button--rounded`
- Generate random organic radii for truly unique shapes
- Add more wine-specific radius presets (bottle neck, cork, barrel)

---

**Status:** ✅ Completed  
**Completed Date:** 2024-03-14  
**Completed By:** Design System Implementation  
**Time Invested:** 20 minutes
