/**
 * ContactFollowSection Component
 * 
 * Contact information and social media links section.
 * Used on shop pages, FAQ pages, and support pages.
 * 
 * Features:
 * - Social media icon links (Instagram, Facebook, Twitter)
 * - Direct contact methods (Email, Phone, WhatsApp)
 * - Centered layout with optional title
 * - Design token integration (colors, spacing, radii)
 * - WCAG AA accessible (focus states, ARIA labels)
 * - Dark mode support
 * - Mobile-first responsive layout
 * 
 * Props:
 * @param {string} title - Section title (default: "Get in Touch")
 * @param {string} subtitle - Optional subtitle/description
 * @param {boolean} showSocial - Show social media links (default: true)
 * @param {boolean} showContact - Show email/phone (default: true)
 * @param {string} variant - Background variant: 'light' | 'dark' (default: 'light')
 * @param {string} className - Additional CSS classes
 * 
 * @package HandcraftedWines
 * @version 2.0
 */

import React from 'react';
import { Container } from '../../common/Container';
import { Typography } from '../../common/Typography';
import { Instagram, Facebook, Mail, Phone, MessageCircle } from 'lucide-react';

interface ContactFollowSectionProps {
  title?: string;
  subtitle?: string;
  showSocial?: boolean;
  showContact?: boolean;
  variant?: 'light' | 'dark';
  className?: string;
}

export const ContactFollowSection: React.FC<ContactFollowSectionProps> = ({
  title = 'Get in Touch',
  subtitle = 'Have questions? We\'re here to help. Follow us or reach out directly.',
  showSocial = true,
  showContact = true,
  variant = 'light',
  className = ''
}) => {
  const bgClass = variant === 'dark'
    ? 'bg-[var(--twb-color-ink)]'
    : 'bg-[var(--twb-color-bg-primary)]';

  const textPrimaryClass = variant === 'dark'
    ? 'text-white'
    : 'text-[var(--twb-color-text-primary)]';

  const textSecondaryClass = variant === 'dark'
    ? 'text-white/80'
    : 'text-[var(--twb-color-text-secondary)]';

  const borderClass = variant === 'dark'
    ? 'border-white/20 hover:border-[var(--twb-color-gold)] hover:bg-[var(--twb-color-gold)] hover:text-[var(--twb-color-ink)]'
    : 'border-[var(--twb-color-border-primary)] hover:border-[var(--twb-color-plum)] hover:bg-[var(--twb-color-plum)] hover:text-white';

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://instagram.com/handcraftedwines_paarl',
      icon: Instagram,
      ariaLabel: 'Follow us on Instagram'
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/handcraftedwinespaarl',
      icon: Facebook,
      ariaLabel: 'Follow us on Facebook'
    }
  ];

  const contactMethods = [
    {
      name: 'Email',
      value: 'hello@handcraftedwines.co.za',
      href: 'mailto:hello@handcraftedwines.co.za',
      icon: Mail
    },
    {
      name: 'Phone',
      value: '+27 21 807 3007',
      href: 'tel:+27218073007',
      icon: Phone
    },
    {
      name: 'WhatsApp',
      value: 'Chat on WhatsApp',
      href: 'https://wa.me/27218073007',
      icon: MessageCircle
    }
  ];

  return (
    <section className={`${bgClass} py-[var(--twb-spacing-12)] text-center ${className}`}>
      <Container variant="content">
        <div className="flex flex-col items-center space-y-[var(--twb-spacing-8)]">
          {/* Title & Subtitle */}
          <div className="space-y-[var(--twb-spacing-3)]">
            <Typography 
              variant="h3" 
              className={`${textPrimaryClass} font-serif uppercase tracking-wider`}
            >
              {title}
            </Typography>
            {subtitle && (
              <p className={`${textSecondaryClass} max-w-xl mx-auto`}>
                {subtitle}
              </p>
            )}
          </div>

          {/* Social Media Links */}
          {showSocial && (
            <div className="flex gap-[var(--twb-spacing-4)]" role="list">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    className={`
                      w-12 h-12 rounded-full border-2 ${borderClass}
                      flex items-center justify-center
                      transition-all duration-300
                      focus:outline-none focus:ring-2 focus:ring-[var(--twb-color-gold)] focus:ring-offset-2
                      ${variant === 'dark' ? 'focus:ring-offset-[var(--twb-color-ink)]' : 'focus:ring-offset-white'}
                    `}
                  >
                    <Icon size={20} strokeWidth={2} />
                  </a>
                );
              })}
            </div>
          )}

          {/* Contact Methods */}
          {showContact && (
            <div className="flex flex-col sm:flex-row gap-[var(--twb-spacing-6)] items-center justify-center">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <a
                    key={method.name}
                    href={method.href}
                    className={`
                      flex items-center gap-3 
                      ${textSecondaryClass}
                      hover:text-[var(--twb-color-plum)]
                      transition-colors duration-200
                      focus:outline-none focus:ring-2 focus:ring-[var(--twb-color-gold)] rounded-md px-2 py-1
                    `}
                  >
                    <Icon 
                      className="text-[var(--twb-color-gold)] flex-shrink-0" 
                      size={20} 
                      aria-hidden="true"
                    />
                    <span className="text-sm font-medium">{method.value}</span>
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};
