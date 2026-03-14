# Homepage Pattern

**Category:** Patterns  
**Domain:** Page Templates  
**Version:** 1.0  
**Last Updated:** 2024-03-13  
**Status:** Active

---

## Overview

The Wire Brand homepage serves as the primary entry point, blending brand storytelling with clear pathways to shop. It combines **constructivist asymmetry** with **hand-drawn warmth** to create an authentic, engaging first impression.

**Homepage Goals:**
1. **Establish brand identity** - Handcrafted, organic, authentic
2. **Guide to shop** - Clear CTAs to wine catalog
3. **Tell the story** - Origin, philosophy, craftsmanship
4. **Build trust** - Awards, testimonials, sustainability
5. **Capture emails** - Newsletter signup, wine club

**Sections (in order):**
1. Hero (full-screen)
2. Brand Introduction (split layout)
3. Featured Wines Grid
4. Our Story (asymmetric)
5. Wine Club CTA
6. Latest News
7. Newsletter Signup

---

## 1. Hero Section

### Full-Screen Hero with Diagonal Composition

**Purpose:** Immediate impact, brand statement, primary CTA

```tsx
/**
 * Homepage Hero
 * 
 * Full-screen diagonal composition with oversized type and wine bottle.
 */
export function HomepageHero() {
  const navigate = useNavigate();
  
  return (
    <section className="relative min-h-[calc(100dvh-90px)] flex items-center overflow-hidden bg-[var(--twb-color-paper)]">
      {/* Diagonal background shape */}
      <div
        className="absolute inset-0 bg-[var(--twb-color-plum)]"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0 85%)',
        }}
      />
      
      {/* Hand-drawn texture overlay */}
      <div className="absolute inset-0 bg-paper-texture opacity-10" />
      
      <Container className="relative z-10 py-20 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Headline & CTA */}
          <div className="lg:col-span-7 lg:col-start-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Oversized headline */}
              <h1 className="font-serif text-white mb-6" style={{ transform: 'rotate(-1deg)' }}>
                <span className="block text-5xl lg:text-7xl mb-2">Handcrafted</span>
                <span className="block text-6xl lg:text-8xl font-bold">Wines</span>
                <span className="block text-4xl lg:text-6xl mt-2 text-white/90">from Paarl Valley</span>
              </h1>
              
              {/* Hand-drawn underline accent */}
              <HandDrawnDivider className="mb-8 w-64 text-white" />
              
              <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-xl">
                Organic, small-batch wines crafted with passion and authenticity since 2010
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate('/wines')}
                  className="bg-white text-[var(--twb-color-plum)] px-8 py-4 rounded-twb-md font-semibold text-lg hover:shadow-twb-lg transition-shadow"
                  style={{ transform: 'rotate(-0.5deg)' }}
                >
                  Explore Our Wines
                </button>
                
                <SketchButton
                  onClick={() => navigate('/about')}
                  className="text-white border-white px-8 py-4 text-lg"
                >
                  Our Story
                </SketchButton>
              </div>
            </motion.div>
          </div>
          
          {/* Right: Wine bottle image */}
          <div className="lg:col-span-4 lg:col-start-9 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="/hero-wine-bottle.png"
                alt="The Wire Brand Cabernet Sauvignon"
                className="w-full max-w-md mx-auto lg:max-w-none"
                style={{ transform: 'rotate(5deg)' }}
              />
              
              {/* Hand-drawn circle accent */}
              <svg
                className="absolute -top-8 -right-8 w-32 h-32 -z-10 text-[var(--twb-color-clay)]"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  opacity="0.3"
                />
              </svg>
            </motion.div>
          </div>
          
        </div>
      </Container>
      
      {/* Scroll down arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
        <ScrollDownArrow />
      </div>
      
      {/* Diagonal accent line */}
      <div
        className="absolute bottom-0 left-0 w-full h-1 bg-[var(--twb-color-clay)]"
        style={{ transform: 'rotate(-1deg)', transformOrigin: 'bottom left' }}
      />
    </section>
  );
}
```

---

## 2. Brand Introduction

### Split Layout with Image & Text

**Purpose:** Introduce brand values and craftsmanship

