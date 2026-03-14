# Cart & Mini Cart Components

**Category:** Components  
**Domain:** E-commerce Shopping Cart  
**Version:** 1.0  
**Last Updated:** 2024-03-13  
**Status:** Active

---

## Overview

The shopping cart is the **heart of e-commerce conversion**. The Wire Brand implements two cart experiences: a **Mini Cart** (slide-out drawer) for quick access, and a **Full Cart Page** for detailed review before checkout.

**Cart Component Types:**
1. **Mini Cart** - Slide-out drawer (header/global access)
2. **Cart Page** - Full-page cart review
3. **Cart Button** - Icon with badge count
4. **Cart Item** - Individual product row

**Key Features:**
- Real-time quantity updates
- Remove items
- Apply discount codes
- Calculate totals (subtotal, tax, shipping, total)
- Persistent state (localStorage/session)
- Empty state handling
- Free shipping threshold progress

---

## 1. Cart Button (Header)

### Icon with Badge Count

```tsx
/**
 * CartButton Component
 * 
 * Cart icon in header with item count badge.
 * Opens mini cart drawer on click.
 * 
 * @param {Object} props
 * @param {Function} props.onClick - Click handler to open mini cart
 */

import { ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../hooks/useCart';

export function CartButton({ onClick }: { onClick: () => void }) {
  const { itemCount, totalItems } = useCart();
  
  return (
    <button
      onClick={onClick}
      className="relative p-2 min-w-[44px] min-h-[44px] hover:bg-white/10 rounded-full transition-colors"
      aria-label={`Shopping cart with ${itemCount} items`}
    >
      <ShoppingCart className="h-6 w-6 text-white" />
      
      {/* Badge count */}
      <AnimatePresence>
        {itemCount > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute -top-1 -right-1 flex items-center justify-center min-w-[20px] h-5 px-1 bg-[var(--twb-color-clay)] text-white text-xs font-semibold rounded-full"
          >
            {itemCount > 99 ? '99+' : itemCount}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
```

---

## 2. Mini Cart Drawer

### Slide-Out Cart Panel

