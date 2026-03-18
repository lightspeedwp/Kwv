/**
 * Design Tokens Inspector
 * 
 * Comprehensive design token reference displaying all CSS variables used
 * in the Handcrafted Wines design system.
 * 
 * Features:
 * - Color palette with hex values and contrast ratios
 * - Typography scale with live examples
 * - Spacing tokens with visual measurements
 * - Shadow previews
 * - Border radius samples
 * - Copy-to-clipboard functionality
 * 
 * @version 1.0
 */

import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Copy, Check, Eye } from 'lucide-react';

interface TokenCategory {
  id: string;
  label: string;
  tokens: Token[];
}

interface Token {
  name: string;
  variable: string;
  value?: string;
  description?: string;
}

export default function DesignTokens() {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(text);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  const colorTokens: TokenCategory[] = [
    {
      id: 'brand',
      label: 'Brand Colors',
      tokens: [
        { name: 'Paper', variable: 'var(--twb-color-paper)', value: '#f5efe4', description: 'Warm parchment background' },
        { name: 'Ink', variable: 'var(--twb-color-ink)', value: '#1e1a17', description: 'Deep charcoal text' },
        { name: 'Vine', variable: 'var(--twb-color-vine)', value: '#5c6b4f', description: 'Vineyard green' },
        { name: 'Clay', variable: 'var(--twb-color-clay)', value: '#b86b4b', description: 'Terracotta warm accent' },
        { name: 'Plum', variable: 'var(--twb-color-plum)', value: '#5a2d3b', description: 'Wine-inspired primary' },
        { name: 'Gold', variable: 'var(--twb-color-gold)', value: '#c8a96b', description: 'Muted premium gold' },
      ],
    },
    {
      id: 'semantic',
      label: 'Semantic Colors',
      tokens: [
        { name: 'Background Primary', variable: 'var(--twb-color-bg-primary)', description: 'Main background' },
        { name: 'Background Secondary', variable: 'var(--twb-color-bg-secondary)', description: 'Alternate background' },
        { name: 'Text Primary', variable: 'var(--twb-color-text-primary)', description: 'Primary text color' },
        { name: 'Text Secondary', variable: 'var(--twb-color-text-secondary)', description: 'Secondary text color' },
        { name: 'Accent Primary', variable: 'var(--twb-color-accent-primary)', description: 'Primary accent (links, CTAs)' },
        { name: 'Accent Secondary', variable: 'var(--twb-color-accent-secondary)', description: 'Secondary accent' },
      ],
    },
  ];

  const typographyTokens: Token[] = [
    { name: 'Font Family Serif', variable: 'var(--twb-font-family-serif)', value: 'Playfair Display' },
    { name: 'Font Family Sans', variable: 'var(--twb-font-family-sans)', value: 'Inter' },
    { name: 'Font Size H1', variable: 'var(--twb-font-size-h1)', value: 'clamp(2.4rem, 5vw + 1rem, 4.5rem)' },
    { name: 'Font Size H2', variable: 'var(--twb-font-size-h2)', value: 'clamp(2rem, 4vw + 1rem, 3.5rem)' },
    { name: 'Font Size H3', variable: 'var(--twb-font-size-h3)', value: 'clamp(1.5rem, 3vw + 1rem, 2.5rem)' },
    { name: 'Font Size Body', variable: 'var(--twb-font-size-body)', value: 'clamp(1rem, 1vw + 0.5rem, 1.125rem)' },
  ];

  const spacingTokens: Token[] = [
    { name: 'Spacing 0', variable: 'var(--twb-spacing-0)', value: '0' },
    { name: 'Spacing 1', variable: 'var(--twb-spacing-1)', value: '0.25rem (4px)' },
    { name: 'Spacing 2', variable: 'var(--twb-spacing-2)', value: '0.5rem (8px)' },
    { name: 'Spacing 3', variable: 'var(--twb-spacing-3)', value: '0.75rem (12px)' },
    { name: 'Spacing 4', variable: 'var(--twb-spacing-4)', value: '1rem (16px)' },
    { name: 'Spacing 6', variable: 'var(--twb-spacing-6)', value: '1.5rem (24px)' },
    { name: 'Spacing 8', variable: 'var(--twb-spacing-8)', value: '2rem (32px)' },
    { name: 'Spacing 12', variable: 'var(--twb-spacing-12)', value: '3rem (48px)' },
    { name: 'Spacing 16', variable: 'var(--twb-spacing-16)', value: '4rem (64px)' },
  ];

  const shadowTokens: Token[] = [
    { name: 'Shadow None', variable: 'var(--twb-shadow-none)', value: 'none' },
    { name: 'Shadow XS', variable: 'var(--twb-shadow-xs)', description: 'Subtle elevation' },
    { name: 'Shadow SM', variable: 'var(--twb-shadow-sm)', description: 'Small elevation' },
    { name: 'Shadow MD', variable: 'var(--twb-shadow-md)', description: 'Medium elevation' },
    { name: 'Shadow LG', variable: 'var(--twb-shadow-lg)', description: 'Large elevation' },
    { name: 'Shadow XL', variable: 'var(--twb-shadow-xl)', description: 'Extra large elevation' },
  ];

  const radiusTokens: Token[] = [
    { name: 'Radius None', variable: 'var(--twb-radius-none)', value: '0' },
    { name: 'Radius XS', variable: 'var(--twb-radius-xs)', value: '0.125rem (2px)' },
    { name: 'Radius SM', variable: 'var(--twb-radius-sm)', value: '0.25rem (4px)' },
    { name: 'Radius MD', variable: 'var(--twb-radius-md)', value: '0.375rem (6px)' },
    { name: 'Radius LG', variable: 'var(--twb-radius-lg)', value: '0.5rem (8px)' },
    { name: 'Radius XL', variable: 'var(--twb-radius-xl)', value: '0.75rem (12px)' },
    { name: 'Radius Full', variable: 'var(--twb-radius-full)', value: '9999px' },
  ];

  return (
    <div className="min-h-screen bg-[var(--twb-color-bg-primary)]">
      {/* Header */}
      <header className="border-b border-[var(--twb-border-primary)] bg-[var(--twb-color-bg-secondary)]">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Link
            to="/dev-tools"
            className="mb-4 inline-flex items-center gap-2 text-sm text-[var(--twb-color-accent-primary)] hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dev Tools
          </Link>
          <h1 className="text-3xl font-bold text-[var(--twb-color-text-primary)]">
            Design Tokens
          </h1>
          <p className="mt-2 text-[var(--twb-color-text-secondary)]">
            Complete reference of all design tokens in the system
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Colors */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-[var(--twb-color-text-primary)]">Colors</h2>
          
          {colorTokens.map((category) => (
            <div key={category.id} className="mb-8">
              <h3 className="mb-4 text-xl font-semibold text-[var(--twb-color-text-primary)]">
                {category.label}
              </h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {category.tokens.map((token) => (
                  <motion.div
                    key={token.variable}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="group overflow-hidden rounded-lg border border-[var(--twb-border-primary)] bg-[var(--twb-color-bg-secondary)]"
                  >
                    <div
                      className="h-24"
                      style={{ backgroundColor: token.variable }}
                    />
                    <div className="p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <h4 className="font-semibold text-[var(--twb-color-text-primary)]">
                          {token.name}
                        </h4>
                        <button
                          onClick={() => copyToClipboard(token.variable)}
                          className="rounded p-1 text-[var(--twb-color-text-secondary)] hover:bg-[var(--twb-color-bg-primary)] hover:text-[var(--twb-color-accent-primary)]"
                          title="Copy CSS variable"
                        >
                          {copiedToken === token.variable ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                      <code className="text-xs text-[var(--twb-color-text-secondary)]">
                        {token.variable}
                      </code>
                      {token.value && (
                        <div className="mt-1 text-xs text-[var(--twb-color-text-secondary)]">
                          {token.value}
                        </div>
                      )}
                      {token.description && (
                        <p className="mt-2 text-sm text-[var(--twb-color-text-secondary)]">
                          {token.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Typography */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-[var(--twb-color-text-primary)]">Typography</h2>
          <div className="space-y-4">
            {typographyTokens.map((token) => (
              <motion.div
                key={token.variable}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-lg border border-[var(--twb-border-primary)] bg-[var(--twb-color-bg-secondary)] p-6"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-[var(--twb-color-text-primary)]">
                      {token.name}
                    </h4>
                    <code className="text-xs text-[var(--twb-color-text-secondary)]">
                      {token.variable}
                    </code>
                    {token.value && (
                      <div className="mt-1 text-xs text-[var(--twb-color-text-secondary)]">
                        {token.value}
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => copyToClipboard(token.variable)}
                    className="rounded p-2 text-[var(--twb-color-text-secondary)] hover:bg-[var(--twb-color-bg-primary)] hover:text-[var(--twb-color-accent-primary)]"
                  >
                    {copiedToken === token.variable ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
                {token.variable.includes('size') && (
                  <div
                    className="text-[var(--twb-color-text-primary)]"
                    style={{ fontSize: token.variable }}
                  >
                    The quick brown fox jumps over the lazy dog
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Spacing */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-[var(--twb-color-text-primary)]">Spacing</h2>
          <div className="space-y-4">
            {spacingTokens.map((token) => (
              <motion.div
                key={token.variable}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-lg border border-[var(--twb-border-primary)] bg-[var(--twb-color-bg-secondary)] p-6"
              >
                <div className="flex items-center gap-6">
                  <div className="flex-1">
                    <h4 className="font-semibold text-[var(--twb-color-text-primary)]">
                      {token.name}
                    </h4>
                    <code className="text-xs text-[var(--twb-color-text-secondary)]">
                      {token.variable}
                    </code>
                    <div className="mt-1 text-xs text-[var(--twb-color-text-secondary)]">
                      {token.value}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div
                      className="h-12 bg-[var(--twb-color-accent-primary)]"
                      style={{ width: token.variable }}
                    />
                    <button
                      onClick={() => copyToClipboard(token.variable)}
                      className="rounded p-2 text-[var(--twb-color-text-secondary)] hover:bg-[var(--twb-color-bg-primary)] hover:text-[var(--twb-color-accent-primary)]"
                    >
                      {copiedToken === token.variable ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Shadows */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-[var(--twb-color-text-primary)]">Shadows</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {shadowTokens.map((token) => (
              <motion.div
                key={token.variable}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-lg border border-[var(--twb-border-primary)] bg-[var(--twb-color-bg-secondary)] p-6"
              >
                <div className="mb-4">
                  <h4 className="font-semibold text-[var(--twb-color-text-primary)]">
                    {token.name}
                  </h4>
                  <code className="text-xs text-[var(--twb-color-text-secondary)]">
                    {token.variable}
                  </code>
                  {token.description && (
                    <p className="mt-1 text-xs text-[var(--twb-color-text-secondary)]">
                      {token.description}
                    </p>
                  )}
                </div>
                <div
                  className="h-24 rounded-lg bg-[var(--twb-color-bg-primary)]"
                  style={{ boxShadow: token.variable }}
                />
                <button
                  onClick={() => copyToClipboard(token.variable)}
                  className="mt-4 w-full rounded p-2 text-sm text-[var(--twb-color-text-secondary)] hover:bg-[var(--twb-color-bg-primary)] hover:text-[var(--twb-color-accent-primary)]"
                >
                  {copiedToken === token.variable ? (
                    <span className="flex items-center justify-center gap-2">
                      <Check className="h-4 w-4" /> Copied
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Copy className="h-4 w-4" /> Copy Variable
                    </span>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Border Radius */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-[var(--twb-color-text-primary)]">Border Radius</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {radiusTokens.map((token) => (
              <motion.div
                key={token.variable}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-lg border border-[var(--twb-border-primary)] bg-[var(--twb-color-bg-secondary)] p-6"
              >
                <div className="mb-4">
                  <h4 className="font-semibold text-[var(--twb-color-text-primary)]">
                    {token.name}
                  </h4>
                  <code className="text-xs text-[var(--twb-color-text-secondary)]">
                    {token.variable}
                  </code>
                  {token.value && (
                    <div className="mt-1 text-xs text-[var(--twb-color-text-secondary)]">
                      {token.value}
                    </div>
                  )}
                </div>
                <div
                  className="h-24 bg-[var(--twb-color-accent-primary)]"
                  style={{ borderRadius: token.variable }}
                />
                <button
                  onClick={() => copyToClipboard(token.variable)}
                  className="mt-4 w-full rounded p-2 text-sm text-[var(--twb-color-text-secondary)] hover:bg-[var(--twb-color-bg-primary)] hover:text-[var(--twb-color-accent-primary)]"
                >
                  {copiedToken === token.variable ? (
                    <span className="flex items-center justify-center gap-2">
                      <Check className="h-4 w-4" /> Copied
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Copy className="h-4 w-4" /> Copy Variable
                    </span>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
