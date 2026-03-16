/**
 * Spirits Category Page
 * 
 * Browse all craft spirits from Handcrafted Wines family distillery.
 * Displays grappa and brandy with filtering, aging information, and distiller notes.
 * 
 * Features:
 * - Product grid with 3 spirit products
 * - Filter by spirit type (All, Grappa, Brandy)
 * - Filter by age (All, New, 5 Year, 10 Year)
 * - Sort by price, name, age
 * - Product cards with distillation notes
 * - Awards badges
 * - Add to Cart functionality
 * - Breadcrumb navigation
 * - Craft distillery story section
 * - "How We Distill" accordion
 * - Mobile responsive (1→2→3 column grid)
 * - WCAG AA compliant
 * - SEO optimized
 * 
 * Usage:
 * ```tsx
 * <Route path="/shop/spirits" element={<SpiritsCategory />} />
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
 * - Colors: clay accents for warm spirits theme
 * 
 * @package HandcraftedWines
 * @version 1.0
 */

import React, { useState, useMemo } from 'react';
import { Link } from 'react-router';
import { Layout } from '../../components/layout/Layout';
import { Container } from '../../components/common/Container';
import { Typography } from '../../components/common/Typography';
import { Button } from '../../components/common/Button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { BreadcrumbsBar } from '../../components/layout/BreadcrumbsBar';
import { products, Product } from '../../data/products';
import { Flame, Award, Clock, ChevronDown } from 'lucide-react';
import { HandDrawnWineBottle } from '../../components/decorative/icons';

