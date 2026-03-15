/**
 * Demo Content Data
 * 
 * Generic content for showcasing hand-drawn aesthetic components
 * and design patterns. Used in demo pages to illustrate visual capabilities.
 * 
 * Features:
 * - Hero sections with various configurations
 * - Product showcase data
 * - Feature highlights
 * - Testimonials
 * - CTA sections
 * - Form examples
 * 
 * @package HandcraftedWines
 * @version 1.0
 */

export interface DemoProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  badge?: string;
}

export interface DemoFeature {
  icon: 'wine-bottle' | 'grape-cluster' | 'oak-barrel';
  title: string;
  description: string;
  color: string;
}

export interface DemoTestimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export interface DemoHero {
  title: string;
  subtitle: string;
  primaryCTA: string;
  secondaryCTA: string;
  image: string;
}

/**
 * Hero Section Content
 */
export const demoHero: DemoHero = {
  title: "Handcrafted Design System Demo",
  subtitle: "Showcasing organic, hand-drawn UI components with authentic artisan aesthetic. Every element tells a story of beautiful imperfection.",
  primaryCTA: "Explore Components",
  secondaryCTA: "View Documentation",
  image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=2000"
};

/**
 * Demo Products
 */
export const demoProducts: DemoProduct[] = [
  {
    id: "demo-1",
    name: "Artisan Reserve Collection",
    category: "Premium",
    price: 499,
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80",
    description: "Hand-selected premium items with organic borders, brush stroke overlays, and paper textures.",
    badge: "Featured"
  },
  {
    id: "demo-2",
    name: "Handcrafted Essentials",
    category: "Core",
    price: 299,
    image: "https://images.unsplash.com/photo-1474722883778-792e7990302f?auto=format&fit=crop&q=80",
    description: "Essential components with asymmetric corners and sketch-style borders.",
    badge: "Popular"
  },
  {
    id: "demo-3",
    name: "Vintage Heritage Set",
    category: "Classic",
    price: 399,
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80",
    description: "Classic design patterns with wax seal stamps and hand-drawn icons.",
    badge: "New"
  },
  {
    id: "demo-4",
    name: "Organic Form Pack",
    category: "Modern",
    price: 349,
    image: "https://images.unsplash.com/photo-1506377872008-6645d9d29ef7?auto=format&fit=crop&q=80",
    description: "Contemporary components with organic shapes and fluid animations."
  }
];

/**
 * Feature Highlights
 */
export const demoFeatures: DemoFeature[] = [
  {
    icon: 'wine-bottle',
    title: "Hand-Drawn Icons",
    description: "Custom SVG icons with brush texture filters and organic paths. Each icon feels authentically sketched by hand.",
    color: "var(--twb-color-plum)"
  },
  {
    icon: 'grape-cluster',
    title: "Organic Borders",
    description: "Asymmetric border radius and paintbrush stroke overlays create beautiful imperfection on every card.",
    color: "var(--twb-color-vine)"
  },
  {
    icon: 'oak-barrel',
    title: "Paper Textures",
    description: "Subtle fractal noise filters add authentic paper grain to backgrounds, enhancing the handcrafted feel.",
    color: "var(--twb-color-gold)"
  }
];

/**
 * Testimonials
 */
export const demoTestimonials: DemoTestimonial[] = [
  {
    name: "Sarah Mitchell",
    role: "Creative Director",
    quote: "The hand-drawn aesthetic transforms our digital presence into something truly special. It feels warm, authentic, and completely unique.",
    rating: 5
  },
  {
    name: "James Chen",
    role: "Product Designer",
    quote: "These components strike the perfect balance between organic beauty and technical precision. The implementation is flawless.",
    rating: 5
  },
  {
    name: "Emma Rodriguez",
    role: "Brand Manager",
    quote: "Finally, a design system that captures the artisan spirit we've been trying to express. Our customers love the authentic feel.",
    rating: 5
  }
];

/**
 * Section Divider Showcase
 */
export const demoDividers = [
  {
    variant: 'brush-horizontal' as const,
    label: 'Brush Horizontal',
    description: 'Simple horizontal brush stroke divider'
  },
  {
    variant: 'vine-flourish' as const,
    label: 'Vine Flourish',
    description: 'Decorative vine with leaf accents'
  },
  {
    variant: 'wine-stain' as const,
    label: 'Wine Stain',
    description: 'Wine drip effect with organic stains'
  },
  {
    variant: 'double-stroke' as const,
    label: 'Double Stroke',
    description: 'Parallel brush strokes for emphasis'
  },
  {
    variant: 'grape-cluster' as const,
    label: 'Grape Cluster',
    description: 'Central grape bunch decoration'
  }
];

/**
 * Wax Seal Variants
 */
export const demoWaxSeals = [
  {
    variant: 'plum' as const,
    text: 'Authentic',
    label: 'Plum Variant'
  },
  {
    variant: 'gold' as const,
    text: 'Premium',
    label: 'Gold Variant'
  },
  {
    variant: 'clay' as const,
    text: 'Handmade',
    label: 'Clay Variant'
  },
  {
    variant: 'ink' as const,
    text: 'Classic',
    label: 'Ink Variant'
  }
];

/**
 * Stats / Numbers Section
 */
export const demoStats = [
  {
    number: "20+",
    label: "Hand-Drawn Components",
    icon: "wine-bottle" as const
  },
  {
    number: "100%",
    label: "WCAG AA Compliant",
    icon: "grape-cluster" as const
  },
  {
    number: "5",
    label: "Section Divider Variants",
    icon: "oak-barrel" as const
  },
  {
    number: "∞",
    label: "Beautiful Imperfections",
    icon: "wine-bottle" as const
  }
];

/**
 * Form Demo Data
 */
export const demoFormFields = [
  {
    name: "fullName",
    label: "Full Name",
    type: "text" as const,
    placeholder: "Enter your name...",
    required: true
  },
  {
    name: "email",
    label: "Email Address",
    type: "email" as const,
    placeholder: "you@example.com",
    required: true
  },
  {
    name: "message",
    label: "Your Message",
    type: "textarea" as const,
    placeholder: "Tell us what you think...",
    required: true,
    maxLength: 500
  }
];

/**
 * CTA Sections
 */
export const demoCTAs = [
  {
    title: "Ready to Get Started?",
    description: "Explore our complete collection of hand-drawn components and transform your digital experience.",
    primaryButton: "Start Exploring",
    secondaryButton: "View Documentation",
    background: "var(--twb-color-plum)",
    seal: {
      text: "Since 2024",
      variant: "gold" as const
    }
  },
  {
    title: "Join Our Community",
    description: "Get exclusive access to new components, design resources, and updates from our team.",
    primaryButton: "Sign Up Now",
    secondaryButton: "Learn More",
    background: "var(--twb-color-ink)",
    seal: {
      text: "Exclusive",
      variant: "plum" as const
    }
  }
];

/**
 * Component Showcase Sections
 */
export const demoComponentSections = [
  {
    title: "Icons & Illustrations",
    description: "Hand-drawn SVG icons with authentic brush textures",
    items: ['wine-bottle', 'grape-cluster', 'oak-barrel']
  },
  {
    title: "Decorative Elements",
    description: "Wax seals, borders, and dividers for visual emphasis",
    items: ['wax-seals', 'brush-borders', 'section-dividers']
  },
  {
    title: "Form Components",
    description: "Pencil-sketched inputs with organic styling",
    items: ['text-input', 'textarea', 'checkbox']
  }
];
