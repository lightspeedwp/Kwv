import React from 'react';
import { Container } from '../components/common/Container';
import { Typography } from '../components/common/Typography';
import { Button } from '../components/common/Button';
import { Layout } from '../components/layout/Layout';
import { COLORS } from '../constants/theme';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { FAQSection } from '../components/sections/FAQSection';

const EXPERIENCES = [
  {
    title: 'Wine Tasting Emporium',
    desc: 'Sample our award-winning wines, brandies, and gins in our modern tasting room. Choose from a variety of curated pairings including our famous biltong and wine pairing.',
    image: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    details: 'Daily: 09:00 - 16:30'
  },
  {
    title: 'Cathedral Cellar Tour',
    desc: 'Step into history with a guided tour of our world-renowned Cathedral Cellar, built in 1930. Admire the vaulted ceilings and massive carved vats.',
    image: 'https://images.unsplash.com/photo-1597843797221-e0e1f74dd7e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    details: 'Mon - Fri: 10:00 & 14:00'
  },
  {
    title: 'House of Fire',
    desc: 'An interactive brandy experience dedicated to the legend of KWV Brandy. Learn about the art of distillation and blending from our experts.',
    image: 'https://images.unsplash.com/photo-1599309066463-b88307db3536?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    details: 'By Appointment Only'
  },
  {
    title: 'Art Gallery',
    desc: 'Explore our impressive collection of South African art, featuring works by Irma Stern, Jacob Pierneef, and other masters, housed within the Sensorium.',
    image: 'https://images.unsplash.com/photo-1561053720-76cd737463d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    details: 'Daily: 09:00 - 16:30'
  }
];

export const Experiences: React.FC = () => {
  return (
    <Layout>
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-[#2C1810]">
        <div className="absolute inset-0 opacity-60">
           <ImageWithFallback
              src="https://images.unsplash.com/photo-1536663815808-535e2280d2c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
              alt="KWV Paarl"
              className="w-full h-full object-cover"
           />
        </div>
        <div className="relative z-10 text-center max-w-3xl px-6">
          <Typography variant="h1" color={COLORS.white} className="mb-6">Visit Us in Paarl</Typography>
          <Typography variant="bodyLarge" color={COLORS.beige} className="mb-8">
            Immerse yourself in the world of KWV at our home in the heart of the Cape Winelands.
          </Typography>
          <Button size="lg" className="bg-[#DAA520] text-[#2C1810] hover:bg-white border-none">
            Book a Tasting
          </Button>
        </div>
      </div>

      {/* Intro */}
      <section className="py-20 bg-white">
        <Container variant="content" className="text-center">
           <Typography variant="h2" color={COLORS.wineRed} className="mb-6">A World Class Destination</Typography>
           <Typography variant="body" className="text-gray-600 text-lg">
             Whether you are a wine connoisseur, a brandy enthusiast, or simply looking for a beautiful setting to relax, the KWV Emporium offers a range of experiences to suit every palate.
           </Typography>
        </Container>
      </section>

      {/* Experiences Grid */}
      <section className="py-20 bg-[#F9F9F9]">
         <Container variant="site">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               {EXPERIENCES.map((exp, index) => (
                  <div key={index} className="bg-white shadow-lg rounded-sm overflow-hidden flex flex-col">
                     <div className="relative h-64">
                        <ImageWithFallback src={exp.image} alt={exp.title} className="w-full h-full object-cover" />
                     </div>
                     <div className="p-8 flex flex-col flex-grow">
                        <Typography variant="h3" color={COLORS.darkBrown} className="mb-4">{exp.title}</Typography>
                        <div className="flex items-center gap-2 text-[#8B0000] text-sm font-bold uppercase tracking-widest mb-4">
                           <Clock size={16} /> {exp.details}
                        </div>
                        <Typography variant="body" className="text-gray-600 mb-8 flex-grow">
                           {exp.desc}
                        </Typography>
                        <Button variant="outline" className="self-start border-[#2C1810] text-[#2C1810] hover:bg-[#2C1810] hover:text-white">
                           More Info
                        </Button>
                     </div>
                  </div>
               ))}
            </div>
         </Container>
      </section>

      {/* Visitor Info */}
      <section className="py-20 bg-[#2C1810] text-white">
         <Container variant="site">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div>
                  <Typography variant="h2" color={COLORS.gold} className="mb-8">Plan Your Visit</Typography>
                  <div className="space-y-6">
                     <div className="flex items-start gap-4">
                        <MapPin className="text-[#DAA520] mt-1" size={24} />
                        <div>
                           <Typography variant="h4" className="mb-1 text-white">Address</Typography>
                           <p className="text-gray-300">Kohler Street, Paarl, 7646, South Africa</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <Clock className="text-[#DAA520] mt-1" size={24} />
                        <div>
                           <Typography variant="h4" className="mb-1 text-white">Opening Hours</Typography>
                           <p className="text-gray-300">Monday - Saturday: 09:00 - 16:30</p>
                           <p className="text-gray-300">Sunday: 10:00 - 15:00</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <Phone className="text-[#DAA520] mt-1" size={24} />
                        <div>
                           <Typography variant="h4" className="mb-1 text-white">Contact</Typography>
                           <p className="text-gray-300">+27 21 807 3007</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <Mail className="text-[#DAA520] mt-1" size={24} />
                        <div>
                           <Typography variant="h4" className="mb-1 text-white">Email</Typography>
                           <p className="text-gray-300">emporium@kwv.co.za</p>
                        </div>
                     </div>
                  </div>
               </div>
               
               {/* Map Placeholder */}
               <div className="h-[400px] bg-gray-800 rounded-sm relative flex items-center justify-center">
                  <ImageWithFallback 
                     src="https://images.unsplash.com/photo-1524661135-423995f22d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
                     alt="Map" 
                     className="w-full h-full object-cover opacity-50"
                  />
                  <div className="absolute bg-white text-[#2C1810] px-6 py-3 rounded-md shadow-lg font-bold flex items-center gap-2">
                     <MapPin size={20} className="text-[#8B0000]" /> KWV Emporium
                  </div>
               </div>
            </div>
         </Container>
      </section>

      <FAQSection items={[
        { question: "Do I need to book in advance?", answer: "Booking is highly recommended for tastings and tours, especially during weekends and peak season." },
        { question: "Are children allowed?", answer: "Children are welcome at the Emporium. We offer non-alcoholic pairings and a kid-friendly menu at our deli." },
        { question: "Is the venue wheelchair accessible?", answer: "Yes, the KWV Emporium and most of our tasting areas are wheelchair accessible." }
      ]} />
    </Layout>
  );
};
