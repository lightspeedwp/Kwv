# Keyboard Navigation Guidelines

**Version:** 1.0  
**Last Updated:** March 15, 2026  
**Status:** Active  
**Applies To:** All Handcrafted Wines interactive components

---

## Overview

Keyboard navigation is a critical accessibility requirement that ensures users who cannot use a mouse can still access all features of the website. This includes users with motor disabilities, power users, and screen reader users.

**Requirement:** All interactive functionality must be accessible using keyboard only (no mouse).

---

## Quick Reference

### Essential Keyboard Shortcuts

| Key | Action | Applies To |
|-----|--------|------------|
| `Tab` | Move focus forward | All interactive elements |
| `Shift + Tab` | Move focus backward | All interactive elements |
| `Enter` | Activate | Links, buttons, form submissions |
| `Space` | Activate/Toggle | Buttons, checkboxes, radio buttons |
| `Esc` | Close/Cancel | Modals, dropdowns, menus |
| `Arrow Keys` | Navigate | Menus, tabs, carousels, dropdowns |
| `Home` | Jump to start | Long lists, text inputs |
| `End` | Jump to end | Long lists, text inputs |

---

## 1. Tab Order & Focus Management

### 1.1 Logical Tab Order

**Tab order must follow visual reading order:**
1. Header (logo, navigation, search, cart)
2. Main content (top to bottom, left to right)
3. Sidebar (if present)
4. Footer (links, newsletter, social)

**Example tab sequence for product page:**
```
1. Skip to main content link
2. Logo link
3. About dropdown
4. Shop dropdown
5. Visit dropdown
6. Events dropdown
7. Search button
8. Account link
9. Cart link
10. [Main content starts]
11. Product name heading (focusable if it's a link)
12. Add to Cart button
13. Quantity decrease button
14. Quantity input
15. Quantity increase button
16. Product tabs (Description, Tasting Notes, etc.)
17. Related products
18. [Footer starts]
19. Newsletter email input
20. Newsletter submit button
21. Footer navigation links
```

### 1.2 Focusable Elements

**Default focusable elements:**
- `<a>` with `href`
- `<button>`
- `<input>`, `<select>`, `<textarea>`
- `<summary>` (details element)

**Custom focusable elements:**
```tsx
// Add tabindex="0" to make custom elements focusable
<div 
  role="button" 
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  }}
>
  Custom Button
</div>
```

**Never use `tabindex` > 0** - This disrupts natural tab order.

### 1.3 Skip Links

**Provide skip links for long pages:**

```tsx
// Place at very top of page
<a 
  href="#main-content" 
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:rounded"
>
  Skip to main content
</a>

// Target element
<main id="main-content">
  {/* Page content */}
</main>
```

**Benefits:**
- Keyboard users can bypass repetitive navigation
- Screen reader users can jump to content quickly
- Required for pages with >40 links in header

---

## 2. Focus Indicators

### 2.1 Visible Focus Rings

**All interactive elements must have a visible focus indicator.**

**Handcrafted Wines Focus Standard:**
```css
/* Global focus style */
*:focus-visible {
  outline: 2px solid var(--twb-color-gold);
  outline-offset: 2px;
}

/* Enhanced focus for buttons */
button:focus-visible,
a:focus-visible {
  outline: 2px solid var(--twb-color-gold);
  outline-offset: 2px;
  box-shadow: 0 0 0 4px rgba(200, 169, 107, 0.2);
}

/* Focus for inputs */
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  outline: 2px solid var(--twb-color-gold);
  outline-offset: 0;
  box-shadow: 0 0 0 4px rgba(200, 169, 107, 0.2);
}
```

**Properties:**
- **Color:** Gold (`#c8a96b`) - 4.9:1 contrast on dark backgrounds
- **Width:** 2px minimum
- **Offset:** 2px from element (0 for inputs)
- **Glow:** Optional 4px shadow at 20% opacity for extra visibility

### 2.2 Focus vs Focus-Visible

**Use `:focus-visible` instead of `:focus`:**

```css
/* ❌ Wrong - Shows focus ring on mouse click */
button:focus {
  outline: 2px solid gold;
}

/* ✅ Correct - Shows focus ring only on keyboard navigation */
button:focus-visible {
  outline: 2px solid var(--twb-color-gold);
}
```

**`:focus-visible` shows focus ring only for keyboard navigation, not mouse clicks.**

### 2.3 Never Remove Outline

**❌ Never do this:**
```css
button:focus {
  outline: none;
}
```

**✅ If you must customize, replace with visible alternative:**
```css
button:focus {
  outline: none;
  box-shadow: 0 0 0 3px var(--twb-color-gold);
}
```

---

## 3. Interactive Component Patterns

### 3.1 Buttons

**Requirements:**
- Activates on `Enter` and `Space`
- Shows focus indicator
- Clear hover and active states

**Standard Button:**
```tsx
<button 
  onClick={handleClick}
  className="px-6 py-3 bg-[var(--twb-color-plum)] text-white rounded-[var(--twb-radius-button)] focus-visible:outline-2 focus-visible:outline-gold"
>
  Add to Cart
</button>
```

