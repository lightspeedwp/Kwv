/**
 * Checkout Page
 * 
 * Multi-step checkout process with customer information, shipping, and payment.
 * 
 * Features:
 * - Multi-step progress indicator (Customer Info → Shipping → Payment → Review)
 * - Customer information form (name, email, phone)
 * - Shipping address form with validation
 * - Billing address (same as shipping or separate)
 * - Payment method selection (mock - credit card, EFT, PayFast)
 * - Age verification checkbox (18+)
 * - Gift message option
 * - Order summary sidebar (sticky)
 * - Cart items review
 * - Price breakdown (subtotal, shipping, tax, total)
 * - Edit cart button
 * - Place Order CTA
 * - Form validation with error states
 * - Save info for next time (checkbox)
 * - Mobile responsive layout
 * - WCAG AA compliant
 * - Trust signals
 * 
 * Checkout Steps:
 * 1. Customer Information (name, email, phone)
 * 2. Shipping Address (address fields, city, postal code)
 * 3. Payment Method (credit card, EFT, PayFast)
 * 4. Review & Place Order
 * 
 * Usage:
 * ```tsx
 * <Route path="/checkout" element={<Checkout />} />
 * ```
 * 
 * Components Used:
 * - Container (v2.0)
 * - Typography (v2.0)
 * - Button (v2.0)
 * - Card (v2.0)
 * - Input fields
 * - Checkbox
 * - Radio buttons
 * 
 * Design Tokens:
 * - All spacing, colors, typography from token system
 * - Responsive layouts
 * - Form field styles
 * - Trust signals
 * 
 * @package HandcraftedWines
 * @version 1.0
 */

import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router';
import { Container } from '../../components/common/Container';
import { Typography } from '../../components/common/Typography';
import { Button } from '../../components/common/Button';
import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { products } from '../../data/products';
import { 
  ShoppingCart, 
  User, 
  MapPin, 
  CreditCard, 
  CheckCircle2,
  Lock,
  Truck,
  Package,
  ArrowRight,
  ArrowLeft,
  Edit,
  AlertCircle,
  Gift,
  Shield
} from 'lucide-react';

// Mock cart items (same as Cart.tsx - TODO: Use cart context)
const MOCK_CART_ITEMS = [
  { productId: 'estate-shiraz-2020', quantity: 2 },
  { productId: 'fresh-chevre', quantity: 1 },
  { productId: 'tasting-trio', quantity: 1 }
];

// Shipping & tax constants
const FREE_SHIPPING_THRESHOLD = 500;
const SHIPPING_COST = 75;
const TAX_RATE = 0.15; // 15% VAT

// Checkout steps
enum CheckoutStep {
  CUSTOMER_INFO = 1,
  SHIPPING = 2,
  PAYMENT = 3,
  REVIEW = 4
}

// Form data interfaces
interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface Address {
  address1: string;
  address2: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
}

interface PaymentInfo {
  method: 'credit_card' | 'eft' | 'payfast';
  cardNumber?: string;
  cardName?: string;
  expiryDate?: string;
  cvv?: string;
}

