# SVG Asset Generation Report – Hand-Drawn Redesign

**Report ID:** 08  
**Category:** Redesign Analysis  
**Domain:** SVG Assets & Illustrations  
**Version:** 1.0.0  
**Date:** 2026-03-15  
**Author:** AI Assistant  
**Status:** Complete

---

## Executive Summary

### Overview

This report catalogs the current hand-drawn SVG assets for Handcrafted Wines, evaluates completeness, and defines additional assets needed to fully realize the hand-drawn aesthetic across all pages and components.

### Key Findings

**Current State:**
- ✅ **10 decorative SVG components** already implemented
- ✅ **Strong hand-drawn aesthetic** with organic shapes and filters
- ✅ **All components use CSS variables** for theme adaptation
- ✅ **Performance-optimized** inline SVGs (<5 KB each)

**Existing Assets:**
1. HandDrawnUnderline (82 lines)
2. PaperTexture (68 lines)
3. WineLabelStamp (145 lines)
4. OrganicBorder (92 lines)
5. BrushStrokeBorder (104 lines)
6. BrushStrokeDivider (75 lines)
7. WaxSealStamp (156 lines)
8. HandDrawnWineBottle (98 lines)
9. HandDrawnGrapeCluster (112 lines)
10. HandDrawnOakBarrel (125 lines)

**Gaps:**
- ❌ **No botanical illustrations** (leaves, vines beyond icons)
- ❌ **Limited section dividers** (only 1 brush stroke variant)
- ❌ **No ornamental frames** (for featured content)
- ⚠️ **No animated variants** (all static)

### Recommendations

**High Priority (Create Next):**
1. Organic section dividers (wave, ripple variants) - 3 styles
2. Botanical illustrations (grape leaves, vine tendrils) - 4 assets
3. Ornamental frames (for callouts, featured products) - 2 variants
4. Award badges (for product labels) - 3 variants

**Medium Priority:**
5. Abstract organic blobs (background decorations) - 3 variants
6. Hand-drawn arrows/pointers (for CTAs) - 2 variants
7. Doodle elements (wine glass outline, barrel sketch) - 4 assets

**Low Priority:**
8. Animated variants (subtle pulse, float) - For existing assets
9. Seasonal decorations (grape harvest, snow) - Holiday variants

---

## 1. Current Asset Inventory

### 1.1 Decorative Components (10 existing)

**Category: Underlines & Accents**

**1. HandDrawnUnderline**
- **File:** `/components/decorative/HandDrawnUnderline.tsx`
- **Lines:** 82
- **SVG Technique:** Inline `<svg>` with path + filter
- **Props:** color, width, height, strokeWidth, roughness
- **Usage:** Heading emphasis, link decorations
- **Dark Mode:** Uses `currentColor` ✅
- **Status:** ✅ Complete

**Features:**
- Organic wavy line beneath text
- SVG turbulence filter for hand-drawn effect
- Configurable roughness (0-5 scale)

---

**Category: Textures**

**2. PaperTexture**
- **File:** `/components/decorative/PaperTexture.tsx`
- **Lines:** 68
- **SVG Technique:** `<pattern>` + turbulence filter
- **Props:** opacity, scale, variant
- **Usage:** Section backgrounds, card overlays
- **Dark Mode:** Opacity adjustment ✅
- **Status:** ✅ Complete

**Features:**
- Subtle paper grain texture
- Tileable pattern
- Multiple variants (light, medium, heavy)

---

**Category: Stamps & Seals**

**3. WineLabelStamp**
- **File:** `/components/decorative/WineLabelStamp.tsx`
- **Lines:** 145
- **SVG Technique:** Complex paths + text + filter
- **Props:** text, size, color, rotation
- **Usage:** Awards, certifications, vintage labels
- **Dark Mode:** Color adaptation ✅
- **Status:** ✅ Complete

**Features:**
- Circular badge with custom text
- Distressed edges (turbulence filter)
- Rotation for organic placement