**Icon Button:**
```tsx
<button 
  onClick={handleCart}
  aria-label="View shopping cart"
  className="p-2 rounded-full hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-gold"
>
  <ShoppingCart className="size-5" aria-hidden="true" />
</button>
```

### 3.2 Dropdowns

**Keyboard behavior:**
- `Tab` or `Enter` to open dropdown
- `Arrow Up/Down` to navigate options
- `Enter` to select option
- `Esc` to close without selecting

**Example:**
```tsx
const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(0);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsOpen(!isOpen);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setFocusedIndex((prev) => (prev + 1) % options.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setFocusedIndex((prev) => (prev - 1 + options.length) % options.length);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Select Option
      </button>
      {isOpen && (
        <ul role="menu">
          {options.map((option, index) => (
            <li
              key={option.id}
              role="menuitem"
              tabIndex={focusedIndex === index ? 0 : -1}
              className={focusedIndex === index ? 'bg-gray-100' : ''}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
```

### 3.3 Modals

**Requirements:**
- **Focus trap** - Tab cycles within modal
- **Escape key** - Closes modal
- **Return focus** - Focus returns to trigger element on close

**Modal implementation:**
```tsx
const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement>(document.activeElement as HTMLElement);

  useEffect(() => {
    if (isOpen) {
      // Save current focus
      triggerRef.current = document.activeElement as HTMLElement;
      
      // Move focus to modal
      modalRef.current?.focus();

      // Handle Escape key
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      document.addEventListener('keydown', handleEscape);

      return () => {
        document.removeEventListener('keydown', handleEscape);
        // Return focus to trigger element
        triggerRef.current?.focus();
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      role="dialog" 
      aria-modal="true"
      ref={modalRef}
      tabIndex={-1}
      className="fixed inset-0 z-50"
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      
      {/* Modal content */}
      <div className="relative bg-white p-6 rounded-lg max-w-md mx-auto mt-20">
        {children}
        <button onClick={onClose} className="mt-4">
          Close
        </button>
      </div>
    </div>
  );
};
```

### 3.4 Tabs

**Keyboard behavior:**
- `Tab` to focus tab list
- `Arrow Left/Right` to switch tabs
- `Enter` to activate tab
- Content panel receives focus

**Tab implementation:**
```tsx
const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      setActiveTab((index + 1) % tabs.length);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setActiveTab((index - 1 + tabs.length) % tabs.length);
    } else if (e.key === 'Home') {
      e.preventDefault();
      setActiveTab(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setActiveTab(tabs.length - 1);
    }
  };

  return (
    <div>
      <div role="tablist" className="flex gap-2">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === index}
            aria-controls={`panel-${tab.id}`}
            id={`tab-${tab.id}`}
            tabIndex={activeTab === index ? 0 : -1}
            onClick={() => setActiveTab(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab, index) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`panel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          hidden={activeTab !== index}
          tabIndex={0}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
};
```

### 3.5 Carousels

**Keyboard behavior:**
- `Arrow Left/Right` to navigate slides
- `Tab` to focus carousel controls
- `Space` to pause auto-rotation

**Carousel requirements:**
- Pause button accessible via keyboard
- Slide indicators keyboard accessible
- Current slide announced to screen readers

---

## 4. Form Navigation

### 4.1 Form Field Order

**Tab through fields in logical order:**
```tsx
<form>
  {/* 1. First name */}
  <input type="text" id="firstName" />
  
  {/* 2. Last name */}
  <input type="text" id="lastName" />
  
  {/* 3. Email */}
  <input type="email" id="email" />
  
  {/* 4. Phone */}
  <input type="tel" id="phone" />
  
  {/* 5. Submit button */}
  <button type="submit">Submit</button>
</form>
```

### 4.2 Error Handling

**Move focus to first error on submit:**
```tsx
const handleSubmit = (e) => {
  e.preventDefault();
  
  const errors = validateForm();
  if (errors.length > 0) {
    // Move focus to first error
    const firstErrorField = document.getElementById(errors[0].fieldId);
    firstErrorField?.focus();
    
    // Announce error to screen readers
    announceError(errors[0].message);
  }
};
```

### 4.3 Required Fields

**Mark required fields clearly:**
```tsx
<label htmlFor="email">
  Email Address <span className="text-red-600" aria-label="required">*</span>
</label>
<input 
  type="email" 
  id="email" 
  required 
  aria-required="true"
