import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { Hero } from '../../components/sections/Hero';
import { Container } from '../../components/common/Container';
import { Typography } from '../../components/common/Typography';
import { Button } from '../../components/common/Button';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { Check, Gift, Truck, Star, Calendar, Wine, Heart, Package } from 'lucide-react';
import { useNavigate } from 'react-router';
import { farmStory } from '../../data/farmStory';

/**
 * The Wine Box - Wine Club Landing Page
 * 
 * High-conversion subscription page for Handcrafted Wines' wine club membership.
 * Family farm approach to wine club with personal touch and handcrafted focus.
 * 
 * Features:
 * - Subscription tiers (3-bottle, 6-bottle, 12-bottle)
 * - Quarterly delivery schedule
 * - Member benefits and perks
 * - What's included in each shipment
 * - Flexible membership options
 * - Family storytelling and personal connection
 * - Gift membership option
 * 
 * @package HandcraftedWines
 * @version 2.0
 */

const MEMBERSHIP_TIERS = [
  {
    name: "The Taster",
    bottles: 3,
    pricePerQuarter: 450,
    description: "Perfect for exploring our range",
    features: [
      "3 bottles per quarter",
      "Mix of wines, spirits, or cheese pairings",
      "Winemaker's tasting notes",
      "20% discount on additional purchases",
      "Free shipping on club orders",
      "First access to new releases"
    ],
    popular: false
  },
  {
    name: "The Enthusiast",
    bottles: 6,
    pricePerQuarter: 850,
    description: "Our most popular choice",
    features: [
      "6 bottles per quarter",
      "Handpicked selection from Pieter",
      "Detailed tasting notes & pairing suggestions",
      "25% discount on additional purchases",
      "Free shipping on club orders",
      "First access to new releases",
      "Exclusive member events invitation",
      "Personalized wine labels for special occasions"
    ],
    popular: true
  },
  {
    name: "The Collector",
    bottles: 12,
    pricePerQuarter: 1600,
    description: "For serious wine lovers",
    features: [
      "12 bottles per quarter",
      "Premium & reserve wines included",
      "Quarterly video call with Pieter",
      "30% discount on additional purchases",
      "Free shipping on all orders",
      "First access to new releases",
      "Exclusive member events invitation",
      "Personalized wine labels",
      "Vineyard tour & private tasting (annual)",
      "Special cellar access"
    ],
    popular: false
  }
];

const MEMBER_BENEFITS = [
  {
    icon: Wine,
    title: "Handpicked by Pieter",
    description: "Our winemaker personally selects each bottle based on the season and what's drinking beautifully right now"
  },
  {
    icon: Truck,
    title: "Free Delivery",
    description: "Complimentary shipping on all Wine Box deliveries, straight from our cellar to your door"
  },
  {
    icon: Star,
    title: "Member Discounts",
    description: "Save 20-30% on additional purchases and get first access to limited releases"
  },
  {
    icon: Calendar,
    title: "Flexible Schedule",
    description: "Pause, skip, or cancel anytime. No long-term commitment required"
  },
  {
    icon: Heart,
    title: "Exclusive Events",
    description: "Member-only tastings, harvest celebrations, and behind-the-scenes farm tours"
  },
  {
    icon: Package,
    title: "Surprise Extras",
    description: "Occasional bonus items like cheese, preserves, or small-batch spirits from our farm"
  }
];

