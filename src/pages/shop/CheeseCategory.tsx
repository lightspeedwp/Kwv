/**
 * Cheese Category Page
 * 
 * Browse all artisan cheeses from Handcrafted Wines goat dairy.
 * Displays fresh and aged cheeses with wine pairing suggestions.
 * 
 * Features:
 * - Product grid with 4 cheese products
 * - Filter by cheese type (All, Fresh, Aged, Herbed, Wine-Washed)
 * - Sort by price, name
 * - Product cards with cheese descriptions
 * - Wine pairing suggestions prominent
 * - Add to Cart functionality
 * - Breadcrumb navigation
 * - Goat dairy story section
 * - "From Our Goats" feature
 * - Wine pairing grid
 * - Mobile responsive (1→2→3 column grid)
 * - WCAG AA compliant
 * - SEO optimized
 * 
 * Usage:
 * ```tsx
 * <Route path="/shop/cheese" element={<CheeseCategory />} />
 * ```
 * 
 * Components Used:
 * - Container (v2.0)
 * - Typography (v2.0)
 * - Button (v2.0)
 * - Card (v2.0)
 * - Badge (v2.0)
 * - BreadcrumbsBar
 * 
 * Design Tokens:
 * - Grid: 1 col mobile → 2 col tablet → 3 col desktop (4 cheeses)
 * - Gap: --twb-spacing-grid-gap
 * - Cards: --twb-shadow-md with hover effects
 * - Typography: Playfair headings, Inter body
 * - Colors: gold accents for premium cheese theme
 * 
 * @package HandcraftedWines
 * @version 1.0
 */

import React, { useState, useMemo } from 'react';
import { Link } from 'react-router';
import { Container } from '../../components/common/Container';
import { Typography } from '../../components/common/Typography';
import { Button } from '../../components/common/Button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { BreadcrumbsBar } from '../../components/layout/BreadcrumbsBar';
import { products, Product } from '../../data/products';
import { Milk, Heart, Sparkles, Wine } from 'lucide-react';

