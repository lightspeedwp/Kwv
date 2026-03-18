# Audit Images — Broken Image & Asset Compliance

**Type:** Audit  
**Created:** 2026-03-18  
**Version:** 1.0.0  
**Status:** Active  
**Trigger Word:** `audit images`  
**Project:** Handcrafted Wines

---

## Prompt Purpose

**Objective:** Audit all images across the Handcrafted Wines codebase for broken URLs, missing alt text, accessibility violations, performance issues, and asset compliance. Fix broken images by replacing them with valid Unsplash URLs via the `unsplash_tool`.

**When to Use:** After adding new pages, updating product data, changing content, or when visual gaps/broken images are reported.

**Reference Guidelines:**
- `/guidelines/accessibility/wcag-compliance.md` ⚠️ **MANDATORY**
- `/guidelines/design-tokens/iconography.md`

---

## Workflow Steps

### Step 1: Inventory All Image Sources

Scan the entire codebase for image references:

1. **`<img>` tags** — Search all `.tsx` files for `<img` elements
2. **`<ImageWithFallback>` components** — Search for `ImageWithFallback` usage (Figma integration component)
3. **CSS `backgroundImage` inline styles** — Search for `backgroundImage.*url(`
4. **CSS `background-image` in stylesheets** — Search `.css` for `url(http`, `url(./`
5. **`figma:asset` imports** — Search for `import.*figma:asset` (Figma-imported assets)
6. **SVG imports from `/imports/`** — Search for `import.*imports/svg`
7. **Data file image URLs** — Search all `/data/*.ts` files for `image`, `imageUrl`, `featuredImage`, `avatar`, `photo`, `thumbnail`

**Handcrafted Wines Specific:**
- Product images in `/data/products.ts` (17 products)
- Team member avatars in `/data/farmStory.ts` (4 family members)
- Experience images in `/data/farmStory.ts` (5 experiences)
- Hero images (various pages)
- News post featured images (if any in `/data/newsPosts.ts`)

### Step 2: Validate Image URLs

For each image URL found:

1. **Unsplash URLs** — Verify the photo ID portion of the URL is a valid format (11-character alphanumeric, not dynamically constructed)
2. **External URLs** — Flag any non-Unsplash external URLs (third-party CDNs) as fragile dependencies
3. **Dynamic URL construction** — Flag any template literal URLs that use arithmetic to generate photo IDs (e.g., `photo-${baseId + index}`) — these produce invalid Unsplash URLs
4. **Duplicate URLs** — Identify images reused across multiple files (not a violation, but worth noting for potential data file consolidation)
5. **Missing images** — Identify placeholder images, TODO comments, or empty image fields

**Valid Unsplash URL Format:**
```
https://images.unsplash.com/photo-{PHOTO_ID}?w={WIDTH}&q={QUALITY}&auto=format&fit=crop
```

**Invalid Dynamic Construction:**
```typescript
// ❌ BAD — produces invalid photo IDs
`https://images.unsplash.com/photo-${1494790108377 + i}?w=400`

// ✅ GOOD — use array of real Unsplash URLs
const productImages = [
  'https://images.unsplash.com/photo-...',
  'https://images.unsplash.com/photo-...'
]
```

### Step 3: Accessibility Compliance

Check every `<img>` and `<ImageWithFallback>` for:

1. **`alt` attribute** — Must be present and descriptive for informative images
   - Product images: Product name (e.g., `alt="2018 Shiraz"`)
   - Team images: Person name and role (e.g., `alt="Pieter - Winemaker"`)
   - Decorative images: Empty alt (`alt=""`) for Hero backgrounds
2. **Decorative images** — Must use `alt=""` for screen readers to skip
3. **`loading=\"lazy\"`** — All below-fold images should have `loading="lazy"`
4. **Role attribute** — Decorative background images in `<div>` elements should have `aria-hidden="true"` if they don't convey meaning

