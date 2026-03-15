import React from 'react';
import { Container } from '../../common/Container';
import { Typography } from '../../common/Typography';
import { SITE_CONTENT } from '../../../data/site-content';

export const ShopSocialSection = () => {
   return (
      <section className="bg-[#FFF8E7] py-12 md:py-16">
        <Container variant="site" className="text-center">
           <div className="flex flex-col items-center justify-center mb-6">
              <div className="size-12 bg-[#DAA520] rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2C1810" viewBox="0 0 256 256">
                  <rect width="256" height="256" fill="none"></rect>
                  <circle cx="128" cy="80" r="40" opacity="0.2"></circle>
                  <circle cx="128" cy="80" r="40" fill="none" stroke="#2C1810" strokeMiterlimit="10" strokeWidth="16"></circle>
                  <path d="M208,128H48a16,16,0,0,0-16,16v32a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V144A16,16,0,0,0,208,128Z" fill="none" stroke="#2C1810" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                  <path d="M120,184v24a16,16,0,0,0,16,16h0a16,16,0,0,0,16-16V184" fill="none" stroke="#2C1810" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                </svg>
              </div>
           </div>
           <Typography variant="h3" className="text-[#2C1810] uppercase font-bold text-lg md:text-xl tracking-wider mb-2">
              {SITE_CONTENT.shop.socialHeading}
           </Typography>
           <Typography variant="caption" className="text-[#C19B76] uppercase tracking-widest text-xs font-bold">
              {SITE_CONTENT.social.hashtagsShop}
           </Typography>
        </Container>
      </section>
   );
};