/**
 * Wines Category Page
 * 
 * Browse all wine products from Handcrafted Wines family farm.
 * Displays red and white wines with filtering, sorting, and detailed product cards.
 * 
 * Features:
 * - Product grid with 6 wine products
 * - Filter by wine type (All, Red, White, Rosé)
 * - Sort by price, name, awards
 * - Product cards with tasting notes preview
 * - Awards badges
 * - Add to Cart functionality
 * - Breadcrumb navigation
 * - Family farm story integration
 * - Mobile responsive (1→2→3 column grid)
 * - WCAG AA compliant
 * - SEO optimized
 * 
 * Usage:
 * ```tsx
 * <Route path="/shop/wines" element={<WinesCategory />} />
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
 * - Grid: 1 col mobile → 2 col tablet → 3 col desktop
 * - Gap: --twb-spacing-grid-gap
 * - Cards: --twb-shadow-md with hover effects
 * - Typography: Playfair headings, Inter body
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
import { Wine, Award, Sparkles } from 'lucide-react';

export const WinesCategory: React.FC = () => {
  // Filter and sort state
  const [filterType, setFilterType] = useState<'all' | 'red' | 'white' | 'rosé'>('all');
  const [sortBy, setSortBy] = useState<'name' | 'price-low' | 'price-high' | 'awards'>('name');

  // Get all wine products
  const wineProducts = products.filter(p => p.category === 'wine');

  // Filter wines by subcategory
  const filteredWines = useMemo(() => {
    if (filterType === 'all') return wineProducts;
    
    return wineProducts.filter(wine => {
      if (filterType === 'red') return wine.subcategory === 'Red Wine';
      if (filterType === 'white') return wine.subcategory === 'White Wine';
      if (filterType === 'rosé') return wine.subcategory === 'Rosé';
      return true;
    });
  }, [wineProducts, filterType]);

  // Sort wines
  const sortedWines = useMemo(() => {
    const sorted = [...filteredWines];
    
    switch (sortBy) {
      case 'name':
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case 'price-low':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-high':
        return sorted.sort((a, b) => b.price - a.price);
      case 'awards':
        return sorted.sort((a, b) => (b.awards?.length || 0) - (a.awards?.length || 0));
      default:
        return sorted;
    }
  }, [filteredWines, sortBy]);

  return (
    <>
      {/* SEO Metadata */}
      <title>Our Wines - Handcrafted Wines | Family Farm Paarl Mountain</title>
      <meta name="description" content="Browse our selection of handcrafted wines from Paarl Mountain. Four generations of winemaking since 1918." />

      {/* Breadcrumbs */}
      <BreadcrumbsBar 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Shop', href: '/shop' },
          { label: 'Wines', href: '/shop/wines' }
        ]}
      />

      {/* Page Header */}
      <section className="bg-[var(--twb-color-bg-primary)] py-[var(--twb-spacing-section-y)]">
        <Container variant="wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Wine className="size-12 mx-auto mb-4 text-[var(--twb-color-plum)]" aria-hidden="true" />
            <Typography variant="h1" className="mb-4">
              Our Wines
            </Typography>
            <Typography variant="bodyLarge" className="text-[var(--twb-color-text-secondary)]">
              Four generations of winemaking on Paarl Mountain. Every bottle tells the story of our family, our land, and our passion for handcrafted wines.
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
                All Wines
              </Button>
              <Button
                variant={filterType === 'red' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setFilterType('red')}
              >
                Red Wines
              </Button>
              <Button
                variant={filterType === 'white' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setFilterType('white')}
              >
                White Wines
              </Button>
              <Button
                variant={filterType === 'rosé' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setFilterType('rosé')}
              >
                Rosé
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
                <option value="awards">Most Awarded</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <Typography variant="body" className="mb-6 text-[var(--twb-color-text-secondary)]">
            Showing {sortedWines.length} {sortedWines.length === 1 ? 'wine' : 'wines'}
          </Typography>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--twb-spacing-grid-gap)]">
            {sortedWines.map((wine) => (
              <WineCard key={wine.id} wine={wine} />
            ))}
          </div>

          {/* Empty State */}
          {sortedWines.length === 0 && (
            <div className="text-center py-16">
              <Wine className="size-16 mx-auto mb-4 text-[var(--twb-color-text-secondary)] opacity-30" aria-hidden="true" />
              <Typography variant="h3" className="mb-2">
                No wines found
              </Typography>
              <Typography variant="body" className="mb-6 text-[var(--twb-color-text-secondary)]">
                Try adjusting your filters to see more wines.
              </Typography>
              <Button variant="primary" onClick={() => setFilterType('all')}>
                View All Wines
              </Button>
            </div>
          )}
        </Container>
      </section>

      {/* Winemaking Story Section */}
      <section className="bg-[var(--twb-color-bg-secondary)] py-[var(--twb-spacing-section-y)]">
        <Container variant="content">
          <div className="text-center">
            <Sparkles className="size-10 mx-auto mb-4 text-[var(--twb-color-gold)]" aria-hidden="true" />
            <Typography variant="h2" className="mb-4">
              Four Generations of Winemaking
            </Typography>
            <Typography variant="bodyLarge" className="mb-6">
              Since 1918, our family has been handcrafting wines on the slopes of Paarl Mountain. Every vintage is made with the same care and attention that my great-grandfather brought to our first harvest.
            </Typography>
            <Typography variant="body" className="italic text-[var(--twb-color-text-secondary)] mb-8">
              "We don't chase trends. We make the wines we want to drink—wines with character, soul, and a deep connection to this land." <br />
              <span className="not-italic font-semibold">— Pieter van der Berg, Winemaker</span>
            </Typography>
            <Button variant="secondary" as={Link} to="/about/farm">
              Learn About Our Farm
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
};

