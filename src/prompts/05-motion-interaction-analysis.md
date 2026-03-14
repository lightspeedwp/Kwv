# Motion & Interaction Analysis Prompt

## Objective

Analyze current motion and interaction patterns and develop a comprehensive motion design system aligned with The Wire Brand's "expressive but controlled" aesthetic, respecting accessibility requirements.

## Input Sources

1. `/imports/pasted_text/redesign-brief.md` (Section 9: Motion direction)
2. Current component animations in `/components/` directory
3. `/Guidelines.md` Section 1.6 (Motion, animation & carousels)
4. Motion library usage (currently Motion/Framer Motion)

## Analysis Requirements

### 1. Current Motion Audit

Inventory all existing animations and interactions:

#### Animation Usage
Scan all component files for:
- `motion.*` components (from Motion/Framer Motion)
- CSS transitions
- CSS animations
- Hover states
- Focus states
- Loading states
- Scroll-triggered animations

**Example Output:**
```
Component: Hero.tsx
Animations Found:
- Fade-in on mount (motion.div, opacity 0→1, duration: 0.6s)
- Parallax on scroll (background image translateY)
- Button hover scale (transform: scale(1.05))
Issues:
- No reduced-motion handling
- Parallax may cause motion sickness
- Duration token not used
```

#### Interaction Patterns
Document:
- Hover effects (buttons, links, cards, images)
- Click/tap feedback
- Focus indicators
- Scroll behaviors (smooth scroll, snap scroll)
- Page transitions (if any)
- Loading indicators
- Success/error animations

### 2. Gap Analysis

Compare current motion against The Wire Brand requirements:

#### Required Motion Style (from brief)
- slow drift
- parallax layers
- sketch-line reveal
- bottle label shimmer
- grain movement
- light paper flutter
- contour-line animations
- liquid-inspired easing
- off-axis hover motion
- subtle 3D tilt on cards or bottles

#### Missing Patterns
- Organic motion (everything feels too mechanical)
- Hand-drawn reveal animations
- Atmospheric background motion
- Liquid/wine-inspired easing curves
- Paper texture movement
- Subtle imperfection in motion paths

#### Accessibility Issues
- Missing `prefers-reduced-motion` checks
- Motion that may cause vestibular issues
- Auto-playing animations without pause
- Motion-dependent content

### 3. Motion Design System

Define the complete motion system:

#### Motion Principles

**1. Craft Over Flash**
- Animations should feel handmade, slightly irregular
- Avoid perfectly linear or mechanical motion
- Embrace subtle imperfection (wobble, drift)

**2. Atmosphere Over Action**
- Ambient motion supports mood (grain drift, parallax)
- Interactive motion confirms action (button press, add to cart)
- Transitions reveal content gracefully (fade, rise, blur)

**3. Restraint Over Spectacle**
- One focal animation per section
- Background motion stays subtle (opacity ≤ 0.3)
- Respect reduced motion preferences

**4. Liquid Flow**
- Easing curves inspired by wine pouring
- Slow start, organic acceleration, gentle settle
- No hard stops or jarring starts

#### Motion Categories

##### 1. Ambient Motion (Always Active, Subtle)
```typescript
// Paper grain drift
{
  animate: { x: [0, 10, 0], y: [0, 5, 0] },
  transition: {
    duration: 20,
    repeat: Infinity,
    ease: "linear"
  }
}

// Parallax background (scroll-linked)
{
  y: scrollY * 0.5 // Gentle parallax factor
}

// Floating elements (organic drift)
{
  animate: { y: [-5, 5, -5], rotate: [-1, 1, -1] },
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut"
  }
}
```

##### 2. Entrance Animations (Page Load, Scroll Reveal)
```typescript
// Hero fade-in
{
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
}

// Stagger children (cards, items)
{
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] },
  variants: {
    container: {
      animate: { transition: { staggerChildren: 0.1 } }
    }
  }
}

// Hand-drawn line reveal (SVG path)
{
  initial: { pathLength: 0 },
  animate: { pathLength: 1 },
  transition: { duration: 1.2, ease: "easeInOut" }
}
```

