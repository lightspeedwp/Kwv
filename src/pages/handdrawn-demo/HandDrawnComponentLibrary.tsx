/**
 * Hand-Drawn Component Library
 * 
 * Complete pattern library showcasing all hand-drawn design system components.
 * Technical reference and interactive demo for developers and designers.
 * 
 * Features:
 * - Full-width grid layout
 * - All decorative components with code examples
 * - All section dividers (5 variants)
 * - All wax seal stamps (4 variants + 3 sizes)
 * - All hand-drawn icons (wine bottle, grapes, barrel)
 * - Form components (inputs, textareas, checkboxes)
 * - Border and texture components
 * - Interactive controls for customization
 * - Copy-to-clipboard code snippets
 * 
 * @package HandcraftedWines
 * @version 1.0
 */

import React, { useState } from 'react';
import { Layout } from '../../components/layout/Layout';
import { Typography } from '../../components/common/Typography';
import { Button } from '../../components/common/Button';
import { Container } from '../../components/common/Container';
import { BrushStrokeDivider } from '../../components/decorative/BrushStrokeDivider';
import { HandDrawnWineBottle, HandDrawnGrapeCluster, HandDrawnOakBarrel } from '../../components/decorative/icons';
import { WaxSealStamp } from '../../components/decorative/WaxSealStamp';
import { PaperTexture } from '../../components/decorative/PaperTexture';
import { BrushStrokeBorder } from '../../components/decorative/BrushStrokeBorder';
import { OrganicBorder } from '../../components/decorative/OrganicBorder';
import { HandDrawnUnderline } from '../../components/decorative/HandDrawnUnderline';
import { HandDrawnTextInput, HandDrawnTextarea, HandDrawnCheckbox } from '../../components/forms';
import { Copy, Check, Code, Eye, Palette, Layers } from 'lucide-react';
import { motion } from 'motion/react';

/**
 * Component Card - Displays a component with code example
 */
