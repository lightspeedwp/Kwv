import React from 'react';
import { Container } from '../common/Container';
import { Typography } from '../common/Typography';
import { COLORS } from '../../constants/theme';
import { Link } from 'react-router-dom';

export const ShopFooter: React.FC = () => {
  return (
    <footer className="pt-16 pb-8 bg-[#2C1810] text-white">
      <Container variant="site">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Product Categories */}
          <div>
            <Typography variant="h4" color={COLORS.gold} className="mb-6 uppercase tracking-wider text-sm">
              Shop Categories
            </Typography>
            <ul className="space-y-3 opacity-80">
              <li><Link to="/shop/wine" className="hover:text-[#DAA520] transition-colors">Wine</Link></li>
              <li><Link to="/shop/spirits" className="hover:text-[#DAA520] transition-colors">Spirits</Link></li>
              <li><Link to="/shop/mixers" className="hover:text-[#DAA520] transition-colors">Mixers</Link></li>
              <li><Link to="/shop/gifting" className="hover:text-[#DAA520] transition-colors">Gifting</Link></li>
            </ul>
          </div>

          {/* Column 2: Customer Care */}
          <div>
            <Typography variant="h4" color={COLORS.gold} className="mb-6 uppercase tracking-wider text-sm">
              Customer Care
            </Typography>
            <ul className="space-y-3 opacity-80">
              <li><Link to="/shop/faq" className="hover:text-[#DAA520] transition-colors">FAQ</Link></li>
              <li><Link to="/pricelist" className="hover:text-[#DAA520] transition-colors">Pricelist</Link></li>
              <li><Link to="/contact" className="hover:text-[#DAA520] transition-colors">Contact Us</Link></li>
              <li><Link to="/coming-soon" className="hover:text-[#DAA520] transition-colors">Coming Soon</Link></li>
            </ul>
          </div>

           {/* Column 3: About */}
          <div>
            <Typography variant="h4" color={COLORS.gold} className="mb-6 uppercase tracking-wider text-sm">
              About
            </Typography>
            <ul className="space-y-3 opacity-80">
              <li><Link to="/history" className="hover:text-[#DAA520] transition-colors">Our Story</Link></li>
              <li><Link to="/sustainability" className="hover:text-[#DAA520] transition-colors">Sustainability</Link></li>
              <li><Link to="/experiences" className="hover:text-[#DAA520] transition-colors">Experiences</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
             <Typography variant="h4" color={COLORS.gold} className="mb-6 uppercase tracking-wider text-sm">
              Stay Updated
            </Typography>
            <Typography variant="body" className="opacity-80 mb-4 text-sm text-white">
              Subscribe to our newsletter for the latest news and exclusive offers.
            </Typography>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-transparent border border-gray-600 p-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#DAA520]"
              />
              <button 
                type="submit" 
                className="bg-[#DAA520] text-[#2C1810] py-2 font-medium hover:bg-opacity-90 transition-colors uppercase text-sm tracking-wide"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col items-center text-center text-sm opacity-60">
           <Typography variant="caption" className="uppercase tracking-widest text-[#DAA520] mb-4">
             Alcohol not for sale to persons under the age of 18.
           </Typography>
           <p>&copy; {new Date().getFullYear()} KWV. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};
