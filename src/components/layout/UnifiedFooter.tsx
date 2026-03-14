/**
 * UnifiedFooter Component
 * 
 * Unified footer for Handcrafted Wines.
 * Hand-drawn aesthetic, comprehensive site links, family story integration.
 * 
 * Features:
 * - Four-column layout (About, Shop, Visit, Contact)
 * - Newsletter signup
 * - Social media links
 * - Bottom row with legal links + sitemap
 * - Hand-drawn decorative elements
 * - Dark mode support
 * - Design token system integration
 * 
 * @package HandcraftedWines
 * @version 2.0
 */

import React, { useState } from 'react';
import { Link } from 'react-router';
import { Facebook, Instagram, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { Container } from '../common/Container';
import { farmStory } from '../../data/farmStory';

export const UnifiedFooter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Handle newsletter signup
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const footerLinks = {
    about: [
      { label: 'Our Story', href: '/about' },
      { label: 'The Farm', href: '/about/farm' },
      { label: 'Our Team', href: '/about/team' },
      { label: 'History Since 1918', href: '/history' },
      { label: 'Awards & Recognition', href: '/about/awards' },
      { label: 'Sustainability', href: '/about/sustainability' },
      { label: 'News & Updates', href: '/news' },
      { label: 'Careers', href: '/careers' }
    ],
    shop: [
      { label: 'All Products', href: '/shop' },
      { label: 'Wines', href: '/shop/wines' },
      { label: 'Red Wines', href: '/shop/wines/red' },
      { label: 'White Wines', href: '/shop/wines/white' },
      { label: 'Rosé & Sparkling', href: '/shop/wines/rose' },
      { label: 'Craft Spirits', href: '/shop/spirits' },
      { label: 'Artisan Cheese', href: '/shop/cheese' },
      { label: 'Gift Sets', href: '/shop/gifts' },
      { label: 'Wine Club', href: '/wine-club' },
      { label: 'Special Offers', href: '/shop/promotions' }
    ],
    visit: [
      { label: 'Plan Your Visit', href: '/visit' },
      { label: 'All Experiences', href: '/experiences' },
      { label: 'Book Events', href: '/events' },
      { label: 'Experience FAQs', href: '/experiences/faq' },
      { label: 'Events FAQs', href: '/events/faq' }
    ],
    help: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'General FAQs', href: '/faq' },
      { label: 'Shop FAQs', href: '/shop/faq' },
      { label: 'My Account', href: '/account' },
      { label: 'Shipping & Delivery', href: '/shipping' },
      { label: 'Returns & Refunds', href: '/returns' },
      { label: 'Privacy & Terms', href: '/privacy' }
    ]
  };

  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - farmStory.established;

  return (
    <footer className="bg-[var(--twb-color-ink)] text-white border-t border-white/10">
      {/* Newsletter Section */}
      <div className="border-b border-white/10 py-12 bg-gradient-to-b from-[var(--twb-color-plum)]/20 to-transparent">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-serif text-3xl md:text-4xl mb-3 text-[var(--twb-color-gold)]">
              Join the Family
            </h3>
            <p className="text-white/80 mb-6">
              Get harvest updates, new releases, tasting event invites, and a special welcome gift.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--twb-color-gold)]"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-[var(--twb-color-gold)] text-[var(--twb-color-ink)] rounded-full font-semibold hover:bg-[var(--twb-color-gold)]/90 transition-all shadow-lg"
              >
                {subscribed ? '✓ Subscribed!' : 'Subscribe'}
              </button>
            </form>

            <p className="text-xs text-white/50 mt-4">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </Container>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Column 1: About */}
            <div>
              <h4 className="font-serif text-lg text-[var(--twb-color-gold)] mb-4">About Us</h4>
              <nav className="space-y-2">
                {footerLinks.about.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block text-white/70 hover:text-[var(--twb-color-gold)] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Column 2: Shop */}
            <div>
              <h4 className="font-serif text-lg text-[var(--twb-color-gold)] mb-4">Shop</h4>
              <nav className="space-y-2">
                {footerLinks.shop.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block text-white/70 hover:text-[var(--twb-color-gold)] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Column 3: Visit */}
            <div>
              <h4 className="font-serif text-lg text-[var(--twb-color-gold)] mb-4">Visit & Experience</h4>
              <nav className="space-y-2">
                {footerLinks.visit.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block text-white/70 hover:text-[var(--twb-color-gold)] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Column 4: Help */}
            <div>
              <h4 className="font-serif text-lg text-[var(--twb-color-gold)] mb-4">Customer Care</h4>
              <nav className="space-y-2">
                {footerLinks.help.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block text-white/70 hover:text-[var(--twb-color-gold)] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Column 5: Contact */}
            <div>
              <h4 className="font-serif text-lg text-[var(--twb-color-gold)] mb-4">Get in Touch</h4>
              <div className="space-y-3 text-sm">
                <a
                  href={`mailto:${farmStory.contact.general}`}
                  className="flex items-start gap-2 text-white/70 hover:text-[var(--twb-color-gold)] transition-colors"
                >
                  <Mail size={16} className="mt-0.5 flex-shrink-0" />
                  <span>{farmStory.contact.general}</span>
                </a>

                <a
                  href={`tel:${farmStory.contact.phone}`}
                  className="flex items-start gap-2 text-white/70 hover:text-[var(--twb-color-gold)] transition-colors"
                >
                  <Phone size={16} className="mt-0.5 flex-shrink-0" />
                  <span>{farmStory.contact.phone}</span>
                </a>

                <div className="flex items-start gap-2 text-white/70">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                  <span>
                    {farmStory.location.address.street}<br />
                    {farmStory.location.address.city}, {farmStory.location.address.postal}
                  </span>
                </div>

                {/* Social Media */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={`https://facebook.com${farmStory.social.facebook}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-[var(--twb-color-gold)] transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href={`https://instagram.com/${farmStory.social.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-[var(--twb-color-gold)] transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            {/* Left: Copyright */}
            <div className="flex items-center gap-2">
              <span>© {currentYear} Handcrafted Wines</span>
              <span className="hidden md:inline">·</span>
              <span className="flex items-center gap-1">
                <Heart size={14} className="text-[var(--twb-color-gold)]" />
                <span>{yearsInBusiness} years of family winemaking</span>
              </span>
            </div>

            {/* Right: Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/privacy" className="hover:text-[var(--twb-color-gold)] transition-colors">
                Privacy Policy
              </Link>
              <span>·</span>
              <Link to="/terms" className="hover:text-[var(--twb-color-gold)] transition-colors">
                Terms of Service
              </Link>
              <span>·</span>
              <Link to="/accessibility" className="hover:text-[var(--twb-color-gold)] transition-colors">
                Accessibility
              </Link>
              <span>·</span>
              <Link to="/sitemap" className="hover:text-[var(--twb-color-gold)] transition-colors">
                Sitemap
              </Link>
            </div>
          </div>

          {/* Responsible Drinking */}
          <div className="text-center mt-4 text-xs text-white/40">
            Drink responsibly. Not for sale to persons under the age of 18.
          </div>
        </Container>
      </div>
    </footer>
  );
};