import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Product } from './pages/Product';
import { History } from './pages/History';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { WineClub } from './pages/WineClub';
import { Brands } from './pages/Brands';
import { ShopBrands } from './pages/ShopBrands';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Awards } from './pages/Awards';
import { News } from './pages/News';
import { NewsPost } from './pages/NewsPost';
import { Experiences } from './pages/Experiences';
import { Emporium } from './pages/experiences/Emporium';
import { CathedralCellar } from './pages/experiences/CathedralCellar';
import { HouseOfFire } from './pages/experiences/HouseOfFire';
import { ConferenceFacilities } from './pages/experiences/ConferenceFacilities';
import { Events } from './pages/experiences/Events';
import { CathedralCellarKitchen } from './pages/experiences/CathedralCellarKitchen';
import { Careers, ExecutiveTeam, Sustainability } from './pages/CompanyPages';
import { MyAccount } from './pages/MyAccount';
import { OrderConfirmation } from './pages/OrderConfirmation';
import { ComingSoon } from './pages/ComingSoon';
import { SearchResults } from './pages/SearchResults';
import { ProductSearchResults } from './pages/shop/ProductSearchResults';
import { ShopFAQ } from './pages/shop/ShopFAQ';
import { FAQ } from './pages/FAQ';
import { ScrollToTop } from './components/common/ScrollToTop';

import { ShopHome } from './pages/ShopHome';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* Load Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@700&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
        @import url('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css');
        @import url('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css');
      `}</style>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResults />} />
        
        {/* Shop Routes */}
        <Route path="/shop/faq" element={<ShopFAQ />} />
        <Route path="/shop" element={<ShopHome />} />
        <Route path="/shop/all" element={<Shop />} />
        <Route path="/shop/search" element={<ProductSearchResults />} />
        <Route path="/shop/brands" element={<ShopBrands />} />
        <Route path="/shop/tag/:tag" element={<Shop />} />
        <Route path="/shop/:category" element={<Shop />} />
        <Route path="/shop/:category/:subcategory" element={<Shop />} /> {/* Added deeper nesting support */}
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-received" element={<OrderConfirmation />} />
        <Route path="/account" element={<MyAccount />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/coming-soon" element={<ComingSoon />} />

        {/* Corporate Routes */}
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/history" element={<History />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/brands/:id" element={<Brands />} /> {/* Placeholder for single brand if needed, or re-use grid */}
        <Route path="/wine-club" element={<WineClub />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:slug" element={<NewsPost />} />
        
        {/* Experience Routes */}
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/visit" element={<Experiences />} />
        <Route path="/experiences/emporium" element={<Emporium />} />
        <Route path="/experiences/cathedral-cellar" element={<CathedralCellar />} />
        <Route path="/experiences/house-of-fire" element={<HouseOfFire />} />
        <Route path="/experiences/conference-facilities" element={<ConferenceFacilities />} />
        <Route path="/experiences/events" element={<Events />} />
        <Route path="/experiences/cathedral-cellar-kitchen" element={<CathedralCellarKitchen />} />
        
        {/* Sub Pages */}
        <Route path="/careers" element={<Careers />} />
        <Route path="/executive-team" element={<ExecutiveTeam />} />
        <Route path="/sustainability" element={<Sustainability />} />
        
        {/* Fallbacks */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}
