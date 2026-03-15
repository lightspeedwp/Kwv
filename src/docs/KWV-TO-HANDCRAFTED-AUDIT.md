# KWV to Handcrafted Wines Content Audit

## Status: IN PROGRESS

**Created**: 2026-03-15  
**Last Updated**: 2026-03-15

---

## Summary

Comprehensive audit to remove all KWV references and replace with Handcrafted Wines brand content. All text content moved to data files for centralized management.

---

## ✅ Completed

### Data Files Created
1. **`/data/site-content.ts`** - Centralized site configuration (brand, contact, social, hours, venues)
2. **`/data/shop-faq.ts`** - Shop FAQ data (replaces hardcoded FAQs)
3. **`/data/jobs.ts`** - Already created for Careers page

### Pages Updated
1. **`/pages/shop/ShopFAQ.tsx`** - Now uses `/data/shop-faq.ts`
2. **`/pages/company/Careers.tsx`** - Already uses `/data/jobs.ts`

---

## 🔄 Pending Updates

### High Priority (User-Facing Content)

#### 1. Shop Components
- [ ] `/components/shop/home/ShopNewsletter.tsx`
  - Line 31: "Join the KWV Family" → Use `SITE_CONTENT.newsletter.title`
  - Line 34: "...all things KWV" → Use `SITE_CONTENT.newsletter.subtitle`
  
- [ ] `/components/shop/home/ShopSocialSection.tsx`
  - Line 22: "...with KWV Online" → Use `SITE_CONTENT.social.hashtags`
  - Line 25: "#KWVONLINE..." → Use `SITE_CONTENT.social.hashtagsShop`

- [ ] `/components/shop/home/ShopBrandGrid.tsx`
  - Line 10: 'KWV Classic Collection' → 'Estate Reserve Collection'
  - Line 15: 'KWV House of Brandy' → 'House of Fire Craft Spirits'
  - **Note**: These are product lines, needs brand strategy decision

- [ ] `/components/shop/checkout/ContactInfo.tsx`
  - Line 64: "Create an account with KWV" → Use `SITE_CONTENT.shop.createAccountLabel`

- [ ] `/components/shop/layout/ShopInfoFooter.tsx`
  - Line 4: Import `KWVShopLogo` → Import `Logo`
  - Line 70: "KWV Map" → "Handcrafted Wines Map"

- [ ] `/components/shop/layout/ShopSidebar.tsx`
  - Line 78: 'KWV Brandy' → 'House of Fire Spirits'

#### 2. Experiences Pages
- [ ] `/pages/experiences/Emporium.tsx` **FULL REWRITE NEEDED**
  - Page title: "KWV EMPORIUM" → "HANDCRAFTED WINES ESTATE"
  - All tasting descriptions reference KWV products
  - Create `/data/tastings.ts` with Handcrafted Wines menu

- [ ] `/pages/experiences/CathedralCellar.tsx`
  - Line 48: "KWV Emporium (Meeting Point)" → "Estate Tasting Room (Meeting Point)"

- [ ] `/pages/experiences/HouseOfFire.tsx`
  - Line 18: "KWV 10yr..." → Use Handcrafted Wines brandy names
  - Line 48: "KWV Production Complex" → "Handcrafted Wines Distillery"

- [ ] `/pages/experiences/ConferenceFacilities.tsx`
  - Line 7: Comment mentions "KWV's conference venues"
  - Line 13: "KWV CONFERENCES" → "HANDCRAFTED WINES VENUES"
  - Line 18: `events@kwv.co.za` → Use `SITE_CONTENT.contact.eventsEmail`
  - Line 26: `events@kwv.co.za` → Use `SITE_CONTENT.contact.eventsEmail`

- [ ] `/pages/experiences/CathedralCellarKitchen.tsx`
  - Line 37: `functions@kwv.co.za` → Use `SITE_CONTENT.contact.functionsEmail`
  - Line 46: `functions@kwv.co.za` → Use `SITE_CONTENT.contact.functionsEmail`
  - Line 47: "KWV Emporium" → Use `SITE_CONTENT.venues.main`

- [ ] `/pages/experiences/ExperiencesFAQ.tsx`
  - Line 17: "The KWV Emporium..." → Create `/data/experiences-faq.ts`
  - Line 21: "...at the KWV Emporium..."
  - Line 25: "...The KWV Emporium..."
  - Line 44: Comment "...specific to visiting KWV..."
  - Line 56: "...visiting the KWV Emporium..."

#### 3. Company Pages
- [ ] `/pages/company/History.tsx` **MAJOR REWRITE**
  - 100+ references to KWV history (1918-2020)
  - Create `/data/company-history.ts` with Handcrafted Wines family timeline
  - Line 29-312: All milestone descriptions
  - Line 371: Hero subtitle mentions KWV founding

- [ ] `/pages/company/ExecutiveTeam.tsx`
  - Line 70: Comment "Displays the KWV executive leadership..."
  - Line 82: `alt="KWV Building"` → `alt="Handcrafted Wines Estate"`
  - Line 94: "KWV leads with..." → "Handcrafted Wines is led by..."

#### 4. Shop Product Pages
- [ ] `/pages/shop/ProductSearchResults.tsx`
  - Line 34-35: "KWV 10 Year Old Brandy" → Use actual product data
  - Mock data should use Handcrafted Wines products

- [ ] `/pages/shop/ShopPromotions.tsx`
  - Line 43-44: "KWV 10 Year Old Brandy" → Use `/data/products.ts`

