import React from 'react';
import { Container } from '../../common/Container';
import { Typography } from '../../common/Typography';
import { Instagram, Facebook, Twitter, Mail, Phone } from 'lucide-react';
import { COLORS } from '../../../constants/theme';

interface ContactFollowSectionProps {
  className?: string;
}

/**
 * ContactFollowSection Component
 * 
 * A reusable section displaying contact details and social media links.
 * Used in Shop FAQ and potentially other support pages.
 * 
 * Features:
 * - Social Media Icons (Instagram, Facebook, Twitter).
 * - Direct contact links (Email, Phone).
 * - Centered layout.
 */
export const ContactFollowSection: React.FC<ContactFollowSectionProps> = ({ className = '' }) => {
  return (
    <section className={`bg-white text-center ${className}`}>
       <Container variant="site">
          <div className="flex flex-col items-center">
             <Typography variant="h3" className="text-[#2C1810] uppercase font-bold text-lg md:text-xl tracking-wider mb-8">
                Follow Us & Get In Touch
             </Typography>
             
             <div className="flex gap-6 mb-8">
                <a href="https://instagram.com/kwvwines" aria-label="Instagram" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#2C1810] hover:text-white hover:border-[#2C1810] transition-colors">
                   <Instagram size={20} />
                </a>
                <a href="https://facebook.com/KWVwines" aria-label="Facebook" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#2C1810] hover:text-white hover:border-[#2C1810] transition-colors">
                   <Facebook size={20} />
                </a>
                <a href="https://twitter.com/KWVwines" aria-label="Twitter" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#2C1810] hover:text-white hover:border-[#2C1810] transition-colors">
                   <Twitter size={20} />
                </a>
             </div>

             <div className="flex flex-col md:flex-row gap-8 text-center md:text-left">
                <div className="flex items-center gap-3">
                   <Mail className="text-[#DAA520]" size={20} />
                   <a href="mailto:sales@kwv.co.za" className="text-gray-600 hover:text-[#2C1810]">sales@kwv.co.za</a>
                </div>
                <div className="flex items-center gap-3">
                   <Phone className="text-[#DAA520]" size={20} />
                   <a href="tel:0218073007" className="text-gray-600 hover:text-[#2C1810]">021 807 3007</a>
                </div>
             </div>
          </div>
       </Container>
    </section>
  );
};
