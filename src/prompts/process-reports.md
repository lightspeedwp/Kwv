# Process Reports Orchestrator Prompt

**Version:** 1.0  
**Purpose:** Systematically process reports and create/update task lists  
**Trigger Word:** `process reports`  
**Session Type:** Single-session  
**Estimated Duration:** 10-20 minutes

---

## 🎯 Primary Objectives

This prompt reads all reports in `/reports/`, validates their current relevance, and automatically creates or updates corresponding task lists in `/tasks/`.

**Goals:**
1. Review all reports for continued relevance (validate issues still exist)
2. Create task lists for reports that don't have one
3. Update existing task lists with report recommendations
4. Archive or delete outdated reports (>7 days + fully resolved)
5. Update master task list with new/updated tasks

**Success Criteria:**
- [ ] All reports reviewed and validated
- [ ] All report recommendations have corresponding tasks
- [ ] Outdated reports archived or deleted
- [ ] Master task list updated
- [ ] Summary report generated

---

## 📋 Prerequisites

### Required Files
- [ ] `/reports/` directory exists
- [ ] `/tasks/task-list.md` exists (master task list)
- [ ] `/guidelines/_templates/task-list-template.md` exists
- [ ] `/guidelines/_templates/report-template.md` exists

---

## 🔧 Execution Steps

### Step 1: Scan Reports Directory

**Objective:** Identify all reports and their metadata

**Actions:**
1. Read all files in `/reports/`
2. For each report, extract:
   - Report ID
   - Date created
   - Status (Draft | Final | Archived)
   - Domain analyzed
   - Related task files (if listed)
3. Calculate age of each report (days since creation)

**Output:** List of reports with metadata

---

### Step 2: Validate Report Relevance

**Objective:** Determine if issues in reports are still present or have been resolved

**For each report:**

1. **Read report sections:**
   - Current State Analysis
   - Issues
   - Gaps
   - Recommendations

2. **Verify against codebase:**
   - Read files mentioned in "Affected Files"
   - Check if issues still exist in code
   - Verify if recommendations have been implemented
   - Check if gaps have been filled

3. **Classify report:**
   - ✅ **Still Relevant:** Issues/gaps still present
   - ⚠️ **Partially Addressed:** Some items resolved, some remaining
   - ❌ **Fully Resolved:** All items completed
   - 📅 **Outdated:** Report >7 days AND fully resolved

**Decision Matrix:**

| Age | Status | Action |
|-----|--------|--------|
| Any | Still Relevant | Keep + Create/Update Tasks |
| Any | Partially Addressed | Keep + Update Tasks |
| <7 days | Fully Resolved | Keep (recent completion) |
| ≥7 days | Fully Resolved | **DELETE** |
| Any | Marked "Archived" | Move to `/reports/archive/` |

---

### Step 3: Process Recommendations into Tasks

**For each RELEVANT or PARTIALLY ADDRESSED report:**

1. **Check if task file exists:**
   - Look for linked task file in report's "Related Tasks" section
   - Search `/tasks/` for file matching domain name
   - Example: `visual-design-report.md` → look for `visual-design.md` or `visual-design-implementation.md`

2. **If task file DOES NOT exist:**
   - Copy `/guidelines/_templates/task-list-template.md`
   - Create new task file: `/tasks/[domain]-implementation.md`
   - Fill template with:
     - Feature: [Domain from report]
     - Status: Open
     - Priority: Based on report priority
     - Related Files: Link to report
   - Extract recommendations from report
   - Create tasks for each recommendation:
       - High Priority → Phase 1 tasks
       - Medium Priority → Phase 2 tasks
       - Low Priority → Phase 3 tasks
   - Populate task deliverables from report's "Implementation" sections
   - Add files to modify from report's "Files to Modify" lists

3. **If task file EXISTS:**
   - Read existing task file
   - Compare with report recommendations
   - Add missing tasks (recommendations not yet in task list)
   - Update task descriptions if report has new details
   - Mark completed tasks based on validation in Step 2
   - Update progress percentage
   - Update "Related Files" section to link report

**Task Extraction Pattern:**

