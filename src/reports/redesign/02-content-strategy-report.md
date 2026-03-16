# Content Strategy Analysis Report – Hand-Drawn Redesign

**Report ID:** 02  
**Category:** Redesign Analysis  
**Domain:** Content Strategy  
**Version:** 1.0.0  
**Date:** 2024-03-15  
**Author:** AI Assistant  
**Status:** Complete

---

## Executive Summary

### Overview

This report analyzes the current content architecture of the Handcrafted Wines website and defines a comprehensive strategy for migrating all copy, imagery, and structured data into centralized `/data/` files. The goal is to create a fully data-driven, maintainable content system that supports the new hand-drawn brand identity.

### Key Findings

**Strengths:**
- ✅ **Strong foundation established** - 6 core data files already created (`farmStory.ts`, `products.ts`, `jobs.ts`, etc.)
- ✅ **Good data structure** - Products, farm story, and demo content follow proper TypeScript patterns
- ✅ **Content separation** - Some components already import from centralized data files

**Critical Issues:**
- ❌ **Legacy KWV content remains** - References to "KWV" brand still exist in 15+ files
- ❌ **Hardcoded strings** - Many components embed copy directly instead of using data imports
- ❌ **Voice & tone inconsistency** - Mix of corporate and conversational language
- ❌ **Missing content files** - No data files for About, Experiences, Events, Checkout, Error pages
- ❌ **Oversized files** - Some data files approaching or exceeding 20 kB limit

### Metrics

| Metric | Current State | Target | Gap |
|--------|---------------|--------|-----|
| **Pages with data files** | 35% (7/20) | 100% | 65% |
| **Content in data files** | ~40% | 100% | 60% |
| **Legacy brand references** | 15+ | 0 | 15+ to remove |
| **Data file count** | 6 | 20+ | 14+ needed |
| **Voice & tone compliance** | ~30% | 100% | 70% |

### Recommendations

**High Priority (Do First):**
1. Remove all legacy KWV brand references (15+ files)
2. Create missing data files for all major pages (14+ files needed)
3. Extract hardcoded strings from components to data files
4. Establish voice & tone guidelines for Handcrafted Wines

**Medium Priority (Do Next):**
5. Split oversized data files (products.ts, demoContent.ts)
6. Standardize microcopy across CTAs, forms, error states
7. Add metadata fields (SEO, OpenGraph) to all page data files

**Low Priority (Polish):**
8. Create content governance processes
9. Add translation/localization placeholders
10. Implement content validation CI scripts

---

## Current State Analysis

### 1. Existing Data Files

#### 1.1 `/data/farmStory.ts` ✅ **EXCELLENT**

**Size:** ~12 kB  
**Status:** Well-structured, brand-aligned

**Contents:**
- Brand name: "Handcrafted Wines"
- Farm history (1918 - present, 4 generations)
- Family team (winemaker, cheesemaker, distiller, vineyard manager)
- Products (wines, spirits, cheese)
- Values, awards, sustainability practices
- Contact info, location, social media

**Strengths:**
- Proper TypeScript structure
- Comprehensive farm narrative
- Family-oriented voice
- Well-organized sections

**Issues:**
- None - this is the gold standard

---

#### 1.2 `/data/products.ts` ⚠️ **NEEDS SPLITTING**

**Size:** ~18 kB (approaching limit)  
**Status:** Comprehensive but should be split

**Contents:**
- 17 products (6 wines, 3 spirits, 4 cheeses, 4 gift sets)
- Product interface with full details
- Category helpers and filter functions
- Featured products list

**Strengths:**
- Complete product catalog
- Detailed product information (tasting notes, pairings, awards)
- Helper functions for filtering/sorting

**Issues:**
- File size approaching 20 kB limit
- Should be split into products-wine.ts, products-spirits.ts, products-cheese.ts
- Some placeholder tasting notes need refinement

**Recommendation:**
```
Split into:
/data/products-wines.ts (~6 kB)
/data/products-spirits.ts (~5 kB)
/data/products-cheese.ts (~4 kB)
/data/products-gifts.ts (~3 kB)
/data/products-helpers.ts (~2 kB)
```

---

#### 1.3 `/data/demoContent.ts` ⚠️ **OVERSIZED**

**Size:** ~15 kB  
**Status:** Large but acceptable for demo content

**Contents:**
- Demo hero section
- Demo products
- Feature highlights
- Testimonials
- Section dividers showcase
- Wax seal variants
- Stats/numbers
- Form demo data
- CTAs
- Component showcase sections

**Strengths:**
- Comprehensive demo content
- Good examples for component library

**Issues:**
- Could be split for better organization
- Some content is demo-specific vs. production-ready

**Recommendation:**
```
Keep as-is for demo pages, but create separate:
/data/homepage.ts (production homepage)
/data/about.ts (production about page)
```

---

#### 1.4 `/data/jobs.ts` ✅ **GOOD**

**Size:** ~6 kB  
**Status:** Well-structured

**Contents:**
- 4 job postings (winemaker, tour guide, farmstead cheesemaker, viticulturist)
- Proper Handcrafted Wines voice
- Detailed job descriptions

**Strengths:**
- Family farm voice throughout
- Realistic job descriptions
- Well-sized

**Issues:**
- None

---

#### 1.5 `/data/brands.ts` ❌ **LEGACY - DEPRECATE**

**Size:** ~3 kB  
**Status:** Contains legacy KWV brands

