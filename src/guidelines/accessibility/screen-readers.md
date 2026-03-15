# Screen Reader Guidelines

**Version:** 1.0  
**Last Updated:** March 15, 2026  
**Status:** Active  
**Applies To:** All Handcrafted Wines pages and components

---

## Overview

Screen readers are assistive technologies that read web content aloud for users who are blind or have low vision. Approximately 1.3 billion people worldwide have some form of vision impairment, making screen reader support essential.

**Requirement:** All content and functionality must be perceivable and operable using screen readers alone.

---

## Quick Reference

### Screen Reader Testing Tools

| Platform | Screen Reader | How to Activate |
|----------|---------------|-----------------|
| **Windows** | NVDA (free) | Download from nvaccess.org |
| **Windows** | JAWS (paid) | Download from freedomscientific.com |
| **Mac** | VoiceOver (built-in) | Cmd + F5 |
| **iOS** | VoiceOver (built-in) | Settings > Accessibility > VoiceOver |
| **Android** | TalkBack (built-in) | Settings > Accessibility > TalkBack |

### Essential Keyboard Commands (NVDA)

| Key | Action |
|-----|--------|
| `Insert + Down Arrow` | Read from current position |
| `Insert + Space` | Toggle browse/focus mode |
| `H` | Next heading |
| `Shift + H` | Previous heading |
| `K` | Next link |
| `Shift + K` | Previous link |
| `D` | Next landmark |
| `Shift + D` | Previous landmark |
| `B` | Next button |
| `F` | Next form field |
| `T` | Next table |

---

## 1. Semantic HTML Structure

### 1.1 Landmarks

**Use HTML5 semantic elements to define page regions:**

```tsx
<body>
  <header>
    {/* Site header, logo, main navigation */}
  </header>
  
  <nav aria-label="Main navigation">
    {/* Primary navigation menu */}
  </nav>
  
  <main>
    {/* Primary page content */}
  </main>
  
  <aside aria-label="Related products">
    {/* Sidebar, related content */}
  </aside>
  
  <footer>
    {/* Site footer, secondary navigation */}
  </footer>
</body>
```

**Benefits:**
- Screen readers can jump between landmarks (D key in NVDA)
- Users can skip to main content quickly
- Provides document structure overview

**Multiple landmarks of same type need labels:**
```tsx
<nav aria-label="Main navigation">
  {/* Header nav */}
</nav>

<nav aria-label="Footer navigation">
  {/* Footer nav */}
</nav>
```

### 1.2 Heading Structure

**Use proper heading hierarchy (h1 → h2 → h3):**

```tsx
<h1>Estate Shiraz 2020</h1>  {/* Page title */}
  <h2>Product Details</h2>   {/* Major section */}
    <h3>Tasting Notes</h3>   {/* Subsection */}
    <h3>Food Pairing</h3>    {/* Subsection */}
  <h2>Customer Reviews</h2>  {/* Major section */}
    <h3>What Our Customers Say</h3>
  <h2>Related Products</h2>  {/* Major section */}
```

**Rules:**
- One `<h1>` per page (page title)
- Don't skip levels (h1 → h3)
- Don't use headings for styling (use CSS classes)
- Screen reader users navigate by headings (H key)

**Example structure:**
```tsx
// ✅ Correct
<h1>Wines</h1>
  <h2>Red Wines</h2>
    <h3>Estate Shiraz 2020</h3>
  <h2>White Wines</h2>
    <h3>Chenin Blanc 2021</h3>

// ❌ Wrong - skips h2
<h1>Wines</h1>
  <h3>Estate Shiraz 2020</h3>
```

---

## 2. ARIA Attributes

### 2.1 ARIA Labels

**Use `aria-label` for icon-only buttons:**

```tsx
// ❌ Wrong - No text for screen readers
<button onClick={openCart}>
  <ShoppingCart className="size-5" />
</button>

// ✅ Correct - Has aria-label
<button onClick={openCart} aria-label="View shopping cart">
  <ShoppingCart className="size-5" aria-hidden="true" />
</button>
```

**When to use:**
- Icon-only buttons
- Links with images/icons
- Elements where visible text isn't descriptive enough

