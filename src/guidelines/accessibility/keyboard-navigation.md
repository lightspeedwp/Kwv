# Keyboard Navigation Guidelines

**Category:** Accessibility  
**Domain:** Keyboard Access  
**Version:** 1.0  
**Last Updated:** 2024-03-13  
**Status:** Active  
**WCAG:** 2.1.1 (Level A), 2.1.3 (Level AAA), 2.4.3 (Level A), 2.4.7 (Level AA)

---

## Overview

All interactive elements on The Wire Brand website must be fully operable via keyboard. This ensures accessibility for users who cannot use a mouse due to motor disabilities, screen reader users, and power users who prefer keyboard navigation.

**Key Requirements:**
- All functionality available via keyboard
- Logical, predictable tab order
- Visible focus indicators (2px ring minimum)
- No keyboard traps
- Consistent keyboard shortcuts

---

## Keyboard Access Standards

### WCAG Requirements

**WCAG 2.1.1 Keyboard (Level A):**  
All functionality must be available using a keyboard interface.

**WCAG 2.1.3 Keyboard (No Exception) (Level AAA):**  
All functionality must be operable through a keyboard interface without exception.

**WCAG 2.4.3 Focus Order (Level A):**  
Focusable components receive focus in an order that preserves meaning and operability.

**WCAG 2.4.7 Focus Visible (Level AA):**  
Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.

---

## Tab Order

### Tab Navigation

**Tab Key:** Moves focus forward through interactive elements  
**Shift + Tab:** Moves focus backward through interactive elements

### Logical Tab Order

**Tab order must follow visual order:**

```tsx
// ✅ Good: Visual order matches DOM order
<form>
  <input name="firstName" />  {/* Tab stop 1 */}
  <input name="lastName" />   {/* Tab stop 2 */}
  <input name="email" />      {/* Tab stop 3 */}
  <button type="submit">Submit</button> {/* Tab stop 4 */}
</form>

// ❌ Bad: Visual order doesn't match DOM order
<form>
  <input name="firstName" style={{ order: 2 }} />  {/* Visually second, but Tab stop 1 */}
  <input name="email" style={{ order: 3 }} />     {/* Visually third, but Tab stop 2 */}
  <input name="lastName" style={{ order: 1 }} />  {/* Visually first, but Tab stop 3 */}
</form>
```

### TabIndex Rules

**Natural tab order (tabindex="0"):**
```tsx
// Default: Buttons, links, form inputs are naturally focusable
<button>Click me</button>  {/* No tabindex needed */}
<a href="/wines">Wines</a> {/* No tabindex needed */}
<input type="text" />      {/* No tabindex needed */}
```

**Remove from tab order (tabindex="-1"):**
```tsx
// Programmatically focusable, but not in tab order
<div tabIndex={-1} ref={skipTargetRef}>
  {/* Content that can receive focus programmatically */}
</div>
```

**❌ Never use positive tabindex:**
```tsx
// ❌ BAD: Disrupts natural tab order
<button tabIndex={1}>First</button>
<button tabIndex={2}>Second</button>
<button tabIndex={3}>Third</button>

// ✅ GOOD: Use DOM order
<button>First</button>
<button>Second</button>
<button>Third</button>
```

---

## Focus Indicators

### Visible Focus Rings

**All interactive elements MUST have visible focus indicators.**

**Standard focus ring:**
```tsx
className="focus:outline-none focus:ring-2 focus:ring-[var(--twb-color-plum)] focus:ring-offset-2"
```

**Focus ring contrast:**
- Focus indicator must have 3:1 contrast against adjacent colors (WCAG 2.4.11 Level AA)
- Use The Wire Brand plum color (`#5a2d3b`) for focus rings

**Implementation examples:**

```tsx
// Button focus
<button className="bg-[var(--twb-color-plum)] text-white px-6 py-3 rounded-twb-md focus:outline-none focus:ring-2 focus:ring-[var(--twb-color-plum)] focus:ring-offset-2">
  Add to Cart
</button>

// Link focus
<a
  href="/wines"
  className="text-[var(--twb-color-plum)] underline focus:outline-none focus:ring-2 focus:ring-[var(--twb-color-plum)] focus:ring-offset-1"
>
  View Wines
</a>

// Input focus
<input
  type="text"
  className="border border-[var(--twb-border-tertiary)] rounded-twb-sm px-4 py-2 focus:outline-none focus:border-2 focus:border-[var(--twb-border-focus)] focus:ring-2 focus:ring-[var(--twb-color-plum)] focus:ring-offset-2"
/>

// Card focus (tappable)
<a
  href={`/wines/${wine.id}`}
  className="block p-6 border border-[var(--twb-border-tertiary)] rounded-twb-md focus:outline-none focus:ring-2 focus:ring-[var(--twb-color-plum)] focus:ring-offset-2"
>
  {/* Card content */}
</a>
```

