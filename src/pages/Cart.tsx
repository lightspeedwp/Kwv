import React, { useState } from 'react';
import { Layout } from '../components/layout/Layout';
import { Container } from '../components/common/Container';
import { Typography } from '../components/common/Typography';
import { Button } from '../components/common/Button';
import { Link } from 'react-router-dom';
import { Minus, Plus, ChevronDown, ChevronUp, Frown } from 'lucide-react';
import { FAQSection } from '../components/sections/FAQSection';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { FloatingLabelInput } from '../components/common/FloatingLabelInput';
import { ProductCard } from '../components/shop/ProductCard';

// Mock Data consistent with MiniCart
interface CartItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  image: string;
  description?: string;
}

const INITIAL_ITEMS: CartItem[] = [
  {
    id: '1',
    name: 'Belt',
    price: 55.00,
    originalPrice: 65.00,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80',
    description: 'This is a simple product.'
  },
  {
    id: '2',
    name: 'Album',
    price: 15.00,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1507838153414-b4b713384ebd?auto=format&fit=crop&q=80',
    description: 'This is a simple, virtual product.'
  },
  {
    id: '3',
    name: 'Beanie',
    price: 18.00,
    originalPrice: 20.00,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&q=80',
    description: 'This is a simple product.'
  }
];

const NEW_IN_STORE_PRODUCTS = [
   {
      id: "new-1",
      name: "T-Shirt with Logo",
      price: 18.00,
      images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=400"],
      inStock: true,
      slug: "t-shirt-with-logo"
   },
   {
      id: "new-2",
      name: "WordPress Pennant",
      price: 11.05,
      images: ["https://images.unsplash.com/photo-1558882423-85d5b55db7c1?auto=format&fit=crop&q=80&w=400"],
      inStock: true,
      slug: "wordpress-pennant"
   },
   {
      id: "new-3",
      name: "Logo Collection",
      price: 35.00,
      images: ["https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&q=80&w=400"],
      inStock: true,
      slug: "logo-collection"
   },
   {
      id: "new-4",
      name: "Beanie with Logo",
      price: 18.00,
      originalPrice: 20.00,
      images: ["https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&q=80&w=400"],
      inStock: true,
      slug: "beanie-with-logo"
   }
];

