# eCommerce Pages Updates

## Overview

Complete guide to accessing and implementing the WooCommerce-aligned eCommerce pages with distraction-free layouts, breadcrumbs, and proper routing.

## Page Locations

### Current (WooCommerce-Aligned)
- `/pages/shop/Cart.tsx` - ✅ Updated with Layout wrapper
- `/pages/shop/Checkout.tsx` - **Needs CheckoutLayout wrapper**
- `/pages/shop/OrderConfirmation.tsx` - **Needs CheckoutLayout wrapper**

### Hand-Drawn Versions (Alternative)
- `/pages/shop/CartHanddrawn.tsx` - ✅ Created (base copy)
- `/pages/shop/CheckoutHanddrawn.tsx` - **To be created**
- `/pages/shop/OrderConfirmationHanddrawn.tsx` - **To be created**

## Access URLs

### Standard eCommerce Flow
- **Cart**: `/cart` or `/shop/cart`
- **Checkout**: `/checkout` or `/shop/checkout`
- **Order Confirmation**: `/order-received?order=12345`

### Hand-Drawn Flow (Future)
- **Cart**: `/shop/cart-handdrawn`
- **Checkout**: `/shop/checkout-handdrawn`
- **Order Confirmation**: `/order-received-handdrawn?order=12345`

## ✅ Completed Changes

### 1. **CheckoutLayout Component** (`/components/layout/CheckoutLayout.tsx`)
Created distraction-free layout for checkout flow:
- Minimal header with logo + "Secure Checkout" + support link
- No navigation menus (reduces abandonment)
- Trust badges in footer
- Simplified copyright and legal links
- Optional "Continue Shopping" link

### 2. **Cart Page** (`/pages/shop/Cart.tsx`)
- ✅ Wrapped with `Layout` component
- ✅ Uses full site header and footer
- ✅ Maintains e-commerce functionality
- ✅ Ready for breadcrumbs (see instructions below)

## 🔄 Pending Changes

### 1. **Checkout Page** (`/pages/shop/Checkout.tsx`)

**Update needed:**
```tsx
// Current (line 56):
import { useNavigate } from 'react-router';

// Change to:
import { useNavigate } from 'react-router';
import { CheckoutLayout } from '../../components/layout/CheckoutLayout';

// Current (line 263):
return (
  <>
    {/* SEO Meta Tags */}
    <title>Checkout - Handcrafted Wines</title>
    {/* ... rest of page ... */}
  </>
);

// Change to:
return (
  <CheckoutLayout>
    {/* SEO Meta Tags */}
    <title>Checkout - Handcrafted Wines</title>
    {/* ... rest of page ... */}
  </CheckoutLayout>
);
```

### 2. **OrderConfirmation Page** (`/pages/shop/OrderConfirmation.tsx`)

**Update needed:**
```tsx
// Current (line 49):
import { useNavigate, useSearchParams } from 'react-router';

// Change to:
import { useNavigate, useSearchParams } from 'react-router';
import { CheckoutLayout } from '../../components/layout/CheckoutLayout';

// Current (line 165):
return (
  <>
    {/* SEO Meta Tags */}
    <title>Order Confirmation #{orderNumber} - Handcrafted Wines</title>
    {/* ... rest of page ... */}
  </>
);

// Change to:
return (
  <CheckoutLayout showBackToShop={true}>
    {/* SEO Meta Tags */}
    <title>Order Confirmation #{orderNumber} - Handcrafted Wines</title>
    {/* ... rest of page ... */}
  </CheckoutLayout>
);
```

## Breadcrumbs Implementation

### For Cart Page

Add breadcrumbs at the top of the page (after Layout opens, before main content):

