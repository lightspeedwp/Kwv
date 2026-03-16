# File Organization & Creation Standards

**Category:** Development Standards  
**Version:** 2.0  
**Last Updated:** 2024-03-15  
**Status:** Mandatory

---

## Overview

This guideline defines where and how to create files in The Wire Brand project. Following these standards ensures consistency, discoverability, and optimal AI processing.

**Critical Principles:**
1. **Files should never be too large.** Always aim to break content into smaller, focused modules.
2. **All new guidelines MUST use templates** from `/guidelines/_templates/`
3. **Never create guidelines in the project root.** Always create in `/guidelines/` or a subfolder.

---

## 🚨 ROOT-LEVEL FILE RESTRICTIONS

### ONLY THESE THREE .md FILES ALLOWED IN PROJECT ROOT:

```
/
├── ATTRIBUTIONS.md  ✅ ALLOWED (Component, library, and asset attributions)
├── README.md        ✅ ALLOWED (Project overview and setup instructions)
├── CHANGELOG.md     ✅ ALLOWED (Version history and release notes)
└── [any-other.md]   ❌ PROHIBITED
```

**These files are PROTECTED:**
- `/ATTRIBUTIONS.md` - Documents all third-party libraries, components, fonts, images used
- `/README.md` - Main project documentation, setup instructions, development guide
- `/CHANGELOG.md` - Version history following Keep a Changelog format

**Examples of PROHIBITED root-level files:**
- ❌ `/WHATS-NEXT.md` (use `/tasks/task-list.md` instead)
- ❌ `/TODO.md` (use `/tasks/task-list.md` instead)
- ❌ `/NOTES.md` (use `/docs/` folder instead)
- ❌ `/PLAN.md` (use `/tasks/{feature}-task-list.md` instead)
- ❌ `/REDESIGN-BRIEF.md` (use `/docs/` folder instead)
- ❌ `/Attributions.md` (lowercase 'A' - use `/ATTRIBUTIONS.md` instead)

**Why this restriction?**
- Keeps root clean and scannable
- Forces proper organization into `/tasks/`, `/docs/`, `/prompts/`, `/reports/`
- All tasks MUST go in `/tasks/task-list.md` or `/tasks/{feature}-task-list.md`
- AI agents process files better when organized in proper folders
- Consistency: all caps for root-level .md files (ATTRIBUTIONS, README, CHANGELOG)

**The `cleanup` trigger will:**
- Move important guidelines to `/guidelines/`
- Archive or delete unauthorized root-level .md files
- Ensure only these 3 protected files remain in root

---

## File Size Limits

### Maximum Recommended Sizes

| File Type | Max Lines | Max Size | Reason |
|-----------|-----------|----------|--------|
| **Data files** | ~100 | ~20 kB | Prevent load performance issues |
| **Component files** | ~300 | ~30 kB | Maintain readability and testability |
| **CSS files** | ~500 | ~50 kB | Improve specificity management |
| **Guideline files** | ~500 | ~50 kB | Enhance discoverability |
| **Prompt files** | ~200 | ~20 kB | Ensure clear execution |
| **Report files** | ~800 | ~80 kB | Comprehensive but focused |
| **Task lists** | ~400 | ~40 kB | Manageable tracking |

### Why Size Limits Matter

**AI Processing:** Large files degrade AI processing quality. Smaller files improve:
- Context understanding
- Accurate recommendations
- Complete analysis
- Memory optimization

**Developer Experience:**
- Faster file loading
- Easier navigation
- Better version control diffs
- Clearer responsibilities

---

## Directory Structure

