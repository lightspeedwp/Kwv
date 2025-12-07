import React from 'react';
import { Container } from '../../common/Container';
import { Typography } from '../../common/Typography';
import { Button } from '../../common/Button';

/**
 * ShopNewsletter Component
 * 
 * A full-width newsletter signup section with a background image.
 * Designed specifically for the Shop context (joining the "KWV Family").
 * Features:
 * - Background image with blur/overlay.
 * - Inline form fields (Name, Surname, Email).
 * - Custom styled input fields (transparent/white mix).
 */
export const ShopNewsletter: React.FC = () => {
  return (
    <section className="relative py-24 bg-gray-200">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1560493676-040ddb386265?q=80&w=2070&auto=format&fit=crop" 
            alt="Vineyards" 
            className="w-full h-full object-cover"
         />
         <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
      </div>

      <Container variant="site" className="relative z-10 text-center">
         <Typography variant="h2" className="text-white uppercase font-serif tracking-widest text-3xl md:text-4xl mb-2 drop-shadow-md">
            Join the KWV Family
         </Typography>
         <Typography variant="body" className="text-white/90 text-lg mb-8 drop-shadow-md">
            Sign up for our newsletter and keep up to date with all things KWV.
         </Typography>

         <form className="max-w-5xl mx-auto flex flex-col md:flex-row gap-4 items-stretch">
            <label htmlFor="shop-newsletter-name" className="sr-only">Name</label>
            <input 
               id="shop-newsletter-name"
               type="text" 
               placeholder="name" 
               className="flex-1 bg-white/90 border-none p-4 text-[#2C1810] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#DAA520] lowercase"
               aria-label="Name"
            />
            <label htmlFor="shop-newsletter-surname" className="sr-only">Surname</label>
            <input 
               id="shop-newsletter-surname"
               type="text" 
               placeholder="surname" 
               className="flex-1 bg-white/90 border-none p-4 text-[#2C1810] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#DAA520] lowercase"
               aria-label="Surname"
            />
            <label htmlFor="shop-newsletter-email" className="sr-only">Email</label>
            <input 
               id="shop-newsletter-email"
               type="email" 
               placeholder="email" 
               className="flex-1 bg-white/90 border-none p-4 text-[#2C1810] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#DAA520] lowercase"
               aria-label="Email"
            />
            <button type="submit" className="bg-[#333] text-white uppercase font-bold tracking-widest px-8 py-4 hover:bg-[#DAA520] hover:text-[#2C1810] transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-[#DAA520] focus:ring-offset-2">
               Submit
            </button>
         </form>
      </Container>
    </section>
  );
};