```tsx
return (
  <Layout>
    <title>Shopping Cart - Handcrafted Wines</title>
    <meta name="description" content="Review your shopping cart" />

    {/* Breadcrumbs */}
    <section className="bg-[var(--twb-color-bg-secondary)] py-3 border-b border-[var(--twb-color-border-primary)]">
      <Container variant="wide">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link to="/" className="text-[var(--twb-color-text-secondary)] hover:text-[var(--twb-color-plum)]">
                Home
              </Link>
            </li>
            <li className="text-[var(--twb-color-text-secondary)]">/</li>
            <li>
              <Link to="/shop" className="text-[var(--twb-color-text-secondary)] hover:text-[var(--twb-color-plum)]">
                Shop
              </Link>
            </li>
            <li className="text-[var(--twb-color-text-secondary)]">/</li>
            <li className="text-[var(--twb-color-text-primary)] font-semibold">Cart</li>
          </ol>
        </nav>
      </Container>
    </section>

    {/* Cart Page */}
    <section className="bg-[var(--twb-color-bg-primary)] py-[var(--twb-spacing-section-y)]">
      {/* ... existing content ... */}
    </section>
  </Layout>
);
```

### For Checkout Page

```tsx
<CheckoutLayout>
  <title>Checkout - Handcrafted Wines</title>
  
  {/* Breadcrumbs */}
  <section className="bg-[var(--twb-color-bg-secondary)] py-3 border-b border-[var(--twb-color-border-primary)]">
    <Container variant="wide">
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm">
          <li>
            <Link to="/" className="text-[var(--twb-color-text-secondary)] hover:text-[var(--twb-color-plum)]">
              Home
            </Link>
          </li>
          <li className="text-[var(--twb-color-text-secondary)]">/</li>
          <li>
            <Link to="/shop" className="text-[var(--twb-color-text-secondary)] hover:text-[var(--twb-color-plum)]">
              Shop
            </Link>
          </li>
          <li className="text-[var(--twb-color-text-secondary)]">/</li>
          <li>
            <Link to="/cart" className="text-[var(--twb-color-text-secondary)] hover:text-[var(--twb-color-plum)]">
              Cart
            </Link>
          </li>
          <li className="text-[var(--twb-color-text-secondary)]">/</li>
          <li className="text-[var(--twb-color-text-primary)] font-semibold">Checkout</li>
        </ol>
      </nav>
    </Container>
  </section>

  {/* Checkout Page */}
  <section className="bg-[var(--twb-color-bg-primary)] py-[var(--twb-spacing-section-y)]">
    {/* ... existing content ... */}
  </section>
</CheckoutLayout>
```

### For Order Confirmation Page

```tsx
<CheckoutLayout showBackToShop={true}>
  <title>Order Confirmation - Handcrafted Wines</title>
  
  {/* Breadcrumbs */}
  <section className="bg-[var(--twb-color-bg-secondary)] py-3 border-b border-[var(--twb-color-border-primary)]">
    <Container variant="wide">
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm">
          <li>
            <Link to="/" className="text-[var(--twb-color-text-secondary)] hover:text-[var(--twb-color-plum)]">
              Home
            </Link>
          </li>
          <li className="text-[var(--twb-color-text-secondary)]">/</li>
          <li>
            <Link to="/shop" className="text-[var(--twb-color-text-secondary)] hover:text-[var(--twb-color-plum)]">
              Shop
            </Link>
          </li>
          <li className="text-[var(--twb-color-text-secondary)]">/</li>
          <li className="text-[var(--twb-color-text-primary)] font-semibold">Order Confirmation</li>
        </ol>
      </nav>
    </Container>
  </section>

  {/* Order Confirmation Page */}
  <section className="bg-[var(--twb-color-bg-primary)] py-[var(--twb-spacing-section-y)]">
    {/* ... existing content ... */}
  </section>
</CheckoutLayout>
```

## Sitemap Updates Needed

Add eCommerce routes to `/pages/Sitemap.tsx`:

```tsx
const routes = [
  // ... existing routes ...
  
  // Shop Routes
  {
    label: 'Shop',
    path: '/shop',
    children: [
      { label: 'All Products', path: '/shop' },
      { label: 'Wines', path: '/shop/wines' },
      { label: 'Spirits', path: '/shop/spirits' },
      { label: 'Cheese', path: '/shop/cheese' },
      { label: 'Gifts', path: '/shop/gifts' },
      { label: 'Shopping Cart', path: '/cart' },
      { label: 'Checkout', path: '/checkout' },
      { label: 'My Account', path: '/account' },
      { label: 'Shop FAQ', path: '/shop/faq' }
    ]
  },

  // ... rest of routes ...
];
```

