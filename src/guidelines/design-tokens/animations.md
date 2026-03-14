# Animation Design Tokens

**Category:** Design Tokens  
**Domain:** Animations & Transitions  
**Version:** 1.0  
**Last Updated:** 2024-03-13  
**Status:** Active

---

## Overview

The Wire Brand animation system creates organic, natural motion that feels intentional and calm. Animations should enhance storytelling without overwhelming content, respecting user preferences for reduced motion.

**Key Characteristics:**
- Organic easing curves (no harsh linear motion)
- Purposeful animation (enhance UX, not decoration)
- Respect `prefers-reduced-motion`
- Subtle, wine-inspired motion (slow pour, gentle swirl)
- Performance-optimized (GPU-accelerated properties)

---

## Token Definitions

### Duration Tokens

| Token Name | CSS Value | Usage | Feel |
|------------|-----------|-------|------|
| `twb-duration-instant` | `0ms` | Immediate changes (no animation) | Instant |
| `twb-duration-fast` | `150ms` | Quick feedback (button press, hover) | Snappy |
| `twb-duration-base` | `250ms` | Standard transitions (fades, color changes) | Natural |
| `twb-duration-moderate` | `350ms` | Card movements, panel slides | Smooth |
| `twb-duration-slow` | `500ms` | Modal entrances, large movements | Deliberate |
| `twb-duration-slower` | `700ms` | Hero transitions, storytelling | Thoughtful |
| `twb-duration-slowest` | `1000ms` | Page transitions, major state changes | Cinematic |

### Easing Tokens (Cubic Bezier)

| Token Name | CSS Value | Usage | Motion Feel |
|------------|-----------|-------|-------------|
| `twb-ease-linear` | `linear` | Progress bars, loaders | Mechanical |
| `twb-ease-default` | `ease` | General purpose (browser default) | Balanced |
| `twb-ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | Exit animations | Accelerate out |
| `twb-ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | Enter animations | Decelerate in |
| `twb-ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | Bidirectional motion | Smooth both ends |
| `twb-ease-wine-pour` | `cubic-bezier(0.34, 0.61, 0.29, 0.98)` | Organic, flowing motion | Liquid-like |
| `twb-ease-wine-swirl` | `cubic-bezier(0.68, -0.55, 0.27, 1.55)` | Playful bounce | Gentle overshoot |
| `twb-ease-cork-pop` | `cubic-bezier(0.68, -0.22, 0.27, 1.22)` | Celebratory entrance | Slight bounce |
| `twb-ease-smooth` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Smooth, elegant | Luxury feel |

### Motion Presets (Combined Duration + Easing)

| Preset Name | Duration | Easing | Usage |
|-------------|----------|--------|-------|
| `twb-transition-fade` | `250ms` | `ease-out` | Opacity changes |
| `twb-transition-slide` | `350ms` | `ease-in-out` | Panel slides, drawers |
| `twb-transition-scale` | `250ms` | `wine-pour` | Scale up/down |
| `twb-transition-bounce` | `500ms` | `wine-swirl` | Playful interactions |
| `twb-transition-smooth` | `350ms` | `smooth` | Premium interactions |
| `twb-transition-quick` | `150ms` | `ease-out` | Micro-interactions |

---

## Implementation

### CSS Variables (globals.css)

```css
:root {
  /* Duration */
  --twb-duration-instant: 0ms;
  --twb-duration-fast: 150ms;
  --twb-duration-base: 250ms;
  --twb-duration-moderate: 350ms;
  --twb-duration-slow: 500ms;
  --twb-duration-slower: 700ms;
  --twb-duration-slowest: 1000ms;
  
  /* Easing */
  --twb-ease-linear: linear;
  --twb-ease-default: ease;
  --twb-ease-in: cubic-bezier(0.4, 0, 1, 1);
  --twb-ease-out: cubic-bezier(0, 0, 0.2, 1);
  --twb-ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --twb-ease-wine-pour: cubic-bezier(0.34, 0.61, 0.29, 0.98);
  --twb-ease-wine-swirl: cubic-bezier(0.68, -0.55, 0.27, 1.55);
  --twb-ease-cork-pop: cubic-bezier(0.68, -0.22, 0.27, 1.22);
  --twb-ease-smooth: cubic-bezier(0.25, 0.1, 0.25, 1);
  
  /* Motion Presets */
  --twb-transition-fade: opacity var(--twb-duration-base) var(--twb-ease-out);
  --twb-transition-slide: transform var(--twb-duration-moderate) var(--twb-ease-in-out);
  --twb-transition-scale: transform var(--twb-duration-base) var(--twb-ease-wine-pour);
  --twb-transition-bounce: transform var(--twb-duration-slow) var(--twb-ease-wine-swirl);
  --twb-transition-smooth: all var(--twb-duration-moderate) var(--twb-ease-smooth);
  --twb-transition-quick: all var(--twb-duration-fast) var(--twb-ease-out);
}
```

### Tailwind Configuration (if extending)

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      transitionDuration: {
        'twb-fast': '150ms',
        'twb-base': '250ms',
        'twb-moderate': '350ms',
        'twb-slow': '500ms',
        'twb-slower': '700ms',
        'twb-slowest': '1000ms',
      },
      transitionTimingFunction: {
        'twb-wine-pour': 'cubic-bezier(0.34, 0.61, 0.29, 0.98)',
        'twb-wine-swirl': 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
        'twb-cork-pop': 'cubic-bezier(0.68, -0.22, 0.27, 1.22)',
        'twb-smooth': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      }
    }
  }
}
```

