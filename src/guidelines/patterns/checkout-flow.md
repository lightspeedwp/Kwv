# Checkout Flow Pattern

**Category:** Patterns  
**Domain:** E-commerce Checkout  
**Version:** 1.0  
**Last Updated:** 2024-03-13  
**Status:** Active

---

## Overview

The Wire Brand checkout flow provides a streamlined, accessible purchase experience. The checkout process minimizes friction while collecting necessary information for order fulfillment.

**Checkout Steps:**
1. Cart Review
2. Shipping Information
3. Payment Information
4. Order Review
5. Order Confirmation

**Key Principles:**
- Guest checkout option (no forced account creation)
- Clear progress indication
- Inline validation
- Save progress (for logged-in users)
- Mobile-optimized

---

## Checkout Flow Structure

### Multi-Step Flow (Recommended)

**Route structure:**
```
/cart                    # Step 0: Cart review
/checkout/shipping       # Step 1: Shipping info
/checkout/payment        # Step 2: Payment info
/checkout/review         # Step 3: Order review
/checkout/confirmation   # Step 4: Confirmation
```

**Benefits:**
- Clear mental model (one task per page)
- Better mobile experience
- Can save progress
- Easier to track analytics

### Single-Page Flow (Alternative)

**All steps on one page with sections:**
```
/checkout
  - Shipping (collapsed after completion)
  - Payment (locked until shipping complete)
  - Review (locked until payment complete)
```

**Benefits:**
- Faster for desktop users
- Overview of entire process
- No navigation between steps

**The Wire Brand uses multi-step flow for better mobile experience.**

---

## Step 1: Cart Review

### Cart Page (`/cart`)

**Purpose:** Review items, update quantities, apply discounts

```tsx
/**
 * Cart Page
 * 
 * Review cart items before proceeding to checkout.
 */
export default function Cart() {
  const { cart, updateQuantity, removeItem } = useCart();
  const navigate = useNavigate();
  
  const subtotal = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.15; // 15% VAT (South Africa)
  const total = subtotal + tax;
  
  if (cart.items.length === 0) {
    return (
      <Container className="py-20 text-center">
        <Package className="h-16 w-16 text-[var(--twb-color-vine)] mx-auto mb-4" />
        <H2 className="mb-4">Your cart is empty</H2>
        <P className="mb-8">Let's find you some great wines!</P>
        <Button onClick={() => navigate('/wines')}>Shop Wines</Button>
      </Container>
    );
  }
  
  return (
    <Container className="py-12">
      <H1 className="mb-8">Shopping Cart</H1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateQuantity={(qty) => updateQuantity(item.id, qty)}
              onRemove={() => removeItem(item.id)}
            />
          ))}
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="border border-[var(--twb-border-tertiary)] rounded-twb-md p-6 sticky top-24">
            <H3 className="mb-4">Order Summary</H3>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <P>Subtotal</P>
                <P>${subtotal.toFixed(2)}</P>
              </div>
              <div className="flex justify-between">
                <P>Tax (15%)</P>
                <P>${tax.toFixed(2)}</P>
              </div>
            </div>
            
            <div className="border-t border-[var(--twb-border-tertiary)] pt-4 mb-6">
              <div className="flex justify-between">
                <P className="font-semibold">Total</P>
                <P className="font-semibold text-[var(--twb-color-plum)]">${total.toFixed(2)}</P>
              </div>
            </div>
            
            <Button
              variant="primary"
              className="w-full mb-3"
              onClick={() => navigate('/checkout/shipping')}
            >
              Proceed to Checkout
            </Button>
            
            <Button
              variant="tertiary"
              className="w-full"
              onClick={() => navigate('/wines')}
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
```

### Cart Item Component

```tsx
function CartItem({ item, onUpdateQuantity, onRemove }) {
  return (
    <div className="flex gap-4 p-4 border border-[var(--twb-border-tertiary)] rounded-twb-md">
      {/* Image */}
      <div className="w-20 h-20 flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover rounded-twb-sm"
        />
      </div>
      
      {/* Info */}
      <div className="flex-1">
        <H4 className="mb-1">{item.name}</H4>
        <P className="text-sm text-[var(--twb-color-vine)] mb-2">{item.vintage}</P>
        <P className="font-semibold text-[var(--twb-color-plum)]">${item.price}</P>
      </div>
      
      {/* Quantity */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => onUpdateQuantity(item.quantity - 1)}
          disabled={item.quantity <= 1}
          className="p-2 border border-[var(--twb-border-tertiary)] rounded-twb-sm disabled:opacity-40"
          aria-label="Decrease quantity"
        >
          <Minus className="h-4 w-4" />
        </button>
        
        <span className="w-12 text-center font-medium">{item.quantity}</span>
        
        <button
          onClick={() => onUpdateQuantity(item.quantity + 1)}
          className="p-2 border border-[var(--twb-border-tertiary)] rounded-twb-sm"
          aria-label="Increase quantity"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
      
      {/* Remove */}
      <button
        onClick={onRemove}
        className="p-2 text-[var(--twb-border-error)] hover:bg-[var(--twb-border-error)]/10 rounded-twb-sm"
        aria-label="Remove item"
      >
        <Trash2 className="h-5 w-5" />
      </button>
    </div>
  );
}
```

