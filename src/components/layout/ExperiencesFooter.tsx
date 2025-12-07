import React from 'react';
import { Container } from '../common/Container';
import { Typography } from '../common/Typography';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { ShieldCheck, CreditCard } from 'lucide-react'; // Fallback icons for payment

export const ExperiencesFooter: React.FC = () => {
  return (
    <footer className="flex flex-col">
      <div className="flex flex-col lg:flex-row">
        {/* Left: Contact & Social */}
        <div className="bg-[#111111] text-white p-12 lg:w-1/3 flex flex-col justify-center text-center lg:text-left">
          <Typography variant="h3" className="text-[#DAA520] mb-4 uppercase tracking-wider text-lg">Contact Us</Typography>
          <div className="mb-8 space-y-1 text-sm text-gray-300">
            <p>Tel: 021 807 3007/8</p>
            <p>Email: info@kwvemporium.co.za</p>
            <p>GPS: 33°45' 47.7" S 18°57' 59.0" E</p>
          </div>

          <Typography variant="h3" className="text-[#DAA520] mb-4 uppercase tracking-wider text-lg">Follow Us</Typography>
          <div className="flex gap-4 justify-center lg:justify-start mb-8 text-white">
             <a href="#" className="hover:text-[#DAA520] transition-colors"><Facebook size={24} /></a>
             <a href="#" className="hover:text-[#DAA520] transition-colors"><Instagram size={24} /></a>
             <a href="#" className="hover:text-[#DAA520] transition-colors"><Twitter size={24} /></a>
          </div>
          
          <div className="mt-4 flex justify-center lg:justify-start">
            <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center">
                {/* Placeholder for award logo */}
                <span className="text-xs text-center leading-tight text-gray-400">Award Logo</span>
            </div>
          </div>
        </div>

        {/* Middle: Loyalty Corner */}
        <div className="bg-[#C5A059] text-[#2C1810] p-12 lg:w-1/3 flex flex-col justify-center text-center">
           <Typography variant="h3" className="text-white mb-6 uppercase tracking-wider text-xl font-bold">
             Loyalty Corner for Tour Operators
           </Typography>
           
           <p className="mb-6 font-medium">
             Visit us with your guests and receive a complimentary coffee!
           </p>
           
           <p className="mb-6 text-sm">
             Safe Secure Parking | Bus Parking<br/>
             Maximum of 40 people per group
           </p>
           
           <div className="font-bold">
             <p>Register here for latest news at KWV:</p>
             <a href="mailto:info@kwvemporium.co.za" className="underline">info@kwvemporium.co.za</a>
           </div>
        </div>

        {/* Right: Map */}
        <div className="lg:w-1/3 min-h-[300px] relative bg-gray-200">
           <ImageWithFallback 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
              alt="Map Location" 
              className="w-full h-full object-cover absolute inset-0"
           />
           {/* Map Marker Overlay (Visual only) */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="bg-[#8B0000] p-2 rounded-full shadow-lg border-2 border-white">
                 <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
           </div>
        </div>
      </div>

      {/* Bottom Bar: Payment & Legal */}
      <div className="bg-white border-t border-gray-100 py-6">
         <Container variant="site">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
               <div className="flex items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all">
                  <div className="flex items-center gap-2"><ShieldCheck size={24} /> <span className="text-xs font-bold">100% SECURE</span></div>
                  {/* Placeholders for payment logos */}
                  <span className="font-bold text-lg italic text-blue-600">VISA</span>
                  <span className="font-bold text-lg italic text-red-500">Mastercard</span>
                  <span className="font-bold text-lg italic text-red-600">PayFast</span>
               </div>
            </div>
         </Container>
      </div>
      
      <div className="bg-[#111111] py-4 text-center">
         <p className="text-[10px] text-gray-500 uppercase tracking-widest">
            <Link to="/" className="hover:text-[#DAA520] transition-colors font-bold">KWV Home</Link>
            <span className="mx-2">|</span>
            Terms & Conditions | Privacy Policy | POPI Policy 
            <span className="ml-4">Alcohol not for sale to persons under the age of 18</span>
         </p>
      </div>
    </footer>
  );
};