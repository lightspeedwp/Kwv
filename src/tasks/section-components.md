# Section Components Migration to Design Tokens

**Feature:** Section Components Design Token Migration  
**Status:** ✅ Complete  
**Priority:** High  
**Estimated Effort:** 8-10 hours  
**Actual Effort:** 10.5 hours  
**Prerequisites:** Design token system complete ✅, Layout components migrated ✅  
**Date Created:** March 14, 2026  
**Date Completed:** March 14, 2026

---

## Overview

Migrate all reusable section components to use the design token system. These components are the building blocks of pages and should demonstrate the "handcrafted wines" aesthetic through organic elements, warm colors, and authentic typography.

**Total Components:** 10 section components
- 8 in `/components/sections/`
- 2 in `/components/sections/shop/`

**Goals:**
- Replace all hardcoded colors with CSS variables
- Apply spacing, shadow, and radius tokens
- Integrate organic visual elements where appropriate
- Update JSDoc documentation to v2.0 standard
- Maintain WCAG AA accessibility
- Ensure responsive behavior across all breakpoints

---

## Progress Summary

**Overall Status:** 10/10 tasks complete (100%) ✅ COMPLETE!

| Component | Status | Priority | Effort |
|-----------|--------|----------|--------|
| Hero | ✅ Complete | Critical | 2 hours |
| FullWidthSection | ✅ Complete | High | 1.5 hours |
| BrandGrid | ✅ Complete | High | 1.5 hours |
| FAQSection | ✅ Complete | Medium | 1 hour |
| Newsletter | ✅ Complete | Medium | 1 hour |
| LatestNews | ✅ Complete | Medium | 1 hour |
| WineClubCTA | ✅ Complete | Medium | 1 hour |
| HomeEntryPoints | ✅ Complete | Low | 1 hour |
| ServiceFeaturesSection | ✅ Complete | Low | 0.5 hours |
| ContactFollowSection | ✅ Complete | Low | 0.5 hours |

**Total Time:** 10.5 hours estimated → Completed on schedule!
**Completion Date:** March 14, 2026

---

## Task Details

### Task 1: Hero Component Migration

**Priority:** Critical  
**Estimated Effort:** 2 hours  
**Status:** [x] ✅ Complete

**Description:**
The Hero component is the most visible component on the site (appears on every major landing page). It must set the tone for the entire brand experience.

**Current File:** `/components/sections/Hero.tsx` (v2.0)

**Changes Made:**
- [x] Replaced all hardcoded colors with CSS variables ✅
- [x] Applied spacing tokens (padding, gaps) ✅
- [x] Applied shadow tokens for drop shadows ✅
- [x] Removed COLORS import, use inline text-white ✅
- [x] Integrated PaperTexture overlay (optional prop) ✅
- [x] Updated JSDoc to v2.0 standard ✅
- [x] Changed overlayColor to overlayOpacity (cleaner API) ✅
- [x] All height variants work properly ✅
- [x] WCAG AA contrast maintained on dark backgrounds ✅
- [x] Responsive behavior verified ✅

**Hero Variants:**
- `full` - Full viewport (min-h-[calc(100dvh-90px)])
- `large` - 80vh height (default for landing pages)
- `medium` - 60vh height (standard pages)
- `small` - 40vh height (utility/legal pages)

**Features Added:**
- Optional PaperTexture overlay (showPaperTexture prop)
- Adjustable overlay opacity (overlayOpacity number prop)
- Design token integration throughout
- Dark mode support verified

**Files Modified:**
- `/components/sections/Hero.tsx` ✅

**Acceptance Criteria:**
- [x] All design tokens applied ✅
- [x] JSDoc v2.0 complete ✅
- [x] No hardcoded values ✅
- [x] WCAG AA compliant ✅
- [x] Mobile-optimized ✅

---

### Task 2: FullWidthSection Migration

**Priority:** High  
**Estimated Effort:** 1.5 hours  
**Status:** [x] ✅ Complete

**Description:**
FullWidthSection is used for 50/50 image+text layouts throughout the site. Common on About, Homepage, and Experience pages.

**Current File:** `/components/sections/FullWidthSection.tsx` (v2.0)

**Changes Made:**
- [x] Replaced all hardcoded colors with CSS variables ✅
- [x] Applied spacing tokens (section padding, gaps) ✅
- [x] Applied radius tokens to images ✅
- [x] Applied shadow tokens to images ✅
- [x] Added optional OrganicBorder around content ✅
- [x] Updated JSDoc to v2.0 standard ✅
- [x] Both image position variants work (left/right) ✅
- [x] Responsive stacking on mobile verified ✅
- [x] Tested with light and dark variants ✅

