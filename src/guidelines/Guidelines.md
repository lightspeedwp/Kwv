# Handcrafted Wines – Accessibility-First Figma Make Prototype & E-Commerce Guidelines (v4.0 – Craft Edition)

**IMPORTANT DEVELOPMENT NOTE:** It is a high priority to add JSDoc inline documentation to all JavaScript/TypeScript files to explain component props, complex logic, and utility functions.

Accessibility is the **first and non-negotiable requirement** for all Handcrafted Wines designs and implementations.  
Figma Make **must** treat accessibility (including WCAG 2.1 AA contrast, keyboard access and screen-reader support) as a hard constraint, not an optional enhancement.

---

## 1\. Accessibility & inclusive design (non-negotiable)

This section applies to **every** frame, component, page template and pattern.  
If a design conflicts with these rules, the accessibility rules win.

### 1.1 Accessibility rules for Figma Make AI

When generating or modifying layouts and components, Figma Make must:

- **Enforce WCAG 2.1 AA contrast** for all text and essential UI:
  - Normal text: contrast ratio **≥ 4.5:1**.
  - Large text (approx. ≥18 px regular or ≥14 px bold): contrast ratio **≥ 3:1**.
  - Icons and essential graphical UI (e.g. buttons, toggles) must also meet AA contrast against their background.
  - **Dynamic Contrast**: Navigation elements (like breadcrumbs and menus) must dynamically adjust their color based on the background they are placed on (e.g., white text on dark hero images, dark text on light page backgrounds).
- **Avoid colour-only communication**:
  - Never rely on colour alone to indicate state (e.g. error vs success, active vs inactive, sale vs regular).
  - Always pair colour with text, icons or shape differences.
- **Preserve keyboard access**:
  - All interactive elements must be reachable via keyboard alone (Tab/Shift+Tab).
  - Focus must be visible at all times and must not be removed or hidden for visual reasons.
- **Respect focus order and semantics**:
  - Keep focus order logical and aligned with visual reading order (left-to-right, top-to-bottom where appropriate).
  - Use a meaningful heading hierarchy (H1 → H2 → H3) rather than picking heading levels for visual size only.
- **Support screen readers**:
  - Ensure all controls have descriptive labels.
  - Avoid visual-only indicators where a text label is needed (e.g. icon-only buttons must have a text label or accessible name).
- **Avoid inaccessible patterns**:
  - No critical content should be locked in auto-advancing carousels.
  - Avoid layouts that depend on precise pointer positioning (e.g. hover-only reveals that hide critical information).
- **Design for different text lengths and zoom**:
  - Components must tolerate longer labels and translations.
  - Layouts must remain usable at browser zooms up to at least 200%.

If these constraints conflict with aesthetics or a proposed layout, accessibility wins.

### 1.2 Colour & contrast

- Background/text combinations must meet **WCAG 2.1 AA** contrast ratios:
  - Normal text: **≥ 4.5:1**.
  - Large text: **≥ 3:1**.
- When placing text on images:
  - Use solid or gradient overlays where necessary.
  - Avoid placing key copy on busy image regions.
- Focus, hover and active states:
  - Must remain visible for users with low vision and colour blindness.
  - Focus styles must be clearly distinguishable from hover-only effects.

### 1.3 Typography & readability

- Minimum body text:
  - **16 px** on mobile, **18 px** preferred for long reads.
- Line length:
  - Target **70–80 characters** per line on large screens, shorter on mobile.
- Line-height:
  - Body: **1.5–1.7**.
  - Headings: **1.2–1.3**.
- Avoid long paragraphs of centred text. Use left alignment for sustained reading.
- Maintain a logical heading hierarchy (H1, H2, H3…) and don’t skip levels purely for style.

### 1.4 Keyboard navigation & focus management

- All interactive elements (links, buttons, tabs, accordions, filter controls, menu items, pagination, mini cart triggers, modal close buttons) must:
  - Be reachable via keyboard (Tab/Shift+Tab).
  - Show a clear and consistent **focus ring** or focus treatment.
- Include a **“Skip to main content”** link at the top of every page, visible on focus.
- For complex components (menus, accordions, tabs), ensure arrow-key navigation does not trap focus or skip content.

### 1.5 Modals, drawers & overlays (incl. age gate)

- When an overlay opens (age gate, mini cart drawer, newsletter modal, etc.):
  - Focus moves into the overlay.
  - Tab/Shift+Tab cycles inside the overlay until it is closed.
  - ESC closes the overlay and returns focus to the element that opened it.
- Provide visible, clearly-labelled close controls.
- Scrims must be dark/light enough that content in front is visually dominant.
- The age gate must be fully keyboard accessible and screen-reader friendly:
  - Clear question.
  - Clear “Yes, I am over 18” and “No, leave site” or equivalent.
  - No hidden content is accessible behind the age gate until the correct choice is made.

### 1.6 Motion, animation & carousels

- Avoid auto-advancing carousels for core reading content. Where used:
  - Provide explicit play/pause controls.
  - Use slow, readable timing (≥5 seconds per slide).
- Respect “prefers reduced motion”:
  - Swap heavy motion for fades or subtle transitions.
- Hover animations must be subtle and must not cause layout shifts or make content harder to read.

### 1.7 Forms, validation & messaging

- Each form field must have a visible label (placeholders are not enough).
- Error messages:
  - Must be adjacent to the problem field.
  - Must describe the issue clearly (e.g. “Enter a valid email address”).
  - Must be more than just red colour; use icons or text as well.
- Success messages must be obvious and distinct from errors.
- Required fields should be clearly indicated, and the meaning of indicators explained (e.g. “\* indicates a required field”).

### 1.8 Components with extra complexity

**Accordions (FAQs, sections)**

- Entire row of the header should be clickable.
- Include an open/closed icon that rotates or changes meaningfully with state.
- Only one level of nested accordions unless absolutely necessary.

**Tabs (My Account, product info)**

- Tabs must be keyboard focusable.
- Active tab should be visually distinct.
- Only one tab panel is visible at a time.
- Use concise, descriptive labels.

**Timelines (History)**

- Use a single clear reading direction (vertical or horizontal).
- Ensure markers and labels are legible and adequately spaced on all devices.
- Avoid requiring horizontal scroll on mobile for core timeline content.

**Carousels**

- Use carousels sparingly and avoid relying on them for information that must be read in sequence.
- Provide keyboard controls and clear next/previous buttons.

---

## 2\. Project overview

Handcrafted Wines is a South African wine and spirits producer with more than a century of history. The digital experience has two tightly-linked contexts:

1. **Corporate (“main”) site** – brand story, heritage, brands, sustainability, awards, careers, experiences, news, etc.
2. **Shop (WooCommerce)** – online sales for wine, spirits, mixers and gifts, plus account, cart, checkout and order flows.

There is also a focused **Wine Club** experience (Winemakers Club 11th Edition) that is promoted via the main site and converts through the shop checkout.

### 2.1 Experience goals

