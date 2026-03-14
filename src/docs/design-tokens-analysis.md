# Design Token Guidelines Analysis

## Executive Summary

This document analyzes 10 proposed design token guideline files for addition to `/guidelines/design-tokens/`. The analysis compares proposed content against existing Guidelines.md documentation to identify gaps, overlaps, and recommended implementations.

**Date:** 2026-03-13  
**Status:** Pre-implementation Review  
**Target Folder:** `/guidelines/design-tokens/`

---

## Current State

### Existing Documentation in Guidelines.md

The main `Guidelines.md` (1300+ lines) contains comprehensive design token information scattered across multiple sections:

- **Section 3.1**: Color tokens (TWB palette with 6 core colors + legacy deprecation notes)
- **Section 3.2**: Typography (Fluid clamp() rules for H1-H6, body text, weights)
- **Section 3.4**: Spacing & containers (Fluid spacing, container variants)
- **Section 3.5**: Token architecture (Grouping strategy: color.*, space.*, font.*, radius.*)
- **Section 3.6**: Hero component standards (Heights, padding, scroll arrows)
- **Section 3.7**: Breakpoints & responsive (Mobile-first, 4 breakpoints, touch targets 44x44px)
- **Section 1.6**: Motion & animation (Reduced motion, carousel timing)
- **Section 1.7**: Forms (Validation, error states, labels)
- **Section 10.4**: Micro-interactions (Hover states, transitions, feedback)

**What's Missing:**
- ❌ Systematic shadow/elevation tokens
- ❌ Border style tokens
- ❌ Dark/light mode strategy (only mentioned in passing)
- ❌ Dedicated button variant documentation
- ❌ Icon sizing/color tokens
- ❌ Border-radius scale (mentioned but not documented)
- ❌ Navigation-specific tokens

---

## Proposed Files Analysis

### 1. ✅ animations-1.md

**Status:** **CREATE** (Expands existing Section 1.6 & 10.4)

**What Exists in Guidelines.md:**
- Section 1.6: "Respect prefers-reduced-motion", "Swap heavy motion for fades"
- Section 10.4: "Use transition-all duration-300"
- Build tools note: "Motion (formerly Framer Motion)"

**What This Adds:**
- Dedicated canonical token map for animation durations, easing curves, delays
- Structured audit checklist for animation consistency
- Centralized reference for all motion tokens

**Recommendation:** ✅ **IMPLEMENT**  
**Rationale:** Elevates scattered animation rules into a systematic token reference. Critical for consistent micro-interactions.

---

### 2. ✅ borders-1.md

**Status:** **CREATE** (Fills a gap)

**What Exists in Guidelines.md:**
- Section 3.1: "Use wavy, organic borders instead of straight lines"
- Section 3.1: "Add hand-drawn underlines to headings (using border-image)"
- Brief mention of border tokens in token architecture (Section 3.5)

**What This Adds:**
- Token map for border widths (1px, 2px, etc.)
- Border style tokens (solid, dashed, hand-drawn SVG patterns)
- Border color semantic tokens (border-primary, border-muted, etc.)

**Recommendation:** ✅ **IMPLEMENT**  
**Rationale:** Border styling is mentioned conceptually but never tokenized. This file enables systematic border usage aligned with the hand-drawn aesthetic.

---

### 3. ⚠️ dark-light-mode-1.md

**Status:** **CREATE WITH CAUTION** (Currently not implemented)

**What Exists in Guidelines.md:**
- Section 3.5: Brief mention of "Palette variations (e.g. light, dark, high contrast)"
- No actual dark mode implementation documented

**What This Adds:**
- Framework for future dark mode implementation
- Token switching strategy (CSS variables, theme context)
- Semantic color mapping for theme support

**Recommendation:** ⚠️ **DEFER OR DOCUMENT AS "NOT YET IMPLEMENTED"**  
**Rationale:** The Wire Brand does not currently implement dark mode. This file should either:
1. Be created with a "STATUS: Not implemented" header, OR
2. Be deferred until dark mode is actually designed

**Suggested Header Addition:**
```markdown
## Implementation Status
⚠️ **NOT YET IMPLEMENTED** - The Wire Brand currently uses a single light theme. This document serves as a framework for future dark mode implementation.
```