export const SpiritsCategory: React.FC = () => {
  // Filter and sort state
  const [filterType, setFilterType] = useState<'all' | 'grappa' | 'brandy'>('all');
  const [filterAge, setFilterAge] = useState<'all' | 'new' | '5-year' | '10-year'>('all');
  const [sortBy, setSortBy] = useState<'name' | 'price-low' | 'price-high' | 'age'>('name');
  const [showDistilleryInfo, setShowDistilleryInfo] = useState(false);

  // Get all spirit products
  const spiritProducts = products.filter(p => p.category === 'spirit');

  // Filter spirits by type and age
  const filteredSpirits = useMemo(() => {
    let filtered = spiritProducts;

    // Filter by spirit type
    if (filterType !== 'all') {
      filtered = filtered.filter(spirit => {
        const name = spirit.name.toLowerCase();
        if (filterType === 'grappa') return name.includes('grappa');
        if (filterType === 'brandy') return name.includes('brandy');
        return true;
      });
    }

    // Filter by age
    if (filterAge !== 'all') {
      filtered = filtered.filter(spirit => {
        const name = spirit.name.toLowerCase();
        if (filterAge === 'new') return name.includes('grappa') || (!name.includes('5') && !name.includes('10'));
        if (filterAge === '5-year') return name.includes('5');
        if (filterAge === '10-year') return name.includes('10');
        return true;
      });
    }

    return filtered;
  }, [spiritProducts, filterType, filterAge]);

  // Sort spirits
  const sortedSpirits = useMemo(() => {
    const sorted = [...filteredSpirits];
    
    switch (sortBy) {
      case 'name':
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case 'price-low':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-high':
        return sorted.sort((a, b) => b.price - a.price);
      case 'age':
        return sorted.sort((a, b) => {
          const getAge = (name: string) => {
            if (name.includes('10')) return 10;
            if (name.includes('5')) return 5;
            return 0;
          };
          return getAge(b.name) - getAge(a.name);
        });
      default:
        return sorted;
    }
  }, [filteredSpirits, sortBy]);

  return (
    <Layout>
      {/* SEO Metadata */}
      <title>Craft Spirits - Handcrafted Wines | Grappa & Brandy from Paarl Mountain</title>
      <meta name="description" content="Small-batch grappa and aged brandy from our family distillery. Handcrafted on Paarl Mountain since 1918." />

      {/* Breadcrumbs */}
      <BreadcrumbsBar 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Shop', href: '/shop' },
          { label: 'Spirits', href: '/shop/spirits' }
        ]}
      />

      {/* Page Header */}
      <section className="bg-[var(--twb-color-bg-primary)] py-[var(--twb-spacing-section-y)]">
        <Container variant="wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            {/* Hand-drawn wine bottle icon */}
            <div className="flex justify-center mb-6">
              <HandDrawnWineBottle 
                size={64} 
                color="var(--twb-color-clay)" 
              />
            </div>
            <Typography variant="h1" className="mb-4">
              Craft Spirits
            </Typography>
            <Typography variant="bodyLarge" className="text-[var(--twb-color-text-secondary)]">
              Hennie distills our grappa and brandy the old-school way—slow, patient, and in tiny batches. Each bottle is a testament to traditional distilling craftsmanship.
            </Typography>
          </div>

          {/* Filter & Sort Controls */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-[var(--twb-color-border-primary)]">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              <div className="flex flex-wrap gap-2 items-center">
                <Typography variant="caption" className="font-semibold mr-2">
                  Type:
                </Typography>
                <Button
                  variant={filterType === 'all' ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setFilterType('all')}
                >
                  All Spirits
                </Button>
                <Button
                  variant={filterType === 'grappa' ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setFilterType('grappa')}
                >
                  Grappa
                </Button>
                <Button
                  variant={filterType === 'brandy' ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setFilterType('brandy')}
                >
                  Brandy
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 items-center ml-0 lg:ml-4">
                <Typography variant="caption" className="font-semibold mr-2">
                  Age:
                </Typography>
                <Button
                  variant={filterAge === 'all' ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setFilterAge('all')}
                >
                  All Ages
                </Button>
                <Button
                  variant={filterAge === 'new' ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setFilterAge('new')}
                >
                  New
                </Button>
                <Button
                  variant={filterAge === '5-year' ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setFilterAge('5-year')}
                >
                  5 Year
                </Button>
                <Button
                  variant={filterAge === '10-year' ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setFilterAge('10-year')}
                >
                  10 Year
                </Button>
              </div>
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
                <option value="age">Age (Oldest First)</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <Typography variant="body" className="mb-6 text-[var(--twb-color-text-secondary)]">
            Showing {sortedSpirits.length} {sortedSpirits.length === 1 ? 'spirit' : 'spirits'}
          </Typography>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--twb-spacing-grid-gap)]">
            {sortedSpirits.map((spirit) => (
              <SpiritCard key={spirit.id} spirit={spirit} />
            ))}
          </div>

          {/* Empty State */}
          {sortedSpirits.length === 0 && (
            <div className="text-center py-16">
              <Flame className="size-16 mx-auto mb-4 text-[var(--twb-color-text-secondary)] opacity-30" aria-hidden="true" />
              <Typography variant="h3" className="mb-2">
                No spirits found
              </Typography>
              <Typography variant="body" className="mb-6 text-[var(--twb-color-text-secondary)]">
                Try adjusting your filters to see more spirits.
              </Typography>
              <Button variant="primary" onClick={() => { setFilterType('all'); setFilterAge('all'); }}>
                View All Spirits
              </Button>
            </div>
          )}
        </Container>
      </section>

      {/* Craft Distillery Story Section */}
      <section className="bg-[var(--twb-color-bg-secondary)] py-[var(--twb-spacing-section-y)]">
        <Container variant="content">
          <div className="text-center mb-8">
            <Clock className="size-10 mx-auto mb-4 text-[var(--twb-color-clay)]" aria-hidden="true" />
            <Typography variant="h2" className="mb-4">
              Craft Distillery
            </Typography>
            <Typography variant="bodyLarge" className="mb-6">
              Our distillery isn't fancy—just copper pot stills, careful temperature control, and Hennie's 30 years of experience. We make grappa from our own wine pomace and age brandy in small French oak barrels.
            </Typography>
            <Typography variant="body" className="italic text-[var(--twb-color-text-secondary)] mb-8">
              "I don't rush. Grappa needs time to settle, brandy needs years in the barrel. You can't fake quality—people taste the shortcuts." <br />
              <span className="not-italic font-semibold">— Hennie van der Berg, Master Distiller</span>
            </Typography>
          </div>

          {/* How We Distill Accordion */}
          <div className="mt-12">
            <button
              onClick={() => setShowDistilleryInfo(!showDistilleryInfo)}
              className="w-full flex items-center justify-between p-6 rounded-[var(--twb-radius-card)] border border-[var(--twb-color-border-primary)] bg-[var(--twb-color-bg-tertiary)] hover:bg-[var(--twb-color-bg-primary)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--twb-color-gold)]"
              aria-expanded={showDistilleryInfo}
            >
              <Typography variant="h4">How We Distill Our Spirits</Typography>
              <ChevronDown 
                className={`size-6 text-[var(--twb-color-clay)] transition-transform ${showDistilleryInfo ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>
            
            {showDistilleryInfo && (
              <div className="mt-4 p-6 rounded-[var(--twb-radius-card)] bg-[var(--twb-color-bg-tertiary)]">
                <div className="space-y-4">
                  <div>
                    <Typography variant="h4" className="mb-2">Grappa</Typography>
                    <Typography variant="body">
                      After harvest, we take our fresh grape pomace (skins, seeds, stems) straight from the press to the still. Hennie distills it slowly in our copper pot still, making cuts to keep only the heart of the distillate—the cleanest, most aromatic spirit. It rests for at least six months before bottling.
                    </Typography>
                  </div>
                  
                  <div>
                    <Typography variant="h4" className="mb-2">Brandy</Typography>
                    <Typography variant="body">
                      Our brandy starts as wine—we distill our Chenin Blanc twice to concentrate the flavors. Then it goes into small French oak barrels where it sleeps for years. The 5-year develops vanilla and honey notes; the 10-year gets deeper, with dried fruit and spice. We lose about 2% per year to evaporation (the angel's share), but what remains is worth the wait.
                    </Typography>
                  </div>

                  <div>
                    <Typography variant="h4" className="mb-2">Small Batches Only</Typography>
                    <Typography variant="body">
                      We make maybe 500 bottles of grappa a year, and only a few dozen bottles of our 10-year brandy. When it's gone, it's gone. This isn't a business strategy—it's just the reality of handcrafted distilling.
                    </Typography>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-[var(--twb-color-border-primary)]">
                  <Button variant="secondary" as={Link} to="/about/farm">
                    Visit Our Distillery
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>
    </Layout>
  );
};

/**
 * SpiritCard Component
 * 
 * Individual product card for spirit display in grid.
 * 
 * Features:
 * - Product image with hover effect
 * - Spirit name and age
 * - Price with currency
 * - Alcohol percentage and volume
 * - Awards badge
 * - Age indicator badge
 * - Add to Cart button
 * - Link to product detail page
 * 
 * @param {Product} spirit - Spirit product data
 */
interface SpiritCardProps {
  spirit: Product;
}

const SpiritCard: React.FC<SpiritCardProps> = ({ spirit }) => {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    // TODO: Implement cart context
    alert(`Added ${spirit.name} to cart!`);
  };

  // Extract age from name for badge
  const getAgeLabel = (name: string) => {
    if (name.includes('10')) return '10 Year Aged';
    if (name.includes('5')) return '5 Year Aged';
    return 'Fresh Distilled';
  };

  return (
    <Link to={`/shop/product/${spirit.id}`} className="block group">
      <Card variant="default" className="h-full transition-all duration-300 group-hover:shadow-[var(--twb-shadow-lg)] group-hover:scale-[1.02]">
        {/* Product Image */}
        <div className="relative overflow-hidden rounded-t-[var(--twb-radius-card)]">
          <img
            src={spirit.image}
            alt={spirit.name}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {spirit.awards && spirit.awards.length > 0 && (
            <Badge 
              variant="success" 
              className="absolute top-3 left-3"
            >
              <Award className="size-3" />
              Award Winner
            </Badge>
          )}
          <Badge 
            variant="warning" 
            className="absolute top-3 right-3"
          >
            <Clock className="size-3" />
            {getAgeLabel(spirit.name)}
          </Badge>
        </div>

        <CardHeader>
          <CardTitle className="group-hover:text-[var(--twb-color-clay)] transition-colors">
            {spirit.name}
          </CardTitle>
          <CardDescription>
            {spirit.subcategory}
          </CardDescription>
        </CardHeader>

        <CardContent>
          {/* Price */}
          <Typography variant="h4" className="mb-4 text-[var(--twb-color-clay)]">
            R{spirit.price}
            {spirit.volume && (
              <Typography as="span" variant="caption" className="ml-2">
                / {spirit.volume}
              </Typography>
            )}
          </Typography>

          {/* Spirit Details */}
          <div className="space-y-2 mb-4">
            {spirit.alcohol && (
              <div className="flex items-center justify-between">
                <Typography variant="caption" className="text-[var(--twb-color-text-secondary)]">
                  Alcohol:
                </Typography>
                <Typography variant="caption" className="font-semibold">
                  {spirit.alcohol}
                </Typography>
              </div>
            )}
            {spirit.volume && (
              <div className="flex items-center justify-between">
                <Typography variant="caption" className="text-[var(--twb-color-text-secondary)]">
                  Volume:
                </Typography>
                <Typography variant="caption" className="font-semibold">
                  {spirit.volume}
                </Typography>
              </div>
            )}
          </div>

          {/* Tasting Notes Preview */}
          {spirit.tastingNotes && spirit.tastingNotes.length > 0 && (
            <div className="mb-4">
              <Typography variant="caption" className="font-semibold mb-2 block">
                Tasting Notes:
              </Typography>
              <div className="flex flex-wrap gap-1">
                {spirit.tastingNotes.slice(0, 3).map((note, index) => (
                  <Badge key={index} variant="secondary">
                    {note}
                  </Badge>
                ))}
                {spirit.tastingNotes.length > 3 && (
                  <Badge variant="secondary">
                    +{spirit.tastingNotes.length - 3} more
                  </Badge>
                )}
              </div>
            </div>
          )}

          {/* In Stock Status */}
          <div className="flex items-center gap-2 mb-4">
            <div className={`size-2 rounded-full ${spirit.inStock ? 'bg-[var(--twb-color-vine)]' : 'bg-red-500'}`} />
            <Typography variant="caption" className={spirit.inStock ? 'text-[var(--twb-color-vine)]' : 'text-red-500'}>
              {spirit.inStock ? 'In Stock' : 'Out of Stock'}
            </Typography>
          </div>
        </CardContent>

        <CardFooter>
          <Button
            variant="primary"
            className="w-full"
            onClick={handleAddToCart}
            disabled={!spirit.inStock}
          >
            {spirit.inStock ? 'Add to Cart' : 'Out of Stock'}
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default SpiritsCategory;