/**
 * DevTools Landing Page
 * 
 * Developer tools hub for the Handcrafted Wines project. Provides access to
 * design system testing, debugging utilities, and development aids.
 * 
 * Features:
 * - Design system tools (tokens, components, grid)
 * - Testing utilities (accessibility, performance, responsive)
 * - Data inspection (routes, content, API)
 * - Development aids (icons, colors, typography)
 * 
 * @version 1.0
 * @author Handcrafted Wines Development Team
 */

import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  Palette,
  Type,
  Layout,
  Grid3x3,
  Eye,
  Gauge,
  FileJson,
  Route,
  Sparkles,
  TestTube,
  Settings,
  Code,
  Lightbulb,
  Accessibility,
} from 'lucide-react';

interface DevTool {
  title: string;
  description: string;
  path: string;
  icon: React.ElementType;
  category: 'design' | 'testing' | 'data' | 'utilities';
  status: 'ready' | 'beta' | 'planned';
}

const devTools: DevTool[] = [
  // Design System Tools
  {
    title: 'Design Tokens',
    description: 'Inspect all design tokens: colors, typography, spacing, shadows, and radii',
    path: '/dev-tools/tokens',
    icon: Palette,
    category: 'design',
    status: 'ready',
  },
  {
    title: 'Typography Tester',
    description: 'Test typography scales, font families, and text styles',
    path: '/dev-tools/typography',
    icon: Type,
    category: 'design',
    status: 'ready',
  },
  {
    title: 'Spacing Visualizer',
    description: 'Visual reference for all spacing tokens and grid system',
    path: '/dev-tools/spacing',
    icon: Layout,
    category: 'design',
    status: 'ready',
  },
  {
    title: 'Grid Overlay',
    description: 'Toggle responsive grid overlay on any page',
    path: '/dev-tools/grid',
    icon: Grid3x3,
    category: 'design',
    status: 'ready',
  },
  {
    title: 'Icon Library',
    description: 'Browse and copy all Lucide icons used in the project',
    path: '/dev-tools/icons',
    icon: Sparkles,
    category: 'design',
    status: 'ready',
  },
  
  // Testing Utilities
  {
    title: 'Accessibility Checker',
    description: 'Test WCAG compliance, contrast ratios, and keyboard navigation',
    path: '/dev-tools/accessibility',
    icon: Accessibility,
    category: 'testing',
    status: 'ready',
  },
  {
    title: 'Responsive Tester',
    description: 'Preview pages at different breakpoints and device sizes',
    path: '/dev-tools/responsive',
    icon: Eye,
    category: 'testing',
    status: 'ready',
  },
  {
    title: 'Performance Monitor',
    description: 'Track render times, bundle size, and performance metrics',
    path: '/dev-tools/performance',
    icon: Gauge,
    category: 'testing',
    status: 'beta',
  },
  
  // Data Inspection
  {
    title: 'Route Inspector',
    description: 'View all registered routes and navigation structure',
    path: '/dev-tools/routes',
    icon: Route,
    category: 'data',
    status: 'ready',
  },
  {
    title: 'Data Files Viewer',
    description: 'Browse all data files: products, news, FAQs, farm story',
    path: '/dev-tools/data',
    icon: FileJson,
    category: 'data',
    status: 'ready',
  },
  
  // Utilities
  {
    title: 'Component Sandbox',
    description: 'Test and preview components in isolation',
    path: '/dev-tools/sandbox',
    icon: TestTube,
    category: 'utilities',
    status: 'beta',
  },
  {
    title: 'Theme Switcher',
    description: 'Test dark/light mode transitions and theme variables',
    path: '/dev-tools/theme',
    icon: Settings,
    category: 'utilities',
    status: 'ready',
  },
];

const categories = [
  { id: 'design', label: 'Design System', icon: Palette },
  { id: 'testing', label: 'Testing', icon: TestTube },
  { id: 'data', label: 'Data', icon: FileJson },
  { id: 'utilities', label: 'Utilities', icon: Settings },
] as const;

