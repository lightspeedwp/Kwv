# 🔍 KWV & Corporate References Audit Report

**Date:** 2026-03-14  
**Purpose:** Identify all KWV, corporate, and multi-brand references for removal/replacement  
**Total Instances Found:** 150+

---

## Summary Statistics

| Category | Count | Priority |
|----------|-------|----------|
| KWV References | 52 | 🔴 CRITICAL |
| Corporate Brand Names | 38 | 🔴 CRITICAL |
| Email Addresses | 4 | 🔴 CRITICAL |
| Social Media Links | 6 | 🟡 HIGH |
| Logo Components | 10 | 🔴 CRITICAL |
| Corporate Voice/Tone | 40+ | 🟡 HIGH |
| Map Embeddings | 2 | 🟡 HIGH |

---

## 1. Logo Components (10 instances)

### Files to Update:
**`/components/common/Logo.tsx`**
- Line 95: `export const KWVLogo = HandcraftedWinesLogo;`
- Line 132: `export const KWVShopLogo = HandcraftedWinesShopLogo;`
- Line 169: `export const KWVExperiencesLogo = HandcraftedWinesExperiencesLogo;`
- Line 206: `export const KWVEventsLogo = HandcraftedWinesEventsLogo;`
- Line 243: `export const KWVWineClubLogo = HandcraftedWinesWineClubLogo;`

**Action:** 
- Remove all KWV logo aliases
- Update to single unified logo: `TheWireBrandLogo`

---

## 2. Header Components (5 files - DELETE & CONSOLIDATE)

### Current Structure (REMOVE):
1. `/components/layout/CorporateHeader.tsx` ❌ DELETE
2. `/components/layout/ShopHeader.tsx` ❌ DELETE
3. `/components/layout/ExperiencesHeader.tsx` ❌ DELETE
4. `/components/layout/WineClubHeader.tsx` ❌ DELETE
5. `/components/layout/CheckoutHeader.tsx` ⚠️ KEEP (modified)

### New Structure (CREATE):
1. `/components/layout/Header.tsx` ✅ CREATE (unified)
2. `/components/layout/CheckoutHeader.tsx` ✅ UPDATE (simplified)

**KWV References in Headers:**
- **CheckoutHeader.tsx** (Line 3, 27): `KWVShopLogo`
- **ExperiencesHeader.tsx** (Line 7, 26, 48, 50, 170): `KWVExperiencesLogo`, `KWVEventsLogo`
- **WineClubHeader.tsx** (Line 7, 23, 59, 119): `KWVWineClubLogo`

---

## 3. Footer Components (3 files - DELETE & CONSOLIDATE)

### Current Structure (REMOVE):
1. `/components/layout/CorporateFooter.tsx` ❌ DELETE
2. `/components/layout/ShopFooter.tsx` ❌ DELETE
3. `/components/layout/ExperiencesFooter.tsx` ❌ DELETE
4. `/components/layout/CheckoutFooter.tsx` ⚠️ KEEP (modified)

### New Structure (CREATE):
1. `/components/layout/Footer.tsx` ✅ CREATE (unified)

**KWV References in Footers:**
- **ShopFooter.tsx** (Line 29): `info@kwvemporium.co.za`
- **ShopFooter.tsx** (Line 63, 70): Google Maps embed for "KWV Emporium"
- **ShopFooter.tsx** (Line 95): `© KWV. All rights reserved.`
- **CheckoutFooter.tsx** (Line 20): `© KWV. All rights reserved.`
- **ExperiencesFooter.tsx** (Line 29): `info@kwvemporium.co.za`
- **ExperiencesFooter.tsx** (Line 67, 68): "Register for latest news at KWV"
- **ExperiencesFooter.tsx** (Line 105): `© KWV. All rights reserved.`

---

## 4. Social Media Links (6 instances)

**`/components/layout/ExperiencesFooter.tsx`**
- Line 35: `https://facebook.com/KWVwines`
- Line 36: `https://instagram.com/kwvwines`
- Line 37: `https://twitter.com/KWVwines`

**Action:** Replace with:
- `https://facebook.com/thewirebrand`
- `https://instagram.com/thewirebrand`
- `https://twitter.com/thewirebrand`

---

## 5. Corporate Brand Names (38 instances)

### Brand Names to REMOVE:

#### Premium Wine Brands:
- ❌ Cathedral Cellar (8 instances)
- ❌ Laborie (3 instances)
- ❌ The Mentors (6 instances)
- ❌ Roodeberg (6 instances)
- ❌ KWV Classic Collection (4 instances)
- ❌ Annabelle (2 instances)
- ❌ Pearly Bay (2 instances)
- ❌ KWV Fortified Wines (1 instance)

