# **KWV – Figma Make Prototype Guidelines**

These guidelines translate the KWV website and project specifications into a comprehensive brief for the **Figma Make** AI and the developers who will build the WordPress block theme. They combine insights from the live site, the attached PDFs, project notes and email feedback from KWV’s team. All measurements use metric units; typography and spacing use fluid values for responsive behaviour. Keep the tone premium, trustworthy and rooted in heritage while providing a modern shopping experience.

## **1 Project overview**

KWV (Koöperatieve Wijnbouwers Vereeniging) is a South African producer of wine and spirits with a **heritage stretching back to 1918**. The website serves two distinct audiences:

1. **Corporate visitors** – interested in the company history, brands, sustainability initiatives and experiences. These pages highlight KWV’s role as a *leading South African wine & spirits producer* and showcase its range of brands such as **Roodeberg, The Mentors, KWV Brandy, Laborie and Cruxland Gin**.

2. **Consumers** – using the **online shop** to purchase wine, brandy and gift products. The shop uses categories such as *Wine, Spirits, Brandy & Cognac, Liqueurs, Gin, Rum, Vodka and Gifts* and includes filters for brand, price, type and volume. A subscription offering (KWV Wine Club Edition 11\) is promoted prominently.

### **Site Structure**

### **Sitemap**

```md
KWV.co.za
├─ Home 						## main website with main site specific header and footer
│  ├─ About (Hub)
│  │  ├─ About Us
│  │  ├─ History
│  │  ├─ Awards 				## Mobile friendly
│  │  ├─ Our Brands 			## Logo grid
│  │  ├─ Executive Team
│  │  ├─ Sustainability
│  │  ├─ Careers
│  │  └─ Wine Club
│  ├─ News & Media
│  │  ├─ News Listing
│  │  └─ Single Post
│  ├─ Visit us 					## Experience KWV
│  │  ├─ Emporium
│  │  ├─ Cathedral Cellar
│  │  ├─ House of Fire
│  │  ├─ Events
│  │  └─ Conference Facilities
│  ├─ Main site search
│  ├─ FAQ
│  ├─ Contact us
│  └─ Legal
│     ├─ Terms & Conditions
│     └─ Policies & Guidelines
│
├─ Shop		 					## WooCommerce store with shop site specific header and footer
│  ├─ Promotions
│  ├─ Brands
│  ├─ My Account
│  ├─ Cart
│  ├─ Checkout
│  └─ ...
│
└─ Join our Wineclub			## Landing page that links directly to Checkout 
```

### **Main Site Pages**