- Present **one Handcrafted Wines brand** across corporate and shop, but with clearly different intent and emphasis.
- Allow visitors to move easily between **story content** (brands, experiences, news) and **shopping flows**.
- Ensure editors can maintain everything via **structured content and block patterns**, not custom hard-coded layouts.
- Treat **accessibility and performance** as first-class requirements, not later fixes.
- Keep the design/token system directly mappable to **theme.json, block styles, and React components**.

---

## 3\. Visual system & design tokens

The visual system should be fully tokenised so Figma styles map cleanly into `theme.json` and CSS.

### 3.1 Colour tokens

**Craft Winery Palette** – Earthy, organic, and hand-drawn aesthetic:

| Token            | Hex       | Typical usage                                          |
| :--------------- | :-------- | :----------------------------------------------------- |
| `color.burgundy` | `#6B2737` | Primary action colour, wine-inspired headings          |
| `color.vineyard` | `#4A5D3F` | Secondary green, earthy accents, organic elements      |
| `color.terracotta` | `#D4856A` | Warm accents, badges, hand-drawn elements            |
| `color.cream`    | `#F9F5F0` | Warm light backgrounds, content panels                 |
| `color.charcoal` | `#3C3C3C` | Body text, dark overlays                               |
| `color.gold`     | `#C9A961` | Premium accents, awards, special callouts              |

**Hand-Drawn Design Elements:**
- Use wavy, organic borders instead of straight lines
- Apply subtle SVG sketch textures to section dividers
- Add hand-drawn underlines to headings (using `border-image` or pseudo-elements)
- Use organic shapes for buttons and cards (slightly irregular border-radius)
- Implement brush stroke effects for CTAs and highlights

Guidelines:

- Embrace organic, imperfect aesthetics – no pixel-perfect grids
- Use **shades and tints** naturally occurring in wine and vineyard imagery
- Avoid digital, synthetic colours – keep everything rooted in nature
- Hand-drawn elements should feel authentic, not gimmicky

### 3.2 Typography

Recommended pairing:

- Headings: classic serif (e.g. Playfair Display or similar).
- Body: readable humanist sans (e.g. Open Sans or similar).

**Standardized Fluid Typography:**
All typography must use `clamp()` to ensure fluid scaling between mobile and desktop.
**Formula:** `clamp(min_rem, preferred_vw + preferred_rem, max_rem)`
We enforce a strict standardization of VH/VW + min/max values.

| Element            | Weight | Fluid Clamp Rule (Strict)                                          | Role                                  |
| :----------------- | :----- | :----------------------------------------------------------------- | :------------------------------------ |
| H1 (page/hero)     | 700    | `clamp(2.4rem, 5vw + 1rem, 4.5rem)`                                | Page and hero titles                  |
| H2 (section)       | 600    | `clamp(2rem, 4vw + 1rem, 3.5rem)`                                  | Main section headings                 |
| H3 (card title)    | 600    | `clamp(1.5rem, 3vw + 0.5rem, 2.25rem)`                             | Product names, news and brand cards   |
| H4 (subheading)    | 500    | `clamp(1.25rem, 2vw + 0.5rem, 1.75rem)`                            | Minor headings and labels             |
| Body – large       | 400    | `clamp(1.125rem, 1.5vw + 0.5rem, 1.5rem)`                          | Lead paragraphs, key callouts         |
| Body – default     | 400    | `clamp(1rem, 1vw + 0.5rem, 1.125rem)`                              | Standard paragraphs                   |
| Caption / metadata | 400    | `clamp(0.875rem, 1vw + 0.25rem, 1rem)`                             | By-lines, tasting notes, small labels |

All typography must still honour the accessibility rules in section 1\.

### 3.3 Imagery

- Prioritise authentic Handcrafted Wines images (vineyards, cellars, products, locations).
- Hero imagery should be high resolution but optimised for weight.
- Use overlays/gradients where needed to maintain legibility of text.

### 3.4 Layout, spacing & containers

**Standardized Fluid Spacing:**
Use `clamp()` for spacing to ensure layouts breathe on large screens but remain compact on mobile.

- **Section Vertical Padding:** `clamp(3rem, 5vh + 2rem, 8rem)` (Approx 48px -> 128px)
- **Container Side Padding:** `clamp(1rem, 4vw, 3rem)`
- **Grid Gaps:** `clamp(1rem, 2vw, 2rem)`

**Container Usage Guidelines:**
We use a strict set of container variants to control line length and visual rhythm.

| Variant | Width Rule | Use Case |
| :--- | :--- | :--- |
| `container.site` | `max-w-[1440px]` | Default wrapper for Navbar, Footer, and standard grids. |
| `container.content` | `max-w-[960px]` | Text-heavy sections, Articles, Terms & Conditions to maintain readable line length (60-80 chars). |
| `container.wide` | `max-w-[1280px]` | Hero content, Feature grids, or visual-heavy sections that need more breathing room than content but less than full site. |
| `container.full` | `w-full` | Full-width background images or colored bands (inner content must still use a constrained container). |

### 3.5 Token architecture

- Group tokens into clear sets: `color.*`, `space.*`, `font.*`, `radius.*`.
- Prefer numeric scales over vague labels (small/medium/large).
- Keep a **base “defaults”** set, then layer on:
  - Palette variations (e.g. light, dark, high contrast).
  - Section “skins” (hero, content panels, footer, CTA banners).
- Figma token names should map directly into `theme.json` presets and CSS variables where possible.

### 3.6 Hero Component Standards (Mandatory)

All Hero sections (Corporate, Shop, Experiences) must adhere to these standard dimensions and layout rules to ensure consistency across the platform:

1.  **Mobile Height (Mandatory):**
    *   **All Hero sections must use `min-h-[calc(100dvh-90px)]` on mobile devices.** This accounts for the sticky header height (~90px) so the hero fits exactly within the remaining viewport space.
    *   Desktop heights can vary (e.g., `md:min-h-[60vh]` for standard pages, `md:min-h-[80vh]` for landing pages).

2.  **Scroll Down Arrow:**
    *   **Visibility:** Must be present on all Hero sections.
    *   **Styling:** Must use a consistent design with a **circle around the arrow** (e.g., the `ScrollDownArrow` component).
    *   **Placement:** Standardized to `absolute bottom-8 left-1/2 -translate-x-1/2`.
    *   **Z-Index:** Must have a high z-index (e.g., `z-30`) to ensuring it sits above all other content and backgrounds.
    *   **Spacing:** There must **always** be a gap between the arrow and the content above it. The arrow should never overlap text or buttons.

3.  **Content Padding:**
    *   Standard vertical padding within the hero content container: `py-20` (top) and `pb-32` (bottom).
    *   **Crucial:** The `pb-32` bottom padding is mandatory to ensure the content clears the scroll-down arrow on all screen sizes.

4.  **Typography:**
    *   Hero titles must support a `stretchy` prop or mechanism to ensure titles remain on a single line where possible, scaling fluidly.

5.  **Call to Actions (Buttons):**
    *   Primary hero buttons must use `variant="hero"` or `variant="heroGold"` which implements specific uppercase tracking and `shadow-lg` styles.

