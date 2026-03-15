import React, { useState } from 'react';
import { Container } from '../common/Container';
import { Typography } from '../common/Typography';
import { Button } from '../common/Button';
import { HandDrawnUnderline } from '../decorative/HandDrawnUnderline';
import { PaperTexture } from '../decorative/PaperTexture';

interface NewsletterProps {
  title?: string;
  description?: string;
  showUnderline?: boolean;
  className?: string;
}

/**
 * Newsletter Component
 * 
 * A full-width email signup section for the Handcrafted Wines newsletter.
 * Appears in footer and as standalone section on key pages.
 * 
 * Features:
 * - Email and first name input fields
 * - Dark background with subtle pattern
 * - Organic rounded inputs
 * - Primary CTA button (gold on dark background)
 * - Optional hand-drawn underline on title
 * - Form validation with error states
 * - Success/error message handling
 * - Design token integration (colors, spacing, shadows, radii)
 * - WCAG AA compliant focus states
 * - Mobile-optimized layout (stacked on mobile)
 * - Dark mode support
 * 
 * @package HandcraftedWines
 * @version 2.0
 * 
 * @param {NewsletterProps} props - Newsletter configuration
 * @returns {JSX.Element} Rendered newsletter signup section
 */
export const Newsletter: React.FC<NewsletterProps> = ({
  title = "Join the Handcrafted Wines Family",
  description = "Subscribe to our newsletter for the latest news, exclusive offers, and invitations to special events at the farm.",
  showUnderline = true,
  className = ''
}) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission - in production, connect to email service
    console.log('Newsletter signup:', { firstName, email });
    setStatus('success');
    setEmail('');
    setFirstName('');
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section className={`py-[var(--twb-spacing-section-y)] bg-[var(--twb-color-ink)] dark:bg-[var(--twb-color-bg-tertiary)] text-white dark:text-[var(--twb-color-text-primary)] relative overflow-hidden border-t border-transparent dark:border-[var(--twb-border-tertiary)] ${className}`}>
       {/* Paper texture */}
       <PaperTexture intensity="subtle" opacity={0.06} />
       
       {/* Background pattern */}
       <div className="absolute inset-0 opacity-10 dark:opacity-5 pointer-events-none" 
            style={{ backgroundImage: 'radial-gradient(circle at center, #c8a96b 1px, transparent 1px)', backgroundSize: '20px 20px' }}
            aria-hidden="true">
       </div>

       <Container variant="content" className="relative z-10 text-center">
         <div className="mb-[var(--twb-spacing-8)]">
           <Typography variant="h2" className="text-[var(--twb-color-gold)] mb-[var(--twb-spacing-2)] font-[number:var(--twb-font-weight-bold)]">
             {title}
           </Typography>
           
           {showUnderline && (
             <div className="flex justify-center mt-[var(--twb-spacing-2)]" aria-hidden="true">
               <HandDrawnUnderline variant="brush" width={120} />
             </div>
           )}
           
           <Typography variant="bodyLarge" className="text-white dark:text-[var(--twb-color-text-muted)] mt-[var(--twb-spacing-4)] opacity-90 max-w-xl mx-auto">
             {description}
           </Typography>
         </div>

         <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-[var(--twb-spacing-4)] max-w-2xl mx-auto items-end">
           <div className="flex-1 w-full text-left">
             <label 
               htmlFor="newsletter-name" 
               className="block text-xs font-[number:var(--twb-font-weight-bold)] uppercase tracking-widest text-[var(--twb-color-gold)] mb-[var(--twb-spacing-2)] ml-1"
             >
               First Name
             </label>
             <input 
               id="newsletter-name"
               type="text" 
               value={firstName}
               onChange={(e) => setFirstName(e.target.value)}
               placeholder="First Name" 
               className="w-full bg-white/10 dark:bg-[var(--twb-color-bg-secondary)] border border-white/20 dark:border-[var(--twb-border-primary)] p-[var(--twb-spacing-4)] rounded-[var(--twb-radius-input)] text-white dark:text-[var(--twb-color-text-primary)] placeholder-white/50 dark:placeholder-[var(--twb-color-text-muted)] focus:outline-none focus:border-[var(--twb-color-gold)] focus:ring-2 focus:ring-[var(--twb-color-gold)] transition-all"
               required
             />
           </div>
           <div className="flex-1 w-full text-left">
             <label 
               htmlFor="newsletter-email" 
               className="block text-xs font-[number:var(--twb-font-weight-bold)] uppercase tracking-widest text-[var(--twb-color-gold)] mb-[var(--twb-spacing-2)] ml-1"
             >
               Email Address
             </label>
             <input 
               id="newsletter-email"
               type="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               placeholder="your@email.com" 
               className="w-full bg-white/10 dark:bg-[var(--twb-color-bg-secondary)] border border-white/20 dark:border-[var(--twb-border-primary)] p-[var(--twb-spacing-4)] rounded-[var(--twb-radius-input)] text-white dark:text-[var(--twb-color-text-primary)] placeholder-white/50 dark:placeholder-[var(--twb-color-text-muted)] focus:outline-none focus:border-[var(--twb-color-gold)] focus:ring-2 focus:ring-[var(--twb-color-gold)] transition-all"
               required
             />
           </div>
           <Button 
             variant="secondary" 
             className="md:w-auto w-full h-[58px]" 
             type="submit"
           >
             Subscribe
           </Button>
         </form>
         
         {status === 'success' && (
           <div className="mt-[var(--twb-spacing-4)] text-[var(--twb-color-gold)] font-[number:var(--twb-font-weight-medium)]" role="status">
             ✓ Thanks for subscribing! Check your inbox soon.
           </div>
         )}
         
         {status === 'error' && (
           <div className="mt-[var(--twb-spacing-4)] text-red-400" role="alert">
             Something went wrong. Please try again.
           </div>
         )}
         
         <Typography variant="caption" className="mt-[var(--twb-spacing-4)] opacity-50 dark:text-[var(--twb-color-text-muted)]">
           By subscribing, you agree to our Terms & Conditions and Privacy Policy.
         </Typography>
       </Container>
    </section>
  );
};