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
│  ├─ Harvest Experience (/experiences/harvest)
│  ├─ Private Tasting (/experiences/private)
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
├─ UTILITY PAGES
│  ├─ Search Results (/search)
│  ├─ Sitemap (/sitemap)
│  ├─ Privacy Policy (/privacy)
│  ├─ Terms & Conditions (/terms)
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

---

### 2.4 Experiences Section (/experiences/*)

| Page | URL | Component | Description |
|------|-----|-----------|-------------|
| Experiences Home | `/experiences` | `Experiences` | Visit landing page |
| Experiences (alt) | `/visit` | `Experiences` | Alias route |
| Wine Tasting | `/experiences/wine-tasting` | `WineTasting` | Wine tasting details |
| Cheese Pairing | `/experiences/cheese-pairing` | `CheesePairing` | Cheese & wine pairing |
| Farm Tour | `/experiences/farm-tour` | `FarmTour` | Full farm tour |
| Harvest Experience | `/experiences/harvest` | `HarvestExperience` | Seasonal harvest |
| Private Tasting | `/experiences/private` | `PrivateTasting` | Private events |
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
| **Total** | **37** | **Unique pages** |
| **+ Aliases** | **+5** | **Alternative URLs** |
| **Grand Total** | **42** | **All routes** |

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