# Audit Functionality — UI State & Interaction Compliance

**Type:** Audit  
**Created:** 2026-03-18  
**Status:** Active  
**Trigger Word:** `audit functionality`  
**Project:** Handcrafted Wines

---

## Prompt Purpose

**Objective:** Audit all interactive UI elements for correct state wiring — verify search, filters, navigation interactions, form submissions, and toggles work as expected. Identify UI elements that render visually but have no underlying state management or event handling.

**When to Use:** After building new interactive features, refactoring state management, or when user-facing bugs are reported.

**Note:** Handcrafted Wines is a boutique wine farm website with e-commerce features (cart, checkout, add-to-cart). All interactive elements should be functional.

**Reference Guidelines:**
- `/guidelines/architecture/component-structure.md`
- `/guidelines/design-tokens/forms.md`
- `/guidelines/accessibility/keyboard-navigation.md`

---

## Workflow Steps

### Step 1: Interactive Element Inventory

Scan all `.tsx` files in `/components/` and `/pages/` for interactive UI:

1. **Search components:** Find all search inputs — do they filter content or navigate to search results?
2. **Filter components:** Find filter buttons/dropdowns (ShopSidebar) — do they update displayed products?
3. **Toggle components:** Theme toggle, accordions, Sheet components, mobile menu — do they manage state?
4. **Form components:** Newsletter signup, contact forms, checkout forms — do they validate and handle submission?
5. **Navigation interactions:** Mobile hamburger menu, dropdown menus, breadcrumbs — do they work?
6. **Modal/Sheet triggers:** Buttons that open modals/Sheets — do they exist and open correctly?
7. **Cart interactions:** Add to cart, quantity controls, remove item — do they update state?

**Handcrafted Wines Interactive Components:**
- UnifiedHeader (search, mobile menu, account dropdown, cart, theme toggle)
- ShopSidebar (category filters, price range, clear filters)
- MiniCart (quantity +/-, remove, checkout button)
- Cart (quantity controls, remove, proceed to checkout)
- Checkout (multi-step form, validation, order submission)
- Newsletter (email signup, validation)
- Contact forms (if implemented)

### Step 2: Dead UI Detection

For each interactive element found, verify:

1. **Click handlers exist:** `onClick`, `onSubmit`, `onChange` handlers are attached and contain logic (not empty functions or `console.log` stubs)
2. **State is wired:** Components displaying dynamic content have `useState`, `useContext`, or state management
3. **Visual feedback:** Interactions provide feedback (loading states, success messages, error states, active/selected styles)
4. **No phantom buttons:** Buttons that look interactive but do nothing on click
5. **Disabled states:** Buttons with `disabled` prop have visual indication and correct `aria-disabled`

### Step 3: Search Functionality

**Handcrafted Wines Search Locations:**
- UnifiedHeader search input
- Search results page (`/company/search-results`)

**Test:**
1. **Input behavior:** Search input accepts text, responds to keystrokes
2. **Results rendering:** Search query produces filtered/matching results
3. **Empty state:** Searching for non-matching terms shows appropriate empty state
4. **Clear action:** Search input can be cleared, resetting results
5. **Keyboard:** Search submits on Enter key press
6. **Navigation:** Search redirects to `/company/search-results?q={query}`

### Step 4: Filter Functionality (ShopSidebar)

**Test:**
1. **Filter state:** Selected filter updates displayed products
2. **Active indicator:** Active filter has distinct visual styling
3. **Reset/clear:** Clear filters button resets all filters
4. **Combination:** Multiple filter selections work correctly together (category + price range)
5. **Category filters:** Wine, Spirits, Cheese, Gifts categories filter products
6. **Price range:** Price range slider/dropdown filters products

### Step 5: Form Functionality

**Handcrafted Wines Forms:**
- Newsletter signup (UnifiedFooter, ShopNewsletter)
- Checkout forms (contact, shipping, billing, payment)
- Contact form (if implemented)

**Test:**
1. **Validation:** Required fields show errors when empty on submit
2. **Error messages:** Validation errors are descriptive and associated with field (`aria-describedby`)
3. **Submit handling:** Form submit triggers handler (even if mock/placeholder)
4. **Success state:** Successful submission shows confirmation feedback
5. **Loading state:** Submission shows loading indicator while processing
6. **Autocomplete:** Form inputs have appropriate `autoComplete` attributes (WCAG 1.3.5)

### Step 6: Navigation Interactions

**Test:**
1. **Mobile menu:** Hamburger toggle opens/closes mobile navigation (UnifiedHeader)
2. **Dropdown menus:** Desktop nav dropdowns (Shop, Visit, Our Story) open/close appropriately
3. **Active route:** Current page is highlighted in navigation
4. **Sheet components:** Account dropdown, MiniCart open/close correctly
5. **Theme toggle:** Switches between light/dark modes, persists preference

### Step 7: Cart & E-commerce

**Test:**
1. **Add to cart:** Adds product to cart state, updates cart count
2. **Quantity controls:** +/- buttons update quantity (min 1, max defined)
3. **Remove item:** Removes product from cart
4. **Cart persistence:** Cart state persists across navigation (React Context)
5. **MiniCart:** Opens from header cart icon, displays current items
6. **Checkout flow:** Multi-step process works (contact → shipping → billing → review)
7. **Order submission:** Final "Place Order" submits form (mock or real API)

### Step 8: Report

Save report to `/reports/functionality/functionality-audit-YYYY-MM-DD.md` with full details of interactive element status, dead UI, working features, and fixes applied.

---

## Success Criteria

- [ ] All interactive elements have working event handlers
- [ ] Zero dead UI elements (buttons/inputs that do nothing)
- [ ] Search produces results with empty state handling
- [ ] Filters update content with visual active state
- [ ] Forms validate, submit, and provide feedback
- [ ] Mobile navigation toggles correctly
- [ ] Cart operations work (add, update, remove)
- [ ] Theme toggle switches modes and persists
- [ ] Checkout flow completes all steps
- [ ] Report saved to `/reports/functionality/`

---

**Maintained by:** Handcrafted Wines Development Team  
**Last Updated:** 2026-03-18  
**Related Prompts:** `audit layout`, `audit a11y`, `audit data`
