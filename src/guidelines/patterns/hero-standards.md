# Hero Section Standards

**Version:** 1.0  
**Last Updated:** March 15, 2026  
**Status:** Active  
**Applies To:** All Handcrafted Wines hero sections

---

## Overview

Hero sections are the first visual element users see on a page. They set the tone, communicate the page's purpose, and drive user action. This document defines mandatory standards for all hero implementations.

**Goal:** Consistent, accessible, conversion-optimized hero sections across all pages.

---

## Quick Reference

### Hero Variants

| Variant | Height | Use Case | Example Pages |
|---------|--------|----------|---------------|
| **Full** | 100vh - 90px | Homepage, major landing pages | HomePage, ShopHome |
| **Large** | 70vh | Section landing pages | About, Experiences, Events |
| **Medium** | 50vh | Content pages | Farm, Team, Awards |
| **Small** | 40vh | Detail pages | ProductDetail, NewsPost |

### Mandatory Elements

| Element | Required | Notes |
|---------|----------|-------|
| Title (h1) | ✅ Yes | One per page |
| Subtitle | ⚠️ Recommended | Provides context |
| CTA Button(s) | ⚠️ Recommended | 1-2 buttons max |
| Background Image | ⚠️ Optional | Must have fallback color |
| Scroll Arrow | ✅ Yes (full/large) | Required on tall heroes |

---

## 1. Mobile Height Standard ⚠️ MANDATORY

### 1.1 Mobile Viewport Height

**All hero sections MUST use `min-h-[calc(100dvh-90px)]` on mobile.**

**Why:**
- Header is 90px tall on mobile
- `100dvh` = dynamic viewport height (accounts for mobile browser UI)
- `-90px` ensures hero doesn't hide behind header

**Implementation:**
```tsx
<section className="
  min-h-[calc(100dvh-90px)]  // Mobile: full viewport minus header
  md:min-h-[70vh]            // Tablet: 70% viewport
  lg:min-h-[80vh]            // Desktop: 80% viewport
  relative flex items-center
">
  {/* Hero content */}
</section>
```

### 1.2 Desktop Height

**Desktop can use standard vh units:**
- Full hero: `min-h-screen` (100vh)
- Large hero: `min-h-[70vh]` or `min-h-[80vh]`
- Medium hero: `min-h-[50vh]`
- Small hero: `min-h-[40vh]`

---

## 2. Scroll Down Arrow ⚠️ MANDATORY

### 2.1 When Required

**Scroll arrow is REQUIRED on:**
- Full-height heroes (100vh)
- Large heroes (70vh+)
- Any hero taller than 60vh

**Scroll arrow is OPTIONAL on:**
- Medium heroes (50vh)
- Small heroes (40vh)
- Heroes with minimal content below

### 2.2 Scroll Arrow Component

**Use dedicated component:**

```tsx
/**
 * ScrollDownArrow Component
 * 
 * Animated scroll indicator for hero sections.
 * Positioned at bottom-center of hero.
 */

import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

export const ScrollDownArrow = () => {
  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight - 90, // Scroll past hero
      behavior: 'smooth'
    });
  };

  return (
    <motion.button
      onClick={handleClick}
      className="
        absolute bottom-8 left-1/2 -translate-x-1/2 z-30
        flex items-center justify-center
        w-12 h-12 rounded-full
        border-2 border-white/50
        bg-white/10 backdrop-blur-sm
        hover:bg-white/20 hover:border-white
        transition-all cursor-pointer
      "
      aria-label="Scroll to content"
      animate={{ y: [0, 10, 0] }}
      transition={{ 
        duration: 2, 
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <ChevronDown className="size-6 text-white" aria-hidden="true" />
    </motion.button>
  );
};
```

### 2.3 Scroll Arrow Placement

**Positioning standards:**
- Position: `absolute`
- Bottom: `2rem` (8 on Tailwind scale)
- Left: `50%`
- Transform: `-translate-x-1/2`
- Z-index: `30` (above content, below modals)