**4. WaxSealStamp**
- **File:** `/components/decorative/WaxSealStamp.tsx`
- **Lines:** 156
- **SVG Technique:** Radial gradient + complex paths
- **Props:** initials, color, size, pressed
- **Usage:** Premium seals, monograms
- **Dark Mode:** Color + opacity ✅
- **Status:** ✅ Complete

**Features:**
- Realistic wax seal appearance
- Custom monogram/initials
- Pressed/raised variants
- Metallic gradient effect

---

**Category: Borders & Frames**

**5. OrganicBorder**
- **File:** `/components/decorative/OrganicBorder.tsx`
- **Lines:** 92
- **SVG Technique:** `<rect>` with turbulence filter
- **Props:** variant, roughness, strokeWidth
- **Usage:** Card frames, image borders
- **Dark Mode:** Uses `currentColor` ✅
- **Status:** ✅ Complete

**Features:**
- Asymmetric rounded corners
- Hand-drawn stroke effect
- 3 variants (subtle, medium, heavy)

**6. BrushStrokeBorder**
- **File:** `/components/decorative/BrushStrokeBorder.tsx`
- **Lines:** 104
- **SVG Technique:** Path with variable stroke width
- **Props:** variant, color, size
- **Usage:** Image frames, callout boxes
- **Dark Mode:** Color adaptation ✅
- **Status:** ✅ Complete

**Features:**
- Painterly brush stroke outline
- Variable stroke width
- 2 variants (thick, thin)

---

**Category: Dividers**

**7. BrushStrokeDivider**
- **File:** `/components/decorative/BrushStrokeDivider.tsx`
- **Lines:** 75
- **SVG Technique:** Horizontal wavy path
- **Props:** variant, color, width
- **Usage:** Section separators
- **Dark Mode:** Uses `currentColor` ✅
- **Status:** ✅ Complete

**Features:**
- Horizontal brush stroke
- Full-width or constrained
- 1 variant (needs more!)

---

**Category: Icons (Hand-Drawn)**

**8. HandDrawnWineBottle**
- **File:** `/components/decorative/icons/HandDrawnWineBottle.tsx`
- **Lines:** 98
- **SVG Technique:** Path outlines + fill
- **Props:** size, color
- **Usage:** Product icons, feature highlights
- **Dark Mode:** Uses `currentColor` ✅
- **Status:** ✅ Complete

**9. HandDrawnGrapeCluster**
- **File:** `/components/decorative/icons/HandDrawnGrapeCluster.tsx`
- **Lines:** 112
- **SVG Technique:** Multiple circles + path (stem)
- **Props:** size, color
- **Usage:** Vineyard sections, product icons
- **Dark Mode:** Uses `currentColor` ✅
- **Status:** ✅ Complete

**10. HandDrawnOakBarrel**
- **File:** `/components/decorative/icons/HandDrawnOakBarrel.tsx`
- **Lines:** 125
- **SVG Technique:** Path outlines with wood grain
- **Props:** size, color
- **Usage:** Aging process, winery tours
- **Dark Mode:** Uses `currentColor` ✅
- **Status:** ✅ Complete

---

### 1.2 Asset Summary

| Category | Current Count | Needed | Priority |
|----------|---------------|--------|----------|
| **Underlines** | 1 | 0 | ✅ Complete |
| **Textures** | 1 | 0 | ✅ Complete |
| **Stamps/Seals** | 2 | 1 (award badge) | Medium |
| **Borders** | 2 | 1 (ornamental frame) | High |
| **Dividers** | 1 | 3 (wave, ripple, organic) | High |
| **Icons** | 3 | 0 | ✅ Complete |
| **Botanicals** | 0 | 4 (leaves, vines) | High |
| **Blobs** | 0 | 3 (backgrounds) | Medium |
| **Arrows** | 0 | 2 (CTAs) | Medium |
| **Doodles** | 0 | 4 (glass, cheese) | Low |