**Contents:**
- Array of brands (wines, spirits, gifts)
- Mix of KWV brands and Handcrafted Wines products

**Issues:**
- Contains "KWV Classic Collection", "Laborie", "Cathedral Cellar", etc.
- Conflicts with new Handcrafted Wines brand identity
- Redundant with products.ts

**Recommendation:**
- **DEPRECATE and remove** - All products should be in products.ts
- Handcrafted Wines doesn't sell other brands

---

#### 1.6 `/data/shopBrands.ts` ❌ **LEGACY - DEPRECATE**

**Size:** ~8 kB  
**Status:** Contains detailed KWV brand data

**Contents:**
- Detailed brand data for KWV Brandy, Laborie, Roodeberg, etc.
- Brand descriptions, histories, highlights

**Issues:**
- All content is KWV-era legacy
- Not aligned with Handcrafted Wines brand
- Redundant with products.ts

**Recommendation:**
- **DEPRECATE and remove** - Not needed for boutique wine farm

---

### 2. Missing Data Files

**Required but not yet created:**

1. **`/data/homepage.ts`** - Homepage content (hero, sections, CTAs)
2. **`/data/about.ts`** - About page content (main about page)
3. **`/data/about-farm.ts`** - Farm details (vineyard, distillery, dairy)
4. **`/data/about-team.ts`** - Team member bios
5. **`/data/awards.ts`** - Awards and accolades
6. **`/data/sustainability.ts`** - Sustainability practices
7. **`/data/experiences.ts`** - Wine tastings, tours, experiences
8. **`/data/events.ts`** - Weddings, corporate events, venue info
9. **`/data/wine-club.ts`** - Wine club subscription info
10. **`/data/contact.ts`** - Contact page content
11. **`/data/faq.ts`** - FAQ content (general, shop, experiences)
12. **`/data/shipping.ts`** - Shipping policies, delivery info
13. **`/data/returns.ts`** - Returns and refunds policy
14. **`/data/privacy.ts`** - Privacy policy
15. **`/data/terms.ts`** - Terms and conditions
16. **`/data/error-pages.ts`** - 404, 500 error page content
17. **`/data/microcopy.ts`** - Buttons, forms, tooltips, errors
18. **`/data/navigation.ts`** - Menu items, footer links (if not hardcoded)
19. **`/data/seo.ts`** - Meta titles, descriptions, keywords by page

**Estimated total:** ~14-19 new data files needed

---

### 3. Legacy Content Audit

#### 3.1 KWV Brand References

**Files containing "KWV" references:** 15+

**Critical removals needed:**

1. **`/components/common/Logo.tsx`**
   - Line 173-181: Deprecated KWV logo exports
   - **Action:** Remove deprecated exports

2. **`/components/shop/home/ShopBrandGrid.tsx`**
   - Lines 10-15: KWV Classic Collection, KWV House of Brandy
   - **Action:** Replace with Handcrafted Wines product categories or remove component

3. **`/components/shop/layout/ShopSidebar.tsx`**
   - Line 78: Brand filter includes "KWV Brandy", "Cathedral Cellar", etc.
   - **Action:** Replace with Handcrafted Wines product types (Wines, Spirits, Cheese)

4. **`/components/shop/checkout/PickupLocationSelect.tsx`**
   - Line 7: Comment mentions "KWV Emporium"
   - **Action:** Update to "Handcrafted Wines Farm Shop"

5. **`/pages/shop/ProductSearchResults.tsx`**
   - Line 34: "KWV 10 Year Old Brandy" in mock data
   - **Action:** Replace with actual Handcrafted Wines products from products.ts

6. **`/data/brands.ts`**
   - Entire file contains KWV brands
   - **Action:** DEPRECATE and remove file

7. **`/data/shopBrands.ts`**
   - Entire file contains KWV brand details
   - **Action:** DEPRECATE and remove file

**Total legacy references to remove:** ~20-30 instances

---

#### 3.2 Corporate vs. Family Voice

**Examples of voice inconsistency:**

**Corporate voice (❌ NEEDS CHANGE):**
```tsx
// /components/layout/BreadcrumbsBar.tsx:145
name = 'Corporate FAQ';

// /pages/shop/ProductSearchResults.tsx:15
// Differentiates from the corporate SearchResults page
```

**Family voice (✅ CORRECT):**
```tsx
// /data/farmStory.ts
tagline: "A Century of Family Winemaking on Paarl Mountain"

// /data/jobs.ts
"Join our family farm team..."
```

**Recommendation:**
- Replace all "corporate" references with "general" or remove qualifier
- Standardize voice to warm, family-oriented, conversational tone

---

### 4. Hardcoded Content Analysis

#### 4.1 Components with Embedded Copy

**High-priority components to extract:**

1. **`/components/sections/HomeEntryPoints.tsx`**
   - Lines 72-73: Hardcoded event description
   ```tsx
   description: 'Weddings, corporate events, and private functions...'
   ```
   - **Action:** Move to `/data/homepage.ts`

2. **`/pages/company/About.tsx`** (if not yet data-driven)
   - Likely has hardcoded about content
   - **Action:** Extract to `/data/about.ts`

3. **`/pages/company/AboutFarm.tsx`**
   - Likely has hardcoded farm descriptions
   - **Action:** Extract to `/data/about-farm.ts`

