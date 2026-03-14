# Microinteractions & Animations

**Category:** Design Tokens  
**Domain:** Motion & User Feedback  
**Version:** 1.0  
**Last Updated:** 2024-03-13  
**Status:** Active

---

## Overview

Microinteractions are **small, delightful moments** that provide feedback, guide users, and inject personality into The Wire Brand experience. They bridge the gap between static design and living, breathing interfaces.

**Microinteraction Principles:**
- **Purposeful** - Every animation serves a function
- **Subtle** - Never distracting or overwhelming
- **Organic** - Follows hand-drawn, natural movement
- **Responsive** - Immediate feedback to user actions
- **Accessible** - Respects prefers-reduced-motion
- **Performance** - Smooth 60fps animations

**Animation Categories:**
1. **Hover States** - Button lift, card tilt, image zoom
2. **Loading States** - Spinners, skeletons, progress
3. **Page Transitions** - Route changes, modal open/close
4. **Scroll Animations** - Fade-in, slide-up, parallax
5. **Success/Error Feedback** - Toasts, checkmarks, shakes
6. **Interactive Feedback** - Add to cart, wishlist toggle, form validation

---

## Motion Library

### Motion (Framer Motion)

**Import syntax:**
```tsx
import { motion } from 'motion/react';
```

**Core motion tokens:**
```tsx
// Easing curves (organic, natural)
export const easings = {
  smooth: [0.34, 1.56, 0.64, 1], // Bouncy, playful
  gentle: [0.25, 0.46, 0.45, 0.94], // Subtle, elegant
  snappy: [0.4, 0, 0.2, 1], // Quick, responsive
};

// Duration tokens (milliseconds)
export const durations = {
  instant: 100,
  fast: 200,
  normal: 300,
  slow: 500,
  slower: 700,
};

// Spring physics (natural bounce)
export const springs = {
  gentle: { type: 'spring', stiffness: 200, damping: 20 },
  bouncy: { type: 'spring', stiffness: 300, damping: 15 },
  snappy: { type: 'spring', stiffness: 400, damping: 25 },
};
```

---

## 1. Hover States

### Button Lift & Shadow

```tsx
/**
 * Button with organic lift on hover.
 * Slightly rotates and lifts with shadow.
 */
<motion.button
  whileHover={{
    y: -4,
    rotate: -0.5,
    boxShadow: '0 8px 24px rgba(90, 45, 59, 0.2)',
  }}
  whileTap={{
    y: 0,
    rotate: 0,
    boxShadow: '0 2px 8px rgba(90, 45, 59, 0.15)',
  }}
  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
  className="bg-[var(--twb-color-plum)] text-white px-6 py-3 rounded-twb-md"
  style={{ transform: 'rotate(-0.5deg)' }} // Initial slight tilt
>
  Add to Cart
</motion.button>
```

### Card Tilt & Scale

```tsx
/**
 * Product card with organic tilt on hover.
 * Mimics picking up a physical wine label.
 */
<motion.div
  whileHover={{
    scale: 1.02,
    rotate: -1,
    y: -8,
  }}
  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
  className="product-card"
>
  {/* Card content */}
</motion.div>
```

### Image Zoom (Smooth Scale)

```tsx
/**
 * Image zoom on hover (product cards, galleries).
 */
<div className="overflow-hidden rounded-twb-md">
  <motion.img
    whileHover={{ scale: 1.1 }}
    transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    src={product.image}
    alt={product.name}
    className="w-full h-full object-cover"
  />
</div>
```

### Hand-Drawn Underline Reveal

```tsx
/**
 * Animated hand-drawn underline on link hover.
 */
<Link
  to="/about"
  className="relative inline-block group"
>
  <span>Our Story</span>
  
  {/* Animated underline SVG */}
  <motion.svg
    className="absolute -bottom-1 left-0 w-full h-1 opacity-0 group-hover:opacity-100"
    initial={{ pathLength: 0 }}
    whileHover={{ pathLength: 1 }}
    transition={{ duration: 0.4, ease: 'easeOut' }}
    viewBox="0 0 100 3"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      d="M0,1.5 Q25,0.5 50,2 T100,1.5"
      stroke="var(--twb-color-plum)"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
  </motion.svg>
</Link>
```

