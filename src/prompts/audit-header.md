# Audit Header — Header Template Part & Pattern Compliance

**Type:** Audit  
**Created:** 2026-03-18  
**Status:** Active  
**Trigger Word:** `audit header`  
**Project:** Handcrafted Wines

---

## Prompt Purpose

**Objective:** Audit header implementation across all pages to ensure consistent use of Header template part component that loads different header patterns based on site section.

**When to Use:** After adding new pages, changing header patterns, or when header inconsistencies appear.

**Architecture:** ONE template part (`Header.tsx`), MULTIPLE patterns loaded conditionally.

---

## Handcrafted Wines Header Architecture

**Template Part (Single Component):**
- `/components/layout/Header.tsx` - Wrapper that loads patterns

**Header Patterns (Multiple):**
- `/components/patterns/HeaderMain.tsx` - Main site header (with breadcrumbs)
- `/components/patterns/HeaderHomepage.tsx` - Homepage header (transparent, no breadcrumbs)
- `/components/patterns/HeaderShop.tsx` - Shop section header (with cart preview)
- `/components/patterns/HeaderDevTools.tsx` - Dev tools header (minimal, dev-focused)
- `/components/patterns/HeaderCheckout.tsx` - Checkout header (minimal, trust signals)

**Pattern Selection Logic:**
```tsx
// /components/layout/Header.tsx
export default function Header() {
  const location = useLocation()
  
  if (location.pathname === '/') return <HeaderHomepage />
  if (location.pathname.startsWith('/shop')) return <HeaderShop />
  if (location.pathname.startsWith('/dev-tools')) return <HeaderDevTools />
  if (location.pathname.startsWith('/checkout')) return <HeaderCheckout />
  
  return <HeaderMain /> // Default for all other pages
}
```

---

## Workflow Steps

### Step 1: Verify Template Part Exists

1. Check for `/components/layout/Header.tsx`
2. If missing, create it with pattern selection logic
3. Verify it exports default function `Header`

### Step 2: Inventory Header Patterns

List all header pattern files:
1. `/components/patterns/HeaderMain.tsx`
2. `/components/patterns/HeaderHomepage.tsx`
3. `/components/patterns/HeaderShop.tsx`
4. `/components/patterns/HeaderDevTools.tsx`
5. `/components/patterns/HeaderCheckout.tsx`

**For each pattern, verify:**
- Exists as separate file
- Exports default function
- Uses consistent CSS variables (`--twb-*`)
- Uses Phosphor icons (NOT Lucide)
- Includes mobile menu for < 1024px
- Meets WCAG AA accessibility standards

### Step 3: Pattern Requirements by Section

**HeaderHomepage (/):**
- Transparent background overlaying hero
- No breadcrumbs
- Logo, main nav, cart, account icons
- Transitions to solid background on scroll (optional)
- Mobile: Hamburger menu at < 1024px

**HeaderMain (Default - /about, /visit, /events, /company):**
- Solid background with theme color
- Breadcrumbs below main nav
- Logo, main nav, search, cart, account icons
- Sticky header (stays visible on scroll)
- Mobile: Hamburger menu at < 1024px

