# 🏡 Site Restructure: Family Wine Farm Transformation

**Date:** 2026-03-14  
**Status:** PROPOSAL  
**Priority:** CRITICAL

---

## Executive Summary

Transform the site from a corporate KWV multi-brand platform to a **boutique family wine farm** experience with unified navigation, family-oriented voice, and integrated shop/experiences.

---

## 1. Brand Story (NEW)

### The Wire Brand - Family Wine Farm

**Location:** Heart of Paarl, against Paarl Mountain, South Africa  
**History:** 50+ years of award-winning winemaking  
**Family-Run:** Multi-generational passion for craftsmanship

**What We Make:**
- 🍷 **Boutique Wines** - Small-batch, handcrafted wines
- 🥃 **Craft Spirits** - Low-quantity grappa & brandy from our distillery
- 🧀 **Artisan Cheese** - Made from milk from our own goats

**What We Offer:**
- Wine tastings
- Cheese tastings
- Wine & cheese pairing experiences
- Farm tours (vineyard, cellars, distillery, goat dairy)
- Weddings & special events
- Corporate team-building experiences

---

## 2. Voice & Tone Transformation

### FROM (Corporate):
- "KWV enjoys a worldwide reputation for brands that consistently deliver exceptional enjoyment"
- "Our wine brands include trusted favourites such as the KWV Classic Collection"
- Multiple brand portfolio language

### TO (Family-Oriented):
- "Welcome to our family farm, where we've been crafting wines for over 50 years"
- "Come meet our goats, taste our wines, and experience the magic of Paarl Mountain"
- "Every bottle tells the story of our terroir, our passion, and our family"
- "From our vineyard to your table - handcrafted with love"

**Key Characteristics:**
- ✅ Warm & welcoming (vs. corporate & formal)
- ✅ Storytelling focused on family & place
- ✅ Approachable & unpretentious
- ✅ Educational but friendly
- ✅ Invitation to "come visit us"

---

## 3. Unified Navigation Structure

### 🎯 ONE Header for Entire Site

**Primary Navigation:**
```
┌─────────────────────────────────────────────────────────┐
│  [LOGO]  About  |  Shop  |  Visit  |  Events  |  [Cart] │
└─────────────────────────────────────────────────────────┘
```

#### About
- Our Story
- Our Farm (vineyard, distillery, dairy)
- Awards & Accolades
- Meet the Family
- Sustainability
- News & Blog

#### Shop
- **Wines**
  - Red Wine
  - White Wine  
  - Rosé
  - Sparkling & MCC
  - Fortified
- **Craft Spirits**
  - Grappa
  - Brandy
  - Limited Editions
- **Cheese**
  - Fresh Goat Cheese
  - Aged Varieties
  - Gift Boxes
- **Gift Boxes & Bundles**
- **Wine Club Subscription**

#### Visit
- **Experiences**
  - Wine Tastings
  - Cheese Tastings
  - Wine & Cheese Pairing
  - Farm Tour (Complete Experience)
  - Vineyard Walk
  - Cellar Tour
  - Distillery Tour
  - Goat Dairy Visit
- **Dining** (if applicable - restaurant/picnics)
- Book Your Visit
- Visitor Information (Hours, Location, Parking)

#### Events
- Weddings
- Corporate Events & Team Building
- Private Functions
- Event Packages
- Gallery
- Contact Us to Book

---

## 4. Remove/Replace ALL Corporate References

### KWV References (52 instances):
- ❌ KWV Logo → ✅ The Wire Brand Logo
- ❌ KWV Wine Club → ✅ The Wire Box (subscription)
- ❌ KWV Emporium → ✅ The Tasting Room / Farm Shop
- ❌ info@kwvemporium.co.za → ✅ hello@thewirebrand.co.za
- ❌ "Join the KWV Family" → ✅ "Join The Wire Family"

### Corporate Wine Brands (Remove):
- ❌ Cathedral Cellar
- ❌ Laborie
- ❌ Roodeberg
- ❌ The Mentors
- ❌ Classic Collection
- ❌ Annabelle
- ❌ Pearly Bay
- ❌ Cruxland Gin
- ❌ Wild Africa Cream
- ❌ Bacardi

### Replace With:
- ✅ **Our Wines** (Estate Range)
  - The Wire Red Blend
  - Paarl Mountain Cabernet Sauvignon
  - Family Reserve Shiraz
  - Vineyard White
  - Sparkling Rosé
- ✅ **Craft Spirits**
  - Estate Grappa
  - Reserve Brandy
  - Aged Brandy (Limited Edition)
- ✅ **Artisan Cheese**
  - Fresh Chèvre
  - Aged Goat Cheese
  - Wine-Washed Rind

---

## 5. Page Structure (Unified)

### Homepage
- Hero: "Welcome to The Wire Brand - Family Wine Farm"
- What We Make (Wines, Spirits, Cheese)
- Visit Us (Experiences preview)
- Our Story (50 years)
- Shop Featured Products
- Upcoming Events
- Latest News
- Newsletter Signup

