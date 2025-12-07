import React, { useState } from 'react';
import { Menu, Search, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from '../common/Container';
import { COLORS } from '../../constants/theme';
import { Typography } from '../common/Typography';
import { Button } from '../common/Button';
import { AnimatePresence, motion } from 'motion/react';
import { KWVLogo } from '../common/Logo';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from "../ui/sheet";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../ui/accordion";
import { BrandsMegaMenu } from './BrandsMegaMenu';

/**
 * CorporateHeader Component
 * 
 * The main navigation header for the corporate/informational side of the website.
 * Features:
 * - Sticky positioning.
 * - Mega Menus for "Brands", "Shop", "Visit Us", "Company".
 * - Search overlay.
 * - Mobile Drawer menu.
 */
export const CorporateHeader: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
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
                placeholder="Search content..."
                className="flex-1 bg-transparent outline-none text-white placeholder-gray-400 h-10 border-none focus:ring-0 text-base"
                autoFocus
              />
              <button 
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="p-2 text-gray-400 hover:text-white"
                aria-label="Close search"
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
          <Link to="/" className="flex-shrink-0 mr-auto">
             <KWVLogo className="h-14 w-auto" color="white" />
          </Link>

            {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 mx-8">
            <div className="group">
               <Link to="/brands" className="flex items-center gap-1 text-sm uppercase tracking-wider hover:text-[#DAA520] transition-colors font-medium text-white py-4">
                 Brands <ChevronDown size={14} />
               </Link>
               <BrandsMegaMenu />
            </div>

            <Link to="/awards" className="text-sm uppercase tracking-wider hover:text-[#DAA520] transition-colors font-medium text-white">
              Awards
            </Link>

            <Link to="/careers" className="text-sm uppercase tracking-wider hover:text-[#DAA520] transition-colors font-medium text-white">
              Careers
            </Link>

            <Link to="/news" className="text-sm uppercase tracking-wider hover:text-[#DAA520] transition-colors font-medium text-white">
              News
            </Link>

            {/* Shop Mega Menu */}
            <div className="relative group">
               <Link to="/shop" className="flex items-center gap-1 text-sm uppercase tracking-wider hover:text-[#DAA520] transition-colors font-medium text-white py-4">
                 Shop <ChevronDown size={14} />
               </Link>
               <div className="absolute top-full left-0 w-[600px] bg-white shadow-xl p-6 hidden group-hover:grid grid-cols-3 gap-6 z-50 rounded-b-sm border-t-4 border-[#DAA520]">
                  <div className="col-span-1">
                     <Typography variant="h4" className="text-[#2C1810] mb-4 border-b border-gray-200 pb-2 font-bold">Wines</Typography>
                     <Link to="/shop/wine/red" className="block py-2 text-gray-600 hover:text-[#8B0000]">Red Wine</Link>
                     <Link to="/shop/wine/white" className="block py-2 text-gray-600 hover:text-[#8B0000]">White Wine</Link>
                     <Link to="/shop/wine/sparkling" className="block py-2 text-gray-600 hover:text-[#8B0000]">Sparkling</Link>
                  </div>
                  <div className="col-span-1">
                     <Typography variant="h4" className="text-[#2C1810] mb-4 border-b border-gray-200 pb-2 font-bold">Spirits</Typography>
                     <Link to="/shop/spirits/brandy" className="block py-2 text-gray-600 hover:text-[#8B0000]">Brandy</Link>
                     <Link to="/shop/spirits/gin" className="block py-2 text-gray-600 hover:text-[#8B0000]">Gin</Link>
                     <Link to="/shop/spirits/vodka" className="block py-2 text-gray-600 hover:text-[#8B0000]">Vodka</Link>
                  </div>
                  <div className="col-span-1">
                     <Typography variant="h4" className="text-[#2C1810] mb-4 border-b border-gray-200 pb-2 font-bold">Brands</Typography>
                     <Link to="/shop/brands/roodeberg" className="block py-2 text-gray-600 hover:text-[#8B0000]">Roodeberg</Link>
                     <Link to="/shop/brands/the-mentors" className="block py-2 text-gray-600 hover:text-[#8B0000]">The Mentors</Link>
                     <Link to="/shop" className="block py-2 text-[#DAA520] font-bold">Visit Shop</Link>
                  </div>
               </div>
            </div>

            {/* Visit Us Dropdown */}
            <div className="relative group">
               <Link to="/experiences" className="flex items-center gap-1 text-sm uppercase tracking-wider hover:text-[#DAA520] transition-colors font-medium text-white py-4">
                 Visit Us <ChevronDown size={14} />
               </Link>
               <div className="absolute top-full left-0 w-64 bg-white shadow-xl py-2 hidden group-hover:block z-50 rounded-b-sm border-t-4 border-[#DAA520]">
                  <Link to="/experiences/emporium" className="block px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-100 last:border-0">Emporium</Link>
                  <Link to="/experiences/cathedral-cellar" className="block px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-100 last:border-0">Cathedral Cellar</Link>
                  <Link to="/experiences/house-of-fire" className="block px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-100 last:border-0">House of Fire</Link>
                  <Link to="/events" className="block px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-100 last:border-0">Events</Link>
                  <Link to="/experiences/conference-facilities" className="block px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-100 last:border-0">Conference Facilities</Link>
                  <Link to="/experiences/cathedral-cellar-kitchen" className="block px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-100 last:border-0">Kitchen Venue</Link>
               </div>
            </div>

            {/* Company Dropdown */}
            <div className="relative group">
               <Link to="/" className="flex items-center gap-1 text-sm uppercase tracking-wider hover:text-[#DAA520] transition-colors font-medium py-4 text-white">
                 Company <ChevronDown size={14} />
               </Link>
               <div className="absolute top-full left-0 w-64 bg-white shadow-xl py-2 hidden group-hover:block z-50 rounded-b-sm border-t-4 border-[#DAA520]">
                  <Link to="/about" className="block px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-100 last:border-0">About Us</Link>
                  <Link to="/history" className="block px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-100 last:border-0">History</Link>
                  <Link to="/brands" className="block px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-100 last:border-0">Our Brands</Link>
                  <Link to="/executive-team" className="block px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-100 last:border-0">Executive Team</Link>
                  <Link to="/sustainability" className="block px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-100 last:border-0">Sustainability</Link>
                  <Link to="/global-distribution" className="block px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-100 last:border-0">Global Distribution</Link>
               </div>
            </div>

            <Link to="/faq" className="text-sm uppercase tracking-wider hover:text-[#DAA520] transition-colors font-medium text-white">
              FAQ
            </Link>

            <Link to="/contact" className="text-sm uppercase tracking-wider hover:text-[#DAA520] transition-colors font-medium text-white">
              Contact
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-4 relative">
            
            {/* 2. Search Icon (Right aligned) */}
            <div className="relative">
               <AnimatePresence>
                  {isSearchOpen && (
                      <motion.form 
                          initial={{ width: 0, opacity: 0 }}
                          animate={{ width: 200, opacity: 1 }}
                          exit={{ width: 0, opacity: 0 }}
                          onSubmit={handleSearch}
                          className="absolute right-full mr-2 overflow-hidden hidden lg:block"
                      >
                          <input 
                              type="text" 
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              placeholder="Search content..."
                              className="w-full bg-[#3d2319] text-white placeholder-white/60 px-3 py-2 rounded-sm outline-none border border-[#5e382b] focus:border-[#DAA520]"
                              autoFocus
                          />
                      </motion.form>
                  )}
              </AnimatePresence>
              
              <button 
                  aria-label="Search" 
                  className="p-2 hover:opacity-70"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search size={20} color="white" />
              </button>
            </div>

            {/* Desktop Only: Join Wine Club Button */}
            <div className="hidden lg:block">
               <Link to="/wine-club">
                 <Button size="sm" className="bg-[#DAA520] text-[#2C1810] hover:bg-white border-none">
                   Join Wine Club
                 </Button>
               </Link>
            </div>

            {/* 3. Mobile Menu Icon (Right aligned) */}
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
                 <SheetContent side="right" className="w-full sm:w-[400px] p-0 bg-[#2C1810] text-white overflow-y-auto [&>button]:hidden border-l border-[#3d2319]">
                    <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                    <SheetDescription className="sr-only">Navigation menu</SheetDescription>
                    <div className="p-6 flex flex-col min-h-full">
                       <div className="mb-8 flex items-center justify-between">
                          <KWVLogo className="h-10 w-auto text-white" color="white" />
                          <SheetClose asChild>
                            <button className="p-2 hover:bg-white/10 rounded-full transition-colors" aria-label="Close menu">
                              <X size={24} color="white" />
                            </button>
                          </SheetClose>
                       </div>
  
                       <div className="flex-1 space-y-6">
                          <nav className="flex flex-col space-y-4">
                             <Link to="/shop" onClick={closeMenu} className="text-xl font-serif font-medium hover:text-[#DAA520] flex items-center justify-between group text-white">
                                <span>Online Shop</span>
                                <ChevronRight size={16} className="text-gray-400 group-hover:text-[#DAA520]" />
                             </Link>
                             
                             <Link to="/account" onClick={closeMenu} className="text-xl font-serif font-medium hover:text-[#DAA520] flex items-center justify-between group text-white">
                                <span>Account Login</span>
                                <ChevronRight size={16} className="text-gray-400 group-hover:text-[#DAA520]" />
                             </Link>
  
                             <Accordion type="single" collapsible className="w-full border-none">
                                <AccordionItem value="company" className="border-b border-white/10">
                                   <AccordionTrigger className="text-xl font-serif font-medium hover:text-[#DAA520] py-4 hover:no-underline text-white">Company</AccordionTrigger>
                                   <AccordionContent className="pl-4 space-y-3 text-base text-gray-300">
                                      <Link to="/" onClick={closeMenu} className="block text-[#DAA520] font-bold">Company Home</Link>
                                      <Link to="/about" onClick={closeMenu} className="block hover:text-white">About Us</Link>
                                      <Link to="/history" onClick={closeMenu} className="block hover:text-white">History</Link>
                                      <Link to="/brands" onClick={closeMenu} className="block hover:text-white">Our Brands</Link>
                                      <Link to="/executive-team" onClick={closeMenu} className="block hover:text-white">Executive Team</Link>
                                      <Link to="/sustainability" onClick={closeMenu} className="block hover:text-white">Sustainability</Link>
                                      <Link to="/global-distribution" onClick={closeMenu} className="block hover:text-white">Global Distribution</Link>
                                   </AccordionContent>
                                </AccordionItem>

                                <Link to="/brands" onClick={closeMenu} className="text-xl font-serif font-medium hover:text-[#DAA520] flex items-center justify-between group text-white py-4 border-b border-white/10">
                                   <span>Brands</span>
                                   <ChevronRight size={16} className="text-gray-400 group-hover:text-[#DAA520]" />
                                </Link>

                                <Link to="/awards" onClick={closeMenu} className="text-xl font-serif font-medium hover:text-[#DAA520] flex items-center justify-between group text-white py-4 border-b border-white/10">
                                   <span>Awards</span>
                                   <ChevronRight size={16} className="text-gray-400 group-hover:text-[#DAA520]" />
                                </Link>

                                <Link to="/careers" onClick={closeMenu} className="text-xl font-serif font-medium hover:text-[#DAA520] flex items-center justify-between group text-white py-4 border-b border-white/10">
                                   <span>Careers</span>
                                   <ChevronRight size={16} className="text-gray-400 group-hover:text-[#DAA520]" />
                                </Link>
  
                                <AccordionItem value="shop" className="border-b border-white/10">
                                   <AccordionTrigger className="text-xl font-serif font-medium hover:text-[#DAA520] py-4 hover:no-underline text-white">Shop</AccordionTrigger>
                                   <AccordionContent className="pl-4 space-y-3 text-base text-gray-300">
                                      <Link to="/shop" onClick={closeMenu} className="block hover:text-white">Online Shop</Link>
                                      <Link to="/shop/brands" onClick={closeMenu} className="block hover:text-white">Brands</Link>
                                   </AccordionContent>
                                </AccordionItem>
  
                                <AccordionItem value="experiences" className="border-b border-white/10">
                                   <AccordionTrigger className="text-xl font-serif font-medium hover:text-[#DAA520] py-4 hover:no-underline text-white">Visit Us</AccordionTrigger>
                                   <AccordionContent className="pl-4 space-y-3 text-base text-gray-300">
                                      <Link to="/experiences" onClick={closeMenu} className="block text-[#DAA520] font-bold">Experiences Home</Link>
                                      <Link to="/experiences/emporium" onClick={closeMenu} className="block hover:text-white">Emporium</Link>
                                      <Link to="/experiences/cathedral-cellar" onClick={closeMenu} className="block hover:text-white">Cathedral Cellar</Link>
                                      <Link to="/experiences/house-of-fire" onClick={closeMenu} className="block hover:text-white">House of Fire</Link>
                                      <Link to="/events" onClick={closeMenu} className="block hover:text-white">Events</Link>
                                      <Link to="/experiences/conference-facilities" onClick={closeMenu} className="block hover:text-white">Conference Facilities</Link>
                                      <Link to="/experiences/cathedral-cellar-kitchen" onClick={closeMenu} className="block hover:text-white">Kitchen Venue</Link>
                                   </AccordionContent>
                                </AccordionItem>
                             </Accordion>
  
                             <Link to="/news" onClick={closeMenu} className="text-xl font-serif font-medium hover:text-[#DAA520] flex items-center justify-between group text-white">
                                <span>News</span>
                                <ChevronRight size={16} className="text-gray-400 group-hover:text-[#DAA520]" />
                             </Link>
  
                             <Link to="/faq" onClick={closeMenu} className="text-xl font-serif font-medium hover:text-[#DAA520] flex items-center justify-between group text-white">
                                <span>FAQ</span>
                                <ChevronRight size={16} className="text-gray-400 group-hover:text-[#DAA520]" />
                             </Link>
                             
                             <Link to="/contact" onClick={closeMenu} className="text-xl font-serif font-medium hover:text-[#DAA520] flex items-center justify-between group text-white">
                                <span>Contact</span>
                                <ChevronRight size={16} className="text-gray-400 group-hover:text-[#DAA520]" />
                             </Link>
                          </nav>
                       </div>
  
                       <div className="mt-8 pt-8 border-t border-white/10">
                          <Link to="/wine-club" onClick={closeMenu} className="block">
                             <Button className="w-full bg-[#DAA520] text-[#2C1810] hover:bg-white h-12 text-lg border-none">Join Wine Club</Button>
                          </Link>
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