---

## 2. Loading States

### Hand-Drawn Spinner

```tsx
/**
 * Organic loading spinner (hand-drawn circle).
 */
export function HandDrawnSpinner({ size = 40 }: { size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ rotate: 360 }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <circle
        cx="24"
        cy="24"
        r="20"
        fill="none"
        stroke="var(--twb-color-plum)"
        strokeWidth="3"
        strokeDasharray="80 40"
        strokeLinecap="round"
        opacity="0.6"
      />
    </motion.svg>
  );
}
```

### Skeleton Pulse

```tsx
/**
 * Skeleton loading with organic pulse.
 */
<div className="space-y-4">
  {Array.from({ length: 3 }).map((_, i) => (
    <motion.div
      key={i}
      animate={{
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        delay: i * 0.2,
        ease: 'easeInOut',
      }}
      className="h-24 bg-gray-200 rounded-twb-md"
    />
  ))}
</div>
```

### Progress Bar (Organic)

```tsx
/**
 * Progress bar with hand-drawn path.
 */
export function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="relative h-3 bg-[var(--twb-color-paper)] rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="h-full bg-[var(--twb-color-plum)] rounded-full"
        style={{
          // Organic wobble at edges
          borderRadius: '999px 999px 999px 999px',
        }}
      />
      
      {/* Hand-drawn texture overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,10 Q5,8 10,10 T20,10' stroke='white' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: '20px 20px',
          backgroundRepeat: 'repeat-x',
        }}
      />
    </div>
  );
}
```

---

## 3. Page Transitions

### Route Change Fade

```tsx
/**
 * Page transition wrapper (fade + slide up).
 */
import { useLocation } from 'react-router';
import { AnimatePresence, motion } from 'motion/react';

export function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
```

### Modal Open/Close

```tsx
/**
 * Modal with organic scale + fade transition.
 */
<AnimatePresence>
  {isOpen && (
    <>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
      />
      
      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-twb-lg p-8"
      >
        {/* Modal content */}
      </motion.div>
    </>
  )}
</AnimatePresence>
```

---

## 4. Scroll Animations

### Fade In on Scroll

```tsx
/**
 * Element fades in when scrolling into view.
 */
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-100px' }}
  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
>
  <h2>Our Wines</h2>
</motion.div>
```

### Stagger Children

```tsx
/**
 * Children elements stagger animate on scroll.
 */
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }}
  className="grid grid-cols-3 gap-8"
>
  {wines.map((wine, index) => (
    <motion.div
      key={wine.id}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <ProductCard wine={wine} />
    </motion.div>
  ))}
</motion.div>
```

### Parallax Scroll

```tsx
/**
 * Background image parallax on scroll.
 */
import { useScroll, useTransform } from 'motion/react';

export function ParallaxSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Parallax background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 -z-10"
      >
        <img
          src="/vineyard-landscape.jpg"
          alt="Vineyard"
          className="w-full h-[130%] object-cover"
        />
      </motion.div>
      
      {/* Foreground content */}
      <Container className="relative z-10 h-full flex items-center">
        <h1>Handcrafted in Paarl</h1>
      </Container>
    </section>
  );
}
```

---

## 5. Success/Error Feedback

### Checkmark Success Animation

```tsx
/**
 * Animated checkmark (success feedback).
 */
export function CheckmarkAnimation({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 180 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="flex items-center justify-center w-16 h-16 bg-[var(--twb-color-vine)] rounded-full"
        >
          <motion.svg
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="w-10 h-10"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M5 13l4 4L19 7"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

### Error Shake

```tsx
/**
 * Shake animation for error states (form validation).
 */
const [error, setError] = useState(false);

<motion.div
  animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
  transition={{ duration: 0.4 }}
>
  <input
    type="email"
    className={error ? 'border-[var(--twb-border-error)]' : ''}
  />
</motion.div>
```

### Toast Slide In

```tsx
/**
 * Toast notification slide in from top.
 */