### Shop (Integrated)
- Product categories (wines, spirits, cheese, gifts)
- All products from The Wire Brand only
- Simple, family-friendly product names
- Cart & Checkout (streamlined)
- My Account

### Visit (Experiences)
- Experience listings (tastings, tours, pairings)
- Booking system
- Visitor information
- Photo gallery
- Testimonials

### Events
- Event types (weddings, corporate, private)
- Event spaces showcase
- Package information
- Contact/booking form
- Gallery

---

## 6. Footer (Unified)

```
┌────────────────────────────────────────────────────────┐
│  ABOUT          SHOP          VISIT          EVENTS    │
│  Our Story      Wines         Tastings       Weddings  │
│  The Farm       Spirits       Tours          Corporate │
│  Awards         Cheese        Book Now       Private   │
│  Sustainability  Wine Club                            │
│                                                        │
│  CONTACT        FOLLOW US                             │
│  📍 Paarl Mountain, Paarl                             │
│  📞 +27 21 XXX XXXX                                   │
│  ✉️ hello@thewirebrand.co.za                         │
│  🌐 Facebook | Instagram | Twitter                    │
│                                                        │
│  © 2026 The Wire Brand. All rights reserved.         │
│  Privacy Policy | Terms | Returns                     │
└────────────────────────────────────────────────────────┘
```

---

## 7. Implementation Plan

### Phase 1: Brand Identity Update (CRITICAL)
1. ✅ Update Guidelines.md with new brand story
2. ✅ Remove all KWV references from components
3. ✅ Update Logo components
4. ✅ Update contact information
5. ✅ Update social media links

### Phase 2: Navigation Consolidation
1. ✅ Create unified `Header.tsx` component
2. ✅ Delete separate headers (Corporate, Shop, Experiences, Events, Wine Club)
3. ✅ Create new mega-menu structure
4. ✅ Update mobile menu
5. ✅ Create unified `Footer.tsx`

### Phase 3: Content Refactoring
1. ✅ Replace corporate brand names
2. ✅ Update product catalogs
3. ✅ Rewrite voice & tone throughout
4. ✅ Update experience descriptions
5. ✅ Create new homepage content

### Phase 4: Page Restructuring
1. ✅ Merge separate site sections
2. ✅ Update routing structure
3. ✅ Consolidate layouts
4. ✅ Update breadcrumbs

---

## 8. New Sitemap

```
/                           Homepage
/about                      About Us
  /our-story                Our Story (50 years)
  /the-farm                 The Farm (vineyard, distillery, dairy)
  /awards                   Awards & Accolades
  /team                     Meet the Family
  /sustainability           Sustainability
  /news                     News & Blog

/shop                       Shop Home
  /wines                    All Wines
    /red                    Red Wines
    /white                  White Wines
    /rose                   Rosé
    /sparkling              Sparkling & MCC
  /spirits                  Craft Spirits
    /grappa                 Grappa
    /brandy                 Brandy
  /cheese                   Artisan Cheese
  /gifts                    Gift Boxes & Bundles
  /wine-club                The Wire Box Subscription
  /product/[slug]           Single Product
  /cart                     Shopping Cart
  /checkout                 Checkout
  /account                  My Account

/visit                      Visit Us
  /experiences              All Experiences
    /wine-tasting           Wine Tasting
    /cheese-tasting         Cheese Tasting
    /pairing                Wine & Cheese Pairing
    /farm-tour              Complete Farm Tour
    /vineyard-walk          Vineyard Walk
    /cellar-tour            Cellar Tour
    /distillery-tour        Distillery Tour
    /dairy-visit            Goat Dairy Visit
  /book                     Book Your Visit
  /visitor-info             Visitor Information

/events                     Events Home
  /weddings                 Weddings
  /corporate                Corporate Events & Team Building
  /private                  Private Functions
  /packages                 Event Packages
  /gallery                  Event Gallery
  /contact                  Contact Us to Book

/contact                    Contact Us
/faq                        FAQ
/privacy                    Privacy Policy
/terms                      Terms & Conditions
/returns                    Returns Policy
```

---

## 9. Next Steps

**DECISION REQUIRED:** 
1. Approve new brand name: **"The Wire Brand"** or suggest alternative?
2. Approve new tagline suggestions:
   - "Handcrafted wines, spirits & cheese from our Paarl Mountain farm"
   - "Where family tradition meets artisan craft"
   - "50 years of passion, handcrafted with love"
3. Approve navigation structure
4. Approve new product naming convention

**Once approved, I will:**
1. Update Guidelines.md with complete new brand story
2. Create unified Header component
3. Remove all KWV references systematically
4. Update all voice & tone throughout site
5. Create new content placeholders

---

**Ready to proceed?** Let me know if you'd like me to:
- A) Start implementation immediately with suggested structure
- B) Modify the proposal based on your feedback
- C) Provide mockups of the new navigation first
