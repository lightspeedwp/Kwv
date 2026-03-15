# Routing Guidelines

**Version:** 1.0  
**Last Updated:** March 15, 2026  
**Status:** Active  
**Applies To:** All Handcrafted Wines navigation and routing

---

## Overview

Handcrafted Wines uses React Router Data Mode for client-side routing. This document defines routing patterns, URL structures, and navigation best practices for the single-page application.

**Router:** `react-router` package (NOT `react-router-dom` - not supported in this environment)

---

## Quick Reference

### Essential Imports

```tsx
// Router setup
import { createBrowserRouter, RouterProvider } from 'react-router';

// Navigation hooks
import { useNavigate, useParams, useSearchParams, useLocation } from 'react-router';

// Navigation components
import { Link, NavLink } from 'react-router';
```

### Common Patterns

| Pattern | Example | Use Case |
|---------|---------|----------|
| Static route | `/about` | Fixed URL path |
| Dynamic route | `/product/:id` | Variable segments |
| Search params | `/shop?category=wines` | Filters, sorting |
| Hash routes | `/shop#reviews` | Page anchors |
| Nested routes | `/experiences/*` | Sub-pages |

---

## 1. Router Configuration

### 1.1 Router Setup

**File:** `/routes.tsx`

```tsx
import { createBrowserRouter } from 'react-router';

// Import page components
import { HomePage } from './pages/HomePage';
import { About } from './pages/company/About';
import { ShopHome } from './pages/shop/ShopHome';

// Create router configuration
export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: 'about', Component: About },
      { path: 'shop', Component: ShopHome },
      { path: '*', Component: NotFound }
    ]
  }
]);
```

**File:** `/App.tsx`

```tsx
import { RouterProvider } from 'react-router';
import { router } from './routes';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
```

### 1.2 Data Mode Pattern

**Use Data Mode for complex applications:**

```tsx
export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: HomePage
      },
      {
        path: 'shop',
        Component: ShopLayout,
        children: [
          { index: true, Component: ShopHome },
          { path: 'wines', Component: WinesCategory },
          { path: 'spirits', Component: SpiritsCategory }
        ]
      }
    ]
  }
]);
```

---

## 2. Route Structure

### 2.1 URL Naming Conventions

**Use lowercase, kebab-case for URLs:**

```
✅ Good:
/about
/shop/wines
/product/estate-shiraz-2020
/experiences/wine-tasting

❌ Bad:
/About                    (uppercase)
/shop/Wines              (uppercase)
/product/EstateSHIRAZ    (mixed case)
/experiences/wine_tasting (underscore)
```

### 2.2 Handcrafted Wines Route Map

**Complete route structure:**

```tsx
// ============================================
// Main Routes
// ============================================
/                           → HomePage
/about                      → About
/sitemap                    → Sitemap

// ============================================
// Company Routes (/about/*)
// ============================================
/about/farm                 → AboutFarm
/about/team                 → AboutTeam
/about/awards               → Awards
/about/sustainability       → Sustainability
/about/news                 → News
/about/news/:slug           → NewsPost

// ============================================
// Shop Routes (/shop/*)
// ============================================
/shop                       → ShopHome
/shop/wines                 → WinesCategory
/shop/spirits               → SpiritsCategory
/shop/cheese                → CheeseCategory
/shop/gifts                 → GiftsCategory
/shop/all                   → Shop (all products)
/shop/search                → ProductSearchResults
/shop/promotions            → ShopPromotions
/shop/faq                   → ShopFAQ

// Product routes
/product/:id                → ProductDetail
/shop/product/:id           → ProductDetail (alias)

// Cart & Checkout
/cart                       → Cart
/shop/cart                  → Cart (alias)
/checkout                   → Checkout
/shop/checkout              → Checkout (alias)
/order-received             → OrderConfirmation

// Account
/account                    → MyAccount
/my-account                 → MyAccount (alias)

// ============================================
// Experience Routes (/experiences/*)
// ============================================
/experiences                → Experiences
/visit                      → Experiences (alias)
/experiences/wine-tasting   → WineTasting
/experiences/cheese-pairing → CheesePairing
/experiences/farm-tour      → FarmTour
/experiences/faq            → ExperiencesFAQ

// ============================================
// Event Routes (/events/*)
// ============================================
/events                     → Events
/events/weddings            → Weddings
/events/corporate           → CorporateEvents
/events/private             → PrivateEvents

// ============================================
// Utility Routes
// ============================================
/search                     → SearchResults
/404                        → NotFound
/*                          → NotFound (catch-all)
```

