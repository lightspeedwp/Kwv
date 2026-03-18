# Audit Responsive — Responsive Design Audit

**Type:** Audit  
**Created:** 2026-03-18  
**Status:** Active  
**Trigger Word:** `audit responsive`  
**Project:** Handcrafted Wines

---

## Prompt Purpose

**Objective:** Audit CSS and components for responsive design compliance — breakpoint usage, mobile-first approach, grid/flex behavior, touch targets on mobile, and viewport compatibility.

**When to Use:** After building new pages, or when responsive issues are reported.

**Reference Guidelines:**
- `/guidelines/design-tokens/responsive.md`
- `/guidelines/design-tokens/touch-targets.md`
- `/guidelines/patterns/hero-standards.md`

---

## Workflow Steps

### Step 1: Read Breakpoint System

Per `/guidelines/design-tokens/responsive.md`:

**Handcrafted Wines Breakpoints:**
- **Mobile:** 0-767px (default, mobile-first)
- **Tablet:** 768px-1023px (`md:` prefix)
- **Desktop:** 1024px-1279px (`lg:` prefix)
- **Desktop L:** 1280px-1919px (`xl:` prefix)
- **Ultra-wide:** 1920px+ (`2xl:` prefix)

### Step 2: Breakpoint Usage Audit

Scan all `.tsx` files for:

1. **Tailwind breakpoint usage:** Verify all responsive classes use standard prefixes (`md:`, `lg:`, `xl:`, `2xl:`)
2. **Custom breakpoints:** Flag any hardcoded media queries with non-standard values
3. **Mobile-first check:** Verify base styles are mobile and larger breakpoints add complexity
4. **Breakpoint coverage:** Key pages should respond at all 5 breakpoints

**Example Valid Pattern:**
```tsx
className="
  grid 
  grid-cols-1 
  md:grid-cols-2 
  lg:grid-cols-4 
  gap-4 
  md:gap-6 
  lg:gap-8
"
```

### Step 3: Grid and Layout Audit

1. **Grid responsiveness:** Multi-column grids collapse appropriately:
   - Product grids: 4 → 2 → 1
   - Experience cards: 3 → 2 → 1
   - Team members: 2 → 1
   - FAQ: 2 columns → 1 column
2. **Overflow:** No horizontal scroll on any viewport width (320px-1920px+)
3. **Typography scaling:** Font sizes readable on mobile:
   - Body text: minimum 16px
   - Headings use `clamp()` for fluid scaling
4. **Image sizing:** Images scale with container, no fixed-width images causing overflow
5. **Container behavior:** All containers use responsive padding with `clamp(1rem,4vw,3rem)`

**Check Pages:**
- Homepage (multiple grid sections)
- Shop categories (product grids)
- Experiences (experience cards)
- About Team (team grid)
- FAQ (2-column layout)

### Step 4: Hero Standards Compliance

Per `/guidelines/patterns/hero-standards.md`:

1. **Mobile height:** All Hero sections must use `min-h-[calc(100dvh-90px)]` on mobile (accounts for 90px sticky header)
2. **Scroll down arrow:** Required on all Heroes, positioned `bottom-8`
3. **Content padding:** `py-20` top, `pb-32` bottom (clears arrow)
4. **Background images:** Properly sized for viewport

**Pages with Heroes to Check:**
- Homepage
- About main
- Shop home
- Experiences
- Events
- Wine Club

### Step 5: Touch Target Audit (Mobile)

Per `/guidelines/design-tokens/touch-targets.md`:

1. All interactive elements meet 44x44px minimum on viewports ≤768px:
   - Navigation links (UnifiedHeader)
   - Mobile menu items
   - Product card buttons
   - Quantity +/- controls
   - Add to cart buttons
   - Filter checkboxes (ShopSidebar)
   - FAQ accordions
2. Sufficient spacing between tap targets on mobile (8px minimum)

**Priority Components:**
- UnifiedHeader (mobile menu, search, cart, account)
- ProductCard (add to cart button)
- MiniCart (quantity controls, close button)
- Cart (quantity controls, remove button)
- Checkout (all form inputs, buttons)
- ShopSidebar (filter controls)

### Step 6: Viewport-Specific Issues

