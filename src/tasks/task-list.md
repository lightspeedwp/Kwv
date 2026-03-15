# Handcrafted Wines - Master Task List

**Version:** 2.0  
**Last Updated:** 2026-03-14  
**Overall Progress:** 45% complete  
**Status:** Active

---

## Overview

This is the master task list for Handcrafted Wines redesign project. All tasks are organized by priority and implementation phase.

**Current Focus:** Unified navigation system complete → Content migration and homepage redesign

---

## High Priority Tasks (Do First)

### Phase 1: Foundation & System Organization

- [x] Create prompt orchestration system (`/prompts/cleanup.md`, `/prompts/continue.md`)
- [x] Create template system (`/guidelines/_templates/`)
- [x] Create prompt system guidelines (`/prompts/PROMPT-SYSTEM-GUIDELINES.md`)
- [x] Update main Guidelines.md with prompt system reference
- [x] **Audit and reorganize Guidelines.md** → Run `audit guidelines` prompt
  - Target: Reduce from 1309 lines to <400 lines ✓ **ACHIEVED: 307 lines**
  - Extract sections to specialized guidelines ✓
  - Create design token guidelines (14 files) ✓
  - Create component guidelines directory structure ✓
  - File: `/prompts/audit-guidelines.md`
- [x] **Brand identity correction** - "Handcrafted Wines" established as official brand name
  - Corrected Guidelines.md from "The Wire Brand" to "Handcrafted Wines"
  - Updated farm history to 1918 (106 years)
  - Farm location: Paarl Mountain, South Africa
- [x] **Farm story data file** - `/data/farmStory.ts`
  - 4-generation family timeline (1918 → 1952 → 1987 → 2003 → 2015)
  - Family team: Pieter (winemaker), Annelie (cheesemaker), Hennie (distiller), Liezl (vineyard manager)
  - Products: Wines, Craft Spirits (grappa/brandy), Artisan Cheese
  - Contact: hello@handcraftedwines.co.za, +27 21 807 3007
  - 58 awards, sustainability practices, location data
- [x] **Unified navigation system** - Complete site-wide navigation
  - UnifiedHeader with top bar (Home/About left, Search/Account/Cart/Theme right)
  - Comprehensive dropdown menus (Shop, Visit, Events, Our Story)
  - UnifiedFooter with 5 columns, 50+ links, newsletter signup
  - Mobile hamburger menu with all 40+ links
  - Sitemap page with 8 sections, 58 total links
  - Sitemap link added to footer bottom row
  - Layout.tsx simplified to use unified components
  - All routes configured
  - File: `/docs/UNIFIED-NAVIGATION-COMPLETE.md`
- [x] **Homepage redesign** - Family farm story implementation
  - Hero section with family tagline
  - 106 years of winemaking story
  - 4-generation timeline with visual presentation
  - "What We Handcraft" section (Wines, Spirits, Cheese)
  - Family values grid (4 core values with icons)
  - Visit CTA with farm location
  - Wine Club CTA
  - Updated FAQs with family farm content
  - All content uses farmStory.ts data
  - Hand-crafted, warm, family-oriented voice throughout
- [x] **About pages** - Complete redesign (3 new pages)
  - `/pages/company/About.tsx` - Main about page with 4-generation story, timeline, values, links to sub-pages
  - `/pages/company/AboutFarm.tsx` - The Farm (vineyard, distillery, goat dairy, sustainability)
  - `/pages/company/AboutTeam.tsx` - Our Team (4 family members with bios, roles, specialties)
  - All routes added to `/routes.tsx` (/about/farm, /about/team, /about/awards, /about/sustainability)
  - Family voice throughout all pages
  - Uses farmStory.ts data exclusively
- [x] **Awards page** - Complete redesign with family farm content
  - Total awards count (58+)
  - Category breakdown (Wines: 32, Spirits: 18, Cheese: 8)
  - Notable recent awards showcase
  - International competition recognition
  - Family philosophy on awards ("We don't chase awards, we chase perfection")
  - Quote from Pieter
  - CTAs to shop and visit
  - Uses farmStory.awards data
- [x] **Sustainability page** - Complete redesign with farm practices
  - Generational perspective (4 generations = long-term thinking)
  - All 7 sustainability practices from farmStory.ts
  - Detailed sections: Vineyard Care, Water Management, Energy/Carbon, Animal Welfare
  - Community involvement (fair wages, local sourcing, farm education)
  - Quote from Pieter about land stewardship
  - Certifications (IPW standards)
  - CTA to book farm tour
  - Uses farmStory.sustainability data
