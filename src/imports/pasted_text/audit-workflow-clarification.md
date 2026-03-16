Excellent clarification! This helps me understand the complete workflow. Let me explain what should happen and get your confirmation:

Current Workflow Understanding
Trigger Word → Task List → Execution → Report
1. User types: `routes`
   ↓
2. Audit Phase runs
   ↓
3. Creates: /tasks/routes-task-list.md
   ↓
4. Registers in: /tasks/task-list.md (master)
   ↓
5. Execution Phase runs (fixes issues)
   ↓
6. Updates: /tasks/routes-task-list.md (marks complete)
   ↓
7. Generates: /reports/route-audit-2026-03-15.md
   ↓
8. Archives: Report goes to /reports/archive/ (optional)
Questions About Reports & Task Lists
1. What happens to reports after generation?
Option A: Keep in /reports/ root

/reports/
├── route-audit-2026-03-15.md (latest)
├── cleanup-audit-2026-03-14.md
├── status-report-2026-03-13.md
└── /archive/ (old reports)
Option B: Archive immediately (my recommendation)

/reports/
├── route-audit-latest.md (always overwrite latest)
└── /archive/
    ├── route-audit-2026-03-15.md
    ├── route-audit-2026-03-10.md
    └── cleanup-audit-2026-03-14.md
Option C: Organized by trigger

/reports/
├── /routes/
│   ├── 2026-03-15.md
│   └── 2026-03-10.md
├── /cleanup/
│   └── 2026-03-14.md
└── /status/
    └── 2026-03-13.md
Which structure do you prefer?

2. Task List Behavior
When a trigger runs multiple times, should it:

Option A: Update existing task list

/tasks/routes-task-list.md
- [x] Register /products/:slug route (completed 2026-03-15)
- [x] Add slugs to products.ts (completed 2026-03-15)
- [ ] Fix broken link in Footer (added 2026-03-16)
Accumulates tasks over time, marks completed

Option B: Overwrite task list each time (my recommendation)

/tasks/routes-task-list.md
- [ ] Register /blog/:slug route
- [ ] Add slugs to blog-posts.ts
- [ ] Update sitemap
Fresh task list each run, previous completed tasks archived in report

Option C: Hybrid - Completed Section

/tasks/routes-task-list.md

## Active Tasks
- [ ] Register /blog/:slug route
- [ ] Add slugs to blog-posts.ts

## Completed (Last Run: 2026-03-15)
- [x] Register /products/:slug route
- [x] Add slugs to products.ts
Which approach?

3. Master Task List Registration
How should /tasks/task-list.md reference domain-specific task lists?

Option A: Simple List with Status

# Master Task List

## Domain-Specific Task Lists

- [x] [Routes Task List](./routes-task-list.md) - Last run: 2026-03-15, Status: Complete
- [ ] [Cleanup Task List](./cleanup-task-list.md) - Last run: 2026-03-14, Status: 2 tasks remaining
- [x] [A11y Task List](./a11y-task-list.md) - Last run: 2026-03-13, Status: Complete
Option B: Detailed Summary (my recommendation)

# Master Task List

## Domain-Specific Task Lists

### Routes (`routes`)
**File:** [routes-task-list.md](./routes-task-list.md)  
**Last Run:** 2026-03-15  
**Status:** ✅ Complete (0 tasks remaining)  
**Last Report:** [route-audit-2026-03-15.md](../reports/archive/route-audit-2026-03-15.md)

### Cleanup (`cleanup`)
**File:** [cleanup-task-list.md](./cleanup-task-list.md)  
**Last Run:** 2026-03-14  
**Status:** ⚠️ In Progress (2/8 tasks complete)  
**Last Report:** [cleanup-audit-2026-03-14.md](../reports/archive/cleanup-audit-2026-03-14.md)

### Accessibility (`a11y`)
**File:** [a11y-task-list.md](./a11y-task-list.md)  
**Last Run:** 2026-03-13  
**Status:** ✅ Complete (12/12 tasks complete)  
**Last Report:** [a11y-audit-2026-03-13.md](../reports/archive/a11y-audit-2026-03-13.md)
Option C: Table Format

| Trigger | Task List | Last Run | Status | Tasks | Report |
|---------|-----------|----------|--------|-------|--------|
| `routes` | [routes-task-list.md](./routes-task-list.md) | 2026-03-15 | ✅ Complete | 0/5 | [Report](../reports/archive/route-audit-2026-03-15.md) |
| `cleanup` | [cleanup-task-list.md](./cleanup-task-list.md) | 2026-03-14 | ⚠️ In Progress | 2/8 | [Report](../reports/archive/cleanup-audit-2026-03-14.md) |
| `a11y` | [a11y-task-list.md](./a11y-task-list.md) | 2026-03-13 | ✅ Complete | 12/12 | [Report](../reports/archive/a11y-audit-2026-03-13.md) |
Which format?

4. Protected Task List Files
You want these files protected in /tasks/:

