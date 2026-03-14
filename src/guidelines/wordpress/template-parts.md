# WordPress Template Parts

**Category:** WordPress  
**Domain:** Block Theme Templates  
**Version:** 1.0  
**Last Updated:** 2024-03-13  
**Status:** Active

---

## Overview

The Wire Brand uses WordPress Block Theme architecture with template parts for reusable sections (header, footer). Template parts ensure consistency across all pages and reduce duplication.

**Template Part Locations:**
- `/wp-content/themes/thewire/parts/header.html`
- `/wp-content/themes/thewire/parts/footer.html`
- `/wp-content/themes/thewire/parts/...`

**Benefits:**
- ✅ Reusable across all templates
- ✅ Editable in Site Editor (no code)
- ✅ Version controlled (HTML files)
- ✅ Consistent branding

---

## Required Template Parts

### 1. Header (`parts/header.html`)

**Purpose:** Global site header with logo, navigation, cart, account links

```html
<!-- wp:group {"style":{"spacing":{"padding":{"top":"1.5rem","bottom":"1.5rem"}}},"backgroundColor":"twb-plum","className":"site-header"} -->
<div class="wp-block-group site-header has-twb-plum-background-color has-background" style="padding-top:1.5rem;padding-bottom:1.5rem">

  <!-- wp:group {"layout":{"type":"flex","justifyContent":"space-between","flexWrap":"nowrap"}} -->
  <div class="wp-block-group">
  
    <!-- Site Logo -->
    <!-- wp:site-logo {"width":150} /-->
    
    <!-- Desktop Navigation -->
    <!-- wp:navigation {"layout":{"type":"flex","justifyContent":"center"},"className":"desktop-nav"} /-->
    
    <!-- Utility Links -->
    <!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap"},"className":"header-utility"} -->
    <div class="wp-block-group header-utility">
      <!-- Search -->
      <!-- wp:search {"showLabel":false,"buttonText":"Search","buttonUseIcon":true} /-->
      
      <!-- Account Link -->
      <!-- wp:navigation-link {"label":"Account","url":"/my-account/"} /-->
      
      <!-- WooCommerce Mini Cart -->
      <!-- wp:woocommerce/mini-cart /-->
    </div>
    <!-- /wp:group -->
    
  </div>
  <!-- /wp:group -->

</div>
<!-- /wp:group -->
```

### 2. Footer (`parts/footer.html`)

**Purpose:** Global site footer with links, newsletter, copyright

```html
<!-- wp:group {"style":{"spacing":{"padding":{"top":"3rem","bottom":"3rem"}}},"backgroundColor":"twb-ink","textColor":"white","className":"site-footer"} -->
<div class="wp-block-group site-footer has-white-color has-twb-ink-background-color has-text-color has-background" style="padding-top:3rem;padding-bottom:3rem">

  <!-- wp:group {"layout":{"type":"constrained"}} -->
  <div class="wp-block-group">
  
    <!-- Footer Columns -->
    <!-- wp:columns {"align":"wide"} -->
    <div class="wp-block-columns alignwide">
    
      <!-- Column 1: Brand -->
      <!-- wp:column -->
      <div class="wp-block-column">
        <!-- wp:site-logo {"width":120} /-->
        
        <!-- wp:paragraph {"fontSize":"small","style":{"color":{"text":"rgba(255,255,255,0.8)"}}} -->
        <p class="has-text-color has-small-font-size" style="color:rgba(255,255,255,0.8)">
          Handcrafted wines from Paarl, South Africa.
        </p>
        <!-- /wp:paragraph -->
      </div>
      <!-- /wp:column -->
      
      <!-- Column 2: Shop Links -->
      <!-- wp:column -->
      <div class="wp-block-column">
        <!-- wp:heading {"level":4,"textColor":"white"} -->
        <h4 class="has-white-color has-text-color">Shop</h4>
        <!-- /wp:heading -->
        
        <!-- wp:navigation {"overlayMenu":"never","layout":{"type":"flex","orientation":"vertical"},"style":{"spacing":{"blockGap":"0.5rem"}}} /-->
      </div>
      <!-- /wp:column -->
      
      <!-- Column 3: Company Links -->
      <!-- wp:column -->
      <div class="wp-block-column">
        <!-- wp:heading {"level":4,"textColor":"white"} -->
        <h4 class="has-white-color has-text-color">Company</h4>
        <!-- /wp:heading -->
        
        <!-- wp:navigation {"overlayMenu":"never","layout":{"type":"flex","orientation":"vertical"},"style":{"spacing":{"blockGap":"0.5rem"}}} /-->
      </div>
      <!-- /wp:column -->
      
      <!-- Column 4: Newsletter -->
      <!-- wp:column -->
      <div class="wp-block-column">
        <!-- wp:heading {"level":4,"textColor":"white"} -->
        <h4 class="has-white-color has-text-color">Newsletter</h4>
        <!-- /wp:heading -->
        
        <!-- wp:paragraph {"fontSize":"small"} -->
        <p class="has-small-font-size">Stay updated with our latest releases and offers.</p>
        <!-- /wp:paragraph -->
        
        <!-- Newsletter Form (core/form) -->
        <!-- wp:form -->
        <form class="wp-block-form">
          <!-- wp:form-input {"type":"email","name":"email","placeholder":"Your email","required":true} /-->
          <!-- wp:form-submit {"text":"Subscribe"} /-->
        </form>
        <!-- /wp:form -->
      </div>
      <!-- /wp:column -->
      
    </div>
    <!-- /wp:columns -->
    
    <!-- Copyright -->
    <!-- wp:separator {"style":{"spacing":{"margin":{"top":"2rem","bottom":"2rem"}}},"backgroundColor":"white","className":"opacity-20"} -->
    <hr class="wp-block-separator has-text-color has-white-color has-alpha-channel-opacity has-white-background-color has-background opacity-20" style="margin-top:2rem;margin-bottom:2rem"/>
    <!-- /wp:separator -->
    
    <!-- wp:paragraph {"align":"center","fontSize":"small","style":{"color":{"text":"rgba(255,255,255,0.6)"}}} -->
    <p class="has-text-align-center has-text-color has-small-font-size" style="color:rgba(255,255,255,0.6)">
      © 2024 The Wire Brand. All rights reserved.
    </p>
    <!-- /wp:paragraph -->
    
  </div>
  <!-- /wp:group -->

</div>
<!-- /wp:group -->
```

