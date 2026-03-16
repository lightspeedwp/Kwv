/**
 * Cookie Policy Page
 * 
 * Cookie usage disclosure and management for Handcrafted Wines.
 * Explains cookie types, purposes, and user control options.
 * 
 * Features:
 * - Cookie types and purposes
 * - Third-party cookies disclosure
 * - Cookie management instructions
 * - Opt-out options
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
import { Cookie } from 'lucide-react';

export const Cookies: React.FC = () => {
  return (
    <Layout>
      <BreadcrumbsBar />
      
      <Hero
        title="Cookie Policy"
        subtitle="Learn about the cookies we use and how you can manage them."
        height="small"
        align="center"
        nextSectionId="cookies-content"
      />

      <section id="cookies-content" className="py-[var(--twb-spacing-section-y)]">
        <Container variant="content">
          <div className="prose prose-lg max-w-none">
            
            <Typography variant="body" className="text-[var(--twb-color-text-secondary)] mb-8">
              <strong>Last Updated:</strong> March 15, 2026
            </Typography>

            <div className="flex items-start gap-4 bg-[var(--twb-color-bg-tertiary)] p-6 rounded-[var(--twb-radius-organic-sm)] mb-8">
              <Cookie className="text-[var(--twb-color-plum)] flex-shrink-0 mt-1" size={28} />
              <Typography variant="body" className="mb-0">
                <strong>Quick Summary:</strong> We use cookies (small text files) to make our website work better 
                for you. Some are essential (the site won't work without them), others help us improve your experience. 
                You can control most cookies through your browser settings.
              </Typography>
            </div>

            {/* Section 1 */}
            <div className="mb-12">
              <Typography variant="h3" className="mb-4">
                What Are Cookies?
              </Typography>
              
              <Typography variant="body" className="mb-4">
                Cookies are small text files stored on your device (computer, phone, tablet) when you visit a website. 
                They help websites remember information about your visit, like your preferences, login status, 
                and items in your shopping cart.
              </Typography>

              <Typography variant="body" className="mb-4">
                Think of cookies like bookmarks—they help us remember where you left off and what you care about, 
                so we can give you a better experience next time you visit.
              </Typography>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <Typography variant="h3" className="mb-4">
                How We Use Cookies
              </Typography>
              
              <Typography variant="body" className="mb-4">
                We use cookies for several reasons:
              </Typography>

              <Typography variant="h4" className="mb-3 text-[var(--twb-color-text-primary)]">
                1. Essential Cookies (Required)
              </Typography>
              <Typography variant="body" className="mb-4">
                These cookies are necessary for our website to function. Without them, basic features won't work.
              </Typography>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Shopping cart:</strong> Remembers items you've added to your cart</li>
                <li><strong>User authentication:</strong> Keeps you logged in to your account</li>
                <li><strong>Security:</strong> Protects against fraud and unauthorized access</li>
                <li><strong>Session management:</strong> Maintains your session as you navigate the site</li>
              </ul>
              <Typography variant="body" className="mb-6 text-sm text-[var(--twb-color-text-secondary)]">
                <strong>Note:</strong> You can't disable essential cookies through our website. 
                If you block them in your browser, some features won't work.
              </Typography>

              <Typography variant="h4" className="mb-3 text-[var(--twb-color-text-primary)]">
                2. Performance Cookies (Optional)
              </Typography>
              <Typography variant="body" className="mb-4">
                These cookies help us understand how visitors use our website so we can improve it.
              </Typography>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Page analytics:</strong> Which pages are most popular, how long you stay</li>
                <li><strong>Error tracking:</strong> Identifies technical issues so we can fix them</li>
                <li><strong>Traffic sources:</strong> How you found our website (search, social media, etc.)</li>
              </ul>
              <Typography variant="body" className="mb-6 text-sm text-[var(--twb-color-text-secondary)]">
                <strong>Data collected:</strong> All analytics data is anonymized—we don't track individual users.
              </Typography>

              <Typography variant="h4" className="mb-3 text-[var(--twb-color-text-primary)]">
                3. Functionality Cookies (Optional)
              </Typography>
              <Typography variant="body" className="mb-4">
                These cookies remember your preferences to give you a more personalized experience.
              </Typography>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Dark/Light mode:</strong> Remembers your theme preference</li>
                <li><strong>Language:</strong> Remembers your language preference (if applicable)</li>
                <li><strong>Region:</strong> Remembers your location for local delivery info</li>
                <li><strong>Font size:</strong> Remembers accessibility preferences</li>
              </ul>

              <Typography variant="h4" className="mb-3 text-[var(--twb-color-text-primary)]">
                4. Marketing Cookies (Optional)
              </Typography>
              <Typography variant="body" className="mb-4">
                These cookies track your browsing across websites to show you relevant ads (if you've opted in).
              </Typography>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Retargeting:</strong> Shows you ads for products you've viewed</li>
                <li><strong>Social media:</strong> Tracks engagement with our social media content</li>
                <li><strong>Email campaigns:</strong> Measures email open rates and click-throughs</li>
              </ul>
              <Typography variant="body" className="mb-6 text-sm text-[var(--twb-color-text-secondary)]">
                <strong>Note:</strong> We use marketing cookies sparingly and only with your consent.
              </Typography>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <Typography variant="h3" className="mb-4">
                Third-Party Cookies
              </Typography>
              
              <Typography variant="body" className="mb-4">
                Some cookies are set by third-party services we use to enhance our website:
              </Typography>

              <div className="bg-[var(--twb-color-bg-tertiary)] p-6 rounded-[var(--twb-radius-organic-sm)] mb-6">
                <ul className="list-none pl-0 mb-0 space-y-4">
                  <li>
                    <strong className="text-[var(--twb-color-plum)]">Google Analytics</strong><br />
                    <span className="text-sm text-[var(--twb-color-text-secondary)]">
                      Helps us understand how visitors use our site. Data is anonymized.
                    </span>
                  </li>
                  <li>
                    <strong className="text-[var(--twb-color-plum)]">Payment Processor</strong><br />
                    <span className="text-sm text-[var(--twb-color-text-secondary)]">
                      Securely processes credit card payments. Required for checkout.
                    </span>
                  </li>
                  <li>
                    <strong className="text-[var(--twb-color-plum)]">Facebook Pixel (if applicable)</strong><br />
                    <span className="text-sm text-[var(--twb-color-text-secondary)]">
                      Tracks conversions from Facebook ads. Only active if you've opted in to marketing cookies.
                    </span>
                  </li>
                  <li>
                    <strong className="text-[var(--twb-color-plum)]">YouTube (embedded videos)</strong><br />
                    <span className="text-sm text-[var(--twb-color-text-secondary)]">
                      Sets cookies if you watch embedded farm tour or winemaking videos.
                    </span>
                  </li>
                </ul>
              </div>

              <Typography variant="body" className="mb-4">
                <strong>Important:</strong> We don't control third-party cookies. Please review their privacy policies:
              </Typography>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[var(--twb-color-plum)] hover:underline">
                    Google Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/policy.php" target="_blank" rel="noopener noreferrer" className="text-[var(--twb-color-plum)] hover:underline">
                    Facebook Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <Typography variant="h3" className="mb-4">
                How to Manage Cookies
              </Typography>
              
              <Typography variant="body" className="mb-4">
                You have several options for controlling cookies:
              </Typography>

              <Typography variant="h4" className="mb-3 text-[var(--twb-color-text-primary)]">
                Option 1: Browser Settings
              </Typography>
              <Typography variant="body" className="mb-4">
                Most browsers let you control cookies through settings. You can:
              </Typography>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Block all cookies (warning: many websites won't work properly)</li>
                <li>Block third-party cookies only</li>
                <li>Delete cookies when you close your browser</li>
                <li>See which cookies are stored and delete specific ones</li>
              </ul>

              <Typography variant="body" className="mb-4">
                <strong>How to access cookie settings:</strong>
              </Typography>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                <li><strong>Edge:</strong> Settings → Cookies and site permissions</li>
              </ul>

              <Typography variant="h4" className="mb-3 text-[var(--twb-color-text-primary)]">
                Option 2: Opt Out of Analytics
              </Typography>
              <Typography variant="body" className="mb-4">
                You can opt out of Google Analytics specifically:
              </Typography>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  Install the{' '}
                  <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[var(--twb-color-plum)] hover:underline">
                    Google Analytics Opt-out Browser Add-on
                  </a>
                </li>
              </ul>

              <Typography variant="h4" className="mb-3 text-[var(--twb-color-text-primary)]">
                Option 3: Do Not Track (DNT)
              </Typography>
              <Typography variant="body" className="mb-6">
                You can enable "Do Not Track" in your browser settings. We respect DNT signals and will 
                disable optional tracking when DNT is enabled.
              </Typography>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <Typography variant="h3" className="mb-4">
                Cookie Lifespan
              </Typography>
              
              <Typography variant="body" className="mb-4">
                Different cookies last for different amounts of time:
              </Typography>

              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Session cookies:</strong> Deleted when you close your browser (shopping cart, login session)</li>
                <li><strong>Persistent cookies:</strong> Stay on your device for a set period:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Preferences: 1 year</li>
                    <li>Analytics: 2 years</li>
                    <li>Marketing: 90 days (or until you clear cookies)</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <Typography variant="h3" className="mb-4">
                Impact of Disabling Cookies
              </Typography>
              
              <Typography variant="body" className="mb-4">
                If you disable cookies, some features may not work properly:
              </Typography>

              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Shopping cart:</strong> Items won't be saved between sessions</li>
                <li><strong>Account login:</strong> You'll be logged out frequently</li>
                <li><strong>Preferences:</strong> Theme and language settings won't be remembered</li>
                <li><strong>Analytics:</strong> We won't be able to improve the site based on usage data</li>
              </ul>

              <Typography variant="body" className="mb-4">
                You can still browse our website and view products, but the shopping experience will be less smooth.
              </Typography>
            </div>

            {/* Section 7 */}
            <div className="mb-12">
              <Typography variant="h3" className="mb-4">
                Updates to This Policy
              </Typography>
              
              <Typography variant="body" className="mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or 
                technology. We'll post any updates here and update the "Last Updated" date at the top.
              </Typography>

              <Typography variant="body" className="mb-4">
                If we make significant changes, we'll notify you by email (if we have your email address) 
                or by posting a notice on our website.
              </Typography>
            </div>

            {/* Section 8 */}
            <div className="mb-12">
              <Typography variant="h3" className="mb-4">
                Contact Us
              </Typography>
              
              <Typography variant="body" className="mb-4">
                Questions about cookies or how we use them?
              </Typography>
              <ul className="list-none pl-0 mb-4 space-y-2">
                <li><strong>Email:</strong>{' '}
                  <a href="mailto:privacy@handcraftedwines.co.za" className="text-[var(--twb-color-plum)] hover:underline">
                    privacy@handcraftedwines.co.za
                  </a>
                </li>
                <li><strong>Phone:</strong> +27 21 807 3007</li>
              </ul>
            </div>

            {/* Related Policies */}
            <div className="bg-[var(--twb-color-bg-tertiary)] p-6 rounded-[var(--twb-radius-organic-sm)] border-2 border-[var(--twb-color-vine)]">
              <Typography variant="body" className="mb-3">
                <strong>Related Policies:</strong>
              </Typography>
              <ul className="list-disc pl-6 mb-0 space-y-2">
                <li>
                  <a href="/privacy" className="text-[var(--twb-color-plum)] hover:underline">
                    Privacy Policy
                  </a>{' '}
                  - How we handle your personal data
                </li>
                <li>
                  <a href="/terms" className="text-[var(--twb-color-plum)] hover:underline">
                    Terms of Service
                  </a>{' '}
                  - Rules for using our website
                </li>
              </ul>
            </div>

          </div>
        </Container>
      </section>
    </Layout>
  );
};
