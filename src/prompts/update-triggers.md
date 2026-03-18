# Update Triggers — Maintain Trigger Prompt System

**Type:** Maintenance  
**Created:** 2026-03-18  
**Status:** Active  
**Trigger Word:** `update triggers`  
**Project:** Handcrafted Wines

---

## Prompt Purpose

**Objective:** Maintain the trigger prompt system by verifying prompt files, updating guideline references, eliminating circular references, and ensuring orchestrator prompts include all sub-prompts.

**When to Use:** After creating new prompts, after guideline updates, or during quarterly maintenance.

**Critical Rule:** Prompts reference GUIDELINES (source of truth), never other prompts (except orchestrators).

---

## Workflow Steps

### Step 1: Verify Prompt Inventory

**Check all prompts exist as documented in `/guidelines/PROMPT-TRIGGERS.md`:**

**Audit Prompts (24):**
- audit-routes.md
- audit-sitemap.md
- audit-tokens.md
- audit-css.md
- audit-a11y.md
- audit-accessibility.md
- audit-data.md
- audit-responsive.md
- audit-styles.md
- audit-guidelines.md
- audit-light-mode.md
- audit-images.md
- audit-layout.md
- audit-functionality.md
- audit-theme.md
- audit-style.md
- audit-routing.md
- audit-webgl.md
- audit-performance.md
- audit-phosphor.md
- audit-header.md
- audit-footer.md
- audit-hero.md
- apply-bem.md

**Workflow Prompts (7):**
- cleanup.md
- continue.md
- status.md
- changelog.md
- sitemap.md (if exists, or uses different system)
- process-reports.md
- (cleanup-and-continue combined in cleanup.md)

**Scaffold Prompts (3):**
- new-template.md
- new-pattern.md
- new-block.md

**Guidelines Prompts (3):**
- update-guidelines.md
- cleanup-guidelines.md
- update-triggers.md (this file)

**Release Prompts (1):**
- release.md

**Master Orchestration (1):**
- audit.md (calls all 24 audit prompts)

**Report:** List any missing prompts or extra prompts not in registry.

---

### Step 2: Eliminate Circular References

**Rule:** Prompts MUST reference guidelines, NOT other prompts (except orchestrators calling sub-prompts).

**Scan all prompts for references to:**
- Other `/prompts/*.md` files (FORBIDDEN for non-orchestrators)
- Self-references (e.g., audit-tokens.md referencing audit-tokens.md)

**Allowed:**
- ✅ Prompts → Guidelines: `/guidelines/**/*.md`
- ✅ Orchestrators → Sub-prompts: `audit.md` calling `audit-routes.md`
- ✅ Related prompts listed at bottom (documentation only, not execution flow)

**Forbidden:**
- ❌ Prompts → Other prompts as source of truth
- ❌ Circular chains: A → B → A

**Fix:** Replace prompt references with guideline references.

