# Repository Documentation Standards

**Category:** Development Guidelines  
**Domain:** Documentation Standards  
**Version:** 1.0  
**Last Updated:** 2024-03-15  
**Status:** Active  
**Purpose:** Define standards for all documentation files to optimize for human readability and AI agent comprehension

---

## Overview

This guideline establishes the single source of truth for documentation standards across the repository. All documentation files (guidelines, prompts, reports, READMEs) must follow these standards to ensure:

1. **Human Readability** - Clear, scannable, actionable content
2. **AI Comprehension** - GitHub Copilot, Cursor, and other AI agents can parse and reason over documentation
3. **Consistency** - Uniform structure across all documentation types
4. **Discoverability** - Easy navigation and cross-referencing

**AI Agent Note:** This document uses semantic structure and self-contained sections. Each H2 section can be parsed independently for context.

---

## Markdown Hierarchy Standards

### Strict Heading Levels

**Rule:** Use a single H1 (`#`) for the document title, then sequential H2-H6 headings without skipping levels.

**Why:** AI agents parse documents in "chunks" based on heading hierarchy. Skipping levels (e.g., H2 → H4) breaks semantic understanding and causes context loss.

#### Correct Hierarchy

```markdown
# Document Title (H1 - Once per file)

## Major Section (H2)

### Subsection (H3)

#### Detail Section (H4)

##### Granular Detail (H5)

###### Finest Detail (H6)
```

#### Incorrect Hierarchy

```markdown
# Document Title

## Section

#### Subsection (WRONG - skipped H3)
```

### Heading Content Rules

**Active Voice:** Use action-oriented headings
- ✅ **Correct:** "Configure Authentication Tokens"
- ❌ **Incorrect:** "Authentication Token Configuration"

**Self-Describing:** Headings must convey complete meaning without parent context
- ✅ **Correct:** "API Rate Limiting Configuration"
- ❌ **Incorrect:** "Configuration" (too vague)

**Consistent Tense:** Use present tense for instructions
- ✅ **Correct:** "Install Dependencies"
- ❌ **Incorrect:** "Installing Dependencies"

---

## Semantic Clarity Standards

### Active Voice Requirement

**Rule:** Write in active voice to eliminate ambiguity and improve AI parsing.

**Examples:**

| Passive Voice (Avoid) | Active Voice (Use) |
|------------------------|---------------------|
| "The API key can be generated..." | "Generate the API key by..." |
| "Errors are logged to the console." | "The system logs errors to the console." |
| "The database should be backed up." | "Back up the database before updates." |

**Why:** Active voice explicitly identifies the actor, action, and object—critical for AI agents to understand causality and responsibility.

### Pronoun Disambiguation

**Rule:** Replace vague pronouns with specific nouns on first reference in each section.

**Examples:**

| Vague (Avoid) | Specific (Use) |
|---------------|----------------|
| "It stores user sessions." | "Redis stores user sessions." |
| "This handles authentication." | "The AuthService module handles authentication." |
| "They should be encrypted." | "API keys should be encrypted." |

**Pattern:** Use the specific noun on first mention, then pronouns are acceptable:
```markdown
The AuthService module handles user authentication. It validates credentials 
against the database and issues JWT tokens. The module also manages session 
refresh logic.
```

### Glossary for Ambiguous Terms

**Rule:** Define domain-specific or ambiguous terms inline on first use, or in a dedicated Glossary section.

**Inline Definition Pattern:**
```markdown
The component uses **lazy loading** (deferring resource loading until needed) 
to improve initial page load performance.
```

**Glossary Section Pattern:**
```markdown
## Glossary

**Lazy Loading:** Deferring the loading of resources (images, scripts, components) 
until they are needed, rather than loading everything upfront.

**SSR (Server-Side Rendering):** Rendering React components on the server and 
sending HTML to the client, rather than rendering in the browser.
```

**Required for:**
- Technical acronyms (SSR, JWT, API, CLI)
- Domain-specific jargon (tokens, hooks, hydration)
- Terms with multiple meanings in different contexts

---

## AI-Optimized Document Structure

### YAML Front Matter (Metadata)

**Rule:** Every documentation file must include YAML front matter for AI context.