```
/
├── components/           # React components
│   ├── common/          # Atoms (Button, Typography, Logo)
│   ├── layout/          # Headers, footers, breadcrumbs
│   ├── sections/        # Reusable sections (Hero, BrandGrid)
│   ├── shop/            # E-commerce specific
│   └── ui/              # Radix primitives
├── data/                # Content data files
│   ├── homepage.ts      # Page-specific content
│   ├── products.ts      # Product catalog
│   ├── shop-faq.ts      # FAQ data
│   └── tastings.ts      # Experience data
├── styles/              # CSS files
│   ├── globals.css      # Main entry
│   ├── themes.css       # Theme orchestration
│   ├── themes-light.css # Light mode tokens
│   ├── themes-dark.css  # Dark mode tokens
│   └── utilities.css    # BEM component classes
├── guidelines/          # Project documentation
│   ├── _templates/      # Documentation templates
│   ├── accessibility/   # WCAG standards
│   ├── architecture/    # System design
│   ├── components/      # Component specs
│   ├── design-tokens/   # Token definitions
│   ├── development/     # Dev standards
│   ├── patterns/        # Design patterns
│   └── wordpress/       # WP integration
├── prompts/             # Automation prompts
│   ├── redesign/        # Orchestrated sub-prompts
│   ├── cleanup.md       # Single prompts
│   └── continue.md      # Workflow prompts
├── reports/             # Analysis reports
│   ├── redesign/        # Sub-folder reports
│   └── 01-visual-design-report.md
├── tasks/               # Task tracking
│   └── task-list.md     # Master task list
└── docs/                # Additional documentation
```

---

## Creating Files: Location Rules

### Prompts

**Location:** `/prompts/` or `/prompts/{category}/`

#### Pattern 1: Single Prompt

**When to use:** Standalone analysis or automation task

**File location:**
```
/prompts/my-audit.md
```

**Creates report:**
```
/reports/my-audit-report.md
```

**Example:**
```
/prompts/cleanup.md
  → /reports/cleanup-report.md (if report needed)
```

---

#### Pattern 2: Orchestrator Prompt

**When to use:** Complex multi-phase analysis requiring multiple sub-prompts

**File structure:**
```
/prompts/{category}/
├── 00-ORCHESTRATOR.md         # Main controller
├── 01-{sub-prompt}.md          # Sub-prompt 1
├── 02-{sub-prompt}.md          # Sub-prompt 2
└── 03-{sub-prompt}.md          # Sub-prompt 3
```

**Creates reports:**
```
/reports/{category}/
├── 01-{sub-prompt}-report.md   # Report from sub-prompt 1
├── 02-{sub-prompt}-report.md   # Report from sub-prompt 2
└── 03-{sub-prompt}-report.md   # Report from sub-prompt 3
```

**Example:**
```
/prompts/redesign/
├── 00-ORCHESTRATOR.md
├── 01-visual-design-analysis.md
├── 02-content-strategy-analysis.md
└── 03-component-architecture-analysis.md

/reports/redesign/
├── 01-visual-design-report.md
├── 02-content-strategy-report.md
└── 03-component-architecture-report.md
```

---

### Reports

**Location:** `/reports/` or `/reports/{category}/`

**Naming Convention:** `{##}-{domain}-{type}-report.md` or `YYYY-MM-DD.md` (for trigger-generated reports)

**Structure:** MUST follow `/guidelines/_templates/report-template.md`

#### Single Report (from single prompt)

```
/prompts/accessibility-audit.md
  → /reports/01-accessibility-audit-report.md
```

#### Sub-folder Reports (from orchestrator)

```
/prompts/redesign/01-visual-design-analysis.md
  → /reports/redesign/01-visual-design-report.md
```

#### Trigger-Generated Reports (organized by trigger)

**Pattern:** `/reports/{trigger}/YYYY-MM-DD.md`

```
/reports/
├── routes/
│   ├── 2026-03-15.md (latest)
│   ├── 2026-03-10.md
│   └── 2026-03-05.md
├── cleanup/
│   ├── 2026-03-14.md
│   └── 2026-03-12.md
├── tokens/
│   └── 2026-03-13.md
├── a11y/
│   └── 2026-03-12.md
├── css/
│   └── 2026-03-11.md
└── data/
    └── 2026-03-10.md
```

**Benefits:**
- Reports grouped by domain/trigger
- Easy to find latest report (most recent date)
- Historical reports retained
- No archive folder needed (folder IS the archive)

