# [Action/Purpose] Prompt

**Version:** 1.0  
**Purpose:** [One-sentence description of what this prompt does]  
**Trigger Word:** `[trigger]` (if applicable)  
**Session Type:** [Single-session | Multi-session | Interactive]  
**Estimated Duration:** [X minutes]

---

## 🎯 Primary Objectives

[Clear statement of what this prompt accomplishes]

**Goals:**
1. Goal 1
2. Goal 2
3. Goal 3

**Success Criteria:**
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

---

## 📋 Prerequisites

### Required Files/State

- [ ] File/state requirement 1
- [ ] File/state requirement 2
- [ ] File/state requirement 3

### Optional Context

- Context that helps but isn't required

---

## 🔧 Execution Steps

### Step 1: [Step Name]

**Objective:** [What this step accomplishes]

**Actions:**
1. Action 1
2. Action 2
3. Action 3

**Validation:**
- [ ] Validation check 1
- [ ] Validation check 2

**Output:** [What this step produces]

---

### Step 2: [Step Name]

[Same structure as Step 1]

---

### Step 3: [Step Name]

[Same structure as Step 1]

---

## 🛡️ Guard Rails & Constraints

### Protected Elements

**Never modify/delete:**
- Protected item 1
- Protected item 2

**Always verify before:**
- Check 1
- Check 2

### Validation Rules

**Before proceeding, ensure:**
- [ ] Rule 1
- [ ] Rule 2
- [ ] Rule 3

**If validation fails:**
[What to do if checks fail]

---

## 📤 Output Format

### Required Output Structure

```markdown
# [Prompt Name] Execution Summary

## ✅ Completed Actions

### [Category 1]
- Action 1: [Details]
- Action 2: [Details]

### [Category 2]
- Action 1: [Details]

## 📊 Metrics

- Metric 1: [Value]
- Metric 2: [Value]

## ⚠️ Issues Found

[List any issues or blockers]

## 🎯 Next Actions

1. [Recommended next step]
2. [Second step]
```

---

## 🎨 Context & Environment

### Figma Make Environment Reminders

**This is Figma Make - DO NOT suggest:**
- ❌ "Refresh your browser"
- ❌ "Clear your cache"
- ❌ "Run npm install"
- ❌ "Restart development server"

**Instead, say:**
- ✅ "Changes are visible in preview"
- ✅ "File updated successfully"
- ✅ "Component ready to use"

### Available Tools

**Can use:**
- `read` - Read files
- `write_tool` - Create files
- `fast_apply_tool` - Edit files (preferred)
- `edit_tool` - Edit files (fallback)
- `delete_tool` - Delete files (respect protected files!)
- `file_search` - Search content
- `think` - Internal reasoning

**Cannot use:**
- Shell commands
- Package installation
- Git operations
- External network calls

---

## 🔄 Related Prompts

### Before Running This

**Consider running:**
- `/prompts/[prerequisite-prompt].md` - [Why]

### After Running This

**Consider running:**
- `/prompts/[follow-up-prompt].md` - [Why]

### Alternative Prompts

- `/prompts/[alternative-prompt].md` - [When to use instead]

---

## 📚 Reference Materials

### Guidelines

- `/guidelines/[relevant].md`
- `/guidelines/design-tokens/[specific].md`

### Templates

- `/guidelines/_templates/[template].md`

### Example Files

- `/components/[example].tsx`
- `/styles/[example].css`

---

## 🐛 Error Handling

### Common Errors

**Error 1: [Error Description]**

**Symptoms:**
- Symptom 1
- Symptom 2

**Resolution:**
[How to fix]

**Prevention:**
[How to avoid]

---

**Error 2: [Error Description]**

[Same structure as Error 1]

---

## ⚙️ Configuration Options

### Optional Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `param1` | `string` | `default` | [What it does] |
| `param2` | `boolean` | `false` | [What it does] |

### Feature Flags

- `flag1`: [What it enables/disables]
- `flag2`: [What it enables/disables]

---

## 📊 Success Metrics

### How to Measure Success

**Quantitative:**
- Metric 1: [How to measure]
- Metric 2: [How to measure]

**Qualitative:**
- Does [expected outcome] occur?
- Is [quality bar] met?

### Validation Checklist

After execution, verify:
- [ ] All steps completed
- [ ] All files updated correctly
- [ ] No protected files modified
- [ ] Output summary provided
- [ ] Next actions clear

---

## 🔍 Troubleshooting

### Prompt Not Executing

**Possible causes:**
1. Cause 1 → Fix: [solution]
2. Cause 2 → Fix: [solution]

### Unexpected Results

**If results differ from expected:**
1. Check [requirement 1]
2. Verify [requirement 2]
3. Review [log/output]

### Partial Completion

**If prompt stops mid-execution:**
[How to resume or recover]

---

## 📝 Usage Examples

### Example 1: Basic Usage

```
User: "[trigger word]"

AI: [Reads this prompt file]
    [Executes all steps]
    [Provides summary]
```

### Example 2: With Parameters

```
User: "[trigger] with [parameter]"

AI: [Adjusted execution based on parameter]
```

### Example 3: In Workflow

```
User: "[previous prompt] then [this prompt]"

AI: [Executes previous prompt]
    [Then executes this prompt]
    [Provides combined summary]
```

---

## 🎯 Best Practices

### For Users

- ✅ Do: [Best practice 1]
- ✅ Do: [Best practice 2]
- ❌ Don't: [Anti-pattern 1]
- ❌ Don't: [Anti-pattern 2]

### For AI Execution

- Always [practice 1]
- Never [anti-pattern 1]
- Prefer [approach over alternative]

---

## 📅 Maintenance

### Review Cycle

**Frequency:** [Weekly | Monthly | As-needed]

**Review checklist:**
- [ ] Prompt still relevant?
- [ ] Steps still accurate?
- [ ] Output format still valid?
- [ ] Examples still work?
- [ ] Related prompts updated?

### Deprecation Policy

**If this prompt becomes obsolete:**
1. Mark status as "Deprecated"
2. Point to replacement: `/prompts/[new-prompt].md`
3. Archive after [timeframe]

---

## 📋 Change Log

### Version 1.0 (YYYY-MM-DD)
- Initial prompt creation
- [Change description]

### Version 1.1 (YYYY-MM-DD)
- [Update description]
- [Impact on execution]

---

**Maintained by:** [Team/Person]  
**Last Tested:** YYYY-MM-DD  
**Next Review:** YYYY-MM-DD