**Visual requirements:**
- Circle around arrow icon
- White border (2px, 50% opacity)
- Semi-transparent background (white 10% opacity)
- Backdrop blur for legibility
- Hover state (increase opacity)
- Animated bounce (Motion.react)

**Gap requirement:**
- Must have clear gap between arrow and text/buttons
- Minimum 4rem (16 on Tailwind) from bottom text/buttons
- Use `pb-32` on hero content container

---

## 3. Hero Content Structure

### 3.1 Standard Hero Layout

```tsx
<section className="relative min-h-[calc(100dvh-90px)] md:min-h-[70vh]">
  {/* Background Layer */}
  <div className="absolute inset-0 z-0">
    <img 
      src={backgroundImage} 
      alt=""
      className="w-full h-full object-cover"
    />
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
  </div>

  {/* Content Layer */}
  <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
    <div className="max-w-3xl py-20 pb-32">
      {/* Title */}
      <Typography 
        variant="h1" 
        className="text-white mb-4"
      >
        {title}
      </Typography>

      {/* Subtitle */}
      <Typography 
        variant="body" 
        className="text-white/90 text-lg mb-8"
      >
        {subtitle}
      </Typography>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-4">
        <Button variant="primary" size="lg">
          {primaryCTA}
        </Button>
        <Button variant="outline" size="lg">
          {secondaryCTA}
        </Button>
      </div>
    </div>
  </div>

  {/* Scroll Arrow */}
  <ScrollDownArrow />
</section>
```

### 3.2 Content Padding

**Required padding:**
- Top: `py-20` (5rem, 80px)
- Bottom: `pb-32` (8rem, 128px) - **MANDATORY** to clear scroll arrow
- Horizontal: `px-6` (1.5rem, 24px) minimum

**Mobile adjustments:**
```tsx
className="
  py-12 pb-24  // Mobile: smaller padding
  md:py-16 md:pb-28
  lg:py-20 lg:pb-32  // Desktop: standard padding
"
```

---

## 4. Typography Standards

### 4.1 Heading Hierarchy

**h1 (Page Title):**
- Variant: `Typography variant="h1"`
- Color: White or `--twb-color-ink` (depends on background)
- Size: Fluid `clamp(2.4rem, 5vw + 1rem, 4.5rem)`
- Max-width: `max-w-3xl` (prevent overly long lines)

**Subtitle/Subheading:**
- Variant: `Typography variant="body"` with increased size
- Color: White 90% opacity or `--twb-color-text-secondary`
- Size: `text-lg` or `text-xl`
- Max-width: `max-w-2xl`

### 4.2 Text Contrast

**On dark backgrounds (images):**
- Text: White (`text-white`)
- Subtitle: White 90% (`text-white/90`)
- Gradient overlay: `from-black/40 to-black/60`
- WCAG requirement: 4.5:1 contrast minimum

**On light backgrounds:**
- Text: Ink (`text-[var(--twb-color-ink)]`)
- Subtitle: Secondary (`text-[var(--twb-color-text-secondary)]`)
- No overlay needed

### 4.3 Readability

**Line length:**
- Max characters per line: 60-80
- Use `max-w-3xl` or `max-w-2xl` containers
- Never full-width text on large screens

**Line height:**
- Headings: `leading-tight` (1.2)
- Body text: `leading-relaxed` (1.6)

---

## 5. Background Images

### 5.1 Image Requirements

**Technical specs:**
- Format: WebP with JPEG fallback
- Resolution: 1920×1080 minimum (Full HD)
- File size: <500KB (compressed)
- Aspect ratio: 16:9 or 21:9

