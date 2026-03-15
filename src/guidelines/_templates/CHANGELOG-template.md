# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added
- [New feature or functionality]

### Changed
- [Changes to existing functionality]

### Deprecated
- [Soon-to-be removed features]

### Removed
- [Removed features]

### Fixed
- [Bug fixes]

### Security
- [Security vulnerability patches]

---

## [MAJOR.MINOR.PATCH] - YYYY-MM-DD

**Example:** `## [1.2.0] - 2024-03-15`

### Added
- [List new features with brief descriptions]
- [Use bullet points for each item]
- [Reference issue numbers if applicable: (#123)]

**Example:**
- Dark mode toggle with user preference persistence (#45)
- Wine club subscription management dashboard (#52)
- Product quick view modal on shop pages (#58)

---

### Changed
- [List changes to existing functionality]
- [Use **BREAKING:** prefix for breaking changes in major versions]

**Example:**
- Improved product search relevance algorithm
- Updated checkout flow to 3-step process (reduced from 5)
- **BREAKING:** API endpoints changed from `/api/v1/` to `/api/v2/` (see [Migration Guide](./MIGRATION.md))

---

### Deprecated
- [Features marked for removal in future versions]
- [Include what replaces it and when it will be removed]

**Example:**
- `getUserById()` function - Use `fetchUser(id)` instead (will be removed in v3.0.0)
- Legacy authentication tokens - Migrate to JWT tokens (support ends 2024-12-31)

---

### Removed
- [Features completely removed]
- [Use **BREAKING:** prefix for breaking changes]

**Example:**
- **BREAKING:** Dropped support for Node.js 14 and 16 (now requires 18+)
- **BREAKING:** Removed legacy PHP admin panel (replaced by React admin)
- Deprecated `oldAuthMethod` authentication option

---

### Fixed
- [Bug fixes]
- [Reference issue numbers]

**Example:**
- Cart items disappearing on page refresh (#89)
- Mobile header overlapping page content below 768px (#92)
- WCAG contrast ratio violation in button hover states (#101)
- Incorrect tax calculation for EU customers (#108)

---

### Security
- [Vulnerability patches]
- [Reference CVE numbers if applicable]

**Example:**
- Fixed SQL injection vulnerability in product search (CVE-2024-12345)
- Patched XSS vulnerability in user comments (#115)
- Updated dependencies to address security advisories

---

## Version Numbering Guide

**MAJOR.MINOR.PATCH** (e.g., 2.4.7)

- **MAJOR (2.x.x):** Breaking changes, incompatible API changes
- **MINOR (x.4.x):** New features, backwards-compatible
- **PATCH (x.x.7):** Bug fixes, backwards-compatible

**Examples:**

### Major Version (Breaking Changes)

```markdown
## [3.0.0] - 2024-03-15

### Added
- Complete redesign with new design system

### Changed
- **BREAKING:** Updated API endpoints from `/api/v1/` to `/api/v3/`
- **BREAKING:** Replaced `getUserById(id)` with `fetchUser(id, options)`

### Removed
- **BREAKING:** Dropped support for Node.js 14 and 16

### Migration Guide
See [MIGRATION.md](./MIGRATION.md) for detailed upgrade instructions.
```

### Minor Version (New Features)

```markdown
## [1.3.0] - 2024-03-15

### Added
- Dark mode toggle with persistent preferences
- Wine club subscription dashboard
- Product quick view modal

### Changed
- Improved product search algorithm
- Updated checkout flow to 3 steps

### Fixed
- Cart refresh bug
- Mobile navigation z-index issue
```

### Patch Version (Bug Fixes)

```markdown
## [2.1.1] - 2024-03-15

### Fixed
- Incorrect tax calculation for international orders
- Product image loading delay on slow connections
- Typo in order confirmation email template
```

---

## Pre-Release Versions

**Format:** `MAJOR.MINOR.PATCH-prerelease`

**Examples:** `1.0.0-alpha`, `1.0.0-beta.1`, `1.0.0-rc.1`

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

## Initial Development (0.x.y)

**Note:** Major version 0 is for initial development. Anything may change.

```markdown
## [0.2.0] - 2024-02-01

### Added
- Basic e-commerce functionality
- Product catalog
- Shopping cart

### Changed
- Refactored component structure

### Fixed
- Various bugs and improvements

## [0.1.0] - 2024-01-15

### Added
- Initial project setup
- Basic homepage
- Navigation structure
```

---

## Version Comparison Links (Optional)

Add links to compare versions on GitHub:

```markdown
[Unreleased]: https://github.com/user/repo/compare/v1.5.0...HEAD
[1.5.0]: https://github.com/user/repo/compare/v1.4.2...v1.5.0
[1.4.2]: https://github.com/user/repo/compare/v1.4.1...v1.4.2
[1.4.1]: https://github.com/user/repo/compare/v1.4.0...v1.4.1
```

---

## Change Entry Guidelines

### Start with a verb
- ✅ Added user authentication
- ✅ Fixed button alignment
- ❌ User authentication (missing verb)

### Be specific
- ✅ Added dark mode toggle in header with persistent storage
- ❌ New feature (too vague)

### Reference issues/PRs
- ✅ Fixed cart total calculation error (#142)
- ✅ Updated color palette to WCAG AA standards (PR #156)

### Group related changes
```markdown
### Changed
- **Design System Migration:**
  - Replaced hardcoded colors with CSS variables
  - Updated spacing to use design tokens
  - Migrated border radius to organic values
```

---

## Workflow

### During Development

Add changes to `[Unreleased]` section as you work:

```markdown
## [Unreleased]

### Added
- Wine age verification modal

### Fixed
- Cart total calculation bug
```

---

### On Release

1. **Determine version bump:**
   - Breaking changes? → MAJOR
   - New features? → MINOR
   - Bug fixes only? → PATCH

2. **Create version section:**
   ```markdown
   ## [1.5.0] - 2024-03-15
   
   ### Added
   - Wine age verification modal
   
   ### Fixed
   - Cart total calculation bug
   ```

3. **Clear [Unreleased] section:**
   ```markdown
   ## [Unreleased]
   
   (Empty - ready for next development cycle)
   ```

4. **Tag the release:**
   ```bash
   git tag -a v1.5.0 -m "Release version 1.5.0"
   git push origin v1.5.0
   ```

---

## Related Guidelines

- [Semantic Versioning](https://semver.org/)
- [Keep a Changelog](https://keepachangelog.com/)
- [Changelog Guidelines](/guidelines/changelog-guidelines.md)

---

**Maintained by:** [Project maintainer name/team]  
**Questions?** Reference [Changelog Guidelines](/guidelines/changelog-guidelines.md)
