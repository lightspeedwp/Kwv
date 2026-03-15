import React from 'react';
import { Link } from 'react-router';
import { Container } from '../../common/Container';
import { Typography } from '../../common/Typography';
import { BrushStrokeBorder } from '../../decorative/BrushStrokeBorder';
import { PaperTexture } from '../../decorative/PaperTexture';
import { HandDrawnUnderline } from '../../decorative/HandDrawnUnderline';

const BRANDS = [
  { name: 'KWV Classic Collection', logo: null, link: '/shop/brands/kwv-classic-collection' },
  { name: 'Laborie', logo: null, link: '/shop/brands/laborie' },
  { name: 'Roodeberg', logo: null, link: '/shop/brands/roodeberg' },
  { name: 'Cathedral Cellar', logo: null, link: '/shop/brands/cathedral-cellar' },
  { name: 'Annabelle', logo: null, link: '/shop/brands/annabelle' },
  { name: 'KWV House of Brandy', logo: null, link: '/shop/brands/kwv-brandy' },
  { name: 'Imagin', logo: null, link: '/shop/brands/imagin-gin' },
  { name: 'Cruxland', logo: null, link: '/shop/brands/cruxland-gin' },
  { name: 'Wild Africa Cream', logo: null, link: '/shop/brands/wild-africa-cream' },
];

/**
 * ShopBrandGrid Component
 * 
 * A grid layout displaying all major brands available in the shop.
 * Used on the Shop Homepage for quick brand navigation.
 * Features:
 * - Responsive grid (2 cols mobile -> 5 cols xl).
 * - Hover effects (Shadow, Border color change).
 * - Placeholder styling for logos (using text for prototype).
 */
export const ShopBrandGrid: React.FC = () => {
  return (
    <div className="bg-[var(--twb-color-bg-primary)] py-[var(--twb-spacing-section-y)]">
      <Container variant="site">
        <div className="text-center mb-[var(--twb-spacing-12)]">
          <Typography variant="h2" className="relative inline-block text-[var(--twb-color-text-primary)] uppercase font-serif tracking-wide text-2xl md:text-3xl mb-2">
            Shop Our Famous Brands
            <HandDrawnUnderline variant="brush" color="var(--twb-color-gold)" width={70} />
          </Typography>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[var(--twb-spacing-4)]">
          {BRANDS.map((brand, idx) => (
            <Link 
              key={idx} 
              to={brand.link} 
              className="group relative flex items-center justify-center aspect-[3/2] bg-[var(--twb-color-bg-tertiary)] rounded-[var(--twb-radius-organic-sm)] p-6 shadow-[var(--twb-shadow-sm)] hover:shadow-[var(--twb-shadow-md)] transition-all focus:outline-none focus:ring-2 focus:ring-[var(--twb-color-plum)] focus:ring-offset-2"
            >
              {/* Hand-drawn border */}
              <BrushStrokeBorder 
                variant="dry-brush" 
                color="var(--twb-color-clay)" 
                opacity={0.25}
                strokeWidth={1}
                showCorners={false}
              />
              
              {/* Paper texture */}
              <PaperTexture intensity="subtle" opacity={0.04} />
              
              <div className="relative z-10 text-center">
                 {/* Placeholder for Logo */}
                 <Typography 
                    variant="h3" 
                    className="font-serif text-[var(--twb-color-text-primary)] text-lg md:text-xl group-hover:text-[var(--twb-color-plum)] dark:group-hover:text-[var(--twb-color-gold)] transition-colors"
                 >
                    {brand.name}
                 </Typography>
                 {/* Simulated sub-text often found in logos */}
                 <div className="h-[1px] w-8 bg-[var(--twb-color-border-secondary)] mx-auto my-2 group-hover:bg-[var(--twb-color-gold)] transition-colors"></div>
                 <span className="text-[10px] uppercase tracking-widest text-[var(--twb-color-text-muted)] group-hover:text-[var(--twb-color-gold)] transition-colors">Est. 1918</span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};