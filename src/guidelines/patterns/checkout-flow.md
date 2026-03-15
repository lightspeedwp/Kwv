# Checkout Flow Pattern Guidelines

**Version:** 1.0  
**Last Updated:** March 15, 2026  
**Status:** Active  
**Applies To:** All Handcrafted Wines checkout and cart pages

---

## Overview

This document defines the complete checkout flow pattern for Handcrafted Wines, including cart, checkout steps, payment processing, and order confirmation. The checkout experience is optimized for conversion, accessibility, and user trust.

**Goal:** Minimize friction, maximize trust, reduce cart abandonment.

---

## Quick Reference

### Checkout Flow Steps

| Step | Page | URL | Purpose |
|------|------|-----|---------|
| 1 | Cart | `/cart` | Review items, update quantities |
| 2 | Checkout | `/checkout` | 4-step form (Contact, Billing, Shipping, Payment) |
| 3 | Confirmation | `/order-received` | Order success, details, tracking |

### Key Features

- ✅ Multi-step form with progress indicator
- ✅ Real-time validation
- ✅ Address autocomplete
- ✅ Multiple payment methods
- ✅ Age verification (18+)
- ✅ Order summary sidebar
- ✅ Mobile-optimized
- ✅ WCAG AA accessible

---

## 1. Cart Page (/cart)

### 1.1 Cart Structure

**Components:**
```
CartPage
├── CartHeader (Breadcrumbs)
├── CartItems (List of products)
│   ├── CartItem (Product, Qty, Price, Remove)
│   └── EmptyCart (if no items)
├── CartSummary (Subtotal, Shipping, Tax, Total)
└── CartActions (Continue Shopping, Proceed to Checkout)
```

### 1.2 Cart Item Features

**Each cart item displays:**
- Product image (thumbnail)
- Product name (link to product page)
- Product category/type
- Unit price
- Quantity selector (decrease, input, increase)
- Subtotal (qty × price)
- Remove button

**Example:**
```tsx
<div className="flex gap-4 border-b pb-4">
  {/* Image */}
  <img 
    src={item.image} 
    alt={item.name}
    className="w-24 h-24 object-cover rounded"
  />
  
  {/* Details */}
  <div className="flex-1">
    <Link to={`/product/${item.id}`}>
      <Typography variant="h4">{item.name}</Typography>
    </Link>
    <Typography variant="caption">{item.category}</Typography>
    <Typography variant="body">R{item.price.toFixed(2)}</Typography>
  </div>
  
  {/* Quantity */}
  <div className="flex items-center gap-2">
    <button onClick={() => decreaseQty(item.id)} aria-label="Decrease quantity">
      <Minus className="size-4" />
    </button>
    <input 
      type="number" 
      value={item.quantity} 
      min="1"
      className="w-16 text-center"
      aria-label="Quantity"
    />
    <button onClick={() => increaseQty(item.id)} aria-label="Increase quantity">
      <Plus className="size-4" />
    </button>
  </div>
  
  {/* Subtotal */}
  <Typography variant="body" className="font-semibold">
    R{(item.price * item.quantity).toFixed(2)}
  </Typography>
  
  {/* Remove */}
  <button onClick={() => removeItem(item.id)} aria-label="Remove item">
    <Trash2 className="size-4 text-red-600" />
  </button>
</div>
```

### 1.3 Cart Summary

**Breakdown:**
- Subtotal (sum of all items)
- Shipping (free over R500, else R75)
- Tax (15% VAT)
- **Total** (bold, large text)

**Free Shipping Badge:**
```tsx
{subtotal >= 500 && (
  <div className="bg-green-50 border border-green-200 rounded p-3 mb-4">
    <div className="flex items-center gap-2">
      <Package className="size-5 text-green-600" />
      <Typography variant="body" className="text-green-700">
        You qualify for free shipping!
      </Typography>
    </div>
  </div>
)}
```

### 1.4 Empty Cart State

