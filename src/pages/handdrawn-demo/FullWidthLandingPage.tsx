/**
 * Full-Width Landing Page Demo
 * 
 * Complete landing page showcasing hand-drawn aesthetic in a real-world context.
 * Designed for maximum visual impact with full-width sections and rich content.
 * 
 * Features:
 * - Full-width hero with WebGL particles
 * - Alternating full-width content sections
 * - Product showcase with hand-drawn borders
 * - Testimonials with wax seals
 * - Newsletter signup with hand-drawn forms
 * - Complete marketing flow (awareness → consideration → conversion)
 * - All section dividers in context
 * - Mobile-first responsive design
 * 
 * @package HandcraftedWines
 * @version 1.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Layout } from '../../components/layout/Layout';
import { Typography } from '../../components/common/Typography';
import { Button } from '../../components/common/Button';
import { BrushStrokeDivider } from '../../components/decorative/BrushStrokeDivider';
import { HandDrawnWineBottle, HandDrawnGrapeCluster, HandDrawnOakBarrel } from '../../components/decorative/icons';
import { WaxSealStamp } from '../../components/decorative/WaxSealStamp';
import { PaperTexture } from '../../components/decorative/PaperTexture';
import { OrganicBorder } from '../../components/decorative/OrganicBorder';
import { HandDrawnUnderline } from '../../components/decorative/HandDrawnUnderline';
import { HandDrawnTextInput, HandDrawnCheckbox } from '../../components/forms';
import { Star, Award, Heart, Users, Leaf, ArrowRight, CheckCircle, Quote } from 'lucide-react';
import { motion } from 'motion/react';

/**
 * WebGL Particle Background
 */
const ParticleHero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        const colors = ['#5a2d3b', '#c8a96b', '#5c6b4f', '#b86b4b'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.3 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles: Particle[] = [];
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ mixBlendMode: 'soft-light' }}
    />
  );
};

