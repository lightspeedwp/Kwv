# Release Version Prompt

**Trigger:** `release`  
**Version:** 1.0.0  
**Last Updated:** 2024-03-15  
**Purpose:** Automate version bump workflow: move [Unreleased] entries to versioned section, update CHANGELOG.md, and recommend git tags

---

## Mission

Streamline the release process by automating CHANGELOG.md updates following Keep a Changelog and Semantic Versioning standards. Move [Unreleased] content to a new versioned section, calculate version number, add ISO 8601 date, update comparison links, and recommend git tag creation.

---

## Prerequisites

- `/CHANGELOG.md` must exist
- `/CHANGELOG.md` must have `[Unreleased]` section with content
- `/guidelines/changelog-guidelines.md` - Changelog standards reference

---

## Workflow

### Step 1: Read Current State

Load `/CHANGELOG.md` and analyze:
- Current version number (top versioned section)
- `[Unreleased]` section content
- Changes by type (Added, Changed, Deprecated, Removed, Fixed, Security)

**Example current version:**
```markdown
## [1.4.2] - 2024-03-10
```

---

### Step 2: Analyze Changes

Review `[Unreleased]` section and determine change types present:

**Breaking changes?** (MAJOR bump indicators)
- Changes in `### Changed` with **BREAKING:** prefix
- Changes in `### Removed`
- API incompatibilities

**New features?** (MINOR bump indicators)
- Changes in `### Added`
- Backwards-compatible enhancements

**Bug fixes only?** (PATCH bump indicators)
- Changes in `### Fixed`
- No `### Added` or breaking changes

---

### Step 3: Prompt User for Version Decision

Display current version and recommend bump type:

```
Current version: 1.4.2

[Unreleased] section contains:
- Added: 3 items
- Changed: 2 items (0 breaking)
- Fixed: 5 items

Recommended version bump: MINOR (new features present)
Suggested new version: 1.5.0

Choose version bump:
1. MAJOR (breaking changes) → 2.0.0
2. MINOR (new features) → 1.5.0 [RECOMMENDED]
3. PATCH (bug fixes) → 1.4.3
4. Custom version: _______

Selection: _______
```

**User selects option 1-4.**

---

### Step 4: Calculate New Version

Based on selection:

**Current:** `1.4.2`

**MAJOR bump:** `2.0.0`
- Increment MAJOR
- Reset MINOR and PATCH to 0

**MINOR bump:** `1.5.0`
- Keep MAJOR
- Increment MINOR
- Reset PATCH to 0

**PATCH bump:** `1.4.3`
- Keep MAJOR and MINOR
- Increment PATCH

**Custom:** User-provided version (validate SemVer format)

---

### Step 5: Update CHANGELOG.md

#### 5.1 Create New Version Section

Move `[Unreleased]` content to new versioned section:

**Before:**
```markdown
## [Unreleased]

### Added
- Dark mode toggle component
- User preference persistence

### Fixed
- Cart refresh bug
```

**After:**
```markdown
## [Unreleased]

## [1.5.0] - 2024-03-15

### Added
- Dark mode toggle component
- User preference persistence

### Fixed
- Cart refresh bug
```

---

#### 5.2 Add ISO 8601 Date

Use current date in `YYYY-MM-DD` format:
```markdown
## [1.5.0] - 2024-03-15
```

---

#### 5.3 Update Version Comparison Links

At bottom of CHANGELOG.md, update comparison links:

**Before:**
```markdown
[Unreleased]: https://github.com/user/repo/compare/v1.4.2...HEAD
[1.4.2]: https://github.com/user/repo/compare/v1.4.1...v1.4.2
```

**After:**
```markdown
[Unreleased]: https://github.com/user/repo/compare/v1.5.0...HEAD
[1.5.0]: https://github.com/user/repo/compare/v1.4.2...v1.5.0
[1.4.2]: https://github.com/user/repo/compare/v1.4.1...v1.4.2
```

---

#### 5.4 Clear [Unreleased] Section

Reset `[Unreleased]` for next development cycle:

```markdown
## [Unreleased]

### Added

### Changed

### Deprecated

### Removed

### Fixed

### Security
```

---

### Step 6: Recommend Git Tag

Provide git commands for tagging release:

```bash
# Create annotated tag
git tag -a v1.5.0 -m "Release version 1.5.0"

# Push tag to remote
git push origin v1.5.0

# Verify tag
git tag -l
```