**Required Fields:**
```yaml
---
title: "Exact document title"
category: "Guidelines | Prompt | Report | Task | Documentation"
domain: "Design Tokens | Architecture | Commerce | etc."
version: "SemVer (e.g., 1.0.0)"
last_updated: "YYYY-MM-DD"
status: "Active | Deprecated | Draft | Archived"
purpose: "Single sentence describing the file's purpose"
tags: ["tag1", "tag2", "tag3"]
related_files:
  - "/path/to/related/file1.md"
  - "/path/to/related/file2.md"
---
```

**Optional Fields:**
```yaml
author: "Team Name or Individual"
reviewers: ["name1", "name2"]
dependencies: ["file1.md", "file2.md"]
replaces: "/path/to/deprecated/file.md"
ai_context: "Additional context for AI agents parsing this document"
```

**Example:**
```yaml
---
title: "WordPress CSS Variable Standards"
category: "Guidelines"
domain: "Development"
version: "1.0.0"
last_updated: "2024-03-15"
status: "Active"
purpose: "Define mandatory CSS variable usage for WordPress theme.json alignment"
tags: ["css", "design-tokens", "wordpress", "mandatory"]
related_files:
  - "/guidelines/design-tokens/colors.md"
  - "/guidelines/design-tokens/dark-light-mode.md"
ai_context: "This is a MANDATORY guideline. All CSS must use variables, not hardcoded values."
---
```

**Why:** YAML front matter allows AI agents to:
- Understand document purpose without reading full content
- Identify related documents for cross-referencing
- Determine if content is current or deprecated
- Parse metadata programmatically

### Self-Contained Sections

**Rule:** Each H2 section must be understandable without reading other sections.

**Pattern:**
```markdown
## Configure Database Connection

The application connects to PostgreSQL using the DATABASE_URL environment variable.
This variable must be set before starting the server.

**Format:** `postgresql://user:password@host:port/database`

**Example:**
\`\`\`bash
export DATABASE_URL="postgresql://admin:secret@localhost:5432/myapp"
\`\`\`

**Validation:** The connection pool validates credentials on startup. If invalid,
the server exits with error code 1.
```

**Why Self-Contained Sections Matter:**
- AI agents parse documents in "chunks" (typically 500-2000 tokens)
- Sections often get processed separately from the full document
- Cross-references may not be loaded in the same context window

**Self-Containment Checklist:**
- [ ] Section explains its own purpose
- [ ] Key terms are defined or linked
- [ ] Examples are complete and runnable
- [ ] Prerequisites are stated
- [ ] Expected outcomes are described

---

## File Naming Conventions

### General Rules

**Pattern:** `{category}-{specific-topic}-{type}.md`

**Examples:**
- `design-tokens-colors.md` (Design tokens for colors)
- `checkout-flow-pattern.md` (Pattern for checkout flow)
- `api-authentication-guide.md` (Guide for API authentication)

**Rules:**
- Use lowercase with hyphens (kebab-case)
- No spaces or underscores
- Be specific but concise (max 50 characters)
- Avoid redundant words ("guideline" when in `/guidelines/` folder)

### Root-Level File Restrictions ⚠️ CRITICAL

**ONLY three .md files allowed in project root:**

```
/
├── ATTRIBUTIONS.md  ✅ ALLOWED
├── README.md        ✅ ALLOWED
├── CHANGELOG.md     ✅ ALLOWED
└── [any-other.md]   ❌ PROHIBITED
```

**Prohibited Examples:**
- ❌ `/WHATS-NEXT.md` → Use `/tasks/task-list.md`
- ❌ `/TODO.md` → Use `/tasks/task-list.md`
- ❌ `/NOTES.md` → Use `/docs/` folder
- ❌ `/PLAN.md` → Use `/tasks/{feature}-task-list.md`

**Why:** Keeps root clean, forces proper organization, improves AI processing.

**Complete file location rules:** See `/guidelines/development/file-organization.md`

### Category-Specific Naming

**Guidelines:** `{domain}-{topic}.md`
- Examples: `accessibility-wcag-compliance.md`, `typography-tokens.md`

**Prompts:** `{sequence}-{action}-{domain}.md`
- Examples: `01-visual-design-analysis.md`, `cleanup.md`

