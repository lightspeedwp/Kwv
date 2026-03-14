# Screen Reader Guidelines

**Category:** Accessibility  
**Domain:** Screen Reader Support  
**Version:** 1.0  
**Last Updated:** 2024-03-13  
**Status:** Active  
**WCAG:** 1.3.1 (Level A), 4.1.2 (Level A), 2.4.6 (Level AA)

---

## Overview

All content and functionality on The Wire Brand website must be accessible to screen reader users. Screen readers convert on-screen content to speech or braille, enabling blind and low-vision users to navigate and interact with web content.

**Key Requirements:**
- Semantic HTML structure
- Descriptive ARIA labels
- Meaningful alt text for images
- Logical heading hierarchy
- Form labels and error messages
- Live region announcements

---

## Semantic HTML

### Use Correct HTML Elements

**✅ Good: Semantic HTML**
```tsx
<header>
  <nav aria-label="Main navigation">
    <ul>
      <li><a href="/wines">Wines</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h1>2021 Cabernet Sauvignon</h1>
    <p>A bold, full-bodied red wine...</p>
  </article>
</main>

<footer>
  <p>&copy; 2024 The Wire Brand</p>
</footer>
```

**❌ Bad: Div soup**
```tsx
<div className="header">
  <div className="nav">
    <div className="link">Wines</div>
  </div>
</div>
```

### Landmark Regions

**Required landmarks:**
- `<header>` or `role="banner"` - Site header
- `<nav>` or `role="navigation"` - Navigation menus
- `<main>` or `role="main"` - Main content (one per page)
- `<aside>` or `role="complementary"` - Sidebar content
- `<footer>` or `role="contentinfo"` - Site footer
- `<search>` or `role="search"` - Search functionality

**Implementation:**
```tsx
<header>
  <nav aria-label="Primary navigation">
    {/* Nav links */}
  </nav>
</header>

<main id="main-content">
  <h1>Page Title</h1>
  {/* Main content */}
</main>

<aside aria-label="Related wines">
  {/* Sidebar content */}
</aside>

<footer>
  <nav aria-label="Footer navigation">
    {/* Footer links */}
  </nav>
</footer>
```

---

## Heading Structure

### Hierarchical Headings

**Requirements:**
- One `<h1>` per page (page title)
- Headings follow sequential order (h1 → h2 → h3)
- No skipping levels (h1 → h3 is invalid)
- Headings describe content sections

**✅ Good:**
```tsx
<h1>Our Wines</h1>
  <h2>Red Wines</h2>
    <h3>Cabernet Sauvignon</h3>
    <h3>Merlot</h3>
  <h2>White Wines</h2>
    <h3>Chardonnay</h3>
```

**❌ Bad:**
```tsx
<h1>Our Wines</h1>
  <h3>Red Wines</h3> {/* Skipped h2 */}
  <h2>Cabernet Sauvignon</h2> {/* Wrong order */}
```

---

## ARIA Labels & Descriptions

### aria-label

**Use for:** Icon-only buttons, links without visible text

```tsx
// Icon-only button
<button aria-label="Search">
  <Search className="h-5 w-5" />
</button>

// Icon-only link
<a href="/cart" aria-label="Shopping cart (3 items)">
  <ShoppingCart className="h-5 w-5" />
  <span className="sr-only">3 items</span>
</a>
```

### aria-labelledby

**Use for:** Referencing visible label text

```tsx
<div role="dialog" aria-labelledby="modal-title">
  <h2 id="modal-title">Add to Cart</h2>
  {/* Modal content */}
</div>
```

### aria-describedby

**Use for:** Additional descriptions (helper text, error messages)

```tsx
<input
  type="email"
  aria-describedby="email-helper"
  aria-invalid={hasError}
/>
<p id="email-helper" className="text-sm text-[var(--twb-color-vine)]">
  We'll never share your email.
</p>

{/* With error */}
<input
  type="email"
  aria-describedby="email-error"
  aria-invalid="true"
/>
<p id="email-error" className="text-sm text-[var(--twb-border-error)]">
  Please enter a valid email address.
</p>
```

---

## Alternative Text for Images

### Informative Images

**Rule:** Describe the content/function of the image

