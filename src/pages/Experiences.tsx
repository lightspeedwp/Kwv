import React from 'react';
import { Container } from '../components/common/Container';
import { Typography } from '../common/Typography';
import { Button } from '../common/Button';
import { Layout } from '../components/layout/Layout';
import { COLORS } from '../constants/theme';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { KWVExperiencesLogo } from '../components/common/Logo';

const EXPERIENCE_CARDS = [
  {
    id: 'emporium',
    title: 'KWV EMPORIUM',
    cta: 'BOOK A TASTING',
    link: '/experiences/emporium',
    desc: "Visit the KWV Emporium for a cellar tour and experience our winemaking process. Don't forget to enjoy a wine or brandy tasting and pairing. Experience KWV!",
    image: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    logoText: "KWV EMPORIUM"
  },
  {
    id: 'cellar',
    title: 'CATHEDRAL CELLAR',
    cta: 'BOOK A TOUR',
    link: '/experiences/cathedral-cellar',
    desc: "Visit our historical Cathedral Cellar. This walking tour will take you on a storytelling journey through the cellar with an opportunity to taste some of KWV's best and award-winning wines. Experience KWV!",
    image: 'https://images.unsplash.com/photo-1597843797221-e0e1f74dd7e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    logoText: "CATHEDRAL CELLAR",
    subText: "A Legacy Engraved"
  },
  {
    id: 'hof',
    title: 'HOUSE OF FIRE',
    cta: 'VISIT HOF',
    link: '/experiences/house-of-fire',
    desc: "The House of Fire celebrates the creation of brandy. We invite you to join us on a journey that will ignite the senses.",
    image: 'https://images.unsplash.com/photo-1613325245242-1c5069a82383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    logoText: "H°F",
    subText: "HOUSE OF FIRE BY KWV"
  },
  {
    id: 'events',
    title: 'KWV EVENTS',
    cta: 'VIEW EVENTS',
    link: '/experiences/events',
    desc: "Visit the KWV Emporium for a cellar tour and experience our winemaking process. Don't forget to enjoy a wine or brandy tasting and pairing. Experience KWV!",
    image: 'https://images.unsplash.com/photo-1519671482538-eb2335b9ea9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    logoText: "KWV EVENTS"
  }
];

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1559563362-c667ba5f5480?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1561053720-76cd737463d3?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1528823872057-9c018a7a7553?auto=format&fit=crop&w=600&q=80"
];