---

## 3. Navigation Components

### 3.1 Link Component

**Use `<Link>` for internal navigation:**

```tsx
import { Link } from 'react-router';

// ✅ Good - Internal link
<Link to="/shop/wines">Browse Wines</Link>

// ❌ Bad - <a> tag for internal routes (causes full page reload)
<a href="/shop/wines">Browse Wines</a>

// ✅ Good - External link (use <a>)
<a href="https://external-site.com" target="_blank" rel="noopener">
  External Link
</a>
```

**Link with state:**

```tsx
<Link 
  to="/product/shiraz-2020" 
  state={{ from: 'category-page' }}
>
  View Product
</Link>
```

### 3.2 NavLink Component

**Use `<NavLink>` for navigation menus (adds active state):**

```tsx
import { NavLink } from 'react-router';

<NavLink 
  to="/shop"
  className={({ isActive }) => 
    isActive ? 'nav-link active' : 'nav-link'
  }
>
  Shop
</NavLink>

// Or with aria-current for accessibility
<NavLink 
  to="/shop"
  className="nav-link"
  aria-current={({ isActive }) => isActive ? 'page' : undefined}
>
  Shop
</NavLink>
```

### 3.3 Programmatic Navigation

**Use `useNavigate` hook for programmatic navigation:**

```tsx
import { useNavigate } from 'react-router';

const AddToCartButton = ({ product }) => {
  const navigate = useNavigate();
  
  const handleAddToCart = () => {
    addToCart(product);
    navigate('/cart'); // Navigate after action
  };
  
  return <button onClick={handleAddToCart}>Add to Cart</button>;
};
```

**Navigate with options:**

```tsx
// Replace current entry (no back button)
navigate('/login', { replace: true });

// Navigate with state
navigate('/checkout', { state: { from: '/cart' } });

// Navigate back
navigate(-1); // Go back one page
navigate(-2); // Go back two pages
```

---

## 4. Route Parameters

### 4.1 Dynamic Routes

**Define dynamic segments with `:param`:**

```tsx
// routes.tsx
{
  path: '/product/:id',
  Component: ProductDetail
}

// Usage
<Link to="/product/estate-shiraz-2020">View Product</Link>
```

**Access params in component:**

```tsx
import { useParams } from 'react-router';

const ProductDetail = () => {
  const { id } = useParams(); // "estate-shiraz-2020"
  
  return <div>Product ID: {id}</div>;
};
```

### 4.2 Multiple Parameters

```tsx
// routes.tsx
{
  path: '/shop/:category/:subcategory',
  Component: CategoryPage
}

// Component
const CategoryPage = () => {
  const { category, subcategory } = useParams();
  // category: "wines"
  // subcategory: "red"
  
  return <div>{category} / {subcategory}</div>;
};
```

### 4.3 Optional Parameters

**Use `?` for optional segments:**

```tsx
{
  path: '/shop/:category/:subcategory?',
  Component: CategoryPage
}

// Works for both:
/shop/wines           → category: "wines", subcategory: undefined
/shop/wines/red       → category: "wines", subcategory: "red"
```

---

## 5. Search Parameters (Query Strings)

### 5.1 Reading Search Params

**Use `useSearchParams` hook:**

```tsx
import { useSearchParams } from 'react-router';

const ProductListing = () => {
  const [searchParams] = useSearchParams();
  
  const category = searchParams.get('category'); // ?category=wines
  const sort = searchParams.get('sort');         // &sort=price
  const page = searchParams.get('page') || '1';  // &page=2
  
  return <div>Filtering by: {category}</div>;
};
```

### 5.2 Setting Search Params

**Update search params without full page reload:**