**Example:**
```markdown
❌ BAD:
"Load `/prompts/audit-tokens.md` for token standards"

✅ GOOD:
"Load `/guidelines/design-tokens/*.md` for token standards"
```

---

### Step 3: Verify Guideline References

**Each prompt MUST reference relevant existing guidelines.**

**Common Guideline Mappings:**

| Prompt | Required Guidelines |
|--------|---------------------|
| audit-tokens | `/guidelines/design-tokens/*.md` (all token files) |
| audit-css | `/guidelines/development/wordpress-css-variables.md`, `/guidelines/design-tokens/dark-light-mode.md` |
| audit-a11y | `/guidelines/accessibility/wcag-compliance.md` |
| audit-accessibility | `/guidelines/accessibility/wcag-compliance.md`, `/guidelines/accessibility/*` |
| audit-routes | `/guidelines/architecture/sitemap.md`, `/guidelines/architecture/routing.md` |
| audit-sitemap | `/guidelines/architecture/sitemap.md` |
| audit-responsive | `/guidelines/design-tokens/responsive.md` |
| audit-data | `/guidelines/development/file-organization.md` |
| audit-guidelines | `/guidelines/_templates.md`, `/guidelines/repository-standards.md` (if exists) |
| audit-styles | `/guidelines/design-tokens/*.md`, `/guidelines/development/wordpress-css-variables.md` |
| audit-theme | `/guidelines/design-tokens/dark-light-mode.md` |
| audit-layout | `/guidelines/patterns/layout-patterns.md` (if exists), `/guidelines/architecture/component-structure.md` |
| audit-images | `/guidelines/accessibility/wcag-compliance.md` (alt text section) |
| audit-phosphor | `/guidelines/development/icon-library.md` (if exists, else document in prompt) |
| audit-header | `/guidelines/patterns/hero-standards.md`, `/guidelines/architecture/component-structure.md` |
| audit-footer | `/guidelines/architecture/component-structure.md` |
| audit-hero | `/guidelines/patterns/hero-standards.md` |
| apply-bem | `/guidelines/development/wordpress-css-variables.md`, `/guidelines/design-tokens/*.md` |
| cleanup | `/guidelines/development/file-organization.md`, `/guidelines/Guidelines.md` |
| continue | `/guidelines/Guidelines.md`, `/tasks/task-list.md` |
| status | `/guidelines/Guidelines.md` |
| update-guidelines | `/guidelines/_templates.md`, `/guidelines/INDEX.md` |
| cleanup-guidelines | `/guidelines/_templates.md`, `/guidelines/INDEX.md` |

**For each prompt:**
1. Verify referenced guidelines exist
2. If guideline doesn't exist, either:
   - Create guideline stub
   - Or document standards inline in prompt
3. Update prompt to reference correct guideline path

---

### Step 4: Update Master Audit Orchestrator

**File:** `/prompts/audit.md`

**Verify includes ALL audit prompts:**

**Currently Should Include (24):**
1. audit-routes
2. audit-sitemap
3. audit-tokens
4. audit-css
5. audit-a11y
6. audit-accessibility
7. audit-data
8. audit-responsive
9. audit-styles
10. audit-guidelines
11. audit-light-mode
12. audit-images
13. audit-layout
14. audit-functionality
15. audit-theme
16. audit-style
17. audit-routing
18. audit-webgl
19. audit-performance
20. audit-phosphor ⚠️ **NEW - Add if missing**
21. audit-header ⚠️ **NEW - Add if missing**
22. audit-footer ⚠️ **NEW - Add if missing**
23. audit-hero ⚠️ **NEW - Add if missing**
24. apply-bem

**Update `/prompts/audit.md`:**
- Add missing audit prompts to execution order
- Update total count (currently shows 20, should be 24)
- Add new prompts to category groupings
- Update summary table with new rows

---

### Step 5: Update Cleanup Prompt

**File:** `/prompts/cleanup.md`

**Should call these audit prompts as spot-checks:**
- ✅ Icon migration status: Check Phosphor vs Lucide usage
- ✅ Template part usage: Spot-check header/footer/hero usage
- ✅ Guideline compliance: Run `audit guidelines` as Step 10

**Add new steps to cleanup:**
- **Step 11:** Icon Migration Status (check Phosphor progress)
- **Step 12:** Template Part Compliance (spot-check Header/Footer/Hero usage)

**Update cleanup.md:**
```markdown
## Step 11 — Icon Migration Status

**Goal:** Track Phosphor icon migration progress.

1. Count files using `@phosphor-icons/react` imports
2. Count files using `lucide-react` imports (legacy)
3. Calculate migration percentage
4. Flag any new Lucide imports (regression)

**Output:** "Icon Migration: [N]% Phosphor, [N] Lucide files remaining"

---

## Step 12 — Template Part Compliance

**Goal:** Verify consistent template part usage.

Spot-check 5 random pages for:
1. **Header:** Uses Header template part (not hardcoded)
2. **Footer:** Uses Footer template part (not hardcoded)
3. **Hero:** Uses Hero template part with data-driven content

**Output:** "[N] template part violations found" or "Template parts consistent"
```

---

### Step 6: Update Status Prompt

**File:** `/prompts/status.md`

**Add icon migration metrics:**

Under **Step 3: Compliance Quick-Check**, add:
```markdown
Icon Migration Progress:
- Count `@phosphor-icons/react` imports
- Count `lucide-react` imports
- Calculate % migrated
```

**Update output summary** to include icon migration row:
```markdown
| Icon Migration | [N]% Phosphor | In Progress |
```

---

### Step 7: Update Process Reports Prompt

**File:** `/prompts/process-reports.md`

**Verify scans all report categories:**

Should scan these directories:
- `/reports/a11y/`
- `/reports/bem/`
- `/reports/css/`
- `/reports/icons/` ⚠️ **NEW - Add if missing**
- `/reports/layout/` ⚠️ **NEW - Add if missing**
- `/reports/light-mode/`
- `/reports/performance/`
- `/reports/tokens/`

**Update to include:**
- Icon migration reports from `/reports/icons/`
- Template part reports from `/reports/layout/`

---

### Step 8: Update Trigger Registry

**File:** `/guidelines/PROMPT-TRIGGERS.md`

**Verify:**
1. All 51 triggers documented (24 audit + 7 workflow + 3 scaffold + 3 guidelines + 1 release + 2 orchestration)
2. Each trigger has:
   - Trigger word
   - Prompt file path
   - Purpose
   - Outputs
3. "Related Prompts" at bottom of each prompt entry is **documentation only** (not execution dependency)
4. Update version to 6.1.0 with changelog entry

---

### Step 9: Verify No Orphan Prompts

**Check for prompts not registered:**

List all files in `/prompts/` and compare against registry.

**Expected Non-Trigger Files (OK to not have triggers):**
- `README.md`
- `PROMPT-SYSTEM-GUIDELINES.md`
- `EXECUTION-GUIDE.md`
- `SYSTEM-DIAGRAM.md`
- Files in `/prompts/redesign/` (legacy, different system)
- `content-migration-to-data-files.md` (one-time migration, not trigger)
- `css-migration-hardcoded-to-variables.md` (one-time migration, not trigger)

**Action:** If orphan prompts found, either:
1. Add to trigger registry
2. Move to `/prompts/archive/` (if deprecated)
3. Document as non-trigger workflow

---

### Step 10: Report

Save to `/reports/triggers/update-triggers-YYYY-MM-DD.md`:

```markdown
# Trigger System Update Report - Handcrafted Wines

**Date:** YYYY-MM-DD  
**Status:** [Complete/Issues Found]

## Prompt Inventory
- **Total Prompts:** [N]
- **Registered Triggers:** 51
- **Missing Prompts:** [List any]
- **Orphan Prompts:** [List any]

## Circular Reference Audit
- **Prompts Scanned:** [N]
- **Circular References Found:** [N]
- **Fixed:** [N]

**Violations Found:**
[List prompt → prompt references that should be prompt → guideline]

## Guideline Reference Audit
- **Prompts Checked:** [N]
- **Missing Guideline References:** [N]
- **Broken Guideline Paths:** [N]

**Fixes Applied:**
[List prompts updated with correct guideline paths]

## Master Audit Orchestrator
- **Current Sub-Prompts:** [N]
- **Expected Sub-Prompts:** 24
- **Added:** [List new prompts added]

## Updated Prompts
- `/prompts/audit.md` - Added [N] new audit prompts
- `/prompts/cleanup.md` - Added icon migration + template part steps
- `/prompts/status.md` - Added icon migration metrics
- `/prompts/process-reports.md` - Added new report categories
- `/guidelines/PROMPT-TRIGGERS.md` - Updated to v6.1.0

## Recommendations
1. Create missing guidelines
2. Archive deprecated prompts
3. Document non-trigger workflows
```

---

## Success Criteria

- [ ] All 51 registered prompts exist as files
- [ ] Zero circular references (prompts → prompts)
- [ ] All prompts reference guidelines (prompts → guidelines)
- [ ] Master audit orchestrator includes all 24 audit prompts
- [ ] Cleanup prompt includes icon migration + template part checks
- [ ] Status prompt includes icon migration metrics
- [ ] Process reports prompt scans all report categories
- [ ] Trigger registry updated to v6.1.0
- [ ] Report saved to `/reports/triggers/`

---

## Handcrafted Wines Reference Architecture

**Prompt System Design:**
```
Guidelines (Source of Truth)
    ↓ (referenced by)
Prompts (Automation)
    ↓ (generate)
Reports (Analysis)
    ↓ (converted to)
Task Lists (Action Items)
```

**Never:**
```
Prompt A ←→ Prompt B (circular)
Prompt → Prompt (dependency)
```

**Always:**
```
Prompt → Guidelines (reference)
Orchestrator → Sub-Prompts (execution)
```

---

**Maintained by:** Handcrafted Wines Development Team  
**Last Updated:** 2026-03-18  
**Related Prompts:** `update guidelines`, `cleanup guidelines`, `audit guidelines`  
**Related Guidelines:** `/guidelines/PROMPT-TRIGGERS.md`, `/guidelines/_templates.md`
