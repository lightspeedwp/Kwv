import React, { useState } from 'react';
import { Menu, Search, User, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from '../common/Container';
import { COLORS } from '../../constants/theme';
import { Typography } from '../common/Typography';
import { Button } from '../common/Button';
import { KWVShopLogo } from '../common/Logo';
import { AnimatePresence, motion } from 'motion/react';
import { MiniCart } from '../shop/MiniCart';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "../ui/sheet";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../ui/accordion";

export const ShopHeader: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 transition-all duration-300 bg-[#2C1810] text-white shadow-md relative">
      {/* Mobile Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute inset-0 bg-[#2C1810] z-50 flex items-center px-4 shadow-md lg:hidden"
          >
            <form onSubmit={handleSearch} className="flex-1 flex items-center gap-2">
              <Search size={20} className="text-gray-400" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="flex-1 bg-transparent outline-none text-white placeholder-gray-500 h-10 border-none focus:ring-0 text-base"
                autoFocus
              />
              <button 
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="p-2 text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <Container variant="site" className="py-4">
        <div className="flex items-center justify-between">
          
          {/* 1. Logo (Left aligned) */}
          <Link to="/shop" className="flex-shrink-0 mr-auto">
             <KWVShopLogo className="h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 mx-8">
            <Link to="/shop/promotions" className="text-sm uppercase tracking-wider hover:text-[#DAA520] transition-colors font-medium text-[#DAA520]">
              Promotions
            </Link>

            {/* Brands Dropdown */}
            <div className="relative group">
               <Link to="/shop/brands" className="flex items-center gap-1 text-sm uppercase tracking-wider hover:text-[#DAA520] transition-colors font-medium py-4">
                 Brands <ChevronDown size={14} />
               </Link>
               <div className="absolute top-full left-0 w-[800px] bg-white shadow-xl p-6 hidden group-hover:grid grid-cols-4 gap-6 z-50 rounded-b-sm border-t-4 border-[#DAA520]">
                  <div className="col-span-1">
                     <Typography variant="h4" className="text-[#2C1810] mb-4 border-b border-gray-200 pb-2 font-bold">Premium</Typography>
                     <Link to="/brands/mentors" className="block py-2 text-gray-600 hover:text-[#8B0000]">The Mentors</Link>
                     <Link to="/brands/cathedral-cellar" className="block py-2 text-gray-600 hover:text-[#8B0000]">Cathedral Cellar</Link>
                     <Link to="/brands/kwv-brandy" className="block py-2 text-gray-600 hover:text-[#8B0000]">KWV Brandy</Link>
                  </div>
                  <div className="col-span-1">
                     <Typography variant="h4" className="text-[#2C1810] mb-4 border-b border-gray-200 pb-2 font-bold">Heritage</Typography>
                     <Link to="/brands/roodeberg" className="block py-2 text-gray-600 hover:text-[#8B0000]">Roodeberg</Link>
                     <Link to="/brands/laborie" className="block py-2 text-gray-600 hover:text-[#8B0000]">Laborie</Link>
                     <Link to="/brands/kwv-classic" className="block py-2 text-gray-600 hover:text-[#8B0000]">KWV Classic</Link>
                  </div>
                  <div className="col-span-1">
                     <Typography variant="h4" className="text-[#2C1810] mb-4 border-b border-gray-200 pb-2 font-bold">Spirits</Typography>
                     <Link to="/brands/cruxland" className="block py-2 text-gray-600 hover:text-[#8B0000]">Cruxland Gin</Link>
                     <Link to="/brands/imoya" className="block py-2 text-gray-600 hover:text-[#8B0000]">Imoya</Link>
                     <Link to="/brands/wild-africa" className="block py-2 text-gray-600 hover:text-[#8B0000]">Wild Africa Cream</Link>
                  </div>
                  <div className="col-span-1 bg-[#f9f9f9] p-4 rounded-lg">
                      <div className="aspect-video w-full bg-gray-200 mb-2 rounded overflow-hidden">
                          <img src="https://images.unsplash.com/photo-1559563362-c667ba5f5480?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300" alt="Brand Highlight" className="w-full h-full object-cover" />
                      </div>
                      <Typography variant="caption" className="text-[#DAA520]">Featured</Typography>
                      <Typography variant="h4" className="text-[#2C1810] text-sm">The Mentors</Typography>
                  </div>
               </div>
            </div>

            {/* Spirits Dropdown */}
            <div className="relative group">
               <button className="flex items-center gap-1 text-sm uppercase tracking-wider hover:text-[#DAA520] transition-colors font-medium py-4">
                 Spirits <ChevronDown size={14} />
               </button>
               <div className="absolute top-full left-0 w-56 bg-white shadow-xl py-2 hidden group-hover:block z-50 rounded-b-sm border-t-4 border-[#DAA520]">
                  <Link to="/shop/spirits/brandy" className="block px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-100 last:border-0">Brandy & Cognac</Link>
                  <Link to="/shop/spirits/gin" className="block px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-100 last:border-0">Gin</Link>
                  <Link to="/shop/spirits/vodka" className="block px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-100 last:border-0">Vodka</Link>
                  <Link to="/shop/spirits/liqueurs" className="block px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-100 last:border-0">Liqueurs</Link>
                  <Link to="/shop/spirits/rum" className="block px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-100 last:border-0">Rum</Link>
               </div>
            </div>

            {/* Wine Dropdown */}
            <div className="relative group">
               <button className="flex items-center gap-1 text-sm uppercase tracking-wider hover:text-[#DAA520] transition-colors font-medium py-4">
                 Wine <ChevronDown size={14} />
               </button>
               <div className="absolute top-full left-0 w-56 bg-white shadow-xl py-2 hidden group-hover:block z-50 rounded-b-sm border-t-4 border-[#DAA520]">
                  <Link to="/shop/wine/red" className="block px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-100 last:border-0">Red Wine</Link>
                  <Link to="/shop/wine/white" className="block px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-100 last:border-0">White Wine</Link>
                  <Link to="/shop/wine/rose" className="block px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-100 last:border-0">Rosé</Link>
                  <Link to="/shop/wine/sparkling" className="block px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-100 last:border-0">Sparkling & MCC</Link>
                  <Link to="/shop/wine/fortified" className="block px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-100 last:border-0">Fortified</Link>
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
             <Link to="/shop/faq" className="text-sm uppercase tracking-wider hover:text-[#DAA520] transition-colors font-medium">
              FAQ
            </Link>
             <Link to="/pricelist" className="text-sm uppercase tracking-wider hover:text-[#DAA520] transition-colors font-medium">
              Pricelist
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1 sm:gap-4 relative">
             
            {/* 2. Product Search (Right aligned) */}
            <div className="relative">
                <AnimatePresence>
                    {isSearchOpen && (
                        <motion.form 
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: 200, opacity: 1 }}
                            exit={{ width: 0, opacity: 0 }}
                            onSubmit={handleSearch}
                            className="absolute right-full mr-2 overflow-hidden top-1/2 -translate-y-1/2 z-20 hidden lg:block"
                        >
                            <input 
                                type="text" 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search..."
                                className="w-full bg-[#3d2319] text-white px-3 py-2 rounded-sm outline-none border border-[#5e382b] focus:border-[#DAA520]"
                                autoFocus
                            />
                        </motion.form>
                    )}
                </AnimatePresence>
                <button 
                    aria-label="Search" 
                    className="p-1.5 sm:p-2 hover:opacity-70"
                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                >
                  {isSearchOpen ? <X size={20} color="white" /> : <Search size={20} color="white" />}
                </button>
             </div>

            {/* 3. My Account Icon (Right aligned) */}
            <Link to="/account" className="p-1.5 sm:p-2 hover:opacity-70">
                <User size={20} color="white" />
            </Link>
            
            {/* 4. Cart Icon (Right aligned) */}
            <div className="scale-90 sm:scale-100">
               <MiniCart />
            </div>
            
            {/* Desktop Only: Join Wine Club Button */}
            <div className="hidden lg:block">
              <Link to="/wine-club">
                <Button size="sm" className="bg-[#DAA520] text-[#2C1810] hover:bg-white border-none">
                  Join Wine Club
                </Button>
              </Link>
            </div>

            {/* 5. Mobile Menu Icon (Right aligned) */}
            <div className="lg:hidden">
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <button 
                    className="p-2"
                    aria-label="Open menu"
                  >
                    <Menu size={24} color="white" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:w-[400px] p-0 bg-white text-[#2C1810] overflow-y-auto [&>button]:hidden">
                  <div className="p-6 flex flex-col min-h-full">
                     <div className="mb-8 flex items-center justify-between">
                        <KWVShopLogo className="h-10 w-auto text-[#2C1810]" />
                        <SheetClose asChild>
                          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <X size={24} color="#2C1810" />
                          </button>
                        </SheetClose>
                     </div>

                     <div className="flex-1 space-y-6">
                        <nav className="flex flex-col space-y-4">
                            <Link to="/account" onClick={closeMenu} className="text-xl font-serif font-medium hover:text-[#8B0000] flex items-center justify-between group">
                               <span>Login / Account</span>
                               <ChevronRight size={16} className="text-gray-400 group-hover:text-[#8B0000]" />
                            </Link>
                            
                            <Link to="/shop/promotions" onClick={closeMenu} className="text-xl font-serif font-medium hover:text-[#8B0000] flex items-center justify-between group">
                               <span>Promotions</span>
                               <ChevronRight size={16} className="text-gray-400 group-hover:text-[#8B0000]" />
                            </Link>

                            <Accordion type="single" collapsible className="w-full border-none">
                               <AccordionItem value="brands" className="border-none">
                                  <AccordionTrigger className="text-xl font-serif font-medium hover:text-[#8B0000] py-2 hover:no-underline">Brands</AccordionTrigger>
                                  <AccordionContent className="pl-4 space-y-3 text-base text-gray-600">
                                     <Link to="/brands/roodeberg" onClick={closeMenu} className="block">Roodeberg</Link>
                                     <Link to="/brands/mentors" onClick={closeMenu} className="block">The Mentors</Link>
                                     <Link to="/brands/kwv-brandy" onClick={closeMenu} className="block">KWV Brandy</Link>
                                     <Link to="/brands" onClick={closeMenu} className="block text-[#8B0000] font-medium mt-2">View All Brands</Link>
                                  </AccordionContent>
                               </AccordionItem>
                               
                               <AccordionItem value="spirits" className="border-none">
                                  <AccordionTrigger className="text-xl font-serif font-medium hover:text-[#8B0000] py-2 hover:no-underline">Spirits</AccordionTrigger>
                                  <AccordionContent className="pl-4 space-y-3 text-base text-gray-600">
                                     <Link to="/shop/spirits/brandy" onClick={closeMenu} className="block">Brandy & Cognac</Link>
                                     <Link to="/shop/spirits/gin" onClick={closeMenu} className="block">Gin</Link>
                                     <Link to="/shop/spirits/vodka" onClick={closeMenu} className="block">Vodka</Link>
                                  </AccordionContent>
                               </AccordionItem>

                               <AccordionItem value="wine" className="border-none">
                                  <AccordionTrigger className="text-xl font-serif font-medium hover:text-[#8B0000] py-2 hover:no-underline">Wine</AccordionTrigger>
                                  <AccordionContent className="pl-4 space-y-3 text-base text-gray-600">
                                     <Link to="/shop/wine/red" onClick={closeMenu} className="block">Red Wine</Link>
                                     <Link to="/shop/wine/white" onClick={closeMenu} className="block">White Wine</Link>
                                     <Link to="/shop/wine/sparkling" onClick={closeMenu} className="block">Sparkling</Link>
                                  </AccordionContent>
                               </AccordionItem>
                            </Accordion>

                            <Link to="/shop/gifting" onClick={closeMenu} className="text-xl font-serif font-medium hover:text-[#8B0000] flex items-center justify-between group">
                               <span>Gifting</span>
                               <ChevronRight size={16} className="text-gray-400 group-hover:text-[#8B0000]" />
                            </Link>
                            
                            <Link to="/experiences" onClick={closeMenu} className="text-xl font-serif font-medium hover:text-[#8B0000] flex items-center justify-between group">
                               <span>Visit Us</span>
                               <ChevronRight size={16} className="text-gray-400 group-hover:text-[#8B0000]" />
                            </Link>
                        </nav>
                     </div>

                     <div className="mt-8 pt-8 border-t border-gray-100">
                        <Link to="/wine-club" onClick={closeMenu} className="block">
                           <Button className="w-full bg-[#2C1810] text-white hover:bg-[#8B0000] h-12 text-lg">Join Wine Club</Button>
                        </Link>
                        <div className="mt-6 flex flex-col gap-3">
                          <Link to="/shop/faq" onClick={closeMenu} className="text-sm text-gray-500">FAQ</Link>
                          <Link to="/pricelist" onClick={closeMenu} className="text-sm text-gray-500">Pricelist</Link>
                          <Link to="/contact" onClick={closeMenu} className="text-sm text-gray-500">Contact Us</Link>
                        </div>
                     </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};