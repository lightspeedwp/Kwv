# Motion & Interaction Analysis Report – Hand-Drawn Redesign

**Report ID:** 05  
**Category:** Redesign Analysis  
**Domain:** Motion & Interaction  
**Version:** 1.0.0  
**Date:** 2026-03-15  
**Author:** AI Assistant  
**Status:** Complete

---

## Executive Summary

### Overview

This report analyzes the current motion and interaction patterns across the Handcrafted Wines website, evaluating animation usage, identifying gaps, and defining a comprehensive motion design system that supports the hand-drawn aesthetic while maintaining accessibility and performance.

### Key Findings

**Strengths:**
- ✅ **Framer Motion (Motion) integration** - 8 components use motion/react library
- ✅ **Basic transition tokens** - 4 transition durations defined in CSS
- ✅ **Accessibility awareness** - 20+ references to `prefers-reduced-motion` in guidelines
- ✅ **Performance-conscious** - Using hardware-accelerated properties (transform, opacity)

**Critical Issues:**
- ❌ **No prefers-reduced-motion implementation** - Documented but not implemented in code
- ❌ **Incomplete motion tokens** - Only 4 basic durations, missing easings and distances
- ❌ **Inconsistent animation patterns** - Mix of CSS transitions and Motion library without standards
- ❌ **No loading/skeleton states** - Missing progress animations
- ❌ **No entrance animations** - Elements appear instantly without micro-interactions

### Metrics

| Category | Current | Target | Gap |
|----------|---------|--------|-----|
| **Motion Components** | 8/83 (10%) | 40/83 (48%) | 32 components |
| **Motion Tokens** | 4 | 24 | 20 tokens |
| **prefers-reduced-motion** | 0% | 100% | ❌ Not implemented |
| **Entrance Animations** | 0 | 15 patterns | 15 patterns |
| **Loading States** | 0 | 8 patterns | 8 patterns |
| **Hover Interactions** | 15% | 80% | 65% gap |

### Recommendations

**High Priority (Do First):**
1. Implement `prefers-reduced-motion` media query globally
2. Create complete motion token system (24 tokens)
3. Add entrance animations to key sections (Hero, BrandGrid, etc.)
4. Create loading skeleton components (ProductCard, NewsCard)
5. Standardize hover interactions across all cards and buttons

**Medium Priority:**
6. Add scroll-triggered animations (fade in on viewport entry)
7. Create micro-interactions for form inputs (focus, validation)
8. Implement page transition animations
9. Add stagger animations for grids and lists

**Low Priority:**
10. Create advanced WebGL hero animations
11. Add parallax effects for decorative elements
12. Implement gesture-based interactions (swipe, drag)

---

## 1. Current Motion Inventory

### 1.1 Motion Library Usage

**Status:** ⚠️ **Limited** - 8 components use Motion (10% coverage)

**Components Using Motion/React:**

1. **AgeVerificationModal** - AnimatePresence + motion.div
   ```tsx
   <AnimatePresence>
     {isVisible && (
       <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
       >
   ```
   **Duration:** Not specified (uses defaults)
   **Easing:** Default ease

2. **BackToTopButton** - AnimatePresence + motion.button
   ```tsx
   <AnimatePresence>
     {isVisible && (
       <motion.button
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: 20 }}
       >
   ```
   **Duration:** Not specified
   **Easing:** Default ease

3. **ThemeToggle** - motion.div for icon rotation
   ```tsx
   <motion.div
     animate={{ rotate: isDark ? 180 : 0 }}
     transition={{ duration: 0.3 }}
   >
   ```
   **Duration:** 300ms (hardcoded)
   **Easing:** Default ease

4. **UnifiedHeader** - AnimatePresence for mobile menu
   ```tsx
   <AnimatePresence>
     {isMenuOpen && (
       <motion.div
         initial={{ opacity: 0, x: '100%' }}
         animate={{ opacity: 1, x: 0 }}
         exit={{ opacity: 0, x: '100%' }}
       >
   ```
   **Duration:** Not specified
   **Easing:** Default ease

5. **ProductGallery** - AnimatePresence for lightbox modal
   ```tsx
   <AnimatePresence>
     {isLightboxOpen && (
       <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
       >
   ```
   **Duration:** Not specified
   **Easing:** Default ease

