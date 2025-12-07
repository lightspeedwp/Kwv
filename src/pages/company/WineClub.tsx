import React from 'react';
import { Container } from '../../components/common/Container';
import { Typography } from '../../components/common/Typography';
import { Button } from '../../components/common/Button';
import { Layout } from '../../components/layout/Layout';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { KWVLogo } from '../../components/common/Logo';
import { ShopCategorySlider } from '../../components/shop/home/ShopCategorySlider';
import { ScrollDownArrow } from '../../components/common/ScrollDownArrow';
import { useNavigate } from 'react-router-dom';
import { FAQSection } from '../../components/sections/FAQSection';

// Reusing images or placeholders similar to the design
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1764296423687-cb8906afaf52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbW9vZHklMjB2aW5leWFyZCUyMG1vdW50YWlucyUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NjUwNzI2OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  bottlesGroup: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  pinotageBox: "https://images.unsplash.com/photo-1760920193193-91dd96af7862?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", // Pinotage bottle
  flatLay: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
  laborieBottle: "https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  mentorsCorks: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  food1: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  food2: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  food3: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
};

/**
 * WineClub Landing Page Component
 * 
 * dedicated landing page for the "Winemaker's Selection" Wine Club (11th Edition).
 * A high-conversion page designed to drive subscriptions.
 * Features:
 * - Campaign-style Hero.
 * - "Inside This Box" breakdown with value proposition.
 * - Benefits list.
 * - Chef Mynhardt recipe teaser.
 * - FAQ specific to the club.
 * - Direct checkout CTA.
 */