export const WineClub: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        title="The Wine Box"
        subtitle="A Quarterly Journey Through Our Cellar"
        description="Join our family wine club and discover handcrafted wines, artisan spirits, and farmstead cheese delivered to your door four times a year. Each box is a personal selection from Pieter, our winemaker, featuring his favorite bottles from our current vintage."
        imageSrc="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
        imageAlt="Wine bottles and cheese selection"
        primaryCTA={{
          text: "Choose Your Membership",
          href: "#membership-tiers"
        }}
        secondaryCTA={{
          text: "Learn More",
          href: "#how-it-works"
        }}
        height="lg"
        overlay="dark"
      />

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-[var(--twb-color-bg-primary)]">
        <Container variant="content">
          <div className="text-center mb-16">
            <Typography variant="h2" className="mb-4">
              How The Wine Box Works
            </Typography>
            <Typography variant="body-large" className="text-[var(--twb-color-text-muted)]">
              Simple, flexible, and designed around your love of great wine
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-[var(--twb-color-plum)] text-white flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                1
              </div>
              <Typography variant="h3" className="mb-3">
                Choose Your Tier
              </Typography>
              <Typography variant="body" className="text-[var(--twb-color-text-muted)]">
                Select 3, 6, or 12 bottles per quarter based on how much you love to explore and share
              </Typography>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-[var(--twb-color-plum)] text-white flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                2
              </div>
              <Typography variant="h3" className="mb-3">
                Pieter Picks
              </Typography>
              <Typography variant="body" className="text-[var(--twb-color-text-muted)]">
                Each quarter, our winemaker handpicks wines drinking beautifully right now—no repeats
              </Typography>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-[var(--twb-color-plum)] text-white flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                3
              </div>
              <Typography variant="h3" className="mb-3">
                Delivered to You
              </Typography>
              <Typography variant="body" className="text-[var(--twb-color-text-muted)]">
                Free delivery straight from our cellar. Skip or pause anytime—no penalties
              </Typography>
            </div>
          </div>
        </Container>
      </section>

      {/* Membership Tiers */}
      <section id="membership-tiers" className="py-20 bg-[var(--twb-color-bg-secondary)]">
        <Container variant="wide">
          <div className="text-center mb-16">
            <Typography variant="h2" className="mb-4">
              Choose Your Membership
            </Typography>
            <Typography variant="body-large" className="text-[var(--twb-color-text-muted)]">
              All tiers include free shipping and can be paused or cancelled anytime
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MEMBERSHIP_TIERS.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-white dark:bg-[var(--twb-color-bg-primary)] border-2 p-8 ${
                  tier.popular
                    ? 'border-[var(--twb-color-gold)] shadow-xl'
                    : 'border-[var(--twb-border-primary)]'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--twb-color-gold)] text-white px-6 py-2 text-sm font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <Typography variant="h3" className="mb-2">
                    {tier.name}
                  </Typography>
                  <Typography variant="caption" className="text-[var(--twb-color-text-muted)] uppercase tracking-wider">
                    {tier.description}
                  </Typography>
                  <div className="mt-6">
                    <Typography variant="h2" className="text-[var(--twb-color-plum)]">
                      R{tier.pricePerQuarter}
                    </Typography>
                    <Typography variant="caption" className="text-[var(--twb-color-text-muted)]">
                      per quarter
                    </Typography>
                  </div>
                  <Typography variant="body" className="text-[var(--twb-color-text-muted)] mt-2">
                    {tier.bottles} bottles every 3 months
                  </Typography>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check size={20} className="text-[var(--twb-color-gold)] flex-shrink-0 mt-0.5" />
                      <Typography variant="body" className="text-sm">
                        {feature}
                      </Typography>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={tier.popular ? 'primary' : 'outline'}
                  className="w-full"
                  size="lg"
                  onClick={() => navigate('/shop/wine-club/join?tier=' + tier.name.toLowerCase().replace(' ', '-'))}
                >
                  Join {tier.name}
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Typography variant="body" className="text-[var(--twb-color-text-muted)] mb-6">
              Not sure which tier is right for you?
            </Typography>
            <Button variant="outline" onClick={() => navigate('/contact?subject=Wine Club Enquiry')}>
              Contact Us for Guidance
            </Button>
          </div>
        </Container>
      </section>

      {/* Member Benefits */}
      <section className="py-20 bg-[var(--twb-color-bg-primary)]">
        <Container variant="wide">
          <div className="text-center mb-16">
            <Typography variant="h2" className="mb-4">
              Why Join The Wine Box?
            </Typography>
            <Typography variant="body-large" className="text-[var(--twb-color-text-muted)] max-w-3xl mx-auto">
              Beyond the wine, you're joining a family. Our Wine Box members are part of our farm's story—invited to harvest celebrations, member-only tastings, and behind-the-scenes experiences.
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MEMBER_BENEFITS.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-white dark:bg-[var(--twb-color-bg-secondary)] border border-[var(--twb-border-primary)] hover:border-[var(--twb-color-gold)] transition-all"
                >
                  <IconComponent size={40} className="text-[var(--twb-color-plum)] mb-4" />
                  <Typography variant="h4" className="mb-3">
                    {benefit.title}
                  </Typography>
                  <Typography variant="body" className="text-[var(--twb-color-text-muted)]">
                    {benefit.description}
                  </Typography>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* What's Inside Section */}
      <section className="py-20 bg-[var(--twb-color-bg-secondary)]">
        <Container variant="content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Typography variant="h2" className="mb-6">
                What's Inside Each Box?
              </Typography>
              <Typography variant="body" className="text-[var(--twb-color-text-muted)] mb-6">
                Every Wine Box is different, but here's what you can always expect:
              </Typography>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-[var(--twb-color-gold)] flex-shrink-0 mt-0.5" />
                  <div>
                    <Typography variant="h4" className="mb-1">
                      Handpicked Wines
                    </Typography>
                    <Typography variant="body" className="text-[var(--twb-color-text-muted)] text-sm">
                      A mix of reds, whites, and rosé from our current vintage—always drinking beautifully
                    </Typography>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-[var(--twb-color-gold)] flex-shrink-0 mt-0.5" />
                  <div>
                    <Typography variant="h4" className="mb-1">
                      Tasting Notes from Pieter
                    </Typography>
                    <Typography variant="body" className="text-[var(--twb-color-text-muted)] text-sm">
                      Detailed notes on each bottle, including food pairings and serving suggestions
                    </Typography>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-[var(--twb-color-gold)] flex-shrink-0 mt-0.5" />
                  <div>
                    <Typography variant="h4" className="mb-1">
                      Farm Updates & Stories
                    </Typography>
                    <Typography variant="body" className="text-[var(--twb-color-text-muted)] text-sm">
                      A letter from the farm with harvest reports, family news, and what's happening on Paarl Mountain
                    </Typography>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-[var(--twb-color-gold)] flex-shrink-0 mt-0.5" />
                  <div>
                    <Typography variant="h4" className="mb-1">
                      Occasional Surprises
                    </Typography>
                    <Typography variant="body" className="text-[var(--twb-color-text-muted)] text-sm">
                      Annelie's cheese, Hennie's grappa, preserves from our garden—little extras from the farm
                    </Typography>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative h-[500px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Wine box with bottles and cheese"
                className="w-full h-full object-cover border border-[var(--twb-border-primary)]"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Gift Membership Section */}
      <section className="py-20 bg-[var(--twb-color-bg-primary)]">
        <Container variant="content">
          <div className="text-center max-w-2xl mx-auto">
            <Gift size={64} className="text-[var(--twb-color-gold)] mx-auto mb-6" />
            <Typography variant="h2" className="mb-4">
              Give The Gift of Wine
            </Typography>
            <Typography variant="body-large" className="text-[var(--twb-color-text-muted)] mb-8">
              A Wine Box gift membership is the perfect present for wine lovers. Choose a 3-month, 6-month, or 12-month prepaid membership and we'll send a beautiful gift certificate.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => navigate('/shop/wine-club/gift')}>
                Give a Gift Membership
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate('/contact?subject=Gift Membership')}>
                Gift Enquiry
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[var(--twb-color-bg-secondary)]">
        <Container variant="wide">
          <div className="text-center mb-16">
            <Typography variant="h2" className="mb-4">
              What Our Members Say
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-[var(--twb-color-bg-primary)] p-8 border border-[var(--twb-border-primary)]">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} size={20} className="fill-[var(--twb-color-gold)] text-[var(--twb-color-gold)]" />
                ))}
              </div>
              <Typography variant="body" className="text-[var(--twb-color-text-muted)] mb-6 italic">
                "Every box feels like a personal gift from Pieter. The tasting notes are so thoughtful, and I love reading the farm updates. It's like being part of the family."
              </Typography>
              <Typography variant="h4" className="text-sm">
                — Sarah M., Johannesburg
              </Typography>
            </div>

            <div className="bg-white dark:bg-[var(--twb-color-bg-primary)] p-8 border border-[var(--twb-border-primary)]">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} size={20} className="fill-[var(--twb-color-gold)] text-[var(--twb-color-gold)]" />
                ))}
              </div>
              <Typography variant="body" className="text-[var(--twb-color-text-muted)] mb-6 italic">
                "Best wine club in South Africa, hands down. The quality is exceptional and the member discount has saved me a fortune on additional purchases."
              </Typography>
              <Typography variant="h4" className="text-sm">
                — Michael T., Cape Town
              </Typography>
            </div>

            <div className="bg-white dark:bg-[var(--twb-color-bg-primary)] p-8 border border-[var(--twb-border-primary)]">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} size={20} className="fill-[var(--twb-color-gold)] text-[var(--twb-color-gold)]" />
                ))}
              </div>
              <Typography variant="body" className="text-[var(--twb-color-text-muted)] mb-6 italic">
                "I gave my dad a 12-month membership for his 60th birthday. He calls me after every delivery to tell me about the wines. Such a special gift."
              </Typography>
              <Typography variant="h4" className="text-sm">
                — Lisa K., Durban
              </Typography>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[var(--twb-color-bg-primary)]">
        <Container variant="content">
          <div className="text-center mb-12">
            <Typography variant="h2" className="mb-4">
              Frequently Asked Questions
            </Typography>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-[var(--twb-color-bg-secondary)] p-6 border border-[var(--twb-border-primary)]">
              <Typography variant="h4" className="mb-3">
                When will I receive my first box?
              </Typography>
              <Typography variant="body" className="text-[var(--twb-color-text-muted)]">
                Your first Wine Box ships within 5-7 business days of joining. Subsequent quarterly boxes ship in March, June, September, and December.
              </Typography>
            </div>

            <div className="bg-white dark:bg-[var(--twb-color-bg-secondary)] p-6 border border-[var(--twb-border-primary)]">
              <Typography variant="h4" className="mb-3">
                Can I skip or cancel my membership?
              </Typography>
              <Typography variant="body" className="text-[var(--twb-color-text-muted)]">
                Absolutely! Skip any quarter or cancel anytime with no penalties. Just let us know at least 2 weeks before the next shipment.
              </Typography>
            </div>

            <div className="bg-white dark:bg-[var(--twb-color-bg-secondary)] p-6 border border-[var(--twb-border-primary)]">
              <Typography variant="h4" className="mb-3">
                Do you ship nationwide?
              </Typography>
              <Typography variant="body" className="text-[var(--twb-color-text-muted)]">
                Yes! We ship to all major cities and towns across South Africa. Delivery is free for all Wine Box members.
              </Typography>
            </div>

            <div className="bg-white dark:bg-[var(--twb-color-bg-secondary)] p-6 border border-[var(--twb-border-primary)]">
              <Typography variant="h4" className="mb-3">
                Can I customize my box?
              </Typography>
              <Typography variant="body" className="text-[var(--twb-color-text-muted)]">
                While we don't offer full customization, you can note your preferences (reds only, no spirits, etc.) and we'll do our best to accommodate. The Collector tier includes a quarterly call with Pieter to discuss your preferences.
              </Typography>
            </div>

            <div className="bg-white dark:bg-[var(--twb-color-bg-secondary)] p-6 border border-[var(--twb-border-primary)]">
              <Typography variant="h4" className="mb-3">
                What if I don't like a bottle?
              </Typography>
              <Typography variant="body" className="text-[var(--twb-color-text-muted)]">
                It rarely happens, but if you receive a bottle that's not to your taste, let us know. We'll send you a replacement or credit your account for next quarter.
              </Typography>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[var(--twb-color-plum)] text-white">
        <Container variant="content">
          <div className="text-center max-w-2xl mx-auto">
            <Typography variant="h2" className="mb-6 text-white">
              Ready to Join the Family?
            </Typography>
            <Typography variant="body-large" className="mb-8 text-white/90">
              Start your Wine Box membership today and discover why our members call it the best decision they've made for their wine cellar.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate('#membership-tiers')}
                className="bg-white text-[var(--twb-color-plum)] hover:bg-[var(--twb-color-paper)]"
              >
                Choose Your Tier
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/contact?subject=Wine Club Enquiry')}
                className="border-white text-white hover:bg-white/10"
              >
                Ask a Question
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};