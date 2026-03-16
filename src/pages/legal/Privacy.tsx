/**
 * Privacy Policy Page
 * 
 * GDPR-compliant privacy policy for Handcrafted Wines.
 * Explains data collection, usage, and user rights.
 * 
 * Features:
 * - Comprehensive privacy disclosures
 * - GDPR/POPIA compliance
 * - Contact information for data requests
 * - Clear, accessible language
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

export const Privacy: React.FC = () => {
  return (
    <Layout>
      <BreadcrumbsBar />
      
      <Hero
        title="Privacy Policy"
        subtitle="Your privacy matters to us. Here's how we protect and handle your personal information."
        height="small"
        align="center"
        nextSectionId="privacy-content"
      />

      <section id="privacy-content" className="py-[var(--twb-spacing-section-y)]">
        <Container variant="content">
          <div className="prose prose-lg max-w-none">
            
            <Typography variant="body" className="text-[var(--twb-color-text-secondary)] mb-8">
              <strong>Last Updated:</strong> March 15, 2026
            </Typography>

            <Typography variant="body" className="mb-8">
              At Handcrafted Wines, we're a small family business, and we treat your personal information 
              with the same care we put into our wines. This Privacy Policy explains how we collect, use, 
              and protect your data when you visit our website, shop with us, or visit our farm.
            </Typography>

            {/* Section 1 */}
            <div className="mb-12">
              <Typography variant="h3" className="mb-4">
                1. Information We Collect
              </Typography>
              
              <Typography variant="h4" className="mb-3 text-[var(--twb-color-text-primary)]">
                Information You Give Us
              </Typography>
              <Typography variant="body" className="mb-4">
                When you interact with us, we may collect:
              </Typography>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Contact details:</strong> Name, email, phone number, delivery address</li>
                <li><strong>Account information:</strong> Username, password (encrypted), order history</li>
                <li><strong>Payment information:</strong> Credit card details (processed securely by our payment provider)</li>
                <li><strong>Wine Club preferences:</strong> Wine preferences, delivery frequency, dietary restrictions</li>
                <li><strong>Booking details:</strong> Tasting reservations, event inquiries, group size</li>
                <li><strong>Correspondence:</strong> Emails, messages, feedback you send us</li>
              </ul>

              <Typography variant="h4" className="mb-3 text-[var(--twb-color-text-primary)]">
                Information We Collect Automatically
              </Typography>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Device information:</strong> IP address, browser type, device type</li>
                <li><strong>Usage data:</strong> Pages visited, time spent, links clicked</li>
                <li><strong>Cookies:</strong> Small files that help us remember your preferences (see our Cookie Policy)</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <Typography variant="h3" className="mb-4">
                2. How We Use Your Information
              </Typography>
              
              <Typography variant="body" className="mb-4">
                We use your information to:
              </Typography>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Process orders:</strong> Fulfill purchases, arrange delivery, send confirmations</li>
                <li><strong>Manage your account:</strong> Wine Club subscriptions, order history, saved preferences</li>
                <li><strong>Handle bookings:</strong> Confirm tastings, tours, events, and venue reservations</li>
                <li><strong>Communicate with you:</strong> Order updates, newsletters (if you opted in), special offers</li>
                <li><strong>Improve our service:</strong> Understand what you like, fix issues, enhance your experience</li>
                <li><strong>Legal compliance:</strong> Age verification for alcohol sales, tax records, fraud prevention</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <Typography variant="h3" className="mb-4">
                3. How We Share Your Information
              </Typography>
              
              <Typography variant="body" className="mb-4">
                We don't sell your data. Ever. We only share information when necessary:
              </Typography>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Shipping partners:</strong> We share delivery addresses with couriers to get your order to you</li>
                <li><strong>Payment processors:</strong> Secure payment handling (we never see your full card details)</li>
                <li><strong>Email service:</strong> Newsletter delivery (only if you subscribed)</li>
                <li><strong>Analytics tools:</strong> Anonymized data to understand website usage</li>
                <li><strong>Legal requirements:</strong> If required by law or to protect our rights</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <Typography variant="h3" className="mb-4">
                4. Your Rights
              </Typography>
              
              <Typography variant="body" className="mb-4">
                You have the right to:
              </Typography>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Access your data:</strong> Request a copy of the information we hold about you</li>
                <li><strong>Correct your data:</strong> Update or fix any inaccurate information</li>
                <li><strong>Delete your data:</strong> Request deletion (subject to legal record-keeping requirements)</li>
                <li><strong>Opt out of marketing:</strong> Unsubscribe from newsletters anytime (link in every email)</li>
                <li><strong>Object to processing:</strong> Ask us to stop using your data for certain purposes</li>
                <li><strong>Data portability:</strong> Request your data in a portable format</li>
              </ul>

              <Typography variant="body" className="mb-4">
                To exercise any of these rights, email us at{' '}
                <a href="mailto:privacy@handcraftedwines.co.za" className="text-[var(--twb-color-plum)] hover:underline">
                  privacy@handcraftedwines.co.za
                </a>{' '}
                or call +27 21 807 3007.
              </Typography>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <Typography variant="h3" className="mb-4">
                5. Data Security
              </Typography>
              
              <Typography variant="body" className="mb-4">
                We take security seriously:
              </Typography>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Encryption:</strong> All data transmitted to our website uses SSL/TLS encryption</li>
                <li><strong>Secure storage:</strong> Your data is stored on secure servers with restricted access</li>
                <li><strong>Payment security:</strong> We use PCI-DSS compliant payment processors</li>
                <li><strong>Limited access:</strong> Only authorized family members and staff can access your data</li>
                <li><strong>Regular updates:</strong> We keep our systems updated to protect against vulnerabilities</li>
              </ul>

              <Typography variant="body" className="mb-4">
                While we do our best to protect your information, no method of transmission over the internet 
                is 100% secure. If you have concerns about a security issue, please contact us immediately.
              </Typography>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <Typography variant="h3" className="mb-4">
                6. Data Retention
              </Typography>
              
              <Typography variant="body" className="mb-4">
                We keep your data only as long as necessary:
              </Typography>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Order records:</strong> 7 years (legal tax requirement in South Africa)</li>
                <li><strong>Account information:</strong> Until you request deletion or close your account</li>
                <li><strong>Marketing data:</strong> Until you unsubscribe or request removal</li>
                <li><strong>Website analytics:</strong> Anonymized data retained for 2 years</li>
              </ul>
            </div>

            {/* Section 7 */}
            <div className="mb-12">
              <Typography variant="h3" className="mb-4">
                7. Cookies and Tracking
              </Typography>
              
              <Typography variant="body" className="mb-4">
                We use cookies to improve your experience. See our{' '}
                <a href="/cookies" className="text-[var(--twb-color-plum)] hover:underline">
                  Cookie Policy
                </a>{' '}
                for detailed information about the cookies we use and how to manage them.
              </Typography>
            </div>

            {/* Section 8 */}
            <div className="mb-12">
              <Typography variant="h3" className="mb-4">
                8. Third-Party Links
              </Typography>
              
              <Typography variant="body" className="mb-4">
                Our website may link to third-party websites (like social media or partner sites). 
                We're not responsible for their privacy practices. Please review their policies 
                before sharing your information.
              </Typography>
            </div>

            {/* Section 9 */}
            <div className="mb-12">
              <Typography variant="h3" className="mb-4">
                9. Age Restrictions
              </Typography>
              
              <Typography variant="body" className="mb-4">
                Our products are for adults only. You must be 18 or older to purchase alcohol in South Africa. 
                We do not knowingly collect information from anyone under 18. If we discover we've collected 
                data from a minor, we'll delete it immediately.
              </Typography>
            </div>

            {/* Section 10 */}
            <div className="mb-12">
              <Typography variant="h3" className="mb-4">
                10. International Visitors
              </Typography>
              
              <Typography variant="body" className="mb-4">
                We're based in South Africa and comply with the Protection of Personal Information Act (POPIA). 
                If you're visiting from outside South Africa, your data will be transferred to and processed in 
                South Africa. By using our site, you consent to this transfer.
              </Typography>
            </div>

            {/* Section 11 */}
            <div className="mb-12">
              <Typography variant="h3" className="mb-4">
                11. Changes to This Policy
              </Typography>
              
              <Typography variant="body" className="mb-4">
                We may update this Privacy Policy from time to time. We'll post any changes here and update 
                the "Last Updated" date at the top. If we make significant changes, we'll notify you by email 
                (if we have your email address) or by posting a notice on our website.
              </Typography>
            </div>

            {/* Section 12 */}
            <div className="mb-12">
              <Typography variant="h3" className="mb-4">
                12. Contact Us
              </Typography>
              
              <Typography variant="body" className="mb-4">
                If you have questions about this Privacy Policy or how we handle your data:
              </Typography>
              <ul className="list-none pl-0 mb-4 space-y-2">
                <li><strong>Email:</strong>{' '}
                  <a href="mailto:privacy@handcraftedwines.co.za" className="text-[var(--twb-color-plum)] hover:underline">
                    privacy@handcraftedwines.co.za
                  </a>
                </li>
                <li><strong>Phone:</strong> +27 21 807 3007</li>
                <li><strong>Mail:</strong> Handcrafted Wines, Paarl Mountain Road, Paarl, 7646, South Africa</li>
              </ul>

              <Typography variant="body" className="mb-4">
                We're a family business, and we genuinely care about your privacy. 
                If you have concerns, we want to hear from you.
              </Typography>
            </div>

            {/* Compliance Statement */}
            <div className="bg-[var(--twb-color-bg-tertiary)] p-6 rounded-[var(--twb-radius-organic-sm)] border-2 border-[var(--twb-color-vine)]">
              <Typography variant="body" className="text-[var(--twb-color-text-secondary)] text-sm">
                <strong>Compliance:</strong> This Privacy Policy complies with the Protection of Personal Information 
                Act (POPIA) of South Africa and incorporates principles from GDPR for international visitors. 
                We are committed to transparent and ethical data handling practices.
              </Typography>
            </div>

          </div>
        </Container>
      </section>
    </Layout>
  );
};