4. **`/pages/company/AboutTeam.tsx`**
   - Likely has hardcoded team bios
   - **Action:** Extract to `/data/about-team.ts`

5. **All shop pages** - Likely have hardcoded intro copy, CTAs

**Estimated components to update:** 20-30

---

#### 4.2 Microcopy Inconsistencies

**Examples of inconsistent button text:**

**Inconsistent CTAs:**
- "Add to cart" vs "Buy now"
- "Learn more" vs "Discover" vs "Explore"
- "Book now" vs "Reserve" vs "Schedule"
- "Join" vs "Subscribe" vs "Sign up"

**Recommendation:**
Create `/data/microcopy.ts` with standardized verbs:
```typescript
export const microcopy = {
  ctas: {
    addToCart: "Add to Cart",
    learnMore: "Learn More",
    bookExperience: "Book Experience",
    joinClub: "Join the Club",
    // ... etc
  },
  forms: {
    submit: "Submit",
    cancel: "Cancel",
    // ... etc
  },
  errors: {
    404: "Oops! This page doesn't exist.",
    500: "Something went wrong on our end.",
    // ... etc
  }
};
```

---

## Detailed Findings

### 1. Page Inventory & Content Extraction

#### 1.1 Page-by-Page Audit

| Page Route | Data File Exists? | Content Extracted? | Priority |
|------------|-------------------|--------------------| ---------|
| **About Section** | | | |
| `/` (Homepage) | ❌ | Partial | **HIGH** |
| `/about` | ❌ | ❌ | **HIGH** |
| `/about/farm` | ❌ | ❌ | **HIGH** |
| `/about/team` | ❌ | ❌ | **HIGH** |
| `/about/awards` | ❌ | ❌ | **HIGH** |
| `/about/sustainability` | ❌ | ❌ | **HIGH** |
| `/about/news` | ❌ | ❌ | Medium |
| `/about/contact` | ❌ | ❌ | Medium |
| `/about/careers` | ✅ | ✅ | **COMPLETE** |
| **Shop Section** | | | |
| `/shop` | Partial | Partial | **HIGH** |
| `/shop/wines` | ✅ | ✅ | **COMPLETE** |
| `/shop/spirits` | ✅ | ✅ | **COMPLETE** |
| `/shop/cheese` | ✅ | ✅ | **COMPLETE** |
| `/shop/gifts` | ✅ | ✅ | **COMPLETE** |
| `/shop/product/:id` | ✅ | ✅ | **COMPLETE** |
| `/shop/cart` | ❌ | ❌ | Medium |
| `/shop/checkout` | ❌ | ❌ | Medium |
| **Experiences Section** | | | |
| `/experiences` | Partial (in farmStory) | Partial | **HIGH** |
| `/experiences/:id` | ❌ | ❌ | **HIGH** |
| **Events Section** | | | |
| `/events` | ❌ | ❌ | **HIGH** |
| `/events/weddings` | ❌ | ❌ | Medium |
| `/events/corporate` | ❌ | ❌ | Medium |
| **Wine Club** | | | |
| `/wine-club` | ❌ | ❌ | **HIGH** |
| **Utility Pages** | | | |
| `/search` | ❌ | ❌ | Low |
| `/sitemap` | ❌ | ❌ | Low |
| `/privacy-policy` | ❌ | ❌ | Low |
| `/terms-conditions` | ❌ | ❌ | Low |
| `/404` | ❌ | ❌ | Low |

**Summary:**
- **Pages with data files:** 7/27 (26%)
- **Pages needing data files:** 20/27 (74%)

---

#### 1.2 Recommended Data File Structure

**File:** `/data/homepage.ts`

