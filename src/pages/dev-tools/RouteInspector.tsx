/**
 * Route Inspector
 * 
 * Visual explorer for all registered routes in the application.
 * Displays route structure, parameters, and navigation hierarchy.
 * 
 * Features:
 * - Complete route tree visualization
 * - Search and filter routes
 * - Route metadata (component, path, parameters)
 * - Quick navigation to any route
 * - Export route list
 * 
 * @version 1.0
 */

import { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  Search,
  ExternalLink,
  FileCode,
  Hash,
  Filter,
  Download,
  Home,
  ShoppingBag,
  MapPin,
  Calendar,
  Users,
  FileText,
  Settings,
} from 'lucide-react';

interface RouteInfo {
  path: string;
  name: string;
  category: string;
  component: string;
  hasParams?: boolean;
  paramExample?: string;
  description?: string;
}

const routes: RouteInfo[] = [
  // Main Pages
  { path: '/', name: 'Homepage', category: 'Main', component: 'Home', description: 'Main landing page' },
  { path: '/sitemap', name: 'Sitemap', category: 'Main', component: 'Sitemap', description: 'Complete site navigation' },
  
  // About Pages
  { path: '/about', name: 'About Us', category: 'About', component: 'About', description: 'Company overview' },
  { path: '/about/farm', name: 'The Farm', category: 'About', component: 'AboutFarm', description: 'Farm facilities and operations' },
  { path: '/about/team', name: 'Our Team', category: 'About', component: 'AboutTeam', description: 'Family team members' },
  { path: '/awards', name: 'Awards', category: 'About', component: 'Awards', description: 'Awards and recognition' },
  { path: '/sustainability', name: 'Sustainability', category: 'About', component: 'Sustainability', description: 'Sustainability practices' },
  { path: '/history', name: 'History', category: 'About', component: 'History', description: 'Company history' },
  { path: '/executive-team', name: 'Executive Team', category: 'About', component: 'ExecutiveTeam', description: 'Leadership team' },
  { path: '/global-distribution', name: 'Global Distribution', category: 'About', component: 'GlobalDistribution', description: 'Distribution network' },
  
  // Shop Pages
  { path: '/shop', name: 'Shop Home', category: 'Shop', component: 'ShopHome', description: 'Shop landing page' },
  { path: '/shop/wines', name: 'Wines Category', category: 'Shop', component: 'WinesCategory', description: 'Browse wines' },
  { path: '/shop/spirits', name: 'Spirits Category', category: 'Shop', component: 'SpiritsCategory', description: 'Browse spirits' },
  { path: '/shop/cheese', name: 'Cheese Category', category: 'Shop', component: 'CheeseCategory', description: 'Browse cheeses' },
  { path: '/shop/gifts', name: 'Gifts Category', category: 'Shop', component: 'GiftsCategory', description: 'Browse gift sets' },
  { path: '/shop/brands', name: 'Shop by Brand', category: 'Shop', component: 'ShopBrands', description: 'Browse by brand' },
  { path: '/shop/brand/:brand', name: 'Brand Landing', category: 'Shop', component: 'ShopBrandLanding', hasParams: true, paramExample: '/shop/brand/handcrafted' },
  { path: '/shop/product/:slug', name: 'Product Detail', category: 'Shop', component: 'ProductDetail', hasParams: true, paramExample: '/shop/product/shiraz-2021' },
  { path: '/shop/cart', name: 'Shopping Cart', category: 'Shop', component: 'Cart', description: 'View cart' },
  { path: '/shop/checkout', name: 'Checkout', category: 'Shop', component: 'Checkout', description: 'Checkout process' },
  { path: '/shop/order-confirmation', name: 'Order Confirmation', category: 'Shop', component: 'OrderConfirmation', description: 'Order success' },
  { path: '/shop/my-account', name: 'My Account', category: 'Shop', component: 'MyAccount', description: 'Account dashboard' },
  { path: '/shop/promotions', name: 'Promotions', category: 'Shop', component: 'ShopPromotions', description: 'Special offers' },
  { path: '/shop/faq', name: 'Shop FAQ', category: 'Shop', component: 'ShopFAQ', description: 'Shopping help' },
  
  // Experiences/Visit Pages
  { path: '/experiences', name: 'Experiences', category: 'Visit', component: 'Experiences', description: 'Farm experiences overview' },
  { path: '/experiences/wine-tasting', name: 'Wine Tasting', category: 'Visit', component: 'WineTasting', description: 'Wine tasting experience' },
  { path: '/experiences/cheese-pairing', name: 'Cheese & Wine Pairing', category: 'Visit', component: 'CheesePairing', description: 'Cheese pairing experience' },
  { path: '/experiences/farm-tour', name: 'Farm Tour', category: 'Visit', component: 'FarmTour', description: 'Full farm tour' },
  { path: '/experiences/harvest-experience', name: 'Harvest Experience', category: 'Visit', component: 'HarvestExperience', description: 'Seasonal harvest experience' },
  { path: '/experiences/private-tasting', name: 'Private Tasting', category: 'Visit', component: 'PrivateTasting', description: 'Private group tasting' },
  { path: '/experiences/faq', name: 'Experiences FAQ', category: 'Visit', component: 'ExperiencesFAQ', description: 'Visiting FAQ' },
  
  // Events Pages
  { path: '/events', name: 'Events', category: 'Events', component: 'Events', description: 'Events overview' },
  { path: '/events/:slug', name: 'Event Detail', category: 'Events', component: 'EventDetail', hasParams: true, paramExample: '/events/summer-wine-festival' },
  { path: '/events/faq', name: 'Events FAQ', category: 'Events', component: 'EventsFAQ', description: 'Events FAQ' },
  
  // Company Pages
  { path: '/news', name: 'News', category: 'Company', component: 'News', description: 'Latest news' },
  { path: '/news/:slug', name: 'News Article', category: 'Company', component: 'NewsPost', hasParams: true, paramExample: '/news/harvest-2024' },
  { path: '/wine-club', name: 'Wine Club', category: 'Company', component: 'WineClub', description: 'The Wine Box subscription' },
  { path: '/contact', name: 'Contact', category: 'Company', component: 'Contact', description: 'Contact information' },
  { path: '/faq', name: 'FAQ', category: 'Company', component: 'FAQ', description: 'Frequently asked questions' },
  { path: '/careers', name: 'Careers', category: 'Company', component: 'Careers', description: 'Job opportunities' },
  { path: '/careers/:slug', name: 'Job Detail', category: 'Company', component: 'JobDetail', hasParams: true, paramExample: '/careers/winemaker' },
  
  // Brands
  { path: '/brands', name: 'All Brands', category: 'Brands', component: 'Brands', description: 'Brand portfolio' },
  
  // Legal Pages
  { path: '/policies', name: 'Policies', category: 'Legal', component: 'Policies', description: 'All policies' },
  { path: '/privacy', name: 'Privacy Policy', category: 'Legal', component: 'Privacy', description: 'Privacy policy' },
  { path: '/terms', name: 'Terms of Service', category: 'Legal', component: 'Terms', description: 'Terms and conditions' },
  { path: '/accessibility', name: 'Accessibility', category: 'Legal', component: 'Accessibility', description: 'Accessibility statement' },
  { path: '/shipping', name: 'Shipping Policy', category: 'Legal', component: 'Shipping', description: 'Shipping information' },
  { path: '/cookies', name: 'Cookie Policy', category: 'Legal', component: 'Cookies', description: 'Cookie policy' },
  { path: '/returns', name: 'Returns Policy', category: 'Legal', component: 'ReturnsPolicy', description: 'Returns and refunds' },
  
  // Dev Tools
  { path: '/dev-tools', name: 'Dev Tools Home', category: 'Dev Tools', component: 'DevTools', description: 'Developer tools hub' },
  { path: '/dev-tools/tokens', name: 'Design Tokens', category: 'Dev Tools', component: 'DesignTokens', description: 'Design token inspector' },
  { path: '/dev-tools/routes', name: 'Route Inspector', category: 'Dev Tools', component: 'RouteInspector', description: 'Route explorer' },
  
  // Demo Pages
  { path: '/handdrawn-demo', name: 'Component Library', category: 'Demo', component: 'HandDrawnComponentLibrary', description: 'Component showcase' },
  { path: '/handdrawn-demo/landing-page', name: 'Landing Page Demo', category: 'Demo', component: 'FullWidthLandingPage', description: 'Full landing page demo' },
];