**Responsive images:**
```tsx
<picture>
  <source 
    srcSet="/hero-mobile.webp" 
    media="(max-width: 768px)"
    type="image/webp"
  />
  <source 
    srcSet="/hero-desktop.webp" 
    media="(min-width: 769px)"
    type="image/webp"
  />
  <img 
    src="/hero-desktop.jpg" 
    alt="" 
    className="w-full h-full object-cover"
  />
</picture>
```

### 5.2 Image Overlay

**Gradient overlay for text readability:**

```tsx
{/* Dark overlay for light images */}
<div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />

{/* Light overlay for dark images */}
<div className="absolute inset-0 bg-gradient-to-b from-white/40 to-white/60" />

{/* Brand color overlay */}
<div className="absolute inset-0 bg-[var(--twb-color-plum)]/20" />
```

**Overlay strength:**
- Light images: 40-60% black overlay
- Dark images: 20-40% black overlay
- High-contrast images: 20-30% overlay
- Low-contrast images: 50-70% overlay

### 5.3 Fallback Background

**Always provide fallback color:**

```tsx
className="
  bg-[var(--twb-color-paper)]  // Fallback if image fails
  bg-cover bg-center
"
style={{ backgroundImage: `url(${heroImage})` }}
```

---

## 6. Call-to-Action Buttons

### 6.1 Button Count

**Maximum 2 CTA buttons:**
- Primary CTA (most important action)
- Secondary CTA (alternative action)

**Never more than 2 buttons** - Reduces decision paralysis

### 6.2 Button Hierarchy

**Primary CTA:**
- Variant: `primary` (plum background, white text)
- Size: `lg` on desktop, `md` on mobile
- Position: First/left

**Secondary CTA:**
- Variant: `outline` (transparent with border)
- Size: `lg` on desktop, `md` on mobile
- Position: Second/right

**Example:**
```tsx
<div className="flex flex-col sm:flex-row gap-4">
  <Button variant="primary" size="lg" onClick={handlePrimary}>
    Shop Our Wines
  </Button>
  <Button variant="outline" size="lg" onClick={handleSecondary}>
    Book a Tasting
  </Button>
</div>
```

### 6.3 CTA Text

**Action-oriented verbs:**
- ✅ "Shop Our Wines"
- ✅ "Book a Tasting"
- ✅ "Learn Our Story"
- ✅ "Explore Products"
- ❌ "Click Here"
- ❌ "Learn More" (vague)

---

## 7. Hero Variants

### 7.1 Full Hero (Homepage)

**Use case:** Homepage, major landing pages

**Specifications:**
- Height: `min-h-[calc(100dvh-90px)]` mobile, `min-h-screen` desktop
- Background: Full-bleed image or video
- Content: Centered vertically and horizontally
- Scroll arrow: **REQUIRED**

**Example:**
```tsx
<Hero
  variant="full"
  title="Four Generations of Handcrafted Excellence"
  subtitle="Since 1918, our family has been creating award-winning wines, craft spirits, and artisan cheese on our Paarl Mountain farm."
  image="/hero-vineyard.jpg"
  primaryCTA={{ label: "Shop Our Wines", href: "/shop" }}
  secondaryCTA={{ label: "Book a Tasting", href: "/experiences" }}
/>
```

### 7.2 Large Hero (Section Landing)

**Use case:** About, Experiences, Events, Shop landing

**Specifications:**
- Height: `min-h-[70vh]` or `min-h-[80vh]`
- Background: Image or solid color
- Content: Left-aligned or centered
- Scroll arrow: **REQUIRED**

### 7.3 Medium Hero (Content Pages)

**Use case:** Farm, Team, Awards, Sustainability

**Specifications:**
- Height: `min-h-[50vh]`
- Background: Image or color
- Content: Centered or left-aligned
- Scroll arrow: Optional

### 7.4 Small Hero (Detail Pages)

**Use case:** Product detail, news posts, FAQs

**Specifications:**
- Height: `min-h-[40vh]`
- Background: Color or subtle pattern
- Content: Centered
- Scroll arrow: Not needed

---

