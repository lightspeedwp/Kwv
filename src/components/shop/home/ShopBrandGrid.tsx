import React from 'react';
import { Link } from 'react-router';
import { Container } from '../../common/Container';
import { Typography } from '../../common/Typography';

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
    <div className="bg-white py-16">
      <Container variant="site">
        <div className="text-center mb-12">
          <Typography variant="h2" className="text-[#2C1810] uppercase font-serif tracking-wide text-2xl md:text-3xl mb-2">
            Shop Our Famous Brands
          </Typography>
          <div className="h-1 w-20 bg-[#DAA520] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {BRANDS.map((brand, idx) => (
            <Link 
              key={idx} 
              to={brand.link} 
              className="group flex items-center justify-center aspect-[3/2] border border-gray-200 p-6 hover:border-[#DAA520] hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-[#2C1810] focus:ring-offset-2"
            >
              <div className="text-center">
                 {/* Placeholder for Logo */}
                 <Typography 
                    variant="h3" 
                    className="font-serif text-[#2C1810] text-lg md:text-xl group-hover:text-[#DAA520] transition-colors"
                 >
                    {brand.name}
                 </Typography>
                 {/* Simulated sub-text often found in logos */}
                 <div className="h-[1px] w-8 bg-gray-300 mx-auto my-2 group-hover:bg-[#DAA520]"></div>
                 <span className="text-[10px] uppercase tracking-widest text-gray-400 group-hover:text-[#DAA520]">Est. 1918</span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};