```typescript
/**
 * Homepage Content
 * 
 * All content for the homepage including hero, sections, and CTAs.
 */

export const homepage = {
  hero: {
    title: "Handcrafted Wines",
    subtitle: "A Century of Family Winemaking on Paarl Mountain",
    description: "Four generations of passion, tradition, and terroir in every bottle.",
    cta: {
      primary: { text: "Explore Our Wines", link: "/shop/wines" },
      secondary: { text: "Visit Our Farm", link: "/experiences" }
    },
    backgroundImage: "/images/hero/vineyard-sunset.jpg",
    backgroundImageAlt: "Paarl Mountain vineyard at sunset"
  },
  
  entryPoints: [
    {
      id: "shop",
      title: "Our Wines & Spirits",
      description: "Small-batch wines, craft grappa, and artisan cheese from our farm.",
      link: "/shop",
      image: "/images/entry-points/wines.jpg",
      imageAlt: "Handcrafted wine bottles"
    },
    {
      id: "experiences",
      title: "Visit & Taste",
      description: "Wine tastings, farm tours, and cheese pairings on Paarl Mountain.",
      link: "/experiences",
      image: "/images/entry-points/tasting-room.jpg",
      imageAlt: "Wine tasting room"
    },
    {
      id: "events",
      title: "Host Your Event",
      description: "Weddings, celebrations, and private gatherings in our historic farm setting.",
      link: "/events",
      image: "/images/entry-points/wedding-venue.jpg",
      imageAlt: "Farm wedding venue"
    },
    {
      id: "wine-club",
      title: "The Wine Box Club",
      description: "Seasonal wine deliveries with exclusive releases and farm stories.",
      link: "/wine-club",
      image: "/images/entry-points/wine-club.jpg",
      imageAlt: "Wine club subscription box"
    }
  ],
  
  familyStory: {
    title: "Four Generations, One Passion",
    subtitle: "From 1918 to Today",
    description: "Our family has been making wine on this land for over a century. Every bottle carries the knowledge passed down through four generations and the love we have for this mountain, these vines, and this craft.",
    cta: { text: "Read Our Story", link: "/about" }
  },
  
  featuredProducts: {
    title: "Award-Winning Wines",
    subtitle: "Handcrafted in Small Batches",
    // Product IDs from products.ts
    productIds: ["estate-shiraz-2021", "reserve-cabernet-2020", "chenin-blanc-2022"]
  },
  
  testimonials: [
    {
      quote: "The most authentic wine experience we've ever had. You can taste the love and history in every sip.",
      author: "Sarah Mitchell",
      role: "Wine Enthusiast"
    },
    {
      quote: "This isn't just a winery - it's a family inviting you into their home and sharing their passion.",
      author: "James Peterson",
      role: "Sommelier"
    }
  ],
  
  newsletter: {
    title: "Join Our Family",
    description: "Get farm updates, wine releases, and exclusive tasting invitations.",
    placeholder: "Your email address",
    buttonText: "Subscribe",
    privacyNote: "We respect your privacy. Unsubscribe anytime."
  },
  
  seo: {
    title: "Handcrafted Wines | Family Wine Farm Since 1918 | Paarl, South Africa",
    description: "Visit our family wine farm on Paarl Mountain. Handcrafted wines, craft spirits, and artisan cheese. Four generations of winemaking tradition.",
    keywords: ["family wine farm", "Paarl wines", "South African wine", "craft spirits", "wine tasting", "farm experiences"],
    openGraph: {
      title: "Handcrafted Wines - Family Wine Farm Since 1918",
      description: "Four generations of winemaking on Paarl Mountain",
      image: "/images/og/homepage.jpg",
      url: "https://handcraftedwines.co.za"
    }
  }
};
```

---

### 2. Voice & Tone Transformation

#### 2.1 Brand Voice Guidelines

**The Handcrafted Wines Voice:**

**Core Attributes:**
- **Warm & Welcoming** - Like inviting friends to the farm
- **Authentic & Honest** - No pretense or wine snobbery
- **Knowledgeable & Passionate** - Expertise without intimidation
- **Personal & Storytelling** - Share the journey, the people, the process
- **Sensory & Evocative** - Engage the senses, paint pictures

**Voice by Context:**

| Context | Tone | Example |
|---------|------|---------|
| **Homepage** | Inviting, warm | "Come visit our family farm on Paarl Mountain" |
| **Product Pages** | Sensory, passionate | "Dark cherry and vanilla dance with hints of oak" |
| **About Pages** | Personal, storytelling | "My great-grandfather planted these vines in 1918..." |
| **Experiences** | Welcoming, exciting | "Join us for a tasting in our century-old cellar" |
| **Events** | Celebratory, romantic | "Say 'I do' surrounded by vineyards and mountain views" |
| **Errors** | Friendly, helpful | "Oops! This bottle seems to have wandered off." |

---

#### 2.2 Language Guidelines

**Use:**
- ✅ "We", "our family", "our farm"
- ✅ "Handcrafted", "small-batch", "artisan"
- ✅ "Generations", "tradition", "heritage"
- ✅ "Invite", "join", "share", "discover"
- ✅ "Mountain", "vineyard", "cellar", "terroir"
- ✅ Sensory words: "taste", "aroma", "touch", "feel"

**Avoid:**
- ❌ "Corporate", "enterprise", "solutions"
- ❌ "Leveraging", "synergy", "utilize"
- ❌ "State-of-the-art", "cutting-edge"
- ❌ Wine jargon without context
- ❌ Pretentious or exclusionary language

**South African English:**
- Use British spelling: "colour", "flavour", "honour"
- Include local terms naturally: "braai", "lekker" (sparingly)
- Universal appeal - accessible to international audience

---

#### 2.3 Microcopy Standards

**Recommended microcopy file:** `/data/microcopy.ts`

```typescript
export const microcopy = {
  // Call-to-Action Buttons
  ctas: {
    shopWines: "Explore Our Wines",
    shopSpirits: "Discover Our Spirits",
    shopCheese: "Taste Our Cheese",
    addToCart: "Add to Cart",
    viewCart: "View Cart",
    checkout: "Proceed to Checkout",
    bookExperience: "Book This Experience",
    bookTour: "Reserve Your Tour",
    joinClub: "Join the Club",
    learnMore: "Learn More",
    readStory: "Read Our Story",
    viewAll: "View All",
    subscribe: "Subscribe"
  },
  
  // Form Fields
  forms: {
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email Address",
    phone: "Phone Number",
    message: "Your Message",
    submit: "Submit",
    cancel: "Cancel",
    save: "Save",
    update: "Update",
    delete: "Delete"
  },
  
  // Error Messages
  errors: {
    404: {
      title: "Oops! This Page Wandered Off",
      message: "Looks like this page took a walk through the vineyard and got lost. Let's get you back on track.",
      cta: "Return Home"
    },
    500: {
      title: "Something Went Sideways",
      message: "Our systems are taking an unscheduled cellar break. We're on it - try again in a moment.",
      cta: "Try Again"
    },
    formError: "Please check the highlighted fields and try again.",
    networkError: "Connection issue - please check your internet and try again.",
    outOfStock: "This item is currently out of stock. Join our waitlist to be notified when it's back.",
    invalidCoupon: "This coupon code isn't valid. Double-check and try again."
  },
  
  // Loading States
  loading: {
    default: "Loading...",
    products: "Uncorking our collection...",
    cart: "Updating your cart...",
    checkout: "Processing your order...",
    booking: "Reserving your experience..."
  },
  
  // Empty States
  empty: {
    cart: "Your cart is empty. Let's fix that!",
    search: "No results found. Try different keywords or browse our collection.",
    wishlist: "You haven't saved any favourites yet."
  },
  
  // Success Messages
  success: {
    addedToCart: "Added to cart!",
    subscribed: "Welcome to the family! Check your email for confirmation.",
    bookingConfirmed: "Your booking is confirmed. We'll send details to your email.",
    orderPlaced: "Order placed! We're preparing your wines for delivery."
  }
};
```

