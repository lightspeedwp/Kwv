# Content Migration to Data Files - Prompt

**Purpose:** Migrate all hardcoded content from components/pages to centralized data files with consistent voice & tone  
**Priority:** HIGH  
**Estimated Effort:** 6-8 hours  
**Dependencies:** Site transformation complete (brand identity updated)

---

## 🎯 Objective

Systematically move ALL hardcoded content (text, headings, descriptions, CTAs) from React components and pages into centralized data files (`/data/`) while rewriting everything to match The Wire Brand's family-oriented voice and tone.

---

## 📚 Background Context

### The Wire Brand Identity

**What We Are:**
- Family-owned boutique wine farm in Paarl, South Africa
- Located against Paarl Mountain
- 50+ years of multi-generational winemaking
- Handcrafted wines, craft spirits (grappa & brandy), artisan cheese (from our goats)
- Award-winning small-batch production
- Event venue (weddings, corporate, private functions)
- Visitor experiences (tastings, tours, farm visits)

**What We're NOT:**
- ❌ Corporate wine distributor
- ❌ Multi-brand portfolio company
- ❌ Industrial/mass production
- ❌ Pretentious or exclusive
- ❌ Formal or distant

---

## 🗣️ Voice & Tone Guidelines

### Core Voice Characteristics

**The Wire Brand speaks like:**
- **A welcoming family member** - warm, genuine, personal
- **A passionate craftsperson** - proud but humble about our work
- **An enthusiastic host** - inviting you to our home/farm
- **A knowledgeable friend** - sharing expertise without condescension

### Tone Spectrum by Context

| Context | Tone | Example |
|---------|------|---------|
| **Homepage/Welcome** | Warm, inviting, proud | "Welcome to our family farm, where we've been crafting wines for over 50 years" |
| **About/Story** | Personal, nostalgic, authentic | "My grandfather planted these vines in 1975..." |
| **Products** | Sensory, descriptive, passionate | "Our Shiraz bursts with dark cherry and a hint of chocolate" |
| **Experiences/Visit** | Enthusiastic, hospitable | "Come spend the day with us! Meet our goats, tour our distillery..." |
| **Events/Weddings** | Romantic, scenic, accommodating | "Exchange vows with Paarl Mountain as your backdrop" |
| **Shop/E-commerce** | Helpful, excited, personal | "Can't decide? Try our Wine & Cheese Pairing Box!" |
| **Educational** | Friendly expert, conversational | "Here's a little secret about aging brandy..." |
| **CTAs/Buttons** | Casual, action-oriented | "Grab a bottle" "Book your visit" "Join the family" |

### Language Style Guide

#### ✅ DO Use:
- **Contractions:** "We're," "You'll," "It's"
- **Personal pronouns:** "We," "Our," "You," "Your"
- **Casual language:** "Hey," "Honestly," "Pretty proud of," "Check out"
- **Sensory words:** "Taste," "Smell," "Feel," "Experience"
- **Storytelling:** "Every bottle tells a story..."
- **Invitations:** "Come," "Visit," "Join us," "Meet"
- **South African English:** "Colour," "Flavour," "Metre"
- **Emotion words:** "Love," "Passion," "Obsessed," "Excited"

#### ❌ DON'T Use:
- **Corporate speak:** "Leveraging," "Solutions," "Utilize," "Deliver value"
- **Pretentious wine jargon:** "Terroir expression" (unless explained), "Organoleptic profile"
- **Formal distance:** "Our establishment," "Patrons," "Clientele"
- **Overcomplicated:** "State-of-the-art facilities" → "Our modern cellar"
- **Generic:** "Quality products" → "Wines we're proud to share"
- **Salesy:** "Limited time offer!" "Buy now!" "Don't miss out!"

### Sentence Structure
- **Mix short and long sentences** for rhythm
- **Start with action/feeling** when possible
- **Use questions** to engage: "Ever wondered how grappa is made?"
- **Include personal anecdotes** when relevant
- **Keep it conversational** - read it aloud test

### Specific Voice Examples

#### Homepage Hero
❌ **Before (Corporate):** "KWV enjoys a worldwide reputation for wines that consistently deliver exceptional enjoyment."

