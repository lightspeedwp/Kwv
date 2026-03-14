# System Cleanup & Audit Prompt

**Version:** 1.0  
**Purpose:** Comprehensive codebase cleanup, status updates, and file system optimization  
**Run Frequency:** Weekly or after completing major task groups  
**Session Type:** Single-session execution (do not break into multiple sessions)

---

## 🎯 Primary Objectives

This prompt performs a complete system audit and cleanup in **one session**. Execute all sections sequentially without prompting for continuation.

---

## 1. File System Audit & Cleanup

### 1.1 Root Directory Cleanup
**Scan `/` (root) for files that should be in subdirectories:**

- ✅ **Keep in root:** `App.tsx`, `routes.tsx`, `index.html`, `package.json`, `vite.config.ts`, `tsconfig.json`, `Guidelines.md`, `REDESIGN-BRIEF-SUMMARY.md`
- ❌ **Move or delete:**
  - Any `.md` files (except `Guidelines.md` and `REDESIGN-BRIEF-SUMMARY.md`) → Move to `/docs/`
  - Any task files → Move to `/tasks/`
  - Any report files → Move to `/reports/`
  - Any prompt files → Move to `/prompts/`
  - Any stray component files → Move to `/components/`
  - Any test files → Move to `/tests/` (create if needed)
  - Any image files → Move to `/public/` or `/assets/`

**Action:** List files to be moved, then move them. Delete any true duplicates or obsolete temp files.

---

### 1.2 Routes Validation & Repair

**Check `/routes.tsx` for completeness:**

1. **Scan all page files:**
   - `/pages/company/*.tsx`
   - `/pages/shop/*.tsx`
   - `/pages/experiences/*.tsx`
   - `/pages/events/*.tsx`
   - `/pages/legal/*.tsx`

2. **Verify each page has a route:**
   - Compare page files against routes in `routes.tsx`
   - List any **missing routes**
   - List any **broken routes** (pointing to non-existent files)

3. **Add missing routes:**
   - Use consistent path structure
   - Follow existing patterns (lazy loading, nested routes, etc.)
   - Ensure 404 catch-all (`path: "*"`) is last

4. **Fix broken routes:**
   - Update paths to point to correct files
   - Remove routes for deleted pages

**Output:** Summary of routes added, fixed, or removed.

---

### 1.3 Import Validation

**Check for broken imports across the codebase:**

1. **CSS Imports:**
   - Scan all `.tsx` and `.ts` files for `import '*.css'` or `import from '*.css'`
   - Verify each CSS file exists at the specified path
   - **Common paths to check:**
     - `/styles/globals.css`
     - `/styles/*.css`
     - Component-level CSS imports

2. **JavaScript/TypeScript Imports:**
   - Scan for imports starting with `./`, `../`, or `/`
   - Check that imported files exist
   - **Focus on:**
     - Component imports
     - Utility imports
     - Type imports
     - Hook imports

3. **Package Imports:**
   - Verify version-pinned imports match available packages (e.g., `@radix-ui/react-dialog@1.1.6`)
   - Flag any imports from `react-router-dom` (should be `react-router`)

**Output:** List of broken imports with suggested fixes. Apply fixes automatically where obvious.

---

## 2. Task Management Cleanup

### 2.1 Clean Completed Tasks

**Scan `/tasks/` directory:**

1. **Identify completed task files:**
   - Look for task files marked with `[x]` for all items
   - Look for files with "COMPLETED" or "DONE" status headers
   - Look for outdated task files (e.g., `task-list-wave-1-COMPLETED.md`)

2. **Archive or delete:**
   - If task is 100% complete → **DELETE** the file
   - If task has historical value → **MOVE** to `/tasks/archive/` (create if needed)
   - **Never delete:** `/tasks/task-list.md` (master task list)

3. **Update master task list** (`/tasks/task-list.md`):
   - Mark completed tasks as `[x]`
   - Update status indicators (Open, In Progress, Completed)
   - Remove references to deleted task files
   - Update percentages/progress bars if present

---

### 2.2 Report Cleanup

**Scan `/reports/` directory:**

1. **Identify outdated reports:**
   - Reports that reference completed tasks
   - Duplicate analysis reports
   - Reports older than 30 days with no recent updates

2. **Archive or consolidate:**
   - Move outdated reports to `/reports/archive/`
   - Keep only the most recent/relevant reports active
   - **Protected reports** (do not delete):
     - Any report referenced in Guidelines.md
     - Any report referenced in active task files
     - Master analysis reports

