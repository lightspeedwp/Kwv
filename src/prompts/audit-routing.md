# Audit Routing — Route Integrity & Navigation Compliance

**Type:** Audit  
**Created:** 2026-03-18  
**Status:** Active  
**Trigger Word:** `audit routing`  
**Project:** Handcrafted Wines

---

## Prompt Purpose

**Objective:** Audit all navigation links, `<Link>` components, and programmatic navigations against the router definition — identify broken links, validate logo behavior, verify route structure.

**When to Use:** After adding/removing/renaming routes; after navigation refactors; periodically as quality gate.

**Reference Guidelines:**
- `/guidelines/architecture/sitemap.md`
- `/guidelines/architecture/routing.md`

---

## Handcrafted Wines Routes

**Main Site:**
- `/` (Homepage)
- `/about` (About, team, farm, awards, sustainability, news)
- `/shop` (products, cart, checkout)
- `/visit` (experiences)
- `/events` (events)
- `/wine-club` (wine club)
- `/company` (contact, FAQ, search, news)

**System:**
- `/dev-tools` (developer hub)
- `/sitemap`
- `*` (404 catch-all)

---

## Workflow Steps

### Step 1: Router Definition Inventory

1. Read `/routes.tsx` and build complete list of valid route paths
2. Read `/guidelines/architecture/sitemap.md` for documented route map
3. Diff: Compare router vs guideline — list undocumented or missing routes
4. Verify nested routes resolve correctly

### Step 2: Link Target Validation

Scan all `.tsx` files for navigation elements:

1. **`<Link to="...">` targets:** Extract every `to` prop, verify matches defined route
2. **`<a href="...">` internal links:** Should be `<Link>` components for SPA routing
3. **`navigate("...")` calls:** Verify programmatic navigation destinations
4. **Dynamic segments:** For routes like `/shop/product/:slug`, verify valid slug values from `products.ts`

**Priority Components:**
- UnifiedHeader (main nav, mobile menu)
- UnifiedFooter (footer nav)
- Shop navigation (category links)
- Breadcrumbs (if implemented)

### Step 3: 404 & Blank Page Detection

1. **Catch-all route:** Verify `path: "*"` exists and renders 404 page
2. **Orphan routes:** Identify routes unreachable via any navigation link
3. **Broken redirects:** Check redirect routes point to existing destinations
4. **Index routes:** Verify every route group has index or redirect

### Step 4: Logo Navigation

1. **Logo click:** Verify site logo navigates to `/` (homepage)
2. **Logo consistency:** Present in UnifiedHeader, CheckoutHeader
3. **Accessibility:** Logo link has `aria-label="Return to homepage"`
4. **No full reload:** Uses `<Link>`, not `<a href="/">`

### Step 5: Navigation Component Audit

1. **Active state:** Verify current route highlighted in navigation
2. **Mobile nav:** Hamburger menu links match desktop navigation
3. **Footer links:** Point to valid routes
4. **Breadcrumbs:** Reflect actual route hierarchy (if implemented)

**Check Components:**
- UnifiedHeader (desktop + mobile nav)
- UnifiedFooter (site map links)
- CheckoutHeader (back to shop link)
- Shop category navigation (wines, spirits, cheese, gifts)

### Step 6: Report

Save to `/reports/routing/routing-audit-YYYY-MM-DD.md` with broken links, orphan routes, logo status, fixes, and recommendations.

---

## Success Criteria

- [ ] All `<Link>` targets resolve to defined routes
- [ ] Zero internal `<a href>` tags (should be `<Link>`)
- [ ] Router config matches `/guidelines/architecture/sitemap.md`
- [ ] Catch-all 404 route exists and renders correctly
- [ ] Logo click navigates to `/` via client-side routing
- [ ] No orphan or unreachable routes
- [ ] Report saved to `/reports/routing/`

---

**Maintained by:** Handcrafted Wines Development Team  
**Last Updated:** 2026-03-18  
**Related Prompts:** `audit layout`, `audit sitemap`
