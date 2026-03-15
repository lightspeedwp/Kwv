# Content Strategy Analysis – Hand‑Drawn Redesign

**Executive summary**
1. **Value:** Migrating all copy and imagery into structured data files will make the site scalable, localisable and maintainable while allowing designers to iterate on templates without touching content.
2. **Risks:** Many pages and components currently embed placeholder copy or KWV‑era content; inconsistent voice and tone undermine the new brand narrative.  Oversized data files could impede load performance if not managed.
3. **Next step:** Audit every page and component, extract its content into discrete data objects (segmented by page or feature) and develop a governance model to manage file sizes and updates.  Define voice and tone guidelines consistent with the new hand‑drawn aesthetic.

## Scope and tasks

1. **Page inventory and extraction**
   - List all pages (landing, about, product, subscription, experience, event, blog, contact, cart, checkout, search, error).  For each, identify static copy, dynamic fields, images, lists and CTAs.
   - Extract the content into `src/data` using one file per page or logical grouping.  Use JSON or TypeScript modules exporting structured objects.
   - Replace inline copy in templates with data imports; ensure each component receives only the fields it needs.
2. **Template structuring**
   - Define generic templates for common page types (product, experience, event) including hero, benefits, details, reviews, related items and calls to action.
   - Create template keys (e.g. `hero.title`, `benefits.items[]`, `gallery.images[]`) that map to the data files.  Document these keys so developers know how to populate them.
   - For the /handdrawn-demo/ page and its landing page, design a flexible schema that can power a variety of editorial sections, patterns and interactive components.
3. **Voice & tone transformation**
   - Establish guidelines for a conversational yet refined voice that reflects hand‑crafted winemaking: warm, trustworthy, neutral and direct (align to the LightSpeed brand).  Avoid jargon and ensure inclusive language.
   - Audit microcopy across buttons, forms, error states and tooltips.  Standardise action verbs (e.g. “Add to cart” vs “Buy now”) and remove filler text.
   - Include placeholders or keys for translations/localisation to support future multilingual expansion.
4. **Metadata and SEO**
   - For each page data file, include fields for `title`, `description`, `keywords`, `slug`, `openGraph` and structured data (e.g. Schema.org).  Provide guidance on writing compelling meta descriptions.
   - Integrate canonical URLs and alternate language links where relevant.
5. **Storytelling elements**
   - Develop content outlines for origin stories, timelines and award histories.  Suggest interactive modules such as illustrated timelines or milestone sliders that can be fed from data.
   - Ensure the narrative flows across pages (e.g. how wine origins connect to experiences and products).
6. **Content governance**
   - Propose rules to manage data file sizes: limit each data file to ~20 kB where possible; break long lists into separate modules; avoid embedding large image data (use paths to optimised assets).
   - Define review processes for content updates (who writes, who approves) and how changes propagate through staging to production.
   - Provide a small script or guideline to validate that each data file adheres to the schema and size limits during CI.
7. **Deliverables**
   - A spreadsheet or document mapping each page/component to its data file and keys.
   - Voice & tone guidelines with examples of good and bad copy.
   - Sample data files for at least one product, experience and event page, plus the hand‑drawn demo pages.
   - Acceptance criteria and success metrics (e.g. 100 % of components draw content from data files, file sizes within limits).

## Implementation notes

* Store images under `public/images` and reference them by relative URL in data files; include alt text in the data.
* Use camelCase for data keys and avoid deeply nested structures beyond two levels for readability.
* For asynchronous content (e.g. blog posts fetched from CMS), provide a fallback mechanism that displays skeletons until data is loaded.
* Maintain compatibility with WordPress by exporting data to JSON or leveraging WP GraphQL where necessary.

## Acceptance criteria

- All pages have corresponding data files; templates import data rather than hard‑coded copy.
- Voice and tone reflect the new brand; microcopy is concise and consistent.
- Metadata fields are defined for SEO and social sharing.
- Data files adhere to size limits and follow a clear schema.
- Governance rules are documented and integrated into CI.