---

### 3. Metadata & SEO Strategy

#### 3.1 SEO Data Structure

**Recommended file:** `/data/seo.ts`

```typescript
export interface PageSEO {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  openGraph: {
    title: string;
    description: string;
    image: string;
    url: string;
    type?: string;
  };
  twitter?: {
    card: string;
    title: string;
    description: string;
    image: string;
  };
  structuredData?: any; // Schema.org JSON-LD
}

export const seoData: Record<string, PageSEO> = {
  homepage: {
    title: "Handcrafted Wines | Family Wine Farm Since 1918 | Paarl, South Africa",
    description: "Visit our family wine farm on Paarl Mountain. Four generations of handcrafted wines, craft spirits, and artisan cheese. Book tastings and tours.",
    keywords: ["family wine farm", "Paarl wines", "South African wine", "craft spirits", "wine tasting", "Paarl Mountain"],
    canonical: "https://handcraftedwines.co.za",
    openGraph: {
      title: "Handcrafted Wines - Four Generations of Winemaking",
      description: "Family wine farm on Paarl Mountain since 1918",
      image: "/images/og/homepage.jpg",
      url: "https://handcraftedwines.co.za",
      type: "website"
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Winery",
      "name": "Handcrafted Wines",
      "foundingDate": "1918",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Paarl",
        "addressRegion": "Western Cape",
        "addressCountry": "ZA"
      }
    }
  },
  
  shop: {
    title: "Shop Wines, Spirits & Cheese | Handcrafted Wines",
    description: "Buy handcrafted wines, craft grappa, brandy, and artisan cheese. Small-batch products from our family farm. Free shipping on orders over R500.",
    keywords: ["buy wine online", "South African wine shop", "craft spirits", "artisan cheese", "wine delivery"],
    // ... etc
  },
  
  // ... (all other pages)
};
```

---

#### 3.2 Meta Description Best Practices

**Guidelines:**
- **Length:** 150-160 characters (Google displays ~155)
- **Include:** Brand name, primary keyword, value proposition
- **Tone:** Inviting, benefit-focused, action-oriented
- **Avoid:** Keyword stuffing, generic phrases

**Examples:**

✅ **Good:**
```
"Visit our family wine farm on Paarl Mountain. Handcrafted wines, tastings, and farm tours. Four generations of winemaking tradition."
```

❌ **Bad:**
```
"Wine farm. Wines, spirits, cheese. South Africa wine. Paarl wine. Wine tasting. Wine tours. Buy wine online."
```

---

### 4. Storytelling Elements

#### 4.1 Timeline Data Structure

**Recommended file:** `/data/timeline.ts`

```typescript
export const timeline = [
  {
    year: 1918,
    generation: 1,
    title: "The Beginning",
    description: "Pieter van der Berg planted the first vines on Paarl Mountain, founding our family legacy.",
    image: "/images/timeline/1918-founding.jpg",
    highlight: "First vintage: 50 cases of Chenin Blanc"
  },
  {
    year: 1952,
    generation: 2,
    title: "Second Generation",
    description: "Pieter's son, Hendrik, expanded the vineyard and built our first wine cellar.",
    image: "/images/timeline/1952-cellar.jpg",
    highlight: "Cellar construction: Hand-carved stone walls"
  },
  {
    year: 1987,
    generation: 3,
    title: "Craft Spirits",
    description: "Annelie van der Berg added craft grappa and brandy distillation to our offerings.",
    image: "/images/timeline/1987-distillery.jpg",
    highlight: "First grappa distilled from estate grapes"
  },
  {
    year: 2003,
    generation: 4,
    title: "Artisan Cheese",
    description: "Liezl started our goat dairy and farmstead cheese production.",
    image: "/images/timeline/2003-dairy.jpg",
    highlight: "20 goats, 4 cheese varieties"
  },
  {
    year: 2015,
    generation: 4,
    title: "Sustainability",
    description: "Implemented solar power and organic viticulture practices.",
    image: "/images/timeline/2015-solar.jpg",
    highlight: "100% solar-powered winery"
  },
  {
    year: 2024,
    generation: 4,
    title: "Today",
    description: "Four generations later, we're still handcrafting every bottle, wedge, and pour.",
    image: "/images/timeline/2024-family.jpg",
    highlight: "106 years of family winemaking"
  }
];
```

---

#### 4.2 Awards Data Structure

**Already exists:** `/data/farmStory.ts` includes 58 awards

**Recommendation:**
- Create dedicated `/data/awards.ts` for more detail
- Group by category (Wines, Spirits, Cheese)
- Include award name, year, product, competition

