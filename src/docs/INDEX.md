# 📚 Documentation Index

**Complete reference for The Wire Brand project documentation**

---

## 🚀 Quick Links

### Get Started
- **[Transformation Summary](/docs/TRANSFORMATION-SUMMARY.md)** ⭐ START HERE
- **[Site Restructure Proposal](/docs/SITE-RESTRUCTURE-PROPOSAL.md)**
- **[Before/After Comparison](/docs/BEFORE-AFTER-COMPARISON.md)**

### Execute
- **[Content Migration Summary](/docs/CONTENT-MIGRATION-SUMMARY.md)** - Move content to data files
- **[Navigation Mockup](/docs/NAVIGATION-MOCKUP.md)** - Visual reference

### Guidelines
- **[Main Guidelines](/guidelines/Guidelines.md)** - Brand identity, voice, tokens
- **[Guidelines Index](/guidelines/INDEX.md)** - Complete guidelines navigation

---

## 📂 Directory Structure

```
/docs/                      Documentation & planning
  ├── INDEX.md             This file
  ├── TRANSFORMATION-SUMMARY.md       Site transformation overview
  ├── SITE-RESTRUCTURE-PROPOSAL.md    Complete restructure plan
  ├── NAVIGATION-MOCKUP.md            Navigation visual mockups
  ├── BEFORE-AFTER-COMPARISON.md      Side-by-side comparisons
  ├── CONTENT-MIGRATION-SUMMARY.md    Content migration guide
  └── Attributions.md                 Asset attributions

/guidelines/               Brand guidelines & standards
  ├── Guidelines.md        Main guidelines (brand, voice, tokens)
  ├── INDEX.md             Guidelines navigation
  ├── accessibility/       WCAG compliance (3 files)
  ├── architecture/        Sitemap, routing, components (3 files)
  ├── design-tokens/       14 token guidelines
  ├── patterns/            Design patterns (8 files)
  ├── wordpress/           WP integration (2 files)
  └── development/         JSDoc, testing, performance (5 files)

/prompts/                  Orchestrated prompts
  ├── README.md            Prompts overview
  ├── PROMPT-SYSTEM-GUIDELINES.md    System documentation
  ├── content-migration-to-data-files.md    ⭐ NEW
  ├── content-migration-checklist.md        ⭐ NEW
  ├── cleanup.md           System cleanup
  ├── continue.md          Next task execution
  └── [10 analysis prompts]

/reports/                  Analysis reports
  ├── README.md            Reports overview
  ├── kwv-corporate-audit.md          ⭐ NEW
  ├── css-migration-audit-report.md
  ├── 01-visual-design-report.md
  └── 02-content-strategy-report.md

/tasks/                    Implementation tracking
  ├── README.md            Tasks overview
  ├── task-list.md         Master task list
  ├── site-transformation-progress.md  ⭐ NEW
  ├── dark-mode-phase-2-complete.md
  └── [7 other task files]
```

---

## 🎯 Documentation by Purpose

### Planning & Strategy
| Document | Purpose | Status |
|----------|---------|--------|
| [TRANSFORMATION-SUMMARY.md](/docs/TRANSFORMATION-SUMMARY.md) | Site transformation overview | ✅ Complete |
| [SITE-RESTRUCTURE-PROPOSAL.md](/docs/SITE-RESTRUCTURE-PROPOSAL.md) | Detailed restructure plan | ✅ Complete |
| [BEFORE-AFTER-COMPARISON.md](/docs/BEFORE-AFTER-COMPARISON.md) | Visual comparisons | ✅ Complete |
| [NAVIGATION-MOCKUP.md](/docs/NAVIGATION-MOCKUP.md) | Navigation designs | ✅ Complete |

### Implementation Guides
| Document | Purpose | Status |
|----------|---------|--------|
| [CONTENT-MIGRATION-SUMMARY.md](/docs/CONTENT-MIGRATION-SUMMARY.md) | Content migration guide | ✅ Complete |
| [/prompts/content-migration-to-data-files.md](/prompts/content-migration-to-data-files.md) | Content migration prompt | ✅ Complete |
| [/prompts/content-migration-checklist.md](/prompts/content-migration-checklist.md) | 32 clarification questions | ✅ Complete |