**Optional:** Recommend GitHub Release creation with changelog content.

---

### Step 7: Update package.json (if exists)

If `package.json` exists, update version field:

**Before:**
```json
{
  "version": "1.4.2"
}
```

**After:**
```json
{
  "version": "1.5.0"
}
```

---

## Success Criteria

- [ ] Current version identified from CHANGELOG.md
- [ ] [Unreleased] content analyzed
- [ ] User prompted for version bump decision
- [ ] New version calculated correctly (SemVer compliant)
- [ ] CHANGELOG.md updated:
  - [ ] [Unreleased] content moved to new versioned section
  - [ ] ISO 8601 date added
  - [ ] Version comparison links updated
  - [ ] [Unreleased] section cleared
- [ ] Git tag commands provided
- [ ] package.json updated (if exists)

---

## Outputs

- **Updated:** `/CHANGELOG.md`
- **Updated:** `/package.json` (if exists)
- **Generated:** Git tag commands (console output)

---

## Example Workflow

### Input State

**Current CHANGELOG.md:**
```markdown
## [Unreleased]

### Added
- Dark mode toggle with persistent preferences
- Product quick view modal

### Changed
- Improved search algorithm

### Fixed
- Cart total calculation error
- Mobile navigation z-index issue

## [1.4.2] - 2024-03-10

### Fixed
- Button alignment bug
```

---

### User Interaction

```
Current version: 1.4.2

[Unreleased] section contains:
- Added: 2 items (new features)
- Changed: 1 item (enhancement)
- Fixed: 2 items (bug fixes)

Recommended version bump: MINOR
Suggested new version: 1.5.0

Choose version bump:
1. MAJOR → 2.0.0
2. MINOR → 1.5.0 [RECOMMENDED]
3. PATCH → 1.4.3
4. Custom: _______

User selects: 2
```

---

### Output State

**Updated CHANGELOG.md:**
```markdown
## [Unreleased]

## [1.5.0] - 2024-03-15

### Added
- Dark mode toggle with persistent preferences
- Product quick view modal

### Changed
- Improved search algorithm

### Fixed
- Cart total calculation error
- Mobile navigation z-index issue

## [1.4.2] - 2024-03-10

### Fixed
- Button alignment bug

[Unreleased]: https://github.com/user/repo/compare/v1.5.0...HEAD
[1.5.0]: https://github.com/user/repo/compare/v1.4.2...v1.5.0
[1.4.2]: https://github.com/user/repo/compare/v1.4.1...v1.4.2
```

**Console Output:**
```bash
✅ CHANGELOG.md updated successfully

Version: 1.5.0
Date: 2024-03-15

Git tag commands:
  git tag -a v1.5.0 -m "Release version 1.5.0"
  git push origin v1.5.0

Next steps:
1. Review CHANGELOG.md changes
2. Commit changes: git commit -m "chore: Release v1.5.0"
3. Create git tag (commands above)
4. Push to remote
5. Create GitHub Release (optional)
```

---

## Error Handling

### Empty [Unreleased] Section

**Error:**
```
Cannot release: [Unreleased] section is empty.

Add changes to [Unreleased] before running release:
- Use `changelog` prompt to populate from git commits
- Manually add entries following Keep a Changelog format
```

**Resolution:** Populate [Unreleased] section first.

---

### Invalid Version Format

**Error:**
```
Custom version "1.5" is invalid.

Semantic Versioning requires MAJOR.MINOR.PATCH format.
Examples: 1.5.0, 2.0.0, 1.4.3

Please enter valid version: _______
```

**Resolution:** Prompt user for valid SemVer format.

---

## Follow-Up Actions

After release:
1. Review updated CHANGELOG.md
2. Commit changes: `git commit -m "chore: Release vX.Y.Z"`
3. Create and push git tag
4. Create GitHub Release (copy changelog content)
5. Announce release (if applicable)
6. Run `status` to verify project state

---

## Related Prompts

- `changelog` - Populate [Unreleased] from git commits
- `status` - Check project status post-release

---

## Related Documentation

- [Changelog Guidelines](/guidelines/changelog-guidelines.md)
- [Semantic Versioning](https://semver.org/)
- [Keep a Changelog](https://keepachangelog.com/)

---

## Changelog

### Version 1.0.0 (2024-03-15)
- Initial release prompt
- Automates version bump workflow
- Follows Keep a Changelog and SemVer standards
- Updates comparison links
- Provides git tag commands
