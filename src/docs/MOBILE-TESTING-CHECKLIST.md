# Mobile Testing Checklist

**Version:** 1.0  
**Created:** 2026-03-15  
**Last Updated:** 2026-03-15  
**Status:** Active

---

## Overview

This document provides a comprehensive mobile testing checklist for Handcrafted Wines website. All features must be tested on actual devices before deployment.

**Critical Components:**
- Mobile navigation menu (hamburger)
- Touch targets (44px minimum)
- Responsive layouts (320px - 768px)
- Landscape orientation
- iOS safe areas (notch/island devices)

---

## Test Devices

### **Required Devices** (Minimum Coverage)

| Device | Screen Size | OS | Notes |
|--------|-------------|-----|-------|
| **iPhone SE (3rd gen)** | 375x667px | iOS 17+ | Small screen testing |
| **iPhone 14 Pro** | 393x852px | iOS 17+ | Dynamic Island testing |
| **iPad Mini** | 744x1133px | iPadOS 17+ | Small tablet |
| **Samsung Galaxy S21** | 360x800px | Android 13+ | Popular Android |
| **Google Pixel 7** | 412x915px | Android 14+ | Latest Android |

### **Optional Devices** (Extended Coverage)

- iPhone 14 Pro Max (larger screen variant)
- Samsung Galaxy Tab (Android tablet)
- OnePlus/Xiaomi (alternative Android vendors)

---

## Mobile Navigation Menu Testing

### **✅ Basic Functionality**

- [ ] **Open Menu:** Tap hamburger icon (☰) - menu slides in from right
- [ ] **Close Menu:** Tap X icon - menu slides out
- [ ] **Close on Overlay:** Tap dark overlay behind menu - menu closes
- [ ] **Close on Link:** Tap any navigation link - menu closes, navigates to page
- [ ] **No Body Scroll:** When menu is open, body scroll is locked (iOS and Android)
- [ ] **Menu Scroll:** If menu content exceeds viewport, menu scrolls independently

### **🔒 Focus Trapping**