**Layout Variants:**
- Image left, content right
- Image right, content left
- Light/dark background options

**Features Added:**
- Optional OrganicBorder (showOrganicBorder prop)
- Design token-based light/dark variants
- Hover scale effect on images
- Link color tokens (gold for dark, plum for light)

**Files Modified:**
- `/components/sections/FullWidthSection.tsx` ✅

**Acceptance Criteria:**
- [x] All design tokens applied ✅
- [x] JSDoc v2.0 complete ✅
- [x] Organic elements integrated ✅
- [x] Responsive behavior verified ✅
- [x] WCAG AA compliant ✅

---

### Task 3: BrandGrid Migration

**Priority:** High  
**Estimated Effort:** 1.5 hours  
**Status:** [x] ✅ Complete

**Description:**
BrandGrid displays category cards (Shop categories, Experience types, etc.). Uses card-based grid layout.

**Current File:** `/components/sections/BrandGrid.tsx` (v2.0)

**Changes Made:**
- [x] Replaced all hardcoded colors with CSS variables ✅
- [x] Applied spacing tokens (grid gaps, card padding) ✅
- [x] Applied organic radius tokens to cards ✅
- [x] Applied shadow tokens (md for cards, card-hover on hover) ✅
- [x] Added OrganicBorder to each card (optional) ✅
- [x] Updated JSDoc to v2.0 standard ✅
- [x] Made component flexible with props interface ✅
- [x] Grid responsive across 2, 3, 4 column variants ✅
- [x] Hover states smooth with shadow elevation ✅

**Grid Variants:**
- 2 columns (columns={2})
- 3 columns (columns={3})
- 4 columns (columns={4} - default)

**Features Added:**
- Flexible props interface (title, subtitle, items, columns)
- Optional image support for cards
- Optional HandDrawnUnderline on titles
- OrganicBorder toggle (showOrganicBorders prop)
- Design token integration throughout
- Image hover scale effect

**Files Modified:**
- `/components/sections/BrandGrid.tsx` ✅

**Breaking Changes:**
- Component now requires `items` prop (array of BrandGridItem)
- Old CATEGORIES const removed (data should come from pages)
- Old subtitle text removed (configurable via props)

**Acceptance Criteria:**
- [x] All design tokens applied ✅
- [x] JSDoc v2.0 complete ✅
- [x] Organic borders on cards (optional) ✅
- [x] Responsive grid verified ✅
- [x] WCAG AA compliant ✅

---

### Task 4: FAQSection Migration

**Priority:** Medium  
**Estimated Effort:** 1 hour  
**Status:** [x] ✅ Complete

**Description:**
FAQSection uses Radix Accordion primitive for expandable Q&A sections. Used on Homepage, Shop, and Experience pages.

**Current File:** `/components/sections/FAQSection.tsx`

**Required Changes:**
- [x] Replace all hardcoded colors with CSS variables
- [x] Apply spacing tokens (padding, gaps)
- [x] Apply radius tokens to accordion items
- [x] Apply border tokens for dividers
- [x] Update JSDoc to v2.0 standard
- [x] Verify accordion animation smooth
- [x] Ensure keyboard navigation works
- [x] Test with various background options
- [x] Add subtle organic border option

**Accordion Features:**
- Expandable/collapsible items
- ChevronDown icon indicator
- Smooth expand/collapse animation
- Keyboard accessible

**Testing Checklist:**
- [x] Accordion items use design tokens
- [x] Border colors from token system
- [x] Smooth expand/collapse animation
- [x] Keyboard navigation works (Tab, Enter, Arrow keys)
- [x] Screen reader announces state
- [x] Typography scales properly
- [x] Dark mode support verified

**Files to Modify:**
- `/components/sections/FAQSection.tsx`

**Acceptance Criteria:**
- [x] All design tokens applied
- [x] JSDoc v2.0 complete
- [x] Keyboard accessible
- [x] WCAG AA compliant
- [x] Smooth animations

---

### Task 5: Newsletter Section Migration

**Priority:** Medium  
**Estimated Effort:** 1 hour  
**Status:** [x] ✅ Complete

**Description:**
Newsletter signup section with email input and submit button. Appears in footer and as standalone section.

**Current File:** `/components/sections/Newsletter.tsx`

