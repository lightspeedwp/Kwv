# Site Structure & Sitemap

**Version:** 2.0  
**Last Updated:** March 15, 2026  
**Status:** Active  
**Applies To:** Handcrafted Wines complete site architecture

---

## Overview

This document defines the complete URL structure, page hierarchy, and navigation architecture for Handcrafted Wines. All routes are implemented using React Router Data Mode.

**Total Pages:** 40+  
**Main Sections:** 4 (About, Shop, Visit, Events)  
**Router:** `react-router` (SPA, client-side routing)

---

## Quick Reference

### Main Navigation Sections

| Section | URL | Description |
|---------|-----|-------------|
| **Home** | `/` | Homepage |
| **About** | `/about` | Our story, farm, team, awards |
| **Shop** | `/shop` | Wines, spirits, cheese, gifts |
| **Visit** | `/experiences` | Tastings, tours, experiences |
| **Events** | `/events` | Weddings, corporate, private |

---

## 1. Complete Site Structure

### 1.1 Visual Sitemap

```
HandcraftedWines.co.za
│
├─ HOME (/)
│
├─ ABOUT (/about/*)
│  ├─ Our Story (/about)
│  ├─ The Farm (/about/farm)
│  ├─ Our Team (/about/team)
│  ├─ Awards (/about/awards)
│  ├─ Sustainability (/about/sustainability)
│  ├─ News & Stories (/about/news)
│  │  └─ News Post (/about/news/:slug)
│  ├─ Wine Club (/wine-club)
│  ├─ Careers (/careers)
│  └─ Contact (/contact)
│
├─ SHOP (/shop/*)
│  ├─ Shop Home (/shop)
│  ├─ Wines (/shop/wines)
│  ├─ Spirits (/shop/spirits)
│  ├─ Cheese (/shop/cheese)
│  ├─ Gifts (/shop/gifts)
│  ├─ All Products (/shop/all)
│  ├─ Promotions (/shop/promotions)
│  ├─ Product Detail (/product/:id)
│  ├─ Cart (/cart)
│  ├─ Checkout (/checkout)
│  ├─ Order Confirmation (/order-received)
│  ├─ My Account (/account)
│  ├─ Search (/shop/search)
│  └─ Shop FAQ (/shop/faq)
│
├─ VISIT (/experiences/*)
│  ├─ Experiences Home (/experiences)
│  ├─ Wine Tasting (/experiences/wine-tasting)
│  ├─ Cheese Pairing (/experiences/cheese-pairing)
│  ├─ Farm Tour (/experiences/farm-tour)
│  ├─ Harvest Experience (/experiences/harvest-experience)
│  ├─ Private Tasting (/experiences/private-tasting)
│  └─ Experiences FAQ (/experiences/faq)
│
├─ EVENTS (/events/*)
│  ├─ Events Home (/events)
│  ├─ Weddings (/events/weddings)
│  ├─ Corporate Events (/events/corporate)
│  ├─ Private Events (/events/private)
│  └─ Venue Information (/events/venue)
│
├─ DEVELOPER RESOURCES (/handdrawn-demo/*)
│  ├─ Hand-Drawn Component Library (/handdrawn-demo)
│  └─ Full-Width Landing Page Demo (/handdrawn-demo/landing-page)
│
├─ LEGAL & POLICIES (/*)
│  ├─ Privacy Policy (/privacy)
│  ├─ Accessibility Statement (/accessibility)
│  ├─ Terms of Service (/terms)
│  ├─ Returns Policy (/returns)
│  ├─ Shipping & Delivery (/shipping)
│  └─ Cookie Policy (/cookies)
│
├─ UTILITY PAGES
│  ├─ Search Results (/search)
│  ├─ Sitemap (/sitemap)
│  ├─ FAQ (/faq)
│  ├─ Global Distribution (/global-distribution)
│  ├─ Coming Soon (/coming-soon)
│  └─ 404 Not Found (/*)
│
└─ FOOTER LINKS
   ├─ About Us
   ├─ Contact Us
   ├─ Shipping & Returns
   ├─ Privacy Policy
   └─ Terms & Conditions
```

