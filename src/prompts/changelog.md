# Changelog — Update Project Changelog

**Type:** Utility  
**Created:** 2026-03-18  
**Status:** Active  
**Trigger Word:** `changelog`  
**Project:** Handcrafted Wines

---

## Prompt Purpose

**Objective:** Audit recent work and ensure `/CHANGELOG.md` is complete and current under `[Unreleased]` section.

**When to Use:** After completing work not yet documented in changelog, or at end of session.

---

## Workflow Steps

### Step 1: Identify Undocumented Work

1. Read `/CHANGELOG.md` — note what's already documented under `[Unreleased]`
2. Read `/tasks/task-list.md` — identify recently completed tasks (`[x]`) not in changelog
3. Scan recent modifications in `/components/`, `/pages/`, `/data/`, `/styles/`, `/guidelines/`, `/prompts/` for undocumented changes

**Handcrafted Wines-Specific:**
- Light mode implementation (6-wave completion)
- Accessibility task progress (21/28, 75%)
- Alt text audit completion
- New prompt files created
- Component updates
- Data file changes

### Step 2: Write Entries

Add entries under `[Unreleased]` using [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) categories:

- **Added** — New files, features, routes, components, guidelines, prompts
- **Changed** — Refactored code, updated configs, modified existing features
- **Fixed** — Bug fixes, broken imports, compliance fixes, accessibility improvements
- **Removed** — Deleted files, dead code, deprecated features
- **Deprecated** — Features marked for future removal

### Step 3: Entry Format Rules

- Each entry: 1-2 sentences maximum
- Bold the initiative name: `**[Initiative Name] — [Date]:** Description`
- Include file counts and metrics where relevant
- Never delete existing entries
- Follow SemVer 2.0.0 conventions

**Example Entries (Handcrafted Wines):**

```markdown
### [Unreleased]

#### Added
- **Prompt System Expansion — 2026-03-18:** Added 10 new comprehensive audit prompts (performance, responsive, style, routing, styles, webgl, tokens, audit orchestrator, changelog, cleanup guidelines) adapted to Handcrafted Wines project context. Total triggers expanded from 27 to 47.
- **Accessibility Alt Text — 2026-03-18:** Completed Task #15 "Fix Decorative Images Alt Text" — comprehensive audit of 100+ images across 24 files confirming 100% WCAG compliance.

#### Changed
- **PROMPT-TRIGGERS Registry — 2026-03-18:** Updated to version 4.0.0 with all new prompt triggers, workflow patterns, and Handcrafted Wines-specific documentation.

#### Fixed
- **Light Mode Implementation — 2026-03-17:** Completed all 6 waves (46/46 files) achieving perfect 100/100 health score for light mode compliance.
```

---

## Success Criteria

- [ ] All recent work documented under `[Unreleased]`
- [ ] Entries follow Keep a Changelog format
- [ ] No existing entries deleted
- [ ] Each entry is 1-2 sentences
- [ ] File counts and metrics included where relevant

---

## Handcrafted Wines Changelog Sections

**Common Categories:**
- Light mode implementation progress
- Accessibility task completion
- Prompt system expansion
- Component updates
- Data file changes
- Theme improvements
- Performance optimizations
- Bug fixes

**Recent Major Initiatives (for context):**
- Light Mode Implementation (6 waves, 100/100 health)
- Accessibility audit (21/28 tasks, 75% complete)
- Prompt system expansion (27 → 47 triggers)
- BEM compliance workflow
- Design token audit system

---

**Maintained by:** Handcrafted Wines Development Team  
**Last Updated:** 2026-03-18  
**Related File:** `/CHANGELOG.md`