```typescript
export const awards = [
  {
    id: "award-1",
    category: "wine",
    year: 2023,
    product: "Estate Shiraz 2021",
    award: "Double Gold Medal",
    competition: "Michelangelo International Wine Awards",
    description: "Our flagship Shiraz earned top honors for its bold fruit and elegant structure."
  },
  // ... more awards
];
```

---

### 5. Content Governance

#### 5.1 Data File Size Management

**Current file sizes:**

| File | Current Size | Status | Action |
|------|--------------|--------|--------|
| `farmStory.ts` | ~12 kB | ✅ GOOD | None |
| `products.ts` | ~18 kB | ⚠️ APPROACHING LIMIT | Split into 4 files |
| `demoContent.ts` | ~15 kB | ⚠️ LARGE | Keep for demo, create separate production files |
| `jobs.ts` | ~6 kB | ✅ GOOD | None |
| `brands.ts` | ~3 kB | ❌ DEPRECATE | Remove |
| `shopBrands.ts` | ~8 kB | ❌ DEPRECATE | Remove |

**Size limits:**
- **Target:** <15 kB per file (optimal)
- **Maximum:** <20 kB per file (hard limit)
- **Oversized threshold:** >20 kB = must split immediately

---

#### 5.2 Splitting Strategy

**When to split a file:**
1. File exceeds 15 kB
2. File has clear logical sections (categories, features)
3. Sections are independently useful

**How to split:**

**Option 1: By category**
```
products.ts (18 kB)
  → products-wines.ts (6 kB)
  → products-spirits.ts (5 kB)
  → products-cheese.ts (4 kB)
  → products-gifts.ts (3 kB)
```

**Option 2: By feature**
```
homepage.ts (25 kB hypothetical)
  → homepage-hero.ts (5 kB)
  → homepage-sections.ts (8 kB)
  → homepage-testimonials.ts (4 kB)
  → homepage-seo.ts (3 kB)
```

**Option 3: Create index file**
```
/data/products/
  ├── index.ts (imports and exports all)
  ├── wines.ts
  ├── spirits.ts
  ├── cheese.ts
  └── gifts.ts
```

---

#### 5.3 Content Review Process

**Proposed workflow:**

**1. Content Creation**
- Writer creates/updates content in `/data/` files
- Follows voice & tone guidelines
- Adheres to schema and size limits

**2. Technical Review**
- Developer validates TypeScript types
- Checks file size (<20 kB)
- Verifies imports work correctly

**3. Editorial Review**
- Marketing/Brand lead reviews voice & tone
- Ensures accuracy and consistency
- Approves for staging

**4. Staging Deployment**
- Content pushed to staging environment
- Visual review in UI
- Link/image verification

**5. Production Deployment**
- Final approval from stakeholder
- Deploy to production
- Monitor for issues

---

#### 5.4 CI Validation Script

**Recommended:** Add to CI pipeline

```javascript
// scripts/validate-data-files.js

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '../data');
const MAX_FILE_SIZE_KB = 20;

function validateDataFiles() {
  const files = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('.ts'));
  const violations = [];
  
  files.forEach(file => {
    const filePath = path.join(DATA_DIR, file);
    const stats = fs.statSync(filePath);
    const sizeKB = stats.size / 1024;
    
    if (sizeKB > MAX_FILE_SIZE_KB) {
      violations.push({
        file,
        size: sizeKB.toFixed(2),
        limit: MAX_FILE_SIZE_KB
      });
    }
  });
  
  if (violations.length > 0) {
    console.error('❌ Data file size violations:');
    violations.forEach(v => {
      console.error(`  ${v.file}: ${v.size} kB (limit: ${v.limit} kB)`);
    });
    process.exit(1);
  } else {
    console.log('✅ All data files within size limits');
  }
}

validateDataFiles();
```

---

## Gap Analysis

### Critical Gaps

| Gap | Impact | Effort | Priority |
|-----|--------|--------|----------|
| **Legacy KWV content removal** | HIGH | Medium | **CRITICAL** |
| **Missing page data files (14+)** | HIGH | High | **CRITICAL** |
| **Voice & tone inconsistency** | HIGH | Medium | **CRITICAL** |
| **Hardcoded component strings** | HIGH | High | **HIGH** |
| **products.ts file splitting** | Medium | Low | **HIGH** |
| **Microcopy standardization** | Medium | Medium | **HIGH** |
| **SEO metadata missing** | Medium | Medium | **MEDIUM** |
| **Content governance process** | Low | Low | **MEDIUM** |
| **Translation placeholders** | Low | Low | **LOW** |

---

## Recommendations

### Phase 1: Foundation (Week 1)

**Priority: CRITICAL**

#### 1.1 Remove Legacy Content
- [ ] Remove all KWV brand references (15+ files)
- [ ] Delete `/data/brands.ts`
- [ ] Delete `/data/shopBrands.ts`
- [ ] Update ShopBrandGrid component (remove or redesign)
- [ ] Update ShopSidebar filters (replace KWV brands)
- [ ] Replace "corporate" references with neutral terms
- [ ] Update PickupLocationSelect to "Handcrafted Wines Farm Shop"

**Estimated effort:** 4-6 hours  
**Dependencies:** None  
**Success metric:** Zero "KWV" or "corporate" references in codebase

---