## Routes Already Configured

The following routes are already active in `/routes.tsx`:

```tsx
{ path: '/cart', Component: Cart },
{ path: '/shop/cart', Component: Cart },
{ path: '/checkout', Component: Checkout },
{ path: '/shop/checkout', Component: Checkout },
{ path: '/order-received', Component: OrderConfirmation },
```

## Additional Routes Needed

For hand-drawn versions (future):

```tsx
// Add to routes.tsx
import { CartHanddrawn } from './pages/shop/CartHanddrawn';
import { CheckoutHanddrawn } from './pages/shop/CheckoutHanddrawn';
import { OrderConfirmationHanddrawn } from './pages/shop/OrderConfirmationHanddrawn';

// Routes
{ path: '/shop/cart-handdrawn', Component: CartHanddrawn },
{ path: '/shop/checkout-handdrawn', Component: CheckoutHanddrawn },
{ path: '/order-received-handdrawn', Component: OrderConfirmationHanddrawn },
```

## Design Principles

### Why Distraction-Free Checkout?

Research shows that:
- Simplified checkout reduces cart abandonment by 20-30%
- Removing navigation reduces decision fatigue
- Trust badges increase conversion rates
- Mobile-first checkout is critical

### CheckoutLayout Features

✅ **Minimal header**
- Logo (builds trust)
- "Secure Checkout" badge (reduces anxiety)
- Support phone number (quick help access)

✅ **Minimal footer**
- Trust badges (secure payment, safe checkout)
- Contact info (phone + email)
- Essential legal links only
- Optional "Continue Shopping" for confirmation page

✅ **What's removed**
- Main navigation menus
- Category dropdowns
- Search bar
- Social media links
- Newsletter signup
- "You may also like" sections (until confirmation page)

## Testing Checklist

### Cart Page
- [ ] Breadcrumbs display correctly
- [ ] Layout wrapper shows full header/footer
- [ ] Add/remove items works
- [ ] Quantity updates calculate correctly
- [ ] Free shipping indicator updates
- [ ] "Proceed to Checkout" navigates to `/checkout`
- [ ] Mobile responsive

### Checkout Page
- [ ] CheckoutLayout shows minimal header
- [ ] Breadcrumbs display correctly
- [ ] No main navigation visible
- [ ] Trust badges in footer
- [ ] Multi-step form works
- [ ] Order summary sticky on desktop
- [ ] "Place Order" navigates to `/order-received`
- [ ] Mobile responsive

### Order Confirmation Page
- [ ] CheckoutLayout shows minimal header
- [ ] Breadcrumbs display correctly
- [ ] Order details display correctly
- [ ] "Continue Shopping" link works
- [ ] Print order button works
- [ ] Related products show (optional)
- [ ] Mobile responsive

## Accessibility Compliance

All eCommerce pages must maintain:
- **WCAG 2.1 AA contrast** (4.5:1 for normal text)
- **Keyboard navigation** (Tab/Shift+Tab through all interactive elements)
- **Screen reader support** (all form fields labeled)
- **Focus indicators** (visible focus rings)
- **Error messaging** (clear, descriptive validation errors)

## Next Steps

1. **Update Checkout.tsx** - Add CheckoutLayout wrapper + breadcrumbs
2. **Update OrderConfirmation.tsx** - Add CheckoutLayout wrapper + breadcrumbs
3. **Update Cart.tsx** - Add breadcrumbs
4. **Update Sitemap.tsx** - Add Shop routes
5. **Test checkout flow** - Cart → Checkout → Confirmation
6. **Accessibility audit** - WCAG 2.1 AA compliance check
7. **Mobile testing** - Test on actual devices

---

**Created**: 2026-03-15  
**Status**: Cart updated, Checkout + OrderConfirmation pending  
**Priority**: High (checkout flow is critical for revenue)
