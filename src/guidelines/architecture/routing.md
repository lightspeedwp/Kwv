# Routing Guidelines

**Category:** Architecture  
**Domain:** React Router & Navigation  
**Version:** 1.0  
**Last Updated:** 2024-03-13  
**Status:** Active

---

## Overview

The Wire Brand uses React Router Data mode for client-side routing. All navigation must use React Router's Link component or useNavigate hook to maintain SPA (Single Page Application) state.

**Key Requirements:**
- Use `react-router` package (NOT `react-router-dom`)
- React Router Data mode (`createBrowserRouter`, `RouterProvider`)
- Never use `window.location` or `<a>` tags for internal routes
- Nested routes for layouts
- Lazy loading for performance

---

## Package Note

**❌ Do NOT use:** `react-router-dom`  
**✅ Use:** `react-router`

```tsx
// ✅ Correct
import { Link, useNavigate, createBrowserRouter, RouterProvider } from 'react-router';

// ❌ Wrong
import { Link } from 'react-router-dom'; // Not supported in this environment
```

---

## Router Configuration

### App.tsx (Entry Point)

```tsx
import { RouterProvider } from 'react-router';
import { router } from './routes';

export default function App() {
  return <RouterProvider router={router} />;
}
```

### routes.tsx (Router Definition)

```tsx
import { createBrowserRouter } from 'react-router';
import Layout from './components/layout/Layout';
import Home from './pages/company/Home';
import Wines from './pages/shop/Wines';
import WineDetail from './pages/shop/WineDetail';
import Cart from './pages/shop/Cart';
import Checkout from './pages/shop/Checkout';
import About from './pages/company/About';
import NotFound from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout, // Wrapper layout
    children: [
      {
        index: true, // Default child route (renders at parent path)
        Component: Home,
      },
      {
        path: 'wines',
        Component: Wines,
      },
      {
        path: 'wines/:id',
        Component: WineDetail,
      },
      {
        path: 'cart',
        Component: Cart,
      },
      {
        path: 'checkout',
        Component: Checkout,
      },
      {
        path: 'about',
        Component: About,
      },
      {
        path: '*', // Catch-all for 404
        Component: NotFound,
      },
    ],
  },
]);
```

---

## Navigation Methods

### Link Component (Preferred for Links)

**Use for:** Navigation triggered by user clicks

```tsx
import { Link } from 'react-router';

// Simple link
<Link to="/wines">View Wines</Link>

// Link with styling
<Link
  to="/wines"
  className="text-[var(--twb-color-plum)] hover:underline"
>
  View Wines
</Link>

// Dynamic link
<Link to={`/wines/${wine.id}`}>
  {wine.name}
</Link>

// Link with state (pass data to next route)
<Link
  to="/checkout"
  state={{ from: '/cart', items: cartItems }}
>
  Proceed to Checkout
</Link>
```

### useNavigate Hook (Programmatic Navigation)

**Use for:** Navigation after actions (form submit, button click)

```tsx
import { useNavigate } from 'react-router';

function AddToCartButton({ wine }) {
  const navigate = useNavigate();
  
  const handleAddToCart = () => {
    addToCart(wine);
    
    // Navigate to cart
    navigate('/cart');
    
    // Or navigate with state
    navigate('/cart', { state: { justAdded: wine.id } });
    
    // Or go back
    navigate(-1); // Browser back
  };
  
  return (
    <button onClick={handleAddToCart}>
      Add to Cart
    </button>
  );
}
```

### Navigation Options

```tsx
const navigate = useNavigate();

// Simple navigation
navigate('/wines');

// Navigate with query params
navigate('/wines?category=red&sort=price');

// Navigate with state
navigate('/checkout', { state: { from: '/cart' } });

// Replace (don't add to history)
navigate('/login', { replace: true });

// Go back
navigate(-1);

// Go forward
navigate(1);
```

---

## Route Parameters

### Dynamic Routes

```tsx
// routes.tsx
{
  path: 'wines/:id',
  Component: WineDetail,
}

// WineDetail.tsx
import { useParams } from 'react-router';

function WineDetail() {
  const { id } = useParams(); // Get :id from URL
  
  return <div>Wine ID: {id}</div>;
}
```

### Multiple Parameters

```tsx
// routes.tsx
{
  path: 'wines/:category/:vintage',
  Component: WineListing,
}

// WineListing.tsx
function WineListing() {
  const { category, vintage } = useParams();
  
  return (
    <div>
      Category: {category}, Vintage: {vintage}
    </div>
  );
}
```

---

## Query Parameters

### Reading Query Params

```tsx
import { useSearchParams } from 'react-router';

function WineCatalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const category = searchParams.get('category'); // ?category=red
  const sort = searchParams.get('sort'); // ?sort=price
  
  return (
    <div>
      <p>Category: {category}</p>
      <p>Sort: {sort}</p>
    </div>
  );
}
```

