import React, { useState } from 'react';
import { Layout } from '../components/layout/Layout';
import { Container } from '../components/common/Container';
import { Typography } from '../components/common/Typography';
import { Button } from '../components/common/Button';
import { COLORS } from '../constants/theme';
import { Minus, Plus, Star, Share2, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ProductCard } from '../components/shop/ProductCard';
import { FAQSection } from '../components/sections/FAQSection';

// Mock Product Data
const PRODUCT = {
  id: '1',
  name: 'The Mentors Orchestra 2020',
  brand: 'The Mentors',
  price: 429.00,
  description: 'This Bordeaux-style blend is a result of strict selection and meticulous attention to detail. The wine shows aromas of blackcurrant, plum and dried herbs. The palate is full-bodied with layers of concentrated fruit and integrated oak.',
  rating: 4.8,
  reviews: 124,
  sku: 'TM-ORCH-2020',
  categories: ['Red Wine', 'The Mentors'],
  images: [
    'https://images.unsplash.com/photo-1702776095041-6b8bd4f292de?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80',
  ],
  details: {
    'Tasting Notes': 'Aromatic layers of blackcurrant, plum and dried herbs. The palate is full-bodied with concentrated fruit.',
    'Vinification': 'Grapes were hand-harvested and sorted. Fermentation took place in stainless steel tanks.',
    'Analysis': 'Alc: 14.5% | TA: 5.8 g/l | pH: 3.5 | RS: 2.5 g/l'
  }
};

const RELATED_PRODUCTS = [
  { id: '2', name: 'The Mentors Chenin Blanc', brand: 'The Mentors', price: 399.00, image: 'https://images.unsplash.com/photo-1695048475495-6535686c473c?auto=format&fit=crop&q=80', inStock: true },
  { id: '3', name: 'The Mentors Canvas', brand: 'The Mentors', price: 349.00, image: 'https://images.unsplash.com/photo-1702776095041-6b8bd4f292de?auto=format&fit=crop&q=80', inStock: true },
  { id: '4', name: 'The Mentors Perold', brand: 'The Mentors', price: 2499.00, image: 'https://images.unsplash.com/photo-1702776095041-6b8bd4f292de?auto=format&fit=crop&q=80', inStock: true, badges: ['Icon'] },
];

export const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState('Tasting Notes');

  return (
    <Layout>
      <Container variant="site" className="py-12">
        {/* Breadcrumbs */}
        <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">
          <span>Home</span> / <span>Shop</span> / <span>Red Wine</span> / <span className="text-[#8B0000]">{PRODUCT.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-gray-50 overflow-hidden relative">
              <ImageWithFallback 
                src={PRODUCT.images[activeImage]} 
                alt={PRODUCT.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 flex flex-col gap-3">
                <button className="p-2 bg-white rounded-full shadow-md hover:text-[#8B0000] transition-colors"><Heart size={20} /></button>
                <button className="p-2 bg-white rounded-full shadow-md hover:text-[#8B0000] transition-colors"><Share2 size={20} /></button>
              </div>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {PRODUCT.images.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveImage(idx)}
                  className={`w-20 h-20 flex-shrink-0 border-2 ${activeImage === idx ? 'border-[#8B0000]' : 'border-transparent'} transition-all`}
                >
                  <ImageWithFallback src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <Typography variant="caption" className="text-[#8B0000] uppercase tracking-widest mb-2 font-bold">
              {PRODUCT.brand}
            </Typography>
            <Typography variant="h2" className="mb-4">{PRODUCT.name}</Typography>
            
            <div className="flex items-center gap-4 mb-6">
               <Typography variant="h3" className="!text-2xl text-[#2C1810]">R {PRODUCT.price.toFixed(2)}</Typography>
               <div className="flex items-center gap-1">
                 {[1,2,3,4,5].map(i => <Star key={i} size={14} fill={i <= PRODUCT.rating ? "#DAA520" : "none"} color={i <= PRODUCT.rating ? "#DAA520" : "#ccc"} />)}
                 <span className="text-sm text-gray-500 ml-1">({PRODUCT.reviews} reviews)</span>
               </div>
            </div>

            <Typography variant="body" className="mb-8 text-gray-600 leading-relaxed">
              {PRODUCT.description}
            </Typography>

            <div className="border-t border-b border-gray-200 py-8 mb-8 space-y-6">
               {/* Quantity & Add to Cart */}
               <div className="flex flex-wrap gap-4">
                 <div className="flex items-center border border-gray-300 h-12 w-32">
                   <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 h-full hover:bg-gray-100"><Minus size={16} /></button>
                   <input type="text" value={quantity} readOnly className="w-full h-full text-center border-none focus:ring-0 font-medium" />
                   <button onClick={() => setQuantity(quantity + 1)} className="px-3 h-full hover:bg-gray-100"><Plus size={16} /></button>
                 </div>
                 <Button size="lg" className="flex-1 h-12">
                   Add to Cart
                 </Button>
               </div>
               
               <div className="bg-[#F9F9F9] p-4 border border-gray-100 rounded-sm">
                  <Typography variant="h4" className="!text-base mb-2">Subscribe & Save</Typography>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-5 h-5 accent-[#8B0000]" />
                    <Typography variant="body" className="text-sm">
                      Join the Wine Club and save 15% on this order.
                    </Typography>
                  </div>
               </div>
            </div>

            {/* Meta */}
            <div className="space-y-2 text-sm text-gray-500 mb-8">
              <p><span className="font-bold text-gray-900">SKU:</span> {PRODUCT.sku}</p>
              <p><span className="font-bold text-gray-900">Category:</span> {PRODUCT.categories.join(', ')}</p>
            </div>

            {/* Accordions / Tabs */}
            <div>
              <div className="flex border-b border-gray-200 mb-6 overflow-x-auto">
                {Object.keys(PRODUCT.details).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 font-medium whitespace-nowrap transition-colors relative ${activeTab === tab ? 'text-[#8B0000]' : 'text-gray-500 hover:text-gray-800'}`}
                  >
                    {tab}
                    {activeTab === tab && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8B0000]" />}
                  </button>
                ))}
              </div>
              <div className="prose prose-sm max-w-none text-gray-600">
                <p>{PRODUCT.details[activeTab as keyof typeof PRODUCT.details]}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        <div className="mt-20">
           <Typography variant="h2" className="mb-8">You Might Also Like</Typography>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
             {RELATED_PRODUCTS.map(p => <ProductCard key={p.id} product={p} />)}
           </div>
        </div>
      </Container>
      
      <FAQSection items={[
        { question: "What is the aging potential?", answer: "This wine can be enjoyed now but will continue to mature well for another 5-8 years if stored correctly." },
        { question: "What food pairs best with this wine?", answer: "This wine pairs excellently with grilled red meats, rich stews, and mature cheeses." },
        { question: "Does this wine contain sulphites?", answer: "Yes, like most wines, this product contains sulphites to preserve freshness and quality." }
      ]} />
    </Layout>
  );
};