**When cart is empty:**
```tsx
<div className="text-center py-20">
  <ShoppingBag className="size-20 mx-auto text-gray-300 mb-4" />
  <Typography variant="h2">Your cart is empty</Typography>
  <Typography variant="body" className="text-gray-600 mb-6">
    Looks like you haven't added any items yet. Let's fix that!
  </Typography>
  <Button variant="primary" onClick={() => navigate('/shop')}>
    Start Shopping
  </Button>
</div>
```

---

## 2. Checkout Page (/checkout)

### 2.1 Checkout Layout

**Two-column layout:**

```
┌─────────────────────────────────────────┐
│ Checkout Header (Logo + Cart Count)    │
├─────────────────┬───────────────────────┤
│                 │                       │
│  Main Form      │   Order Summary       │
│  (Left 2/3)     │   (Right 1/3 Sticky)  │
│                 │                       │
│  Step Indicator │   Items List          │
│  Step 1: Contact│   Subtotal            │
│  Step 2: Billing│   Shipping            │
│  Step 3: Shipping│  Tax                 │
│  Step 4: Payment│   Total               │
│                 │                       │
│  [Back] [Next]  │                       │
│                 │                       │
└─────────────────┴───────────────────────┘
│ Checkout Footer (Legal Links Only)     │
└─────────────────────────────────────────┘
```

**Mobile: Stack vertically**
- Order summary at top (collapsible)
- Form steps below

### 2.2 Progress Indicator

**4-step indicator:**

```tsx
const steps = [
  { number: 1, label: 'Contact', icon: Mail },
  { number: 2, label: 'Billing', icon: MapPin },
  { number: 3, label: 'Shipping', icon: Truck },
  { number: 4, label: 'Payment', icon: CreditCard }
];

<div className="flex justify-between mb-8">
  {steps.map((step, index) => (
    <div key={step.number} className="flex items-center flex-1">
      {/* Step Circle */}
      <div className={`
        flex items-center justify-center w-10 h-10 rounded-full
        ${currentStep >= step.number 
          ? 'bg-[var(--twb-color-plum)] text-white' 
          : 'bg-gray-200 text-gray-600'
        }
      `}>
        {currentStep > step.number ? (
          <Check className="size-5" />
        ) : (
          <step.icon className="size-5" />
        )}
      </div>
      
      {/* Step Label */}
      <Typography variant="caption" className="ml-2">
        {step.label}
      </Typography>
      
      {/* Connector Line */}
      {index < steps.length - 1 && (
        <div className={`
          flex-1 h-0.5 mx-4
          ${currentStep > step.number ? 'bg-[var(--twb-color-plum)]' : 'bg-gray-200'}
        `} />
      )}
    </div>
  ))}
</div>
```

### 2.3 Step 1: Contact Information

**Fields:**
- Email address (required)
- Confirm email (required)
- Phone number (required, South African format)
- Marketing opt-in (checkbox)

**Validation:**
```tsx
const validateStep1 = (data) => {
  const errors = {};
  
  // Email validation
  if (!data.email) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email';
  }
  
  // Email confirmation
  if (data.email !== data.confirmEmail) {
    errors.confirmEmail = 'Emails do not match';
  }
  
  // Phone validation (South African)
  if (!data.phone) {
    errors.phone = 'Phone number is required';
  } else if (!/^(\+27|0)[0-9]{9}$/.test(data.phone)) {
    errors.phone = 'Please enter a valid South African phone number';
  }
  
  return errors;
};
```

### 2.4 Step 2: Billing Address

**Fields:**
- First name (required)
- Last name (required)
- Street address (required)
- Suburb/Area (optional)
- City (required)
- Province (required, dropdown)
- Postal code (required, 4 digits)
- Country (default: South Africa, disabled)

**Province Dropdown:**
```tsx
<Select required>
  <option value="">Select Province</option>
  <option value="EC">Eastern Cape</option>
  <option value="FS">Free State</option>
  <option value="GP">Gauteng</option>
  <option value="KZN">KwaZulu-Natal</option>
  <option value="LP">Limpopo</option>
  <option value="MP">Mpumalanga</option>
  <option value="NC">Northern Cape</option>
  <option value="NW">North West</option>
  <option value="WC">Western Cape</option>
</Select>
```

