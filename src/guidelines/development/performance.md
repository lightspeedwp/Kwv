# Performance Guidelines

**Category:** Development  
**Domain:** Performance Optimization  
**Version:** 1.0  
**Last Updated:** 2024-03-13  
**Status:** Active

---

## Overview

The Wire Brand prioritizes fast, responsive experiences. Performance directly impacts user satisfaction, conversion rates, and SEO rankings.

**Performance Targets:**
- **LCP (Largest Contentful Paint):** ≤ 2.5s
- **FID (First Input Delay):** ≤ 100ms
- **CLS (Cumulative Layout Shift):** ≤ 0.1
- **TTI (Time to Interactive):** ≤ 3.5s
- **Page Weight:** ≤ 2MB (initial load)

---

## Image Optimization

### Image Formats

**Use modern formats:**
- **WebP:** 25-35% smaller than JPEG/PNG (use as primary format)
- **AVIF:** Even smaller, but less browser support (optional)
- **JPEG:** Fallback for older browsers
- **PNG:** Transparency required (logos, icons)
- **SVG:** Vector graphics (logos, icons, illustrations)

### Image Sizing

**Never serve oversized images:**

```tsx
// ❌ Bad: 4000×3000 image for 400px container
<img src="/wine-bottle-4k.jpg" className="w-full max-w-md" />

// ✅ Good: Responsive srcset with multiple sizes
<img
  src="/wine-bottle-800.webp"
  srcSet="
    /wine-bottle-400.webp 400w,
    /wine-bottle-800.webp 800w,
    /wine-bottle-1200.webp 1200w
  "
  sizes="
    (max-width: 768px) 100vw,
    (max-width: 1024px) 50vw,
    400px
  "
  alt="Cabernet Sauvignon 2021"
  className="w-full max-w-md"
/>
```

### Lazy Loading

**Defer offscreen images:**

```tsx
// Below-the-fold images
<img
  src="/wine-bottle.webp"
  alt="Wine bottle"
  loading="lazy"
  className="w-full"
/>

// Above-the-fold (hero) images: Don't lazy load
<img
  src="/hero-image.webp"
  alt="Vineyard"
  loading="eager" // or omit (default)
  className="w-full"
/>
```

### Image Compression

**Tools:**
- **TinyPNG:** https://tinypng.com/ (online)
- **ImageOptim:** https://imageoptim.com/ (Mac app)
- **Squoosh:** https://squoosh.app/ (Google, advanced)

**Compression settings:**
- JPEG: 80-85% quality (sweet spot)
- WebP: 75-80% quality
- PNG: Use lossy compression where acceptable

---

## Code Splitting

### Lazy Load Routes

**Load routes on-demand:**

```tsx
import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router';

// Lazy load heavy pages
const WineCatalog = lazy(() => import('./pages/WineCatalog'));
const Checkout = lazy(() => import('./pages/Checkout'));
const About = lazy(() => import('./pages/About'));

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home }, // Small, don't lazy load
      { path: 'wines', Component: WineCatalog }, // Heavy, lazy load
      { path: 'checkout', Component: Checkout }, // Heavy, lazy load
      { path: 'about', Component: About }, // Medium, lazy load
    ],
  },
]);

// App.tsx
<Suspense fallback={<LoadingSpinner />}>
  <RouterProvider router={router} />
</Suspense>
```

### Dynamic Imports

```tsx
// ❌ Bad: Import everything upfront
import { HugeChart, RarelyUsedModal, AdminPanel } from './components';

// ✅ Good: Import only when needed
const handleOpenAdmin = async () => {
  const { AdminPanel } = await import('./components/AdminPanel');
  setModalContent(<AdminPanel />);
};
```

---

## Bundle Optimization

### Tree Shaking (Remove Unused Code)

**✅ Good: Named imports (tree-shakeable)**
```tsx
import { Wine, ShoppingCart, User } from 'lucide-react';
```

**❌ Bad: Default import (bundles all icons)**
```tsx
import * as Icons from 'lucide-react'; // Avoid
```

### Analyze Bundle Size

**Vite Bundle Analyzer:**
```bash
npm run build
npx vite-bundle-visualizer
```

**Look for:**
- Duplicate dependencies
- Unexpectedly large libraries
- Unused code

### Limit Dependencies

**Before installing new package:**
1. Check bundle size: https://bundlephobia.com/
2. Consider if functionality can be built in-house
3. Look for smaller alternatives

**Example:**
- ❌ `moment.js` (72KB minified)
- ✅ `date-fns` (11KB minified, tree-shakeable)
- ✅ Native `Intl.DateTimeFormat` (0KB, built-in)

---

## CSS Optimization

### Tailwind CSS Purging

**Tailwind automatically removes unused classes in production.**