**Total Existing:** 10 assets  
**Total Needed:** 18 new assets  
**Final Count:** 28 total assets

---

## 2. Missing Assets (High Priority)

### 2.1 Section Dividers (3 new variants)

**Current:** BrushStrokeDivider (1 variant)  
**Needed:** WaveDivider, RippleDivider, OrganicBlobDivider

---

**Asset 1: WaveDivider**

**Purpose:** Gentle wave separator for section transitions

**Visual Description:**
- Smooth organic wave pattern
- Full-width horizontal
- Subtle amplitude (20-30px height)
- Hand-drawn texture

**SVG Specification:**
```tsx
// components/decorative/WaveDivider.tsx
interface WaveDividerProps {
  variant?: 'single' | 'double' | 'triple';
  color?: string;
  height?: number;
  flip?: boolean;
  className?: string;
}

export const WaveDivider: React.FC<WaveDividerProps> = ({
  variant = 'single',
  color = 'currentColor',
  height = 40,
  flip = false,
  className = ''
}) => {
  const waves = variant === 'single' ? 1 : variant === 'double' ? 2 : 3;
  
  return (
    <svg
      className={`w-full ${flip ? 'rotate-180' : ''} ${className}`}
      style={{ height: `${height}px` }}
      viewBox={`0 0 1440 ${height}`}
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <filter id="wave-texture">
          <feTurbulence baseFrequency="0.015" numOctaves="2" />
          <feDisplacementMap in="SourceGraphic" scale="3" />
        </filter>
      </defs>
      
      {Array.from({ length: waves }).map((_, i) => (
        <path
          key={i}
          d={generateWavePath(i, waves, height)}
          fill={i === waves - 1 ? color : 'none'}
          stroke={i < waves - 1 ? color : 'none'}
          strokeWidth="2"
          filter="url(#wave-texture)"
          opacity={1 - (i * 0.2)}
        />
      ))}
    </svg>
  );
};

function generateWavePath(index: number, total: number, height: number): string {
  const amplitude = 20 - (index * 5);
  const frequency = 0.003 + (index * 0.001);
  
  let path = `M0,${height / 2}`;
  for (let x = 0; x <= 1440; x += 20) {
    const y = (height / 2) + (amplitude * Math.sin(x * frequency));
    path += ` L${x},${y}`;
  }
  path += ` L1440,${height} L0,${height} Z`;
  
  return path;
}
```

**Usage:**
```tsx
<WaveDivider variant="double" color="var(--twb-color-vine)" height={60} />
```

**File Size:** ~120 lines (~3 KB)

---

**Asset 2: RippleDivider**

**Purpose:** Concentric ripple pattern for dynamic transitions

**Visual Description:**
- Circular ripples emanating from center
- Semi-transparent overlapping rings
- Organic, hand-drawn edges

**SVG Specification:**
```tsx
// components/decorative/RippleDivider.tsx
interface RippleDividerProps {
  ringCount?: number;
  color?: string;
  height?: number;
  centerX?: number; // 0-100 percentage
}

export const RippleDivider: React.FC<RippleDividerProps> = ({
  ringCount = 5,
  color = 'currentColor',
  height = 80,
  centerX = 50
}) => {
  const center = (1440 * centerX) / 100;
  
  return (
    <svg
      className="w-full"
      style={{ height: `${height}px` }}
      viewBox={`0 0 1440 ${height}`}
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <filter id="ripple-texture">
          <feTurbulence baseFrequency="0.03" numOctaves="3" />
          <feDisplacementMap in="SourceGraphic" scale="2" />
        </filter>
      </defs>
      
      {Array.from({ length: ringCount }).map((_, i) => (
        <ellipse
          key={i}
          cx={center}
          cy={height / 2}
          rx={100 + (i * 60)}
          ry={30 + (i * 20)}
          fill="none"
          stroke={color}
          strokeWidth="2"
          opacity={0.6 - (i * 0.1)}
          filter="url(#ripple-texture)"
        />
      ))}
    </svg>
  );
};
```

