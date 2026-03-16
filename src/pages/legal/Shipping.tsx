/**
 * Shipping & Delivery Page
 * 
 * Shipping policies, delivery information, and logistics for Handcrafted Wines.
 * South African shipping with international inquiries.
 * 
 * Features:
 * - Delivery areas and timeframes
 * - Shipping costs and free shipping thresholds
 * - Special handling for alcohol
 * - Tracking and support information
 * - Family farm voice and tone
 * 
 * @package HandcraftedWines
 * @version 1.0
 */

import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { BreadcrumbsBar } from '../../components/layout/BreadcrumbsBar';
import { Hero } from '../../components/sections/Hero';
import { Container } from '../../components/common/Container';
import { Typography } from '../../components/common/Typography';
import { Truck, Package, MapPin, Clock, Shield, HelpCircle } from 'lucide-react';

export const Shipping: React.FC = () => {
  return (
    <Layout>
      <BreadcrumbsBar />
      
      <Hero
        title="Shipping & Delivery"
        subtitle="Getting our handcrafted wines, spirits, and cheese from our farm to your door—safely and quickly."
        height="small"
        align="center"
        nextSectionId="shipping-content"
      />

      <section id="shipping-content" className="py-[var(--twb-spacing-section-y)]">
        <Container variant="content">
          <div className="prose prose-lg max-w-none">

            {/* Section 1 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-[var(--twb-color-plum)]" size={28} />
                <Typography variant="h3">
                  Delivery Areas
                </Typography>
              </div>
              
              <Typography variant="body" className="mb-4">
                We currently ship within <strong>South Africa only</strong>. Our delivery zones:
              </Typography>

              <div className="bg-[var(--twb-color-bg-tertiary)] p-6 rounded-[var(--twb-radius-organic-sm)] mb-6">
                <ul className="list-none pl-0 mb-0 space-y-3">
                  <li>
                    <strong className="text-[var(--twb-color-plum)]">Western Cape:</strong>{' '}
                    Standard delivery (2-4 business days)
                  </li>
                  <li>
                    <strong className="text-[var(--twb-color-plum)]">Gauteng:</strong>{' '}
                    Standard delivery (3-5 business days)
                  </li>
                  <li>
                    <strong className="text-[var(--twb-color-plum)]">Other provinces:</strong>{' '}
                    Standard delivery (4-7 business days)
                  </li>
                  <li>
                    <strong className="text-[var(--twb-color-plum)]">Remote areas:</strong>{' '}
                    Extended delivery (7-10 business days)
                  </li>
                </ul>
              </div>

              <Typography variant="body" className="mb-4">
                <strong>International shipping:</strong> Not currently available, but we're working on it! 
                If you're outside South Africa and interested in our wines, please email{' '}
                <a href="mailto:hello@handcraftedwines.co.za" className="text-[var(--twb-color-plum)] hover:underline">
                  hello@handcraftedwines.co.za
                </a>{' '}
                and we'll let you know when we start international deliveries.
              </Typography>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Truck className="text-[var(--twb-color-plum)]" size={28} />
                <Typography variant="h3">
                  Shipping Costs
                </Typography>
              </div>
              
              <Typography variant="body" className="mb-4">
                We keep shipping costs as low as possible while ensuring your wine arrives safely:
              </Typography>

              <div className="bg-[var(--twb-color-bg-tertiary)] p-6 rounded-[var(--twb-radius-organic-sm)] mb-6">
                <ul className="list-none pl-0 mb-0 space-y-3">
                  <li>
                    <strong className="text-[var(--twb-color-plum)]">Orders under R500:</strong> R95 shipping fee
                  </li>
                  <li>
                    <strong className="text-[var(--twb-color-plum)]">Orders R500 - R999:</strong> R65 shipping fee
                  </li>
                  <li>
                    <strong className="text-[var(--twb-color-plum)]">Orders R1000+:</strong>{' '}
                    <span className="inline-block bg-[var(--twb-color-plum)] text-white px-3 py-1 rounded-full text-sm font-bold">
                      FREE SHIPPING
                    </span>
                  </li>
                </ul>
              </div>

              <Typography variant="body" className="mb-4">
                <strong>Wine Club members:</strong> Get free shipping on all orders, regardless of amount. 
                Another reason to{' '}
                <a href="/wine-club" className="text-[var(--twb-color-plum)] hover:underline">
                  join our Wine Club
                </a>!
              </Typography>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-[var(--twb-color-plum)]" size={28} />
                <Typography variant="h3">
                  Processing & Delivery Times
                </Typography>
              </div>
              
              <Typography variant="body" className="mb-4">
                <strong>Order processing:</strong> We hand-pack your order with care. Most orders are processed 
                and dispatched within 1-2 business days (Monday-Friday, excluding public holidays).
              </Typography>

              <Typography variant="body" className="mb-4">
                <strong>Delivery timeframes:</strong> Once dispatched, delivery times depend on your location:
              </Typography>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Cape Town & surrounding areas:</strong> 1-3 business days</li>
                <li><strong>Western Cape (other areas):</strong> 2-4 business days</li>
                <li><strong>Johannesburg, Pretoria, Durban:</strong> 3-5 business days</li>
                <li><strong>Other major cities:</strong> 4-6 business days</li>
                <li><strong>Remote/rural areas:</strong> 7-10 business days</li>
              </ul>

              <Typography variant="body" className="mb-4">
                <strong>Busy periods:</strong> During harvest season (February-April), festive holidays, 
                and Wine Club shipment weeks, delivery may take 1-2 days longer than usual. 
                We'll keep you updated if there are any delays.
              </Typography>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Package className="text-[var(--twb-color-plum)]" size={28} />
                <Typography variant="h3">
                  Packaging & Handling
                </Typography>
              </div>
              
              <Typography variant="body" className="mb-4">
                Your wines are precious to us (we literally made them), so we pack them with serious care:
              </Typography>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Protective packaging:</strong> Each bottle is individually wrapped and cushioned</li>
                <li><strong>Sturdy boxes:</strong> Purpose-designed wine shipping boxes with dividers</li>
                <li><strong>Temperature consideration:</strong> During hot months, we use insulated liners</li>
                <li><strong>Cheese packaging:</strong> Insulated boxes with ice packs for artisan cheese</li>
                <li><strong>Eco-friendly materials:</strong> Recyclable and biodegradable packing materials where possible</li>
              </ul>

              <Typography variant="body" className="mb-4">
                <strong>Special note on temperature:</strong> If you're ordering during summer (November-February), 
                your wine may experience warm temperatures during transit. While we use insulated packaging, 
                we recommend having someone available to receive the delivery and refrigerate cheese products immediately.
              </Typography>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="text-[var(--twb-color-plum)]" size={28} />
                <Typography variant="h3">
                  Age Verification & Alcohol Delivery
                </Typography>
              </div>
              
              <Typography variant="body" className="mb-4">
                <strong>Important:</strong> It's illegal to sell alcohol to anyone under 18 in South Africa. 
                We take this seriously.
              </Typography>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>ID check:</strong> Someone 18 or older must be present to receive alcohol deliveries</li>
                <li><strong>Courier verification:</strong> Our courier may request ID at delivery</li>
                <li><strong>No ID, no delivery:</strong> If no one 18+ is available, the package will be returned to the depot</li>
                <li><strong>Redelivery fee:</strong> Failed deliveries may incur a redelivery charge</li>
              </ul>

              <Typography variant="body" className="mb-4">
                <strong>Best practice:</strong> Provide a delivery address where someone 18+ will be present 
                during business hours (usually 8am-5pm).
              </Typography>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <Typography variant="h3" className="mb-4">
                Tracking Your Order
              </Typography>
              
              <Typography variant="body" className="mb-4">
                Once your order ships, we'll email you a tracking number. You can:
              </Typography>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Track your order online via the courier's website</li>
                <li>Check order status in your <a href="/account" className="text-[var(--twb-color-plum)] hover:underline">My Account</a> page</li>
                <li>Contact our team for updates at +27 21 807 3007</li>
              </ul>

              <Typography variant="body" className="mb-4">
                <strong>Delivery notifications:</strong> Our courier will usually call or SMS before delivery. 
                Make sure your phone number is correct when you checkout.
              </Typography>
            </div>

            {/* Section 7 */}
            <div className="mb-12">
              <Typography variant="h3" className="mb-4">
                Delivery Issues
              </Typography>
              
              <Typography variant="h4" className="mb-3 text-[var(--twb-color-text-primary)]">
                Damaged or Broken Bottles
              </Typography>
              <Typography variant="body" className="mb-4">
                We pack carefully, but sometimes accidents happen in transit. If your delivery arrives with 
                broken or damaged bottles:
              </Typography>
              <ol className="list-decimal pl-6 mb-6 space-y-2">
                <li>Take photos of the damaged packaging and bottles (before opening the box fully)</li>
                <li>Contact us immediately at <a href="mailto:hello@handcraftedwines.co.za" className="text-[var(--twb-color-plum)] hover:underline">hello@handcraftedwines.co.za</a> or call +27 21 807 3007</li>
                <li>Keep all packaging materials for courier inspection (if needed)</li>
              </ol>
              <Typography variant="body" className="mb-6">
                We'll arrange a replacement or refund as quickly as possible. You won't be out of pocket.
              </Typography>

              <Typography variant="h4" className="mb-3 text-[var(--twb-color-text-primary)]">
                Missing Items
              </Typography>
              <Typography variant="body" className="mb-4">
                If items are missing from your order, please contact us within 48 hours of delivery. 
                We'll investigate and send the missing items or issue a refund.
              </Typography>

              <Typography variant="h4" className="mb-3 text-[var(--twb-color-text-primary)]">
                Delivery Delays
              </Typography>
              <Typography variant="body" className="mb-4">
                If your order hasn't arrived within the expected timeframe, please check:
              </Typography>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Tracking information for updates</li>
                <li>Whether the courier attempted delivery (they may have left a card)</li>
                <li>If your phone number was correct (courier may have tried to contact you)</li>
              </ul>
              <Typography variant="body" className="mb-6">
                If you still can't locate your order, contact us and we'll track it down.
              </Typography>
            </div>

            {/* Section 8 */}
            <div className="mb-12">
              <Typography variant="h3" className="mb-4">
                Collection Option
              </Typography>
              
              <Typography variant="body" className="mb-4">
                <strong>Prefer to collect?</strong> You're welcome to collect your order from our farm tasting room:
              </Typography>

              <div className="bg-[var(--twb-color-bg-tertiary)] p-6 rounded-[var(--twb-radius-organic-sm)] mb-4">
                <Typography variant="body" className="mb-2">
                  <strong>Collection Address:</strong><br />
                  Handcrafted Wines<br />
                  Paarl Mountain Road<br />
                  Paarl, 7646<br />
                  Western Cape, South Africa
                </Typography>
                <Typography variant="body" className="mb-2">
                  <strong>Collection Hours:</strong><br />
                  Monday - Friday: 9am - 5pm<br />
                  Saturday: 10am - 4pm<br />
                  Sunday: By appointment only
                </Typography>
                <Typography variant="body" className="mb-0">
                  <strong>Please note:</strong> Orders must be placed online at least 24 hours before collection. 
                  We'll email you when your order is ready to collect.
                </Typography>
              </div>

              <Typography variant="body" className="mb-4">
                <strong>Bonus:</strong> While you're here, grab a tasting or tour! Call ahead to book: +27 21 807 3007
              </Typography>
            </div>

            {/* Section 9 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <HelpCircle className="text-[var(--twb-color-plum)]" size={28} />
                <Typography variant="h3">
                  Frequently Asked Questions
                </Typography>
              </div>
              
              <div className="space-y-6">
                <div>
                  <Typography variant="h4" className="mb-2 text-[var(--twb-color-text-primary)]">
                    Can I specify a delivery date?
                  </Typography>
                  <Typography variant="body">
                    We can't guarantee specific delivery dates, but you can add delivery instructions during checkout 
                    (e.g., "Please deliver after 3pm"). For time-sensitive deliveries, contact us before ordering.
                  </Typography>
                </div>

                <div>
                  <Typography variant="h4" className="mb-2 text-[var(--twb-color-text-primary)]">
                    Do you deliver on weekends?
                  </Typography>
                  <Typography variant="body">
                    Most couriers deliver Monday-Friday only. Saturday delivery may be available in major cities 
                    for an additional fee—contact us to arrange.
                  </Typography>
                </div>

                <div>
                  <Typography variant="h4" className="mb-2 text-[var(--twb-color-text-primary)]">
                    Can I change my delivery address after ordering?
                  </Typography>
                  <Typography variant="body">
                    Yes, but only if your order hasn't been dispatched yet. Contact us immediately at +27 21 807 3007.
                  </Typography>
                </div>

                <div>
                  <Typography variant="h4" className="mb-2 text-[var(--twb-color-text-primary)]">
                    What if I'm not home when the courier arrives?
                  </Typography>
                  <Typography variant="body">
                    The courier will usually leave a card with collection details. You can collect from their depot 
                    or arrange redelivery (fees may apply). Provide a work address or alternative delivery location 
                    if you won't be home.
                  </Typography>
                </div>
              </div>
            </div>

            {/* Section 10 */}
            <div className="mb-12">
              <Typography variant="h3" className="mb-4">
                Contact Us
              </Typography>
              
              <Typography variant="body" className="mb-4">
                Questions about shipping? We're here to help:
              </Typography>
              <ul className="list-none pl-0 mb-4 space-y-2">
                <li><strong>Email:</strong>{' '}
                  <a href="mailto:hello@handcraftedwines.co.za" className="text-[var(--twb-color-plum)] hover:underline">
                    hello@handcraftedwines.co.za
                  </a>
                </li>
                <li><strong>Phone:</strong> +27 21 807 3007</li>
                <li><strong>WhatsApp:</strong> +27 82 555 1234 (business hours)</li>
              </ul>
            </div>

            {/* Note */}
            <div className="bg-[var(--twb-color-bg-tertiary)] p-6 rounded-[var(--twb-radius-organic-sm)] border-2 border-[var(--twb-color-vine)]">
              <Typography variant="body" className="text-[var(--twb-color-text-secondary)] text-sm mb-0">
                <strong>A Note from the Family:</strong> We're a small, family-run operation, and we genuinely care 
                about getting your wine to you safely and on time. If anything goes wrong with your delivery, 
                please reach out—we'll make it right. Enjoy responsibly! 🍷
              </Typography>
            </div>

          </div>
        </Container>
      </section>
    </Layout>
  );
};
