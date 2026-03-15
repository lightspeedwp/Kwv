/**
 * UnifiedHeader Component
 * 
 * Unified header for Handcrafted Wines boutique wine farm.
 * Features hand-drawn aesthetic and family-oriented design.
 * 
 * Structure:
 * - Top Bar: Left (Home, About) | Right (Search, Account, Cart, Theme Toggle)
 * - Main Nav: Logo (center) + Primary Navigation
 * - Mobile: Hamburger menu with full navigation
 * 
 * Features:
 * - Sticky header with backdrop blur
 * - Hand-drawn logo and accents
 * - WCAG AA accessible
 * - Dark mode support
 * - Mobile-first responsive design
 * - Design token system integration
 * 
 * @package HandcraftedWines
 * @version 2.0
 */

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, Search, User, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Container } from '../common/Container';
import { ThemeToggle } from '../common/ThemeToggle';
import { MiniCart } from '../shop/cart/MiniCart';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "../ui/sheet";

export const UnifiedHeader: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  // Navigation structure
  const navigation = {
    topLeft: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' }
    ],
    main: [
      {
        label: 'Shop',
        href: '/shop',
        submenu: [
          { label: 'All Products', href: '/shop' },
          { label: 'Wines', href: '/shop/wines' },
          { label: '— Red Wines', href: '/shop/wines/red' },
          { label: '— White Wines', href: '/shop/wines/white' },
          { label: '— Rosé & Sparkling', href: '/shop/wines/rose' },
          { label: 'Craft Spirits', href: '/shop/spirits' },
          { label: 'Artisan Cheese', href: '/shop/cheese' },
          { label: 'Gift Sets', href: '/shop/gifts' },
          { label: 'Wine Club', href: '/wine-club' },
          { label: 'Special Offers', href: '/shop/promotions' }
        ]
      },
      {
        label: 'Visit',
        href: '/visit',
        submenu: [
          { label: 'Plan Your Visit', href: '/visit' },
          { label: 'All Experiences', href: '/experiences' },
          { label: 'Book Events', href: '/events' },
          { label: 'Visit FAQs', href: '/experiences/faq' }
        ]
      },
      {
        label: 'Events',
        href: '/events',
        submenu: [
          { label: 'Events Overview', href: '/events' },
          { label: 'Event Enquiries', href: '/contact' },
          { label: 'Events FAQs', href: '/events/faq' }
        ]
      },
      { 
        label: 'Our Story', 
        href: '/about',
        submenu: [
          { label: 'About Us', href: '/about' },
          { label: 'The Farm', href: '/about/farm' },
          { label: 'Our Team', href: '/about/team' },
          { label: 'History Since 1918', href: '/history' },
          { label: 'Awards & Recognition', href: '/about/awards' },
          { label: 'Sustainability', href: '/about/sustainability' },
          { label: 'News & Updates', href: '/news' }
        ]
      },
      { label: 'Contact', href: '/contact' }
    ]
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--twb-color-ink)]/95 backdrop-blur-md shadow-lg'
          : 'bg-[var(--twb-color-ink)]'
      }`}
      style={{
        // Ensure header always has proper background and minimum height
        minHeight: '90px',
        backgroundColor: isScrolled ? 'rgba(30, 26, 23, 0.95)' : '#1e1a17'
      }}
    >
      {/* Top Bar */}
      <div className="border-b border-white/10">
        <Container>
          <div className="flex items-center justify-between h-10 text-sm">
            {/* Left: Home + About */}
            <div className="hidden md:flex items-center gap-6">
              {navigation.topLeft.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-white/80 hover:text-[var(--twb-color-gold)] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Center Spacer on Mobile */}
            <div className="md:hidden" />

            {/* Right: Search, Account, Cart, Theme */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Search Icon */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 hover:opacity-70 transition-opacity"
                aria-label="Search"
              >
                <Search size={18} className="text-white" />
              </button>

              {/* My Account */}
              <Link
                to="/account"
                className="p-2 hover:opacity-70 transition-opacity"
                aria-label="My Account"
              >
                <User size={18} className="text-white" />
              </Link>

              {/* Cart */}
              <div className="scale-90 md:scale-100">
                <MiniCart />
              </div>

              {/* Theme Toggle */}
              <ThemeToggle />
            </div>
          </div>
        </Container>
      </div>

      {/* Search Bar (Expandable) */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-b border-white/10 overflow-hidden bg-[var(--twb-color-ink)]"
          >
            <Container>
              <form onSubmit={handleSearch} className="py-4">
                <div className="relative max-w-2xl mx-auto">
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search wines, spirits, cheese..."
                    className="w-full px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--twb-color-gold)]"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-[var(--twb-color-gold)] text-[var(--twb-color-ink)] rounded-full font-medium hover:bg-[var(--twb-color-gold)]/90 transition-colors"
                  >
                    Search
                  </button>
                </div>
              </form>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navigation */}
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="text-white">
              {/* Hand-drawn logo placeholder - replace with actual logo */}
              <div className="flex flex-col">
                <span className="font-serif text-2xl md:text-3xl font-bold tracking-wide text-[var(--twb-color-gold)]">
                  Handcrafted Wines
                </span>
                <span className="text-xs md:text-sm text-white/70 italic -mt-1">
                  Est. 1918 · Paarl Mountain
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.main.map((item) => {
              const isActive = location.pathname === item.href || 
                              (item.submenu && item.submenu.some(sub => location.pathname === sub.href));
              
              return (
                <div key={item.href} className="relative group">
                  <Link
                    to={item.href}
                    className={`text-white hover:text-[var(--twb-color-gold)] transition-colors font-medium flex items-center gap-1 relative pb-1 ${
                      isActive ? 'text-[var(--twb-color-gold)]' : ''
                    }`}
                  >
                    {item.label}
                    {item.submenu && <ChevronDown size={16} className="opacity-70" />}
                    
                    {/* Hand-drawn underline for active state */}
                    {isActive && (
                      <svg
                        className="absolute -bottom-1 left-0 w-full h-[6px] pointer-events-none"
                        viewBox="0 0 100 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                      >
                        <defs>
                          <filter id="sketch-underline">
                            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3" />
                            <feDisplacementMap in="SourceGraphic" scale="0.8" />
                          </filter>
                        </defs>
                        <path
                          d="M2,3 Q25,2 50,3 T98,3"
                          stroke="var(--twb-color-gold)"
                          strokeWidth="2"
                          fill="none"
                          opacity="0.7"
                          filter="url(#sketch-underline)"
                        />
                        {/* Double line for hand-drawn effect */}
                        <path
                          d="M1,4 Q25,3.5 50,4 T99,4"
                          stroke="var(--twb-color-gold)"
                          strokeWidth="1"
                          fill="none"
                          opacity="0.4"
                          filter="url(#sketch-underline)"
                        />
                      </svg>
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.submenu && (
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-[var(--twb-color-ink)] border border-white/10 rounded-lg shadow-xl min-w-[220px] py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.href}
                            to={subItem.href}
                            className="block px-4 py-2 text-white/90 hover:text-[var(--twb-color-gold)] hover:bg-white/5 transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="lg:hidden p-2 hover:opacity-70 transition-opacity"
                aria-label="Open menu"
              >
                <Menu size={24} className="text-white" />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-full sm:w-[400px] bg-[var(--twb-color-ink)] border-l border-white/10 text-white overflow-y-auto"
            >
              <SheetTitle className="text-2xl font-serif text-[var(--twb-color-gold)] mb-8">
                Menu
              </SheetTitle>

              {/* Mobile Top Links */}
              <div className="mb-6 pb-6 border-b border-white/10">
                {navigation.topLeft.map((item) => (
                  <SheetClose key={item.href} asChild>
                    <Link
                      to={item.href}
                      className="block py-3 text-lg text-white/90 hover:text-[var(--twb-color-gold)] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>

              {/* Mobile Main Navigation */}
              <nav className="space-y-2">
                {navigation.main.map((item) => (
                  <div key={item.href}>
                    <SheetClose asChild>
                      <Link
                        to={item.href}
                        className="block py-3 text-xl font-medium text-white hover:text-[var(--twb-color-gold)] transition-colors"
                      >
                        {item.label}
                      </Link>
                    </SheetClose>

                    {/* Mobile Submenu */}
                    {item.submenu && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.submenu.map((subItem) => (
                          <SheetClose key={subItem.href} asChild>
                            <Link
                              to={subItem.href}
                              className="block py-2 text-base text-white/70 hover:text-[var(--twb-color-gold)] transition-colors"
                            >
                              {subItem.label}
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile Account & Settings */}
              <div className="mt-8 pt-8 border-t border-white/10 space-y-4">
                <SheetClose asChild>
                  <Link
                    to="/account"
                    className="flex items-center gap-3 text-white/90 hover:text-[var(--twb-color-gold)] transition-colors"
                  >
                    <User size={20} />
                    <span>My Account</span>
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
};