---

## Optional Template Parts

### 3. Breadcrumbs (`parts/breadcrumbs.html`)

**Purpose:** Navigation breadcrumb trail (for product pages, blog posts)

```html
<!-- wp:group {"className":"breadcrumbs","style":{"spacing":{"padding":{"top":"1rem","bottom":"1rem"}}}} -->
<div class="wp-block-group breadcrumbs" style="padding-top:1rem;padding-bottom:1rem">
  
  <!-- wp:paragraph {"fontSize":"small"} -->
  <p class="has-small-font-size">
    <!-- Breadcrumb generated by Yoast SEO or custom code -->
  </p>
  <!-- /wp:paragraph -->
  
</div>
<!-- /wp:group -->
```

### 4. Post Meta (`parts/post-meta.html`)

**Purpose:** Display post date, author, categories (for blog posts)

```html
<!-- wp:group {"layout":{"type":"flex","flexWrap":"wrap"},"className":"post-meta"} -->
<div class="wp-block-group post-meta">
  
  <!-- Post Date -->
  <!-- wp:post-date {"format":"F j, Y"} /-->
  
  <!-- Separator -->
  <!-- wp:paragraph -->
  <p>•</p>
  <!-- /wp:paragraph -->
  
  <!-- Post Author -->
  <!-- wp:post-author {"showAvatar":false} /-->
  
  <!-- Separator -->
  <!-- wp:paragraph -->
  <p>•</p>
  <!-- /wp:paragraph -->
  
  <!-- Post Categories -->
  <!-- wp:post-terms {"term":"category"} /-->
  
</div>
<!-- /wp:group -->
```

### 5. Newsletter Signup (`parts/newsletter-cta.html`)

**Purpose:** Standalone newsletter signup section (can be inserted anywhere)

```html
<!-- wp:group {"style":{"spacing":{"padding":{"top":"3rem","bottom":"3rem"}}},"backgroundColor":"twb-paper","className":"newsletter-cta"} -->
<div class="wp-block-group newsletter-cta has-twb-paper-background-color has-background" style="padding-top:3rem;padding-bottom:3rem">

  <!-- wp:group {"layout":{"type":"constrained","contentSize":"600px"}} -->
  <div class="wp-block-group">
  
    <!-- wp:heading {"textAlign":"center"} -->
    <h2 class="has-text-align-center">Join Our Wine Club</h2>
    <!-- /wp:heading -->
    
    <!-- wp:paragraph {"align":"center"} -->
    <p class="has-text-align-center">
      Get exclusive access to new releases, special offers, and wine tasting events.
    </p>
    <!-- /wp:paragraph -->
    
    <!-- wp:form -->
    <form class="wp-block-form">
      <!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap"}} -->
      <div class="wp-block-group">
        <!-- wp:form-input {"type":"email","name":"email","placeholder":"Your email","required":true} /-->
        <!-- wp:form-submit {"text":"Subscribe"} /-->
      </div>
      <!-- /wp:group -->
    </form>
    <!-- /wp:form -->
    
  </div>
  <!-- /wp:group -->

</div>
<!-- /wp:group -->
```

