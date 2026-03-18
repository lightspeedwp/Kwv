# Continue — Resume Next Task

**Type:** Utility Prompt (Reusable)
**Version:** 3.0
**Created:** 2026-03-18
**Status:** Production
**Trigger:** User types `continue`
**Project:** Handcrafted Wines
**Repeatable:** Yes — paste into any new session to resume work
**Companion:** Can run standalone OR after `/prompts/cleanup.md`

---

## Instructions

Pick up the next logical task and execute it. This prompt can be used:
- **Standalone** — just type `continue` to resume work
- **After cleanup** — cleanup runs first, then this kicks in automatically

**Environment Reminder:** You are working inside **Figma Make**. Do NOT tell the user to refresh their browser, clear cache, restart dev servers, or run terminal commands — none of that applies here. All work is done via the file editing tools available in this environment.

---

## Step 1 — Read Context

1. Read `/guidelines/Guidelines.md` — Handcrafted Wines brand, design system, rules
2. Read `/tasks/task-list.md` — find open tasks (`[ ]`)
3. If no open tasks there, check category task lists:
   - `/tasks/a11y-task-list.md` (accessibility - currently 21/28 complete)
   - `/tasks/light-mode-task-list.md` (100% complete ✅)
   - `/tasks/data-cleanup-task-list.md` (data file organization)

---

## Step 2 — Pick Next Task

Select the **first unchecked task** using this priority order:

1. **Build blockers** — anything breaking the build or deployment
2. **In-progress work** — tasks with partial completion noted
3. **High Priority items** — under "High Priority" headings
4. **Accessibility tasks** — WCAG compliance (goal: 100%)
5. **Icon migration** — Lucide → Phosphor conversion
6. **Next sequential step** — next item in current workflow

If the task references a specific prompt or guideline, **read it first** before starting.

---

## Step 3 — Execute

1. **Announce:** "Executing: [task name] from [source file]"
2. **Do the work** — follow the task description completely
3. **Handcrafted Wines Design System Compliance (non-negotiable):**
   
   **CSS Variables (Mandatory):**
   - ALL styling via `--twb-*` CSS variables from `/styles/`
   - Colors: `var(--twb-color-*)` only — zero hardcoded hex values
   - Spacing: `var(--twb-spacing-*)` or `clamp()` — zero hardcoded `px` or `rem`
   - Border radius: `var(--twb-radius-*)` (card, organic-1/2/3)
   - Shadows: `var(--twb-shadow-*)` (sm, md, lg, paper)
   
   **Typography:**
   - Font families: ONLY `var(--twb-font-primary)` (serif) and `var(--twb-font-secondary)` (sans)
   - Font sizes: Use `clamp()` for fluid scaling or `var(--twb-font-size-*)`
   - Headings: `var(--twb-font-primary)` (Playfair Display style)
   - Body: `var(--twb-font-secondary)` (Inter/Open Sans style)
   
   **Icons:**
   - `@phosphor-icons/react` ONLY — zero `lucide-react` (migration in progress)
   - Named imports: `import { ShoppingCart, User } from '@phosphor-icons/react'`
   - Size prop: `<Icon size={24} />` (16, 20, 24, 32)
   - Weight prop: `<Icon weight="regular|bold|fill" />`
   
   **Router:**
   - `react-router` ONLY — never `react-router-dom`
   - Use `Link` component for internal navigation
   - Use `useNavigate()` for programmatic navigation
   
   **Component Patterns:**
   - Hero: Use Hero template part with pattern variants
   - Header: Use Header template part (loads patterns by route)
   - Footer: Use Footer template part (main vs devtools)
   - Layout: All pages use Layout component (includes Header + Footer)
   
   **BEM Classes:**
   - Custom classes use `.twb-*` namespace
   - Tailwind utilities acceptable for layout (grid, flex, gap)
   
   **Accessibility:**
   - WCAG 2.1 AA minimum (4.5:1 contrast for text)
   - Touch targets: 44x44px minimum on mobile
   - Semantic HTML (section, article, nav, header, footer)
   - ARIA labels for icons and interactive elements
   - Keyboard navigation support
   
   **Hero Standards:**
   - Mobile height: `min-h-[calc(100dvh-90px)]` (accounts for 90px header)
   - Scroll arrow: Required on all heroes
   - Content padding: `pb-32` (clears scroll arrow)
   
4. **On completion:**
   - Mark the task `[x]` in its source file with today's date and brief note
   - Add concise CHANGELOG entry under `[Unreleased]` if notable
   - Add any follow-up tasks to `/tasks/task-list.md`

---

## Step 4 — Loop or Stop

- **Session has capacity?** → Go back to Step 2, pick next task
- **Session getting long or next task is unrelated?** → Stop and provide summary:

```
## Session Summary — [Today's Date]

### Completed
- [task name] — [brief result]

### Updated Files
- [list of key files modified]

### Next Up
- [what the next open task would be]

### Current Project Health
- Accessibility: 21/28 (75%)
- Light Mode: 46/46 (100%) ✅
- Icon Migration: [N]% Phosphor
```

---

## Rules

- **One task at a time** — finish before starting the next
- **Fix, don't just report** — if you find an issue, fix it inline
- **No files in root** — only config files + `README.md` + `CHANGELOG.md` + `ATTRIBUTIONS.md`
- **No hardcoded values** — 100% CSS variable compliance (`--twb-*`)
- **No new colors/fonts/tokens** — use only what's defined in CSS
- **Phosphor icons only** — Lucide being phased out (migration in progress)
- **Figma Make environment** — never suggest browser refresh, cache clear, or terminal commands
- **Protected files** — see `/guidelines/development/file-organization.md` for full list

---

## Handcrafted Wines Brand Context

**Brand:** Boutique family wine farm (established 1918)  
**Location:** Paarl Mountain, South Africa  
**Products:** Wines, spirits, cheese, gifts (17 products total)  
**Voice:** Warm, approachable, family-oriented (not corporate)  
**Aesthetic:** Hand-drawn, organic, warm and earthy

**Color Palette:**
- Paper (#f5efe4) - Parchment backgrounds
- Ink (#1e1a17) - Deep charcoal text
- Vine (#5c6b4f) - Vineyard green
- Clay (#b86b4b) - Terracotta accents
- Plum (#5a2d3b) - Wine-inspired CTAs
- Gold (#c8a96b) - Premium accents

**Current Health Scores:**
- Light Mode: 100/100 ✅
- Dark Mode: 100/100 ✅
- Accessibility: 21/28 (75% - in progress)
- Overall: Excellent health

---

**Prompt Location:** `/prompts/continue.md`  
**Category:** Utilities  
**Difficulty:** Easy  
**Repeatable:** Yes
