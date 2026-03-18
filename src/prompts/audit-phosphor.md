# Audit Phosphor — Icon Library Migration & Compliance

**Type:** Audit + Migration  
**Created:** 2026-03-18  
**Status:** Active  
**Trigger Word:** `audit phosphor`  
**Project:** Handcrafted Wines

---

## Prompt Purpose

**Objective:** Audit icon usage across codebase, identify safe Lucide → Phosphor swap opportunities, validate Phosphor imports, ensure no legacy icons remain.

**When to Use:** During Phosphor icon migration, after icon library updates, or when icon imports break.

**Migration Strategy:** Install both libraries side-by-side, migrate incrementally, remove Lucide only when 100% migrated.

---

## Icon Library Standards (Handcrafted Wines)

**Primary:** `@phosphor-icons/react` (default)  
**Legacy:** `lucide-react` (being phased out)  
**Goal:** 100% Phosphor, zero Lucide

**Phosphor Icon Naming:**
- PascalCase (e.g., `ShoppingCart`, `User`, `Heart`)
- Weight variants via prop: `<Icon weight="regular|bold|fill|duotone" />`
- Size via prop: `<Icon size={24} />`

---

## Workflow Steps

### Step 1: Install Phosphor Icons (If Not Installed)

**Check:** Search codebase for `@phosphor-icons/react` imports