### Progress Tracking
| Document | Purpose | Status |
|----------|---------|--------|
| [/tasks/site-transformation-progress.md](/tasks/site-transformation-progress.md) | Transformation progress | 🔄 In Progress (15% complete) |
| [/reports/kwv-corporate-audit.md](/reports/kwv-corporate-audit.md) | KWV reference audit | ✅ Complete |
| [/tasks/task-list.md](/tasks/task-list.md) | Master task list | 🔄 Active |

### Brand Standards
| Document | Purpose | Status |
|----------|---------|--------|
| [/guidelines/Guidelines.md](/guidelines/Guidelines.md) | Main brand guidelines | ✅ Updated |
| [/guidelines/design-tokens/colors.md](/guidelines/design-tokens/colors.md) | Color system | ✅ Complete |
| [/guidelines/design-tokens/typography.md](/guidelines/design-tokens/typography.md) | Typography system | ✅ Complete |

---

## 🗺️ Site Transformation Roadmap

### ✅ Phase 1: Brand Identity Update (40% Complete)
- [x] Guidelines.md updated with family farm story
- [x] Logo component renamed to "The Wire Brand"
- [x] Email addresses updated (hello@thewirebrand.co.za)
- [x] Copyright notices updated
- [ ] Social media links updated
- [ ] Newsletter component updated
- [ ] Breadcrumbs updated
- [ ] Contact page updated

### 🔄 Phase 2: Navigation Consolidation (0% Complete)
- [ ] Create unified Header.tsx
- [ ] Create unified Footer.tsx
- [ ] Update Layout.tsx
- [ ] Delete old header/footer components

### ⏳ Phase 3: Content Refactoring (0% Complete)
- [ ] Remove corporate brand names (38 instances)
- [ ] Update product catalogs
- [ ] Rewrite section components
- [ ] Update experience names
- [ ] Create data files structure

### ⏳ Phase 4: Testing & Verification (0% Complete)
- [ ] Visual testing
- [ ] Content verification
- [ ] Link testing
- [ ] Accessibility check

---

## 📝 New Content Migration System

### What It Is
A comprehensive system to move ALL hardcoded content from components to centralized `/data/` files while rewriting everything in The Wire Brand's family-oriented voice.

### Key Documents
1. **[Content Migration Summary](/docs/CONTENT-MIGRATION-SUMMARY.md)** - Overview & guide
2. **[Main Prompt](/prompts/content-migration-to-data-files.md)** - 600+ line execution prompt
3. **[Checklist](/prompts/content-migration-checklist.md)** - 32 clarification questions

### How to Execute
```bash
# Simply type this command:
migrate content

# AI will:
# 1. Ask 32 clarification questions (Phase A)
# 2. Create data file structure (Phase B)
# 3. Migrate components systematically (Phase C)
# 4. Follow priority order (Phase D)
```

### What Gets Created
```
/data/
├── siteContent.ts       # Contact, hours, social media
├── homepage.ts          # Homepage sections
├── navigation.ts        # All menus
├── copy.ts             # Microcopy & UI text
├── about.ts            # About page content
├── experiences.ts      # Visitor experiences
├── events.ts           # Event types & packages
└── products/
    ├── wines.ts        # Wine catalog
    ├── spirits.ts      # Spirits catalog
    └── cheese.ts       # Cheese products
```

### Time Estimate
- **Phase A (Questions):** 30 minutes
- **Phase B (Data structure):** 2 hours
- **Phase C (Migration):** 10 hours
- **Phase D (Testing):** 2 hours
- **Total:** ~15 hours over 3 weeks

---

## 🎨 Brand Voice Reference

### The Wire Brand Voice
**Speaks like:**
- A welcoming family member (warm, genuine)
- A passionate craftsperson (proud but humble)
- An enthusiastic host (inviting)
- A knowledgeable friend (sharing without condescension)

### Quick DO/DON'T

| DO ✅ | DON'T ❌ |
|-------|----------|
| "We're," "You'll," "It's" | "We are," "You will" |
| "Hey," "Check out" | "Greetings," "Please view" |
| "Come visit us!" | "Schedule a visit" |
| "Grab a bottle" | "Purchase now" |
| "Join The Wire Family" | "Subscribe to our mailing list" |
| "Our goats make amazing cheese" | "We offer artisan cheese products" |
| Personal stories | Corporate descriptions |

