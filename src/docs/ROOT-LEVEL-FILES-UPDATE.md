# Root-Level Files Update

**Date:** 2024-03-15  
**Version:** 1.0.0  
**Status:** Complete

---

## Summary

Updated project to enforce strict root-level file restrictions. Only three .md files are allowed in the project root, all must be uppercase.

---

## Changes Made

### 1. File Renaming

**Before:**
```
/Attributions.md  (lowercase 'A')
```

**After:**
```
/ATTRIBUTIONS.md  (uppercase, enhanced content)
```

**Enhanced Content:**
- Added proper sections (Components & Libraries, Images, Fonts, Icons)
- Documented shadcn/ui, Unsplash, Google Fonts, Lucide React
- Added contributors section
- Follows template structure

---

### 2. Protected Root-Level Files

**ONLY these three .md files are allowed in project root:**

1. **`/ATTRIBUTIONS.md`** (PROTECTED)
   - Component, library, and asset attributions
   - Documents all third-party dependencies
   - Follows template: `/guidelines/_templates/ATTRIBUTIONS-template.md`

2. **`/README.md`** (PROTECTED)
   - Project overview and setup instructions
   - Developer onboarding guide
   - Follows template: `/guidelines/_templates/README-template.md`

3. **`/CHANGELOG.md`** (PROTECTED)
   - Version history and release notes
   - Keep a Changelog format
   - Follows template: `/guidelines/_templates/CHANGELOG-template.md`

**All other .md files MUST be in designated folders:**
- Guidelines → `/guidelines/`
- Documentation → `/docs/`
- Reports → `/reports/`
- Tasks → `/tasks/`
- Prompts → `/prompts/`

---

### 3. Guidelines Updated

#### Updated: `/guidelines/Guidelines.md` (v7.0)

**Added new section at top:**

```markdown
## ⚠️ Protected Root-Level Files

**ONLY these three .md files are allowed in the project root:**

1. **`/ATTRIBUTIONS.md`** - Component, library, and asset attributions (PROTECTED)
2. **`/README.md`** - Project overview and setup instructions (PROTECTED)
3. **`/CHANGELOG.md`** - Version history and release notes (PROTECTED)

**All other .md files MUST be in designated folders:**
- Guidelines → `/guidelines/`
- Documentation → `/docs/`
- Reports → `/reports/`
- Tasks → `/tasks/`
- Prompts → `/prompts/`

**The `cleanup` trigger will:**
- Move important guidelines to `/guidelines/`
- Archive or delete other root-level .md files
- Ensure only the 3 protected files remain in root

**Reference:** `/guidelines/development/file-organization.md`
```

---

#### Updated: `/guidelines/development/file-organization.md` (v2.0)

**Enhanced root-level restrictions section:**

```markdown
## 🚨 ROOT-LEVEL FILE RESTRICTIONS

### ONLY THESE THREE .md FILES ALLOWED IN PROJECT ROOT:

```
/
├── ATTRIBUTIONS.md  ✅ ALLOWED (Component, library, and asset attributions)
├── README.md        ✅ ALLOWED (Project overview and setup instructions)
├── CHANGELOG.md     ✅ ALLOWED (Version history and release notes)
└── [any-other.md]   ❌ PROHIBITED
```

**These files are PROTECTED:**
- `/ATTRIBUTIONS.md` - Documents all third-party libraries, components, fonts, images used
- `/README.md` - Main project documentation, setup instructions, development guide
- `/CHANGELOG.md` - Version history following Keep a Changelog format

**Examples of PROHIBITED root-level files:**
- ❌ `/WHATS-NEXT.md` (use `/tasks/task-list.md` instead)
- ❌ `/TODO.md` (use `/tasks/task-list.md` instead)
- ❌ `/NOTES.md` (use `/docs/` folder instead)
- ❌ `/PLAN.md` (use `/tasks/{feature}-task-list.md` instead)
- ❌ `/REDESIGN-BRIEF.md` (use `/docs/` folder instead)
- ❌ `/Attributions.md` (lowercase 'A' - use `/ATTRIBUTIONS.md` instead)

**Why this restriction?**
- Keeps root clean and scannable
- Forces proper organization into `/tasks/`, `/docs/`, `/prompts/`, `/reports/`
- All tasks MUST go in `/tasks/task-list.md` or `/tasks/{feature}-task-list.md`
- AI agents process files better when organized in proper folders
- Consistency: all caps for root-level .md files (ATTRIBUTIONS, README, CHANGELOG)

**The `cleanup` trigger will:**
- Move important guidelines to `/guidelines/`
- Archive or delete unauthorized root-level .md files
- Ensure only these 3 protected files remain in root
```

---

## Cleanup Trigger Behavior

When `cleanup` trigger is executed, it will:

### 1. Scan Project Root
- Identify all `.md` files in `/`
- Check against allowed list (ATTRIBUTIONS, README, CHANGELOG)

### 2. Categorize Files

**Protected (Keep):**
- `/ATTRIBUTIONS.md` ✅
- `/README.md` ✅
- `/CHANGELOG.md` ✅

**Guideline Content (Move to `/guidelines/`):**
- Any files containing guideline/standards content
- Will be renamed and moved to appropriate `/guidelines/` subfolder

**Documentation (Move to `/docs/`):**
- Notes, plans, briefs, summaries
- Will be moved to `/docs/`

**Tasks (Move to `/tasks/`):**
- Task lists, todo files, what's next files
- Will be moved to `/tasks/`