```tsx
export function BrandIntroduction() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Hand-drawn vineyard illustration */}
          <div className="lg:col-span-6 lg:col-start-1">
            <div className="relative">
              <img
                src="/vineyard-landscape.jpg"
                alt="Paarl valley vineyard"
                className="w-full rounded-twb-lg shadow-twb-xl"
                style={{ transform: 'rotate(-2deg)' }}
              />
              
              {/* Hand-drawn frame accent */}
              <div
                className="absolute -bottom-4 -right-4 w-full h-full border-4 border-[var(--twb-color-vine)] rounded-twb-lg -z-10"
                style={{ transform: 'rotate(1deg)' }}
              />
            </div>
          </div>
          
          {/* Right: Text content */}
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="inline-block mb-4 px-4 py-2 bg-[var(--twb-color-vine)]/10 rounded-full">
              <span className="text-sm font-medium text-[var(--twb-color-vine)] uppercase tracking-wide">
                Est. 2010
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-serif mb-6 text-[var(--twb-color-ink)]">
              Crafted by <span className="text-highlight">Passion</span>, Not Production
            </h2>
            
            <p className="text-lg text-[var(--twb-color-vine)] mb-6">
              In the heart of South Africa's Paarl valley, we craft small-batch wines that honor tradition while embracing organic innovation.
            </p>
            
            <p className="text-lg text-[var(--twb-color-vine)] mb-8">
              Every bottle tells the story of our terroir, our vines, and the hands that tend them with care.
            </p>
            
            <div className="flex items-center gap-4">
              <Link
                to="/about"
                className="text-[var(--twb-color-plum)] font-medium flex items-center gap-2 group"
              >
                <span>Discover Our Story</span>
                <HandDrawnArrow direction="right" className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          
        </div>
      </Container>
    </section>
  );
}
```

---

## 3. Featured Wines Grid

### Asymmetric Product Grid

**Purpose:** Showcase 3-4 flagship wines with clear shop CTAs

```tsx
export function FeaturedWinesGrid() {
  const featuredWines = useFeaturedWines(); // Mock data
  
  return (
    <section className="py-20 lg:py-32 bg-[var(--twb-color-paper)] relative overflow-hidden">
      {/* Diagonal grid overlay (subtle) */}
      <DiagonalGridOverlay />
      
      <Container className="relative z-10">
        {/* Section header (off-center) */}
        <div className="mb-16 lg:grid lg:grid-cols-12">
          <div className="lg:col-span-6 lg:col-start-2">
            <h2 className="text-4xl lg:text-6xl font-serif mb-4 text-[var(--twb-color-ink)]">
              Our Featured Wines
            </h2>
            <HandDrawnDivider className="mb-6 w-48" />
            <p className="text-xl text-[var(--twb-color-vine)]">
              Handpicked selections from our cellar
            </p>
          </div>
        </div>
        
        {/* Product grid (staggered) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredWines.map((wine, index) => (
            <motion.div
              key={wine.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                marginTop: index % 2 === 0 ? 0 : '2rem', // Stagger
                transform: `rotate(${index % 2 === 0 ? '-0.5deg' : '0.5deg'})`,
              }}
            >
              <HandDrawnProductCard wine={wine} />
            </motion.div>
          ))}
        </div>
        
        {/* View all CTA */}
        <div className="mt-16 text-center">
          <Link
            to="/wines"
            className="inline-block bg-[var(--twb-color-plum)] text-white px-8 py-4 rounded-twb-md font-semibold text-lg hover:shadow-twb-lg transition-shadow"
            style={{ transform: 'rotate(-0.5deg)' }}
          >
            View All Wines
          </Link>
        </div>
      </Container>
    </section>
  );
}
```

---

## 4. Our Story (Asymmetric)

### Layered Composition with Overlapping Elements

**Purpose:** Highlight origin story, winemaker, sustainability