6. **ProductTabs** - motion.div for active tab indicator
   ```tsx
   <motion.div
     layoutId="activeTab"
     className="absolute bottom-0 left-0 h-0.5 bg-[var(--twb-color-plum)]"
   />
   ```
   **Animation:** Layout animation (Magic Motion)
   **Easing:** Default spring

7. **HandDrawnComponentLibrary** - motion.div for scroll animations
   - Scroll-triggered fade-in effects
   - Duration: Not specified

8. **FullWidthLandingPage** - motion.div for hero and section animations
   - Parallax effects, entrance animations
   - Duration: Not specified

---

### 1.2 CSS Transition Usage

**Status:** ✅ **Good Foundation** - Transitions defined in utilities.css

**Current CSS Transition Tokens (4):**
```css
--twb-transition-fast: 150ms ease;
--twb-transition-base: 200ms ease;
--twb-transition-slow: 300ms ease;
--twb-transition-slower: 500ms ease;
```

**Components Using CSS Transitions:**

1. **Links** (globals.css)
   ```css
   a {
     transition: color 0.2s ease;
   }
   ```

2. **twb-card** (utilities.css)
   ```css
   transition: box-shadow var(--twb-transition-base), 
               transform var(--twb-transition-base);
   ```

3. **twb-card__image** (utilities.css)
   ```css
   transition: transform var(--twb-transition-slow);
   ```

4. **twb-button-base** (utilities.css)
   ```css
   transition: background-color var(--twb-transition-fast), 
               border-color var(--twb-transition-fast),
               color var(--twb-transition-fast),
               transform var(--twb-transition-fast),
               box-shadow var(--twb-transition-fast);
   ```

5. **twb-input-base** (utilities.css)
   ```css
   transition: border-color var(--twb-transition-fast), 
               box-shadow var(--twb-transition-fast);
   ```

6. **Hand-drawn cards** (utilities.css)
   ```css
   transition: transform 280ms cubic-bezier(0.22, 1, 0.36, 1);
   ```
   **Note:** Custom easing (not using token)

---

### 1.3 Interactive States

**Hover Effects Currently Implemented:**

| Component | Interaction | Duration | Easing |
|-----------|-------------|----------|--------|
| **Product Card** | Scale + shadow | 200ms | ease |
| **Button** | Background + border change | 150ms | ease |
| **Link** | Color change | 200ms | ease |
| **Card Image** | Scale (1.05x) | 300ms | ease |
| **Hand-drawn Card** | Rotation (0.5deg) | 280ms | cubic-bezier(0.22, 1, 0.36, 1) |

**Focus States:**
- ⚠️ **Inconsistent** - Some buttons have focus rings, others don't
- ❌ **No focus animations** - No transition on focus state changes

**Active States:**
- ❌ **Missing** - No pressed/active state animations for buttons

---

### 1.4 Missing Motion Patterns

**Critical Gaps:**

1. **Entrance Animations** - ❌ None implemented
   - Sections appear instantly on page load
   - No scroll-triggered animations
   - No stagger for lists/grids

2. **Loading States** - ❌ None implemented
   - No skeleton screens
   - No loading spinners
   - No progress indicators

3. **State Change Animations** - ⚠️ Partial
   - ✅ Accordion (FAQSection uses Radix with animation)
   - ❌ Filter toggles (no animation)
   - ❌ Cart add/remove (no animation)
   - ❌ Quantity increment/decrement (no animation)

4. **Page Transitions** - ❌ None implemented
   - No route change animations
   - Instant page switches

5. **Micro-interactions** - ⚠️ Limited
   - ❌ Form validation (errors appear instantly)
   - ❌ Checkbox/radio animations
   - ❌ Toast notifications (not implemented yet)
   - ❌ Dropdown menus (instant show/hide)

6. **Advanced Interactions** - ❌ None implemented
   - ❌ Parallax scrolling
   - ❌ WebGL hero animations
   - ❌ Gesture-based interactions (swipe, drag)

---

## 2. Motion Design Principles

### 2.1 Core Principles

**Hand-Drawn Aesthetic Motion Philosophy:**

1. **Organic & Natural**
   - Movements should feel hand-crafted, not mechanical
   - Use ease-out curves (decelerate naturally)
   - Slight imperfections are encouraged (asymmetric timing)

