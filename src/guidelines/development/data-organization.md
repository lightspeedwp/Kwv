# Data File Organization Guidelines

**Version:** 1.0  
**Last Updated:** 2026-03-17  
**Status:** Active  
**Related Guidelines:**
- [File Organization](/guidelines/development/file-organization.md)
- [JSDoc Standards](/guidelines/development/jsdoc-standards.md)

---

## Overview

This guideline defines when and how to create data files in the Handcrafted Wines project. Following these standards ensures data remains maintainable, discoverable, and performant.

**Scope:** Data file creation, organization, size limits, naming conventions, and splitting strategies  
**Out of Scope:** Component data fetching patterns (see routing guidelines)

---

## Core Principles

1. **Separation of Concerns:** Data should be separated from presentation logic - never hardcode content in components
2. **Single Responsibility:** Each data file should serve one clear purpose (products, farm story, FAQs, etc.)
3. **Size Limits:** Keep files under 20 KB for optimal loading and AI processing
4. **Type Safety:** All data exports must have TypeScript interfaces
5. **Documentation:** All data files must have comprehensive JSDoc headers

---

## When to Create a Data File

### ✅ **Create a New Data File When:**

1. **Content appears on 2+ pages**
   - Example: FAQs used in multiple sections → create `faqData.ts`
   
2. **Component exceeds 300 lines due to hardcoded content**
   - Example: News.tsx had 12 hardcoded posts (125 lines) → extracted to `newsPosts.ts`

3. **Content requires frequent updates by non-developers**
   - Example: Job listings, news posts, product catalog

4. **Content is shared across multiple components**
   - Example: Brand information, contact details → `site-content.ts`

5. **Content represents a distinct domain entity**
   - Example: Products, farm history, experiences, team members

### ❌ **DON'T Create a Data File When:**

1. **Content is page-specific and won't be reused**
   - Example: Homepage hero text - keep in component

2. **Content is less than 50 lines**
   - Example: Small arrays of 3-5 items - keep in component

3. **Content is purely presentational**
   - Example: CSS values, UI labels - use design tokens instead

---

## File Naming Conventions

### Standard Patterns

| Content Type | File Name | Example |
|--------------|-----------|---------|
| **Entity Collections** | `{plural}.ts` | `products.ts`, `jobs.ts`, `newsPosts.ts` |
| **Single Entities** | `{singular}.ts` | `farmStory.ts`, `site-content.ts` |
| **Categorized Data** | `{category}-{type}.ts` | `shop-faq.ts`, `shopBrands.ts` |
| **Deprecated Files** | Same name + JSDoc notice | `tastings.ts` (marked deprecated in header) |

### Naming Rules

- ✅ **Use camelCase:** `farmStory.ts`, `newsPosts.ts`, `shopBrands.ts`
- ✅ **Be descriptive:** `shop-faq.ts` not `faq.ts` (clarity over brevity)
- ✅ **Avoid abbreviations:** `products.ts` not `prods.ts`
- ❌ **Avoid version numbers:** `products-v2.ts` (use git history instead)

---

## Size Limits & Splitting Strategies

### Maximum Recommended Sizes

| File Type | Max Size | Max Lines | Reason |
|-----------|----------|-----------|--------|
| **Data files** | 20 KB | ~400 | AI processing, load performance |
| **Critical path data** | 10 KB | ~200 | Initial page load speed |
| **Lazy-loaded data** | 50 KB | ~1000 | Can be larger if lazy-loaded |

### When to Split Files

**Triggers for splitting:**
1. File exceeds 18 KB (90% of 20 KB limit)
2. File contains 40+ items in an array
3. File has multiple unrelated entity types
4. Build performance degrades (> 1s rebuild time)

### Splitting Strategies

#### Strategy 1: Split by Category

**Before (products.ts - 18.2 KB):**
```typescript
// All products in one file
export const products: Product[] = [
  // 30+ wine products
  // 15+ spirit products
  // 10+ cheese products
  // 8+ gift sets
];
```

**After:**
```typescript
// /data/products/wines.ts
export const wines: Product[] = [...];

// /data/products/spirits.ts
export const spirits: Product[] = [...];

// /data/products/cheese.ts
export const cheeses: Product[] = [...];

// /data/products/gifts.ts
export const giftSets: Product[] = [...];

// /data/products/index.ts (barrel export)
export * from './wines';
export * from './spirits';
export * from './cheese';
export * from './gifts';

export const allProducts = [...wines, ...spirits, ...cheeses, ...giftSets];
```

#### Strategy 2: Split by Era/Time Period