✅ **After (Family):** "Welcome to our family farm. For over 50 years, we've been handcrafting award-winning wines, spirits, and cheese right here against Paarl Mountain."

#### Product Description
❌ **Before (Generic):** "Cathedral Cellar Cabernet Sauvignon - A premium product within our celebrated portfolio."

✅ **After (Sensory/Personal):** "Our Paarl Mountain Cabernet is a family favorite. You'll taste dark cherry, blackcurrant, and a whisper of cedar. My dad planted these vines in '85, and every harvest feels like coming home."

#### CTA Button
❌ **Before (Formal):** "Purchase Now" | "Submit Inquiry"

✅ **After (Casual):** "Grab a Bottle" | "Book Your Visit" | "Let's Chat"

#### Newsletter Signup
❌ **Before (Generic):** "Subscribe to our mailing list for updates and promotions."

✅ **After (Personal):** "Join The Wire Family! Get farm updates, harvest news, cheese releases, and first dibs on limited editions. Plus, we'll send you a 10% off code just for joining."

---

## 📋 Task Overview

### Phase A: Voice & Tone Clarification (FIRST STEP)

**Before migrating ANY content, complete this checklist:**

#### Questions to Ask:

1. **Product Naming:**
   - Do we have actual wine names, or should I create placeholder names?
   - Example wine names: "The Wire Red Blend," "Paarl Mountain Cabernet," "Family Reserve Shiraz"
   - Example cheese names: "Fresh Chèvre," "Aged Goat Cheese," "Wine-Washed Rind"
   - Example spirits: "Estate Grappa," "Reserve Brandy (5 year)"

2. **Family Story Specifics:**
   - Who founded the farm? (Name, year)
   - How many generations? (2nd? 3rd? 4th?)
   - Any specific family members to mention? (current winemaker, cheesemaker, etc.)
   - Key milestones: "Planted first vines in 1975," "Built distillery in 1990," etc.

3. **Awards & Accolades:**
   - Any real awards to reference?
   - Or generic placeholders: "Gold Medal, Paarl Wine Show 2022"

4. **Experience Pricing:**
   - Should pricing be included in content?
   - Or "Contact for pricing" / "View pricing" approach?

5. **Booking/Contact Preferences:**
   - Phone number: +27 21 807 3007 (confirmed?)
   - Email: hello@thewirebrand.co.za (confirmed?)
   - Booking system: reservations@thewirebrand.co.za?

6. **Opening Hours:**
   - Farm/Tasting Room hours?
   - Placeholder: "Mon-Sat: 9am-5pm, Sun: 10am-3pm"

7. **Tone Adjustments:**
   - More rustic/farmhouse vibe? Or elegant/refined?
   - More playful or more serious?
   - How much humor is appropriate?

**⚠️ STOP AND WAIT FOR ANSWERS BEFORE PROCEEDING TO PHASE B**

---

### Phase B: Create Data File Structure

Once voice/tone is clarified, create these data files:

#### `/data/siteContent.ts`
```typescript
// Core site-wide content
export const siteContent = {
  tagline: "Handcrafted wines, spirits & cheese from our Paarl Mountain farm",
  description: "Family-owned boutique wine farm for over 50 years",
  contact: {
    phone: "+27 21 807 3007",
    email: "hello@thewirebrand.co.za",
    reservations: "reservations@thewirebrand.co.za",
    events: "events@thewirebrand.co.za",
    address: {
      street: "Paarl Mountain Road",
      city: "Paarl",
      postal: "7646",
      country: "South Africa",
      gps: "33°45'47.7\"S 18°57'59.0\"E"
    }
  },
  hours: {
    weekdays: "Monday - Saturday: 9am - 5pm",
    weekend: "Sunday: 10am - 3pm",
    closed: ["Public Holidays", "Christmas Day", "New Year's Day"]
  },
  social: {
    facebook: "https://facebook.com/thewirebrand",
    instagram: "https://instagram.com/thewirebrand",
    twitter: "https://twitter.com/thewirebrand"
  },
  legalNotice: "Drink responsibly. Not for sale to persons under the age of 18."
};
```