### 3.7 Breakpoint Strategy & Mobile-First Standards

We strictly adhere to a **Mobile-First** design methodology. All CSS must be written for the smallest screen first, with overrides for larger screens using Tailwind breakpoints.

**Breakpoint Tokens:**
- **Default (Mobile):** 0px - 767px (Single column, stacked layouts, hamburger menus).
- **`md` (Tablet):** 768px - 1023px (Two-column grids, simplified header, comfortable touch targets).
- **`lg` (Desktop):** 1024px - 1279px (Standard navigation, 3-4 column grids, hover states enabled).
- **`xl` (Wide):** 1280px+ (Max-width containers, expansive hero imagery).

**Mobile Breakpoint Behavior:**
- **Padding:** Mobile side padding is fixed at `1rem` (16px) or `1.5rem` (24px).
- **Stacking:** Flex containers must default to `flex-col` on mobile and switch to `flex-row` on `md` or `lg`.
- **Typography:** Headings must not overflow the viewport. Use `break-words` or fluid typography (Section 3.2).
- **Touch Targets:** All interactive elements must be at least 44x44px on touch devices.

**Viewport Scaling Examples:**
| Element | Mobile (375px) | Tablet (768px) | Desktop (1440px) |
| :--- | :--- | :--- | :--- |
| **H1 Size** | 2.4rem (38px) | ~3.5rem (56px) | 4.5rem (72px) |
| **Section Pad** | 3rem (48px) | ~5rem (80px) | 8rem (128px) |
| **Grid Cols** | 1 | 2 | 3 or 4 |

### 3.8 Brand Identity: Voice & Tone

**Handcrafted Wines** is a boutique, artisanal winery rooted in passion, craftsmanship, and authenticity.

**Core Values:**
- **Handcrafted Quality:** Every bottle tells a story of meticulous care and attention
- **Approachable Expertise:** We're wine lovers first, experts second
- **Authentic Connection:** Real people making real wine for real moments
- **Sustainable Passion:** Respect for the land, the vines, and the community

**Voice & Tone Guidelines:**

- **Tone:** Casual, approachable, warm, and genuinely passionate about winemaking
- **Voice Characteristics:**
  - **Conversational, not corporate:** "We're obsessed with getting every detail just right" not "We maintain rigorous quality standards"
  - **Storytelling, not selling:** Share the journey, the process, the people behind each bottle
  - **Passionate, not pretentious:** "This Cab Sauv is absolutely killer" not "A sophisticated expression of terroir"
  - **Personal, not generic:** Use "we," "our winemaker," "our vineyard" to create connection
  - **Friendly expertise:** Share knowledge without talking down to customers

**Voice by Context:**
- **Corporate/About:** Personal storytelling, heritage with heart. "We've been perfecting our craft for over a century, and honestly? We're still learning something new with every vintage."
- **Shop:** Sensory, enticing, helpful. "Imagine dark cherry, a hint of vanilla, and that perfect velvety finish. Yeah, it's as good as it sounds."
- **Experiences:** Warm invitation, hospitable. "Come hang out in our cellar, taste some incredible wine, and hear the stories behind each bottle. We can't wait to meet you!"
- **Product Descriptions:** Vivid, sensory, accessible. Skip the jargon, focus on the experience: "Bursting with berry flavours and a smooth, easy-drinking finish—perfect for pizza night or a lazy Sunday."

**Specific Language Rules:**
- **Use:** "Hey," "You'll love," "We're pretty proud of," "Can't wait to," "Let's," "Honestly," "Absolutely"
- **Avoid:** "Leveraging," "Solutions," "Premium offering," "Utilize," "Facilitate," "State-of-the-art"
- **Embrace imperfection:** "We tried something a little wild with this blend" (shows authenticity)
- **Celebrate craft:** "Hand-picked at sunrise," "Aged in oak barrels we've been using for 20 years"

**Micro-copy Examples:**
- Button CTAs: "Grab a bottle," "Let's taste," "Join the club," "Come visit us"
- Empty states: "Your cart's looking a little lonely. Let's fix that!"
- Errors: "Oops! Something went sideways. Give it another shot or drop us a line."
- Success: "Nice! Your order's on its way. We think you're going to love it."

**Language:** South African English with universal appeal (e.g., "Colour," "Flavour," but avoid overly local idioms that might confuse international visitors).

---

## 4\. Site structure & page blueprints

This section is the **canonical sitemap** for the prototype, the block theme, and the React routes.

### 4.1 High-level sitemap

```
HandcraftedWines.co.za
├─ Home (Main site)
│  ├─ About (hub)
│  │  ├─ About Us
│  │  ├─ History
│  │  ├─ Awards
│  │  ├─ Our Brands
│  │  ├─ Executive Team
│  │  ├─ Sustainability
│  │  ├─ Global Distribution
│  │  ├─ Careers
│  │  │  └─ Jobs
│  │  └─ Wine Club (Winemakers Club 11th Edition)
│  ├─ News & Media
│  │  ├─ News Listing
│  │  └─ Single Post
│  ├─ Visit Us (/experiences)
│  │  ├─ Emporium
│  │  ├─ Cathedral Cellar
│  │  ├─ House of Fire
│  │  ├─ Events
│  │  │  └─ Event Details
│  │  │  └─ Events FAQ
│  │  ├─ Conference Facilities
│  │  ├─ Cathedral Cellar Kitchen Venue
│  │  └─ Experiences FAQ
│  ├─ Main site search
│  ├─ FAQ
│  ├─ Contact Us
│  └─ Legal (Terms & Conditions of Use; Policies & Guidelines)
│
├─ Shop (/shop) (WooCommerce)
│  ├─ Shop Homepage (Online Shop)
│  ├─ Offers (Promotions)
│  ├─ Brands (shop brand landing)
│  ├─ Spirits (category + subcategories)
│  ├─ Wine (category + subcategories)
│  ├─ Mixers (non-alcoholic)
│  ├─ Gifts
│  ├─ Visit (link to Experiences)
│  ├─ Product category / brand / tag archives
│  ├─ Product Search Results
│  ├─ Single Product
│  ├─ Cart
│  ├─ Checkout
│  ├─ Order Confirmation
│  ├─ My Account
│  ├─ Shop FAQ
│  ├─ Coming Soon
  └─ Shop Legal (Returns, Terms, Privacy)
│
└─ Join our Wine Club
   └─ Winemakers Club 11th Edition landing (direct to Checkout)
```

### 4.2 Corporate pages – summary blueprints

Below, each page lists:

- **URL** (current or proposed)
- **WP template**
- **Key sections/patterns**
- **React route name**

#### Home (main site)

- **URL:** `/`
- **Template:** `front-page`
- **Goals:** Introduce Handcrafted Wines, surface key pathways (brands, experiences, news, Wine Club, shop), and drive newsletter sign-ups.
- **Sections (patterns):**
  - Campaign / hero (flagship brand or seasonal focus).
  - “Our Brands” logo/cards grid.
  - “Our Spirits & Wines” teaser tiles linking into shop categories.
  - Latest news/awards (Query Loop).
  - “Visit Us” / Experiences teaser.
  - Wine Club CTA.
  - Newsletter strip.
