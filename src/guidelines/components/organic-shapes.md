# Organic Shapes Library

**Category:** Components  
**Domain:** SVG Shape Components  
**Version:** 1.0  
**Last Updated:** 2024-03-13  
**Status:** Active

---

## Overview

The Organic Shapes Library provides **reusable hand-drawn SVG components** for The Wire Brand's visual language. These shapes add warmth, character, and organic texture to layouts while maintaining consistency across the site.

**Shape Categories:**
1. **Dividers** - Section separators, underlines
2. **Backgrounds** - Organic blobs, brush strokes
3. **Frames** - Angular corners, decorative borders
4. **Icons** - Wine bottle, grape cluster, leaf
5. **Accents** - Circles, arrows, flourishes

**Design Principles:**
- **Imperfect** - Wobble, asymmetry, hand-drawn feel
- **Organic** - Curves over straight lines
- **Versatile** - Configurable colors, sizes, rotations
- **Lightweight** - Optimized SVG paths
- **Accessible** - Decorative elements use `aria-hidden="true"`

---

## 1. Dividers

### Hand-Drawn Line Divider

```tsx
/**
 * HandDrawnDivider Component
 * 
 * Organic wavy line for section separation.
 * 
 * @param {Object} props
 * @param {string} props.className - Additional classes
 * @param {string} props.color - Stroke color (defaults to twb-color-vine)
 * @param {number} props.strokeWidth - Line thickness (default: 2)
 */

export function HandDrawnDivider({
  className = '',
  color = 'var(--twb-color-vine)',
  strokeWidth = 2,
}: {
  className?: string;
  color?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      className={cn("w-full h-2 my-8", className)}
      viewBox="0 0 1200 20"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M0,10 Q150,8 300,12 T600,10 T900,14 T1200,10"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}
```

### Brush Stroke Divider

```tsx
/**
 * BrushStrokeDivider Component
 * 
 * Thick, textured brush stroke for visual weight.
 */
export function BrushStrokeDivider({ className = '' }: { className?: string }) {
  return (
    <svg
      className={cn("w-full h-4 my-12", className)}
      viewBox="0 0 1200 40"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* Brush texture filter */}
        <filter id="brush-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" />
          <feDisplacementMap in="SourceGraphic" scale="3" />
        </filter>
      </defs>
      
      <path
        d="M0,20 Q200,15 400,22 T800,18 T1200,20"
        fill="none"
        stroke="var(--twb-color-plum)"
        strokeWidth="10"
        strokeLinecap="round"
        filter="url(#brush-texture)"
        opacity="0.6"
      />
    </svg>
  );
}
```

---

## 2. Background Shapes

### Organic Blob

```tsx
/**
 * OrganicBlob Component
 * 
 * Irregular organic shape for background accents.
 * 
 * @param {Object} props
 * @param {string} props.color - Fill color
 * @param {number} props.opacity - Opacity (0-1)
 * @param {string} props.className - Additional classes
 */
export function OrganicBlob({
  color = 'var(--twb-color-plum)',
  opacity = 0.1,
  className = '',
}: {
  color?: string;
  opacity?: number;
  className?: string;
}) {
  return (
    <svg
      className={cn("absolute", className)}
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M200,50 Q300,100 350,200 T300,350 Q200,380 100,350 T50,200 Q80,100 200,50 Z"
        fill={color}
        opacity={opacity}
      />
    </svg>
  );
}
```

### Brush Stroke Background

```tsx
/**
 * BrushStrokeBackground Component
 * 
 * Large brush stroke texture for section backgrounds.
 */
export function BrushStrokeBackground({
  color = 'var(--twb-color-vine)',
  className = '',
}: {
  color?: string;
  className?: string;
}) {
  return (
    <svg
      className={cn("absolute inset-0 w-full h-full -z-10 opacity-5", className)}
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <filter id="brush-bg-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" />
          <feDisplacementMap in="SourceGraphic" scale="8" />
        </filter>
      </defs>
      
      <rect
        width="100%"
        height="100%"
        fill={color}
        filter="url(#brush-bg-texture)"
      />
    </svg>
  );
}
```

### Diagonal Grid Pattern

```tsx
/**
 * DiagonalGridPattern Component
 * 
 * Subtle diagonal grid overlay.
 */
export function DiagonalGridPattern({
  color = 'var(--twb-color-ink)',
  opacity = 0.05,
  className = '',
}: {
  color?: string;
  opacity?: number;
  className?: string;
}) {
  return (
    <svg
      className={cn("absolute inset-0 w-full h-full pointer-events-none", className)}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="diagonal-grid"
          x="0"
          y="0"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0,40 L40,0 M-10,10 L10,-10 M30,50 L50,30"
            stroke={color}
            strokeWidth="1"
            opacity={opacity}
          />
        </pattern>
      </defs>
      
      <rect width="100%" height="100%" fill="url(#diagonal-grid)" />
    </svg>
  );
}
```

