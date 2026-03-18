# Release — Version Bump and Release Workflow

**Type:** Utility  
**Created:** 2026-03-18  
**Status:** Active  
**Trigger Word:** `release`  
**Project:** Handcrafted Wines

---

## Prompt Purpose

**Objective:** Automate version bump workflow — move `[Unreleased]` entries in changelog to versioned section, update version numbers across project, prepare release notes.

**When to Use:** When ready to cut new release version.

---

## Input Required

User should provide:
1. **Version type** — `major`, `minor`, or `patch` (or specific version like `2.1.0`)

If not provided, determine from changelog entries:
- **Major:** Breaking changes, rebrand, architecture changes → `X.0.0`
- **Minor:** New features, new routes, new components → `x.Y.0`
- **Patch:** Bug fixes, documentation, compliance fixes → `x.y.Z`

---

## Workflow Steps

### Step 1: Determine Version Number

1. Read `/CHANGELOG.md` to find current latest version
2. Calculate new version based on user input or auto-detection
3. Confirm with user: "Releasing version **X.Y.Z** — proceed?"

### Step 2: Update CHANGELOG.md

1. Replace `## [Unreleased]` content with versioned section:

```markdown
## [X.Y.Z] — YYYY-MM-DD

### Added
- [entries from Unreleased]

### Changed
- [entries from Unreleased]

### Fixed
- [entries from Unreleased]

### Removed
- [entries from Unreleased]
```

2. Create new empty `## [Unreleased]` section at top
3. Update comparison links at bottom

### Step 3: Update Version References

Update version number in:
1. `/CHANGELOG.md` — done in Step 2
2. `/guidelines/Guidelines.md` — footer version reference (currently v8.1)
3. `/README.md` — version badge if present

### Step 4: Update Guidelines.md

1. Increment version in frontmatter
2. Update `Last Updated` date
3. Add Version History entry in Change Log section

### Step 5: Generate Release Summary

Output release summary:

```markdown
## Release v[X.Y.Z] — Handcrafted Wines — [Today's Date]

### Highlights
- [Top 3-5 changes from this release]

### Statistics
- **Added:** [N] entries
- **Changed:** [N] entries
- **Fixed:** [N] entries
- **Removed:** [N] entries

### Files Updated
- /CHANGELOG.md
- /guidelines/Guidelines.md
- /README.md

### Health Scores (if applicable)
- Light Mode: 100/100 ✅
- Dark Mode: 100/100 ✅
- Accessibility: [score]/100
- Overall: [score]/100
```

---

## Success Criteria

- [ ] `[Unreleased]` entries moved to versioned section
- [ ] New empty `[Unreleased]` section created
- [ ] Version number updated in all relevant files
- [ ] Guidelines.md version and date updated
- [ ] Release summary generated
- [ ] Version follows SemVer 2.0.0

---

## Handcrafted Wines Release Examples

### Major Release (X.0.0)
**Example:** v9.0.0 — Complete rebrand from KWV to Handcrafted Wines
- Breaking changes: All color tokens renamed
- Architecture: New design system
- Content: Complete content refactor

### Minor Release (x.Y.0)
**Example:** v8.2.0 — Wine Club feature added
- Added: Wine Club page, tiers, signup
- Changed: Navigation structure
- New routes: /wine-club, /wine-club/tiers

### Patch Release (x.y.Z)
**Example:** v8.1.1 — Accessibility fixes
- Fixed: 7 missing alt text violations
- Fixed: 3 touch target size issues
- Changed: Updated task list progress

---

**Maintained by:** Handcrafted Wines Development Team  
**Last Updated:** 2026-03-18  
**Related Prompts:** `changelog`, `status`