- **Key blocks:** Group, Columns, Cover/Image, Heading, Paragraph, Buttons, Query Loop \+ Post Template, optional Terms Query.
- **React route:** `HomePage`.

#### About hub

- **URL:** planned hub page.
- **Template:** `page`
- **Purpose:** Visual table of contents for “Our Company”.
- **Sections:**
  - Hero with overview.
  - Card grid linking to About Us, History, Awards, Our Brands, Executive Team, Sustainability, Global Distribution, Careers, Wine Club, Experiences.
- **React route:** `AboutHubPage`.

#### About Us

- **URL:** `/our-company/about-us/`
- **Template:** `page`
- **Sections:**
  - Hero with origin story.
  - Two-column “Who we are” (copy \+ imagery).
  - Heritage highlights / stats band.
  - Cross-links to History, Sustainability, Experiences.
- **React route:** `AboutPage`.

#### History

- **URL:** `/our-company/our-history/`
- **Template:** `page`
- **Sections:**
  - Hero with historical imagery.
  - Timeline layout (vertical or horizontal) with year, description and optional image per milestone.
- **Blocks:** Group, Columns/Stack, Heading, Paragraph, Image.
- **React route:** `HistoryPage`.

#### Awards

- **URL:** `/our-company/awards/`
- **Template:** `page`
- **Notes:** Needs a mobile-friendly solution for long award lists.
- **Sections:**
  - Hero.
  - Filterable awards listing (year, competition, product) – can be cards or grouped accordions by year.
- **Blocks:** Group, Accordion plus heading/content blocks; table or column layouts.
- **React route:** `AwardsPage`.

#### Executive Team

- **URL:** `/our-company/executive-team/`
- **Template:** `page`
- **Sections:** Hero \+ team grid (portrait, name, title, short bio).
- **React route:** `ExecutiveTeamPage`.

#### Sustainability

- **URL:** `/our-company/sustainability/`
- **Template:** `page`
- **Sections:**
  - Hero.
  - Pillars (Environment, Community, Governance).
  - Impact stats, stories, imagery.
- **React route:** `SustainabilityPage`.

#### Global Distribution

- **URL:** `/our-company/global-distribution/`
- **Template:** `page`
- **Sections:**
  - Hero.
  - Region list or map.
  - Distributor contacts per region.
- **React route:** `GlobalDistributionPage`.

#### Careers & Jobs

- **URLs:**
  - Careers landing: `/our-company/careers-at-kwv/`
  - Jobs listing: `/our-company/jobs/`
- **Templates:** `page` (optionally a custom `jobs` template).
- **Sections:**
  - Careers: hero, culture, benefits, CTA to jobs.
  - Jobs: list/grid of roles with basic filtering.
- **React routes:** `CareersPage`, `JobsPage`.

#### News & Media

- **URLs:**
  - Listing: `/our-company/news/`
  - Single: individual news URLs.
- **Templates:**
  - Listing: `archive` / `index`.
  - Single: `single` / `single-post`.
- **Patterns:**
  - Archive header (breadcrumbs, title, intro).
  - Post cards in Query Loop (image, title, date, excerpt, time-to-read).
  - Single: title, meta bar, feature image, article body, footer meta (tags, sharing), comments.
- **Blocks (archive):** Archive Title/Description, Query Loop, Post Template, Post Title, Post Excerpt, Post Featured Image, Post Date, Post Author, Post Terms, Post Time To Read, pagination.
- **Blocks (single):** Post Title, Post Content, Post Featured Image, metadata blocks, Comments, Comment Form.
- **React routes:** `NewsListingPage`, `NewsDetailPage`.

#### Experiences (“Visit Us”)

- **Main landing URL:** `/experiences/`
- **Template:** `page`
- **Subpages:**
  - Emporium, Cathedral Cellar, House of Fire, Events, Conference Facilities, Cathedral Cellar Kitchen Venue.
- **Landing sections:**
  - Hero (“Experience KWV”) with CTA.
  - Experience cards grid.
  - Link into events or booking.
- **Subpage layout:**
  - Hero with imagery \+ title.
  - Rich description, opening times, pricing if relevant.
  - Practical information: location, accessibility, booking details.
  - Strong booking CTAs (linking to Contact/Enquiry).
- **React routes:** `ExperiencesLandingPage` and experience detail pages (`ExperienceEmporiumPage`, etc.) using `ExperiencePageLayout`.

#### FAQ (main site)

- **URL:** `/faq/`
- **Template:** `page`
- **Pattern:** FAQ accordion grouped by topic for corporate questions.
- **Blocks:** Accordion group/items, headings, text.
- **React route:** `FAQPage`.

#### Contact Us

- **URL:** `/contact-us/`
- **Template:** `page`
- **Sections:**
  - Hero \+ intro.
  - Contact details.
  - Contact form.
  - Map or location image.
- **Blocks:** Form block and inner blocks (Input, Submission Notification, Submit Button) plus layout blocks.
- **React route:** `ContactPage`.

#### Legal (main site)

- **URLs:**
  - Terms & Conditions of Use
  - Policies & Guidelines
- **Template:** `page`
- **Pattern:** Legal page layout – hero/title, then long-form text with section anchors and optional downloadable files.
- **Blocks:** Heading, Paragraph, List, Table, File, Separator.
- **React routes:** `LegalTermsPage`, `LegalPoliciesPage`.

### 4.3 Shop pages – summary blueprints

All shop pages use the **shop header/footer** and WooCommerce templates.

#### Shop Homepage (Online Shop)

- **URL:** `/shop/`
- **Template:** `page` (with Woo blocks).
- **Sections:**
  - Intro hero with promotion or campaign.
  - Short “about” strip.
  - Curated product collections (awarded wines, brandies, spirits etc.).
  - Link to Promotions landing.
  - Featured products.
  - Brand grid (“Shop our famous brands”).
  - Newsletter \+ social follow.
- **React route:** `ShopHomePage`.

#### Offers (Promotions)

- **URL:** `/shop/promotions` (Nav label: "Offers")
- **Template:** `page` \+ Product Collection blocks.
- **Behaviour:** Curated promotional groupings (campaign sections), plus optional “on sale” collection.
- **React route:** `ShopPromotionsPage`.

#### Shop Brands landing

- **URL:** `/shop/brands`
- **Template:** `page`
- **Structure:**
  - Group brands under Wines, Spirits, Ready-to-drink, Non-alcoholic.
  - Each brand links to brand taxonomy archive or brand detail page.
- **React route:** `ShopBrandsLandingPage`.

#### Product category / brand archives

- **Examples:**
  - `/shop/spirits/`
  - `/shop/wine/`
  - `/shop/mixers/`
  - `/shop/gifting/`
  - Brand tax URLs (`/shop/brand/roodeberg`, etc.).
- **Templates:**
  - `archive-product`
  - `taxonomy-product_cat`, `taxonomy-product_tag`, `taxonomy-product_attribute`
- **Pattern:** “Shop Category Hero \+ Filters”:
  - Hero (title \+ description).
  - Filter row (Product Filters block).
  - Product Collection grid.
- **React routes:** `ShopCategoryPage`, `ShopBrandTaxPage`.

#### Single Product

- **Template:** `single-product`
- **Layout:**
  - Gallery vs details split on desktop; stacked on mobile.
  - Title, brand, badges, price, options, add-to-cart.
  - Tasting notes and short copy.
  - Tabs/accordions for description, details, reviews.
  - Related products section.
- **React route:** `ProductDetailPage`.

#### My Account

- **URL:** `/my-account/` (Woo default).
- **Template:** `page` with My Account blocks.
- **States:**
  - Logged-out: two-column login/register (stacked on mobile).
  - Logged-in: tabs for dashboard, orders, downloads, addresses, account details.
- **React routes:** `MyAccountLoggedOutPage`, `MyAccountDashboardPage`, `MyAccountOrdersPage`, `MyAccountAddressesPage`, `MyAccountDetailsPage`.

#### Cart

- **Template:** `page-cart` with Cart block.
- **States:** filled cart vs empty (with CTA back to shop).
- **React route:** `CartPage`.

#### Checkout

- **Template:** `page-checkout` with Checkout block.
- **States:** guest vs logged-in checkout.
- **React route:** `CheckoutPage`.

#### Order Confirmation

- **Template:** `order-confirmation`
- **States:** logged-in vs guest (guest may be prompted to create an account).
- **React route:** `OrderConfirmationPage`.

#### Shop FAQ

- **URL:** `/shop/faq`
- **Template:** `page`
- **Pattern:** Shop FAQ accordion (shipping, returns, payment, delivery, age restrictions).
- **React route:** `ShopFAQPage`.

#### Shop Coming Soon

- **Template:** `page-coming-soon`
- **React route:** `ShopComingSoonPage`.

#### Shop Legal

- **Pages:** Returns, Terms & Conditions, Privacy.
- **Template:** `page`
- **React routes:** `ShopReturnsPage`, `ShopTermsPage`, `ShopPrivacyPage`.

### 4.4 Wine Club – Winemakers Club 11th Edition

- **URL:** `/wine-club/`
- **Template:** `page` (special layout)
- **Behaviour:**
  - Acts as a campaign-ready landing page.
  - Header may use a simplified variant (Company, Shop, Experiences, Events, FAQ, Contact).
  - Main CTA takes the user directly to checkout with the correct product populated (no separate cart step).
- **Sections:**
  - Hero with pack imagery.
  - Benefits grid (icons \+ text).
  - Pack contents breakdown.
  - Pricing and conditions.
  - Strong “Subscribe now” CTAs.
- **React route:** `WineClubLandingPage`.

---

## 5\. WordPress templates, template parts & patterns

### 5.1 Main-site templates

- `front-page` – main home page.
- `page` – default page (About, brands, experiences, corporate FAQ, contact, legal, careers, global distribution, Wine Club, About hub).
- `single` / `single-post` – news posts.
- `archive` / `index` – blog/news archives.
- `search` – search results.
- `404` – not-found page.

### 5.2 WooCommerce templates

- `single-product.html` – product detail page.
- `archive-product.html` – main product archive.
- `taxonomy-product_cat.html` – product category.
- `taxonomy-product_tag.html` – product tag.
- `taxonomy-product_attribute.html` – attribute archives.
- `product-search-results.html` – product search.
- `page-coming-soon.html` – Coming Soon.
- `page-cart.html` – Cart.
- `page-checkout.html` – Checkout.
- `order-confirmation.html` – Order confirmation.

Shop-specific pages using `page` \+ blocks:

- Shop homepage.
- Promotions landing (Offers).
- Shop brands landing.
- Shop FAQ.
- Shop legal pages.

### 5.3 Template parts – main site

- `header-main` – corporate header (main navigation, search, etc.).
- `footer-main` – corporate footer.
- `breadcrumbs` – breadcrumb strip.
- `post-meta` – reusable post meta bar.
- `hero` – hero template part (generic).
- `sidebar` – optional blog sidebar.
- `footer-newsletter` – newsletter strip.

### 5.4 Template parts – WooCommerce

- `header-shop` – shop header.
- `footer-shop` – shop footer.
- `header-checkout` – simplified header for checkout & order confirmation.
- `footer-checkout` – minimal/legal footer for checkout & order confirmation.
- `mini-cart-drawer` – mini cart off-canvas region.
- `add-to-cart-options` – grouped add-to-cart options for variable/grouped products.

### 5.5 Menu-designer template parts (Mega Menus)

This section maps the specific mega menus to their parent header template parts.

**Template Part: `header-main`**
- `mega-menu-corporate`: "Company" (About, History, Awards, etc.)
- `mega-menu-experiences`: "Visit Us" (Experiences, Events)

**Template Part: `header-shop`**
- `mega-menu-shop-categories`: "Shop" (Spirits, Wine, Mixers, Gifting)
- `mega-menu-shop-brands`: "Brands" (Shop brands A-Z or featured)

**Template Part: `header-experiences`**
- `mega-menu-experiences-nav`: Simple nav or mega menu for various experience sub-venues.

**Template Part: `header-events`**
- Shared or specific nav for Events (likely shared with Experiences).

**Template Part: `footer-main`**
- Not a mega menu, but contains column groups:
  - `footer-col-company`
  - `footer-col-shop`
  - `footer-col-legal`

**Template Part: `footer-shop`**
- `footer-shop-links`

### 5.6 Reusable Sections (Organisms)

"Sections" are distinct from "Template Parts" in that they are content-agnostic layout organisms designed to be reused across different page templates. In Figma Make, these are located in `components/sections`.

**Core Reusable Sections:**
1.  **`Hero`:** Highly configurable (Title, Subtitle, Image, 2 Buttons, Height variants). Used on Home, About, Contact.
2.  **`FullWidthSection`:** Split layout (50/50) with Image and Text. Supports `align="left"|"right"` and `variant="light"|"dark"`.
3.  **`BrandGrid`:** Grid of card links to product categories. Used on Corporate Home and About.
4.  **`FAQSection`:** Accordion wrapper. Accepts a list of Q&A objects.
5.  **`Newsletter`:** Full-width signup strip with background image/pattern.
6.  **`LatestNews`:** 3-column grid fetching the latest posts.
7.  **`WineClubCTA`:** Dedicated conversion block for the Wine Club.
8.  **`ServiceFeaturesSection`:** (Shop) 4-column trust signals (Delivery, Returns, etc.).
9.  **`ContactFollowSection`:** (Shop/Support) Centered social links and contact info.
10. **`HomeEntryPoints`:** (Home) Three-column navigation cards (About, Shop, Experiences) with hover zoom effects.

**Template Parts (Global Layout):**
These components persist across multiple pages and define the shell of the application.
- `Header` (Switcher for Corporate/Shop/Experiences)
- `Footer` (Switcher for Corporate/Shop)
- `BreadcrumbsBar` (Context-aware navigation strip)
- `MiniCart` (Slide-out drawer for Shop)
- `AgeVerificationModal` (Global overlay)

