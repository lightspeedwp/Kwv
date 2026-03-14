# Prompt System Guidelines

**Version:** 1.0  
**Purpose:** Master configuration for the orchestrated prompt system  
**Last Updated:** 2024-01-11

---

## 🎯 Overview

This document defines the **Prompt Orchestration System** for The Wire Brand project. It establishes:
- Trigger word shortcuts
- Naming conventions for prompts, tasks, and reports
- Guard rails for file protection
- Cleanup and continuation workflows

---

## 1. Trigger Word System

### 1.1 Primary Triggers

**Trigger words activate specific prompt files automatically:**

| Trigger Word | Prompt File | Purpose | Session Type |
|--------------|-------------|---------|--------------|
| `cleanup` | `/prompts/cleanup.md` | System audit & cleanup | Single session |
| `continue` | `/prompts/continue.md` | Next task execution | Single session |
| `process reports` | `/prompts/process-reports.md` | Process reports into task lists | Single session |
| `audit guidelines` | `/prompts/audit-guidelines.md` | Audit and reorganize guidelines | Single session |
| `migrate css variables` | `/prompts/css-migration-hardcoded-to-variables.md` | Replace hardcoded values with CSS variables | Multi-session |
| `migrate content` | `/prompts/content-migration-to-data-files.md` | Move content to data files with voice/tone rewrite | Multi-session |
| `analyze [topic]` | `/prompts/analyze-[topic].md` | Domain analysis (if exists) | Single session |
| `cleanup continue` | Both prompts in sequence | Full maintenance + work | Two sessions |

### 1.2 Trigger Word Recognition

**When user types a trigger word:**

1. AI recognizes the trigger word
2. AI reads the corresponding prompt file from `/prompts/`
3. AI executes the prompt instructions fully
4. AI provides the prompt's specified output summary
5. **No confirmation prompts** - execute directly

**Example:**

```
User: "cleanup"

AI: [Reads /prompts/cleanup.md]
    [Executes all sections]
    [Provides cleanup summary]
```

---

## 2. File Naming Conventions

### 2.1 Prompt Files (`/prompts/`)

**Format:** `[action]-[scope].md`

**Examples:**
- `cleanup.md` - System-wide cleanup
- `continue.md` - Task continuation
- `analyze-navigation.md` - Navigation analysis
- `analyze-typography.md` - Typography analysis
- `redesign-homepage.md` - Homepage redesign orchestration

**Rules:**
- All lowercase
- Hyphens for word separation
- `.md` extension required
- Must include execution instructions section

---

### 2.2 Task Files (`/tasks/`)

**Format:** `[feature]-[component].md` or `task-list-[scope].md`

**Examples:**
- `task-list.md` - **Master task list (protected)**
- `task-list-wave-1.md` - First wave of tasks
- `homepage-redesign.md` - Homepage redesign tasks
- `navigation-system.md` - Navigation implementation tasks
- `checkout-flow.md` - Checkout flow tasks

**Status Headers:**
```markdown
**Status:** [Open | In Progress | Completed | Blocked]  
**Priority:** [High | Medium | Low]  
**Assigned Wave:** [1 | 2 | 3]  
**Progress:** X% complete
```

**Rules:**
- All lowercase
- Hyphens for word separation
- Must include status header
- Must have checkbox items `[ ]` or `[x]`
- Completed files (100%) should be archived or deleted during cleanup

---

### 2.3 Report Files (`/reports/`)

**Format:** `[domain]-[type]-report.md`

**Examples:**
- `homepage-analysis-report.md`
- `navigation-accessibility-report.md`
- `typography-system-report.md`
- `color-palette-audit-report.md`

**Required Sections:**
```markdown
# [Domain] [Type] Report

**Date:** YYYY-MM-DD  
**Status:** [Draft | Final | Archived]  
**Related Tasks:** [Links to task files]

## Executive Summary
[Brief overview]

## Findings
[Detailed analysis]

## Recommendations
[Actionable items]

## Implementation Priority
1. High priority items
2. Medium priority items
3. Low priority items
```

**Rules:**
- All lowercase with hyphens
- Must end with `-report.md`
- Must include date and status
- Archive after 30 days if not referenced

---

## 3. Protected Files & Directories

### 3.1 Never Delete

**Root-level files:**
- `/Guidelines.md`
- `/REDESIGN-BRIEF-SUMMARY.md`
- `/App.tsx`
- `/routes.tsx`
- `/index.html`
- `/package.json`
- `/vite.config.ts`
- `/tsconfig.json`

**Task files:**
- `/tasks/task-list.md` (master task list)

**System files:**
- `/src/app/components/figma/ImageWithFallback.tsx`

**Style files:**
- `/styles/globals.css`

