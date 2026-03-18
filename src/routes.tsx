/**
 * routes.tsx
 * 
 * Central routing configuration for Handcrafted Wines.
 * Uses React Router v7 Data mode with createBrowserRouter.
 * 
 * @updated 2026-03-16 - Cache refresh after CSS token updates
 */

import { createBrowserRouter } from 'react-router';

// Company Pages
import { Home } from './pages/company/Home';
import { About } from './pages/company/About';
import { AboutFarm } from './pages/company/AboutFarm';
import { AboutTeam } from './pages/company/AboutTeam';
import { History } from './pages/company/History';
import { Contact } from './pages/company/Contact';
import { FAQ } from './pages/company/FAQ';
import { Awards } from './pages/company/Awards';
import { News } from './pages/company/News';
import { NewsPost } from './pages/company/NewsPost';
import { WineClub } from './pages/company/WineClub';
import { Careers } from './pages/company/Careers';
import { JobDetail } from './pages/company/JobDetail';
import { ExecutiveTeam } from './pages/company/ExecutiveTeam';
import { Sustainability } from './pages/company/Sustainability';
import { GlobalDistribution } from './pages/company/GlobalDistribution';
import { SearchResults } from './pages/company/SearchResults';
import { Sitemap } from './pages/Sitemap';

// Shop Pages
import { ShopHome } from './pages/shop/ShopHome';
import { Shop } from './pages/shop/Shop';
import { Cart } from './pages/shop/Cart';
import { Checkout } from './pages/shop/Checkout';
import { OrderConfirmation } from './pages/shop/OrderConfirmation';
import { MyAccount } from './pages/shop/MyAccount';
import { ComingSoon } from './pages/shop/ComingSoon';
import { ShopFAQ } from './pages/shop/ShopFAQ';
import { ShopPromotions } from './pages/shop/ShopPromotions';
import { ShopBrands } from './pages/shop/ShopBrands';
import { ProductSearchResults } from './pages/shop/ProductSearchResults';
import { ShopBrandLanding } from './pages/shop/ShopBrandLanding';
import { WinesCategory } from './pages/shop/WinesCategory';
import { SpiritsCategory } from './pages/shop/SpiritsCategory';
import { CheeseCategory } from './pages/shop/CheeseCategory';
import { GiftsCategory } from './pages/shop/GiftsCategory';
import { ProductDetail } from './pages/shop/ProductDetail';

// Brands Pages - REMOVED (deprecated)
// The /brands routes have been deprecated and replaced by /shop/brands
// Old import: import { Brands } from './pages/brands/Brands';

// Experience Pages
import { Experiences } from './pages/experiences/Experiences';
import { WineTasting } from './pages/experiences/WineTasting';
import { CheesePairing } from './pages/experiences/CheesePairing';
import { FarmTour } from './pages/experiences/FarmTour';
import { HarvestExperience } from './pages/experiences/HarvestExperience';
import { PrivateTasting } from './pages/experiences/PrivateTasting';
import { ExperiencesFAQ } from './pages/experiences/ExperiencesFAQ';

// Event Pages
import { Events } from './pages/events/Events';
import { EventDetail } from './pages/events/EventDetail';
import { EventsFAQ } from './pages/events/EventsFAQ';

// Demo Pages
import { HandDrawnComponentLibrary } from './pages/handdrawn-demo/HandDrawnComponentLibrary';
import { FullWidthLandingPage } from './pages/handdrawn-demo/FullWidthLandingPage';

// Dev Tools Pages
import DevTools from './pages/dev-tools/DevTools';
import DesignTokens from './pages/dev-tools/DesignTokens';
import RouteInspector from './pages/dev-tools/RouteInspector';
import DataViewer from './pages/dev-tools/DataViewer';
import IconLibrary from './pages/dev-tools/IconLibrary';

// Legal Pages
import { Terms } from './pages/legal/Terms';
import { Policies } from './pages/legal/Policies';
import { ReturnsPolicy } from './pages/legal/ReturnsPolicy';
import { Privacy } from './pages/legal/Privacy';
import { Accessibility } from './pages/legal/Accessibility';
import { Shipping } from './pages/legal/Shipping';
import { Cookies } from './pages/legal/Cookies';

/**
 * Application Router Configuration
 * 
 * Uses React Router Data mode with createBrowserRouter.
 * All routes are defined here for centralized route management.
 */
