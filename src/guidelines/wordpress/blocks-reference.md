# WordPress Blocks Reference

**Category:** WordPress  
**Domain:** Block Editor (Gutenberg)  
**Version:** 1.0  
**Last Updated:** 2024-03-13  
**Status:** Active

---

## Overview

The Wire Brand WordPress implementation uses **core blocks and WooCommerce blocks only**—no page builders, widgets, or shortcodes. This ensures performance, maintainability, and future compatibility.

**Block Policy:**
- ✅ Core WordPress blocks (Paragraph, Heading, Image, Group, etc.)
- ✅ Core theme blocks (Query Loop, Navigation, Site Logo, etc.)
- ✅ WooCommerce blocks (Product Grid, Cart, Checkout, etc.)
- ❌ Third-party page builders (Elementor, Divi, etc.)
- ❌ Shortcodes (legacy WordPress pattern)
- ❌ Widgets (use blocks instead)

---

## Core Content Blocks

### Text Blocks

**Paragraph** (`core/paragraph`)
- Standard body text
- Supports text alignment, color, typography

**Heading** (`core/heading`)
- H1-H6 headings
- Configurable level, alignment, color

**List** (`core/list`)
- Ordered and unordered lists
- Nested lists supported

**Quote** (`core/quote`)
- Blockquotes with optional citation

**Code** (`core/code`)
- Inline code snippets

---

## Media Blocks

**Image** (`core/image`)
- Upload or select from media library
- Alt text (required for accessibility)
- Caption support
- Link to media file or custom URL

**Gallery** (`core/gallery`)
- Multiple images in grid layout
- 1-8 columns configurable
- Individual image captions

**Video** (`core/video`)
- Upload video or embed URL
- Autoplay, loop, muted options

**Audio** (`core/audio`)
- Audio player
- Upload MP3 or link to file

---

## Layout Blocks

**Group** (`core/group`)
- Container for other blocks
- Background color/image support
- Padding/margin controls

**Columns** (`core/columns`)
- Multi-column layouts
- Configurable column widths
- Responsive (stack on mobile)

**Spacer** (`core/spacer`)
- Vertical spacing between blocks
- Height customizable

**Separator** (`core/separator`)
- Horizontal line divider
- Style options (wide, full-width)

---

## Interactive Blocks

**Button** (`core/button`)
- Call-to-action buttons
- Link URL, text, alignment
- Style variants (fill, outline)

**Buttons** (`core/buttons`)
- Group multiple buttons
- Horizontal arrangement

**Form** (`core/form`)  
**New in WordPress 6.4+**
- Contact forms, newsletter signup
- Uses `core/form-input`, `core/form-submit-button`

Example:
```html
<!-- Form Block -->
<form class="wp-block-form">
  <!-- Name Input -->
  <div class="wp-block-form-input">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" required>
  </div>
  
  <!-- Email Input -->
  <div class="wp-block-form-input">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required>
  </div>
  
  <!-- Submit Button -->
  <button type="submit" class="wp-block-form-submit-button">
    Submit
  </button>
</form>
```

---

## Advanced Blocks

**Accordion** (`core/accordion`)  
**New in WordPress 6.7+**
- Collapsible sections for FAQs
- Uses `core/accordion-item`

Example:
```html
<!-- Accordion Block -->
<div class="wp-block-accordion">
  <!-- Accordion Item 1 -->
  <details class="wp-block-accordion-item">
    <summary>What is your return policy?</summary>
    <div class="wp-block-accordion-item__content">
      <p>We accept returns within 30 days...</p>
    </div>
  </details>
  
  <!-- Accordion Item 2 -->
  <details class="wp-block-accordion-item">
    <summary>How long does shipping take?</summary>
    <div class="wp-block-accordion-item__content">
      <p>Standard shipping takes 3-5 business days...</p>
    </div>
  </details>
</div>
```

**Query Loop** (`core/query`)
- Display posts dynamically (blog, news)
- Filters: category, tag, author, date
- Pagination support

