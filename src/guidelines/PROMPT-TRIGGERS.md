# Prompt Trigger Registry

**Category:** Guidelines  
**Domain:** Automation & Workflow  
**Version:** 6.0.0  
**Last Updated:** 2026-03-18  
**Status:** Active  
**Purpose:** Central registry of all trigger words that activate automated prompts  
**Project:** Handcrafted Wines

---

## Overview

The Handcrafted Wines project uses a **trigger word system** to activate specialized prompts. Type a trigger word to execute the corresponding prompt workflow.

**How it works:**
1. User types trigger word (e.g., `cleanup`)
2. AI loads corresponding prompt file (e.g., `/prompts/cleanup.md`)
3. AI executes workflow defined in prompt
4. AI generates outputs (reports, task lists, updates)

**All triggers are single words or short phrases** (2-3 words max).

---

## Trigger Registry (51 Total)

### 🎯 Master Orchestration Triggers (2)

| Trigger | Prompt File | Purpose | Outputs |
|---------|-------------|---------|---------|
| `audit` | `/prompts/audit.md` | **MASTER AUDIT** - Run all 9 audit triggers in sequence | All audit reports (9 files) |
| `audit && process reports` | `/prompts/audit-and-process-reports.md` | Run all audits, then convert to task lists | All reports + all task lists |

**New in v3.0:** Master audit orchestrator runs all 9 individual audits in sequence, providing comprehensive project health overview.

**Usage Example:**
```
User: audit
AI: Runs all 9 audits (routes, sitemap, tokens, css, a11y, data, responsive, styles, guidelines)
Result: 9 comprehensive reports showing 98/100 health score
```

---

### Workflow Triggers (7)

| Trigger | Prompt File | Purpose | Outputs |
|---------|-------------|---------|------------|
| `cleanup` | `/prompts/cleanup.md` | System audit and cleanup | Report, deletion list |
| `continue` | `/prompts/continue.md` | Execute next task from master list | Task execution |
| `cleanup and continue` | `/prompts/cleanup-and-continue.md` | Run cleanup, then continue | Combined workflow |
| `status` | `/prompts/status.md` | Generate project status report | Status report |
| `changelog` | `/prompts/changelog.md` | Update CHANGELOG.md from git commits | CHANGELOG.md update |
| `sitemap` | `/prompts/sitemap.md` | Regenerate sitemap page and guideline | Sitemap updates |
| `process reports` | `/prompts/process-reports.md` | Convert analysis reports to task lists | Task lists |

---

### Audit Triggers (24)

| Trigger | Prompt File | Purpose | Outputs |
|---------|-------------|---------|---------|
| `audit routes` | `/prompts/audit-routes.md` | Audit routes, navigation, and internal links | Route audit report |
| `audit sitemap` | `/prompts/audit-sitemap.md` | Audit sitemap completeness and accuracy | Sitemap audit report |
| `audit tokens` | `/prompts/audit-tokens.md` | Audit design token implementation | Token audit report |
| `audit css` | `/prompts/audit-css.md` | Audit CSS architecture and variables | CSS audit report |
| `audit a11y` | `/prompts/audit-a11y.md` | WCAG 2.1 AA quick accessibility audit | A11y audit report |
| `audit accessibility` | `/prompts/audit-accessibility.md` | Comprehensive WCAG 2.1 AA audit (deep-dive) | Full accessibility report |
| `audit data` | `/prompts/audit-data.md` | Audit data file sizes and structure | Data audit report |
| `audit responsive` | `/prompts/audit-responsive.md` | **NEW** - Audit responsive design patterns | Responsive audit report |
| `audit styles` | `/prompts/audit-styles.md` | Audit for hardcoded styles vs. tokens | Styles audit report |
| `audit guidelines` | `/prompts/audit-guidelines.md` | Verify guideline YAML frontmatter | Guidelines audit report |
| `audit light mode` | `/prompts/audit-light-mode.md` | Identify missing light mode implementation | Light mode audit report |
| `audit images` | `/prompts/audit-images.md` | Broken images, alt text, accessibility | Images audit report |
| `audit layout` | `/prompts/audit-layout.md` | Visual integrity, containers, responsive | Layout audit report |
| `audit functionality` | `/prompts/audit-functionality.md` | UI state, interactions, dead UI | Functionality audit report |
| `audit theme` | `/prompts/audit-theme.md` | Light/dark mode compliance, tokens | Theme audit report |
| `audit style` | `/prompts/audit-style.md` | **NEW** - Hand-drawn design language compliance | Hand-drawn style audit report |
| `audit routing` | `/prompts/audit-routing.md` | **NEW** - Route integrity, navigation compliance | Routing audit report |
| `audit webgl` | `/prompts/audit-webgl.md` | **NEW** - Canvas/WebGL usage inventory | WebGL audit report |
| `audit performance` | `/prompts/audit-performance.md` | **NEW** - Render performance, asset optimization | Performance audit report |
| `audit phosphor` | `/prompts/audit-phosphor.md` | **NEW** - Icon library migration & compliance (Lucide → Phosphor) | Phosphor migration audit report |
| `audit header` | `/prompts/audit-header.md` | **NEW** - Header template part & pattern compliance | Header audit report |
| `audit footer` | `/prompts/audit-footer.md` | **NEW** - Footer template part & pattern compliance | Footer audit report |
| `audit hero` | `/prompts/audit-hero.md` | **NEW** - Hero template part & pattern compliance | Hero audit report |
| `apply bem` | `/prompts/apply-bem.md` | BEM class compliance audit + auto-fix | BEM report + fixes |

