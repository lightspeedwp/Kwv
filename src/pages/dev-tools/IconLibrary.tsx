/**
 * Icon Library
 * 
 * Browse and copy all Lucide icons used in the Handcrafted Wines project.
 * 
 * Features:
 * - Visual icon grid with search
 * - Copy icon name or import statement
 * - Preview icons at different sizes
 * - Filter by category
 * - Icon usage statistics
 * 
 * @version 1.0
 */

import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  Copy,
  Check,
  Search,
  // Common icons used in the project
  Home,
  ShoppingBag,
  MapPin,
  Calendar,
  Users,
  FileText,
  Settings,
  Mail,
  Phone,
  Globe,
  Award,
  Heart,
  Star,
  Leaf,
  Grape,
  Wine,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  Eye,
  EyeOff,
  Plus,
  Minus,
  Edit,
  Trash2,
  Download,
  Upload,
  Share2,
  ExternalLink,
  Clock,
  CheckCircle,
  AlertCircle,
  Info,
  HelpCircle,
  Sparkles,
  Code,
  Palette,
  Type,
  Layout,
  Grid3x3,
  Gauge,
  Route,
  FileJson,
  TestTube,
  Accessibility,
  Filter,
  Hash,
  Lightbulb,
  Sun,
  Moon,
  Search as SearchIcon,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  MapPinIcon,
  Navigation,
} from 'lucide-react';

interface IconInfo {
  name: string;
  component: React.ElementType;
  category: string;
  usage: string;
}