---

## 2. Page Inventory

### 2.1 Main Pages

| Page | URL | Component | Description |
|------|-----|-----------|-------------|
| Homepage | `/` | `HomePage` | Main landing page |
| Sitemap | `/sitemap` | `Sitemap` | Full site navigation |
| Search | `/search` | `SearchResults` | Global search results |
| 404 | `/*` | `NotFound` | Page not found |

---

### 2.2 About Section (/about/*)

| Page | URL | Component | Description |
|------|-----|-----------|-------------|
| Our Story | `/about` | `About` | Main about page, 4-generation story |
| The Farm | `/about/farm` | `AboutFarm` | Vineyard, distillery, dairy |
| Our Team | `/about/team` | `AboutTeam` | Family team members |
| Awards | `/about/awards` | `Awards` | 58+ awards showcase |
| Sustainability | `/about/sustainability` | `Sustainability` | Farm practices, certifications |
| News & Stories | `/about/news` | `News` | News listing |
| News Post | `/about/news/:slug` | `NewsPost` | Individual news article |
| Wine Club | `/wine-club` | `WineClub` | Subscription program |
| Careers | `/careers` | `Careers` | Job opportunities |
| Contact | `/contact` | `Contact` | Contact form, location |

**Total:** 10 pages

---

### 2.3 Shop Section (/shop/*)

| Page | URL | Component | Description |
|------|-----|-----------|-------------|
| Shop Home | `/shop` | `ShopHome` | Shop landing, 4 categories |
| Wines Category | `/shop/wines` | `WinesCategory` | 6 wine products |
| Spirits Category | `/shop/spirits` | `SpiritsCategory` | 3 spirit products |
| Cheese Category | `/shop/cheese` | `CheeseCategory` | 4 cheese products |
| Gifts Category | `/shop/gifts` | `GiftsCategory` | 4 gift sets |
| All Products | `/shop/all` | `Shop` | All 17 products |
| Promotions | `/shop/promotions` | `ShopPromotions` | Special offers |
| Product Detail | `/product/:id` | `ProductDetail` | Individual product page |
| Product Detail (alt) | `/shop/product/:id` | `ProductDetail` | Alias route |
| Cart | `/cart` | `Cart` | Shopping cart |
| Cart (alt) | `/shop/cart` | `Cart` | Alias route |
| Checkout | `/checkout` | `Checkout` | 4-step checkout flow |
| Checkout (alt) | `/shop/checkout` | `Checkout` | Alias route |
| Order Confirmation | `/order-received` | `OrderConfirmation` | Order success page |
| My Account | `/account` | `MyAccount` | User account dashboard |
| My Account (alt) | `/my-account` | `MyAccount` | Alias route |
| Search | `/shop/search` | `ProductSearchResults` | Product search |
| Shop FAQ | `/shop/faq` | `ShopFAQ` | Shopping help |

**Total:** 17 pages (12 unique + 5 aliases)

**Shop Advanced Routing:**

**Category Filtering:**
```
/shop                      → All products (17 total)
/shop/wines                → Wine category only (6 products)
/shop/spirits              → Spirits category only (3 products)
/shop/cheese               → Cheese category only (4 products)
/shop/gifts                → Gifts category only (4 products)
```

**Query Parameter Filtering:**
```
/shop?category=wines              → Filter by category
/shop?award=double-gold           → Filter by award level
/shop?price=min-max               → Filter by price range
/shop?vintage=2020                → Filter by vintage (wines only)
/shop?type=red                    → Filter by wine type
/shop?aging=aged                  → Filter by cheese aging
```

**Combined Filters (AND logic):**
```
/shop/wines?type=red&vintage=2020&award=gold
/shop/cheese?style=fresh&price=0-200
```

**Sorting:**
```
/shop?sort=price-asc              → Price: low to high
/shop?sort=price-desc             → Price: high to low
/shop?sort=name-asc               → A-Z
/shop?sort=awards                 → Awards (most first)
/shop?sort=newest                 → Newest releases
```