**Trigger Report Folders:**
- `/reports/routes/` - Route audit reports
- `/reports/cleanup/` - Cleanup reports
- `/reports/tokens/` - Design token audit reports
- `/reports/release/` - Release reports
- `/reports/changelog/` - Changelog update reports
- `/reports/status/` - Project status reports
- `/reports/data/` - Data audit reports
- `/reports/responsive/` - Responsive audit reports
- `/reports/a11y/` - Accessibility audit reports
- `/reports/css/` - CSS architecture audit reports

**Required Sections:**
- Executive Summary
- Current State Analysis
- Detailed Findings
- Gap Analysis
- Recommendations (High/Medium/Low)
- Implementation Roadmap
- Success Metrics

---

### Task Lists

**Location:** `/tasks/`

**Patterns:**

1. **Master Task List (Protected):**
   ```
   /tasks/task-list.md
   ```
   Never delete or replace. Only update.

2. **Feature Task Lists:**
   ```
   /tasks/{feature}-{scope}.md
   ```
   Examples:
   - `/tasks/redesign-implementation.md`
   - `/tasks/homepage-redesign.md`
   - `/tasks/navigation-system.md`

**Critical Rule:** Create task lists ONLY after related reports are complete.

**Why:** Task lists require full context from completed analysis to accurately define:
- All tasks and subtasks
- Dependencies between tasks
- Effort estimates
- Priority ratings

**Template:** `/guidelines/_templates/task-list-template.md`

---

### Guidelines

**Location:** `/guidelines/{category}/`

**Categories:**
- `accessibility/` - WCAG standards
- `architecture/` - System design
- `components/` - Component specs
- `design-tokens/` - Token definitions
- `development/` - Dev standards
- `patterns/` - Design patterns
- `wordpress/` - WP integration

**Naming:** Descriptive, lowercase, hyphens

**Examples:**
```
/guidelines/design-tokens/colors.md
/guidelines/components/Hero.md
/guidelines/accessibility/wcag-compliance.md
```

**Templates:**
- Component: `/guidelines/_templates/component-guideline-template.md`
- Design Token: `/guidelines/_templates/design-token-template.md`
- General: `/guidelines/_templates/guideline-template.md`

---

### Data Files

**Location:** `/data/`

**Purpose:** Centralized content storage

**Patterns:**

1. **Page-specific content:**
   ```
   /data/homepage.ts
   /data/about.ts
   /data/careers.ts
   ```

2. **Feature-specific data:**
   ```
   /data/products.ts
   /data/shop-faq.ts
   /data/tastings.ts
   ```

3. **Shared data:**
   ```
   /data/site-content.ts
   /data/navigation.ts
   ```

**Size Limit:** ~20 kB maximum per file

**Split Strategy:**
```
❌ WRONG: One massive file
/data/products.ts (200 kB)

✅ CORRECT: Split by category
/data/products-wine.ts (18 kB)
/data/products-spirits.ts (15 kB)
/data/products-cheese.ts (12 kB)
```

---

### Components

**Location:** `/components/{category}/`

**Categories:**
- `common/` - Atoms (Button, Typography, Logo)
- `layout/` - Headers, footers, containers
- `sections/` - Reusable page sections
- `shop/` - E-commerce components
- `ui/` - Third-party/Radix components

**Naming:** PascalCase, matches component name

**Examples:**
```
/components/common/Button.tsx
/components/layout/Header.tsx
/components/sections/Hero.tsx
/components/shop/ProductCard.tsx
```

**Size Limit:** ~300 lines

**Split Strategy:**
```
❌ WRONG: Monolithic component
/components/shop/ProductPage.tsx (800 lines)

✅ CORRECT: Composition
/components/shop/ProductPage.tsx (100 lines)
/components/shop/ProductGallery.tsx (80 lines)
/components/shop/ProductDetails.tsx (90 lines)
/components/shop/ProductReviews.tsx (120 lines)
```

---

### CSS Files

**Location:** `/styles/`

**Pattern:**
```
/styles/
├── globals.css              # Main entry (imports only)
├── themes.css               # Theme orchestration
├── themes-variables.css     # Core tokens (fonts, spacing)
├── themes-light.css         # Light mode colors
├── themes-dark.css          # Dark mode colors
└── utilities.css            # BEM component classes
```