### 2.2 aria-labelledby & aria-describedby

**Use `aria-labelledby` to reference existing labels:**

```tsx
<div role="dialog" aria-labelledby="modal-title">
  <h2 id="modal-title">Confirm Purchase</h2>
  {/* Modal content */}
</div>
```

**Use `aria-describedby` for additional descriptions:**

```tsx
<input 
  type="password" 
  id="password"
  aria-describedby="password-requirements"
/>
<p id="password-requirements">
  Password must be at least 8 characters with 1 uppercase, 1 number.
</p>
```

### 2.3 aria-hidden

**Hide decorative elements from screen readers:**

```tsx
<button aria-label="Delete item">
  <Trash2 className="size-4" aria-hidden="true" />
  <span className="sr-only">Delete item</span>
</button>
```

**When to use:**
- Decorative icons (when there's descriptive text)
- Duplicate content
- Visual-only elements (dividers, spacers)

**Never use `aria-hidden="true"` on focusable elements.**

### 2.4 ARIA Live Regions

**Announce dynamic content changes:**

```tsx
// Success message after adding to cart
<div 
  role="status" 
  aria-live="polite" 
  aria-atomic="true"
  className="sr-only"
>
  {cartMessage}  {/* "Added Estate Shiraz to cart" */}
</div>

// Error message
<div 
  role="alert" 
  aria-live="assertive"
  className="text-red-600"
>
  {errorMessage}
</div>
```

**Live region types:**
- `aria-live="polite"` - Announce when screen reader is idle (notifications)
- `aria-live="assertive"` - Announce immediately (errors)
- `role="status"` - Equivalent to `aria-live="polite"`
- `role="alert"` - Equivalent to `aria-live="assertive"`

### 2.5 aria-expanded

**Indicate expandable/collapsible state:**

```tsx
<button 
  onClick={toggleMenu}
  aria-expanded={isOpen}
  aria-controls="dropdown-menu"
>
  Shop
</button>

<div id="dropdown-menu" hidden={!isOpen}>
  {/* Menu items */}
</div>
```

**Screen reader announces:** "Shop button, expanded" or "Shop button, collapsed"

### 2.6 aria-current

**Mark current page in navigation:**

```tsx
<nav>
  <Link to="/shop" aria-current="page">Shop</Link>
  <Link to="/visit">Visit</Link>
  <Link to="/events">Events</Link>
</nav>
```

**Screen reader announces:** "Shop, current page, link"

---

## 3. Images & Alt Text

### 3.1 Informative Images

**Describe what's in the image:**

```tsx
// Product image
<img 
  src="shiraz-bottle.jpg" 
  alt="Estate Shiraz 2020 wine bottle with hand-drawn vineyard label"
/>

// Award badge
<img 
  src="gold-medal.png" 
  alt="Gold medal, Veritas Awards 2020"
/>

// Winemaker photo
<img 
  src="pieter.jpg" 
  alt="Pieter van der Merwe, our winemaker, in the vineyard"
/>
```

**Guidelines:**
- Describe content, not appearance
- Include important text in image
- Keep concise (max 150 characters)
- Don't start with "Image of" or "Photo of"

### 3.2 Decorative Images

**Use empty alt for purely decorative images:**

```tsx
<img 
  src="decorative-vine.svg" 
  alt="" 
  aria-hidden="true"
/>
```

**Decorative images:**
- Background patterns
- Spacers/dividers
- Decorative borders
- Purely aesthetic elements

### 3.3 Complex Images

**For charts, diagrams, or infographics, provide long description:**

```tsx
<figure>
  <img 
    src="vineyard-map.jpg" 
    alt="Map of vineyard showing 5 hectares of Shiraz, 3 hectares of Chenin Blanc, and distillery location"
  />
  <figcaption>
    Our 12-hectare estate includes 5 hectares of Shiraz vines planted in 1987,
    3 hectares of Chenin Blanc planted in 2003, and our distillery built in 2015.
  </figcaption>
</figure>
```

### 3.4 Linked Images

**If image is a link, describe destination:**

```tsx
<a href="/product/shiraz-2020">
  <img 
    src="shiraz-thumb.jpg" 
    alt="View Estate Shiraz 2020 details"
  />
</a>
```

**Not:** "Estate Shiraz 2020" (doesn't indicate it's a link)

---

## 4. Links & Buttons

### 4.1 Descriptive Link Text

**Link text must make sense out of context:**

```tsx
// ❌ Wrong - "Click here" not descriptive
<a href="/shop">Click here</a> to shop our wines.

// ✅ Correct - Descriptive link text
<a href="/shop">Shop our wines and spirits</a>

// ❌ Wrong - "Read more" is vague
<a href="/news/harvest-2024">Read more</a>

// ✅ Correct - Includes context
<a href="/news/harvest-2024">
  Read more about our 2024 harvest
</a>
```

**Screen reader users navigate by links (K key in NVDA), hearing only link text.**

### 4.2 Buttons vs Links

**Use correct HTML element:**

```tsx
// ✅ Link - Navigates to new page/section
<a href="/shop/wines">Browse Wines</a>

// ✅ Button - Performs action
<button onClick={addToCart}>Add to Cart</button>

// ❌ Wrong - Div pretending to be button
<div onClick={addToCart}>Add to Cart</div>
```

**Screen reader announces:**
- `<a>` - "Browse Wines, link"
- `<button>` - "Add to Cart, button"
- `<div>` - "Add to Cart" (no role announced)

### 4.3 Button Labels

**Buttons must have accessible text:**

```tsx
// ✅ Text content
<button>Add to Cart</button>

// ✅ aria-label for icon buttons
<button aria-label="Close modal">
  <X className="size-5" aria-hidden="true" />
</button>

// ✅ Visually hidden text
<button>
  <span className="sr-only">Share on Facebook</span>
  <Facebook className="size-5" aria-hidden="true" />
</button>
```

---

## 5. Forms & Input Fields

### 5.1 Form Labels

**Every input must have an associated label:**

```tsx
// ✅ Correct - Explicit label association
<label htmlFor="email">Email Address</label>
<input 
  type="email" 
  id="email" 
  name="email"
/>

// ❌ Wrong - No label
<input type="email" placeholder="Email" />

// ❌ Wrong - Placeholder is not a label
<input type="email" placeholder="Enter your email" />
```

**Screen reader announces:** "Email Address, edit text" (with label) vs "Edit text" (without label)

### 5.2 Required Fields

**Mark required fields clearly for screen readers:**

```tsx
<label htmlFor="firstName">
  First Name
  <span className="text-red-600" aria-label="required">*</span>
</label>
<input 
  type="text" 
  id="firstName" 
  required 
  aria-required="true"
/>
```

**Screen reader announces:** "First Name, required, edit text"

### 5.3 Error Messages

**Associate errors with inputs:**

```tsx
<label htmlFor="email">Email Address</label>
<input 
  type="email" 
  id="email"
  aria-invalid={!!error}
  aria-describedby={error ? "email-error" : undefined}
/>
{error && (
  <div 
    id="email-error" 
    role="alert"
    className="text-red-600 mt-1"
  >
    {error.message}
  </div>
)}
```

**Screen reader announces:** "Email Address, invalid entry. Please enter a valid email address"

### 5.4 Field Instructions

**Provide instructions before input:**

```tsx
<label htmlFor="password">Password</label>
<p id="password-requirements" className="text-sm text-gray-600 mb-2">
  Must be at least 8 characters with 1 uppercase letter and 1 number.
</p>
<input 
  type="password" 
  id="password"
  aria-describedby="password-requirements"
/>
```

**Screen reader announces instructions when input receives focus.**

### 5.5 Fieldsets & Legends

**Group related inputs:**

```tsx
<fieldset>
  <legend>Shipping Address</legend>
  
  <label htmlFor="address">Street Address</label>
  <input type="text" id="address" />
  
  <label htmlFor="city">City</label>
  <input type="text" id="city" />
  
  <label htmlFor="postal">Postal Code</label>
  <input type="text" id="postal" />
</fieldset>
```

**Screen reader announces:** "Shipping Address, group" before reading fields.

---

## 6. Tables

### 6.1 Data Tables

**Use proper table markup:**

```tsx
<table>
  <caption>Wine Tasting Schedule</caption>
  <thead>
    <tr>
      <th scope="col">Time</th>
      <th scope="col">Wine</th>
      <th scope="col">Tasting Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>10:00 AM</td>
      <td>Estate Shiraz 2020</td>
      <td>Dark cherry, vanilla, tobacco</td>
    </tr>
  </tbody>
</table>
```

**Required elements:**
- `<caption>` - Table title
- `<th scope="col">` - Column headers
- `<th scope="row">` - Row headers (if applicable)

**Screen reader announces:** "Wine Tasting Schedule, table with 3 columns and 1 row"

### 6.2 Layout Tables (Avoid)

**Don't use tables for layout. Use CSS Grid/Flexbox instead.**

If you must use a layout table:
```tsx
<table role="presentation">
  {/* Layout content */}
</table>
```

---

## 7. Dynamic Content

### 7.1 Loading States

**Announce loading content:**

```tsx
<div 
  role="status" 
  aria-live="polite" 
  aria-busy={isLoading}
>
  {isLoading ? (
    <span>Loading products...</span>
  ) : (
    <ProductGrid products={products} />
  )}
</div>
```

### 7.2 Infinite Scroll

**Announce new content loaded:**

```tsx
<div 
  role="feed" 
  aria-busy={isLoading}
>
  {items.map(item => (
    <article key={item.id} aria-posinset={item.index} aria-setsize={totalItems}>
      {/* Item content */}
    </article>
  ))}
</div>

{isLoading && (
  <div role="status" aria-live="polite">
    Loading more items...
  </div>
)}
```

### 7.3 Single Page Apps (SPA)

**Announce route changes:**

```tsx
// In your router
const Router = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Announce page change
    const pageTitle = document.title;
    announceToScreenReader(`Navigated to ${pageTitle}`);
    
    // Move focus to main content
    document.getElementById('main-content')?.focus();
  }, [location]);
  
  return <RouterProvider router={router} />;
};
```

---

## 8. Interactive Components

### 8.1 Modals/Dialogs

**Proper modal structure:**

```tsx
<div 
  role="dialog" 
  aria-modal="true"
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
>
  <h2 id="modal-title">Confirm Purchase</h2>
  <p id="modal-description">
    Are you sure you want to purchase Estate Shiraz 2020 for R345?
  </p>
  <button onClick={confirmPurchase}>Confirm</button>
  <button onClick={closeModal}>Cancel</button>
</div>
```

**Screen reader announces:**
- "Confirm Purchase, dialog"
- Reads description automatically
- Focus trapped inside modal

### 8.2 Accordions

**Expandable content sections:**

```tsx
<div className="accordion">
  <h3>
    <button 
      id="accordion-header-1"
      aria-expanded={isOpen}
      aria-controls="accordion-panel-1"
      onClick={toggle}
    >
      What is your return policy?
    </button>
  </h3>
  <div 
    id="accordion-panel-1"
    role="region"
    aria-labelledby="accordion-header-1"
    hidden={!isOpen}
  >
    <p>We offer 30-day returns on all products...</p>
  </div>
</div>
```

### 8.3 Tabs

**Tab interface:**

```tsx
<div>
  <div role="tablist" aria-label="Product information">
    <button 
      role="tab" 
      aria-selected={activeTab === 0}
      aria-controls="panel-description"
      id="tab-description"
    >
      Description
    </button>
    <button 
      role="tab" 
      aria-selected={activeTab === 1}
      aria-controls="panel-tasting"
      id="tab-tasting"
    >
      Tasting Notes
    </button>
  </div>
  
  <div 
    role="tabpanel" 
    id="panel-description"
    aria-labelledby="tab-description"
    hidden={activeTab !== 0}
  >
    {/* Description content */}
  </div>
  
  <div 
    role="tabpanel" 
    id="panel-tasting"
    aria-labelledby="tab-tasting"
    hidden={activeTab !== 1}
  >
    {/* Tasting notes content */}
  </div>
</div>
```

### 8.4 Tooltips

**Accessible tooltips:**

```tsx
<button 
  aria-describedby="tooltip-1"
  onMouseEnter={showTooltip}
  onMouseLeave={hideTooltip}
  onFocus={showTooltip}
  onBlur={hideTooltip}
>
  Free Shipping
</button>

{isTooltipVisible && (
  <div id="tooltip-1" role="tooltip">
    Free shipping on orders over R500
  </div>
)}
```

---

## 9. Screen-Reader-Only Content

### 9.1 sr-only Utility Class

**Hide content visually but keep for screen readers:**

```tsx
// Tailwind CSS
<span className="sr-only">Current page:</span>
<span>Shop</span>

// Custom CSS
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

**Common uses:**
- "Current page" for navigation
- "Close" for × buttons
- Instructions for screen reader users
- Form field requirements

### 9.2 Skip to Content Link

**Visible only on keyboard focus:**

```tsx
<a 
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2"
>
  Skip to main content
</a>
```

---

## 10. Testing Checklist

### 10.1 NVDA Testing (Windows)

**Download NVDA:** https://www.nvaccess.org/

**Basic test:**
1. Open page in Chrome/Firefox
2. Start NVDA (Insert key to activate)
3. Press `Insert + Down Arrow` to read from top
4. Navigate by headings (H key)
5. Navigate by landmarks (D key)
6. Navigate by links (K key)
7. Navigate by buttons (B key)
8. Test forms (F key, then Tab through fields)

**Check:**
- [ ] All content is read aloud
- [ ] Heading structure is logical
- [ ] Landmarks are present
- [ ] Links are descriptive
- [ ] Buttons have clear labels
- [ ] Form labels are associated
- [ ] Images have alt text
- [ ] Dynamic content is announced

### 10.2 VoiceOver Testing (Mac)

**Activate:** Cmd + F5

**Basic test:**
1. Press `VO + A` to read from top (VO = Cmd + Ctrl)
2. Press `VO + Cmd + H` to navigate headings
3. Press `VO + U` to open rotor
4. Select "Links" or "Form Controls" from rotor
5. Test interactive elements

### 10.3 Mobile Screen Reader Testing

**iOS VoiceOver:**
1. Settings > Accessibility > VoiceOver > On
2. Swipe right to move forward
3. Swipe left to move backward
4. Double-tap to activate
5. Rotate rotor (two fingers twist) to change navigation mode

**Android TalkBack:**
1. Settings > Accessibility > TalkBack > On
2. Swipe right to move forward
3. Swipe left to move backward
4. Double-tap to activate

---

## 11. Common Issues & Solutions

### 11.1 Unlabeled Button

**Problem:** Screen reader announces "Button" with no description.

**Solution:** Add `aria-label` or text content.

### 11.2 Skipped Heading Levels

**Problem:** Page has h1, then jumps to h3 (no h2).

**Solution:** Use proper heading hierarchy (h1 → h2 → h3).

### 11.3 No Alt Text on Images

**Problem:** Screen reader announces image filename "IMG_1234.jpg".

**Solution:** Add descriptive `alt` attribute to all images.

### 11.4 Form Input Without Label

**Problem:** Screen reader announces "Edit text" with no context.

**Solution:** Add `<label>` element with `htmlFor` matching input `id`.

### 11.5 Dynamic Content Not Announced

**Problem:** New content loads but screen reader doesn't announce it.

**Solution:** Use `aria-live` regions to announce changes.

---

## 12. Resources

### 12.1 Screen Readers

- [NVDA (Windows, free)](https://www.nvaccess.org/)
- [JAWS (Windows, commercial)](https://www.freedomscientific.com/products/software/jaws/)
- [VoiceOver (Mac/iOS, built-in)](https://www.apple.com/accessibility/voiceover/)
- [TalkBack (Android, built-in)](https://support.google.com/accessibility/android/answer/6283677)

### 12.2 Testing Tools

- [WAVE Browser Extension](https://wave.webaim.org/extension/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [Accessibility Insights](https://accessibilityinsights.io/)

### 12.3 Documentation

- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM Screen Reader User Survey](https://webaim.org/projects/screenreadersurvey9/)
- [A11y Project Screen Reader Guide](https://www.a11yproject.com/posts/getting-started-with-nvda/)

---

**Maintained by:** Handcrafted Wines Development Team  
**Last Review:** March 15, 2026  
**Next Review:** Quarterly