#### 1.2 Create Core Page Data Files
- [ ] Create `/data/homepage.ts` - Homepage content
- [ ] Create `/data/about.ts` - Main about page
- [ ] Create `/data/about-farm.ts` - Farm details
- [ ] Create `/data/about-team.ts` - Team bios
- [ ] Create `/data/experiences.ts` - Experiences/tastings
- [ ] Create `/data/events.ts` - Events/weddings
- [ ] Create `/data/wine-club.ts` - Wine club info

**Estimated effort:** 12-16 hours  
**Dependencies:** Voice & tone guidelines  
**Success metric:** 7 new data files created, all <15 kB

---

#### 1.3 Establish Voice & Tone Guidelines
- [ ] Document voice attributes (warm, authentic, passionate)
- [ ] Create voice-by-context guide (homepage, products, about, etc.)
- [ ] Define language do's and don'ts
- [ ] Create microcopy standards (`/data/microcopy.ts`)
- [ ] Add examples of good vs. bad copy
- [ ] Share with team for feedback

**Estimated effort:** 4-6 hours  
**Dependencies:** None  
**Success metric:** Voice & tone guideline document created

---

### Phase 2: Content Migration (Week 2)

**Priority: HIGH**

#### 2.1 Extract Hardcoded Content
- [ ] Audit all components for embedded strings
- [ ] Extract strings to appropriate data files
- [ ] Update component imports
- [ ] Test all pages for visual/functional accuracy

**Components to update:**
- HomeEntryPoints.tsx → Move to homepage.ts
- About.tsx → Move to about.ts
- AboutFarm.tsx → Move to about-farm.ts
- AboutTeam.tsx → Move to about-team.ts
- All shop intro copy → Move to shop.ts
- All error messages → Move to microcopy.ts

**Estimated effort:** 16-20 hours  
**Dependencies:** Data files created  
**Success metric:** <5% hardcoded strings remaining

---

#### 2.2 Split Oversized Data Files
- [ ] Split `/data/products.ts` into 4 files:
  - `products-wines.ts`
  - `products-spirits.ts`
  - `products-cheese.ts`
  - `products-gifts.ts`
- [ ] Create `/data/products/index.ts` to re-export all
- [ ] Update all component imports
- [ ] Verify no broken imports

**Estimated effort:** 3-4 hours  
**Dependencies:** None  
**Success metric:** All product files <10 kB

---

#### 2.3 Standardize Microcopy
- [ ] Create `/data/microcopy.ts`
- [ ] Define standard CTAs (buttons, links)
- [ ] Define standard form labels and messages
- [ ] Define standard error messages
- [ ] Define standard loading/empty states
- [ ] Update all components to use microcopy.ts

**Estimated effort:** 6-8 hours  
**Dependencies:** Voice & tone guidelines  
**Success metric:** All microcopy centralized

---

### Phase 3: SEO & Metadata (Week 3)

**Priority: MEDIUM**

#### 3.1 Add SEO Metadata
- [ ] Create `/data/seo.ts` with PageSEO interface
- [ ] Define SEO data for all major pages (20+)
- [ ] Add OpenGraph metadata
- [ ] Add Twitter Card metadata
- [ ] Add Schema.org structured data (Winery, Products, Events)
- [ ] Create SEO component to inject metadata

**Estimated effort:** 8-10 hours  
**Dependencies:** Page data files  
**Success metric:** All pages have complete SEO metadata

---

#### 3.2 Create Supporting Data Files
- [ ] Create `/data/faq.ts` - FAQ content
- [ ] Create `/data/shipping.ts` - Shipping policies
- [ ] Create `/data/returns.ts` - Returns policy
- [ ] Create `/data/privacy.ts` - Privacy policy
- [ ] Create `/data/terms.ts` - Terms and conditions
- [ ] Create `/data/error-pages.ts` - 404/500 content

**Estimated effort:** 6-8 hours  
**Dependencies:** Voice & tone guidelines  
**Success metric:** 6 new supporting data files

---

### Phase 4: Governance & Polish (Week 4)

**Priority: LOW**

#### 4.1 Implement Content Governance
- [ ] Document content review process
- [ ] Define roles (writer, reviewer, approver)
- [ ] Create CI validation script for file sizes
- [ ] Add data file schema validation (optional)
- [ ] Set up content update workflow

**Estimated effort:** 4-6 hours  
**Dependencies:** None  
**Success metric:** Governance process documented

---

#### 4.2 Add Translation Support (Future)
- [ ] Add translation keys to data files
- [ ] Create placeholder translation files
- [ ] Design i18n strategy
- [ ] Test with one non-English language

**Estimated effort:** TBD (future phase)  
**Dependencies:** Localization strategy  
**Success metric:** Translation-ready data structure

---

## Implementation Roadmap

### Timeline: 4 Weeks

```
Week 1: Foundation
├── Remove legacy KWV content (4-6 hrs)
├── Create core page data files (12-16 hrs)
└── Establish voice & tone guidelines (4-6 hrs)
    Total: 20-28 hours

Week 2: Content Migration
├── Extract hardcoded content (16-20 hrs)
├── Split oversized data files (3-4 hrs)
└── Standardize microcopy (6-8 hrs)
    Total: 25-32 hours

Week 3: SEO & Metadata
├── Add SEO metadata (8-10 hrs)
└── Create supporting data files (6-8 hrs)
    Total: 14-18 hours

Week 4: Governance & Polish
├── Implement content governance (4-6 hrs)
└── Final review and testing (4-6 hrs)
    Total: 8-12 hours

GRAND TOTAL: 67-90 hours (~2-3 weeks at 40 hrs/week)
```

