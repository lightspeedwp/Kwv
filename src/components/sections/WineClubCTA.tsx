import React from 'react';
import { Container } from '../common/Container';
import { Typography } from '../common/Typography';
import { Button } from '../common/Button';
import { COLORS } from '../../constants/theme';
import { Link } from 'react-router-dom';

/**
 * WineClubCTA Component
 * 
 * A promotional section driving users to join the Wine Club.
 * Features:
 * - Split layout (Text + Image).
 * - Bulleted list of benefits.
 * - "Join the Club" CTA.
 * - Distinctive beige background (`#F5F5DC`).
 */
export const WineClubCTA = () => {
  return (
    <section className="py-20 bg-[#F5F5DC]">
      <Container variant="site">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 order-2 md:order-1">
             <Typography variant="caption" className="uppercase tracking-widest mb-2 text-[#8B0000]">
               Exclusive Access
             </Typography>
             <Typography variant="h2" color={COLORS.darkBrown} className="mb-6">
               KWV Wine Club Edition 11
             </Typography>
             <Typography variant="bodyLarge" className="mb-6 text-gray-700">
               Join the inner circle of wine enthusiasts. Receive monthly curated selections of our finest vintages, delivered straight to your door.
             </Typography>
             
             <ul className="space-y-3 mb-8">
               {['Monthly curated wine packs', '15% discount on all wine purchases', 'Exclusive invitations to tastings', 'Free delivery on orders over R1000'].map((item, i) => (
                 <li key={i} className="flex items-center gap-3">
                   <span className="w-1.5 h-1.5 rounded-full bg-[#DAA520]"></span>
                   <span className="text-gray-700">{item}</span>
                 </li>
               ))}
             </ul>

             <Link to="/wine-club">
               <Button variant="hero" size="lg" className="min-w-[200px]">
                 Join the Club
               </Button>
             </Link>
          </div>
          
          <div className="flex-1 order-1 md:order-2 h-[400px] w-full relative overflow-hidden">
             <img 
                src="https://images.unsplash.com/photo-1595591639066-25b7c61e17e2?auto=format&fit=crop&q=80" 
                alt="Wine Club Collection" 
                className="absolute inset-0 w-full h-full object-cover"
             />
          </div>
        </div>
      </Container>
    </section>
  );
};