**Address Autocomplete:**
```tsx
// Use Google Places API or similar
<input
  type="text"
  placeholder="Start typing your address..."
  onChange={handleAddressAutocomplete}
  list="address-suggestions"
/>
<datalist id="address-suggestions">
  {suggestions.map(s => (
    <option key={s.placeId} value={s.description} />
  ))}
</datalist>
```

### 2.5 Step 3: Shipping Method

**Options:**
- Standard Shipping (5-7 business days) - R75 or FREE over R500
- Express Shipping (2-3 business days) - R150
- Same-Day Delivery (Paarl area only) - R200

**Selection:**
```tsx
<div className="space-y-3">
  {shippingMethods.map(method => (
    <label 
      key={method.id}
      className={`
        flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer
        ${selectedMethod === method.id ? 'border-[var(--twb-color-plum)]' : 'border-gray-200'}
      `}
    >
      <div className="flex items-center gap-3">
        <input 
          type="radio" 
          name="shipping" 
          value={method.id}
          checked={selectedMethod === method.id}
          onChange={() => setSelectedMethod(method.id)}
        />
        <div>
          <Typography variant="body" className="font-semibold">
            {method.name}
          </Typography>
          <Typography variant="caption" className="text-gray-600">
            {method.description}
          </Typography>
        </div>
      </div>
      <Typography variant="body" className="font-semibold">
        {method.price === 0 ? 'FREE' : `R${method.price}`}
      </Typography>
    </label>
  ))}
</div>
```

**Shipping Address Toggle:**
```tsx
<div className="mt-6">
  <label className="flex items-center gap-2">
    <input 
      type="checkbox" 
      checked={sameAsBilling}
      onChange={(e) => setSameAsBilling(e.target.checked)}
    />
    <Typography variant="body">
      Shipping address same as billing address
    </Typography>
  </label>
</div>

{!sameAsBilling && (
  <div className="mt-4">
    {/* Render shipping address form (same fields as billing) */}
  </div>
)}
```

### 2.6 Step 4: Payment

**Payment Methods:**

1. **Credit/Debit Card**
   - Card number (16 digits)
   - Cardholder name
   - Expiry date (MM/YY)
   - CVV (3 digits)

2. **EFT/Bank Transfer**
   - Display bank details
   - Reference number
   - Upload proof of payment

3. **PayFast** (South African payment gateway)
   - Redirect to PayFast
   - Return with payment confirmation

**Card Form:**
```tsx
<div className="space-y-4">
  <Input 
    label="Card Number"
    type="text"
    placeholder="1234 5678 9012 3456"
    maxLength={19}
    onChange={formatCardNumber}
    required
  />
  
  <Input 
    label="Cardholder Name"
    type="text"
    placeholder="John Doe"
    required
  />
  
  <div className="grid grid-cols-2 gap-4">
    <Input 
      label="Expiry Date"
      type="text"
      placeholder="MM/YY"
      maxLength={5}
      onChange={formatExpiryDate}
      required
    />
    
    <Input 
      label="CVV"
      type="text"
      placeholder="123"
      maxLength={3}
      onChange={formatCVV}
      required
    />
  </div>
</div>
```

**Security Badges:**
```tsx
<div className="flex items-center gap-4 mt-6">
  <Lock className="size-5 text-green-600" />
  <Typography variant="caption" className="text-gray-600">
    Your payment information is encrypted and secure
  </Typography>
  <img src="/ssl-badge.png" alt="SSL Secure" className="h-8" />
</div>
```

### 2.7 Age Verification

**Required for alcohol purchases:**