### 3.2 Never Delete Directories

**These can be organized but never removed:**
- `/components/`
- `/pages/`
- `/styles/`
- `/public/`
- `/src/`

### 3.3 Archive Instead of Delete

**Move to `/[folder]/archive/` instead of deleting:**
- Task files referenced in Guidelines.md
- Reports referenced in active tasks
- Completed task files with historical value
- Old prompt files (keep versions)

---

## 4. Cleanup System Rules

### 4.1 Task Cleanup Logic

**A task file can be DELETED if:**
- ✅ All checkboxes are marked `[x]`
- ✅ Status header shows "Completed"
- ✅ Not referenced in Guidelines.md
- ✅ Not referenced in master task-list.md
- ✅ No open blockers or dependencies

**Otherwise → ARCHIVE to `/tasks/archive/`**

### 4.2 Report Cleanup Logic

**A report can be ARCHIVED if:**
- ✅ Older than 30 days
- ✅ Not referenced in Guidelines.md
- ✅ Not referenced in active task files
- ✅ Superseded by newer report on same topic

**Keep reports that:**
- ❌ Are referenced in Guidelines.md
- ❌ Are less than 30 days old
- ❌ Contain unique analysis not found elsewhere
- ❌ Are marked as "Final" status

### 4.3 Root Folder Cleanup

**Acceptable root files:**
- Configuration files (package.json, tsconfig.json, vite.config.ts, etc.)
- Entry points (App.tsx, routes.tsx, index.html)
- Documentation (Guidelines.md, REDESIGN-BRIEF-SUMMARY.md, README.md)

**Move to subdirectories:**
- `.md` files (except Guidelines.md, REDESIGN-BRIEF-SUMMARY.md) → `/docs/`
- Task files → `/tasks/`
- Report files → `/reports/`
- Prompt files → `/prompts/`
- Component files → `/components/`
- Image files → `/public/` or `/assets/`

---

## 5. Continuation System Rules

### 5.1 Task Priority Order

**When selecting next task from `/tasks/task-list.md`:**

1. **First pass:** Look for tasks with `**Priority: High**`
2. **Second pass:** Look for first unchecked `[ ]` item in document order
3. **Third pass:** Look for tasks in "In Progress" status
4. **Fallback:** Start first task in next wave

### 5.2 Task Context Loading

**Before executing a task:**

1. Read task description from master list
2. If task references a detail file (e.g., `/tasks/homepage-redesign.md`):
   - Read that file
   - Read any linked reports
   - Check Guidelines.md for relevant sections
3. Understand dependencies and blockers

### 5.3 Task Completion Criteria

**A task is complete when:**
- ✅ All deliverables are created/updated
- ✅ All files have JSDoc documentation
- ✅ All components pass accessibility checks
- ✅ Routes are updated in `/routes.tsx`
- ✅ Task file is updated with `[x]` checkboxes
- ✅ Master task list is updated

---

## 6. Report Creation Standards

### 6.1 When to Create a Report

**Create a new report when:**
- Analysis is requested for a specific domain (e.g., "analyze navigation")
- Audit is needed before major refactoring
- Comprehensive review of a system is required
- Documentation of findings is needed for future reference

**Do NOT create a report when:**
- Simple bug fix
- Minor styling adjustment
- Single component update
- Task is straightforward and doesn't need analysis

### 6.2 Report Template

```markdown
# [Domain] [Type] Report

**Date:** YYYY-MM-DD  
**Author:** Figma Make AI  
**Status:** [Draft | In Review | Final | Archived]  
**Related Tasks:** 
- `/tasks/[task-file].md`
- `/tasks/[another-task].md`

---

## Executive Summary

[2-3 paragraph overview of findings and recommendations]

---

## Current State Analysis

### Strengths
- [What's working well]
- [Positive aspects]

### Issues
- [Problems identified]
- [Technical debt]
- [Accessibility concerns]

### Gaps
- [Missing features]
- [Incomplete implementations]

---

## Detailed Findings

### [Finding Category 1]
**Issue:** [Description]  
**Impact:** [High | Medium | Low]  
**Affected Files:** 
- `/path/to/file.tsx`

**Evidence:**
```tsx
// Code example showing the issue
```

**Recommendation:**
[Specific fix]

---

## Implementation Recommendations

### High Priority (Do First)
1. [Action item with clear deliverable]
2. [Action item with clear deliverable]

### Medium Priority (Do Next)
1. [Action item]
2. [Action item]

### Low Priority (Future Enhancement)
1. [Nice-to-have item]
2. [Nice-to-have item]

---

## Success Metrics

**How to measure if recommendations are successful:**
- [ ] [Measurable criterion 1]
- [ ] [Measurable criterion 2]
- [ ] [Measurable criterion 3]

---

## Appendix

### Related Files
- [List of all files analyzed]

### References
- [Links to Guidelines.md sections]
- [Links to external resources]
```