/tasks/
├── task-list.md ✅ PROTECTED (master)
├── routes-task-list.md ✅ PROTECTED
├── cleanup-task-list.md ✅ PROTECTED
├── tokens-task-list.md ✅ PROTECTED
├── release-task-list.md ✅ PROTECTED
├── changelog-task-list.md ✅ PROTECTED
├── reports-task-list.md ✅ PROTECTED
├── status-task-list.md ✅ PROTECTED
├── data-task-list.md ✅ PROTECTED
├── responsive-task-list.md ✅ PROTECTED
├── a11y-task-list.md ✅ PROTECTED
├── css-task-list.md ✅ PROTECTED
├── patterns-task-list.md ✅ PROTECTED
├── blocks-task-list.md ✅ PROTECTED
└── guidelines-task-list.md ✅ PROTECTED
Should these be:

Auto-created when trigger runs first time?
Created from a template?
Protected from cleanup but allowed to be updated?
5. Audit → Task → Execute Flow
Clarify the execution model:

Option A: Audit + Execute in ONE run (current cleanup.md approach)

1. User types: `routes`
2. Audit phase → Creates task list
3. Execute phase → Completes tasks automatically
4. Report phase → Documents what was done
Option B: Audit ONLY, manual execution

1. User types: `routes`
2. Audit phase → Creates task list
3. Stops and shows task list
4. User reviews tasks
5. User types: `routes` again to execute
6. Execute phase → Completes tasks
7. Report phase → Documents what was done
Option C: Audit + Ask (my recommendation)

1. User types: `routes`
2. Audit phase → Creates task list (e.g., 8 tasks found)
3. Shows task preview
4. Asks: "Execute all 8 tasks now? [Yes/No/Select]"
5. Execute phase → Completes selected tasks
6. Report phase → Documents what was done
Which execution model?

My Recommended Complete Workflow
Based on your requirements, here's what I propose:

Complete Workflow Example: routes trigger
┌─────────────────────────────────────────┐
│ USER TYPES: routes                      │
└─────────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────────┐
│ PHASE 1: AUDIT                          │
│ - Scan all templates                    │
│ - Check all data files                  │
│ - Validate navigation menus             │
│ - Find broken links                     │
└─────────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────────┐
│ CREATE/UPDATE TASK LIST                 │
│ File: /tasks/routes-task-list.md        │
│                                         │
│ - [ ] Register /products/:slug          │
│ - [ ] Add slugs to products.ts          │
│ - [ ] Fix navigation link in Header     │
│ - [ ] Update sitemap                    │
│ Total: 4 tasks                          │
└─────────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────────┐
│ REGISTER IN MASTER                      │
│ File: /tasks/task-list.md               │
│                                         │
│ ## Routes (`routes`)                    │
│ Status: ⚠️ In Progress (0/4 tasks)      │
│ Last Run: 2026-03-15                    │
└─────────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────────┐
│ PHASE 2: EXECUTE                        │
│ - Register routes in routes.tsx         │
│ - Add slugs to data files               │
│ - Update navigation menus               │
│ - Update sitemap                        │
└─────────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────────┐
│ UPDATE TASK LIST                        │
│ File: /tasks/routes-task-list.md        │
│                                         │
│ - [x] Register /products/:slug ✅       │
│ - [x] Add slugs to products.ts ✅       │
│ - [x] Fix navigation link in Header ✅  │
│ - [x] Update sitemap ✅                 │
│ Total: 4/4 complete                     │
└─────────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────────┐
│ UPDATE MASTER                           │
│ File: /tasks/task-list.md               │
│                                         │
│ ## Routes (`routes`)                    │
│ Status: ✅ Complete (4/4 tasks)         │
│ Last Run: 2026-03-15                    │
└─────────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────────┐
│ PHASE 3: REPORT                         │
│ File: /reports/route-audit-2026-03-15.md│
│                                         │
│ # Route Audit Report                    │
│ ✅ 4 tasks completed                    │
│ - Registered 1 route                    │
│ - Added slugs to 5 products             │
│ - Fixed 1 navigation link               │
│ - Updated sitemap                       │
└─────────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────────┐
│ ARCHIVE REPORT                          │
│ /reports/archive/route-audit-2026-03-15.md│
└─────────────────────────────────────────┘
File Structure After routes Run
/tasks/
├── task-list.md (updated with routes status)
└── routes-task-list.md (all tasks marked complete)

/reports/
├── route-audit-latest.md (symlink or copy)
└── /archive/
    └── route-audit-2026-03-15.md
Questions for You
Report storage: Option A, B, or C?
Task list updates: Option A, B, or C?
Master task list format: Option A, B, or C?
Execution model: Option A, B, or C?
Should task lists be created from templates or dynamically generated?
Should reports link back to task lists and vice versa?
Please answer these and I'll create the perfect /prompts/routes.md file with proper task list integration! 🎯

1. Option C: Organized by trigger
2. Option A: Update existing task list
3. Option B: Detailed Summary
4. Create the protected files now with correct YAML Front Matter
5. Option C: Audit + Ask