**Size Limit:** ~500 lines per file

**Split Strategy:**
```
❌ WRONG: One utilities file
/styles/utilities.css (2000 lines)

✅ CORRECT: Modular utilities
/styles/utilities-typography.css (300 lines)
/styles/utilities-layout.css (250 lines)
/styles/utilities-components.css (400 lines)
```

---

## Workflow: Prompts → Reports → Tasks

### Correct Sequence

**Phase 1: Guideline Preparation**
1. Update all relevant guidelines FIRST
2. Ensure design tokens are current
3. Verify component specs are accurate

**Phase 2: Analysis (Prompts)**
1. Create/run prompt file(s)
2. Execute analysis

**Phase 3: Documentation (Reports)**
1. Generate report from prompt findings
2. Follow report template structure
3. Ensure all sections complete

**Phase 4: Planning (Tasks)**
1. ONLY after reports are complete
2. Review ALL related reports
3. Create comprehensive task list
4. Define dependencies and estimates

---

### Example: Redesign Workflow

**Step 1: Prepare Guidelines** (Before any prompts)
```
Update: /guidelines/design-tokens/colors.md
Update: /guidelines/design-tokens/typography.md
Update: /guidelines/components/Hero.md
```

**Step 2: Create Orchestrator**
```
Create: /prompts/redesign/00-ORCHESTRATOR.md
Create: /prompts/redesign/01-visual-design-analysis.md
Create: /prompts/redesign/02-content-strategy-analysis.md
```

**Step 3: Run Wave 1 Prompts**
```
Execute: /prompts/redesign/01-visual-design-analysis.md
Generate: /reports/redesign/01-visual-design-report.md

Execute: /prompts/redesign/02-content-strategy-analysis.md
Generate: /reports/redesign/02-content-strategy-report.md
```

**Step 4: Run Remaining Waves**
```
(Continue with prompts 03-10, generating reports for each)
```

**Step 5: Create Task List** (ONLY after all 10 reports complete)
```
Review: All 10 reports in /reports/redesign/
Create: /tasks/redesign-implementation.md
```

---

## Common Anti-Patterns

### ❌ WRONG: Creating task list before reports

```
Day 1: Create /prompts/redesign/01-visual-design-analysis.md
Day 1: Create /tasks/redesign-implementation.md  ❌ TOO EARLY!

Problem: Task list is incomplete, missing context from other analyses
```

### ✅ CORRECT: Sequential workflow

```
Day 1: Update guidelines
Day 2: Run prompts 01-04, create reports
Day 3: Run prompts 05-10, create reports
Day 4: Review all reports
Day 5: Create comprehensive task list
```

---

### ❌ WRONG: Prompts in root

```
/01-visual-audit.md  ❌ Wrong location!

Should be: /prompts/01-visual-audit.md
```

### ✅ CORRECT: Organized structure

```
/prompts/redesign/01-visual-design-analysis.md
/reports/redesign/01-visual-design-report.md
```

---

### ❌ WRONG: Monolithic data files

```
/data/content.ts (500 kB)  ❌ Too large!
```

### ✅ CORRECT: Split by feature/page

```
/data/homepage.ts (15 kB)
/data/products-wine.ts (18 kB)
/data/shop-faq.ts (12 kB)
```

---

## File Naming Conventions

### Guidelines

**Format:** `{topic}.md`

**Rules:**
- All lowercase
- Hyphens for word separation
- Descriptive, not generic

**Examples:**
```
✅ /guidelines/design-tokens/dark-light-mode.md
✅ /guidelines/components/ProductCard.md
❌ /guidelines/stuff.md
❌ /guidelines/Design Tokens.md
```

---

### Prompts

**Single Prompt Format:** `{action}-{scope}.md`

**Examples:**
```
✅ /prompts/cleanup.md
✅ /prompts/audit-guidelines.md
✅ /prompts/migrate-content.md
```

**Orchestrator Format:** `{category}/##-{name}.md`

