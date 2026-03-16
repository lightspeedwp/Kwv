import React from 'react';
import { Container } from '../../common/Container';
import { Typography } from '../../common/Typography';
import { SITE_CONTENT } from '../../../data/site-content';

/**
 * ShopNewsletter Component
 * 
 * A full-width newsletter signup section with a background image.
 * Designed specifically for the Shop context.
 * Features:
 * - Background image with blur/overlay.
 * - Centered headline and form.
 * - Email input + submit button.
 * - WCAG 1.3.5 autocomplete attribute for email field.
 */

export const ShopNewsletter = () => {
   return (
      <section 
         className="relative py-16 md:py-20 overflow-hidden"
         style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
         }}
      >
         {/* Overlay */}
         <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

       <Container variant="site" className="relative z-10 text-center">
          <Typography variant="h2" className="text-white uppercase font-serif tracking-widest text-3xl md:text-4xl mb-2 drop-shadow-md">
             {SITE_CONTENT.newsletter.title}
          </Typography>
          <Typography variant="body" className="text-white/90 text-lg mb-8 drop-shadow-md">
             {SITE_CONTENT.newsletter.subtitle}
          </Typography>

          <form className="max-w-5xl mx-auto flex flex-col md:flex-row gap-4 items-stretch">
             <label htmlFor="shop-newsletter-email" className="sr-only">Email</label>
             <input 
                id="shop-newsletter-email"
                type="email" 
                placeholder="email" 
                className="flex-1 bg-white/90 border-none p-4 text-[#2C1810] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#DAA520] lowercase"
                aria-label="Email"
                autoComplete="email"
             />
             <button type="submit" className="bg-[#333] text-white uppercase font-bold tracking-widest px-8 py-4 hover:bg-[#DAA520] hover:text-[#2C1810] transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-[#DAA520] focus:ring-offset-2">
                Submit
             </button>
          </form>
       </Container>
     </section>
   );
};