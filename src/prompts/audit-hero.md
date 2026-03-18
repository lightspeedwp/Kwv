# Audit Hero — Hero Template Part & Pattern Compliance

**Type:** Audit  
**Created:** 2026-03-18  
**Status:** Active  
**Trigger Word:** `audit hero`  
**Project:** Handcrafted Wines

---

## Prompt Purpose

**Objective:** Audit hero section implementation across ALL pages to ensure consistent use of Hero template part component with different pattern layouts powered by centralized data files.

**When to Use:** After adding new pages, changing hero designs, or when hero inconsistencies appear.

**Architecture:** ONE template part (`Hero.tsx`), MULTIPLE patterns, data-driven from centralized files.

---

## Handcrafted Wines Hero Architecture

**Template Part (Single Component):**
- `/components/layout/Hero.tsx` - Wrapper that loads patterns based on props

**Hero Patterns (Multiple Layouts):**
- `/components/patterns/HeroHomepage.tsx` - Homepage hero (large, transparent header)
- `/components/patterns/HeroStandard.tsx` - Standard page hero (medium height, title + subtitle)
- `/components/patterns/HeroShop.tsx` - Shop category hero (product-focused)
- `/components/patterns/HeroMinimal.tsx` - Minimal hero (title only, no image)
- `/components/patterns/HeroDevTools.tsx` - Dev tools hero (code-focused design)

**Data Files (Centralized):**
- `/data/heroData.ts` - Main site hero content
- `/data/heroDataShop.ts` - Shop section heroes
- `/data/heroDataDevTools.ts` - Dev tools heroes

**Pattern Selection Logic:**
```tsx
// /components/layout/Hero.tsx
export default function Hero({ variant, data }: HeroProps) {
  switch (variant) {
    case 'homepage': return <HeroHomepage {...data} />
    case 'shop': return <HeroShop {...data} />
    case 'minimal': return <HeroMinimal {...data} />
    case 'devtools': return <HeroDevTools {...data} />
    default: return <HeroStandard {...data} />
  }
}
```

---

## Workflow Steps

### Step 1: Verify Template Part Exists

1. Check for `/components/layout/Hero.tsx`
2. If missing, create it with pattern selection logic
3. Verify it exports default function `Hero`
4. Verify it accepts `variant` and `data` props

### Step 2: Inventory Hero Patterns

List all hero pattern files:
1. `/components/patterns/HeroHomepage.tsx`
2. `/components/patterns/HeroStandard.tsx`
3. `/components/patterns/HeroShop.tsx`
4. `/components/patterns/HeroMinimal.tsx`
5. `/components/patterns/HeroDevTools.tsx`

**For each pattern, verify:**
- Exists as separate file
- Exports default function
- Accepts data as props (no hardcoded content)
- Uses CSS variables (`--twb-*`)
- Uses Phosphor icons (NOT Lucide)
- Meets hero standards from `/guidelines/patterns/hero-standards.md`

### Step 3: Hero Standards Compliance

Per `/guidelines/patterns/hero-standards.md`, ALL heroes must have:

1. **Mobile Height:** `min-h-[calc(100dvh-90px)]` (accounts for 90px sticky header)
2. **Desktop Height:** `min-h-screen` or `lg:min-h-screen`
3. **Scroll Down Arrow:**
   - Required on all heroes
   - Component: `<ScrollDownArrow />`
   - Position: `absolute bottom-8 left-1/2 -translate-x-1/2 z-30`
   - Circle around arrow
   - Gap between arrow and content (never overlap)
4. **Content Padding:**
   - Top: `py-20`
   - Bottom: `pb-32` (mandatory to clear scroll arrow)
5. **Responsive:** 
   - Mobile: Stacked single column
   - Desktop: Side-by-side or centered

### Step 4: Pattern Requirements by Type

**HeroHomepage (/):**
- Large hero: `min-h-screen`
- Full-width background image
- Transparent header overlay
- Large heading: `clamp(3rem, 6vw, 5rem)`
- CTA buttons: Primary + Secondary
- Scroll down arrow prominent
- Background: Wine vineyard or cellar image
- Text overlay: Readable contrast (WCAG AA)

