# Prompts Directory

**Available orchestrated prompts for The Wire Brand project**

---

## 📚 Available Prompts

### System Maintenance
- **`cleanup`** - System audit and cleanup ([cleanup.md](./cleanup.md))
- **`continue`** - Execute next task from master list ([continue.md](./continue.md))
- **`audit guidelines`** - Reorganize guidelines system ([audit-guidelines.md](./audit-guidelines.md))
- **`process reports`** - Convert analysis reports to tasks ([process-reports.md](./process-reports.md))

### Content & Migration
- **`migrate content`** - Move all content to data files with voice/tone rewrite ([content-migration-to-data-files.md](./content-migration-to-data-files.md))
  - **Checklist:** [content-migration-checklist.md](./content-migration-checklist.md)
- **`migrate css variables`** - Replace hardcoded CSS with variables ([css-migration-hardcoded-to-variables.md](./css-migration-hardcoded-to-variables.md))

### Analysis Prompts (Wave System)
- **Wave 1:** Visual Design ([01-visual-design-analysis.md](./01-visual-design-analysis.md))
- **Wave 1:** Content Strategy ([02-content-strategy-analysis.md](./02-content-strategy-analysis.md))
- **Wave 2:** Component Architecture ([03-component-architecture-analysis.md](./03-component-architecture-analysis.md))
- **Wave 2:** CSS Token System ([04-css-token-system-analysis.md](./04-css-token-system-analysis.md))
- **Wave 3:** Motion & Interaction ([05-motion-interaction-analysis.md](./05-motion-interaction-analysis.md))
- **Wave 3:** Commerce Experience ([06-commerce-experience-analysis.md](./06-commerce-experience-analysis.md))
- **Wave 3:** WebGL/3D Features ([07-webgl-3d-feature-analysis.md](./07-webgl-3d-feature-analysis.md))
- **Wave 3:** SVG Asset Generation ([08-svg-asset-generation.md](./08-svg-asset-generation.md))
- **Wave 3:** Accessibility Audit ([09-accessibility-audit.md](./09-accessibility-audit.md))
- **Wave 3:** Implementation Priority ([10-implementation-priority-analysis.md](./10-implementation-priority-analysis.md))

### Master Orchestrator
- **[00-master-orchestrator.md](./00-master-orchestrator.md)** - Coordinates all analysis prompts

---

## 🚀 How to Use Prompts

### Quick Start
```
User: "migrate content"
AI: [Reads content-migration-to-data-files.md and executes]
```

### With Preparation
```
User: "I'm ready to migrate all content to data files. 
       Follow the content migration prompt."
       
AI: [Reads content-migration-to-data-files.md]
    [Asks Phase A clarification questions]
    [Waits for answers]
    [Executes migration systematically]
```

---

## 📖 New Prompt: Content Migration

### Overview
**Prompt:** `migrate content`  
**File:** [content-migration-to-data-files.md](./content-migration-to-data-files.md)  
**Checklist:** [content-migration-checklist.md](./content-migration-checklist.md)

**Purpose:**
Move ALL hardcoded content from React components to centralized `/data/` files while rewriting everything to match The Wire Brand's family-oriented voice and tone.

### What It Does

1. **Phase A: Clarification** (FIRST)
   - Asks 32 questions about:
     - Product names (wines, spirits, cheese)
     - Family story & history
     - Awards & milestones
     - Contact details & hours
     - Experience offerings
     - Event venue details
     - Voice & tone preferences
     - Content depth preferences

2. **Phase B: Data Structure**
   - Creates `/data/siteContent.ts`
   - Creates `/data/homepage.ts`
   - Creates `/data/products/wines.ts`
   - Creates `/data/products/spirits.ts`
   - Creates `/data/products/cheese.ts`
   - Creates `/data/experiences.ts`
   - Creates `/data/events.ts`
   - Creates `/data/about.ts`
   - Creates `/data/navigation.ts`
   - Creates `/data/copy.ts` (microcopy)

3. **Phase C: Component Migration**
   - Systematically moves content from components
   - Rewrites with family farm voice
   - Updates components to use data imports
   - Maintains accessibility

4. **Phase D: Priority Order**
   - Week 1: Homepage, Shop, Navigation, About
   - Week 2: Products, Experiences, Events
   - Week 3: News, Legal, Error states

### Voice & Tone Guidelines Included

**DO Use:**
- Contractions ("We're," "You'll")
- Personal pronouns ("We," "Our")
- Casual language ("Hey," "Check out")
- Sensory words ("Taste," "Smell," "Feel")
- Storytelling
- Invitations ("Come visit us")

**DON'T Use:**
- Corporate speak ("Leveraging," "Solutions")
- Pretentious jargon
- Formal distance
- Generic sales language

### Examples Provided

#### Before (Corporate):
> "KWV enjoys a worldwide reputation for wines that consistently deliver exceptional enjoyment."

#### After (Family):
> "Welcome to our family farm. For over 50 years, we've been handcrafting award-winning wines, spirits, and cheese right here against Paarl Mountain."

---

## 📊 Execution Time Estimates

| Prompt | Time | Type |
|--------|------|------|
| cleanup | 10-15 min | Single session |
| continue | 30-60 min | Single session |
| audit guidelines | 20-30 min | Single session |
| process reports | 15-20 min | Single session |
| migrate css variables | 2-4 hours | Multi-session |
| **migrate content** | **12-16 hours** | **Multi-session** |

---

## 🎯 Success Criteria

### Content Migration Complete When:
1. ✅ All hardcoded content moved to `/data/`
2. ✅ All content rewritten in family farm voice
3. ✅ No "KWV" or corporate language remains
4. ✅ Components dynamically pull from data
5. ✅ Content is easily editable without touching components
6. ✅ Voice & tone is consistent site-wide
7. ✅ Storytelling present throughout
8. ✅ All CTAs are casual and inviting

---

## 📁 Related Documentation

- **Guidelines:** [/guidelines/Guidelines.md](/guidelines/Guidelines.md)
- **System Diagram:** [SYSTEM-DIAGRAM.md](./SYSTEM-DIAGRAM.md)
- **Execution Guide:** [EXECUTION-GUIDE.md](./EXECUTION-GUIDE.md)
- **Prompt System:** [PROMPT-SYSTEM-GUIDELINES.md](./PROMPT-SYSTEM-GUIDELINES.md)

---

## ⚡ Quick Commands

### Start Content Migration
```
migrate content
```

### System Cleanup First
```
cleanup
```

Then:
```
migrate content
```

### See What's Next
```
continue
```

---

**Last Updated:** 2026-03-14