### Example Transformation

**Before (Corporate KWV):**
> "KWV enjoys a worldwide reputation for its brands that consistently deliver exceptional enjoyment. We are proud to offer you our portfolio!"

**After (Family Wire Brand):**
> "Welcome to our family farm! For over 50 years, we've been handcrafting wines, spirits, and cheese right here against Paarl Mountain. Come taste the difference."

---

## 🔗 Key External References

### Brand Story
- **What We Make:** Wines, Grappa, Brandy, Goat Cheese
- **Location:** Paarl Mountain, Paarl, South Africa
- **History:** 50+ years, multi-generational
- **Tagline:** "Handcrafted wines, spirits & cheese from our Paarl Mountain farm"

### Contact Info
- **Email:** hello@thewirebrand.co.za
- **Reservations:** reservations@thewirebrand.co.za
- **Events:** events@thewirebrand.co.za
- **Phone:** +27 21 807 3007
- **Address:** Paarl Mountain Road, Paarl, 7646, South Africa

### Social Media
- **Facebook:** /thewirebrand
- **Instagram:** @thewirebrand
- **Twitter:** @thewirebrand

---

## 🎯 Current Priorities

### Immediate (This Week)
1. ✅ Complete Phase 1 (Brand Identity) - 60% remaining
2. ⏳ Begin Phase 2 (Unified Navigation)
3. ⏳ Prepare for content migration (answer Phase A questions)

### Short-term (Next 2 Weeks)
1. ⏳ Complete navigation consolidation
2. ⏳ Execute content migration
3. ⏳ Remove all corporate brand names

### Long-term (Next Month)
1. ⏳ Complete site transformation
2. ⏳ Content polish & refinement
3. ⏳ Accessibility audit
4. ⏳ Performance optimization

---

## 📊 Progress Overview

| Phase | Status | % Complete | Est. Remaining |
|-------|--------|------------|----------------|
| Phase 1: Brand Identity | 🔄 In Progress | 40% | 1.5 hours |
| Phase 2: Navigation | ⏳ Not Started | 0% | 3 hours |
| Phase 3: Content Refactoring | ⏳ Not Started | 0% | 3 hours |
| Phase 4: Testing | ⏳ Not Started | 0% | 1 hour |
| **Content Migration** | ⏳ Ready to Execute | 0% | 15 hours |
| **OVERALL PROJECT** | 🔄 In Progress | ~15% | ~23 hours |

---

## 🚀 Quick Commands

### Start Work Session
```bash
cleanup          # Clean up system first
continue         # Execute next task
```

### Content Migration
```bash
migrate content  # Start content migration (NEW!)
```

### System Maintenance
```bash
cleanup          # Audit & clean
audit guidelines # Reorganize guidelines
process reports  # Convert reports to tasks
```

---

## 📞 Need Help?

### Finding Information
- **Brand identity?** → [/guidelines/Guidelines.md](/guidelines/Guidelines.md)
- **Voice & tone?** → [/docs/CONTENT-MIGRATION-SUMMARY.md](/docs/CONTENT-MIGRATION-SUMMARY.md)
- **Navigation structure?** → [/docs/NAVIGATION-MOCKUP.md](/docs/NAVIGATION-MOCKUP.md)
- **What's next?** → [/tasks/task-list.md](/tasks/task-list.md)
- **Progress status?** → [/tasks/site-transformation-progress.md](/tasks/site-transformation-progress.md)

### Common Questions
- **How do I start content migration?** → Type `migrate content`
- **What's the current status?** → Read [/tasks/site-transformation-progress.md](/tasks/site-transformation-progress.md)
- **What should I work on next?** → Type `continue`
- **How do I clean up the project?** → Type `cleanup`

---

## 📅 Document Version History

| Date | Update | Files Changed |
|------|--------|---------------|
| 2026-03-14 | Content migration system created | 5 new files |
| 2026-03-14 | Site transformation begun | 15+ files updated |
| 2026-03-13 | Guidelines reorganized | 29 guideline files |
| 2024-03-12 | Prompt system established | 10 prompt files |

---

**Last Updated:** 2026-03-14  
**Next Review:** After Phase 2 completion

---

**Ready to continue?** Type `continue` or `migrate content` to proceed! 🚀
