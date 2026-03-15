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

// Brands Pages
import { Brands } from './pages/brands/Brands';

// Experience Pages
import { Experiences } from './pages/experiences/Experiences';
import { Emporium } from './pages/experiences/Emporium';
import { CathedralCellar } from './pages/experiences/CathedralCellar';
import { HouseOfFire } from './pages/experiences/HouseOfFire';
import { ConferenceFacilities } from './pages/experiences/ConferenceFacilities';
import { CathedralCellarKitchen } from './pages/experiences/CathedralCellarKitchen';
import { ExperiencesFAQ } from './pages/experiences/ExperiencesFAQ';

// Event Pages
import { Events } from './pages/events/Events';
import { EventDetail } from './pages/events/EventDetail';
import { EventsFAQ } from './pages/events/EventsFAQ';

// Demo Pages
import { HandDrawnComponentLibrary } from './pages/handdrawn-demo/HandDrawnComponentLibrary';
import { FullWidthLandingPage } from './pages/handdrawn-demo/FullWidthLandingPage';

// Legal Pages
import { Terms } from './pages/legal/Terms';
import { Policies } from './pages/legal/Policies';

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
  { path: '/jobs', Component: Careers },
  { path: '/our-company/jobs', Component: Careers },
  { path: '/executive-team', Component: ExecutiveTeam },
  { path: '/our-company/sustainability', Component: Sustainability },
  { path: '/sustainability', Component: Sustainability },
  { path: '/global-distribution', Component: GlobalDistribution },
  { path: '/search', Component: SearchResults },
  { path: '/sitemap', Component: Sitemap },

  // Brand Routes
  { path: '/brands', Component: Brands },
  { path: '/brands/:id', Component: Brands },

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
  { path: '/experiences/emporium', Component: Emporium },
  { path: '/experiences/cathedral-cellar', Component: CathedralCellar },
  { path: '/experiences/house-of-fire', Component: HouseOfFire },
  { path: '/experiences/conference-facilities', Component: ConferenceFacilities },
  { path: '/experiences/cathedral-cellar-kitchen', Component: CathedralCellarKitchen },
  { path: '/experiences/faq', Component: ExperiencesFAQ },

  // Event Routes
  { path: '/events', Component: Events },
  { path: '/events/:slug', Component: EventDetail },
  { path: '/events/faq', Component: EventsFAQ },

  // Demo Routes
  { path: '/handdrawn-demo', Component: HandDrawnComponentLibrary },
  { path: '/handdrawn-demo/landing-page', Component: FullWidthLandingPage },

  // Legal Routes
  { path: '/terms', Component: Terms },
  { path: '/policies', Component: Policies },

  // Fallback - redirect to home
  { path: '*', Component: Home },
]);