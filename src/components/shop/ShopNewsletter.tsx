import React from 'react';
import { Container } from '../common/Container';
import { Typography } from '../common/Typography';
import { Button } from '../common/Button';

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
            <input 
               type="text" 
               placeholder="name" 
               className="flex-1 bg-white/90 border-none p-4 text-[#2C1810] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#DAA520] lowercase"
            />
            <input 
               type="text" 
               placeholder="surname" 
               className="flex-1 bg-white/90 border-none p-4 text-[#2C1810] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#DAA520] lowercase"
            />
            <input 
               type="email" 
               placeholder="email" 
               className="flex-1 bg-white/90 border-none p-4 text-[#2C1810] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#DAA520] lowercase"
            />
            <button className="bg-[#333] text-white uppercase font-bold tracking-widest px-8 py-4 hover:bg-[#DAA520] hover:text-[#2C1810] transition-colors text-sm">
               Submit
            </button>
         </form>
      </Container>
    </section>
  );
};