**New in v6.0 (2026-03-18):**
- Expanded to 24 audit triggers (from 20)
- Added: `audit phosphor` (icon library migration), `audit header`, `audit footer`, `audit hero` (template part audits)
- All new prompts support Phosphor icon migration and template part architecture
- Updated `continue` and `cleanup` prompts with Phosphor context

---

### Scaffold Triggers (3)

| Trigger | Prompt File | Purpose | Outputs |
|---------|-------------|---------|---------|
| `new template` | `/prompts/new-template.md` | Create new documentation template | Template file |
| `new pattern` | `/prompts/new-pattern.md` | Create new design pattern guideline | Pattern guideline |
| `new block` | `/prompts/new-block.md` | Create new atomic block component | Component files |

---

### Guidelines Triggers (2)

| Trigger | Prompt File | Purpose | Outputs |
|---------|-------------|---------|---------|
| `update guidelines` | `/prompts/update-guidelines.md` | Update guideline content, frontmatter, compliance | Updated guidelines |
| `cleanup guidelines` | `/prompts/cleanup-guidelines.md` | Audit duplicates, deprecate outdated, restructure | Guidelines reorganization |

---

### Release Triggers (1)

| Trigger | Prompt File | Purpose | Outputs |
|---------|-------------|---------|---------|
| `release` | `/prompts/release.md` | Automate version bump and changelog release | CHANGELOG.md, version tags |

---

### Code Quality Triggers (2)

| Trigger | Prompt File | Purpose | Outputs |
|---------|-------------|---------|---------|
| `apply bem` | `/prompts/apply-bem.md` | BEM compliance audit + auto-fix workflow | Violation report, fixed components, CSS updates |

**Behavior:**
- **Phase 1:** Inventory existing BEM classes and CSS variables
- **Phase 2:** Scan all `.tsx` files for violations (inline styles, missing BEM, orphan classes)
- **Phase 3:** Analyze violations by severity (Critical/High/Medium/Low)
- **Phase 4:** Map inline values to CSS variables
- **Phase 5:** Apply fixes automatically (remove inline styles, add BEM classes)
- **Phase 6:** Validate WCAG 2.2 AA/AAA contrast ratios (light + dark mode)
- **Recommends:** `audit tokens` or `audit css` when design system needs expansion

