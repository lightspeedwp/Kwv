import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { Container } from '../../components/common/Container';
import { Typography } from '../../components/common/Typography';
import { Button } from '../../components/common/Button';
import { COLORS } from '../../constants/theme';
import { ProductCard } from '../../components/shop/common/ProductCard';
import { Link } from 'react-router';
import { Tag } from 'lucide-react';

const PROMO_PRODUCTS = [
  { 
      id: '1', 
      name: 'The Mentors Orchestra 2020', 
      brand: 'The Mentors', 
      price: 429.00, 
      salePrice: 385.00, 
      image: 'https://images.unsplash.com/photo-1702776095041-6b8bd4f292de?auto=format&fit=crop&q=80', 
      inStock: true, 
      badges: ['10% OFF'] 
  },
  { 
      id: '2', 
      name: 'Roodeberg Red Blend 2021', 
      brand: 'Roodeberg', 
      price: 119.00, 
      salePrice: 99.00, 
      image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80', 
      inStock: true, 
      badges: ['Value'] 
  },
  { 
      id: '5', 
      name: 'Cruxland Gin', 
      brand: 'Cruxland', 
      price: 349.00, 
      salePrice: 299.00, 
      image: 'https://images.unsplash.com/photo-1695048475495-6535686c473c?auto=format&fit=crop&q=80', 
      inStock: true, 
      badges: ['Save R50'] 
  },
  { 
      id: '6', 
      name: 'KWV 10 Year Old Brandy', 
      brand: 'KWV Brandy', 
      price: 299.00, 
      salePrice: 269.00, 
      image: 'https://images.unsplash.com/photo-1757694907428-5ef2f3ff7854?auto=format&fit=crop&q=80', 
      inStock: true, 
      badges: ['Best Seller'] 
  },
];

/**
 * ShopPromotions Page Component
 * 
 * Landing page for special offers and deals.
 * Highlights "On Sale" items and special bundle offers.
 */
export const ShopPromotions: React.FC = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <div className="relative bg-[var(--twb-color-ink)] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920" alt="Vineyard" className="w-full h-full object-cover" />
        </div>
        <Container variant="content" className="relative z-10 text-center">
            <div className="inline-block bg-[var(--twb-color-gold)] text-[var(--twb-color-ink)] px-4 py-1 mb-6 text-sm font-bold uppercase tracking-widest rounded-sm">
                Limited Time Offers
            </div>
            <Typography variant="h1" className="text-[var(--twb-color-text-on-dark)] mb-6 text-4xl md:text-6xl">
                Special Promotions
            </Typography>
            <Typography variant="bodyLarge" className="text-gray-300 max-w-2xl mx-auto mb-8">
                Exclusive deals on award-winning wines, premium spirits, and mixed cases. 
                Don't miss out on these limited-time offers.
            </Typography>
        </Container>
      </div>

      {/* Featured Promo Blocks */}
      <Container variant="site" className="py-16">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-[var(--twb-color-bg-tertiary)] border border-gray-200 p-8 md:p-12 flex flex-col items-start">
               <span className="text-[var(--twb-color-gold)] font-bold uppercase tracking-widest text-xs mb-3">Bundle Deal</span>
               <Typography variant="h3" className="mb-4 text-[var(--twb-color-ink)]">Summer White Wine Case</Typography>
               <p className="text-gray-600 mb-6">Get 6 bottles of our crispest white wines for the price of 5. Includes Mentors Chenin Blanc and Classic Sauvignon Blanc.</p>
               <Button className="mt-auto bg-[var(--twb-color-ink)] text-[var(--twb-color-text-on-dark)] hover:bg-[var(--twb-color-plum)]">Shop Bundle</Button>
            </div>
            <div className="bg-[var(--twb-color-ink)] text-[var(--twb-color-text-on-dark)] p-8 md:p-12 flex flex-col items-start relative overflow-hidden">
               <div className="relative z-10">
                   <span className="text-[var(--twb-color-gold)] font-bold uppercase tracking-widest text-xs mb-3">New Arrival Promo</span>
                   <Typography variant="h3" className="mb-4 text-[var(--twb-color-text-on-dark)]">Cruxland Gin & Tonic Kit</Typography>
                   <p className="text-gray-300 mb-6">Receive a complimentary pack of premium tonics with every bottle of Cruxland Gin purchased this month.</p>
                   <Button className="mt-auto bg-[var(--twb-color-gold)] text-[var(--twb-color-ink)] hover:bg-white border-none">View Offer</Button>
               </div>
            </div>
         </div>

         {/* Products Grid */}
         <div className="mb-8 flex items-center justify-between border-b border-gray-200 pb-4">
             <div className="flex items-center gap-2">
                 <Tag className="text-[var(--twb-color-plum)]" size={20} />
                 <Typography variant="h3" className="m-0 text-[var(--twb-color-ink)] !text-2xl">On Sale Now</Typography>
             </div>
             <Link to="/shop/all" className="text-sm font-bold text-gray-500 hover:text-[var(--twb-color-ink)] uppercase tracking-wider">
                 View All Products
             </Link>
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
             {PROMO_PRODUCTS.map(product => (
                 <ProductCard key={product.id} product={product} />
             ))}
         </div>
      </Container>
    </Layout>
  );
};