**Post Template** (`core/post-template`)
- Used inside Query Loop
- Defines how each post displays

Example:
```html
<!-- Query Loop: Latest News -->
<div class="wp-block-query">
  <div class="wp-block-post-template">
    <!-- Post Title -->
    <h2 class="wp-block-post-title"></h2>
    
    <!-- Post Featured Image -->
    <div class="wp-block-post-featured-image"></div>
    
    <!-- Post Excerpt -->
    <div class="wp-block-post-excerpt"></div>
    
    <!-- Post Date -->
    <div class="wp-block-post-date"></div>
  </div>
  
  <!-- Pagination -->
  <div class="wp-block-query-pagination"></div>
</div>
```

---

## Theme Blocks (Block Themes)

**Site Logo** (`core/site-logo`)
- Display site logo (configured in Customizer)

**Site Title** (`core/site-title`)
- Display site name

**Site Tagline** (`core/site-tagline`)
- Display site description

**Navigation** (`core/navigation`)
- Primary, footer, mobile menus
- Uses `core/navigation-link` for items

**Template Part** (`core/template-part`)
- Reusable sections (header, footer)

---

## WooCommerce Blocks

### Product Display Blocks

**Product Grid** (`woocommerce/product-grid`)
- Display products in grid
- Filter by category, tag, attribute
- Columns configurable

**Featured Product** (`woocommerce/featured-product`)
- Highlight single product

**Products by Category** (`woocommerce/products-by-category`)
- Category-specific product grid

**Hand-Picked Products** (`woocommerce/hand-picked-products`)
- Manually select specific products

---

### Cart & Checkout Blocks

**Cart Block** (`woocommerce/cart`)
- Complete cart page
- Item list, totals, proceed to checkout

**Checkout Block** (`woocommerce/checkout`)
- Multi-step checkout flow
- Shipping, billing, payment forms

**Mini Cart** (`woocommerce/mini-cart`)
- Slide-out cart drawer
- Quick view of cart items

---

### Product Page Blocks

**Product Image Gallery** (`woocommerce/product-image-gallery`)
- Product photos with thumbnails

**Product Details** (`woocommerce/product-details`)
- Title, price, add to cart button

**Product Meta** (`woocommerce/product-meta`)
- SKU, categories, tags

**Product Reviews** (`woocommerce/product-reviews`)
- Customer reviews and ratings

---

## Block Patterns (Reusable Layouts)

### Creating Custom Block Patterns

Block patterns are pre-designed block arrangements that users can insert.

**Register pattern (functions.php):**
```php
<?php
register_block_pattern(
  'thewire/hero-wine',
  array(
    'title'       => __( 'Hero - Wine Feature', 'thewire' ),
    'description' => _x( 'Hero section with wine bottle image and text', 'Block pattern description', 'thewire' ),
    'categories'  => array( 'featured' ),
    'content'     => '<!-- wp:group {"backgroundColor":"twb-plum","textColor":"white"} -->
      <div class="wp-block-group has-twb-plum-background-color has-white-color">
        <!-- wp:columns -->
        <div class="wp-block-columns">
          <!-- wp:column -->
          <div class="wp-block-column">
            <!-- wp:image -->
            <figure class="wp-block-image"><img src="" alt="Wine bottle"/></figure>
            <!-- /wp:image -->
          </div>
          <!-- /wp:column -->
          
          <!-- wp:column -->
          <div class="wp-block-column">
            <!-- wp:heading -->
            <h2>2021 Cabernet Sauvignon</h2>
            <!-- /wp:heading -->
            
            <!-- wp:paragraph -->
            <p>Rich, bold, and full-bodied...</p>
            <!-- /wp:paragraph -->
            
            <!-- wp:buttons -->
            <div class="wp-block-buttons">
              <!-- wp:button -->
              <div class="wp-block-button"><a class="wp-block-button__link">Shop Now</a></div>
              <!-- /wp:button -->
            </div>
            <!-- /wp:buttons -->
          </div>
          <!-- /wp:column -->
        </div>
        <!-- /wp:columns -->
      </div>
      <!-- /wp:group -->',
  )
);
```