---

## Using Template Parts in Templates

### Insert Template Part

```html
<!-- Insert header template part -->
<!-- wp:template-part {"slug":"header","tagName":"header"} /-->

<!-- Page content -->
<main>
  <!-- Content blocks -->
</main>

<!-- Insert footer template part -->
<!-- wp:template-part {"slug":"footer","tagName":"footer"} /-->
```

### Full Page Template Example (`templates/page.html`)

```html
<!-- wp:template-part {"slug":"header","tagName":"header"} /-->

<!-- wp:group {"tagName":"main"} -->
<main class="wp-block-group">
  
  <!-- Page Title -->
  <!-- wp:post-title /-->
  
  <!-- Page Content -->
  <!-- wp:post-content /-->
  
</main>
<!-- /wp:group -->

<!-- wp:template-part {"slug":"footer","tagName":"footer"} /-->
```

---

## Creating Template Parts (Site Editor)

### Method 1: Via Site Editor (No Code)

1. **Dashboard → Appearance → Editor**
2. **Click "Patterns" (sidebar)**
3. **Click "Template Parts" tab**
4. **Click "+ Create Template Part"**
5. **Choose type: Header, Footer, or General**
6. **Design using blocks**
7. **Save**

### Method 2: Via Code (HTML Files)

1. **Create file:** `/wp-content/themes/thewire/parts/header.html`
2. **Add block markup** (see examples above)
3. **Save file**
4. **Refresh Site Editor** (template part appears automatically)

---

## Template Part Metadata

### Define Template Part Area (theme.json)

```json
{
  "version": 2,
  "templateParts": [
    {
      "name": "header",
      "title": "Header",
      "area": "header"
    },
    {
      "name": "footer",
      "title": "Footer",
      "area": "footer"
    },
    {
      "name": "sidebar",
      "title": "Sidebar",
      "area": "uncategorized"
    }
  ]
}
```

---

## Styling Template Parts

### Global Styles (theme.json)

```json
{
  "styles": {
    "blocks": {
      "core/template-part": {
        "header": {
          "elements": {
            "link": {
              "color": {
                "text": "var(--wp--preset--color--white)"
              }
            }
          }
        },
        "footer": {
          "spacing": {
            "padding": {
              "top": "3rem",
              "bottom": "3rem"
            }
          }
        }
      }
    }
  }
}
```

### Custom CSS (style.css)

```css
/* Header Template Part */
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  height: 90px;
}

@media (min-width: 1024px) {
  .site-header {
    height: 100px;
  }
}

/* Desktop Navigation (hide on mobile) */
.desktop-nav {
  display: none;
}

@media (min-width: 1024px) {
  .desktop-nav {
    display: flex;
  }
}

/* Footer Template Part */
.site-footer {
  background-color: var(--wp--preset--color--twb-ink);
  color: var(--wp--preset--color--white);
}

.site-footer a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
}

.site-footer a:hover {
  color: white;
}
```

---

## Best Practices

### 1. Keep Template Parts Simple

**✅ Good: Focused template part**
```html
<!-- Header: Logo + Nav only -->
```

**❌ Bad: Template part doing too much**
```html
<!-- Header + Hero + Featured Products -->
```

### 2. Use Semantic HTML

```html
<!-- Header uses <header> tag -->
<!-- wp:template-part {"slug":"header","tagName":"header"} /-->

<!-- Footer uses <footer> tag -->
<!-- wp:template-part {"slug":"footer","tagName":"footer"} /-->
```

### 3. Make Template Parts Editable

**Allow site editors to customize:**
- Navigation menu items
- Footer links
- Newsletter CTA text
- Social media icons

**Don't lock down:**
- Text content
- Link URLs
- Image selections

---

## Related Guidelines

- [Blocks Reference](/guidelines/wordpress/blocks-reference.md) - Block types
- [Navigation](/guidelines/design-tokens/navigation.md) - Navigation patterns

---

## Changelog

### Version 1.0 (2024-03-13)
- Header template part created
- Footer template part created
- Optional template parts documented
- Template part usage explained
- Best practices established

---

**Questions or Issues?**  
Reference [WordPress Theme Developer Handbook](https://developer.wordpress.org/themes/) or contact the development team.
