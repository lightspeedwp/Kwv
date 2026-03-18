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
         className="twb-newsletter--hero relative py-16 md:py-20 overflow-hidden"
      >
         {/* Overlay */}
         <div className="absolute inset-0 bg-[var(--twb-color-ink)]/50 backdrop-blur-sm"></div>

       <Container variant="site" className="relative z-10 text-center">
          <Typography variant="h2" className="text-[var(--twb-color-text-on-dark)] uppercase font-serif tracking-widest text-3xl md:text-4xl mb-2 drop-shadow-md">
             {SITE_CONTENT.newsletter.title}
          </Typography>
          <Typography variant="body" className="text-[var(--twb-color-text-on-dark)]/90 text-lg mb-8 drop-shadow-md">
             {SITE_CONTENT.newsletter.subtitle}
          </Typography>

          <form className="max-w-5xl mx-auto flex flex-col md:flex-row gap-4 items-stretch">
             <label htmlFor="shop-newsletter-email" className="sr-only">Email</label>
             <input 
                type="email" 
                placeholder="email" 
                className="flex-1 bg-white/90 border-none p-4 text-[var(--twb-color-accent-plum)] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--twb-color-accent-gold)] lowercase"
                aria-label="Email"
                required
             />
             <button type="submit" className="bg-[var(--twb-color-text-primary)] text-[var(--twb-color-text-on-dark)] uppercase font-bold tracking-widest px-8 py-4 hover:bg-[var(--twb-color-accent-gold)] hover:text-[var(--twb-color-accent-plum)] transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-[var(--twb-color-accent-gold)] focus:ring-offset-2">
                Submit
             </button>
          </form>
       </Container>
     </section>
   );
};