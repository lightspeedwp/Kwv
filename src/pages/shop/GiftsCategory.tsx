/**
 * Gifts Category Page
 * 
 * Browse all curated gift sets from Handcrafted Wines family farm.
 * Displays wine, cheese, and spirit gift sets with detailed contents and savings.
 * 
 * Features:
 * - Product grid with 4+ gift set products
 * - Show contents of each set with breakdown
 * - Savings calculation (vs buying separately)
 * - "Perfect For" occasion tags
 * - Gift message option preview
 * - Add to Cart functionality
 * - Breadcrumb navigation
 * - Gift giving guide section
 * - Gift wrapping information
 * - Mobile responsive (1→2→3 column grid)
 * - WCAG AA compliant
 * - SEO optimized
 * 
 * Usage:
 * ```tsx
 * <Route path="/shop/gifts" element={<GiftsCategory />} />
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
 * - Colors: gold accents for gift premium theme
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
import { Gift, Heart, Package, Sparkles, Check } from 'lucide-react';

// Gift set enhanced data with contents and savings
interface GiftSetDetails {
  id: string;
  contents: string[];
  individualPrice: number;
  savings: number;
  savingsPercent: number;
  occasion: string[];
  includes: string[];
}

const giftSetDetails: Record<string, GiftSetDetails> = {
  'tasting-trio': {
    id: 'tasting-trio',
    contents: ['Estate Shiraz 2020', 'Chenin Blanc 2022', 'Rosé 2023'],
    individualPrice: 735, // 285 + 195 + 165 + box
    savings: 85,
    savingsPercent: 12,
    occasion: ['Wine Lovers', 'Housewarming', 'Thank You', 'Birthday'],
    includes: ['3 bottles (750ml each)', 'Beautiful gift box', 'Tasting notes card', 'Farm story booklet']
  },
  'cheese-wine-pairing-box': {
    id: 'cheese-wine-pairing-box',
    contents: ['Chenin Blanc 2022', 'Estate Shiraz 2020', 'Fresh Chèvre (200g)', 'Wine-Washed Rind (250g)'],
    individualPrice: 1000, // 195 + 285 + 95 + 220 + extras
    savings: 150,
    savingsPercent: 15,
    occasion: ['Foodies', 'Anniversary', 'Romantic', 'Dinner Party'],
    includes: ['2 wine bottles', '2 artisan cheeses', 'Pairing guide from Annelie', 'Wooden gift box', 'Cheese knife']
  },
  'brandy-chocolate-set': {
    id: 'brandy-chocolate-set',
    contents: ['5 Year Aged Brandy', 'Premium dark chocolate (250g)', 'Wooden gift box'],
    individualPrice: 1100, // 450 + 150 + box + chocolate
    savings: 150,
    savingsPercent: 14,
    occasion: ['Corporate Gifts', 'Father\'s Day', 'Retirement', 'Special Occasions'],
    includes: ['750ml brandy', 'Artisan dark chocolate', 'Wooden presentation box', 'Tasting notes', 'Luxury packaging']
  }
};

export const GiftsCategory: React.FC = () => {
  // Filter and sort state
  const [sortBy, setSortBy] = useState<'name' | 'price-low' | 'price-high' | 'savings'>('savings');

  // Get all gift products
  const giftProducts = products.filter(p => p.category === 'gift');

  // Sort gifts
  const sortedGifts = useMemo(() => {
    const sorted = [...giftProducts];
    
    switch (sortBy) {
      case 'name':
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case 'price-low':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-high':
        return sorted.sort((a, b) => b.price - a.price);
      case 'savings':
        return sorted.sort((a, b) => {
          const savingsA = giftSetDetails[a.id]?.savings || 0;
          const savingsB = giftSetDetails[b.id]?.savings || 0;
          return savingsB - savingsA;
        });
      default:
        return sorted;
    }
  }, [giftProducts, sortBy]);

  return (
    <Layout>
      {/* SEO Metadata */}
      <title>Gift Sets - Handcrafted Wines | Curated Wine, Cheese & Spirit Gifts</title>
      <meta name="description" content="Beautifully curated gift sets featuring our handcrafted wines, artisan cheeses, and aged spirits. Perfect for any occasion." />

      {/* Breadcrumbs */}
      <BreadcrumbsBar 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Shop', href: '/shop' },
          { label: 'Gifts', href: '/shop/gifts' }
        ]}
      />

      {/* Page Header */}
      <section className="bg-[var(--twb-color-bg-primary)] py-[var(--twb-spacing-section-y)]">
        <Container variant="wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Gift className="size-12 mx-auto mb-4 text-[var(--twb-color-gold)]" aria-hidden="true" />
            <Typography variant="h1" className="mb-4">
              Gift Sets
            </Typography>
            <Typography variant="bodyLarge" className="text-[var(--twb-color-text-secondary)]">
              We've put together our favorite combinations—wines, cheeses, and spirits that we know pair beautifully. Each set is thoughtfully curated and beautifully packaged. Perfect for sharing a taste of our farm.
            </Typography>
          </div>

          {/* Sort Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-6 border-b border-[var(--twb-color-border-primary)]">
            <Typography variant="body" className="text-[var(--twb-color-text-secondary)]">
              Showing {sortedGifts.length} {sortedGifts.length === 1 ? 'gift set' : 'gift sets'}
            </Typography>

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
                <option value="savings">Best Savings</option>
                <option value="name">Name (A-Z)</option>
                <option value="price-low">Price (Low to High)</option>
                <option value="price-high">Price (High to Low)</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--twb-spacing-grid-gap)]">
            {sortedGifts.map((gift) => (
              <GiftCard key={gift.id} gift={gift} details={giftSetDetails[gift.id]} />
            ))}
          </div>

          {/* Empty State */}
          {sortedGifts.length === 0 && (
            <div className="text-center py-16">
              <Gift className="size-16 mx-auto mb-4 text-[var(--twb-color-text-secondary)] opacity-30" aria-hidden="true" />
              <Typography variant="h3" className="mb-2">
                No gift sets available
              </Typography>
              <Typography variant="body" className="mb-6 text-[var(--twb-color-text-secondary)]">
                Check back soon for new curated gift sets.
              </Typography>
              <Button variant="primary" as={Link} to="/shop">
                Browse All Products
              </Button>
            </div>
          )}
        </Container>
      </section>

      {/* Gift Giving Guide Section */}
      <section className="bg-[var(--twb-color-bg-secondary)] py-[var(--twb-spacing-section-y)]">
        <Container variant="content">
          <div className="text-center mb-12">
            <Heart className="size-10 mx-auto mb-4 text-[var(--twb-color-gold)]" aria-hidden="true" />
            <Typography variant="h2" className="mb-4">
              Why Give Handcrafted Wines?
            </Typography>
            <Typography variant="bodyLarge" className="text-[var(--twb-color-text-secondary)]">
              Our gift sets aren't just products in a box—they're a taste of our family farm, our craft, and our story. When you give Handcrafted Wines, you're sharing something truly special.
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 rounded-[var(--twb-radius-card)] bg-[var(--twb-color-bg-tertiary)]">
              <Package className="size-8 mb-3 text-[var(--twb-color-gold)]" aria-hidden="true" />
              <Typography variant="h4" className="mb-2">
                Beautiful Packaging
              </Typography>
              <Typography variant="body" className="text-[var(--twb-color-text-secondary)]">
                Every gift set comes in custom wooden boxes or elegant gift packaging. We include farm story booklets, tasting notes, and pairing guides—no generic wrapping here.
              </Typography>
            </div>

            <div className="p-6 rounded-[var(--twb-radius-card)] bg-[var(--twb-color-bg-tertiary)]">
              <Sparkles className="size-8 mb-3 text-[var(--twb-color-gold)]" aria-hidden="true" />
              <Typography variant="h4" className="mb-2">
                Thoughtfully Curated
              </Typography>
              <Typography variant="body" className="text-[var(--twb-color-text-secondary)]">
                We don't randomly throw products together. Each set is designed by Pieter, Annelie, and Hennie to showcase perfectly paired flavors. These are combinations we serve to our own guests.
              </Typography>
            </div>

            <div className="p-6 rounded-[var(--twb-radius-card)] bg-[var(--twb-color-bg-tertiary)]">
              <Heart className="size-8 mb-3 text-[var(--twb-color-gold)]" aria-hidden="true" />
              <Typography variant="h4" className="mb-2">
                Personal Touch
              </Typography>
              <Typography variant="body" className="text-[var(--twb-color-text-secondary)]">
                Add a custom gift message (we'll handwrite it on a card). Need help choosing? Call us—we're happy to recommend the perfect set for your recipient.
              </Typography>
            </div>

            <div className="p-6 rounded-[var(--twb-radius-card)] bg-[var(--twb-color-bg-tertiary)]">
              <Check className="size-8 mb-3 text-[var(--twb-color-gold)]" aria-hidden="true" />
              <Typography variant="h4" className="mb-2">
                Real Savings
              </Typography>
              <Typography variant="body" className="text-[var(--twb-color-text-secondary)]">
                Gift sets save you 10-15% versus buying items separately. Plus, we include extras like gift boxes, pairing guides, and cheese knives—value you won't find anywhere else.
              </Typography>
            </div>
          </div>

          <div className="text-center p-8 rounded-[var(--twb-radius-card)] bg-[var(--twb-color-bg-primary)] border border-[var(--twb-color-border-primary)]">
            <Typography variant="h3" className="mb-3">
              Corporate & Bulk Orders
            </Typography>
            <Typography variant="body" className="mb-6 text-[var(--twb-color-text-secondary)]">
              Need 10+ gift sets for corporate gifting? We offer custom branding, personalized messages, and special pricing for bulk orders. Contact us to discuss your needs.
            </Typography>
            <Button variant="secondary" as={Link} to="/contact">
              Contact Us About Bulk Orders
            </Button>
          </div>
        </Container>
      </section>

      {/* Gift Options Section */}
      <section className="bg-[var(--twb-color-bg-primary)] py-[var(--twb-spacing-section-y)]">
        <Container variant="content">
          <div className="text-center mb-8">
            <Typography variant="h2" className="mb-4">
              Gift Options & Add-Ons
            </Typography>
            <Typography variant="body" className="text-[var(--twb-color-text-secondary)]">
              Make your gift even more special with these optional extras.
            </Typography>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-[var(--twb-radius-sm)] bg-[var(--twb-color-bg-secondary)]">
              <Check className="size-5 mt-1 text-[var(--twb-color-vine)] shrink-0" aria-hidden="true" />
              <div>
                <Typography variant="h4" className="mb-1">Custom Gift Message</Typography>
                <Typography variant="body" className="text-[var(--twb-color-text-secondary)]">
                  We'll handwrite your message on a beautiful card. Add your personal note at checkout.
                </Typography>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-[var(--twb-radius-sm)] bg-[var(--twb-color-bg-secondary)]">
              <Check className="size-5 mt-1 text-[var(--twb-color-vine)] shrink-0" aria-hidden="true" />
              <div>
                <Typography variant="h4" className="mb-1">Premium Gift Wrapping (+R50)</Typography>
                <Typography variant="body" className="text-[var(--twb-color-text-secondary)]">
                  Upgrade to our deluxe wrapping with hand-tied ribbon and wax seal. Available at checkout.
                </Typography>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-[var(--twb-radius-sm)] bg-[var(--twb-color-bg-secondary)]">
              <Check className="size-5 mt-1 text-[var(--twb-color-vine)] shrink-0" aria-hidden="true" />
              <div>
                <Typography variant="h4" className="mb-1">Direct Shipping to Recipient</Typography>
                <Typography variant="body" className="text-[var(--twb-color-text-secondary)]">
                  Ship directly to your gift recipient anywhere in South Africa. We'll include your gift message.
                </Typography>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-[var(--twb-radius-sm)] bg-[var(--twb-color-bg-secondary)]">
              <Check className="size-5 mt-1 text-[var(--twb-color-vine)] shrink-0" aria-hidden="true" />
              <div>
                <Typography variant="h4" className="mb-1">Build Your Own Gift Set</Typography>
                <Typography variant="body" className="text-[var(--twb-color-text-secondary)]">
                  Want to customize a set? Contact us—we're happy to create a custom combination for you.
                </Typography>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

/**
 * GiftCard Component
 * 
 * Individual product card for gift set display in grid.
 * 
 * Features:
 * - Product image with hover effect
 * - Gift set name and description
 * - Price with savings badge
 * - Contents list with checkmarks
 * - What's included details
 * - Perfect for occasion tags
 * - Add to Cart button
 * - Link to product detail page
 * 
 * @param {Product} gift - Gift product data
 * @param {GiftSetDetails} details - Enhanced gift set details
 */
interface GiftCardProps {
  gift: Product;
  details?: GiftSetDetails;
}

const GiftCard: React.FC<GiftCardProps> = ({ gift, details }) => {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    // TODO: Implement cart context
    alert(`Added ${gift.name} to cart!`);
  };

  return (
    <Link to={`/shop/product/${gift.id}`} className="block group">
      <Card variant="default" className="h-full transition-all duration-300 group-hover:shadow-[var(--twb-shadow-lg)] group-hover:scale-[1.02]">
        {/* Product Image */}
        <div className="relative overflow-hidden rounded-t-[var(--twb-radius-card)]">
          <img
            src={gift.image}
            alt={gift.name}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {details && details.savings > 0 && (
            <Badge 
              variant="success" 
              className="absolute top-3 right-3"
            >
              Save R{details.savings}
            </Badge>
          )}
          {gift.featured && (
            <Badge 
              variant="warning" 
              className="absolute top-3 left-3"
            >
              <Sparkles className="size-3" />
              Popular
            </Badge>
          )}
        </div>

        <CardHeader>
          <CardTitle className="group-hover:text-[var(--twb-color-gold)] transition-colors">
            {gift.name}
          </CardTitle>
          <CardDescription>
            {gift.description}
          </CardDescription>
        </CardHeader>

        <CardContent>
          {/* Price with Savings */}
          <div className="mb-4">
            <Typography variant="h4" className="text-[var(--twb-color-gold)]">
              R{gift.price}
            </Typography>
            {details && (
              <div className="flex items-baseline gap-2 mt-1">
                <Typography variant="caption" className="line-through text-[var(--twb-color-text-secondary)]">
                  R{details.individualPrice}
                </Typography>
                <Typography variant="caption" className="text-[var(--twb-color-vine)] font-semibold">
                  ({details.savingsPercent}% off)
                </Typography>
              </div>
            )}
          </div>

          {/* Contents */}
          {details && details.contents && (
            <div className="mb-4">
              <Typography variant="caption" className="font-semibold mb-2 block">
                What's Included:
              </Typography>
              <ul className="space-y-1">
                {details.contents.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="size-3 mt-1 text-[var(--twb-color-vine)] shrink-0" aria-hidden="true" />
                    <Typography variant="caption" className="text-[var(--twb-color-text-secondary)]">
                      {item}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Occasion Tags */}
          {details && details.occasion && details.occasion.length > 0 && (
            <div className="mb-4">
              <Typography variant="caption" className="font-semibold mb-2 block">
                Perfect For:
              </Typography>
              <div className="flex flex-wrap gap-1">
                {details.occasion.slice(0, 3).map((occ, index) => (
                  <Badge key={index} variant="secondary">
                    {occ}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* In Stock Status */}
          <div className="flex items-center gap-2 mb-4">
            <div className={`size-2 rounded-full ${gift.inStock ? 'bg-[var(--twb-color-vine)]' : 'bg-red-500'}`} />
            <Typography variant="caption" className={gift.inStock ? 'text-[var(--twb-color-vine)]' : 'text-red-500'}>
              {gift.inStock ? 'In Stock' : 'Out of Stock'}
            </Typography>
          </div>
        </CardContent>

        <CardFooter>
          <Button
            variant="primary"
            className="w-full"
            onClick={handleAddToCart}
            disabled={!gift.inStock}
          >
            {gift.inStock ? 'Add to Cart' : 'Out of Stock'}
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default GiftsCategory;