export const CheeseCategory: React.FC = () => {
  // Filter and sort state
  const [filterType, setFilterType] = useState<'all' | 'fresh' | 'aged' | 'herbed' | 'wine-washed'>('all');
  const [sortBy, setSortBy] = useState<'name' | 'price-low' | 'price-high'>('name');

  // Get all cheese products
  const cheeseProducts = products.filter(p => p.category === 'cheese');

  // Filter cheeses by type
  const filteredCheeses = useMemo(() => {
    if (filterType === 'all') return cheeseProducts;
    
    return cheeseProducts.filter(cheese => {
      const name = cheese.name.toLowerCase();
      if (filterType === 'fresh') return name.includes('fresh') || name.includes('chèvre');
      if (filterType === 'aged') return name.includes('aged');
      if (filterType === 'herbed') return name.includes('herb');
      if (filterType === 'wine-washed') return name.includes('wine');
      return true;
    });
  }, [cheeseProducts, filterType]);

  // Sort cheeses
  const sortedCheeses = useMemo(() => {
    const sorted = [...filteredCheeses];
    
    switch (sortBy) {
      case 'name':
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case 'price-low':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-high':
        return sorted.sort((a, b) => b.price - a.price);
      default:
        return sorted;
    }
  }, [filteredCheeses, sortBy]);

  return (
    <>
      {/* SEO Metadata */}
      <title>Artisan Cheese - Handcrafted Wines | Goat Cheese from Paarl Mountain</title>
      <meta name="description" content="Fresh and aged goat cheeses from our family dairy. Made by hand from milk from our own goats on Paarl Mountain." />

      {/* Breadcrumbs */}
      <BreadcrumbsBar 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Shop', href: '/shop' },
          { label: 'Cheese', href: '/shop/cheese' }
        ]}
      />

      {/* Page Header */}
      <section className="bg-[var(--twb-color-bg-primary)] py-[var(--twb-spacing-section-y)]">
        <Container variant="wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Milk className="size-12 mx-auto mb-4 text-[var(--twb-color-gold)]" aria-hidden="true" />
            <Typography variant="h1" className="mb-4">
              Artisan Cheese
            </Typography>
            <Typography variant="bodyLarge" className="text-[var(--twb-color-text-secondary)]">
              Annelie makes our cheese fresh every week from milk from our own goat dairy. Each wheel is handcrafted with care—no shortcuts, no factory lines, just traditional cheesemaking.
            </Typography>
          </div>

          {/* Filter & Sort Controls */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-[var(--twb-color-border-primary)]">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              <Typography variant="caption" className="font-semibold mr-2 self-center">
                Filter:
              </Typography>
              <Button
                variant={filterType === 'all' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setFilterType('all')}
              >
                All Cheeses
              </Button>
              <Button
                variant={filterType === 'fresh' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setFilterType('fresh')}
              >
                Fresh
              </Button>
              <Button
                variant={filterType === 'aged' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setFilterType('aged')}
              >
                Aged
              </Button>
              <Button
                variant={filterType === 'herbed' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setFilterType('herbed')}
              >
                Herbed
              </Button>
              <Button
                variant={filterType === 'wine-washed' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setFilterType('wine-washed')}
              >
                Wine-Washed
              </Button>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <Typography variant="caption" className="font-semibold">
                Sort by:
              </Typography>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="rounded-[var(--twb-radius-input)] border border-[var(--twb-color-border-primary)] bg-[var(--twb-color-bg-tertiary)] px-[var(--twb-spacing-3)] py-[var(--twb-spacing-2)] font-[family-name:var(--twb-font-sans)] text-[length:var(--twb-text-body)] text-[var(--twb-color-text-primary)] outline-none focus-visible:border-[var(--twb-color-gold)] focus-visible:ring-2 focus-visible:ring-[var(--twb-color-gold)]"
              >
                <option value="name">Name (A-Z)</option>
                <option value="price-low">Price (Low to High)</option>
                <option value="price-high">Price (High to Low)</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <Typography variant="body" className="mb-6 text-[var(--twb-color-text-secondary)]">
            Showing {sortedCheeses.length} {sortedCheeses.length === 1 ? 'cheese' : 'cheeses'}
          </Typography>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[var(--twb-spacing-grid-gap)]">
            {sortedCheeses.map((cheese) => (
              <CheeseCard key={cheese.id} cheese={cheese} />
            ))}
          </div>

          {/* Empty State */}
          {sortedCheeses.length === 0 && (
            <div className="text-center py-16">
              <Milk className="size-16 mx-auto mb-4 text-[var(--twb-color-text-secondary)] opacity-30" aria-hidden="true" />
              <Typography variant="h3" className="mb-2">
                No cheeses found
              </Typography>
              <Typography variant="body" className="mb-6 text-[var(--twb-color-text-secondary)]">
                Try adjusting your filters to see more cheeses.
              </Typography>
              <Button variant="primary" onClick={() => setFilterType('all')}>
                View All Cheeses
              </Button>
            </div>
          )}
        </Container>
      </section>

      {/* Goat Dairy Story Section */}
      <section className="bg-[var(--twb-color-bg-secondary)] py-[var(--twb-spacing-section-y)]">
        <Container variant="content">
          <div className="text-center">
            <Heart className="size-10 mx-auto mb-4 text-[var(--twb-color-gold)]" aria-hidden="true" />
            <Typography variant="h2" className="mb-4">
              From Our Goats to Your Table
            </Typography>
            <Typography variant="bodyLarge" className="mb-6">
              We keep about 40 Saanen goats on the farm. Every morning Liezl milks them, and Annelie turns that fresh milk into cheese. It's that simple—and that rare. Most goat cheese comes from milk trucked in from multiple farms. Ours travels maybe 50 meters.
            </Typography>
            <Typography variant="body" className="italic text-[var(--twb-color-text-secondary)] mb-8">
              "You can taste the difference when the milk is this fresh. I make the cheese the same day—no pasteurization, no homogenization, just gentle handling and time." <br />
              <span className="not-italic font-semibold">— Annelie van der Berg, Cheesemaker</span>
            </Typography>
          </div>

          {/* Wine Pairing Section */}
          <div className="mt-12 p-8 rounded-[var(--twb-radius-card)] bg-[var(--twb-color-bg-tertiary)]">
            <div className="text-center mb-8">
              <Wine className="size-8 mx-auto mb-3 text-[var(--twb-color-plum)]" aria-hidden="true" />
              <Typography variant="h3" className="mb-2">
                Perfect Wine & Cheese Pairings
              </Typography>
              <Typography variant="body" className="text-[var(--twb-color-text-secondary)]">
                Our cheeses are designed to pair beautifully with our wines.
              </Typography>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 rounded-[var(--twb-radius-sm)] bg-[var(--twb-color-bg-primary)]">
                <Typography variant="h4" className="mb-2">Fresh Chèvre</Typography>
                <Typography variant="body" className="text-[var(--twb-color-text-secondary)] mb-3">
                  Pairs with Chenin Blanc or Rosé
                </Typography>
                <Typography variant="caption">
                  The crisp acidity of Chenin Blanc cuts through the creamy richness. Our Rosé brings out the subtle tanginess.
                </Typography>
              </div>

              <div className="p-4 rounded-[var(--twb-radius-sm)] bg-[var(--twb-color-bg-primary)]">
                <Typography variant="h4" className="mb-2">Herbed Goat Cheese</Typography>
                <Typography variant="body" className="text-[var(--twb-color-text-secondary)] mb-3">
                  Pairs with Chardonnay or Chenin Blanc
                </Typography>
                <Typography variant="caption">
                  The herbs echo the grassy notes in Chardonnay. Chenin Blanc's minerality complements the garlic and thyme.
                </Typography>
              </div>

              <div className="p-4 rounded-[var(--twb-radius-sm)] bg-[var(--twb-color-bg-primary)]">
                <Typography variant="h4" className="mb-2">Aged Goat Cheese</Typography>
                <Typography variant="body" className="text-[var(--twb-color-text-secondary)] mb-3">
                  Pairs with Shiraz or Cabernet
                </Typography>
                <Typography variant="caption">
                  The nuttiness and firm texture stand up to bold reds. Shiraz's spice notes dance with the aged complexity.
                </Typography>
              </div>

              <div className="p-4 rounded-[var(--twb-radius-sm)] bg-[var(--twb-color-bg-primary)]">
                <Typography variant="h4" className="mb-2">Wine-Washed Rind</Typography>
                <Typography variant="body" className="text-[var(--twb-color-text-secondary)] mb-3">
                  Pairs with Estate Shiraz or Cabernet
                </Typography>
                <Typography variant="caption">
                  Washed in our own Shiraz, this cheese is designed for red wine. The umami richness matches bold, structured reds.
                </Typography>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Button variant="secondary" as={Link} to="/shop/gifts">
                Shop Cheese & Wine Gift Sets
              </Button>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" as={Link} to="/about/farm">
              Visit Our Goat Dairy
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
};