export const WineClub: React.FC = () => {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative min-h-[calc(100dvh-90px)] md:h-[85vh] md:min-h-[600px] flex flex-col justify-center items-center text-center bg-[#1a1a1a] overflow-hidden">
        <div className="absolute inset-0">
           <ImageWithFallback
              src={IMAGES.hero}
              alt="Vineyards"
              className="w-full h-full object-cover opacity-60"
           />
           <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 max-w-4xl px-6 pt-20 pb-32">
           <Typography variant="h4" className="font-serif italic text-[#DAA520] text-3xl md:text-5xl mb-4" style={{ fontFamily: "'Pinyon Script', cursive" }}>
              Introducing
           </Typography>
           <Typography variant="h1" className="text-white uppercase tracking-widest text-4xl md:text-6xl font-bold mb-2 drop-shadow-lg">
              Winemaker's <br/> Selection
           </Typography>
           <Typography variant="h4" className="font-serif italic text-[#DAA520] text-3xl md:text-5xl mt-4 mb-8" style={{ fontFamily: "'Pinyon Script', cursive" }}>
              Join the Legacy
           </Typography>
           
           <Typography variant="body" className="text-white max-w-xl mx-auto text-sm md:text-base uppercase tracking-wider opacity-90 mt-12">
              Become a member of the KWV Winemaker's Selection Club <br/> and become part of a 100-year-old legacy
           </Typography>
        </div>

        <ScrollDownArrow targetId="intro-section" className="z-30" />
      </div>

      {/* Intro Section */}
      <div id="intro-section" className="bg-white py-20">
        <Container variant="site">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                 <ImageWithFallback
                    src={IMAGES.bottlesGroup}
                    alt="KWV Wine Collection"
                    className="w-full h-auto object-cover"
                 />
              </div>
              <div className="space-y-6">
                 <Typography variant="caption" className="text-[#DAA520] uppercase tracking-widest font-bold">KWV Winemaker's Selection</Typography>
                 <Typography variant="h2" className="uppercase text-[#2C1810] text-4xl md:text-5xl font-bold leading-tight">
                    Introducing <br/> KWV Wine Club
                 </Typography>
                 <Typography variant="body" className="text-gray-600 leading-relaxed">
                    Unlock the secrets of our cellar and be the first to experience new releases, exclusive vintages and award-winning wines.
                 </Typography>
                 <Typography variant="body" className="text-gray-600 leading-relaxed">
                    Our Winemaker's Selection is carefully curated by our team of award-winning winemakers and viticulturists. Each shipment offers a thematic journey through our heritage, varietal excellence, and innovation, delivered directly to your door.
                 </Typography>
                 <Typography variant="body" className="text-gray-600 leading-relaxed">
                   You don't just drink the wine; you create memories with friends and family. You also enjoy rewarding regular updates, promotions, and competitions.
                 </Typography>
                 
                 <Button 
                    onClick={() => scrollToSection('inside-box')}
                    className="bg-[#C5A059] text-white hover:bg-[#B08D45] border-none px-8 py-3 rounded-none mt-4 uppercase tracking-wider text-sm font-bold"
                 >
                    Read More
                 </Button>
              </div>
           </div>
        </Container>
      </div>

      {/* Inside This Box Section */}
      <div id="inside-box" className="bg-[#F4F4F4] py-12 md:py-20">
         <Container variant="site">
            <div className="bg-white shadow-xl max-w-5xl mx-auto">
               <div className="grid grid-cols-1 lg:grid-cols-5">
                  
                  {/* Left Image Section */}
                  <div className="lg:col-span-2 bg-[#FDFBF7] p-8 flex flex-col items-center justify-center text-center border-r border-gray-100">
                     <Typography variant="caption" className="text-[#C5A059] uppercase tracking-widest text-xs mb-4">Favorite October - December 2025</Typography>
                     <Typography variant="h3" className="text-[#2C1810] text-2xl font-bold mb-2">Pinotage Centenary</Typography>
                     <Typography variant="caption" className="text-gray-500 uppercase tracking-widest mb-6">Exclusive Release</Typography>
                     
                     <div className="w-48 h-48 mb-4 relative">
                         {/* Placeholder for the Pinotage Graphic */}
                        <div className="w-full h-full flex items-center justify-center">
                           <Typography variant="h1" className="text-[#8B0000] leading-none text-8xl font-bold opacity-20 absolute select-none">100</Typography>
                           <div className="relative z-10 text-center">
                              <Typography variant="h3" className="text-[#8B0000] font-serif italic text-3xl">100 Years</Typography>
                              <Typography variant="caption" className="text-[#8B0000] uppercase text-xs tracking-widest">1925 - 2025</Typography>
                              <Typography variant="h2" className="text-[#8B0000] font-bold uppercase text-3xl mt-2">Pinotage</Typography>
                              <Typography variant="caption" className="text-[#8B0000] font-serif italic">A century of innovation</Typography>
                           </div>
                        </div>
                     </div>
                     
                     <Typography variant="body" className="font-bold text-[#2C1810] mt-4">Value: R1,555</Typography>
                  </div>

                  {/* Right Content Section */}
                  <div className="lg:col-span-3 p-8 lg:p-12 bg-[#F4F4F4]">
                     <Typography variant="h3" className="text-[#2C1810] uppercase font-bold mb-8 text-xl">Inside This Box</Typography>
                     
                     <ul className="space-y-4 mb-8">
                        {[
                           "1 x The Mentors Perold 2021",
                           "1 x The Mentors Pinotage 2021",
                           "1 x Cathedral Cellar Pinotage 2020",
                           "1 x KWV Classic Collection Pinotage 2022",
                           "1 x KWV Classic Rosé 2023 (Pinotage)",
                           "1 x Laborie Rosé 2023 (Pinotage)",
                           "1 x KWV Brandy 10 Year Old",
                           "1 x Cruxland Gin (Truffle Infused)"
                        ].map((item, idx) => (
                           <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                              <span className="mt-1 w-3 h-3 bg-black rounded-full flex-shrink-0" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></span> {/* Simple bottle icon shape */}
                              {item}
                           </li>
                        ))}
                     </ul>
                     
                     <Typography variant="body" className="text-gray-600 text-sm leading-relaxed mb-2 italic">
                        Note: Should a specific vintage be sold out, we will replace it with the newest vintage available.
                     </Typography>
                     <Typography variant="body" className="text-gray-600 text-sm leading-relaxed">
                        *T's & C's apply. Alcohol not for sale to persons under the age of 18.
                     </Typography>
                  </div>
               </div>

               {/* Black Bottom Bar */}
               <div className="bg-black text-white p-6 flex flex-col md:flex-row justify-between items-center gap-6">
                  <div>
                     <Typography variant="h3" className="text-white uppercase font-bold text-2xl">Price: R950</Typography>
                     <Typography variant="caption" className="text-gray-400 uppercase tracking-wider text-xs">Subscription Amount</Typography>
                  </div>
                  <Button 
                    onClick={() => navigate('/checkout')}
                    className="bg-[#C5A059] text-white hover:bg-[#B08D45] border-none px-10 py-3 uppercase font-bold tracking-wider text-sm rounded-none"
                  >
                     Become a member
                  </Button>
               </div>
            </div>
         </Container>
      </div>

      {/* Join The Legacy Divider */}
      <div className="bg-white py-12 text-center">
         <Typography variant="h2" className="text-[#C5A059] text-6xl md:text-8xl font-serif italic" style={{ fontFamily: "'Pinyon Script', cursive" }}>
            Join The Legacy
         </Typography>
      </div>

      {/* 11th Edition Section */}
      <div className="bg-white pb-20">
         <Container variant="site">
            <div className="max-w-4xl mx-auto text-center">
               <div className="mb-12">
                  <ImageWithFallback
                     src={IMAGES.flatLay}
                     alt="11th Edition Flat Lay"
                     className="w-full h-auto shadow-lg"
                  />
               </div>
               
               <Typography variant="h2" className="text-[#2C1810] uppercase font-bold text-3xl md:text-4xl mb-2">
                  KWV Winemaker's Selection
               </Typography>
               <Typography variant="h2" className="text-[#2C1810] uppercase font-bold text-3xl md:text-4xl mb-6">
                  11th Edition
               </Typography>
               
               <Typography variant="caption" className="text-gray-900 uppercase tracking-widest font-bold mb-6 block">
                  What's inside the box?
               </Typography>
               
               <Typography variant="body" className="text-gray-600 mb-6 leading-relaxed">
                  Experience winemaking excellence. This selection showcases our passion for South African varietals and heritage. From the creamy complexity of The Mentors to the structured depth of Cathedral Cellar, this range offers a glimpse of our winemaking courage.
               </Typography>

               <Typography variant="body" className="text-gray-600 mb-8 leading-relaxed italic">
                  "To make wine is an art, but to blend wine is a craft. This selection is the embodiment of our pursuit of perfection." <br/>
                  - Chief Winemaker
               </Typography>
               
               <div className="flex flex-col items-center gap-6">
                  <button 
                    onClick={() => scrollToSection('benefits')}
                    className="text-[#C5A059] uppercase tracking-widest text-sm font-bold border-b border-[#C5A059] pb-1 hover:text-[#2C1810] transition-colors"
                  >
                     Read More
                  </button>
                  
                  <Button 
                    onClick={() => navigate('/checkout')}
                    className="bg-[#C5A059] text-white hover:bg-[#B08D45] border-none px-10 py-3 uppercase font-bold tracking-wider text-sm rounded-none"
                  >
                     Become a member
                  </Button>
                  
                  <Typography variant="caption" className="text-[#2C1810] uppercase tracking-widest font-bold text-xs mt-4">
                     KWV Winemaker's Selection
                  </Typography>
               </div>
            </div>
         </Container>
      </div>

      {/* Benefits Section */}
      <div id="benefits" className="bg-[#FDFBF7]">
         <Container variant="site">
            <div className="grid grid-cols-1 lg:grid-cols-2">
               {/* Left Image */}
               <div className="h-full min-h-[500px]">
                  <ImageWithFallback
                     src={IMAGES.laborieBottle}
                     alt="Laborie Wine"
                     className="w-full h-full object-cover"
                  />
               </div>
               
               {/* Right Content */}
               <div className="grid grid-rows-2">
                  <div className="h-64 lg:h-auto overflow-hidden">
                     <ImageWithFallback
                        src={IMAGES.mentorsCorks}
                        alt="The Mentors Corks"
                        className="w-full h-full object-cover"
                     />
                  </div>
                  <div className="p-8 lg:p-16 bg-white flex flex-col justify-center">
                     <Typography variant="h2" className="text-[#2C1810] uppercase font-bold text-2xl md:text-3xl mb-8">
                        What are the benefits?
                     </Typography>
                     
                     <ul className="space-y-6 mb-10">
                        {[
                           "A quarterly, curated box delivered directly to your door containing 6 bottles of wine.",
                           "Receive access to exclusive vintages and pre-releases before the general public.",
                           "Complimentary wine tastings when visiting our wine emporium in Paarl.",
                           "First option to book for all our exclusive dinners and events."
                        ].map((benefit, i) => (
                           <li key={i} className="flex items-start gap-4">
                              <ChevronRight size={16} className="text-[#2C1810] mt-1 shrink-0" />
                              <Typography variant="body" className="text-gray-600 text-sm">
                                 {benefit}
                              </Typography>
                           </li>
                        ))}
                     </ul>
                     
                     <Button 
                        onClick={() => navigate('/checkout')}
                        className="bg-[#C5A059] text-white hover:bg-[#B08D45] border-none px-8 py-3 uppercase font-bold tracking-wider text-xs w-fit rounded-none"
                     >
                        Become a member
                     </Button>
                  </div>
               </div>
            </div>
         </Container>
      </div>

      {/* Chef Mynhardt Section */}
      <div className="bg-[#F4F4F4]">
         <div className="grid grid-cols-1 lg:grid-cols-4">
            {/* Left Food Image */}
            <div className="h-64 lg:h-auto overflow-hidden">
               <ImageWithFallback
                  src={IMAGES.food1}
                  alt="Chef Food 1"
                  className="w-full h-full object-cover"
               />
            </div>
            
            {/* Center Text */}
            <div className="lg:col-span-2 bg-[#EAEAEA] p-12 flex flex-col items-center justify-center text-center">
               <Typography variant="h3" className="font-serif text-[#2C1810] text-2xl italic mb-2">
                  Winemaker's
               </Typography>
               <Typography variant="h2" className="text-[#2C1810] uppercase font-bold text-3xl tracking-wider mb-6">
                  Selection
               </Typography>
               
               <Typography variant="body" className="text-[#2C1810] uppercase font-serif tracking-wider max-w-md mb-8 leading-relaxed text-sm">
                  Sign up to the wine club to <span className="text-[#C5A059] font-bold">sneak a peak</span> at these amazing recipes by Chef Mynhardt
               </Typography>
               
               <KWVLogo color="#C5A059" className="w-24 h-auto" />
            </div>
            
            {/* Right Food Images */}
            <div className="h-64 lg:h-auto grid grid-cols-2 lg:grid-cols-1">
               <div className="h-full overflow-hidden border-b border-white/20">
                  <ImageWithFallback
                     src={IMAGES.food2}
                     alt="Chef Food 2"
                     className="w-full h-full object-cover"
                  />
               </div>
               <div className="h-full overflow-hidden">
                  <ImageWithFallback
                     src={IMAGES.food3}
                     alt="Chef Food 3"
                     className="w-full h-full object-cover"
                  />
               </div>
            </div>
         </div>
      </div>

      {/* Bottom CTA Bar */}
      <div className="bg-black text-white py-16 text-center">
         <Container variant="site">
            <Typography variant="h2" className="uppercase font-bold text-3xl md:text-4xl mb-4">
               Find Out More
            </Typography>
            <Typography variant="body" className="text-gray-400 mb-8 max-w-2xl mx-auto">
               To find out more, please contact the KWV team for assistance.
            </Typography>
            <Button 
               onClick={() => navigate('/contact')}
               className="bg-transparent text-white border border-white hover:bg-white hover:text-black px-12 py-3 uppercase font-bold tracking-wider text-sm rounded-none transition-all"
            >
               Enquire
            </Button>
         </Container>
      </div>
      
      {/* FAQ Section */}
      <div id="faq">
          <FAQSection 
              title="Frequently Asked Questions" 
              items={[
                  { question: "How do I join the KWV Wine Club?", answer: "Joining is easy! Simply click on the 'Become a member' button, and you will be directed to checkout where you can complete your subscription." },
                  { question: "What is included in the shipment?", answer: "Each shipment contains 6 carefully curated bottles of wine, selected by our winemakers to reflect the season and our heritage." },
                  { question: "When will I be charged?", answer: "You will be charged quarterly, prior to each shipment. You can manage your subscription details in your account." },
                  { question: "Can I cancel my subscription?", answer: "Yes, you can pause or cancel your subscription at any time via your account settings." },
                  { question: "Is delivery included?", answer: "Delivery costs are calculated at checkout based on your location." }
              ]} 
          />
      </div>

      {/* Bottom Slider / Brand Grid */}
      <ShopCategorySlider />
      
    </Layout>
  );
};