#### Spirit Brands:
- ❌ KWV Brandy (7 instances)
- ❌ Cruxland Gin (2 instances)
- ❌ Wild Africa Cream (2 instances)
- ❌ Bacardi (2 instances)
- ❌ Centenary (1 instance)
- ❌ Big Bill (1 instance)

#### RTD Brands:
- ❌ Hooch (1 instance)
- ❌ CIAO (1 instance)
- ❌ KWV Brandy and Cola (1 instance)

### Files Affected:
1. `/components/layout/ShopHeader.tsx` (22 instances)
2. `/components/layout/CorporateHeader.tsx` (6 instances)
3. `/components/layout/ExperiencesHeader.tsx` (4 instances)
4. `/components/layout/BrandsMegaMenu.tsx` (6 instances)
5. `/components/sections/BrandGrid.tsx` (3 instances)

---

## 6. Replace With: Estate Products

### New Wine Range:
✅ **Estate Red Wines:**
- The Wire Red Blend
- Paarl Mountain Cabernet Sauvignon
- Family Reserve Shiraz
- Barrel Select Pinotage

✅ **Estate White Wines:**
- Vineyard Chenin Blanc
- Mountain White Blend
- Sauvignon Blanc
- Cellar Selection Chardonnay

✅ **Estate Rosé:**
- Summer Rosé
- Sparkling Rosé

✅ **Sparkling & MCC:**
- Méthode Cap Classique Brut
- Celebration Sparkling

✅ **Craft Spirits:**
- Estate Grappa (from pomace)
- Reserve Brandy (5 year)
- Aged Brandy (10 year - Limited Edition)
- Family Barrel Brandy (15 year - Ultra Limited)

✅ **Artisan Cheese:**
- Fresh Chèvre
- Aged Goat Cheese (3 month)
- Wine-Washed Rind
- Paarl Mountain Blue (goat blue cheese)

---

## 7. Experience Names to Update

### Current (Corporate/KWV):
- ❌ KWV Emporium
- ❌ Cathedral Cellar (tour)
- ❌ House of Fire (brandy experience)

### New (Family Farm):
- ✅ The Tasting Room / Farm Shop
- ✅ Wine Cellar Experience
- ✅ Distillery Tour (Grappa & Brandy)
- ✅ Goat Dairy Visit
- ✅ Complete Farm Tour
- ✅ Vineyard Walk
- ✅ Wine & Cheese Pairing

---

## 8. Content Voice Examples (40+ instances)

### Section Components to Rewrite:

**`/components/sections/BrandGrid.tsx`**
- Line 10-11: Corporate multi-brand description
- Line 20-21: RTD brands corporate language
- Line 51: "KWV enjoys a worldwide reputation..."

**Action:** Rewrite with family farm voice

**`/components/sections/Newsletter.tsx`**
- Line 10, 16, 27: "Join the KWV Family"

**Action:** Change to "Join The Wire Family"

**`/components/sections/WineClubCTA.tsx`**
- Line 29: "KWV Wine Club Edition 11"

**Action:** Change to "The Wire Box - Monthly Selection"

**`/components/sections/LatestNews.tsx`**
- Line 12: "KWV Wine Club Edition 11..."
- Line 18: "KWV secures top honours..."
- Line 24: "Rare and vintage KWV wines..."

**Action:** Rewrite all news items with family farm stories

---

## 9. Breadcrumbs & Navigation

**`/components/layout/BreadcrumbsBar.tsx`**
- Line 28: `'emporium': 'KWV Emporium'`

**Action:** Change to `'tasting-room': 'The Tasting Room'`

---

## 10. Contact Information

### Email Addresses (4 instances):
- ❌ info@kwvemporium.co.za

### Replace With:
- ✅ hello@thewirebrand.co.za
- ✅ reservations@thewirebrand.co.za (for bookings)
- ✅ events@thewirebrand.co.za (for events)

### Phone Numbers:
- ✅ Keep: +27 21 807 3007 (or update if needed)

