import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { Container } from '../common/Container';
import { COLORS } from '../../constants/theme';

// Helper to format path segments
const formatSegment = (segment: string) => {
  return segment
    .replace(/-/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase());
};

// Custom overrides for specific paths
const PATH_MAP: Record<string, string> = {
  'shop': 'Online Shop',
  'about': 'About Us',
  'history': 'Our History',
  'sustainability': 'Sustainability',
  'news': 'News & Media',
  'awards': 'Awards',
  'careers': 'Careers',
  'contact': 'Contact Us',
  'contact-us': 'Contact Us',
  'executive-team': 'Executive Team',
  'global-distribution': 'Global Distribution',
  'experiences': 'Experiences',
  'visit': 'Visit Us',
  'emporium': 'KWV Emporium',
  'cathedral-cellar': 'Cathedral Cellar',
  'house-of-fire': 'House of Fire',
  'conference-facilities': 'Conference Facilities',
  'cathedral-cellar-kitchen': 'Cathedral Cellar Kitchen',
  'events': 'Events',
  'faq': 'FAQ',
  'terms': 'Terms & Conditions',
  'privacy': 'Privacy Policy',
  'popi': 'POPI Act',
  'paia': 'PAIA Manual',
  'wine-club': 'Wine Club',
  'my-account': 'My Account',
  'account': 'My Account',
  'cart': 'Cart',
  'checkout': 'Checkout',
  'order-received': 'Order Received',
  'product': 'Product',
  'search': 'Search Results',
  'returns-policy': 'Returns Policy',
  'policies': 'Policies',
  'jobs': 'Jobs',
  'coming-soon': 'Coming Soon',
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
      : "w-full bg-[#f9f9f9] py-3 border-b border-gray-200 relative z-10"
    }>
      <Container variant="site">
        <nav aria-label="Breadcrumb" className="pointer-events-auto">
          <ol className={`flex items-center text-xs md:text-sm flex-wrap ${hasHero ? 'text-white/90 drop-shadow-sm' : 'text-gray-500'}`}>
            <li className="flex items-center">
              <Link to="/" className={`${hasHero ? 'hover:text-white' : 'hover:text-[#8B0000]'} transition-colors flex items-center focus:outline-none focus:ring-2 focus:ring-[#DAA520] rounded-sm p-0.5`} aria-label="Home">
                <Home size={14} className="mr-1" />
                <span className="sr-only">Home</span>
              </Link>
            </li>
            {pathnames.map((value, index) => {
              const to = `/${pathnames.slice(0, index + 1).join('/')}`;
              const isLast = index === pathnames.length - 1;
              let name = PATH_MAP[value] || formatSegment(value);

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
                    <span className={`font-semibold truncate max-w-[200px] ${hasHero ? 'text-white drop-shadow-md' : 'text-[#333333]'}`} aria-current="page">
                      {name}
                    </span>
                  ) : isNonClickable ? (
                    <span className={hasHero ? 'text-white/60' : 'text-gray-500'}>
                      {name}
                    </span>
                  ) : (
                    <Link 
                      to={to} 
                      className={`${hasHero ? 'hover:text-white' : 'hover:text-[#8B0000]'} transition-colors focus:outline-none focus:ring-2 focus:ring-[#DAA520] rounded-sm p-0.5`}
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