export const FullWidthLandingPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [newsletter, setNewsletter] = useState(false);

  return (
    <Layout>
      <div className="min-h-screen bg-white dark:bg-[var(--twb-color-bg-primary)]">
        <PaperTexture />

        {/* Hero Section - Full Width with Particles */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--twb-color-plum)] via-[var(--twb-color-vine)] to-[var(--twb-color-clay)] text-white overflow-hidden">
          <ParticleHero />
          
          <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <WaxSealStamp 
                text="Since 1918" 
                variant="gold" 
                size="lg" 
                className="mx-auto mb-8" 
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Typography variant="h1" className="text-white mb-6 text-5xl md:text-7xl">
                Handcrafted Wines
              </Typography>
              <HandDrawnUnderline width={400} className="mx-auto mb-8" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                Four generations of family winemaking on Paarl Mountain. Every bottle tells a story 
                of tradition, passion, and the timeless beauty of handmade things.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Button variant="secondary" size="lg">
                Shop Wines
              </Button>
              <Button variant="outline" size="lg">
                Book a Tasting
              </Button>
            </motion.div>

            {/* Hand-Drawn Icons */}
            <motion.div
              className="flex justify-center gap-8 md:gap-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {[
                { Icon: HandDrawnWineBottle, label: 'Handcrafted Wines' },
                { Icon: HandDrawnGrapeCluster, label: 'Estate Grown' },
                { Icon: HandDrawnOakBarrel, label: 'Oak Aged' }
              ].map(({ Icon, label }, index) => (
                <motion.div
                  key={label}
                  className="text-center"
                  whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? 5 : -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Icon className="w-16 h-16 md:w-20 md:h-20 text-white mx-auto mb-2" />
                  <p className="text-sm text-white/80">{label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-12 h-12 rounded-full border-2 border-white/50 flex items-center justify-center bg-white/10 backdrop-blur-sm"
            >
              <ArrowRight size={24} className="text-white rotate-90" />
            </motion.div>
          </div>

          <BrushStrokeDivider variant="wave" color="paper" position="bottom" />
        </section>

        {/* Our Story - Full Width Split */}
        <section className="py-24 md:py-32 bg-[var(--twb-color-paper)] dark:bg-[var(--twb-color-bg-secondary)]">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <WaxSealStamp text="★★★★★" variant="plum" size="md" className="mb-6" />
              <Typography variant="h2" className="mb-6 text-[var(--twb-color-plum)]">
                A Century of Family Winemaking
              </Typography>
              <HandDrawnUnderline width={250} className="mb-6" />
              <p className="text-lg text-[var(--twb-color-text-secondary)] leading-relaxed mb-6">
                It all started in 1918 when my great-grandfather, Johannes van der Berg, 
                planted the first vines on the rocky slopes of Paarl Mountain. He was a dreamer 
                who believed that great wine comes from love, patience, and respect for the land.
              </p>
              <p className="text-lg text-[var(--twb-color-text-secondary)] leading-relaxed mb-8">
                Four generations later, we're still here—still tending these same vines, 
                still making wine the old way, by hand. Every bottle is filled with passion 
                that spans over a century.
              </p>
              <Button variant="primary" handDrawn>
                Read Our Story
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <OrganicBorder className="overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-[var(--twb-color-vine)] to-[var(--twb-color-plum)] flex items-center justify-center">
                  <HandDrawnGrapeCluster className="w-48 h-48 text-white/20" />
                </div>
              </OrganicBorder>
            </motion.div>
          </div>
        </section>

        <BrushStrokeDivider variant="torn" color="plum" />

        {/* What We Make - Full Width Grid */}
        <section className="py-24 md:py-32 bg-white dark:bg-[var(--twb-color-bg-primary)]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <Typography variant="h2" className="mb-6 text-[var(--twb-color-plum)]">
                What We Make
              </Typography>
              <HandDrawnUnderline width={300} className="mx-auto mb-6" />
              <p className="text-lg text-[var(--twb-color-text-secondary)] max-w-3xl mx-auto">
                Wines, spirits, and cheese—all handcrafted on our Paarl Mountain farm.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: HandDrawnWineBottle,
                  title: 'Boutique Wines',
                  description: 'Small-batch wines from our estate vineyard. Shiraz, Cabernet, Chenin Blanc—all hand-picked and aged in French oak.',
                  badge: '32 Awards',
                  color: 'plum'
                },
                {
                  icon: HandDrawnOakBarrel,
                  title: 'Craft Spirits',
                  description: 'Grappa and brandy distilled in copper pot stills. Our 10-year Reserve Brandy won Best South African Brandy 2023.',
                  badge: '18 Awards',
                  color: 'clay'
                },
                {
                  icon: HandDrawnGrapeCluster,
                  title: 'Artisan Cheese',
                  description: 'Farmstead cheese from our own goat dairy. Fresh chèvre, aged wheels, wine-washed rinds—creamy perfection.',
                  badge: '8 Awards',
                  color: 'vine'
                }
              ].map((product, index) => (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <OrganicBorder className="p-8 h-full bg-[var(--twb-color-paper)] dark:bg-[var(--twb-color-bg-secondary)]">
                    <WaxSealStamp 
                      text={product.badge} 
                      variant={product.color as 'plum' | 'clay' | 'vine'} 
                      size="sm" 
                      className="mb-6" 
                    />
                    <product.icon className={`w-24 h-24 mb-6 text-[var(--twb-color-${product.color})]`} />
                    <Typography variant="h3" className="mb-4 text-[var(--twb-color-plum)]">
                      {product.title}
                    </Typography>
                    <p className="text-[var(--twb-color-text-secondary)] leading-relaxed">
                      {product.description}
                    </p>
                  </OrganicBorder>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <BrushStrokeDivider variant="sketch" color="vine" />

        {/* Values Section - Full Width */}
        <section className="py-24 md:py-32 bg-[var(--twb-color-paper)] dark:bg-[var(--twb-color-bg-secondary)]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <Typography variant="h2" className="mb-6 text-[var(--twb-color-plum)]">
                Why Choose Handcrafted
              </Typography>
              <HandDrawnUnderline width={350} className="mx-auto mb-6" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Heart, title: 'Made with Love', description: 'Every bottle touched by hand, shaped by generations of knowledge' },
                { icon: Users, title: 'Family Legacy', description: '4 generations, 108 years, one farm—passed down with pride' },
                { icon: Leaf, title: 'Organic Farming', description: 'No chemicals, no shortcuts—just pure respect for the land' },
                { icon: Award, title: '58+ Awards', description: 'International recognition for our obsessive attention to detail' }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--twb-color-plum)]/10 mb-4">
                    <value.icon size={32} className="text-[var(--twb-color-plum)]" />
                  </div>
                  <Typography variant="h4" className="mb-3 text-[var(--twb-color-plum)]">
                    {value.title}
                  </Typography>
                  <p className="text-[var(--twb-color-text-secondary)]">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <BrushStrokeDivider variant="brush" color="clay" />

        {/* Testimonials - Full Width */}
        <section className="py-24 md:py-32 bg-white dark:bg-[var(--twb-color-bg-primary)]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <Typography variant="h2" className="mb-6 text-[var(--twb-color-plum)]">
                What Our Guests Say
              </Typography>
              <HandDrawnUnderline width={350} className="mx-auto" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "The best wine tasting I've ever experienced. You can taste the love in every sip. Pieter's passion is contagious!",
                  author: "Sarah Mitchell",
                  location: "Cape Town",
                  rating: 5
                },
                {
                  quote: "This isn't just a farm visit—it's a journey through a century of family history. The cheese and wine pairing was perfection.",
                  author: "James O'Connor",
                  location: "Dublin",
                  rating: 5
                },
                {
                  quote: "I came for the wine, stayed for the stories. Meeting four generations of winemakers in one place is magical.",
                  author: "Lisa van Rensburg",
                  location: "Johannesburg",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={testimonial.author}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <OrganicBorder className="p-8 bg-[var(--twb-color-paper)] dark:bg-[var(--twb-color-bg-secondary)] h-full">
                    <WaxSealStamp text="★★★★★" variant="gold" size="sm" className="mb-4" />
                    <Quote size={32} className="text-[var(--twb-color-plum)]/20 mb-4" />
                    <p className="text-[var(--twb-color-text-secondary)] italic mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-[var(--twb-color-gold)] fill-current" />
                      ))}
                    </div>
                    <p className="font-medium text-[var(--twb-color-plum)]">{testimonial.author}</p>
                    <p className="text-sm text-[var(--twb-color-text-secondary)]">{testimonial.location}</p>
                  </OrganicBorder>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <BrushStrokeDivider variant="scribble" color="gold" />

        {/* Newsletter Signup - Full Width */}
        <section className="py-24 md:py-32 bg-gradient-to-br from-[var(--twb-color-plum)] via-[var(--twb-color-vine)] to-[var(--twb-color-clay)] text-white relative">
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <WaxSealStamp text="Join Us" variant="gold" size="lg" className="mx-auto mb-8" />
            <Typography variant="h2" className="mb-6 text-white">
              Join the Wine Club
            </Typography>
            <HandDrawnUnderline width={300} className="mx-auto mb-6" />
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Get exclusive access to limited releases, invitations to harvest events, 
              and 15% off all purchases. Plus, we'll share stories from the farm every month.
            </p>

            <div className="max-w-md mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-8">
                <HandDrawnTextInput
                  label="Your Email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mb-4"
                />
                <HandDrawnCheckbox
                  label="Yes, send me monthly stories and special offers"
                  id="newsletter"
                  checked={newsletter}
                  onChange={(e) => setNewsletter(e.target.checked)}
                  className="mb-6"
                />
                <Button variant="secondary" size="lg" className="w-full">
                  Join the Wine Club
                </Button>
                <p className="text-sm text-white/70 mt-4">
                  Free to join. Cancel anytime. We respect your privacy.
                </p>
              </div>
            </div>
          </div>
          <BrushStrokeDivider variant="wave" color="paper" position="bottom" />
        </section>

        {/* Final CTA - Full Width */}
        <section className="py-24 md:py-32 bg-[var(--twb-color-paper)] dark:bg-[var(--twb-color-bg-secondary)]">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <Typography variant="h2" className="mb-6 text-[var(--twb-color-plum)]">
              Ready to Visit?
            </Typography>
            <HandDrawnUnderline width={300} className="mx-auto mb-6" />
            <p className="text-lg text-[var(--twb-color-text-secondary)] mb-12 max-w-3xl mx-auto">
              Come taste wines in our cellar, meet the goats, walk the vineyard, and see where 
              four generations of passion comes to life. Just 45 minutes from Cape Town.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: CheckCircle, text: 'Wine Tastings Daily' },
                { icon: CheckCircle, text: 'Farm Tours Available' },
                { icon: CheckCircle, text: 'Free Parking' }
              ].map((feature, index) => (
                <div key={index} className="flex items-center justify-center gap-3">
                  <feature.icon size={24} className="text-[var(--twb-color-vine)]" />
                  <span className="text-[var(--twb-color-text-primary)] font-medium">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" handDrawn>
                Book a Tasting
              </Button>
              <Button variant="outline" size="lg">
                Get Directions
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};