# Continue with Next Task Prompt

**Version:** 1.0  
**Purpose:** Resume work on the next logical task from the master task list  
**Trigger Word:** `continue`  
**Session Type:** Single-focus work session

---

## 🎯 Objective

Continue development by identifying and executing the next highest-priority task from `/tasks/task-list.md`.

---

## 📋 Execution Steps

### Step 1: Read Master Task List

**File:** `/tasks/task-list.md`

**Identify:**
1. **Current status:** What percentage of tasks are complete?
2. **Next open task:** First unchecked `[ ]` task in priority order
3. **Active task file:** Does the next task reference a specific file (e.g., `/tasks/navigation-system.md`)?

---

### Step 2: Load Detailed Task Context

**If next task references a task file:**
- Read that file (e.g., `/tasks/homepage-redesign.md`)
- Identify the first incomplete subtask
- Read any related reports in `/reports/` (e.g., `/reports/homepage-analysis.md`)

**If next task is standalone:**
- Use task description from master task list
- Check Guidelines.md for relevant requirements

---

### Step 3: Execute the Task

**Work on the identified task:**

1. **Understand requirements:**
   - What is the specific deliverable?
   - What Guidelines.md sections apply?
   - What components/pages are affected?

2. **Implement solution:**
   - Follow atomic design principles
   - Use existing components where possible
   - Maintain accessibility standards (WCAG 2.1 AA)
   - Follow The Wire Brand color palette and typography

3. **Document changes:**
   - Add JSDoc comments to new components
   - Update relevant task file with `[x]` for completed items
   - Note any blockers or dependencies discovered

---

### Step 4: Update Status

**After completing the task:**

1. **Update `/tasks/task-list.md`:**
   - Mark task as `[x]` if fully complete
   - Add progress note if partially complete

2. **Update task detail file** (if applicable):
   - Mark completed subtasks
   - Note completion timestamp
   - Add "Status: Completed" header if all items done

3. **Brief summary:**
   - What was completed
   - What components/pages were created/modified
   - Any blockers for next task

---

## 🎨 Context Reminders

### Figma Make Environment
- You are working in **Figma Make**, not a standard development environment
- Do NOT suggest:
  - "Refresh your browser"
  - "Clear your cache"
  - "Run npm install"
  - "Restart the dev server"
- Changes appear automatically in the preview

### Project Context
- **Brand:** The Wire Brand (boutique wine farm in Paarl, South Africa)
- **Color Palette:** 
  - `#1a1a1a` (Ink - deep charcoal)
  - `#f5f5f5` (Paper - warm off-white)
  - `#ff6b35` (Clay - terracotta accent)
  - `#4ecdc4` (Vine - teal accent)
- **Router:** React Router Data mode (`react-router` package, NOT `react-router-dom`)
- **Styling:** Tailwind CSS v4 with fluid typography using `clamp()`
- **Accessibility:** WCAG 2.1 AA compliance is mandatory

### Key Architectural Rules
- Use JSDoc comments on all components and functions
- Filter Figma props using `filterFigmaProps` utility for UI components
- Use relative imports (no `@/` aliases)
- Mobile-first responsive design
- Atomic design patterns (atoms → molecules → organisms)

---

## 📤 Output Format

**Provide this summary when task is complete:**

```markdown
# Task Continuation Summary

## ✅ Completed Task
**Task:** [Task name from task-list.md]  
**File:** [Related task file if any]  
**Status:** [Completed/Partially Complete/Blocked]

## 🛠️ Changes Made
- [Component/page created or modified]
- [Files added/updated]
- [Routes added if applicable]

## 📊 Progress Update
- **Previous completion:** X%
- **Current completion:** X%
- **Tasks remaining:** X

## 🎯 Next Task Preview
**Next in queue:** [Name of next task]  
**Priority:** [High/Medium/Low]  
**Estimated effort:** [Small/Medium/Large]

## ⚠️ Blockers/Notes
[Any issues discovered or dependencies identified]
```

---

## 🚀 Quick Start

**To continue work, the user simply types:**

```
continue
```

**The AI will:**
1. Read `/tasks/task-list.md`
2. Identify next open task
3. Execute the task
4. Update status
5. Provide completion summary

**Single-session execution.** No multiple rounds or confirmation prompts.

---

## 🔗 Related Prompts

- **Cleanup:** Run `/prompts/cleanup.md` before continuing for optimal system state
- **Combined:** User can trigger both: "cleanup then continue"
