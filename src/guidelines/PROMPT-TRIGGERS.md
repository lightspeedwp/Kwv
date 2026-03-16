# Prompt Trigger Registry

**Category:** Guidelines  
**Domain:** Automation & Workflow  
**Version:** 3.0.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Purpose:** Central registry of all trigger words that activate automated prompts

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

## Trigger Registry (26 Total)

### 🎯 Master Orchestration Triggers (2)

| Trigger | Prompt File | Purpose | Outputs |
|---------|-------------|---------|---------|
| `audit` | `/prompts/audit.md` | **MASTER AUDIT** - Run all audit triggers | All audit reports (9 files) |
| `audit && process reports` | `/prompts/audit-and-process-reports.md` | Run all audits, then convert to task lists | All reports + all task lists |

**New in v3.0:** Master audit orchestrator runs all 9 individual audits in sequence.

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

### Audit Triggers (9)

| Trigger | Prompt File | Purpose | Outputs |
|---------|-------------|---------|------------|
| `audit routes` | `/prompts/audit-routes.md` | Audit routes, navigation, and internal links | Route audit report |
| `audit sitemap` | `/prompts/audit-sitemap.md` | Audit sitemap completeness and accuracy | Sitemap audit report |
| `audit tokens` | `/prompts/audit-tokens.md` | Audit design token implementation | Token audit report |
| `audit css` | `/prompts/audit-css.md` | Audit CSS architecture and variables | CSS audit report |
| `audit a11y` | `/prompts/audit-a11y.md` | WCAG 2.1 AA accessibility audit | A11y audit report |
| `audit data` | `/prompts/audit-data.md` | Audit data file sizes and structure | Data audit report |
| `audit responsive` | `/prompts/audit-responsive.md` | Audit responsive design patterns | Responsive audit report |
| `audit styles` | `/prompts/audit-styles.md` | Audit for hardcoded styles vs. tokens | Styles audit report |
| `audit guidelines` | `/prompts/audit-guidelines.md` | Verify guideline YAML frontmatter | Guidelines audit report |

**Aliases:**
- `routes` → `audit routes` (backward compatible)
- `sitemap` → `audit sitemap` (backward compatible)

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

**Purpose:** WCAG 2.1 AA accessibility audit

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

### new template

**Purpose:** Create new documentation template

**Workflow:**
1. Ask user for template purpose
2. Determine template type (component, guideline, etc.)
3. Generate template structure
4. Add YAML front matter
5. Save to `/guidelines/_templates/`

**Outputs:**
- `/guidelines/_templates/{name}-template.md`

**When to use:** When creating new documentation patterns

---

### new pattern

**Purpose:** Create new design pattern guideline

**Workflow:**
1. Ask user for pattern name
2. Load `/guidelines/_templates/guideline-template.md`
3. Generate pattern guideline
4. Add examples and anti-patterns
5. Save to `/guidelines/patterns/`

**Outputs:**
- `/guidelines/patterns/{pattern-name}.md`

**When to use:** When establishing new design patterns

---

### new block

**Purpose:** Create new atomic block component

**Workflow:**
1. Ask user for block component name (e.g., "PriceTag")
2. Load `/guidelines/_templates/component-guideline-template.md`
3. Generate component files:
   - Component: `/components/common/{ComponentName}.tsx`
   - Guideline: `/guidelines/components/{ComponentName}.md`
   - Tests (if applicable)
4. Add JSDoc header
5. Use CSS variables (no hardcoded values)
6. Update component index

**Outputs:**
- `/components/common/{ComponentName}.tsx`
- `/guidelines/components/{ComponentName}.md`

**When to use:** When creating new atomic UI elements

---

### update guidelines

**Purpose:** Update guideline content, frontmatter, and compliance

**Workflow:**
1. Scan all guideline files
2. Update YAML frontmatter:
   - Increment version if content changed
   - Update `last_updated` to current date
   - Verify all required fields present
3. Check template compliance
4. Fix heading hierarchy
5. Update internal links
6. Generate update report

**Outputs:**
- Updated guideline files
- `/reports/guidelines-update-report.md`

**When to use:** After guideline content changes

---

### cleanup guidelines

**Purpose:** Audit duplicates, deprecate outdated, restructure

**Workflow:**
1. Scan `/guidelines/` for:
   - Duplicate content
   - Deprecated files
   - Oversized files (>500 lines)
   - Inconsistent naming
2. Recommend:
   - Files to merge
   - Files to deprecate
   - Files to split
   - Restructuring strategy
3. Use templates to rewrite non-standard files
4. Generate cleanup report

**Outputs:**
- Updated/restructured guidelines
- `/reports/guidelines-cleanup-report.md`

**When to use:** Quarterly maintenance, before major updates

---

### release

**Purpose:** Automate version bump and changelog release

**Workflow:**
1. Read `/CHANGELOG.md` `[Unreleased]` section
2. Prompt user for version bump:
   - MAJOR (breaking changes)
   - MINOR (new features)
   - PATCH (bug fixes)
3. Calculate new version number
4. Move `[Unreleased]` content to versioned section
5. Add ISO 8601 date (YYYY-MM-DD)
6. Update version comparison links
7. Clear `[Unreleased]` section
8. Prompt to create git tag

**Outputs:**
- Updated `/CHANGELOG.md`
- Git tag recommendation

**When to use:** Before releases

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