const ComponentCard: React.FC<{
  title: string;
  description: string;
  code: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}> = ({ title, description, code, children, fullWidth = false }) => {
  const [copied, setCopied] = useState(false);
  const [showCode, setShowCode] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`bg-white dark:bg-[var(--twb-color-bg-secondary)] rounded-lg shadow-lg overflow-hidden ${fullWidth ? 'col-span-full' : ''}`}>
      <div className="p-6 border-b border-[var(--twb-color-border)]">
        <div className="flex items-center justify-between mb-2">
          <Typography variant="h3" className="text-[var(--twb-color-plum)]">
            {title}
          </Typography>
          <div className="flex gap-2">
            <button
              onClick={() => setShowCode(!showCode)}
              className="p-2 rounded hover:bg-[var(--twb-color-paper)] transition-colors"
              aria-label="Toggle code view"
            >
              {showCode ? <Eye size={20} /> : <Code size={20} />}
            </button>
            <button
              onClick={handleCopy}
              className="p-2 rounded hover:bg-[var(--twb-color-paper)] transition-colors"
              aria-label="Copy code"
            >
              {copied ? <Check size={20} className="text-green-600" /> : <Copy size={20} />}
            </button>
          </div>
        </div>
        <p className="text-[var(--twb-color-text-secondary)] text-sm">{description}</p>
      </div>

      {/* Component Preview */}
      <div className="p-8 bg-[var(--twb-color-paper)] dark:bg-[var(--twb-color-bg-tertiary)] min-h-[200px] flex items-center justify-center">
        {children}
      </div>

      {/* Code Example */}
      {showCode && (
        <div className="bg-gray-900 p-4 overflow-x-auto">
          <pre className="text-sm text-green-400 font-mono">
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
};

/**
 * Section Header Component
 */
const SectionHeader: React.FC<{ title: string; icon: React.ReactNode; description: string }> = ({ 
  title, 
  icon, 
  description 
}) => (
  <div className="text-center mb-16 relative">
    <div className="flex items-center justify-center gap-4 mb-4">
      <div className="text-[var(--twb-color-plum)]">{icon}</div>
      <Typography variant="h2" className="text-[var(--twb-color-plum)]">
        {title}
      </Typography>
    </div>
    <HandDrawnUnderline className="mx-auto mb-6" width={300} />
    <p className="text-[var(--twb-color-text-secondary)] text-lg max-w-3xl mx-auto">
      {description}
    </p>
  </div>
);

export const HandDrawnComponentLibrary: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-white dark:bg-[var(--twb-color-bg-primary)]">
        <PaperTexture />
        
        {/* Hero Section - Full Width */}
        <section className="relative bg-gradient-to-br from-[var(--twb-color-plum)] via-[var(--twb-color-vine)] to-[var(--twb-color-clay)] text-white py-32">
          <Container>
            <div className="text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <WaxSealStamp text="v1.0" variant="gold" size="lg" className="mx-auto mb-6" />
                <Typography variant="h1" className="mb-6 text-white">
                  Hand-Drawn Component Library
                </Typography>
                <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                  Complete pattern library showcasing all hand-drawn aesthetic components. 
                  Built for Handcrafted Wines, designed to feel warm, organic, and authentically handmade.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button variant="secondary" size="lg">
                    Browse Components
                  </Button>
                  <Button variant="outline" size="lg">
                    View on GitHub
                  </Button>
                </div>
              </motion.div>
            </div>
          </Container>
          <BrushStrokeDivider variant="wave" color="paper" position="bottom" />
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-[var(--twb-color-paper)] dark:bg-[var(--twb-color-bg-secondary)]">
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: '60+', label: 'Components' },
                { number: '5', label: 'Divider Variants' },
                { number: '12', label: 'Wax Seal Combos' },
                { number: '100%', label: 'Handcrafted' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <OrganicBorder className="p-6">
                    <Typography variant="h2" className="text-[var(--twb-color-plum)] mb-2">
                      {stat.number}
                    </Typography>
                    <p className="text-[var(--twb-color-text-secondary)]">{stat.label}</p>
                  </OrganicBorder>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        <BrushStrokeDivider variant="torn" color="plum" />

        {/* Section Dividers */}
        <section className="py-20 bg-white dark:bg-[var(--twb-color-bg-primary)]">
          <Container>
            <SectionHeader 
              title="Section Dividers"
              icon={<Layers size={32} />}
              description="Organic, hand-drawn dividers to separate content sections with warmth and character."
            />

            <div className="grid md:grid-cols-2 gap-8">
              <ComponentCard
                title="Wave Divider"
                description="Flowing wave pattern, perfect for separating hero sections"
                code={`<BrushStrokeDivider variant="wave" color="plum" position="bottom" />`}
                fullWidth
              >
                <div className="w-full h-32 bg-[var(--twb-color-plum)] relative">
                  <BrushStrokeDivider variant="wave" color="paper" position="bottom" />
                </div>
              </ComponentCard>

              <ComponentCard
                title="Torn Paper Divider"
                description="Rough torn edge effect for organic transitions"
                code={`<BrushStrokeDivider variant="torn" color="vine" position="bottom" />`}
                fullWidth
              >
                <div className="w-full h-32 bg-[var(--twb-color-vine)] relative">
                  <BrushStrokeDivider variant="torn" color="paper" position="bottom" />
                </div>
              </ComponentCard>

              <ComponentCard
                title="Brush Stroke Divider"
                description="Bold brush stroke for dramatic section breaks"
                code={`<BrushStrokeDivider variant="brush" color="clay" />`}
                fullWidth
              >
                <div className="w-full h-32 bg-white relative flex items-center">
                  <BrushStrokeDivider variant="brush" color="clay" />
                </div>
              </ComponentCard>

              <ComponentCard
                title="Sketch Divider"
                description="Sketchy horizontal line for subtle separation"
                code={`<BrushStrokeDivider variant="sketch" color="ink" />`}
                fullWidth
              >
                <div className="w-full h-32 bg-white relative flex items-center">
                  <BrushStrokeDivider variant="sketch" color="ink" />
                </div>
              </ComponentCard>

              <ComponentCard
                title="Scribble Divider"
                description="Playful scribble for informal sections"
                code={`<BrushStrokeDivider variant="scribble" color="gold" />`}
                fullWidth
              >
                <div className="w-full h-32 bg-white relative flex items-center">
                  <BrushStrokeDivider variant="scribble" color="gold" />
                </div>
              </ComponentCard>
            </div>
          </Container>
        </section>

        <BrushStrokeDivider variant="wave" color="vine" />

        {/* Wax Seal Stamps */}
        <section className="py-20 bg-[var(--twb-color-paper)] dark:bg-[var(--twb-color-bg-secondary)]">
          <Container>
            <SectionHeader 
              title="Wax Seal Stamps"
              icon={<Palette size={32} />}
              description="Trust badges and decorative seals with authentic wax stamp aesthetic. 4 color variants × 3 sizes = 12 combinations."
            />

            <div className="grid md:grid-cols-3 gap-8">
              {/* Color Variants - Large */}
              {['plum', 'vine', 'clay', 'gold'].map((variant) => (
                <ComponentCard
                  key={variant}
                  title={`${variant.charAt(0).toUpperCase() + variant.slice(1)} Seal`}
                  description={`Large ${variant} wax seal stamp`}
                  code={`<WaxSealStamp text="Certified" variant="${variant}" size="lg" />`}
                >
                  <WaxSealStamp 
                    text="Certified" 
                    variant={variant as 'plum' | 'vine' | 'clay' | 'gold'} 
                    size="lg" 
                  />
                </ComponentCard>
              ))}

              {/* Size Variants */}
              <ComponentCard
                title="Small Seal"
                description="Compact wax seal (64px)"
                code={`<WaxSealStamp text="★" variant="plum" size="sm" />`}
              >
                <WaxSealStamp text="★" variant="plum" size="sm" />
              </ComponentCard>

              <ComponentCard
                title="Medium Seal"
                description="Standard wax seal (96px)"
                code={`<WaxSealStamp text="2026" variant="vine" size="md" />`}
              >
                <WaxSealStamp text="2026" variant="vine" size="md" />
              </ComponentCard>

              <ComponentCard
                title="Large Seal"
                description="Hero wax seal (128px)"
                code={`<WaxSealStamp text="Premium" variant="gold" size="lg" />`}
              >
                <WaxSealStamp text="Premium" variant="gold" size="lg" />
              </ComponentCard>
            </div>
          </Container>
        </section>

        <BrushStrokeDivider variant="torn" color="clay" />

        {/* Hand-Drawn Icons */}
        <section className="py-20 bg-white dark:bg-[var(--twb-color-bg-primary)]">
          <Container>
            <SectionHeader 
              title="Hand-Drawn Icons"
              icon={<Eye size={32} />}
              description="Custom SVG icons with organic, sketched aesthetic. Perfect for wine, vineyard, and farm content."
            />

            <div className="grid md:grid-cols-3 gap-8">
              <ComponentCard
                title="Wine Bottle Icon"
                description="Hand-drawn wine bottle with organic strokes"
                code={`<HandDrawnWineBottle className="w-32 h-32 text-[var(--twb-color-plum)]" />`}
              >
                <HandDrawnWineBottle className="w-32 h-32 text-[var(--twb-color-plum)]" />
              </ComponentCard>

              <ComponentCard
                title="Grape Cluster Icon"
                description="Organic grape bunch illustration"
                code={`<HandDrawnGrapeCluster className="w-32 h-32 text-[var(--twb-color-vine)]" />`}
              >
                <HandDrawnGrapeCluster className="w-32 h-32 text-[var(--twb-color-vine)]" />
              </ComponentCard>

              <ComponentCard
                title="Oak Barrel Icon"
                description="Rustic oak barrel sketch"
                code={`<HandDrawnOakBarrel className="w-32 h-32 text-[var(--twb-color-clay)]" />`}
              >
                <HandDrawnOakBarrel className="w-32 h-32 text-[var(--twb-color-clay)]" />
              </ComponentCard>
            </div>
          </Container>
        </section>

        <BrushStrokeDivider variant="sketch" color="plum" />

        {/* Form Components */}
        <section className="py-20 bg-[var(--twb-color-paper)] dark:bg-[var(--twb-color-bg-secondary)]">
          <Container>
            <SectionHeader 
              title="Form Components"
              icon={<Code size={32} />}
              description="Hand-drawn form inputs with organic borders and textures. Fully accessible and keyboard-friendly."
            />

            <div className="grid md:grid-cols-2 gap-8">
              <ComponentCard
                title="Text Input"
                description="Hand-drawn text input with organic border"
                code={`<HandDrawnTextInput\n  label="Full Name"\n  placeholder="John van der Berg"\n  required\n/>`}
              >
                <div className="w-full max-w-md">
                  <HandDrawnTextInput
                    label="Full Name"
                    placeholder="John van der Berg"
                    required
                  />
                </div>
              </ComponentCard>

              <ComponentCard
                title="Textarea"
                description="Multi-line text area with hand-drawn styling"
                code={`<HandDrawnTextarea\n  label="Your Message"\n  placeholder="Tell us about your visit..."\n  rows={4}\n/>`}
              >
                <div className="w-full max-w-md">
                  <HandDrawnTextarea
                    label="Your Message"
                    placeholder="Tell us about your visit..."
                    rows={4}
                  />
                </div>
              </ComponentCard>

              <ComponentCard
                title="Checkbox"
                description="Hand-drawn checkbox with organic styling"
                code={`<HandDrawnCheckbox\n  label="Subscribe to wine club newsletter"\n  id="newsletter"\n/>`}
                fullWidth
              >
                <div className="w-full max-w-md">
                  <HandDrawnCheckbox
                    label="Subscribe to wine club newsletter"
                    id="newsletter"
                  />
                </div>
              </ComponentCard>
            </div>
          </Container>
        </section>

        <BrushStrokeDivider variant="brush" color="vine" />

        {/* Border Components */}
        <section className="py-20 bg-white dark:bg-[var(--twb-color-bg-primary)]">
          <Container>
            <SectionHeader 
              title="Border & Texture Components"
              icon={<Layers size={32} />}
              description="Decorative borders and background textures to add warmth and organic feel."
            />

            <div className="grid md:grid-cols-2 gap-8">
              <ComponentCard
                title="Organic Border"
                description="Soft, hand-drawn border with rounded corners"
                code={`<OrganicBorder className="p-6">\n  <p>Content here</p>\n</OrganicBorder>`}
              >
                <OrganicBorder className="p-8 max-w-md">
                  <Typography variant="h4" className="mb-2 text-[var(--twb-color-plum)]">
                    Organic Border
                  </Typography>
                  <p className="text-[var(--twb-color-text-secondary)]">
                    This content is wrapped in a hand-drawn organic border.
                  </p>
                </OrganicBorder>
              </ComponentCard>

              <ComponentCard
                title="Brush Stroke Border"
                description="Bold brush stroke border for emphasis"
                code={`<BrushStrokeBorder className="p-6">\n  <p>Content here</p>\n</BrushStrokeBorder>`}
              >
                <BrushStrokeBorder className="p-8 max-w-md">
                  <Typography variant="h4" className="mb-2 text-[var(--twb-color-plum)]">
                    Brush Stroke
                  </Typography>
                  <p className="text-[var(--twb-color-text-secondary)]">
                    This content has a bold brush stroke border.
                  </p>
                </BrushStrokeBorder>
              </ComponentCard>

              <ComponentCard
                title="Hand-Drawn Underline"
                description="Sketchy underline for text emphasis"
                code={`<HandDrawnUnderline width={200} />`}
                fullWidth
              >
                <div className="text-center">
                  <Typography variant="h3" className="mb-2 text-[var(--twb-color-plum)]">
                    Handcrafted Wines
                  </Typography>
                  <HandDrawnUnderline width={250} className="mx-auto" />
                </div>
              </ComponentCard>

              <ComponentCard
                title="Paper Texture"
                description="Subtle paper texture overlay for backgrounds"
                code={`<PaperTexture />`}
                fullWidth
              >
                <div className="relative w-full h-48 bg-[var(--twb-color-paper)] rounded-lg overflow-hidden">
                  <PaperTexture />
                  <div className="relative z-10 flex items-center justify-center h-full">
                    <p className="text-[var(--twb-color-text-primary)] font-medium">
                      Subtle paper texture overlay
                    </p>
                  </div>
                </div>
              </ComponentCard>
            </div>
          </Container>
        </section>

        <BrushStrokeDivider variant="scribble" color="gold" />

        {/* Footer CTA */}
        <section className="py-32 bg-gradient-to-br from-[var(--twb-color-plum)] to-[var(--twb-color-vine)] text-white relative">
          <Container>
            <div className="text-center relative z-10">
              <WaxSealStamp text="100%" variant="gold" size="lg" className="mx-auto mb-6" />
              <Typography variant="h2" className="mb-6 text-white">
                Ready to Build?
              </Typography>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                Explore the full landing page demo to see these components in action, 
                or dive into the documentation to start building.
              </p>
              <div className="flex gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <a href="/handdrawn-demo/landing-page">View Landing Page Demo</a>
                </Button>
                <Button variant="outline" size="lg">
                  Read Documentation
                </Button>
              </div>
            </div>
          </Container>
          <BrushStrokeDivider variant="wave" color="paper" position="bottom" />
        </section>
      </div>
    </Layout>
  );
};