**Search:**
```
/shop/search?q=shiraz             → Product search
/shop/search?q=cheese&category=cheese  → Search within category
```

**Tags (Future):**
```
/shop/tag/organic                 → All organic products
/shop/tag/award-winning           → All awarded products
/shop/tag/limited-edition         → Limited releases
```

**Brands (Future):**
```
/shop/brands                      → Brand landing page
/brands/estate-wines              → Collection landing page
```

**Example Filter Combinations:**

| URL | Description | Results |
|-----|-------------|---------|
| `/shop` | All products, default sort | 17 products |
| `/shop/wines` | Wine category | 6 wines |
| `/shop/wines?type=red` | Red wines only | 3 wines |
| `/shop/wines?type=red&vintage=2020` | Red wines from 2020 | 1 wine |
| `/shop?award=gold` | Gold medal winners | 8 products |
| `/shop?price=0-200` | Products under R200 | 12 products |
| `/shop/cheese?style=fresh&sort=price-asc` | Fresh cheese, cheapest first | 2 products |

**Cart & Checkout Flow:**

1. **Add to Cart** → `/cart`
2. **Review Cart** → `/cart` (adjust quantities, apply coupons)
3. **Proceed to Checkout** → `/checkout` (4-step process)
4. **Order Confirmation** → `/order-received?order=ABC123`

**Checkout Steps:**

```
/checkout?step=1    → Shipping address
/checkout?step=2    → Delivery method  
/checkout?step=3    → Payment method
/checkout?step=4    → Review & confirm
```

**Order Confirmation:**
```
/order-received?order=ABC123    → Success page with order details
```

**Product URL Structure:**

**Preferred:** `/product/:id` (shorter, cleaner)
```
/product/estate-shiraz-2020
/product/fresh-chevre
/product/tasting-trio
```

**Alias:** `/shop/product/:id` (nested under shop)
```
/shop/product/estate-shiraz-2020
```

**Canonical:** Always use `/product/:id` as canonical URL

---

### 2.4 Experiences Section (/experiences/*)

| Page | URL | Component | Description |
|------|-----|-----------|-------------|
| Experiences Home | `/experiences` | `Experiences` | Visit landing page |
| Experiences (alt) | `/visit` | `Experiences` | Alias route |
| Wine Tasting | `/experiences/wine-tasting` | `WineTasting` | Wine tasting details |
| Cheese Pairing | `/experiences/cheese-pairing` | `CheesePairing` | Cheese & wine pairing |
| Farm Tour | `/experiences/farm-tour` | `FarmTour` | Full farm tour |
| Harvest Experience | `/experiences/harvest-experience` | `HarvestExperience` | Seasonal harvest |
| Private Tasting | `/experiences/private-tasting` | `PrivateTasting` | Private events |
| Experiences FAQ | `/experiences/faq` | `ExperiencesFAQ` | Visit help |

**Total:** 7 pages (6 unique + 1 alias)

---

### 2.5 Events Section (/events/*)

| Page | URL | Component | Description |
|------|-----|-----------|-------------|
| Events Home | `/events` | `Events` | Events landing page |
| Weddings | `/events/weddings` | `Weddings` | Wedding venue info |
| Corporate Events | `/events/corporate` | `CorporateEvents` | Team building, conferences |
| Private Events | `/events/private` | `PrivateEvents` | Private functions |
| Venue Information | `/events/venue` | `VenueInfo` | Venue details, capacity |

**Total:** 5 pages

---

### 2.6 Legal & Policy Pages (/*)

| Page | URL | Component | Description |
|------|-----|-----------|-------------|
| Privacy Policy | `/privacy` | `Privacy` | GDPR/POPIA privacy policy |
| Accessibility | `/accessibility` | `Accessibility` | WCAG 2.1 AA statement |
| Terms of Service | `/terms` | `Terms` | Terms & conditions |
| Returns Policy | `/returns` | `ReturnsPolicy` | Returns & refunds |
| Returns (alias) | `/returns-policy` | `ReturnsPolicy` | Alias route |
| Shipping & Delivery | `/shipping` | `Shipping` | South African shipping |
| Cookie Policy | `/cookies` | `Cookies` | Cookie usage & management |

