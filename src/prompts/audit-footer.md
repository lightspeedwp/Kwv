# Audit Footer — Footer Template Part & Pattern Compliance

**Type:** Audit  
**Created:** 2026-03-18  
**Status:** Active  
**Trigger Word:** `audit footer`  
**Project:** Handcrafted Wines

---

## Prompt Purpose

**Objective:** Audit footer implementation across all pages to ensure consistent use of Footer template part component that loads different footer patterns based on site section.

**When to Use:** After adding new pages, changing footer patterns, or when footer inconsistencies appear.

**Architecture:** ONE template part (`Footer.tsx`), TWO patterns (main site vs dev tools).

---

## Handcrafted Wines Footer Architecture

**Template Part (Single Component):**
- `/components/layout/Footer.tsx` - Wrapper that loads patterns

**Footer Patterns (Two):**
- `/components/patterns/FooterMain.tsx` - Main site footer (full sitemap)
- `/components/patterns/FooterDevTools.tsx` - Dev tools footer (minimal, dev-focused)

**Pattern Selection Logic:**
```tsx
// /components/layout/Footer.tsx
export default function Footer() {
  const location = useLocation()
  
  if (location.pathname.startsWith('/dev-tools')) {
    return <FooterDevTools />
  }
  
  return <FooterMain /> // Default for all other pages
}
```

---

## Workflow Steps

### Step 1: Verify Template Part Exists

1. Check for `/components/layout/Footer.tsx`
2. If missing, create it with pattern selection logic
3. Verify it exports default function `Footer`

### Step 2: Inventory Footer Patterns

List footer pattern files:
1. `/components/patterns/FooterMain.tsx` - Main site
2. `/components/patterns/FooterDevTools.tsx` - Dev tools

**For each pattern, verify:**
- Exists as separate file
- Exports default function
- Uses consistent CSS variables (`--twb-*`)
- Uses Phosphor icons (NOT Lucide)
- Responsive (stacks on mobile, grid on desktop)
- Meets WCAG AA accessibility standards

### Step 3: Pattern Requirements

**FooterMain (Default - All Pages Except Dev Tools):**

Required sections:
1. **About Column:**
   - Handcrafted Wines logo
   - Tagline: "Four generations of boutique winemaking in Paarl, South Africa"
   - Est. 1918
   - Brief description

2. **Quick Links Column:**
   - About Us
   - Our Team
   - Farm Story
   - Awards
   - Sustainability
   - News

3. **Shop Column:**
   - Wines
   - Spirits
   - Cheese
   - Gifts
   - Wine Club

4. **Visit Column:**
   - Experiences
   - Tastings
   - Tours
   - Events
   - Contact Us
   - FAQ

5. **Newsletter Section (Full Width Above Columns):**
   - "Join The Wine Box" heading
   - Email signup form
   - Privacy note

6. **Social & Legal (Below Columns):**
   - Social icons: Instagram, Facebook, Twitter/X
   - Copyright: © 2026 Handcrafted Wines. All rights reserved.
   - Legal links: Privacy Policy, Terms of Service, Cookie Policy
   - Location: Paarl Mountain, South Africa

**Responsive Behavior:**
- **Desktop (1024px+):** 4-column grid
- **Tablet (768-1023px):** 2-column grid
- **Mobile (<768px):** Stacked single column

---

