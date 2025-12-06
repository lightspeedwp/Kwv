import React, { useState } from 'react';
import { Menu, Search, User, X, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from '../common/Container';
import { COLORS } from '../../constants/theme';
import { Typography } from '../common/Typography';
import { Button } from '../common/Button';
import { KWVShopLogo } from '../common/Logo';
import { AnimatePresence, motion } from 'motion/react';
import { MiniCart } from '../shop/MiniCart';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '../ui/navigation-menu';

export const ShopHeader: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 transition-all duration-300 bg-[#2C1810] text-white shadow-md">
      {/* Top Bar - Optional based on design, but focusing on main request items */}
      
      <Container variant="site" className="py-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} color="white" />
          </button>

          {/* Logo */}
          <Link to="/shop" className="flex-shrink-0">
             <KWVShopLogo className="h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/account" className="text-sm uppercase tracking-wider hover:text-[#DAA520] transition-colors font-medium">
              Login Here
            </Link>
            <Link to="/shop/promotions" className="text-sm uppercase tracking-wider hover:text-[#DAA520] transition-colors font-medium text-[#DAA520]">
              Promotions
            </Link>

            {/* Brands Dropdown */}
            <div className="relative group">
               <Link to="/shop/brands" className="flex items-center gap-1 text-sm uppercase tracking-wider hover:text-[#DAA520] transition-colors font-medium py-4">
                 Brands <ChevronDown size={14} />
               </Link>
               <div className="absolute top-full left-0 w-[800px] bg-[#3d2319] shadow-xl p-6 hidden group-hover:grid grid-cols-4 gap-6 z-50 rounded-b-lg border-t-2 border-[#DAA520]">
                  <div className="col-span-1">
                     <Typography variant="h4" className="text-[#DAA520] mb-4 border-b border-[#5e382b] pb-2">Premium</Typography>
                     <Link to="/brands/mentors" className="block py-2 text-gray-300 hover:text-white">The Mentors</Link>
                     <Link to="/brands/cathedral-cellar" className="block py-2 text-gray-300 hover:text-white">Cathedral Cellar</Link>
                     <Link to="/brands/kwv-brandy" className="block py-2 text-gray-300 hover:text-white">KWV Brandy</Link>
                  </div>
                  <div className="col-span-1">
                     <Typography variant="h4" className="text-[#DAA520] mb-4 border-b border-[#5e382b] pb-2">Heritage</Typography>
                     <Link to="/brands/roodeberg" className="block py-2 text-gray-300 hover:text-white">Roodeberg</Link>
                     <Link to="/brands/laborie" className="block py-2 text-gray-300 hover:text-white">Laborie</Link>
                     <Link to="/brands/kwv-classic" className="block py-2 text-gray-300 hover:text-white">KWV Classic</Link>
                  </div>
                  <div className="col-span-1">
                     <Typography variant="h4" className="text-[#DAA520] mb-4 border-b border-[#5e382b] pb-2">Spirits</Typography>
                     <Link to="/brands/cruxland" className="block py-2 text-gray-300 hover:text-white">Cruxland Gin</Link>
                     <Link to="/brands/imoya" className="block py-2 text-gray-300 hover:text-white">Imoya</Link>
                     <Link to="/brands/wild-africa" className="block py-2 text-gray-300 hover:text-white">Wild Africa Cream</Link>
                  </div>
                  <div className="col-span-1 bg-[#2C1810] p-4 rounded-lg">
                      <div className="aspect-video w-full bg-gray-800 mb-2 rounded overflow-hidden">
                          <img src="https://images.unsplash.com/photo-1559563362-c667ba5f5480?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300" alt="Brand Highlight" className="w-full h-full object-cover" />
                      </div>
                      <Typography variant="caption" className="text-[#DAA520]">Featured</Typography>
                      <Typography variant="h4" className="text-white text-sm">The Mentors</Typography>
                  </div>
               </div>
            </div>

            {/* Spirits Dropdown */}
            <div className="relative group">
               <button className="flex items-center gap-1 text-sm uppercase tracking-wider hover:text-[#DAA520] transition-colors font-medium py-4">
                 Spirits <ChevronDown size={14} />
               </button>
               <div className="absolute top-full left-0 w-56 bg-[#3d2319] shadow-xl py-2 hidden group-hover:block z-50 rounded-b-lg border-t-2 border-[#DAA520]">
                  <Link to="/shop/spirits/brandy" className="block px-4 py-3 hover:bg-[#4a2b20] text-sm border-b border-[#4a2b20] last:border-0">Brandy & Cognac</Link>
                  <Link to="/shop/spirits/gin" className="block px-4 py-3 hover:bg-[#4a2b20] text-sm border-b border-[#4a2b20] last:border-0">Gin</Link>
                  <Link to="/shop/spirits/vodka" className="block px-4 py-3 hover:bg-[#4a2b20] text-sm border-b border-[#4a2b20] last:border-0">Vodka</Link>
                  <Link to="/shop/spirits/liqueurs" className="block px-4 py-3 hover:bg-[#4a2b20] text-sm border-b border-[#4a2b20] last:border-0">Liqueurs</Link>
                  <Link to="/shop/spirits/rum" className="block px-4 py-3 hover:bg-[#4a2b20] text-sm border-b border-[#4a2b20] last:border-0">Rum</Link>
               </div>
            </div>

            {/* Wine Dropdown */}
            <div className="relative group">
               <button className="flex items-center gap-1 text-sm uppercase tracking-wider hover:text-[#DAA520] transition-colors font-medium py-4">
                 Wine <ChevronDown size={14} />
               </button>
               <div className="absolute top-full left-0 w-56 bg-[#3d2319] shadow-xl py-2 hidden group-hover:block z-50 rounded-b-lg border-t-2 border-[#DAA520]">
                  <Link to="/shop/wine/red" className="block px-4 py-3 hover:bg-[#4a2b20] text-sm border-b border-[#4a2b20] last:border-0">Red Wine</Link>
                  <Link to="/shop/wine/white" className="block px-4 py-3 hover:bg-[#4a2b20] text-sm border-b border-[#4a2b20] last:border-0">White Wine</Link>
                  <Link to="/shop/wine/rose" className="block px-4 py-3 hover:bg-[#4a2b20] text-sm border-b border-[#4a2b20] last:border-0">Rosé</Link>
                  <Link to="/shop/wine/sparkling" className="block px-4 py-3 hover:bg-[#4a2b20] text-sm border-b border-[#4a2b20] last:border-0">Sparkling & MCC</Link>
                  <Link to="/shop/wine/fortified" className="block px-4 py-3 hover:bg-[#4a2b20] text-sm border-b border-[#4a2b20] last:border-0">Fortified</Link>
               </div>
            </div>

            <Link to="/shop/mixers" className="text-sm uppercase tracking-wider hover:text-[#DAA520] transition-colors font-medium">
              Mixers
            </Link>
             <Link to="/experiences" className="text-sm uppercase tracking-wider hover:text-[#DAA520] transition-colors font-medium">
              Visit Us
            </Link>
             <Link to="/shop/gifting" className="text-sm uppercase tracking-wider hover:text-[#DAA520] transition-colors font-medium">
              Gifting
            </Link>
             <Link to="/faq" className="text-sm uppercase tracking-wider hover:text-[#DAA520] transition-colors font-medium">
              FAQ
            </Link>
             <Link to="/pricelist" className="text-sm uppercase tracking-wider hover:text-[#DAA520] transition-colors font-medium">
              Pricelist
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button aria-label="Search" className="p-2 hover:opacity-70">
              <Search size={20} color="white" />
            </button>
            
            <MiniCart />
            
            <Link to="/wine-club">
              <Button size="sm" className="hidden sm:flex bg-[#DAA520] text-[#2C1810] hover:bg-white border-none">
                Join Wine Club
              </Button>
            </Link>
          </div>
        </div>
      </Container>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            className="fixed inset-0 z-[60] flex flex-col h-screen w-full bg-[#2C1810] text-white"
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
               <Typography variant="h3" color={COLORS.gold}>KWV SHOP</Typography>
               <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                 <X size={24} color="white" />
               </button>
            </div>
            <div className="flex flex-col p-8 gap-6 overflow-y-auto">
              <Link to="/account" className="text-xl font-serif border-b pb-2 border-gray-700" onClick={() => setIsMobileMenuOpen(false)}>Login Here</Link>
              <Link to="/shop/promotions" className="text-xl font-serif border-b pb-2 border-gray-700 text-[#DAA520]" onClick={() => setIsMobileMenuOpen(false)}>Promotions</Link>
              
              <div className="space-y-2">
                 <div className="text-xl font-serif text-[#DAA520]">Brands</div>
                 <div className="pl-4 flex flex-col gap-2 opacity-80">
                    <Link to="/brands/roodeberg" onClick={() => setIsMobileMenuOpen(false)}>Roodeberg</Link>
                    <Link to="/brands/mentors" onClick={() => setIsMobileMenuOpen(false)}>The Mentors</Link>
                    <Link to="/brands" className="text-[#DAA520] text-sm mt-2" onClick={() => setIsMobileMenuOpen(false)}>View All Brands</Link>
                 </div>
              </div>

               <div className="space-y-2">
                 <div className="text-xl font-serif text-[#DAA520]">Spirits</div>
                 <div className="pl-4 flex flex-col gap-2 opacity-80">
                    <Link to="/shop/spirits/brandy" onClick={() => setIsMobileMenuOpen(false)}>Brandy</Link>
                    <Link to="/shop/spirits/gin" onClick={() => setIsMobileMenuOpen(false)}>Gin</Link>
                    <Link to="/shop/spirits/vodka" onClick={() => setIsMobileMenuOpen(false)}>Vodka</Link>
                 </div>
              </div>

               <div className="space-y-2">
                 <div className="text-xl font-serif text-[#DAA520]">Wine</div>
                 <div className="pl-4 flex flex-col gap-2 opacity-80">
                    <Link to="/shop/wine/red" onClick={() => setIsMobileMenuOpen(false)}>Red</Link>
                    <Link to="/shop/wine/white" onClick={() => setIsMobileMenuOpen(false)}>White</Link>
                    <Link to="/shop/wine/sparkling" onClick={() => setIsMobileMenuOpen(false)}>Sparkling</Link>
                 </div>
              </div>

              <Link to="/shop/mixers" className="text-xl font-serif border-b pb-2 border-gray-700" onClick={() => setIsMobileMenuOpen(false)}>Mixers</Link>
              <Link to="/shop/gifting" className="text-xl font-serif border-b pb-2 border-gray-700" onClick={() => setIsMobileMenuOpen(false)}>Gifting</Link>
              <Link to="/experiences" className="text-xl font-serif border-b pb-2 border-gray-700" onClick={() => setIsMobileMenuOpen(false)}>Visit Us</Link>
              <Link to="/faq" className="text-xl font-serif border-b pb-2 border-gray-700" onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link>
              <Link to="/pricelist" className="text-xl font-serif border-b pb-2 border-gray-700" onClick={() => setIsMobileMenuOpen(false)}>Pricelist</Link>
              <Link to="/wine-club" className="mt-4" onClick={() => setIsMobileMenuOpen(false)}>
                 <Button className="w-full bg-[#DAA520] text-[#2C1810]">Join Wine Club</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
