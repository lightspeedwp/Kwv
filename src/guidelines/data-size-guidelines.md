---
title: "Data File Governance"
---

## Purpose

The site is data‑driven: all page copy, product details, and component content reside in JSON or markdown files under `src/data`. To keep the system maintainable and performant, each file must remain reasonably sized and structured. This guideline defines how to organise, split, and reference data files.

## Structure

- **Granularity:** Create a separate data file per logical page or collection. For example, `pages/home.json`, `pages/about.json`, `products/wines.json`, `articles/2023-vintage.md`. Do not merge unrelated sections into a single large file.
- **Hierarchy:** Organise the `data` folder into subdirectories by domain (e.g., `products`, `blog`, `events`, `pages`). This mirrors the routing structure.
- **Naming:** Use kebab-case for filenames and avoid spaces. Include a version suffix if you expect major revisions (e.g., `wines-v2.json`).

## Size Limits

- **JSON files:** Keep individual JSON files under **50 KB**. If a collection exceeds this threshold, split it into multiple files (e.g., paginate large product lists into `wines-01.json` and `wines-02.json`).
- **Markdown files:** Keep markdown files under **100 KB**. For lengthy articles, break them into sections and reference them separately in the page template.
- **Embedded assets:** Do not embed images or base64 data directly within JSON or markdown. Store media in `/public/assets/` and reference them by path.

## Data Access Patterns

- **Lazy loading:** For lists such as products or events, fetch only the needed chunk when rendering (e.g., via API or dynamic import). Avoid bundling hundreds of items in a single file imported at build time.
- **Slug keys:** Include a unique `slug` or `id` for each object to support routing and linking. Do not rely on array indices.
- **Type safety:** Define TypeScript interfaces for each data structure and use runtime validation (e.g., `zod`) to ensure integrity. Place interfaces in `src/types`.

## Maintenance

- **Version control:** Commit changes to data files with clear commit messages. Avoid manual edits on production; instead, update through a CMS or build pipeline if integrated.
- **Review frequency:** Audit the data folder monthly to ensure that size limits are respected and that deprecated files are removed.
- **Documentation:** For each domain (e.g., products), include a README describing the schema and linking to any relevant CMS or API documentation.

## Validation

Set up a CI script to check file sizes and fail the build if a data file exceeds its limit. Log warnings when directories grow beyond 1 MB total. During code review, verify that new content uses the correct structure and that the page templates load data via imports or API calls rather than hard‑coded strings.