---

## Step 2: Shipping Information

### Shipping Page (`/checkout/shipping`)

```tsx
/**
 * Checkout Shipping Step
 * 
 * Collect shipping address and delivery method.
 */
export default function CheckoutShipping() {
  const navigate = useNavigate();
  const { cart, updateShipping } = useCheckout();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
    shippingMethod: 'standard',
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateShipping(formData);
    navigate('/checkout/payment');
  };
  
  return (
    <Container className="py-12">
      <CheckoutProgress currentStep={1} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        {/* Shipping Form */}
        <div className="lg:col-span-2">
          <H2 className="mb-6">Shipping Information</H2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                label="First Name"
                id="firstName"
                required
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />
              
              <FormField
                label="Last Name"
                id="lastName"
                required
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              />
            </div>
            
            <FormField
              label="Email"
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            
            <FormField
              label="Phone"
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            
            {/* Address */}
            <FormField
              label="Street Address"
              id="address"
              required
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField
                label="City"
                id="city"
                required
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              />
              
              <FormField
                label="Province"
                id="province"
                required
                value={formData.province}
                onChange={(e) => setFormData({ ...formData, province: e.target.value })}
              />
              
              <FormField
                label="Postal Code"
                id="postalCode"
                required
                value={formData.postalCode}
                onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
              />
            </div>
            
            {/* Shipping Method */}
            <fieldset>
              <legend className="text-lg font-medium mb-4">Shipping Method</legend>
              
              <div className="space-y-3">
                <label className="flex items-center justify-between p-4 border border-[var(--twb-border-tertiary)] rounded-twb-md cursor-pointer hover:border-[var(--twb-color-plum)] transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="shippingMethod"
                      value="standard"
                      checked={formData.shippingMethod === 'standard'}
                      onChange={(e) => setFormData({ ...formData, shippingMethod: e.target.value })}
                      className="h-5 w-5"
                    />
                    <div>
                      <P className="font-medium">Standard Shipping</P>
                      <P className="text-sm text-[var(--twb-color-vine)]">3-5 business days</P>
                    </div>
                  </div>
                  <P className="font-semibold">R150</P>
                </label>
                
                <label className="flex items-center justify-between p-4 border border-[var(--twb-border-tertiary)] rounded-twb-md cursor-pointer hover:border-[var(--twb-color-plum)] transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="shippingMethod"
                      value="express"
                      checked={formData.shippingMethod === 'express'}
                      onChange={(e) => setFormData({ ...formData, shippingMethod: e.target.value })}
                      className="h-5 w-5"
                    />
                    <div>
                      <P className="font-medium">Express Shipping</P>
                      <P className="text-sm text-[var(--twb-color-vine)]">1-2 business days</P>
                    </div>
                  </div>
                  <P className="font-semibold">R350</P>
                </label>
              </div>
            </fieldset>
            
            {/* Actions */}
            <div className="flex gap-4">
              <Button
                type="button"
                variant="tertiary"
                onClick={() => navigate('/cart')}
              >
                Back to Cart
              </Button>
              
              <Button type="submit" variant="primary" className="flex-1">
                Continue to Payment
              </Button>
            </div>
          </form>
        </div>
        
        {/* Order Summary Sidebar */}
        <div className="lg:col-span-1">
          <OrderSummary cart={cart} />
        </div>
      </div>
    </Container>
  );
}
```

---

## Step 3: Payment Information

### Payment Page (`/checkout/payment`)

