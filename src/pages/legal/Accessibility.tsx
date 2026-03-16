/**
 * Accessibility Statement Page
 * 
 * WCAG AA accessibility commitment and statement for Handcrafted Wines.
 * Documents accessibility features and provides feedback mechanism.
 * 
 * Features:
 * - WCAG 2.1 AA compliance commitment
 * - Accessibility features documentation
 * - Known limitations transparency
 * - Feedback and contact information
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

export const Accessibility: React.FC = () => {
  return (
    <Layout>
      <BreadcrumbsBar />
      
      <Hero
        title="Accessibility Statement"
        subtitle="Everyone deserves a great wine experience. We're committed to making our website accessible to all visitors."
        height="small"
        align="center"
        nextSectionId="accessibility-content"
      />

      <section id="accessibility-content" className="py-[var(--twb-spacing-section-y)]">
        <Container variant="content">
          <div className="prose prose-lg max-w-none">
            
            <Typography variant="body" className="text-[var(--twb-color-text-secondary)] mb-8">
              <strong>Last Updated:</strong> March 15, 2026
            </Typography>

            <Typography variant="body" className="mb-8">
              At Handcrafted Wines, we believe that everyone should be able to explore our wines, 
              book a farm visit, and shop with ease—regardless of ability or technology. 
              We're committed to ensuring our website is accessible to all people, including those 
              using assistive technologies.
            </Typography>

            {/* Section 1 */}
            <div className="mb-12">
              <Typography variant="h3" className="mb-4">
                Our Commitment
              </Typography>
              
              <Typography variant="body" className="mb-4">
                We strive to meet <strong>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</strong> standards. 
                This means our website is designed to be:
              </Typography>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Perceivable:</strong> Information is presented in ways everyone can perceive</li>
                <li><strong>Operable:</strong> Navigation and controls work for all input methods</li>
                <li><strong>Understandable:</strong> Content is clear and easy to understand</li>
                <li><strong>Robust:</strong> Compatible with current and future assistive technologies</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <Typography variant="h3" className="mb-4">
                Accessibility Features
              </Typography>
              
              <Typography variant="body" className="mb-4">
                Our website includes these accessibility features:
              </Typography>

              <Typography variant="h4" className="mb-3 text-[var(--twb-color-text-primary)]">
                Keyboard Navigation
              </Typography>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>All interactive elements accessible via keyboard (Tab, Shift+Tab, Enter, Space)</li>
                <li>Visible focus indicators show where you are on the page</li>
                <li>Logical tab order follows visual layout</li>
                <li>"Skip to main content" link for screen reader users</li>
              </ul>

              <Typography variant="h4" className="mb-3 text-[var(--twb-color-text-primary)]">
                Screen Reader Support
              </Typography>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Semantic HTML markup for proper structure</li>
                <li>ARIA labels and landmarks for navigation</li>
                <li>Alternative text (alt text) for all meaningful images</li>
                <li>Form labels and error messages announced clearly</li>
                <li>Headings structure content hierarchically (H1, H2, H3...)</li>
              </ul>

              <Typography variant="h4" className="mb-3 text-[var(--twb-color-text-primary)]">
                Visual Design
              </Typography>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Color contrast meets WCAG AA standards (4.5:1 for normal text, 3:1 for large text)</li>
                <li>Information never conveyed by color alone</li>
                <li>Text can be resized up to 200% without breaking layout</li>
                <li>Clear, readable fonts (minimum 16px body text)</li>
                <li>Light and dark mode options</li>
              </ul>

              <Typography variant="h4" className="mb-3 text-[var(--twb-color-text-primary)]">
                Content
              </Typography>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Plain language (we skip the pretentious wine jargon)</li>
                <li>Clear headings and page structure</li>
                <li>Descriptive link text (no "click here" links)</li>
                <li>Consistent navigation across pages</li>
                <li>Forms with clear labels and error messages</li>
              </ul>

              <Typography variant="h4" className="mb-3 text-[var(--twb-color-text-primary)]">
                Media
              </Typography>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Video content includes captions (where applicable)</li>
                <li>Audio descriptions for important visual content</li>
                <li>Option to pause or stop auto-playing content</li>
                <li>Reduced motion option for animations (respects prefers-reduced-motion)</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <Typography variant="h3" className="mb-4">
                Assistive Technologies We Support
              </Typography>
              
              <Typography variant="body" className="mb-4">
                Our website has been tested with:
              </Typography>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Screen readers:</strong> JAWS, NVDA (Windows), VoiceOver (Mac/iOS), TalkBack (Android)</li>
                <li><strong>Browsers:</strong> Chrome, Firefox, Safari, Edge (latest versions)</li>
                <li><strong>Zoom:</strong> Up to 200% text scaling</li>
                <li><strong>Voice control:</strong> Voice navigation and dictation tools</li>
                <li><strong>Keyboard-only navigation:</strong> Full functionality without a mouse</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <Typography variant="h3" className="mb-4">
                Known Limitations
              </Typography>
              
              <Typography variant="body" className="mb-4">
                We're constantly improving, but we know we're not perfect. Here are some areas we're working on:
              </Typography>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Third-party content:</strong> Some embedded maps or social media widgets may have accessibility limitations</li>
                <li><strong>PDF documents:</strong> We're working to ensure all PDFs are accessible or provide HTML alternatives</li>
                <li><strong>Legacy content:</strong> Older news posts may not meet current standards (we're updating them)</li>
                <li><strong>Hand-drawn elements:</strong> Some decorative SVGs are purely visual and may not have detailed descriptions</li>
              </ul>

              <Typography variant="body" className="mb-4">
                If you encounter any accessibility barriers, please let us know so we can fix them.
              </Typography>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <Typography variant="h3" className="mb-4">
                Physical Accessibility
              </Typography>
              
              <Typography variant="body" className="mb-4">
                Our farm and tasting room are also designed to be welcoming to all visitors:
              </Typography>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Wheelchair access:</strong> Tasting room, cellar, and restrooms are wheelchair accessible</li>
                <li><strong>Accessible parking:</strong> Reserved parking spaces near entrance</li>
                <li><strong>Service animals:</strong> Welcome throughout the property</li>
                <li><strong>Assistance:</strong> Our team is happy to help with any accessibility needs during your visit</li>
                <li><strong>Mobility considerations:</strong> Some vineyard tours involve uneven terrain (please ask about alternatives)</li>
              </ul>

              <Typography variant="body" className="mb-4">
                If you have specific accessibility requirements for your visit, please call us at +27 21 807 3007 
                before booking so we can ensure you have the best experience possible.
              </Typography>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <Typography variant="h3" className="mb-4">
                Feedback and Contact
              </Typography>
              
              <Typography variant="body" className="mb-4">
                We genuinely want to hear from you if you encounter accessibility issues or have suggestions 
                for improvement:
              </Typography>
              <ul className="list-none pl-0 mb-4 space-y-2">
                <li><strong>Email:</strong>{' '}
                  <a href="mailto:accessibility@handcraftedwines.co.za" className="text-[var(--twb-color-plum)] hover:underline">
                    accessibility@handcraftedwines.co.za
                  </a>
                </li>
                <li><strong>Phone:</strong> +27 21 807 3007</li>
                <li><strong>Mail:</strong> Handcrafted Wines, Paarl Mountain Road, Paarl, 7646, South Africa</li>
              </ul>

              <Typography variant="body" className="mb-4">
                When reporting an accessibility issue, please include:
              </Typography>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>The page or feature where you encountered the issue</li>
                <li>What assistive technology you were using (if applicable)</li>
                <li>A description of the problem</li>
                <li>Your contact information if you'd like a response</li>
              </ul>

              <Typography variant="body" className="mb-4">
                We aim to respond to accessibility feedback within 5 business days and will work to resolve 
                issues as quickly as possible.
              </Typography>
            </div>

            {/* Section 7 */}
            <div className="mb-12">
              <Typography variant="h3" className="mb-4">
                Ongoing Efforts
              </Typography>
              
              <Typography variant="body" className="mb-4">
                Accessibility is not a one-time project—it's an ongoing commitment. We:
              </Typography>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Conduct regular accessibility audits</li>
                <li>Test with real users who rely on assistive technologies</li>
                <li>Train our team on accessibility best practices</li>
                <li>Review new content and features for accessibility before publishing</li>
                <li>Stay updated on WCAG guidelines and industry standards</li>
                <li>Prioritize accessibility in all design and development decisions</li>
              </ul>
            </div>

            {/* Section 8 */}
            <div className="mb-12">
              <Typography variant="h3" className="mb-4">
                Alternative Formats
              </Typography>
              
              <Typography variant="body" className="mb-4">
                If you need information from our website in a different format (large print, audio, braille, etc.), 
                please contact us at{' '}
                <a href="mailto:accessibility@handcraftedwines.co.za" className="text-[var(--twb-color-plum)] hover:underline">
                  accessibility@handcraftedwines.co.za
                </a>{' '}
                and we'll do our best to accommodate your request.
              </Typography>
            </div>

            {/* Compliance Statement */}
            <div className="bg-[var(--twb-color-bg-tertiary)] p-6 rounded-[var(--twb-radius-organic-sm)] border-2 border-[var(--twb-color-vine)]">
              <Typography variant="body" className="text-[var(--twb-color-text-secondary)] text-sm">
                <strong>Standards Compliance:</strong> This website aims to conform to WCAG 2.1 Level AA standards. 
                We are committed to continuous improvement and welcome feedback from our community. 
                Accessibility is not just a legal requirement—it's the right thing to do, and everyone deserves 
                a great experience exploring our family farm and wines.
              </Typography>
            </div>

          </div>
        </Container>
      </section>
    </Layout>
  );
};
