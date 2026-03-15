/**
 * Order Confirmation Page
 * 
 * Success page displayed after order is placed successfully.
 * 
 * Features:
 * - Order confirmation message with checkmark
 * - Order number display
 * - Order summary (customer, shipping, payment, items)
 * - Price breakdown recap
 * - Estimated delivery date
 * - Next steps information
 * - Order tracking CTA
 * - Continue shopping CTA
 * - Email confirmation notice
 * - Print order button
 * - Contact support link
 * - Related products (You may also like)
 * - Mobile responsive layout
 * - WCAG AA compliant
 * - SEO optimized
 * 
 * URL Pattern:
 * /order-received?order=12345
 * 
 * Usage:
 * ```tsx
 * <Route path="/order-received" element={<OrderConfirmation />} />
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
 * - Responsive layouts
 * - Success state styling
 * - Print-optimized CSS
 * 
 * @package HandcraftedWines
 * @version 1.0
 */

import React, { useMemo, useEffect } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router';
import { CheckoutLayout } from '../../components/layout/CheckoutLayout';
import { Container } from '../../components/common/Container';
import { Typography } from '../../components/common/Typography';
import { Button } from '../../components/common/Button';
import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { products } from '../../data/products';
import { 
  CheckCircle2, 
  Package, 
  Truck,
  Mail,
  Phone,
  Printer,
  ArrowRight,
  Calendar,
  MapPin,
  CreditCard,
  User,
  Info
} from 'lucide-react';

// Mock order data (TODO: Get from order confirmation API/context)
const MOCK_ORDER = {
  orderNumber: '12345',
  orderDate: new Date().toISOString(),
  customerInfo: {
    firstName: 'John',
    lastName: 'Smith',
    email: 'john.smith@example.com',
    phone: '0821234567'
  },
  shippingAddress: {
    address1: '123 Main Street',
    address2: 'Apt 4B',
    city: 'Cape Town',
    province: 'Western Cape',
    postalCode: '8001',
    country: 'South Africa'
  },
  paymentMethod: 'Credit Card',
  paymentLast4: '4242',
  items: [
    { productId: 'estate-shiraz-2020', quantity: 2 },
    { productId: 'fresh-chevre', quantity: 1 },
    { productId: 'tasting-trio', quantity: 1 }
  ],
  subtotal: 1215,
  shipping: 0,
  tax: 182.25,
  total: 1397.25,
  estimatedDelivery: '2026-03-22' // 7 days from order
};