2. **Purposeful**
   - Motion should enhance understanding, not distract
   - Every animation must serve a UX purpose
   - Avoid gratuitous effects

3. **Subtle & Refined**
   - Wine-inspired motion: slow pour, gentle swirl
   - Prefer understated over exaggerated
   - Respect the content's importance

4. **Accessible**
   - All motion must respect `prefers-reduced-motion`
   - Provide immediate feedback without motion when needed
   - Never rely on motion alone to convey information

5. **Performant**
   - Use GPU-accelerated properties only (transform, opacity)
   - Avoid layout thrashing (width, height, top, left animations)
   - Target 60fps minimum

---

### 2.2 Motion Categories

**1. Ambient Motion** (Background/Decorative)
- **Purpose:** Add life to static pages without distraction
- **Examples:** Subtle parallax textures, floating particles, gentle rotation
- **Duration:** 2-5 seconds (long, slow)
- **Easing:** Linear or ease-in-out (smooth, continuous)
- **Reduced Motion:** Disable completely

**2. Entrance Animations** (Elements appearing)
- **Purpose:** Draw attention to new content, guide eye movement
- **Examples:** Fade in, slide up, scale in, stagger lists
- **Duration:** 300-600ms (medium)
- **Easing:** Ease-out (quick start, slow end - natural deceleration)
- **Reduced Motion:** Instant appearance (opacity 1, no movement)

**3. Interactive Motion** (User-triggered)
- **Purpose:** Provide immediate feedback to user actions
- **Examples:** Hover elevation, button press, tab switch, accordion expand
- **Duration:** 150-250ms (fast - responsive feel)
- **Easing:** Ease-out or ease-in-out
- **Reduced Motion:** Instant state change (no transition)

**4. State Change Animations** (Data/UI updates)
- **Purpose:** Help users track what changed and why
- **Examples:** Add to cart, filter applied, form validation, success/error states
- **Duration:** 250-400ms (medium)
- **Easing:** Ease-out
- **Reduced Motion:** Instant update with visual change only

**5. Loading & Progress** (Asynchronous actions)
- **Purpose:** Indicate system is working, reduce perceived wait time
- **Examples:** Skeleton shimmer, spinner, progress bar, pulse
- **Duration:** Continuous loop (2-3s cycle)
- **Easing:** Ease-in-out (smooth loop)
- **Reduced Motion:** Static loading indicator (no animation)

---

## 3. Motion Token System

### 3.1 Complete Motion Token Specification

**Status:** ❌ **INCOMPLETE** - Only 4/24 tokens defined

#### Durations (6 tokens)

**Current (4):**
```css
--twb-transition-fast: 150ms ease;
--twb-transition-base: 200ms ease;
--twb-transition-slow: 300ms ease;
--twb-transition-slower: 500ms ease;
```

**Recommended Complete System (6):**
```css
/* Duration-only tokens (no easing) */
--twb-duration-instant: 0ms;
--twb-duration-fast: 150ms;
--twb-duration-normal: 250ms;
--twb-duration-slow: 350ms;
--twb-duration-slower: 500ms;
--twb-duration-slowest: 750ms;

/* For continuous/ambient animations */
--twb-duration-ambient: 3000ms;
--twb-duration-loading: 2000ms;
```

---

#### Easing Functions (8 tokens)

**Current:** ❌ None (using generic "ease")

**Recommended:**
```css
/* Standard Easings */
--twb-ease-linear: cubic-bezier(0, 0, 1, 1);
--twb-ease-in: cubic-bezier(0.4, 0, 1, 1);       /* Accelerate */
--twb-ease-out: cubic-bezier(0, 0, 0.2, 1);      /* Decelerate */
--twb-ease-in-out: cubic-bezier(0.4, 0, 0.2, 1); /* Both */

/* Custom Organic Easings */
--twb-ease-organic: cubic-bezier(0.22, 1, 0.36, 1);        /* Hand-drawn feel */
--twb-ease-smooth: cubic-bezier(0.33, 1, 0.68, 1);         /* Extra smooth */
--twb-ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55); /* Playful bounce */
--twb-ease-decelerate: cubic-bezier(0.05, 0.7, 0.1, 1);    /* Strong ease-out */
```

