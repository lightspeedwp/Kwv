# Developer Tools Documentation

**Created:** 2026-03-17  
**Status:** Active  
**Routes:** 5 pages  

---

## Overview

The Developer Tools section (`/dev-tools`) provides a comprehensive suite of utilities for design system testing, debugging, and development aids for the Handcrafted Wines project.

**Base URL:** `/dev-tools`

---

## Pages

### 1. Dev Tools Home (`/dev-tools`)

**Component:** `DevTools.tsx`  
**Purpose:** Central hub for all developer tools

**Features:**
- Quick stats dashboard (250+ tokens, 100+ components, 71 routes, 100/100 health score)
- Categorized tool cards (Design System, Testing, Data, Utilities)
- Status indicators (ready, beta, planned)
- Quick links to guidelines, documentation, and demos

**Categories:**
1. **Design System** - 5 tools (tokens, typography, spacing, grid, icons)
2. **Testing** - 3 tools (accessibility, responsive, performance)
3. **Data** - 2 tools (routes, data files)
4. **Utilities** - 2 tools (sandbox, theme switcher)

---

### 2. Design Tokens (`/dev-tools/tokens`)

**Component:** `DesignTokens.tsx`  
**Purpose:** Comprehensive design token reference and inspector

**Features:**
- **Color Palette** - All brand and semantic colors with hex values
- **Typography Scale** - Font families, sizes, and live text samples
- **Spacing System** - Visual spacing tokens with measurements
- **Shadows** - Shadow elevation previews
- **Border Radius** - Radius token samples
- **Copy to Clipboard** - One-click copy for CSS variables
- **Live Previews** - See tokens applied in real-time

**Token Categories:**
- Brand Colors (6): Paper, Ink, Vine, Clay, Plum, Gold
- Semantic Colors (6): Primary/Secondary backgrounds and text, Accents
- Typography (6): Font families, H1-H4, Body sizes
- Spacing (9): 0 through 16 (4px base grid)
- Shadows (6): None, XS, SM, MD, LG, XL
- Radius (7): None, XS, SM, MD, LG, XL, Full

---

### 3. Route Inspector (`/dev-tools/routes`)

**Component:** `RouteInspector.tsx`  
**Purpose:** Visual explorer for all registered routes

**Features:**
- **Complete Route List** - All 76 registered routes
- **Search & Filter** - Search by name, path, or component
- **Category Filters** - 9 categories (Main, About, Shop, Visit, Events, etc.)
- **Route Metadata** - Path, component, dynamic parameters
- **Quick Navigation** - One-click visit to any route
- **Export JSON** - Download complete route data

**Route Categories:**
- Main (2) - Homepage, Sitemap
- About (9) - Company pages
- Shop (24) - E-commerce pages
- Visit (7) - Experiences
- Events (3) - Event pages
- Company (7) - News, careers, contact
- Brands (1) - Brand portfolio
- Legal (7) - Policy pages
- Dev Tools (5) - Developer tools
- Demo (2) - Demo pages

**Dynamic Routes:**
- `/shop/product/:slug` - Product details
- `/shop/brand/:brand` - Brand landing pages
- `/news/:slug` - News articles
- `/events/:slug` - Event details
- `/careers/:slug` - Job postings

---

### 4. Data Files Viewer (`/dev-tools/data`)

**Component:** `DataViewer.tsx`  
**Purpose:** Browse and inspect all application data files

**Features:**
- **Data File List** - 6 major data files
- **Syntax Highlighting** - JSON preview with formatting
- **Search Within Data** - Find specific content
- **Copy to Clipboard** - Copy entire JSON
- **Download JSON** - Export any data file
- **Truncation** - Large files truncated for performance

