# Changelog Guidelines

**Category:** Development Guidelines  
**Domain:** Version Control & Documentation  
**Version:** 1.0.0  
**Last Updated:** 2024-03-15  
**Status:** Active  
**Purpose:** Define standards for maintaining project changelogs following Keep a Changelog and Semantic Versioning

---

## Overview

This guideline establishes the standard format and process for maintaining changelogs across all projects. Changelogs provide a curated, chronologically ordered list of notable changes for each version of a project.

**Key Standards:**
1. **Format:** [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) v1.0.0
2. **Versioning:** [Semantic Versioning](https://semver.org/) 2.0.0 (SemVer)
3. **Audience:** Both humans and AI agents

**AI Agent Note:** This document uses Keep a Changelog format for self-referential demonstration. The Changelog section at the end follows these exact standards.

---

## Keep a Changelog Format

### Core Principles

**Changelogs are for humans, not machines.**
- Write for project stakeholders: developers, users, contributors
- Use plain language, avoid jargon
- Focus on "what changed" not "how it changed"

**A changelog is not a git log.**
- Curate meaningful changes, not every commit
- Group related changes together
- Omit trivial changes (typos, formatting) unless user-facing

**Types of changes:**
- **Added** - New features
- **Changed** - Changes to existing functionality
- **Deprecated** - Soon-to-be removed features
- **Removed** - Removed features
- **Fixed** - Bug fixes
- **Security** - Vulnerability fixes

---

## Semantic Versioning (SemVer)

### Version Number Format

**Pattern:** `MAJOR.MINOR.PATCH`

**Example:** `2.4.7`
- **MAJOR:** 2
- **MINOR:** 4
- **PATCH:** 7

### Incrementing Rules

#### MAJOR Version (X.0.0)

**When to increment:**
- Breaking changes that are NOT backwards-compatible
- API changes that require user code updates
- Removal of deprecated features

**Examples:**
- Changing a function signature: `authenticate(user)` → `authenticate(user, options)`
- Removing a public API: Deleting `getUserById()` function
- Changing data structure: `{ id, name }` → `{ userId, fullName }`

**Migration Path Required:**
- Document all breaking changes
- Provide migration guide
- Deprecate first, remove in next major version (if possible)

#### MINOR Version (0.X.0)

**When to increment:**
- New features added in a backwards-compatible manner
- New functionality that doesn't break existing code
- Deprecation warnings for future breaking changes

**Examples:**
- Adding a new function: `getUserByEmail(email)`
- Adding optional parameters: `authenticate(user, options?)` (options is optional)
- Adding new configuration options with safe defaults

**Backwards Compatibility:**
- Existing code continues to work without changes
- New features are opt-in

#### PATCH Version (0.0.X)

**When to increment:**
- Backwards-compatible bug fixes
- Performance improvements with no API changes
- Documentation updates
- Internal refactoring with no external impact

**Examples:**
- Fixing a calculation error
- Correcting error messages
- Optimizing algorithm performance
- Updating README or inline comments

### Pre-Release Versions

**Pattern:** `MAJOR.MINOR.PATCH-prerelease+metadata`

**Examples:**
- `1.0.0-alpha` - Alpha release
- `1.0.0-alpha.1` - First alpha release
- `1.0.0-beta` - Beta release
- `1.0.0-rc.1` - Release candidate 1
- `1.0.0-beta+20240315` - Beta with build metadata

**Ordering:**
```
1.0.0-alpha < 1.0.0-alpha.1 < 1.0.0-beta < 1.0.0-rc.1 < 1.0.0
```

### Initial Development (0.X.Y)

**Rule:** Major version 0 is for initial development. Anything may change at any time.

**Pattern:**
- `0.1.0` - Initial development version
- `0.2.0` - Added major feature (still unstable)
- `1.0.0` - First stable public release

---

## Changelog File Structure

### File Location and Naming

**Standard Location:** `/CHANGELOG.md` (project root)  
**Alternative:** `/docs/CHANGELOG.md` (if using dedicated docs folder)

**Why root?** Changelogs are critical documentation that should be immediately visible.

### Required Sections

#### Header

```markdown
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
```

**Why this header?**
- Explains purpose to first-time readers
- References standards for credibility
- AI agents recognize these standards

#### [Unreleased] Section

**Always maintain an `[Unreleased]` section for in-progress changes.**

```markdown
## [Unreleased]

### Added
- New feature X
- New component Y

### Changed
- Updated API endpoint Z

### Fixed
- Bug in calculation logic
```

**Why?**
- Accumulates changes as you work
- Easy to convert to version on release
- Shows what's coming next

#### Version Sections

**Pattern:** `## [Version] - YYYY-MM-DD`

```markdown
## [1.2.0] - 2024-03-15

### Added
- Dark mode toggle component
- User preference persistence

### Changed
- Updated color palette to WCAG AA compliant values

### Fixed
- Header navigation overlap on mobile
```

**Date Format:** ISO 8601 (`YYYY-MM-DD`) for international clarity and machine parsing.

---

## Change Entry Format

### Writing Effective Entries

#### Rule 1: Start with a verb

**Correct:**
- Added user authentication
- Fixed button alignment issue
- Removed deprecated API endpoint

**Incorrect:**
- User authentication (missing verb)
- Button alignment (unclear action)
- Deprecated API endpoint removal (passive)

#### Rule 2: Be specific and actionable

**Correct:**
```markdown
### Added
- Dark mode toggle in header with persistent user preference storage
- Age verification modal for wine product pages (18+ requirement)
```

**Incorrect:**
```markdown
### Added
- New feature
- Modal
```

#### Rule 3: Group related changes

**Correct:**
```markdown
### Changed
- **Design System Migration:**
  - Replaced all hardcoded colors with CSS variables
  - Updated spacing to use design tokens
  - Migrated border radius to organic asymmetric values
```

**Incorrect:**
```markdown
### Changed
- Replaced colors
- Updated spacing
- Migrated radius
```

#### Rule 4: Reference issues/PRs when relevant

**Pattern:** `- Description (#issue-number)`

```markdown
### Fixed
- Cart total calculation error when applying discount codes (#142)
- Header z-index conflict with modal overlays (#156)
```

### Change Type Guidelines

#### Added

**Use for:**
- New features
- New pages or components
- New configuration options
- New dependencies

**Examples:**
```markdown
### Added
- Wine club subscription management page
- Product quick view modal
- CSV export for order history
- Integration with PayFlex payment gateway
```

#### Changed

**Use for:**
- Updates to existing functionality
- API modifications (backwards-compatible)
- UI/UX improvements
- Performance enhancements

**Examples:**
```markdown
### Changed
- Improved product search algorithm for better relevance
- Updated checkout flow to 3-step process (from 5 steps)
- Enhanced image optimization to reduce page load by 40%
```

#### Deprecated

**Use for:**
- Features marked for removal in future versions
- API endpoints to be retired
- Configuration options being phased out

**Pattern:** State what's deprecated and what replaces it.

```markdown
### Deprecated
- `getUserById()` function - Use `fetchUser(id)` instead (will be removed in v3.0.0)
- Legacy authentication tokens - Migrate to JWT tokens (support ends 2024-12-31)
```

#### Removed

**Use for:**
- Features completely removed
- Deleted API endpoints
- Dropped support for platforms/versions

**Examples:**
```markdown
### Removed
- Legacy PHP admin panel (fully replaced by React admin)
- Support for Node.js 14 (now requires Node.js 18+)
- Deprecated `oldAuthMethod` authentication option
```

#### Fixed

**Use for:**
- Bug fixes
- Error corrections
- Accessibility improvements
- Security patches (non-vulnerability)

**Examples:**
```markdown
### Fixed
- Cart items disappearing on page refresh
- WCAG contrast ratio violation in button hover states
- Mobile header overlapping page content below 768px
- Incorrect tax calculation for EU customers
```

#### Security

**Use for:**
- Vulnerability patches
- Security enhancements
- Exploits fixed

**Pattern:** Describe impact and fix without revealing exploit details.

```markdown
### Security
- Fixed SQL injection vulnerability in product search (CVE-2024-12345)
- Patched XSS vulnerability in user comments
- Updated dependencies to address security advisories
```

**Note:** For responsible disclosure, avoid detailed exploit descriptions in public changelogs.

---

## Update Workflow

### For Manual Updates

#### Step 1: Add to [Unreleased]

As you develop, add changes to the `[Unreleased]` section:

```markdown
## [Unreleased]

### Added
- Wine age verification modal

### Fixed
- Cart total calculation bug
```

#### Step 2: Determine Version Bump

**Ask these questions:**

1. **Breaking changes?** → Bump MAJOR
2. **New features (backwards-compatible)?** → Bump MINOR
3. **Bug fixes only?** → Bump PATCH

**Example Decision:**
- Current version: `1.4.2`
- Changes: Bug fix + new feature (backwards-compatible)
- New version: `1.5.0` (MINOR bump for new feature)

#### Step 3: Create Version Section

On release, convert `[Unreleased]` to a versioned section:

**Before:**
```markdown
## [Unreleased]

### Added
- Wine age verification modal

### Fixed
- Cart total calculation bug
```

**After:**
```markdown
## [Unreleased]

## [1.5.0] - 2024-03-15

### Added
- Wine age verification modal

### Fixed
- Cart total calculation bug
```

#### Step 4: Update Version Links (Optional)

At the bottom of the changelog, maintain version comparison links:

```markdown
[Unreleased]: https://github.com/user/repo/compare/v1.5.0...HEAD
[1.5.0]: https://github.com/user/repo/compare/v1.4.2...v1.5.0
[1.4.2]: https://github.com/user/repo/compare/v1.4.1...v1.4.2
```

### For AI-Assisted Updates

#### AI Prompt Template

```markdown
Review the following git commits and update the CHANGELOG.md:

Commits:
- feat: Add wine age verification modal
- fix: Correct cart total calculation
- docs: Update README installation steps

Current version: 1.4.2

Instructions:
1. Determine appropriate version bump (MAJOR/MINOR/PATCH)
2. Add entries to [Unreleased] section grouped by type
3. Use active voice and specific descriptions
4. Reference commit hashes if relevant
```

#### AI Review Checklist

After AI generates changelog entries:

- [ ] Version bump is correct (MAJOR/MINOR/PATCH)
- [ ] Entries are grouped by type (Added, Changed, Fixed, etc.)
- [ ] Descriptions are clear and user-focused
- [ ] Date format is ISO 8601 (YYYY-MM-DD)
- [ ] No redundant or trivial entries

---

## Examples

### Example 1: Minor Version Release

```markdown
## [1.3.0] - 2024-03-15

### Added
- Dark mode toggle with user preference persistence
- Wine club subscription management dashboard
- Product quick view modal on shop pages

### Changed
- Improved product search relevance algorithm
- Updated checkout flow to 3-step process (reduced from 5)

### Fixed
- Cart items disappearing on page refresh
- Mobile header z-index conflict with modals
- WCAG contrast violations in button hover states

### Security
- Updated dependencies to patch known vulnerabilities
```

### Example 2: Patch Version Release

```markdown
## [2.1.1] - 2024-03-15

### Fixed
- Incorrect tax calculation for international orders
- Product image loading delay on slow connections
- Typo in order confirmation email template
```

### Example 3: Major Version Release (Breaking Changes)

```markdown
## [3.0.0] - 2024-03-15

### Added
- Complete redesign with hand-drawn aesthetic
- New WordPress-aligned CSS variable system
- Component library with 60+ reusable elements

### Changed
- **BREAKING:** Updated API endpoints from `/api/v1/` to `/api/v3/`
- **BREAKING:** Replaced `getUserById(id)` with `fetchUser(id, options)`
- Migrated from Create React App to Vite
- Upgraded to React 18 and React Router v6

### Removed
- **BREAKING:** Dropped support for Node.js 14 and 16 (now requires 18+)
- **BREAKING:** Removed legacy authentication tokens (JWT only)
- Legacy PHP admin panel (replaced by React admin)

### Migration Guide
See [MIGRATION.md](./MIGRATION.md) for detailed upgrade instructions.
```

### Example 4: Pre-Release Version

```markdown
## [2.0.0-beta.1] - 2024-03-15

### Added
- Beta release of new design system
- Experimental dark mode support

### Known Issues
- Dark mode may have contrast issues on some components
- Performance optimization pending for mobile

### Next Steps
- Full accessibility audit
- Cross-browser testing
- Performance optimization
```

---

## Anti-Patterns (What NOT to Do)

### ❌ Don't: Use git log as changelog

**Bad:**
```markdown
## Changes
- Updated file.tsx
- Fixed typo
- Merge branch 'develop'
- WIP: testing feature
```

**Why:** Not user-focused, includes noise, lacks context.

**Good:**
```markdown
### Fixed
- Product search now returns accurate results for partial matches
```

### ❌ Don't: Skip version sections

**Bad:**
```markdown
## [1.3.0] - 2024-03-15
(changes)

## [1.0.0] - 2024-01-01
(changes)
```

**Why:** Missing v1.1.0 and v1.2.0 creates confusion.

**Good:** Include all versions chronologically, even if brief.

### ❌ Don't: Use vague descriptions

**Bad:**
```markdown
### Changed
- Updated things
- Made improvements
- Fixed stuff
```

**Good:**
```markdown
### Changed
- Improved product search algorithm to prioritize exact matches
- Enhanced image loading to reduce initial page load by 35%
- Updated color contrast to meet WCAG AA standards
```

### ❌ Don't: Mix change types

**Bad:**
```markdown
### Added
- New feature X
- Fixed bug Y (WRONG - this is a fix)
- Removed feature Z (WRONG - this is removal)
```

**Good:** Use the correct category for each change type.

---

## Automation and Tools

### Changelog Generation Tools

**[standard-version](https://github.com/conventional-changelog/standard-version)**
- Automates versioning and changelog generation
- Works with Conventional Commits

**[semantic-release](https://github.com/semantic-release/semantic-release)**
- Fully automated version management
- Publishes to npm, GitHub releases

**[auto-changelog](https://github.com/CookPete/auto-changelog)**
- Generates changelog from git history
- Customizable templates

### Manual vs. Automated

**Use Manual Updates When:**
- Changes need curating (not all commits are user-facing)
- Providing context beyond commit messages
- Writing for non-technical audience

**Use Automated Tools When:**
- Following strict commit message conventions
- High commit volume
- Consistent changelog format required

**Hybrid Approach (Recommended):**
1. Generate draft from commits
2. Review and curate entries
3. Add context and grouping
4. Publish finalized version

---

## Changelog for Different Audiences

### Open Source Projects

**Include:**
- Contributor credits: `- Added X feature (thanks @username)`
- Breaking changes prominently
- Migration guides for major versions
- Security advisories

**Example:**
```markdown
## [2.0.0] - 2024-03-15

### Added
- Dark mode support (@johndoe, #123)

### Changed
- **BREAKING:** API now requires authentication tokens
  - See [Migration Guide](./MIGRATION.md) for upgrade steps

### Security
- Fixed XSS vulnerability in comment system (CVE-2024-12345)
```

### Internal/Private Projects

**Include:**
- Internal ticket references: `- Fixed login bug (JIRA-456)`
- Team-specific context
- Deployment notes

**Example:**
```markdown
## [1.5.0] - 2024-03-15

### Added
- Admin dashboard for customer support team (JIRA-789)

### Deployment Notes
- Run database migration before deploying: `npm run migrate`
```

### Client-Facing Products

**Include:**
- User-friendly language (no jargon)
- Impact description (what users will notice)
- Feature highlights

**Example:**
```markdown
## [1.4.0] - 2024-03-15

### What's New
- **Faster Checkout:** Reduced checkout steps from 5 to 3 for quicker purchases
- **Dark Mode:** Toggle dark mode in the header to reduce eye strain

### Improvements
- Product search now finds items faster and more accurately

### Bug Fixes
- Shopping cart items no longer disappear after refreshing the page
```

---

## Related Guidelines

- [Repository Standards](/guidelines/repository-standards.md)
- [README Guidelines](/guidelines/readme-guidelines.md)
- [Semantic Versioning](https://semver.org/)
- [Keep a Changelog](https://keepachangelog.com/)

---

## Changelog

### Version 1.0.0 (2024-03-15)
- Initial changelog guideline created
- Defined Keep a Changelog format requirements
- Documented Semantic Versioning rules
- Established change entry patterns
- Added workflow for manual and AI-assisted updates
- Included examples and anti-patterns

---

**Questions or Issues?**  
Contact the development team or reference the [Guidelines Index](/guidelines/INDEX.md).
