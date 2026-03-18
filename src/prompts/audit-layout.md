# Audit Layout — Visual Integrity & Responsive Layout Compliance

**Type:** Audit  
**Created:** 2026-03-18  
**Status:** Active  
**Trigger Word:** `audit layout`  
**Project:** Handcrafted Wines

---

## Prompt Purpose

**Objective:** Audit all pages and components for layout integrity — find broken layouts, missing sections, overflow/scroll issues, container inconsistencies, and responsiveness regressions across breakpoints.

**When to Use:** After major layout changes, component refactors, new page builds, or when visual bugs are reported.

**Reference Guidelines:**
- `/guidelines/design-tokens/responsive.md`
- `/guidelines/design-tokens/spacing.md`
- `/guidelines/architecture/component-structure.md`
- `/guidelines/patterns/layout-patterns.md`

---

## Workflow Steps

### Step 1: Container & Width Consistency

Scan all page components for:

1. **Container classes:** Verify all page sections use the standard container pattern (`.container-*` or `max-w-*` wrappers)
2. **Max-width consistency:** Identify sections that use inconsistent max-width values per `/guidelines/architecture/component-structure.md`:
   - `container.site`: `max-w-[1440px]` (navbar, footer, standard grids)
   - `container.content`: `max-w-[960px]` (text-heavy sections, 60-80 char line length)
   - `container.wide`: `max-w-[1280px]` (feature grids, visual-heavy sections)
   - `container.full`: `w-full` (full-width backgrounds with constrained inner content)
3. **Padding consistency:** Verify all containers apply consistent horizontal padding using `clamp()` tokens
4. **Full-bleed exceptions:** Hero sections and background elements that intentionally break container width should be documented and use the correct pattern

**Handcrafted Wines Container Patterns:**
```tsx
// Standard page section
<section className="w-full">
  <div className="container mx-auto max-w-[1440px] px-[clamp(1rem,4vw,3rem)]">
    {/* Content */}
  </div>
</section>

// Content-focused section (text-heavy)
<section className="w-full">
  <div className="container mx-auto max-w-[960px] px-[clamp(1rem,4vw,3rem)]">
    {/* Long-form content */}
  </div>
</section>

// Full-bleed background
<section className="w-full bg-[var(--twb-color-bg-secondary)]">
  <div className="container mx-auto max-w-[1440px] px-[clamp(1rem,4vw,3rem)]">
    {/* Content with constrained width */}
  </div>
</section>
```

### Step 2: Overflow & Scroll Issues

1. **Horizontal overflow:** Search for elements that cause horizontal scrollbars:
   - Fixed-width elements exceeding viewport (check `w-[XXXpx]` classes)
   - Content that doesn't respect `overflow-x-hidden` on parents
   - Images without `max-w-full` or proper sizing
2. **Hidden overflow clipping:** Identify elements with `overflow-hidden` that unintentionally clip content:
   - Box shadows (use `overflow-visible` or remove parent overflow)
   - Absolutely positioned children (tooltips, dropdowns)
   - Hand-drawn decorative elements (organic borders, flourishes)
3. **Sticky/fixed positioning:** Verify sticky headers, floating elements don't overlap content:
   - UnifiedHeader (sticky on scroll)
   - Checkout progress indicator (if sticky)
   - "Back to top" button (if implemented)
4. **Z-index conflicts:** Scan for z-index values that cause layering conflicts:
   - Modals (z-50)
   - Dropdowns (z-40)
   - Sticky headers (z-30)
   - Overlays (z-20)
   - Sheet components (z-50)

### Step 3: Missing Sections & Structural Gaps

1. **Page completeness:** Verify each page template has all expected sections per Handcrafted Wines content strategy
2. **Empty states:** Verify pages handle empty data gracefully (no blank areas where content should be)
3. **Section ordering:** Confirm sections appear in logical order
4. **Footer/header presence:** Every route renders the appropriate header and footer:
   - Main site: UnifiedHeader + UnifiedFooter
   - Checkout: CheckoutHeader + CheckoutFooter
   - Dev tools: UnifiedHeader + UnifiedFooter