**Handcrafted Wines Alt Text Patterns:**
- Products: `alt="{product.name}"` (e.g., "2018 Shiraz", "Estate Grappa")
- Team: `alt="{person.name} - {person.role}"` (e.g., "Pieter - Winemaker")
- Experiences: `alt="{experience.title}"` (e.g., "Wine Tasting Experience")
- Decorative: `alt=""` (Hero backgrounds, decorative images)

### Step 4: Performance Check

1. **Image sizing** — Check for missing `width`/`height` attributes (causes CLS - Cumulative Layout Shift)
2. **Unsplash parameters** — Verify URLs include `w=` sizing parameters to avoid loading full-resolution images
   - Product cards: `w=600` or `w=800`
   - Product detail: `w=1200`
   - Thumbnails (cart): `w=400`
   - Hero images: `w=1920`
3. **Format optimization** — Check for `auto=format` parameter in Unsplash URLs (auto WebP/AVIF)
4. **Quality parameter** — Check for `q=` parameter (quality 75-85 recommended)

**Optimal Unsplash URL:**
```
https://images.unsplash.com/photo-{ID}?w=800&q=80&auto=format&fit=crop
```

### Step 5: Fix Broken Images

For each broken image found:

1. Use the `unsplash_tool` to find a replacement image matching the context
   - Products: Search for wine bottle, cheese, spirits matching product type
   - Team: Search for professional portraits matching role
   - Experiences: Search for vineyard, winery, farm, tasting room
   - Farm: Search for Paarl Mountain, vineyard landscape, wine cellar
2. Replace the broken URL with the new valid Unsplash URL
3. Ensure the replacement includes proper `w=`, `q=`, `auto=format`, and `fit=crop` parameters
4. Verify `alt` text is contextually accurate for the new image

**Example Unsplash Searches:**
- Wine bottles: `"wine bottle red vineyard"`
- Cheese: `"artisan cheese rustic"`
- Spirits: `"brandy bottle amber"`
- Team portraits: `"professional winemaker portrait"`
- Vineyard: `"paarl vineyard south africa"`
- Farm: `"wine farm estate mountain"`

### Step 6: Component-Specific Checks

**ImageWithFallback Component:**
- Verify `alt` prop is passed through correctly
- Check error fallback image has descriptive alt
- Ensure component handles loading states gracefully

**Decorative Components:**
- HandDrawnUnderline: SVG, should have `aria-hidden="true"`
- BrushStrokeBorder: SVG, should have `aria-hidden="true"`
- WaxSealStamp: May contain decorative images
- PaperTexture: CSS background, no alt needed

**Hero Component:**
- Background images should use `alt=""`
- Verify `loading="eager"` for above-fold heroes
- Check image source prop is populated

### Step 7: Report

Save report to `/reports/images/image-audit-YYYY-MM-DD.md` with:

```markdown
# Image Audit - Handcrafted Wines

**Date:** YYYY-MM-DD  
**Scope:** All images across codebase  
**Status:** [Complete/In Progress]

## Executive Summary
- **Total images audited:** [count]
- **Broken/invalid URLs:** [count]
- **Missing alt text:** [count]
- **Missing lazy loading:** [count]
- **Performance issues:** [count]
- **Health score:** [0-100]

## Images by Source Type
| Source | Count | Status |
|--------|-------|--------|
| Product images (/data/products.ts) | 17 | ✅/❌ |
| Team avatars (/data/farmStory.ts) | 4 | ✅/❌ |
| Experience images (/data/farmStory.ts) | 5 | ✅/❌ |
| Hero images (components/sections/Hero) | X | ✅/❌ |
| Inline images (pages/*.tsx) | X | ✅/❌ |
| CSS background images | X | ✅/❌ |

## Broken/Invalid URLs
[List with file, line, current URL, recommended replacement]

## Missing Alt Text
[List with file, line, image context]

## Missing Lazy Loading
[List with file, line]

## External Dependency Risks
[List any non-Unsplash URLs]

## Dynamically Constructed URLs
[List any arithmetic-based photo ID generation]

## Fixes Applied
[List all image replacements, alt text additions, etc.]

## Remaining Issues
[List with priority]

## Recommendations
[Next steps, performance optimizations, data file consolidation]
```