---

## 7. Integration with Guidelines.md

### 7.1 When to Update Guidelines.md

**Update Guidelines.md when:**
- New color tokens are added
- Typography system changes
- Component architecture changes
- New pages are added to sitemap
- Protected files list changes
- Accessibility rules are refined

### 7.2 Sections to Keep in Sync

**During cleanup, verify these sections:**

| Section | Source of Truth | Update Trigger |
|---------|----------------|----------------|
| 3.1 Color Tokens | `/styles/globals.css` | CSS variable changes |
| 3.2 Typography | `/styles/globals.css` | Font or scale changes |
| 4.1 Sitemap | `/routes.tsx` | New routes added |
| 7.1 Component Architecture | `/components/` directory | New components |
| 10.1 JSDoc Standards | This document | Standards change |
| Protected Files | This document | File protection changes |

---

## 8. Figma Make Environment Reminders

### 8.1 What AI Should NEVER Say

❌ "Refresh your browser"  
❌ "Clear your cache"  
❌ "Run `npm install`"  
❌ "Restart the development server"  
❌ "Commit these changes to git"  
❌ "Push to your repository"

### 8.2 What AI SHOULD Say

✅ "Changes are now visible in the Figma Make preview"  
✅ "The component has been updated in the live preview"  
✅ "I've created/updated the file - it's ready to use"  
✅ "The route is now active"  
✅ "This change will appear immediately"

### 8.3 Available Tools Only

**AI can only use these tools:**
- `read` - Read files
- `write_tool` - Create new files
- `edit_tool` - Edit existing files (fallback)
- `fast_apply_tool` - Edit existing files (preferred)
- `delete_tool` - Delete files
- `file_search` - Search file contents
- `think` - Internal reasoning

**AI cannot:**
- Execute shell commands
- Install packages (packages are available, just import them)
- Run tests
- Create git commits

---

## 9. Optimization Strategies

### 9.1 Batch Operations

**When possible, batch similar operations:**

Example: Instead of:
```
Read file 1 → Edit file 1 → Read file 2 → Edit file 2
```

Do:
```
Read file 1 → Read file 2 → Edit file 1 → Edit file 2
```

This reduces tool calls and is more efficient.

### 9.2 Use fast_apply_tool

**Prefer `fast_apply_tool` over `edit_tool`:**
- `fast_apply_tool` is designed for targeted edits
- Uses lazy diff pattern matching
- Faster execution
- More reliable

**Use `edit_tool` only when:**
- `fast_apply_tool` fails
- Exact string matching is needed

### 9.3 Single-Session Execution

**Prompts should complete in ONE session:**
- Don't ask "Should I continue?"
- Don't break work into multiple rounds
- Execute all steps sequentially
- Provide summary at the end

---

## 10. Future Enhancements

### 10.1 Planned Trigger Words

- `test` - Run accessibility and component tests
- `deploy` - Prepare deployment checklist
- `analyze-all` - Run all analysis prompts
- `report [topic]` - Generate specific report

### 10.2 Planned Prompt Files

- `/prompts/test-suite.md` - Accessibility testing
- `/prompts/analyze-accessibility.md` - WCAG audit
- `/prompts/analyze-performance.md` - Performance audit
- `/prompts/prepare-deployment.md` - Pre-deployment checklist

---

## 11. Quick Reference

### Common Workflows

**1. Start of work session:**
```
User: "cleanup"
AI: [Runs cleanup.md]
User: "continue"  
AI: [Runs continue.md]
```

**2. End of work session:**
```
User: "cleanup"
AI: [Runs cleanup.md, provides status summary]
```

**3. Focused analysis:**
```
User: "analyze navigation"
AI: [Runs analyze-navigation.md if exists, or creates analysis]
```

**4. Quick continuation:**
```
User: "continue"
AI: [Runs continue.md, executes next task]
```

---

## 12. Guard Rails Summary

### ✅ Always Do
- Filter Figma props in UI components
- Add JSDoc comments to all new code
- Update task files with `[x]` when complete
- Check Guidelines.md before implementing
- Follow accessibility standards
- Use mobile-first responsive design
- Keep files organized in proper directories

### ❌ Never Do
- Delete protected files
- Delete directories entirely
- Ask for browser refresh
- Reference `react-router-dom` (use `react-router`)
- Skip accessibility requirements
- Use `@/` import aliases
- Create files in root that belong in subdirectories

---

**End of Prompt System Guidelines**

This document should be referenced by all prompts in `/prompts/` and updated when the orchestration system evolves.