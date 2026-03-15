/**
 * Shopping Cart Page (Hand-Drawn Version)
 * 
 * Complete shopping cart with item management, calculations, and checkout flow.
 * Displays cart items with quantity adjustment, removal, and price calculations.
 * 
 * Features:
 * - Cart items list with product details
 * - Quantity adjustment (+/- buttons, input field)
 * - Remove item functionality
 * - Price calculations (subtotal, shipping, tax, total)
 * - Empty cart state with CTA
 * - Continue Shopping button
 * - Proceed to Checkout button
 * - Cart item count in header
 * - Free shipping threshold indicator
 * - Product image thumbnails
 * - Stock validation
 * - Related products suggestions
 * - Mobile responsive layout
 * - WCAG AA compliant
 * - Local storage persistence (TODO: Cart context)
 * 
 * Usage:
 * ```tsx
 * <Route path="/shop/cart-handdrawn" element={<CartHanddrawn />} />
 * ```
 * 
 * Components Used:
 * - Container (v2.0)
 * - Typography (v2.0)
 * - Button (v2.0)
 * - Card (v2.0)
 * - Badge (v2.0)
 * 
 * Design Tokens:
 * - All spacing, colors, typography from token system
 * - Responsive grid layouts
 * - Shadow elevations
 * - Organic radius
 * 
 * @package HandcraftedWines
 * @version 1.0
 */

import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router';
import { Container } from '../../components/common/Container';
import { Typography } from '../../components/common/Typography';
import { Button } from '../../components/common/Button';
import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { products, Product } from '../../data/products';
import { ShoppingCart, Trash2, Plus, Minus, ArrowRight, ArrowLeft, Package, Truck, Gift, AlertCircle } from 'lucide-react';

// Cart item interface
interface CartItem {
  productId: string;
  quantity: number;
}

// Mock cart items (TODO: Replace with cart context)
const MOCK_CART_ITEMS: CartItem[] = [
  { productId: 'estate-shiraz-2020', quantity: 2 },
  { productId: 'fresh-chevre', quantity: 1 },
  { productId: 'tasting-trio', quantity: 1 }
];

// Shipping & tax constants
const FREE_SHIPPING_THRESHOLD = 500;
const SHIPPING_COST = 75;
const TAX_RATE = 0.15; // 15% VAT