**Pattern Usage Rule:**
- If a UI element appears on *one* page, it can be local to that page.
- If it appears on *two* pages, it must be elevated to `components/sections` or `components/common`.

### 5.7 Pattern families (for block patterns & Figma sections)

**Global patterns**

- Hero variants (corporate, shop, Wine Club).
- Two-column content sections.
- Timeline section.
- Card grids (brands, experiences, news, events, products).
- Newsletter block.
- Contact \+ form block.

**Blog patterns**

- Archive header.
- Post card.
- Post meta bar.
- Post footer meta.
- Comments section.

**Main site patterns**

- Brands overview grid.
- Brands by category (wine, spirits, RTD, non-alc).
- Experiences cards.
- Events list section.
- Corporate FAQ accordion.

**Shop patterns**

- Shop homepage layout.
- Promotions landing layout.
- Shop brands landing layout.
- Category hero \+ filters layout.
- Product carousel rows.
- Cart states (full/empty).
- Checkout layout.
- Order confirmation layout.
- My Account login/register split.

Patterns should be built as **Section components** in Figma with variants and be registered as **block patterns** in the theme.

---

## 6\. WordPress & WooCommerce blocks to use

No page builders, widget-based layouts, shortcodes or footnotes. Use **core blocks**, **core theme blocks** and **modern WooCommerce blocks**.

### 6.1 Highlighted core blocks

**Form block**

Used on Contact and any other forms.

- `core/form`
- `core/form-input`
- `core/form-submission-notification`
- `core/form-submit-button`

**Accordion block**

For FAQs and collapsible content.

- `core/accordion`
  - `core/accordion-heading`
  - `core/accordion-item`
  - `core/accordion-panel`

**Terms Query**

For brand grids and taxonomy-driven listings.

- `core/terms-query`
  - `core/term-template`
  - `core/term-name`
  - `core/term-description`
  - `core/term-count`

**Other key core blocks (summary)**

- Content: Paragraph, Heading, List, Quote, Pullquote, Table, Code.
- Media: Image, Gallery, Video, Cover, File.
- Layout: Group, Columns/Column, Stack/Row, Spacer, Separator, Buttons/Button.
- Theme/Post: Site Title, Site Logo, Site Tagline, Post Title, Post Content, Post Excerpt, Post Featured Image, Post Date, Post Author/Name, Post Terms, Post Comments Count/Link, Post Time To Read.
- Query/archive: Query Loop, Post Template, Query Pagination (and variants), Archive Title, Archive Description, Query Title, Query Total.
- Navigation: Navigation, Navigation Link, Navigation Submenu, Home Link, Page List, Breadcrumbs (core or plugin).
- Taxonomy: Terms Query and inner term blocks.
- Search/utility: Search, HTML (for rare embeds).

### 6.2 WooCommerce blocks (by area)

**Single product**

Represented as separate UI components:

- Store Breadcrumbs
- Store Notices
- Product Image Gallery
- Product Title
- Product Rating
- Product Price
- Product Summary
- Add to Cart with Options
- Product Meta
- Product Details
- Related Products

**Cart**

- Cart block with clear full/empty states.

**Checkout**

- Express checkout area.
- Delivery/shipping method block.
- Shipping address fields.
- Terms & conditions acceptance.
- Checkout actions.
- Checkout totals.
- Local pickup option where relevant.

**Mini cart**

- Mini cart block with full and empty states.

**Product collection (shop/archive)**

- Product Collection block with:
  - Product Template (image, title, price, add-to-cart).
  - Pagination.
  - Empty results handling.
- Layout variants: stack, grid, carousel.

**Add to cart \+ options**

- Base actions: add-to-cart button, quantity control.
- Variants:
  - Variable product add-to-cart.
  - Grouped product add-to-cart.
  - Dynamic variation behaviour.

**Product gallery**

- Thumbnails strip.
- Large image area (incl. on-sale badge, next/prev controls).

**Product filters**

- Active filters
- Price
- Rating
- Attribute-based filters
- Status
- Category
- Brand
- Tag

**Order confirmation page blocks**

- Account creation block.
- Order status.
- Order summary.
- Order details.
- Downloads section.
- Address information.
- Additional fields / extra info.

---

## 7\. React component architecture & mapping

The React app should mirror the sitemap and WordPress templates so that Figma frames, React routes and block templates stay aligned.

### 7.1 High-level structure

```
App
├─ Providers
│  ├─ RouterProvider
│  ├─ QueryClientProvider (data fetching)
│  └─ AgeVerificationProvider
│
├─ Shell
│  └─ Layout
│     ├─ Header (Switcher)
│     │  ├─ CorporateHeader   (maps to `header-main`, mega-menu-main, mobile-menu-main)
│     │  ├─ ShopHeader        (maps to `header-shop`, mobile-menu-shop)
│     │  ├─ CheckoutHeader    (maps to `header-checkout`)
│     │  ├─ ExperiencesHeader
│     │  └─ WineClubHeader
│     │
│     ├─ Footer (Switcher)
│     │  ├─ CorporateFooter   (maps to `footer-main`)
│     │  ├─ ShopFooter        (maps to `footer-shop`)
│     │  ├─ CheckoutFooter    (maps to `footer-checkout`)
│     │  └─ ExperiencesFooter
│     │
│     ├─ BreadcrumbsBar       (Context-aware: overlay on Hero, block on standard pages)
│     ├─ MiniCart             (maps to `mini-cart-drawer`)
│     ├─ AgeVerificationModal
│     ├─ BackToTopButton
│     └─ ScrollToTop
│
├─ Routes (Pages)
│  ├─ company      (Home, About, History, Awards, ExecutiveTeam, Sustainability, GlobalDistribution, Careers, News, NewsPost, WineClub, Contact, FAQ, SearchResults)
│  ├─ shop         (ShopHome, Shop, Product, Cart, Checkout, OrderConfirmation, MyAccount, ShopPromotions, ShopBrands, ShopBrandLanding, ShopFAQ, ProductSearchResults, ComingSoon)
│  ├─ experiences  (Experiences, Emporium, CathedralCellar, HouseOfFire, ConferenceFacilities, CathedralCellarKitchen, ExperiencesFAQ)
│  ├─ events       (Events, EventDetail, EventsFAQ)
│  ├─ brands       (Brands - List & Detail)
│  └─ legal        (Terms, Policies, ReturnsPolicy)
│
└─ Components
   ├─ common       (AgeVerificationModal, BackToTopButton, Button, Container, Logo, ScrollDownArrow, ScrollToTop, Typography)
   ├─ layout       (BrandsMegaMenu, BreadcrumbsBar, CheckoutFooter, CheckoutHeader, CheckoutLayout, CorporateFooter, CorporateHeader, ExperiencesFooter, ExperiencesHeader, Footer, Header, Layout, ShopFooter, ShopHeader, WineClubHeader)
   ├─ sections     (BrandGrid, FAQSection, FullWidthSection, Hero, HomeEntryPoints, LatestNews, Newsletter, WineClubCTA)
   │  └─ shop      (ContactFollowSection, ServiceFeaturesSection)
   ├─ shop         
   │  ├─ cart      (MiniCart)
   │  ├─ checkout  (BillingAddress, BillingAddressForm, Checkbox, CheckoutInput, CheckoutStep, ContactInfo, DeliveryMethodSelector, FloatingLabelInput, OrderSummary, PaymentMethods, PickupLocationSelect, RadioButton, ShippingAddress, ShippingAddressForm, ShippingMethod)
   │  ├─ common    (ProductCard)
   │  ├─ home      (ShopBrandGrid, ShopCategorySlider, ShopHero, ShopNewsletter, ShopSocialSection)
   │  ├─ layout    (ShopInfoFooter, ShopSidebar)
   │  ├─ order     (AccountCreation, AdditionalFields, AdditionalInformation, AddressDetails, DownloadsSection, OrderDetails, OrderStatusHeader)
   │  └─ single-product (PayflexWidget, ProductAddToCart, ProductBreadcrumbs, ProductGallery, ProductMeta, ProductPrice, ProductRating, ProductSummary, ProductTabs, ProductTitle, RelatedProducts, ReviewsTab, StoreNotices)
   ├─ experiences  (ExperiencePageLayout)
   ├─ figma        (ImageWithFallback)
   └─ ui           (Radix/Shadcn UI primitives)
```