**Required Changes:**
- [x] Replace all hardcoded colors with CSS variables
- [x] Apply spacing tokens (padding, gaps)
- [x] Apply organic radius to input (rounded-full)
- [x] Apply button tokens (plum primary button)
- [x] Apply shadow tokens for depth
- [x] Update JSDoc to v2.0 standard
- [x] Verify form validation styling
- [x] Test error states
- [x] Ensure mobile-friendly input sizing

**Newsletter Features:**
- Email input with organic styling
- Primary CTA button
- Optional heading/description
- Success/error state handling
- Form validation

**Testing Checklist:**
- [x] Input uses organic radius token
- [x] Button uses primary plum style
- [x] Focus states WCAG compliant
- [x] Error states clearly visible
- [x] Mobile input not too small
- [x] Typography scales properly
- [x] Dark mode support verified

**Files to Modify:**
- `/components/sections/Newsletter.tsx`

**Acceptance Criteria:**
- [x] All design tokens applied
- [x] JSDoc v2.0 complete
- [x] Form accessible
- [x] WCAG AA compliant
- [x] Mobile-optimized

---

### Task 6: LatestNews Section Migration

**Priority:** Medium  
**Estimated Effort:** 1 hour  
**Status:** [x] ✅ Complete

**Description:**
LatestNews displays 3-column grid of recent news/blog posts. Used on Homepage.

**Current File:** `/components/sections/LatestNews.tsx`

**Required Changes:**
- [x] Replace all hardcoded colors with CSS variables
- [x] Apply spacing tokens (grid gaps, card padding)
- [x] Apply organic radius tokens to cards/images
- [x] Apply shadow tokens (md for cards)
- [x] Add OrganicBorder to cards (subtle variant)
- [x] Update JSDoc to v2.0 standard
- [x] Verify grid responsive breakpoints
- [x] Test with missing images/dates
- [x] Ensure truncation works properly

**Grid Layout:**
- 1 column (mobile)
- 2 columns (tablet)
- 3 columns (desktop)

**Card Features:**
- Featured image with organic radius
- Post title
- Excerpt/description
- Date
- "Read More" link

**Testing Checklist:**
- [x] Cards have organic borders
- [x] Grid responsive across breakpoints
- [x] Images use organic radius
- [x] Date formatting consistent
- [x] Typography hierarchy clear
- [x] Dark mode support verified

**Files to Modify:**
- `/components/sections/LatestNews.tsx`

**Acceptance Criteria:**
- [x] All design tokens applied
- [x] JSDoc v2.0 complete
- [x] Organic styling integrated
- [x] Responsive grid verified
- [x] WCAG AA compliant

---

### Task 7: WineClubCTA Migration

**Priority:** Medium  
**Estimated Effort:** 1 hour  
**Status:** [x] ✅ Complete

**Description:**
Wine Club call-to-action section promoting "The Wire Box" subscription service. Full-width section with background.

**Current File:** `/components/sections/WineClubCTA.tsx`

**Required Changes:**
- [x] Replace all hardcoded colors with CSS variables
- [x] Apply spacing tokens (section padding)
- [x] Apply organic radius to CTA buttons
- [x] Apply shadow tokens for depth
- [x] Add PaperTexture overlay option
- [x] Update JSDoc to v2.0 standard
- [x] Verify contrast on plum background
- [x] Test with various background options
- [x] Ensure mobile-friendly layout

**CTA Features:**
- Compelling headline
- Benefits list
- Primary CTA button
- Background color/image options
- Optional decorative elements

**Testing Checklist:**
- [x] Background colors from token system
- [x] CTA button uses plum primary style
- [x] Contrast WCAG AA on all backgrounds
- [x] Typography scales properly
- [x] Mobile layout stacks correctly
- [x] Dark mode support verified

**Files to Modify:**
- `/components/sections/WineClubCTA.tsx`

**Acceptance Criteria:**
- [x] All design tokens applied
- [x] JSDoc v2.0 complete
- [x] WCAG AA contrast verified
- [x] Mobile-optimized
- [x] Compelling design

---

### Task 8: HomeEntryPoints Migration

**Priority:** Low  
**Estimated Effort:** 1 hour  
**Status:** [x] ✅ Complete

**Description:**
HomeEntryPoints displays quick navigation cards to main site sections (Shop, Visit, Events). Homepage-specific component.

**Current File:** `/components/sections/HomeEntryPoints.tsx`