```tsx
/**
 * MiniCart Component
 * 
 * Slide-out cart drawer for quick cart access.
 * 
 * Features:
 * - Cart item list with remove/update
 * - Subtotal calculation
 * - Proceed to checkout CTA
 * - View cart page link
 * - Empty state
 * - Free shipping progress bar
 * 
 * @param {Object} props
 * @param {boolean} props.isOpen - Drawer open state
 * @param {Function} props.onClose - Close drawer handler
 */

import * as Dialog from '@radix-ui/react-dialog';
import { X, ShoppingCart, ArrowRight, Package } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { useCart } from '../hooks/useCart';
import { MiniCartItem } from './MiniCartItem';

interface MiniCartProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MiniCart({ isOpen, onClose }: MiniCartProps) {
  const { items, subtotal, itemCount, shippingThreshold } = useCart();
  
  const freeShippingThreshold = shippingThreshold || 500; // R500 for free shipping
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const freeShippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay asChild>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
        </Dialog.Overlay>
        
        <Dialog.Content asChild>
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[440px] bg-white shadow-twb-2xl z-50 flex flex-col"
          >
            
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[var(--twb-border-tertiary)]">
              <Dialog.Title className="text-2xl font-serif text-[var(--twb-color-ink)]">
                Shopping Cart ({itemCount})
              </Dialog.Title>
              
              <Dialog.Close asChild>
                <button
                  className="p-2 hover:bg-[var(--twb-color-ink)]/5 rounded-full transition-colors"
                  aria-label="Close cart"
                >
                  <X className="h-5 w-5 text-[var(--twb-color-ink)]" />
                </button>
              </Dialog.Close>
            </div>
            
            {/* Free shipping progress */}
            {remainingForFreeShipping > 0 && (
              <div className="px-6 py-4 bg-[var(--twb-color-paper)]">
                <p className="text-sm text-[var(--twb-color-vine)] mb-2">
                  Add <strong className="text-[var(--twb-color-plum)]">R{remainingForFreeShipping.toFixed(2)}</strong> more for free shipping!
                </p>
                
                <div className="h-2 bg-white rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${freeShippingProgress}%` }}
                    className="h-full bg-[var(--twb-color-vine)]"
                  />
                </div>
              </div>
            )}
            
            {items.length === 0 ? (
              /* Empty state */
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                <Package className="h-20 w-20 text-[var(--twb-color-vine)] mb-4" />
                
                <h3 className="text-xl font-serif mb-2 text-[var(--twb-color-ink)]">
                  Your cart is empty
                </h3>
                
                <p className="text-[var(--twb-color-vine)] mb-6">
                  Let's find you some great wines!
                </p>
                
                <button
                  onClick={onClose}
                  className="bg-[var(--twb-color-plum)] text-white px-6 py-3 rounded-twb-md font-semibold hover:shadow-twb-md transition-shadow"
                  style={{ transform: 'rotate(-0.3deg)' }}
                >
                  <Link to="/wines">Shop Wines</Link>
                </button>
              </div>
            ) : (
              <>
                {/* Cart items */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {items.map((item) => (
                    <MiniCartItem key={item.id} item={item} />
                  ))}
                </div>
                
                {/* Footer */}
                <div className="border-t border-[var(--twb-border-tertiary)] p-6 space-y-4">
                  
                  {/* Subtotal */}
                  <div className="flex items-center justify-between text-lg">
                    <span className="font-medium text-[var(--twb-color-ink)]">Subtotal</span>
                    <span className="font-semibold text-[var(--twb-color-plum)]">
                      R{subtotal.toFixed(2)}
                    </span>
                  </div>
                  
                  <p className="text-sm text-[var(--twb-color-vine)]">
                    Taxes and shipping calculated at checkout
                  </p>
                  
                  {/* CTAs */}
                  <div className="space-y-3">
                    <Link
                      to="/checkout/shipping"
                      onClick={onClose}
                      className="block w-full bg-[var(--twb-color-plum)] text-white py-4 rounded-twb-md font-semibold text-center hover:shadow-twb-lg transition-shadow"
                      style={{ transform: 'rotate(-0.3deg)' }}
                    >
                      Proceed to Checkout
                    </Link>
                    
                    <Link
                      to="/cart"
                      onClick={onClose}
                      className="block w-full border-2 border-[var(--twb-border-tertiary)] text-[var(--twb-color-ink)] py-3 rounded-twb-md font-medium text-center hover:border-[var(--twb-color-plum)] hover:bg-[var(--twb-color-plum)]/5 transition-colors flex items-center justify-center gap-2"
                    >
                      <span>View Full Cart</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  
                </div>
              </>
            )}
            
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
```

---

## 3. Mini Cart Item

### Individual Product Row in Drawer

```tsx
/**
 * MiniCartItem Component
 * 
 * Single cart item in mini cart drawer.
 * Compact layout with image, name, price, quantity, remove.
 */

import { Minus, Plus, X } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';
import { useCart } from '../hooks/useCart';
import type { CartItem } from '../types';

export function MiniCartItem({ item }: { item: CartItem }) {
  const { updateQuantity, removeItem } = useCart();
  const [isUpdating, setIsUpdating] = useState(false);
  
  const handleUpdateQuantity = async (newQuantity: number) => {
    setIsUpdating(true);
    await updateQuantity(item.id, newQuantity);
    setIsUpdating(false);
  };
  
  return (
    <div className="flex gap-4">
      
      {/* Image */}
      <Link to={`/wines/${item.slug}`} className="flex-shrink-0">
        <div className="w-20 h-20 overflow-hidden rounded-twb-sm bg-[var(--twb-color-paper)]">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      
      {/* Details */}
      <div className="flex-1 min-w-0">
        <Link
          to={`/wines/${item.slug}`}
          className="font-medium text-[var(--twb-color-ink)] hover:text-[var(--twb-color-plum)] transition-colors line-clamp-2 mb-1"
        >
          {item.name}
        </Link>
        
        <p className="text-sm text-[var(--twb-color-vine)] mb-2">
          {item.vintage}
        </p>
        
        <div className="flex items-center justify-between">
          {/* Quantity controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleUpdateQuantity(item.quantity - 1)}
              disabled={item.quantity <= 1 || isUpdating}
              className="p-1 border border-[var(--twb-border-tertiary)] rounded hover:bg-[var(--twb-color-ink)]/5 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Decrease quantity"
            >
              <Minus className="h-3 w-3" />
            </button>
            
            <span className="w-8 text-center text-sm font-medium">
              {item.quantity}
            </span>
            
            <button
              onClick={() => handleUpdateQuantity(item.quantity + 1)}
              disabled={item.quantity >= 12 || isUpdating}
              className="p-1 border border-[var(--twb-border-tertiary)] rounded hover:bg-[var(--twb-color-ink)]/5 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Increase quantity"
            >
              <Plus className="h-3 w-3" />
            </button>
          </div>
          
          {/* Price */}
          <p className="font-semibold text-[var(--twb-color-plum)]">
            R{(item.price * item.quantity).toFixed(2)}
          </p>
        </div>
      </div>
      
      {/* Remove button */}
      <button
        onClick={() => removeItem(item.id)}
        className="flex-shrink-0 p-1 text-[var(--twb-border-error)] hover:bg-[var(--twb-border-error)]/10 rounded transition-colors"
        aria-label={`Remove ${item.name} from cart`}
      >
        <X className="h-4 w-4" />
      </button>
      
    </div>
  );
}
```

---

## 4. Full Cart Page

### Detailed Cart Review Page

```tsx
/**
 * CartPage Component
 * 
 * Full-page cart for detailed review before checkout.
 * 
 * Features:
 * - Cart item list (larger, more details)
 * - Quantity updates
 * - Remove items
 * - Apply discount codes
 * - Order summary sidebar
 * - Proceed to checkout CTA
 * - Continue shopping link
 * - Empty state
 */

import { Link, useNavigate } from 'react-router';
import { Package, ArrowLeft, Tag } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../hooks/useCart';
import { CartItem } from './CartItem';
import { Container } from './Container';

export default function CartPage() {
  const navigate = useNavigate();
  const { items, subtotal, tax, shipping, total, applyDiscount } = useCart();
  const [discountCode, setDiscountCode] = useState('');
  const [isApplyingDiscount, setIsApplyingDiscount] = useState(false);
  
  const handleApplyDiscount = async () => {
    if (!discountCode.trim()) return;
    
    setIsApplyingDiscount(true);
    await applyDiscount(discountCode);
    setIsApplyingDiscount(false);
  };
  
  if (items.length === 0) {
    return (
      <Container className="py-20">
        <div className="max-w-2xl mx-auto text-center">
          <Package className="h-24 w-24 text-[var(--twb-color-vine)] mx-auto mb-6" />
          
          <h1 className="text-4xl font-serif mb-4 text-[var(--twb-color-ink)]">
            Your cart is empty
          </h1>
          
          <p className="text-xl text-[var(--twb-color-vine)] mb-8">
            Let's find you some great wines!
          </p>
          
          <button
            onClick={() => navigate('/wines')}
            className="inline-flex items-center gap-2 bg-[var(--twb-color-plum)] text-white px-8 py-4 rounded-twb-md font-semibold hover:shadow-twb-lg transition-shadow"
            style={{ transform: 'rotate(-0.3deg)' }}
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Shop Wines</span>
          </button>
        </div>
      </Container>
    );
  }
  
  return (
    <Container className="py-12">
      
      {/* Page title */}
      <div className="mb-8">
        <h1 className="text-4xl font-serif mb-2 text-[var(--twb-color-ink)]">
          Shopping Cart
        </h1>
        <p className="text-[var(--twb-color-vine)]">
          {items.length} {items.length === 1 ? 'item' : 'items'} in your cart
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Cart items */}
        <div className="lg:col-span-2 space-y-6">
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          
          {/* Continue shopping */}
          <Link
            to="/wines"
            className="inline-flex items-center gap-2 text-[var(--twb-color-plum)] font-medium hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Continue Shopping</span>
          </Link>
        </div>
        
        {/* Order summary sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 border border-[var(--twb-border-tertiary)] rounded-twb-lg p-6 bg-white">
            
            <h2 className="text-2xl font-serif mb-6 text-[var(--twb-color-ink)]">
              Order Summary
            </h2>
            
            {/* Discount code */}
            <div className="mb-6">
              <label htmlFor="discount-code" className="block text-sm font-medium text-[var(--twb-color-ink)] mb-2">
                Discount Code
              </label>
              
              <div className="flex gap-2">
                <input
                  id="discount-code"
                  type="text"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  placeholder="Enter code"
                  className="flex-1 h-11 px-4 border border-[var(--twb-border-tertiary)] rounded-twb-sm text-[var(--twb-color-ink)] focus:outline-none focus:border-[var(--twb-color-plum)]"
                />
                
                <button
                  onClick={handleApplyDiscount}
                  disabled={!discountCode.trim() || isApplyingDiscount}
                  className="px-4 bg-[var(--twb-color-vine)] text-white rounded-twb-sm font-medium hover:shadow-twb-md transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isApplyingDiscount ? (
                    <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Tag className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
            
            {/* Summary breakdown */}
            <div className="space-y-3 mb-6 pb-6 border-b border-[var(--twb-border-tertiary)]">
              <div className="flex items-center justify-between text-[var(--twb-color-ink)]">
                <span>Subtotal</span>
                <span>R{subtotal.toFixed(2)}</span>
              </div>
              
              <div className="flex items-center justify-between text-[var(--twb-color-ink)]">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'FREE' : `R${shipping.toFixed(2)}`}</span>
              </div>
              
              <div className="flex items-center justify-between text-[var(--twb-color-ink)]">
                <span>Tax (15%)</span>
                <span>R{tax.toFixed(2)}</span>
              </div>
            </div>
            
            {/* Total */}
            <div className="flex items-center justify-between text-xl font-semibold mb-6">
              <span className="text-[var(--twb-color-ink)]">Total</span>
              <span className="text-[var(--twb-color-plum)]">R{total.toFixed(2)}</span>
            </div>
            
            {/* Checkout CTA */}
            <button
              onClick={() => navigate('/checkout/shipping')}
              className="w-full bg-[var(--twb-color-plum)] text-white py-4 rounded-twb-md font-semibold text-lg hover:shadow-twb-lg transition-shadow mb-3"
              style={{ transform: 'rotate(-0.3deg)' }}
            >
              Proceed to Checkout
            </button>
            
            {/* Security badge */}
            <div className="flex items-center justify-center gap-2 text-sm text-[var(--twb-color-vine)]">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Secure checkout</span>
            </div>
            
          </div>
        </div>
        
      </div>
      
    </Container>
  );
}
```

---

## 5. Full Cart Item

### Larger Item Row for Cart Page

```tsx
/**
 * CartItem Component
 * 
 * Full cart item for cart page (larger, more detailed).
 */