From report recommendation:
```markdown
#### 1. Update Color System

**Problem:** Dual color systems cause inconsistency  
**Benefit:** Single source of truth  
**Effort:** Medium (8 hours)

**Implementation:**
1. Create unified color variables
2. Update components to use new variables
3. Remove deprecated tokens

**Files to Modify:**
- `/styles/globals.css`
- `/constants/theme.ts`
```

To task:
```markdown
#### Task 1.1: Update Color System

**Priority:** High  
**Estimated Effort:** 8 hours  
**Status:** [ ] Not Started

**Description:**
Update color system to use unified variables, eliminating dual color system inconsistency.

**Deliverables:**
- [ ] Create unified color variables in globals.css
- [ ] Update components to use new variables
- [ ] Remove deprecated tokens from theme.ts

**Files to Create/Modify:**
- `/styles/globals.css` (update)
- `/constants/theme.ts` (update)

**Acceptance Criteria:**
- [ ] All components use new color variables
- [ ] No references to old color system
- [ ] Documentation updated
```

---

### Step 4: Update Master Task List

**Objective:** Ensure all new/updated task files are referenced in master list

**File:** `/tasks/task-list.md`

**Actions:**

1. Read current master task list
2. For each task file created/updated in Step 3:
   - Check if already listed in master
   - If not listed, add entry:
     ```markdown
     - [ ] [Domain] Implementation (`/tasks/[domain]-implementation.md`)
     ```
   - Place in appropriate priority order (High priority first)
3. Update overall progress statistics
4. Mark any completed task files with `[x]`

---

### Step 5: Clean Up Reports

**Objective:** Archive or delete outdated reports

**For each report classified as ≥7 days + Fully Resolved:**

1. **DELETE the report:**
   - Use `delete_tool` on `/reports/[report-name].md`
   - Add entry to cleanup summary

**For each report marked "Archived":**

1. **Move to archive:**
   - Create `/reports/archive/` if doesn't exist
   - Move file to `/reports/archive/[report-name].md`

**Do NOT delete:**
- Reports <7 days old (even if resolved - keep as recent history)
- Reports referenced in `/guidelines/Guidelines.md`
- Reports with "Final" status that document important decisions
- Master reports (overview/comprehensive analysis)

---

## 🛡️ Guard Rails & Constraints

### Protected Files

**Never delete:**
- `/reports/README.md`
- Any report referenced in `/guidelines/Guidelines.md`
- Any report marked "Status: Final" with historical value
- Any report <7 days old

### Validation Before Deletion

**Before deleting ANY report, verify:**
- [ ] Age ≥7 days
- [ ] All issues confirmed resolved in codebase
- [ ] Not referenced in guidelines
- [ ] All recommendations either implemented or captured in tasks
- [ ] Not a "master" or comprehensive analysis report

### Task Creation Rules