/**
 * WineCard Component
 * 
 * Individual product card for wine display in grid.
 * 
 * Features:
 * - Product image with hover effect
 * - Wine name and vintage
 * - Price with currency
 * - Tasting notes preview (first 3)
 * - Awards badge
 * - Add to Cart button
 * - Link to product detail page
 * 
 * @param {Product} wine - Wine product data
 */
interface WineCardProps {
  wine: Product;
}

const WineCard: React.FC<WineCardProps> = ({ wine }) => {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    // TODO: Implement cart context
    alert(`Added ${wine.name} to cart!`);
  };

  return (
    <Link to={`/shop/product/${wine.id}`} className="block group">
      <Card variant="default" className="h-full transition-all duration-300 group-hover:shadow-[var(--twb-shadow-lg)] group-hover:scale-[1.02]">
        {/* Product Image */}
        <div className="relative overflow-hidden rounded-t-[var(--twb-radius-card)]">
          <img
            src={wine.image}
            alt={wine.name}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {wine.featured && (
            <Badge 
              variant="warning" 
              className="absolute top-3 right-3"
            >
              Featured
            </Badge>
          )}
          {wine.awards && wine.awards.length > 0 && (
            <Badge 
              variant="success" 
              className="absolute top-3 left-3"
            >
              <Award className="size-3" />
              Award Winner
            </Badge>
          )}
        </div>

        <CardHeader>
          <CardTitle className="group-hover:text-[var(--twb-color-plum)] transition-colors">
            {wine.name}
          </CardTitle>
          <CardDescription>
            {wine.subcategory} {wine.vintage && `• ${wine.vintage}`}
          </CardDescription>
        </CardHeader>

        <CardContent>
          {/* Price */}
          <Typography variant="h4" className="mb-4 text-[var(--twb-color-plum)]">
            R{wine.price}
            {wine.volume && (
              <Typography as="span" variant="caption" className="ml-2">
                / {wine.volume}
              </Typography>
            )}
          </Typography>

          {/* Tasting Notes Preview */}
          {wine.tastingNotes && wine.tastingNotes.length > 0 && (
            <div className="mb-4">
              <Typography variant="caption" className="font-semibold mb-2 block">
                Tasting Notes:
              </Typography>
              <div className="flex flex-wrap gap-1">
                {wine.tastingNotes.slice(0, 3).map((note, index) => (
                  <Badge key={index} variant="secondary">
                    {note}
                  </Badge>
                ))}
                {wine.tastingNotes.length > 3 && (
                  <Badge variant="secondary">
                    +{wine.tastingNotes.length - 3} more
                  </Badge>
                )}
              </div>
            </div>
          )}

          {/* In Stock Status */}
          <div className="flex items-center gap-2 mb-4">
            <div className={`size-2 rounded-full ${wine.inStock ? 'bg-[var(--twb-color-vine)]' : 'bg-red-500'}`} />
            <Typography variant="caption" className={wine.inStock ? 'text-[var(--twb-color-vine)]' : 'text-red-500'}>
              {wine.inStock ? 'In Stock' : 'Out of Stock'}
            </Typography>
          </div>
        </CardContent>

        <CardFooter>
          <Button
            variant="primary"
            className="w-full"
            onClick={handleAddToCart}
            disabled={!wine.inStock}
          >
            {wine.inStock ? 'Add to Cart' : 'Out of Stock'}
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default WinesCategory;
