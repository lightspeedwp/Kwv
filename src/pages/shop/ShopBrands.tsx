import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../../components/layout/Layout';
import { Container } from '../../components/common/Container';
import { Typography } from '../../components/common/Typography';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { COLORS } from '../../constants/theme';
import { SHOP_BRANDS_DATA } from '../../data/shopBrands';

/**
 * ShopBrands Page Component
 * 
 * Index page listing all brands available in the shop.
 * Categorizes brands into Wines and Spirits.
 * Uses card-based navigation to drive users to specific brand landing pages or collections.
 */
export const ShopBrands: React.FC = () => {
  const wines = Object.values(SHOP_BRANDS_DATA).filter(b => b.category === 'wines');
  const spirits = Object.values(SHOP_BRANDS_DATA).filter(b => b.category === 'spirits');
  // Currently no RTD or Non-alcoholic in my mock data, but structure is there.

  const BrandCard = ({ brand }: { brand: any }) => (
    <Link 
      to={`/shop/brands/${brand.id}`} 
      className="group block bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col h-full transform hover:-translate-y-1"
    >
      <div className="relative h-72 overflow-hidden bg-gray-100">
        <ImageWithFallback 
          src={brand.heroImage} 
          alt={brand.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
        <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
           <Typography variant="h3" className="font-serif text-2xl mb-1">{brand.name}</Typography>
           <Typography variant="caption" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 uppercase tracking-wider text-xs font-bold text-[#DAA520]">
              View Brand Story &rarr;
           </Typography>
        </div>
      </div>
      <div className="p-6 border-t border-gray-100 bg-white relative z-10">
         <Typography variant="body" className="text-gray-600 line-clamp-2 text-sm leading-relaxed">
           {brand.description}
         </Typography>
      </div>
    </Link>
  );

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-[#2C1810] py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <Container variant="content" className="relative z-10">
          <Typography variant="caption" color={COLORS.gold} className="uppercase tracking-[0.2em] mb-4 font-bold">
             Our Portfolio
          </Typography>
          <Typography variant="h1" color={COLORS.white} className="mb-6 font-serif text-5xl md:text-6xl">Our Brands</Typography>
          <Typography variant="bodyLarge" color={COLORS.beige} className="opacity-80 max-w-2xl mx-auto text-lg font-light">
             Explore our extensive portfolio of world-renowned wines, spirits, and beverages. Each brand tells a unique story of heritage, craftsmanship, and passion.
          </Typography>
        </Container>
      </div>

      <div className="py-20 bg-white">
        <Container variant="site">
           {/* Wines Section */}
           <div className="mb-20">
              <div className="flex items-end justify-between mb-10 border-b border-gray-100 pb-4">
                 <div>
                    <Typography variant="h2" className="text-[#2C1810] font-serif text-4xl mb-2">Wines</Typography>
                    <Typography variant="body" className="text-gray-500">From everyday enjoyment to strictly limited collector's items.</Typography>
                 </div>
                 <Link to="/shop/wine" className="hidden md:block text-[#DAA520] font-bold uppercase tracking-wider text-sm hover:text-[#2C1810] transition-colors">
                    Shop All Wines
                 </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                 {wines.map(brand => <BrandCard key={brand.id} brand={brand} />)}
              </div>
           </div>

           {/* Spirits Section */}
           <div className="mb-20">
              <div className="flex items-end justify-between mb-10 border-b border-gray-100 pb-4">
                 <div>
                    <Typography variant="h2" className="text-[#2C1810] font-serif text-4xl mb-2">Spirits</Typography>
                    <Typography variant="body" className="text-gray-500">Award-winning brandies, gins, and liqueurs.</Typography>
                 </div>
                 <Link to="/shop/spirits" className="hidden md:block text-[#DAA520] font-bold uppercase tracking-wider text-sm hover:text-[#2C1810] transition-colors">
                    Shop All Spirits
                 </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                 {spirits.map(brand => <BrandCard key={brand.id} brand={brand} />)}
              </div>
           </div>
           
           {/* Placeholder for RTD / Non-Alc if needed */}
        </Container>
      </div>
    </Layout>
  );
};