**Violation Types:**
- 🔴 **Missing BEM blocks** - Core components without `.twb-*` classes
- 🔴 **Inline styles** - `style={{}}` with hardcoded values
- 🟡 **Orphan BEM classes** - Classes used in TSX but undefined in CSS
- 🟡 **Inconsistent naming** - Wrong casing, separators, or namespace
- 🟢 **Tailwind overuse** - Complex Tailwind chains where BEM exists
- 🔴 **Hardcoded colors** - Hex/RGB values instead of CSS variables

**WCAG Compliance:**
- Validates all color combinations (text + background)
- Checks contrast ratios: 4.5:1 (AA), 7:1 (AAA) for normal text
- Tests both light and dark modes
- Reports all WCAG failures with recommended fixes

**Retro Design Compliance:**
- All BEM classes follow organic, hand-drawn aesthetic
- Uses warm, earthy color palette (Paper, Ink, Vine, Clay, Plum, Gold)
- Serif + Sans font pairings only
- Fluid typography with `clamp()`
- Natural spacing (multiples of 0.25rem)

**When to use:** After component updates, before production, monthly maintenance

---

## Trigger Workflow Patterns

### Standard Audit Pattern

All `audit *` triggers follow this workflow:

```
1. Load relevant guidelines
2. Scan codebase/files for violations
3. Generate findings report with:
   - Current state analysis
   - Violation list with file locations
   - Severity ratings (Critical/High/Medium/Low)
   - Recommendations
4. Output: /reports/{audit-name}-report.md
```

**Example:**
```
User: audit tokens

AI:
1. Loads /guidelines/design-tokens/*.md
2. Scans all .tsx, .css files
3. Identifies hardcoded values
4. Generates /reports/token-audit-report.md
```

---

### Standard Scaffold Pattern

All `new *` triggers follow this workflow:

```
1. Ask user for component/pattern name
2. Load appropriate template
3. Generate file(s) with proper structure
4. Update related files (routes, indexes)
5. Output: New files + documentation
```

**Example:**
```
User: new block

AI:
1. Asks: "What block component? (e.g., PriceTag, Badge)"
2. Loads /guidelines/_templates/component-guideline-template.md
3. Creates /components/common/PriceTag.tsx
4. Creates /guidelines/components/PriceTag.md
5. Updates component index
```

---

### Workflow Chaining

Some triggers can be chained:

**Sequential Execution:**
```
cleanup and continue
```
Executes `cleanup`, then `continue`.

**Manual Chaining:**
```
User: audit guidelines
AI: Generates report

User: cleanup guidelines
AI: Uses report to clean up
```

---

## Trigger Details

### cleanup

**Purpose:** System-wide audit and cleanup

**Workflow:**
1. Identify duplicate files
2. Find deprecated/unused files
3. Check for guideline violations
4. List files for deletion
5. Generate cleanup report

**Outputs:**
- `/reports/cleanup-report.md`
- Deletion recommendations

**When to use:** Before major updates, monthly maintenance

---

### continue

**Purpose:** Execute next task from master task list

**Workflow:**
1. Read `/tasks/task-list.md`
2. Find first unchecked task
3. Execute task steps
4. Update task status
5. Report completion

**Outputs:**
- Task execution
- Updated `/tasks/task-list.md`

**When to use:** Daily development workflow

---

### cleanup and continue

**Purpose:** Run cleanup, then continue with next task

**Workflow:**
1. Execute `cleanup` workflow
2. Review cleanup report
3. Execute `continue` workflow

**Outputs:**
- Cleanup report + task execution

**When to use:** Start of work session

---

### status

**Purpose:** Generate comprehensive project status report

**Workflow:**
1. Analyze task completion rates
2. Check recent file changes
3. Identify blockers
4. Calculate progress metrics
5. Generate status report

**Outputs:**
- `/reports/project-status-report.md`

**When to use:** Weekly reviews, stakeholder updates

---

### changelog

**Purpose:** Update CHANGELOG.md from git commits

**Workflow:**
1. Read git log since last version
2. Parse commit messages (conventional commits)
3. Group by type (Added, Changed, Fixed, etc.)
4. Update `[Unreleased]` section
5. Prompt for version bump decision

**Outputs:**
- Updated `/CHANGELOG.md`

**When to use:** Before releases, sprint retrospectives