```tsx
/**
 * Checkout Payment Step
 * 
 * Collect payment method and billing information.
 */
export default function CheckoutPayment() {
  const navigate = useNavigate();
  const { cart, shipping, updatePayment } = useCheckout();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardData, setCardData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updatePayment({ method: paymentMethod, cardData });
    navigate('/checkout/review');
  };
  
  return (
    <Container className="py-12">
      <CheckoutProgress currentStep={2} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2">
          <H2 className="mb-6">Payment Information</H2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Payment Method */}
            <fieldset>
              <legend className="text-lg font-medium mb-4">Payment Method</legend>
              
              <div className="space-y-3">
                <label className="flex items-center gap-3 p-4 border border-[var(--twb-border-tertiary)] rounded-twb-md cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="h-5 w-5"
                  />
                  <CreditCard className="h-5 w-5" />
                  <P className="font-medium">Credit / Debit Card</P>
                </label>
                
                <label className="flex items-center gap-3 p-4 border border-[var(--twb-border-tertiary)] rounded-twb-md cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="paypal"
                    checked={paymentMethod === 'paypal'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="h-5 w-5"
                  />
                  <Wallet className="h-5 w-5" />
                  <P className="font-medium">PayPal</P>
                </label>
              </div>
            </fieldset>
            
            {/* Card Details (if card selected) */}
            {paymentMethod === 'card' && (
              <div className="space-y-4">
                <FormField
                  label="Card Number"
                  id="cardNumber"
                  required
                  placeholder="1234 5678 9012 3456"
                  value={cardData.cardNumber}
                  onChange={(e) => setCardData({ ...cardData, cardNumber: e.target.value })}
                />
                
                <FormField
                  label="Cardholder Name"
                  id="cardName"
                  required
                  value={cardData.cardName}
                  onChange={(e) => setCardData({ ...cardData, cardName: e.target.value })}
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    label="Expiry Date"
                    id="expiryDate"
                    required
                    placeholder="MM/YY"
                    value={cardData.expiryDate}
                    onChange={(e) => setCardData({ ...cardData, expiryDate: e.target.value })}
                  />
                  
                  <FormField
                    label="CVV"
                    id="cvv"
                    required
                    placeholder="123"
                    value={cardData.cvv}
                    onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
                  />
                </div>
              </div>
            )}
            
            {/* Actions */}
            <div className="flex gap-4">
              <Button
                type="button"
                variant="tertiary"
                onClick={() => navigate('/checkout/shipping')}
              >
                Back
              </Button>
              
              <Button type="submit" variant="primary" className="flex-1">
                Review Order
              </Button>
            </div>
          </form>
        </div>
        
        <div className="lg:col-span-1">
          <OrderSummary cart={cart} shipping={shipping} />
        </div>
      </div>
    </Container>
  );
}
```

---

## Step 4: Order Review

### Review Page (`/checkout/review`)

```tsx
/**
 * Checkout Review Step
 * 
 * Final review before placing order.
 */
export default function CheckoutReview() {
  const navigate = useNavigate();
  const { cart, shipping, payment, placeOrder } = useCheckout();
  const [isProcessing, setIsProcessing] = useState(false);
  
  const handlePlaceOrder = async () => {
    setIsProcessing(true);
    try {
      const orderId = await placeOrder();
      navigate(`/checkout/confirmation/${orderId}`);
    } catch (error) {
      alert('Payment failed. Please try again.');
      setIsProcessing(false);
    }
  };
  
  return (
    <Container className="py-12">
      <CheckoutProgress currentStep={3} />
      
      <H2 className="mb-8 mt-8">Review Your Order</H2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Order Items */}
          <div className="border border-[var(--twb-border-tertiary)] rounded-twb-md p-6">
            <H3 className="mb-4">Order Items</H3>
            <div className="space-y-4">
              {cart.items.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <div>
                    <P className="font-medium">{item.name}</P>
                    <P className="text-sm text-[var(--twb-color-vine)]">Qty: {item.quantity}</P>
                  </div>
                  <P className="font-semibold">${(item.price * item.quantity).toFixed(2)}</P>
                </div>
              ))}
            </div>
          </div>
          
          {/* Shipping Address */}
          <div className="border border-[var(--twb-border-tertiary)] rounded-twb-md p-6">
            <H3 className="mb-4">Shipping Address</H3>
            <P>{shipping.firstName} {shipping.lastName}</P>
            <P>{shipping.address}</P>
            <P>{shipping.city}, {shipping.province} {shipping.postalCode}</P>
            <P className="mt-2">{shipping.email}</P>
            <Button
              variant="tertiary"
              size="small"
              className="mt-4"
              onClick={() => navigate('/checkout/shipping')}
            >
              Edit
            </Button>
          </div>
          
          {/* Payment Method */}
          <div className="border border-[var(--twb-border-tertiary)] rounded-twb-md p-6">
            <H3 className="mb-4">Payment Method</H3>
            <P className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Card ending in {payment.cardData.cardNumber.slice(-4)}
            </P>
            <Button
              variant="tertiary"
              size="small"
              className="mt-4"
              onClick={() => navigate('/checkout/payment')}
            >
              Edit
            </Button>
          </div>
        </div>
        
        {/* Order Summary + Place Order */}
        <div className="lg:col-span-1">
          <div className="border border-[var(--twb-border-tertiary)] rounded-twb-md p-6 sticky top-24">
            <H3 className="mb-4">Order Summary</H3>
            
            {/* Summary details */}
            <OrderSummaryDetails cart={cart} shipping={shipping} />
            
            <Button
              variant="primary"
              className="w-full mt-6"
              onClick={handlePlaceOrder}
              disabled={isProcessing}
            >
              {isProcessing ? 'Processing...' : 'Place Order'}
            </Button>
            
            <P className="text-xs text-[var(--twb-color-vine)] mt-4 text-center">
              By placing your order, you agree to our Terms & Conditions
            </P>
          </div>
        </div>
      </div>
    </Container>
  );
}
```