**Examples:**
```
✅ /prompts/redesign/00-ORCHESTRATOR.md
✅ /prompts/redesign/01-visual-design-analysis.md
✅ /prompts/redesign/10-implementation-priority-analysis.md
```

---

### Reports

**Format:** `{##}-{domain}-{type}-report.md` or `YYYY-MM-DD.md` (for trigger-generated reports)

**Examples:**
```
✅ /reports/01-visual-design-report.md
✅ /reports/redesign/05-motion-interaction-report.md
❌ /reports/report1.md
❌ /reports/My Report.md
```

---

### Task Lists

**Format:** `{feature}-{scope}.md`

**Examples:**
```
✅ /tasks/task-list.md (master)
✅ /tasks/redesign-implementation.md
✅ /tasks/homepage-refresh.md
❌ /tasks/todo.md
```

---

### Components

**Format:** `{ComponentName}.tsx`

**Rules:**
- PascalCase
- Matches component name
- One component per file (exceptions for small, tightly coupled helpers)

**Examples:**
```
✅ /components/common/Button.tsx
✅ /components/sections/Hero.tsx
❌ /components/button.tsx
❌ /components/Components.tsx
```

---

### Data Files

**Format:** `{feature}-{type}.ts`

**Examples:**
```
✅ /data/homepage.ts
✅ /data/products-wine.ts
✅ /data/site-content.ts
❌ /data/data.ts
❌ /data/HomePage.ts
```

---

## Validation Checklist

### Before Creating a Prompt

- [ ] Related guidelines are up-to-date
- [ ] File will be in correct location (`/prompts/` or `/prompts/{category}/`)
- [ ] Prompt follows template structure
- [ ] File size under 200 lines
- [ ] Clear output expectations defined

### Before Creating a Report

- [ ] Related prompt has completed execution
- [ ] Report follows template structure (`/guidelines/_templates/report-template.md`)
- [ ] All required sections included
- [ ] File size under 800 lines
- [ ] Executive summary is clear and actionable

### Before Creating a Task List

- [ ] ALL related reports are complete
- [ ] Reports have been reviewed for consistency
- [ ] Dependencies are understood
- [ ] Task list follows template structure
- [ ] File size under 400 lines
- [ ] Effort estimates included

### Before Creating a Component

- [ ] Component belongs in correct category folder
- [ ] Component name follows PascalCase
- [ ] File size under 300 lines (split if larger)
- [ ] JSDoc header included
- [ ] Uses CSS variables, not hardcoded values

### Before Creating a Data File

- [ ] Content belongs in `/data/`
- [ ] File size under 20 kB (split if larger)
- [ ] Follows TypeScript export pattern
- [ ] Schema is well-defined
- [ ] Related to specific feature/page

---

## Related Guidelines

- [JSDoc Standards](/guidelines/development/jsdoc-standards.md) - Documentation
- [WordPress CSS Variables](/guidelines/development/wordpress-css-variables.md) - Styling
- [Component Structure](/guidelines/architecture/component-structure.md) - Organization
- [Prompt System](/prompts/PROMPT-SYSTEM-GUIDELINES.md) - Automation

---

## Templates Reference

### Prompt Templates

- **Single Prompt:** `/guidelines/_templates/prompt-template.md`
- **Orchestrator:** Use existing orchestrators as reference

### Report Template

- **Location:** `/guidelines/_templates/report-template.md`
- **Required sections:**
  - Executive Summary
  - Current State Analysis
  - Detailed Findings
  - Recommendations
  - Implementation Roadmap

### Task List Template

- **Location:** `/guidelines/_templates/task-list-template.md`
- **Required sections:**
  - Status Overview
  - Task Breakdown by Phase
  - Dependencies
  - Progress Tracking

---

## Changelog

### Version 2.0 (2024-03-15)
- Added root-level file restrictions
- Defined all file location patterns
- Established size limits
- Documented prompt/report/task workflow
- Added naming conventions
- Created validation checklists

---

**Maintained by:** The Wire Brand Development Team  
**Next Review:** Monthly or when project structure changes  
**Questions?** Reference this document before creating any new files