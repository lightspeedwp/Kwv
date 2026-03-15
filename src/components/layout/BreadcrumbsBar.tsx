/**
 * BreadcrumbsBar Component
 * 
 * Context-aware breadcrumb navigation for Handcrafted Wines.
 * 
 * Features:
 * - Auto-generates crumbs based on URL path
 * - Hero page detection (transparent overlay with white text)
 * - Standard page styling (light background with dark text)
 * - Custom path-to-label mapping
 * - Hides on home and product pages
 * - WCAG AA accessible keyboard navigation
 * - Design token integration
 * 
 * @package HandcraftedWines
 * @version 2.0
 */

import React from 'react';
import { useLocation, Link } from 'react-router';
import { ChevronRight, Home } from 'lucide-react';
import { Container } from '../common/Container';

// Helper to format path segments
const formatSegment = (segment: string) => {
  return segment
    .replace(/-/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase());
};

// Custom overrides for specific paths
const ROUTE_LABELS: Record<string, string> = {
  'about': 'About',
  'company': 'Company',
  'history': 'Our History',
  'awards': 'Awards',
  'sustainability': 'Sustainability',
  'news': 'News',
  'careers': 'Careers',
  'executive-team': 'Executive Team',
  'shop': 'Shop',
  'products': 'Products',
  'cart': 'Cart',
  'checkout': 'Checkout',
  'my-account': 'My Account',
  'order-received': 'Order Confirmation',
  'promotions': 'Promotions',
  'faq': 'FAQ',
  'search': 'Search Results',
  'experiences': 'Experiences',
  'visit': 'Visit Us',
  'emporium': 'Estate Tasting Room',
  'cathedral-cellar': 'Cathedral Cellar',
  'house-of-fire': 'House of Fire',
  'conference-facilities': 'Conference Facilities',
  'cathedral-cellar-kitchen': 'Cathedral Cellar Kitchen',
  'events': 'Events',
  'contact': 'Contact'
};

// Paths that should not be clickable (because they are not pages themselves)
const NON_CLICKABLE_PATHS = ['product', 'shop/tag'];

/**
 * BreadcrumbsBar Component
 * 
 * Context-aware breadcrumb navigation.
 * 
 * Features:
 * - Automatically generates crumbs based on the URL path.
 * - Handles "Hero" pages (transparent overlay, white text) vs "Standard" pages (light gray bg, dark text).
 * - Supports custom path-to-label mapping (e.g., "contact-us" -> "Contact Us").
 * - Hides on Home and Product pages (Product pages use their own breadcrumbs).
 */
export const BreadcrumbsBar: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  // Don't show on home page or product detail pages (handled locally)
  if (pathnames.length === 0 || pathnames[0] === 'product') return null;

  // Pages that definitely HAVE a Hero section (dark background)
  // We use this whitelist to be safer than assuming everything has a hero.
  const HERO_PATHS = [
    '/about',
    '/history',
    '/brands',
    '/awards',
    '/executive-team',
    '/our-company/sustainability',
    '/global-distribution',
    '/careers',
    // '/news', // News listing page uses beige background, so use default breadcrumbs
    '/experiences',
    '/visit',
    '/wine-club',
    '/contact',
    '/contact-us',
    '/faq', 
    '/terms',
    '/policies',
    '/returns-policy',
    // Shop pages that specifically HAVE a hero:
    '/shop/promotions',
    '/shop/brands',
    '/shop/faq' 
  ];
  
  // Pages that match the hero path prefix but definitely DON'T have a hero
  const EXCLUDED_HERO_PATHS = [
    '/shop/search',
  ];

  // Also check if path starts with certain prefixes that always have heroes
  const matchesHeroPath = (location.pathname === '/shop') || 
    HERO_PATHS.some(path => location.pathname === path || location.pathname.startsWith(path + '/')) 
    || location.pathname.startsWith('/experiences/') 
    || location.pathname.startsWith('/news/');

  const isExcluded = EXCLUDED_HERO_PATHS.some(path => location.pathname === path || location.pathname.startsWith(path + '/'));

  const hasHero = matchesHeroPath && !isExcluded;

  return (
    <div className={hasHero 
      ? "absolute top-0 left-0 w-full z-20 pt-6 pb-2 bg-transparent pointer-events-none" 
      : "w-full bg-[var(--twb-color-bg-secondary)] dark:bg-[var(--twb-color-bg-primary)] py-3 border-b border-gray-200 dark:border-gray-700 relative z-10"
    }>
      <Container variant="site">
        <nav aria-label="Breadcrumb" className="pointer-events-auto">
          <ol className={`flex items-center text-xs md:text-sm flex-wrap ${hasHero ? 'text-white/90 drop-shadow-sm' : 'text-gray-500 dark:text-gray-400'}`}>
            <li className="flex items-center">
              <Link to="/" className={`${hasHero ? 'hover:text-white' : 'hover:text-[var(--twb-color-accent-primary)]'} transition-colors flex items-center focus:outline-none focus:ring-2 focus:ring-[var(--twb-color-gold)] rounded-sm p-0.5`} aria-label="Home">
                <Home size={14} className="mr-1" />
                <span className="sr-only">Home</span>
              </Link>
            </li>
            {pathnames.map((value, index) => {
              const to = `/${pathnames.slice(0, index + 1).join('/')}`;
              const isLast = index === pathnames.length - 1;
              let name = ROUTE_LABELS[value] || formatSegment(value);

              // Context-aware naming for FAQ
              if (value === 'faq' && index === 0) {
                name = 'Corporate FAQ';
              }
              
              // Determine if this segment should be clickable
              // Check if it's in NON_CLICKABLE_PATHS or if the logic implies it (e.g. numeric ID might be last)
              // For simplicity, we stick to explicit map or simple check.
              // Note: 'product' is a segment, 'shop' is a segment.
              
              const isNonClickable = NON_CLICKABLE_PATHS.includes(value);

              return (
                <li key={to} className="flex items-center">
                  <ChevronRight size={14} className={`mx-2 ${hasHero ? 'text-white/60' : 'text-gray-400'}`} />
                  {isLast ? (
                    <span className={`font-semibold truncate max-w-[200px] ${hasHero ? 'text-white drop-shadow-md' : 'text-[var(--twb-color-text-primary)] dark:text-[var(--twb-color-text-on-dark)]'}`} aria-current="page">
                      {name}
                    </span>
                  ) : isNonClickable ? (
                    <span className={hasHero ? 'text-white/60' : 'text-gray-500 dark:text-gray-400'}>
                      {name}
                    </span>
                  ) : (
                    <Link 
                      to={to} 
                      className={`${hasHero ? 'hover:text-white' : 'hover:text-[var(--twb-color-accent-primary)]'} transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--twb-color-gold)] rounded-sm p-0.5`}
                    >
                      {name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </Container>
    </div>
  );
};