**Reports:** `{sequence}-{domain}-report.md`
- Examples: `01-visual-design-report.md`, `accessibility-audit-report.md`

**Tasks:** `{feature}-{scope}.md`
- Examples: `section-components.md`, `css-migration-task-list.md`

---

## Content Organization Patterns

### Documentation Template Structure

**All documentation files should follow this structure:**

```markdown
# Document Title

**Category:** [Type of document]  
**Domain:** [Specific area]  
**Version:** [SemVer]  
**Last Updated:** [Date]  
**Status:** [Active|Deprecated|Draft]  
**Purpose:** [One sentence summary]

---

## Overview

[2-3 paragraphs explaining the document's purpose, scope, and audience]

**AI Agent Note:** [Brief context for AI parsing this document]

---

## Section 1: [Major Topic]

[Content with clear headings, examples, and cross-references]

### Subsection 1.1

[Specific detail]

---

## Section 2: [Next Major Topic]

[Continue pattern...]

---

## Examples

[Real-world examples with complete code snippets]

---

## Related Guidelines

- [Link to related document 1]
- [Link to related document 2]

---

## Changelog

### Version X.Y.Z (YYYY-MM-DD)
- [Change description]

---

**Questions or Issues?**  
[Contact information or issue tracker link]
```

### Code Block Standards

**Rule:** All code blocks must include a language identifier for syntax highlighting.

**Correct:**
````markdown
```typescript
const greeting: string = "Hello, World!";
```
````

**Incorrect:**
````markdown
```
const greeting: string = "Hello, World!";
```
````

**Supported Languages:**
- `typescript`, `tsx`, `javascript`, `jsx`
- `css`, `scss`, `sass`
- `bash`, `shell`, `sh`
- `json`, `yaml`, `toml`
- `markdown`, `md`
- `sql`, `graphql`

**Multi-Language Examples:**

When showing multiple languages, use clear labels:

````markdown
**TypeScript:**
```typescript
interface User {
  id: string;
  name: string;
}
```

**JavaScript:**
```javascript
const user = {
  id: '123',
  name: 'John Doe'
};
```
````

---

## Cross-Reference Standards

### Internal Links

**Rule:** Use absolute paths from repository root for all internal links.

**Correct:**
```markdown
See [Color Tokens](/guidelines/design-tokens/colors.md) for palette details.
```

**Incorrect:**
```markdown
See [Color Tokens](../design-tokens/colors.md) for palette details.
See [Color Tokens](colors.md) for palette details.
```

**Why:** Absolute paths work regardless of where the file is moved or how AI agents navigate the repository structure.

### Link Anchor Pattern

**Rule:** When linking to specific sections, use lowercase kebab-case anchors.

**Example:**
```markdown
See [Border Width Tokens](/guidelines/design-tokens/borders.md#border-width-tokens)
```

**Auto-Generated Anchors:**
- Heading: `## Border Width Tokens`
- Anchor: `#border-width-tokens`

### External Links

**Rule:** Include descriptive text and the domain for external links.

**Correct:**
```markdown
Follow [Keep a Changelog](https://keepachangelog.com) standards for version history.
```

**Incorrect:**
```markdown
Follow [this](https://keepachangelog.com) for changelog format.
Click [here](https://keepachangelog.com).
```

---

## Table Standards

### Accessible Table Formatting

**Rule:** All tables must include a header row and use clear, concise column names.

**Example:**
```markdown
| Token Name | CSS Value | Usage | WCAG Ratio |
|------------|-----------|-------|------------|
| `--twb-color-bg-primary` | `#f5efe4` | Main background | 4.8:1 ✅ |
| `--twb-color-text-primary` | `#1e1a17` | Body text | 4.5:1 ✅ |
```

**Table Accessibility:**
- Use `|---|---|` alignment row for proper Markdown parsing
- Keep cell content concise (max 50 characters per cell)
- For complex data, use nested lists instead of tables
- Include units in headers (e.g., "Duration (ms)" not "Duration")

### Table vs. List Decision

**Use Tables When:**
- Comparing multiple attributes across items (e.g., color tokens with hex values, usage, and contrast ratios)
- Showing structured data with fixed columns

**Use Lists When:**
- Showing single-attribute collections (e.g., feature list)
- Describing sequential steps
- Content is hierarchical or nested

---

## List Formatting Standards

### Ordered vs. Unordered Lists

**Use Ordered Lists (`1.`, `2.`, `3.`) when:**
- Order matters (sequential steps)
- Referencing specific items by number

**Use Unordered Lists (`-`, `*`) when:**
- Order is arbitrary
- Showing features, options, or examples

### Nested Lists

**Rule:** Use consistent indentation (2 or 4 spaces) for nested lists.

**Example:**
```markdown
- Parent item
  - Child item 1
  - Child item 2
    - Grandchild item