```tsx
const ProductFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const handleFilterChange = (category: string) => {
    setSearchParams({ category }); // Sets ?category=wines
  };
  
  const handleSortChange = (sort: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('sort', sort); // Preserve other params
    setSearchParams(params);
  };
  
  return (
    <select onChange={(e) => handleSortChange(e.target.value)}>
      <option value="name">Name</option>
      <option value="price">Price</option>
    </select>
  );
};
```

### 5.3 Common Search Param Patterns

**Filtering:**
```
/shop/wines?type=red&vintage=2020&region=stellenbosch
```

**Sorting:**
```
/shop?sort=price&order=asc
```

**Pagination:**
```
/shop?page=2&limit=12
```

**Search:**
```
/search?q=shiraz&category=wines
```

---

## 6. Nested Routes

### 6.1 Parent-Child Routes

**Define nested routes:**

```tsx
{
  path: '/shop',
  Component: ShopLayout, // Parent
  children: [
    { index: true, Component: ShopHome },
    { path: 'wines', Component: WinesCategory },
    { path: 'spirits', Component: SpiritsCategory }
  ]
}
```

**Parent component renders children:**

```tsx
import { Outlet } from 'react-router';

const ShopLayout = () => {
  return (
    <div>
      <ShopHeader />
      <Outlet /> {/* Child routes render here */}
      <ShopFooter />
    </div>
  );
};
```

### 6.2 Index Routes

**Index route = default child:**

```tsx
{
  path: '/experiences',
  Component: ExperiencesLayout,
  children: [
    { index: true, Component: ExperiencesHome }, // /experiences
    { path: 'wine-tasting', Component: WineTasting }, // /experiences/wine-tasting
  ]
}
```

---

## 7. Protected Routes

### 7.1 Authentication Guard

**Redirect unauthenticated users:**

```tsx
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  return <>{children}</>;
};

// Usage in routes
{
  path: '/account',
  Component: () => (
    <ProtectedRoute>
      <MyAccount />
    </ProtectedRoute>
  )
}
```

### 7.2 Role-Based Access

```tsx
const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  
  if (!user?.isAdmin) {
    return <Navigate to="/" replace />;
  }
  
  return <>{children}</>;
};
```

---

## 8. Error Handling

### 8.1 404 Not Found

**Catch-all route for 404:**

```tsx
export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { path: '/', Component: HomePage },
      { path: '/about', Component: About },
      { path: '*', Component: NotFound } // Catch-all
    ]
  }
]);
```

**404 Component:**

```tsx
const NotFound = () => {
  const navigate = useNavigate();
  
  return (
    <div className="text-center py-20">
      <Typography variant="h1">404 - Page Not Found</Typography>
      <Typography variant="body">
        Sorry, the page you're looking for doesn't exist.
      </Typography>
      <Button onClick={() => navigate('/')}>
        Return Home
      </Button>
    </div>
  );
};
```

### 8.2 Error Boundaries

**Use errorElement for route errors:**

```tsx
{
  path: '/shop',
  Component: ShopHome,
  errorElement: <ErrorPage />
}
```

**Error component:**

```tsx
import { useRouteError } from 'react-router';

const ErrorPage = () => {
  const error = useRouteError();
  
  return (
    <div>
      <h1>Oops! Something went wrong</h1>
      <p>{error?.message || 'Unknown error'}</p>
    </div>
  );
};
```

---

## 9. Navigation Best Practices

### 9.1 Never Use window.location

```tsx
// ❌ Bad - Causes full page reload
<button onClick={() => window.location.href = '/shop'}>
  Go to Shop
</button>

// ✅ Good - SPA navigation
const navigate = useNavigate();
<button onClick={() => navigate('/shop')}>
  Go to Shop
</button>
```

### 9.2 Use Relative Links

```tsx
// If current path is /shop/wines

// ✅ Good - Relative
<Link to="../spirits">Spirits</Link> // → /shop/spirits
<Link to="./red">Red Wines</Link>   // → /shop/wines/red

// ✅ Also good - Absolute
<Link to="/shop/spirits">Spirits</Link>
```

### 9.3 Preserve State on Navigation