**Ensure purge paths cover all files:**

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // ...
};
```

### Critical CSS (Above-the-Fold)

**Inline critical CSS in `<head>` for instant render:**

```html
<head>
  <style>
    /* Critical CSS: Header, Hero (above-the-fold) */
    .header { background: #5a2d3b; height: 90px; }
    .hero { min-height: calc(100dvh - 90px); }
  </style>
  
  <!-- Full stylesheet loads async -->
  <link rel="stylesheet" href="/styles.css" media="print" onload="this.media='all'">
</head>
```

---

## JavaScript Optimization

### Minimize Re-renders

**Use React.memo for expensive components:**

```tsx
import React from 'react';

const ProductCard = React.memo(function ProductCard({ wine }) {
  // Expensive rendering logic
  return <div>...</div>;
});

export default ProductCard;
```

**Use useMemo for expensive calculations:**

```tsx
import { useMemo } from 'react';

function WineCatalog({ wines }) {
  const filteredWines = useMemo(() => {
    return wines.filter(wine => wine.inStock).sort((a, b) => b.rating - a.rating);
  }, [wines]); // Only recalculate when wines change
  
  return <div>{filteredWines.map(wine => <ProductCard wine={wine} />)}</div>;
}
```

**Use useCallback for event handlers:**

```tsx
import { useCallback } from 'react';

function ProductGrid({ wines }) {
  const handleAddToCart = useCallback((wineId) => {
    addToCart(wineId);
  }, []); // Function doesn't change between renders
  
  return wines.map(wine => (
    <ProductCard key={wine.id} wine={wine} onAddToCart={handleAddToCart} />
  ));
}
```

### Debounce User Input

**Limit API calls during typing:**

```tsx
import { useState, useEffect } from 'react';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  
  // Debounce: Update debouncedQuery 500ms after user stops typing
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [query]);
  
  // Fetch only when debouncedQuery changes
  useEffect(() => {
    if (debouncedQuery) {
      fetchSearchResults(debouncedQuery);
    }
  }, [debouncedQuery]);
  
  return (
    <input
      type="search"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search wines..."
    />
  );
}
```

---

## Fonts Optimization

### Preload Fonts

```html
<head>
  <link
    rel="preload"
    href="/fonts/playfair-display.woff2"
    as="font"
    type="font/woff2"
    crossorigin
  />
</head>
```

### Font Display Strategy

```css
@font-face {
  font-family: 'Playfair Display';
  src: url('/fonts/playfair-display.woff2') format('woff2');
  font-display: swap; /* Show fallback font immediately, swap when custom font loads */
  font-weight: 400;
  font-style: normal;
}
```

**Font display options:**
- `swap` (recommended): Show fallback, swap when loaded
- `optional`: Show fallback, swap only if loads quickly
- `block`: Wait 3s for font, show fallback if not loaded

### Limit Font Weights

**✅ Good: Load only needed weights**
```css
/* Load only Regular (400) and Bold (700) */
@font-face {
  font-family: 'Playfair Display';
  src: url('/fonts/playfair-display-400.woff2') format('woff2');
  font-weight: 400;
}

@font-face {
  font-family: 'Playfair Display';
  src: url('/fonts/playfair-display-700.woff2') format('woff2');
  font-weight: 700;
}
```

**❌ Bad: Load all weights (100-900)**
```css
/* Loads 9 font files! */
font-weight: 100 200 300 400 500 600 700 800 900;
```

---

## Caching Strategy

### HTTP Caching Headers

```
# Images (immutable, cache 1 year)
Cache-Control: public, max-age=31536000, immutable

# CSS/JS (versioned, cache 1 year)
Cache-Control: public, max-age=31536000, immutable