**Output:** List of archived/deleted reports.

---

## 3. Documentation Updates

### 3.1 Update CHANGELOG.md

**Location:** `/docs/CHANGELOG.md` or `/CHANGELOG.md`

**Add entry for this cleanup session:**

```markdown
## [Cleanup] - YYYY-MM-DD

### System Maintenance
- Cleaned root directory: [X files moved/deleted]
- Fixed routes: [X routes added, X routes fixed]
- Repaired imports: [X broken imports fixed]
- Archived tasks: [X completed task files removed]
- Updated Guidelines.md: [sections updated]

### Status Updates
- Task completion: X% overall progress
- Next milestone: [Next major task group]
```

**Action:** Generate and append this entry with actual numbers.

---

### 3.2 Update Guidelines.md

**Check for outdated information:**

1. **Color Tokens:** Verify hex codes match `/styles/globals.css`
2. **Component List:** Ensure Section 7 (React component architecture) matches actual `/components/` structure
3. **Route List:** Ensure Section 4.1 (sitemap) matches `routes.tsx`
4. **Typography Scales:** Verify fluid clamp values match `/styles/globals.css`
5. **Breakpoints:** Ensure values match actual Tailwind usage
6. **Protected Files:** Verify list is current

**Update any discrepancies found.**

---

### 3.3 Update Sitemap Page

**File:** `/pages/Sitemap.tsx` (if exists) or create it

**Generate current sitemap from `routes.tsx`:**

1. Parse all routes from `routes.tsx`
2. Create hierarchical list
3. Update sitemap component with current structure
4. Include route status (✅ Implemented | ⚠️ Stub | ❌ Missing)

**If sitemap page doesn't exist:** Add to backlog, do not create it now.

---

### 3.4 Update DevTools Page

**File:** `/pages/DevTools.tsx` or `/components/DevTools.tsx` (if exists)

**Update with current metrics:**

- Total components: [count from /components/]
- Total pages: [count from /pages/]
- Total routes: [count from routes.tsx]
- Total tasks: [count from /tasks/]
- Task completion: [percentage]
- Color tokens: [list from globals.css]
- Typography tokens: [list from globals.css]

**If DevTools doesn't exist:** Note in output, do not create.

---

## 4. Protected Files Guard Rails

**NEVER DELETE OR MOVE THESE FILES:**

- `/Guidelines.md`
- `/REDESIGN-BRIEF-SUMMARY.md`
- `/tasks/task-list.md` (master task list)
- `/src/app/components/figma/ImageWithFallback.tsx`
- `/App.tsx`
- `/routes.tsx`
- `/styles/globals.css`
- Any file in `/components/ui/`
- Any file in `/components/layout/`

**Protected Directories (do not delete, only organize within):**

- `/components/`
- `/pages/`
- `/styles/`
- `/public/`

---

## 5. Final Output Summary

**After completing all sections, provide:**

```markdown
# Cleanup Session Summary - [DATE]

## ✅ Completed Actions

### File System
- Root cleanup: X files moved, X files deleted
- Routes: X added, X fixed, X removed
- Imports: X broken imports repaired

### Task Management  
- Completed tasks archived: X files
- Master task list updated: X items marked complete
- Reports archived: X files

### Documentation
- CHANGELOG.md updated ✓
- Guidelines.md updated: [sections]
- Sitemap: [updated/skipped]
- DevTools: [updated/skipped]

## 📊 Current Status

- **Total Components:** X
- **Total Pages:** X  
- **Total Routes:** X
- **Task Completion:** X%
- **Next Milestone:** [Description]

## ⚠️ Issues Found

[List any issues that need manual attention]

## 🎯 Recommended Next Actions

1. [Highest priority task]
2. [Second priority task]
3. [Third priority task]
```

---

## 🚀 Execution Instructions

**To AI Assistant:**

1. Execute ALL sections in sequence without stopping
2. Do NOT ask for permission between sections
3. Auto-fix obvious issues (broken imports, missing routes, etc.)
4. Provide the final summary at the end
5. **Remember:** This is Figma Make - do not suggest browser refresh or cache clearing
6. Use only available tools (read, write_tool, edit_tool, fast_apply_tool, delete_tool, file_search)
7. Complete everything in ONE session

**Session complete when:** Final output summary is provided.