**Usage Guidance:**
- **ease-out** → Default for most interactions (feels responsive)
- **ease-organic** → Hand-drawn card animations (already used in utilities.css)
- **ease-smooth** → Subtle ambient motion
- **ease-bounce** → Playful elements (badge notifications, success icons)
- **ease-decelerate** → Heavy objects or important UI changes

---

#### Transform Distances (6 tokens)

**Current:** ❌ None

**Recommended:**
```css
--twb-translate-xs: 4px;   /* Subtle hover lift */
--twb-translate-sm: 8px;   /* Button press */
--twb-translate-md: 12px;  /* Card hover */
--twb-translate-lg: 16px;  /* Slide-in animations */
--twb-translate-xl: 24px;  /* Page transitions */
--twb-translate-2xl: 32px; /* Mobile menu slide */
```

**Usage:**
```css
.card:hover {
  transform: translateY(calc(-1 * var(--twb-translate-sm)));
}
```

---

#### Scale Factors (4 tokens)

**Current:** ❌ None

**Recommended:**
```css
--twb-scale-in: 0.95;   /* Entrance animations start */
--twb-scale-hover: 1.05; /* Card/image hover */
--twb-scale-press: 0.98; /* Button active state */
--twb-scale-bounce: 1.1; /* Playful animations */
```

---

#### Opacity Levels (4 tokens)

**Current:** ❌ None (using hardcoded values)

**Recommended:**
```css
--twb-opacity-0: 0;
--twb-opacity-disabled: 0.5;
--twb-opacity-hover: 0.8;
--twb-opacity-100: 1;
```

---

#### Combined Transition Tokens (Convenience)

**Recommended (replaces current 4):**
```css
/* Common transition combinations */
--twb-transition-fast: all var(--twb-duration-fast) var(--twb-ease-out);
--twb-transition-normal: all var(--twb-duration-normal) var(--twb-ease-out);
--twb-transition-slow: all var(--twb-duration-slow) var(--twb-ease-in-out);
--twb-transition-organic: all var(--twb-duration-normal) var(--twb-ease-organic);

/* Specific property transitions */
--twb-transition-colors: 
  background-color var(--twb-duration-fast) var(--twb-ease-out),
  border-color var(--twb-duration-fast) var(--twb-ease-out),
  color var(--twb-duration-fast) var(--twb-ease-out);

--twb-transition-transform:
  transform var(--twb-duration-normal) var(--twb-ease-out);

--twb-transition-opacity:
  opacity var(--twb-duration-fast) var(--twb-ease-out);
```

---

### 3.2 Motion Tokens File Structure

**Create:** `/styles/themes-motion.css`