---

## Success Criteria

- [ ] All image URLs are valid and load correctly
- [ ] Zero dynamically constructed Unsplash photo IDs
- [ ] All `<img>` tags have `alt` attributes (descriptive or empty)
- [ ] All product images use product name as alt text
- [ ] All decorative images use `alt=""`
- [ ] All below-fold images have `loading="lazy"`
- [ ] All Unsplash URLs include `w=`, `q=`, `auto=format`, `fit=crop` parameters
- [ ] Zero external third-party image dependencies (or documented as acceptable)
- [ ] ImageWithFallback component properly passes through alt attributes
- [ ] Report saved to `/reports/images/`

---

## Image Source Categories (Handcrafted Wines)

| Category | Location | Priority | Expected Count |
|----------|----------|----------|----------------|
| Product images | `/data/products.ts` | P1 — user-facing | 17 |
| Team avatars | `/data/farmStory.ts` | P1 — about page | 4 |
| Experience images | `/data/farmStory.ts` | P1 — visit page | 5 |
| Hero backgrounds | Components using Hero | P1 — first impression | 10+ |
| News featured images | `/data/newsPosts.ts` (if exists) | P2 — content | Variable |
| Farm/location images | Various pages | P2 — storytelling | Variable |
| Decorative SVGs | `/components/decorative/*.tsx` | P3 — no alt needed | N/A |

---

## Files to Audit (Priority Order)

**High Priority:**
1. `/data/products.ts` (17 product images)
2. `/data/farmStory.ts` (team avatars, experience images)
3. `/pages/shop/ProductDetail.tsx` (product display)
4. `/pages/shop/WinesCategory.tsx` (product cards)
5. `/pages/shop/SpiritsCategory.tsx` (product cards)
6. `/pages/shop/CheeseCategory.tsx` (product cards)
7. `/pages/shop/GiftsCategory.tsx` (product cards)
8. `/components/sections/Hero.tsx` (hero backgrounds)

**Medium Priority:**
9. `/pages/company/About.tsx` (team images)
10. `/pages/company/AboutTeam.tsx` (team detail)
11. `/pages/experiences/Experiences.tsx` (experience images)
12. `/pages/shop/Cart.tsx` (product thumbnails)
13. `/pages/shop/Checkout.tsx` (product thumbnails)
14. `/components/shop/cart/MiniCart.tsx` (product thumbnails)

**Low Priority:**
15. News/blog pages (if implemented)
16. Decorative components (already have aria-hidden)

---

## Handcrafted Wines Image Naming Convention

**Products:**
```
2018 Shiraz.jpg → unsplash wine bottle red
Estate Grappa.jpg → unsplash grappa bottle
Fresh Chèvre.jpg → unsplash artisan cheese goat
```

**Team:**
```
Pieter.jpg → unsplash winemaker portrait male
Annelie.jpg → unsplash cheesemaker portrait female
Hennie.jpg → unsplash distiller portrait male
Liezl.jpg → unsplash vineyard manager portrait female
```

**Experiences:**
```
Wine Tasting.jpg → unsplash wine tasting cellar
Cheese Pairing.jpg → unsplash cheese wine pairing
Farm Tour.jpg → unsplash vineyard tour south africa
Harvest Experience.jpg → unsplash grape harvest vineyard
Private Tasting.jpg → unsplash wine barrel cellar
```

---

**Maintained by:** Handcrafted Wines Development Team  
**Last Updated:** 2026-03-18  
**Related Prompts:** `audit a11y`, `audit accessibility`, `audit data`  
**Related Tools:** `unsplash_tool`