- Another parent item
```

**AI Note:** Inconsistent indentation breaks Markdown parsing and AI chunk processing.

---

## Callout and Alert Patterns

### Standardized Callout Types

**Note (Informational):**
```markdown
**Note:** This is additional context that enhances understanding.
```

**Warning (Caution):**
```markdown
**⚠️ Warning:** This action cannot be undone. Back up data before proceeding.
```

**Important (Critical):**
```markdown
**🚨 IMPORTANT:** This is a mandatory requirement. Non-compliance will break the build.
```

**Tip (Best Practice):**
```markdown
**💡 Tip:** Use keyboard shortcuts (Cmd+K) to open the command palette faster.
```

**AI Agent Note:**
```markdown
**AI Agent Note:** This section contains context specifically for AI parsing.
```

**Deprecated:**
```markdown
**⚠️ DEPRECATED:** This pattern is deprecated as of v2.0. Use [New Pattern](/new-pattern.md) instead.
```

### Emoji Usage

**Rule:** Use emojis sparingly and only for standardized callouts.

**Approved Emojis:**
- ✅ Success, correct, approved
- ❌ Error, incorrect, prohibited
- ⚠️ Warning, caution
- 🚨 Critical, urgent
- 💡 Tip, best practice
- 📌 Pinned, important
- 🎯 Goal, objective
- 🔄 Process, workflow

**Avoid:** Decorative emojis that don't add semantic meaning.

---

## Version Control and Change Tracking

### File Version Headers

**Rule:** Include version information in the header metadata.

**Pattern:**
```markdown
**Version:** 1.2.0  
**Last Updated:** 2024-03-15  
**Status:** Active
```

**Status Values:**
- **Active** - Current and in use
- **Draft** - Work in progress, not finalized
- **Deprecated** - Replaced by newer version, will be removed
- **Archived** - Historical reference, no longer maintained

### Inline Change Tracking

**Rule:** For significant changes, add a changelog section at the end of the document.

**Pattern:**
```markdown
## Changelog

### Version 1.2.0 (2024-03-15)
- Added motion token definitions
- Updated border pattern examples
- Fixed typo in CSS variable naming

### Version 1.1.0 (2024-03-10)
- Added dark mode color tokens
- Expanded accessibility guidelines

### Version 1.0.0 (2024-03-01)
- Initial version
```

---

## AI-Specific Optimization Techniques

### Contextual Breadcrumbs

**Rule:** Include navigational context at the start of each file.

**Pattern:**
```markdown
**Hierarchy:** Guidelines > Design Tokens > Colors  
**Related:** [Spacing](/guidelines/design-tokens/spacing.md), [Shadows](/guidelines/design-tokens/shadows.md)
```

**Why:** AI agents often parse files individually without full repository context. Breadcrumbs provide orientation.

### Explicit Prerequisites

**Rule:** State prerequisites explicitly at the beginning of procedural sections.

**Pattern:**
```markdown
## Install Dependencies

**Prerequisites:**
- Node.js 18+ installed
- npm 9+ or Yarn 1.22+
- Git repository cloned locally

**Steps:**
1. Navigate to project root: `cd /path/to/project`
2. Install packages: `npm install`
3. Verify installation: `npm list`
```

### Expected Outcomes

**Rule:** Describe expected outcomes after completing steps.

**Pattern:**
```markdown
## Run Development Server

\`\`\`bash
npm run dev
\`\`\`

**Expected Output:**
\`\`\`
> vite dev

  VITE v4.3.9  ready in 523 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
\`\`\`

**Success Indicator:** Browser opens to `http://localhost:5173/` showing the homepage.
```

### Error Troubleshooting

**Rule:** Include common errors and solutions in procedural documentation.

**Pattern:**
```markdown
## Common Errors