### Focus Within (Parent Focus)

**Highlight parent container when child receives focus:**

```tsx
<div className="border border-[var(--twb-border-tertiary)] p-4 rounded-twb-md focus-within:ring-2 focus-within:ring-[var(--twb-color-plum)]">
  <input type="text" placeholder="Search" />
  <button type="submit">Search</button>
</div>
```

---

## Keyboard Shortcuts

### Standard Keyboard Interactions

| Element | Key | Action |
|---------|-----|--------|
| Button | Enter or Space | Activate button |
| Link | Enter | Follow link |
| Checkbox | Space | Toggle checked state |
| Radio button | Space | Select radio |
| Radio group | Arrow keys | Navigate between options |
| Select dropdown | Space | Open dropdown |
| Select dropdown | Arrow keys | Navigate options |
| Select dropdown | Enter | Select option |
| Modal/Dialog | Escape | Close modal |
| Expandable menu | Enter or Space | Toggle expand/collapse |
| Tabs | Arrow keys | Navigate between tabs |

### Form Controls

**Text Input:**
```tsx
<input
  type="text"
  onKeyDown={(e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  }}
/>
```

**Checkbox:**
```tsx
<label>
  <input type="checkbox" /> {/* Space toggles */}
  <span>Subscribe to newsletter</span>
</label>
```

**Radio Group:**
```tsx
<div role="radiogroup" aria-labelledby="shipping-label">
  <p id="shipping-label">Shipping Method</p>
  <label>
    <input type="radio" name="shipping" value="standard" />
    <span>Standard (3-5 days)</span>
  </label>
  <label>
    <input type="radio" name="shipping" value="express" />
    <span>Express (1-2 days)</span>
  </label>
</div>
{/* Arrow keys navigate between radios automatically */}
```

### Custom Components

**Dropdown Menu:**
```tsx
function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };
  
  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Menu
      </button>
      
      {isOpen && (
        <ul role="menu">
          <li role="menuitem"><a href="/wines">Wines</a></li>
          <li role="menuitem"><a href="/spirits">Spirits</a></li>
        </ul>
      )}
    </div>
  );
}
```

**Modal Dialog:**
```tsx
function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);
  
  // Focus trap implementation (see Focus Management section)
}
```

---

## Focus Management

### Modal/Dialog Focus Trap

**When modal opens:**
1. Focus moves to first focusable element inside modal
2. Tab cycles through modal content only (trapped)
3. Escape closes modal
4. Focus returns to trigger element on close

**Implementation with Radix UI:**
```tsx
import { Dialog, DialogContent, DialogTrigger } from './components/ui/dialog';

<Dialog>
  <DialogTrigger asChild>
    <button>Open Modal</button>
  </DialogTrigger>
  
  <DialogContent>
    {/* Radix automatically handles focus trap */}
    <h2>Modal Title</h2>
    <input type="text" /> {/* Receives focus on open */}
    <button onClick={handleClose}>Close</button>
  </DialogContent>
</Dialog>
```

### Skip Links

**Allow keyboard users to skip to main content:**

```tsx
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[var(--twb-color-plum)] text-white px-4 py-2 rounded-twb-sm z-[100] focus:outline-none focus:ring-2 focus:ring-white"
>
  Skip to main content
</a>

{/* Later in the page */}
<main id="main-content" tabIndex={-1}>
  {/* Main content */}
</main>
```

### Programmatic Focus

**Moving focus programmatically:**

```tsx
function SearchResults() {
  const resultsRef = useRef<HTMLDivElement>(null);
  
  const handleSearch = async (query: string) => {
    const results = await searchWines(query);
    setResults(results);
    
    // Move focus to results
    resultsRef.current?.focus();
  };
  
  return (
    <>
      <input
        type="search"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch(e.currentTarget.value);
          }
        }}
      />
      
      <div
        ref={resultsRef}
        tabIndex={-1}
        className="mt-8 focus:outline-none"
        aria-live="polite"
        aria-atomic="true"
      >
        {results.map(wine => (
          <WineCard key={wine.id} {...wine} />
        ))}
      </div>
    </>
  );
}
```

