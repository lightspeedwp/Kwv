import React from 'react';
import { Container } from '../../common/Container';
import { Typography } from '../../common/Typography';
import { Instagram } from 'lucide-react';

/**
 * ShopSocialSection Component
 * 
 * A simple footer-adjacent section encouraging social sharing.
 * Displays an Instagram icon and hashtags.
 */
export const ShopSocialSection: React.FC = () => {
  return (
    <section className="py-16 bg-white text-center">
       <Container variant="site">
          <div className="flex justify-center mb-6">
             <div className="w-12 h-12 rounded-full border-2 border-[#C19B76] flex items-center justify-center text-[#C19B76]">
                <Instagram size={24} />
             </div>
          </div>
          <Typography variant="h3" className="text-[#2C1810] uppercase font-bold text-lg md:text-xl tracking-wider mb-2">
             Share your experiences and adventures with KWV Online
          </Typography>
          <Typography variant="caption" className="text-[#C19B76] uppercase tracking-widest text-xs font-bold">
             #KWVONLINE #KWVSHOP #KWVEXPERIENCES #KWVEVENTS
          </Typography>
       </Container>
    </section>
  );
};