**Example: Timeline Events (18.2 KB):**
```typescript
// /data/timeline/early-years.ts (1918-1950)
export const earlyYears: TimelineEvent[] = [...];

// /data/timeline/golden-era.ts (1951-1980)
export const goldenEra: TimelineEvent[] = [...];

// /data/timeline/modern-era.ts (1981-2000)
export const modernEra: TimelineEvent[] = [...];

// /data/timeline/recent.ts (2001-present)
export const recentYears: TimelineEvent[] = [...];

// /data/timeline/index.ts
export const timeline = [...earlyYears, ...goldenEra, ...modernEra, ...recentYears];
```

#### Strategy 3: Lazy Loading by Route

**Example: Shop Brands (5.3 KB):**
```typescript
// Keep in single file, but load only when needed

// /pages/shop/brands/index.tsx
import { lazy } from 'react';
const ShopBrandsData = lazy(() => import('../../../data/shopBrands'));
```

---

## File Structure Standards

### Required File Structure

Every data file MUST include:

1. **JSDoc Header** (Required)
2. **TypeScript Interfaces** (Required)
3. **Main Data Export** (Required)
4. **Helper Functions** (Recommended)
5. **Constants** (Optional)

### Template

```typescript
/**
 * [File Purpose]
 * 
 * [Brief description of what data this file contains]
 * 
 * **Used By:** (list of components/pages)
 * - `/path/to/component1.tsx` - Purpose
 * - `/path/to/component2.tsx` - Purpose
 * 
 * **Contents:**
 * - [Data category 1]
 * - [Data category 2]
 * 
 * **Related Files:**
 * - `/data/related-file.ts` - Description
 * 
 * @package HandcraftedWines
 * @version 1.0
 * @lastUpdated YYYY-MM-DD
 */

/**
 * Interface for [Entity Name]
 */
export interface EntityName {
  id: string;
  name: string;
  // ... other fields with comments
}

/**
 * Main data export: [Description]
 */
export const entityData: EntityName[] = [
  {
    id: 'example-1',
    name: 'Example Item',
    // ... data
  },
];

/**
 * Helper function: Get entity by ID
 * @param id - Entity ID to search for
 * @returns Entity object or undefined
 */
export const getEntityById = (id: string): EntityName | undefined => {
  return entityData.find(item => item.id === id);
};

/**
 * Helper function: Get entities by category
 * @param category - Category to filter by
 * @returns Array of matching entities
 */
export const getEntitiesByCategory = (category: string): EntityName[] => {
  return entityData.filter(item => item.category === category);
};
```

---

## JSDoc Documentation Standards

### Required Documentation

**File Header:**
```typescript
/**
 * [File Name] - [One-line purpose]
 * 
 * [2-3 sentence description]
 * 
 * **Used By:** (X files)
 * - `/path/to/file1.tsx` - Use case description
 * - `/path/to/file2.tsx` - Use case description
 * 
 * **Contents:**
 * - [Data category 1]
 * - [Data category 2]
 * 
 * **Related Files:**
 * - `/data/related.ts` - Relationship description
 * 
 * @package HandcraftedWines
 * @version 1.0
 * @lastUpdated YYYY-MM-DD
 */
```

**Interface Documentation:**
```typescript
/**
 * Interface for [Entity]
 * 
 * @property {string} id - Unique identifier
 * @property {string} name - Display name
 * @property {boolean} [optional] - Optional property description
 */
export interface EntityName {
  id: string;
  name: string;
  optional?: boolean;
}
```

**Function Documentation:**
```typescript
/**
 * [Function purpose]
 * 
 * @param {string} id - Parameter description
 * @returns {EntityName | undefined} Return value description
 * @example
 * const item = getEntityById('example-1');
 */
```

Complete standards: `/guidelines/development/jsdoc-standards.md`

---

## Data Quality Checklist

### Before Committing New Data File

- [ ] **JSDoc header present and complete**
  - File purpose clearly stated
  - Usage documented (which files import it)
  - Related files listed

- [ ] **TypeScript interfaces defined**
  - All data exports have type definitions
  - Interfaces are exported (not inline)

- [ ] **File size under limit**
  - File is < 20 KB (< 400 lines)
  - If larger, splitting strategy documented

- [ ] **Helper functions included**
  - getById(), getByCategory(), filter/search helpers
  - All helpers have JSDoc comments

- [ ] **Data validation**
  - No duplicate IDs or slugs
  - All required fields present
  - Consistent data structure

- [ ] **Import paths tested**
  - File imports successfully in components
  - No circular dependencies

---

## Current Data Files Inventory