**Usage:**
```tsx
<RippleDivider ringCount={7} color="var(--twb-color-clay)" height={100} centerX={30} />
```

**File Size:** ~100 lines (~2.5 KB)

---

**Asset 3: OrganicBlobDivider**

**Purpose:** Abstract organic shape separator

**Visual Description:**
- Asymmetric blob shape
- Flows across full width
- Hand-drawn texture
- Random seed for variation

**File Size:** ~110 lines (~3 KB)

---

### 2.2 Botanical Illustrations (4 new assets)

**Needed:** Grape leaves, vine tendrils, olive branch, wheat stalks

**Asset 4: GrapeLeafIllustration**

**Purpose:** Decorative botanical element for vineyard sections

**Visual Description:**
- Single grape leaf with serrated edges
- Visible veins
- Hand-drawn outline
- Semi-transparent fill

**SVG Specification:**
```tsx
// components/decorative/GrapeLeafIllustration.tsx
interface GrapeLeafProps {
  size?: number;
  color?: string;
  rotation?: number;
  variant?: 1 | 2 | 3;
}

export const GrapeLeafIllustration: React.FC<GrapeLeafProps> = ({
  size = 120,
  color = 'var(--twb-color-vine)',
  rotation = 0,
  variant = 1
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotation}deg)` }}
      aria-hidden="true"
    >
      <defs>
        <filter id="leaf-texture">
          <feTurbulence baseFrequency="0.05" numOctaves="4" />
          <feDisplacementMap in="SourceGraphic" scale="2" />
        </filter>
      </defs>
      
      {/* Leaf outline */}
      <path
        d={getLeafPath(variant)}
        fill={color}
        fillOpacity="0.15"
        stroke={color}
        strokeWidth="2"
        filter="url(#leaf-texture)"
      />
      
      {/* Leaf veins */}
      {getLeafVeins(variant).map((vein, i) => (
        <path
          key={i}
          d={vein}
          fill="none"
          stroke={color}
          strokeWidth="1"
          opacity="0.4"
        />
      ))}
    </svg>
  );
};

function getLeafPath(variant: number): string {
  const paths = {
    1: "M60,10 Q80,30 85,60 Q80,90 60,110 Q40,90 35,60 Q40,30 60,10 Z",
    2: "M60,15 Q75,35 80,60 Q75,85 60,105 Q45,85 40,60 Q45,35 60,15 Z",
    3: "M60,12 Q78,32 83,60 Q78,88 60,108 Q42,88 37,60 Q42,32 60,12 Z"
  };
  return paths[variant] || paths[1];
}