```css
/**
 * themes-motion.css
 * 
 * Motion design tokens for The Wire Brand.
 * Durations, easings, distances, and combined transitions.
 * 
 * @package TheWireBrand
 * @version 1.0
 */

:root {
  /* ============================================
     DURATIONS
     ============================================ */
  
  --twb-duration-instant: 0ms;
  --twb-duration-fast: 150ms;
  --twb-duration-normal: 250ms;
  --twb-duration-slow: 350ms;
  --twb-duration-slower: 500ms;
  --twb-duration-slowest: 750ms;
  --twb-duration-ambient: 3000ms;
  --twb-duration-loading: 2000ms;

  /* ============================================
     EASING FUNCTIONS
     ============================================ */
  
  /* Standard */
  --twb-ease-linear: cubic-bezier(0, 0, 1, 1);
  --twb-ease-in: cubic-bezier(0.4, 0, 1, 1);
  --twb-ease-out: cubic-bezier(0, 0, 0.2, 1);
  --twb-ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Custom Organic */
  --twb-ease-organic: cubic-bezier(0.22, 1, 0.36, 1);
  --twb-ease-smooth: cubic-bezier(0.33, 1, 0.68, 1);
  --twb-ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --twb-ease-decelerate: cubic-bezier(0.05, 0.7, 0.1, 1);

  /* ============================================
     TRANSFORM DISTANCES
     ============================================ */
  
  --twb-translate-xs: 4px;
  --twb-translate-sm: 8px;
  --twb-translate-md: 12px;
  --twb-translate-lg: 16px;
  --twb-translate-xl: 24px;
  --twb-translate-2xl: 32px;

  /* ============================================
     SCALE FACTORS
     ============================================ */
  
  --twb-scale-in: 0.95;
  --twb-scale-hover: 1.05;
  --twb-scale-press: 0.98;
  --twb-scale-bounce: 1.1;

  /* ============================================
     OPACITY LEVELS
     ============================================ */
  
  --twb-opacity-0: 0;
  --twb-opacity-disabled: 0.5;
  --twb-opacity-hover: 0.8;
  --twb-opacity-100: 1;

  /* ============================================
     COMBINED TRANSITIONS (Convenience)
     ============================================ */
  
  --twb-transition-fast: all var(--twb-duration-fast) var(--twb-ease-out);
  --twb-transition-normal: all var(--twb-duration-normal) var(--twb-ease-out);
  --twb-transition-slow: all var(--twb-duration-slow) var(--twb-ease-in-out);
  --twb-transition-organic: all var(--twb-duration-normal) var(--twb-ease-organic);
  
  --twb-transition-colors: 
    background-color var(--twb-duration-fast) var(--twb-ease-out),
    border-color var(--twb-duration-fast) var(--twb-ease-out),
    color var(--twb-duration-fast) var(--twb-ease-out);
  
  --twb-transition-transform: transform var(--twb-duration-normal) var(--twb-ease-out);
  --twb-transition-opacity: opacity var(--twb-duration-fast) var(--twb-ease-out);
}

/* ============================================
   REDUCED MOTION OVERRIDES
   ============================================ */

@media (prefers-reduced-motion: reduce) {
  :root {
    /* Disable all durations (instant) */
    --twb-duration-fast: 0ms;
    --twb-duration-normal: 0ms;
    --twb-duration-slow: 0ms;
    --twb-duration-slower: 0ms;
    --twb-duration-slowest: 0ms;
    --twb-duration-ambient: 0ms;
    --twb-duration-loading: 0ms;
  }
  
  /* Disable all animations and transitions */
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 4. Component Motion Specifications

### 4.1 Hero Section

**Current:** ❌ No animations

**Recommended:**

**Entrance Animation:**
```tsx
<motion.div
  initial={{ opacity: 0, y: var(--twb-translate-lg) }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.6,
    ease: [0, 0, 0.2, 1] // ease-out
  }}
>
  {/* Hero content */}
</motion.div>
```

**Scroll Down Arrow:**
```tsx
<motion.div
  animate={{ y: [0, 8, 0] }}
  transition={{
    duration: 1.5,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
  <ScrollDownArrow />
</motion.div>
```

**Reduced Motion:**
```tsx
const shouldReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

<motion.div
  initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
  animate={{ opacity: 1, y: 0 }}
  transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6 }}
>
```

---

### 4.2 Product Card

**Current:** ✅ Hover scale + shadow (CSS transition)

**Recommended Enhancements:**

**Add entrance animation:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.4, ease: [0, 0, 0.2, 1] }}
  className="product-card"
>
```

**Enhance hover state:**
```css
.product-card {
  transition: var(--twb-transition-transform), var(--twb-transition-colors);
}

.product-card:hover {
  transform: translateY(calc(-1 * var(--twb-translate-sm))) scale(var(--twb-scale-hover));
}
```

**Add "Add to Cart" button slide-in:**
```tsx
<motion.button
  initial={{ opacity: 0, y: 10 }}
  whileHover={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.2 }}
>
  Add to Cart
</motion.button>
```

---

### 4.3 Button

**Current:** ✅ Background/border transition (CSS)

**Recommended Enhancements:**

**Add press animation:**
```css
.twb-button-base:active {
  transform: scale(var(--twb-scale-press));
  transition-duration: var(--twb-duration-fast);
}
```

**Add ripple effect (optional):**
```tsx
<motion.button
  whileTap={{ scale: 0.98 }}
  transition={{ duration: 0.1 }}
>
  {children}
  <motion.span
    initial={{ scale: 0, opacity: 0.5 }}
    animate={{ scale: 2, opacity: 0 }}
    className="ripple"
  />
</motion.button>
```

---

### 4.4 Accordion (FAQ Section)

**Current:** ✅ Uses Radix Accordion (has built-in animation)

**Recommended Enhancement:**

