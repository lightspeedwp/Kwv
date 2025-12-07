import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '../common/Typography';
import { ChevronRight } from 'lucide-react';
import { Container } from '../common/Container';

/**
 * BrandsMegaMenu Component
 * 
 * The desktop dropdown menu for the "Brands" navigation item in the Corporate Header.
 * Lists all major brands categorized by type (Wines, Spirits, RTD, Non-alcoholic).
 */
export const BrandsMegaMenu: React.FC = () => {
  return (
    <div className="absolute top-full left-0 w-full bg-white shadow-xl hidden group-hover:block z-50 border-t-4 border-[#DAA520]">
      <Container variant="site" className="py-8">
        <div className="grid grid-cols-4 gap-8">
          {/* Wines */}
          <div className="col-span-1">
            <Typography variant="h4" className="text-[#2C1810] mb-4 border-b border-gray-200 pb-2 font-bold flex items-center gap-2">
               Wines
            </Typography>
            <div className="space-y-2">
              <Link to="/brands/kwv-wines-classic-collection" className="block text-sm text-gray-600 hover:text-[#8B0000] hover:translate-x-1 transition-all">KWV Classic Collection</Link>
              <Link to="/brands/roodeberg" className="block text-sm text-gray-600 hover:text-[#8B0000] hover:translate-x-1 transition-all">Roodeberg</Link>
              <Link to="/brands/laborie" className="block text-sm text-gray-600 hover:text-[#8B0000] hover:translate-x-1 transition-all">Laborie</Link>
              <Link to="/brands/the-mentors" className="block text-sm text-gray-600 hover:text-[#8B0000] hover:translate-x-1 transition-all">The Mentors</Link>
              <Link to="/brands/cathedral-cellar" className="block text-sm text-gray-600 hover:text-[#8B0000] hover:translate-x-1 transition-all">Cathedral Cellar</Link>
              <Link to="/brands/pearly-bay" className="block text-sm text-gray-600 hover:text-[#8B0000] hover:translate-x-1 transition-all">Pearly Bay</Link>
              <Link to="/brands/annabelle" className="block text-sm text-gray-600 hover:text-[#8B0000] hover:translate-x-1 transition-all">Annabelle</Link>
              <Link to="/brands/golden-kaan" className="block text-sm text-gray-600 hover:text-[#8B0000] hover:translate-x-1 transition-all">Golden Kaan</Link>
            </div>
          </div>

          {/* Wines Continued & Spirits */}
          <div className="col-span-1">
            <Typography variant="h4" className="text-[#2C1810] mb-4 border-b border-gray-200 pb-2 font-bold opacity-0">
               More Wines
            </Typography>
            <div className="space-y-2 mb-8">
              <Link to="/brands/african-passion" className="block text-sm text-gray-600 hover:text-[#8B0000] hover:translate-x-1 transition-all">African Passion</Link>
              <Link to="/brands/cafe-culture" className="block text-sm text-gray-600 hover:text-[#8B0000] hover:translate-x-1 transition-all">Café Culture</Link>
              <Link to="/brands/bonne-esperance" className="block text-sm text-gray-600 hover:text-[#8B0000] hover:translate-x-1 transition-all">Bonne Espérance</Link>
              <Link to="/brands/big-bill" className="block text-sm text-gray-600 hover:text-[#8B0000] hover:translate-x-1 transition-all">Big Bill</Link>
              <Link to="/brands/kwv-fortified-wines" className="block text-sm text-gray-600 hover:text-[#8B0000] hover:translate-x-1 transition-all">KWV Fortified Wines</Link>
            </div>

            <Typography variant="h4" className="text-[#2C1810] mb-4 border-b border-gray-200 pb-2 font-bold">
               Ready to Drink
            </Typography>
            <div className="space-y-2">
               <Link to="/brands/ciao" className="block text-sm text-gray-600 hover:text-[#8B0000] hover:translate-x-1 transition-all">Ciao</Link>
               <Link to="/brands/hooch" className="block text-sm text-gray-600 hover:text-[#8B0000] hover:translate-x-1 transition-all">Hooch</Link>
               <Link to="/brands/brandy-cola" className="block text-sm text-gray-600 hover:text-[#8B0000] hover:translate-x-1 transition-all">Brandy & Cola</Link>
            </div>
          </div>

          {/* Spirits */}
          <div className="col-span-1">
            <Typography variant="h4" className="text-[#2C1810] mb-4 border-b border-gray-200 pb-2 font-bold">
               Spirits
            </Typography>
            <div className="space-y-2">
              <Link to="/brands/kwv-brandy" className="block text-sm text-gray-600 hover:text-[#8B0000] hover:translate-x-1 transition-all">KWV Brandy</Link>
              <Link to="/brands/centenary" className="block text-sm text-gray-600 hover:text-[#8B0000] hover:translate-x-1 transition-all">Centenary</Link>
              <Link to="/brands/cruxland-gin" className="block text-sm text-gray-600 hover:text-[#8B0000] hover:translate-x-1 transition-all">Cruxland Gin</Link>
              <Link to="/brands/imagin-gin" className="block text-sm text-gray-600 hover:text-[#8B0000] hover:translate-x-1 transition-all">Imagin Gin</Link>
              <Link to="/brands/wild-africa" className="block text-sm text-gray-600 hover:text-[#8B0000] hover:translate-x-1 transition-all">Wild Africa</Link>
              <Link to="/brands/ponchos-tequila" className="block text-sm text-gray-600 hover:text-[#8B0000] hover:translate-x-1 transition-all">Ponchos Tequila</Link>
              <Link to="/brands/sally-williams" className="block text-sm text-gray-600 hover:text-[#8B0000] hover:translate-x-1 transition-all">Sally Williams</Link>
              <Link to="/brands/carvo-vodka-infusions" className="block text-sm text-gray-600 hover:text-[#8B0000] hover:translate-x-1 transition-all">Carvo</Link>
            </div>
          </div>

          {/* More Spirits & Non-Alc */}
          <div className="col-span-1">
             <Typography variant="h4" className="text-[#2C1810] mb-4 border-b border-gray-200 pb-2 font-bold opacity-0">
               More Spirits
            </Typography>
            <div className="space-y-2 mb-8">
               <Link to="/brands/sour-monkey" className="block text-sm text-gray-600 hover:text-[#8B0000] hover:translate-x-1 transition-all">Sour Monkey</Link>
               <Link to="/brands/bug" className="block text-sm text-gray-600 hover:text-[#8B0000] hover:translate-x-1 transition-all">Bug</Link>
               <Link to="/brands/paddys-whiskey" className="block text-sm text-gray-600 hover:text-[#8B0000] hover:translate-x-1 transition-all">Paddy's Whiskey</Link>
               <Link to="/brands/red-heart" className="block text-sm text-gray-600 hover:text-[#8B0000] hover:translate-x-1 transition-all">Red Heart</Link>
               <Link to="/brands/bacardi" className="block text-sm text-gray-600 hover:text-[#8B0000] hover:translate-x-1 transition-all">Bacardi</Link>
            </div>

            <Typography variant="h4" className="text-[#2C1810] mb-4 border-b border-gray-200 pb-2 font-bold">
               Non-alcoholic
            </Typography>
            <div className="space-y-2 mb-6">
               <Link to="/brands/fruit-lagoon" className="block text-sm text-gray-600 hover:text-[#8B0000] hover:translate-x-1 transition-all">Fruit Lagoon</Link>
            </div>

            <Link to="/brands" className="inline-flex items-center text-[#DAA520] font-bold text-sm uppercase tracking-wider hover:underline mt-2">
               View All Brands <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
