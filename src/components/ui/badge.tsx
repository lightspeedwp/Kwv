/**
 * Badge Component
 * 
 * Small label component for status indicators, tags, and metadata across the Handcrafted Wines site.
 * Used for product labels ("New", "Sale", "Award Winner"), status indicators, and categorization.
 * 
 * Features:
 * - 5 semantic variants (default, secondary, success, warning, destructive)
 * - Polymorphic component (asChild prop for composition)
 * - Icon support (left or right positioning)
 * - Design token integration (colors, spacing, radius)
 * - Dark mode support via CSS variables
 * - WCAG AA compliant contrast
 * - Focus ring for interactive badges (links/buttons)
 * - Responsive sizing
 * 
 * Usage:
 * ```tsx
 * <Badge variant="default">New</Badge>
 * <Badge variant="success">In Stock</Badge>
 * <Badge variant="warning">Low Stock</Badge>
 * <Badge variant="destructive">Sold Out</Badge>
 * <Badge variant="outline">Organic</Badge>
 * <Badge asChild><a href="/sale">Sale</a></Badge>
 * ```
 * 
 * Variants:
 * - `default` - Primary plum background (main labels)
 * - `secondary` - Outline style with border (subtle labels)
 * - `success` - Vine green background (positive status)
 * - `warning` - Gold background (attention needed)
 * - `destructive` - Red background (errors, sold out)
 * 
 * Icon Support:
 * - Automatically sizes icons to 12px (size-3)
 * - Gap between icon and text
 * - Left or right positioning
 * 
 * Design Tokens:
 * - Colors: var(--twb-color-plum), var(--twb-color-vine), var(--twb-color-gold)
 * - Spacing: var(--twb-spacing-2), var(--twb-spacing-1)
 * - Radius: var(--twb-radius-badge)
 * - Typography: var(--twb-text-caption)
 * 
 * Props:
 * @param {'default' | 'secondary' | 'success' | 'warning' | 'destructive'} variant - Visual variant (default: 'default')
 * @param {boolean} asChild - Render as child component (for links/buttons)
 * @param {React.ReactNode} children - Badge content (text, icons)
 * @param {string} className - Additional CSS classes
 * 
 * @package HandcraftedWines
 * @version 2.0
 */

import * as React from "react";
import { Slot } from "@radix-ui/react-slot@1.1.2";
import { cva, type VariantProps } from "class-variance-authority@0.7.1";

import { cn } from "./utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-[var(--twb-radius-badge)] border px-[var(--twb-spacing-2)] py-[var(--twb-spacing-1)] font-[family-name:var(--twb-font-sans)] text-[length:var(--twb-text-caption)] font-semibold w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-[var(--twb-spacing-1)] [&>svg]:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--twb-color-gold)] transition-[color,background-color,border-color,box-shadow] duration-200 overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[var(--twb-color-plum)] text-[var(--twb-color-text-on-dark)] [a&]:hover:opacity-90",
        secondary:
          "border-[var(--twb-color-border-primary)] bg-transparent text-[var(--twb-color-text-primary)] [a&]:hover:bg-[var(--twb-color-bg-secondary)]",
        success:
          "border-transparent bg-[var(--twb-color-vine)] text-[var(--twb-color-text-on-dark)] [a&]:hover:opacity-90",
        warning:
          "border-transparent bg-[var(--twb-color-gold)] text-[var(--twb-color-ink)] [a&]:hover:opacity-90",
        destructive:
          "border-transparent bg-red-600 text-[var(--twb-color-text-on-dark)] [a&]:hover:bg-red-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.ComponentProps<"span">, VariantProps<typeof badgeVariants> {
  asChild?: boolean;
}

/**
 * Badge
 * 
 * Renders a badge with semantic color variant and optional polymorphic rendering.
 * 
 * @param {BadgeProps} props - Component props
 */
function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };