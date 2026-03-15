# Hand-drawn redesign system audit and prompt-suite polish

## Executive summary

- **Value:** The repo already contains a strong foundation (design tokens, decorative components, demo-content schema, and a task-driven workflow), but the *prompt suite* and parts of the *implementation* have drifted out of sync; tightening orchestration + data-driven content will make the redesign scalable and easier to maintain. fileciteturn96file0
- **Risks:** Dark-mode behaviour is currently inconsistent because the toggle uses a `.dark` class, while many UI styles rely on `dark:` utilities that appear to follow system colour-scheme rather than the class toggle; plus several pages/components still contain placeholder/KWV-era copy and mock commerce logic. fileciteturn62file0turn58file0turn73file0turn78file0
- **Next step:** Replace `00-master-orchestrator.md` and `01-visual-design-analysis.md` with the revised versions below, then execute the new “data-first content migration” track so *every* page renders from `src/data/*` (with size-governance rules) and the demo pages become fully data-powered. fileciteturn2file0turn3file0turn4file0turn96file0

## Repository reconnaissance and drift audit

The project is a Vite + React app using React Router “data mode” (`createBrowserRouter`) and a component-driven design system. fileciteturn17file0turn77file0

A few key subsystems are already in place:

- **Routing map is centralised** in `src/routes.tsx` and includes the demo pages `/handdrawn-demo` and `/handdrawn-demo/landing-page`. fileciteturn77file0
- **Design tokens and dual themes exist** via CSS variables (light + dark files) and a theme toggle that persists preference. fileciteturn54file0turn55file0turn62file0
- **Content data is partially externalised** already: `farmStory.ts`, `products.ts`, and `demoContent.ts` establish the intended “content lives in data” direction. fileciteturn8file0turn5file0turn4file0
- **A max width of 1440px is already supported** via the `Container` component (`variant="site"`). fileciteturn56file0turn45file0

Where the repo has drifted (and why it matters for your prompt-suite):

- **Brand naming is inconsistent across prompts/guidelines:** many prompts still reference “The Wire Brand”, while the app and task list are “Handcrafted Wines”. This creates ambiguity for any orchestrator-based agent because it no longer knows which “truth” to follow. fileciteturn97file0turn2file0turn87file0
- **Prompt inputs reference missing/old paths** like `/imports/pasted_text/*` and `/pages/*` rather than the actual `src/pages/*` structure. That makes prompts brittle and forces manual correction every run. fileciteturn87file0turn88file0turn49file0
- **Docs promise features that aren’t actually implemented as described:** for example demo docs refer to “WebGL particle effects”, but the current landing page hero uses a 2D canvas particle routine (and doesn’t obviously implement reduced-motion handling, despite documentation claims). fileciteturn53file0turn49file0turn50file0
- **Dark mode is “declared future” in older guidelines but actively present in code**, and the implementation approach is internally inconsistent (details in the “Core issues” section). fileciteturn63file0turn55file0turn62file0
- **Commerce and search are still partly mocked/legacy:** MiniCart uses hardcoded items (“Belt”, “Album”, “Beanie”) and hardcoded hex colours; global search results are KWV-era placeholder copy; some shop interactions still use TODO/alert patterns. fileciteturn73file0turn78file0turn67file0

Figma note: the Figma connector tooling is not currently able to introspect the “Make” variant of the provided file link; the repo itself includes a corresponding “design” URL, but the connector still reports it as a Make file. So this audit leans on the repo’s token system, demo pages, and guideline documents as the authoritative design intent. fileciteturn18file0turn97file0

## Revised master orchestrator prompt

The current `00-master-orchestrator.md` is structurally useful but out-of-date: it references a sequential report pipeline (01–10) that no longer matches the actual prompt files present (e.g., “09-performance-analysis” doesn’t exist, while `09-accessibility-audit.md` does), and it doesn’t integrate the **task-driven workflow** (`cleanup`, `continue`, `task-list.md`) that the repo now uses. fileciteturn2file0turn96file0turn97file0

Below is a **drop-in replacement** for `src/prompts/00-master-orchestrator.md` that:

- Treats **Handcrafted Wines** as the product brand, while acknowledging `twb-*` is the token namespace already embedded in the codebase. fileciteturn97file0turn55file0
- Auto-discovers the prompt suite that *actually exists* in `src/prompts/`. fileciteturn86file0
- Adds a dedicated track for: **data-driven content extraction**, **dark/light accessibility correctness**, **routing stability**, **demo-page completion**, and **WebGL progressive enhancement** (your explicit requirements). fileciteturn4file0turn77file0turn62file0