**FooterDevTools (/dev-tools/*):**

Minimal footer for dev environment:
1. **Dev Tools Branding:**
   - "Handcrafted Wines Dev Tools" text
   - Version number (from package.json or hardcoded)

2. **Quick Links:**
   - Dashboard
   - Design Tokens
   - Components
   - Code Quality
   - Back to Main Site (links to /)

3. **Copyright:**
   - © 2026 Handcrafted Wines Development Team

**Responsive:** Single column on all breakpoints (minimal design)

---

### Step 4: Page-Level Usage Audit

Scan ALL page files for footer usage:

**Expected Pattern:**
```tsx
import Layout from '../components/layout/Layout'
// Layout includes Footer automatically

export default function PageName() {
  return (
    <Layout>
      {/* Page content */}
    </Layout>
  )
}
```

**Violations:**
- ❌ Direct footer import: `import UnifiedFooter from '...'`
- ❌ Multiple footers on one page
- ❌ Hardcoded footer HTML instead of component
- ❌ Missing footer (page doesn't use Layout)
- ❌ Checkout pages showing full footer (should be minimal or none)

### Step 5: Route-to-Pattern Mapping

Build map of routes to expected footer pattern:

| Route Pattern | Footer Pattern | Columns | Newsletter | Social |
|---------------|----------------|---------|------------|--------|
| `/` (Homepage) | FooterMain | 4 | Yes | Yes |
| `/about/*` | FooterMain | 4 | Yes | Yes |
| `/visit/*` | FooterMain | 4 | Yes | Yes |
| `/events/*` | FooterMain | 4 | Yes | Yes |
| `/wine-club/*` | FooterMain | 4 | Yes | Yes |
| `/company/*` | FooterMain | 4 | Yes | Yes |
| `/shop/*` | FooterMain | 4 | Yes | Yes |
| `/cart` | FooterMain | 4 | Yes | Yes |
| `/checkout/*` | FooterMain (minimal) | 2 | No | No |
| `/dev-tools/*` | FooterDevTools | 1 | No | No |

### Step 6: Design Consistency Check

For each footer pattern:

1. **Logo:** Consistent placement and size
2. **Typography:** 
   - Headings: `var(--twb-font-primary)`
   - Body: `var(--twb-font-secondary)`
   - Size: Uses `clamp()` or token variables
3. **Colors:** 
   - Background: `var(--twb-color-bg-footer)`
   - Text: `var(--twb-color-text-footer)`
   - Links: `var(--twb-color-text-link)`
   - Hover: `var(--twb-color-text-link-hover)`
4. **Icons:** All Phosphor (not Lucide)
5. **Spacing:** Uses `var(--twb-spacing-*)` or `clamp()`
6. **Grid:** Uses Tailwind `grid` utilities with responsive breakpoints
7. **Accessibility:** 
   - All links have descriptive text
   - Social icons have `aria-label`
   - Keyboard navigable
   - Focus indicators visible

### Step 7: Newsletter Form Compliance

Check FooterMain newsletter section:

1. **Email input:** 
   - Type="email"
   - Required attribute
   - Accessible label
   - Placeholder: "your@email.com"
2. **Submit button:**
   - Clear CTA: "Subscribe" or "Join Now"
   - Disabled state while submitting
   - Success/error feedback
3. **Privacy note:** 
   - "We respect your privacy. Unsubscribe anytime."
4. **Form handling:**
   - Client-side validation
   - Error messages accessible

### Step 8: Social Icons Compliance

Check FooterMain social links:

**Required Icons (Phosphor):**
- Instagram: `<InstagramLogo />`
- Facebook: `<FacebookLogo />`
- Twitter/X: `<TwitterLogo />` or `<XLogo />`

**Requirements:**
- Size: 24px (`size={24}`)
- Weight: `regular`
- Color: Inherits from parent (theme color)
- Hover: Brightens/changes color
- Links: Open in new tab (`target="_blank" rel="noopener noreferrer"`)
- Accessible: `aria-label="Follow us on Instagram"`

### Step 9: Legal Links Compliance

Check FooterMain legal links:

**Required Links:**
- Privacy Policy (route: `/privacy`)
- Terms of Service (route: `/terms`)
- Cookie Policy (route: `/cookies`)

**Requirements:**
- Separator: ` | ` or ` · `
- Font size: Small but readable (minimum 14px)
- Color: Muted but accessible (WCAG AA contrast)
- Hover: Underline or color change

### Step 10: Report

Save to `/reports/layout/footer-audit-YYYY-MM-DD.md`:

```markdown
# Footer Template Part Audit - Handcrafted Wines

**Date:** YYYY-MM-DD  
**Status:** [Complete/Issues Found]

## Template Part Status
- **Footer.tsx exists:** [Yes/No]
- **Pattern selection logic:** [Working/Needs Fix]
- **Pattern count:** 2 (Main, DevTools)

## Footer Patterns Inventory
| Pattern | Exists | Columns | Newsletter | Social Icons | Phosphor Icons | CSS Variables | Accessible |
|---------|--------|---------|------------|--------------|----------------|---------------|------------|
| FooterMain | ✅/❌ | 4 | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ |
| FooterDevTools | ✅/❌ | 1 | N/A | N/A | ✅/❌ | ✅/❌ | ✅/❌ |

## Page Usage Violations
[List pages not using Footer template part correctly]

## Route-to-Pattern Mismatches
[List routes loading wrong footer pattern]

## Design Inconsistencies
[List visual/behavioral differences between patterns]

## Newsletter Form Issues
[List form validation, accessibility, or functionality problems]

## Social Icons Issues
[List icon library (Lucide vs Phosphor), sizing, or link problems]

## Legal Links Issues
[List missing links, broken routes, or accessibility problems]

## Fixes Applied
[List all modifications made during audit]

## Remaining Issues
[List issues requiring manual intervention]

## Recommendations
1. Create missing footer patterns
2. Fix pattern selection logic
3. Ensure newsletter form accessibility
4. Update social icons (Lucide → Phosphor)
5. Verify legal page routes exist
```

---

## Success Criteria

- [ ] Footer template part (`Footer.tsx`) exists and loads patterns conditionally
- [ ] Both footer patterns exist (FooterMain, FooterDevTools)
- [ ] All pages use Layout (which includes Footer), not direct footer imports
- [ ] Route-to-pattern mapping correct for all routes
- [ ] All footers use Phosphor icons (zero Lucide)
- [ ] All footers use CSS variables (zero hardcoded colors/fonts)
- [ ] FooterMain has 4-column grid (desktop), responsive on mobile
- [ ] Newsletter form accessible and functional
- [ ] Social icons correct (Instagram, Facebook, Twitter/X) with Phosphor
- [ ] Legal links present and working
- [ ] Both footers meet WCAG AA accessibility standards
- [ ] Report saved to `/reports/layout/`

---

**Maintained by:** Handcrafted Wines Development Team  
**Last Updated:** 2026-03-18  
**Related Prompts:** `audit header`, `audit hero`, `audit layout`
