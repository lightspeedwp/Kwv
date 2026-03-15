# File Organization Summary

**Last Updated:** 2024-03-15  
**Status:** Active Reference

---

## Critical Rules (AI Must Follow)

### 1. Root-Level File Restrictions 🚨

**ONLY three .md files allowed in project root:**

```
/
├── ATTRIBUTIONS.md  ✅ ALLOWED
├── README.md        ✅ ALLOWED
├── CHANGELOG.md     ✅ ALLOWED
└── [any-other.md]   ❌ PROHIBITED
```

**Never create these in root:**
- ❌ `/WHATS-NEXT.md`
- ❌ `/TODO.md`
- ❌ `/NOTES.md`
- ❌ `/PLAN.md`
- ❌ `/REDESIGN-BRIEF.md`

**Instead use:**
- Tasks → `/tasks/task-list.md` or `/tasks/{feature}-task-list.md`
- Notes/Docs → `/docs/` folder
- Plans → `/tasks/{feature}-task-list.md`

---

### 2. Task Management

**ALL tasks must go in `/tasks/` folder:**

1. **Master Task List (Protected):**
   ```
   /tasks/task-list.md
   ```
   - Never delete or replace
   - Only update/append
   - Central source of truth for all tasks

2. **Feature-Specific Task Lists:**
   ```
   /tasks/{feature}-{scope}.md
   ```
   - Examples: `/tasks/redesign-implementation.md`
   - Examples: `/tasks/homepage-refresh.md`

**Never create:**
- ❌ Root-level task files
- ❌ `/WHATS-NEXT.md`
- ❌ `/TODO.md`

---

### 3. Prompts → Reports → Tasks Workflow

**STRICT sequence (DO NOT SKIP STEPS):**

#### Phase 1: Update Guidelines FIRST
```
Before creating prompts:
1. Update /guidelines/design-tokens/*.md
2. Update /guidelines/components/*.md
3. Verify all guidelines are current
```

**Why:** Prompts reference guidelines. Outdated guidelines = incorrect audits.

---

#### Phase 2: Create and Run Prompts
```
Single Prompt:
/prompts/my-audit.md

Orchestrator Prompts:
/prompts/{category}/00-ORCHESTRATOR.md
/prompts/{category}/01-{sub-prompt}.md
/prompts/{category}/02-{sub-prompt}.md
```

---

#### Phase 3: Generate Reports
```
Single Report:
/reports/01-my-audit-report.md

Orchestrator Reports:
/reports/{category}/01-{sub-prompt}-report.md
/reports/{category}/02-{sub-prompt}-report.md
```

**Must follow template:** `/guidelines/_templates/report-template.md`

---

#### Phase 4: Create Task Lists (ONLY AFTER ALL REPORTS COMPLETE)
```
After ALL reports are done:
/tasks/{feature}-{scope}.md
```

**Why:** Task lists need complete picture from all reports to define:
- All tasks and subtasks
- Dependencies
- Effort estimates
- Priorities

**⚠️ Creating task lists before reports are complete = INCOMPLETE TASKS**

---

### 4. File Size Limits

**Keep files small for optimal AI processing:**

| File Type | Max Lines | Max Size |
|-----------|-----------|----------|
| Data files | ~100 | ~20 kB |
| Component files | ~300 | ~30 kB |
| CSS files | ~500 | ~50 kB |
| Guideline files | ~500 | ~50 kB |
| Prompt files | ~200 | ~20 kB |
| Report files | ~800 | ~80 kB |
| Task lists | ~400 | ~40 kB |

**Why:** Large files degrade AI processing. Smaller files = better memory optimization.

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

## File Location Patterns

### Prompts
```
Single:
/prompts/{action}-{scope}.md
Examples: cleanup.md, audit-guidelines.md

Orchestrator:
/prompts/{category}/00-ORCHESTRATOR.md
/prompts/{category}/01-{sub-prompt}.md
```

### Reports
```
Single:
/reports/{##}-{domain}-report.md
Examples: 01-accessibility-audit-report.md

Orchestrator:
/reports/{category}/{##}-{domain}-report.md
Examples: /reports/redesign/01-visual-design-report.md
```

### Task Lists
```
/tasks/task-list.md (master)
/tasks/{feature}-{scope}.md
Examples: redesign-implementation.md, homepage-refresh.md
```

### Guidelines
```
/guidelines/{category}/{topic}.md
Examples:
- /guidelines/design-tokens/colors.md
- /guidelines/components/Hero.md
- /guidelines/accessibility/wcag-compliance.md
```

### Data Files
```
/data/{feature}-{type}.ts
Examples:
- /data/homepage.ts
- /data/products-wine.ts
- /data/shop-faq.ts
```

### Components
```
/components/{category}/{ComponentName}.tsx
Examples:
- /components/common/Button.tsx
- /components/sections/Hero.tsx
- /components/shop/ProductCard.tsx
```

### CSS Files
```
/styles/{module}.css
Examples:
- /styles/globals.css
- /styles/themes-light.css
- /styles/utilities.css
```

---

## Templates Available

All templates in `/guidelines/_templates/`:

