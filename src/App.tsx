import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Company Pages
import { Home } from './pages/company/Home';
import { About } from './pages/company/About';
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

// Shop Pages
import { ShopHome } from './pages/shop/ShopHome';
import { Shop } from './pages/shop/Shop';
import { Product } from './pages/shop/Product';
import { Cart } from './pages/shop/Cart';
import { Checkout } from './pages/shop/Checkout';
import { OrderConfirmation } from './pages/shop/OrderConfirmation';
import { MyAccount } from './pages/shop/MyAccount';
import { ComingSoon } from './pages/shop/ComingSoon';
import { ShopFAQ } from './pages/shop/ShopFAQ';
import { ShopPromotions } from './pages/shop/ShopPromotions';
import { ShopBrands } from './pages/shop/ShopBrands';
import { ProductSearchResults } from './pages/shop/ProductSearchResults';

// Brands Pages
import { Brands } from './pages/brands/Brands';

// Experience Pages
import { Experiences } from './pages/experiences/Experiences';
import { Emporium } from './pages/experiences/Emporium';
import { CathedralCellar } from './pages/experiences/CathedralCellar';
import { HouseOfFire } from './pages/experiences/HouseOfFire';
import { ConferenceFacilities } from './pages/experiences/ConferenceFacilities';
import { Events } from './pages/events/Events';
import { EventDetail } from './pages/events/EventDetail';
import { EventsFAQ } from './pages/events/EventsFAQ';
import { CathedralCellarKitchen } from './pages/experiences/CathedralCellarKitchen';
import { ExperiencesFAQ } from './pages/experiences/ExperiencesFAQ';

// Legal Pages
import { Terms } from './pages/legal/Terms';
import { Policies } from './pages/legal/Policies';
import { ReturnsPolicy } from './pages/legal/ReturnsPolicy';

import { ShopBrandLanding } from './pages/shop/ShopBrandLanding';

// Common
import { ScrollToTop } from './components/common/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* Load Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@700&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Pinyon+Script&display=swap');
        @import url('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css');
        @import url('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css');
      `}</style>
      
      <Routes>
        {/* Company Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/history" element={<History />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:slug" element={<NewsPost />} />
        <Route path="/wine-club" element={<WineClub />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/jobs" element={<Careers />} />
        <Route path="/our-company/jobs" element={<Careers />} />
        <Route path="/executive-team" element={<ExecutiveTeam />} />
        <Route path="/our-company/sustainability" element={<Sustainability />} />
        <Route path="/sustainability" element={<Navigate to="/our-company/sustainability" replace />} />
        <Route path="/global-distribution" element={<GlobalDistribution />} />
        <Route path="/search" element={<SearchResults />} />

        {/* Brand Routes */}
        <Route path="/brands" element={<Brands />} />
        <Route path="/brands/:id" element={<Brands />} />

        {/* Shop Routes */}
        <Route path="/shop" element={<ShopHome />} />
        <Route path="/shop/all" element={<Shop />} />
        <Route path="/shop/search" element={<ProductSearchResults />} />
        <Route path="/shop/brands" element={<ShopBrands />} />
        <Route path="/shop/brands/:slug" element={<ShopBrandLanding />} />
        <Route path="/shop/promotions" element={<ShopPromotions />} />
        <Route path="/shop/faq" element={<ShopFAQ />} />
        <Route path="/shop/tag/:tag" element={<Shop />} />
        <Route path="/shop/:category" element={<Shop />} />
        <Route path="/shop/:category/:subcategory" element={<Shop />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-received" element={<OrderConfirmation />} />
        <Route path="/account" element={<MyAccount />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/coming-soon" element={<ComingSoon />} />

        {/* Experience Routes */}
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/visit" element={<Experiences />} />
        <Route path="/experiences/emporium" element={<Emporium />} />
        <Route path="/experiences/cathedral-cellar" element={<CathedralCellar />} />
        <Route path="/experiences/house-of-fire" element={<HouseOfFire />} />
        <Route path="/experiences/conference-facilities" element={<ConferenceFacilities />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:slug" element={<EventDetail />} />
        <Route path="/events/faq" element={<EventsFAQ />} />
        <Route path="/experiences/cathedral-cellar-kitchen" element={<CathedralCellarKitchen />} />
        <Route path="/experiences/faq" element={<ExperiencesFAQ />} />

        {/* Legal Routes */}
        <Route path="/terms" element={<Terms />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/returns-policy" element={<ReturnsPolicy />} />

        {/* Fallbacks */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}