export const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<CheckoutStep>(CheckoutStep.CUSTOMER_INFO);
  const [ageVerified, setAgeVerified] = useState(false);
  const [giftMessage, setGiftMessage] = useState('');
  const [includeGift, setIncludeGift] = useState(false);
  const [billingSameAsShipping, setBillingSameAsShipping] = useState(true);
  const [saveInfo, setSaveInfo] = useState(false);

  // Form state
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const [shippingAddress, setShippingAddress] = useState<Address>({
    address1: '',
    address2: '',
    city: '',
    province: 'Western Cape',
    postalCode: '',
    country: 'South Africa'
  });

  const [billingAddress, setBillingAddress] = useState<Address>({
    address1: '',
    address2: '',
    city: '',
    province: 'Western Cape',
    postalCode: '',
    country: 'South Africa'
  });

  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    method: 'credit_card'
  });

  // Get cart items with product details
  const cartItemsWithDetails = useMemo(() => {
    return MOCK_CART_ITEMS.map(item => {
      const product = products.find(p => p.id === item.productId);
      return {
        ...item,
        product
      };
    }).filter(item => item.product !== undefined);
  }, []);

  // Calculate totals
  const subtotal = useMemo(() => {
    return cartItemsWithDetails.reduce((sum, item) => {
      return sum + (item.product!.price * item.quantity);
    }, 0);
  }, [cartItemsWithDetails]);

  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const tax = (subtotal + shipping) * TAX_RATE;
  const total = subtotal + shipping + tax;

  // Form validation
  const isCustomerInfoValid = () => {
    return customerInfo.firstName && 
           customerInfo.lastName && 
           customerInfo.email.includes('@') && 
           customerInfo.phone.length >= 10;
  };

  const isShippingAddressValid = () => {
    return shippingAddress.address1 && 
           shippingAddress.city && 
           shippingAddress.postalCode &&
           shippingAddress.postalCode.length === 4;
  };

  const isPaymentInfoValid = () => {
    if (paymentInfo.method === 'credit_card') {
      return paymentInfo.cardNumber?.length === 16 &&
             paymentInfo.cardName &&
             paymentInfo.expiryDate &&
             paymentInfo.cvv?.length === 3;
    }
    return true; // EFT and PayFast don't need validation here
  };

  const canProceedToNextStep = () => {
    switch (currentStep) {
      case CheckoutStep.CUSTOMER_INFO:
        return isCustomerInfoValid();
      case CheckoutStep.SHIPPING:
        return isShippingAddressValid();
      case CheckoutStep.PAYMENT:
        return isPaymentInfoValid();
      case CheckoutStep.REVIEW:
        return ageVerified;
      default:
        return false;
    }
  };

  const handleNextStep = () => {
    if (canProceedToNextStep()) {
      setCurrentStep(prev => Math.min(prev + 1, CheckoutStep.REVIEW) as CheckoutStep);
    }
  };

  const handlePreviousStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, CheckoutStep.CUSTOMER_INFO) as CheckoutStep);
  };

  const handlePlaceOrder = () => {
    if (!ageVerified) {
      alert('Please confirm you are 18 years or older');
      return;
    }
    
    // TODO: Submit order to backend
    console.log('Order submitted:', {
      customerInfo,
      shippingAddress,
      billingAddress: billingSameAsShipping ? shippingAddress : billingAddress,
      paymentInfo,
      cart: MOCK_CART_ITEMS,
      giftMessage: includeGift ? giftMessage : null,
      total
    });

    // Navigate to order confirmation
    navigate('/order-received?order=12345');
  };

  // Empty cart redirect
  if (MOCK_CART_ITEMS.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <>
      {/* SEO Meta Tags */}
      <title>Checkout - Handcrafted Wines</title>
      <meta name="description" content="Complete your purchase at Handcrafted Wines" />

      {/* Checkout Page */}
      <section className="bg-[var(--twb-color-bg-primary)] py-[var(--twb-spacing-section-y)]">
        <Container variant="wide">
          {/* Page Header */}
          <div className="mb-8">
            <Typography variant="h1" className="mb-2">
              Checkout
            </Typography>
            <Typography variant="body" className="text-[var(--twb-color-text-secondary)]">
              Complete your order securely
            </Typography>
          </div>

          {/* Progress Indicator */}
          <div className="mb-12">
            <CheckoutProgress currentStep={currentStep} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Checkout Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Step 1: Customer Information */}
              {currentStep === CheckoutStep.CUSTOMER_INFO && (
                <CustomerInfoStep
                  customerInfo={customerInfo}
                  setCustomerInfo={setCustomerInfo}
                  saveInfo={saveInfo}
                  setSaveInfo={setSaveInfo}
                />
              )}

              {/* Step 2: Shipping Address */}
              {currentStep === CheckoutStep.SHIPPING && (
                <ShippingAddressStep
                  shippingAddress={shippingAddress}
                  setShippingAddress={setShippingAddress}
                  billingSameAsShipping={billingSameAsShipping}
                  setBillingSameAsShipping={setBillingSameAsShipping}
                  billingAddress={billingAddress}
                  setBillingAddress={setBillingAddress}
                  includeGift={includeGift}
                  setIncludeGift={setIncludeGift}
                  giftMessage={giftMessage}
                  setGiftMessage={setGiftMessage}
                />
              )}

              {/* Step 3: Payment Method */}
              {currentStep === CheckoutStep.PAYMENT && (
                <PaymentMethodStep
                  paymentInfo={paymentInfo}
                  setPaymentInfo={setPaymentInfo}
                />
              )}

              {/* Step 4: Review & Place Order */}
              {currentStep === CheckoutStep.REVIEW && (
                <ReviewStep
                  customerInfo={customerInfo}
                  shippingAddress={shippingAddress}
                  billingAddress={billingSameAsShipping ? shippingAddress : billingAddress}
                  paymentInfo={paymentInfo}
                  ageVerified={ageVerified}
                  setAgeVerified={setAgeVerified}
                  setCurrentStep={setCurrentStep}
                />
              )}

              {/* Navigation Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                {currentStep > CheckoutStep.CUSTOMER_INFO && (
                  <Button
                    variant="outline"
                    onClick={handlePreviousStep}
                    className="order-2 sm:order-1"
                  >
                    <ArrowLeft className="size-4 mr-2" />
                    Back
                  </Button>
                )}

                {currentStep < CheckoutStep.REVIEW && (
                  <Button
                    variant="primary"
                    onClick={handleNextStep}
                    disabled={!canProceedToNextStep()}
                    className="order-1 sm:order-2 sm:ml-auto"
                  >
                    Continue
                    <ArrowRight className="size-4 ml-2" />
                  </Button>
                )}

                {currentStep === CheckoutStep.REVIEW && (
                  <Button
                    variant="primary"
                    onClick={handlePlaceOrder}
                    disabled={!ageVerified}
                    className="order-1 sm:ml-auto"
                  >
                    <Lock className="size-4 mr-2" />
                    Place Order (R{total.toFixed(2)})
                  </Button>
                )}
              </div>
            </div>

            {/* Right: Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <OrderSummary
                  cartItems={cartItemsWithDetails}
                  subtotal={subtotal}
                  shipping={shipping}
                  tax={tax}
                  total={total}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

/**
 * CheckoutProgress Component
 * 
 * Visual progress indicator showing current step in checkout process.
 */
interface CheckoutProgressProps {
  currentStep: CheckoutStep;
}

const CheckoutProgress: React.FC<CheckoutProgressProps> = ({ currentStep }) => {
  const steps = [
    { number: 1, label: 'Customer Info', icon: User },
    { number: 2, label: 'Shipping', icon: MapPin },
    { number: 3, label: 'Payment', icon: CreditCard },
    { number: 4, label: 'Review', icon: CheckCircle2 }
  ];

  return (
    <div className="flex items-center justify-between max-w-3xl mx-auto">
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isActive = currentStep === step.number;
        const isCompleted = currentStep > step.number;

        return (
          <React.Fragment key={step.number}>
            <div className="flex flex-col items-center flex-1">
              <div
                className={`
                  size-12 rounded-full flex items-center justify-center mb-2 transition-all
                  ${isCompleted ? 'bg-[var(--twb-color-vine)] text-white' : ''}
                  ${isActive ? 'bg-[var(--twb-color-plum)] text-white ring-4 ring-[var(--twb-color-plum)] ring-opacity-30' : ''}
                  ${!isActive && !isCompleted ? 'bg-[var(--twb-color-bg-secondary)] text-[var(--twb-color-text-secondary)]' : ''}
                `}
              >
                <Icon className="size-5" />
              </div>
              <Typography
                variant="caption"
                className={`text-center hidden sm:block ${isActive ? 'font-semibold' : ''}`}
              >
                {step.label}
              </Typography>
            </div>

            {index < steps.length - 1 && (
              <div className="flex-1 h-0.5 bg-[var(--twb-color-bg-secondary)] mx-2 -mt-8">
                <div
                  className="h-full bg-[var(--twb-color-vine)] transition-all"
                  style={{ width: currentStep > step.number ? '100%' : '0%' }}
                />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

/**
 * CustomerInfoStep Component
 * 
 * Step 1: Collect customer name, email, and phone.
 */
interface CustomerInfoStepProps {
  customerInfo: CustomerInfo;
  setCustomerInfo: React.Dispatch<React.SetStateAction<CustomerInfo>>;
  saveInfo: boolean;
  setSaveInfo: React.Dispatch<React.SetStateAction<boolean>>;
}

const CustomerInfoStep: React.FC<CustomerInfoStepProps> = ({
  customerInfo,
  setCustomerInfo,
  saveInfo,
  setSaveInfo
}) => {
  return (
    <Card variant="default">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <User className="size-6 text-[var(--twb-color-plum)]" />
          <Typography variant="h3">Customer Information</Typography>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-semibold mb-2">
                First Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                value={customerInfo.firstName}
                onChange={(e) => setCustomerInfo({ ...customerInfo, firstName: e.target.value })}
                className="w-full px-4 py-3 rounded-[var(--twb-radius-button)] border border-[var(--twb-color-border-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--twb-color-gold)]"
                placeholder="John"
                required
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-semibold mb-2">
                Last Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                value={customerInfo.lastName}
                onChange={(e) => setCustomerInfo({ ...customerInfo, lastName: e.target.value })}
                className="w-full px-4 py-3 rounded-[var(--twb-radius-button)] border border-[var(--twb-color-border-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--twb-color-gold)]"
                placeholder="Smith"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email Address <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={customerInfo.email}
              onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
              className="w-full px-4 py-3 rounded-[var(--twb-radius-button)] border border-[var(--twb-color-border-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--twb-color-gold)]"
              placeholder="john.smith@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold mb-2">
              Phone Number <span className="text-red-600">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              value={customerInfo.phone}
              onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-[var(--twb-radius-button)] border border-[var(--twb-color-border-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--twb-color-gold)]"
              placeholder="0821234567"
              required
            />
          </div>

          <div className="flex items-center gap-2 pt-2">
            <input
              type="checkbox"
              id="saveInfo"
              checked={saveInfo}
              onChange={(e) => setSaveInfo(e.target.checked)}
              className="size-4 rounded accent-[var(--twb-color-plum)]"
            />
            <label htmlFor="saveInfo" className="text-sm">
              Save my information for faster checkout next time
            </label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

/**
 * ShippingAddressStep Component
 * 
 * Step 2: Collect shipping and optional billing address.
 */
interface ShippingAddressStepProps {
  shippingAddress: Address;
  setShippingAddress: React.Dispatch<React.SetStateAction<Address>>;
  billingSameAsShipping: boolean;
  setBillingSameAsShipping: React.Dispatch<React.SetStateAction<boolean>>;
  billingAddress: Address;
  setBillingAddress: React.Dispatch<React.SetStateAction<Address>>;
  includeGift: boolean;
  setIncludeGift: React.Dispatch<React.SetStateAction<boolean>>;
  giftMessage: string;
  setGiftMessage: React.Dispatch<React.SetStateAction<string>>;
}

const ShippingAddressStep: React.FC<ShippingAddressStepProps> = ({
  shippingAddress,
  setShippingAddress,
  billingSameAsShipping,
  setBillingSameAsShipping,
  billingAddress,
  setBillingAddress,
  includeGift,
  setIncludeGift,
  giftMessage,
  setGiftMessage
}) => {
  return (
    <div className="space-y-6">
      {/* Shipping Address */}
      <Card variant="default">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="size-6 text-[var(--twb-color-plum)]" />
            <Typography variant="h3">Shipping Address</Typography>
          </div>

          <AddressForm
            address={shippingAddress}
            setAddress={setShippingAddress}
          />
        </CardContent>
      </Card>

      {/* Gift Message */}
      <Card variant="default">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Gift className="size-6 text-[var(--twb-color-plum)]" />
            <Typography variant="h3">Gift Message (Optional)</Typography>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="includeGift"
                checked={includeGift}
                onChange={(e) => setIncludeGift(e.target.checked)}
                className="size-4 rounded accent-[var(--twb-color-plum)]"
              />
              <label htmlFor="includeGift" className="text-sm">
                This is a gift - include a message
              </label>
            </div>

            {includeGift && (
              <div>
                <label htmlFor="giftMessage" className="block text-sm font-semibold mb-2">
                  Gift Message
                </label>
                <textarea
                  id="giftMessage"
                  value={giftMessage}
                  onChange={(e) => setGiftMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-[var(--twb-radius-button)] border border-[var(--twb-color-border-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--twb-color-gold)] min-h-[100px]"
                  placeholder="Write your gift message here..."
                  maxLength={250}
                />
                <Typography variant="caption" className="text-[var(--twb-color-text-secondary)] mt-1">
                  {giftMessage.length}/250 characters
                </Typography>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Billing Address */}
      <Card variant="default">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <CreditCard className="size-6 text-[var(--twb-color-plum)]" />
            <Typography variant="h3">Billing Address</Typography>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="billingSame"
                checked={billingSameAsShipping}
                onChange={(e) => setBillingSameAsShipping(e.target.checked)}
                className="size-4 rounded accent-[var(--twb-color-plum)]"
              />
              <label htmlFor="billingSame" className="text-sm">
                Same as shipping address
              </label>
            </div>

            {!billingSameAsShipping && (
              <AddressForm
                address={billingAddress}
                setAddress={setBillingAddress}
              />
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

/**
 * AddressForm Component
 * 
 * Reusable address form fields.
 */
interface AddressFormProps {
  address: Address;
  setAddress: React.Dispatch<React.SetStateAction<Address>>;
}

const AddressForm: React.FC<AddressFormProps> = ({ address, setAddress }) => {
  const southAfricanProvinces = [
    'Eastern Cape',
    'Free State',
    'Gauteng',
    'KwaZulu-Natal',
    'Limpopo',
    'Mpumalanga',
    'Northern Cape',
    'North West',
    'Western Cape'
  ];

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="address1" className="block text-sm font-semibold mb-2">
          Street Address <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="address1"
          value={address.address1}
          onChange={(e) => setAddress({ ...address, address1: e.target.value })}
          className="w-full px-4 py-3 rounded-[var(--twb-radius-button)] border border-[var(--twb-color-border-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--twb-color-gold)]"
          placeholder="123 Main Street"
          required
        />
      </div>

      <div>
        <label htmlFor="address2" className="block text-sm font-semibold mb-2">
          Apartment, Suite, Unit (Optional)
        </label>
        <input
          type="text"
          id="address2"
          value={address.address2}
          onChange={(e) => setAddress({ ...address, address2: e.target.value })}
          className="w-full px-4 py-3 rounded-[var(--twb-radius-button)] border border-[var(--twb-color-border-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--twb-color-gold)]"
          placeholder="Apt 4B"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="city" className="block text-sm font-semibold mb-2">
            City <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="city"
            value={address.city}
            onChange={(e) => setAddress({ ...address, city: e.target.value })}
            className="w-full px-4 py-3 rounded-[var(--twb-radius-button)] border border-[var(--twb-color-border-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--twb-color-gold)]"
            placeholder="Paarl"
            required
          />
        </div>

        <div>
          <label htmlFor="postalCode" className="block text-sm font-semibold mb-2">
            Postal Code <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="postalCode"
            value={address.postalCode}
            onChange={(e) => setAddress({ ...address, postalCode: e.target.value })}
            className="w-full px-4 py-3 rounded-[var(--twb-radius-button)] border border-[var(--twb-color-border-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--twb-color-gold)]"
            placeholder="7646"
            maxLength={4}
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="province" className="block text-sm font-semibold mb-2">
          Province <span className="text-red-600">*</span>
        </label>
        <select
          id="province"
          value={address.province}
          onChange={(e) => setAddress({ ...address, province: e.target.value })}
          className="w-full px-4 py-3 rounded-[var(--twb-radius-button)] border border-[var(--twb-color-border-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--twb-color-gold)]"
          required
        >
          {southAfricanProvinces.map(province => (
            <option key={province} value={province}>
              {province}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="country" className="block text-sm font-semibold mb-2">
          Country <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="country"
          value={address.country}
          className="w-full px-4 py-3 rounded-[var(--twb-radius-button)] border border-[var(--twb-color-border-primary)] bg-[var(--twb-color-bg-secondary)] cursor-not-allowed"
          disabled
        />
      </div>
    </div>
  );
};

/**
 * PaymentMethodStep Component
 * 
 * Step 3: Select payment method and enter payment details.
 */
interface PaymentMethodStepProps {
  paymentInfo: PaymentInfo;
  setPaymentInfo: React.Dispatch<React.SetStateAction<PaymentInfo>>;
}

const PaymentMethodStep: React.FC<PaymentMethodStepProps> = ({
  paymentInfo,
  setPaymentInfo
}) => {
  return (
    <Card variant="default">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <CreditCard className="size-6 text-[var(--twb-color-plum)]" />
          <Typography variant="h3">Payment Method</Typography>
        </div>

        <div className="space-y-6">
          {/* Payment Method Selection */}
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-4 rounded-[var(--twb-radius-card)] border-2 border-[var(--twb-color-border-primary)] cursor-pointer hover:border-[var(--twb-color-plum)] transition-colors">
              <input
                type="radio"
                name="paymentMethod"
                value="credit_card"
                checked={paymentInfo.method === 'credit_card'}
                onChange={(e) => setPaymentInfo({ ...paymentInfo, method: e.target.value as any })}
                className="size-4 accent-[var(--twb-color-plum)]"
              />
              <div className="flex-1">
                <Typography variant="body" className="font-semibold">
                  Credit/Debit Card
                </Typography>
                <Typography variant="caption" className="text-[var(--twb-color-text-secondary)]">
                  Pay securely with your card
                </Typography>
              </div>
              <Lock className="size-5 text-[var(--twb-color-text-secondary)]" />
            </label>

            <label className="flex items-center gap-3 p-4 rounded-[var(--twb-radius-card)] border-2 border-[var(--twb-color-border-primary)] cursor-pointer hover:border-[var(--twb-color-plum)] transition-colors">
              <input
                type="radio"
                name="paymentMethod"
                value="eft"
                checked={paymentInfo.method === 'eft'}
                onChange={(e) => setPaymentInfo({ ...paymentInfo, method: e.target.value as any })}
                className="size-4 accent-[var(--twb-color-plum)]"
              />
              <div className="flex-1">
                <Typography variant="body" className="font-semibold">
                  EFT / Bank Transfer
                </Typography>
                <Typography variant="caption" className="text-[var(--twb-color-text-secondary)]">
                  Pay directly from your bank account
                </Typography>
              </div>
            </label>

            <label className="flex items-center gap-3 p-4 rounded-[var(--twb-radius-card)] border-2 border-[var(--twb-color-border-primary)] cursor-pointer hover:border-[var(--twb-color-plum)] transition-colors">
              <input
                type="radio"
                name="paymentMethod"
                value="payfast"
                checked={paymentInfo.method === 'payfast'}
                onChange={(e) => setPaymentInfo({ ...paymentInfo, method: e.target.value as any })}
                className="size-4 accent-[var(--twb-color-plum)]"
              />
              <div className="flex-1">
                <Typography variant="body" className="font-semibold">
                  PayFast
                </Typography>
                <Typography variant="caption" className="text-[var(--twb-color-text-secondary)]">
                  Instant EFT, card, or wallet payment
                </Typography>
              </div>
            </label>
          </div>

          {/* Credit Card Form */}
          {paymentInfo.method === 'credit_card' && (
            <div className="space-y-4 pt-4 border-t border-[var(--twb-color-border-primary)]">
              <div>
                <label htmlFor="cardNumber" className="block text-sm font-semibold mb-2">
                  Card Number <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  value={paymentInfo.cardNumber || ''}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '').slice(0, 16);
                    setPaymentInfo({ ...paymentInfo, cardNumber: value });
                  }}
                  className="w-full px-4 py-3 rounded-[var(--twb-radius-button)] border border-[var(--twb-color-border-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--twb-color-gold)]"
                  placeholder="1234 5678 9012 3456"
                  maxLength={16}
                  required
                />
              </div>

              <div>
                <label htmlFor="cardName" className="block text-sm font-semibold mb-2">
                  Cardholder Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="cardName"
                  value={paymentInfo.cardName || ''}
                  onChange={(e) => setPaymentInfo({ ...paymentInfo, cardName: e.target.value })}
                  className="w-full px-4 py-3 rounded-[var(--twb-radius-button)] border border-[var(--twb-color-border-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--twb-color-gold)]"
                  placeholder="John Smith"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="expiryDate" className="block text-sm font-semibold mb-2">
                    Expiry Date <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="expiryDate"
                    value={paymentInfo.expiryDate || ''}
                    onChange={(e) => {
                      let value = e.target.value.replace(/\D/g, '');
                      if (value.length >= 2) {
                        value = value.slice(0, 2) + '/' + value.slice(2, 4);
                      }
                      setPaymentInfo({ ...paymentInfo, expiryDate: value });
                    }}
                    className="w-full px-4 py-3 rounded-[var(--twb-radius-button)] border border-[var(--twb-color-border-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--twb-color-gold)]"
                    placeholder="MM/YY"
                    maxLength={5}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="cvv" className="block text-sm font-semibold mb-2">
                    CVV <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    value={paymentInfo.cvv || ''}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '').slice(0, 3);
                      setPaymentInfo({ ...paymentInfo, cvv: value });
                    }}
                    className="w-full px-4 py-3 rounded-[var(--twb-radius-button)] border border-[var(--twb-color-border-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--twb-color-gold)]"
                    placeholder="123"
                    maxLength={3}
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {/* EFT Instructions */}
          {paymentInfo.method === 'eft' && (
            <div className="p-4 rounded-[var(--twb-radius-card)] bg-[var(--twb-color-bg-secondary)] border-l-4 border-[var(--twb-color-vine)]">
              <Typography variant="body" className="font-semibold mb-2">
                Bank Transfer Instructions
              </Typography>
              <Typography variant="caption" className="text-[var(--twb-color-text-secondary)]">
                After placing your order, you will receive an email with our banking details and your unique reference number. 
                Your order will be processed once payment is received (typically 1-2 business days).
              </Typography>
            </div>
          )}

          {/* PayFast Notice */}
          {paymentInfo.method === 'payfast' && (
            <div className="p-4 rounded-[var(--twb-radius-card)] bg-[var(--twb-color-bg-secondary)] border-l-4 border-[var(--twb-color-vine)]">
              <Typography variant="body" className="font-semibold mb-2">
                PayFast Payment
              </Typography>
              <Typography variant="caption" className="text-[var(--twb-color-text-secondary)]">
                You will be redirected to PayFast to complete your payment securely. 
                PayFast accepts Instant EFT, credit/debit cards, and digital wallets.
              </Typography>
            </div>
          )}

          {/* Security Notice */}
          <div className="flex items-start gap-3 p-4 rounded-[var(--twb-radius-card)] bg-[var(--twb-color-bg-secondary)]">
            <Shield className="size-5 mt-0.5 text-[var(--twb-color-vine)] shrink-0" aria-hidden="true" />
            <div>
              <Typography variant="caption" className="font-semibold mb-1">
                Secure Payment
              </Typography>
              <Typography variant="caption" className="text-[var(--twb-color-text-secondary)]">
                Your payment information is encrypted and secure. We never store your full card details.
              </Typography>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

/**
 * ReviewStep Component
 * 
 * Step 4: Review order details and confirm age verification.
 */
interface ReviewStepProps {
  customerInfo: CustomerInfo;
  shippingAddress: Address;
  billingAddress: Address;
  paymentInfo: PaymentInfo;
  ageVerified: boolean;
  setAgeVerified: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentStep: React.Dispatch<React.SetStateAction<CheckoutStep>>;
}

const ReviewStep: React.FC<ReviewStepProps> = ({
  customerInfo,
  shippingAddress,
  billingAddress,
  paymentInfo,
  ageVerified,
  setAgeVerified,
  setCurrentStep
}) => {
  return (
    <div className="space-y-6">
      {/* Customer Info Summary */}
      <Card variant="default">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <User className="size-6 text-[var(--twb-color-plum)]" />
              <Typography variant="h3">Customer Information</Typography>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentStep(CheckoutStep.CUSTOMER_INFO)}
            >
              <Edit className="size-4 mr-2" />
              Edit
            </Button>
          </div>
          <div className="space-y-2">
            <Typography variant="body">
              {customerInfo.firstName} {customerInfo.lastName}
            </Typography>
            <Typography variant="body" className="text-[var(--twb-color-text-secondary)]">
              {customerInfo.email}
            </Typography>
            <Typography variant="body" className="text-[var(--twb-color-text-secondary)]">
              {customerInfo.phone}
            </Typography>
          </div>
        </CardContent>
      </Card>

      {/* Shipping Address Summary */}
      <Card variant="default">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <MapPin className="size-6 text-[var(--twb-color-plum)]" />
              <Typography variant="h3">Shipping Address</Typography>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentStep(CheckoutStep.SHIPPING)}
            >
              <Edit className="size-4 mr-2" />
              Edit
            </Button>
          </div>
          <div className="space-y-1">
            <Typography variant="body">{shippingAddress.address1}</Typography>
            {shippingAddress.address2 && (
              <Typography variant="body">{shippingAddress.address2}</Typography>
            )}
            <Typography variant="body">
              {shippingAddress.city}, {shippingAddress.province} {shippingAddress.postalCode}
            </Typography>
            <Typography variant="body">{shippingAddress.country}</Typography>
          </div>
        </CardContent>
      </Card>

      {/* Payment Method Summary */}
      <Card variant="default">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <CreditCard className="size-6 text-[var(--twb-color-plum)]" />
              <Typography variant="h3">Payment Method</Typography>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentStep(CheckoutStep.PAYMENT)}
            >
              <Edit className="size-4 mr-2" />
              Edit
            </Button>
          </div>
          <Typography variant="body">
            {paymentInfo.method === 'credit_card' && 'Credit/Debit Card'}
            {paymentInfo.method === 'eft' && 'EFT / Bank Transfer'}
            {paymentInfo.method === 'payfast' && 'PayFast'}
          </Typography>
          {paymentInfo.method === 'credit_card' && paymentInfo.cardNumber && (
            <Typography variant="body" className="text-[var(--twb-color-text-secondary)]">
              •••• •••• •••• {paymentInfo.cardNumber.slice(-4)}
            </Typography>
          )}
        </CardContent>
      </Card>

      {/* Age Verification */}
      <Card variant="default" className="border-2 border-[var(--twb-color-gold)]">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="size-6 mt-0.5 text-[var(--twb-color-gold)] shrink-0" aria-hidden="true" />
            <div className="flex-1">
              <Typography variant="h3" className="mb-4">
                Age Verification Required
              </Typography>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="ageVerification"
                  checked={ageVerified}
                  onChange={(e) => setAgeVerified(e.target.checked)}
                  className="size-5 mt-1 rounded accent-[var(--twb-color-plum)] cursor-pointer"
                  required
                />
                <label htmlFor="ageVerification" className="cursor-pointer">
                  <Typography variant="body">
                    I confirm that I am 18 years of age or older and understand that ID verification 
                    may be required upon delivery for alcohol products. <span className="text-red-600">*</span>
                  </Typography>
                </label>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

/**
 * OrderSummary Component
 * 
 * Sidebar showing cart items and price breakdown.
 */
interface OrderSummaryProps {
  cartItems: any[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  cartItems,
  subtotal,
  shipping,
  tax,
  total
}) => {
  const navigate = useNavigate();

  return (
    <Card variant="elevated">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <Typography variant="h3">Order Summary</Typography>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/cart')}
          >
            <Edit className="size-4 mr-2" />
            Edit Cart
          </Button>
        </div>

        {/* Cart Items */}
        <div className="space-y-3 mb-6 max-h-[300px] overflow-y-auto">
          {cartItems.map((item) => (
            <div key={item.productId} className="flex gap-3">
              <img
                src={item.product.image}
                alt={item.product.name}
                className="size-16 object-cover rounded-[var(--twb-radius-sm)] shrink-0"
              />
              <div className="flex-1 min-w-0">
                <Typography variant="body" className="font-semibold line-clamp-1">
                  {item.product.name}
                </Typography>
                <Typography variant="caption" className="text-[var(--twb-color-text-secondary)]">
                  Qty: {item.quantity}
                </Typography>
                <Typography variant="body" className="text-[var(--twb-color-plum)]">
                  R{(item.product.price * item.quantity).toFixed(2)}
                </Typography>
              </div>
            </div>
          ))}
        </div>

        {/* Price Breakdown */}
        <div className="space-y-3 pt-4 border-t border-[var(--twb-color-border-primary)]">
          <div className="flex justify-between">
            <Typography variant="body" className="text-[var(--twb-color-text-secondary)]">
              Subtotal
            </Typography>
            <Typography variant="body" className="font-semibold">
              R{subtotal.toFixed(2)}
            </Typography>
          </div>

          <div className="flex justify-between">
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

          <div className="flex justify-between">
            <Typography variant="body" className="text-[var(--twb-color-text-secondary)]">
              VAT (15%)
            </Typography>
            <Typography variant="body" className="font-semibold">
              R{tax.toFixed(2)}
            </Typography>
          </div>

          <div className="flex justify-between pt-3 border-t border-[var(--twb-color-border-primary)]">
            <Typography variant="h4">Total</Typography>
            <Typography variant="h3" className="text-[var(--twb-color-plum)]">
              R{total.toFixed(2)}
            </Typography>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="space-y-2 mt-6 pt-6 border-t border-[var(--twb-color-border-primary)]">
          <div className="flex items-center gap-2">
            <Lock className="size-4 text-[var(--twb-color-vine)]" />
            <Typography variant="caption">Secure checkout</Typography>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="size-4 text-[var(--twb-color-vine)]" />
            <Typography variant="caption">Free shipping over R500</Typography>
          </div>
          <div className="flex items-center gap-2">
            <Package className="size-4 text-[var(--twb-color-vine)]" />
            <Typography variant="caption">Carefully packaged</Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Checkout;