<AnimatePresence>
  {showToast && (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="fixed top-4 right-4 bg-white border border-[var(--twb-border-tertiary)] rounded-twb-lg shadow-twb-xl p-4 z-50"
    >
      <p className="font-medium">Added to cart!</p>
    </motion.div>
  )}
</AnimatePresence>
```

---

## 6. Interactive Feedback

### Add to Cart (Button State)

```tsx
/**
 * Add to cart button with multi-state animation.
 */
const [addState, setAddState] = useState<'idle' | 'adding' | 'added'>('idle');

const handleAddToCart = async () => {
  setAddState('adding');
  await addToCart(wine, 1);
  setAddState('added');
  
  setTimeout(() => setAddState('idle'), 2000);
};

<motion.button
  onClick={handleAddToCart}
  disabled={addState !== 'idle'}
  animate={{
    backgroundColor: addState === 'added' 
      ? 'var(--twb-color-vine)' 
      : 'var(--twb-color-plum)',
  }}
  className="px-6 py-3 text-white rounded-twb-md"
>
  <AnimatePresence mode="wait">
    {addState === 'idle' && (
      <motion.span
        key="idle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        Add to Cart
      </motion.span>
    )}
    
    {addState === 'adding' && (
      <motion.div
        key="adding"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"
      />
    )}
    
    {addState === 'added' && (
      <motion.span
        key="added"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        className="flex items-center gap-2"
      >
        <Check className="h-5 w-5" />
        <span>Added!</span>
      </motion.span>
    )}
  </AnimatePresence>
</motion.button>
```

### Wishlist Heart (Toggle)

```tsx
/**
 * Wishlist heart with scale + fill animation.
 */
const [isWishlisted, setIsWishlisted] = useState(false);

<motion.button
  onClick={() => setIsWishlisted(!isWishlisted)}
  whileTap={{ scale: 0.9 }}
  className="p-2"
>
  <motion.div
    animate={{
      scale: isWishlisted ? [1, 1.3, 1] : 1,
    }}
    transition={{ duration: 0.3 }}
  >
    <Heart
      className={cn(
        "h-6 w-6 transition-colors",
        isWishlisted 
          ? "fill-[var(--twb-color-plum)] text-[var(--twb-color-plum)]" 
          : "text-[var(--twb-color-ink)]"
      )}
    />
  </motion.div>
</motion.button>
```

---

## Accessibility: Reduced Motion

### Respect User Preferences

```tsx
/**
 * Disable animations for users who prefer reduced motion.
 */
import { useReducedMotion } from 'motion/react';

export function AnimatedCard({ children }) {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.div
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
      animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
```

**CSS alternative:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Performance Best Practices

### GPU-Accelerated Properties

**✅ Animate these (cheap, GPU-accelerated):**
- `transform` (translate, scale, rotate)
- `opacity`

**❌ Avoid animating these (expensive, causes reflow):**
- `width`, `height`
- `top`, `left`, `right`, `bottom`
- `margin`, `padding`

**Example:**
```tsx
// ❌ Bad: Animates width (expensive)
<motion.div animate={{ width: '100%' }}>

// ✅ Good: Animates scaleX (GPU-accelerated)
<motion.div animate={{ scaleX: 1 }} style={{ transformOrigin: 'left' }}>
```

### Will-Change Optimization

```css
/* Add will-change for elements that will animate */
.animated-element {
  will-change: transform, opacity;
}

/* Remove will-change after animation completes */
.animated-element.animation-done {
  will-change: auto;
}
```

---

## Related Guidelines

- [Animations](/guidelines/design-tokens/animations.md) - Animation token system
- [Hand-Drawn Aesthetic](/guidelines/design-tokens/hand-drawn-aesthetic.md) - Organic motion
- [Buttons](/guidelines/design-tokens/buttons.md) - Button hover states

---

## Changelog

### Version 1.0 (2024-03-13)
- Motion library and token system established
- Hover state animations documented
- Loading state animations created
- Page transition patterns added
- Scroll animations provided
- Success/error feedback animations implemented
- Interactive feedback patterns documented
- Accessibility (reduced motion) included
- Performance best practices added

---

**Questions or Issues?**  
Contact the design system team for animation implementation support.
