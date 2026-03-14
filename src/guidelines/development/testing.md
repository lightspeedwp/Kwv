# Testing Guidelines

**Category:** Development  
**Domain:** Quality Assurance & Testing  
**Version:** 1.0  
**Last Updated:** 2024-03-13  
**Status:** Active

---

## Overview

The Wire Brand testing strategy ensures code quality, accessibility, and user experience through manual testing, automated testing, and continuous integration.

**Testing Levels:**
1. **Unit Testing** - Individual component logic
2. **Integration Testing** - Component interactions
3. **Accessibility Testing** - WCAG compliance
4. **Visual Testing** - Cross-browser, cross-device
5. **Performance Testing** - Load times, bundle size

---

## Manual Testing Checklist

### Pre-Launch Checklist

**Functionality:**
- [ ] All links navigate correctly (no 404s)
- [ ] Forms submit successfully
- [ ] Cart add/remove works
- [ ] Checkout flow completes
- [ ] Search returns relevant results
- [ ] Filters work correctly
- [ ] Account login/logout works

**Visual:**
- [ ] No layout shifts (CLS)
- [ ] Images load properly
- [ ] Typography is consistent
- [ ] Colors match brand (twb- tokens)
- [ ] Spacing is consistent
- [ ] No horizontal scroll on mobile
- [ ] Hero sections display correctly (90px header offset)
- [ ] Scroll down arrow visible and functional

**Accessibility:**
- [ ] All interactive elements reachable via Tab
- [ ] Focus indicators visible (2px ring)
- [ ] All images have alt text
- [ ] Forms have labels
- [ ] Headings follow hierarchy (h1 → h2 → h3)
- [ ] Color contrast meets WCAG AA (4.5:1)
- [ ] Screen reader announces content correctly

**Performance:**
- [ ] Page loads < 3 seconds (mobile)
- [ ] Largest Contentful Paint (LCP) < 2.5s
- [ ] First Input Delay (FID) < 100ms
- [ ] Cumulative Layout Shift (CLS) < 0.1

---

## Browser & Device Testing

### Required Browsers

**Desktop:**
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

**Mobile:**
- [ ] Chrome Mobile (Android)
- [ ] Safari Mobile (iOS)

### Required Devices

**Mobile:**
- [ ] iPhone 14 (390×844)
- [ ] Samsung Galaxy S21 (360×800)
- [ ] iPhone SE (375×667) - Small screen test

**Tablet:**
- [ ] iPad (768×1024)
- [ ] iPad Pro (1024×1366)

**Desktop:**
- [ ] 1366×768 (common laptop)
- [ ] 1920×1080 (standard desktop)
- [ ] 2560×1440 (wide desktop)

### Testing Tools

**Browser DevTools:**
- Chrome DevTools (F12) → Device toolbar (Ctrl+Shift+M)
- Firefox Responsive Design Mode
- Safari Web Inspector

**Real Device Testing:**
- BrowserStack (cross-browser cloud testing)
- Physical devices (recommended for final QA)

---

## Accessibility Testing

### Automated Tools

**WebAIM Contrast Checker:**
- https://webaim.org/resources/contrastchecker/
- Check all text/background combinations
- Ensure ≥ 4.5:1 for normal text, ≥ 3:1 for large text

**axe DevTools (Browser Extension):**
- Install: Chrome/Firefox extension
- Run on every page
- Fix all "Critical" and "Serious" issues

**Lighthouse (Chrome DevTools):**
```
1. Open Chrome DevTools (F12)
2. Click "Lighthouse" tab
3. Select "Accessibility" category
4. Click "Generate report"
5. Aim for score ≥ 95
```

### Screen Reader Testing

**NVDA (Windows - Free):**
```
1. Download: https://www.nvaccess.org/
2. Install and launch (Ctrl+Alt+N)
3. Navigate site with Down arrow (read next item)
4. Use H key to navigate headings
5. Use K key to navigate links
6. Use F key to navigate form fields
```

**VoiceOver (Mac - Built-in):**
```
1. Enable: System Preferences → Accessibility → VoiceOver → Enable
2. Or press Cmd+F5
3. Navigate with Ctrl+Option+Right arrow
4. Use Ctrl+Option+U to open rotor (headings, links, etc.)
```

**Testing Checklist:**
- [ ] All images announced with descriptive alt text
- [ ] Buttons/links announced with clear labels
- [ ] Forms announce labels and error messages
- [ ] Headings announce in logical order
- [ ] Landmarks (header, nav, main, footer) announced
- [ ] Current page indicated in navigation

### Keyboard Navigation Testing

**Unplug mouse and test:**
- [ ] Tab through entire page
- [ ] All interactive elements reachable
- [ ] Focus indicator visible on all elements
- [ ] Enter/Space activates buttons and links
- [ ] Escape closes modals and dropdowns
- [ ] Arrow keys navigate radio groups and tabs
- [ ] No keyboard traps (can exit all components)

---

## Automated Testing (Optional)

### Unit Testing (Jest + React Testing Library)

```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button Component', () => {
  test('renders button with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });
  
  test('calls onClick when clicked', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    
    render(<Button onClick={handleClick}>Click me</Button>);
    
    await user.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  
  test('is keyboard accessible', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    
    render(<Button onClick={handleClick}>Click me</Button>);
    
    const button = screen.getByRole('button');
    
    // Tab to button
    await user.tab();
    expect(button).toHaveFocus();
    
    // Press Enter
    await user.keyboard('{Enter}');
    expect(handleClick).toHaveBeenCalled();
  });
  
  test('meets accessibility requirements', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole('button');
    
    expect(button).toHaveAttribute('disabled');
    expect(button).toHaveAccessibleName('Disabled');
  });
});
```