---

## Keyboard Traps (Avoid)

### What is a Keyboard Trap?

**A keyboard trap occurs when:**
- User can navigate into a component via Tab
- User CANNOT navigate out via Tab/Shift+Tab
- No Escape key to exit

**❌ Bad Example:**
```tsx
// Custom input that prevents Tab
<input
  onKeyDown={(e) => {
    if (e.key === 'Tab') {
      e.preventDefault(); // KEYBOARD TRAP!
    }
  }}
/>
```

**✅ Good Example (Modal - Intentional Trap with Escape):**
```tsx
// Modal traps focus, but provides Escape to exit
<Dialog onOpenChange={(open) => !open && handleClose()}>
  {/* Focus trapped inside modal */}
  {/* Escape key closes modal */}
</Dialog>
```

---

## Custom Interactive Components

### Accordion (Expandable Sections)

```tsx
function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setOpenIndex(openIndex === index ? null : index);
    }
  };
  
  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            aria-expanded={openIndex === index}
            aria-controls={`panel-${index}`}
            className="w-full text-left p-4 focus:outline-none focus:ring-2 focus:ring-[var(--twb-color-plum)]"
          >
            {item.title}
          </button>
          
          {openIndex === index && (
            <div id={`panel-${index}`} className="p-4">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
```

### Tabs

```tsx
function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowRight') {
      const nextIndex = (index + 1) % tabs.length;
      setActiveTab(nextIndex);
      tabRefs.current[nextIndex]?.focus();
    }
    if (e.key === 'ArrowLeft') {
      const prevIndex = (index - 1 + tabs.length) % tabs.length;
      setActiveTab(prevIndex);
      tabRefs.current[prevIndex]?.focus();
    }
  };
  
  return (
    <div>
      <div role="tablist">
        {tabs.map((tab, index) => (
          <button
            key={index}
            ref={(el) => (tabRefs.current[index] = el)}
            role="tab"
            aria-selected={activeTab === index}
            aria-controls={`panel-${index}`}
            tabIndex={activeTab === index ? 0 : -1}
            onClick={() => setActiveTab(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={cn(
              "px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--twb-color-plum)]",
              activeTab === index && "border-b-2 border-[var(--twb-color-plum)]"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      {tabs.map((tab, index) => (
        <div
          key={index}
          id={`panel-${index}`}
          role="tabpanel"
          hidden={activeTab !== index}
          tabIndex={0}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}
```

---

## Testing Keyboard Navigation

### Manual Testing Checklist

- [ ] Unplug mouse, navigate entire site with keyboard only
- [ ] Tab through all interactive elements
- [ ] Verify focus indicator is visible on all elements
- [ ] Test forms can be filled and submitted via keyboard
- [ ] Test modals open/close with Enter/Escape
- [ ] Test dropdowns expand with Enter/Space
- [ ] Verify no keyboard traps exist
- [ ] Test skip links work
- [ ] Verify tab order is logical
- [ ] Test with screen reader (announces focus correctly)

### Automated Testing

```tsx
// Jest + Testing Library
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('button is keyboard accessible', async () => {
  const user = userEvent.setup();
  const handleClick = jest.fn();
  
  render(<button onClick={handleClick}>Click me</button>);
  
  const button = screen.getByRole('button');
  
  // Tab to button
  await user.tab();
  expect(button).toHaveFocus();
  
  // Activate with Enter
  await user.keyboard('{Enter}');
  expect(handleClick).toHaveBeenCalled();
});
```

---

## Related Guidelines

- [WCAG Compliance](/guidelines/accessibility/wcag-compliance.md) - Full accessibility standards
- [Screen Readers](/guidelines/accessibility/screen-readers.md) - Screen reader support
- [Touch Targets](/guidelines/design-tokens/touch-targets.md) - Touch accessibility
- [Navigation](/guidelines/design-tokens/navigation.md) - Navigation patterns

---

## Changelog

### Version 1.0 (2024-03-13)
- Keyboard navigation standards established
- Tab order requirements documented
- Focus indicator specifications defined
- Keyboard shortcuts documented
- Focus management patterns added
- Custom component examples created
- Testing checklist provided

---

**Questions or Issues?**  
Contact the accessibility team or reference [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/).