```tsx
<div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
  <div className="flex items-start gap-3">
    <AlertTriangle className="size-5 text-yellow-600 mt-1" />
    <div>
      <Typography variant="body" className="font-semibold mb-2">
        Age Verification Required
      </Typography>
      <Typography variant="caption" className="text-gray-700 mb-3">
        You must be 18 or older to purchase alcoholic products.
      </Typography>
      
      <label className="flex items-center gap-2">
        <input 
          type="checkbox" 
          required
          checked={ageVerified}
          onChange={(e) => setAgeVerified(e.target.checked)}
        />
        <Typography variant="body">
          I confirm that I am 18 years or older
        </Typography>
      </label>
    </div>
  </div>
</div>
```

### 2.8 Order Summary (Sidebar)

**Sticky sidebar on desktop:**

```tsx
<div className="bg-gray-50 rounded-lg p-6 sticky top-4">
  <Typography variant="h3" className="mb-4">Order Summary</Typography>
  
  {/* Cart Items */}
  <div className="space-y-3 mb-6">
    {cartItems.map(item => (
      <div key={item.id} className="flex gap-3">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-16 h-16 object-cover rounded"
        />
        <div className="flex-1">
          <Typography variant="body" className="text-sm">
            {item.name}
          </Typography>
          <Typography variant="caption" className="text-gray-600">
            Qty: {item.quantity}
          </Typography>
        </div>
        <Typography variant="body" className="text-sm">
          R{(item.price * item.quantity).toFixed(2)}
        </Typography>
      </div>
    ))}
  </div>
  
  {/* Totals */}
  <div className="border-t pt-4 space-y-2">
    <div className="flex justify-between">
      <Typography variant="body">Subtotal</Typography>
      <Typography variant="body">R{subtotal.toFixed(2)}</Typography>
    </div>
    
    <div className="flex justify-between">
      <Typography variant="body">Shipping</Typography>
      <Typography variant="body">
        {shippingCost === 0 ? 'FREE' : `R${shippingCost.toFixed(2)}`}
      </Typography>
    </div>
    
    <div className="flex justify-between">
      <Typography variant="body">Tax (15% VAT)</Typography>
      <Typography variant="body">R{tax.toFixed(2)}</Typography>
    </div>
    
    <div className="border-t pt-2 mt-2">
      <div className="flex justify-between">
        <Typography variant="h4">Total</Typography>
        <Typography variant="h4" className="text-[var(--twb-color-plum)]">
          R{total.toFixed(2)}
        </Typography>
      </div>
    </div>
  </div>
</div>
```

### 2.9 Navigation Buttons

**Back and Next/Submit:**

```tsx
<div className="flex justify-between mt-8">
  {/* Back Button */}
  {currentStep > 1 && (
    <Button 
      variant="outline" 
      onClick={handleBack}
      disabled={isSubmitting}
    >
      <ChevronLeft className="size-4 mr-2" />
      Back
    </Button>
  )}
  
  {/* Next/Submit Button */}
  <Button 
    variant="primary" 
    onClick={handleNext}
    disabled={!isStepValid || isSubmitting}
    className="ml-auto"
  >
    {currentStep === 4 ? (
      isSubmitting ? 'Processing...' : 'Place Order'
    ) : (
      <>
        Next
        <ChevronRight className="size-4 ml-2" />
      </>
    )}
  </Button>
</div>
```

---

## 3. Order Confirmation Page (/order-received)

### 3.1 Success Message

**Hero section:**

```tsx
<div className="text-center py-12 bg-green-50">
  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-4">
    <CheckCircle className="size-12 text-green-600" />
  </div>
  
  <Typography variant="h1" className="mb-2">
    Order Confirmed!
  </Typography>
  
  <Typography variant="body" className="text-gray-700 mb-4">
    Thank you for your order. We've sent a confirmation email to {email}.
  </Typography>
  
  <Typography variant="h3" className="text-[var(--twb-color-plum)]">
    Order #{orderNumber}
  </Typography>
</div>
```

### 3.2 Order Details

**Display complete order information:**