---

## 3. Decorative Frames

### Angular Corner Accents

```tsx
/**
 * AngularCorners Component
 * 
 * Geometric corner accents for frames/cards.
 * 
 * @param {Object} props
 * @param {number} props.size - Corner size in pixels
 * @param {string} props.color - Corner color
 */
export function AngularCorners({
  size = 60,
  color = 'var(--twb-color-plum)',
  className = '',
}: {
  size?: number;
  color?: string;
  className?: string;
}) {
  return (
    <>
      {/* Top-left corner */}
      <svg
        className={cn("absolute top-0 left-0", className)}
        width={size}
        height={size}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0,0 L100,0 L100,20 L20,20 L20,100 L0,100 Z"
          fill={color}
        />
      </svg>
      
      {/* Top-right corner */}
      <svg
        className={cn("absolute top-0 right-0", className)}
        width={size}
        height={size}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0,0 L100,0 L100,100 L80,100 L80,20 L0,20 Z"
          fill={color}
        />
      </svg>
      
      {/* Bottom-left corner */}
      <svg
        className={cn("absolute bottom-0 left-0", className)}
        width={size}
        height={size}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0,0 L20,0 L20,80 L100,80 L100,100 L0,100 Z"
          fill={color}
        />
      </svg>
      
      {/* Bottom-right corner */}
      <svg
        className={cn("absolute bottom-0 right-0", className)}
        width={size}
        height={size}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0,80 L80,80 L80,0 L100,0 L100,100 L0,100 Z"
          fill={color}
        />
      </svg>
    </>
  );
}
```

### Hand-Drawn Border

```tsx
/**
 * HandDrawnBorder Component
 * 
 * Imperfect rectangular border overlay.
 */
export function HandDrawnBorder({
  color = 'var(--twb-border-secondary)',
  strokeWidth = 2,
  className = '',
}: {
  color?: string;
  strokeWidth?: number;
  className?: string;
}) {
  return (
    <svg
      className={cn("absolute inset-0 w-full h-full pointer-events-none", className)}
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x={strokeWidth}
        y={strokeWidth}
        width={`calc(100% - ${strokeWidth * 2}px)`}
        height={`calc(100% - ${strokeWidth * 2}px)`}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        rx="8"
      />
    </svg>
  );
}
```

---

## 4. Brand Icons

### Wine Bottle (Hand-Drawn)

```tsx
/**
 * WineBottleIcon Component
 * 
 * Hand-drawn wine bottle icon.
 */
export function WineBottleIcon({
  size = 48,
  color = 'currentColor',
  className = '',
}: {
  size?: number;
  color?: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Bottle body */}
      <path
        d="M18,10 L18,15 Q17,18 17,20 L17,42 Q17,44 19,44 L29,44 Q31,44 31,42 L31,20 Q31,18 30,15 L30,10 Z"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Bottle neck */}
      <path
        d="M20,6 L20,10 L28,10 L28,6 Q28,4 26,4 L22,4 Q20,4 20,6 Z"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      {/* Wine level (wavy line) */}
      <path
        d="M17,28 Q21,27 24,28 T31,28"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        opacity="0.5"
      />
    </svg>
  );
}
```

### Grape Cluster (Hand-Drawn)

```tsx
/**
 * GrapeClusterIcon Component
 * 
 * Hand-drawn grape cluster with leaf.
 */
export function GrapeClusterIcon({
  size = 96,
  color = 'var(--twb-color-plum)',
  className = '',
}: {
  size?: number;
  color?: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 96 96"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Grape circles (organic, overlapping) */}
      <circle cx="48" cy="60" r="12" fill={color} opacity="0.8" />
      <circle cx="38" cy="52" r="11" fill={color} opacity="0.7" />
      <circle cx="58" cy="52" r="11" fill={color} opacity="0.7" />
      <circle cx="48" cy="44" r="10" fill={color} opacity="0.6" />
      <circle cx="38" cy="36" r="9" fill={color} opacity="0.5" />
      <circle cx="58" cy="36" r="9" fill={color} opacity="0.5" />
      
      {/* Stem (hand-drawn curve) */}
      <path
        d="M48,36 Q48,26 52,18 Q54,12 50,8"
        fill="none"
        stroke="var(--twb-color-vine)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      {/* Leaf (organic shape) */}
      <path
        d="M50,18 Q60,16 65,23 Q68,30 60,33 Q55,30 50,28 Z"
        fill="var(--twb-color-vine)"
        opacity="0.5"
        stroke="var(--twb-color-vine)"
        strokeWidth="1.5"
      />
    </svg>
  );
}
```