**Data Files:**
1. **Products** (🍷) - 17 products (wines, spirits, cheese, gifts)
2. **News Posts** (📰) - 12 blog posts and farm updates
3. **FAQs** (❓) - 28 Q&A across 6 categories
4. **Farm Story** (🏡) - Complete farm data (history, team, awards, experiences)
5. **Shop Brands** (🏷️) - Brand portfolio data
6. **Job Listings** (💼) - 5 career opportunities

---

### 5. Icon Library (`/dev-tools/icons`)

**Component:** `IconLibrary.tsx`  
**Purpose:** Browse and copy all Lucide icons used in the project

**Features:**
- **Icon Grid** - 70+ icons with visual previews
- **Search** - Find icons by name or usage
- **Category Filter** - 9 icon categories
- **Size Selector** - Preview at SM, MD, or LG sizes
- **Copy Name** - Copy icon component name
- **Copy Import** - Copy full import statement
- **Hover Previews** - Animated icon previews on hover

**Icon Categories:**
1. **Navigation** (11) - Home, Menu, Chevrons, Arrows
2. **Content** (8) - Users, Award, Star, Heart, Leaf, Grape, Wine
3. **Actions** (9) - Plus, Minus, Edit, Trash, Download, Share, Copy
4. **UI Elements** (7) - Eye, Search, Filter, Settings, Sun, Moon
5. **Feedback** (5) - CheckCircle, AlertCircle, Info, HelpCircle, Clock
6. **Contact** (4) - Mail, Phone, Globe, Navigation
7. **Social** (5) - Facebook, Instagram, Twitter, YouTube, LinkedIn
8. **Dev Tools** (13) - Code, Palette, Type, Layout, Grid, Route, etc.

**Usage Examples:**
- Navigation icons for headers and menus
- Product icons for wines, spirits, cheese
- Social media icons for footer
- Feedback icons for notifications
- Dev tool icons for developer pages

---

## Access & Navigation

### From UnifiedHeader

Currently not linked in main navigation (developer-only tools).

**Access Options:**
1. Direct URL: Navigate to `/dev-tools`
2. From Sitemap: Link under "Developer Resources"
3. Bookmark: Save `/dev-tools` for quick access

### Suggested Footer Link

**Recommendation:** Add "Dev Tools" link to UnifiedFooter under "Company" or create new "Developer" column.

```tsx
// UnifiedFooter.tsx
<div>
  <h3>Developer</h3>
  <Link to="/dev-tools">Dev Tools</Link>
  <Link to="/handdrawn-demo">Component Library</Link>
  <a href="https://github.com">GitHub</a>
</div>
```

---

## Performance Notes

### Optimization Strategies

**Design Tokens Page:**
- All tokens rendered client-side (no API calls)
- Lightweight: ~50KB component size
- Copy functionality uses native Clipboard API

**Route Inspector:**
- Static route array (76 routes)
- Client-side search and filtering
- Minimal re-renders with useMemo
- Export uses Blob API (no server needed)

**Data Viewer:**
- Lazy loading: Data only rendered when selected
- Truncation: Large files (>10KB) truncated
- Search highlights use dangerouslySetInnerHTML (sanitized)

**Icon Library:**
- All icons imported (tree-shakeable)
- Hover states use CSS transitions
- Copy uses native Clipboard API
- Grid uses CSS Grid (responsive)

---

## Future Enhancements

### Planned Features (Beta/Planned Status)

1. **Typography Tester** (`/dev-tools/typography`) 🚧 PLANNED
   - Live typography testing
   - Font pairing previews
   - Text hierarchy validation
   - Readability testing

2. **Spacing Visualizer** (`/dev-tools/spacing`) 🚧 PLANNED
   - Visual spacing reference
   - Grid system overlay
   - Container width demos
   - Responsive spacing tests

3. **Grid Overlay** (`/dev-tools/grid`) 🚧 PLANNED
   - Toggle grid on any page
   - Show breakpoints
   - Column indicators
   - Gutter measurements