---

### sitemap

**Purpose:** Regenerate sitemap page and guideline

**Workflow:**
1. Scan `/routes.tsx` for all routes
2. Scan `/guidelines/architecture/sitemap.md`
3. Generate sitemap component
4. Update sitemap guideline
5. Verify all routes are documented

**Outputs:**
- Updated `/pages/Sitemap.tsx`
- Updated `/guidelines/architecture/sitemap.md`

**When to use:** After adding new routes

---

### process reports

**Purpose:** Convert analysis reports to task lists

**Workflow:**
1. Read all reports in `/reports/`
2. Extract recommendations
3. Create task list with priorities
4. Define dependencies
5. Add to `/tasks/` folder

**Outputs:**
- `/tasks/{feature}-task-list.md`

**When to use:** After completing analysis prompts

---

### audit

**Purpose:** **MASTER AUDIT** - Run all audit triggers

**Workflow:**
1. Execute `audit routes`
2. Execute `audit sitemap`
3. Execute `audit tokens`
4. Execute `audit css`
5. Execute `audit a11y`
6. Execute `audit data`
7. Execute `audit responsive`
8. Execute `audit styles`
9. Execute `audit guidelines`

**Outputs:**
- All audit reports (9 files)

**When to use:** Before major releases, quarterly audits

---

### audit && process reports

**Purpose:** Run all audits, then convert to task lists

**Workflow:**
1. Execute `audit` workflow
2. Review all audit reports
3. Execute `process reports` workflow

**Outputs:**
- All reports + all task lists

**When to use:** Start of work session

---

### audit routes

**Purpose:** Audit routes, navigation, and internal links

**Workflow:**
1. Load `/guidelines/architecture/routes.md`
2. Scan all `.tsx` files for:
   - Route definitions
   - Navigation links
   - Internal links
3. Check for broken links
4. Generate violation report

**Outputs:**
- `/reports/route-audit-report.md`

**When to use:** After major route changes

---

### audit sitemap

**Purpose:** Audit sitemap completeness and accuracy

**Workflow:**
1. Load `/guidelines/architecture/sitemap.md`
2. Scan all `.tsx` files for:
   - Route definitions
   - Navigation links
   - Internal links
3. Check for broken links
4. Generate violation report

**Outputs:**
- `/reports/sitemap-audit-report.md`

**When to use:** After major route changes

---

### audit tokens

**Purpose:** Audit design token implementation

