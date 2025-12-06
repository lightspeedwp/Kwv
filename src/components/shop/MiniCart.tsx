import React, { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from '../ui/sheet';
import { Button } from '../common/Button';
import { Typography } from '../common/Typography';
import { ShoppingBag, X, Minus, Plus, Trash2 } from 'lucide-react';
import { COLORS } from '../../constants/theme';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../figma/ImageWithFallback';

// Mock Cart Item
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const INITIAL_ITEMS: CartItem[] = [
  {
    id: '1',
    name: 'The Mentors Orchestra 2020',
    price: 429.00,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1702776095041-6b8bd4f292de?auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    name: 'Laborie Merlot 2022',
    price: 85.00,
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1695048475495-6535686c473c?auto=format&fit=crop&q=80'
  }
];

export const MiniCart: React.FC = () => {
  const [items, setItems] = useState<CartItem[]>(INITIAL_ITEMS);
  const [isOpen, setIsOpen] = useState(false);

  const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

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

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button className="p-2 hover:opacity-70 relative" aria-label="Cart">
           <ShoppingBag size={20} color="white" />
           {items.length > 0 && (
             <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#DAA520] text-[#2C1810] text-[10px] flex items-center justify-center font-bold">
               {items.reduce((acc, i) => acc + i.quantity, 0)}
             </span>
           )}
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:w-[400px] bg-white p-0 flex flex-col">
        <SheetHeader className="p-6 border-b border-gray-100 bg-[#F9F9F9]">
          <SheetTitle className="text-left flex items-center gap-2">
            <ShoppingBag size={20} color={COLORS.darkBrown} />
            <span className="text-lg text-[#2C1810] font-serif font-bold">Your Cart</span>
            <span className="ml-auto text-sm font-normal text-gray-500">{items.length} Items</span>
          </SheetTitle>
          <SheetDescription className="sr-only">
            Review your selected items before checkout.
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
               <Typography variant="body" className="text-gray-500 mb-6">Your cart is empty.</Typography>
               <Button onClick={() => setIsOpen(false)} className="w-full">Continue Shopping</Button>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex gap-4">
                 <div className="w-20 h-24 bg-gray-50 rounded-sm overflow-hidden flex-shrink-0">
                    <ImageWithFallback src={item.image} alt={item.name} className="w-full h-full object-cover" />
                 </div>
                 <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                       <Typography variant="h4" className="!text-sm line-clamp-2">{item.name}</Typography>
                       <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-500">
                          <Trash2 size={16} />
                       </button>
                    </div>
                    <Typography variant="caption" className="text-gray-500 mb-3">Unit Price: R {item.price.toFixed(2)}</Typography>
                    
                    <div className="flex justify-between items-center">
                       <div className="flex items-center border border-gray-200 rounded-sm">
                          <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:bg-gray-100"><Minus size={14} /></button>
                          <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:bg-gray-100"><Plus size={14} /></button>
                       </div>
                       <Typography variant="h4" className="!text-base font-bold text-[#2C1810]">
                          R {(item.price * item.quantity).toFixed(2)}
                       </Typography>
                    </div>
                 </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-gray-100 bg-[#F9F9F9]">
             <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600 font-medium">Subtotal</span>
                <span className="text-xl font-bold font-serif text-[#2C1810]">R {total.toFixed(2)}</span>
             </div>
             <Typography variant="caption" className="text-gray-500 mb-6 block">
                Shipping and taxes calculated at checkout.
             </Typography>
             <div className="space-y-3">
                <Link to="/checkout" onClick={() => setIsOpen(false)}>
                   <Button className="w-full bg-[#8B0000] text-white hover:bg-[#600000] py-4">Checkout</Button>
                </Link>
                <Link to="/cart" onClick={() => setIsOpen(false)}>
                   <Button variant="outline" className="w-full">View Cart</Button>
                </Link>
             </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