---

## Step 5: Order Confirmation

### Confirmation Page (`/checkout/confirmation/:orderId`)

```tsx
/**
 * Order Confirmation Page
 * 
 * Success message and order details.
 */
export default function OrderConfirmation() {
  const { orderId } = useParams();
  const { order } = useOrder(orderId);
  
  if (!order) {
    return <LoadingSpinner />;
  }
  
  return (
    <Container className="py-12 text-center">
      <CheckCircle className="h-16 w-16 text-[var(--twb-color-vine)] mx-auto mb-6" />
      
      <H1 className="mb-4">Order Confirmed!</H1>
      <P className="text-xl mb-8">
        Thank you for your order. We've sent a confirmation email to {order.email}.
      </P>
      
      <div className="bg-[var(--twb-color-paper)] border border-[var(--twb-border-tertiary)] rounded-twb-md p-6 max-w-md mx-auto mb-8">
        <P className="text-sm text-[var(--twb-color-vine)] mb-2">Order Number</P>
        <P className="text-2xl font-semibold text-[var(--twb-color-plum)]">{order.orderNumber}</P>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="primary" onClick={() => navigate('/')}>
          Continue Shopping
        </Button>
        <Button variant="tertiary" onClick={() => navigate(`/account/orders/${orderId}`)}>
          View Order Details
        </Button>
      </div>
    </Container>
  );
}
```

---

## Progress Indicator Component

```tsx
function CheckoutProgress({ currentStep }: { currentStep: number }) {
  const steps = [
    { number: 1, label: 'Shipping' },
    { number: 2, label: 'Payment' },
    { number: 3, label: 'Review' },
  ];
  
  return (
    <nav aria-label="Checkout progress">
      <ol className="flex items-center justify-center gap-4">
        {steps.map((step, index) => (
          <li key={step.number} className="flex items-center">
            <div className="flex items-center">
              <div
                className={cn(
                  'flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors',
                  currentStep >= step.number
                    ? 'bg-[var(--twb-color-plum)] border-[var(--twb-color-plum)] text-white'
                    : 'border-[var(--twb-border-tertiary)] text-[var(--twb-color-vine)]'
                )}
              >
                {currentStep > step.number ? (
                  <Check className="h-5 w-5" />
                ) : (
                  <span className="font-semibold">{step.number}</span>
                )}
              </div>
              
              <span
                className={cn(
                  'ml-3 text-sm font-medium hidden sm:inline',
                  currentStep >= step.number ? 'text-[var(--twb-color-ink)]' : 'text-[var(--twb-color-vine)]'
                )}
              >
                {step.label}
              </span>
            </div>
            
            {index < steps.length - 1 && (
              <div
                className={cn(
                  'w-12 h-0.5 mx-4',
                  currentStep > step.number ? 'bg-[var(--twb-color-plum)]' : 'bg-[var(--twb-border-tertiary)]'
                )}
              />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
```

---

## Best Practices

### 1. Validation

- ✅ Client-side validation (instant feedback)
- ✅ Server-side validation (security)
- ✅ Inline error messages
- ✅ Prevent double submission

### 2. Autosave for Logged-In Users

```tsx
useEffect(() => {
  if (isAuthenticated) {
    debounce(() => saveCheckoutProgress(formData), 1000);
  }
}, [formData]);
```

### 3. Guest Checkout

- ✅ Don't force account creation
- ✅ Offer optional account creation after purchase
- ✅ Email confirmation for order tracking

---

## Related Guidelines

- [Forms](/guidelines/design-tokens/forms.md) - Form validation patterns
- [Buttons](/guidelines/design-tokens/buttons.md) - CTA styling

---

## Changelog

### Version 1.0 (2024-03-13)
- Multi-step checkout flow documented
- All checkout steps created
- Progress indicator component added
- Best practices established

---

**Questions or Issues?**  
Contact the development team.