```tsx
<div className="max-w-4xl mx-auto py-12 px-6">
  <div className="grid md:grid-cols-2 gap-8 mb-12">
    {/* Shipping Address */}
    <div>
      <Typography variant="h3" className="mb-4">Shipping Address</Typography>
      <Typography variant="body">
        {order.shippingAddress.firstName} {order.shippingAddress.lastName}<br />
        {order.shippingAddress.street}<br />
        {order.shippingAddress.suburb && `${order.shippingAddress.suburb}<br />`}
        {order.shippingAddress.city}, {order.shippingAddress.province}<br />
        {order.shippingAddress.postalCode}
      </Typography>
    </div>
    
    {/* Payment Method */}
    <div>
      <Typography variant="h3" className="mb-4">Payment Method</Typography>
      <Typography variant="body">
        {order.paymentMethod === 'card' && 'Credit/Debit Card'}
        {order.paymentMethod === 'eft' && 'EFT/Bank Transfer'}
        {order.paymentMethod === 'payfast' && 'PayFast'}
      </Typography>
      {order.paymentMethod === 'card' && (
        <Typography variant="caption" className="text-gray-600">
          **** **** **** {order.cardLast4}
        </Typography>
      )}
    </div>
  </div>
  
  {/* Order Items */}
  <div className="border rounded-lg overflow-hidden mb-8">
    <table className="w-full">
      <thead className="bg-gray-50">
        <tr>
          <th className="text-left p-4">Product</th>
          <th className="text-center p-4">Quantity</th>
          <th className="text-right p-4">Price</th>
          <th className="text-right p-4">Total</th>
        </tr>
      </thead>
      <tbody>
        {order.items.map(item => (
          <tr key={item.id} className="border-t">
            <td className="p-4">
              <div className="flex gap-3">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <Typography variant="body">{item.name}</Typography>
                  <Typography variant="caption" className="text-gray-600">
                    {item.category}
                  </Typography>
                </div>
              </div>
            </td>
            <td className="text-center p-4">{item.quantity}</td>
            <td className="text-right p-4">R{item.price.toFixed(2)}</td>
            <td className="text-right p-4">
              R{(item.price * item.quantity).toFixed(2)}
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot className="bg-gray-50 border-t">
        <tr>
          <td colSpan={3} className="text-right p-4">Subtotal:</td>
          <td className="text-right p-4">R{order.subtotal.toFixed(2)}</td>
        </tr>
        <tr>
          <td colSpan={3} className="text-right p-4">Shipping:</td>
          <td className="text-right p-4">
            {order.shipping === 0 ? 'FREE' : `R${order.shipping.toFixed(2)}`}
          </td>
        </tr>
        <tr>
          <td colSpan={3} className="text-right p-4">Tax (15% VAT):</td>
          <td className="text-right p-4">R{order.tax.toFixed(2)}</td>
        </tr>
        <tr className="font-semibold text-lg">
          <td colSpan={3} className="text-right p-4">Total:</td>
          <td className="text-right p-4 text-[var(--twb-color-plum)]">
            R{order.total.toFixed(2)}
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
  
  {/* Actions */}
  <div className="flex gap-4 justify-center">
    <Button variant="outline" onClick={handlePrint}>
      <Printer className="size-4 mr-2" />
      Print Receipt
    </Button>
    
    <Button variant="primary" onClick={() => navigate('/')}>
      Continue Shopping
    </Button>
  </div>
</div>
```

### 3.3 Next Steps

**What happens next:**

```tsx
<div className="bg-blue-50 rounded-lg p-6 mb-8">
  <Typography variant="h3" className="mb-4">What Happens Next?</Typography>
  
  <ol className="space-y-3">
    <li className="flex gap-3">
      <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-semibold">
        1
      </div>
      <div>
        <Typography variant="body" className="font-semibold">
          Order Confirmation
        </Typography>
        <Typography variant="caption" className="text-gray-700">
          You'll receive an email confirmation at {email}
        </Typography>
      </div>
    </li>
    
    <li className="flex gap-3">
      <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-semibold">
        2
      </div>
      <div>
        <Typography variant="body" className="font-semibold">
          Processing
        </Typography>
        <Typography variant="caption" className="text-gray-700">
          We'll prepare your order for shipment (1-2 business days)
        </Typography>
      </div>
    </li>
    
    <li className="flex gap-3">
      <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-semibold">
        3
      </div>
      <div>
        <Typography variant="body" className="font-semibold">
          Shipping
        </Typography>
        <Typography variant="caption" className="text-gray-700">
          Your order will be shipped via {order.shippingMethod} (5-7 business days)
        </Typography>
      </div>
    </li>
    
    <li className="flex gap-3">
      <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-semibold">
        4
      </div>
      <div>
        <Typography variant="body" className="font-semibold">
          Delivery
        </Typography>
        <Typography variant="caption" className="text-gray-700">
          We'll send tracking information when your order ships
        </Typography>
      </div>
    </li>
  </ol>
</div>
```