---

## Custom Block Development (Optional)

### When to Create Custom Blocks

**Create custom blocks for:**
- Wine tasting notes display
- Wine awards/accolades showcase
- Wine club membership tiers
- Sustainability metrics dashboard

**Don't create custom blocks for:**
- Layouts (use core Group, Columns)
- Simple content (use core Paragraph, Heading)
- Forms (use core Form block)

### Custom Block Structure (React/JSX)

```jsx
/**
 * Wine Tasting Notes Block
 * 
 * Custom block for displaying structured tasting notes.
 */
import { registerBlockType } from '@wordpress/blocks';
import { InspectorControls, RichText } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';

registerBlockType('thewire/tasting-notes', {
  title: 'Wine Tasting Notes',
  icon: 'wine',
  category: 'thewire',
  attributes: {
    wineName: { type: 'string', default: '' },
    appearance: { type: 'string', default: '' },
    aroma: { type: 'string', default: '' },
    palate: { type: 'string', default: '' },
    finish: { type: 'string', default: '' },
  },
  
  edit: ({ attributes, setAttributes }) => {
    return (
      <>
        <InspectorControls>
          <PanelBody title="Tasting Notes">
            <TextControl
              label="Wine Name"
              value={attributes.wineName}
              onChange={(val) => setAttributes({ wineName: val })}
            />
          </PanelBody>
        </InspectorControls>
        
        <div className="tasting-notes">
          <h3>{attributes.wineName || 'Wine Name'}</h3>
          
          <div className="tasting-note">
            <h4>Appearance</h4>
            <RichText
              value={attributes.appearance}
              onChange={(val) => setAttributes({ appearance: val })}
              placeholder="Describe appearance..."
            />
          </div>
          
          {/* More fields... */}
        </div>
      </>
    );
  },
  
  save: ({ attributes }) => {
    return (
      <div className="tasting-notes">
        <h3>{attributes.wineName}</h3>
        <div className="tasting-note">
          <h4>Appearance</h4>
          <RichText.Content value={attributes.appearance} />
        </div>
        {/* More fields... */}
      </div>
    );
  },
});
```

---

## Block Editor Best Practices

### 1. Use Semantic Structure

**✅ Good: Proper heading hierarchy**
```html
<h2>Section Title</h2>
  <h3>Subsection</h3>
  <h3>Another Subsection</h3>
<h2>Next Section</h2>
```

**❌ Bad: Skipping levels**
```html
<h2>Section</h2>
  <h4>Subsection</h4> <!-- Skipped h3 -->
```

### 2. Add Alt Text to All Images

**Required for accessibility (WCAG 2.1 AA)**

### 3. Use Reusable Blocks

**Create reusable blocks for:**
- Newsletter signup CTAs
- Social media follow sections
- Product highlight cards

**How to create:**
1. Design block arrangement
2. Select blocks → Click "⋮" → "Create Reusable block"
3. Name and save
4. Insert anywhere with `/reusable`

### 4. Limit Nesting Depth

**Maximum 3 levels of nesting:**
```html
<!-- Level 1: Group -->
<div class="wp-block-group">
  <!-- Level 2: Columns -->
  <div class="wp-block-columns">
    <!-- Level 3: Column -->
    <div class="wp-block-column">
      <!-- Content blocks -->
      <h2>Title</h2>
      <p>Content</p>
    </div>
  </div>
</div>
```

---

## Related Guidelines

- [Template Parts](/guidelines/wordpress/template-parts.md) - Header, footer templates
- [Forms](/guidelines/design-tokens/forms.md) - Form styling

---

## Changelog

### Version 1.0 (2024-03-13)
- Core blocks reference created
- WooCommerce blocks documented
- Block patterns guidance added
- Custom block development guidelines provided
- Best practices established

---

**Questions or Issues?**  
Reference [WordPress Block Editor Handbook](https://developer.wordpress.org/block-editor/) or contact the development team.