4. **Accessibility Checker** (`/dev-tools/accessibility`) 🚧 PLANNED
   - WCAG compliance testing
   - Contrast ratio calculator
   - Keyboard navigation tester
   - Screen reader simulation

5. **Responsive Tester** (`/dev-tools/responsive`) 🚧 PLANNED
   - Device viewport simulator
   - Breakpoint visualizer
   - Touch target validator
   - Landscape/portrait testing

6. **Performance Monitor** (`/dev-tools/performance`) 🚧 BETA
   - Render time tracking
   - Bundle size analysis
   - Component performance metrics
   - Memory usage monitoring

7. **Component Sandbox** (`/dev-tools/sandbox`) 🚧 BETA
   - Isolated component testing
   - Props editor
   - State management
   - Live code editing

8. **Theme Switcher** (`/dev-tools/theme`) 🚧 PLANNED
   - Dark/Light mode toggle
   - Theme variable inspector
   - Color contrast validator
   - Custom theme builder

---

## Technical Implementation

### Design Patterns

**Consistent Structure:**
- All tools follow same header pattern (back link, title, description)
- Consistent card layouts with hover effects
- Unified color scheme (CSS variables throughout)
- Motion animations with stagger delays

**Copy-to-Clipboard:**
```tsx
const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
  setCopiedToken(text);
  setTimeout(() => setCopiedToken(null), 2000);
};
```

**Search & Filter:**
```tsx
const filteredItems = useMemo(() => {
  return items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
}, [searchTerm, selectedCategory]);
```

**Export JSON:**
```tsx
const exportData = () => {
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'data.json';
  a.click();
};
```

---

## Accessibility

### WCAG Compliance

**Keyboard Navigation:**
- ✅ All interactive elements focusable
- ✅ Visible focus rings (twb-color-accent-primary)
- ✅ Logical tab order
- ✅ Arrow keys for category selection

**Screen Readers:**
- ✅ Semantic HTML (header, main, section)
- ✅ Descriptive button labels
- ✅ ARIA labels where needed
- ✅ Alt text for icons (via title attributes)

**Color Contrast:**
- ✅ All text meets WCAG AA (4.5:1 minimum)
- ✅ Interactive states have sufficient contrast
- ✅ Focus indicators clearly visible

---

## Maintenance

### Adding New Dev Tools

**Step 1: Create Component**
```bash
/pages/dev-tools/NewTool.tsx
```

**Step 2: Add to DevTools.tsx**
```tsx
const devTools: DevTool[] = [
  // ... existing tools
  {
    title: 'New Tool',
    description: 'Tool description',
    path: '/dev-tools/new-tool',
    icon: Sparkles,
    category: 'utilities',
    status: 'beta',
  },
];
```

**Step 3: Register Route**
```tsx
// routes.tsx
import NewTool from './pages/dev-tools/NewTool';

// Add route
{ path: '/dev-tools/new-tool', Component: NewTool },
```

**Step 4: Update Documentation**
```markdown
## 6. New Tool (`/dev-tools/new-tool`)
**Component:** `NewTool.tsx`
**Purpose:** Description
**Features:** List features
```

---

## Related Documentation

- **Guidelines:** `/guidelines/INDEX.md`
- **Design Tokens:** `/guidelines/design-tokens/`
- **Component Library:** `/handdrawn-demo`
- **Routes:** `/routes.tsx`
- **Data Files:** `/data/`

---

## Quick Links

- **Dev Tools Home:** [/dev-tools](/dev-tools)
- **Design Tokens:** [/dev-tools/tokens](/dev-tools/tokens)
- **Routes:** [/dev-tools/routes](/dev-tools/routes)
- **Data Files:** [/dev-tools/data](/dev-tools/data)
- **Icons:** [/dev-tools/icons](/dev-tools/icons)

---

**Last Updated:** 2026-03-17  
**Maintainer:** Handcrafted Wines Development Team  
**Status:** ✅ Production Ready (5/12 tools complete)