function getLeafVeins(variant: number): string[] {
  return [
    "M60,30 L60,90",      // Center vein
    "M60,45 Q70,50 75,60", // Right vein 1
    "M60,45 Q50,50 45,60", // Left vein 1
    "M60,65 Q70,70 75,75", // Right vein 2
    "M60,65 Q50,70 45,75"  // Left vein 2
  ];
}
```

**Usage:**
```tsx
<GrapeLeafIllustration size={150} variant={2} rotation={-15} />
```

**File Size:** ~140 lines (~4 KB)

---

**Asset 5: VineTendrilIllustration**

**Purpose:** Decorative curling vine element

**Visual Description:**
- Curling organic vine tendril
- Multiple variants (left curve, right curve, spiral)
- Fine line weight
- Subtle leaves at intervals

**File Size:** ~130 lines (~3.5 KB)

---

**Asset 6: OliveBranchIllustration**

**Purpose:** Peace/premium indicator

**Visual Description:**
- Stylized olive branch with leaves
- Hand-drawn aesthetic
- Symmetrical or asymmetrical

**File Size:** ~120 lines (~3 KB)

---

**Asset 7: WheatStalkIllustration**

**Purpose:** Harvest/artisanal theme

**Visual Description:**
- Single wheat stalk with grain head
- Organic hand-drawn style

**File Size:** ~110 lines (~2.8 KB)

---

### 2.3 Ornamental Frames (2 variants)

**Asset 8: FancyFrame** (for featured products, callouts)

**Purpose:** Decorative frame for highlighted content

**Visual Description:**
- Ornate hand-drawn corner flourishes
- Organic curves and swirls
- Optional center decoration (top/bottom)
- Configurable border

**SVG Technique:**
- Corner SVG elements positioned absolutely
- Border using OrganicBorder component
- Optional decorative elements

**File Size:** ~160 lines (~4.5 KB)

---

**Asset 9: SimpleFrame** (for quotes, testimonials)

**Purpose:** Subtle frame for content emphasis

**Visual Description:**
- Minimal corner brackets
- Thin organic line
- Less ornate than FancyFrame

**File Size:** ~100 lines (~2.5 KB)

---

### 2.4 Award Badges (3 variants)

**Asset 10: AwardRibbon**

**Purpose:** Product awards and medals

**Visual Description:**
- Circular medal with ribbon tails
- Custom text/year
- Metallic appearance (gold, silver, bronze)

**File Size:** ~150 lines (~4 KB)

---

**Asset 11: StarBadge**

**Purpose:** Star ratings, featured products

**Visual Description:**
- Star shape with hand-drawn edges
- Fill or outline variant
- Multiple sizes

**File Size:** ~90 lines (~2 KB)

---

**Asset 12: ShieldBadge**

**Purpose:** Quality guarantee, certifications

**Visual Description:**
- Shield/crest shape
- Custom icon/text
- Organic hand-drawn edges

**File Size:** ~130 lines (~3.5 KB)

---

## 3. Medium Priority Assets

### 3.1 Abstract Organic Blobs (3 variants)

**Purpose:** Background decorative elements

**Assets 13-15:**
- **BlobBackground1** - Large organic shape
- **BlobBackground2** - Medium flowing shape
- **BlobBackground3** - Small accent blob

**File Size:** ~80 lines each (~2 KB each)

---

### 3.2 Hand-Drawn Arrows (2 variants)

**Purpose:** Call-to-action pointers

**Assets 16-17:**
- **CurvedArrow** - Organic curved arrow pointing right/down
- **StraightArrow** - Sketchy straight arrow

**File Size:** ~70 lines each (~1.8 KB each)

---

## 4. Low Priority Assets

### 4.1 Doodle Elements (4 assets)

**Assets 18-21:**
- **WineGlassDoodle** - Hand-drawn wine glass outline
- **CheeseWedgeDoodle** - Cheese wheel sketch
- **CorkscrewDoodle** - Corkscrew illustration
- **BarrelStackDoodle** - Stacked barrels

**File Size:** ~100 lines each (~2.5 KB each)

---

## 5. Style Guidelines

### 5.1 Visual Consistency Rules

**Line Weight:**
- Primary strokes: 2-3px
- Detail lines: 1px
- Borders: 2px

**Color Palette:**
- Primary: `--twb-color-ink` (text/outlines)
- Accent 1: `--twb-color-vine` (green botanicals)
- Accent 2: `--twb-color-clay` (warm accents)
- Accent 3: `--twb-color-gold` (premium elements)
- Accent 4: `--twb-color-plum` (wine-inspired)

**Hand-Drawn Effect:**
- All assets use SVG `<feTurbulence>` filter
- `baseFrequency`: 0.01-0.05 (subtle to heavy)
- `numOctaves`: 2-4
- `feDisplacementMap` scale: 1-3px

**Organic Shapes:**
- Avoid perfect circles/squares
- Use slight asymmetry
- Irregular stroke weights
- Imperfect curves

---

### 5.2 Dark Mode Adaptation

**Strategy 1: currentColor (Preferred)**
```tsx
<path 
  stroke="currentColor" 
  fill="currentColor"
/>
```
**Usage:** Single-color assets (icons, dividers, borders)

**Strategy 2: CSS Variable Colors**
```tsx
<path 
  stroke="var(--twb-color-vine)" 
  fill="var(--twb-color-vine)"
  fillOpacity="0.15"