/>
```

---

## 5. Navigation Menus

### 5.1 Header Navigation

**Keyboard behavior:**
- `Tab` to focus menu items
- `Enter` to activate dropdown
- `Arrow Down` to enter submenu
- `Arrow Up/Down` to navigate submenu items
- `Esc` to close submenu
- `Tab` to exit menu and continue to next element

**Example menu:**
```tsx
const NavMenu = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleKeyDown = (e: React.KeyboardEvent, menuId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setOpenMenu(openMenu === menuId ? null : menuId);
    } else if (e.key === 'Escape') {
      setOpenMenu(null);
    } else if (e.key === 'ArrowDown' && openMenu === menuId) {
      // Focus first submenu item
      const firstItem = document.querySelector(`#${menuId}-submenu button`);
      (firstItem as HTMLElement)?.focus();
    }
  };

  return (
    <nav>
      <button
        aria-expanded={openMenu === 'shop'}
        aria-haspopup="true"
        onKeyDown={(e) => handleKeyDown(e, 'shop')}
      >
        Shop
      </button>
      {openMenu === 'shop' && (
        <div id="shop-submenu" role="menu">
          <button role="menuitem">Wines</button>
          <button role="menuitem">Spirits</button>
          <button role="menuitem">Cheese</button>
        </div>
      )}
    </nav>
  );
};
```

### 5.2 Mobile Menu (Hamburger)

**Keyboard behavior:**
- `Tab` to hamburger button
- `Enter` or `Space` to open menu
- `Tab` through menu items
- `Esc` to close menu
- Focus returns to hamburger button on close

---

## 6. Shopping Cart & Checkout

### 6.1 Cart Page

**Keyboard accessible actions:**
- Increase/decrease quantity buttons
- Remove item button
- Continue shopping link
- Proceed to checkout button

**Quantity controls:**
```tsx
<div className="flex items-center gap-2">
  <button 
    onClick={decreaseQty}
    aria-label="Decrease quantity"
    className="p-2 rounded hover:bg-gray-100"
  >
    <Minus className="size-4" aria-hidden="true" />
  </button>
  
  <input 
    type="number" 
    value={quantity} 
    min="1"
    aria-label="Quantity"
    className="w-16 text-center"
  />
  
  <button 
    onClick={increaseQty}
    aria-label="Increase quantity"
    className="p-2 rounded hover:bg-gray-100"
  >
    <Plus className="size-4" aria-hidden="true" />
  </button>
</div>
```

### 6.2 Checkout Flow

**Multi-step checkout keyboard navigation:**
1. Tab through form fields in each step
2. Submit button to proceed to next step
3. Back button to return to previous step
4. All validation errors keyboard accessible

**Step indicator:**
- Not keyboard focusable (decorative)
- Screen reader announces current step

---

## 7. Testing Checklist

### 7.1 Manual Keyboard Test

**Disconnect your mouse and test:**

1. **Tab through entire page**
   - [ ] All interactive elements reachable
   - [ ] Tab order is logical
   - [ ] No focus trapped anywhere

2. **Test every interactive element**
   - [ ] Buttons activate with Enter and Space
   - [ ] Links activate with Enter
   - [ ] Dropdowns open with Enter/Space
   - [ ] Modals close with Esc
   - [ ] Forms submit with Enter

3. **Test focus indicators**
   - [ ] All focused elements have visible outline
   - [ ] Outline has sufficient contrast (3:1 minimum)
   - [ ] Outline doesn't get cut off

4. **Test navigation menus**
   - [ ] Dropdown menus open/close with keyboard
   - [ ] Arrow keys navigate menu items
   - [ ] Esc closes menus

5. **Test forms**
   - [ ] Tab moves between fields logically
   - [ ] Error messages keyboard accessible
   - [ ] Submit button reachable

### 7.2 Screen Reader Test

**Test with NVDA (Windows) or VoiceOver (Mac):**

1. **Navigate by headings** (H key)
   - [ ] Heading structure is logical (h1 → h2 → h3)
   - [ ] All sections have headings

2. **Navigate by landmarks** (D key)
   - [ ] Header, nav, main, footer present
   - [ ] Multiple navs have labels

3. **Navigate by links** (K key)
   - [ ] All links have descriptive text
   - [ ] "Click here" and generic links avoided

4. **Test interactive elements**
   - [ ] Buttons announced as "button"
   - [ ] Links announced as "link"
   - [ ] Form fields have labels

---

## 8. Common Issues & Solutions

### 8.1 Focus Disappears

**Problem:** User tabs and focus disappears (can't see what's focused).

**Solution:** Ensure all interactive elements have visible `:focus-visible` styles.

### 8.2 Keyboard Trap

**Problem:** User tabs into element (like modal) and can't tab out.

**Solution:** Implement focus trap for modals, but provide Esc key to exit.

### 8.3 Illogical Tab Order

**Problem:** Tab jumps around page randomly.

**Solution:** Avoid `tabindex` > 0. Use logical DOM order. Reorder visually with CSS if needed.

### 8.4 No Skip Link

**Problem:** Keyboard users must tab through 50 header links to reach content.

**Solution:** Add "Skip to main content" link at top of page.

### 8.5 Custom Controls Not Keyboard Accessible

**Problem:** Custom dropdown built with divs doesn't work with keyboard.

**Solution:** Add proper ARIA roles, `tabindex="0"`, and keyboard event handlers.

---

## 9. Resources

- [WebAIM Keyboard Accessibility](https://webaim.org/articles/keyboard/)
- [WAI-ARIA Keyboard Patterns](https://www.w3.org/WAI/ARIA/apg/patterns/)
- [A11y Project Keyboard Testing](https://www.a11yproject.com/posts/how-to-test-keyboard-accessibility/)

---

**Maintained by:** Handcrafted Wines Development Team  
**Last Review:** March 15, 2026  
**Next Review:** Quarterly