```tsx
export function OurStorySection() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      <Container>
        <div className="relative min-h-[600px]">
          
          {/* Background shape (constructivist) */}
          <div
            className="absolute top-0 left-0 w-2/3 h-2/3 bg-[var(--twb-color-plum)]/10 rounded-twb-lg -z-10"
            style={{ transform: 'rotate(-3deg)' }}
          />
          
          {/* Winemaker photo (layer 1) */}
          <div className="absolute top-12 left-8 lg:left-20 w-full max-w-md z-10">
            <img
              src="/winemaker-portrait.jpg"
              alt="Our winemaker in the cellar"
              className="w-full rounded-twb-md shadow-twb-xl"
              style={{ transform: 'rotate(-1deg)' }}
            />
          </div>
          
          {/* Text card (layer 2 - overlaps image) */}
          <div
            className="absolute bottom-8 right-8 lg:right-20 bg-white p-8 lg:p-12 rounded-twb-lg shadow-twb-xl max-w-xl z-20"
            style={{ transform: 'rotate(2deg)' }}
          >
            <div className="inline-block mb-4">
              <WineBottleHandDrawn className="w-12 h-12 text-[var(--twb-color-plum)]" />
            </div>
            
            <h3 className="text-3xl font-serif mb-4 text-[var(--twb-color-ink)]">
              Meet the Winemaker
            </h3>
            
            <p className="text-[var(--twb-color-vine)] mb-4">
              "Wine isn't just a beverage—it's a living connection to the land, the season, and the hands that craft it. Every vintage tells a unique story."
            </p>
            
            <p className="text-sm text-[var(--twb-color-vine)] mb-6">
              — Sarah van der Berg, Head Winemaker
            </p>
            
            <Link
              to="/about"
              className="text-[var(--twb-color-plum)] font-medium flex items-center gap-2"
            >
              <span>Read Our Full Story</span>
              <HandDrawnArrow direction="right" />
            </Link>
          </div>
          
          {/* Decorative element (layer 3) */}
          <GrapeCluster className="absolute top-1/3 right-0 w-32 h-32 opacity-10 -z-10" />
          
        </div>
      </Container>
    </section>
  );
}
```

---

## 5. Wine Club CTA

### Bold Color Block with Split Design

**Purpose:** Drive wine club signups

```tsx
export function WineClubCTA() {
  return (
    <section className="relative py-20 lg:py-32 bg-[var(--twb-color-ink)] text-white overflow-hidden">
      {/* Background type (constructivist) */}
      <div
        className="absolute top-0 left-0 font-serif text-[15rem] lg:text-[25rem] font-bold opacity-5 leading-none pointer-events-none"
        style={{ transform: 'rotate(-10deg)' }}
      >
        CLUB
      </div>
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Headline */}
          <div>
            <h2 className="text-5xl lg:text-7xl font-serif mb-6">
              Join The <span className="text-[var(--twb-color-clay)]">Wire</span> Club
            </h2>
            
            <HandDrawnDivider className="mb-8 w-64 text-white" />
            
            <p className="text-xl text-white/90 mb-6">
              Exclusive access to limited releases, special pricing, and invitations to private tasting events.
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-[var(--twb-color-clay)] flex-shrink-0 mt-0.5" />
                <span className="text-white/90">Quarterly wine shipments curated by our winemaker</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-[var(--twb-color-clay)] flex-shrink-0 mt-0.5" />
                <span className="text-white/90">15% discount on all purchases</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-[var(--twb-color-clay)] flex-shrink-0 mt-0.5" />
                <span className="text-white/90">Priority access to limited vintages</span>
              </li>
            </ul>
          </div>
          
          {/* Right: Form */}
          <div
            className="bg-white p-8 lg:p-12 rounded-twb-lg"
            style={{ transform: 'rotate(1deg)' }}
          >
            <h3 className="text-2xl font-serif mb-6 text-[var(--twb-color-ink)]">
              Sign Up Today
            </h3>
            
            <form className="space-y-4">
              <FormField
                label="Full Name"
                id="name"
                required
              />
              
              <FormField
                label="Email"
                id="email"
                type="email"
                required
              />
              
              <FormField
                label="Phone"
                id="phone"
                type="tel"
              />
              
              <button
                type="submit"
                className="w-full bg-[var(--twb-color-plum)] text-white py-4 rounded-twb-md font-semibold text-lg hover:shadow-twb-lg transition-shadow"
              >
                Join the Club
              </button>
            </form>
          </div>
          
        </div>
      </Container>
    </section>
  );
}
```

