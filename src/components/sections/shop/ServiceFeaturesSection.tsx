/**
 * ServiceFeaturesSection Component
 * 
 * Service guarantees and features section for shop pages.
 * Displays trust badges and key shopping benefits.
 * 
 * Features:
 * - Configurable service features with icons
 * - 4-column responsive grid (1 col mobile, 2 col tablet, 4 col desktop)
 * - Icon + Title + Description format
 * - Design token integration (colors, spacing, shadows)
 * - WCAG AA accessible
 * - Dark mode support
 * - Mobile-first responsive layout
 * 
 * Props:
 * @param {ServiceFeature[]} features - Array of service features (optional)
 * @param {string} variant - Background variant: 'light' | 'dark' (default: 'light')
 * @param {string} className - Additional CSS classes
 * 
 * @package HandcraftedWines
 * @version 2.0
 */

import React from 'react';
import { Container } from '../../common/Container';
import { Truck, ShieldCheck, RefreshCw, Gift, LucideIcon } from 'lucide-react';

export interface ServiceFeature {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServiceFeaturesSectionProps {
  features?: ServiceFeature[];
  variant?: 'light' | 'dark';
  className?: string;
}

const DEFAULT_FEATURES: ServiceFeature[] = [
  {
    id: 'delivery',
    icon: Truck,
    title: 'Free Delivery',
    description: 'Free delivery on orders over R1000 to Paarl & Stellenbosch. Nationwide shipping available.'
  },
  {
    id: 'secure',
    icon: ShieldCheck,
    title: 'Secure Payment',
    description: '100% secure checkout with card, EFT, and Payflex payment options.'
  },
  {
    id: 'returns',
    icon: RefreshCw,
    title: 'Easy Returns',
    description: 'Not happy? Contact us within 48 hours for replacements or refunds.'
  },
  {
    id: 'gifting',
    icon: Gift,
    title: 'Gift Wrapping',
    description: 'Beautiful gift packaging available for all our wines, spirits, and cheese.'
  }
];

export const ServiceFeaturesSection: React.FC<ServiceFeaturesSectionProps> = ({
  features = DEFAULT_FEATURES,
  variant = 'light',
  className = ''
}) => {
  const bgClass = variant === 'dark'
    ? 'bg-[var(--twb-color-ink)]'
    : 'bg-[var(--twb-color-bg-secondary)]';

  const textPrimaryClass = variant === 'dark'
    ? 'text-[var(--twb-color-text-on-dark)]'
    : 'text-[var(--twb-color-text-primary)]';

  const textSecondaryClass = variant === 'dark'
    ? 'text-[var(--twb-color-text-on-dark)]/80'
    : 'text-[var(--twb-color-text-secondary)]';

  return (
    <section 
      className={`${bgClass} py-[var(--twb-spacing-12)] border-t border-[var(--twb-color-border-primary)] ${className}`}
    >
      <Container variant="site">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[var(--twb-spacing-8)]">
          {features.map((feature) => {
            const Icon = feature.icon;
            
            return (
              <div 
                key={feature.id} 
                className="flex flex-col items-center text-center group"
              >
                {/* Icon */}
                <div 
                  className="mb-[var(--twb-spacing-4)] text-[var(--twb-color-gold)] transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                >
                  <Icon size={40} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h4 
                  className={`${textPrimaryClass} font-bold uppercase tracking-wider text-sm mb-[var(--twb-spacing-2)]`}
                >
                  {feature.title}
                </h4>

                {/* Description */}
                <p className={`${textSecondaryClass} text-sm leading-relaxed`}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};