**Expected Page Sections (Handcrafted Wines):**

**Homepage:**
- Hero (tagline, family story)
- 4-generation timeline
- What We Handcraft (wines, spirits, cheese)
- Family values grid
- Visit CTA
- Wine Club CTA
- Latest news (optional)
- Newsletter signup

**Shop Home:**
- Hero
- Category cards (4: wines, spirits, cheese, gifts)
- Featured products grid
- Why Shop With Us section
- Four Generations story
- Newsletter signup

**Product Detail:**
- Product hero (image + basic info)
- Product details (description, tasting notes, pairing)
- Awards (if applicable)
- Winemaker notes
- Quantity + Add to Cart
- Related products

**About:**
- Hero
- 4-generation story
- Timeline
- Core values
- Links to sub-pages (farm, team, awards, sustainability)

### Step 4: Grid & Flexbox Integrity

1. **Grid layouts:** Verify CSS Grid templates respond to breakpoints:
   - 4 columns desktop → 2 columns tablet → 1 column mobile
   - Product grids adjust correctly
   - Team member grid responds
2. **Flex wrapping:** Ensure flex containers with `flex-wrap: wrap` still look intentional when items wrap
3. **Gap consistency:** Verify all grids and flex containers use `clamp()` gap tokens or `var(--twb-spacing-*)`, not arbitrary values
4. **Alignment:** Check for misaligned items:
   - Inconsistent vertical alignment in card grids
   - Uneven image heights (use `aspect-ratio` or `object-cover`)
   - Text that doesn't align with adjacent columns

**Handcrafted Wines Grid Patterns:**
```tsx
// Product grid (4 → 2 → 1)
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[clamp(1rem,2vw,2rem)]">

// Team grid (2 → 1)
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

// Experience cards (3 → 2 → 1)
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

### Step 5: Responsive Breakpoint Audit

Test each page template at these breakpoints per `/guidelines/design-tokens/responsive.md`:

| Breakpoint | Width | Prefix | Expected Behavior |
|------------|-------|--------|-------------------|
| Mobile S | 320px-374px | Default | Single column, stacked layout, 16px min spacing |
| Mobile M | 375px-767px | Default | Single column, comfortable spacing |
| Tablet | 768px-1023px | `md:` | 2-column grids, side-by-side layouts |
| Desktop | 1024px-1279px | `lg:` | Full grid layouts, 3-4 columns |
| Desktop L | 1280px-1919px | `xl:` | Max-width container centered |
| Ultra-wide | 1920px+ | `2xl:` | Content doesn't stretch uncomfortably |

For each breakpoint, verify:
1. No content overflow (horizontal scroll)
2. Text remains readable (line length 60-80 characters for prose)
3. Images scale proportionally (use `aspect-ratio`, `object-cover`)
4. Touch targets remain 44x44px minimum (mobile/tablet)
5. Navigation adapts (hamburger on mobile, full nav on desktop)
6. Hero sections use `min-h-[calc(100dvh-90px)]` on mobile (accounts for sticky header)

**Handcrafted Wines Breakpoint Priorities:**
- Mobile (375px): Primary — most users
- Tablet (768px): Secondary — booking, shopping
- Desktop (1024px+): Tertiary — browsing, research

### Step 6: Hero Standards Compliance

Per `/guidelines/patterns/hero-standards.md`:

1. **Mobile height:** All Hero sections must use `min-h-[calc(100dvh-90px)]` on mobile (accounts for 90px sticky header)
2. **Scroll down arrow:** Required on all Hero sections:
   - Circle around arrow (use ScrollDownArrow component if available)
   - Placement: `absolute bottom-8 left-1/2 -translate-x-1/2 z-30`
   - Always a gap between arrow and content (never overlap text/buttons)
3. **Content padding:** `py-20` (top) and `pb-32` (bottom - mandatory to clear arrow)
4. **Background images:** Use `alt=""` for decorative backgrounds

### Step 7: Report

Save report to `/reports/layout/layout-audit-YYYY-MM-DD.md` with:

```markdown
# Layout Audit - Handcrafted Wines