```tsx
// Pass state through navigation
const navigate = useNavigate();

navigate('/product/shiraz-2020', {
  state: { 
    from: 'category-page',
    scroll: window.scrollY
  }
});

// Access state in destination
const location = useLocation();
const { from, scroll } = location.state || {};
```

---

## 10. SEO & Meta Tags

### 10.1 Dynamic Page Titles

**Update title on route change:**

```tsx
const ProductDetail = () => {
  const { id } = useParams();
  const product = getProduct(id);
  
  useEffect(() => {
    document.title = `${product.name} - Handcrafted Wines`;
  }, [product]);
  
  return <div>...</div>;
};
```

### 10.2 Meta Tags

**Update meta description:**

```tsx
useEffect(() => {
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', product.description);
  }
}, [product]);
```

### 10.3 Canonical URLs

**Use canonical URLs for duplicate content:**

```tsx
// Both /product/:id and /shop/product/:id exist
// Set canonical to preferred URL

useEffect(() => {
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute('href', `https://handcraftedwines.co.za/product/${id}`);
  }
}, [id]);
```

---

## 11. Scroll Behavior

### 11.1 Scroll to Top on Route Change

**Reset scroll position:**

```tsx
const ScrollToTop = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return null;
};

// Add to App.tsx
<Router>
  <ScrollToTop />
  <Routes>...</Routes>
</Router>
```

### 11.2 Preserve Scroll Position

**Restore scroll on back button:**

```tsx
const ScrollRestoration = () => {
  const location = useLocation();
  const scrollPositions = useRef<Record<string, number>>({});
  
  useEffect(() => {
    // Save scroll position
    scrollPositions.current[location.key] = window.scrollY;
    
    // Restore scroll position
    const savedPosition = scrollPositions.current[location.key];
    if (savedPosition !== undefined) {
      window.scrollTo(0, savedPosition);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
  
  return null;
};
```

### 11.3 Scroll to Hash/Anchor

**Scroll to #anchor on load:**

```tsx
useEffect(() => {
  if (location.hash) {
    const element = document.querySelector(location.hash);
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}, [location]);
```

---

## 12. Route Transitions

### 12.1 Loading States

**Show loading indicator during navigation:**

```tsx
const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [location]);
  
  return (
    <>
      {isLoading && <LoadingBar />}
      <Outlet />
    </>
  );
};
```

### 12.2 Page Transitions

**Animate route changes:**

```tsx
import { motion } from 'motion/react';

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};
```

---

## 13. URL Structure Best Practices

### 13.1 Meaningful URLs

```
✅ Good:
/product/estate-shiraz-2020
/shop/wines/red
/about/team

❌ Bad:
/product/123456
/p?id=xyz
/page?name=team
```

### 13.2 Consistent Pluralization

```
✅ Good (plural):
/products
/wines
/experiences
/events

❌ Bad (mixed):
/product
/wine
/experience
```

### 13.3 Avoid Deep Nesting

```
✅ Good (2-3 levels max):
/shop/wines/estate-shiraz-2020

❌ Bad (too deep):
/shop/category/wines/subcategory/red/product/estate-shiraz-2020
```

---

## 14. Testing Routes

### 14.1 Manual Testing Checklist

- [ ] All links navigate correctly
- [ ] Back button works
- [ ] Forward button works
- [ ] Direct URL access works
- [ ] 404 page shows for invalid URLs
- [ ] Search params persist on refresh
- [ ] Scroll position resets on navigation
- [ ] Page title updates on navigation

### 14.2 Common Issues

**Issue:** Link causes full page reload

**Solution:** Use `<Link>` instead of `<a>` for internal routes

---

**Issue:** Route params undefined

**Solution:** Ensure route is defined with `:param` syntax

---

**Issue:** 404 on page refresh

**Solution:** Configure server to serve index.html for all routes

---

## 15. Resources

- [React Router Documentation](https://reactrouter.com/)
- [React Router Data Mode](https://reactrouter.com/en/main/routers/create-browser-router)
- [URL Design Best Practices](https://www.w3.org/Provider/Style/URI)

---

**Maintained by:** Handcrafted Wines Development Team  
**Last Review:** March 15, 2026  
**Next Review:** Quarterly