/>
```
**Usage:** Multi-color assets

**Strategy 3: Opacity Adjustment**
```tsx
<svg className="opacity-80 dark:opacity-60">
  {/* SVG content */}
</svg>
```
**Usage:** Textures, backgrounds

**Strategy 4: Separate Dark Variant**
```tsx
{isDark ? <AssetDark /> : <AssetLight />}
```
**Usage:** Complex multi-color illustrations (rare)

---

### 5.3 File Naming Convention

**Pattern:** `{Type}{Name}{Variant?}.tsx`

**Examples:**
- `WaveDivider.tsx` (type: divider, name: wave)
- `GrapeLeafIllustration.tsx` (type: illustration, name: grape leaf)
- `FancyFrame.tsx` (type: frame, name: fancy)
- `BlobBackground1.tsx` (type: background, name: blob, variant: 1)

**Directory Structure:**
```
/components/decorative/
  /dividers/
    WaveDivider.tsx
    RippleDivider.tsx
    OrganicBlobDivider.tsx
    BrushStrokeDivider.tsx (existing)
  /botanical/
    GrapeLeafIllustration.tsx
    VineTendrilIllustration.tsx
    OliveBranchIllustration.tsx
    WheatStalkIllustration.tsx
  /frames/
    FancyFrame.tsx
    SimpleFrame.tsx
    OrganicBorder.tsx (existing)
    BrushStrokeBorder.tsx (existing)
  /badges/
    AwardRibbon.tsx
    StarBadge.tsx
    ShieldBadge.tsx
    WineLabelStamp.tsx (existing)
    WaxSealStamp.tsx (existing)
  /backgrounds/
    BlobBackground1.tsx
    BlobBackground2.tsx
    BlobBackground3.tsx
    PaperTexture.tsx (existing)
  /arrows/
    CurvedArrow.tsx
    StraightArrow.tsx
  /doodles/
    WineGlassDoodle.tsx
    CheeseWedgeDoodle.tsx
    CorkscrewDoodle.tsx
    BarrelStackDoodle.tsx
  /icons/
    HandDrawnWineBottle.tsx (existing)
    HandDrawnGrapeCluster.tsx (existing)
    HandDrawnOakBarrel.tsx (existing)
  HandDrawnUnderline.tsx (existing)
```

---

## 6. Optimization Guidelines

### 6.1 SVG Optimization

**SVGO Configuration:**
```json
{
  "plugins": [
    { "removeDoctype": true },
    { "removeXMLProcInst": true },
    { "removeComments": true },
    { "removeMetadata": true },
    { "removeEditorsNSData": true },
    { "cleanupAttrs": true },
    { "inlineStyles": true },
    { "minifyStyles": true },
    { "convertStyleToAttrs": true },
    { "cleanupIds": true },
    { "removeRasterImages": true },
    { "removeUselessDefs": true },
    { "cleanupNumericValues": { "floatPrecision": 2 } },
    { "convertColors": { "currentColor": true } },
    { "removeUnknownsAndDefaults": true },
    { "removeNonInheritableGroupAttrs": true },
    { "removeUselessStrokeAndFill": true },
    { "cleanupEnableBackground": true },
    { "removeHiddenElems": true },
    { "removeEmptyText": true },
    { "convertShapeToPath": true },
    { "moveElemsAttrsToGroup": true },
    { "moveGroupAttrsToElems": true },
    { "collapseGroups": true },
    { "convertPathData": true },
    { "convertTransform": true },
    { "removeEmptyAttrs": true },
    { "removeEmptyContainers": true },
    { "mergePaths": true },
    { "removeUnusedNS": true },
    { "sortAttrs": true },
    { "removeTitle": true },
    { "removeDesc": true }
  ]
}
```

**Target File Sizes:**
- Simple icons: <2 KB
- Decorative elements: <4 KB
- Complex illustrations: <6 KB
- Frames/borders: <5 KB

---

### 6.2 Performance Best Practices

**1. Inline vs. External**

**Inline (Recommended for decorative assets):**
```tsx
export const WaveDivider = () => (
  <svg>...</svg>
);
```
**Pros:** No HTTP request, can use CSS variables  
**Cons:** Larger JS bundle

**External (for large/reused images):**
```tsx
<img src="/assets/svg/illustration.svg" alt="" />
```
**Pros:** Cacheable, smaller bundle  
**Cons:** Extra HTTP request

**Verdict:** Inline for <5 KB decorative assets, external for >5 KB

---

**2. Lazy Loading**

```tsx
const WaveDivider = lazy(() => import('./WaveDivider'));

