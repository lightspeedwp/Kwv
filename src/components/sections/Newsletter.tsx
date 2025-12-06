import React from 'react';
import { Container } from '../common/Container';
import { Typography } from '../common/Typography';
import { COLORS } from '../../constants/theme';
import { Button } from '../common/Button';

export const Newsletter = () => {
  return (
    <section className="py-20 bg-[#2C1810] text-white relative overflow-hidden">
       {/* Background pattern or subtle gradient */}
       <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ backgroundImage: 'radial-gradient(circle at center, #DAA520 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
       </div>

       <Container variant="content" className="relative z-10 text-center">
         <Typography variant="h2" color={COLORS.gold} className="mb-4">Join the KWV Family</Typography>
         <Typography variant="bodyLarge" color={COLORS.white} className="mb-8 opacity-90 max-w-xl mx-auto">
           Subscribe to our newsletter for the latest news, exclusive offers, and invitations to special events.
         </Typography>

         <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
           <input 
             type="text" 
             placeholder="First Name" 
             className="flex-1 bg-white/10 border border-white/20 p-4 text-white placeholder-white/50 focus:outline-none focus:border-[#DAA520]"
           />
           <input 
             type="email" 
             placeholder="Email Address" 
             className="flex-1 bg-white/10 border border-white/20 p-4 text-white placeholder-white/50 focus:outline-none focus:border-[#DAA520]"
           />
           <Button variant="secondary" className="md:w-auto w-full">
             Subscribe
           </Button>
         </form>
         
         <Typography variant="caption" className="mt-4 opacity-50">
           By subscribing, you agree to our Terms & Conditions and Privacy Policy.
         </Typography>
       </Container>
    </section>
  );
};
