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
import { Awards } from './pages/Awards';
import { News } from './pages/News';
import { NewsPost } from './pages/NewsPost';
import { Experiences } from './pages/Experiences';
import { Careers, ExecutiveTeam, Sustainability } from './pages/CompanyPages';
import { MyAccount } from './pages/MyAccount';
import { OrderConfirmation } from './pages/OrderConfirmation';
import { ScrollToTop } from './components/common/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* Load Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
      `}</style>
      
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Shop Routes */}
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/brands" element={<ShopBrands />} />
        <Route path="/shop/:category" element={<Shop />} />
        <Route path="/shop/:category/:subcategory" element={<Shop />} /> {/* Added deeper nesting support */}
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-received" element={<OrderConfirmation />} />
        <Route path="/account" element={<MyAccount />} />
        <Route path="/my-account" element={<MyAccount />} />

        {/* Corporate Routes */}
        <Route path="/about" element={<About />} />
        <Route path="/history" element={<History />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/brands/:id" element={<Brands />} /> {/* Placeholder for single brand if needed, or re-use grid */}
        <Route path="/wine-club" element={<WineClub />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:slug" element={<NewsPost />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/visit" element={<Experiences />} />
        
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