**Total:** 7 pages (6 unique + 1 alias)

---

### 2.7 Developer Resources (/handdrawn-demo/*)

| Page | URL | Component | Description |
|------|-----|-----------|-------------|
| Component Library | `/handdrawn-demo` | `HandDrawnComponentLibrary` | Pattern library |
| Landing Page Demo | `/handdrawn-demo/landing-page` | `FullWidthLandingPage` | Marketing demo |

**Total:** 2 pages

---

### 2.8 Utility Pages

| Page | URL | Component | Description |
|------|-----|-----------|-------------|
| Search Results | `/search` | `SearchResults` | Global site search |
| Sitemap | `/sitemap` | `Sitemap` | Complete site navigation |
| FAQ | `/faq` | `FAQ` | General frequently asked questions |
| Global Distribution | `/global-distribution` | `GlobalDistribution` | International availability |
| Coming Soon | `/coming-soon` | `ComingSoon` | Feature preview/placeholder |
| 404 Not Found | `/*` | `NotFound` | Page not found error |

**Total:** 6 pages

**Section-Specific FAQs:**
- Shop FAQ: `/shop/faq` (shopping help)
- Experiences FAQ: `/experiences/faq` (visit help)
- Events FAQ: `/events/faq` (event booking help)

**Search Variations:**
- Global Search: `/search?q={query}` (all content)
- Shop Search: `/shop/search?q={query}` (products only)

---

## 3. URL Structure Guidelines

### 3.1 URL Naming Patterns

**Company/About Pages:**
```
/about                    → Main about page
/about/farm              → Sub-page
/about/team              → Sub-page
/about/news/:slug        → Dynamic slug
```

**Shop Pages:**
```
/shop                    → Shop home
/shop/wines              → Category
/product/:id             → Product (preferred)
/shop/product/:id        → Product (alias)
/cart                    → Cart (preferred)
/shop/cart               → Cart (alias)
```

**Experiences:**
```
/experiences             → Main page
/visit                   → Alias
/experiences/wine-tasting → Specific experience
```

**Events:**
```
/events                  → Main page
/events/weddings         → Specific event type
```

### 3.2 Dynamic Routes

**Product IDs:**
```
/product/estate-shiraz-2020
/product/fresh-chevre
/product/tasting-trio
```

**News Slugs:**
```
/about/news/harvest-2024
/about/news/new-brandy-release
```

**Search Queries:**
```
/search?q=shiraz
/shop/search?q=cheese&category=cheese
```

### 3.3 Query Parameters

**Filtering:**
```
/shop/wines?type=red&vintage=2020
/shop/cheese?style=fresh
```

**Sorting:**
```
/shop?sort=price&order=asc
/shop/wines?sort=awards
```

**Pagination:**
```
/shop?page=2
/about/news?page=3
```

### 3.4 Dynamic Route Parameters

**Complete list of all dynamic parameters in the application:**

| Route Pattern | Parameter(s) | Type | Example Values | Description |
|---------------|-------------|------|----------------|-------------|
| `/product/:id` | `id` | string | `estate-shiraz-2020`, `fresh-chevre` | Product slug/identifier |
| `/about/news/:slug` | `slug` | string | `harvest-2026`, `cheese-awards-2026` | News post slug |
| `/brands/:id` | `id` | string | `estate-wines`, `craft-spirits` | Collection identifier |
| `/events/:slug` | `slug` | string | `weddings`, `corporate` | Event type slug |
| `/shop/tag/:tag` | `tag` | string | `organic`, `award-winning` | Product tag filter |

**Parameter Extraction (React Router):**

```tsx
import { useParams } from 'react-router';

// Product Detail page
export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // Fetch product by ID
  const product = PRODUCTS.find(p => p.id === id);
  
  // Handle not found
  if (!product) {
    return <NotFound />;
  }
  
  return <ProductPage product={product} />;
};
```