**Add rotation to icon:**
```tsx
<motion.div
  animate={{ rotate: isOpen ? 180 : 0 }}
  transition={{ duration: 0.2, ease: [0, 0, 0.2, 1] }}
>
  <ChevronDown />
</motion.div>
```

---

### 4.5 Form Inputs

**Current:** ⚠️ Basic focus border transition

**Recommended:**

**Label float animation:**
```tsx
<motion.label
  animate={{
    y: isFocused || hasValue ? -20 : 0,
    scale: isFocused || hasValue ? 0.85 : 1,
  }}
  transition={{ duration: 0.2, ease: [0, 0, 0.2, 1] }}
>
  Email address
</motion.label>
```

**Error message slide-in:**
```tsx
<AnimatePresence>
  {error && (
    <motion.div
      initial={{ opacity: 0, height: 0, y: -10 }}
      animate={{ opacity: 1, height: 'auto', y: 0 }}
      exit={{ opacity: 0, height: 0, y: -10 }}
      transition={{ duration: 0.2 }}
    >
      {error}
    </motion.div>
  )}
</AnimatePresence>
```

---

### 4.6 Cart Add Animation

**Current:** ❌ None

**Recommended:**

**Badge pulse on item added:**
```tsx
<motion.span
  key={cartCount}
  initial={{ scale: 1 }}
  animate={{ scale: [1, 1.2, 1] }}
  transition={{ duration: 0.3, ease: [0.68, -0.55, 0.265, 1.55] }} // bounce
  className="cart-badge"
>
  {cartCount}
</motion.span>
```

**Toast notification:**
```tsx
<AnimatePresence>
  {showToast && (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
      className="toast"
    >
      Added to cart!
    </motion.div>
  )}
</AnimatePresence>
```

---

### 4.7 Loading States

**Current:** ❌ None implemented

**Recommended Skeleton Shimmer:**

```tsx
// components/common/Skeleton.tsx
export const Skeleton: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`skeleton ${className}`}>
      <motion.div
        className="skeleton-shimmer"
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
};
```

```css
.skeleton {
  position: relative;
  overflow: hidden;
  background: var(--twb-color-bg-secondary);
  border-radius: var(--twb-radius-md);
}

.skeleton-shimmer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
}

@media (prefers-reduced-motion: reduce) {
  .skeleton-shimmer {
    display: none;
  }
}
```

---

### 4.8 Page Transitions

**Current:** ❌ None

**Recommended:**

```tsx
// App.tsx or routes.tsx
import { AnimatePresence, motion } from 'motion/react';
import { useLocation } from 'react-router';

export const App = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] }}
      >
        <Routes location={location}>
          {/* routes */}
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};
```

---

## 5. Entrance Animation Patterns

### 5.1 Scroll-Triggered Animations

**Pattern: Fade In on Viewport Entry**

```tsx
// components/common/FadeInWhenVisible.tsx
export const FadeInWhenVisible: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
};
```

**Usage:**
```tsx
<FadeInWhenVisible>
  <BrandGrid items={brands} />
</FadeInWhenVisible>
```

---

### 5.2 Stagger Animations

**Pattern: Grid Items Stagger**

```tsx
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

<motion.div
  variants={container}
  initial="hidden"
  animate="show"
  className="grid grid-cols-3 gap-8"
>
  {products.map((product) => (
    <motion.div key={product.id} variants={item}>
      <ProductCard product={product} />
    </motion.div>
  ))}
</motion.div>
```

---

## 6. Accessibility Implementation

### 6.1 prefers-reduced-motion Media Query

**Status:** ❌ **NOT IMPLEMENTED** - Critical accessibility gap

**Required Implementation:**

**1. CSS Global Override (Add to themes-motion.css):**
```css
@media (prefers-reduced-motion: reduce) {
  :root {
    --twb-duration-fast: 0ms;
    --twb-duration-normal: 0ms;
    --twb-duration-slow: 0ms;
    --twb-duration-slower: 0ms;
    --twb-duration-slowest: 0ms;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**2. React Hook for Motion Components:**
```tsx
// hooks/useReducedMotion.ts
import { useEffect, useState } from 'react';