export const Experiences: React.FC = () => {
  return (
    <Layout>
      {/* Header Section */}
      <section className="bg-white pt-16 pb-12 text-center">
         <Container variant="content">
            <Typography variant="h1" className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C1810] uppercase tracking-wide">
               THE KWV EXPERIENCE
            </Typography>
            <Typography variant="body" className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
               KWV is situated in the heart of the Cape Winelands, in the picturesque town of Paarl, where it offers a range of products and experiences. Join us for a memorable experience!
            </Typography>
         </Container>
      </section>

      {/* Experiences Grid */}
      <section className="bg-white pb-20">
         <Container variant="site">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {EXPERIENCE_CARDS.map((card) => (
                  <div key={card.id} className="flex flex-col">
                     {/* Image Card */}
                     <div className="relative aspect-[3/5] w-full overflow-hidden mb-0 group cursor-pointer">
                        <ImageWithFallback 
                           src={card.image} 
                           alt={card.title} 
                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        />
                        {/* Logo Overlay Simulation */}
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                           <div className="bg-white/90 backdrop-blur-sm p-6 text-center min-w-[140px] shadow-lg">
                              <span className={`block text-[#2C1810] font-serif font-bold ${card.id === 'hof' ? 'text-4xl' : 'text-xl uppercase tracking-widest'} leading-none mb-1`}>
                                 {card.logoText}
                              </span>
                              {card.subText && (
                                 <span className="block text-[10px] uppercase tracking-widest text-[#8B0000] mt-2 border-t border-[#8B0000] pt-2">
                                    {card.subText}
                                 </span>
                              )}
                           </div>
                        </div>
                     </div>
                     
                     {/* Button */}
                     <Link to={card.link} className="block">
                        <Button 
                           fullWidth 
                           className="bg-[#C5A059] hover:bg-[#b08d4a] text-white font-bold uppercase tracking-widest rounded-none py-4 text-sm mb-6"
                        >
                           {card.cta}
                        </Button>
                     </Link>
                     
                     {/* Description */}
                     <p className="text-center text-gray-600 text-sm leading-relaxed px-2">
                        {card.desc}
                     </p>
                  </div>
               ))}
            </div>
         </Container>
      </section>

      {/* Voucher Banner */}
      <section className="bg-[#EBEBEB] py-16">
         <Container variant="site">
            <div className="flex flex-col md:flex-row items-stretch bg-[#E5E5E5]">
               {/* Left Image (Distillery/Copper) */}
               <div className="w-full md:w-1/4 min-h-[200px] relative">
                  <ImageWithFallback 
                     src="https://images.unsplash.com/photo-1613325245242-1c5069a82383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600" 
                     alt="Distillery" 
                     className="w-full h-full object-cover"
                  />
                  <div className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/90 p-2 shadow-lg">
                      <div className="w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-gray-100 rounded-full">
                          <ChevronLeft size={16} />
                      </div>
                  </div>
               </div>

               {/* Middle Content */}
               <div className="w-full md:w-1/2 p-8 md:p-12 text-center flex flex-col justify-center items-center bg-[#EBEBEB]">
                  <div className="border border-[#C5A059] p-4 inline-block mb-4">
                     <span className="block text-2xl font-bold text-[#C5A059] leading-none">H°F</span>
                     <span className="block text-[8px] uppercase tracking-widest mt-1">HOUSE OF FIRE</span>
                  </div>
                  
                  <Typography variant="h2" className="font-handwriting text-[#C5A059] text-5xl md:text-6xl mb-2 rotate-[-2deg]" style={{ fontFamily: 'cursive' }}>
                     Gift a Voucher
                  </Typography>
                  
                  <Typography variant="h3" className="uppercase tracking-widest font-bold text-[#2C1810] text-xl md:text-2xl mb-2">
                     A BRANDY BLENDING SESSION
                  </Typography>
                  
                  <p className="uppercase text-sm tracking-wider text-gray-600 mb-6">
                     WITH OUR BRANDY EXPERT AT KWV HOUSE OF FIRE!
                  </p>
                  
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                     Blend and bottle your own KWV brandy with a <span className="underline">personalised</span> label.
                  </p>
                  
                  <Button className="bg-[#A0522D] hover:bg-[#8B4513] text-white uppercase tracking-widest px-8 py-3 rounded-sm text-sm">
                     BOOK YOUR VOUCHER
                  </Button>
               </div>

               {/* Right Image (Brandy Glass) */}
               <div className="w-full md:w-1/4 min-h-[200px] relative">
                  <ImageWithFallback 
                     src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600" 
                     alt="Brandy Glass" 
                     className="w-full h-full object-cover"
                  />
                  <div className="absolute top-1/2 right-4 -translate-y-1/2 text-center">
                       <div className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center cursor-pointer hover:bg-white shadow ml-auto">
                          <ChevronRight size={16} />
                       </div>
                  </div>
                  <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                      <KWVExperiencesLogo className="h-8 w-auto drop-shadow-md" />
                  </div>
               </div>
            </div>
         </Container>
      </section>

      {/* Image Gallery */}
      <section className="bg-white py-20">
         <Container variant="site">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
               {GALLERY_IMAGES.map((img, i) => (
                  <div key={i} className="aspect-square overflow-hidden cursor-pointer group">
                     <ImageWithFallback 
                        src={img} 
                        alt={`Gallery ${i}`} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                     />
                  </div>
               ))}
            </div>
            <div className="flex justify-between items-center mt-8">
                <button className="p-2 hover:bg-gray-100 rounded-full"><ChevronLeft /></button>
                <button className="p-2 hover:bg-gray-100 rounded-full"><ChevronRight /></button>
            </div>
         </Container>
      </section>
    </Layout>
  );
};