export const OrderConfirmation: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const orderNumber = searchParams.get('order');

  // Redirect if no order number
  useEffect(() => {
    if (!orderNumber) {
      navigate('/');
    }
  }, [orderNumber, navigate]);

  // Get order items with product details
  const orderItemsWithDetails = useMemo(() => {
    return MOCK_ORDER.items.map(item => {
      const product = products.find(p => p.id === item.productId);
      return {
        ...item,
        product
      };
    }).filter(item => item.product !== undefined);
  }, []);

  // Calculate estimated delivery (7 business days)
  const deliveryDate = useMemo(() => {
    const date = new Date(MOCK_ORDER.estimatedDelivery);
    return date.toLocaleDateString('en-ZA', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }, []);

  // Order date formatted
  const orderDate = useMemo(() => {
    const date = new Date(MOCK_ORDER.orderDate);
    return date.toLocaleDateString('en-ZA', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }, []);

  const handlePrint = () => {
    window.print();
  };

  // Related products (excluding ordered items)
  const relatedProducts = useMemo(() => {
    const orderedIds = MOCK_ORDER.items.map(item => item.productId);
    return products
      .filter(p => !orderedIds.includes(p.id))
      .slice(0, 4);
  }, []);

  if (!orderNumber) {
    return null;
  }

  return (
    <CheckoutLayout showBackToShop={true}>
      {/* SEO Meta Tags */}
      <title>Order Confirmation #{orderNumber} - Handcrafted Wines</title>
      <meta name="description" content={`Your order #${orderNumber} has been received successfully`} />
      <meta name="robots" content="noindex,nofollow" />

      {/* Breadcrumbs */}
      <section className="bg-[var(--twb-color-bg-secondary)] py-3 border-b border-[var(--twb-color-border-primary)]">
        <Container variant="wide">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link to="/" className="text-[var(--twb-color-text-secondary)] hover:text-[var(--twb-color-plum)]">
                  Home
                </Link>
              </li>
              <li className="text-[var(--twb-color-text-secondary)]">/</li>
              <li>
                <Link to="/shop" className="text-[var(--twb-color-text-secondary)] hover:text-[var(--twb-color-plum)]">
                  Shop
                </Link>
              </li>
              <li className="text-[var(--twb-color-text-secondary)]">/</li>
              <li className="text-[var(--twb-color-text-primary)] font-semibold">Order Confirmation</li>
            </ol>
          </nav>
        </Container>
      </section>

      {/* Order Confirmation Page */}
      <section className="bg-[var(--twb-color-bg-primary)] py-[var(--twb-spacing-section-y)]">
        <Container variant="content">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center size-20 rounded-full bg-[var(--twb-color-vine)] bg-opacity-10 mb-6">
              <CheckCircle2 className="size-10 text-[var(--twb-color-vine)]" aria-hidden="true" />
            </div>
            
            <Typography variant="h1" className="mb-3">
              Thank You for Your Order!
            </Typography>
            
            <Typography variant="body-large" className="text-[var(--twb-color-text-secondary)] mb-4">
              Your order has been received and is being prepared with care.
            </Typography>

            <div className="flex items-center justify-center gap-2 mb-2">
              <Typography variant="body" className="text-[var(--twb-color-text-secondary)]">
                Order Number:
              </Typography>
              <Typography variant="h4" className="text-[var(--twb-color-plum)]">
                #{orderNumber}
              </Typography>
            </div>

            <Typography variant="caption" className="text-[var(--twb-color-text-secondary)]">
              {orderDate}
            </Typography>
          </div>

          {/* Email Confirmation Notice */}
          <Card variant="default" className="mb-8 border-l-4 border-[var(--twb-color-vine)]">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Mail className="size-6 mt-0.5 text-[var(--twb-color-vine)] shrink-0" aria-hidden="true" />
                <div>
                  <Typography variant="h4" className="mb-2">
                    Confirmation Email Sent
                  </Typography>
                  <Typography variant="body" className="text-[var(--twb-color-text-secondary)]">
                    We've sent an order confirmation to <strong>{MOCK_ORDER.customerInfo.email}</strong>. 
                    Please check your inbox (and spam folder) for details.
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Order Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Customer Information */}
            <Card variant="default">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <User className="size-5 text-[var(--twb-color-plum)]" aria-hidden="true" />
                  <Typography variant="h3">Customer Information</Typography>
                </div>
                <div className="space-y-2">
                  <Typography variant="body">
                    {MOCK_ORDER.customerInfo.firstName} {MOCK_ORDER.customerInfo.lastName}
                  </Typography>
                  <Typography variant="body" className="text-[var(--twb-color-text-secondary)]">
                    {MOCK_ORDER.customerInfo.email}
                  </Typography>
                  <Typography variant="body" className="text-[var(--twb-color-text-secondary)]">
                    {MOCK_ORDER.customerInfo.phone}
                  </Typography>
                </div>
              </CardContent>
            </Card>

            {/* Shipping Address */}
            <Card variant="default">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="size-5 text-[var(--twb-color-plum)]" aria-hidden="true" />
                  <Typography variant="h3">Shipping Address</Typography>
                </div>
                <div className="space-y-1">
                  <Typography variant="body">{MOCK_ORDER.shippingAddress.address1}</Typography>
                  {MOCK_ORDER.shippingAddress.address2 && (
                    <Typography variant="body">{MOCK_ORDER.shippingAddress.address2}</Typography>
                  )}
                  <Typography variant="body">
                    {MOCK_ORDER.shippingAddress.city}, {MOCK_ORDER.shippingAddress.province} {MOCK_ORDER.shippingAddress.postalCode}
                  </Typography>
                  <Typography variant="body">{MOCK_ORDER.shippingAddress.country}</Typography>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card variant="default">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CreditCard className="size-5 text-[var(--twb-color-plum)]" aria-hidden="true" />
                  <Typography variant="h3">Payment Method</Typography>
                </div>
                <Typography variant="body">{MOCK_ORDER.paymentMethod}</Typography>
                {MOCK_ORDER.paymentLast4 && (
                  <Typography variant="body" className="text-[var(--twb-color-text-secondary)]">
                    •••• •••• •••• {MOCK_ORDER.paymentLast4}
                  </Typography>
                )}
              </CardContent>
            </Card>

            {/* Estimated Delivery */}
            <Card variant="default">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="size-5 text-[var(--twb-color-plum)]" aria-hidden="true" />
                  <Typography variant="h3">Estimated Delivery</Typography>
                </div>
                <Typography variant="body" className="font-semibold mb-1">
                  {deliveryDate}
                </Typography>
                <Typography variant="caption" className="text-[var(--twb-color-text-secondary)]">
                  We'll send you tracking information once your order ships.
                </Typography>
              </CardContent>
            </Card>
          </div>

          {/* Order Items */}
          <Card variant="default" className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <Package className="size-6 text-[var(--twb-color-plum)]" aria-hidden="true" />
                <Typography variant="h3">Order Items</Typography>
              </div>

              <div className="space-y-4">
                {orderItemsWithDetails.map((item) => (
                  <div key={item.productId} className="flex gap-4 pb-4 border-b border-[var(--twb-color-border-primary)] last:border-b-0 last:pb-0">
                    <img
                      src={item.product!.image}
                      alt={item.product!.name}
                      className="size-20 object-cover rounded-[var(--twb-radius-sm)] shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <Typography variant="body" className="font-semibold mb-1">
                        {item.product!.name}
                      </Typography>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" size="sm">
                          {item.product!.category}
                        </Badge>
                      </div>
                      <Typography variant="caption" className="text-[var(--twb-color-text-secondary)]">
                        Qty: {item.quantity} × R{item.product!.price.toFixed(2)}
                      </Typography>
                    </div>
                    <div className="text-right shrink-0">
                      <Typography variant="body" className="font-semibold text-[var(--twb-color-plum)]">
                        R{(item.product!.price * item.quantity).toFixed(2)}
                      </Typography>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Summary */}
              <div className="mt-6 pt-6 border-t border-[var(--twb-color-border-primary)] space-y-2">
                <div className="flex justify-between">
                  <Typography variant="body" className="text-[var(--twb-color-text-secondary)]">
                    Subtotal
                  </Typography>
                  <Typography variant="body" className="font-semibold">
                    R{MOCK_ORDER.subtotal.toFixed(2)}
                  </Typography>
                </div>

                <div className="flex justify-between">
                  <Typography variant="body" className="text-[var(--twb-color-text-secondary)]">
                    Shipping
                  </Typography>
                  <Typography variant="body" className="font-semibold">
                    {MOCK_ORDER.shipping === 0 ? (
                      <span className="text-[var(--twb-color-vine)]">FREE</span>
                    ) : (
                      `R${MOCK_ORDER.shipping.toFixed(2)}`
                    )}
                  </Typography>
                </div>

                <div className="flex justify-between">
                  <Typography variant="body" className="text-[var(--twb-color-text-secondary)]">
                    VAT (15%)
                  </Typography>
                  <Typography variant="body" className="font-semibold">
                    R{MOCK_ORDER.tax.toFixed(2)}
                  </Typography>
                </div>

                <div className="flex justify-between pt-2 border-t border-[var(--twb-color-border-primary)]">
                  <Typography variant="h4">Total</Typography>
                  <Typography variant="h3" className="text-[var(--twb-color-plum)]">
                    R{MOCK_ORDER.total.toFixed(2)}
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card variant="default" className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Info className="size-6 text-[var(--twb-color-plum)]" aria-hidden="true" />
                <Typography variant="h3">What Happens Next?</Typography>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex items-center justify-center size-10 rounded-full bg-[var(--twb-color-vine)] bg-opacity-10 shrink-0">
                    <Typography variant="h4" className="text-[var(--twb-color-vine)]">1</Typography>
                  </div>
                  <div>
                    <Typography variant="body" className="font-semibold mb-1">
                      Order Confirmation
                    </Typography>
                    <Typography variant="caption" className="text-[var(--twb-color-text-secondary)]">
                      You'll receive an email confirmation with your order details.
                    </Typography>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex items-center justify-center size-10 rounded-full bg-[var(--twb-color-vine)] bg-opacity-10 shrink-0">
                    <Typography variant="h4" className="text-[var(--twb-color-vine)]">2</Typography>
                  </div>
                  <div>
                    <Typography variant="body" className="font-semibold mb-1">
                      Careful Packaging
                    </Typography>
                    <Typography variant="caption" className="text-[var(--twb-color-text-secondary)]">
                      Our team will carefully package your order with protective materials.
                    </Typography>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex items-center justify-center size-10 rounded-full bg-[var(--twb-color-vine)] bg-opacity-10 shrink-0">
                    <Typography variant="h4" className="text-[var(--twb-color-vine)]">3</Typography>
                  </div>
                  <div>
                    <Typography variant="body" className="font-semibold mb-1">
                      Shipping Update
                    </Typography>
                    <Typography variant="caption" className="text-[var(--twb-color-text-secondary)]">
                      We'll send you tracking information once your order ships (typically 1-2 business days).
                    </Typography>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex items-center justify-center size-10 rounded-full bg-[var(--twb-color-vine)] bg-opacity-10 shrink-0">
                    <Typography variant="h4" className="text-[var(--twb-color-vine)]">4</Typography>
                  </div>
                  <div>
                    <Typography variant="body" className="font-semibold mb-1">
                      Delivery & Enjoyment
                    </Typography>
                    <Typography variant="caption" className="text-[var(--twb-color-text-secondary)]">
                      Your order arrives at your door, ready to enjoy! Age verification required for alcohol.
                    </Typography>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              variant="primary"
              onClick={() => navigate('/shop')}
              className="flex-1"
            >
              Continue Shopping
              <ArrowRight className="size-4 ml-2" />
            </Button>

            <Button
              variant="outline"
              onClick={handlePrint}
              className="flex-1"
            >
              <Printer className="size-4 mr-2" />
              Print Order
            </Button>
          </div>

          {/* Support Section */}
          <Card variant="default" className="mb-12">
            <CardContent className="p-6">
              <Typography variant="h3" className="mb-4">
                Need Help?
              </Typography>
              <Typography variant="body" className="text-[var(--twb-color-text-secondary)] mb-4">
                If you have any questions about your order, feel free to reach out to our team.
              </Typography>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:hello@handcraftedwines.co.za"
                  className="flex items-center gap-2 text-[var(--twb-color-plum)] hover:underline"
                >
                  <Mail className="size-4" />
                  <Typography variant="body">hello@handcraftedwines.co.za</Typography>
                </a>
                <a
                  href="tel:+27218073007"
                  className="flex items-center gap-2 text-[var(--twb-color-plum)] hover:underline"
                >
                  <Phone className="size-4" />
                  <Typography variant="body">+27 21 807 3007</Typography>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <Typography variant="h2" className="mb-6">
                You May Also Like
              </Typography>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[var(--twb-spacing-grid-gap)]">
                {relatedProducts.map((product) => (
                  <Card
                    key={product.id}
                    variant="interactive"
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="cursor-pointer"
                  >
                    <CardContent className="p-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-t-[var(--twb-radius-card)]"
                      />
                      <div className="p-4">
                        <Badge variant="outline" size="sm" className="mb-2">
                          {product.category}
                        </Badge>
                        <Typography variant="body" className="font-semibold mb-2 line-clamp-2">
                          {product.name}
                        </Typography>
                        <Typography variant="h4" className="text-[var(--twb-color-plum)]">
                          R{product.price.toFixed(2)}
                        </Typography>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* Print Styles */}
      <style>{`
        @media print {
          /* Hide navigation, footer, and action buttons */
          header, footer, .no-print {
            display: none !important;
          }

          /* Show only order summary */
          body {
            background: white !important;
          }

          /* Optimize for print */
          * {
            color: black !important;
            background: white !important;
          }

          /* Keep borders for structure */
          .border-t, .border-b {
            border-color: #ccc !important;
          }
        }
      `}</style>
    </CheckoutLayout>
  );
};

export default OrderConfirmation;