---

### Dependencies

**Critical path:**
1. Voice & tone guidelines → All content creation
2. Core data files → Content extraction
3. Content extraction → Component updates
4. All above → SEO metadata addition

**Blockers:**
- Voice & tone approval from stakeholders
- Legacy content removal approval
- Design review of updated components

---

## Success Metrics

### Quantitative Metrics

| Metric | Current | Target | Measurement |
|--------|---------|--------|-------------|
| **Data file coverage** | 26% (7/27 pages) | 100% (27/27 pages) | File count |
| **Content in data files** | ~40% | 100% | String audit |
| **Legacy references** | 15+ | 0 | Code search for "KWV" |
| **Voice consistency** | ~30% | 100% | Editorial review |
| **File size compliance** | 67% (4/6 files) | 100% | Script validation |
| **SEO coverage** | 0% (no metadata) | 100% | Metadata audit |
| **Hardcoded strings** | ~60% | <5% | Component audit |

---

### Qualitative Metrics

**Content Quality:**
- [ ] All copy reflects warm, family-oriented voice
- [ ] No wine jargon without context
- [ ] Sensory and evocative language used
- [ ] Storytelling integrated naturally

**User Experience:**
- [ ] CTAs are clear and action-oriented
- [ ] Error messages are friendly and helpful
- [ ] Microcopy is consistent across site
- [ ] Content flows naturally between pages

**Maintainability:**
- [ ] Developers can find content quickly
- [ ] Content updates don't require code changes
- [ ] File sizes stay within limits
- [ ] Schema is clear and documented

---

## Acceptance Criteria

### Must Have (Required for Completion)

- [ ] All KWV brand references removed from codebase
- [ ] 14+ new data files created for missing pages
- [ ] Voice & tone guidelines documented and approved
- [ ] All hardcoded component strings extracted to data files
- [ ] products.ts split into 4 smaller files
- [ ] Microcopy standardized in microcopy.ts
- [ ] All data files <20 kB (preferably <15 kB)
- [ ] Component imports updated and tested

---

### Should Have (High Priority)

- [ ] SEO metadata added to all major pages (20+)
- [ ] OpenGraph and Twitter Card metadata included
- [ ] Schema.org structured data for key entities
- [ ] FAQ, shipping, returns, privacy, terms data files created
- [ ] Error page content extracted to data file
- [ ] Content governance process documented

---

### Nice to Have (Polish)

- [ ] CI validation script for file sizes implemented
- [ ] Translation placeholders added
- [ ] Timeline component with data from timeline.ts
- [ ] Awards showcase component with data from awards.ts
- [ ] Content update workflow defined
- [ ] Editorial calendar for content updates

---

## Related Documentation

### Guidelines
- `/guidelines/Guidelines.md` - Main brand guidelines
- `/guidelines/development/file-organization.md` - File creation standards
- Voice & tone guidelines (to be created)

### Templates
- `/guidelines/_templates/guideline-template.md` - For creating voice & tone guideline

### Migration Prompts
- `/prompts/content-migration-to-data-files.md` - Content extraction workflow

### Reports
- `/reports/redesign/01-visual-design-report.md` - Visual design analysis
- `/reports/redesign/02-content-strategy-report.md` - This report

---

## Appendix

### A. Data File Templates

#### Homepage Template
See [Section 4.1.2](#12-recommended-data-file-structure) for full example.

#### Product Template
```typescript
export interface Product {
  id: string;
  name: string;
  category: 'wine' | 'spirit' | 'cheese' | 'gift';
  subcategory?: string;
  price: number;
  description: string;
  tastingNotes?: string;
  pairing?: string;
  awards?: string[];
  vintage?: number;
  images: string[];
  featured: boolean;
}
```

---

### B. Voice & Tone Examples

**Homepage Hero (✅ GOOD):**
```
"Four Generations of Winemaking on Paarl Mountain"

Since 1918, our family has been handcrafting wines, spirits, and cheese 
on this mountain. Come visit our farm, taste our passion, and share our story.
```

**Product Description (✅ GOOD):**
```
Estate Shiraz 2021

Dark cherry and blackberry leap from the glass, with hints of vanilla and 
black pepper. Aged 18 months in French oak, this Shiraz is bold yet elegant—
perfect with grilled lamb or aged cheese.
```

**Error Page (✅ GOOD):**
```
Oops! This Page Wandered Off

Looks like this page took a walk through the vineyard and got lost. 
Let's get you back on track.

[Return Home]
```

**Corporate Voice (❌ BAD):**
```
"Leveraging state-of-the-art viticulture solutions to deliver 
premium wine experiences through our enterprise platform."
```

---

### C. Changelog

**Version 1.0.0 (2024-03-15)**
- Initial Content Strategy Analysis Report
- Audited 6 existing data files
- Identified 14+ missing data files
- Documented legacy KWV content (15+ files to update)
- Created voice & tone guidelines framework
- Defined microcopy standards
- Proposed SEO metadata structure
- Established content governance process
- Created 4-week implementation roadmap

---

**Report Complete**  
**Next Steps:** Review recommendations, approve voice & tone guidelines, begin Phase 1 implementation

**Questions?** Reference `/prompts/redesign/02-content-strategy-analysis.md` for original prompt.