#### **About (Hub)**
An expanded entry point acting as a hub for all corporate information. It must serve as a navigation gateway to the following pages:
*   **About Us:** [Live Link](https://kwv.co.za/our-company/about-us/)
*   **Our Brands:** [Live Link](https://kwv.co.za/our-company/our-brands/) - *New Requirement:* Create a dedicated "Our Brands" page featuring a grid of brand logos that link to their respective pages. Pull in logos to use throughout the prototype.
*   **Awards:** [Live Link](https://kwv.co.za/our-company/awards/) - *New Requirement:* Develop a mobile-friendly solution for displaying the extensive list of awards.
*   **Careers:** [Live Link](https://kwv.co.za/our-company/careers-at-kwv/)
*   **Executive Team:** [Live Link](https://kwv.co.za/our-company/executive-team/)
*   **Sustainability:** [Live Link](https://kwv.co.za/our-company/sustainability/)
*   **Experience KWV:** [Live Link](https://kwv.co.za/experience-kwv/)
*   **Wine Club:** [Live Link](https://kwv.co.za/our-company/winemakers-club-11/)

#### **News & Media**
*   **News Landing Page:** [Live Link](https://kwv.co.za/our-company/news/) - A grid layout of news articles.
*   **Single Blog Post:** [Live Link](https://kwv.co.za/kwv-secures-top-honours-at-2024-trophy-wine-show/) - Article reading view with related posts.

#### **Experience KWV (Visit Us)**
[Live Link](https://kwv.co.za/experience-kwv/)
Improve the experience landing page to clearly signpost the different visitor options. **Important:** This page must be linked logically in the navigational footer.
Sub-pages to include (and make available in the drop-down):
*   **KWV Emporium:** [Live Link](https://kwv.co.za/experience-kwv/experience-emporium/)
*   **Cathedral Cellar:** [Live Link](https://kwv.co.za/experience-kwv/experience-cathedral-cellar/)
*   **House of Fire:** [Live Link](https://kwv.co.za/experience-kwv/house-of-fire/)
*   **KWV Events:** [Live Link](https://kwv.co.za/experience-kwv/kwv-events/)
*   **KWV Conference Facilities:** [Live Link](https://kwv.co.za/experience-kwv/kwv-conference-facilities/)
*   **Cathedral Cellar Kitchen Venue:** [Live Link](https://kwv.co.za/experience-kwv/cathedral-cellar-kitchen-venue/)

#### **Contact Us**
[Live Link](https://kwv.co.za/contact-us/)
Standard contact form with location details.

#### **Legal Pages**
Ensure these are linked in the footer:
*   **Terms and Conditions of Use:** [Live Link](https://kwv.co.za/our-company/terms-and-conditions-of-use/)
*   **Policies & Guidelines:** [Live Link](https://kwv.co.za/our-company/policies-guidelines/)

#### **FAQ**
[Live Link](https://kwv.co.za/online-shop/frequently-asked-questions/)
Should use clean, responsive accordions. Needs to be significantly visually improved compared to the current site. Note: All static pages should ideally include a relevant FAQ section at the bottom.

### **Shop Pages**

#### **Shop Landing (Product Archive)**
Standard WooCommerce grid layout with sidebar filters (Brand, Price, Type, Volume). Should include a hero banner with promotion.

#### **Single Product**
Standard two-column layout:
*   **Left:** Large product gallery with zoom/lightbox.
*   **Right:** Product title, price, short description, tasting notes, rating, add-to-cart button, quantity selector.
*   **Tabs:** Description, Additional Info, Reviews.
*   **Bottom:** Related products section.

#### **Product Category / Brand / Tag**
Variations of the Shop template, filtered by taxonomy.

#### **Cart**
Standard table layout with line items, quantity adjusters, coupon code field, and cart totals.

#### **Checkout**
Two-column layout: Billing/Shipping details on the left, Order Review/Payment on the right.

#### **My Account**
*   **Logged Out:** Split layout for Login and Register forms.
*   **Logged In:** Dashboard with tabs for Orders, Addresses, Account Details, Logout.

### **WineClub Landing Page**
A dedicated landing page based on the [KWV Wine Club](https://kwv.lightspeedwp.dev/our-company/winemakers-club-11/).
*   **Hero:** High impact visual of the current pack.
*   **Benefits:** Icon grid detailing membership perks (Free delivery, Exclusive access, etc.).
*   **The Pack:** Detailed breakdown of the current edition's contents (wines included).
*   **Sign Up:** Form or CTA that links directly to the checkout with the subscription product added.

## **React Component Diagram**

```md
App
├─ Shell
│  ├─ Header
│  │  ├─ CorporateHeader
│  │  │  ├─ KWVLogo
│  │  │  └─ MegaMenu
│  │  └─ ShopHeader
│  │     ├─ KWVShopLogo
│  │     ├─ ShopNav (Brands, Spirits, Wine dropdowns)
│  │     └─ MiniCart
│  ├─ Layout (Wrapper)
│  └─ Footer
│     ├─ CorporateFooter
│     └─ ShopFooter
│
├─ Routes
│  ├─ Home (Corporate)
│  ├─ AboutHub
│  ├─ History (Timeline)
│  ├─ BrandsGrid (Our Brands)
│  ├─ BrandDetail (Dynamic: /brands/:id)
│  ├─ Awards (Mobile Friendly)
│  ├─ NewsList
│  ├─ NewsDetail
│  ├─ Experiences (Visit Us)
│  ├─ Contact
│  ├─ LegalPages
│  ├─ WineClub (Landing)
│  │
│  └─ Shop (E-commerce)
│     ├─ ShopHome (All Products)
│     ├─ CategoryPage (/shop/:category)
│     ├─ ProductDetail (/product/:id)
│     ├─ Cart
│     ├─ Checkout
│     ├─ OrderConfirmation
│     └─ MyAccount
│
└─ Shared Components
   ├─ Common
   │  ├─ Container
   │  ├─ Typography
   │  ├─ Button
   │  ├─ Logo
   │  ├─ ScrollToTop       <-- New (Implement on Shop & Main)
   │  └─ ScrollDownArrow   <-- New (Hero to next section)
   ├─ Shop
   │  ├─ ProductCard
   │  ├─ ShopSidebar (Filters)
   │  └─ MiniCart
   ├─ Sections
   │  ├─ Hero
   │  ├─ Newsletter
   │  ├─ BrandGrid
   │  └─ FAQSection        <-- New (Required on all pages)
   ├─ UI (Shadcn)
   │  ├─ Sheet (Mobile Menu / Cart)
   │  ├─ Tabs (My Account)
   │  ├─ Accordion (FAQ)
   │  └─ ...
   │
   └─ Core Blocks (WP Mapping)
      ├─ Text
      │  ├─ Paragraph (Typography)
      │  ├─ Heading (Typography)
      │  ├─ List
      │  ├─ Quote
      │  ├─ Code
      │  ├─ Details
      │  └─ Table
      ├─ Media
      │  ├─ Image (ImageWithFallback)
      │  ├─ Gallery
      │  ├─ Audio
      │  ├─ Video
      │  ├─ File
      │  ├─ MediaText
      │  └─ Cover (Hero)
      ├─ Design
      │  ├─ Buttons (Button)
      │  ├─ Columns
      │  ├─ Group (Container)
      │  ├─ Separator
      │  └─ Spacer
      ├─ Widgets
      │  ├─ Archives
      │  ├─ Calendar
      │  ├─ Categories
      │  ├─ LatestPosts
      │  ├─ Search
      │  ├─ SocialIcons
      │  └─ TagCloud
      └─ Theme
         ├─ Navigation
         ├─ SiteLogo
         ├─ SiteTitle
         ├─ PostTemplate (Single Post)
         │  ├─ PostTitle
         │  ├─ PostContent
         │  ├─ PostDate
         │  ├─ PostExcerpt
         │  ├─ PostFeaturedImage
         │  ├─ PostAuthor
         │  └─ PostNavigation
         ├─ QueryLoop (News/Products)
         ├─ Comments
         └─ LoginOut
```

### **Goals**

* **Unify the brand experience** across corporate pages and the shop while retaining the premium KWV aesthetic.

* **Improve navigation and discoverability** of products and brand information. Reduce friction when switching between corporate content and shopping.

* **Empower content editors** – ensure all sections (hero sliders, text, images and product listings) can be updated via the WordPress block editor without developer assistance.

* **Optimise performance** by using a lean block theme, caching and image optimisation. Follow the guidelines for hosting and plugin management provided in the project specification.

* **Ensure accessibility** and compliance with WCAG 2.1 AA; provide an age‑verification modal on entry and avoid overstimulation of users.

* **WooCommerce Native Structure** – The e-commerce section must be built using standard WooCommerce block templates and structure to ensure future compatibility and ease of development.

## **2 Brand identity**

### **Colour palette**

KWV’s palette evokes heritage and luxury. Use the colours below consistently; provide light and dark variations for accessibility. Colour tokens should be defined in `theme.json` and Figma styles.

| Token | Hex | Usage |
| ----- | ----- | ----- |
| **Wine red** | `#8B0000` | Primary accent. Use for calls‑to‑action (buttons, links), highlights and headings. |
| **Gold** | `#DAA520` | Secondary accent. Use for badges, icons and subtle details. |
| **Dark brown** | `#2C1810` | Base for the shop header, footers and overlays. |
| **Dark grey** | `#333333` | Body text on light backgrounds, icons and dividers. |
| **Beige** | `#F5F5DC` | Background on light sections (hero, product listings) to create warmth. |
| **White** | `#FFFFFF` | Text on dark backgrounds and section backgrounds. |

Notes:

* Ensure a minimum contrast ratio of 4.5:1 for text on backgrounds. When overlaying text on photography, add a semi‑transparent gradient to meet contrast requirements.

* In dark sections (e.g., shop header), invert body text to white and lighten accent colours accordingly.

### **Typography**

Use **Playfair Display** (or another elegant serif) for headings and **Open Sans** (or a similar humanist sans-serif) for body copy. Both fonts are available in Google Fonts; substitute with system fonts if unavailable. All sizes use `clamp(min, viewport‑based, max)` for responsiveness. Suggested scales:

| Element | Weight | Clamp values | Notes |
| ----- | ----- | ----- | ----- |
| **H1** – page/hero titles | 700 | `clamp(2.4rem, 6vw, 4rem)` | Use for hero banners and important page headings. |
| **H2** – section headings | 600 | `clamp(2rem, 5vw, 3rem)` | Introduce major sections (e.g., “Our Brands”). |
| **H3** – card titles | 600 | `clamp(1.6rem, 4vw, 2.2rem)` | For product names, news headlines and sub‑sections. |
| **H4** – minor headings/labels | 500 | `clamp(1.3rem, 3vw, 1.8rem)` | Used in metadata and form labels. |
| **Body large** | 400 | `clamp(1.2rem, 2vw, 1.6rem)` | Lead paragraphs and callouts. |
| **Body text** | 400 | `clamp(1rem, 1.5vw, 1.3rem)` | Default paragraph text. |
| **Caption/meta** | 400 | `clamp(0.875rem, 1.2vw, 1rem)` | Tasting notes, prices, bylines. |

Guidelines:

* Set line‑height to 1.5 for body text and 1.2–1.3 for headings.

* Avoid all‑caps except for small labels; rely on font weight and size to create hierarchy.

* Use letter-spacing of `0.02em` on uppercase labels (e.g., category chips) to improve readability.

### **Imagery and tone**

Hero images should feature vineyards, cellars, bottles and lifestyle scenes that evoke craftsmanship and the Cape Winelands. Use high‑resolution images and compress them. Avoid generic stock; prefer authentic photography. For brand pages, include historic photographs and product hero shots. Apply gentle gradients on top of images to improve text legibility.

## **3 Layout and spacing**

### **Container system**

Use a set of container classes to constrain content width. Define these in the `theme.css` and Figma autolayout presets:

`.container-site { width: clamp(320px, 90vw, 1400px); margin-inline: auto; }`  
`.container-content { width: clamp(320px, 80vw, 960px); margin-inline: auto; }`  
`.container-wide { width: clamp(320px, 95vw, 1200px); margin-inline: auto; }`  
`.container-full { width: 100vw; margin-left: calc(50% - 50vw); }`

### **Spacing system**

Define spacing tokens for padding, margins and gaps. Use descriptive classes rather than pixel values. Examples:

`.padding-section { padding-block: clamp(3rem, 6vw, 5rem); }`  
`.padding-inner { padding-inline: clamp(1rem, 4vw, 3rem); }`  
`.gap-sm { gap: clamp(0.5rem, 1.5vw, 1.5rem); }`  
`.gap-lg { gap: clamp(1rem, 3vw, 3rem); }`

Guidelines:

* Start with a single column layout on mobile; stack sections vertically with generous spacing.

* Introduce two‑column grids at tablet widths for product listings and brand stories. On desktop, use three or four columns for product cards but ensure consistent gutters.

* The header is sticky but should reduce in height after scrolling. Add a subtle shadow to separate it from content.

## **4 Components**

### **4.1 Header & navigation**

The website requires two distinct header and footer experiences to cater to the different user contexts (Corporate vs. Shop).

**Logos:**
*   Use the `KWVLogo` SVG component for the corporate header (high quality vector recreation).
*   Use the `KWVShopLogo` component for the shop header (Clean lockup of KWV logo + "SHOP ONLINE").

**Main Website Header:**
*   **Context:** Used on Home, About, History, Brands, News, Experiences, and other corporate pages.
*   **Navigation Structure:**
    *   **Online Shop** (Link to shop home)
    *   **Account Login** (Link to My Account)
    *   **Our Company** (Mega Menu): About Us, History, Our Brands, News, Careers, Executive Team, Sustainability, Wine Club.
    *   **KWV Shop** (Link to Shop)
    *   **Visit Us** (Dropdown or Link to Experiences landing)
    *   **FAQ**
    *   **Contact Us**
    *   **Join our Wine Club** (CTA Button)

**Shop Header:**
*   **Context:** Used on Shop Home, Product Categories, Single Product, Cart, Checkout, My Account.
*   **Navigation Structure:**
    *   **Login Here**
    *   **Promotions**
    *   **Brands** (Dropdown with list of key brands)
    *   **Spirits** (Dropdown with sub-categories: Brandy, Gin, Vodka, etc.)
    *   **Wine** (Dropdown with sub-categories: Red, White, Sparkling, etc.)
    *   **Mixers**
    *   **Visit Us**
    *   **Gifting**
    *   **FAQ**
    *   **Pricelist**
    *   **Join our Wine Club** (CTA Button)

**Mobile navigation:**
*   Both headers collapse into a hamburger menu on mobile.
*   Ensure the specific menu items for the current context are preserved in the mobile view.

**Search:**
*   Provide a search icon in the header that opens a modal with a search field.
*   Show live suggestions (products or pages) as the user types.

**Age verification:**
*   On first load, display an age‑verification modal asking “Are you over 18?”; use a checkbox or buttons for Yes/No. Store the choice locally to avoid repeat prompts.

### **4.2 Hero banners**

Used on the home page, brand taxonomy pages and product categories. Each hero includes a background image, an overlay colour, headline (H1) and supporting text. Optionally include primary and secondary buttons (e.g. “Shop Now”, “Explore Brand”). On mobile, stack the text below the image; on desktop, overlay the text with a gradient.

### **4.3 Product card**

Display products in grids on the shop landing page, category pages and brand pages. Each card includes:

* Product image (16:9 or 3:4 ratio), lazy‑loaded.

* Brand name and product name (H3). Use the brand chip as a label.

* Price and any promotional badge (e.g., “15 % Off All Wine Orders of R500+” – as shown on the current site banners). Represent discounts clearly, using strikethrough for original price.

* Add‑to‑cart button; show “Out of stock” or “Join waitlist” states based on inventory data. For subscription wines, the button should link to the subscription form.

* On hover (desktop), raise the card slightly with a shadow; on tap (mobile), navigate to the product page.

### **4.4 Brand hero & timeline**

Brand taxonomy pages should start with a hero section featuring the brand logo and tagline, followed by a **timeline or story** about the brand’s heritage. Use a vertical timeline or horizontal slider to tell the story (e.g., KWV’s establishment in 1918). Use cards for milestones (year, event, description) and include imagery where available.

### **4.5 Filters & sorting**

In the shop and brand pages, include collapsible filter panels for **Brand**, **Price range**, **Type**, **Volume** and **Special offers** (as extracted from the shop PDFs). Provide sliders or range inputs for numeric filters. Show an active filter bar summarising selected filters with clear removal controls.

### **4.6 Wine club subscription CTA**

Promote the KWV Wine Club (Edition 11\) subscription with a dedicated section. Include a brief description (e.g., monthly curated wines, exclusive benefits), an image of the wine pack and a call‑to‑action button leading to the subscription page. Use a contrasting background (gold or beige) to draw attention.

### **4.7 Newsletter sign‑up**

Encourage visitors to join the KWV family by subscribing to the newsletter. Provide an email input, name fields and a clear success/error message area. Place this section near the footer on both corporate and shop pages.

### **4.8 Footer**

Separate the corporate and shop footers:

* **Corporate footer** – three columns: About KWV (brief description), Quick links (About, History, Brands, Sustainability, News, Careers, Contact), and Social & legal links (Facebook, Instagram, Twitter, Terms & Conditions, Privacy & POPI). Include the company tagline “Leading South African wine & spirits producer with a distinguished heritage”.

* **Shop footer** – four columns: Product categories (Wine, Spirits, Mixers, Gifting), Customer care (FAQ, Pricelist, Contact), About (Our Story, Sustainability, Experiences) and Newsletter sign‑up. Include an age‑restriction notice (“Alcohol not for sale to persons under the age of 18”).

## **5 Patterns and WooCommerce Templates**

The prototype must adhere to standard WooCommerce block template structures. Although built in React, the layout and logic should mirror how WooCommerce Blocks function to ensure easy translation to the final WordPress theme.

**Required WooCommerce Templates:**

1.  **Shop (Product Archive):** Standard grid layout with sidebar filters (Brand, Price, Type, Volume).
2.  **Single Product:** Standard two-column layout (Gallery left, Info right). Tabs for description, additional info, reviews. Related products section at bottom.
3.  **Product Category / Brand / Tag:** Variations of the Shop template, filtered by taxonomy.
4.  **Cart:** Standard table layout with line items, quantity adjusters, coupon code field, and cart totals.
5.  **Checkout:** Two-column layout (Billing/Shipping details left, Order Review/Payment right).
6.  **Mini Cart:** Slide-out drawer or dropdown showing recent items and subtotal.
7.  **Order Confirmation:** "Thank You" page with order details and downloads.
8.  **My Account (Logged Out):** Login / Register form split.
9.  **My Account (Logged In):** Dashboard with tabs for Orders, Addresses, Account Details, Logout.
10. **Product Search Results:** Grid layout similar to Shop, but for search queries.

**Corporate Patterns:**

*   **Hero banner patterns** – generic hero with image, overlay and text; variation for news pages with call‑to‑action.
*   **Timeline pattern** – vertical/horizontal timeline for history pages and brand stories.
*   **Article/news card pattern** – for News & Awards posts.
*   **Form pattern** – contact form, newsletter sign‑up, subscription sign‑up.
*   **Carousel/slider** – used for brand logos and testimonials.

## **6 Templates and pages**

Define the following **Page templates** and describe their structure for the Figma prototype:

1.  **Home** – age verification (if first visit); hero banner promoting latest news or seasonal campaign; sections for *Our Brands* (logo grid linking to each brand page), *Our Spirits* and *Our Wines*; highlights of *Latest News & Awards* with cards linking to posts; call‑to‑action to join the wine club; newsletter sign‑up; corporate footer.
2.  **Shop Landing** – hero with promotion banner; filter sidebar and product grid; featured collections; subscription CTA; shop footer.
3.  **Single Product** – large gallery with zoom/lightbox; product title, price, description, tasting notes and rating; add‑to‑cart button; quantity selector; toggles for subscription or one‑off purchase; accordion for details; related products.
4.  **Cart & Checkout** - Standard WooCommerce flows.
5.  **My Account** - Login/Register and Dashboard views.
6.  **Our Brands** – A grid or list of all KWV brands (Roodeberg, The Mentors, Laborie, etc.) with logos and links to their respective brand pages.
7.  **Join Our Wine Club** – Dedicated subscription page based on [KWV Wine Club](https://kwv.lightspeedwp.dev/our-company/winemakers-club-11/). Features benefits, pack details, and sign-up form.
8.  **About Us Hub** – An expanded entry point linking to:
    *   **History** (Timeline)
    *   **Awards** (Responsive grid/list of accolades)
    *   **Careers** (Job listings/Culture)
    *   **Executive Team** (Profiles)
    *   **Sustainability** (Initiatives)
    *   **Experiences** (Visit Us)
9.  **News & Awards** – Blog index listing posts; filters by year or tag; single post page.
10. **Visit Us (Experiences)** – Landing page with options for Tastings, Emporium, Cathedral Cellar, House of Fire.
11. **Contact** – Contact details and form.

## **7 Content and CMS considerations**

To ensure content editors can manage the site efficiently:

* **Use custom post types and taxonomies**: `brand`, `product`, `news`, `award`, `experience`. Associate products with brands and categories. Use ACF or block‑based custom fields for tasting notes, grape varieties, awards, etc.

* **Dynamic product updates**: integrate with the SAP API as described in the meeting notes; allow editors to revise titles and descriptions before publishing. Provide guidance on the workflow and ensure WooCommerce product attributes align with SAP fields.

* **Price list block**: create a reusable block that fetches pricing data from the middleware and displays it with filters (e.g., by category or brand). Provide CSV import capabilities.

* **Subscription management**: implement the WooCommerce Subscriptions plugin and set up automations via AutomateWoo for welcome emails and renewal reminders. Include a terms & conditions checkbox.

* **Age verification and cookie banner**: required by law; integrate with a consent management plugin.

## **8 Performance, accessibility & SEO**

* **Performance**: optimise images, enable lazy loading and use a CDN. Minimise JavaScript; avoid heavy sliders on the home page unless necessary. Utilise caching and server‑side rendering. Follow the guidelines for plugin optimisation in the project overview.

* **Accessibility**: follow WCAG 2.1 AA. Use semantic HTML, ARIA roles and labels, keyboard navigable menus and modals, sufficient colour contrast and focus styling. Provide skip‑to‑content links.

* **SEO & metadata**: include descriptive page titles, meta descriptions and Open Graph tags. Use structured data for products, articles and organisation. Maintain a proper heading hierarchy. Provide alt text for all images and transcripts for videos.

## **9 Development guidelines**

* **Code organisation**: follow a modular architecture with **React functional components**. Document components with JSDoc, including props, default values and accessibility notes.

* **Naming conventions**: adopt BEM or utility‑based class names; avoid long nested selectors. Use `utility` classes for spacing, typography and colours.

* **State management**: rely on WordPress data stores for content; use React state sparingly (e.g., filter selections). Avoid heavy client‑side state libraries.

* **Internationalisation**: prepare strings for translation (English by default); ensure currency formatting uses South African Rand (R).

* **Testing & QA**: write unit tests for components and integrate end‑to‑end tests with Playwright or Cypress. Conduct cross‑browser testing and ensure responsive layouts across breakpoints.

* **Deployment**: host on a performant platform (e.g., Kinsta or WP Engine). Use CI/CD pipelines for staging and production; implement caching and monitoring.

## **10 Acceptance criteria**

For each component or page, create acceptance criteria such as:

1. **Header**: displays correct menu for context (corporate/shop); collapses into a hamburger on screens below 768 px; remains sticky; search modal accessible via keyboard; age verification displayed on first visit.

2. **Product grid**: filters can be applied and removed without page reloads; grid displays correct number of products; loading states and empty states are present; out‑of‑stock items display a clear label.

3. **Timeline**: events load dynamically; timeline is keyboard navigable; items maintain equal spacing across devices; ARIA labels correctly describe years and events.

4. **Newsletter sign‑up**: form validates email; success and error messages are announced via ARIA live regions; double opt‑in integrated with mailing service.

5. **Subscription page**: subscription forms create a subscription product; pricing is correct; terms & conditions must be accepted; user receives confirmation email.

## **11 WordPress 6.9 and theme.json enhancements**

WordPress 6.9 introduces major improvements to the block theme API. To ensure the KWV theme is future‑proof and maximises editor flexibility, adopt the following enhancements:

### **Numeric slugs & fluid scales**

* **Spacing and typography sizes** should use **numeric slugs** (`10`, `20`, `30`, etc.) rather than semantic names. Numeric slugs allow predictable scaling, machine‑readable scripts and clean CSS variables (e.g. `--wp--preset--spacing--20`). Map these slugs to Figma tokens (`space.20`, `font.200`, etc.).

* Define complete **spacing scales** in `theme.json` using `clamp()` so that margins, padding and gaps scale smoothly from 320 px to 1440 px. Provide increments from 10 to 100 with documented values in the theme file.

* Implement a **fluid typography system** with `fluid` definitions in `theme.json`. Set global minimum and maximum viewport widths (e.g., 320 px to 1440 px) and define each font size preset with `min` and `max` values. This eliminates media queries and ensures text scales automatically.

### **Block‑level settings vs global**

* Use `settings.blocks` in `theme.json` to **restrict options per block**. For example, limit buttons to primary/secondary/CTA colours, prevent custom font sizes on buttons and define fixed spacing for navigation menus. This enforces brand consistency and reduces editor error.

* Global presets (colours, spacing, typography) are defined in the root `settings` object and inherited by all blocks. Override them at block level only when necessary to restrict or extend options.

### **Presets & new WP 6.9 features**

Add the following preset groups in `theme.json` to leverage WordPress 6.9:

* **Border radius presets** – define sizes (`none`, `small`, `medium`, `large`, `full`) and reference them via variables in block styles.

* **Aspect ratio presets** – provide ratios (square, 4/3, 16/9, 21/9, etc.) so editors can select image proportions without custom values. Use these in hero sections and image blocks.

* **Shadow presets** – define light and dark mode shadow scales (`small`, `medium`, `large`, `x-large`) to apply depth consistently. In dark mode, increase opacity for improved visibility.

* **Fluid typography settings** – include `fluid` properties with min/max viewport widths to auto‑generate clamp() values for font sizes.

* **Focus and outline styles** – implement `:focus` and `:focus-visible` pseudo‑selectors in button and link styles to meet WCAG 2.1 AA requirements. Use accessible outlines (e.g., 2 px solid CTA colour).

* **Background image controls** – enable background image settings in `theme.json` so editors can set images on cover blocks and control size and position.

### **Style variations architecture**

To support dark mode, high‑contrast variants and future brand themes, adopt a **composable styles folder**. A proposed structure is as follows:

`styles/`  
`├── defaults.json          # Base styles inherited by all variations`  
`├── color-palettes/        # light.json, dark.json, high-contrast.json`  
`├── typesets/              # sans-serif.json, serif.json, monospace.json`  
`├── block-styles/          # button-primary.json, button-rounded.json, outline.json, ghost.json, etc.`  
`├── section-styles/        # hero.json, content-box.json, footer.json, testimonial.json, cta-banner.json`  
`└── variations/            # dark.json, high-contrast.json, compact.json, ocean.json, ocean-serif.json`

Each file defines only the properties it needs and inherits from `defaults.json`. Variation files combine palettes, typesets and custom accents to create new themes without duplication. This architecture allows the KWV theme to add, for example, a festive Christmas palette or a summer promotion variation by composing existing presets.

### **Implementation roadmap**

The WordPress 6.9 evaluation identified several **critical gaps** that must be addressed before production. Key tasks include:

1. **Block‑level settings (P0‑1)** – configure per‑block colour and typography options to enforce brand consistency and prevent misuse. Estimated 4–6 hours.

2. **Complete shadow system (P0‑2)** – implement full shadow scale in both light and dark themes and apply to all relevant blocks.

3. **Spacing and typography scales (P0‑3 & P0‑4)** – document and implement numeric spacing sizes and line‑height/letter‑spacing scales using `clamp()`.

4. **Contrast validation (P0‑5)** – add tests to ensure all colour combinations meet WCAG AA contrast ratios.

5. **Refactor styles folder (Phase 2\)** – adopt the composable architecture with palettes, typesets, block and section styles. This will expand the number of style files from 7 to \~27 and allow safe composition of variations.

Completing these tasks will ensure full utilisation of WordPress 6.9 capabilities, improve maintainability and provide editors with a rich library of styles.
