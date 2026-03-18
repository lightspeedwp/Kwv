# Status — Project Health Dashboard

**Type:** Utility  
**Created:** 2026-03-18  
**Status:** Active  
**Trigger Word:** `status`  
**Project:** Handcrafted Wines

---

## Prompt Purpose

**Objective:** Generate quick health check of entire Handcrafted Wines project — file counts, compliance scores, open tasks, recent activity.

**When to Use:** At start of session to understand current project state, or to get snapshot before planning new work.

---

## Workflow Steps

### Step 1: Codebase Metrics

1. Count files by type:
   - Components: `/components/**/*.tsx` (layout, sections, shop, decorative)
   - Pages: `/pages/**/*.tsx` (main site, shop, company, experiences, events)
   - Data files: `/data/*.ts` (products, farmStory, etc.)
   - CSS files: `/styles/*.css`
   - Guideline files: `/guidelines/**/*.md`
   - Prompt files: `/prompts/*.md`
   
2. Count routes from `/routes.tsx`
3. Count products in `/data/products.ts` (expected: 17)

### Step 2: Task Status

1. Read `/tasks/task-list.md` — count open `[ ]` vs completed `[x]` tasks
2. Read task lists in `/tasks/`:
   - `/tasks/a11y-task-list.md` (accessibility progress)
   - `/tasks/light-mode-task-list.md` (light mode progress)
   - `/tasks/data-cleanup-task-list.md` (data cleanup)
3. Identify next 3 actionable tasks by priority

**Current Known Status:**
- Accessibility: 21/28 tasks (75% complete)
- Light Mode: 46/46 files (100% complete, 100/100 health)
- Data Cleanup: 0/10 tasks started

### Step 3: Compliance Quick-Check

Spot-check 5 random component/page files for:
- Zero hardcoded hex colors (use `var(--twb-color-*)`)
- Zero `react-router-dom` imports (use `react-router`)
- CSS variable usage for fonts (`var(--twb-font-primary/secondary)`)
- Icon library (`lucide-react` only)
- BEM classes (`.twb-*` namespace)

### Step 4: Theme Status

Check current theme implementation:
- Light mode: `:root` in `/styles/themes-light.css`
- Dark mode: `.dark` in `/styles/themes-dark.css`
- Theme toggle: UnifiedHeader component
- Both modes achieving WCAG AA contrast

### Step 5: Recent Activity

1. Read `/CHANGELOG.md` `[Unreleased]` section
2. Identify last 5 changes made
3. Check `/reports/` for recent audit reports

### Step 6: Output Summary

Present findings:

```markdown
## Handcrafted Wines Project Status — [Today's Date]

### 📊 Codebase Metrics
| Metric | Count |
|--------|-------|
| Components | [N] |
| Pages | [N] |
| Routes | [N] |
| CSS Files | 6 (globals, themes, utilities) |
| Data Files | [N] (products: 17) |
| Guidelines | 32+ |
| Prompts | 47 triggers |

### ✅ Tasks & Progress
| Task List | Progress | Health |
|-----------|----------|--------|
| Accessibility | 21/28 (75%) | 100/100 ✅ |
| Light Mode | 46/46 (100%) | 100/100 ✅ |
| Data Cleanup | 0/10 (0%) | Pending |
| **Total Open Tasks** | [N] | - |

**Next Priority Tasks:**
1. [task 1]
2. [task 2]
3. [task 3]

### 🎨 Design System Compliance
| Check | Status |
|-------|--------|
| Hardcoded hex colors | [0 ✅ / N ❌] |
| CSS variable fonts | [✅ / ❌] |
| Icon library (lucide-react) | [✅ / ❌] |
| Router (react-router) | [✅ / ❌] |
| BEM classes (twb-*) | [✅ / ❌] |

### 🎨 Theme Status
- **Light Mode:** 100/100 health ✅ (6-wave implementation complete)
- **Dark Mode:** 100/100 health ✅ (original implementation flawless)
- **Theme Toggle:** Working ✅
- **WCAG Contrast:** AA compliant in both modes ✅

### 📝 Recent Changes (from CHANGELOG)
- [change 1]
- [change 2]
- [change 3]
- [change 4]
- [change 5]

### 🏥 Overall Health Score
**[0-100]/100**

**Legend:**
- 90-100: Excellent ✅
- 70-89: Good 🟢
- 50-69: Fair 🟡
- <50: Needs attention 🔴
```

---

## Success Criteria

- [ ] All metrics gathered and reported
- [ ] Next priority task identified
- [ ] Compliance spot-check completed
- [ ] Theme status verified
- [ ] Overall health score calculated
- [ ] No files modified (read-only operation)

---

## Handcrafted Wines Health Indicators

**Excellent Health (90-100):**
- ✅ Zero hardcoded colors/fonts
- ✅ 100% CSS variable compliance
- ✅ All routes working
- ✅ Accessibility 75%+ complete
- ✅ Light/dark modes both working
- ✅ < 10 open critical tasks

**Good Health (70-89):**
- ✅ < 5 hardcoded colors/fonts
- ✅ 90%+ CSS variable compliance
- ✅ All routes working
- ✅ Accessibility 50%+ complete
- ✅ At least one mode working perfectly
- ✅ < 20 open critical tasks

**Fair Health (50-69):**
- 🟡 5-10 hardcoded values
- 🟡 80%+ CSS variable compliance
- 🟡 1-2 broken routes
- 🟡 Accessibility 25%+ complete
- 🟡 Theme toggle working but issues
- 🟡 20-40 open tasks

**Needs Attention (<50):**
- 🔴 > 10 hardcoded values
- 🔴 < 80% CSS variable compliance
- 🔴 Multiple broken routes
- 🔴 Accessibility < 25% complete
- 🔴 Theme issues
- 🔴 > 40 open tasks

---

**Maintained by:** Handcrafted Wines Development Team  
**Last Updated:** 2026-03-18  
**Related Prompts:** `audit`, `cleanup`, `changelog`