#### `/data/homepage.ts`
```typescript
export const homepageContent = {
  hero: {
    title: "Welcome to The Wire Brand",
    subtitle: "Family wine farm in the heart of Paarl",
    description: "For over 50 years...",
    primaryCTA: {
      text: "Plan Your Visit",
      link: "/visit"
    },
    secondaryCTA: {
      text: "Shop Our Wines",
      link: "/shop"
    }
  },
  whatWeMake: [
    {
      icon: "wine",
      title: "Boutique Wines",
      description: "Small-batch, handcrafted wines from our estate vineyard",
      link: "/shop/wines"
    },
    // ... more
  ],
  aboutPreview: {
    title: "Our Family Story",
    text: "Three generations of winemaking...",
    image: "...",
    cta: { text: "Read Our Story", link: "/about" }
  },
  // ... more sections
};
```

#### `/data/products/wines.ts`
```typescript
export interface Wine {
  id: string;
  name: string;
  type: 'red' | 'white' | 'rose' | 'sparkling' | 'fortified';
  vintage: number;
  price: number;
  description: string;
  tastingNotes: string[];
  pairingNotes: string;
  story: string; // Personal family connection
  awards?: string[];
  image: string;
  inStock: boolean;
}

export const wines: Wine[] = [
  {
    id: 'wire-red-blend',
    name: 'The Wire Red Blend',
    type: 'red',
    vintage: 2020,
    price: 185,
    description: "Our signature blend...",
    tastingNotes: ['Dark cherry', 'Blackcurrant', 'Cedar'],
    pairingNotes: "Perfect with aged goat cheese...",
    story: "This blend was created by my grandfather in 1985...",
    awards: ['Gold Medal, Paarl Wine Show 2022'],
    image: 'wine-red-blend.jpg',
    inStock: true
  },
  // ... more wines
];
```

#### `/data/products/spirits.ts`
```typescript
export const spirits = [
  {
    id: 'estate-grappa',
    name: 'Estate Grappa',
    type: 'grappa',
    abv: 43,
    price: 320,
    description: "Made from pomace of our estate wines...",
    // ... similar to wines structure
  }
];
```

#### `/data/products/cheese.ts`
```typescript
export const cheeses = [
  {
    id: 'fresh-chevre',
    name: 'Fresh Chèvre',
    type: 'fresh',
    price: 85,
    description: "Made daily from our goats' milk...",
    // ...
  }
];
```

#### `/data/experiences.ts`
```typescript
export const experiences = [
  {
    id: 'wine-tasting',
    name: 'Wine Tasting Experience',
    duration: '60 minutes',
    price: 150,
    description: "Sample five of our estate wines...",
    includes: ['5 wine tastings', 'Tasting notes', 'Cellar tour'],
    story: "Join us in our tasting room...",
    availability: "Daily at 11am, 1pm, 3pm",
    bookingRequired: true,
    image: '...'
  },
  // ... all experiences
];
```

#### `/data/events.ts`
```typescript
export const eventTypes = [
  {
    id: 'weddings',
    name: 'Weddings',
    tagline: 'Say "I do" with Paarl Mountain as your backdrop',
    description: "Our farm is the perfect setting...",
    capacity: { ceremony: 150, reception: 200 },
    spaces: ['Vineyard Ceremony Site', 'Reception Hall', 'Garden Terrace'],
    packages: [
      {
        name: 'Vineyard Romance',
        description: '...',
        includes: ['...'],
        pricing: 'Contact for quote'
      }
    ],
    // ...
  }
];
```

#### `/data/about.ts`
```typescript
export const aboutContent = {
  story: {
    title: "Our Family Story",
    subtitle: "Three generations of winemaking passion",
    intro: "It all started in 1975 when my grandfather...",
    sections: [
      {
        year: 1975,
        title: "The Beginning",
        text: "...",
        image: "..."
      },
      // ... timeline
    ]
  },
  team: [
    {
      name: "Willem van der Berg",
      role: "Head Winemaker (3rd Generation)",
      bio: "...",
      image: "...",
      quote: "Every harvest is a celebration of my grandfather's legacy"
    }
  ],
  awards: [
    { year: 2023, title: "Gold Medal", event: "Paarl Wine Show", wine: "..." },
    // ...
  ],
  values: [
    {
      title: "Handcrafted with Care",
      description: "Small-batch passion...",
      icon: "hand"
    }
  ]
};
```