## 8. Accessibility Requirements ⚠️ MANDATORY

### 8.1 Semantic HTML

**Use proper heading hierarchy:**
```tsx
<section aria-label="Hero section">
  <h1>{title}</h1>  {/* Only one h1 per page */}
  <p>{subtitle}</p>
  <div>
    <Button>CTA</Button>
  </div>
</section>
```

### 8.2 Image Alt Text

**Background images:**
- Use `alt=""` (decorative)
- Add `role="img"` if meaningful
- Add `aria-label` if conveys important info

**Foreground images:**
- Use descriptive `alt` text
- Describe what's in the image

### 8.3 Keyboard Navigation

**All interactive elements must be keyboard accessible:**
- CTA buttons: Tab-able, Enter/Space to activate
- Scroll arrow: Tab-able, Enter to scroll
- Links: Tab-able, Enter to follow

**Focus indicators:**
- Visible focus ring (gold 2px)
- 4.5:1 contrast on backgrounds

### 8.4 Screen Readers

**Announce hero content:**
```tsx
<section 
  aria-labelledby="hero-title"
  role="region"
>
  <h1 id="hero-title">{title}</h1>
  <p id="hero-subtitle">{subtitle}</p>
</section>
```

---

## 9. Responsive Design

### 9.1 Mobile (<768px)

**Adjustments:**
- Stack buttons vertically: `flex-col`
- Reduce padding: `py-12 pb-24`
- Smaller text sizes (use fluid typography)
- Full-width buttons on small screens
- Scroll arrow positioned higher (`bottom-6`)

### 9.2 Tablet (768px-1023px)

**Adjustments:**
- Buttons horizontal: `sm:flex-row`
- Standard padding: `md:py-16 md:pb-28`
- Wider max-width: `md:max-w-2xl`

### 9.3 Desktop (1024px+)

**Adjustments:**
- Full padding: `lg:py-20 lg:pb-32`
- Widest max-width: `lg:max-w-3xl`
- Larger button sizes: `size="lg"`

---

## 10. Performance

### 10.1 Image Optimization

**Lazy loading:**
```tsx
<img 
  src={heroImage} 
  alt=""
  loading="eager"  // Hero images should load immediately
  fetchpriority="high"  // Prioritize hero image
/>
```

**Responsive loading:**
```tsx
<img
  srcSet="
    /hero-mobile.jpg 768w,
    /hero-tablet.jpg 1024w,
    /hero-desktop.jpg 1920w
  "
  sizes="100vw"
  src="/hero-desktop.jpg"
  alt=""
/>
```

### 10.2 Video Backgrounds

**If using video:**
- Autoplay, loop, muted
- Provide poster image
- Max file size: 2MB
- Disable on mobile (use static image)

```tsx
<video
  autoPlay
  loop
  muted
  playsInline
  poster="/hero-poster.jpg"
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="/hero-video.mp4" type="video/mp4" />
  <source src="/hero-video.webm" type="video/webm" />
</video>
```

---

## 11. Common Patterns

### 11.1 Centered Hero

**Content centered vertically and horizontally:**
```tsx
<section className="relative min-h-[calc(100dvh-90px)] flex items-center justify-center">
  <div className="text-center max-w-3xl px-6 py-20 pb-32">
    <Typography variant="h1" className="text-white mb-4">
      {title}
    </Typography>
    <Typography variant="body" className="text-white/90 text-lg mb-8">
      {subtitle}
    </Typography>
    <div className="flex justify-center gap-4">
      <Button variant="primary" size="lg">{primaryCTA}</Button>
    </div>
  </div>
  <ScrollDownArrow />
</section>
```

### 11.2 Left-Aligned Hero