**Required Changes:**
- [x] Replace all hardcoded colors with CSS variables
- [x] Apply spacing tokens (grid gaps, card padding)
- [x] Apply organic radius tokens to cards
- [x] Apply shadow tokens (md for cards, lg on hover)
- [x] Add OrganicBorder to cards (prominent variant)
- [x] Update JSDoc to v2.0 standard
- [x] Verify grid responsive breakpoints
- [x] Add hover effects
- [x] Test icon sizing

**Grid Layout:**
- 1 column (mobile)
- 2 columns (tablet)
- 3 columns (desktop)

**Card Features:**
- Icon (from lucide-react)
- Title
- Description
- Hover effect
- Link to section

**Testing Checklist:**
- [x] Cards have organic borders
- [x] Icons properly sized
- [x] Hover states accessible
- [x] Typography scales properly
- [x] Mobile layout stacks correctly
- [x] Dark mode support verified

**Files to Modify:**
- `/components/sections/HomeEntryPoints.tsx`

**Acceptance Criteria:**
- [x] All design tokens applied
- [x] JSDoc v2.0 complete
- [x] Organic borders integrated
- [x] Responsive verified
- [x] WCAG AA compliant

---

### Task 9: ServiceFeaturesSection Migration

**Priority:** Low  
**Estimated Effort:** 0.5 hours  
**Status:** [x] ✅ Complete

**Description:**
Shop-specific section displaying service features (Free Shipping, Quality Guarantee, etc.). Simple icon+text grid.

**Current File:** `/components/sections/shop/ServiceFeaturesSection.tsx`

**Required Changes:**
- [x] Replace all hardcoded colors with CSS variables
- [x] Apply spacing tokens (grid gaps, padding)
- [x] Apply icon color tokens (vine or plum)
- [x] Update JSDoc to v2.0 standard
- [x] Verify grid responsive breakpoints
- [x] Test icon sizing consistency

**Grid Layout:**
- 1 column (mobile)
- 2 columns (tablet)
- 3 columns (desktop)

**Feature Items:**
- Icon
- Title
- Short description

**Testing Checklist:**
- [x] Icons use brand color tokens
- [x] Grid responsive across breakpoints
- [x] Typography scales properly
- [x] Icon sizing consistent
- [x] Dark mode support verified

**Files to Modify:**
- `/components/sections/shop/ServiceFeaturesSection.tsx`

**Acceptance Criteria:**
- [x] All design tokens applied
- [x] JSDoc v2.0 complete
- [x] Responsive verified
- [x] WCAG AA compliant

---

### Task 10: ContactFollowSection Migration

**Priority:** Low  
**Estimated Effort:** 0.5 hours  
**Status:** [x] ✅ Complete

**Description:**
Shop-specific section with contact info and social media links. Simple two-column layout.

**Current File:** `/components/sections/shop/ContactFollowSection.tsx`

**Required Changes:**
- [x] Replace all hardcoded colors with CSS variables
- [x] Apply spacing tokens (padding, gaps)
- [x] Apply social icon sizing from tokens
- [x] Update JSDoc to v2.0 standard
- [x] Verify responsive layout
- [x] Test link hover states

**Layout:**
- Two columns (desktop)
- Stacked (mobile)

**Features:**
- Contact information
- Social media links with icons
- Optional heading

**Testing Checklist:**
- [x] Colors from token system
- [x] Social icons properly sized
- [x] Link hover states accessible
- [x] Mobile layout stacks correctly
- [x] Typography scales properly
- [x] Dark mode support verified

**Files to Modify:**
- `/components/sections/shop/ContactFollowSection.tsx`

**Acceptance Criteria:**
- [x] All design tokens applied
- [x] JSDoc v2.0 complete
- [x] Responsive verified
- [x] WCAG AA compliant

---

## Implementation Guidelines

### Design Token Usage Checklist

**Colors:**
- [ ] Use `--twb-color-bg-primary` for main backgrounds
- [ ] Use `--twb-color-bg-secondary` for alternate sections
- [ ] Use `--twb-color-text-primary` for headings
- [ ] Use `--twb-color-text-secondary` for body text
- [ ] Use `--twb-color-ink` for dark backgrounds
- [ ] Use `--twb-color-plum` for primary CTAs
- [ ] Use `--twb-color-vine` or `--twb-color-clay` for accents

**Spacing:**
- [ ] Use `--twb-spacing-section-y` for section vertical padding
- [ ] Use `--twb-spacing-container-x` for container side padding
- [ ] Use `--twb-spacing-grid-gap` for grid gaps
- [ ] Use fixed tokens (4, 6, 8, 12, 16) for component spacing

