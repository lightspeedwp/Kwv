# Commerce Experience Analysis – Hand‑Drawn Redesign

**Executive summary**
1. **Value:** Aligning the commerce flow with the new hand‑drawn aesthetic and token system will create a seamless and delightful shopping experience that increases conversions and supports subscriptions, experiences and events.
2. **Risks:** The current shop still contains placeholder content, inconsistent layouts and incomplete dark‑mode support.  Filters, cart and search functionality may not work when data is fully decoupled.  Without a detailed audit, these issues may persist into the redesign.
3. **Next step:** Audit all commerce pages and components, including product types (wines, subscriptions, experiences, events), cart and checkout flows.  Define new page templates, data structures and interactions that integrate the hand‑drawn visuals and token system while ensuring accessibility and performance.

## Scope and tasks

1. **Current commerce inventory**
   - Catalogue all commerce‑related pages: shop landing, category listings, product details, subscription sign‑ups, experience and event bookings, cart, mini cart, checkout and order confirmation.
   - Note the components used in each (product cards, price selectors, quantity controls, filters, search bars) and identify duplicated or inconsistent patterns.
   - Document any dummy or outdated copy and ensure it is replaced with real data in the migration.
2. **Data structures and interfaces**
   - Define TypeScript interfaces for products (wine, subscription, experience, event) capturing fields like `id`, `slug`, `title`, `description`, `price`, `variants`, `images`, `stockStatus`, `availableDates` and `meta`.
   - Ensure support for variable pricing (e.g. subscription tiers, event tickets) and optional add‑ons.
   - Store product data in `src/data/products.ts` or integrate with WooCommerce via API; provide fallback static data for the demo.
3. **Page and component redesign**
   - Design new layouts for product listings and details: include hero images, tasting notes, ratings, reviews, cross‑sell recommendations and story sections.
   - For subscriptions, design interactive configurators (choose plan, frequency, number of bottles) and emphasise the unique story of the subscription box.
   - For experiences and events, design booking flows with date pickers, seat selectors and location information; include cancellation policies.
   - Redesign the mini cart and full cart with improved visual hierarchy and tokenised styling; show thumbnails, names, quantities, prices and remove actions.
   - Redesign checkout as a stepper form with clear progress indicators, grouped by contact details, shipping, payment and review; support guest checkout and account creation.
4. **Functional improvements**
   - Ensure search, sorting, filtering and pagination work across product types; use accessible forms and proper ARIA roles.
   - Build robust form validations with inline error messages.
   - Integrate marketing features such as discount codes, gift notes and subscription bundling.
5. **Dark‑mode and accessibility**
   - Ensure all commerce components adapt to dark mode via the token system; fix any remaining `dark:` class issues.
   - Verify that forms, modals and interactive lists are keyboard navigable and screen reader friendly.
   - Provide skip links at the top of pages and ensure focus is managed on route changes.
6. **Performance and testing**
   - Optimise images via `srcset` and lazy loading; ensure product carousels do not load all images at once.
   - Implement skeleton loaders for asynchronous data; avoid blocking the main thread with heavy computations.
   - Plan end‑to‑end tests to validate flows (add to cart, checkout, order confirmation) and cover edge cases such as out‑of‑stock items.
7. **Deliverables**
   - A detailed audit report with tables summarising current issues and proposed improvements.
   - Wireframes or Figma references for new commerce pages.
   - Data interfaces and sample JSON/TypeScript data for products, subscriptions and events.
   - Acceptance criteria and success metrics (e.g. time to complete checkout, cart abandonment rate).

## Implementation notes

* Use accessible date pickers and custom select components to avoid native select limitations.
* Support multiple currencies and tax calculations by abstracting price formatting.
* Consider micro‑interactions in the cart (e.g. sliding mini cart, animated add‑to‑cart feedback) as per the motion analysis.
* Future‑proof the design by including fields for subscription pause/resume and event waitlists.

## Acceptance criteria

- All commerce pages and components are audited with documented issues.
- New page templates and data structures support all product types and integrate the token system.
- Shopping flows are user‑friendly, accessible and responsive.
- Dark‑mode behaviour is consistent and accessible.
- Deliverables provide clear guidance for implementation and testing.