- [ ] **Focus Lock:** When menu opens, focus is trapped inside menu (Tab doesn't escape)
- [ ] **First Focus:** Menu open sets focus to first interactive element
- [ ] **Last Focus:** Tab from last item cycles to first item
- [ ] **Shift+Tab:** Reverse tab order works correctly
- [ ] **Escape Key:** Pressing Esc closes menu (if hardware keyboard connected)

### **📱 iOS-Specific Testing**

- [ ] **Safe Area (Notch):** Menu content doesn't overlap notch/dynamic island
- [ ] **Safe Area (Bottom):** Menu content doesn't overlap home indicator bar
- [ ] **Safari URL Bar:** Menu height accounts for collapsing Safari URL bar
- [ ] **Portrait → Landscape:** Menu adapts correctly when device rotates
- [ ] **Landscape → Portrait:** Menu adapts correctly when returning to portrait

### **🤖 Android-Specific Testing**

- [ ] **Navigation Bar:** Menu content doesn't overlap Android nav bar
- [ ] **System Gestures:** Swipe gestures don't conflict with menu (back gesture)
- [ ] **Screen Rotation:** Menu handles rotation smoothly
- [ ] **Different Vendors:** Test on Samsung, Google Pixel, OnePlus (vendor customizations)

### **🎯 Touch Targets**

- [ ] **Hamburger Icon:** Minimum 44x44px touch area (WCAG AA compliant)
- [ ] **Close Icon:** Minimum 44x44px touch area
- [ ] **Menu Links:** Minimum 44px tap height
- [ ] **Spacing:** Minimum 8px space between tappable elements

---

## Responsive Layout Testing

### **📱 Portrait Orientation (320px - 767px)**

Test at these specific widths:
- [ ] **320px** (iPhone SE, smallest modern phone)
- [ ] **375px** (iPhone 13/14 standard)
- [ ] **393px** (iPhone 14 Pro)
- [ ] **412px** (Google Pixel)

**Checklist:**
- [ ] **No Horizontal Scroll:** Page doesn't scroll horizontally at any width
- [ ] **Readable Text:** Body text minimum 16px (WCAG recommendation)
- [ ] **Images:** All images scale down correctly, no overflow
- [ ] **Tables:** Tables with `overflow-x-auto` scroll horizontally
- [ ] **Forms:** Input fields are full-width or appropriate size
- [ ] **Buttons:** CTAs are visible and tappable (min 44px height)
- [ ] **Cards:** Product/content cards stack vertically
- [ ] **Grids:** Multi-column grids become single column

### **📱 Landscape Orientation (Mobile)**

Test at:
- [ ] **667x375px** (iPhone SE landscape)
- [ ] **852x393px** (iPhone 14 Pro landscape)

**Checklist:**
- [ ] **Hero Sections:** Height reduces appropriately (not full viewport)
- [ ] **Navigation:** Header doesn't take up too much vertical space
- [ ] **Modals/Popups:** Fit within landscape viewport
- [ ] **Content Legibility:** Text doesn't become too wide
- [ ] **Touch Targets:** Still minimum 44px (harder to tap in landscape)

### **📱 Tablet (768px - 1023px)**

Test at:
- [ ] **768px** (iPad portrait)
- [ ] **1024px** (iPad landscape - desktop breakpoint)

**Checklist:**
- [ ] **Layout:** Progressive enhancement (not just mobile or desktop)
- [ ] **Grids:** 2-column layouts preferred (not 1 col or 4 col)
- [ ] **Navigation:** Consider tablet-specific nav (not hamburger, not full desktop)
- [ ] **Touch Targets:** Still 44px minimum (iPad is touch device)
- [ ] **Images:** Appropriate image sizes loaded (not mobile, not desktop)

---

## Hero Section Testing

### **Mobile Hero Height**

- [ ] **min-h-[calc(100dvh-90px)]** on mobile (accounts for 90px sticky header)
- [ ] **Content Visibility:** All hero content visible without scrolling
- [ ] **Scroll Arrow:** Positioned correctly at bottom (doesn't overlap content)
- [ ] **Background Images:** Hero images scale/crop appropriately
- [ ] **Text Legibility:** Hero text readable on all backgrounds (contrast)

### **Landscape Hero**

- [ ] **Height Reduction:** Hero height reduces in landscape (not full viewport)
- [ ] **Content Fit:** All content still visible in landscape
- [ ] **Recommended:** Use `landscape:min-h-[60vh]` for better UX

---

## Touch Target Testing

### **WCAG 2.5.5 - Target Size (AAA)**

**Minimum size:** 44x44px (iOS), 48x48px (recommended)

**Components to Test:**

- [ ] **Header:**
  - [ ] Logo link (44px tap area)
  - [ ] Navigation links (44px height)
  - [ ] Search icon (44px touch target)
  - [ ] Cart icon (44px touch target)
  - [ ] Account icon (44px touch target)
  - [ ] Theme toggle (44px touch target)
  - [ ] Hamburger menu (44px touch target)

- [ ] **Buttons:**
  - [ ] Primary CTAs (min 44px height)
  - [ ] Secondary buttons (min 44px height)
  - [ ] Icon-only buttons (44x44px)

- [ ] **Forms:**
  - [ ] Input fields (min 44px height)
  - [ ] Checkboxes (44x44px tap area, even if visual is smaller)
  - [ ] Radio buttons (44x44px tap area)
  - [ ] Select dropdowns (min 44px height)

- [ ] **Product Cards:**
  - [ ] "Add to Cart" buttons (44px height)
  - [ ] Product image links (entire card tappable)
  - [ ] Quick view buttons (44px)

- [ ] **Footer:**
  - [ ] Footer links (44px tap height with padding)
  - [ ] Social icons (44x44px)
  - [ ] Newsletter submit button (44px height)

---

## Sticky Header Testing

### **Mobile Sticky Header (90px)**

- [ ] **Stays Visible:** Header remains visible while scrolling
- [ ] **No Overlap:** Header doesn't overlap page content
- [ ] **Hero Height:** Hero sections account for 90px header (`calc(100dvh-90px)`)
- [ ] **Z-Index:** Header stays above all content (z-50 or higher)
- [ ] **Performance:** Smooth scrolling performance (no lag)

### **Tablet/Desktop Sticky Header**

- [ ] **Height Adjustment:** Header height changes at `md:` breakpoint
- [ ] **Content Shift:** No layout shift when header becomes sticky

---

## Form Testing

### **Input Fields**

- [ ] **Focus State:** Clear visual focus indicator (2px outline minimum)
- [ ] **Tap to Focus:** Single tap focuses input (not double-tap)
- [ ] **Keyboard Behavior:** Correct keyboard type opens (email, number, tel)
- [ ] **Zoom Prevention:** Input fields don't trigger auto-zoom (16px minimum)
- [ ] **Label Visibility:** Labels remain visible when input is focused
- [ ] **Error Messages:** Errors visible and readable on mobile

### **Select Dropdowns**

- [ ] **Native Picker:** Opens native iOS/Android picker (not custom dropdown)
- [ ] **Touch-Friendly:** Dropdown options have minimum 44px height
- [ ] **Long Options:** Long option text wraps or truncates

---

## Modal/Drawer Testing

### **Sheet/Drawer Components (MiniCart, Mobile Menu)**

- [ ] **Slide Animation:** Smooth slide-in from right/bottom
- [ ] **Overlay:** Dark overlay visible behind drawer
- [ ] **Close Methods:** 
  - [ ] Tap overlay
  - [ ] Tap X button
  - [ ] Swipe drawer away (if gesture enabled)
  - [ ] Escape key (if keyboard available)
- [ ] **Body Scroll Lock:** Body doesn't scroll when drawer open
- [ ] **Content Scroll:** Drawer content scrolls if taller than viewport
- [ ] **Safe Areas:** Content respects iOS notch/home indicator

---

## Image Loading Testing

### **Responsive Images**

- [ ] **srcset Attribute:** Images use srcset for multiple sizes
- [ ] **sizes Attribute:** Correct image size loaded for viewport
- [ ] **Lazy Loading:** Images below fold use `loading="lazy"`
- [ ] **Placeholder:** Loading placeholder or blur-up effect
- [ ] **Alt Text:** All images have descriptive alt text

### **Performance**

- [ ] **Mobile Image Size:** 600px width images on mobile (not 2000px desktop)
- [ ] **Format:** WebP with JPEG fallback
- [ ] **Compression:** Images optimized (< 200KB per image)

---

## iOS Safe Area Testing

### **Notch/Dynamic Island Devices** (iPhone X+, 14 Pro)

- [ ] **Top Safe Area:** Content doesn't overlap notch/island
  - Recommended: `padding-top: env(safe-area-inset-top)`
- [ ] **Bottom Safe Area:** Content doesn't overlap home indicator
  - Recommended: `padding-bottom: env(safe-area-inset-bottom)`
- [ ] **Full-Bleed Sections:** Full-width sections extend to edges, content respects safe areas
- [ ] **Fixed Elements:** Sticky header/footer respect safe areas

**CSS Implementation:**
```css
.header {
  padding-top: env(safe-area-inset-top);
}

.footer {
  padding-bottom: env(safe-area-inset-bottom);
}

.fullscreen-section {
  min-height: calc(100dvh - env(safe-area-inset-top) - env(safe-area-inset-bottom));
}
```

---

## Landscape Orientation Testing

### **Mobile Landscape (< 768px wide)**

- [ ] **Hero Sections:** Reduce height to 60-70vh (not full viewport)
- [ ] **Navigation:** Header doesn't dominate screen
- [ ] **Content:** Text blocks don't become too wide
- [ ] **Modals:** Fit within landscape viewport
- [ ] **Forms:** Stack vertically or use compact 2-column layout

**Tailwind Utilities:**
```tsx
<div className="min-h-screen landscape:min-h-[60vh]">
<div className="py-20 landscape:py-8">
```

---

## Performance Testing

### **Mobile Network Conditions**

Test on:
- [ ] **4G LTE** (typical mobile)
- [ ] **Slow 3G** (worst-case scenario)
- [ ] **Offline** (service worker/PWA testing)

**Metrics to Track:**
- [ ] **First Contentful Paint (FCP):** < 1.8s (good)
- [ ] **Largest Contentful Paint (LCP):** < 2.5s (good)
- [ ] **Time to Interactive (TTI):** < 3.8s (good)
- [ ] **Cumulative Layout Shift (CLS):** < 0.1 (good)

---

## Accessibility Testing (Mobile)

### **Screen Reader Testing**

- [ ] **iOS VoiceOver:** Test with VoiceOver enabled (iPhone/iPad)
- [ ] **Android TalkBack:** Test with TalkBack enabled (Android)
- [ ] **Navigation Order:** Swipe order matches visual order
- [ ] **Button Labels:** All buttons have descriptive labels
- [ ] **Image Alt Text:** Images announced correctly

### **Zoom/Magnification**

- [ ] **200% Zoom:** Page works at 200% browser zoom (WCAG AA)
- [ ] **No Horizontal Scroll:** Content reflows, doesn't require horizontal scroll
- [ ] **iOS Zoom Gestures:** Pinch-to-zoom works (if not disabled)

---

## Testing Tools

### **Browser DevTools**

- **Chrome DevTools:**
  - Device emulation (multiple devices)
  - Network throttling (Slow 3G, Fast 3G, 4G)
  - Lighthouse mobile audit

- **Firefox Responsive Design Mode:**
  - Touch simulation
  - Orientation rotation
  - Custom viewport sizes

### **Real Device Testing**

- **BrowserStack:** Cloud-based real device testing
- **Sauce Labs:** Automated mobile testing
- **Physical Devices:** Always test on actual devices before launch

---

## Common Mobile Issues

### **🚨 Known Anti-Patterns**

❌ **Avoid:**
```tsx
// Fixed width without mobile fallback
<div className="w-[600px]">

// No responsive variant
<button className="min-w-[200px]">

// Too small touch target
<button className="p-1">

// Prevents zoom (accessibility issue)
<meta name="viewport" content="width=device-width, user-scalable=no">
```

✅ **Use Instead:**
```tsx
// Responsive width
<div className="w-full max-w-[600px]">

// Mobile-first responsive
<button className="w-full sm:w-auto sm:min-w-[200px]">

// Proper touch target
<button className="p-3 min-h-[44px]">

// Allows zoom
<meta name="viewport" content="width=device-width, initial-scale=1">
```

---

## Test Sign-Off

### **Pre-Launch Checklist**

- [ ] All critical components tested on iPhone and Android
- [ ] Mobile navigation menu verified on all test devices
- [ ] Touch targets verified (minimum 44x44px)
- [ ] Landscape orientation tested
- [ ] iOS safe areas tested (notch/home indicator)
- [ ] Performance metrics within acceptable range
- [ ] Screen reader testing completed
- [ ] No horizontal scroll at any viewport width
- [ ] Forms functional on mobile
- [ ] Images loading correctly (responsive images)

---

**Tested By:** _______________  
**Test Date:** _______________  
**Devices Used:** _______________  
**Issues Found:** _______________  
**Status:** ☐ Pass ☐ Fail ☐ Needs Review

---

**Last Updated:** 2026-03-15  
**Next Review:** Before each major release