- [x] **Experiences/Visit page** - Complete redesign with farm activities
  - farmStory.experiences data structure created (5 offerings)
  - Main experiences landing page redesigned
  - 5 experience cards: Wine Tasting, Cheese Pairing, Full Farm Tour, Harvest Experience, Private Tasting
  - Detailed experience info: Duration, Price, Includes, Availability, Minimum guests
  - Hours & policies section (Tasting Room hours, Tour schedule, Booking/Cancellation/Accessibility policies)
  - Contact & Directions section (Phone, WhatsApp, Email, GPS coordinates)
  - Family hospitality voice throughout
  - All data from farmStory.experiences
- [x] **Shop landing page** - Complete redesign with farm products
  - `/data/products.ts` created - Complete product catalog (17 products)
  - 6 wines (Shiraz, Cabernet, Chenin Blanc, Chardonnay, Rosé, Red Blend)
  - 3 spirits (Estate Grappa, 5 Year Brandy, 10 Year Reserve Brandy)
  - 4 cheeses (Fresh Chèvre, Herbed Chèvre, Aged 6-Month, Wine-Washed Rind)
  - 4 gift sets (Tasting Trio, Cheese & Wine Pairing, Brandy & Chocolate)
  - Product interface with full details (price, description, tasting notes, pairing, awards, winemaker)
  - Category helpers and filter functions
  - `/pages/shop/ShopHome.tsx` - Complete rewrite
  - Shop intro ("From Our Farm to Your Table")
  - 4 category cards (Wines, Spirits, Cheese, Gifts) with product counts
  - Featured products grid (6 products)
  - "Why Shop With Us" section (Free Shipping, Quality Guarantee, Made with Love)
  - "Four Generations" story section
  - CTAs to all product categories
  - Family voice throughout
  - All data from products.ts
- [x] **Process existing reports into task lists** → Run `process reports` prompt
  - Review `/reports/01-visual-design-report.md` ✅
  - Create task list from report recommendations ✅
  - Created `/tasks/organic-visual-elements.md` with 10 tasks
  - File: `/prompts/process-reports.md`

---

### Phase 2: Design Token Implementation

**Prerequisites:** Audit guidelines complete, design token guidelines created

- [x] Implement color system overhaul (`/tasks/color-system-implementation.md`) ✅
  - Create unified color variables in `globals.css` ✅
  - Update `theme.ts` with new constants ✅
  - Migrate components from old to new colors (next phase)
  - Related: `/guidelines/design-tokens/colors.md`
- [x] Implement typography system (`/tasks/typography-implementation.md`) ✅
  - Add Inter font family ✅
  - Update fluid typography scales ✅
  - Apply to all components (next phase)
  - Related: `/guidelines/design-tokens/typography.md`
- [x] Implement spacing system (`/tasks/spacing-implementation.md`) ✅
  - 16 total spacing tokens added to themes-variables.css
  - 3 fluid spacing tokens (section-y, container-x, grid-gap) using clamp()
  - 13 fixed spacing tokens (0 through 24) following 4px base grid
  - Touch target compliance (44px minimum, 48px recommended)
  - Complements existing WordPress-aligned spacing tokens
  - Validation checklist completed in guidelines
  - WCAG AA accessibility verified
- [x] Implement border radius system (`/tasks/radii-implementation.md`) ✅
  - 22 total radius tokens added to themes-variables.css
  - 9 base radius tokens (symmetric: none, xs, sm, md, lg, xl, 2xl, 3xl, full)
  - 5 organic radius tokens (asymmetric for handcrafted aesthetic)
  - 8 contextual radius tokens (component-specific: button, card, input, modal, image, badge)
  - Organic asymmetry creates handcrafted feel (e.g., 10px 14px 12px 16px)
  - Accessibility-compatible with focus rings
  - Documentation complete in guidelines
- [x] **Shadow system implementation complete** (/tasks/shadows-implementation.md)
  - 12 total shadow tokens added to themes-variables.css
  - 7 base shadow tokens (none, xs, sm, md, lg, xl, 2xl) for elevation hierarchy
  - 5 specialty shadow tokens (inner, glow-plum, glow-gold, paper, card-hover)
  - Layered shadows (2 layers per elevation) for realistic depth
  - Warm undertones using TWB ink color (rgba(30, 26, 23, ...))
  - Dark mode shadow overrides with increased opacity in themes-dark.css
  - Specialty glow effects for focus states and premium highlights
  - Documentation complete in guidelines