```md
# Master Orchestrator — Handcrafted Wines Hand‑Drawn Redesign

## Purpose

You are the redesign orchestrator for the **Handcrafted Wines** web app (Vite + React + React Router), with a hand‑drawn editorial style, dual light/dark themes, and a data‑driven content architecture.

Your job is to:
1) scan the repo for current reality (pages, components, data, tokens, guidelines, tasks),
2) identify gaps vs. the intended hand‑drawn design system,
3) produce actionable outputs: updated prompts, audit reports, and implementation task breakdowns.

> Notes:
> - The product brand is **Handcrafted Wines**.
> - The existing design‑token namespace uses `twb-*` variables — treat this as an internal token prefix, not a brand name.
> - This is a SPA. Routing stability + correct Link usage is mandatory.

## Inputs to scan (required)

Scan these directories top‑down and reconcile conflicts:

- `src/prompts/*` (all prompts; treat them as modules)
- `src/guidelines/*` (all guidelines; treat as constraints)
- `src/tasks/*` (including `src/tasks/task-list.md`)
- `src/reports/*` (if present; do not assume complete)
- `src/data/*` (canonical content style + schema)
- `src/pages/*` and `src/components/*` (where content still lives in code)
- `src/styles/*` and `src/index.css` (token + theme system)
- `src/routes.tsx` (routing map, aliases, fallback behaviour)
- `package.json` and build config (Vite, deployments, deps)

If any prompt/guideline references paths that do not exist (e.g. `/pages` vs `src/pages`), treat that as drift and propose a fix.

## Non‑negotiable requirements (must enforce)

### Accessibility
- Both themes must be accessible.
- Light mode: light backgrounds + dark foregrounds for most text.
- Dark mode: dark backgrounds + light foregrounds for most text.
- Full keyboard navigation and visible focus states.
- Prefer semantic HTML and correct ARIA only when needed.

### Theming correctness
- Theme toggle must reliably flip the whole UI (not only variables, not only a subset of components).
- No mixed strategy where some UI follows OS theme and other UI follows manual toggle.

### Layout system
- The site should look best at **max width 1440px** (container.site).
- Card grids should add columns appropriately at wider layouts (within the 1440 container).
- Ensure consistent use of the shared Container component rather than ad‑hoc max‑width utility classes.

### Data‑driven content
- Break out **all page copy and structured content** from components/pages into `src/data/*`.
- Templates/pages must load from data files (prefer route loaders + `useLoaderData`).
- Create governance so data files don’t grow without bounds.

### Demo pages
- `/handdrawn-demo/` must function as a showcase page with:
  - a hero using editorial typography, SVG accents, and a WebGL (or progressive) background,
  - as many hand‑drawn patterns/components as practical,
  - generic demo content fed by data files.
- `/handdrawn-demo/landing-page/` must be marketing‑friendly and data‑powered.

### Quality concerns to audit and fix
- Routing issues (404s, direct navigation on static hosting, URL alias drift)
- Layout problems (broken design, missing components, inconsistent containers)
- Functionality issues (filters, cart, search, add-to-cart flows)
- Dark mode issues (elements not switching properly)
- Accessibility concerns (focus states, ARIA labels, landmarks)
- Performance issues (slow rendering, heavy assets, animation budgets)

## Orchestration strategy

### Phase A — Reality scan (output: “System Reality Map”)
Produce a short map of:
- Route map + notable aliases and wildcard behaviour
- Theme system: variables, toggle mechanism, where `dark:` utilities appear
- Data inventory: what’s already data‑driven vs. still hardcoded
- Demo pages: what exists vs. what’s promised in docs

### Phase B — Prompt suite alignment (output: “Prompt Suite Fixes”)
List every prompt in `src/prompts/` and update the suite for:
- correct paths (`src/pages`, `src/components`, `src/styles`, etc.)
- consistent naming (Handcrafted Wines vs. token prefix)
- consistent deliverables and outputs
- remove references to missing inputs (e.g. `/imports/pasted_text/*`) unless present

### Phase C — Core audits (output: 4 audit summaries)
1) Visual + design token audit
2) Content + data architecture audit
3) Routing + navigation audit
4) Accessibility + performance audit (combined; focus on real breakpoints)

### Phase D — Implementation plan (output: “Next Actions”)
Produce a pragmatic backlog:
- Top 10 fixes (highest impact / lowest risk)
- A data‑migration plan with milestones
- Demo‑page completion checklist
- WebGL progressive enhancement plan (with fallbacks)

## Output format standards

When generating reports/docs:
- Use short headings, scoped sections, and copy‑pasteable code.
- Provide “Observed → Risk → Fix → Files touched” for each issue.
- Provide explicit route strings, component names, and file paths.
- Treat unknowns explicitly (do not guess).

## Primary outputs

- Updated `00-master-orchestrator.md` (this file)
- Updated `01-visual-design-analysis.md`
- A “Data‑Driven Content Migration Plan”
- A “Data File Size Governance Guideline”
- A “Demo Pages Specification” (for `/handdrawn-demo` + `/handdrawn-demo/landing-page`)
- A “Routing + Theme Correctness Fix List”
```

## Revised visual design analysis prompt

The current `01-visual-design-analysis.md` still frames the project as “The Wire Brand”, references old pathing, and doesn’t explicitly integrate your required constraints around theme correctness, 1440px max-width priority, and “design style needs to be implemented” as a concrete checklist. fileciteturn3file0turn97file0turn56file0

This replacement prompt is designed to be run *against this repo as it exists now*, and it outputs decisions that directly drive implementation (tokens, component patterns, demo page, and accessibility constraints). It also explicitly tells the agent to treat the design-token prefix (`twb-`) as internal. fileciteturn55file0turn97file0

```md
# Visual Design Analysis — Handcrafted Wines (Hand‑Drawn Editorial System)

## Objective

Analyse the repo’s current visual system (tokens, components, demo pages) and produce an implementation‑ready visual direction for the Handcrafted Wines hand‑drawn redesign.

This is not a moodboard. The output must be actionable:
- token usage rules,
- component styling rules,
- grid/container rules for 1440px max width,
- theme correctness rules (light/dark),
- demo page spec alignment.

> Important:
> - “Handcrafted Wines” is the brand.
> - `twb-*` is the existing token prefix; treat it as an internal design-token namespace.

## Repo inputs (scan these)

- `src/styles/*` (themes, variables, utilities)
- `src/index.css` (utility output + theme selectors)
- `src/components/common/*` (Button, Typography, Container)
- `src/components/decorative/*` (hand‑drawn patterns)
- `src/pages/handdrawn-demo/*` (demo pages)
- `src/guidelines/design-tokens/*` (especially: colors, typography, responsive, hand-drawn aesthetic)
- `src/data/demoContent.ts` (demo content model)

## Core constraints

### Theme constraints (must be true everywhere)
- Light mode: predominantly light backgrounds + dark text.
- Dark mode: predominantly dark backgrounds + light text.
- Theme toggle must switch the entire UI reliably (no mixed “OS dark” vs “manual dark” behaviour).

Deliver: a short audit of where theme switching is inconsistent and a single recommended strategy.

### Layout constraints
- Use max width **1440px** as the “ideal” layout (container.site).
- At that width, card grids should scale appropriately (more columns / better spacing) without feeling cramped.
- Establish a grid rule (column counts per breakpoint) for “cards”, “product grids”, and “story grids”.

### Hand‑drawn style constraints
- Hand‑drawn aesthetic must feel intentional, not noisy:
  - “Few strong gestures” > “many small decorations”.
- Provide usage rules for: underlines, stamps, borders, paper textures, dividers, and icon style.

### Accessibility constraints
- Contrast must be maintained in both themes.
- Focus styles must be visible across backgrounds and components.
- Decorative SVGs must not pollute screen reader output.

## Analysis tasks

### Visual inventory
Create a compact inventory of:
- Brand colours/tokens (primary surfaces, text, accents)
- Typography hierarchy (H1–H4 + body sizes)
- Component surfaces (cards, buttons, inputs)
- Decorative motifs already present in `components/decorative/`

### Consistency audit
Identify mismatches:
- direct hex colours vs tokens
- “white/gray” utility usage that breaks the warm paper/ink palette
- use of `dark:` utilities that don’t follow manual theme toggle
- inconsistent container widths (ad hoc max-w vs Container variants)

### Output: “Visual System Decisions”
Define:
- Colour decisions (what is background.primary, bg.secondary, ink, plum, gold, etc.)
- Typography decisions (heading font, body font, when to use serif vs sans)
- Surface decisions (card backgrounds, borders, shadows)
- Decorative decisions (where each motif is allowed + frequency cap)

### Output: “Implementation checklist”
Produce a checklist that a dev can apply across pages:
- Replace hard-coded colours
- Ensure theme switching strategy applied
- Standardise containers to 1440 site max
- Standardise card grid breakpoints
- Standardise focus ring and link underline behaviours

## Required deliverables

Write `/reports/01-visual-design-report.md` with:
1) Executive summary (what to change + why)
2) Token usage rules (with examples)
3) Layout rules for 1440 container (breakpoint table)
4) Theme correctness plan (single strategy)
5) Hand‑drawn motif usage rules (do/don’t)
6) “Immediate fixes” list (top 10)

Make it implementation‑ready.
```

## Data-driven content migration plan and size governance

### What your existing data tells us about “content style”

Your canonical “voice and texture” is already encoded in `farmStory.ts` and `products.ts`: it’s warm, generational, specific to place (Paarl Mountain), and written to feel like a real family business rather than corporate brochure copy. fileciteturn8file0turn5file0

The demo content model (`demoContent.ts`) also shows the intended approach: structured objects with section-level config and small descriptive strings suitable for rendering across multiple patterns. fileciteturn4file0

### The core migration strategy

Right now, several pages still embed substantial copy directly in TSX (including FAQs, headings, blurbs, and “marketing-ish” prose). fileciteturn79file0turn66file0turn78file0

A scalable migration plan for this repo (and a pattern I’d recommend you standardise into prompts/guidelines) is:

1) **Make routes load page data**
   Use React Router route `loader`s to return page data modules, and read them with `useLoaderData` inside page components. This makes the “page = template + data” split explicit and enforces the rule “pages do not own copy.” The router is already centralised, so adding loaders is straightforward. fileciteturn77file0turn64file0

2) **Establish a content folder taxonomy**
   Add a predictable grouping such as:
   - `src/data/pages/*` for page-shaped data (`home.ts`, `shopHome.ts`, `about.ts`, `handdrawnDemo.ts`, etc.)
   - `src/data/globals/*` for shared navigation/footer/legal/seo defaults
   - `src/data/domains/*` for products, experiences, events, team, etc.
   This builds on the existing `src/data/` approach rather than replacing it. fileciteturn5file0turn8file0turn4file0

3) **Refactor components to accept content via props**
   Components like `UnifiedHeader` currently embed navigation labels/URLs inline; that should move to a global data module (e.g., `src/data/globals/navigation.ts`) so the information architecture changes don’t require component edits. fileciteturn59file0turn64file0

4) **Use `demoContent.ts` as the model for the demo pages**
   Both `/handdrawn-demo` and `/handdrawn-demo/landing-page` should be driven from that file (or from two page modules that import shared blocks from it). Right now, both demo pages primarily use inline content rather than the data file. fileciteturn4file0turn52file0turn53file0

### Data file size governance guideline

You asked for explicit governance so data files don’t become dumping grounds. The repo is already trending towards “single large objects” (e.g., `farmStory.ts`) which will scale poorly once you add real editorial content and multiple marketing pages. fileciteturn8file0

Add a new guideline (suggested path: `src/guidelines/architecture/data-content-governance.md`) with these enforceable rules:

- **Rule:** One data file should represent either:
  - one page’s content, or
  - one domain’s *bounded* dataset (e.g., product catalogue), or
  - one shared global (e.g., navigation).
  If it violates that, split it. fileciteturn4file0turn8file0turn59file0

- **Budget thresholds (practical):**
  - A page data module should stay roughly under “a couple of screens” of code: if it’s becoming large, split into `sections/*` modules and re-export through the page module.
  - Avoid embedding long-form prose directly in TS if it becomes multi-page; move long-form story content to markdown files and import them (or load them) as strings. (Your existing pages already split story strings on `\n\n`, which is a sign long-form content is growing.) fileciteturn79file0turn8file0

- **Normalise repetition:**
  - Quotes, CTAs, and recurring trust-signal blocks should be centralised (e.g., `src/data/globals/copyBlocks.ts`) and referenced by ID. fileciteturn79file0turn66file0

- **Type safety:**
  - Do what you already do in `demoContent.ts`: define interfaces/types and export content objects that `satisfy` those types, so changes are compile-time safe. fileciteturn4file0

- **No presentation tokens in data (or at least constrain it):**
  - `demoContent.ts` currently includes `textColor`, `accentColor`, etc. That can be useful for demo-only rendering, but for site content you should prefer semantic flags (“variant: ‘plum’ | ‘ink’ | ‘paper’”) rather than raw token references. fileciteturn4file0turn97file0

## Core issues audit mapped to your checklist

### Routing issues

Observed risks in current implementation:

- `src/routes.tsx` ends with `path: '*'` routing to `Home`, which hides 404s and makes it harder to detect broken links. Your routing guideline explicitly describes a NotFound catch-all pattern, but the router does not currently implement it. fileciteturn77file0turn64file0
- Internal navigation sometimes uses full reloads (`window.location.href` in header search), which can cause apparent “404 on refresh” behaviour on static hosting unless rewrites are configured (and it discards SPA state). fileciteturn59file0turn64file0

High-impact fixes:

- Implement a real `NotFound` page + route, and stop routing wildcards to Home. fileciteturn64file0turn77file0
- Replace `window.location.href` usage with `useNavigate` and query params (`useSearchParams`) to keep routing SPA-native. fileciteturn59file0turn78file0

### Layout problems

- You already have a 1440px site container in `Container` (`variant="site"`), but some pages use ad-hoc `max-w-*` patterns (notably demo pages) which can undercut your “this looks incredible at 1440px” requirement. fileciteturn56file0turn52file0turn53file0
- There is also a potential width mismatch between constants (`CONTAINER_WIDTHS` in `src/constants/theme.ts`) and the `Container` component’s actual variants, which can lead to inconsistent assumptions across the codebase. fileciteturn53file0turn56file0

High-impact fixes:

- Enforce `Container` usage in page templates, especially for the demo pages and any marketing pages. fileciteturn56file0turn52file0
- Consolidate “truth” about widths into one place (prefer the `Container` component + responsive guideline). fileciteturn56file0turn45file0

### Functionality issues

- MiniCart is currently mock data + hardcoded styles, which makes it diverge from the Handcrafted Wines product dataset and token system. fileciteturn73file0turn5file0turn55file0
- Some shop interactions are placeholder/TODO: e.g., `WinesCategory` uses `alert()` with “TODO: Implement cart context” and also contains head tags (`<title>`, `<meta>`) inside the render tree, which will not behave as intended without a head manager. fileciteturn67file0
- There are prop-pattern inconsistencies: `Button` is a native `<button>` wrapper and does not support `as={Link}` patterns, but at least one page attempts that style. fileciteturn67file0turn68file0

High-impact fixes:

- Establish a real cart state model (even if local only) and make MiniCart + product cards use the same store and product IDs. fileciteturn73file0turn5file0turn67file0
- Add a lightweight head management approach (or standardise on `document.title` + meta updates) and remove `<title>` tags from component trees. fileciteturn67file0turn64file0
- Standardise link-button composition: either wrap `<Button>` in `<Link>` consistently (as already done in places), or evolve `Button` to support an `asChild`/slot pattern—but don’t mix approaches. fileciteturn68file0turn79file0

### Dark mode issues

You explicitly require: light background/dark text in light mode, and inverse in dark mode. The token theme files appear to support this via CSS variables for both themes. fileciteturn54file0turn55file0

However, the switching mechanism is currently inconsistent:

- `ThemeToggle` toggles a `.dark` class on `document.documentElement` and persists `theme` in localStorage. fileciteturn62file0
- The generated CSS for `dark:` utilities in `src/index.css` appears to be driven by `prefers-color-scheme: dark` media queries (OS theme), not by the `.dark` class—so any `dark:*` utility usage will **not** reliably switch when the user manually toggles theme. fileciteturn58file0turn62file0
- Pages use a mix of tokenised colours and `dark:` utilities (example: shop pages using `bg-white dark:bg-...`), which can lead to exactly the “elements not switching properly” symptom you flagged. fileciteturn66file0turn53file0

High-impact fix (recommended “single strategy”):

- Choose **CSS variable themes as the single source of truth** (since you already have them), and migrate UI away from Tailwind `dark:` utilities for colour decisions—use `bg-[var(--twb-color-bg-*)]` + `text-[var(--twb-color-text-*)]` everywhere so the `.dark` class actually governs the UI. fileciteturn55file0turn62file0turn97file0
- Update ThemeToggle to set `data-theme="dark|light"` *as well as* `.dark` (since the CSS contains both selectors), then standardise on one selector in docs/guidelines. fileciteturn58file0turn62file0

### Accessibility concerns

Your own guideline system already calls accessibility “non-negotiable” and references WCAG AA contrast thresholds. fileciteturn97file0turn94file0

Concrete issues detected in code:

- Global search results contain hardcoded content and hardcoded colours (`text-gray-*`, `#8B0000`) that may fail theme and contrast expectations in dark mode. fileciteturn78file0
- Several interactive patterns need a consistency pass: icon-only buttons mostly have `aria-label` (good), but the system should enforce focus ring visibility across themes and eliminate places where dark mode disables those states. fileciteturn59file0turn73file0turn94file0

### Performance issues

The demo landing hero runs a per-frame animation loop with canvas particles; this is visually fine for a demo, but you should treat it as a “motion budget” item and ensure reduced-motion and low-end fallbacks, especially once you add real WebGL. fileciteturn53file0turn90file0turn92file0

Your prompt suite already frames WebGL as progressive enhancement with fallbacks and lazy-load requirements; the missing piece is implementing it in the repo and aligning demo docs with reality. fileciteturn92file0turn49file0

## Handdrawn demo pages specification aligned to your intent

You currently have:

- `/handdrawn-demo` → `HandDrawnComponentLibrary.tsx` (component showcase page, largely content-inline). fileciteturn52file0turn77file0
- `/handdrawn-demo/landing-page` → `FullWidthLandingPage.tsx` (marketing-style demo page, content-inline). fileciteturn53file0turn77file0
- A data file `demoContent.ts` that already includes a component library schema and a full landing page schema, but pages are not yet wired to it. fileciteturn4file0turn50file0

To meet your stated goal (“use as many patterns as possible”, hero with editorial elements, SVG and WebGL graphics, data-powered marketing landing page), the cleanest path is:

- Promote **`demoContent.ts` to the single source of truth** for both demo routes. fileciteturn4file0turn50file0
- Add a **hero section to `/handdrawn-demo`** that consumes `demoContent.landingPage.hero` (or a `demoPages.handdrawnDemo.hero` object) so the page opens with the marketing-grade visual story *before* the developer library sections. fileciteturn4file0turn52file0
- Implement a **real WebGL background** as a progressive enhancement:
  - Default: static or 2D canvas background.
  - Enhanced: WebGL shader / lightweight scene, lazy-loaded, disabled under `prefers-reduced-motion`.
  - Provide controls or at least ensure it doesn’t interfere with foreground contrast. fileciteturn92file0turn90file0turn94file0
- Update both demo pages to use `Container variant="site"` and ensure their grids scale elegantly at ~1440px—this is where the hand-drawn card spacing really breathes. fileciteturn56file0turn45file0turn52file0

If you want `/handdrawn-demo` to be primarily a marketing page (and keep a pure dev library), consider splitting routes:

- `/handdrawn-demo` → marketing showcase (hero + patterns + CTA blocks)
- `/handdrawn-demo/library` → full component inventory (developer reference)

This avoids conflating “marketing story” and “developer catalogue”, while still allowing the marketing page to showcase “as many patterns as possible” in context. fileciteturn77file0turn4file0

## Recommended action sequence

1) **Replace the two prompt files** with the revised versions above, then align the rest of the prompt suite by fixing: brand naming, pathing (`src/pages`), and deliverable filenames to match the repo’s current workflow (`task-list.md` and trigger prompts). fileciteturn2file0turn3file0turn96file0turn97file0
2) **Unify theme switching**: stop relying on `dark:` utilities for colour decisions and make CSS variables the authoritative theme mechanism that the toggle controls. fileciteturn62file0turn58file0turn55file0
3) **Data-migrate the two demo pages first** (fastest proof of the new architecture), using `demoContent.ts` as canonical input. fileciteturn4file0turn52file0turn53file0
4) **Create a navigation data module** and migrate `UnifiedHeader` and `UnifiedFooter` to consume it (this is the best “low-risk/high-leverage” content extraction because it reduces routing and IA drift instantly). fileciteturn59file0turn64file0turn97file0
5) **Fix the core quality list** in order: routing fallback + Link usage, cart/search mocks, accessibility focus/contrast, then performance budgets and WebGL enhancements. fileciteturn77file0turn73file0turn94file0turn92file0