### Setting Query Params

```tsx
function WineCatalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const handleFilterChange = (category: string) => {
    // Update query params
    setSearchParams({ category, sort: 'price' });
    // URL becomes: /wines?category=red&sort=price
  };
  
  return (
    <select onChange={(e) => handleFilterChange(e.target.value)}>
      <option value="red">Red Wines</option>
      <option value="white">White Wines</option>
    </select>
  );
}
```

---

## Nested Routes & Layouts

### Layout Component

```tsx
// Layout.tsx
import { Outlet } from 'react-router';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

export default function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet /> {/* Child routes render here */}
      </main>
      <Footer />
    </div>
  );
}
```

### Nested Route Configuration

```tsx
// routes.tsx
export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout, // Parent layout
    children: [
      { index: true, Component: Home },
      { path: 'wines', Component: Wines },
      { path: 'about', Component: About },
    ],
  },
  {
    path: '/shop',
    Component: ShopLayout, // Different layout for shop
    children: [
      { path: 'wines', Component: ShopWines },
      { path: 'cart', Component: Cart },
      { path: 'checkout', Component: Checkout },
    ],
  },
]);
```

---

## Active Link Styling

### useLocation Hook

```tsx
import { Link, useLocation } from 'react-router';

function Navigation() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav>
      <Link
        to="/wines"
        className={isActive('/wines') ? 'active' : ''}
      >
        Wines
      </Link>
    </nav>
  );
}
```

### NavLink Component (Automatic Active State)

```tsx
import { NavLink } from 'react-router';

<NavLink
  to="/wines"
  className={({ isActive }) =>
    isActive ? 'text-[var(--twb-color-plum)]' : 'text-white'
  }
>
  Wines
</NavLink>
```

---

## Protected Routes (Auth)

### Route Guard Pattern

```tsx
// ProtectedRoute.tsx
import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute() {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return <Outlet />;
}

// routes.tsx
{
  path: '/account',
  Component: ProtectedRoute,
  children: [
    { path: 'orders', Component: Orders },
    { path: 'profile', Component: Profile },
  ],
}
```

---

## Lazy Loading Routes

### Code Splitting with lazy()

```tsx
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';

// Lazy load heavy pages
const WineCatalog = lazy(() => import('./pages/WineCatalog'));
const Checkout = lazy(() => import('./pages/Checkout'));

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        path: 'wines',
        Component: WineCatalog, // Loaded on demand
      },
      {
        path: 'checkout',
        Component: Checkout, // Loaded on demand
      },
    ],
  },
]);

// App.tsx
import { Suspense } from 'react';
import { RouterProvider } from 'react-router';

<Suspense fallback={<LoadingSpinner />}>
  <RouterProvider router={router} />
</Suspense>
```

---

## 404 Not Found

### Catch-All Route

```tsx
// routes.tsx
{
  path: '*',
  Component: NotFound,
}

// NotFound.tsx
import { Link } from 'react-router';

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl mb-4">404 - Page Not Found</h1>
      <p className="mb-6">The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="bg-[var(--twb-color-plum)] text-white px-6 py-3 rounded-twb-md"
      >
        Go Home
      </Link>
    </div>
  );
}
```

---

## Scroll Restoration

### Scroll to Top on Route Change

```tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

// App.tsx
<RouterProvider router={router}>
  <ScrollToTop />
  {/* Routes */}
</RouterProvider>
```

---

## Common Mistakes

### ❌ Mistake 1: Using <a> tags for internal routes

**Problem:**
```tsx
<a href="/wines">Wines</a>
{/* Full page reload, loses SPA state */}
```

**Fix:**
```tsx
import { Link } from 'react-router';
<Link to="/wines">Wines</Link>
```

### ❌ Mistake 2: Using window.location

**Problem:**
```tsx
window.location.href = '/wines'; // Full page reload
```

**Fix:**
```tsx
const navigate = useNavigate();
navigate('/wines'); // SPA navigation
```

### ❌ Mistake 3: Using react-router-dom

**Problem:**
```tsx
import { Link } from 'react-router-dom'; // Not supported
```

**Fix:**
```tsx
import { Link } from 'react-router'; // Correct package
```

---

## Related Guidelines

- [Component Structure](/guidelines/architecture/component-structure.md) - Component organization
- [Navigation](/guidelines/design-tokens/navigation.md) - Navigation UI patterns

---

## Changelog

### Version 1.0 (2024-03-13)
- React Router Data mode documented
- Navigation methods established (Link, useNavigate)
- Route parameters and query params patterns added
- Nested routes and layouts explained
- Protected routes pattern created
- Lazy loading strategy documented
- Common mistakes documented

---

**Questions or Issues?**  
Contact the development team or reference [React Router Docs](https://reactrouter.com/).