---

### Phase 3: Component Redesign

**Prerequisites:** Design tokens implemented

- [x] **Update layout components** (`/tasks/layout-components.md`) ✅
  - UnifiedHeader (v2.0)
  - UnifiedFooter (v2.0)
  - BreadcrumbsBar (v2.0)
  - CheckoutHeader (v2.0)
  - CheckoutFooter (v2.0)
  - CheckoutLayout (v2.0)
  - 10 legacy components deleted
- [x] **Update section components** (`/tasks/section-components.md`) ✅ 100% (10/10)
  - Hero (v2.0) ✅
  - FullWidthSection (v2.0) ✅
  - BrandGrid (v2.0) ✅
  - FAQSection (v2.0) ✅
  - Newsletter (v2.0) ✅
  - LatestNews (v2.0) ✅
  - WineClubCTA (v2.0) ✅
  - HomeEntryPoints (v2.0) ✅
  - ServiceFeaturesSection (v2.0) ✅
  - ContactFollowSection (v2.0) ✅
- [x] **Update common components** (`/tasks/common-components.md`) ✅ 100% (8/8)
  - Button (v2.0) ✅
  - Typography (v2.0) ✅
  - Container (v2.0) ✅
  - Logo (v2.0) ✅
  - Card (v2.0) ✅
  - Badge (v2.0) ✅
  - Input (v2.0) ✅
  - Select (v2.0) ✅
- [x] **Add organic visual elements** (`/tasks/organic-visual-elements.md`) ✅
  - Hand-drawn underlines component
  - Paper texture overlay component
  - Wine label stamp component
  - Organic border component
  - CSS utilities for organic shapes
  - Applied to Homepage, About, Shop, and Experiences pages
  - 10 tasks total (10/10 complete)
  - Related: `/reports/01-visual-design-report.md`

---

## Medium Priority Tasks (Do Next)

### Documentation & Guidelines

- [x] Create accessibility guidelines (`/guidelines/accessibility/`) ✅
  - wcag-compliance.md ✅
  - keyboard-navigation.md ✅
  - screen-readers.md ✅
- [x] Create architecture guidelines (`/guidelines/architecture/`) ✅
  - component-structure.md ✅
  - routing.md ✅
  - sitemap.md ✅
- [x] Create pattern guidelines (`/guidelines/patterns/`) ✅
  - atomic-design.md ✅
  - checkout-flow.md ✅
  - hero-standards.md ✅
- [ ] Create WordPress guidelines (`/guidelines/wordpress/`)
  - blocks-reference.md
  - template-parts.md
- [ ] Create development guidelines (`/guidelines/development/`)
  - jsdoc-standards.md
  - testing.md
  - performance.md

---

### Page Implementation

- [x] Homepage redesign (`/tasks/homepage-redesign.md`)
- [x] About pages (`/tasks/about-pages.md`)
- [x] Experiences/Visit pages (`/tasks/experiences-pages.md`)
- [x] Shop pages (`/tasks/shop-pages.md`) ✅ **100% COMPLETE (8/8 tasks)**

---

## Low Priority Tasks (Future Enhancement)

### Advanced Features

- [ ] Dark mode implementation
- [ ] Animation system
- [ ] 3D product viewer (Wine Box)
- [ ] Advanced filtering
- [ ] Product recommendations

---

### Testing & Validation

- [ ] Accessibility audit (`/tasks/accessibility-audit.md`)
- [ ] Performance audit (`/tasks/performance-audit.md`)
- [ ] Cross-browser testing (`/tasks/cross-browser-testing.md`)
- [ ] Mobile device testing (`/tasks/mobile-testing.md`)

---

## Blocked Tasks

### Waiting on Dependencies

- None currently

---

## Completed Tasks

### 2024-03-13

- [x] Prompt orchestration system created
- [x] Template system created
- [x] Prompt system guidelines documented
- [x] Guidelines.md updated with prompt references
- [x] **Guidelines audit and reorganization completed** (1309 lines → 307 lines)
- [x] **33 specialized guideline files created** (Design tokens, Components, Patterns)
- [x] **KWV logo replaced with Handcrafted Wines logo** (CorporateHeader, ShopHeader, Age Verification, CorporateFooter)
- [x] **Color system implementation complete** (/tasks/color-system-implementation.md)
  - 50+ new CSS custom properties in globals.css
  - Wire Brand palette (paper, ink, vine, clay, plum, gold)
  - Semantic tokens (background, text, interactive states)
  - Border, shadow, and radius tokens
  - Dark mode variants
  - Updated theme.ts with new color constants
  - Inter font family added
  - WCAG AA contrast validated