**HeroStandard (Default):**
- Medium hero: `min-h-[60vh]` to `min-h-screen`
- Background image or solid color
- Page title (H1)
- Subtitle/description
- Optional CTA button
- Breadcrumbs below hero (not inside)
- Scroll down arrow

**HeroShop (/shop, /shop/*):**
- Medium hero: `min-h-[50vh]`
- Category-specific background
- Category title + description
- Product count: "Explore our [N] handcrafted wines"
- Filter/sort controls below hero
- Scroll down arrow

**HeroMinimal (/company/contact, /company/faq, etc.):**
- Small hero: `min-h-[40vh]`
- Solid background (theme color)
- Page title only (no subtitle)
- No image
- No CTA buttons
- Scroll down arrow

**HeroDevTools (/dev-tools/*):**
- Small hero: `min-h-[30vh]`
- Code-inspired design (monospace accents)
- Dev tool title + version
- Quick stats or metrics
- Different color scheme (dev-focused)
- Scroll down arrow

### Step 5: Data File Structure

**`/data/heroData.ts`** (Main site):
```ts
export const heroData = {
  homepage: {
    title: "Handcrafted with Care",
    subtitle: "Four generations of boutique winemaking in Paarl, South Africa",
    image: "https://images.unsplash.com/...",
    ctaPrimary: { text: "Explore Our Wines", href: "/shop" },
    ctaSecondary: { text: "Visit the Farm", href: "/visit" }
  },
  about: {
    title: "Our Story",
    subtitle: "A family legacy rooted in Paarl Mountain",
    image: "https://images.unsplash.com/..."
  },
  // ... more heroes
}
```

**`/data/heroDataShop.ts`** (Shop):
```ts
export const heroDataShop = {
  wines: {
    title: "Handcrafted Wines",
    description: "Small-batch wines from our estate vineyard",
    productCount: 8,
    image: "https://images.unsplash.com/..."
  },
  // ... more shop heroes
}
```

**`/data/heroDataDevTools.ts`** (Dev tools):
```ts
export const heroDataDevTools = {
  dashboard: {
    title: "Developer Dashboard",
    version: "v8.1.0",
    stats: { components: 47, pages: 28, health: 100 }
  },
  // ... more dev tool heroes
}
```

### Step 6: Page-Level Usage Audit

Scan ALL pages for hero usage:

**Expected Pattern:**
```tsx
import Hero from '../components/layout/Hero'
import { heroData } from '../data/heroData'

export default function PageName() {
  return (
    <>
      <Hero variant="standard" data={heroData.about} />
      {/* Page content */}
    </>
  )
}
```

**Violations:**
- ❌ Hardcoded hero HTML (not using Hero component)
- ❌ Multiple heroes on one page
- ❌ Hardcoded content in hero (should use data file)
- ❌ Missing scroll down arrow
- ❌ Wrong mobile height (not accounting for 90px header)
- ❌ Content overlapping scroll arrow

### Step 7: Route-to-Variant Mapping

Build map of routes to expected hero variant:

| Route | Hero Variant | Data Source | Image | CTA Buttons |
|-------|--------------|-------------|-------|-------------|
| `/` | homepage | heroData.homepage | Yes | Primary + Secondary |
| `/about` | standard | heroData.about | Yes | Optional |
| `/about/team` | standard | heroData.team | Yes | No |
| `/about/farm` | standard | heroData.farm | Yes | No |
| `/visit` | standard | heroData.visit | Yes | Yes |
| `/experiences` | standard | heroData.experiences | Yes | Yes |
| `/events` | standard | heroData.events | Yes | Yes |
| `/wine-club` | standard | heroData.wineClub | Yes | Yes |
| `/shop` | shop | heroDataShop.all | Yes | No |
| `/shop/wines` | shop | heroDataShop.wines | Yes | No |
| `/shop/spirits` | shop | heroDataShop.spirits | Yes | No |
| `/shop/cheese` | shop | heroDataShop.cheese | Yes | No |
| `/company/contact` | minimal | heroData.contact | No | No |
| `/company/faq` | minimal | heroData.faq | No | No |
| `/dev-tools/*` | devtools | heroDataDevTools.* | No | No |

### Step 8: Design Consistency Check

For each hero pattern:

1. **Mobile height:** `min-h-[calc(100dvh-90px)]` ✅
2. **Scroll arrow:** Present and positioned correctly ✅
3. **Content padding:** `pb-32` to clear arrow ✅
4. **Typography:** 
   - Title: `var(--twb-font-primary)` with `clamp()`
   - Subtitle: `var(--twb-font-secondary)`
5. **Colors:** Uses `var(--twb-color-*)` theme variables
6. **Icons:** All Phosphor (not Lucide)
7. **Buttons:** Uses Button component (not hardcoded)
8. **Image:** 
   - From Unsplash (optimized)
   - Has `alt` text (accessibility)
   - Has fallback background color
   - Loads with proper size parameter (`w=1920`)
9. **Accessibility:**
   - H1 heading present
   - Color contrast WCAG AA (text over image)
   - Keyboard navigable CTA buttons
   - Screen reader friendly

### Step 9: Centralized Data Validation

Check data files for:

1. **Completeness:** All pages have hero data defined
2. **Consistency:** Same structure across all hero objects
3. **Image URLs:** All Unsplash URLs valid and optimized
4. **CTA links:** All internal links use correct routes
5. **Text content:** Family farm voice, not corporate

### Step 10: Report

Save to `/reports/layout/hero-audit-YYYY-MM-DD.md`:

```markdown
# Hero Template Part Audit - Handcrafted Wines

**Date:** YYYY-MM-DD  
**Status:** [Complete/Issues Found]

## Template Part Status
- **Hero.tsx exists:** [Yes/No]
- **Pattern selection logic:** [Working/Needs Fix]
- **Pattern count:** 5 (Homepage, Standard, Shop, Minimal, DevTools)

## Hero Patterns Inventory
| Pattern | Exists | Data-Driven | Mobile Height | Scroll Arrow | Phosphor Icons | CSS Variables | Accessible |
|---------|--------|-------------|---------------|--------------|----------------|---------------|------------|
| HeroHomepage | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ |
| HeroStandard | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ |
| HeroShop | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ |
| HeroMinimal | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ |
| HeroDevTools | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ |

## Hero Standards Compliance
| Standard | Compliance Rate |
|----------|----------------|
| Mobile height (90px header offset) | [N]% |
| Scroll down arrow present | [N]% |
| Content padding (pb-32) | [N]% |
| Data-driven (no hardcoded content) | [N]% |
| Phosphor icons only | [N]% |
| CSS variables only | [N]% |
| WCAG AA contrast | [N]% |

## Page Usage Violations
[List pages not using Hero component or using it incorrectly]

## Route-to-Variant Mismatches
[List routes using wrong hero variant]

## Data File Issues
[List missing hero data, inconsistent structure, broken image URLs]

## Design Inconsistencies
[List visual/behavioral differences between patterns]

## Fixes Applied
[List all modifications made during audit]

## Remaining Issues
[List issues requiring manual intervention]

## Recommendations
1. Create missing hero patterns
2. Centralize all hero content in data files
3. Ensure scroll arrow on all heroes
4. Fix mobile height calculations
5. Update icons (Lucide → Phosphor)
```

---

## Success Criteria

- [ ] Hero template part (`Hero.tsx`) exists with pattern selection logic
- [ ] All 5 hero patterns exist as separate files
- [ ] All heroes data-driven (content from `/data/hero*.ts` files)
- [ ] All pages use Hero component (not hardcoded HTML)
- [ ] Route-to-variant mapping correct
- [ ] ALL heroes meet mobile height standard (`min-h-[calc(100dvh-90px)]`)
- [ ] ALL heroes have scroll down arrow positioned correctly
- [ ] ALL heroes have proper content padding (`pb-32`)
- [ ] All heroes use Phosphor icons (zero Lucide)
- [ ] All heroes use CSS variables (zero hardcoded)
- [ ] All hero images have alt text and proper sizing
- [ ] All heroes meet WCAG AA contrast standards
- [ ] Report saved to `/reports/layout/`

---

**Maintained by:** Handcrafted Wines Development Team  
**Last Updated:** 2026-03-18  
**Related Prompts:** `audit header`, `audit footer`, `audit layout`  
**Related Guidelines:** `/guidelines/patterns/hero-standards.md` ⚠️ **MANDATORY**
