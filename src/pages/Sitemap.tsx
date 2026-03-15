/**
 * Sitemap Page
 * 
 * Complete site navigation overview for Handcrafted Wines.
 * Organized by section with hand-drawn aesthetic.
 * 
 * Features:
 * - All site pages organized by category (9 sections, 62+ links)
 * - Hero section with design tokens
 * - Organic bordered cards with shadows
 * - Clean, accessible navigation
 * - SEO-friendly structure
 * - Hand-drawn visual accents
 * - Responsive grid layout
 * - WCAG AA compliant
 * 
 * @package HandcraftedWines
 * @version 2.1
 */

import React from 'react';
import { Link } from 'react-router';
import { Container } from '../components/common/Container';
import { Typography } from '../components/common/Typography';
import { Hero } from '../components/sections/Hero';
import { OrganicBorder } from '../components/decorative/OrganicBorder';
import { HandDrawnUnderline } from '../components/decorative/HandDrawnUnderline';
import { BrushStrokeBorder } from '../components/decorative/BrushStrokeBorder';
import { PaperTexture } from '../components/decorative/PaperTexture';
import { Button } from '../components/common/Button';
import { ChevronRight } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { BreadcrumbsBar } from '../components/layout/BreadcrumbsBar';

export const Sitemap: React.FC = () => {
  const sitemapSections = [
    {
      title: 'About Handcrafted Wines',
      links: [
        { label: 'Our Story', href: '/about' },
        { label: 'The Farm', href: '/about/farm' },
        { label: 'Our Family Team', href: '/about/team' },
        { label: 'History Since 1918', href: '/history' },
        { label: 'Awards & Recognition', href: '/about/awards' },
        { label: 'Sustainability Practices', href: '/about/sustainability' },
        { label: 'News & Updates', href: '/news' },
        { label: 'Careers', href: '/careers' }
      ]
    },
    {
      title: 'Shop Our Products',
      links: [
        { label: 'All Products', href: '/shop' },
        { label: 'Wines', href: '/shop/wines' },
        { label: 'Red Wines', href: '/shop/wines/red' },
        { label: 'White Wines', href: '/shop/wines/white' },
        { label: 'Rosé & Sparkling Wines', href: '/shop/wines/rose' },
        { label: 'Craft Spirits', href: '/shop/spirits' },
        { label: 'Artisan Cheese', href: '/shop/cheese' },
        { label: 'Gift Sets & Hampers', href: '/shop/gifts' },
        { label: 'Wine Club Membership', href: '/wine-club' },
        { label: 'Special Offers & Promotions', href: '/shop/promotions' }
      ]
    },
    {
      title: 'Visit & Experiences',
      links: [
        { label: 'Plan Your Visit', href: '/visit' },
        { label: 'All Experiences', href: '/experiences' },
        { label: 'Experience FAQs', href: '/experiences/faq' }
      ]
    },
    {
      title: 'Events & Venue',
      links: [
        { label: 'Events Overview', href: '/events' },
        { label: 'Event Enquiries', href: '/contact' },
        { label: 'Events FAQs', href: '/events/faq' }
      ]
    },
    {
      title: 'Account & Shopping',
      links: [
        { label: 'My Account', href: '/account' },
        { label: 'Shopping Cart', href: '/cart' },
        { label: 'Checkout', href: '/checkout' },
        { label: 'Wine Club', href: '/wine-club' }
      ]
    },
    {
      title: 'Customer Support',
      links: [
        { label: 'Contact Us', href: '/contact' },
        { label: 'General FAQs', href: '/faq' },
        { label: 'Shop FAQs', href: '/shop/faq' },
        { label: 'Shipping & Delivery', href: '/shipping' },
        { label: 'Returns & Refunds', href: '/returns' }
      ]
    },
    {
      title: 'Legal & Policies',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Returns Policy', href: '/returns' },
        { label: 'Accessibility Statement', href: '/accessibility' },
        { label: 'Cookie Policy', href: '/cookies' }
      ]
    },
    {
      title: 'Developer Resources',
      links: [
        { label: 'Hand-Drawn Component Library', href: '/handdrawn-demo' },
        { label: 'Full-Width Landing Page Demo', href: '/handdrawn-demo/landing-page' },
        { label: 'Sitemap', href: '/sitemap' }
      ]
    },
    {
      title: 'Connect With Us',
      links: [
        { label: 'Contact Form', href: '/contact' },
        { label: 'Newsletter Signup', href: '/#newsletter' },
        { label: 'Facebook', href: 'https://facebook.com/handcraftedwinespaarl', external: true },
        { label: 'Instagram', href: 'https://instagram.com/handcraftedwines_paarl', external: true }
      ]
    }
  ];

  return (
    <Layout>
      <BreadcrumbsBar />
      <div className="min-h-screen bg-[var(--twb-color-bg-primary)]">
        {/* Hero */}
        <Hero
          title="Sitemap"
          subtitle="Navigate our complete site. Find everything from our award-winning wines to farm tours and event bookings."
          height="small"
          align="center"
          nextSectionId="sitemap-content"
        />

        {/* Sitemap Grid */}
        <section id="sitemap-content" className="py-[var(--twb-spacing-section-y)]">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--twb-spacing-grid-gap)]">
              {sitemapSections.map((section) => (
                <div
                  key={section.title}
                  className="relative bg-[var(--twb-color-bg-tertiary)] rounded-[var(--twb-radius-organic-sm)] p-[var(--twb-spacing-6)] shadow-[var(--twb-shadow-md)] hover:shadow-[var(--twb-shadow-lg)] transition-shadow"
                >
                  {/* Hand-drawn brush border */}
                  <BrushStrokeBorder 
                    variant="wine-label" 
                    color="var(--twb-color-vine)" 
                    opacity={0.3}
                    strokeWidth={1.5}
                  />
                  
                  {/* Paper texture */}
                  <PaperTexture intensity="subtle" opacity={0.04} />

                  {/* Section Title */}
                  <div className="relative z-10 mb-[var(--twb-spacing-4)]">
                    <Typography 
                      variant="h3" 
                      className="text-[var(--twb-color-plum)] dark:text-[var(--twb-color-gold)] font-[number:var(--twb-font-weight-bold)] mb-[var(--twb-spacing-2)]"
                    >
                      {section.title}
                    </Typography>
                    <div className="mt-[var(--twb-spacing-1)]" aria-hidden="true">
                      <HandDrawnUnderline variant="scribble" width={60} />
                    </div>
                  </div>
                  
                  {/* Links */}
                  <nav className="relative z-10 space-y-[var(--twb-spacing-2)]">
                    {section.links.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="flex items-center gap-[var(--twb-spacing-2)] text-[var(--twb-color-text-primary)] hover:text-[var(--twb-color-plum)] dark:hover:text-[var(--twb-color-gold)] transition-colors group"
                        {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        <ChevronRight 
                          size={16} 
                          className="text-[var(--twb-color-text-muted)] group-hover:text-[var(--twb-color-plum)] dark:group-hover:text-[var(--twb-color-gold)] transition-colors flex-shrink-0" 
                        />
                        <span className="text-sm">{link.label}</span>
                      </Link>
                    ))}
                  </nav>
                </div>
              ))}
            </div>

            {/* Footer CTA */}
            <div className="mt-[var(--twb-spacing-16)] text-center">
              <Typography variant="body" className="text-[var(--twb-color-text-muted)] mb-[var(--twb-spacing-4)]">
                Can't find what you're looking for?
              </Typography>
              <Button
                variant="primary"
                size="lg"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Us
              </Button>
            </div>
          </Container>
        </section>
      </div>
    </Layout>
  );
};