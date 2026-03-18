import React from 'react';
import { Typography } from '../../common/Typography';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Logo } from '../../common/Logo';
import { SITE_CONTENT } from '../../../data/site-content';

/**
 * ShopInfoFooter Component
 * 
 * A specialized footer section for the Shop layout.
 * Features:
 * - Three-column layout:
 *   1. Contact Info & Social Links (Dark background).
 *   2. Service Value Propositions (Gold background).
 *   3. Interactive Map.
 * - Payment method icons strip at the bottom.
 */
export const ShopInfoFooter: React.FC = () => {
  return (
    <div className="w-full">
       <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {/* Column 1: Contact & Social (Black/Dark) */}
          <div className="bg-[var(--twb-color-bg-inverse)] text-[var(--twb-color-text-on-dark)] p-12 md:w-1/3 flex flex-col justify-center items-center text-center">
              <div className="mb-12">
                 <Typography variant="h4" className="text-[var(--twb-color-gold)] uppercase tracking-widest text-sm font-bold mb-6">
                    Contact Us
                 </Typography>
                 <p className="text-sm text-gray-400 leading-relaxed">
                    Tel: {SITE_CONTENT.contact.phone}<br/>
                    Email: {SITE_CONTENT.contact.email}<br/>
                    {SITE_CONTENT.contact.address.full}
                 </p>
              </div>
              
              <div>
                 <Typography variant="h4" className="text-[var(--twb-color-gold)] uppercase tracking-widest text-sm font-bold mb-6">
                    Follow Us
                 </Typography>
                 <div className="flex gap-6 justify-center">
                    <Facebook className="text-[var(--twb-color-text-on-dark)] hover:text-[var(--twb-color-gold)] cursor-pointer" size={20} />
                    <Instagram className="text-[var(--twb-color-text-on-dark)] hover:text-[var(--twb-color-gold)] cursor-pointer" size={20} />
                    <Twitter className="text-[var(--twb-color-text-on-dark)] hover:text-[var(--twb-color-gold)] cursor-pointer" size={20} />
                 </div>
              </div>
          </div>

          {/* Column 2: Service Info (Gold/Brown) */}
          <div className="bg-[var(--twb-color-gold)] text-[var(--twb-color-plum)] p-12 md:w-1/3 flex flex-col justify-center items-center text-center">
             <Typography variant="h4" className="text-[var(--twb-color-text-on-dark)] uppercase tracking-widest text-sm font-bold mb-8">
                Our Excellent Service Includes
             </Typography>
             <ul className="text-sm font-bold uppercase tracking-wider space-y-4 leading-relaxed">
                <li>Delivery within 3 Working days</li>
                <li>Safe & Secure</li>
                <li>3 ways to pay</li>
                <li>Affordable Delivery Fee</li>
                <li>Click & Collect after 72 hours</li>
             </ul>
          </div>

          {/* Column 3: Map */}
          <div className="md:w-1/3 relative min-h-[300px]">
             <iframe 
               src={SITE_CONTENT.contact.mapEmbedUrl}
               width="100%" 
               height="100%" 
               style={{ border: 0, filter: 'grayscale(0.3)' }} 
               allowFullScreen={false} 
               loading="lazy"
               className="absolute inset-0"
               title="Handcrafted Wines Location Map"
             ></iframe>
          </div>
       </div>
       
       {/* Payment Strip */}
       <div className="bg-white py-6 border-t border-gray-100 flex justify-center items-center gap-8 flex-wrap px-4">
          <div className="h-8 opacity-60 grayscale hover:grayscale-0 transition-all">
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-full object-contain" />
          </div>
          <div className="h-8 opacity-60 grayscale hover:grayscale-0 transition-all">
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-full object-contain" />
          </div>
          <div className="h-6 opacity-60 grayscale hover:grayscale-0 transition-all">
             <span className="font-bold text-gray-600 text-xl italic">PayFast</span>
          </div>
          <div className="h-6 opacity-60 grayscale hover:grayscale-0 transition-all">
             <span className="font-bold text-blue-600 text-xl">SnapScan</span>
          </div>
       </div>
    </div>
  );
};