const icons: IconInfo[] = [
  // Navigation
  { name: 'Home', component: Home, category: 'Navigation', usage: 'Homepage link' },
  { name: 'ShoppingBag', component: ShoppingBag, category: 'Navigation', usage: 'Shop section' },
  { name: 'MapPin', component: MapPin, category: 'Navigation', usage: 'Visit/Location' },
  { name: 'Calendar', component: Calendar, category: 'Navigation', usage: 'Events section' },
  { name: 'Menu', component: Menu, category: 'Navigation', usage: 'Mobile menu toggle' },
  { name: 'X', component: X, category: 'Navigation', usage: 'Close button' },
  { name: 'ChevronRight', component: ChevronRight, category: 'Navigation', usage: 'Next/Forward' },
  { name: 'ChevronLeft', component: ChevronLeft, category: 'Navigation', usage: 'Previous/Back' },
  { name: 'ChevronDown', component: ChevronDown, category: 'Navigation', usage: 'Expand/Dropdown' },
  { name: 'ChevronUp', component: ChevronUp, category: 'Navigation', usage: 'Collapse' },
  { name: 'ArrowLeft', component: ArrowLeft, category: 'Navigation', usage: 'Back navigation' },
  
  // Content
  { name: 'Users', component: Users, category: 'Content', usage: 'Team/About' },
  { name: 'FileText', component: FileText, category: 'Content', usage: 'Documents/News' },
  { name: 'Award', component: Award, category: 'Content', usage: 'Awards section' },
  { name: 'Star', component: Star, category: 'Content', usage: 'Ratings/Featured' },
  { name: 'Heart', component: Heart, category: 'Content', usage: 'Favorites/Wishlist' },
  { name: 'Leaf', component: Leaf, category: 'Content', usage: 'Sustainability' },
  { name: 'Grape', component: Grape, category: 'Content', usage: 'Wine/Vineyard' },
  { name: 'Wine', component: Wine, category: 'Content', usage: 'Wine products' },
  
  // Actions
  { name: 'Plus', component: Plus, category: 'Actions', usage: 'Add to cart' },
  { name: 'Minus', component: Minus, category: 'Actions', usage: 'Remove quantity' },
  { name: 'Edit', component: Edit, category: 'Actions', usage: 'Edit form' },
  { name: 'Trash2', component: Trash2, category: 'Actions', usage: 'Delete item' },
  { name: 'Download', component: Download, category: 'Actions', usage: 'Download file' },
  { name: 'Upload', component: Upload, category: 'Actions', usage: 'Upload file' },
  { name: 'Share2', component: Share2, category: 'Actions', usage: 'Share content' },
  { name: 'Copy', component: Copy, category: 'Actions', usage: 'Copy to clipboard' },
  { name: 'Check', component: Check, category: 'Actions', usage: 'Success/Copied' },
  
  // UI Elements
  { name: 'Eye', component: Eye, category: 'UI Elements', usage: 'Show/Preview' },
  { name: 'EyeOff', component: EyeOff, category: 'UI Elements', usage: 'Hide password' },
  { name: 'Search', component: SearchIcon, category: 'UI Elements', usage: 'Search input' },
  { name: 'Filter', component: Filter, category: 'UI Elements', usage: 'Filter options' },
  { name: 'Settings', component: Settings, category: 'UI Elements', usage: 'Settings menu' },
  { name: 'Sun', component: Sun, category: 'UI Elements', usage: 'Light mode' },
  { name: 'Moon', component: Moon, category: 'UI Elements', usage: 'Dark mode' },
  
  // Feedback
  { name: 'CheckCircle', component: CheckCircle, category: 'Feedback', usage: 'Success message' },
  { name: 'AlertCircle', component: AlertCircle, category: 'Feedback', usage: 'Warning/Error' },
  { name: 'Info', component: Info, category: 'Feedback', usage: 'Information' },
  { name: 'HelpCircle', component: HelpCircle, category: 'Feedback', usage: 'Help/FAQ' },
  { name: 'Clock', component: Clock, category: 'Feedback', usage: 'Time/Duration' },
  
  // Contact
  { name: 'Mail', component: Mail, category: 'Contact', usage: 'Email address' },
  { name: 'Phone', component: Phone, category: 'Contact', usage: 'Phone number' },
  { name: 'Globe', component: Globe, category: 'Contact', usage: 'Website/Location' },
  { name: 'Navigation', component: Navigation, category: 'Contact', usage: 'Directions' },
  
  // Social
  { name: 'Facebook', component: Facebook, category: 'Social', usage: 'Facebook link' },
  { name: 'Instagram', component: Instagram, category: 'Social', usage: 'Instagram link' },
  { name: 'Twitter', component: Twitter, category: 'Social', usage: 'Twitter link' },
  { name: 'Youtube', component: Youtube, category: 'Social', usage: 'YouTube link' },
  { name: 'Linkedin', component: Linkedin, category: 'Social', usage: 'LinkedIn link' },
  
  // Dev Tools
  { name: 'Code', component: Code, category: 'Dev Tools', usage: 'Developer tools' },
  { name: 'Palette', component: Palette, category: 'Dev Tools', usage: 'Design tokens' },
  { name: 'Type', component: Type, category: 'Dev Tools', usage: 'Typography' },
  { name: 'Layout', component: Layout, category: 'Dev Tools', usage: 'Layout grid' },
  { name: 'Grid3x3', component: Grid3x3, category: 'Dev Tools', usage: 'Grid overlay' },
  { name: 'Gauge', component: Gauge, category: 'Dev Tools', usage: 'Performance' },
  { name: 'Route', component: Route, category: 'Dev Tools', usage: 'Routes' },
  { name: 'FileJson', component: FileJson, category: 'Dev Tools', usage: 'Data files' },
  { name: 'TestTube', component: TestTube, category: 'Dev Tools', usage: 'Testing' },
  { name: 'Accessibility', component: Accessibility, category: 'Dev Tools', usage: 'A11y tools' },
  { name: 'Sparkles', component: Sparkles, category: 'Dev Tools', usage: 'Special effects' },
  { name: 'Hash', component: Hash, category: 'Dev Tools', usage: 'Number/ID' },
  { name: 'Lightbulb', component: Lightbulb, category: 'Dev Tools', usage: 'Ideas/Tips' },
  { name: 'ExternalLink', component: ExternalLink, category: 'Dev Tools', usage: 'External link' },
];

const categories = ['All', ...Array.from(new Set(icons.map(i => i.category)))];