**Date:** YYYY-MM-DD  
**Scope:** [All pages / Specific routes]  
**Status:** [Complete/In Progress]

## Executive Summary
- **Pages/templates audited:** [count]
- **Container inconsistencies:** [count]
- **Overflow issues:** [count]
- **Missing sections:** [count]
- **Grid/flex issues:** [count]
- **Breakpoint regressions:** [count]
- **Hero standard violations:** [count]
- **Health score:** [0-100]

## Container Consistency
[List files with non-standard container patterns]

## Overflow Issues
[List by file with description]

## Missing Sections
[List pages with missing expected sections]

## Grid/Flex Issues
[List misalignment, wrapping, gap issues]

## Breakpoint Regressions
[List issues by breakpoint]

## Hero Standards
[List Hero components not meeting standards]

## Fixes Applied
[List all modifications made]

## Remaining Issues
[List with priority: P1 (blocks users), P2 (degrades experience), P3 (polish)]

## Recommendations
[Next steps, component updates, pattern documentation]
```

---

## Success Criteria

- [ ] All pages use consistent container patterns (site/content/wide/full)
- [ ] Zero horizontal overflow issues at any breakpoint (320px-1920px+)
- [ ] All page templates have expected sections (no missing content)
- [ ] Grid layouts collapse correctly at all breakpoints (4→2→1, 3→2→1, 2→1)
- [ ] Spacing uses `clamp()` or `var(--twb-spacing-*)` tokens throughout
- [ ] All Hero sections meet standards (mobile height, scroll arrow, padding)
- [ ] No z-index conflicts (modals, dropdowns, headers)
- [ ] Report saved to `/reports/layout/`

---

## Routes to Audit (Handcrafted Wines)

**High Priority (Main Site):**
- `/` (Homepage)
- `/about` (About main)
- `/about/farm` (The Farm)
- `/about/team` (Our Team)
- `/about/awards` (Awards)
- `/about/sustainability` (Sustainability)
- `/shop` (Shop home)
- `/visit` (Experiences)
- `/events` (Events)
- `/wine-club` (Wine Club)

**High Priority (Shop):**
- `/shop/wines` (Wines category)
- `/shop/spirits` (Spirits category)
- `/shop/cheese` (Cheese category)
- `/shop/gifts` (Gifts category)
- `/shop/product/:slug` (Product detail)
- `/shop/cart` (Cart)
- `/shop/checkout` (Checkout flow)

**Medium Priority:**
- `/company/news` (News listing)
- `/company/contact` (Contact)
- `/company/faq` (FAQ)
- `/company/search-results` (Search)

**Low Priority (System):**
- `/dev-tools` (Developer hub)
- `/dev-tools/tokens` (Token reference)
- `/dev-tools/routes` (Route inspector)
- `/sitemap` (Sitemap)
- `/404` (404 page)

---

## Testing Devices (Recommended)

**Mobile:**
- iPhone SE (375x667)
- iPhone 12 Pro (390x844)
- Galaxy S21 (360x800)

**Tablet:**
- iPad (768x1024)
- iPad Pro (1024x1366)

**Desktop:**
- MacBook Air (1440x900)
- 1080p (1920x1080)
- 4K (2560x1440)

---

**Maintained by:** Handcrafted Wines Development Team  
**Last Updated:** 2026-03-18  
**Related Prompts:** `audit responsive`, `audit a11y`, `audit functionality`  
**Related Guidelines:** `/guidelines/patterns/hero-standards.md`, `/guidelines/design-tokens/responsive.md`
