# Site Structure & Sitemap

**Category:** Architecture | **Domain:** Sitemap | **Version:** 1.0 | **Last Updated:** 2024-03-13

---

## High-Level Sitemap

```
TheWireBrand.co.za
├─ Home (Main site)
│  ├─ About (Our Story, The Winemaker, Vineyard & Cellar, Awards)
│  ├─ News & Stories (Listing + Single Post)
│  ├─ Visit Us (/experiences)
│  │  ├─ Wine Tastings
│  │  ├─ Vineyard Tours
│  │  └─ Events
│  ├─ FAQ
│  ├─ Contact Us
│  └─ Legal (Terms & Conditions, Privacy Policy)
│
├─ Shop (/shop)
│  ├─ Shop Homepage
│  ├─ Wines (Red, White, Rosé, Sparkling)
│  │  └─ Single Product
│  ├─ The Wire Box (Subscription)
│  ├─ Cart
│  ├─ Checkout
│  ├─ Order Confirmation
│  ├─ My Account
│  ├─ Shop FAQ
│  └─ Shop Legal
│
└─ The Wire Box (Subscription Landing)
```

---

## Corporate Pages

| Page | URL | Template | React Route |
|------|-----|----------|-------------|
| Home | `/` | `front-page` | `HomePage` |
| About | `/about/` | `page` | `AboutPage` |
| News Listing | `/news/` | `archive` | `NewsListingPage` |
| News Single | `/news/:slug/` | `single` | `NewsDetailPage` |
| Experiences | `/experiences/` | `page` | `ExperiencesLandingPage` |
| FAQ | `/faq/` | `page` | `FAQPage` |
| Contact | `/contact/` | `page` | `ContactPage` |
| Legal | `/legal/terms/` | `page` | `LegalTermsPage` |

---

## Shop Pages

| Page | URL | Template | React Route |
|------|-----|----------|-------------|
| Shop Home | `/shop/` | `page` | `ShopHomePage` |
| Product Category | `/shop/wines/` | `archive-product` | `ShopCategoryPage` |
| Single Product | `/shop/product/:slug/` | `single-product` | `ProductDetailPage` |
| Cart | `/shop/cart/` | `page-cart` | `CartPage` |
| Checkout | `/shop/checkout/` | `page-checkout` | `CheckoutPage` |
| Order Confirmation | `/shop/order-confirmation/` | `order-confirmation` | `OrderConfirmationPage` |
| My Account | `/shop/my-account/` | `my-account` | `MyAccountDashboardPage` |

---

## Key Sections by Page

### Homepage
- Hero (seasonal campaign)
- Our Brands grid
- Latest News
- Visit Us teaser
- Newsletter

### Product Page
- Gallery + Breadcrumbs
- Title, Price, Add to Cart
- Tasting Notes
- Tabs (Description, Reviews)
- Related Products

### Checkout
- Contact Info
- Billing Address
- Shipping Method
- Payment
- Order Summary

---

## URL Structure

**Corporate**: `/:page-slug/`  
**Shop**: `/shop/:category/:product-slug/`  
**News**: `/news/:post-slug/`  
**Experiences**: `/experiences/:experience-slug/`

---

**For complete page blueprints and sections, see original Guidelines.md (Section 4).**

**Maintained by:** Architecture Team  
**Next Review:** 2024-04-13
