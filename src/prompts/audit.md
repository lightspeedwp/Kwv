# Audit — Master Orchestrator

**Category:** Prompt  
**Version:** 3.0.0  
**Last Updated:** 2026-03-18  
**Status:** Active  
**Project:** Handcrafted Wines  
**Template Used:** _templates/prompt-template.md

---

## Trigger

`audit` (bare word, no sub-trigger specified)

## Behaviour

Runs ALL 20 audit sub-triggers sequentially. Each audit follows standard workflow: scan → fix → report → task list.

## Execution Order

| Step | Sub-Trigger | Prompt File | Report Output |
|---|---|---|---|
| 1 | `audit routes` | `/prompts/audit-routes.md` | `routes-audit-YYYY-MM-DD.md` |
| 2 | `audit sitemap` | `/prompts/audit-sitemap.md` | `sitemap-audit-YYYY-MM-DD.md` |
| 3 | `audit tokens` | `/prompts/audit-tokens.md` | `tokens-audit-YYYY-MM-DD.md` |
| 4 | `audit css` | `/prompts/audit-css.md` | `css-audit-YYYY-MM-DD.md` |
| 5 | `audit a11y` | `/prompts/audit-a11y.md` | `a11y-audit-YYYY-MM-DD.md` |
| 6 | `audit data` | `/prompts/audit-data.md` | `data-audit-YYYY-MM-DD.md` |
| 7 | `audit responsive` | `/prompts/audit-responsive.md` | `responsive-audit-YYYY-MM-DD.md` |
| 8 | `audit styles` | `/prompts/audit-styles.md` | `styles-audit-YYYY-MM-DD.md` |
| 9 | `audit guidelines` | `/prompts/audit-guidelines.md` | `guidelines-audit-YYYY-MM-DD.md` |
| 10 | `audit theme` | `/prompts/audit-theme.md` | `theme-audit-YYYY-MM-DD.md` |
| 11 | `audit style` | `/prompts/audit-style.md` | `hand-drawn-style-audit-YYYY-MM-DD.md` |
| 12 | `audit webgl` | `/prompts/audit-webgl.md` | `webgl-audit-YYYY-MM-DD.md` |
| 13 | `audit routing` | `/prompts/audit-routing.md` | `routing-audit-YYYY-MM-DD.md` |
| 14 | `audit layout` | `/prompts/audit-layout.md` | `layout-audit-YYYY-MM-DD.md` |
| 15 | `audit functionality` | `/prompts/audit-functionality.md` | `functionality-audit-YYYY-MM-DD.md` |
| 16 | `audit accessibility` | `/prompts/audit-accessibility.md` | `accessibility-audit-YYYY-MM-DD.md` |
| 17 | `audit performance` | `/prompts/audit-performance.md` | `performance-audit-YYYY-MM-DD.md` |
| 18 | `audit images` | `/prompts/audit-images.md` | `images-audit-YYYY-MM-DD.md` |
| 19 | `audit light mode` | `/prompts/audit-light-mode.md` | `light-mode-audit-YYYY-MM-DD.md` |
| 20 | `apply bem` | `/prompts/apply-bem.md` | `bem-compliance-audit-YYYY-MM-DD.md` |

## Post-Audit Summary

After all 20 audits complete, print summary dashboard:

```
## Audit Summary — YYYY-MM-DD (Handcrafted Wines)

| Audit | Health | Auto-Fixed | Open Issues | Report |
|---|---|---|---|---|
| Routes | 0-100 | N | N | ✅ |
| Sitemap | 0-100 | N | N | ✅ |
| Tokens | 0-100 | N | N | ✅ |
| CSS | 0-100 | N | N | ✅ |
| A11y | 0-100 | N | N | ✅ |
| Data | 0-100 | N | N | ✅ |
| Responsive | 0-100 | N | N | ✅ |
| Styles | 0-100 | N | N | ✅ |
| Guidelines | 0-100 | N | N | ✅ |
| Theme | 0-100 | N | N | ✅ |
| Style | 0-100 | N | N | ✅ |
| WebGL | 0-100 | N | N | ✅ |
| Routing | 0-100 | N | N | ✅ |
| Layout | 0-100 | N | N | ✅ |
| Functionality | 0-100 | N | N | ✅ |
| Accessibility | 0-100 | N | N | ✅ |
| Performance | 0-100 | N | N | ✅ |
| Images | 0-100 | N | N | ✅ |
| Light Mode | 0-100 | N | N | ✅ |
| BEM | 0-100 | N | N | ✅ |

**Overall Health:** [0-100]/100

**Next step:** Type `process reports` to convert reports into task lists.
```

## Modifiers

| Command | Behaviour |
|---|---|
| `audit` | Run all 20 sub-triggers |
| `audit && process reports` | Run all 20, then auto-chain to `process reports` |
| `audit tokens, css, a11y` | Run only listed sub-triggers (comma-separated) |

## Rules

1. Each audit writes report to `/reports/{category}/`
2. Each audit creates/updates task list in `/tasks/`
3. Auto-fix violations where safe. Document unfixable issues.
4. Do NOT chain to `process reports` unless `&&` is used
5. If session capacity reached mid-sequence, note remaining audits and prompt user to type `continue`

---

## Handcrafted Wines Audit Categories

**Design System (5):**
- Tokens, CSS, Styles, Theme, Style (hand-drawn)

**Accessibility (3):**
- A11y (quick), Accessibility (comprehensive), Images

**Architecture (4):**
- Routes, Sitemap, Routing, Guidelines

**Layout & Responsive (3):**
- Layout, Responsive, Data

**Performance & Enhancement (3):**
- Performance, WebGL, Light Mode

**Code Quality (2):**
- Functionality, BEM

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 3.0.0 | 2026-03-18 | Expanded to 20 sub-triggers. Added performance, images, routing, styles, style, webgl, BEM. Adapted to Handcrafted Wines project. |
| 2.0.0 | 2026-03-15 | Expanded to 17 sub-triggers |
| 1.0.0 | 2026-03-15 | Initial creation — 9-step audit orchestrator |

---

**Maintained by:** Handcrafted Wines Development Team  
**Last Updated:** 2026-03-18  
**Related Prompts:** `process reports`, `cleanup`, `continue`