#### `/data/navigation.ts`
```typescript
export const navigation = {
  main: [
    {
      label: 'About',
      href: '/about',
      submenu: [
        { label: 'Our Story', href: '/about' },
        { label: 'The Farm', href: '/about/farm' },
        { label: 'Awards', href: '/about/awards' },
        { label: 'Team', href: '/about/team' },
        { label: 'Sustainability', href: '/about/sustainability' },
        { label: 'News', href: '/news' }
      ]
    },
    {
      label: 'Shop',
      href: '/shop',
      submenu: [
        { label: 'Wines', href: '/shop/wines', submenu: [...] },
        { label: 'Spirits', href: '/shop/spirits' },
        { label: 'Cheese', href: '/shop/cheese' },
        { label: 'Gifts', href: '/shop/gifts' },
        { label: 'Wine Club', href: '/wine-club' }
      ]
    },
    // ... Visit, Events
  ],
  footer: {
    columns: [
      {
        title: 'About',
        links: [...]
      },
      // ...
    ]
  }
};
```

#### `/data/copy.ts` (Microcopy & UI text)
```typescript
export const copy = {
  buttons: {
    addToCart: "Add to Cart",
    buyNow: "Grab This Bottle",
    learnMore: "Learn More",
    bookNow: "Book Your Visit",
    subscribe: "Join The Family",
    // ...
  },
  errors: {
    generic: "Oops! Something went sideways. Give it another shot.",
    outOfStock: "This one's sold out, but we've got more beauties in stock!",
    // ...
  },
  emptyStates: {
    cart: "Your cart's looking a little lonely. Let's fix that!",
    // ...
  },
  newsletter: {
    title: "Join The Wire Family",
    subtitle: "Get farm updates, harvest news, and exclusive offers",
    placeholder: "Enter your email",
    submitButton: "Subscribe",
    successMessage: "Welcome to the family! Check your inbox for a special gift.",
    incentive: "Plus: 10% off your first order!"
  },
  // ... all UI text
};
```

---

### Phase C: Component Migration Process

For EACH component/page:

1. **Audit Current Content**
   - Identify all hardcoded strings
   - Note current voice/tone
   - List dynamic vs static content

2. **Rewrite Content**
   - Use voice & tone guidelines
   - Add personality and storytelling
   - Make it warmer and more family-oriented
   - Include sensory details where relevant

3. **Move to Data File**
   - Add to appropriate data file
   - Use clear, descriptive keys
   - Include TypeScript types

4. **Update Component**
   - Import data file
   - Replace hardcoded strings with variables
   - Ensure fallbacks exist
   - Maintain accessibility (aria-labels, alt text)

5. **Test**
   - Visual check
   - Content reads naturally
   - No broken references

---

### Phase D: Priority Order

Migrate in this order:

#### 🔴 Critical (Week 1):
1. **Homepage** (`/pages/company/Home.tsx`)
   - Hero section
   - What We Make cards
   - About preview
   - Newsletter signup

2. **Shop Homepage** (`/pages/shop/ShopHome.tsx`)
   - Hero
   - Category cards
   - Featured products

3. **Navigation** (All headers/footers)
   - Menu items
   - CTAs
   - Footer links

4. **About Page** (`/pages/company/About.tsx`)
   - Our story
   - Timeline
   - Values

#### 🟡 High Priority (Week 2):
5. **Product Pages**
   - Wine catalog
   - Spirits catalog
   - Cheese catalog
   - Product detail template

6. **Experiences** (`/pages/experiences/`)
   - All experience pages
   - Booking CTAs

7. **Events** (`/pages/events/`)
   - Weddings
   - Corporate
   - Packages

#### 🟢 Medium Priority (Week 3):
8. **News/Blog**
   - Sample posts
   - Categories