**Content aligned to left:**
```tsx
<section className="relative min-h-[calc(100dvh-90px)] flex items-center">
  <div className="container mx-auto px-6 max-w-7xl">
    <div className="max-w-2xl py-20 pb-32">
      <Typography variant="h1" className="text-white mb-4">
        {title}
      </Typography>
      <Typography variant="body" className="text-white/90 text-lg mb-8">
        {subtitle}
      </Typography>
      <div className="flex gap-4">
        <Button variant="primary" size="lg">{primaryCTA}</Button>
        <Button variant="outline" size="lg">{secondaryCTA}</Button>
      </div>
    </div>
  </div>
  <ScrollDownArrow />
</section>
```

### 11.3 Split Hero (Image + Content)

**50/50 split on desktop:**
```tsx
<section className="relative min-h-[calc(100dvh-90px)]">
  <div className="container mx-auto h-full">
    <div className="grid lg:grid-cols-2 gap-0 h-full">
      {/* Left: Content */}
      <div className="flex items-center px-6 lg:px-12 py-20 pb-32">
        <div>
          <Typography variant="h1" className="mb-4">{title}</Typography>
          <Typography variant="body" className="text-lg mb-8">{subtitle}</Typography>
          <Button variant="primary" size="lg">{primaryCTA}</Button>
        </div>
      </div>
      
      {/* Right: Image */}
      <div className="relative">
        <img 
          src={heroImage} 
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
  <ScrollDownArrow />
</section>
```

---

## 12. Handcrafted Wines Examples

### 12.1 Homepage Hero

```tsx
<Hero
  variant="full"
  title="Four Generations of Handcrafted Excellence"
  subtitle="Since 1918, our family has been creating award-winning wines, craft spirits, and artisan cheese on our Paarl Mountain farm."
  image="/images/hero-vineyard-sunset.jpg"
  primaryCTA={{ label: "Shop Our Wines", href: "/shop/wines" }}
  secondaryCTA={{ label: "Book a Tasting", href: "/experiences/wine-tasting" }}
/>
```

### 12.2 Shop Hero

```tsx
<Hero
  variant="large"
  title="Handcrafted from Our Farm to Your Table"
  subtitle="Explore our collection of wines, spirits, and artisan cheeses—all made with care on our family farm."
  image="/images/hero-wine-cellar.jpg"
  primaryCTA={{ label: "Shop Wines", href: "/shop/wines" }}
  secondaryCTA={{ label: "Shop Spirits", href: "/shop/spirits" }}
/>
```

### 12.3 Experiences Hero

```tsx
<Hero
  variant="large"
  title="Experience Our Farm"
  subtitle="Join us for wine tastings, farm tours, and cheese pairings. Come see where the magic happens."
  image="/images/hero-tasting-room.jpg"
  primaryCTA={{ label: "Book a Tasting", href: "/experiences/wine-tasting" }}
/>
```

---

## 13. Checklist

### 13.1 Pre-Launch Checklist

**Every hero must pass this checklist before deployment:**

- [ ] Mobile height uses `min-h-[calc(100dvh-90px)]`
- [ ] Scroll arrow present on full/large heroes
- [ ] Scroll arrow positioned at `bottom-8 left-1/2`
- [ ] Content has `pb-32` to clear scroll arrow
- [ ] h1 present and unique on page
- [ ] Subtitle provides context
- [ ] CTA buttons (max 2) with action verbs
- [ ] Background image optimized (<500KB)
- [ ] Gradient overlay for text readability
- [ ] Text contrast meets WCAG AA (4.5:1)
- [ ] Keyboard accessible (all buttons Tab-able)
- [ ] Focus indicators visible
- [ ] Responsive on mobile, tablet, desktop
- [ ] Images have proper alt text

---

## 14. Resources

- [Hero Design Best Practices](https://www.smashingmagazine.com/2020/05/hero-design-best-practices/)
- [Above-the-Fold Content](https://www.nngroup.com/articles/page-fold-manifesto/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Maintained by:** Handcrafted Wines Development Team  
**Last Review:** March 15, 2026  
**Next Review:** Quarterly