**HeaderShop (/shop, /shop/*):**
- Solid background
- Product search prominent
- Cart with item count badge
- Category navigation (wines, spirits, cheese, gifts)
- Breadcrumbs (Home > Shop > Category > Product)
- Mobile: Hamburger menu + search icon

**HeaderDevTools (/dev-tools, /dev-tools/*):**
- Minimal design (no e-commerce features)
- Dev tools logo/title
- Simple navigation (Dashboard, Tokens, Components, Status)
- No cart, no search
- Theme toggle prominent
- Mobile: Simplified menu

**HeaderCheckout (/checkout, /cart):**
- Minimal, trust-focused
- Logo (links to /)
- Progress steps (Cart → Checkout → Confirmation)
- No main navigation (reduce distractions)
- Trust signals (secure checkout badge, SSL)
- Back to shop link
- Mobile: Same minimal approach

### Step 4: Page-Level Usage Audit

Scan ALL page files for header usage:

**Expected Pattern:**
```tsx
import Layout from '../components/layout/Layout'
// Layout includes Header automatically

export default function PageName() {
  return (
    <Layout>
      {/* Page content */}
    </Layout>
  )
}
```

**Violations:**
- ❌ Direct header import: `import UnifiedHeader from '...'`
- ❌ Multiple headers on one page
- ❌ Hardcoded header HTML instead of component
- ❌ Missing header (page doesn't use Layout)

### Step 5: Route-to-Pattern Mapping

Build map of routes to expected header pattern:

| Route Pattern | Header Pattern | Breadcrumbs | Cart | Search |
|---------------|----------------|-------------|------|--------|
| `/` | HeaderHomepage | No | Yes | No |
| `/about/*` | HeaderMain | Yes | Yes | No |
| `/visit/*` | HeaderMain | Yes | Yes | No |
| `/events/*` | HeaderMain | Yes | Yes | No |
| `/wine-club/*` | HeaderMain | Yes | Yes | No |
| `/company/*` | HeaderMain | Yes | Yes | Yes |
| `/shop` | HeaderShop | Yes | Yes | Yes |
| `/shop/*` | HeaderShop | Yes | Yes | Yes |
| `/cart` | HeaderCheckout | No | Yes (active) | No |
| `/checkout/*` | HeaderCheckout | No | Yes (view only) | No |
| `/dev-tools/*` | HeaderDevTools | No | No | No |

### Step 6: Design Consistency Check

For each header pattern:

1. **Logo:** Consistent placement (top-left)
2. **Navigation:** Consistent spacing, font size
3. **Icons:** All Phosphor (not Lucide)
4. **Colors:** Uses `var(--twb-color-*)` theme variables
5. **Typography:** Uses `var(--twb-font-secondary)` for nav links
6. **Spacing:** Uses `var(--twb-spacing-*)` or `clamp()`
7. **Mobile breakpoint:** Hamburger appears at < 1024px
8. **Z-index:** Sticky header has appropriate z-index
9. **Accessibility:** All nav links have proper labels, keyboard accessible

### Step 7: Mobile Menu Consistency

All header patterns (except Checkout) should have:
- Hamburger icon at < 1024px
- Slide-in menu animation
- Close (X) button
- Full navigation links
- Theme toggle
- Account/cart links (if applicable)

**Mobile Menu Component:**
- Shared component: `/components/layout/MobileMenu.tsx`
- Props: navigation links, showCart, showSearch
- Dark overlay when open
- Smooth animation (respects `prefers-reduced-motion`)

### Step 8: Report

Save to `/reports/layout/header-audit-YYYY-MM-DD.md`:

```markdown
# Header Template Part Audit - Handcrafted Wines

**Date:** YYYY-MM-DD  
**Status:** [Complete/Issues Found]

## Template Part Status
- **Header.tsx exists:** [Yes/No]
- **Pattern selection logic:** [Working/Needs Fix]
- **Pattern count:** [N] patterns

## Header Patterns Inventory
| Pattern | Exists | Uses Phosphor | CSS Variables | Mobile Menu | Accessible |
|---------|--------|---------------|---------------|-------------|------------|
| HeaderHomepage | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ |
| HeaderMain | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ |
| HeaderShop | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ |
| HeaderDevTools | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ |
| HeaderCheckout | ✅/❌ | ✅/❌ | ✅/❌ | N/A | ✅/❌ |

## Page Usage Violations
[List pages not using Header template part correctly]

## Route-to-Pattern Mismatches
[List routes loading wrong header pattern]

## Design Inconsistencies
[List visual/behavioral differences between patterns]

## Mobile Menu Issues
[List mobile menu problems across patterns]

## Fixes Applied
[List all modifications made during audit]

## Remaining Issues
[List issues requiring manual intervention]

## Recommendations
1. Create missing header patterns
2. Fix pattern selection logic
3. Ensure mobile menu consistency
4. Update icon imports (Lucide → Phosphor)
```

---

## Success Criteria

- [ ] Header template part (`Header.tsx`) exists and loads patterns conditionally
- [ ] All 5 header patterns exist as separate files
- [ ] All pages use Layout (which includes Header), not direct header imports
- [ ] Route-to-pattern mapping correct for all routes
- [ ] All headers use Phosphor icons (zero Lucide)
- [ ] All headers use CSS variables (zero hardcoded colors/fonts)
- [ ] Mobile menu consistent across all patterns (except Checkout)
- [ ] All headers meet WCAG AA accessibility standards
- [ ] Report saved to `/reports/layout/`

---

**Maintained by:** Handcrafted Wines Development Team  
**Last Updated:** 2026-03-18  
**Related Prompts:** `audit footer`, `audit hero`, `audit layout`