export default function IconLibrary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);
  const [iconSize, setIconSize] = useState<'sm' | 'md' | 'lg'>('md');

  const sizeMap = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
  };

  const filteredIcons = icons.filter(icon => {
    const matchesSearch = 
      icon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      icon.usage.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || icon.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const copyIconName = (name: string) => {
    navigator.clipboard.writeText(name);
    setCopiedIcon(name);
    setTimeout(() => setCopiedIcon(null), 2000);
  };

  const copyImportStatement = (name: string) => {
    const statement = `import { ${name} } from 'lucide-react';`;
    navigator.clipboard.writeText(statement);
    setCopiedIcon(`import-${name}`);
    setTimeout(() => setCopiedIcon(null), 2000);
  };

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
            Icon Library
          </h1>
          <p className="mt-2 text-[var(--twb-color-text-secondary)]">
            {icons.length} Lucide icons • {filteredIcons.length} shown
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Controls */}
        <div className="mb-8 space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--twb-color-text-secondary)]" />
            <input
              type="text"
              placeholder="Search icons by name or usage..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg border border-[var(--twb-border-primary)] bg-[var(--twb-color-bg-secondary)] py-3 pl-12 pr-4 text-[var(--twb-color-text-primary)] placeholder:text-[var(--twb-color-text-secondary)] focus:border-[var(--twb-color-accent-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--twb-color-accent-primary)]/20"
            />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-lg border px-4 py-2 text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'border-[var(--twb-color-accent-primary)] bg-[var(--twb-color-accent-primary)] text-white'
                      : 'border-[var(--twb-border-primary)] bg-[var(--twb-color-bg-secondary)] text-[var(--twb-color-text-primary)] hover:border-[var(--twb-color-accent-primary)]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Size Selector */}
            <div className="ml-auto flex items-center gap-2">
              <span className="text-sm text-[var(--twb-color-text-secondary)]">Size:</span>
              {(['sm', 'md', 'lg'] as const).map((size) => (
                <button
                  key={size}
                  onClick={() => setIconSize(size)}
                  className={`rounded-lg border px-3 py-1 text-xs font-medium uppercase transition-all ${
                    iconSize === size
                      ? 'border-[var(--twb-color-accent-primary)] bg-[var(--twb-color-accent-primary)] text-white'
                      : 'border-[var(--twb-border-primary)] bg-[var(--twb-color-bg-secondary)] text-[var(--twb-color-text-primary)] hover:border-[var(--twb-color-accent-primary)]'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Icons Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {filteredIcons.map((icon, index) => (
            <motion.div
              key={icon.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.01 }}
              className="group relative overflow-hidden rounded-lg border border-[var(--twb-border-primary)] bg-[var(--twb-color-bg-secondary)] p-4 transition-all hover:border-[var(--twb-color-accent-primary)] hover:shadow-lg"
            >
              <div className="flex flex-col items-center gap-3">
                <icon.component className={`${sizeMap[iconSize]} text-[var(--twb-color-accent-primary)] transition-transform group-hover:scale-110`} />
                <div className="text-center">
                  <p className="text-sm font-medium text-[var(--twb-color-text-primary)]">
                    {icon.name}
                  </p>
                  <p className="mt-1 text-xs text-[var(--twb-color-text-secondary)]">
                    {icon.usage}
                  </p>
                </div>
              </div>

              {/* Copy Buttons (shown on hover) */}
              <div className="absolute inset-x-0 bottom-0 flex translate-y-full flex-col gap-1 bg-[var(--twb-color-bg-secondary)] p-2 transition-transform group-hover:translate-y-0">
                <button
                  onClick={() => copyIconName(icon.name)}
                  className="w-full rounded bg-[var(--twb-color-accent-primary)] px-2 py-1 text-xs text-white hover:bg-[var(--twb-color-accent-primary)]/90"
                >
                  {copiedIcon === icon.name ? (
                    <span className="flex items-center justify-center gap-1">
                      <Check className="h-3 w-3" /> Copied!
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-1">
                      <Copy className="h-3 w-3" /> Copy Name
                    </span>
                  )}
                </button>
                <button
                  onClick={() => copyImportStatement(icon.name)}
                  className="w-full rounded bg-[var(--twb-color-text-primary)] px-2 py-1 text-xs text-white hover:bg-[var(--twb-color-text-primary)]/90"
                >
                  {copiedIcon === `import-${icon.name}` ? (
                    <span className="flex items-center justify-center gap-1">
                      <Check className="h-3 w-3" /> Copied!
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-1">
                      <Code className="h-3 w-3" /> Import
                    </span>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredIcons.length === 0 && (
          <div className="py-12 text-center">
            <Search className="mx-auto h-12 w-12 text-[var(--twb-color-text-secondary)] opacity-50" />
            <p className="mt-4 text-[var(--twb-color-text-secondary)]">
              No icons match your search criteria
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