**Parameter Validation:**

```tsx
// Validate parameter format
const isValidProductId = (id: string): boolean => {
  // Must be lowercase, hyphens only, 3-50 chars
  return /^[a-z0-9-]{3,50}$/.test(id);
};

// Usage
const { id } = useParams<{ id: string }>();

if (!id || !isValidProductId(id)) {
  return <NotFound />;
}
```

**Current Parameter Values:**

**Product IDs (17 total):**
- Wines (6): `estate-shiraz-2020`, `estate-chenin-blanc-2021`, `rose-2022`, `pinotage-reserve-2019`, `merlot-cab-blend-2020`, `sparkling-brut-nv`
- Spirits (3): `reserve-brandy-10yr`, `grappa`, `fruit-brandy`
- Cheese (4): `fresh-chevre`, `aged-chevre`, `wine-washed-rind`, `truffle-chevre`
- Gifts (4): `tasting-trio`, `cheese-wine-pairing`, `celebration-box`, `gift-voucher`

**News Slugs (12 total):**
- `harvest-2026`, `cheese-awards-2026`, `brandy-release-2026`, `vineyard-winter`, `shiraz-trophy-2025`, `goat-kids-2025`, `sustainability-solar`, `family-recipes`, `grappa-workshop`, `wedding-season`, `chenin-vintage`, `mountain-wildflowers`

**Event Slugs (4 total):**
- `weddings`, `corporate`, `private`, `venue`

**Collection IDs (5 total):**
- `estate-wines`, `craft-spirits`, `farmstead-cheese`, `curated-gifts`, `wine-club-exclusive`

**Parameter Naming Conventions:**

✅ **Good parameter names:**
- `estate-shiraz-2020` - Descriptive, includes year
- `cheese-awards-2026` - Clear topic + date
- `wine-tasting` - Action-oriented

❌ **Bad parameter names:**
- `prod-001` - Non-descriptive
- `EstateShiraz2020` - Should be lowercase
- `estate_shiraz` - Use hyphens, not underscores

**SEO Best Practices:**
- Use descriptive slugs (not IDs like "123")
- Include relevant keywords (`shiraz`, `2020`)
- Use hyphens (not underscores or camelCase)
- Keep under 50 characters
- Avoid special characters

---

## 4. Navigation Menus

### 4.1 Main Header Navigation

**Desktop menu structure:**

```
About ▼
  ├─ Our Story
  ├─ The Farm
  ├─ Our Team
  ├─ Awards
  ├─ Sustainability
  └─ News & Stories

Shop ▼
  ├─ Wines
  ├─ Spirits
  ├─ Cheese
  ├─ Gifts
  ├─ All Products
  └─ Promotions

Visit ▼
  ├─ Wine Tasting
  ├─ Cheese Pairing
  ├─ Farm Tour
  ├─ Harvest Experience
  └─ Private Tasting

Events ▼
  ├─ Weddings
  ├─ Corporate Events
  └─ Private Events
```

**Top bar links:**
- Home (logo link)
- About (dropdown)
- Search (icon button)
- Account (icon button)
- Cart (icon button with count)
- Theme Toggle (sun/moon icon)

### 4.2 Mobile Menu

**Hamburger menu (all links):**
```
About
  ├─ Our Story
  ├─ The Farm
  ├─ Our Team
  ├─ Awards
  ├─ Sustainability
  └─ News & Stories

Shop
  ├─ Wines
  ├─ Spirits
  ├─ Cheese
  ├─ Gifts
  ├─ All Products
  └─ Promotions

Visit
  ├─ Wine Tasting
  ├─ Cheese Pairing
  ├─ Farm Tour
  ├─ Harvest Experience
  └─ Private Tasting

Events
  ├─ Weddings
  ├─ Corporate Events
  └─ Private Events

Quick Links
  ├─ Wine Club
  ├─ Contact
  ├─ My Account
  └─ Cart
```

### 4.3 Footer Navigation

**5-column footer:**