```tsx
// Product image
<img
  src="/cabernet-2021.jpg"
  alt="2021 Cabernet Sauvignon wine bottle with vintage label"
/>

// Award badge
<img
  src="/gold-medal.png"
  alt="Gold Medal Winner - International Wine Challenge 2024"
/>

// Vineyard photo
<img
  src="/vineyard.jpg"
  alt="Rows of grapevines on rolling hills in Paarl valley"
/>
```

### Decorative Images

**Rule:** Use `alt=""` or `aria-hidden="true"` for purely decorative images

```tsx
// Decorative background pattern
<img
  src="/wine-pattern.svg"
  alt=""
  aria-hidden="true"
/>

// Decorative icon (text provides context)
<h2>
  <img src="/vine-icon.svg" alt="" aria-hidden="true" />
  <span>Our Vineyards</span>
</h2>
```

### Functional Images (Links/Buttons)

**Rule:** Describe the action, not the image

```tsx
// Logo link (goes to homepage)
<Link to="/" aria-label="The Wire Brand homepage">
  <img src="/logo.svg" alt="" />
</Link>

// Button with icon
<button aria-label="Close modal">
  <X className="h-5 w-5" aria-hidden="true" />
</button>
```

---

## Form Accessibility

### Labels

**Every input MUST have an associated label:**

```tsx
// Explicit label (preferred)
<label htmlFor="email">Email Address</label>
<input id="email" type="email" />

// Implicit label (acceptable)
<label>
  Email Address
  <input type="email" />
</label>

// aria-label (last resort)
<input type="email" aria-label="Email address" />
```

### Required Fields

```tsx
<label htmlFor="name">
  Full Name
  <span className="text-[var(--twb-border-error)]" aria-label="required">*</span>
</label>
<input
  id="name"
  type="text"
  required
  aria-required="true"
/>
```

### Error Messages

**Link error messages with aria-describedby:**

```tsx
<label htmlFor="email">Email</label>
<input
  id="email"
  type="email"
  aria-invalid={hasError}
  aria-describedby={hasError ? "email-error" : undefined}
/>
{hasError && (
  <p id="email-error" role="alert" className="text-[var(--twb-border-error)]">
    Please enter a valid email address.
  </p>
)}
```

### Fieldsets for Grouped Inputs

```tsx
<fieldset>
  <legend>Shipping Method</legend>
  <label>
    <input type="radio" name="shipping" value="standard" />
    Standard (3-5 days)
  </label>
  <label>
    <input type="radio" name="shipping" value="express" />
    Express (1-2 days)
  </label>
</fieldset>
```

---

## Live Regions (Dynamic Content)

### aria-live

**Use for:** Content that updates dynamically (without page reload)

**Politeness levels:**
- `aria-live="polite"` - Announce after current speech (default for most updates)
- `aria-live="assertive"` - Interrupt current speech (errors, urgent alerts only)
- `aria-live="off"` - Don't announce

**Examples:**

```tsx
// Search results (polite)
<div aria-live="polite" aria-atomic="true">
  {results.length} wines found
</div>

// Cart update (polite)
<div aria-live="polite">
  Item added to cart
</div>

// Error message (assertive)
<div aria-live="assertive" role="alert">
  Payment failed. Please try again.
</div>

// Loading state
<div aria-live="polite" aria-busy={isLoading}>
  {isLoading ? 'Loading...' : 'Content loaded'}
</div>
```

### Status Messages

```tsx
function AddToCartButton({ product }) {
  const [status, setStatus] = useState('');
  
  const handleAddToCart = () => {
    addToCart(product);
    setStatus(`${product.name} added to cart`);
    
    // Clear status after announcement
    setTimeout(() => setStatus(''), 3000);
  };
  
  return (
    <>
      <button onClick={handleAddToCart}>
        Add to Cart
      </button>
      
      {status && (
        <div
          role="status"
          aria-live="polite"
          className="sr-only"
        >
          {status}
        </div>
      )}
    </>
  );
}
```

---

## Visually Hidden Content (Screen Reader Only)

### sr-only Class

**Use for:** Content visible to screen readers but hidden visually

```tsx
// Skip link
<a href="#main-content" className="sr-only focus:not-sr-only">
  Skip to main content
</a>

// Icon button label
<button>
  <ShoppingCart className="h-5 w-5" />
  <span className="sr-only">Shopping cart</span>
</button>

// Additional context for screen readers
<h2>
  Our Wines
  <span className="sr-only">- Handcrafted in Paarl, South Africa</span>
</h2>
```

