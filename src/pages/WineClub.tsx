import React from 'react';
import { Container } from '../components/common/Container';
import { Typography } from '../components/common/Typography';
import { Button } from '../components/common/Button';
import { Layout } from '../components/layout/Layout';
import { COLORS } from '../constants/theme';
import { Check, Gift, Truck, Calendar } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

import { ScrollDownArrow } from '../components/common/ScrollDownArrow';
import { FAQSection } from '../components/sections/FAQSection';

export const WineClub: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-[#2C1810]">
        <div className="absolute inset-0 opacity-40">
           <ImageWithFallback
              src="https://images.unsplash.com/photo-1601573506977-3eb0799f624b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
              alt="Wine Club Box"
              className="w-full h-full object-cover"
           />
        </div>
        <div className="relative z-10 text-center max-w-3xl px-6">
          <Typography variant="h1" color={COLORS.white} className="mb-6">
            KWV Wine Club Edition 11
          </Typography>
          <Typography variant="bodyLarge" color={COLORS.beige} className="mb-8">
            Experience the finest selection of our award-winning wines delivered directly to your door. Join an exclusive community of wine lovers.
          </Typography>
          <Button size="lg" className="bg-[#DAA520] text-[#2C1810] hover:bg-white border-none">
            Join the Club
          </Button>
        </div>
        <ScrollDownArrow targetId="benefits" />
      </div>

      {/* Benefits Section */}
      <section className="py-20 bg-white" id="benefits">
        <Container variant="content">
          <div className="text-center mb-16">
            <Typography variant="h2" color={COLORS.wineRed} className="mb-4">
              Membership Benefits
            </Typography>
            <Typography variant="body" className="max-w-2xl mx-auto text-gray-600">
              As a member of the KWV Wine Club, you enjoy more than just great wine. You get access to exclusive perks and experiences.
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Gift, title: "Curated Selection", desc: "Hand-picked wines by our expert winemakers tailored to the season." },
              { icon: Truck, title: "Free Delivery", desc: "Complimentary shipping on all club shipments nationwide." },
              { icon: Check, title: "Exclusive Access", desc: "First access to new vintages, limited releases, and member-only events." },
              { icon: Calendar, title: "Flexible Frequency", desc: "Choose how often you want to receive your wine - Monthly, Bi-monthly, or Quarterly." }
            ].map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-full bg-[#F5F5DC] flex items-center justify-center mb-6 text-[#8B0000]">
                  <benefit.icon size={32} />
                </div>
                <Typography variant="h4" className="mb-3">{benefit.title}</Typography>
                <Typography variant="body" className="text-gray-600">{benefit.desc}</Typography>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* The Pack Section */}
      <section className="py-20 bg-[#F9F9F9]">
        <Container variant="site">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                 <ImageWithFallback
                    src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    alt="Wine Selection"
                    className="rounded-lg shadow-xl"
                 />
              </div>
              <div className="order-1 lg:order-2">
                 <Typography variant="h4" color={COLORS.gold} className="uppercase tracking-widest mb-2">Current Edition</Typography>
                 <Typography variant="h2" color={COLORS.darkBrown} className="mb-6">What's in the Box?</Typography>
                 <Typography variant="body" className="mb-8 text-gray-700">
                    Edition 11 features a bold exploration of our Cathedral Cellar range, perfectly suited for the cooler months. Expect rich reds and complex textures.
                 </Typography>
                 
                 <ul className="space-y-4 mb-8">
                    {["Cathedral Cellar Cabernet Sauvignon 2019", "The Mentors Orchestra 2020", "Laborie Blanc de Blancs Cap Classique", "KWV 10 Year Old Brandy (Sample)"].map((item, i) => (
                       <li key={i} className="flex items-start gap-3">
                          <Check size={20} className="text-[#8B0000] mt-1 shrink-0" />
                          <span className="font-serif text-lg text-gray-800">{item}</span>
                       </li>
                    ))}
                 </ul>

                 <div className="p-6 bg-white border border-[#DAA520] rounded-sm">
                    <div className="flex justify-between items-center mb-4">
                       <span className="text-gray-500 uppercase tracking-wider text-sm">Subscription Price</span>
                       <span className="text-3xl font-serif font-bold text-[#8B0000]">R 1,200</span>
                    </div>
                    <Button className="w-full bg-[#8B0000] text-white hover:bg-[#600000]">Sign Up Now</Button>
                 </div>
              </div>
           </div>
        </Container>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-white" id="join">
         <Container variant="content">
            <div className="text-center mb-12">
               <Typography variant="h2" className="mb-4">Join the Family</Typography>
               <Typography variant="body" className="text-gray-600">Complete the form below to start your membership.</Typography>
            </div>
            
            <form className="max-w-xl mx-auto space-y-6">
               <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                     <label className="text-sm font-medium uppercase tracking-wider text-gray-700">First Name</label>
                     <input type="text" className="w-full p-3 border border-gray-300 rounded-sm focus:border-[#DAA520] outline-none" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-sm font-medium uppercase tracking-wider text-gray-700">Last Name</label>
                     <input type="text" className="w-full p-3 border border-gray-300 rounded-sm focus:border-[#DAA520] outline-none" />
                  </div>
               </div>
               
               <div className="space-y-2">
                  <label className="text-sm font-medium uppercase tracking-wider text-gray-700">Email Address</label>
                  <input type="email" className="w-full p-3 border border-gray-300 rounded-sm focus:border-[#DAA520] outline-none" />
               </div>

               <div className="space-y-2">
                  <label className="text-sm font-medium uppercase tracking-wider text-gray-700">Phone Number</label>
                  <input type="tel" className="w-full p-3 border border-gray-300 rounded-sm focus:border-[#DAA520] outline-none" />
               </div>

               <div className="space-y-2">
                  <label className="text-sm font-medium uppercase tracking-wider text-gray-700">Preferred Frequency</label>
                  <select className="w-full p-3 border border-gray-300 rounded-sm focus:border-[#DAA520] outline-none bg-white">
                     <option>Monthly</option>
                     <option>Every 2 Months</option>
                     <option>Quarterly</option>
                  </select>
               </div>

               <Button className="w-full bg-[#2C1810] text-white py-4 text-lg">Proceed to Payment</Button>
            </form>
         </Container>
      </section>

      <FAQSection items={[
        { question: "Can I skip a delivery?", answer: "Yes, you can pause or skip a delivery at any time through your account dashboard." },
        { question: "Can I customize my box?", answer: "While our winemakers curate each box, we do offer specific selection options for certain tiers. Check your preference settings." },
        { question: "Is there a cancellation fee?", answer: "No, you can cancel your membership at any time without penalty, provided it is before the next shipment has been processed." }
      ]} />
    </Layout>
  );
};