const categories = [
  { id: 'all', label: 'All Routes', icon: Hash, color: 'var(--twb-color-text-secondary)' },
  { id: 'Main', label: 'Main', icon: Home, color: 'var(--twb-color-accent-primary)' },
  { id: 'About', label: 'About', icon: Users, color: 'var(--twb-color-accent-primary)' },
  { id: 'Shop', label: 'Shop', icon: ShoppingBag, color: 'var(--twb-color-accent-primary)' },
  { id: 'Visit', label: 'Visit', icon: MapPin, color: 'var(--twb-color-accent-primary)' },
  { id: 'Events', label: 'Events', icon: Calendar, color: 'var(--twb-color-accent-primary)' },
  { id: 'Company', label: 'Company', icon: FileText, color: 'var(--twb-color-accent-primary)' },
  { id: 'Legal', label: 'Legal', icon: FileCode, color: 'var(--twb-color-accent-primary)' },
  { id: 'Dev Tools', label: 'Dev Tools', icon: Settings, color: 'var(--twb-color-accent-primary)' },
];

export default function RouteInspector() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();

  const filteredRoutes = useMemo(() => {
    return routes.filter(route => {
      const matchesSearch = 
        route.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        route.path.toLowerCase().includes(searchTerm.toLowerCase()) ||
        route.component.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || route.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const exportRoutes = () => {
    const data = routes.map(r => ({
      path: r.path,
      name: r.name,
      category: r.category,
      component: r.component,
    }));
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'routes.json';
    a.click();
  };

  return (
    <div className="min-h-screen bg-[var(--twb-color-bg-primary)]">
      {/* Header */}
      <header className="border-b border-[var(--twb-border-primary)] bg-[var(--twb-color-bg-secondary)]">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Link
            to="/dev-tools"
            className="mb-4 inline-flex items-center gap-2 text-sm text-[var(--twb-color-accent-primary)] hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dev Tools
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-[var(--twb-color-text-primary)]">
                Route Inspector
              </h1>
              <p className="mt-2 text-[var(--twb-color-text-secondary)]">
                {routes.length} routes registered • {filteredRoutes.length} shown
              </p>
            </div>
            <button
              onClick={exportRoutes}
              className="flex items-center gap-2 rounded-lg border border-[var(--twb-border-primary)] bg-[var(--twb-color-bg-primary)] px-4 py-2 text-sm font-medium text-[var(--twb-color-text-primary)] hover:bg-[var(--twb-color-accent-primary)] hover:text-white"
            >
              <Download className="h-4 w-4" />
              Export JSON
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--twb-color-text-secondary)]" />
            <input
              type="text"
              placeholder="Search routes by name, path, or component..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg border border-[var(--twb-border-primary)] bg-[var(--twb-color-bg-secondary)] py-3 pl-12 pr-4 text-[var(--twb-color-text-primary)] placeholder:text-[var(--twb-color-text-secondary)] focus:border-[var(--twb-color-accent-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--twb-color-accent-primary)]/20"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'border-[var(--twb-color-accent-primary)] bg-[var(--twb-color-accent-primary)] text-white'
                    : 'border-[var(--twb-border-primary)] bg-[var(--twb-color-bg-secondary)] text-[var(--twb-color-text-primary)] hover:border-[var(--twb-color-accent-primary)]'
                }`}
              >
                <category.icon className="h-4 w-4" />
                {category.label}
                <span className="ml-1 rounded-full bg-white/20 px-2 py-0.5 text-xs">
                  {category.id === 'all' 
                    ? routes.length 
                    : routes.filter(r => r.category === category.id).length
                  }
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Routes List */}
        <div className="space-y-3">
          {filteredRoutes.map((route, index) => (
            <motion.div
              key={route.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.02 }}
              className="group overflow-hidden rounded-lg border border-[var(--twb-border-primary)] bg-[var(--twb-color-bg-secondary)] transition-all hover:border-[var(--twb-color-accent-primary)] hover:shadow-lg"
            >
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-lg font-semibold text-[var(--twb-color-text-primary)]">
                        {route.name}
                      </h3>
                      <span className="rounded-full bg-[var(--twb-color-accent-primary)]/10 px-3 py-1 text-xs font-medium text-[var(--twb-color-accent-primary)]">
                        {route.category}
                      </span>
                      {route.hasParams && (
                        <span className="rounded-full bg-[var(--twb-color-accent-secondary)]/10 px-3 py-1 text-xs font-medium text-[var(--twb-color-accent-secondary)]">
                          Dynamic
                        </span>
                      )}
                    </div>
                    
                    <div className="mb-3 space-y-1">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-[var(--twb-color-text-secondary)]">Path:</span>
                        <code className="rounded bg-[var(--twb-color-bg-primary)] px-2 py-1 font-mono text-xs text-[var(--twb-color-accent-primary)]">
                          {route.path}
                        </code>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-[var(--twb-color-text-secondary)]">Component:</span>
                        <code className="rounded bg-[var(--twb-color-bg-primary)] px-2 py-1 font-mono text-xs text-[var(--twb-color-text-primary)]">
                          {route.component}.tsx
                        </code>
                      </div>

                      {route.paramExample && (
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-[var(--twb-color-text-secondary)]">Example:</span>
                          <code className="rounded bg-[var(--twb-color-bg-primary)] px-2 py-1 font-mono text-xs text-[var(--twb-color-accent-secondary)]">
                            {route.paramExample}
                          </code>
                        </div>
                      )}
                    </div>

                    {route.description && (
                      <p className="text-sm text-[var(--twb-color-text-secondary)]">
                        {route.description}
                      </p>
                    )}
                  </div>

                  {!route.hasParams && (
                    <button
                      onClick={() => navigate(route.path)}
                      className="flex items-center gap-2 rounded-lg border border-[var(--twb-border-primary)] bg-[var(--twb-color-bg-primary)] px-4 py-2 text-sm font-medium text-[var(--twb-color-text-primary)] opacity-0 transition-all hover:bg-[var(--twb-color-accent-primary)] hover:text-white group-hover:opacity-100"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Visit
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {filteredRoutes.length === 0 && (
            <div className="py-12 text-center">
              <Filter className="mx-auto h-12 w-12 text-[var(--twb-color-text-secondary)] opacity-50" />
              <p className="mt-4 text-[var(--twb-color-text-secondary)]">
                No routes match your search criteria
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
