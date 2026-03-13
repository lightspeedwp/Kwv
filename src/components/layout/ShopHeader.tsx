import React, { useState } from 'react';
import { Menu, Search, User, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { Container } from '../common/Container';
import { COLORS } from '../../constants/theme';
import { Typography } from '../common/Typography';
import { Button } from '../common/Button';
import { KWVShopLogo } from '../common/Logo';
import { AnimatePresence, motion } from 'motion/react';
import { MiniCart } from '../shop/cart/MiniCart';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from "../ui/sheet";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../ui/accordion";

/**
 * ShopHeader Component
 * 
 * Specialized header for the E-commerce section.
 * Features:
 * - "Shop Online" Branding.
 * - Shop-specific Mega Menus (Brands, Spirits, Wine, Mixers).
 * - Cart Icon with MiniCart dropdown.
 * - My Account access.
 * - Product-focused search.
 */
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
          <Link to="/shop" className="flex-shrink-0 mr-auto">
             <KWVShopLogo className="h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 mx-8">
            {/* Brands Dropdown */}
            <div className="relative group">
               <Link to="/shop/brands" className="flex items-center gap-1 text-sm uppercase tracking-wider hover:text-[#DAA520] transition-colors font-medium py-4 text-white">
                 Brands <ChevronDown size={14} />
               </Link>
               <div className="absolute top-full left-0 w-[900px] bg-white shadow-xl p-8 hidden group-hover:grid grid-cols-4 gap-8 z-50 rounded-b-sm border-t-4 border-[#DAA520]">
                  <div className="col-span-1">
                     <Typography variant="h4" className="text-[#2C1810] mb-4 border-b border-gray-100 pb-2 font-bold text-xs uppercase tracking-widest">Premium Wines</Typography>
                     <div className="space-y-3">
                       <Link to="/shop/brands/the-mentors" className="block text-sm text-gray-600 hover:text-[#8B0000] hover:translate-x-1 transition-all">The Mentors</Link>
                       <Link to="/shop/brands/cathedral-cellar" className="block text-sm text-gray-600 hover:text-[#8B0000] hover:translate-x-1 transition-all">Cathedral Cellar</Link>
                       <Link to="/shop/brands/laborie" className="block text-sm text-gray-600 hover:text-[#8B0000] hover:translate-x-1 transition-all">Laborie</Link>
                     </div>
                  </div>
                  <div className="col-span-1">
                     <Typography variant="h4" className="text-[#2C1810] mb-4 border-b border-gray-100 pb-2 font-bold text-xs uppercase tracking-widest">Heritage & Lifestyle</Typography>
                     <div className="space-y-3">
                       <Link to="/shop/brands/roodeberg" className="block text-sm text-gray-600 hover:text-[#8B0000] hover:translate-x-1 transition-all">Roodeberg</Link>
                       <Link to="/shop/brands/kwv-classic-collection" className="block text-sm text-gray-600 hover:text-[#8B0000] hover:translate-x-1 transition-all">Classic Collection</Link>
                       <Link to="/shop/brands/annabelle" className="block text-sm text-gray-600 hover:text-[#8B0000] hover:translate-x-1 transition-all">Annabelle</Link>
                       <Link to="/shop/brands/pearly-bay" className="block text-sm text-gray-600 hover:text-[#8B0000] hover:translate-x-1 transition-all">Pearly Bay</Link>
                     </div>
                  </div>
                  <div className="col-span-1">
                     <Typography variant="h4" className="text-[#2C1810] mb-4 border-b border-gray-100 pb-2 font-bold text-xs uppercase tracking-widest">Spirits</Typography>
                     <div className="space-y-3">
                       <Link to="/shop/brands/kwv-brandy" className="block text-sm text-gray-600 hover:text-[#8B0000] hover:translate-x-1 transition-all">KWV Brandy</Link>
                       <Link to="/shop/brands/cruxland-gin" className="block text-sm text-gray-600 hover:text-[#8B0000] hover:translate-x-1 transition-all">Cruxland Gin</Link>
                       <Link to="/shop/brands/wild-africa-cream" className="block text-sm text-gray-600 hover:text-[#8B0000] hover:translate-x-1 transition-all">Wild Africa Cream</Link>
                       <Link to="/shop/brands/bacardi" className="block text-sm text-gray-600 hover:text-[#8B0000] hover:translate-x-1 transition-all">Bacardi</Link>
                     </div>
                  </div>
                  <div className="col-span-1 bg-[#f9f9f9] p-4 rounded-lg flex flex-col items-center text-center">
                      <div className="aspect-square w-32 bg-white rounded-full mb-4 overflow-hidden shadow-md flex items-center justify-center p-2">
                          <img src="https://images.unsplash.com/photo-1599309066463-b88307db3536?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300" alt="KWV Brandy" className="w-full h-full object-cover rounded-full" />
                      </div>
                      <Typography variant="caption" className="text-[#DAA520] uppercase tracking-widest font-bold mb-1">Spotlight</Typography>
                      <Typography variant="h4" className="text-[#2C1810] text-lg font-serif mb-2">KWV Brandy</Typography>
                      <Link to="/shop/brands/kwv-brandy" className="text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-[#8B0000] underline decoration-[#DAA520] decoration-2 underline-offset-4">Discover More</Link>
                  </div>
               </div>
            </div>

            {/* Spirits Dropdown */}
            <div className="relative group">
               <button className="flex items-center gap-1 text-sm uppercase tracking-wider hover:text-[#DAA520] transition-colors font-medium py-4 text-white">
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
               <button className="flex items-center gap-1 text-sm uppercase tracking-wider hover:text-[#DAA520] transition-colors font-medium py-4 text-white">
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

            {/* Mixers Dropdown */}
            <div className="relative group">
               <button className="flex items-center gap-1 text-sm uppercase tracking-wider hover:text-[#DAA520] transition-colors font-medium py-4 text-white">
                 Mixers <ChevronDown size={14} />
               </button>
               <div className="absolute top-full left-0 w-56 bg-white shadow-xl py-2 hidden group-hover:block z-50 rounded-b-sm border-t-4 border-[#DAA520]">
                  <Link to="/shop/mixers/tonics" className="block px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-100 last:border-0">Tonics</Link>
                  <Link to="/shop/mixers/cocktail-base" className="block px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-100 last:border-0">Cocktail Base</Link>
                  <Link to="/shop/mixers/grape-juice" className="block px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-100 last:border-0">Grape Juice</Link>
               </div>
            </div>

            <Link to="/shop/gifting" className="text-sm uppercase tracking-wider hover:text-[#DAA520] transition-colors font-medium text-white">
              Gifts
            </Link>

            <Link to="/shop/promotions" className="text-sm uppercase tracking-wider hover:text-[#DAA520] transition-colors font-medium text-white">
              Offers
            </Link>

            {/* Visit Us Dropdown */}
            <div className="relative group">
               <Link to="/experiences" className="flex items-center gap-1 text-sm uppercase tracking-wider hover:text-[#DAA520] transition-colors font-medium py-4 text-white">
                 Visit <ChevronDown size={14} />
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

            {/* Company Mega Menu */}
            <div className="relative group">
               <Link to="/" className="flex items-center gap-1 text-sm uppercase tracking-wider hover:text-[#DAA520] transition-colors font-medium py-4 text-white">
                 Company <ChevronDown size={14} />
               </Link>
               <div className="absolute top-full left-0 w-64 bg-white shadow-xl py-2 hidden group-hover:block z-50 rounded-b-sm border-t-4 border-[#DAA520]">
                  <Link to="/about" className="block px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-100 last:border-0">About Us</Link>
                  <Link to="/history" className="block px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-100 last:border-0">History</Link>
                  <Link to="/brands" className="block px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-100 last:border-0">Our Brands</Link>
                  <Link to="/awards" className="block px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-100 last:border-0">Awards</Link>
                  <Link to="/executive-team" className="block px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-100 last:border-0">Executive Team</Link>
                  <Link to="/sustainability" className="block px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-100 last:border-0">Sustainability</Link>
                  <Link to="/careers" className="block px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-100 last:border-0">Careers</Link>
                  <Link to="/global-distribution" className="block px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-100 last:border-0">Global Distribution</Link>
               </div>
            </div>

             <Link to="/shop/faq" className="text-sm uppercase tracking-wider hover:text-[#DAA520] transition-colors font-medium text-white">
              FAQ
            </Link>

             <Link to="/contact" className="text-sm uppercase tracking-wider hover:text-[#DAA520] transition-colors font-medium text-white">
              Contact
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
                                placeholder="Search products..."
                                className="w-full bg-[#3d2319] text-white placeholder-white/60 px-3 py-2 rounded-sm outline-none border border-[#5e382b] focus:border-[#DAA520]"
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
                <SheetContent side="right" className="w-full sm:w-[400px] p-0 bg-[#2C1810] text-white overflow-y-auto [&>button]:hidden border-l border-[#3d2319]">
                  <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                  <SheetDescription className="sr-only">Navigation menu</SheetDescription>
                  <div className="p-6 flex flex-col min-h-full">
                     <div className="mb-8 flex items-center justify-between">
                        <KWVShopLogo className="h-10 w-auto text-white" />
                        <SheetClose asChild>
                          <button className="p-2 hover:bg-white/10 rounded-full transition-colors" aria-label="Close menu">
                            <X size={24} color="white" />
                          </button>
                        </SheetClose>
                     </div>

                     {/* Mobile Menu Search */}
                     <form onSubmit={handleSearch} className="mb-8 relative">
                       <input 
                         type="text" 
                         placeholder="Search products..." 
                         value={searchQuery}
                         onChange={(e) => setSearchQuery(e.target.value)}
                         className="w-full bg-white/5 text-white placeholder-white/70 rounded-sm py-3 pl-10 pr-4 border border-white/10 focus:border-[#DAA520] focus:bg-white/10 outline-none transition-all text-base"
                       />
                       <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70" size={18} />
                     </form>

                     <div className="flex-1 space-y-6">
                        <nav className="flex flex-col space-y-4">
                            {/* Account Icon */}
                            <div className="flex items-center gap-6 pb-2 mb-2">
                                <Link to="/account" onClick={closeMenu} className="flex flex-col items-center gap-1 text-white hover:text-[#DAA520] transition-colors group">
                                    <div className="p-3 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
                                        <User size={20} />
                                    </div>
                                    <span className="text-[10px] uppercase tracking-widest font-medium">Account</span>
                                </Link>
                            </div>

                             <Accordion type="single" collapsible className="w-full border-none">
                                <AccordionItem value="brands" className="border-b border-white/10">
                                  <AccordionTrigger className="text-xl font-serif font-medium hover:text-[#DAA520] py-4 hover:no-underline text-white">Brands</AccordionTrigger>
                                  <AccordionContent className="pl-4 space-y-4 text-base text-gray-300">
                                     <div>
                                        <Typography variant="caption" className="text-[#DAA520] uppercase tracking-widest font-bold mb-2 text-xs">Premium Wines</Typography>
                                        <div className="space-y-2 pl-2 border-l border-white/10">
                                           <Link to="/shop/brands/the-mentors" onClick={closeMenu} className="block hover:text-white">The Mentors</Link>
                                           <Link to="/shop/brands/cathedral-cellar" onClick={closeMenu} className="block hover:text-white">Cathedral Cellar</Link>
                                           <Link to="/shop/brands/laborie" onClick={closeMenu} className="block hover:text-white">Laborie</Link>
                                        </div>
                                     </div>
                                     <div>
                                        <Typography variant="caption" className="text-[#DAA520] uppercase tracking-widest font-bold mb-2 text-xs">Heritage & Lifestyle</Typography>
                                        <div className="space-y-2 pl-2 border-l border-white/10">
                                           <Link to="/shop/brands/roodeberg" onClick={closeMenu} className="block hover:text-white">Roodeberg</Link>
                                           <Link to="/shop/brands/kwv-classic-collection" onClick={closeMenu} className="block hover:text-white">Classic Collection</Link>
                                           <Link to="/shop/brands/annabelle" onClick={closeMenu} className="block hover:text-white">Annabelle</Link>
                                           <Link to="/shop/brands/pearly-bay" onClick={closeMenu} className="block hover:text-white">Pearly Bay</Link>
                                        </div>
                                     </div>
                                     <div>
                                        <Typography variant="caption" className="text-[#DAA520] uppercase tracking-widest font-bold mb-2 text-xs">Spirits</Typography>
                                        <div className="space-y-2 pl-2 border-l border-white/10">
                                           <Link to="/shop/brands/kwv-brandy" onClick={closeMenu} className="block hover:text-white">KWV Brandy</Link>
                                           <Link to="/shop/brands/cruxland-gin" onClick={closeMenu} className="block hover:text-white">Cruxland Gin</Link>
                                           <Link to="/shop/brands/wild-africa-cream" onClick={closeMenu} className="block hover:text-white">Wild Africa Cream</Link>
                                           <Link to="/shop/brands/bacardi" onClick={closeMenu} className="block hover:text-white">Bacardi</Link>
                                        </div>
                                     </div>
                                     <Link to="/shop/brands" onClick={closeMenu} className="block text-[#DAA520] font-bold mt-4 uppercase tracking-widest text-sm">View All Brands</Link>
                                  </AccordionContent>
                               </AccordionItem>
                               
                               <AccordionItem value="spirits" className="border-b border-white/10">
                                  <AccordionTrigger className="text-xl font-serif font-medium hover:text-[#DAA520] py-4 hover:no-underline text-white">Spirits</AccordionTrigger>
                                  <AccordionContent className="pl-4 space-y-3 text-base text-gray-300">
                                     <Link to="/shop/spirits/brandy" onClick={closeMenu} className="block hover:text-white">Brandy & Cognac</Link>
                                     <Link to="/shop/spirits/gin" onClick={closeMenu} className="block hover:text-white">Gin</Link>
                                     <Link to="/shop/spirits/vodka" onClick={closeMenu} className="block hover:text-white">Vodka</Link>
                                     <Link to="/shop/spirits/liqueurs" onClick={closeMenu} className="block hover:text-white">Liqueurs</Link>
                                     <Link to="/shop/spirits/rum" onClick={closeMenu} className="block hover:text-white">Rum</Link>
                                  </AccordionContent>
                               </AccordionItem>

                               <AccordionItem value="wine" className="border-b border-white/10">
                                  <AccordionTrigger className="text-xl font-serif font-medium hover:text-[#DAA520] py-4 hover:no-underline text-white">Wine</AccordionTrigger>
                                  <AccordionContent className="pl-4 space-y-3 text-base text-gray-300">
                                     <Link to="/shop/wine/red" onClick={closeMenu} className="block hover:text-white">Red Wine</Link>
                                     <Link to="/shop/wine/white" onClick={closeMenu} className="block hover:text-white">White Wine</Link>
                                     <Link to="/shop/wine/rose" onClick={closeMenu} className="block hover:text-white">Rosé</Link>
                                     <Link to="/shop/wine/sparkling" onClick={closeMenu} className="block hover:text-white">Sparkling</Link>
                                     <Link to="/shop/wine/fortified" onClick={closeMenu} className="block hover:text-white">Fortified</Link>
                                  </AccordionContent>
                               </AccordionItem>
                               <AccordionItem value="mixers" className="border-b border-white/10">
                                  <AccordionTrigger className="text-xl font-serif font-medium hover:text-[#DAA520] py-4 hover:no-underline text-white">Mixers</AccordionTrigger>
                                  <AccordionContent className="pl-4 space-y-3 text-base text-gray-300">
                                     <Link to="/shop/mixers/tonics" onClick={closeMenu} className="block hover:text-white">Tonics</Link>
                                     <Link to="/shop/mixers/cocktail-base" onClick={closeMenu} className="block hover:text-white">Cocktail Base</Link>
                                     <Link to="/shop/mixers/grape-juice" onClick={closeMenu} className="block hover:text-white">Grape Juice</Link>
                                  </AccordionContent>
                               </AccordionItem>
                             </Accordion>

                            <Link to="/shop/gifting" onClick={closeMenu} className="text-xl font-serif font-medium hover:text-[#DAA520] flex items-center justify-between group text-white border-b border-white/10 py-4">
                               <span>Gifts</span>
                               <ChevronRight size={16} className="text-gray-400 group-hover:text-[#DAA520]" />
                            </Link>

                            <Link to="/shop/promotions" onClick={closeMenu} className="text-xl font-serif font-medium hover:text-[#DAA520] flex items-center justify-between group text-white border-b border-white/10 py-4">
                               <span>Offers</span>
                               <ChevronRight size={16} className="text-gray-400 group-hover:text-[#DAA520]" />
                            </Link>

                            <Accordion type="single" collapsible className="w-full border-none">
                              <AccordionItem value="experiences" className="border-b border-white/10">
                                   <AccordionTrigger className="text-xl font-serif font-medium hover:text-[#DAA520] py-4 hover:no-underline text-white">Visit</AccordionTrigger>
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

                                <AccordionItem value="company" className="border-b border-white/10">
                                   <AccordionTrigger className="text-xl font-serif font-medium hover:text-[#DAA520] py-4 hover:no-underline text-white">Company</AccordionTrigger>
                                   <AccordionContent className="pl-4 space-y-3 text-base text-gray-300">
                                      <Link to="/" onClick={closeMenu} className="block text-[#DAA520] font-bold">Company Home</Link>
                                      <Link to="/about" onClick={closeMenu} className="block hover:text-white">About Us</Link>
                                      <Link to="/history" onClick={closeMenu} className="block hover:text-white">History</Link>
                                      <Link to="/brands" onClick={closeMenu} className="block hover:text-white">Our Brands</Link>
                                      <Link to="/awards" onClick={closeMenu} className="block hover:text-white">Awards</Link>
                                      <Link to="/executive-team" onClick={closeMenu} className="block hover:text-white">Executive Team</Link>
                                      <Link to="/sustainability" onClick={closeMenu} className="block hover:text-white">Sustainability</Link>
                                      <Link to="/careers" onClick={closeMenu} className="block hover:text-white">Careers</Link>
                                      <Link to="/global-distribution" onClick={closeMenu} className="block hover:text-white">Global Distribution</Link>
                                   </AccordionContent>
                                </AccordionItem>
                             </Accordion>
                            
                            <Link to="/shop/faq" onClick={closeMenu} className="text-xl font-serif font-medium hover:text-[#DAA520] flex items-center justify-between group text-white border-b border-white/10 py-4">
                               <span>FAQ</span>
                               <ChevronRight size={16} className="text-gray-400 group-hover:text-[#DAA520]" />
                            </Link>
                            
                            <Link to="/contact" onClick={closeMenu} className="text-xl font-serif font-medium hover:text-[#DAA520] flex items-center justify-between group text-white py-4">
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