- [ ] `/pages/shop/MyAccount.tsx`
  - Line 438: `defaultValue="admin@kwv.co.za"` → Use `SITE_CONTENT.contact.email`

#### 5. Layout Components
- [ ] `/components/layout/BreadcrumbsBar.tsx`
  - Line 46: 'emporium': 'KWV Emporium' → 'Estate Tasting Room'

- [ ] `/components/layout/CheckoutHeader.tsx`
  - Line 3: Import `KWVShopLogo` → Import `Logo`
  - Line 31: `<KWVShopLogo />` → `<Logo />`

- [ ] `/components/experiences/ExperiencePageLayout.tsx`
  - Line 243: `#KWVONLINE #KWVEXPERIENCES` → Use `SITE_CONTENT.social.hashtagsExperiences`

### Low Priority (Deprecated/Internal)

#### 6. Logo Component
- [ ] `/components/common/Logo.tsx`
  - Lines 173, 175, 177, 179, 181: Deprecated KWV* aliases (keep for backwards compatibility)

#### 7. Utility Components
- [ ] `/components/shop/checkout/PickupLocationSelect.tsx`
  - Line 7: Comment "...KWV Emporium..." → Update comment

---

## Data Files Needed

### 1. `/data/tastings.ts` (URGENT)
```typescript
export const TASTINGS = {
  essential: {
    name: 'ESSENTIAL WINE TASTING',
    price: 'R70',
    description: 'Estate Collection',
    wines: ['Sauvignon Blanc', 'Chardonnay', 'Pinotage', 'Shiraz', 'Cabernet Sauvignon']
  },
  exclusive: {
    name: 'EXCLUSIVE RESERVE TASTING',
    price: 'R90',
    description: 'Winemaker's Selection',
    wines: ['Reserve Chenin Blanc', 'Grenache Blanc', 'Petit Verdot', 'Canvas Red Blend', 'Orchestra Reserve']
  },
  spirits: {
    name: 'CRAFT SPIRITS TASTING',
    price: 'R110',
    description: 'House of Fire Collection',
    spirits: ['10 Year Grappa', '12 Year Brandy', '15 Year Brandy', '20 Year Brandy']
  },
  pairings: [
    {
      name: 'WINE & ARTISAN CHEESE',
      price: 'R200',
      description: 'Three estate wines paired with our farmstead goat cheese'
    },
    {
      name: 'BRANDY & BELGIAN CHOCOLATES',
      price: 'R200',
      description: 'Four aged brandies with premium chocolate pairings'
    }
  ]
};
```

### 2. `/data/experiences-faq.ts` (URGENT)
Move FAQ content from `/pages/experiences/ExperiencesFAQ.tsx`

### 3. `/data/company-history.ts` (MEDIUM PRIORITY)
Rewrite KWV corporate history to Handcrafted Wines family farm story:
- 1918: Fourth generation takes over family farm
- Focus on family milestones, not corporate acquisitions
- Emphasis on handcrafted tradition, not industry regulation
- Small-batch philosophy, not mass production

### 4. `/data/brands.ts` (MEDIUM PRIORITY)
Define product lines for ShopBrandGrid:
```typescript
export const BRANDS = [
  { name: 'Estate Collection', description: 'Our everyday wines', link: '/shop/estate-collection' },
  { name: 'Reserve Selection', description: 'Limited production', link: '/shop/reserve' },
  { name: 'House of Fire', description: 'Craft spirits', link: '/shop/spirits' },
  { name: 'Farmstead Cheese', description: 'Artisan goat cheese', link: '/shop/cheese' }
];
```

---

## Email Addresses to Replace

| Old | New |
|-----|-----|
| `sales@kwv.co.za` | `sales@handcraftedwines.co.za` |
| `events@kwv.co.za` | `events@handcraftedwines.co.za` |
| `functions@kwv.co.za` | `functions@handcraftedwines.co.za` |
| `admin@kwv.co.za` | `hello@handcraftedwines.co.za` |

---

## Strategy Notes

### Brand Identity Shift
**FROM**: Corporate wine cooperative (KWV)  
**TO**: Family-owned boutique farm (Handcrafted Wines)

### Voice & Tone Changes
- **KWV**: Institutional, heritage-focused, industry leader
- **Handcrafted Wines**: Personal, warm, family-oriented, artisanal

### Content Principles
1. **Remove all corporate jargon** - No "stakeholders," "acquisition," "industry regulation"
2. **Emphasize family story** - "Our great-grandfather planted these vines in 1918..."
3. **Focus on craft** - Small batches, hands-on, personal attention
4. **Celebrate place** - Paarl Mountain terroir, family farm heritage
5. **Be conversational** - "Come visit us" not "Visit our facility"

---

## Testing Checklist

After all updates:
- [ ] Search codebase for "KWV" (case-insensitive) - should return 0 user-facing results
- [ ] Search for "@kwv.co.za" - should return 0 results
- [ ] Test all email links point to handcraftedwines.co.za
- [ ] Verify all social hashtags use Handcrafted Wines
- [ ] Check all page titles/headings for KWV references
- [ ] Validate all product names align with Handcrafted Wines catalog
- [ ] Ensure all venue names use family farm terminology

---

## Next Steps

1. Create `/data/tastings.ts` (Emporium page needs this ASAP)
2. Create `/data/experiences-faq.ts`
3. Update all shop components to use `SITE_CONTENT`
4. Update all experiences pages
5. Complete History page rewrite (biggest task)
6. Final audit and testing

---

**Progress**: 5% complete (2 of 40+ files updated)  
**Estimated Time**: 2-3 hours for complete audit and refactor