**CSS implementation (globals.css):**
```css
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

.sr-only:not(.focus\\:not-sr-only):focus {
  position: static;
  width: auto;
  height: auto;
  padding: inherit;
  margin: inherit;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
```

---

## Navigation for Screen Readers

### Multiple Navigation Menus

**Use aria-label to distinguish menus:**

```tsx
<nav aria-label="Primary navigation">
  {/* Main menu */}
</nav>

<nav aria-label="Footer navigation">
  {/* Footer menu */}
</nav>

<nav aria-label="Breadcrumb" aria-label="Breadcrumb">
  {/* Breadcrumbs */}
</nav>
```

### Current Page Indication

```tsx
<nav aria-label="Primary navigation">
  <Link to="/">Home</Link>
  <Link to="/wines" aria-current="page">Wines</Link>
  <Link to="/about">About</Link>
</nav>
```

---

## Tables

### Data Tables

```tsx
<table>
  <caption>Wine Pricing</caption>
  <thead>
    <tr>
      <th scope="col">Wine</th>
      <th scope="col">Vintage</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Cabernet Sauvignon</th>
      <td>2021</td>
      <td>$45</td>
    </tr>
  </tbody>
</table>
```

---

## Testing with Screen Readers

### Screen Reader Software

**Windows:**
- NVDA (free, open-source) - Recommended for testing
- JAWS (commercial)

**macOS/iOS:**
- VoiceOver (built-in)

**Android:**
- TalkBack (built-in)

### Basic Screen Reader Commands

**NVDA (Windows):**
- Start: `Ctrl + Alt + N`
- Stop: `NVDA + Q`
- Read next: `Down arrow`
- Read heading: `H`
- Read link: `K`
- Read form field: `F`

**VoiceOver (Mac):**
- Start: `Cmd + F5`
- Stop: `Cmd + F5`
- Read next: `Ctrl + Option + Right arrow`
- Rotor (headings, links, etc.): `Ctrl + Option + U`

### Testing Checklist

- [ ] All images have appropriate alt text
- [ ] All buttons/links have accessible names
- [ ] Heading structure is logical
- [ ] Forms have labels and error messages
- [ ] Live regions announce updates
- [ ] Landmarks are properly labeled
- [ ] Tab order is logical
- [ ] No content is hidden from screen readers unintentionally
- [ ] Dynamic content updates are announced

---

## Common Mistakes & Fixes

### ❌ Mistake 1: Icon Button Without Label

**Problem:**
```tsx
<button>
  <Search className="h-5 w-5" />
</button>
{/* Screen reader announces: "Button" (no context) */}
```

**Fix:**
```tsx
<button aria-label="Search">
  <Search className="h-5 w-5" />
</button>
{/* Screen reader announces: "Search, button" */}
```

### ❌ Mistake 2: Placeholder as Label

**Problem:**
```tsx
<input type="text" placeholder="Enter your name" />
{/* No label - fails WCAG */}
```

**Fix:**
```tsx
<label htmlFor="name">Name</label>
<input id="name" type="text" placeholder="e.g., John Smith" />
```

### ❌ Mistake 3: onClick on Non-Interactive Element

**Problem:**
```tsx
<div onClick={handleClick}>Click me</div>
{/* Not keyboard accessible, no role */}
```

**Fix:**
```tsx
<button onClick={handleClick}>Click me</button>
{/* Or */}
<div
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
  }}
>
  Click me
</div>
```

---

## Related Guidelines

- [WCAG Compliance](/guidelines/accessibility/wcag-compliance.md) - Full accessibility standards
- [Keyboard Navigation](/guidelines/accessibility/keyboard-navigation.md) - Keyboard access
- [Forms](/guidelines/design-tokens/forms.md) - Form accessibility
- [Iconography](/guidelines/design-tokens/iconography.md) - Icon accessibility

---

## Changelog

### Version 1.0 (2024-03-13)
- Screen reader support standards established
- Semantic HTML requirements documented
- ARIA attributes guide created
- Alt text guidelines defined
- Form accessibility patterns added
- Live region usage documented
- Screen reader testing guide provided

---

**Questions or Issues?**  
Contact the accessibility team or reference [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/).