### Vine Leaf

```tsx
/**
 * VineLeafIcon Component
 * 
 * Organic vine leaf shape.
 */
export function VineLeafIcon({
  size = 64,
  color = 'var(--twb-color-vine)',
  className = '',
}: {
  size?: number;
  color?: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Leaf shape */}
      <path
        d="M32,8 Q45,12 52,24 Q56,32 52,40 Q45,48 32,56 Q19,48 12,40 Q8,32 12,24 Q19,12 32,8 Z"
        fill={color}
        opacity="0.6"
        stroke={color}
        strokeWidth="2"
      />
      
      {/* Leaf vein */}
      <path
        d="M32,8 L32,56 M32,20 Q38,22 42,28 M32,36 Q26,38 22,44"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        opacity="0.8"
      />
    </svg>
  );
}
```

---

## 5. Arrows & Accents

### Hand-Drawn Arrow

```tsx
/**
 * HandDrawnArrow Component
 * 
 * Organic arrow for navigation/CTAs.
 * 
 * @param {Object} props
 * @param {'up'|'down'|'left'|'right'} props.direction - Arrow direction
 */
export function HandDrawnArrow({
  direction = 'right',
  color = 'currentColor',
  className = '',
}: {
  direction?: 'up' | 'down' | 'left' | 'right';
  color?: string;
  className?: string;
}) {
  const rotations = {
    right: 0,
    down: 90,
    left: 180,
    up: 270,
  };
  
  return (
    <svg
      className={cn("inline-block w-12 h-6", className)}
      style={{ transform: `rotate(${rotations[direction]}deg)` }}
      viewBox="0 0 48 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2,12 Q24,10 40,12 M35,7 Q40,10 42,12 Q40,14 35,17"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
```

### Scroll Down Arrow (Circular)

```tsx
/**
 * ScrollDownArrow Component
 * 
 * Animated scroll indicator for hero sections.
 */
export function ScrollDownArrow({ className = '' }: { className?: string }) {
  return (
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={cn("flex flex-col items-center gap-2", className)}
    >
      {/* Circle */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white"
      >
        <circle
          cx="20"
          cy="20"
          r="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
      
      {/* Arrow */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white -mt-7"
      >
        <path
          d="M12,8 L12,16 M8,12 L12,16 L16,12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}
```

### Decorative Flourish

```tsx
/**
 * DecorativeFlourish Component
 * 
 * Organic flourish for section headers.
 */
export function DecorativeFlourish({
  color = 'var(--twb-color-gold)',
  className = '',
}: {
  color?: string;
  className?: string;
}) {
  return (
    <svg
      className={cn("w-24 h-12", className)}
      viewBox="0 0 96 48"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M8,24 Q20,12 32,20 Q44,28 56,20 Q68,12 80,24 Q88,32 80,40 Q68,48 56,40 Q44,32 32,40 Q20,48 8,40"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
}
```

---

## Usage Examples

### Section with Organic Background

```tsx
<section className="relative py-20 bg-white overflow-hidden">
  {/* Organic blob background */}
  <OrganicBlob
    color="var(--twb-color-plum)"
    opacity={0.05}
    className="top-0 right-0 w-1/2 h-full"
  />
  
  <Container className="relative z-10">
    <h2 className="text-4xl font-serif mb-4">Our Wines</h2>
    <HandDrawnDivider className="mb-8" />
    
    <p className="text-xl text-[var(--twb-color-vine)]">
      Handcrafted with passion...
    </p>
  </Container>
</section>
```

### Card with Angular Frame

```tsx
<div className="relative p-12 bg-white rounded-twb-lg">
  {/* Angular corner accents */}
  <AngularCorners size={60} color="var(--twb-color-plum)" />
  
  <div className="relative z-10">
    <WineBottleIcon size={64} className="mb-6 text-[var(--twb-color-plum)]" />
    <h3 className="text-2xl font-serif mb-4">Organic Wines</h3>
    <p>100% certified organic grapes...</p>
  </div>
</div>
```

---

## Related Guidelines

- [Hand-Drawn Aesthetic](/guidelines/design-tokens/hand-drawn-aesthetic.md) - Visual style
- [Iconography](/guidelines/design-tokens/iconography.md) - Icon system
- [Microinteractions](/guidelines/design-tokens/microinteractions.md) - Animations

---

## Changelog

### Version 1.0 (2024-03-13)
- Hand-drawn divider components created
- Organic background shapes added
- Decorative frame accents implemented
- Brand icons (bottle, grapes, leaf) designed
- Arrow and accent components provided
- Usage examples documented

---

**Questions or Issues?**  
Contact the design system team for custom shape requests.