##### 3. Interactive Motion (Hover, Focus, Active)
```typescript
// Button hover (organic lift)
{
  whileHover: {
    y: -3,
    rotate: -0.5, // Subtle off-axis tilt
    transition: { duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }
  },
  whileTap: { scale: 0.98 }
}

// Card hover (3D tilt with shadow)
{
  whileHover: {
    rotateX: 5,
    rotateY: 5,
    scale: 1.02,
    boxShadow: "0 20px 50px rgba(0,0,0,0.15)"
  }
}

// Link underline (scribble draw)
{
  initial: { scaleX: 0 },
  whileHover: { scaleX: 1 },
  transition: { duration: 0.3, ease: "easeOut" }
}
```

##### 4. State Change Animations
```typescript
// Accordion expand/collapse
{
  initial: { height: 0, opacity: 0 },
  animate: { height: "auto", opacity: 1 },
  exit: { height: 0, opacity: 0 },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
}

// Tab switch (crossfade)
{
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
  transition: { duration: 0.3 }
}

// Add to cart success
{
  animate: { scale: [1, 1.2, 1], opacity: [1, 1, 0] },
  transition: { duration: 0.6 }
}
```

##### 5. Loading & Progress
```typescript
// Loading spinner (organic rotation)
{
  animate: { rotate: 360 },
  transition: { duration: 1.5, repeat: Infinity, ease: "linear" }
}

// Skeleton shimmer
{
  animate: {
    backgroundPosition: ["200% 0", "-200% 0"]
  },
  transition: { duration: 2, repeat: Infinity, ease: "linear" }
}

// Progress bar (liquid fill)
{
  initial: { scaleX: 0 },
  animate: { scaleX: progress / 100 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
}
```

#### Custom Easing Curves

Define wine-inspired easing functions:

```css
:root {
  /* Standard easing (from token system) */
  --twb-ease-standard: cubic-bezier(0.2, 0.8, 0.2, 1);
  --twb-ease-drift: cubic-bezier(0.22, 1, 0.36, 1);
  
  /* Wine-inspired easing */
  --twb-ease-pour: cubic-bezier(0.4, 0, 0.2, 1); /* Liquid flow */
  --twb-ease-settle: cubic-bezier(0, 0, 0.2, 1); /* Gentle landing */
  --twb-ease-organic: cubic-bezier(0.34, 1.56, 0.64, 1); /* Soft bounce */
}
```

In JavaScript:
```typescript
export const easings = {
  standard: [0.2, 0.8, 0.2, 1],
  drift: [0.22, 1, 0.36, 1],
  pour: [0.4, 0, 0.2, 1],
  settle: [0, 0, 0.2, 1],
  organic: [0.34, 1.56, 0.64, 1],
} as const;
```

### 4. Advanced Motion Patterns

#### WebGL/Canvas Animations
For hero backgrounds and feature sections:

**Vineyard Contour Lines (Floating)**
- Animated topographic lines drifting across background
- Low opacity (0.1-0.2)
- Slow movement (20-30s cycle)
- Particle system or SVG paths

**Atmospheric Grain**
- Subtle paper texture movement
- Film grain shader effect
- Responds to scroll or mouse position
- Very low performance impact

**3D Wine Bottle Showcase**
- Covered in detail in prompt 07 (WebGL 3D Feature)
- Gentle auto-rotation
- Mouse-interactive tilt
- Zoom on hover

#### Scroll-Triggered Animations

Use Intersection Observer for performance:

```typescript
// Scroll reveal pattern
const { ref, inView } = useInView({
  threshold: 0.2,
  triggerOnce: true,
});

return (
  <motion.div
    ref={ref}
    initial={{ opacity: 0, y: 40 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.8, ease: easings.drift }}
  >
    {children}
  </motion.div>
);
```

#### Parallax Layers

Multi-layer parallax with organic speed variations:

```typescript
// Hero parallax layers
<motion.div style={{ y: useTransform(scrollY, [0, 500], [0, -50]) }}>
  {/* Background layer (slowest) */}
</motion.div>
<motion.div style={{ y: useTransform(scrollY, [0, 500], [0, -150]) }}>
  {/* Mid layer */}
</motion.div>
<motion.div style={{ y: useTransform(scrollY, [0, 500], [0, -250]) }}>
  {/* Foreground layer (fastest) */}
</motion.div>
```

### 5. Accessibility Motion Patterns

#### Reduced Motion Handling

Mandatory implementation:

```typescript
import { useReducedMotion } from 'motion/react';

function AnimatedComponent() {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: shouldReduceMotion ? 0.01 : 0.8,
        ease: shouldReduceMotion ? "linear" : easings.drift
      }}
    >
      {content}
    </motion.div>
  );
}
```

CSS alternative:
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

#### Safe Motion Patterns
When reduced motion is preferred:
- Replace parallax with static backgrounds
- Use instant fades instead of slides
- Remove continuous animations (grain, drift)
- Keep focus indicators (critical for navigation)
- Simplify to opacity changes only

### 6. Component-Specific Motion

Detailed motion specs for key components:

#### Hero Component
```typescript
<motion.section className="twb-hero">
  {/* Background parallax */}
  <motion.div
    className="twb-hero__bg"
    style={{ y: bgParallax }}
  >
    <img src={bg} alt="" />
  </motion.div>
  
  {/* Grain overlay drift */}
  <motion.div
    className="twb-hero__grain"
    animate={{ x: [0, 10, 0], y: [0, 5, 0] }}
    transition={{ duration: 20, repeat: Infinity }}
  />
  
  {/* Content fade-in */}
  <motion.div
    className="twb-hero__content"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.2, ease: easings.drift }}
  >
    {/* Title with underline draw */}
    <h1>{title}</h1>
    <motion.div
      className="twb-hero__underline"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
    />
  </motion.div>
</motion.section>
```

#### Product Card
```typescript
<motion.article
  className="twb-card twb-card--wine"
  whileHover={{
    y: -8,
    rotate: -0.5,
    transition: { duration: 0.3, ease: easings.standard }
  }}
>
  {/* Image shimmer on hover */}
  <div className="twb-card__media">
    <motion.img
      src={wine.image}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.6, ease: easings.pour }}
    />
  </div>
  
  {/* Content */}
  <div className="twb-card__content">
    {/* ... */}
  </div>
  
  {/* Organic border reveal on hover */}
  <motion.svg
    className="twb-card__border"
    initial={{ pathLength: 0 }}
    whileHover={{ pathLength: 1 }}
    transition={{ duration: 0.6 }}
  >
    <path d="..." />
  </motion.svg>
</motion.article>
```

#### Button Component
```typescript
<motion.button
  className="twb-button"
  whileHover={{
    y: -2,
    rotate: -0.3,
    boxShadow: "0 8px 20px rgba(90, 45, 59, 0.3)"
  }}
  whileTap={{ scale: 0.98 }}
  transition={{ duration: 0.2, ease: easings.standard }}
>
  <span>{label}</span>
  
  {/* Scribble underline on hover */}
  <motion.div
    className="twb-button__scribble"
    initial={{ scaleX: 0 }}
    whileHover={{ scaleX: 1 }}
    style={{ originX: 0 }}
  />
</motion.button>
```

#### Accordion
```typescript
<motion.div className="twb-accordion__item">
  <button onClick={toggle} className="twb-accordion__trigger">
    {title}
    <motion.svg
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <ChevronDown />
    </motion.svg>
  </button>
  
  <AnimatePresence>
    {isOpen && (
      <motion.div
        className="twb-accordion__content"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: easings.drift }}
      >
        {content}
      </motion.div>
    )}
  </AnimatePresence>
</motion.div>
```

### 7. Performance Considerations

#### Motion Budget
Define performance targets:

