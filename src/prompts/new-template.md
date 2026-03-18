# New Template — Scaffold a Page Template

**Type:** Implementation  
**Created:** 2026-03-18  
**Status:** Active  
**Trigger Word:** `new template`  
**Project:** Handcrafted Wines

---

## Prompt Purpose

**Objective:** Scaffold new page following Handcrafted Wines component composition architecture. Use reusable sections, 100% CSS variables, hand-drawn aesthetic.

**When to Use:** When new page needs to be added to site.

**Note:** Handcrafted Wines uses direct page composition, NOT WordPress blocks/patterns. All pages are React components.

---

## Input Required

User must provide:
1. **Page name** — e.g., "Vineyard Tour", "Private Events", "Sustainability Story"
2. **Page type** — Main site, Shop, Experiences, Events, Company
3. **Sections to include** — Hero, content sections, CTA
4. **Route path** — e.g., `/experiences/vineyard-tour`

---

## Workflow Steps

### Step 1: Read Guidelines

1. Read `/guidelines/architecture/component-structure.md` for component patterns
2. Read `/guidelines/architecture/sitemap.md` for existing routes
3. Read `/guidelines/patterns/hero-standards.md` for Hero requirements
4. Read `/guidelines/patterns/layout-patterns.md` for section patterns

### Step 2: Create Page File

1. Create `/pages/{category}/{PageName}.tsx`
2. Compose from reusable sections: Hero, content sections, Newsletter
3. Use Layout component (UnifiedHeader + UnifiedFooter)
4. Import data from `/data/*.ts` files (no hardcoded content)

**Example Structure:**
```tsx
import Layout from '../components/layout/Layout'
import Hero from '../components/sections/Hero'
import { someData } from '../data/someData'

export default function PageName() {
  return (
    <Layout>
      <Hero {...heroProps} />
      {/* Content sections */}
    </Layout>
  )
}
```

### Step 3: Design System Compliance

All generated code must:
- Use `var(--twb-font-primary/secondary)` for fonts
- Use `var(--twb-spacing-*)` or `clamp()` for spacing
- Use `var(--twb-color-*)` for all colors
- Use `lucide-react` for icons
- Use `react-router` Link for navigation
- Follow hand-drawn aesthetic (organic borders, decorative elements)
- Meet WCAG AA accessibility standards

### Step 4: Add Decorative Elements

Include hand-drawn elements where appropriate:
- HandDrawnUnderline (key headings)
- BrushStrokeDivider (section transitions)
- OrganicBorder (featured content)
- WaxSealStamp (certifications, awards)

### Step 5: Register Route

1. Add route to `/routes.tsx`
2. Update `/guidelines/architecture/sitemap.md`
3. Add navigation link if needed (UnifiedHeader, UnifiedFooter)

### Step 6: Update Tracking

1. Add CHANGELOG entry under `[Unreleased]` → Added
2. Update `/tasks/task-list.md` if tracked task

---

## Success Criteria

- [ ] Page file created in `/pages/{category}/`
- [ ] Route registered in `/routes.tsx`
- [ ] 100% CSS variable compliance
- [ ] Composed from reusable sections
- [ ] Hand-drawn decorative elements included
- [ ] WCAG AA accessibility met
- [ ] Data imported from `/data/*.ts` (no hardcoded content)
- [ ] Sitemap updated
- [ ] CHANGELOG updated

---

## Handcrafted Wines Page Templates

**Existing Templates:**
- Homepage (/)
- About pages (/about, /about/team, /about/farm, etc.)
- Shop pages (/shop, /shop/wines, /shop/product/:slug, etc.)
- Experiences (/visit, /experiences)
- Events (/events)
- Wine Club (/wine-club)
- Company (/company/contact, /company/faq, etc.)

**Common Sections:**
- Hero (all pages)
- Newsletter (most pages)
- 4-generation story (about pages)
- Product grids (shop pages)
- Experience cards (visit pages)
- FAQ accordion (FAQ, wine club)

---

**Maintained by:** Handcrafted Wines Development Team  
**Last Updated:** 2026-03-18  
**Related Prompts:** `new pattern`, `audit routing`