# HTML (no cache, always revalidate)
Cache-Control: no-cache, must-revalidate
```

### Service Worker (PWA - Optional)

```javascript
// service-worker.js
const CACHE_NAME = 'thewire-v1';
const urlsToCache = [
  '/',
  '/styles.css',
  '/script.js',
  '/logo.svg',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
```

---

## Third-Party Scripts

### Defer Non-Critical Scripts

```html
<!-- ❌ Bad: Blocks rendering -->
<script src="https://analytics.example.com/script.js"></script>

<!-- ✅ Good: Defer until page loads -->
<script src="https://analytics.example.com/script.js" defer></script>

<!-- ✅ Best: Async load (if order doesn't matter) -->
<script src="https://analytics.example.com/script.js" async></script>
```

### Lazy Load Analytics

```tsx
// Load analytics only after user interaction
useEffect(() => {
  const loadAnalytics = () => {
    const script = document.createElement('script');
    script.src = 'https://analytics.example.com/script.js';
    script.async = true;
    document.head.appendChild(script);
  };
  
  // Load after 3 seconds or on user interaction
  const timeout = setTimeout(loadAnalytics, 3000);
  const events = ['scroll', 'click', 'mousemove'];
  const handleInteraction = () => {
    clearTimeout(timeout);
    loadAnalytics();
    events.forEach(event => window.removeEventListener(event, handleInteraction));
  };
  
  events.forEach(event => window.addEventListener(event, handleInteraction, { once: true }));
  
  return () => {
    clearTimeout(timeout);
    events.forEach(event => window.removeEventListener(event, handleInteraction));
  };
}, []);
```

---

## Database & API Optimization

### Pagination

**Don't load all products at once:**

```tsx
// ❌ Bad: Fetch all 500 wines
const wines = await fetch('/api/wines').then(r => r.json());

// ✅ Good: Paginate (20 per page)
const wines = await fetch('/api/wines?page=1&limit=20').then(r => r.json());
```

### Data Caching (React Query)

```tsx
import { useQuery } from '@tanstack/react-query';

function WineCatalog() {
  const { data: wines, isLoading } = useQuery({
    queryKey: ['wines'],
    queryFn: () => fetch('/api/wines').then(r => r.json()),
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
  });
  
  if (isLoading) return <LoadingSpinner />;
  
  return <div>{wines.map(wine => <ProductCard wine={wine} />)}</div>;
}
```

### GraphQL (Fetch Only Needed Fields)

```graphql
# ❌ Bad: Fetch all product fields
query GetWines {
  wines {
    id
    name
    description
    vintage
    region
    alcohol
    grapeVariety
    tastingNotes
    awards
    reviews
    # ... 20 more fields
  }
}

# ✅ Good: Fetch only needed fields (product grid)
query GetWines {
  wines {
    id
    name
    vintage
    price
    image
  }
}
```

---

## Lighthouse Performance Audit

### Run Lighthouse

```
1. Open Chrome DevTools (F12)
2. Click "Lighthouse" tab
3. Select "Performance"
4. Select "Mobile" (slower baseline)
5. Click "Generate report"
```

### Performance Metrics

**Core Web Vitals:**
- **LCP (Largest Contentful Paint):** ≤ 2.5s
  - Main image/text appears quickly
  - Optimize: Reduce image size, preload critical resources

- **FID (First Input Delay):** ≤ 100ms
  - Page responds to interactions quickly
  - Optimize: Reduce JavaScript execution time

- **CLS (Cumulative Layout Shift):** ≤ 0.1
  - No unexpected layout shifts
  - Optimize: Set image/video dimensions, reserve space for ads

**Additional Metrics:**
- **TTI (Time to Interactive):** ≤ 3.5s
- **Speed Index:** ≤ 3.4s
- **Total Blocking Time:** ≤ 200ms

---

## Performance Monitoring

### Real User Monitoring (RUM)

**Google Analytics 4 (Web Vitals):**
```javascript
import { getCLS, getFID, getLCP } from 'web-vitals';

function sendToAnalytics({ name, delta, id }) {
  gtag('event', name, {
    event_category: 'Web Vitals',
    value: Math.round(delta),
    event_label: id,
    non_interaction: true,
  });
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getLCP(sendToAnalytics);
```

### Performance Budget

**Set performance budgets (fail CI if exceeded):**

```javascript
// performance-budget.json
{
  "budget": [
    {
      "resourceSizes": [
        { "resourceType": "script", "budget": 400 },      // 400KB JS
        { "resourceType": "stylesheet", "budget": 100 },   // 100KB CSS
        { "resourceType": "image", "budget": 1000 },       // 1MB images
        { "resourceType": "total", "budget": 2000 }        // 2MB total
      ],
      "timings": [
        { "metric": "interactive", "budget": 3500 },       // TTI < 3.5s
        { "metric": "first-contentful-paint", "budget": 1500 } // FCP < 1.5s
      ]
    }
  ]
}
```

---

## Quick Wins Checklist

**Easiest performance improvements:**

- [x] Add `loading="lazy"` to below-the-fold images
- [x] Compress images with TinyPNG/Squoosh
- [x] Use WebP format for images
- [x] Add `width` and `height` to `<img>` tags (prevent CLS)
- [x] Lazy load routes with `React.lazy()`
- [x] Use tree-shakeable imports (named imports)
- [x] Defer non-critical third-party scripts
- [x] Preload critical fonts
- [x] Use `font-display: swap` for custom fonts
- [x] Enable Gzip/Brotli compression (server)

---

## Related Guidelines

- [Testing](/guidelines/development/testing.md) - Performance testing
- [Responsive](/guidelines/design-tokens/responsive.md) - Responsive images

---

## Changelog

### Version 1.0 (2024-03-13)
- Performance targets established
- Image optimization strategies documented
- Code splitting guidance provided
- Bundle optimization tips added
- Caching strategies defined
- Lighthouse audit process documented
- Quick wins checklist created

---

**Questions or Issues?**  
Reference [Web.dev Performance](https://web.dev/performance/) or contact the development team.