---

## Usage Guidelines

### When to Animate

**✅ Animate:**
- State changes (hover, focus, active)
- Content appearance/disappearance
- Navigation transitions
- Feedback confirmation (success, error)
- Loading states
- Modal/drawer open/close
- Accordion expand/collapse

**❌ Avoid animating:**
- Decorative elements (unless intentional storytelling)
- Looping animations (distracting)
- Auto-playing animations (accessibility)
- Text content (readability concern)

### Performance-Optimized Properties

**GPU-accelerated (use these):**
- `transform` (translate, scale, rotate)
- `opacity`
- `filter` (sparingly)

**CPU-intensive (avoid):**
- `width`, `height` (causes layout reflow)
- `top`, `left`, `margin` (use `transform` instead)
- `background-position` (use `transform` on pseudo-element)

---

## Component-Specific Animations

### Buttons

```tsx
// Standard button hover
className="transition-all duration-twb-fast hover:scale-105 active:scale-95"

// Button with shadow shift
className="transition-all duration-twb-base hover:shadow-twb-md active:shadow-twb-inner"

// CTA with bounce
className="transition-transform duration-twb-moderate ease-twb-cork-pop hover:scale-110"
```

### Cards

```tsx
// Card hover lift
className="transition-all duration-twb-moderate hover:-translate-y-2 hover:shadow-twb-card-hover"

// Card entrance (with Motion)
import { motion } from 'motion/react';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: [0.34, 0.61, 0.29, 0.98] }} // wine-pour
  className="card"
>
  {/* Content */}
</motion.div>
```

### Modals

```tsx
// Modal entrance (Motion)
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.95 }}
  transition={{ duration: 0.35, ease: 'easeOut' }}
  className="modal"
>
  {/* Modal content */}
</motion.div>

// Modal backdrop
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.25 }}
  className="fixed inset-0 bg-black/50"
/>
```

### Navigation

```tsx
// Mobile menu slide
<motion.div
  initial={{ x: '-100%' }}
  animate={{ x: 0 }}
  exit={{ x: '-100%' }}
  transition={{ duration: 0.35, ease: 'easeInOut' }}
  className="mobile-menu"
>
  {/* Menu items */}
</motion.div>

// Mega menu dropdown
<motion.div
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -5 }}
  transition={{ duration: 0.25, ease: 'easeOut' }}
  className="mega-menu"
>
  {/* Content */}
</motion.div>
```

### Forms

```tsx
// Input focus
className="transition-all duration-twb-fast focus:border-2 focus:border-[var(--twb-border-focus)]"

// Error shake (Motion)
const [error, setError] = useState(false);

<motion.div
  animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
  transition={{ duration: 0.4 }}
>
  <input className="border-2 border-[var(--twb-border-error)]" />
</motion.div>
```

### Loading States

```tsx
// Spinner (CSS)
@keyframes spin {
  to { transform: rotate(360deg); }
}

.spinner {
  animation: spin var(--twb-duration-slowest) linear infinite;
}

// Pulse (Motion)
<motion.div
  animate={{ opacity: [0.5, 1, 0.5] }}
  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
  className="loading-indicator"
/>
```

---

## Reduced Motion Support

**Critical for accessibility:** Always respect `prefers-reduced-motion`.

### Implementation

```css
/* Disable all animations for reduced motion preference */
@media (prefers-reduced-motion: reduce) {
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

### Motion React Hook

```tsx
import { useReducedMotion } from 'motion/react';

function MyComponent() {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.div
      animate={{ x: shouldReduceMotion ? 0 : 100 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
    >
      {/* Content */}
    </motion.div>
  );
}
```

---

## Wine-Inspired Motion Patterns

### Wine Pour Effect
**Usage:** Smooth, flowing content reveals

```tsx
<motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.7,
    ease: [0.34, 0.61, 0.29, 0.98] // wine-pour
  }}
>
  {/* Content flows in like wine pouring */}
</motion.div>
```

### Wine Swirl Effect
**Usage:** Playful hover states, celebration moments

```tsx
<motion.div
  whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.05 }}
  transition={{
    duration: 0.5,
    ease: [0.68, -0.55, 0.27, 1.55] // wine-swirl
  }}
>
  {/* Element swirls like wine in glass */}
</motion.div>
```

### Cork Pop Effect
**Usage:** Success confirmations, awards, special moments

```tsx
<motion.div
  initial={{ scale: 0, y: 50 }}
  animate={{ scale: 1, y: 0 }}
  transition={{
    duration: 0.5,
    ease: [0.68, -0.22, 0.27, 1.22] // cork-pop (slight bounce)
  }}
>
  {/* Element pops in with celebration */}
</motion.div>
```

---

## Stagger Animations (Lists/Grids)

### Product Grid Stagger

```tsx
<motion.div
  variants={{
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }}
  initial="hidden"
  animate="show"
  className="grid grid-cols-3 gap-6"
>
  {products.map(product => (
    <motion.div
      key={product.id}
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5, ease: [0.34, 0.61, 0.29, 0.98] }}
      className="product-card"
    >
      {/* Product content */}
    </motion.div>
  ))}
</motion.div>
```

---

## Scroll Animations

### Parallax Effect (Hero Images)

```tsx
import { useScroll, useTransform, motion } from 'motion/react';

function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  
  return (
    <div className="relative overflow-hidden">
      <motion.img
        src="/hero-vineyard.jpg"
        style={{ y }}
        className="w-full h-screen object-cover"
      />
    </div>
  );
}
```

### Scroll-Triggered Fade-In

```tsx
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

function Section() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {/* Section content */}
    </motion.section>
  );
}
```

---

## Page Transitions

### Route Transition (React Router)

```tsx
import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
      >
        {/* Route content */}
      </motion.div>
    </AnimatePresence>
  );
}
```

---

## Accessibility Checklist

- [ ] All animations respect `prefers-reduced-motion`
- [ ] Animations do not loop indefinitely
- [ ] No auto-playing animations on page load (or provide pause control)
- [ ] Animations do not flash more than 3 times per second (seizure risk)
- [ ] Focus indicators are not animated (or have instant fallback)
- [ ] Essential content is not hidden behind animations

---

## Performance Checklist

- [ ] Use `transform` and `opacity` (GPU-accelerated)
- [ ] Avoid animating `width`, `height`, `top`, `left`
- [ ] Use `will-change` sparingly (only during animation)
- [ ] Remove `will-change` after animation completes
- [ ] Limit simultaneous animations (<5 elements)
- [ ] Test on low-end devices

---

## Migration Path

### From Legacy Animations

| Legacy | New Token | Notes |
|--------|-----------|-------|
| `transition-all duration-300` | `transition-all duration-twb-base` | Semantic naming |
| `ease-in-out` | `ease-twb-wine-pour` | Organic motion |
| Custom springs | `ease-twb-wine-swirl` | Playful bounce |

---

## Related Guidelines

- [Buttons](/guidelines/design-tokens/buttons.md) - Button animation states
- [Forms](/guidelines/design-tokens/forms.md) - Form transition patterns
- [Shadows](/guidelines/design-tokens/shadows.md) - Shadow transitions
- [WCAG Compliance](/guidelines/accessibility/wcag-compliance.md) - Motion accessibility

---

## Changelog

### Version 1.0 (2024-03-13)
- Initial animation system created
- 7 duration tokens defined
- 9 easing curves (including wine-inspired)
- 6 motion presets
- Reduced motion support documented
- Wine-inspired motion patterns added
- Performance and accessibility guidelines included

---

**Questions or Issues?**  
Contact the design system team or reference the main [Design Tokens Overview](/guidelines/design-tokens/).
