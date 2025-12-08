import React from 'react';
import { Container } from '../common/Container';
import { Typography } from '../common/Typography';
import { COLORS } from '../../constants/theme';
import { Link } from 'react-router-dom';

const CATEGORIES = [
  {
    title: 'WINES',
    description: 'Our wine brands include trusted favourites such as the KWV Classic Collection (our core range), Roodeberg (an iconic South African brand launched in 1949), Laborie (wines of distinction) and Cathedral Cellar (a premium product within our celebrated portfolio).',
    link: '/shop/wine'
  },
  {
    title: 'SPIRITS',
    description: 'Brands in our spirits category include popular choices such as Cruxland Gin, Ponchos, Wild Africa and Sally Williams Cream Liqueur. Cruxland Gin brings together the rare Kalahari truffle and nine Southern African botanicals.',
    link: '/shop/spirits'
  },
  {
    title: 'READY TO DRINK',
    description: 'Our ready-to-drink brands range consists of Hooch, CIAO and KWV Brandy and Cola. Hooch – with its brightly coloured beverages – has outlasted countless fads and trends since 1997.',
    link: '/shop/ready-to-drink'
  },
  {
    title: 'NON-ALCOHOLIC',
    description: 'Finally, we have two non-alcoholic brands, namely Fruit Lagoon Cocktail Base and Annabelle Cuvee Rosé Non-Alcoholic Sparkling Wine.',
    link: '/shop/non-alcoholic'
  }
];

/**
 * BrandGrid Component
 * 
 * Displays a grid of product category cards (Wines, Spirits, RTD, Non-Alc).
 * Acts as a high-level navigation component for the Corporate "Our Brands" section
 * or the "Shop" entry point.
 * 
 * Features:
 * - Responsive grid layout.
 * - Hover effects on cards.
 * - Gold header bar for category titles.
 */
export const BrandGrid = () => {
  return (
    <section className="py-20 bg-white">
      <Container variant="site">
        <div className="text-center mb-12 max-w-5xl mx-auto">
          <Typography variant="caption" className="uppercase tracking-widest text-[#2C1810] mb-4">
            OUR BRANDS
          </Typography>
          <Typography variant="h2" color={COLORS.darkBrown} className="mb-6 font-bold leading-tight">
            KWV enjoys a worldwide reputation for its brands that consistently deliver exceptional enjoyment. We are proud to offer you our portfolio!
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CATEGORIES.map((category) => (
            <Link to={category.link} key={category.title} className="group block h-full">
              <div className="flex flex-col h-full">
                {/* Gold Header Bar */}
                <div className="bg-[#BFA15F] py-3 px-2 text-center mb-6 shadow-sm group-hover:bg-[#DAA520] transition-colors">
                  <Typography 
                    variant="h4" 
                    className="!text-sm font-bold uppercase tracking-widest text-white m-0"
                  >
                    {category.title}
                  </Typography>
                </div>
                
                {/* Text Content */}
                <Typography variant="body" className="text-gray-600 leading-relaxed text-center lg:text-left text-sm md:text-base">
                  {category.description}
                </Typography>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-16 text-center max-w-4xl mx-auto">
           <Typography variant="body" className="text-gray-500 italic">
              We currently feature 13 wine brands, 10 spirits brands, 3 ready to drink products and 2 non-alcoholic products.
           </Typography>
        </div>
      </Container>
    </section>
  );
};