### Error: "Module not found"

**Symptoms:**
\`\`\`
Error: Cannot find module './components/Button'
\`\`\`

**Cause:** File path is incorrect or file doesn't exist.

**Solution:**
1. Verify file exists: `ls src/components/Button.tsx`
2. Check import path matches file location
3. Ensure correct file extension (`.tsx` vs `.ts`)
```

---

## Accessibility for Documentation

### Screen Reader Optimization

**Rule:** Write descriptive link text, not "click here" or "read more."

**Correct:**
```markdown
See the [WordPress CSS Variables guideline](/guidelines/development/wordpress-css-variables.md)
```

**Incorrect:**
```markdown
Click [here](/guidelines/development/wordpress-css-variables.md) for CSS variables.
```

### Alternative Text for Images

**Rule:** All images must have descriptive alt text.

**Pattern:**
```markdown
![Component architecture diagram showing Layout wrapping Header, Main, and Footer components](./diagrams/component-architecture.png)
```

**For Complex Diagrams:** Provide a text description below the image:

```markdown
![System architecture diagram](./diagrams/architecture.png)

**Diagram Description:**
The architecture consists of three layers:
1. **Presentation Layer:** React components (Header, Navigation, Content)
2. **Business Logic Layer:** State management (Redux store, API services)
3. **Data Layer:** PostgreSQL database, Redis cache
```

---

## File Size and Performance

### Recommended File Sizes

**Guidelines:**
- **Guideline files:** 300-800 lines (max 1000)
- **Prompt files:** 100-300 lines (max 500)
- **Report files:** 500-1000 lines (max 1500)
- **README files:** 200-500 lines (max 800)

**Why:** AI models have token limits (typically 2000-8000 tokens per chunk). Larger files may be truncated or split, losing context.

### File Splitting Strategy

**When to Split:**
- File exceeds recommended maximum
- Document covers multiple distinct topics
- Logical sections can stand alone

**How to Split:**
```markdown
Before (Single File):
/guidelines/design-tokens.md (2000 lines)

After (Split):
/guidelines/design-tokens/colors.md
/guidelines/design-tokens/typography.md
/guidelines/design-tokens/spacing.md
/guidelines/design-tokens/shadows.md
```

**Index File Pattern:**
```markdown
# Design Tokens Overview

This directory contains comprehensive design token guidelines.

## Token Categories

- [Colors](/guidelines/design-tokens/colors.md)
- [Typography](/guidelines/design-tokens/typography.md)
- [Spacing](/guidelines/design-tokens/spacing.md)
- [Shadows](/guidelines/design-tokens/shadows.md)
```

---

## Validation and Quality Checks

### Pre-Commit Checklist

Before committing documentation:

- [ ] YAML front matter is complete and accurate
- [ ] Single H1 heading at the top
- [ ] No skipped heading levels (H2 → H4)
- [ ] All code blocks have language identifiers
- [ ] All internal links use absolute paths
- [ ] Tables have header rows
- [ ] Images have alt text
- [ ] Active voice used throughout
- [ ] Vague pronouns replaced with specific nouns
- [ ] File size is within recommended limits

### Automated Validation Tools

**Markdown Linting:**
```bash
# Install markdownlint
npm install -g markdownlint-cli

# Lint all markdown files
markdownlint '**/*.md' --ignore node_modules
```

**Link Checking:**
```bash
# Install markdown-link-check
npm install -g markdown-link-check

# Check for broken links
markdown-link-check README.md
```

---

## Related Guidelines

- [Changelog Standards](/guidelines/changelog-guidelines.md)
- [README Standards](/guidelines/readme-guidelines.md)
- [File Organization](/guidelines/development/file-organization.md)
- [JSDoc Standards](/guidelines/development/jsdoc-standards.md)

---

## Changelog

### Version 1.0.0 (2024-03-15)
- Initial repository standards guideline
- Defined Markdown hierarchy rules
- Established semantic clarity standards
- Created AI-optimized structure patterns
- Documented YAML front matter requirements
- Added cross-reference and table standards
- Included validation checklist

---

**Questions or Issues?**  
Contact the development team or reference the [Guidelines Index](/guidelines/INDEX.md).