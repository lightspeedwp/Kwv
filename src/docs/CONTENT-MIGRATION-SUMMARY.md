# 📝 Content Migration System - Summary

**Created:** 2026-03-14  
**Purpose:** Centralize all content in data files with proper voice & tone

---

## 🎯 What Was Created

I've created a comprehensive content migration system with **3 key documents**:

### 1. Main Prompt: [/prompts/content-migration-to-data-files.md](/prompts/content-migration-to-data-files.md)
**Comprehensive 600+ line prompt covering:**
- Voice & tone guidelines (DO/DON'T examples)
- 4-phase migration process
- Data file structure templates
- Component migration workflow
- Quality checklist
- Success criteria

### 2. Checklist: [/prompts/content-migration-checklist.md](/prompts/content-migration-checklist.md)
**32 clarification questions organized by category:**
- Product naming & details (wines, spirits, cheese, pricing)
- Family story & history (founder, generations, milestones)
- Awards & recognition
- Visitor information (hours, contact, address)
- Experience offerings (tastings, tours, pricing)
- Event venue details (capacity, spaces, packages)
- Voice & tone calibration (tone scale, humor level)
- Content depth preferences

### 3. System Integration: Updated [/prompts/PROMPT-SYSTEM-GUIDELINES.md](/prompts/PROMPT-SYSTEM-GUIDELINES.md)
**Added trigger word:**
```
migrate content → /prompts/content-migration-to-data-files.md
```

---

## 🗣️ Voice & Tone Guidelines (Key Points)

### The Wire Brand Voice
**Speaks like:**
- A welcoming family member (warm, genuine, personal)
- A passionate craftsperson (proud but humble)
- An enthusiastic host (inviting you to our farm)
- A knowledgeable friend (sharing without condescension)

### Language Style

#### ✅ DO Use:
- **Contractions:** "We're," "You'll," "It's"
- **Personal:** "We," "Our," "You"
- **Casual:** "Hey," "Honestly," "Check out"
- **Sensory:** "Taste," "Smell," "Feel," "Experience"
- **Storytelling:** "Every bottle tells a story..."
- **Invitations:** "Come," "Visit," "Join us"

#### ❌ DON'T Use:
- **Corporate:** "Leveraging," "Solutions," "Utilize"
- **Pretentious:** "Terroir expression," "Organoleptic profile"
- **Formal:** "Our establishment," "Patrons," "Clientele"
- **Generic:** "Quality products" → "Wines we're proud to share"
- **Salesy:** "Limited time offer!" "Buy now!"

### Examples

| Context | Before (Corporate) | After (Family) |
|---------|-------------------|----------------|
| **Homepage** | "KWV enjoys a worldwide reputation for wines that consistently deliver exceptional enjoyment" | "Welcome to our family farm. For over 50 years, we've been handcrafting award-winning wines, spirits, and cheese right here against Paarl Mountain" |
| **Product** | "Cathedral Cellar Cabernet - A premium product within our celebrated portfolio" | "Our Paarl Mountain Cabernet is a family favorite. You'll taste dark cherry, blackcurrant, and a whisper of cedar. My dad planted these vines in '85" |
| **CTA** | "Purchase Now" | "Grab a Bottle" |
| **Newsletter** | "Subscribe to our mailing list for updates" | "Join The Wire Family! Get farm updates, harvest news, and first dibs on limited editions" |

---

## 📁 Data File Structure (Will Be Created)

```
/data/
├── siteContent.ts          # Core site-wide content (contact, hours, social)
├── homepage.ts             # Homepage sections (hero, what we make, about preview)
├── navigation.ts           # All navigation menus (main, footer)
├── copy.ts                 # Microcopy (buttons, errors, empty states)
├── about.ts                # About page (story, team, awards, values)
├── experiences.ts          # All visitor experiences (tastings, tours)
├── events.ts               # Event types (weddings, corporate, packages)
└── products/
    ├── wines.ts            # Wine catalog with full details
    ├── spirits.ts          # Spirits catalog (grappa, brandy)
    └── cheese.ts           # Cheese products
```

---

## 🚀 How to Execute

### Step 1: Trigger the Prompt
```
migrate content
```

### Step 2: Answer Phase A Questions (32 questions)
**Categories:**
1. Product Naming (wines, spirits, cheese, pricing)
2. Family Story (founder, generations, milestones, anecdotes)
3. Awards & Recognition
4. Visitor Information (hours, contact, address, social)
5. Experience Offerings (tastings, tours, special experiences)
6. Event Venue Details (capacity, spaces, packages)
7. Voice & Tone Calibration (tone scale, humor level, storytelling)
8. Content Depth (description length, technical specs, pairings)

### Step 3: AI Creates Data Structure
- Sets up all `/data/` files with TypeScript interfaces
- Populates with your answers from Phase A
- Creates templates for products, experiences, events

### Step 4: AI Migrates Components
**Priority order:**
1. **Week 1:** Homepage, Shop Homepage, Navigation, About
2. **Week 2:** Products, Experiences, Events
3. **Week 3:** News, Legal, Error states

For each component:
- Extract hardcoded content
- Rewrite with family farm voice
- Move to appropriate data file
- Update component to import from data
- Test and verify

---

## 📊 Migration Priority Matrix

| Priority | Components | Est. Time | Week |
|----------|-----------|-----------|------|
| 🔴 **Critical** | Homepage, Shop Home, Navigation, About | 6 hours | 1 |
| 🟡 **High** | Products, Experiences, Events | 6 hours | 2 |
| 🟢 **Medium** | News, Legal, Error states | 4 hours | 3 |
| **TOTAL** | **~30 components** | **16 hours** | **3 weeks** |

---

## ✅ Quality Checklist (Per Component)

Before marking any component as "migrated":

- [ ] Content moved to appropriate data file
- [ ] Voice & tone matches brand guidelines
- [ ] Sensory/personal details added where relevant
- [ ] No corporate jargon remaining
- [ ] CTAs are casual and action-oriented
- [ ] Component imports data correctly
- [ ] No hardcoded strings remain
- [ ] TypeScript types defined
- [ ] Accessibility maintained
- [ ] Reads naturally when spoken aloud
- [ ] Includes storytelling elements where appropriate

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

## 📖 Key Documents

### Prompts (Execute These):
1. **Main Prompt:** [/prompts/content-migration-to-data-files.md](/prompts/content-migration-to-data-files.md)
2. **Checklist:** [/prompts/content-migration-checklist.md](/prompts/content-migration-checklist.md)

### Reference (Read These):
3. **Brand Guidelines:** [/guidelines/Guidelines.md](/guidelines/Guidelines.md) (Section 3: Brand Identity & Voice)
4. **Prompt System:** [/prompts/PROMPT-SYSTEM-GUIDELINES.md](/prompts/PROMPT-SYSTEM-GUIDELINES.md)

### Progress Tracking (Will Be Created):
5. **Progress Tracker:** `/tasks/content-migration-progress.md` (created during migration)

---

## 💡 Why This Matters

### Current State (Problems):
- ❌ Content hardcoded in 30+ components
- ❌ Inconsistent voice & tone (corporate in some places, family in others)
- ❌ Difficult to update (must edit multiple files)
- ❌ KWV references still present in content
- ❌ No single source of truth for product info

### After Migration (Benefits):
- ✅ All content in centralized `/data/` files
- ✅ Consistent family farm voice throughout
- ✅ Easy to update (edit one data file, all components update)
- ✅ 100% Wire Brand content (no KWV)
- ✅ Single source of truth
- ✅ Storytelling and personality throughout
- ✅ Ready for CMS integration later (data structure already defined)

---

## 🔄 Workflow Example

### Before Migration:
**Homepage Hero Component:**
```tsx
<Hero>
  <h1>Welcome to KWV</h1>
  <p>KWV enjoys a worldwide reputation for wines...</p>
  <Button>Shop Now</Button>
</Hero>
```

### After Migration:

**Data File (`/data/homepage.ts`):**
```typescript
export const homepageContent = {
  hero: {
    title: "Welcome to The Wire Brand",
    subtitle: "Our family farm in the heart of Paarl",
    description: "For over 50 years, we've been handcrafting award-winning wines, spirits, and cheese right here against Paarl Mountain.",
    primaryCTA: { text: "Plan Your Visit", link: "/visit" },
    secondaryCTA: { text: "Shop Our Wines", link: "/shop" }
  }
};
```

**Component:**
```tsx
import { homepageContent } from '@/data/homepage';

<Hero
  title={homepageContent.hero.title}
  subtitle={homepageContent.hero.subtitle}
  description={homepageContent.hero.description}
  primaryCTA={homepageContent.hero.primaryCTA}
  secondaryCTA={homepageContent.hero.secondaryCTA}
/>
```

**Benefits:**
- ✅ Voice changed from corporate to family
- ✅ Content easily editable in one place
- ✅ Component is clean and reusable
- ✅ Type-safe with TypeScript
- ✅ Ready for CMS integration

---

## 🚦 When to Execute

**Recommended timing:**
- ✅ **AFTER** site transformation is complete (brand identity updated)
- ✅ **AFTER** unified navigation is created
- ✅ **BEFORE** building new pages/features
- ✅ **BEFORE** content writing begins

**Why this order?**
- Brand identity must be finalized first
- Navigation structure should be stable
- All components should exist before migrating their content
- This creates the foundation for all future content

---

## 📞 Quick Reference

### To Start Migration:
```
migrate content
```

### To See Progress:
```
continue
```

### To Check System Status:
```
cleanup
```

---

## 🎉 What You'll Have After Completion

1. **Centralized Content System**
   - All content in `/data/` directory
   - TypeScript interfaces for type safety
   - Easy to update and maintain

2. **Consistent Voice**
   - Family farm tone throughout
   - No corporate language
   - Storytelling present
   - Personal and inviting

3. **Clean Components**
   - No hardcoded strings
   - Reusable and flexible
   - Data-driven
   - Easy to test

4. **Future-Ready**
   - CMS integration ready
   - Translation-ready structure
   - A/B testing ready
   - Easy content experiments

---

**Ready to begin?** Simply type:
```
migrate content
```

And I'll guide you through the entire process! 🚀