### Integration Testing

```tsx
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CartPage } from './CartPage';

describe('Cart Flow', () => {
  test('adds item to cart and proceeds to checkout', async () => {
    const user = userEvent.setup();
    
    render(<CartPage />);
    
    // Add item to cart
    await user.click(screen.getByRole('button', { name: 'Add to Cart' }));
    
    // Verify item appears in cart
    await waitFor(() => {
      expect(screen.getByText('Cabernet Sauvignon 2021')).toBeInTheDocument();
    });
    
    // Update quantity
    await user.click(screen.getByLabelText('Increase quantity'));
    expect(screen.getByText('2')).toBeInTheDocument(); // Quantity updated
    
    // Proceed to checkout
    await user.click(screen.getByRole('button', { name: 'Proceed to Checkout' }));
    
    // Verify navigation to checkout
    expect(window.location.pathname).toBe('/checkout/shipping');
  });
});
```

---

## Visual Regression Testing

### Percy (Visual Testing Tool)

**Setup:**
```bash
npm install --save-dev @percy/cli @percy/playwright
```

**Usage:**
```tsx
import { test, expect } from '@playwright/test';
import percySnapshot from '@percy/playwright';

test('Homepage visual test', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await percySnapshot(page, 'Homepage');
});

test('Product page visual test', async ({ page }) => {
  await page.goto('http://localhost:3000/wines/cab-sauv-2021');
  await percySnapshot(page, 'Product Page - Cabernet Sauvignon');
});
```

**Percy compares screenshots across browsers and highlights visual differences.**

---

## Performance Testing

### Lighthouse Performance Audit

```
1. Open Chrome DevTools (F12)
2. Click "Lighthouse" tab
3. Select "Performance" category
4. Select "Mobile" device
5. Click "Generate report"
6. Aim for score ≥ 90
```

**Key Metrics:**
- **Largest Contentful Paint (LCP):** ≤ 2.5s
- **First Input Delay (FID):** ≤ 100ms
- **Cumulative Layout Shift (CLS):** ≤ 0.1

### WebPageTest

**URL:** https://www.webpagetest.org/

```
1. Enter site URL
2. Select location: "Cape Town, South Africa" (local audience)
3. Select browser: "Chrome"
4. Select connection: "4G" or "Cable"
5. Click "Start Test"
6. Review waterfall chart and filmstrip
```

**Target Metrics:**
- Load Time: < 3 seconds
- First Byte: < 600ms
- Start Render: < 1.5s

---

## Load Testing (Server-Side)

### Apache Bench (Simple Load Test)

```bash
# Test 100 requests with 10 concurrent users
ab -n 100 -c 10 https://thewirebrand.co.za/
```

### K6 (Advanced Load Testing)

```javascript
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10, // Virtual users
  duration: '30s',
};

export default function () {
  const res = http.get('https://thewirebrand.co.za/');
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(1);
}
```

---

## CI/CD Testing (GitHub Actions Example)

```yaml
# .github/workflows/test.yml
name: Test

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run linter
        run: npm run lint
      
      - name: Run unit tests
        run: npm test
      
      - name: Run accessibility tests
        run: npm run test:a11y
      
      - name: Build project
        run: npm run build
```

---

## Test Documentation

### Writing Test Cases

```tsx
/**
 * Test Case: Add to Cart Button
 * 
 * User Story: As a customer, I want to add wines to my cart so I can purchase them.
 * 
 * Scenario 1: Add single item to cart
 * - GIVEN: User is on product page
 * - WHEN: User clicks "Add to Cart" button
 * - THEN: Cart count increases by 1
 * - AND: Success message appears
 * - AND: Button text changes to "View Cart"
 * 
 * Scenario 2: Add out-of-stock item
 * - GIVEN: Product is out of stock
 * - WHEN: User views product page
 * - THEN: "Add to Cart" button is disabled
 * - AND: "Out of Stock" message is displayed
 */
```

---

## Bug Reporting Template

```markdown
## Bug Report

**Title:** [Concise description]

**Priority:** Critical / High / Medium / Low

**Environment:**
- Browser: Chrome 120
- Device: iPhone 14
- OS: iOS 17
- URL: https://thewirebrand.co.za/cart

**Steps to Reproduce:**
1. Navigate to product page
2. Click "Add to Cart"
3. Navigate to cart page
4. ...

**Expected Behavior:**
Cart should display added item with correct price.

**Actual Behavior:**
Cart shows item but price is $0.00.

**Screenshots:**
[Attach screenshots]

**Console Errors:**
```
TypeError: Cannot read property 'price' of undefined
  at CartItem.tsx:45
```

**Additional Context:**
Only happens when adding item from search results (not from product page).
```

---

## Related Guidelines

- [WCAG Compliance](/guidelines/accessibility/wcag-compliance.md) - Accessibility standards
- [Performance](/guidelines/development/performance.md) - Performance optimization
- [Keyboard Navigation](/guidelines/accessibility/keyboard-navigation.md) - Keyboard testing

---

## Changelog

### Version 1.0 (2024-03-13)
- Manual testing checklist created
- Browser/device testing requirements established
- Accessibility testing tools documented
- Automated testing examples provided
- Performance testing guidelines added
- Bug reporting template created

---

**Questions or Issues?**  
Contact the QA team or development lead.