### ✅ **Active Files** (9)

| File | Size | Status | Purpose |
|------|------|--------|---------|
| `farmStory.ts` | ~15 KB | ⭐⭐⭐⭐⭐ | Farm history, team, awards, experiences |
| `products.ts` | ~18 KB | ⚠️ **Near limit** | Complete product catalog |
| `newsPosts.ts` | ~10 KB | ⭐⭐⭐⭐ | News & blog posts |
| `faqData.ts` | ~10 KB | ⭐⭐⭐⭐ | FAQ questions (6 categories, 30 questions) |
| `demoContent.ts` | ~8 KB | ⭐⭐⭐⭐ | Demo products & features |
| `shopBrands.ts` | ~6 KB | ⭐⭐⭐ | Shop collections (wine/spirits/cheese/gifts) |
| `shop-faq.ts` | ~4 KB | ⭐⭐⭐⭐ | Shop-specific FAQs |
| `jobs.ts` | ~3 KB | ⭐⭐⭐⭐ | Career opportunities |
| `site-content.ts` | ~2 KB | ⭐⭐⭐⭐⭐ | Site-wide content (brand, contact, social) |

### ❌ **Deprecated Files** (2)

| File | Status | Reason | Replacement |
|------|--------|--------|-------------|
| `brands.ts` | Deprecated | Corporate KWV content | Use `shopBrands.ts` |
| `tastings.ts` | Deprecated | Replaced by `farmStory.experiences` | Use `farmStory.ts` |

**Action:** Delete deprecated files after confirming zero imports

---

## Migration Patterns

### Pattern: Extract Hardcoded Content from Component

**Before:**
```tsx
// /pages/News.tsx (200+ lines with hardcoded data)
export const News: React.FC = () => {
  const posts = [
    { id: 1, title: 'Post 1', ... }, // 100+ lines
    { id: 2, title: 'Post 2', ... },
    // ... 12 total posts
  ];
  
  return <div>{posts.map(...)}</div>;
};
```

**After:**
```typescript
// /data/newsPosts.ts (clean, documented)
export interface NewsPost {
  id: string;
  title: string;
  // ... interface
}

export const NEWS_POSTS: NewsPost[] = [...];
export const getPostById = (id: string) => ...;
```

```tsx
// /pages/News.tsx (lean, focused on presentation)
import { NEWS_POSTS } from '../../data/newsPosts';

export const News: React.FC = () => {
  return <div>{NEWS_POSTS.map(...)}</div>;
};
```

**Benefits:**
- Component reduced from 200 → 50 lines
- Content editable by non-developers
- Type-safe data access
- Reusable across components

---

## Anti-Patterns

### ❌ **Don't: Multiple Unrelated Entities in One File**

```typescript
// BAD - Mixed concerns
export const siteData = {
  products: [...],
  team: [...],
  news: [...],
  faqs: [...],
};
```

**Why:** Violates single responsibility, makes file too large, harder to maintain

### ❌ **Don't: Hardcode Content in Components**

```tsx
// BAD - Content in component
export const About = () => (
  <div>
    <h1>Our Story</h1>
    <p>Founded in 1918, we have been making wine for over 100 years...</p>
  </div>
);
```

**Why:** Content not reusable, harder to update, no type safety

### ❌ **Don't: Skip TypeScript Interfaces**

```typescript
// BAD - No type safety
export const products = [
  { id: '1', name: 'Wine' },
  { id: 2, title: 'Cheese' }, // Inconsistent fields!
];
```

**Why:** Type errors at runtime, inconsistent data structure

### ❌ **Don't: Use Inline Types**

```typescript
// BAD - Interface not exported
const products: Array<{ id: string; name: string }> = [...];
```

**Why:** Type not reusable, components can't import interface

---

## Future Optimizations

### Automated Data Validation

**Goal:** Create Node script to validate all data files

**Checks:**
- [ ] All files have JSDoc headers
- [ ] No duplicate IDs/slugs
- [ ] File sizes under limits
- [ ] All required fields present
- [ ] No orphaned files (zero imports)

**Implementation:** `/scripts/validate-data.ts` (future task)

---

## Related Documentation

- [File Organization Guidelines](/guidelines/development/file-organization.md)
- [JSDoc Standards](/guidelines/development/jsdoc-standards.md)
- [Component Structure](/guidelines/architecture/component-structure.md)
- [Data Cleanup Task List](/tasks/data-cleanup-task-list.md)

---

**Maintained by:** Handcrafted Wines Development Team  
**Last Review:** 2026-03-17  
**Next Review:** After each new data file creation