export const Cart = () => {
  const [items, setItems] = useState<CartItem[]>(INITIAL_ITEMS);
  const [isCouponOpen, setIsCouponOpen] = useState(false);
  const [couponCode, setCouponCode] = useState('');

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const total = subtotal; // + shipping logic etc.

  const updateQuantity = (id: string, delta: number) => {
    setItems(items.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    }));
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  if (items.length === 0) {
    return (
      <Layout>
         <Container variant="content" className="py-20 text-center min-h-[50vh] flex flex-col items-center">
            {/* Sad Face */}
            <div className="mb-6 flex justify-center">
               <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center">
                  <Frown size={48} className="text-white" strokeWidth={2} />
               </div>
            </div>

            <Typography variant="h2" className="mb-12 font-normal text-2xl">Your cart is currently empty!</Typography>

            <div className="w-full max-w-6xl mx-auto mt-8">
               <div className="flex items-center justify-center gap-4 mb-10">
                  <div className="h-[1px] w-4 bg-gray-300"></div>
                  <div className="h-[1px] w-4 bg-gray-300"></div>
                  <div className="h-[1px] w-4 bg-gray-300"></div>
               </div>

               <Typography variant="h3" className="mb-8 font-normal text-3xl">New in store</Typography>

               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                  {NEW_IN_STORE_PRODUCTS.map(product => (
                     <ProductCard key={product.id} product={product} />
                  ))}
               </div>
            </div>
         </Container>
      </Layout>
    );
  }

  return (
    <Layout>
      <Container variant="site" className="py-20">
        <Typography variant="h1" className="mb-16 font-normal text-4xl md:text-5xl">Cart</Typography>
        
        <div className="flex flex-col lg:flex-row gap-16">
           {/* Left Column: Products */}
           <div className="flex-grow">
              <div className="flex justify-between border-b border-gray-200 pb-4 mb-8">
                 <span className="text-xs font-bold text-gray-500 tracking-wider">PRODUCT</span>
                 <span className="text-xs font-bold text-gray-500 tracking-wider">TOTAL</span>
              </div>

              <div className="space-y-10">
                 {items.map(item => (
                    <div key={item.id} className="flex gap-6 py-4 border-b border-gray-200">
                       {/* Image */}
                       <div className="w-24 h-24 bg-gray-50 flex-shrink-0">
                          <ImageWithFallback src={item.image} alt={item.name} className="w-full h-full object-cover" />
                       </div>
                       
                       {/* Details */}
                       <div className="flex-grow">
                          <div className="flex justify-between">
                             <div>
                                <Link to={`/product/${item.id}`} className="text-lg underline decoration-1 underline-offset-4 hover:text-[#8B0000] mb-1 block">
                                   {item.name}
                                </Link>
                                
                                <div className="mb-4">
                                   <div className="flex gap-3 items-baseline mb-2">
                                      {item.originalPrice && <span className="line-through text-gray-400">R {item.originalPrice.toFixed(2)}</span>}
                                      <span className="text-gray-900 font-medium">R {item.price.toFixed(2)}</span>
                                   </div>
                                   
                                   {item.originalPrice && (
                                      <span className="inline-block border border-gray-900 text-xs px-2 py-0.5 uppercase font-medium mb-2">
                                         Save R {(item.originalPrice - item.price).toFixed(2)}
                                      </span>
                                   )}
                                   
                                   {item.description && (
                                      <Typography variant="body" className="text-gray-500 text-sm">
                                         {item.description}
                                      </Typography>
                                   )}
                                </div>

                                <div className="flex items-center border border-gray-200 w-32 h-10 bg-white">
                                   <button onClick={() => updateQuantity(item.id, -1)} className="px-3 h-full hover:bg-gray-50 text-gray-600">
                                      <Minus size={14} />
                                   </button>
                                   <input 
                                      type="text" 
                                      readOnly 
                                      value={item.quantity} 
                                      className="w-full text-center text-sm font-medium border-none focus:ring-0 p-0"
                                   />
                                   <button onClick={() => updateQuantity(item.id, 1)} className="px-3 h-full hover:bg-gray-50 text-gray-600">
                                      <Plus size={14} />
                                   </button>
                                </div>
                                
                                <button 
                                   onClick={() => removeItem(item.id)} 
                                   className="text-sm text-gray-500 underline hover:text-black mt-3 block"
                                >
                                   Remove item
                                </button>
                             </div>
                             
                             {/* Line Total */}
                             <div className="text-right">
                                <span className="text-lg text-gray-900 font-normal">
                                   R {(item.price * item.quantity).toFixed(2)}
                                </span>
                             </div>
                          </div>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           {/* Right Column: Totals */}
           <div className="w-full lg:w-[400px] flex-shrink-0">
              <Typography variant="h4" className="mb-6 !text-xs font-bold text-gray-500 tracking-wider uppercase">Cart Totals</Typography>
              
              <div className="border-t border-gray-200 pt-6">
                 {/* Coupons */}
                 <div className="border-b border-gray-200 pb-6 mb-6">
                    <button 
                       onClick={() => setIsCouponOpen(!isCouponOpen)} 
                       className="flex items-center justify-between w-full text-left group"
                    >
                       <span className="text-gray-900 font-normal text-lg">Add coupons</span>
                       {isCouponOpen ? <ChevronUp size={20} className="text-gray-500" /> : <ChevronDown size={20} className="text-gray-500" />}
                    </button>
                    
                    {isCouponOpen && (
                       <div className="mt-4 flex gap-2 items-start">
                          <FloatingLabelInput
                              label="Enter code"
                              value={couponCode}
                              onChange={(e) => setCouponCode(e.target.value)}
                              className="flex-1"
                          />
                          <Button className="bg-[#111111] text-white hover:bg-black rounded-none h-12 px-8 font-medium text-sm">
                             Apply
                          </Button>
                       </div>
                    )}
                 </div>

                 {/* Totals Table */}
                 <div className="space-y-6">
                    <div className="flex justify-between items-center">
                       <span className="text-gray-600">Pickup (Dispatch)</span>
                       <span className="text-gray-900 font-medium">FREE</span>
                    </div>
                    
                    <div className="flex justify-between items-baseline pt-4 border-t border-gray-200">
                       <span className="text-xl font-bold text-gray-900">Estimated total</span>
                       <span className="text-2xl font-bold text-gray-900">R {total.toFixed(2)}</span>
                    </div>
                    
                    <div className="pt-4">
                       <Link to="/checkout">
                          <Button fullWidth className="bg-[#111111] text-white hover:bg-black h-14 text-base font-medium rounded-none">
                             Proceed to Checkout
                          </Button>
                       </Link>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </Container>
      
      <FAQSection items={[
        { question: "How do I use a promo code?", answer: "Click on 'Add coupons' in the Cart Totals section, enter your code, and click Apply." },
        { question: "What if I want to change my order?", answer: "You can update quantities or remove items directly in the cart before proceeding to checkout." },
        { question: "Is shipping included?", answer: "Shipping costs are calculated at checkout based on your delivery address." }
      ]} />
    </Layout>
  );
};