**Column 1: About**
- Our Story
- The Farm
- Our Team
- Awards
- Sustainability
- News & Stories
- Careers
- Contact Us

**Column 2: Shop**
- Wines
- Spirits
- Cheese
- Gifts
- Wine Club
- Promotions

**Column 3: Visit**
- Wine Tasting
- Cheese Pairing
- Farm Tour
- Harvest Experience
- Private Tasting
- FAQ

**Column 4: Events**
- Weddings
- Corporate Events
- Private Events
- Venue Information

**Column 5: Legal**
- Privacy Policy
- Terms & Conditions
- Shipping & Returns
- Refund Policy
- FAQ
- Sitemap

**Footer bottom row:**
- Copyright © 2026 Handcrafted Wines
- Sitemap link
- Social media links

---

## 5. Breadcrumbs

### 5.1 Breadcrumb Patterns

**Homepage:**
```
No breadcrumbs
```

**About pages:**
```
Home > Our Story
Home > The Farm
Home > Our Team
```

**Shop pages:**
```
Home > Shop
Home > Shop > Wines
Home > Shop > Wines > Estate Shiraz 2020
Home > Cart
Home > Checkout
```

**Experiences:**
```
Home > Visit
Home > Visit > Wine Tasting
```

**Events:**
```
Home > Events
Home > Events > Weddings
```

### 5.2 Breadcrumb Component

**Location:** `/components/layout/BreadcrumbsBar.tsx`

**Props:**
```tsx
interface BreadcrumbsBarProps {
  items: Array<{
    label: string;
    href?: string; // Optional for last item
  }>;
}
```

**Usage:**
```tsx
<BreadcrumbsBar
  items={[
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'Wines', href: '/shop/wines' },
    { label: 'Estate Shiraz 2020' } // Current page (no href)
  ]}
/>
```

---

## 6. Page Templates

### 6.1 Standard Page Structure

**All pages follow this structure:**

```tsx
<Layout>
  <UnifiedHeader />
  <BreadcrumbsBar items={breadcrumbs} />
  
  <main id="main-content">
    {/* Page content */}
  </main>
  
  <UnifiedFooter />
</Layout>
```

### 6.2 Checkout Pages

**Simplified layout for checkout:**

```tsx
<CheckoutLayout>
  <CheckoutHeader />
  
  <main>
    {/* Checkout content */}
  </main>
  
  <CheckoutFooter />
</CheckoutLayout>
```

---

## 7. Route Aliases

### 7.1 Multiple URLs for Same Page

**Why use aliases?**
- User expectations (common URLs)
- Backward compatibility
- SEO (multiple entry points)

**Current aliases:**

| Primary URL | Alias URL(s) | Page |
|-------------|--------------|------|
| `/experiences` | `/visit` | Experiences |
| `/product/:id` | `/shop/product/:id` | Product Detail |
| `/cart` | `/shop/cart` | Cart |
| `/checkout` | `/shop/checkout` | Checkout |
| `/account` | `/my-account` | My Account |

**Implementation:**

```tsx
// routes.tsx
{ path: '/cart', Component: Cart },
{ path: '/shop/cart', Component: Cart }, // Alias
```

### 7.2 Complete Route Aliases Reference Table

**All 7 alias routes in the system:**

| # | Primary URL | Alias URL(s) | Component | Use Case | Canonical |
|---|-------------|--------------|-----------|----------|-----------|
| 1 | `/experiences` | `/visit` | `Experiences` | User expectation - "visit" is common phrasing | `/experiences` |
| 2 | `/product/:id` | `/shop/product/:id` | `ProductDetail` | SEO - product URLs nested under /shop | `/product/:id` |
| 3 | `/cart` | `/shop/cart` | `Cart` | Consistency - cart accessible from top-level or shop | `/cart` |
| 4 | `/checkout` | `/shop/checkout` | `Checkout` | Consistency - checkout accessible from top-level or shop | `/checkout` |
| 5 | `/account` | `/my-account` | `MyAccount` | User expectation - "my-account" is common pattern | `/account` |
| 6 | `/returns` | `/returns-policy` | `ReturnsPolicy` | SEO - both phrasings commonly searched | `/returns` |
| 7 | `/about/news` | `/news` | `News` | (Not implemented) Future consideration | `/about/news` |

