import React from 'react';
import { Container } from '../common/Container';
import { Typography } from '../common/Typography';
import { COLORS } from '../../constants/theme';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export const CorporateFooter: React.FC = () => {
  return (
    <footer className="pt-16 pb-8 bg-[#333333] text-white">
      <Container variant="site">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: About */}
          <div>
            <Typography variant="h3" color={COLORS.gold} className="mb-6">KWV</Typography>
            <Typography variant="body" className="opacity-80 mb-6 text-white">
              Leading South African wine & spirits producer with a distinguished heritage stretching back to 1918.
            </Typography>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <Typography variant="h4" color={COLORS.gold} className="mb-6 uppercase tracking-wider text-sm">
              Quick Links
            </Typography>
            <ul className="space-y-3 opacity-80">
              <li><Link to="/about" className="hover:text-[#DAA520] transition-colors">About KWV</Link></li>
              <li><Link to="/history" className="hover:text-[#DAA520] transition-colors">Our History</Link></li>
              <li><Link to="/brands" className="hover:text-[#DAA520] transition-colors">Our Brands</Link></li>
              <li><Link to="/sustainability" className="hover:text-[#DAA520] transition-colors">Sustainability</Link></li>
              <li><Link to="/news" className="hover:text-[#DAA520] transition-colors">News & Awards</Link></li>
              <li><Link to="/careers" className="hover:text-[#DAA520] transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-[#DAA520] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Social & Legal */}
          <div>
            <Typography variant="h4" color={COLORS.gold} className="mb-6 uppercase tracking-wider text-sm">
              Social & Legal
            </Typography>
            <div className="flex gap-4 mb-8">
              <Facebook size={24} className="hover:text-[#DAA520] cursor-pointer transition-colors" />
              <Instagram size={24} className="hover:text-[#DAA520] cursor-pointer transition-colors" />
              <Twitter size={24} className="hover:text-[#DAA520] cursor-pointer transition-colors" />
              <Linkedin size={24} className="hover:text-[#DAA520] cursor-pointer transition-colors" />
            </div>
            <ul className="space-y-3 opacity-80">
               <li><Link to="/terms" className="hover:text-[#DAA520] transition-colors">Terms & Conditions</Link></li>
               <li><Link to="/privacy" className="hover:text-[#DAA520] transition-colors">Privacy Policy</Link></li>
               <li><Link to="/popi" className="hover:text-[#DAA520] transition-colors">POPI Act</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8 flex justify-between items-center text-sm opacity-60">
          <p>&copy; {new Date().getFullYear()} KWV. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};
