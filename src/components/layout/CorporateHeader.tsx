import React, { useState } from 'react';
import { Menu, Search, X, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from '../common/Container';
import { COLORS } from '../../constants/theme';
import { Typography } from '../common/Typography';
import { Button } from '../common/Button';
import { AnimatePresence, motion } from 'motion/react';
import { KWVLogo } from '../common/Logo';

export const CorporateHeader: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-300 bg-white shadow-sm">
      <Container variant="site" className="py-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} color={COLORS.darkBrown} />
          </button>

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
             <KWVLogo className="h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
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
                    <Typography variant="h4" className="text-sm text-[#8B0000] border-b pb-2 font-bold uppercase tracking-widest">About KWV</Typography>
                    <Link to="/about" className="block text-sm text-gray-600 hover:text-[#8B0000]">About Us</Link>
                    <Link to="/history" className="block text-sm text-gray-600 hover:text-[#8B0000]">History</Link>
                    <Link to="/brands" className="block text-sm text-gray-600 hover:text-[#8B0000]">Our Brands</Link>
                    <Link to="/executive-team" className="block text-sm text-gray-600 hover:text-[#8B0000]">Executive Team</Link>
                 </div>
                 <div className="space-y-4">
                    <Typography variant="h4" className="text-sm text-[#8B0000] border-b pb-2 font-bold uppercase tracking-widest">Connect</Typography>
                    <Link to="/news" className="block text-sm text-gray-600 hover:text-[#8B0000]">News & Awards</Link>
                    <Link to="/careers" className="block text-sm text-gray-600 hover:text-[#8B0000]">Careers</Link>
                    <Link to="/contact" className="block text-sm text-gray-600 hover:text-[#8B0000]">Contact Us</Link>
                 </div>
                 <div className="space-y-4">
                    <Typography variant="h4" className="text-sm text-[#8B0000] border-b pb-2 font-bold uppercase tracking-widest">Initiatives</Typography>
                    <Link to="/sustainability" className="block text-sm text-gray-600 hover:text-[#8B0000]">Sustainability</Link>
                    <Link to="/wine-club" className="block text-sm text-gray-600 hover:text-[#8B0000]">Wine Club</Link>
                 </div>
                 
                 {/* Optional: Add a featured image or callout at the bottom */}
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

            {/* Visit Us Dropdown */}
            <div className="relative group">
               <Link to="/experiences" className="flex items-center gap-1 text-sm uppercase tracking-wider hover:text-opacity-80 transition-colors font-medium text-[#2C1810] py-4">
                Visit Us <ChevronDown size={14} />
              </Link>
               <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-white shadow-lg py-2 hidden group-hover:block z-50 border-t-2 border-[#8B0000]">
                  <Link to="/experiences" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700">Tastings</Link>
                  <Link to="/experiences" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700">Emporium</Link>
                  <Link to="/experiences" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700">House of Fire</Link>
               </div>
            </div>

            <Link to="/faq" className="text-sm uppercase tracking-wider hover:text-opacity-80 transition-colors font-medium text-[#2C1810]">
              FAQ
            </Link>

            <Link to="/contact" className="text-sm uppercase tracking-wider hover:text-opacity-80 transition-colors font-medium text-[#2C1810]">
              Contact Us
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4 relative">
            <AnimatePresence>
                {isSearchOpen && (
                    <motion.form 
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 200, opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        onSubmit={handleSearch}
                        className="absolute right-full mr-2 overflow-hidden"
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
              {isSearchOpen ? <X size={20} color={COLORS.darkBrown} /> : <Search size={20} color={COLORS.darkBrown} />}
            </button>
            <Link to="/wine-club">
              <Button size="sm" className="hidden sm:flex bg-[#8B0000] text-white hover:bg-[#600000]">
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
            className="fixed inset-0 z-[60] flex flex-col h-screen w-full bg-[#F5F5DC]"
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
               <Typography variant="h3" color={COLORS.wineRed}>KWV</Typography>
               <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                 <X size={24} color={COLORS.darkBrown} />
               </button>
            </div>
            <div className="flex flex-col p-8 gap-6 overflow-y-auto">
              <Link to="/shop" className="text-xl font-serif border-b pb-2 border-gray-300" onClick={() => setIsMobileMenuOpen(false)}>Online Shop</Link>
              <Link to="/account" className="text-xl font-serif border-b pb-2 border-gray-300" onClick={() => setIsMobileMenuOpen(false)}>Account Login</Link>
              <div className="space-y-2">
                <div className="text-xl font-serif text-[#8B0000]">Our Company</div>
                <div className="pl-4 flex flex-col gap-2">
                   <Link to="/about" className="text-lg text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
                   <Link to="/history" className="text-lg text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>History</Link>
                   <Link to="/brands" className="text-lg text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>Our Brands</Link>
                   <Link to="/news" className="text-lg text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>News</Link>
                   <Link to="/careers" className="text-lg text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>Careers</Link>
                   <Link to="/sustainability" className="text-lg text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>Sustainability</Link>
                </div>
              </div>
              <Link to="/experiences" className="text-xl font-serif border-b pb-2 border-gray-300" onClick={() => setIsMobileMenuOpen(false)}>Visit Us</Link>
              <Link to="/faq" className="text-xl font-serif border-b pb-2 border-gray-300" onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link>
              <Link to="/contact" className="text-xl font-serif border-b pb-2 border-gray-300" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
              <Link to="/wine-club" className="mt-4" onClick={() => setIsMobileMenuOpen(false)}>
                 <Button className="w-full">Join Wine Club</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