/**
 * CheeseCard Component
 * 
 * Individual product card for cheese display in grid.
 * 
 * Features:
 * - Product image with hover effect
 * - Cheese name and type
 * - Price with currency
 * - Weight information
 * - Wine pairing suggestion
 * - Add to Cart button
 * - Link to product detail page
 * 
 * @param {Product} cheese - Cheese product data
 */
interface CheeseCardProps {
  cheese: Product;
}

const CheeseCard: React.FC<CheeseCardProps> = ({ cheese }) => {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    // TODO: Implement cart context
    alert(`Added ${cheese.name} to cart!`);
  };

  return (
    <Link to={`/shop/product/${cheese.id}`} className="block group">
      <Card variant="default" className="h-full transition-all duration-300 group-hover:shadow-[var(--twb-shadow-lg)] group-hover:scale-[1.02]">
        {/* Product Image */}
        <div className="relative overflow-hidden rounded-t-[var(--twb-radius-card)]">
          <img
            src={cheese.image}
            alt={cheese.name}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {cheese.featured && (
            <Badge 
              variant="warning" 
              className="absolute top-3 right-3"
            >
              <Sparkles className="size-3" />
              Popular
            </Badge>
          )}
        </div>

        <CardHeader>
          <CardTitle className="group-hover:text-[var(--twb-color-gold)] transition-colors">
            {cheese.name}
          </CardTitle>
          <CardDescription>
            {cheese.subcategory}
          </CardDescription>
        </CardHeader>

        <CardContent>
          {/* Price */}
          <Typography variant="h4" className="mb-4 text-[var(--twb-color-gold)]">
            R{cheese.price}
            {cheese.weight && (
              <Typography as="span" variant="caption" className="ml-2">
                / {cheese.weight}
              </Typography>
            )}
          </Typography>

          {/* Wine Pairing */}
          {cheese.pairing && (
            <div className="mb-4 p-3 rounded-[var(--twb-radius-sm)] bg-[var(--twb-color-bg-secondary)]">
              <div className="flex items-start gap-2">
                <Wine className="size-4 mt-0.5 text-[var(--twb-color-plum)] shrink-0" aria-hidden="true" />
                <div>
                  <Typography variant="caption" className="font-semibold mb-1 block">
                    Pairs With:
                  </Typography>
                  <Typography variant="caption" className="text-[var(--twb-color-text-secondary)]">
                    {cheese.pairing}
                  </Typography>
                </div>
              </div>
            </div>
          )}

          {/* In Stock Status */}
          <div className="flex items-center gap-2 mb-4">
            <div className={`size-2 rounded-full ${cheese.inStock ? 'bg-[var(--twb-color-vine)]' : 'bg-red-500'}`} />
            <Typography variant="caption" className={cheese.inStock ? 'text-[var(--twb-color-vine)]' : 'text-red-500'}>
              {cheese.inStock ? 'Fresh This Week' : 'Out of Stock'}
            </Typography>
          </div>
        </CardContent>

        <CardFooter>
          <Button
            variant="primary"
            className="w-full"
            onClick={handleAddToCart}
            disabled={!cheese.inStock}
          >
            {cheese.inStock ? 'Add to Cart' : 'Out of Stock'}
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CheeseCategory;