Names can adjust slightly, but the **shape** and mapping to templates/template parts should stay consistent.

---

## 8\. Templates & layout patterns

This section ties pages, components and patterns together for Figma Make and the block theme.

### 8.1 Page-template families

**Corporate**

- `CorporateHomeTemplate`
- `AboutHubTemplate`
- `StandardPageTemplate` (About, Sustainability, Global Distribution, etc.)
- `TimelinePageTemplate` (History)
- `AwardsPageTemplate`
- `ExecutiveTeamTemplate`
- `NewsArchiveTemplate`
- `NewsSingleTemplate`
- `ExperiencesLandingTemplate`
- `ExperienceDetailTemplate` (Uses `ExperiencePageLayout` component)
- `FAQPageTemplate`
- `ContactPageTemplate`
- `LegalPageTemplate`
- `WineClubLandingTemplate`

**Shop**

- `ShopHomeTemplate`
- `PromotionsTemplate` (Offers)
- `ShopBrandsTemplate`
- `ProductListingTemplate` (categories/brands/tags)
- `ProductSingleTemplate`
- `CartTemplate`
- `CheckoutTemplate`
- `OrderConfirmationTemplate`
- `MyAccountTemplate` (variants for logged-in/out)
- `ShopFAQTemplate`
- `ShopLegalTemplate`
- `ComingSoonTemplate`

### 8.2 Cross-site layout patterns

- Hero pattern: image/gradient background, heading, subheading, CTAs.
  - **Standardized CTA:** Primary hero buttons must be large, uppercase, bold, and use the `shadow-lg` style for consistency.
  - **Standardized Height:** `min-h-[60vh]` for standard pages, `min-h-[80vh]` for home/landing pages.
- Two-column content pattern: text and media with flexible order.
- Card grid pattern: brands, experiences, news, events, products.
- Timeline pattern.
- FAQ accordion pattern.
- Newsletter pattern.
- Contact pattern (details \+ form).

### 8.3 Corporate-specific patterns

- Brands overview and “brands by category” grids.
- Brand story layout (hero, brand narrative, imagery, related products/posts).
- Awards listing (filters \+ grouped lists or accordions).
- Team grid.
- Experiences card grid and experience detail pattern.

### 8.4 Shop-specific patterns

- Shop homepage layout (hero, collections, promotions strip, brand grid, newsletter).
- Promotions page layout (stacked promotional groups).
- Category hero \+ filters layout.
- Product detail layout.
- Cart layouts (full/empty).
- Checkout layout.
- Order confirmation layout.
- My Account split layout (login/register, tabs for logged-in).

Patterns should be built as **Section components** in Figma with variants and be registered as **block patterns** in the theme.

---

## 9\. Performance & SEO

- **Images:** design with sensible sizes and aspect ratios; reserve space to avoid layout shifts; assume lazy-loading.
- **Scripts:** favour simple, declarative patterns; avoid heavy client-side experiments for core tasks.
- **Layout stability:** ensure cards, grids and hero sections don’t shift as content loads.
- **SEO:**
  - One clear H1 per page; structured headings afterwards.
  - Space for SEO meta (titles, descriptions) and social share images.
  - Product pages should expose obvious structured data fields (price, brand, availability) that can be mapped into schema.

---

## 10\. Development guidelines

These are shared expectations for Figma Make, React and the block theme.

- **Component scope:** prefer small, focused components with well-defined props and clear variants.
- **Naming:** align names across Figma components, React components, template parts, patterns and tokens.
- **States:** explicitly design all important states – hover, focus, disabled, loading, error, success, empty, logged-in/logged-out.
- **Internationalisation:** keep labels concise and avoid designs that break when copy length changes.
- **Testability:** ensure layouts have predictable regions and state variants; this makes visual regression and end-to-end tests easier to write.
- **Navigation (SPA):** Always use `react-router-dom`'s `Link` or `useNavigate` for internal navigation. Never use `window.location` or `<a>` tags for internal routes to ensure Single Page Application (SPA) state is preserved.
- **CTA Consistency:** All Hero section Call-to-Action buttons must follow the standardized "chunky" style (large size, uppercase, bold font, shadow) defined in `Hero.tsx` and `ShopHero.tsx`.
- **JSDoc Documentation:** It is **mandatory** to add JSDoc comments to all components, hooks, and utility functions in `pages/` and `components/` directories. Explain props, return types, and complex logic.
- **File Headers:** Every component file must start with a JSDoc block explaining the component's purpose, key features, and available props/variants.
- **Import Rules:** Always use explicit relative paths (e.g., `../../components/common/Button`) for internal imports. Never use aliases like `@/` as they are not supported in this build environment.

### 10.1 JSDoc & Inline Documentation Standards (Mandatory)

Documentation is not optional. It is a critical part of the codebase for maintainability and AI-assist capability.

**Standard File Header:**
Every React component file must begin with a JSDoc block:
```typescript
/**
 * ComponentName
 * 
 * Brief description of what the component does.
 * 
 * Features:
 * - Key feature 1
 * - Key feature 2
 * 
 * @param {PropsType} props - Description of props
 */
```

**Inline Logic:**
- Complex functions (e.g., cart calculations, filter logic) must have comments explaining the *why*, not just the *how*.
- Interfaces must be exported and well-named (e.g., `interface HeroProps`).

### 10.2 Testing Strategy
- **Unit Tests:** Focus on utility functions (e.g., currency formatting, cart total calculations) and dumb UI components.
- **Integration Tests:** Test critical flows like "Add to Cart", "Checkout Step Navigation", and "Filter Application".
- **Visual Regression:** Ensure critical sections (Hero, ProductGrid) maintain layout stability across breakpoints.