**Obsolete (Archive or Delete):**
- Duplicate content
- Outdated files
- Empty files

### 3. Generate Report

**Output:** `/reports/cleanup-report.md`

**Includes:**
- Files kept in root (3 protected)
- Files moved (with new locations)
- Files archived/deleted
- Validation checklist

---

## File Contents

### `/ATTRIBUTIONS.md` (Enhanced)

```markdown
# Attributions

This project uses components and resources from various sources. All attributions are documented here.

---

## Components & Libraries

### shadcn/ui
- **Source:** [shadcn/ui](https://ui.shadcn.com/)
- **License:** [MIT License](https://github.com/shadcn-ui/ui/blob/main/LICENSE.md)
- **Usage:** UI component primitives (Accordion, Dialog, Tabs, etc.)

---

## Images & Photography

### Unsplash
- **Source:** [Unsplash](https://unsplash.com)
- **License:** [Unsplash License](https://unsplash.com/license)
- **Usage:** Photography throughout the site (hero images, product images, etc.)

---

## Fonts

### Google Fonts
- **Playfair Display** - Serif headings
- **Inter** - Sans-serif body text
- **License:** [SIL Open Font License](https://scripts.sil.org/OFL)

---

## Icons

### Lucide React
- **Source:** [Lucide Icons](https://lucide.dev/)
- **License:** [ISC License](https://github.com/lucide-icons/lucide/blob/main/LICENSE)
- **Usage:** Icon set throughout the application

---

## Code Snippets & Examples

*No external code snippets used beyond standard React/TypeScript patterns.*

---

## Contributors

- **Figma Make AI** - Initial development and design implementation
- **Design Team** - Hand-drawn aesthetic and brand guidelines
- **Content Team** - Copy and brand voice development

---

**Last Updated:** 2024-03-15
```

---

## Validation

### Root-Level Files Check

**Current state:**
```
/
├── ATTRIBUTIONS.md  ✅ PROTECTED (newly created, enhanced)
├── Attributions.md  ⚠️ OLD (system-protected, can't delete)
├── README.md        ✅ PROTECTED (existing)
├── CHANGELOG.md     ✅ PROTECTED (existing)
└── [other files]    (will be addressed by cleanup trigger)
```

**After cleanup trigger:**
```
/
├── ATTRIBUTIONS.md  ✅ PROTECTED
├── README.md        ✅ PROTECTED
├── CHANGELOG.md     ✅ PROTECTED
└── (all other .md files moved to appropriate folders)
```

**Note:** Old `/Attributions.md` is system-protected and cannot be deleted by tools. It will remain but new `/ATTRIBUTIONS.md` is the official version.

---

## Templates Available

### 1. ATTRIBUTIONS Template
**Location:** `/guidelines/_templates/ATTRIBUTIONS-template.md`

**Sections:**
- Components & Libraries
- Fonts
- Icons
- Images & Photography
- Code Snippets & Examples
- Contributors

---

### 2. README Template
**Location:** `/guidelines/_templates/README-template.md`

**Sections:**
- Project Overview
- Getting Started
- Development
- Deployment
- Contributing
- License

---

### 3. CHANGELOG Template
**Location:** `/guidelines/_templates/CHANGELOG-template.md`

**Format:** Keep a Changelog + Semantic Versioning

**Sections:**
- [Unreleased]
- [Version] - Date
  - Added
  - Changed
  - Deprecated
  - Removed
  - Fixed
  - Security

---

## Benefits

### 1. Clean Project Root
- Only 3 essential files in root
- Easy to scan and understand project structure
- No clutter from misc documentation

### 2. Proper Organization
- All guidelines in `/guidelines/`
- All documentation in `/docs/`
- All reports in `/reports/`
- All tasks in `/tasks/`
- All prompts in `/prompts/`

### 3. AI Processing
- Files in organized folders are easier for AI to process
- Clear folder structure improves context understanding
- Reduces file discovery confusion

### 4. Consistency
- All root .md files use UPPERCASE naming
- Clear distinction between protected and regular files
- Standardized structure across projects

---

## Next Steps

### Immediate
- [x] Created `/ATTRIBUTIONS.md` with enhanced content
- [x] Updated `/guidelines/Guidelines.md` (v7.0)
- [x] Updated `/guidelines/development/file-organization.md` (v2.0)

### When Ready
- [ ] Run `cleanup` trigger to organize root-level files
- [ ] Verify only 3 protected files remain in root
- [ ] Review cleanup report
- [ ] Update `/README.md` if needed
- [ ] Update `/CHANGELOG.md` with these changes

---

## Related Documentation

- **Main Guidelines:** `/guidelines/Guidelines.md` (v7.0)
- **File Organization:** `/guidelines/development/file-organization.md` (v2.0)
- **Trigger Registry:** `/guidelines/PROMPT-TRIGGERS.md`
- **Templates:**
  - `/guidelines/_templates/ATTRIBUTIONS-template.md`
  - `/guidelines/_templates/README-template.md`
  - `/guidelines/_templates/CHANGELOG-template.md`

---

## Changelog

### Version 1.0.0 (2024-03-15)
- Created `/ATTRIBUTIONS.md` with enhanced content
- Updated Guidelines.md with protected files section (v7.0)
- Updated file-organization.md with detailed restrictions (v2.0)
- Documented cleanup trigger behavior
- Created this summary document

---

**Status:** ✅ Complete

**Questions?** Reference `/guidelines/development/file-organization.md` for complete file creation standards.
