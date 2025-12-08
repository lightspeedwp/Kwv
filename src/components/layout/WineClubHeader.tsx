import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Container } from '../common/Container';
import { Typography } from '../common/Typography';
import { Button } from '../common/Button';
import { KWVWineClubLogo } from '../common/Logo';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from "../ui/sheet";

/**
 * WineClubHeader Component
 * 
 * Dedicated header for the Wine Club section.
 * 
 * Features:
 * - `KWVWineClubLogo`.
 * - Simplified navigation focusing on Shop, Visit Us, and Company cross-links.
 * - "Join Wine Club" CTA button.
 * - FAQ anchor scrolling logic.
 */
export const WineClubHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  const handleJoinClick = () => {
      // Navigate to checkout with assumption that subscription is preloaded (mocked)
      navigate('/checkout');
  };

  const scrollToFAQ = (e: React.MouseEvent) => {
    // If we are on the wine-club page, scroll to #faq.
    // Otherwise navigate to /wine-club#faq
    if (location.pathname === '/wine-club') {
        e.preventDefault();
        const element = document.getElementById('faq'); 
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-300 bg-[#2C1810] text-white shadow-md relative">
      <Container variant="site" className="py-4">
        <div className="flex items-center justify-between">
          
          {/* 1. Logo (Left aligned) */}
          <Link to="/wine-club" className="flex-shrink-0 mr-auto">
             <KWVWineClubLogo className="h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 mx-8">
            <Link to="/shop" className="text-sm uppercase tracking-wider hover:text-[#DAA520] transition-colors font-medium text-white">
              Shop
            </Link>

            <Link to="/experiences" className="text-sm uppercase tracking-wider hover:text-[#DAA520] transition-colors font-medium text-white">
              Visit Us
            </Link>

            <Link to="/" className="text-sm uppercase tracking-wider hover:text-[#DAA520] transition-colors font-medium text-white">
              Company
            </Link>

            <Link 
                to="/wine-club#faq" 
                onClick={scrollToFAQ}
                className="text-sm uppercase tracking-wider hover:text-[#DAA520] transition-colors font-medium text-white cursor-pointer"
            >
              FAQ
            </Link>

            <Link to="/contact" className="text-sm uppercase tracking-wider hover:text-[#DAA520] transition-colors font-medium text-white">
              Contact
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-4 relative">
            
            {/* Desktop Only: Join Wine Club Button */}
            <div className="hidden lg:block">
               <Button 
                size="sm" 
                onClick={handleJoinClick}
                className="bg-[#DAA520] text-[#2C1810] hover:bg-white border-none font-bold uppercase tracking-wider"
               >
                 Join Wine Club
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
                 <SheetContent side="right" className="w-full sm:w-[400px] p-0 bg-[#2C1810] text-white overflow-y-auto [&>button]:hidden border-l border-[#3d2319]">
                    <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                    <SheetDescription className="sr-only">Navigation menu</SheetDescription>
                    <div className="p-6 flex flex-col min-h-full">
                       <div className="mb-8 flex items-center justify-between">
                          <KWVWineClubLogo className="h-10 w-auto text-white" />
                          <SheetClose asChild>
                            <button className="p-2 hover:bg-white/10 rounded-full transition-colors" aria-label="Close menu">
                              <X size={24} color="white" />
                            </button>
                          </SheetClose>
                       </div>
  
                       <div className="flex-1 space-y-6">
                          <nav className="flex flex-col space-y-4">
                             <Link to="/shop" onClick={closeMenu} className="text-xl font-serif font-medium hover:text-[#DAA520] block py-2 border-b border-white/10">
                                Shop
                             </Link>
                             
                             <Link to="/experiences" onClick={closeMenu} className="text-xl font-serif font-medium hover:text-[#DAA520] block py-2 border-b border-white/10">
                                Visit Us
                             </Link>

                             <Link to="/" onClick={closeMenu} className="text-xl font-serif font-medium hover:text-[#DAA520] block py-2 border-b border-white/10">
                                Company
                             </Link>
  
                             <Link 
                                to="/wine-club#faq" 
                                onClick={(e) => { closeMenu(); scrollToFAQ(e); }} 
                                className="text-xl font-serif font-medium hover:text-[#DAA520] block py-2 border-b border-white/10"
                             >
                                FAQ
                             </Link>
                             
                             <Link to="/contact" onClick={closeMenu} className="text-xl font-serif font-medium hover:text-[#DAA520] block py-2">
                                Contact
                             </Link>
                          </nav>
                       </div>
  
                       <div className="mt-8 pt-8 border-t border-white/10">
                          <Button 
                            onClick={() => { closeMenu(); handleJoinClick(); }}
                            className="w-full bg-[#DAA520] text-[#2C1810] hover:bg-white h-12 text-lg border-none font-bold uppercase tracking-wider"
                          >
                            Join Wine Club
                          </Button>
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