### 10.3 Build Tools & Environment
- **Bundler:** Vite (Fast, ESM-based).
- **Styling:** Tailwind CSS v4.0 (Utility-first).
- **Animation:** Motion (formerly Framer Motion).
- **Icons:** Lucide React (Check availability before use).
- **State Management:** React Context (for Cart/Auth in prototype), Query (for data).

### 10.4 Interactive Features & Micro-interactions
- **Hover States:** All interactive elements must have a visual `hover` state (color change, underline, lift).
- **Focus States:** visible `focus-visible:ring` for keyboard users.
- **Transitions:** Use `transition-all duration-300` for smooth state changes.
- **Feedback:** Buttons should show loading states; Forms should show inline validation.

---

## 11\. Acceptance criteria – examples

Each major component/page should have testable acceptance criteria. Examples:

1. **Header (all contexts)**
   - Shows the correct menu set for corporate/shop/checkout.
   - Mobile nav is keyboard accessible and easy to collapse/expand.
   - Search is usable by keyboard and pointer and clear on mobile.
   - Sticky behaviour never hides important content.

2. **Product grid and filters**
   - Filters can be combined and reset without breaking layout.
   - Empty and “no result” states look intentional.
   - Grid adapts across 1–4 columns with readable card content.

3. **History timeline**
   - Events remain readable on all breakpoints.
   - Keyboard navigation between entries is clear.
   - Long timelines are visually grouped to avoid fatigue.

4. **Newsletter sign-up**
   - Fields and button are clearly labelled and accessible.
   - Success and error states are visually distinct and expressed in text.
   - Works both as a standalone section and in footer context.

5. **Wine Club landing**
   - Benefits and pack contents are clearly explained.
   - There is one primary route into the purchase flow.
   - The mobile layout communicates just as clearly as desktop.

Every template, pattern and component should be validated against:

- Accessibility rules (section 1).
- Visual system & tokens (section 3).
- Site structure & templates (sections 4–5).
- Block usage & architecture (sections 6–8).

---

## 12\. How Figma Make should use this document

1. **Create a frame for each template**
   - Create named frames matching the route/template names (e.g. `HomePage`, `ShopHomePage`, `CheckoutPage`).
   - Ensure each frame clearly indicates which WordPress template it corresponds to.

2. **Build components aligned with patterns & template parts**
   - Build components for header variants, footers, mini cart drawer, hero sections, FAQ sections, product cards, post cards, newsletter, contact, etc.
   - Use variants for states: cart full/empty, account logged-in/logged-out, accordions open/closed, tab active/inactive.

3. **Use block-aware layouts**
   - Layouts should visually reflect block composition:
     - Query Loop \+ Post Template for news.
     - Product Collection \+ Filters for shop archives.
     - Accordion groups for FAQs.
     - Terms Query for brand grids.
     - Woo single-product blocks for product pages.

4. **Apply token-driven styling**
   - Reference colour, type and spacing tokens consistently.
   - Keep Figma token names compatible with `theme.json` presets and numeric scales.

5. **Design state-specific artboards**
   - Provide separate frames/variants for important states, especially:
     - Checkout (guest vs logged-in).
     - Order confirmation (with/without account).
     - Cart and mini cart (empty vs items).
     - My Account (login vs dashboard).

Accessibility rules in section 1 are mandatory and must be respected in all outputs from Figma Make.  
This `Guidelines.md` is the shared source-of-truth for the Handcrafted Wines Figma file, the React app and the WordPress/WooCommerce build.

---

## 13\. Checkout Flow Patterns

The Checkout flow uses a specific architecture to ensure flexibility and consistency:

### 13.1 Form Architecture
- **Wrapper vs. Form:** Complex sections use a "Wrapper" component (e.g., `BillingAddress`) to handle state/logic, which renders a "Form" component (e.g., `BillingAddressForm`) for the UI.
- **Floating Labels:** All text inputs in the checkout flow must use the `CheckoutInput` component to ensure consistent floating label behavior and error styling.
- **Step Layout:** Each main section (Contact, Billing, Shipping, Payment) must be wrapped in the `CheckoutStep` component to maintain the numbered timeline layout.

### 13.2 State Management
- **Validation:** Form components should expose `touched` and `error` states for fields.
- **Local State:** For the prototype, forms manage their own local state. In production, this would lift to a global CheckoutContext.
- **Conditional Rendering:** `ShippingMethod` controls the visibility of `ShippingAddress` based on the selected method (Dispatch vs Pickup).

---

## 14. Atomic Design Patterns

### 14.1 Single Product Architecture
The Single Product page (`Product.tsx`) is built using an atomic approach, where each piece of product information is a standalone component. This allows for maximum flexibility in layout adjustments without rewriting logic.

**Key Atoms:**
- **`ProductTitle`**: Handles brand kicker and main H1.
- **`ProductPrice`**: Manages sale price display and currency formatting.
- **`ProductGallery`**: Responsive image slider/grid.
- **`ProductAddToCart`**: Encapsulates the complex logic of quantity, variations (e.g., vouchers), and subscription toggles.
- **`ProductTabs`**: Manages content switching for Description/Reviews/Attributes.

### 14.2 Order Confirmation Patterns
The Order Confirmation page (`OrderConfirmation.tsx`) is composed of specialized "dumb" components that simply render data passed to them or static content.

- **Header:** `OrderStatusHeader` (Success message, Order #, Date).
- **Upsell:** `AccountCreation` (Prompts guest users to register).
- **Summary:** `OrderDetails` (Table of items), `AddressDetails` (Billing/Shipping).
- **Digital:** `DownloadsSection` (Only appears for virtual products).

### 14.3 Service Assurance
- **`ServiceFeaturesSection`**: A reusable block displaying the "Trust Signals" (Nationwide Delivery, Secure Payment, Easy Returns, Gift Wrapping). This should be placed above the footer on all Shop-related utility pages (FAQ, Cart, etc.) to reinforce trust.
- **`ContactFollowSection`**: A specialized contact strip for support pages, distinct from the main footer.

---

## 15. UI Component Library (Atoms)

We utilize **Radix UI** primitives styled with **Tailwind CSS** (shadcn/ui pattern) located in `components/ui`.

**Core UI Components:**
- **`Button`**: Variants (Primary, Secondary, Outline, Ghost, Hero).
- **`Typography`**: Wrapper for H1-H6, Body, Caption with standardized font families.
- **`Container`**: Layout wrappers (Site, Content, Wide, Full).
- **`Accordion`**: For FAQs and mobile menus.
- **`Sheet`**: Off-canvas drawers (Mobile Menu, Mini Cart).
- **`Tabs`**: Content switching (Product Details, My Account).
- **`Input` / `Select`**: Form controls.
- **`ImageWithFallback`**: Mandatory wrapper for all `<img>` tags to handle loading errors gracefully.

**Iconography:**
- **Library:** `lucide-react`.
- **Usage:** Import specific icons. Do not import the entire library.
- **Verification:** Always check icon existence before implementation.