- [x] **Typography system implementation complete** (/tasks/typography-implementation.md)
  - 25+ typography CSS variables in globals.css
  - Fluid scale: h1-h4, body-large, body, caption
  - Playfair Display (serif) for headings
  - Inter (sans-serif) for body text
  - Font weight and line height tokens
  - Updated base layer with Wire Brand typography
  - Link styles with hover/focus/visited states
  - Updated theme.ts TYPOGRAPHY constants
  - WCAG AA readability validated

### 2024-03-14

- [x] **Spacing system implementation complete** (/tasks/spacing-implementation.md)
  - 16 total spacing tokens added to themes-variables.css
  - 3 fluid spacing tokens (section-y, container-x, grid-gap) using clamp()
  - 13 fixed spacing tokens (0 through 24) following 4px base grid
  - Touch target compliance (44px minimum, 48px recommended)
  - Complements existing WordPress-aligned spacing tokens
  - Validation checklist completed in guidelines
  - WCAG AA accessibility verified
- [x] **Border radius system implementation complete** (/tasks/radii-implementation.md)
  - 22 total radius tokens added to themes-variables.css
  - 9 base radius tokens (symmetric: none, xs, sm, md, lg, xl, 2xl, 3xl, full)
  - 5 organic radius tokens (asymmetric for handcrafted aesthetic)
  - 8 contextual radius tokens (component-specific: button, card, input, modal, image, badge)
  - Organic asymmetry creates handcrafted feel (e.g., 10px 14px 12px 16px)
  - Accessibility-compatible with focus rings
  - Documentation complete in guidelines

---

## Task Lists (Detailed)

### Active Task Lists

- `/tasks/task-list.md` (this file) - Master task list ✓

### Pending Task List Creation

**These will be created after running `process reports`:**
- `/tasks/visual-design-implementation.md` (from report 01)
- `/tasks/color-system-implementation.md`
- `/tasks/typography-implementation.md`
- `/tasks/spacing-implementation.md`

---

## Quick Actions

### To start work:
```
cleanup
continue
```

### To process reports:
```
process reports
```

### To audit guidelines:
```
audit guidelines
```

---

## Progress Tracking

### By Phase

| Phase | Tasks Total | Completed | In Progress | Pending | % Complete |
|-------|-------------|-----------|-------------|---------|------------|
| Phase 1: Foundation | 6 | 4 | 0 | 2 | 67% |
| Phase 2: Design Tokens | 5 | 5 | 0 | 0 | 100% ✅ |
| Phase 3: Components | 4 | 1 | 0 | 3 | 25% |
| Documentation | 5 | 0 | 0 | 5 | 0% |
| Pages | 4 | 0 | 0 | 4 | 0% |
| **Total** | **24** | **10** | **0** | **14** | **42%** |

---

## Next Milestone

**Milestone 1: System Foundation Complete**

**Target:** End of March 2026

**Criteria:**
- [ ] Guidelines reorganized (<400 lines main file)
- [ ] All design token guidelines created
- [ ] Reports processed into task lists
- [ ] Color system implemented
- [ ] Typography system implemented

**Progress:** 5/12 tasks complete (42%)

---

## Notes

### Important Decisions

**2024-03-13: Prompt System**
- Established trigger word system
- Created comprehensive templates
- Standardized file naming conventions
- Set up automated workflows

**2024-03-13: Guidelines Target**
- Main Guidelines.md must be <400 lines
- Extract to specialized guidelines by domain
- Create 14 design token guidelines
- Use template system for consistency

---

### Blockers Resolved

None - clear path forward established

---

## Related Documentation

- `/prompts/PROMPT-SYSTEM-GUIDELINES.md` - How to use the prompt system
- `/guidelines/_templates.md` - Template documentation
- `/guidelines/Guidelines.md` - Main guidelines (to be reorganized)
- `/REDESIGN-BRIEF-SUMMARY.md` - Project overview

---

**Last Updated:** 2024-03-13  
**Next Review:** After completing Phase 1 foundation tasks