**When creating tasks from reports:**
- Use `/guidelines/_templates/task-list-template.md` as base
- Maintain estimate accuracy (use report's effort estimates)
- Link back to source report
- Preserve priority levels from report
- Include all acceptance criteria
- List all files to be modified

---

## 📤 Output Format

### Required Summary

```markdown
# Report Processing Summary - [DATE]

## 📊 Reports Processed

**Total Reports Scanned:** X  
**Reports by Status:**
- ✅ Still Relevant: X reports
- ⚠️ Partially Addressed: X reports
- ✓ Fully Resolved (kept): X reports
- ❌ Deleted (outdated): X reports
- 📁 Archived: X reports

---

## 🗑️ Deleted Reports

| Report | Age | Reason |
|--------|-----|--------|
| [report-name] | X days | All issues resolved |

---

## 📋 Task Lists Created

| Task File | Source Report | Tasks Added | Priority |
|-----------|---------------|-------------|----------|
| `/tasks/[name].md` | `[report-name]` | X tasks | High |

---

## 📝 Task Lists Updated

| Task File | Tasks Added | Tasks Marked Complete | New Progress |
|-----------|-------------|----------------------|--------------|
| `/tasks/[name].md` | X | X | XX% |

---

## ✅ Master Task List Updates

**New Entries Added:** X  
**Tasks Marked Complete:** X  
**Overall Progress:** XX% → XX%

---

## 📂 Active Reports Remaining

| Report | Age | Status | Task File |
|--------|-----|--------|-----------|
| [name] | X days | Still Relevant | `/tasks/[task].md` |

---

## ⚠️ Attention Required

[List any reports that need manual review or decisions]

---

## 🎯 Next Actions

1. Review newly created task lists
2. Execute tasks from master task list (`continue` prompt)
3. Update Guidelines.md if reports identified guideline gaps

---

**Processing Complete** ✓
```

---

## 🎨 Context & Environment

### Figma Make Environment

**Remember - this is Figma Make:**
- ✅ Say: "Task files created and ready"
- ✅ Say: "Reports processed successfully"
- ❌ Don't say: "Refresh browser"
- ❌ Don't say: "Run npm install"

### Report Date Parsing

**Date formats to recognize:**
- `**Date:** YYYY-MM-DD`
- `**Date:** Month DD, YYYY`
- `**Last Updated:** YYYY-MM-DD`

**Calculate age:**
- Today's date: March 13, 2026
- Report date: Parse from report
- Age = Today - Report Date

---

## 🔄 Related Prompts

### Before Running
- Consider: `/prompts/cleanup.md` - Ensures clean state

### After Running
- Run: `/prompts/continue.md` - Execute newly created tasks
- Update: `/guidelines/Guidelines.md` - If gaps identified

---

## 📚 Reference Materials

### Templates
- `/guidelines/_templates/task-list-template.md`
- `/guidelines/_templates/report-template.md`

### Guidelines
- `/prompts/PROMPT-SYSTEM-GUIDELINES.md` - Section 6: Report Creation Standards
- `/guidelines/_templates.md` - Template usage guidelines

---

## 🐛 Error Handling

### Report Not Following Template

**Issue:** Report doesn't have standard sections

**Resolution:**
1. Look for keywords: "Recommendation", "Issue", "Gap", "Finding"
2. Extract manually using keyword search
3. Note in summary that report needs reformatting

---

### Can't Determine Report Age

**Issue:** No clear date in report

**Resolution:**
1. Check file creation date (if available)
2. Mark as "Unknown age - keeping active"
3. Add to "Attention Required" section

---

### Task File Naming Conflict

**Issue:** Multiple possible names for task file

**Resolution:**
1. Check report's "Related Tasks" section first
2. Search for domain name in existing task files
3. If ambiguous, create new with pattern: `[domain]-from-[report-id].md`

---

## 📝 Detailed Validation Examples

### Example 1: Visual Design Report

**Report States:**
- Issue: "Dual color systems" → Check if `/styles/globals.css` and `/constants/theme.ts` still have separate systems
- Recommendation: "Unify color tokens" → Check if unification happened

**Validation:**
```typescript
// Read /constants/theme.ts
// If still has old COLORS object → Issue STILL EXISTS → Keep report
// If refactored to use CSS vars → Issue RESOLVED → Can delete if >7 days
```

---

### Example 2: Navigation Accessibility Report

**Report States:**
- Issue: "Missing keyboard navigation" → Check if navigation component has keyboard handlers
- Gap: "No mobile menu focus trap" → Check if mobile menu traps focus

**Validation:**
```tsx
// Read /components/layout/Navigation.tsx
// Search for onKeyDown, onKeyPress, onFocus
// If absent → Issue STILL EXISTS
// Search for focus trap logic
// If absent → Gap STILL EXISTS
```

---

## 📊 Success Metrics

**Processing is successful when:**
- [ ] All reports reviewed
- [ ] All active recommendations have tasks
- [ ] Outdated reports cleaned up
- [ ] Master task list is current
- [ ] No orphaned reports (no task file)
- [ ] No duplicate tasks created

---

## Change Log

### Version 1.0 (2024-03-13)
- Initial orchestrator prompt
- Automated report→task conversion
- 7-day deletion rule established
- Validation logic for issue resolution

---

**Maintained by:** Automation Team  
**Last Tested:** 2024-03-13  
**Next Review:** As-needed with prompt system updates