import { Minus, Plus, Trash2, Heart } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';
import { useCart } from '../hooks/useCart';
import { useWishlist } from '../hooks/useWishlist';
import type { CartItem as CartItemType } from '../types';

export function CartItem({ item }: { item: CartItemType }) {
  const { updateQuantity, removeItem } = useCart();
  const { addToWishlist } = useWishlist();
  const [isUpdating, setIsUpdating] = useState(false);
  
  const handleUpdateQuantity = async (newQuantity: number) => {
    setIsUpdating(true);
    await updateQuantity(item.id, newQuantity);
    setIsUpdating(false);
  };
  
  const handleMoveToWishlist = async () => {
    await addToWishlist(item.id);
    await removeItem(item.id);
  };
  
  return (
    <div className="flex flex-col sm:flex-row gap-6 p-6 border border-[var(--twb-border-tertiary)] rounded-twb-lg hover:border-[var(--twb-color-plum)]/30 transition-colors">
      
      {/* Image */}
      <Link to={`/wines/${item.slug}`} className="sm:w-32 flex-shrink-0">
        <div className="aspect-[3/4] overflow-hidden rounded-twb-md bg-[var(--twb-color-paper)]">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      
      {/* Details */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
          <div className="flex-1">
            <Link
              to={`/wines/${item.slug}`}
              className="text-xl font-serif text-[var(--twb-color-ink)] hover:text-[var(--twb-color-plum)] transition-colors line-clamp-2 mb-2"
            >
              {item.name}
            </Link>
            
            <p className="text-[var(--twb-color-vine)] mb-2">
              {item.vintage} • {item.categoryName}
            </p>
            
            <div className="flex items-center gap-4 text-sm text-[var(--twb-color-vine)]">
              {item.isOrganic && (
                <span className="flex items-center gap-1">
                  <svg className="h-4 w-4" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 2L6 6L2 7L5.5 10L4.5 14L8 12L11.5 14L10.5 10L14 7L10 6L8 2Z" />
                  </svg>
                  Organic
                </span>
              )}
              <span>{item.alcohol}% ABV</span>
            </div>
          </div>
          
          {/* Price */}
          <div className="text-right">
            <p className="text-2xl font-semibold text-[var(--twb-color-plum)]">
              R{(item.price * item.quantity).toFixed(2)}
            </p>
            <p className="text-sm text-[var(--twb-color-vine)]">
              R{item.price} each
            </p>
          </div>
        </div>
        
        {/* Actions */}
        <div className="flex flex-wrap items-center gap-4">
          
          {/* Quantity */}
          <div className="flex items-center gap-3">
            <label htmlFor={`quantity-${item.id}`} className="text-sm font-medium text-[var(--twb-color-ink)]">
              Qty:
            </label>
            
            <button
              onClick={() => handleUpdateQuantity(item.quantity - 1)}
              disabled={item.quantity <= 1 || isUpdating}
              className="p-2 border border-[var(--twb-border-tertiary)] rounded-twb-sm hover:bg-[var(--twb-color-ink)]/5 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Decrease quantity"
            >
              <Minus className="h-4 w-4" />
            </button>
            
            <input
              id={`quantity-${item.id}`}
              type="number"
              min="1"
              max="12"
              value={item.quantity}
              onChange={(e) => handleUpdateQuantity(parseInt(e.target.value) || 1)}
              className="w-16 h-10 text-center border border-[var(--twb-border-tertiary)] rounded-twb-sm text-[var(--twb-color-ink)] font-medium focus:outline-none focus:border-[var(--twb-color-plum)]"
              disabled={isUpdating}
            />
            
            <button
              onClick={() => handleUpdateQuantity(item.quantity + 1)}
              disabled={item.quantity >= 12 || isUpdating}
              className="p-2 border border-[var(--twb-border-tertiary)] rounded-twb-sm hover:bg-[var(--twb-color-ink)]/5 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Increase quantity"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          
          {/* Move to wishlist */}
          <button
            onClick={handleMoveToWishlist}
            className="flex items-center gap-2 text-sm text-[var(--twb-color-ink)] hover:text-[var(--twb-color-plum)] transition-colors"
          >
            <Heart className="h-4 w-4" />
            <span>Save for Later</span>
          </button>
          
          {/* Remove */}
          <button
            onClick={() => removeItem(item.id)}
            className="flex items-center gap-2 text-sm text-[var(--twb-border-error)] hover:underline"
          >
            <Trash2 className="h-4 w-4" />
            <span>Remove</span>
          </button>
          
        </div>
      </div>
      
    </div>
  );
}
```

---

## Cart State Management (Hook)

### useCart Hook Example

```tsx
/**
 * useCart Hook
 * 
 * Cart state management with localStorage persistence.
 */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartItem {
  id: string;
  slug: string;
  name: string;
  vintage: number;
  price: number;
  salePrice?: number;
  image: string;
  quantity: number;
  categoryName: string;
  alcohol: number;
  isOrganic: boolean;
}

interface CartState {
  items: CartItem[];
  addItem: (wine: Wine, quantity: number) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (wine, quantity) => {
        const existingItem = get().items.find(item => item.id === wine.id);
        
        if (existingItem) {
          set({
            items: get().items.map(item =>
              item.id === wine.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
          });
        } else {
          set({
            items: [...get().items, { ...wine, quantity }],
          });
        }
      },
      
      updateQuantity: (id, quantity) => {
        if (quantity < 1) return;
        
        set({
          items: get().items.map(item =>
            item.id === id ? { ...item, quantity } : item
          ),
        });
      },
      
      removeItem: (id) => {
        set({
          items: get().items.filter(item => item.id !== id),
        });
      },
      
      clearCart: () => {
        set({ items: [] });
      },
      
      get itemCount() {
        return get().items.reduce((sum, item) => sum + item.quantity, 0);
      },
      
      get subtotal() {
        return get().items.reduce(
          (sum, item) => sum + (item.salePrice || item.price) * item.quantity,
          0
        );
      },
      
      get tax() {
        return get().subtotal * 0.15; // 15% VAT
      },
      
      get shipping() {
        const subtotal = get().subtotal;
        return subtotal >= 500 ? 0 : 150; // Free shipping over R500
      },
      
      get total() {
        return get().subtotal + get().tax + get().shipping;
      },
    }),
    {
      name: 'wire-cart-storage',
    }
  )
);
```

---

## Related Guidelines

- [Product Card](/guidelines/components/product-card.md) - Add to cart functionality
- [Checkout Flow](/guidelines/patterns/checkout-flow.md) - Next step after cart
- [UI Library](/guidelines/components/ui-library.md) - Radix Dialog for mini cart

---

## Changelog

### Version 1.0 (2024-03-13)
- Cart button with badge count created
- Mini cart drawer implemented
- Mini cart item component added
- Full cart page designed
- Full cart item component created
- Cart state management hook example provided
- Free shipping progress bar added
- Empty states handled

---

**Questions or Issues?**  
Contact the component library team for cart implementation support.
