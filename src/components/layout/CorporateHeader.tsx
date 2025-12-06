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
} from "../ui/sheet";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../ui/accordion";

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
    <header className="sticky top-0 z-50 transition-all duration-300 bg-white shadow-sm relative">
      {/* Mobile Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute inset-0 bg-white z-50 flex items-center px-4 shadow-md lg:hidden"
          >
            <form onSubmit={handleSearch} className="flex-1 flex items-center gap-2">
              <Search size={20} className="text-gray-400" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search content..."
                className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400 h-10 text-base"
                autoFocus
              />
              <button 
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="p-2 text-gray-500 hover:text-gray-800"
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
             <KWVLogo className="h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 mx-8">
            <Link to="/shop" className="text-sm uppercase tracking-wider hover:text-opacity-80 transition-colors font-medium text-[#2C1810]">
              Online Shop
            </Link>
            
            <Link to="/account" className="text-sm uppercase tracking-wider hover:text-opacity-80 transition-colors font-medium text-[#2C1810]">
              Account Login
            </Link>

            {/* Mega Menu for Our Company */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm uppercase tracking-wider hover:text-opacity-80 transition-colors font-medium text-[#2C1810] py-4">
                Our Company <ChevronDown size={14} />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[700px] bg-white shadow-lg rounded-sm p-8 hidden group-hover:grid grid-cols-3 gap-8 opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none group-hover:pointer-events-auto border-t-4 border-[#8B0000]">
                 <div className="space-y-4">
                    <Typography variant="h4" className="text-sm text-[#8B0000] border-b border-gray-200 pb-2 font-bold uppercase tracking-widest">About KWV</Typography>
                    <Link to="/about" className="block text-sm text-gray-600 hover:text-[#8B0000]">About Us</Link>
                    <Link to="/history" className="block text-sm text-gray-600 hover:text-[#8B0000]">History</Link>
                    <Link to="/brands" className="block text-sm text-gray-600 hover:text-[#8B0000]">Our Brands</Link>
                    <Link to="/executive-team" className="block text-sm text-gray-600 hover:text-[#8B0000]">Executive Team</Link>
                 </div>
                 <div className="space-y-4">
                    <Typography variant="h4" className="text-sm text-[#8B0000] border-b border-gray-200 pb-2 font-bold uppercase tracking-widest">Connect</Typography>
                    <Link to="/news" className="block text-sm text-gray-600 hover:text-[#8B0000]">News & Awards</Link>
                    <Link to="/careers" className="block text-sm text-gray-600 hover:text-[#8B0000]">Careers</Link>
                    <Link to="/contact" className="block text-sm text-gray-600 hover:text-[#8B0000]">Contact Us</Link>
                 </div>
                 <div className="space-y-4">
                    <Typography variant="h4" className="text-sm text-[#8B0000] border-b border-gray-200 pb-2 font-bold uppercase tracking-widest">Initiatives</Typography>
                    <Link to="/sustainability" className="block text-sm text-gray-600 hover:text-[#8B0000]">Sustainability</Link>
                    <Link to="/wine-club" className="block text-sm text-gray-600 hover:text-[#8B0000]">Wine Club</Link>
                 </div>
                 
                 <div className="col-span-3 mt-4 p-4 bg-gray-50 rounded-sm flex items-center justify-between">
                    <div>
                       <Typography variant="h4" className="text-sm font-bold text-[#2C1810]">Visit our Emporium</Typography>
                       <p className="text-xs text-gray-500">Experience world-class tastings in Paarl.</p>
                    </div>
                    <Link to="/experiences" className="text-xs font-bold text-[#8B0000] uppercase tracking-wider hover:underline">Book Now</Link>
                 </div>
              </div>
            </div>

            <Link to="/shop" className="text-sm uppercase tracking-wider hover:text-opacity-80 transition-colors font-medium text-[#2C1810]">
              KWV Shop
            </Link>

            <div className="relative group">
               <Link to="/experiences" className="flex items-center gap-1 text-sm uppercase tracking-wider hover:text-opacity-80 transition-colors font-medium text-[#2C1810] py-4">
                Visit Us <ChevronDown size={14} />
              </Link>
               <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-white shadow-lg py-2 hidden group-hover:block z-50 border-t-4 border-[#8B0000]">
                  <Link to="/experiences" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-100 last:border-0">Tastings</Link>
                  <Link to="/experiences" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-100 last:border-0">Emporium</Link>
                  <Link to="/experiences" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-100 last:border-0">House of Fire</Link>
               </div>
            </div>

            <Link to="/faq" className="text-sm uppercase tracking-wider hover:text-opacity-80 transition-colors font-medium text-[#2C1810]">
              FAQ
            </Link>

            <Link to="/contact" className="text-sm uppercase tracking-wider hover:text-opacity-80 transition-colors font-medium text-[#2C1810]">
              Contact Us
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
                              className="w-full bg-white text-[#2C1810] px-3 py-2 rounded-sm outline-none border border-gray-300 focus:border-[#8B0000]"
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
                <Search size={20} color={COLORS.darkBrown} />
              </button>
            </div>

            {/* Desktop Only: Join Wine Club Button */}
            <div className="hidden lg:block">
               <Link to="/wine-club">
                 <Button size="sm" className="bg-[#8B0000] text-white hover:bg-[#600000]">
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
                     <Menu size={24} color={COLORS.darkBrown} />
                   </button>
                 </SheetTrigger>
                 <SheetContent side="right" className="w-full sm:w-[400px] p-0 bg-white text-[#2C1810] overflow-y-auto [&>button]:hidden">
                    <div className="p-6 flex flex-col min-h-full">
                       <div className="mb-8 flex items-center justify-between">
                          <KWVLogo className="h-10 w-auto text-[#2C1810]" />
                          <SheetClose asChild>
                            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                              <X size={24} color={COLORS.darkBrown} />
                            </button>
                          </SheetClose>
                       </div>
  
                       <div className="flex-1 space-y-6">
                          <nav className="flex flex-col space-y-4">
                             <Link to="/shop" onClick={closeMenu} className="text-xl font-serif font-medium hover:text-[#8B0000] flex items-center justify-between group">
                                <span>Online Shop</span>
                                <ChevronRight size={16} className="text-gray-400 group-hover:text-[#8B0000]" />
                             </Link>
                             
                             <Link to="/account" onClick={closeMenu} className="text-xl font-serif font-medium hover:text-[#8B0000] flex items-center justify-between group">
                                <span>Account Login</span>
                                <ChevronRight size={16} className="text-gray-400 group-hover:text-[#8B0000]" />
                             </Link>
  
                             <Accordion type="single" collapsible className="w-full border-none">
                                <AccordionItem value="company" className="border-none">
                                   <AccordionTrigger className="text-xl font-serif font-medium hover:text-[#8B0000] py-2 hover:no-underline">Our Company</AccordionTrigger>
                                   <AccordionContent className="pl-4 space-y-3 text-base text-gray-600">
                                      <Link to="/about" onClick={closeMenu} className="block">About Us</Link>
                                      <Link to="/history" onClick={closeMenu} className="block">History</Link>
                                      <Link to="/brands" onClick={closeMenu} className="block">Our Brands</Link>
                                      <Link to="/executive-team" onClick={closeMenu} className="block">Executive Team</Link>
                                      <Link to="/news" onClick={closeMenu} className="block">News & Awards</Link>
                                      <Link to="/careers" onClick={closeMenu} className="block">Careers</Link>
                                      <Link to="/sustainability" onClick={closeMenu} className="block">Sustainability</Link>
                                   </AccordionContent>
                                </AccordionItem>
  
                                <AccordionItem value="visit" className="border-none">
                                   <AccordionTrigger className="text-xl font-serif font-medium hover:text-[#8B0000] py-2 hover:no-underline">Visit Us</AccordionTrigger>
                                   <AccordionContent className="pl-4 space-y-3 text-base text-gray-600">
                                      <Link to="/experiences" onClick={closeMenu} className="block">Tastings</Link>
                                      <Link to="/experiences" onClick={closeMenu} className="block">Emporium</Link>
                                      <Link to="/experiences" onClick={closeMenu} className="block">House of Fire</Link>
                                   </AccordionContent>
                                </AccordionItem>
                             </Accordion>
  
                             <Link to="/faq" onClick={closeMenu} className="text-xl font-serif font-medium hover:text-[#8B0000] flex items-center justify-between group">
                                <span>FAQ</span>
                                <ChevronRight size={16} className="text-gray-400 group-hover:text-[#8B0000]" />
                             </Link>
                             
                             <Link to="/contact" onClick={closeMenu} className="text-xl font-serif font-medium hover:text-[#8B0000] flex items-center justify-between group">
                                <span>Contact Us</span>
                                <ChevronRight size={16} className="text-gray-400 group-hover:text-[#8B0000]" />
                             </Link>
                          </nav>
                       </div>
  
                       <div className="mt-8 pt-8 border-t border-gray-100">
                          <Link to="/wine-club" onClick={closeMenu} className="block">
                             <Button className="w-full bg-[#8B0000] text-white hover:bg-[#600000] h-12 text-lg">Join Wine Club</Button>
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