**Workflow:**
1. Load `/guidelines/design-tokens/*.md`
2. Scan `.tsx`, `.css` files for:
   - Hardcoded colors (#hex)
   - Hardcoded spacing (px values)
   - Hardcoded font sizes
3. Calculate token coverage %
4. Generate violation report

**Outputs:**
- `/reports/token-audit-report.md`

**When to use:** After major component updates

---

### audit css

**Purpose:** Audit CSS architecture and variables

**Workflow:**
1. Load `/guidelines/development/wordpress-css-variables.md`
2. Scan all `.css` files for:
   - Hardcoded values
   - Missing `--twb-` or `--wp-preset-` prefixes
   - Duplicate declarations
3. Check dark mode coverage
4. Generate compliance report

**Outputs:**
- `/reports/css-audit-report.md`

**When to use:** Before theme.json export

---

### audit a11y

**Purpose:** WCAG 2.1 AA quick accessibility audit

**Workflow:**
1. Load `/guidelines/accessibility/wcag-compliance.md`
2. Check:
   - Color contrast ratios
   - Keyboard navigation
   - Screen reader labels
   - Focus indicators
   - Touch target sizes
3. Generate violation report with severity

**Outputs:**
- `/reports/a11y-audit-report.md`

**When to use:** Before production releases

---

### audit accessibility

**Purpose:** Comprehensive WCAG 2.1 AA audit (deep-dive)

**Workflow:**
1. Load `/guidelines/accessibility/wcag-compliance.md`
2. Check:
   - Color contrast ratios
   - Keyboard navigation
   - Screen reader labels
   - Focus indicators
   - Touch target sizes
   - ARIA roles and properties
   - Form labels and instructions
   - Image alt text
   - Link text
   - Table headers
   - Video captions
   - Audio descriptions
3. Generate comprehensive report

**Outputs:**
- `/reports/accessibility-audit-report.md`

**When to use:** Before production releases

---

### audit data

**Purpose:** Audit data file sizes and structure

**Workflow:**
1. Load `/guidelines/development/file-organization.md`
2. Scan `/data/*.ts` files for:
   - File size violations (>20 kB)
   - Large embedded strings
   - Duplicate data
3. Recommend splitting strategy
4. Generate report

**Outputs:**
- `/reports/data-audit-report.md`

**When to use:** When data files grow large

---

### audit responsive

**Purpose:** Audit responsive design patterns

**Workflow:**
1. Load `/guidelines/design-tokens/responsive.md`
2. Scan components for:
   - Mobile-first patterns
   - Breakpoint usage
   - Fluid typography
   - Touch targets
3. Check viewport compliance
4. Generate report

**Outputs:**
- `/reports/responsive-audit-report.md`

**When to use:** Before mobile testing

---

### audit styles

**Purpose:** Audit for hardcoded styles vs. tokens

**Workflow:**
1. Load all design token guidelines
2. Scan `.tsx` files for:
   - Inline `style={{}}` with hardcoded values
   - className with hardcoded Tailwind colors
   - Direct hex colors in JSX
3. Generate replacement recommendations
4. Calculate token usage %

**Outputs:**
- `/reports/styles-audit-report.md`

**When to use:** During design system migration

---

### audit guidelines

**Purpose:** Verify guideline YAML frontmatter

**Workflow:**
1. Load `/guidelines/repository-standards.md`
2. Scan all `/guidelines/**/*.md` files for:
   - Missing YAML front matter
   - Incorrect heading hierarchy (H1 → H4 skip)
   - Outdated version numbers
   - Broken internal links
3. Check template compliance
4. Generate report

**Outputs:**
- `/reports/guidelines-audit-report.md`

**When to use:** After creating new guidelines

---

### audit light mode

**Purpose:** Identify missing light mode implementation

**Workflow:**
1. Load `/guidelines/accessibility/light-mode.md`
2. Scan all `.tsx` files for:
   - Missing light mode styles
   - Inconsistent color usage
   - Missing light mode classes
3. Generate report

**Outputs:**
- `/reports/light-mode-audit-report.md`

**When to use:** Before production releases

---

### audit images

**Purpose:** Broken images, alt text, accessibility

**Workflow:**
1. Load `/guidelines/accessibility/image-accessibility.md`
2. Scan all `.tsx` files for:
   - Missing alt text
   - Broken image links
   - Inconsistent image sizes
3. Generate report

**Outputs:**
- `/reports/images-audit-report.md`

**When to use:** Before production releases

---

### audit layout

**Purpose:** Visual integrity, containers, responsive

**Workflow:**
1. Load `/guidelines/design/layout.md`
2. Scan all `.tsx` files for:
   - Visual integrity issues
   - Container misuse
   - Responsive design flaws
3. Generate report

**Outputs:**
- `/reports/layout-audit-report.md`

**When to use:** Before production releases

---

### audit functionality

**Purpose:** UI state, interactions, dead UI

**Workflow:**
1. Load `/guidelines/design/interactions.md`
2. Scan all `.tsx` files for:
   - UI state issues
   - Interaction bugs
   - Dead UI elements
3. Generate report

**Outputs:**
- `/reports/functionality-audit-report.md`

**When to use:** Before production releases

---

### audit theme

**Purpose:** Light/dark mode compliance, tokens

**Workflow:**
1. Load `/guidelines/design/theme.md`
2. Scan all `.tsx` files for:
   - Light/dark mode compliance
   - Token usage
3. Generate report

**Outputs:**
- `/reports/theme-audit-report.md`

**When to use:** Before production releases

---

### audit style

**Purpose:** Hand-drawn design language compliance

**Workflow:**
1. Load `/guidelines/design/style.md`
2. Scan all `.tsx` files for:
   - Hand-drawn design language compliance
   - Retro design elements
3. Generate report

**Outputs:**
- `/reports/style-audit-report.md`

**When to use:** Before production releases

---

### audit routing

**Purpose:** Route integrity, navigation compliance

**Workflow:**
1. Load `/guidelines/architecture/routing.md`
2. Scan all `.tsx` files for:
   - Route integrity
   - Navigation compliance
3. Generate report

**Outputs:**
- `/reports/routing-audit-report.md`

**When to use:** Before production releases

---

### audit webgl

**Purpose:** Canvas/WebGL usage inventory

**Workflow:**
1. Load `/guidelines/development/webgl.md`
2. Scan all `.tsx` files for:
   - Canvas/WebGL usage
3. Generate report

**Outputs:**
- `/reports/webgl-audit-report.md`

**When to use:** Before production releases

---

### audit performance

**Purpose:** Render performance, asset optimization

**Workflow:**
1. Load `/guidelines/development/performance.md`
2. Scan all `.tsx` files for:
   - Render performance
   - Asset optimization
3. Generate report

**Outputs:**
- `/reports/performance-audit-report.md`

**When to use:** Before production releases

---

### audit phosphor

**Purpose:** Icon library migration & compliance (Lucide → Phosphor)

**Workflow:**
1. Load `/guidelines/development/icon-library.md`
2. Scan all `.tsx` files for:
   - Lucide icon usage
3. Generate migration report

**Outputs:**
- `/reports/phosphor-migration-audit-report.md`

**When to use:** Before production releases

---

### audit header

**Purpose:** Header template part & pattern compliance

**Workflow:**
1. Load `/guidelines/design/template-parts.md`
2. Scan all `.tsx` files for:
   - Header template part usage
3. Generate compliance report

**Outputs:**
- `/reports/header-audit-report.md`

**When to use:** Before production releases

---

### audit footer

**Purpose:** Footer template part & pattern compliance

**Workflow:**
1. Load `/guidelines/design/template-parts.md`
2. Scan all `.tsx` files for:
   - Footer template part usage
3. Generate compliance report

**Outputs:**
- `/reports/footer-audit-report.md`

**When to use:** Before production releases

---

### audit hero

**Purpose:** Hero template part & pattern compliance

**Workflow:**
1. Load `/guidelines/design/template-parts.md`
2. Scan all `.tsx` files for:
   - Hero template part usage
3. Generate compliance report

**Outputs:**
- `/reports/hero-audit-report.md`

**When to use:** Before production releases

---

### apply bem

**Purpose:** BEM class compliance audit + auto-fix

**Workflow:**
1. **Phase 1:** Inventory existing BEM classes and CSS variables
2. **Phase 2:** Scan all `.tsx` files for violations (inline styles, missing BEM, orphan classes)
3. **Phase 3:** Analyze violations by severity (Critical/High/Medium/Low)
4. **Phase 4:** Map inline values to CSS variables
5. **Phase 5:** Apply fixes automatically (remove inline styles, add BEM classes)
6. **Phase 6:** Validate WCAG 2.2 AA/AAA contrast ratios (light + dark mode)

**Outputs:**
- Violation report
- Fixed components
- CSS updates

**When to use:** After component updates, before production, monthly maintenance

---

## Adding New Triggers

### Step 1: Create Prompt File

**File:** `/prompts/{trigger-name}.md`

**Template:**
```markdown
# {Trigger Name} Prompt

**Trigger:** `{trigger word}`  
**Version:** 1.0.0  
**Last Updated:** YYYY-MM-DD  
**Purpose:** [One sentence description]

---

## Mission

[Clear mission statement]

---

## Workflow

1. [Step 1]
2. [Step 2]
3. [Step 3]

---

## Success Criteria

- [ ] Criterion 1
- [ ] Criterion 2

---

## Outputs

- [Output 1 with file path]
- [Output 2 with file path]
```

---

### Step 2: Register Trigger

Add to this file (`/guidelines/PROMPT-TRIGGERS.md`) in appropriate category table.

---

### Step 3: Update Guidelines.md

Add trigger to quick reference table in `/guidelines/Guidelines.md`.

---

### Step 4: Test Trigger

Execute trigger and verify:
- [ ] Prompt loads correctly
- [ ] Workflow executes as expected
- [ ] Outputs are generated
- [ ] Success criteria met

---

## Trigger Best Practices

### Do's ✅

- **Use short, memorable trigger words** (1-3 words)
- **Follow naming patterns** (audit *, new *, cleanup *)
- **Include YAML front matter** in all prompt files
- **Define clear success criteria**
- **Document all outputs**

### Don'ts ❌

- **Don't use long phrases** (>3 words)
- **Don't create overlapping triggers** (e.g., "audit css" and "css audit")
- **Don't skip YAML front matter**
- **Don't create triggers without prompt files**

---

## Trigger Maintenance

### Monthly Review

1. Verify all triggers work
2. Check for unused triggers
3. Update outdated workflows
4. Add new triggers as needed

### Deprecation Process

If a trigger is no longer needed:

1. Mark prompt file with `**Status:** Deprecated`
2. Add deprecation notice to this registry
3. Wait 1 month before deletion
4. Remove from registry and delete prompt file

**Deprecated Triggers:**
- None currently

---

## Related Documentation

- [Prompt System Guidelines](/prompts/PROMPT-SYSTEM-GUIDELINES.md)
- [File Organization](/guidelines/development/file-organization.md)
- [Repository Standards](/guidelines/repository-standards.md)
- [Task Management](/guidelines/housekeeping.md)

---

## Changelog

### Version 6.0.0 (2026-03-18)
- **MAJOR EXPANSION:** 51 total triggers (24 audit + 7 workflow + 3 scaffold + 2 guidelines + 1 release)
- **New Icon Migration:** `audit phosphor` - Comprehensive Lucide → Phosphor migration audit with 5-phase incremental plan
- **New Template Part Audits:** `audit header`, `audit footer`, `audit hero` - Template part & pattern compliance
- **Updated Core Workflows:** `continue` and `cleanup` prompts updated with Phosphor icon context and Handcrafted Wines brand
- **Architecture Support:** All new audits support template part architecture (Header, Footer, Hero)
- **Migration Strategy:** Safe incremental migration from Lucide to Phosphor (both libraries side-by-side during transition)

### Version 5.0.0 (2026-03-18)
- Expanded to 47 total triggers (20 audit/quality + 7 workflow + 3 scaffold + 2 guidelines + 1 release + 2 orchestration)
- Added 10 new audit triggers: `audit performance`, `audit responsive`, `audit style`, `audit routing`, `audit styles`, `audit webgl`, `audit tokens` (rewritten), `audit a11y` (rewritten)
- Added 2 new workflow triggers: `changelog`, `cleanup guidelines`
- All prompts fully adapted to Handcrafted Wines project context
- Master audit orchestrator updated to run all 20 triggers
- Updated trigger documentation with Handcrafted Wines-specific examples

### Version 4.0.0 (2026-03-18)
- Expanded to 37 total triggers
- Added 10 new comprehensive audit triggers
- Added `apply bem` auto-fix trigger
- Audit triggers now cover: CSS, accessibility (quick + comprehensive), data, images, layout, functionality, theme
- All new prompts adapted to Handcrafted Wines project context

### Version 3.0.0 (2026-03-15)
- Expanded to 26 total triggers
- Added 9 audit triggers
- Added 2 master orchestration triggers
- Created comprehensive registry
- Added workflow patterns for each trigger

### Version 2.0.0 (2024-03-15)
- Expanded to 18 total triggers
- Added 7 audit triggers
- Added 3 scaffold triggers
- Added 2 guidelines triggers
- Added 1 release trigger
- Created comprehensive registry
- Added workflow patterns for each trigger

### Version 1.0.0 (2024-03-13)
- Initial trigger registry
- Basic workflow triggers (cleanup, continue, process reports)

---

**Questions about triggers?**  
Reference this file or `/prompts/PROMPT-SYSTEM-GUIDELINES.md`