<Suspense fallback={null}>
  <WaveDivider />
</Suspense>
```

**Use when:** Asset is below the fold or not critical

---

**3. Reduce DOM Nodes**

- Merge paths where possible
- Remove unnecessary groups
- Simplify complex paths

---

## 7. Accessibility

### 7.1 Decorative SVGs

**All decorative assets must have:**
```tsx
<svg 
  aria-hidden="true"
  focusable="false"
>
  {/* No title or desc elements */}
</svg>
```

**Examples:** Dividers, backgrounds, ornamental frames

---

### 7.2 Informative SVGs

**Informative assets (icons with meaning) must have:**
```tsx
<svg 
  role="img"
  aria-labelledby="icon-title"
>
  <title id="icon-title">Wine bottle</title>
  <desc>A hand-drawn illustration of a wine bottle</desc>
  {/* SVG content */}
</svg>
```

**Examples:** Product icons, award badges (when standalone)

---

### 7.3 Interactive SVGs

**Interactive elements (buttons, links) must have:**
```tsx
<button aria-label="Scroll down">
  <svg aria-hidden="true">
    <path d="..." />
  </svg>
</button>
```

**Rule:** ARIA label on parent, `aria-hidden` on SVG

---

## 8. Animation Guidelines

### 8.1 Subtle Animations (Optional)

**Recommended Animated Assets:**
1. WaveDivider - Gentle horizontal movement
2. RippleDivider - Expanding ripples
3. VineTendrilIllustration - Slow growth/curl
4. ParticleEffects - Floating leaves/droplets

**Animation Principles:**
- Duration: 3-8 seconds (slow)
- Easing: `ease-in-out` or `cubic-bezier(0.33, 1, 0.68, 1)`
- Loop: Infinite (with `prefers-reduced-motion` disable)
- Amplitude: Subtle (2-5px movement max)

---

### 8.2 Implementation Pattern

**CSS Keyframes:**
```tsx
export const WaveDivider = () => (
  <>
    <style>{`
      @keyframes wave-float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-5px); }
      }
      
      .wave-animated {
        animation: wave-float 6s ease-in-out infinite;
      }
      
      @media (prefers-reduced-motion: reduce) {
        .wave-animated {
          animation: none;
        }
      }
    `}</style>
    
    <svg className="wave-animated">
      {/* SVG content */}
    </svg>
  </>
);
```

**Motion Library (Alternative):**
```tsx
import { motion } from 'motion/react';

