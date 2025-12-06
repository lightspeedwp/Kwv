import React, { useState } from 'react';
import { Menu, Search, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from '../common/Container';
import { Typography } from '../common/Typography';
import { Button } from '../common/Button';
import { KWVExperiencesLogo } from '../common/Logo';
import { AnimatePresence, motion } from 'motion/react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "../ui/sheet";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../ui/accordion";

export const ExperiencesHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 transition-all duration-300 bg-[#2C1810] text-white shadow-md relative">
      <Container variant="site" className="py-4">
        <div className="flex items-center justify-between">
          
          {/* 1. Logo (Left aligned) */}
          <Link to="/experiences" className="flex-shrink-0 mr-auto">
             <KWVExperiencesLogo className="h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 mx-8">
            {/* Company Mega Menu */}
            <div className="relative group">
               <button className="flex items-center gap-1 text-sm uppercase tracking-wider hover:text-[#DAA520] transition-colors font-medium py-4">
                 Company <ChevronDown size={14} />
               </button>
               <div className="absolute top-full left-0 w-64 bg-white shadow-xl py-2 hidden group-hover:block z-50 rounded-b-sm border-t-4 border-[#DAA520]">
                  <Link to="/about" className="block px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-100 last:border-0">About Us</Link>
                  <Link to="/history" className="block px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-100 last:border-0">History</Link>
                  <Link to="/sustainability" className="block px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-100 last:border-0">Sustainability</Link>
                  <Link to="/careers" className="block px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-100 last:border-0">Careers</Link>
               </div>
            </div>

            {/* Shop Mega Menu */}
            <div className="relative group">
               <Link to="/shop" className="flex items-center gap-1 text-sm uppercase tracking-wider hover:text-[#DAA520] transition-colors font-medium py-4">
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
                     <Link to="/brands/roodeberg" className="block py-2 text-gray-600 hover:text-[#8B0000]">Roodeberg</Link>
                     <Link to="/brands/mentors" className="block py-2 text-gray-600 hover:text-[#8B0000]">The Mentors</Link>
                     <Link to="/shop" className="block py-2 text-[#DAA520] font-bold">Visit Shop</Link>
                  </div>
               </div>
            </div>

            {/* Experiences Mega Menu */}
            <div className="relative group">
               <Link to="/experiences" className="flex items-center gap-1 text-sm uppercase tracking-wider hover:text-[#DAA520] transition-colors font-medium py-4">
                 Experiences <ChevronDown size={14} />
               </Link>
               <div className="absolute top-full left-0 w-64 bg-white shadow-xl py-2 hidden group-hover:block z-50 rounded-b-sm border-t-4 border-[#DAA520]">
                  <Link to="/experiences" className="block px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-100 last:border-0">Emporium</Link>
                  <Link to="/experiences" className="block px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-100 last:border-0">Cathedral Cellar</Link>
                  <Link to="/experiences" className="block px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-100 last:border-0">House of Fire</Link>
                  <Link to="/experiences" className="block px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-100 last:border-0">Conference Facilities</Link>
               </div>
            </div>

            <Link to="/experiences" className="text-sm uppercase tracking-wider hover:text-[#DAA520] transition-colors font-medium">
              Events
            </Link>
            
            <Link to="/faq" className="text-sm uppercase tracking-wider hover:text-[#DAA520] transition-colors font-medium">
              FAQ
            </Link>
             
            <Link to="/contact" className="text-sm uppercase tracking-wider hover:text-[#DAA520] transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1 sm:gap-4 relative">
             
            {/* Desktop Only: Book Experience Button */}
            <div className="hidden lg:block">
              <Button size="sm" className="bg-[#DAA520] text-[#2C1810] hover:bg-white border-none">
                Book an Experience
              </Button>
            </div>

            {/* Mobile Menu Icon */}
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
                        <KWVExperiencesLogo className="h-10 w-auto text-[#2C1810]" color="#2C1810" />
                        <SheetClose asChild>
                          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <X size={24} color="#2C1810" />
                          </button>
                        </SheetClose>
                     </div>

                     <div className="flex-1 space-y-6">
                        <nav className="flex flex-col space-y-4">
                            <Accordion type="single" collapsible className="w-full border-none">
                               <AccordionItem value="company" className="border-none">
                                  <AccordionTrigger className="text-xl font-serif font-medium hover:text-[#8B0000] py-2 hover:no-underline">Company</AccordionTrigger>
                                  <AccordionContent className="pl-4 space-y-3 text-base text-gray-600">
                                     <Link to="/about" onClick={closeMenu} className="block">About Us</Link>
                                     <Link to="/history" onClick={closeMenu} className="block">History</Link>
                                     <Link to="/sustainability" onClick={closeMenu} className="block">Sustainability</Link>
                                     <Link to="/careers" onClick={closeMenu} className="block">Careers</Link>
                                  </AccordionContent>
                               </AccordionItem>
                               
                               <AccordionItem value="shop" className="border-none">
                                  <AccordionTrigger className="text-xl font-serif font-medium hover:text-[#8B0000] py-2 hover:no-underline">Shop</AccordionTrigger>
                                  <AccordionContent className="pl-4 space-y-3 text-base text-gray-600">
                                     <Link to="/shop" onClick={closeMenu} className="block">Wines</Link>
                                     <Link to="/shop" onClick={closeMenu} className="block">Spirits</Link>
                                     <Link to="/shop" onClick={closeMenu} className="block text-[#DAA520]">Go to Shop</Link>
                                  </AccordionContent>
                               </AccordionItem>
                               
                               <AccordionItem value="experiences" className="border-none">
                                  <AccordionTrigger className="text-xl font-serif font-medium hover:text-[#8B0000] py-2 hover:no-underline">Experiences</AccordionTrigger>
                                  <AccordionContent className="pl-4 space-y-3 text-base text-gray-600">
                                     <Link to="/experiences" onClick={closeMenu} className="block">Emporium</Link>
                                     <Link to="/experiences" onClick={closeMenu} className="block">Cathedral Cellar</Link>
                                     <Link to="/experiences" onClick={closeMenu} className="block">House of Fire</Link>
                                  </AccordionContent>
                               </AccordionItem>
                            </Accordion>
                            
                            <Link to="/experiences" onClick={closeMenu} className="text-xl font-serif font-medium hover:text-[#8B0000] flex items-center justify-between group">
                               <span>Events</span>
                               <ChevronRight size={16} className="text-gray-400 group-hover:text-[#8B0000]" />
                            </Link>

                            <Link to="/faq" onClick={closeMenu} className="text-xl font-serif font-medium hover:text-[#8B0000] flex items-center justify-between group">
                               <span>FAQ</span>
                               <ChevronRight size={16} className="text-gray-400 group-hover:text-[#8B0000]" />
                            </Link>
                            
                            <Link to="/contact" onClick={closeMenu} className="text-xl font-serif font-medium hover:text-[#8B0000] flex items-center justify-between group">
                               <span>Contact</span>
                               <ChevronRight size={16} className="text-gray-400 group-hover:text-[#8B0000]" />
                            </Link>
                        </nav>
                     </div>

                     <div className="mt-8 pt-8 border-t border-gray-100">
                        <Button className="w-full bg-[#2C1810] text-white hover:bg-[#8B0000] h-12 text-lg">Book an Experience</Button>
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