- **Hero Section:** 1 parallax effect + 1 grain animation (60fps)
- **Cards Grid:** Hover effects only (no continuous animation)
- **Ambient Effects:** Max 2 per viewport (opacity ≤ 0.3)
- **Scroll Animations:** Use Intersection Observer, trigger once
- **Transform Properties:** Prefer transform/opacity (GPU-accelerated)

#### Optimization Strategies
- Use `will-change` sparingly and remove after animation
- Debounce scroll listeners
- Use `requestAnimationFrame` for custom animations
- Lazy-load heavy WebGL features
- Provide static fallbacks for low-end devices

### 8. Motion Testing Checklist

For each animated component:

- [ ] Reduced motion preference respected
- [ ] Animation duration uses token
- [ ] Easing curve uses defined constant
- [ ] No layout thrashing (check DevTools)
- [ ] Maintains 60fps (test on mid-tier device)
- [ ] Focus indicators remain visible
- [ ] Touch targets remain 44x44px minimum
- [ ] No motion-dependent content

## Deliverables for Report

Generate `/reports/05-motion-interaction-report.md` containing:

### Executive Summary
Overview of motion transformation strategy

### Current Motion Audit
- All animations cataloged (component, type, duration)
- Interaction patterns documented
- Accessibility issues identified
- Performance issues noted

### Gap Analysis
- Missing organic motion patterns
- Missing reduced-motion handling
- Over-reliance on linear motion
- Missing ambient atmosphere
- Accessibility violations

### Detailed Recommendations

#### Motion Design System
- Motion principles (4+ principles)
- Motion categories (5+ categories with code examples)
- Custom easing curves (5+ curves with values)
- Duration tokens (3+ standard durations)

#### Component-Specific Motion
For each major component:
1. Current motion (if any)
2. Recommended motion patterns
3. Code snippets (Motion/React)
4. CSS alternative (if applicable)
5. Reduced motion variant
6. Performance notes

#### Advanced Patterns
- WebGL/Canvas animation specs
- Scroll-triggered animation patterns
- Parallax implementation guide
- SVG path animation examples

#### Accessibility Implementation
- useReducedMotion hook usage
- CSS @media (prefers-reduced-motion)
- Safe motion fallbacks
- Testing procedures

### File-Specific Implementation Notes

- `/components/sections/Hero.tsx` - [Specific motion changes]
- `/components/common/Button.tsx` - [Hover motion specs]
- [Continue for all animated components]

### Acceptance Criteria

- [ ] Motion design system documented
- [ ] All components respect reduced motion
- [ ] 5+ custom easing curves defined
- [ ] 20+ component motion specs provided
- [ ] Performance budget defined
- [ ] No motion-dependent critical content
- [ ] All interactions have visual feedback
- [ ] WCAG 2.1 AA compliant motion

### Risk Assessment

1. **Performance:** Complex animations may drop frames
   - *Mitigation:* Performance budget, GPU acceleration, lazy loading

2. **Accessibility:** Motion may cause vestibular issues
   - *Mitigation:* Mandatory reduced motion support, safe fallbacks

3. **Complexity:** Advanced WebGL may be difficult to implement
   - *Mitigation:* Start with CSS/Motion, add WebGL progressively

### Dependency Mapping

- **Blocks:** None (Wave 1 prompt)
- **Blocked By:** None
- **Enables:**
  - 07-webgl-3d-feature-analysis (provides motion foundation)
  - 10-implementation-priority-analysis (motion complexity affects estimates)

## Quality Standards

The report must:

- Provide copy-paste-ready code snippets
- Include specific easing values and durations
- Reference Motion/Framer Motion API correctly
- Show both Motion and CSS implementations
- Include performance metrics
- Demonstrate reduced motion variants

## Success Metrics

- [ ] 30+ motion patterns documented with code
- [ ] All patterns have reduced motion variants
- [ ] 5+ easing curves defined
- [ ] Performance budget established
- [ ] 10+ component-specific motion specs
- [ ] WebGL/advanced patterns specified
- [ ] Testing checklist complete