export default function DevTools() {
  return (
    <div className="min-h-screen bg-[var(--twb-color-bg-primary)]">
      {/* Header */}
      <header className="border-b border-[var(--twb-border-primary)] bg-[var(--twb-color-bg-secondary)]">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Code className="h-8 w-8 text-[var(--twb-color-accent-primary)]" />
            <div>
              <h1 className="text-3xl font-bold text-[var(--twb-color-text-primary)]">
                Developer Tools
              </h1>
              <p className="mt-1 text-sm text-[var(--twb-color-text-secondary)]">
                Design system testing, debugging utilities, and development aids
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          <div className="rounded-lg border border-[var(--twb-border-primary)] bg-[var(--twb-color-bg-secondary)] p-6">
            <div className="flex items-center gap-3">
              <Palette className="h-6 w-6 text-[var(--twb-color-accent-primary)]" />
              <div>
                <div className="text-2xl font-bold text-[var(--twb-color-text-primary)]">250+</div>
                <div className="text-sm text-[var(--twb-color-text-secondary)]">Design Tokens</div>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg border border-[var(--twb-border-primary)] bg-[var(--twb-color-bg-secondary)] p-6">
            <div className="flex items-center gap-3">
              <Code className="h-6 w-6 text-[var(--twb-color-accent-primary)]" />
              <div>
                <div className="text-2xl font-bold text-[var(--twb-color-text-primary)]">100+</div>
                <div className="text-sm text-[var(--twb-color-text-secondary)]">Components</div>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg border border-[var(--twb-border-primary)] bg-[var(--twb-color-bg-secondary)] p-6">
            <div className="flex items-center gap-3">
              <Route className="h-6 w-6 text-[var(--twb-color-accent-primary)]" />
              <div>
                <div className="text-2xl font-bold text-[var(--twb-color-text-primary)]">71</div>
                <div className="text-sm text-[var(--twb-color-text-secondary)]">Routes</div>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg border border-[var(--twb-border-primary)] bg-[var(--twb-color-bg-secondary)] p-6">
            <div className="flex items-center gap-3">
              <Accessibility className="h-6 w-6 text-[var(--twb-color-accent-primary)]" />
              <div>
                <div className="text-2xl font-bold text-[var(--twb-color-text-primary)]">100/100</div>
                <div className="text-sm text-[var(--twb-color-text-secondary)]">Health Score</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tools by Category */}
        {categories.map((category, categoryIndex) => {
          const categoryTools = devTools.filter(tool => tool.category === category.id);
          
          return (
            <motion.section
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              <div className="mb-6 flex items-center gap-3">
                <category.icon className="h-6 w-6 text-[var(--twb-color-accent-primary)]" />
                <h2 className="text-2xl font-bold text-[var(--twb-color-text-primary)]">
                  {category.label}
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {categoryTools.map((tool, toolIndex) => (
                  <Link
                    key={tool.path}
                    to={tool.path}
                    className="group relative overflow-hidden rounded-lg border border-[var(--twb-border-primary)] bg-[var(--twb-color-bg-secondary)] p-6 transition-all hover:border-[var(--twb-color-accent-primary)] hover:shadow-lg"
                  >
                    <div className="mb-4 flex items-start justify-between">
                      <tool.icon className="h-8 w-8 text-[var(--twb-color-accent-primary)] transition-transform group-hover:scale-110" />
                      {tool.status !== 'ready' && (
                        <span className={`rounded-full px-2 py-1 text-xs font-medium ${
                          tool.status === 'beta' 
                            ? 'bg-[var(--twb-color-accent-secondary)]/10 text-[var(--twb-color-accent-secondary)]'
                            : 'bg-[var(--twb-color-text-secondary)]/10 text-[var(--twb-color-text-secondary)]'
                        }`}>
                          {tool.status}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="mb-2 text-lg font-semibold text-[var(--twb-color-text-primary)] group-hover:text-[var(--twb-color-accent-primary)]">
                      {tool.title}
                    </h3>
                    
                    <p className="text-sm text-[var(--twb-color-text-secondary)]">
                      {tool.description}
                    </p>

                    {/* Hover indicator */}
                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-[var(--twb-color-accent-primary)] transition-all group-hover:w-full" />
                  </Link>
                ))}
              </div>
            </motion.section>
          );
        })}

        {/* Quick Links */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 rounded-lg border border-[var(--twb-border-primary)] bg-[var(--twb-color-bg-secondary)] p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="h-6 w-6 text-[var(--twb-color-accent-primary)]" />
            <h2 className="text-xl font-bold text-[var(--twb-color-text-primary)]">
              Quick Links
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              to="/guidelines/INDEX.md"
              className="flex items-center gap-2 text-[var(--twb-color-accent-primary)] hover:underline"
            >
              <Code className="h-4 w-4" />
              Guidelines Index
            </Link>
            <Link
              to="/docs/INDEX.md"
              className="flex items-center gap-2 text-[var(--twb-color-accent-primary)] hover:underline"
            >
              <FileJson className="h-4 w-4" />
              Documentation
            </Link>
            <Link
              to="/sitemap"
              className="flex items-center gap-2 text-[var(--twb-color-accent-primary)] hover:underline"
            >
              <Route className="h-4 w-4" />
              Site Map
            </Link>
            <Link
              to="/handdrawn-demo"
              className="flex items-center gap-2 text-[var(--twb-color-accent-primary)] hover:underline"
            >
              <Sparkles className="h-4 w-4" />
              Component Library
            </Link>
            <Link
              to="/handdrawn-demo/landing-page"
              className="flex items-center gap-2 text-[var(--twb-color-accent-primary)] hover:underline"
            >
              <Layout className="h-4 w-4" />
              Landing Page Demo
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[var(--twb-color-accent-primary)] hover:underline"
            >
              <Code className="h-4 w-4" />
              GitHub Repository
            </a>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