### Physical Address:
- ✅ Update: "Paarl Mountain Road, Paarl, 7646, South Africa"
- ✅ GPS: Keep current coordinates (33°45'47.7"S 18°57'59.0"E)

---

## 11. Google Maps Embeds (2 instances)

**`/components/layout/ShopFooter.tsx` (Line 63)**
Current: `KWV Emporium` location

**Action:** Update embed to show "The Wire Brand" or generic Paarl Mountain location

---

## 12. Copyright Notices (4 instances)

### Files to Update:
1. `/components/layout/ShopFooter.tsx` (Line 95)
2. `/components/layout/CheckoutFooter.tsx` (Line 20)
3. `/components/layout/ExperiencesFooter.tsx` (Line 105)

**Current:** `© {year} KWV. All rights reserved.`  
**Replace:** `© {year} The Wire Brand. All rights reserved.`

---

## 13. Implementation Priority Matrix

### 🔴 CRITICAL (Do First):
1. Logo components (unify to single brand)
2. Header consolidation (create unified Header.tsx)
3. Footer consolidation (create unified Footer.tsx)
4. Email addresses (all customer-facing)
5. Copyright notices
6. Remove all corporate brand names from navigation

### 🟡 HIGH (Do Second):
1. Social media links
2. Google Maps embeds
3. Content voice/tone updates
4. Product catalog replacement
5. Experience names updates

### 🟢 MEDIUM (Do Third):
1. Breadcrumb labels
2. News/blog post content
3. Meta descriptions
4. SEO content

---

## 14. Search & Replace Patterns

### Safe Global Replacements:
```bash
# Email
"info@kwvemporium.co.za" → "hello@thewirebrand.co.za"

# Copyright
"© {year} KWV" → "© {year} The Wire Brand"

# Social (careful - verify URLs exist)
"KWVwines" → "thewirebrand"

# Newsletter
"Join the KWV Family" → "Join The Wire Family"
"KWV Wine Club" → "The Wire Box"

# Emporium
"KWV Emporium" → "The Tasting Room"
"Emporium" (standalone) → "Tasting Room" (context-dependent)
```

### Manual Replacements (Context-Dependent):
- All corporate brand names (need product-by-product review)
- Voice/tone content (needs rewriting, not find-replace)
- Experience descriptions (need personalization)

---

## 15. Files Requiring Complete Rewrite

### Components:
1. `/components/sections/BrandGrid.tsx` ⚠️ FULL REWRITE
2. `/components/sections/Newsletter.tsx` ⚠️ PARTIAL REWRITE
3. `/components/sections/WineClubCTA.tsx` ⚠️ FULL REWRITE
4. `/components/sections/LatestNews.tsx` ⚠️ CONTENT REPLACEMENT
5. `/components/layout/BrandsMegaMenu.tsx` ❌ DELETE (not needed with unified nav)

### Data Files:
1. `/data/brands.ts` ⚠️ FULL REPLACEMENT
2. `/data/shopBrands.ts` ⚠️ FULL REPLACEMENT

---

## 16. Estimated Effort

| Phase | Files | Effort | Priority |
|-------|-------|--------|----------|
| Logo Unification | 1 file | 30 min | 🔴 Critical |
| Header Consolidation | 1 new file | 2 hours | 🔴 Critical |
| Footer Consolidation | 1 new file | 1 hour | 🔴 Critical |
| Delete Old Headers/Footers | 7 files | 15 min | 🔴 Critical |
| Email/Contact Updates | 8 instances | 15 min | 🔴 Critical |
| Corporate Brand Removal | 38 instances | 1 hour | 🔴 Critical |
| Voice/Tone Rewrites | 10+ components | 3 hours | 🟡 High |
| Product Data Replacement | 2 files | 1 hour | 🟡 High |
| Experience Content | 5 pages | 2 hours | 🟡 High |
| **TOTAL** | **~30 files** | **~11 hours** | - |

---

## 17. Testing Checklist

After implementation, verify:

- [ ] No "KWV" text visible anywhere on site
- [ ] No corporate brand names in navigation/menus
- [ ] All email links work (hello@thewirebrand.co.za)
- [ ] Social media links updated (or generic/removed)
- [ ] Copyright notices updated
- [ ] Unified navigation works on desktop & mobile
- [ ] All product links work (no 404s from renamed products)
- [ ] Voice & tone feels family-friendly throughout
- [ ] Google Maps shows correct location
- [ ] Logo displays consistently across all pages

---

## 18. Next Steps

**AWAITING APPROVAL:**

1. Approve brand name: **"The Wire Brand"** ✅ or ❌
2. Approve tagline: (select one)
   - [ ] "Handcrafted wines, spirits & cheese from our Paarl Mountain farm"
   - [ ] "Where family tradition meets artisan craft"
   - [ ] "50 years of passion in every bottle"
   - [ ] Custom: ________________

3. Approve navigation structure (see `/docs/NAVIGATION-MOCKUP.md`)
4. Approve product naming convention (see section 6 above)

**Once approved, I will execute in this order:**
1. Phase 1: Brand Identity Update (Critical - 2 hours)
2. Phase 2: Navigation Consolidation (Critical - 3 hours)
3. Phase 3: Content Refactoring (High - 3 hours)
4. Phase 4: Testing & Verification (Medium - 1 hour)

**Total Time: ~11 hours of focused work**

---

**Ready to begin?** 🚀