---

## 6. Latest News

### 3-Column Blog Grid

**Purpose:** Show recent blog posts/news

```tsx
export function LatestNews() {
  const posts = useLatestPosts(3); // Mock data
  
  return (
    <section className="py-20 lg:py-32 bg-[var(--twb-color-paper)]">
      <Container>
        {/* Section header */}
        <div className="mb-12 lg:grid lg:grid-cols-12">
          <div className="lg:col-span-8 lg:col-start-3 text-center">
            <h2 className="text-4xl lg:text-5xl font-serif mb-4 text-[var(--twb-color-ink)]">
              Latest from the Vineyard
            </h2>
            <p className="text-xl text-[var(--twb-color-vine)]">
              Stories, updates, and insights from our winemaking journey
            </p>
          </div>
        </div>
        
        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Link
              key={post.id}
              to={`/news/${post.slug}`}
              className="group"
              style={{ transform: `rotate(${index % 2 === 0 ? '-0.5deg' : '0.5deg'})` }}
            >
              <div className="bg-white rounded-twb-md overflow-hidden shadow-twb-sm hover:shadow-twb-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <p className="text-sm text-[var(--twb-color-vine)] mb-2">
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </p>
                  
                  <h3 className="text-xl font-serif mb-3 text-[var(--twb-color-ink)] group-hover:text-[var(--twb-color-plum)] transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-[var(--twb-color-vine)] mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <span className="text-[var(--twb-color-plum)] font-medium flex items-center gap-2">
                    Read More
                    <HandDrawnArrow direction="right" className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* View all link */}
        <div className="mt-12 text-center">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-[var(--twb-color-plum)] font-medium text-lg"
          >
            <span>View All News</span>
            <HandDrawnArrow direction="right" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
```

---

## 7. Newsletter Signup

### Full-Width Newsletter CTA

**Purpose:** Capture email subscribers

```tsx
export function NewsletterSignup() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6">
            <GrapeCluster className="w-16 h-16 mx-auto text-[var(--twb-color-plum)]" />
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-serif mb-4 text-[var(--twb-color-ink)]">
            Stay Connected
          </h2>
          
          <p className="text-xl text-[var(--twb-color-vine)] mb-8">
            Get exclusive updates on new releases, events, and special offers
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              required
              className="flex-1 h-14 px-6 border-2 border-[var(--twb-border-secondary)] rounded-twb-md text-[var(--twb-color-ink)] focus:outline-none focus:border-[var(--twb-color-plum)] transition-colors"
            />
            
            <button
              type="submit"
              className="h-14 bg-[var(--twb-color-plum)] text-white px-8 rounded-twb-md font-semibold hover:shadow-twb-lg transition-shadow whitespace-nowrap"
              style={{ transform: 'rotate(-0.5deg)' }}
            >
              Subscribe
            </button>
          </form>
          
          <p className="text-sm text-[var(--twb-color-vine)] mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </Container>
    </section>
  );
}
```

---

## Complete Homepage Component

```tsx
/**
 * Homepage
 * 
 * Main landing page combining all sections in order.
 */
export default function Homepage() {
  return (
    <>
      <HomepageHero />
      <BrandIntroduction />
      <FeaturedWinesGrid />
      <OurStorySection />
      <WineClubCTA />
      <LatestNews />
      <NewsletterSignup />
    </>
  );
}
```

---

## Related Guidelines

- [Hero Standards](/guidelines/patterns/hero-standards.md) - Hero section requirements
- [Hand-Drawn Aesthetic](/guidelines/design-tokens/hand-drawn-aesthetic.md) - Organic elements
- [Constructivism Design](/guidelines/patterns/constructivism-design.md) - Asymmetric layouts

---

## Changelog

### Version 1.0 (2024-03-13)
- Homepage structure defined (7 sections)
- Hero section with diagonal composition created
- Brand introduction split layout documented
- Featured wines asymmetric grid added
- Our story layered composition provided
- Wine club CTA bold block designed
- Latest news blog grid established
- Newsletter signup section created

---

**Questions or Issues?**  
Contact the design team for homepage layout consultation.