export const router = createBrowserRouter([
  // Company Routes
  { path: '/', Component: Home },
  { path: '/about', Component: About },
  { path: '/about/farm', Component: AboutFarm },
  { path: '/about/team', Component: AboutTeam },
  { path: '/about/awards', Component: Awards },
  { path: '/about/sustainability', Component: Sustainability },
  { path: '/history', Component: History },
  { path: '/contact', Component: Contact },
  { path: '/contact-us', Component: Contact },
  { path: '/faq', Component: FAQ },
  { path: '/awards', Component: Awards },
  { path: '/news', Component: News },
  { path: '/news/:slug', Component: NewsPost },
  { path: '/wine-club', Component: WineClub },
  { path: '/careers', Component: Careers },
  { path: '/careers/:id', Component: JobDetail },
  { path: '/jobs', Component: Careers },
  { path: '/our-company/jobs', Component: Careers },
  { path: '/executive-team', Component: ExecutiveTeam },
  { path: '/our-company/sustainability', Component: Sustainability },
  { path: '/sustainability', Component: Sustainability },
  { path: '/global-distribution', Component: GlobalDistribution },
  { path: '/search', Component: SearchResults },
  { path: '/sitemap', Component: Sitemap },

  // Brand Routes (DEPRECATED - 2026-03-15)
  // Orphaned corporate KWV routes - not in main navigation
  // Replaced by /shop/brands (uses shopBrands.ts)
  // TODO: Remove after confirming no external links
  // { path: '/brands', Component: Brands }, // DEPRECATED
  // { path: '/brands/:id', Component: Brands }, // DEPRECATED

  // Shop Routes
  { path: '/shop', Component: ShopHome },
  { path: '/shop/wines', Component: WinesCategory },
  { path: '/shop/spirits', Component: SpiritsCategory },
  { path: '/shop/cheese', Component: CheeseCategory },
  { path: '/shop/gifts', Component: GiftsCategory },
  { path: '/shop/all', Component: Shop },
  { path: '/shop/search', Component: ProductSearchResults },
  { path: '/shop/brands', Component: ShopBrands },
  { path: '/shop/brands/:slug', Component: ShopBrandLanding },
  { path: '/shop/promotions', Component: ShopPromotions },
  { path: '/shop/faq', Component: ShopFAQ },
  { path: '/shop/tag/:tag', Component: Shop },
  { path: '/shop/:category', Component: Shop },
  { path: '/shop/:category/:subcategory', Component: Shop },
  { path: '/product/:id', Component: ProductDetail },
  { path: '/shop/product/:id', Component: ProductDetail },
  { path: '/cart', Component: Cart },
  { path: '/shop/cart', Component: Cart },
  { path: '/checkout', Component: Checkout },
  { path: '/shop/checkout', Component: Checkout },
  { path: '/order-received', Component: OrderConfirmation },
  { path: '/account', Component: MyAccount },
  { path: '/my-account', Component: MyAccount },
  { path: '/coming-soon', Component: ComingSoon },

  // Experience Routes
  { path: '/experiences', Component: Experiences },
  { path: '/visit', Component: Experiences },
  { path: '/experiences/wine-tasting', Component: WineTasting },
  { path: '/experiences/cheese-pairing', Component: CheesePairing },
  { path: '/experiences/farm-tour', Component: FarmTour },
  { path: '/experiences/harvest-experience', Component: HarvestExperience },
  { path: '/experiences/private-tasting', Component: PrivateTasting },
  { path: '/experiences/faq', Component: ExperiencesFAQ },

  // Event Routes
  { path: '/events', Component: Events },
  { path: '/events/:slug', Component: EventDetail },
  { path: '/events/faq', Component: EventsFAQ },

  // Demo Routes
  { path: '/handdrawn-demo', Component: HandDrawnComponentLibrary },
  { path: '/handdrawn-demo/landing-page', Component: FullWidthLandingPage },

  // Dev Tools Routes
  { path: '/dev-tools', Component: DevTools },
  { path: '/dev-tools/tokens', Component: DesignTokens },
  { path: '/dev-tools/routes', Component: RouteInspector },
  { path: '/dev-tools/data', Component: DataViewer },
  { path: '/dev-tools/icons', Component: IconLibrary },

  // Legal Routes
  { path: '/terms', Component: Terms },
  { path: '/policies', Component: Policies },
  { path: '/returns-policy', Component: ReturnsPolicy },
  { path: '/returns', Component: ReturnsPolicy },
  { path: '/privacy', Component: Privacy },
  { path: '/accessibility', Component: Accessibility },
  { path: '/shipping', Component: Shipping },
  { path: '/cookies', Component: Cookies },

  // Fallback - redirect to home
  { path: '*', Component: Home },
]);