import React from 'react';
import { Container } from '../common/Container';
import { Typography } from '../common/Typography'
;
import { COLORS } from '../../constants/theme';
import { Link } from 'react-router';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

/**
 * CorporateFooter Component
 * 
 * The standard footer for the Corporate (Main) site.
 * 
 * Features:
 * - 4-column grid layout (Brand/Social, Company, Experiences, Explore/Legal).
 * - Social media links (Facebook, Instagram, Twitter, LinkedIn).
 * - Comprehensive site map links.
 * - Copyright and "Enjoy Responsibly" legal text.
 */
export const CorporateFooter: React.FC = () => {
  return (
    <footer className="pt-16 pb-8 bg-[#2C1810] text-white">
      <Container variant="site">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand & Social */}
          <div>
            <Link to="/" className="block mb-6 focus:outline-none focus:ring-2 focus:ring-[#DAA520] rounded-sm">
               <Typography variant="h3" color={COLORS.gold} className="hover:text-[#DAA520] transition-colors inline-block font-serif">KWV</Typography>
            </Link>
            <Typography variant="body" className="text-gray-300 mb-8 max-w-xs">
              Leading South African wine & spirits producer with a distinguished heritage stretching back to 1918.
            </Typography>
            <div className="flex gap-4 text-white">
              <a href="https://facebook.com/KWVwines" aria-label="Facebook" className="hover:text-[#DAA520] transition-colors focus:outline-none focus:ring-2 focus:ring-[#DAA520] rounded-full p-1"><Facebook size={20} /></a>
              <a href="https://instagram.com/kwvwines" aria-label="Instagram" className="hover:text-[#DAA520] transition-colors focus:outline-none focus:ring-2 focus:ring-[#DAA520] rounded-full p-1"><Instagram size={20} /></a>
              <a href="https://twitter.com/KWVwines" aria-label="Twitter" className="hover:text-[#DAA520] transition-colors focus:outline-none focus:ring-2 focus:ring-[#DAA520] rounded-full p-1"><Twitter size={20} /></a>
              <a href="https://linkedin.com/company/kwv" aria-label="LinkedIn" className="hover:text-[#DAA520] transition-colors focus:outline-none focus:ring-2 focus:ring-[#DAA520] rounded-full p-1"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Column 2: Our Company */}
          <div>
            <Typography variant="h4" color={COLORS.gold} className="mb-6 uppercase tracking-wider text-sm font-bold">
              Our Company
            </Typography>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-white transition-colors focus:outline-none focus:text-white focus:underline">About Us</Link></li>
              <li><Link to="/history" className="hover:text-white transition-colors focus:outline-none focus:text-white focus:underline">Our History</Link></li>
              <li><Link to="/executive-team" className="hover:text-white transition-colors focus:outline-none focus:text-white focus:underline">Executive Team</Link></li>
              <li><Link to="/sustainability" className="hover:text-white transition-colors focus:outline-none focus:text-white focus:underline">Sustainability</Link></li>
              <li><Link to="/global-distribution" className="hover:text-white transition-colors focus:outline-none focus:text-white focus:underline">Global Distribution</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors focus:outline-none focus:text-white focus:underline">Careers</Link></li>
              <li><Link to="/awards" className="hover:text-white transition-colors focus:outline-none focus:text-white focus:underline">Awards</Link></li>
              <li><Link to="/news" className="hover:text-white transition-colors focus:outline-none focus:text-white focus:underline">News & Media</Link></li>
            </ul>
          </div>

          {/* Column 3: Experiences & Support */}
          <div>
            <Typography variant="h4" color={COLORS.gold} className="mb-6 uppercase tracking-wider text-sm font-bold">
              Experiences & Support
            </Typography>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/experiences" className="hover:text-white transition-colors focus:outline-none focus:text-white focus:underline">Visit Us</Link></li>
              <li><Link to="/experiences/emporium" className="hover:text-white transition-colors focus:outline-none focus:text-white focus:underline">KWV Emporium</Link></li>
              <li><Link to="/events" className="hover:text-white transition-colors focus:outline-none focus:text-white focus:underline">Events</Link></li>
              <li><Link to="/wine-club" className="hover:text-white transition-colors focus:outline-none focus:text-white focus:underline">Wine Club</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors focus:outline-none focus:text-white focus:underline">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors focus:outline-none focus:text-white focus:underline">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4: Explore & Legal */}
          <div>
            <Typography variant="h4" color={COLORS.gold} className="mb-6 uppercase tracking-wider text-sm font-bold">
              Explore & Legal
            </Typography>
            <ul className="space-y-3 text-sm text-gray-300 mb-8">
               <li><Link to="/shop" className="hover:text-white transition-colors font-medium text-[#DAA520] focus:outline-none focus:text-white focus:underline">Online Shop</Link></li>
               <li><Link to="/brands" className="hover:text-white transition-colors focus:outline-none focus:text-white focus:underline">Our Brands</Link></li>
            </ul>
            
            <Typography variant="h4" color={COLORS.gold} className="mb-4 uppercase tracking-wider text-xs font-bold opacity-70">
              Legal
            </Typography>
            <ul className="space-y-2 text-xs text-gray-400">
               <li><Link to="/terms" className="hover:text-white transition-colors focus:outline-none focus:text-white focus:underline">Terms & Conditions</Link></li>
               <li><Link to="/policies" className="hover:text-white transition-colors focus:outline-none focus:text-white focus:underline">Privacy Policy</Link></li>
               <li><Link to="/policies" className="hover:text-white transition-colors focus:outline-none focus:text-white focus:underline">PAIA Manual</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <p>&copy; {new Date().getFullYear()} KWV. All rights reserved.</p>
          <div className="flex gap-6 text-center md:text-right">
            <span className="uppercase tracking-widest">Enjoy Responsibly</span>
            <span className="uppercase tracking-widest">Not for Sale to Persons Under 18</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};