**Canonical URL Strategy:**
- Always set `<link rel="canonical">` to preferred URL
- Use shorter URLs as canonical when possible
- Redirect users to canonical URL when appropriate

**Implementation Pattern:**

```tsx
// routes.tsx - Define both routes
const routes = [
  // Primary route
  { path: '/experiences', Component: Experiences },
  
  // Alias route(s) - same component
  { path: '/visit', Component: Experiences },
];

// In component - Set canonical URL
<Helmet>
  <link rel="canonical" href="https://handcraftedwines.co.za/experiences" />
</Helmet>
```

**Alias Decision Criteria:**

✅ **Create alias when:**
- Users commonly expect alternative URL (e.g., `/visit` for `/experiences`)
- SEO benefit from multiple entry points
- Backward compatibility needed after URL refactor

❌ **Don't create alias when:**
- URLs are nearly identical (e.g., `/shop/wine` vs `/shop/wines`)
- No clear user expectation or SEO benefit
- Creates confusion or content duplication issues

---

## 8. SEO Considerations

### 8.1 Canonical URLs

**Set canonical URL for duplicate content:**

```tsx
// Prefer /product/:id over /shop/product/:id
<link rel="canonical" href="https://handcraftedwines.co.za/product/shiraz-2020" />
```

### 8.2 Page Titles

**Format:** `[Page Name] - Handcrafted Wines`

```
Estate Shiraz 2020 - Handcrafted Wines
Our Story - Handcrafted Wines
Wine Tasting - Handcrafted Wines
```

### 8.3 Meta Descriptions

**Unique per page:**
- Homepage: "Boutique wine farm in Paarl, South Africa. 106 years of handcrafting award-winning wines, craft spirits, and artisan cheese."
- Product: "[Product name]. [Tasting notes]. [Awards]. Order online."
- Category: "Shop our [category] - [count] handcrafted products from our family farm."

---

## 9. Analytics & Tracking

### 9.1 Page View Tracking

**Track route changes:**

```tsx
const location = useLocation();

useEffect(() => {
  // Track page view
  analytics.pageView(location.pathname);
}, [location]);
```

### 9.2 Event Tracking

**Key events to track:**
- Add to Cart
- Remove from Cart
- Checkout Started
- Order Completed
- Newsletter Signup
- Experience Booking Request
- Contact Form Submission

---

## 10. Summary

### 10.1 Page Count

| Section | Pages | Notes |
|---------|-------|-------|
| Main | 4 | Home, Sitemap, Search, 404 |
| About | 10 | Our Story, Farm, Team, etc. |
| Shop | 12 | Categories, product, cart, checkout |
| Experiences | 6 | Tastings, tours, experiences |
| Events | 5 | Weddings, corporate, private |
| Legal | 6 | Privacy, Terms, Accessibility, etc. |
| Developer | 2 | Component library, demos |
| **Total Unique** | **45** | **Unique pages** |
| **+ Aliases** | **+7** | **Alternative URLs** |
| **Grand Total** | **52** | **All registered routes** |

### 10.2 Dynamic Routes

- Product Detail: 17 products (6 wines + 3 spirits + 4 cheeses + 4 gifts)
- News Posts: Variable (content managed)
- Search Results: Infinite variations

### 10.3 Key Files

- **Routes:** `/routes.tsx` (all route definitions)
- **Sitemap Page:** `/pages/Sitemap.tsx` (visual sitemap)
- **Header:** `/components/layout/UnifiedHeader.tsx` (main nav)
- **Footer:** `/components/layout/UnifiedFooter.tsx` (footer nav)
- **Breadcrumbs:** `/components/layout/BreadcrumbsBar.tsx`

---

**Maintained by:** Handcrafted Wines Development Team  
**Last Review:** March 15, 2026  
**Next Review:** Quarterly or after major site changes