---

### 4. ✅ buttons-1.md

**Status:** **CREATE** (Critical gap)

**What Exists in Guidelines.md:**
- Section 3.6: "Primary hero buttons must use variant='hero' or 'heroGold'"
- Section 3.1: Color usage mentions "primary CTAs" using plum (#5a2d3b)
- Section 10.4: Hover states must be visible
- Touch targets: 44x44px minimum

**What This Adds:**
- Comprehensive button variant documentation (Primary, Secondary, Tertiary, Destructive, Ghost, Hero, HeroGold)
- Size variants (sm, md, lg, xl)
- State tokens (hover, active, disabled, focus-visible)
- Icon button specific rules
- Shadow treatment per variant

**Recommendation:** ✅ **IMPLEMENT IMMEDIATELY**  
**Rationale:** Buttons are mentioned across 6+ sections but never consolidated. This is a critical component guideline that belongs in design-tokens/.

---

### 5. ✅ colors-1.md

**Status:** **CREATE** (Consolidates existing + adds semantic layer)

**What Exists in Guidelines.md:**
- Section 3.1: Full TWB palette (6 colors: paper, ink, vine, clay, plum, gold)
- Legacy color migration notes
- Hand-drawn aesthetic guidelines

**What This Adds:**
- Semantic color token layer (surface-primary, text-body, border-default, accent-primary, etc.)
- Dark/light mode mapping structure (even if light-only currently)
- Systematic audit checklist for color usage
- Cross-reference to components using each token

**Recommendation:** ✅ **IMPLEMENT**  
**Rationale:** Moves from raw palette tokens to semantic tokens. Essential for maintainability. Should reference but not replace Section 3.1.

**Suggested Structure:**
```markdown
## Palette Tokens (Foundation)
See Guidelines.md Section 3.1 for the canonical TWB palette.

## Semantic Color Tokens (Application Layer)
| Token | Light Mode Value | Usage | Components |
|---|---|---|---|
| color.surface.primary | var(--twb-color-paper) | Page background | Layout, Hero |
| color.text.body | var(--twb-color-ink) | Body copy | Typography |
| color.cta.primary | var(--twb-color-plum) | Primary buttons | Button, Hero CTAs |
```

---

### 6. ✅ forms-1.md

**Status:** **CREATE** (Expands existing Section 1.7)

**What Exists in Guidelines.md:**
- Section 1.7: Forms, validation & messaging
- Floating label pattern mentioned in Checkout Flow Patterns (Section 13.1)
- Touch target requirements (Section 3.7)

**What This Adds:**
- Form control sizing tokens (input height, padding, border)
- Label spacing and typography tokens
- Error/success state color and icon tokens
- Focus ring treatment
- Helper text sizing
- Checkbox/radio sizing

**Recommendation:** ✅ **IMPLEMENT**  
**Rationale:** Forms are extensively used (Checkout, Contact, Newsletter). Tokenizing form controls ensures consistency across all implementations.

---

### 7. ✅ navigation-1.md

**Status:** **CREATE** (Consolidates navigation rules)

**What Exists in Guidelines.md:**
- Section 1.4: Keyboard navigation requirements
- Breadcrumbs mentioned in component architecture
- Mega menu template parts listed (Section 5.5)
- Mobile nav accessibility rules

**What This Adds:**
- Navigation link spacing tokens
- Active/hover/focus state colors
- Mobile nav dimensions (drawer width, header height)
- Breadcrumb separator styling
- Tab indicator styling
- Pagination button sizing

**Recommendation:** ✅ **IMPLEMENT**  
**Rationale:** Navigation is complex (Corporate Header, Shop Header, Mobile Nav, Breadcrumbs, Pagination). This consolidates all nav-related tokens.

---

### 8. ✅ responsive-1.md

**Status:** **CREATE** (Expands existing Section 3.7)

**What Exists in Guidelines.md:**
- Section 3.7: Comprehensive breakpoint strategy
- Mobile-first methodology documented
- 4 breakpoints defined (Mobile, md, lg, xl)
- Viewport scaling examples table

**What This Adds:**
- Breakpoint tokens as named constants
- Container max-width tokens at each breakpoint
- Font-size scaling tokens (mobile → desktop)
- Spacing scaling tokens (mobile → desktop)
- Grid column count by breakpoint

**Recommendation:** ✅ **IMPLEMENT**  
**Rationale:** Section 3.7 provides strategy; this file provides the token reference table. Essential for systematic responsive implementation.

---

### 9. ✅ iconography-1.md

**Status:** **CREATE** (Expands existing icon rules)

**What Exists in Guidelines.md:**
- Section 15: UI Component Library mentions lucide-react
- "Import specific icons. Do not import the entire library."
- "Always check icon existence before implementation."
- Icon-only buttons must have accessible names (Section 1.1)

**What This Adds:**
- Icon sizing tokens (sm: 16px, md: 20px, lg: 24px, xl: 32px)
- Icon color tokens (icon-primary, icon-muted, icon-accent)
- Icon spacing tokens (gap between icon and text in buttons)
- Stroke width standards
- Accessibility requirements for icon-only controls

**Recommendation:** ✅ **IMPLEMENT**  
**Rationale:** Icons are used extensively (buttons, navigation, UI feedback). Tokenizing sizes and colors prevents inconsistency.

---

### 10. ✅ radii-1.md

**Status:** **CREATE** (Fills a gap)

**What Exists in Guidelines.md:**
- Section 3.5: Token architecture mentions `radius.*` grouping
- Section 3.1: "Use organic shapes for buttons and cards (slightly irregular border-radius)"
- No actual radius values documented

**What This Adds:**
- Border-radius scale (none, sm, md, lg, xl, full)
- Component-specific radius tokens (button, card, input, modal, image)
- Guidance on when to use organic vs standard radii

**Recommendation:** ✅ **IMPLEMENT**  
**Rationale:** Border-radius is mentioned conceptually but never defined. This enables consistent component styling.

**Suggested Scale:**
```markdown
| Token | Value | Usage |
|---|---|---|
| radius.none | 0px | Sharp edges (table cells, certain borders) |
| radius.sm | 4px | Small UI elements (tags, badges) |
| radius.md | 8px | Standard inputs, buttons |
| radius.lg | 12px | Cards, modals |
| radius.xl | 16px | Hero images, large containers |
| radius.full | 9999px | Pills, circular avatars |
| radius.organic | See SVG path | Hand-drawn effect for CTAs |
```

---

## Implementation Strategy

### Phase 1: Immediate (Critical Gaps)
1. ✅ **buttons-1.md** - Most used component, currently undocumented
2. ✅ **colors-1.md** - Add semantic layer to existing palette
3. ✅ **forms-1.md** - Critical for Checkout, Contact, Newsletter
4. ✅ **radii-1.md** - Fills architectural gap mentioned in 3.5

### Phase 2: Foundational (Expand Existing)
5. ✅ **typography-1.md** - Audit Section 3.2, create token map
6. ✅ **spacing-1.md** - Audit Section 3.4, document all spacing tokens
7. ✅ **responsive-1.md** - Extract Section 3.7 into token reference
8. ✅ **navigation-1.md** - Consolidate nav rules from multiple sections

### Phase 3: Enhancement (New Systems)
9. ✅ **animations-1.md** - Systematize motion rules
10. ✅ **iconography-1.md** - Document icon usage patterns
11. ✅ **borders-1.md** - Enable hand-drawn aesthetic tokens
12. ✅ **shadows-1.md** - Document elevation system

### Phase 4: Deferred (Future Feature)
13. ⚠️ **dark-light-mode-1.md** - Mark as "Not Implemented" or defer until designed

### Phase 5: Missing Files (From cleanup.md requirements)
The cleanup.md file mentioned these additional files not yet provided:
- **touch-targets.md** - Already provided in previous batch, should be Phase 1

---

## Template Quality Assessment

### Strengths
✅ Consistent structure across all files  
✅ "Audit source of truth" section enforces verification workflow  
✅ Empty "Canonical token map" tables encourage systematic documentation  
✅ "Related files" cross-referencing prevents siloing  
✅ "Update trigger" section creates maintenance accountability  

### Weaknesses
⚠️ Generic "Brand and UI direction" text (copy-pasted across all files)  
⚠️ "Implementation notes" and "Accessibility notes" sections are placeholders  
⚠️ No examples of filled-out token maps  

### Recommended Enhancements
Before implementing, customize each file's "Brand and UI direction" section to be specific to that token category. Example:

**buttons-1.md current:**
> The experience should feel casual, approachable, friendly, and passionate about making incredible wine.

**buttons-1.md improved:**
> Buttons should feel welcoming and tactile, inviting interaction. The Wire Brand's button aesthetic balances organic, hand-drawn warmth (irregular outlines, soft shadows) with crisp usability (clear labels, obvious hit areas, instant feedback). Primary CTAs use wine-inspired colors (plum, gold) while secondary actions use earthy tones (vine, clay).

---

## Cross-Reference Map

This table shows which Guidelines.md sections each new file relates to:

| New File | Guidelines.md Sections | Relationship |
|---|---|---|
| animations-1.md | 1.6, 10.4 | Expands and consolidates |
| borders-1.md | 3.1, 3.5 | Fills gap, adds tokens |
| buttons-1.md | 3.1, 3.6, 10.4 | Critical consolidation |
| colors-1.md | 3.1, 3.5 | Adds semantic layer |
| forms-1.md | 1.7, 13.1 | Expands with tokens |
| navigation-1.md | 1.4, 5.5 | Consolidates nav rules |
| responsive-1.md | 3.7 | Converts strategy to tokens |
| iconography-1.md | 15, 1.1 | Adds sizing/color tokens |
| radii-1.md | 3.1, 3.5 | Fills architectural gap |
| dark-light-mode-1.md | 3.5 | Future feature (defer) |

---

## File Preservation Strategy

**DO NOT DELETE OR REPLACE** Guidelines.md content. The new design-tokens/ files should:
1. **Reference** Guidelines.md as the source of truth for high-level strategy
2. **Expand** with implementation-level token maps
3. **Consolidate** scattered rules into systematic references

Example reference pattern:
```markdown
## Strategic Guidelines
See Guidelines.md Section 3.2 for typography strategy and fluid clamp() formulas.

## Token Implementation
This file documents the actual CSS custom properties and their usage in components.
```

---

## Recommendation Summary

### ✅ Create Immediately (9 files)
- animations-1.md
- borders-1.md
- buttons-1.md ⭐ **HIGHEST PRIORITY**
- colors-1.md ⭐ **HIGHEST PRIORITY**
- forms-1.md ⭐ **HIGHEST PRIORITY**
- navigation-1.md
- responsive-1.md
- iconography-1.md
- radii-1.md ⭐ **HIGHEST PRIORITY**

### ⚠️ Defer or Mark as Future (1 file)
- dark-light-mode-1.md - Add header: "⚠️ NOT YET IMPLEMENTED"

### 📋 Also Add From Previous Batch (4 files)
- typography-1.md
- spacing-1.md
- shadows-1.md
- touch-targets-1.md

**Total New Files:** 14 (10 from this batch + 4 from previous batch)

---

## Next Steps

1. **Customize** each file's "Brand and UI direction" section to be token-specific
2. **Create** all 14 files in `/guidelines/design-tokens/`
3. **Audit** `/styles/globals.css` and `/constants/theme.ts` to populate token maps
4. **Update** Guidelines.md with a new section pointing to the design-tokens/ folder:

```markdown
### 3.9 Design Token Reference

Detailed token maps and implementation guidelines are maintained in `/guidelines/design-tokens/`:
- [Colors](/guidelines/design-tokens/colors.md) - Palette + semantic tokens
- [Typography](/guidelines/design-tokens/typography.md) - Font tokens + fluid scaling
- [Spacing](/guidelines/design-tokens/spacing.md) - Layout spacing tokens
- [Buttons](/guidelines/design-tokens/buttons.md) - Button variants + states
- [Forms](/guidelines/design-tokens/forms.md) - Form control tokens
- (See folder for complete list)
```

5. **Add** cross-references in each design-tokens/ file back to Guidelines.md sections

---

**Document Status:** Ready for Implementation  
**Review Required:** Customize "Brand and UI direction" sections before creating files  
**Breaking Changes:** None - purely additive documentation