1. **component-guideline-template.md** - For component guidelines
2. **design-token-template.md** - For design token guidelines
3. **guideline-template.md** - For general guidelines
4. **prompt-template.md** - For single prompts
5. **report-template.md** - For analysis reports
6. **task-list-template.md** - For task lists
7. **ATTRIBUTIONS-template.md** - For `/ATTRIBUTIONS.md`
8. **README-template.md** - For `/README.md`
9. **CHANGELOG-template.md** - For `/CHANGELOG.md`

---

## Anti-Patterns (What NOT to Do)

### ❌ Creating Task Lists Too Early
```
Day 1: Create /prompts/redesign/01-visual-design-analysis.md
Day 1: Create /tasks/redesign-implementation.md  ❌ TOO EARLY!

Problem: Task list is incomplete, missing context from other analyses
```

### ✅ Correct Workflow
```
Day 1: Update guidelines
Day 2: Run prompts 01-04, create reports
Day 3: Run prompts 05-10, create reports
Day 4: Review all reports
Day 5: Create comprehensive task list
```

---

### ❌ Creating Files in Root
```
/WHATS-NEXT.md  ❌ Prohibited!
/TODO.md        ❌ Prohibited!
/NOTES.md       ❌ Prohibited!

Should be:
/tasks/task-list.md
/docs/notes.md
```

---

### ❌ Skipping Guideline Updates
```
Day 1: Create /prompts/redesign/01-visual-design-analysis.md
Day 1: Run analysis  ❌ Guidelines not updated!

Problem: Analysis uses outdated guidelines, audit is incorrect
```

### ✅ Correct Workflow
```
Day 1: Update /guidelines/design-tokens/colors.md
Day 1: Update /guidelines/design-tokens/typography.md
Day 2: Create and run prompts
```

---

### ❌ Monolithic Files
```
/data/content.ts (500 kB)  ❌ Too large!
/components/shop/ProductPage.tsx (800 lines)  ❌ Too large!
```

### ✅ Correct: Split Files
```
/data/homepage.ts (15 kB)
/data/products-wine.ts (18 kB)

/components/shop/ProductPage.tsx (100 lines)
/components/shop/ProductGallery.tsx (80 lines)
/components/shop/ProductDetails.tsx (90 lines)
```

---

## Quick Reference: Where to Create Files

| Content Type | Location | Example |
|--------------|----------|---------|
| **Tasks** | `/tasks/` | `task-list.md` |
| **Prompts (Single)** | `/prompts/` | `cleanup.md` |
| **Prompts (Orchestrator)** | `/prompts/{category}/` | `redesign/00-ORCHESTRATOR.md` |
| **Reports (Single)** | `/reports/` | `01-audit-report.md` |
| **Reports (Orchestrator)** | `/reports/{category}/` | `redesign/01-visual-design-report.md` |
| **Guidelines** | `/guidelines/{category}/` | `design-tokens/colors.md` |
| **Data** | `/data/` | `homepage.ts` |
| **Components** | `/components/{category}/` | `common/Button.tsx` |
| **CSS** | `/styles/` | `utilities.css` |
| **Docs** | `/docs/` | `implementation-notes.md` |

---

## Validation Checklist

### Before Creating Any File:

- [ ] File goes in correct folder (NOT root!)
- [ ] File size within limits
- [ ] Follows naming convention
- [ ] Uses appropriate template

### Before Creating a Prompt:

- [ ] Related guidelines are up-to-date
- [ ] File will be in `/prompts/` or `/prompts/{category}/`
- [ ] Follows template structure
- [ ] File size under 200 lines

### Before Creating a Report:

- [ ] Related prompt has completed execution
- [ ] Report follows template structure
- [ ] All required sections included
- [ ] File size under 800 lines
- [ ] File goes in `/reports/` or `/reports/{category}/`

### Before Creating a Task List:

- [ ] ALL related reports are complete
- [ ] Reports have been reviewed for consistency
- [ ] Dependencies are understood
- [ ] Task list follows template structure
- [ ] File size under 400 lines
- [ ] File goes in `/tasks/` folder

---

## Related Documentation

- **Complete Reference:** `/guidelines/development/file-organization.md`
- **Repository Standards:** `/guidelines/repository-standards.md`
- **Changelog Guidelines:** `/guidelines/changelog-guidelines.md`
- **README Guidelines:** `/guidelines/readme-guidelines.md`
- **Prompt System:** `/prompts/PROMPT-SYSTEM-GUIDELINES.md`
- **Templates:** `/guidelines/_templates/`

---

## Summary for AI Agents

**When creating files:**

1. ✅ **Check root restriction** - ONLY ATTRIBUTIONS.md, README.md, CHANGELOG.md allowed in root
2. ✅ **Use correct folder** - Tasks in `/tasks/`, prompts in `/prompts/`, reports in `/reports/`, etc.
3. ✅ **Follow workflow** - Guidelines → Prompts → Reports → Tasks (in that order)
4. ✅ **Respect size limits** - Keep files small, split when necessary
5. ✅ **Use templates** - All 9 templates available in `/guidelines/_templates/`

**Never:**
- ❌ Create task lists before reports are complete
- ❌ Create .md files in project root (except the 3 allowed)
- ❌ Skip guideline updates before running prompts
- ❌ Create monolithic files (split instead)

---

**Questions?** Reference `/guidelines/development/file-organization.md` for complete details.
