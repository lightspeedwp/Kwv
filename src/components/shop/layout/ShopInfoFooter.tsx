import React from 'react';
import { Typography } from '../../common/Typography';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { KWVShopLogo } from '../../common/Logo';

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
       <div className="flex flex-col lg:flex-row min-h-[400px]">
          {/* Column 1: Contact & Social (Black/Dark) */}
          <div className="bg-[#111] text-white p-12 lg:w-1/3 flex flex-col justify-center items-center text-center">
              <div className="mb-12">
                 <Typography variant="h4" className="text-[#C19B76] uppercase tracking-widest text-sm font-bold mb-6">
                    Contact Us
                 </Typography>
                 <p className="text-sm text-gray-400 leading-relaxed">
                    Tel: +27 21 807 3007<br/>
                    Email: hello@thewirebrand.co.za<br/>
                    GPS: 33°45'45.17" S, 18°57'58.42" E
                 </p>
              </div>
              
              <div>
                 <Typography variant="h4" className="text-[#C19B76] uppercase tracking-widest text-sm font-bold mb-6">
                    Follow Us
                 </Typography>
                 <div className="flex gap-6 justify-center">
                    <Facebook className="text-white hover:text-[#C19B76] cursor-pointer" size={20} />
                    <Instagram className="text-white hover:text-[#C19B76] cursor-pointer" size={20} />
                    <Twitter className="text-white hover:text-[#C19B76] cursor-pointer" size={20} />
                 </div>
              </div>
          </div>

          {/* Column 2: Service Info (Gold/Brown) */}
          <div className="bg-[#C19B76] text-[#2C1810] p-12 lg:w-1/3 flex flex-col justify-center items-center text-center">
             <Typography variant="h4" className="text-white uppercase tracking-widest text-sm font-bold mb-8">
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
          <div className="lg:w-1/3 relative min-h-[300px]">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.107693214865!2d18.96402331520387!3d-33.76801668068368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcdadcf7a06a71d%3A0x521940687263680!2sKWV%20Emporium!5e0!3m2!1sen!2sza!4v1625000000000!5m2!1sen!2sza" 
               width="100%" 
               height="100%" 
               style={{ border: 0, filter: 'grayscale(0.3)' }} 
               allowFullScreen={false} 
               loading="lazy"
               className="absolute inset-0"
               title="KWV Map"
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