1. **320px (iPhone SE):** Content doesn't break, text wraps properly
2. **375px (Mobile M):** Comfortable spacing, readable text
3. **768px (Tablet):** Grids expand to 2 columns, side-by-side layouts begin
4. **1024px (Desktop):** Full grid layouts (3-4 columns), hover states active
5. **1280px+ (Large):** Max-width container centered, content doesn't stretch uncomfortably

**Test Specific Elements:**
- UnifiedHeader navigation (hamburger → full nav transition at 1024px)
- Product grids (1 → 2 → 4 columns)
- Hero content (stacked → side-by-side)
- Footer (stacked → 4-column grid)

### Step 7: Report

Save report to `/reports/responsive/responsive-audit-YYYY-MM-DD.md` with:

```markdown
# Responsive Design Audit - Handcrafted Wines

**Date:** YYYY-MM-DD  
**Scope:** All pages and components  
**Status:** [Complete/In Progress]

## Executive Summary
- **Health Score:** [0-100]
- **Pages audited:** [count]
- **Breakpoint violations:** [count]
- **Layout issues:** [count]
- **Touch target violations:** [count]
- **Hero standards violations:** [count]

## Breakpoint Usage
[List non-standard breakpoints, missing responsive patterns]

## Grid/Layout Issues
[List overflow, broken grids, wrapping issues]

## Hero Standards
[List Hero components not meeting mobile height, arrow, padding standards]

## Touch Target Violations
[List elements < 44x44px on mobile, insufficient spacing]

## Viewport-Specific Issues
[List issues by breakpoint: 320px, 375px, 768px, 1024px, 1280px+]

## Fixes Applied
[List all modifications made]

## Remaining Issues
[List with priority]

## Recommendations
[Next steps, component updates, pattern improvements]
```

---

## Success Criteria

- [ ] All responsive classes use standard Tailwind breakpoints (`md:`, `lg:`, `xl:`, `2xl:`)
- [ ] Mobile-first approach verified (base styles mobile, breakpoints add complexity)
- [ ] No horizontal overflow at any viewport width (320px-1920px+)
- [ ] Touch targets meet 44x44px on mobile (≤768px)
- [ ] All Hero sections meet standards (mobile height, scroll arrow, padding)
- [ ] Product grids collapse correctly (4 → 2 → 1)
- [ ] UnifiedHeader navigation adapts (hamburger → full nav at 1024px)
- [ ] Report saved to `/reports/responsive/`

---

## Test Viewports (Handcrafted Wines)

| Viewport | Width | Device | Priority | Expected Behavior |
|----------|-------|--------|----------|-------------------|
| Mobile S | 320px | iPhone SE | High | Single column, no overflow |
| Mobile M | 375px | iPhone 12 | High | Comfortable spacing |
| Mobile L | 428px | iPhone Pro Max | Medium | Same as 375px |
| Tablet | 768px | iPad | High | 2-column grids, side-by-side |
| Desktop | 1024px | MacBook Air | High | 3-4 column grids, hover states |
| Desktop L | 1280px | 1080p monitor | Medium | Max-width centered |
| Desktop XL | 1440px | Standard monitor | Medium | Max-width centered |
| Ultra-wide | 1920px+ | 4K monitor | Low | Content doesn't stretch |

---

## Common Responsive Patterns (Handcrafted Wines)

### ✅ Good Patterns

```tsx
// Product grid - 4 → 2 → 1
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">

// Hero mobile height (accounts for 90px sticky header)
<section className="min-h-[calc(100dvh-90px)] lg:min-h-screen">

// Responsive container padding
<div className="px-[clamp(1rem,4vw,3rem)]">

// Touch-friendly button
<button className="min-h-[44px] min-w-[44px]">

// Fluid typography
<h1 className="text-[clamp(2.4rem,5vw+1rem,4.5rem)]">
```

### ❌ Bad Patterns

```tsx
// Fixed width breaks mobile
<div className="w-[1200px]">

// Custom breakpoint (non-standard)
<div className="max-[900px]:hidden">

// No mobile optimization
<div className="grid grid-cols-4 gap-8">

// Too small touch target on mobile
<button className="h-[32px] w-[32px]">

// Hero without mobile height adjustment
<section className="min-h-screen">
```

---

**Maintained by:** Handcrafted Wines Development Team  
**Last Updated:** 2026-03-18  
**Related Prompts:** `audit layout`, `audit a11y`, `audit performance`  
**Related Guidelines:** `/guidelines/design-tokens/responsive.md`, `/guidelines/patterns/hero-standards.md`