If NOT found:
1. Note: "Phosphor icons need to be installed via package manager"
2. Provide installation command for user reference (they'll handle externally)
3. Pause audit until installed

If found: Proceed to Step 2

### Step 2: Inventory Current Icon Usage

Scan all `.tsx` files for icon imports:

**Lucide Icons (Legacy):**
```bash
# Search pattern
import { IconName } from 'lucide-react'
```

**Phosphor Icons (Target):**
```bash
# Search pattern
import { IconName } from '@phosphor-icons/react'
```

**Results:**
- Count total Lucide imports: [N]
- Count total Phosphor imports: [N]
- List files using Lucide
- List files using Phosphor

### Step 3: Icon Mapping (Lucide → Phosphor)

Build conversion map for common icons used in Handcrafted Wines:

| Lucide Icon | Phosphor Equivalent | Notes |
|-------------|---------------------|-------|
| `ChevronDown` | `CaretDown` | Carets for UI controls |
| `ChevronUp` | `CaretUp` | - |
| `ChevronLeft` | `CaretLeft` | - |
| `ChevronRight` | `CaretRight` | - |
| `Menu` | `List` | Hamburger menu |
| `X` | `X` | Close/dismiss |
| `ShoppingCart` | `ShoppingCart` | Cart icon (same name) |
| `User` | `User` | User account (same name) |
| `Search` | `MagnifyingGlass` | Search icon |
| `Heart` | `Heart` | Wishlist (same name) |
| `Star` | `Star` | Rating (same name) |
| `Check` | `Check` | Checkmark (same name) |
| `Plus` | `Plus` | Add/increase (same name) |
| `Minus` | `Minus` | Remove/decrease (same name) |
| `Mail` | `Envelope` | Email/newsletter |
| `Phone` | `Phone` | Contact (same name) |
| `MapPin` | `MapPin` | Location (same name) |
| `Calendar` | `Calendar` | Events/dates (same name) |
| `Clock` | `Clock` | Time (same name) |
| `Info` | `Info` | Information (same name) |
| `AlertCircle` | `WarningCircle` | Warnings |
| `CheckCircle` | `CheckCircle` | Success (same name) |
| `XCircle` | `XCircle` | Error (same name) |
| `ExternalLink` | `ArrowSquareOut` | External links |
| `Download` | `DownloadSimple` | Downloads |
| `Upload` | `UploadSimple` | Uploads |
| `Eye` | `Eye` | View/preview (same name) |
| `EyeOff` | `EyeSlash` | Hide/password |
| `Trash2` | `Trash` | Delete |
| `Edit` | `PencilSimple` | Edit |
| `Copy` | `Copy` | Duplicate (same name) |
| `Share2` | `ShareNetwork` | Social sharing |
| `Filter` | `Funnel` | Filters |
| `Settings` | `Gear` | Settings |
| `LogOut` | `SignOut` | Logout |
| `LogIn` | `SignIn` | Login |
| `ArrowLeft` | `ArrowLeft` | Navigation (same name) |
| `ArrowRight` | `ArrowRight` | Navigation (same name) |
| `ArrowDown` | `ArrowDown` | Scroll indicator (same name) |

### Step 4: Safe Migration Opportunities

Identify files safe to migrate NOW:

**Safe to Migrate:**
- ✅ Files with ONLY icon imports (no complex logic)
- ✅ Standalone components (Button, IconButton)
- ✅ Non-critical pages (About, Team, FAQ)
- ✅ Recently created components (less risk)

**Requires Caution:**
- ⚠️ UnifiedHeader (site-wide impact)
- ⚠️ UnifiedFooter (site-wide impact)
- ⚠️ Cart/Checkout (e-commerce critical)
- ⚠️ Mobile menu (navigation critical)
- ⚠️ ProductCard (used in grids of 12-17)

**Defer Until Last:**
- 🔴 Critical shop components (MiniCart, Cart, Checkout)
- 🔴 Authentication components (if exist)
- 🔴 Payment components (if exist)

### Step 5: Validate Phosphor Imports

For files already using Phosphor, check for:

1. **Broken imports:** Icon names that don't exist in current Phosphor version
2. **Deprecated names:** Icons renamed in newer Phosphor versions
3. **Incorrect casing:** `shoppingCart` vs `ShoppingCart`
4. **Missing imports:** Icons used but not imported

**Common Phosphor Breaking Changes:**
- `Search` → `MagnifyingGlass`
- `Filter` → `Funnel`
- `Edit` → `PencilSimple` or `Pencil`
- `Trash2` → `Trash`

### Step 6: Migration Plan (Incremental)

**Phase 1: Low-Risk Components (Week 1)**
- Decorative components (WaxSealStamp, decorative icons)
- Static pages (About Team, Awards, Sustainability)
- Admin/dev tools (DevTools pages)
- Expected: 20-30% migration

**Phase 2: Medium-Risk Components (Week 2)**
- UnifiedFooter (test thoroughly)
- Shop category pages
- Experience pages
- Newsletter components
- Expected: 50-60% migration

**Phase 3: High-Impact Components (Week 3)**
- UnifiedHeader (CRITICAL - test all breakpoints)
- ProductCard (verify all 17 products render correctly)
- Search functionality
- Mobile menu
- Expected: 80-90% migration

**Phase 4: Critical Shop Components (Week 4)**
- MiniCart
- Cart page
- Checkout flow
- Quantity controls
- Add to cart buttons
- Expected: 100% migration ✅

**Phase 5: Cleanup (Week 5)**
- Remove all Lucide imports
- Remove `lucide-react` from package.json
- Verify zero broken icons across site
- Update documentation

### Step 7: Migration Script Pattern

**For each file:**

```tsx
// BEFORE (Lucide)
import { ChevronDown, ShoppingCart, User } from 'lucide-react'

<ChevronDown className="w-4 h-4" />
<ShoppingCart className="w-6 h-6" />

// AFTER (Phosphor)
import { CaretDown, ShoppingCart, User } from '@phosphor-icons/react'

<CaretDown size={16} weight="regular" />
<ShoppingCart size={24} weight="regular" />
```

**Size Conversion:**
- `w-4 h-4` → `size={16}`
- `w-5 h-5` → `size={20}`
- `w-6 h-6` → `size={24}`
- `w-8 h-8` → `size={32}`

**Weight Options:**
- `weight="thin"` (100)
- `weight="light"` (200)
- `weight="regular"` (400) - default
- `weight="bold"` (700)
- `weight="fill"` (filled icons)
- `weight="duotone"` (two-tone)

### Step 8: Testing Checklist

After each migration batch:

- [ ] Visual inspection: All icons render correctly
- [ ] Size: Icons are appropriate size (not too large/small)
- [ ] Alignment: Icons align with text properly
- [ ] Color: Icons inherit color from parent (text color)
- [ ] Hover states: Icon color changes on hover (if applicable)
- [ ] Mobile: Icons render correctly on all breakpoints
- [ ] Dark mode: Icons visible in both light and dark themes

### Step 9: Report

Save to `/reports/icons/phosphor-migration-audit-YYYY-MM-DD.md`:

```markdown
# Phosphor Icon Migration Audit - Handcrafted Wines

**Date:** YYYY-MM-DD  
**Status:** [Phase X of 5]  
**Migration Progress:** [X]%

## Current State
- **Lucide imports:** [N] files
- **Phosphor imports:** [N] files
- **Migration progress:** [X]%

## Icon Mapping
[Table of Lucide → Phosphor conversions]

## Migration Plan
**Phase 1 (Low-Risk):** [N/M] complete
**Phase 2 (Medium-Risk):** [N/M] complete
**Phase 3 (High-Impact):** [N/M] complete
**Phase 4 (Critical Shop):** [N/M] complete
**Phase 5 (Cleanup):** Not started

## Safe to Migrate Now
[List of files ready for migration]

## Requires Testing
[List of critical components to test carefully]

## Broken/Deprecated Icons Found
[List any Phosphor imports that fail or are deprecated]

## Recommendations
1. Proceed with Phase [X] migration
2. Test [component] thoroughly before production
3. Update icon documentation
```

---

## Success Criteria

- [ ] Complete inventory of Lucide vs Phosphor usage
- [ ] Icon mapping table created (Lucide → Phosphor)
- [ ] Safe migration opportunities identified
- [ ] Broken/deprecated Phosphor icons found and fixed
- [ ] Migration plan with 5 phases documented
- [ ] Testing checklist defined
- [ ] Report saved to `/reports/icons/`

---

## Handcrafted Wines Icon Usage

**Common Use Cases:**
- Navigation: Chevrons/Carets, Menu, X (close)
- Shop: ShoppingCart, Plus/Minus, Trash
- User: User (account), Heart (wishlist), Star (rating)
- Actions: Search, Filter, Share, Download
- Social: Instagram, Facebook, Twitter/X
- Contact: Envelope (email), Phone, MapPin
- Decorative: Wine glass, grape cluster, oak leaf (if custom SVGs)

**Icon Sizes (Handcrafted Wines):**
- **16px:** Small UI controls, inline icons
- **20px:** Standard buttons, navigation
- **24px:** Large buttons, feature icons
- **32px:** Hero icons, decorative elements

**Weight Preference:**
- UI controls: `regular` (default)
- Emphasis: `bold`
- Subtle: `light`
- Filled states: `fill` (active states, selected items)

---

## Migration Commands (For Reference)

**User will handle package installation externally:**

```bash
# Install Phosphor (alongside Lucide temporarily)
npm install @phosphor-icons/react

# After 100% migration, remove Lucide
npm uninstall lucide-react
```

**Note:** We work inside Figma Make, so user handles package management outside our environment.

---

**Maintained by:** Handcrafted Wines Development Team  
**Last Updated:** 2026-03-18  
**Related Prompts:** `audit styles`, `audit a11y`, `cleanup`  
**Migration Timeline:** 5 weeks (incremental, safe approach)