---

## 4. Accessibility Checklist

### 4.1 Keyboard Navigation

- [ ] All form fields accessible via Tab
- [ ] Step navigation works with keyboard
- [ ] Submit button has visible focus ring
- [ ] Back button has visible focus ring
- [ ] Radio buttons accessible via arrow keys

### 4.2 Screen Readers

- [ ] All form fields have labels
- [ ] Error messages announced with `role="alert"`
- [ ] Progress indicator describes current step
- [ ] Order summary has proper headings
- [ ] Cart items have accessible names

### 4.3 Form Validation

- [ ] Real-time validation with clear error messages
- [ ] Error messages have sufficient contrast (4.5:1)
- [ ] Error icons paired with text (not color alone)
- [ ] Focus moved to first error on submit

---

## 5. Conversion Optimization

### 5.1 Trust Signals

**Display throughout checkout:**
- SSL/Security badges
- Free shipping badge (when qualified)
- Money-back guarantee
- Customer reviews count
- Contact information visible

### 5.2 Progress Saving

**Auto-save form data:**
```tsx
useEffect(() => {
  localStorage.setItem('checkoutData', JSON.stringify(formData));
}, [formData]);

// Restore on load
useEffect(() => {
  const saved = localStorage.getItem('checkoutData');
  if (saved) {
    setFormData(JSON.parse(saved));
  }
}, []);
```

### 5.3 Exit Intent

**Show modal when user tries to leave:**
```tsx
useEffect(() => {
  const handleBeforeUnload = (e) => {
    if (hasItems && !orderComplete) {
      e.preventDefault();
      e.returnValue = 'You have items in your cart. Are you sure you want to leave?';
    }
  };
  
  window.addEventListener('beforeunload', handleBeforeUnload);
  return () => window.removeEventListener('beforeunload', handleBeforeUnload);
}, [hasItems, orderComplete]);
```

---

## 6. Error Handling

### 6.1 Payment Failed

**Show error message with retry option:**
```tsx
<div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
  <div className="flex items-start gap-3">
    <XCircle className="size-5 text-red-600 mt-1" />
    <div>
      <Typography variant="body" className="font-semibold mb-2">
        Payment Failed
      </Typography>
      <Typography variant="caption" className="text-gray-700 mb-3">
        {errorMessage || 'Your payment could not be processed. Please try again or use a different payment method.'}
      </Typography>
      <Button variant="primary" onClick={handleRetry}>
        Try Again
      </Button>
    </div>
  </div>
</div>
```

### 6.2 Out of Stock

**Notify user if item becomes unavailable during checkout:**
```tsx
if (unavailableItems.length > 0) {
  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
      <Typography variant="body" className="font-semibold mb-2">
        Some items are no longer available
      </Typography>
      <ul className="list-disc pl-5 mb-3">
        {unavailableItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <Button variant="outline" onClick={handleRemoveUnavailable}>
        Remove Unavailable Items
      </Button>
    </div>
  );
}
```

---

## 7. Resources

- [Baymard Institute Checkout Usability](https://baymard.com/checkout-usability)
- [Stripe Checkout Best Practices](https://stripe.com/docs/payments/checkout)
- [WooCommerce Checkout Flow](https://woocommerce.com/document/woocommerce-checkout/)

---

**Maintained by:** Handcrafted Wines Development Team  
**Last Review:** March 15, 2026  
**Next Review:** Quarterly