9. **Legal Pages**
   - Privacy, Terms, Returns
   - (Keep factual but warm)

10. **Error States & Microcopy**
    - 404 page
    - Form validation
    - Loading states

---

## 🔍 Quality Checklist

Before marking any component as "migrated," verify:

- [ ] Content moved to appropriate data file
- [ ] Voice & tone matches brand guidelines
- [ ] Sensory/personal details added where relevant
- [ ] No corporate jargon remaining
- [ ] CTAs are casual and action-oriented
- [ ] Component imports data correctly
- [ ] No hardcoded strings remain (except semantic HTML)
- [ ] TypeScript types defined
- [ ] Accessibility maintained (alt text, labels)
- [ ] Reads naturally when spoken aloud
- [ ] Includes storytelling elements where appropriate

---

## 📊 Progress Tracking

Create `/tasks/content-migration-progress.md` to track:

```markdown
## Components Migrated

### Homepage (5/5)
- [x] Hero section
- [x] What We Make
- [x] About preview
- [x] Featured products
- [x] Newsletter

### Shop (0/8)
- [ ] Shop hero
- [ ] Category grid
- [ ] Featured products
- [ ] Product detail template
- [ ] Cart
- [ ] Checkout
- [ ] Order confirmation
- [ ] My Account

### About (0/6)
- [ ] Our Story
- [ ] The Farm
- [ ] Awards
- [ ] Team
- [ ] Sustainability
- [ ] News

... etc
```

---

## 🎯 Success Criteria

Migration is complete when:

1. ✅ All hardcoded content moved to `/data/` files
2. ✅ All content rewritten in family farm voice
3. ✅ No "KWV" or corporate language remains
4. ✅ Components dynamically pull from data
5. ✅ Content is easily editable without touching components
6. ✅ Voice & tone is consistent across entire site
7. ✅ Storytelling and personality present throughout
8. ✅ All CTAs are casual and inviting

---

## 🚀 Execution Instructions

**To Execute This Prompt:**

```
I need you to perform a complete content migration following the 
"Content Migration to Data Files" prompt 
(/prompts/content-migration-to-data-files.md).

PHASE A (FIRST):
Before touching any code, please ask me the clarification 
questions listed in Phase A to ensure we have consistent 
voice, tone, and content details.

Once I've answered those questions, proceed with:
PHASE B: Create all data file structures
PHASE C: Migrate components systematically
PHASE D: Follow the priority order

Track progress in /tasks/content-migration-progress.md
```

---

## 📝 Example Before/After

### Component: Homepage Hero

#### BEFORE (Hardcoded, Corporate)
```tsx
<Hero>
  <h1>Welcome to KWV</h1>
  <p>KWV enjoys a worldwide reputation for wines that 
     consistently deliver exceptional enjoyment.</p>
  <Button>Shop Now</Button>
</Hero>
```

#### AFTER (Data-driven, Family Voice)

**Data file (`/data/homepage.ts`):**
```typescript
export const homepageContent = {
  hero: {
    title: "Welcome to The Wire Brand",
    subtitle: "Our family farm in the heart of Paarl",
    description: "For over 50 years, we've been handcrafting award-winning wines, spirits, and cheese right here against Paarl Mountain. Come taste the difference.",
    primaryCTA: {
      text: "Plan Your Visit",
      link: "/visit"
    },
    secondaryCTA: {
      text: "Shop Our Wines",
      link: "/shop"
    },
    image: "/images/hero-vineyard.jpg",
    imageAlt: "The Wire Brand vineyard with Paarl Mountain in background"
  }
};
```

**Component:**
```tsx
import { homepageContent } from '../data/homepage';

<Hero
  title={homepageContent.hero.title}
  subtitle={homepageContent.hero.subtitle}
  description={homepageContent.hero.description}
  primaryCTA={homepageContent.hero.primaryCTA}
  secondaryCTA={homepageContent.hero.secondaryCTA}
  image={homepageContent.hero.image}
  imageAlt={homepageContent.hero.imageAlt}
/>
```

---

**Ready to begin?** Start with Phase A clarification questions! 🚀
