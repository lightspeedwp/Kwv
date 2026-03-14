# WebGL 3D Feature Analysis Prompt

## Objective

Design and specify the premium interactive 3D wine subscription box feature using WebGL (Three.js/React Three Fiber) as the visual centerpiece of the subscription product page.

## Input Sources

1. `/imports/pasted_text/wine-brand-brief.md` (Section 2: 3D WebGL subscription box concept)
2. `/imports/pasted_text/redesign-brief.md` (Section 9: WebGL/2D/3D guidance)
3. Reports from prompts 01, 05 (for visual tokens and motion patterns)

## Dependencies

**Must Complete First:**
- 01-visual-design-analysis (for material textures, colors)
- 05-motion-interaction-analysis (for animation patterns, easing)

## Analysis Requirements

### 1. 3D Feature Specification

#### Visual Requirements
From wine-brand-brief:
- Premium branded wine box in 3D space
- Textured packaging (corrugated cardboard, branded stamp/print)
- Lid lifts or slides on interaction
- Visible bottles, tissue wrap, tasting cards inside
- Light catches embossed logo/label details
- Soft dust, grain, or paper fleck atmosphere (optional)
- Vineyard contour lines or hand-drawn wire graphics as 2D overlays

#### Interaction Requirements
- Slow ambient rotation or parallax on pointer movement
- Hover triggers lid lift animation
- Drag to rotate (optional, mobile-friendly alternative)
- Click/tap to expand (full-screen detailed view)
- Scroll-based reveal (box assembles as user scrolls)

#### Technical Constraints
- All product info must exist as HTML (3D is enhancement)
- Static fallback for mobile/low-power devices
- Respect `prefers-reduced-motion`
- Lazy load (not blocking page render)
- Performance budget: maintain 60fps

### 2. Implementation Specification

#### Technology Stack
```
Three.js + React Three Fiber (R3F)
├─ @react-three/fiber (core)
├─ @react-three/drei (helpers)
├─ @react-three/postprocessing (effects)
└─ three (3D library)
```

#### Component Architecture
```typescript
// /components/shop/WineBox3D.tsx
interface WineBox3DProps {
  autoRotate?: boolean;
  enableInteraction?: boolean;
  boxStyle?: 'standard' | 'premium' | 'gift';
  showContents?: boolean;
  fallbackImage?: string;
}
```

#### 3D Scene Structure
```
<Canvas>
  <Suspense fallback={<Loader />}>
    <Environment preset="warehouse" />
    <PerspectiveCamera position={[0, 2, 5]} />
    
    <WineBoxModel
      rotation={rotation}
      lidOpen={isHovered ? 0.8 : 0}
    />
    
    <ambientLight intensity={0.5} />
    <spotLight position={[5, 5, 5]} />
    
    {showAtmosphere && <ParticleSystem />}
    {showContours && <ContourLines />}
  </Suspense>
  
  <OrbitControls enableZoom={false} />
</Canvas>
```

### 3. Asset Requirements

#### 3D Models
- Box body (GLTF/GLB format)
- Box lid (separate, animatable)
- Wine bottles (3 or 6, simple geometry)
- Tissue wrap (cloth simulation or texture)
- Tasting card (flat plane with texture)

#### Textures
- Cardboard diffuse map (2048x2048)
- Cardboard normal map (subtle ridges)
- Brand logo (PNG, transparent)
- Stamp/seal texture
- Paper grain overlay

#### Material Specifications
```typescript
// Box material (from visual tokens)
{
  color: '#e8dcc8', // Warm cardboard
  roughness: 0.8,
  metalness: 0.1,
  normalScale: [1, 1],
  normalMap: cardboardNormal,
  map: cardboardDiffuse
}

// Logo emboss
{
  color: 'var(--twb-color-ink)',
  emissive: 'var(--twb-color-gold)',
  emissiveIntensity: 0.2,
  normalMap: logoEmboss
}
```

### 4. Animation Specification

#### Ambient Rotation
```typescript
useFrame((state) => {
  if (autoRotate && !isInteracting) {
    boxRef.current.rotation.y += 0.003; // Slow drift
  }
});
```

#### Lid Open Animation
```typescript
// Using react-spring/three
const { lidRotation } = useSpring({
  lidRotation: isHovered ? Math.PI * 0.4 : 0,
  config: { mass: 2, tension: 120, friction: 30 } // Organic feel
});

<animated.mesh rotation-x={lidRotation}>
  <LidModel />
</animated.mesh>
```

#### Scroll-Reveal Assembly
```typescript
// Box pieces animate in as user scrolls
const scrollProgress = useScrollProgress();

// Bottom appears first
<mesh position={[0, lerp(-5, 0, scrollProgress), 0]}>

// Bottles drop in
<mesh position={[0, lerp(5, 0.5, scrollProgress), 0]}>

// Lid settles on top
<mesh position={[0, lerp(10, 1.5, scrollProgress), 0]}>
```