export const WaveDivider = () => {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.svg
      animate={shouldReduceMotion ? {} : {
        y: [0, -5, 0]
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    >
      {/* SVG content */}
    </motion.svg>
  );
};
```

---

## 9. Implementation Roadmap

### 9.1 Phase 1: High Priority Assets (Week 1-2) - 16 hours

**Week 1: Dividers (6 hours)**
1. WaveDivider component (2 hours)
2. RippleDivider component (2 hours)
3. OrganicBlobDivider component (2 hours)

**Week 2: Botanicals (10 hours)**
4. GrapeLeafIllustration (3 hours)
5. VineTendrilIllustration (3 hours)
6. OliveBranchIllustration (2 hours)
7. WheatStalkIllustration (2 hours)

---

### 9.2 Phase 2: Medium Priority (Week 3) - 12 hours

**Frames (4 hours)**
8. FancyFrame component (2.5 hours)
9. SimpleFrame component (1.5 hours)

**Badges (4 hours)**
10. AwardRibbon component (2 hours)
11. StarBadge component (1 hour)
12. ShieldBadge component (1 hour)

**Blobs & Arrows (4 hours)**
13-15. BlobBackground 1-3 (2 hours)
16-17. CurvedArrow, StraightArrow (2 hours)

---

### 9.3 Phase 3: Optional (Week 4) - 8 hours

**Doodles (4 hours)**
18-21. WineGlass, CheeseWedge, Corkscrew, BarrelStack (4 hours)

**Animations (4 hours)**
- Add subtle animations to 4 key assets (4 hours)

**Total Implementation:** 36 hours over 4 weeks

---

## 10. Success Metrics

### 10.1 Coverage Targets

| Category | Baseline | Phase 1 | Phase 2 | Phase 3 | Target |
|----------|----------|---------|---------|---------|--------|
| **Dividers** | 1 | 4 ✅ | 4 | 4 | 4 |
| **Botanicals** | 0 | 4 ✅ | 4 | 4 | 4 |
| **Frames** | 2 | 2 | 4 ✅ | 4 | 4 |
| **Badges** | 2 | 2 | 5 ✅ | 5 | 5 |
| **Backgrounds** | 1 | 1 | 4 ✅ | 4 | 4 |
| **Arrows** | 0 | 0 | 2 ✅ | 2 | 2 |
| **Doodles** | 0 | 0 | 0 | 4 ✅ | 4 |
| **Animated** | 0 | 0 | 0 | 4 ✅ | 4 |

**Total Assets:** 10 → 31 (+21 new)

### 10.2 Performance Targets

- Average SVG file size: <3.5 KB
- Total SVG bundle: <110 KB (31 assets × 3.5 KB)
- Load time impact: <100ms
- No layout shift (all decorative)

### 10.3 Quality Targets

- [ ] 100% components use CSS variables
- [ ] 100% dark mode compatible
- [ ] 100% accessibility compliant (decorative = aria-hidden)
- [ ] 100% optimized with SVGO
- [ ] All assets follow naming convention
- [ ] All assets documented with JSDoc

---

## 11. Conclusion

### 11.1 Summary

The Handcrafted Wines hand-drawn SVG system has an **excellent foundation** with 10 existing decorative components, but **needs 21 additional assets** to fully realize the hand-drawn aesthetic across all pages.

**Key Strengths:**
- ✅ 10 high-quality existing assets
- ✅ Consistent hand-drawn aesthetic
- ✅ Full CSS variable integration
- ✅ Dark mode support
- ✅ Performance-optimized

**Critical Gaps:**
- ❌ Limited divider variants (only 1)
- ❌ No botanical illustrations
- ❌ Missing ornamental frames
- ⚠️ No animated variants

### 11.2 Recommended Path Forward

**Immediate (Weeks 1-2):**
- Phase 1: High-priority assets (16 hours)
  - 3 dividers + 4 botanicals = 7 new assets

**This Quarter (Weeks 3-4):**
- Phase 2: Medium-priority assets (12 hours)
  - 2 frames + 3 badges + 3 blobs + 2 arrows = 10 new assets

**Next Quarter (Optional):**
- Phase 3: Low-priority assets (8 hours)
  - 4 doodles + 4 animated variants

**Total Effort:** 36 hours (28 hours for Phases 1-2)

**Priority:** Phase 1 (dividers + botanicals) provides maximum aesthetic impact

---

**Next Report:** `/reports/redesign/09-accessibility-audit-report.md`

**Related Documentation:**
- Components: `/components/decorative/` (existing 10 assets)
- Report: `/reports/redesign/05-motion-interaction-report.md` (animations)
- Guidelines: `/guidelines/design-tokens/colors.md` (color tokens)
