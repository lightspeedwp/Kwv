import React, { useState } from 'react';
import { Layout } from '../components/layout/Layout';
import { Hero } from '../components/sections/Hero';
import { Container } from '../components/common/Container';
import { Typography } from '../components/common/Typography';
import { Button } from '../components/common/Button';
import { COLORS } from '../constants/theme';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import imageHero from 'figma:asset/0d66fde5a857cd4f72ee552088528c9472e9d423.png';

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Reset after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <Layout>
      <Hero 
        title="Contact Us"
        imageSrc={imageHero}
        height="medium"
        nextSectionId="contact-content"
      />

      <section id="contact-content" className="py-16 bg-white">
        <Container variant="site">
          <div className="text-center mb-16">
            <Typography variant="caption" className="uppercase tracking-widest mb-2 text-[#8B0000]">
              Contact Us
            </Typography>
            <Typography variant="h2" color={COLORS.darkGrey}>
              We exist for consumers. Reach us here.
            </Typography>
          </div>

          {/* Contact Form Section */}
          <div className="max-w-3xl mx-auto mb-20 p-8 bg-[#F9F9F9] rounded-sm border border-gray-100 relative overflow-hidden">
            <Typography variant="h3" className="mb-6 text-center">Send us a message</Typography>
            
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-sm p-8 text-center flex flex-col items-center justify-center min-h-[300px]">
                <CheckCircle size={48} className="text-green-600 mb-4" />
                <h4 className="text-2xl font-serif font-bold text-green-800 mb-2">Message Sent!</h4>
                <p className="text-green-700">Thank you for reaching out. We'll get back to you shortly.</p>
                <Button variant="outline" className="mt-6" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm focus:border-[#2C1810] focus:ring-0 outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm focus:border-[#2C1810] focus:ring-0 outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm focus:border-[#2C1810] focus:ring-0 outline-none transition-colors"
                    placeholder="How can we help?"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm focus:border-[#2C1810] focus:ring-0 outline-none transition-colors"
                    placeholder="Write your message here..."
                  />
                </div>

                <div className="pt-2">
                  <Button type="submit" className="w-full md:w-auto">
                    Send Message
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 shadow-lg overflow-hidden rounded-md">
            
            {/* Left Column - Corporate (Dark) */}
            <div className="bg-[#2C1810] text-white p-10 lg:p-16 space-y-12">
              <div>
                <h3 className="text-2xl font-serif font-bold mb-6 text-white border-b border-white/20 pb-4">General</h3>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="font-bold text-[#DAA520] mb-2 text-sm uppercase tracking-wider">KWV Head Office</h4>
                    <p className="opacity-90">La Concorde, 57 Main Rd Paarl</p>
                    <p className="opacity-90 mt-2"><span className="w-16 inline-block text-white/60">Tel:</span> +27 21 807 3911</p>
                    <p className="opacity-90"><span className="w-16 inline-block text-white/60">Email:</span> receptionprl@kwv.co.za</p>
                    <p className="opacity-90"><span className="w-16 inline-block text-white/60">Email:</span> customer@kwv.co.za</p>
                    <p className="opacity-90"><span className="w-16 inline-block text-white/60">GPS:</span> 33°75’67.6”S 18°96’21.4”E</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#DAA520] mb-2 text-sm uppercase tracking-wider">KWV Johannesburg Office</h4>
                    <p className="opacity-90">Woodmead Office Park, 12 Saddle Drive,<br/>Woodmead, Johannesburg, 2191</p>
                    <p className="opacity-90 mt-2"><span className="w-16 inline-block text-white/60">Tel:</span> +27 11 656 0424</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#DAA520] mb-2 text-sm uppercase tracking-wider">Corporate Social Responsibility</h4>
                    <p className="opacity-90"><span className="w-16 inline-block text-white/60">Tel:</span> +27 21 807 3273</p>
                    <p className="opacity-90"><span className="w-16 inline-block text-white/60">Email:</span> csi@kwv.co.za</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold mb-6 text-white border-b border-white/20 pb-4">Tours and Tastings</h3>
                <p className="mb-6 opacity-90 italic">Visit us for a memorable tour or tasting of our award-winning wines.</p>
                
                <div className="space-y-6">
                  {[
                    { name: 'KWV Emporium', email: 'info@kwvemporium.co.za' },
                    { name: 'Cathedral Cellar', email: 'cathedralcellar@kwv.co.za' },
                    { name: 'House of Fire', email: 'houseoffire@kwv.co.za' }
                  ].map((place) => (
                    <div key={place.name}>
                      <h4 className="font-bold text-[#DAA520] mb-1 text-sm uppercase tracking-wider">{place.name}</h4>
                      <p className="opacity-90"><span className="w-16 inline-block text-white/60">Tel:</span> +27 21 807 3007/8</p>
                      <p className="opacity-90"><span className="w-16 inline-block text-white/60">Email:</span> {place.email}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold mb-4 text-white">Follow Us</h3>
                <div className="flex gap-4 text-[#DAA520]">
                  <a href="#" className="hover:text-white transition-colors"><Facebook /></a>
                  <a href="#" className="hover:text-white transition-colors"><Instagram /></a>
                  <a href="#" className="hover:text-white transition-colors"><Twitter /></a>
                </div>
              </div>
            </div>

            {/* Right Column - Consumer/Shops (Gold/Beige) */}
            <div className="bg-[#d4af37] text-[#2C1810] p-10 lg:p-16 space-y-12">
              <div>
                <h3 className="text-2xl font-serif font-bold mb-6 border-b border-[#2C1810]/20 pb-4">Member Shops</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-4">
                  {[
                    { city: 'Paarl', email: 'paarl@kwv.co.za', tel: '021 807 3077' },
                    { city: 'Robertson', email: 'robertson@kwv.co.za', tel: '021 807 3040' },
                    { city: 'Stellenbosch', email: 'stellenbosch@kwv.co.za', tel: '021 807 3505' },
                    { city: 'Upington', email: 'upington@kwv.co.za', tel: '021 807 3106' },
                    { city: 'Vredendal', email: 'vredendal@kwv.co.za', tel: '021 807 3030' },
                    { city: 'Worcester', email: 'worcester@kwv.co.za', tel: '023 347 2795' }
                  ].map((shop) => (
                    <div key={shop.city}>
                      <h4 className="font-bold mb-1 text-lg">{shop.city}</h4>
                      <p className="text-sm font-medium opacity-80">Tel: {shop.tel}</p>
                      <p className="text-sm font-medium opacity-80">Email: {shop.email}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold mb-6 border-b border-[#2C1810]/20 pb-4">Shop Online</h3>
                <div>
                  <h4 className="font-bold mb-2 text-lg uppercase">KWV Shop</h4>
                  <p className="font-medium opacity-80"><span className="w-16 inline-block">Tel:</span> +27 21 807 3007/8</p>
                  <p className="font-medium opacity-80"><span className="w-16 inline-block">Email:</span> sales@kwv.co.za</p>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>
    </Layout>
  );
};