### 5. Performance Optimization

#### Level of Detail (LOD)
- High-poly model for desktop close-up
- Mid-poly for desktop default view
- Low-poly for mobile
- 2D fallback image for low-end devices

#### Texture Optimization
- Use compressed textures (KTX2/Basis Universal)
- Lazy load high-res textures
- Provide WebP fallbacks for 2D mode

#### Render Optimization
```typescript
// Only render when visible
<Canvas frameloop={isVisible ? 'always' : 'demand'}>

// Reduce pixel ratio on mobile
<Canvas dpr={isMobile ? [1, 1.5] : [1, 2]}>

// Throttle updates
useFrame(() => { /* ... */ }, 1); // Every other frame
```

### 6. Fallback Strategy

#### Progressive Enhancement Layers

**Layer 1: Static Image (All Devices)**
```tsx
<div className="wine-box-fallback">
  <img src={fallbackImage} alt="The Wire Brand Wine Box" />
</div>
```

**Layer 2: CSS 3D Transform (Mid-tier)**
```css
.wine-box-fallback {
  transform-style: preserve-3d;
  transform: rotateX(10deg) rotateY(20deg);
}

.wine-box-fallback:hover {
  transform: rotateX(5deg) rotateY(-5deg) scale(1.05);
}
```

**Layer 3: WebGL (High-end)**
```tsx
{supportsWebGL && !reducedMotion ? (
  <WineBox3D {...props} />
) : (
  <WineBoxFallback {...props} />
)}
```

### 7. Accessibility Considerations

- Provide descriptive alt text for fallback image
- `aria-label` on interactive canvas
- Keyboard controls for rotation (arrow keys)
- Focus indicator when canvas is focused
- Screen reader announcement: "Interactive 3D preview of Wine Box. Use arrow keys to rotate."

### 8. Integration Points

#### On Subscription Page
```tsx
<section className="twb-section twb-section--3d-showcase">
  <Container variant="wide">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      
      {/* Left: 3D Box */}
      <div className="twb-3d-container">
        <WineBox3D
          autoRotate
          enableInteraction
          showContents
        />
        <p className="text-center text-sm mt-4 text-twb-text-secondary">
          Drag to rotate • Hover to open
        </p>
      </div>
      
      {/* Right: Plan Selector */}
      <SubscriptionPlanSelector />
      
    </div>
  </Container>
</section>
```

### 9. Development Phases

#### Phase 1: Proof of Concept (2-3 days)
- Basic box geometry (cube primitive)
- Ambient rotation
- Lid open on hover
- Fallback image

#### Phase 2: Visual Polish (3-4 days)
- Custom 3D model (GLTF)
- Realistic materials and textures
- Lighting setup
- Particle atmosphere

#### Phase 3: Interaction (2-3 days)
- Mouse/touch controls
- Scroll-based reveal
- Keyboard accessibility
- Performance optimization

#### Phase 4: Integration (1-2 days)
- Integrate into subscription page
- Responsive behavior
- Cross-browser testing
- Fallback testing

## Deliverables for Report

Generate `/reports/07-webgl-3d-feature-report.md` containing:

### Executive Summary
Overview of 3D feature design and implementation plan

### Visual Specification
- Detailed description of 3D scene
- Material and texture specs
- Lighting setup
- Atmosphere effects (particles, contours)

### Technical Specification
- Technology stack
- Component architecture (code structure)
- 3D scene hierarchy
- Animation specifications
- Performance targets

### Asset Requirements
- 3D models needed (format, poly count)
- Textures needed (size, format)
- Where to source/create assets

### Implementation Guide
- Step-by-step setup
- Code snippets for key features
- Integration instructions
- Testing checklist

### Fallback Strategy
- Progressive enhancement layers
- Device detection logic
- Reduced motion handling
- Accessibility features

### Acceptance Criteria
- [ ] 3D box renders at 60fps on desktop
- [ ] Ambient rotation is smooth
- [ ] Lid opens on hover (smooth animation)
- [ ] Drag to rotate works on touch devices
- [ ] Fallback image shows on low-end devices
- [ ] Reduced motion respected
- [ ] Keyboard accessible
- [ ] WCAG 2.1 AA compliant

### Risk Assessment
1. **Complexity:** WebGL is advanced, may be difficult to implement
2. **Performance:** May drop frames on low-end devices
3. **Browser Support:** WebGL not supported on very old browsers

### Dependency Mapping
- **Blocks:** 10-implementation-priority-analysis
- **Blocked By:** 01, 05 (visual, motion)
- **Enables:** Subscription page final implementation

## Success Metrics
- [ ] Complete 3D scene specification
- [ ] All materials/textures specified
- [ ] Animation patterns defined
- [ ] Fallback strategy documented
- [ ] Performance budget established
- [ ] Accessibility features specified