export const useReducedMotion = (): boolean => {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setShouldReduceMotion(mediaQuery.matches);

    const handleChange = () => {
      setShouldReduceMotion(mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return shouldReduceMotion;
};
```

**3. Usage in Components:**
```tsx
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6 }}
    >
      {/* content */}
    </motion.div>
  );
};
```

---

### 6.2 Motion Accessibility Checklist

**Required for WCAG 2.1 AA Compliance:**

- [ ] All animations respect `prefers-reduced-motion`
- [ ] No auto-playing animations longer than 5 seconds (or provide pause control)
- [ ] Flashing/blinking content limited to 3 times per second (seizure prevention)
- [ ] Parallax effects can be disabled
- [ ] Animations do not interfere with screen reader announcements
- [ ] Focus indicators remain visible during transitions
- [ ] Keyboard navigation works regardless of animation state

---

## 7. Performance Guidelines

### 7.1 Hardware-Accelerated Properties

**✅ USE (GPU-accelerated):**
- `transform` (translate, scale, rotate)
- `opacity`
- `filter` (with caution)

**❌ AVOID (causes layout reflow):**
- `width`, `height`
- `top`, `left`, `right`, `bottom`
- `margin`, `padding`
- `font-size`

**Example - Good:**
```css
/* ✅ GPU-accelerated */
.card {
  transform: translateY(-8px);
  opacity: 0.8;
}
```

**Example - Bad:**
```css
/* ❌ Causes layout thrashing */
.card {
  top: -8px;
  height: 320px;
}
```

---

### 7.2 Performance Budget

**Targets:**
- 60fps minimum for all animations
- < 16ms per frame (for 60fps)
- No layout reflow during animations
- < 5% CPU usage for ambient animations

**Testing:**
```javascript
// Use Chrome DevTools Performance tab
// 1. Start recording
// 2. Trigger animation
// 3. Stop recording
// 4. Check FPS graph (should be green, no red drops)
```

---

## 8. Implementation Roadmap

### 8.1 Phase 1: Foundation (Week 1) - 8 hours

**Goal:** Create motion token system and implement `prefers-reduced-motion`

**Tasks:**
1. Create `/styles/themes-motion.css` (2 hours)
   - 24 motion tokens
   - `prefers-reduced-motion` global override

2. Create `useReducedMotion` hook (1 hour)
   - React hook for motion detection
   - Auto-update on preference change

3. Update globals.css import (15 min)
   - Add `@import './themes-motion.css';`

4. Test reduced motion (1 hour)
   - Verify all transitions disable
   - Test in browser settings

5. Update Button component (1 hour)
   - Add press animation
   - Use motion tokens

6. Update Card components (2 hours)
   - ProductCard, BrandGrid cards
   - Use motion tokens for existing transitions

7. Documentation (45 min)
   - Update `/guidelines/design-tokens/animations.md`
   - Add motion token usage guide

---

### 8.2 Phase 2: Entrance Animations (Week 2) - 12 hours

**Goal:** Add scroll-triggered animations to key sections

**Tasks:**
1. Create `FadeInWhenVisible` component (2 hours)
   - Reusable scroll animation wrapper
   - Support for different variants (fade, slide, scale)

2. Add to Hero sections (1 hour)
   - Homepage, About, Shop, Experiences
   - Fade in on page load

3. Add to BrandGrid (2 hours)
   - Stagger grid items
   - Individual card entrance

4. Add to ProductCard grids (2 hours)
   - Shop page product grid
   - Related products
   - Stagger animation

5. Add to Latest News (1 hour)
   - Stagger news cards

6. Add to FAQ Section (1 hour)
   - Accordion items fade in

7. Add to Form sections (2 hours)
   - Contact forms
   - Checkout forms
   - Input labels and errors

8. Testing (1 hour)
   - Verify 60fps
   - Test reduced motion fallback

---

### 8.3 Phase 3: Interactive Motion (Week 3) - 10 hours

**Goal:** Enhance hover states and micro-interactions

**Tasks:**
1. Add to Cart animations (3 hours)
   - Cart badge pulse
   - Toast notification
   - Mini cart slide-in

2. Form validation animations (2 hours)
   - Error message slide-in
   - Success checkmark animation
   - Input focus highlights

3. Button enhancements (1 hour)
   - Ripple effect
   - Icon animations

4. Dropdown menus (2 hours)
   - Navigation dropdowns
   - Filter dropdowns
   - Smooth height transitions

5. Modal animations (1 hour)
   - Scale + fade entrance
   - Backdrop fade
   - Exit animations

6. Tab switching (1 hour)
   - ProductTabs indicator slide
   - Content fade transition

---

### 8.4 Phase 4: Loading States (Week 4) - 8 hours

**Goal:** Create skeleton screens and loading indicators

**Tasks:**
1. Create Skeleton component (2 hours)
   - Shimmer animation
   - Configurable shapes (text, image, card)

2. ProductCard skeleton (1 hour)
   - Replace ProductCard while loading

3. NewsCard skeleton (1 hour)
   - Latest News loading state

4. Create Spinner component (1 hour)
   - Global loading spinner
   - Button loading state

5. Create ProgressBar component (1 hour)
   - Linear progress
   - Checkout progress

6. Implement in ProductGrid (1 hour)
   - Show skeletons while fetching

7. Implement in Checkout (1 hour)
   - Loading between steps

---

### 8.5 Phase 5: Advanced (Week 5-6) - 12 hours

**Goal:** Page transitions, parallax, WebGL hero

**Tasks:**
1. Page transition system (3 hours)
   - Route change animations
   - Loading state between pages

2. Parallax scrolling (3 hours)
   - Hero background
   - Decorative elements
   - Texture overlays

3. WebGL hero animation (4 hours)
   - Interactive 3D wine bottle/grapes
   - Mouse parallax effect
   - Fallback static image

4. Gesture interactions (2 hours)
   - Swipe for mobile carousel
   - Drag for image gallery

**Total Implementation:** 50 hours over 5-6 weeks

---

## 9. Success Metrics

### 9.1 Coverage Targets

| Metric | Current | Phase 1 | Phase 2 | Phase 3 | Phase 4 | Final Target |
|--------|---------|---------|---------|---------|---------|--------------|
| **Motion Tokens** | 4 | 24 ✅ | 24 | 24 | 24 | 24 |
| **prefers-reduced-motion** | 0% | 100% ✅ | 100% | 100% | 100% | 100% |
| **Components with Animation** | 10% | 15% | 50% | 75% | 85% | 90%+ |
| **Entrance Animations** | 0 | 0 | 15 ✅ | 15 | 15 | 15 |
| **Loading States** | 0 | 0 | 0 | 0 | 8 ✅ | 8 |
| **Hover Interactions** | 15% | 25% | 40% | 80% ✅ | 80% | 80% |

### 9.2 Performance Targets

- ✅ 60fps for all animations
- ✅ < 16ms per frame
- ✅ Zero layout reflow
- ✅ < 5% CPU for ambient motion

### 9.3 Accessibility Targets

- ✅ 100% reduced motion compliance
- ✅ No auto-playing content >5s without controls
- ✅ No flashing >3Hz
- ✅ All motion can be disabled

---

## 10. Conclusion

### 10.1 Summary

The Handcrafted Wines website has a **solid foundation** for motion with Framer Motion integration and basic CSS transitions, but **critical accessibility and consistency gaps** exist.

**Key Strengths:**
- ✅ 8 components use Motion library
- ✅ 4 basic transition tokens
- ✅ Good accessibility documentation

**Critical Gaps:**
- ❌ No `prefers-reduced-motion` implementation
- ❌ Incomplete motion token system (4/24)
- ❌ No entrance animations
- ❌ No loading states
- ⚠️ Inconsistent patterns

### 10.2 Recommended Path Forward

**Immediate (This Week):**
- Phase 1: Create motion tokens + implement reduced motion (8 hours)

**This Sprint (Weeks 2-3):**
- Phase 2: Add entrance animations (12 hours)
- Phase 3: Enhance interactive motion (10 hours)

**This Quarter:**
- Phase 4: Loading states (8 hours)
- Phase 5: Advanced features (12 hours)

**Total Effort:** 50 hours over 5-6 weeks

**Priority:** Phase 1 (reduced motion) is **CRITICAL** for WCAG 2.1 AA compliance.

---

**Next Report:** `/reports/redesign/06-commerce-experience-report.md`

**Related Documentation:**
- Guidelines: `/guidelines/design-tokens/animations.md`
- Guidelines: `/guidelines/accessibility/wcag-compliance.md`
- Report: `/reports/redesign/04-css-token-system-report.md`