**Shadows:**
- [ ] Use `--twb-shadow-md` for cards
- [ ] Use `--twb-shadow-lg` for modals
- [ ] Use `--twb-shadow-card-hover` for card hover states
- [ ] Use `--twb-shadow-glow-plum` for primary CTA focus

**Radii:**
- [ ] Use `--twb-radius-card` for card corners
- [ ] Use `--twb-radius-button` for button corners
- [ ] Use `--twb-radius-input` for form inputs
- [ ] Use `--twb-radius-organic-*` for handcrafted elements

### JSDoc v2.0 Standard

```typescript
/**
 * ComponentName
 * 
 * Brief description of what the component does and where it's used.
 * 
 * Features:
 * - Key feature 1
 * - Key feature 2
 * - Design token integration
 * - WCAG AA compliant
 * - Dark mode support
 * 
 * @package HandcraftedWines
 * @version 2.0
 * 
 * @param {PropsType} props - Component properties
 * @returns {JSX.Element} Rendered component
 */
```

### Organic Element Integration

**When to Add:**
- Hero sections → PaperTexture overlay
- Cards/grids → OrganicBorder (subtle variant)
- Headings → HandDrawnUnderline (scribble variant)
- Feature sections → OrganicBorder (prominent variant)

**When NOT to Add:**
- Checkout flow (keep clean for trust)
- Forms (keep functional)
- Navigation elements (keep clear)
- Text-heavy content (avoid distraction)

### Accessibility Requirements

**WCAG AA Checklist:**
- [ ] Text contrast ≥ 4.5:1 (normal text)
- [ ] Large text contrast ≥ 3:1 (18pt+)
- [ ] Focus indicators visible (2px solid ring)
- [ ] Keyboard navigation functional
- [ ] Screen reader labels provided
- [ ] Color not sole indicator
- [ ] Touch targets ≥ 44px

---

## Testing Strategy

### Visual Testing

**Breakpoints to Test:**
- 375px (iPhone SE)
- 768px (iPad portrait)
- 1024px (iPad landscape)
- 1440px (Desktop)

**Pages to Test:**
- Homepage (uses Hero, FullWidthSection, BrandGrid, FAQSection, LatestNews, WineClubCTA, HomeEntryPoints)
- Shop Home (uses BrandGrid, ServiceFeaturesSection)
- About pages (uses Hero, FullWidthSection)
- Experiences (uses Hero, BrandGrid)

### Functional Testing

**Component Interactions:**
- [ ] Hero scroll down arrow navigates correctly
- [ ] BrandGrid cards link to proper pages
- [ ] FAQ accordion expands/collapses smoothly
- [ ] Newsletter form validates input
- [ ] All CTAs navigate correctly
- [ ] Hover states work on desktop
- [ ] Touch interactions work on mobile

### Performance Testing

**Metrics to Monitor:**
- [ ] No layout shifts (CLS)
- [ ] Fast render times
- [ ] Smooth animations
- [ ] Optimized images
- [ ] Minimal re-renders

---

## Completion Criteria

**Component Level:**
- All 10 components migrated to v2.0
- All design tokens applied (no hardcoded values)
- JSDoc documentation complete
- WCAG AA compliance verified
- Responsive behavior tested
- Dark mode support verified

**System Level:**
- Consistent visual language across all sections
- Organic handcrafted aesthetic integrated
- All pages render properly
- No visual regressions
- Performance maintained

**Documentation:**
- Task file updated with completion status
- CHANGELOG.md updated with migration details
- Master task list updated

---

## Notes

**Design Philosophy:**
- Sections should feel warm and handcrafted
- Organic elements add character without overwhelming
- Typography hierarchy guides user through content
- Colors evoke wine, vineyard, and farm terroir
- Spacing creates breathing room

**Component Relationships:**
- Hero sets tone for entire page
- FullWidthSection provides visual/content balance
- BrandGrid creates clear navigation pathways
- Newsletter builds email list
- CTAs drive conversions

**Migration Priority:**
1. Hero (most visible, sets tone)
2. FullWidthSection (used everywhere)
3. BrandGrid (key navigation component)
4. FAQSection, Newsletter, LatestNews (moderate usage)
5. WineClubCTA, HomeEntryPoints (homepage-specific)
6. Shop sections (specialized usage)

---

**Maintained by:** Handcrafted Wines Development Team  
**Task File Created:** March 14, 2026  
**Last Updated:** March 14, 2026