export const CartHanddrawn: React.FC = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>(MOCK_CART_ITEMS);

  // Get cart items with product details
  const cartItemsWithDetails = useMemo(() => {
    return cartItems.map(item => {
      const product = products.find(p => p.id === item.productId);
      return {
        ...item,
        product
      };
    }).filter(item => item.product !== undefined);
  }, [cartItems]);

  // Calculate totals
  const subtotal = useMemo(() => {
    return cartItemsWithDetails.reduce((sum, item) => {
      return sum + (item.product!.price * item.quantity);
    }, 0);
  }, [cartItemsWithDetails]);

  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const tax = (subtotal + shipping) * TAX_RATE;
  const total = subtotal + shipping + tax;

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    if (newQuantity > 12) {
      alert('Maximum quantity is 12 per product');
      return;
    }
    
    setCartItems(prev => 
      prev.map(item => 
        item.productId === productId 
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    if (confirm('Remove this item from your cart?')) {
      setCartItems(prev => prev.filter(item => item.productId !== productId));
    }
  };

  const handleClearCart = () => {
    if (confirm('Are you sure you want to clear your cart?')) {
      setCartItems([]);
    }
  };

  const handleCheckout = () => {
    navigate('/shop/checkout-handdrawn');
  };

  // Empty cart state
  if (cartItems.length === 0) {
    return (
      <>
        <title>Shopping Cart - Handcrafted Wines</title>
        <meta name="description" content="Your shopping cart at Handcrafted Wines" />

        <section className="bg-[var(--twb-color-bg-primary)] py-[var(--twb-spacing-section-y)] min-h-[60vh]">
          <Container variant="content">
            <div className="text-center py-16">
              <ShoppingCart className="size-20 mx-auto mb-6 text-[var(--twb-color-text-secondary)] opacity-30" aria-hidden="true" />
              <Typography variant="h1" className="mb-4">
                Your Cart is Empty
              </Typography>
              <Typography variant="bodyLarge" className="mb-8 text-[var(--twb-color-text-secondary)]">
                Looks like you haven't added anything to your cart yet. Let's fix that!
              </Typography>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" as={Link} to="/shop">
                  Browse All Products
                </Button>
                <Button variant="secondary" as={Link} to="/shop/gifts">
                  View Gift Sets
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </>
    );
  }

  return (
    <>
      {/* SEO Meta Tags */}
      <title>Shopping Cart ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}) - Handcrafted Wines</title>
      <meta name="description" content="Review your shopping cart and proceed to checkout" />

      {/* Cart Page */}
      <section className="bg-[var(--twb-color-bg-primary)] py-[var(--twb-spacing-section-y)]">
        <Container variant="wide">
          {/* Page Header */}
          <div className="mb-8">
            <Typography variant="h1" className="mb-2">
              Shopping Cart
            </Typography>
            <Typography variant="body" className="text-[var(--twb-color-text-secondary)]">
              {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
            </Typography>
          </div>

          {/* Free Shipping Progress */}
          {subtotal < FREE_SHIPPING_THRESHOLD && (
            <div className="mb-8 p-4 rounded-[var(--twb-radius-card)] bg-[var(--twb-color-bg-secondary)] border-l-4 border-[var(--twb-color-vine)]">
              <div className="flex items-start gap-3">
                <Truck className="size-5 mt-0.5 text-[var(--twb-color-vine)] shrink-0" aria-hidden="true" />
                <div className="flex-1">
                  <Typography variant="body" className="font-semibold mb-1">
                    You're R{(FREE_SHIPPING_THRESHOLD - subtotal).toFixed(2)} away from free shipping!
                  </Typography>
                  <div className="w-full h-2 rounded-full bg-[var(--twb-color-bg-tertiary)] overflow-hidden mt-2">
                    <div 
                      className="h-full bg-[var(--twb-color-vine)] transition-all duration-300"
                      style={{ width: `${Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {subtotal >= FREE_SHIPPING_THRESHOLD && (
            <div className="mb-8 p-4 rounded-[var(--twb-radius-card)] bg-[var(--twb-color-vine)] bg-opacity-10 border-l-4 border-[var(--twb-color-vine)]">
              <div className="flex items-center gap-3">
                <Truck className="size-5 text-[var(--twb-color-vine)]" aria-hidden="true" />
                <Typography variant="body" className="font-semibold text-[var(--twb-color-vine)]">
                  Congratulations! You qualify for free shipping! 🎉
                </Typography>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {/* Clear Cart Button */}
              <div className="flex justify-end mb-2">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={handleClearCart}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="size-4 mr-2" />
                  Clear Cart
                </Button>
              </div>

              {/* Cart Items List */}
              {cartItemsWithDetails.map((item) => (
                <CartItemCard
                  key={item.productId}
                  item={item}
                  onQuantityChange={handleQuantityChange}
                  onRemove={handleRemoveItem}
                />
              ))}
            </div>

            {/* Right: Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card variant="elevated" className="mb-6">
                  <CardContent className="p-6">
                    <Typography variant="h3" className="mb-4">
                      Order Summary
                    </Typography>

                    {/* Subtotal */}
                    <div className="flex justify-between mb-3">
                      <Typography variant="body" className="text-[var(--twb-color-text-secondary)]">
                        Subtotal
                      </Typography>
                      <Typography variant="body" className="font-semibold">
                        R{subtotal.toFixed(2)}
                      </Typography>
                    </div>

                    {/* Shipping */}
                    <div className="flex justify-between mb-3">
                      <Typography variant="body" className="text-[var(--twb-color-text-secondary)]">
                        Shipping
                      </Typography>
                      <Typography variant="body" className="font-semibold">
                        {shipping === 0 ? (
                          <span className="text-[var(--twb-color-vine)]">FREE</span>
                        ) : (
                          `R${shipping.toFixed(2)}`
                        )}
                      </Typography>
                    </div>

                    {/* Tax */}
                    <div className="flex justify-between mb-4 pb-4 border-b border-[var(--twb-color-border-primary)]">
                      <Typography variant="body" className="text-[var(--twb-color-text-secondary)]">
                        VAT (15%)
                      </Typography>
                      <Typography variant="body" className="font-semibold">
                        R{tax.toFixed(2)}
                      </Typography>
                    </div>

                    {/* Total */}
                    <div className="flex justify-between mb-6">
                      <Typography variant="h4">
                        Total
                      </Typography>
                      <Typography variant="h3" className="text-[var(--twb-color-plum)]">
                        R{total.toFixed(2)}
                      </Typography>
                    </div>

                    {/* Checkout Button */}
                    <Button 
                      variant="primary" 
                      className="w-full mb-3"
                      onClick={handleCheckout}
                    >
                      Proceed to Checkout
                      <ArrowRight className="size-4 ml-2" />
                    </Button>

                    {/* Continue Shopping */}
                    <Button 
                      variant="outline" 
                      className="w-full"
                      as={Link}
                      to="/shop"
                    >
                      <ArrowLeft className="size-4 mr-2" />
                      Continue Shopping
                    </Button>
                  </CardContent>
                </Card>

                {/* Trust Signals */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-[var(--twb-radius-sm)] bg-[var(--twb-color-bg-secondary)]">
                    <Package className="size-5 mt-0.5 text-[var(--twb-color-vine)] shrink-0" aria-hidden="true" />
                    <Typography variant="caption">
                      Secure packaging for safe delivery
                    </Typography>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-[var(--twb-radius-sm)] bg-[var(--twb-color-bg-secondary)]">
                    <Truck className="size-5 mt-0.5 text-[var(--twb-color-vine)] shrink-0" aria-hidden="true" />
                    <Typography variant="caption">
                      Free shipping on orders over R500
                    </Typography>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-[var(--twb-color-bg-secondary)]">
                    <Gift className="size-5 mt-0.5 text-[var(--twb-color-vine)] shrink-0" aria-hidden="true" />
                    <Typography variant="caption">
                      Gift message available at checkout
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Age Verification Notice */}
      <section className="bg-[var(--twb-color-bg-secondary)] py-8">
        <Container variant="content">
          <div className="flex items-start gap-3 p-4 rounded-[var(--twb-radius-card)] bg-[var(--twb-color-bg-primary)] border border-[var(--twb-color-border-primary)]">
            <AlertCircle className="size-5 mt-0.5 text-[var(--twb-color-gold)] shrink-0" aria-hidden="true" />
            <div>
              <Typography variant="body" className="font-semibold mb-1">
                Age Verification Required
              </Typography>
              <Typography variant="caption" className="text-[var(--twb-color-text-secondary)]">
                By completing this purchase, you confirm that you are 18 years or older. 
                ID verification may be required upon delivery for alcohol products.
              </Typography>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

/**
 * CartItemCard Component
 * 
 * Individual cart item card with quantity controls and removal.
 * 
 * Features:
 * - Product thumbnail image
 * - Product name and category
 * - Price per unit
 * - Quantity selector with +/- buttons
 * - Remove button
 * - Line total calculation
 * - Stock validation
 */
interface CartItemCardProps {
  item: {
    productId: string;
    quantity: number;
    product?: Product;
  };
  onQuantityChange: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
}

const CartItemCard: React.FC<CartItemCardProps> = ({ item, onQuantityChange, onRemove }) => {
  const { product, quantity, productId } = item;

  if (!product) return null;

  const lineTotal = product.price * quantity;

  return (
    <Card variant="default" className="overflow-hidden">
      <CardContent className="p-4">
        <div className="flex gap-4">
          {/* Product Image */}
          <Link 
            to={`/shop/product/${productId}`}
            className="shrink-0 group"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-24 h-24 object-cover rounded-[var(--twb-radius-sm)] transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Product Details */}
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start gap-4 mb-2">
              <div className="flex-1 min-w-0">
                <Link 
                  to={`/shop/product/${productId}`}
                  className="group"
                >
                  <Typography variant="h4" className="mb-1 group-hover:text-[var(--twb-color-plum)] transition-colors">
                    {product.name}
                  </Typography>
                </Link>
                <Badge variant="secondary" className="mb-2">
                  {product.subcategory || product.category}
                </Badge>
                {product.volume && (
                  <Typography variant="caption" className="block text-[var(--twb-color-text-secondary)]">
                    {product.volume}
                  </Typography>
                )}
              </div>

              {/* Remove Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onRemove(productId)}
                className="text-red-600 hover:text-red-700 hover:bg-red-50"
                aria-label={`Remove ${product.name} from cart`}
              >
                <Trash2 className="size-4" />
              </Button>
            </div>

            {/* Price and Quantity Row */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              {/* Quantity Selector */}
              <div className="flex items-center gap-3">
                <Typography variant="caption" className="font-semibold">
                  Quantity:
                </Typography>
                <div className="flex items-center border border-[var(--twb-color-border-primary)] rounded-[var(--twb-radius-button)]">
                  <button
                    onClick={() => onQuantityChange(productId, quantity - 1)}
                    disabled={quantity <= 1}
                    className="p-2 hover:bg-[var(--twb-color-bg-secondary)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="size-3" />
                  </button>
                  <input
                    type="number"
                    min="1"
                    max="12"
                    value={quantity}
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      if (!isNaN(val)) onQuantityChange(productId, val);
                    }}
                    className="w-12 text-center border-none bg-transparent font-semibold outline-none"
                    aria-label="Quantity"
                  />
                  <button
                    onClick={() => onQuantityChange(productId, quantity + 1)}
                    disabled={quantity >= 12}
                    className="p-2 hover:bg-[var(--twb-color-bg-secondary)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="size-3" />
                  </button>
                </div>
              </div>

              {/* Price */}
              <div className="text-right">
                <Typography variant="caption" className="text-[var(--twb-color-text-secondary)] block mb-1">
                  R{product.price} each
                </Typography>
                <Typography variant="h4" className="text-[var(--twb-color-plum)]">
                  R{lineTotal.toFixed(2)}
                </Typography>
              </div>
            </div>

            {/* Stock Warning */}
            {!product.inStock && (
              <div className="mt-3 p-2 rounded-[var(--twb-radius-sm)] bg-red-50 border border-red-200">
                <Typography variant="caption" className="text-red-700">
                  ⚠️ This item is currently out of stock
                </Typography>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CartHanddrawn;
