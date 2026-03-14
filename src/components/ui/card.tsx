/**
 * Card Component System
 * 
 * Flexible card component for displaying content blocks throughout the Handcrafted Wines site.
 * Used for product cards, info cards, experience cards, and content blocks.
 * 
 * Features:
 * - Composable sub-components (Header, Title, Description, Content, Footer, Action)
 * - Multiple variants (default, elevated, flat, interactive)
 * - Organic border radius using design tokens
 * - Shadow elevation effects
 * - Hover state animations
 * - Dark mode support via CSS variables
 * - WordPress theme.json aligned
 * - WCAG AA compliant
 * - Accessible semantic HTML structure
 * 
 * Usage:
 * ```tsx
 * <Card variant="elevated">
 *   <CardHeader>
 *     <CardTitle>Card Title</CardTitle>
 *     <CardDescription>Supporting text</CardDescription>
 *     <CardAction><Button size="sm">Action</Button></CardAction>
 *   </CardHeader>
 *   <CardContent>
 *     Main content goes here
 *   </CardContent>
 *   <CardFooter>
 *     Footer actions or metadata
 *   </CardFooter>
 * </Card>
 * ```
 * 
 * Variants:
 * - `default` - Standard card with subtle shadow and border
 * - `elevated` - Prominent shadow, no border
 * - `flat` - No shadow, border only
 * - `interactive` - Hover effects enabled (scale, shadow increase)
 * 
 * Components:
 * - `Card` - Container with background, border, shadow, radius
 * - `CardHeader` - Top section with title, description, optional action
 * - `CardTitle` - Heading (h4 by default)
 * - `CardDescription` - Supporting text (muted color)
 * - `CardAction` - Action button/icon in header (top-right alignment)
 * - `CardContent` - Main content area with padding
 * - `CardFooter` - Bottom section for actions/metadata
 * 
 * Design Tokens:
 * - Background: var(--twb-color-bg-tertiary)
 * - Border: var(--twb-color-border-primary)
 * - Shadow: var(--twb-shadow-md), var(--twb-shadow-lg) on hover
 * - Radius: var(--twb-radius-card)
 * - Spacing: var(--twb-spacing-{4,6})
 * 
 * @package HandcraftedWines
 * @version 2.0
 */

import * as React from "react";
import { cn } from "./utils";

export interface CardProps extends React.ComponentProps<"div"> {
  variant?: 'default' | 'elevated' | 'flat' | 'interactive';
}

/**
 * Card Container
 * 
 * Main container for card content with background, border, shadow, and radius.
 * 
 * @param {CardProps} props - Component props
 * @param {'default' | 'elevated' | 'flat' | 'interactive'} variant - Visual variant (default: 'default')
 */
function Card({ className, variant = 'default', ...props }: CardProps) {
  const variantClasses = {
    default: 'bg-[var(--twb-color-bg-tertiary)] border border-[var(--twb-color-border-primary)] shadow-[var(--twb-shadow-sm)]',
    elevated: 'bg-[var(--twb-color-bg-tertiary)] border-0 shadow-[var(--twb-shadow-lg)]',
    flat: 'bg-[var(--twb-color-bg-tertiary)] border border-[var(--twb-color-border-primary)] shadow-none',
    interactive: 'bg-[var(--twb-color-bg-tertiary)] border border-[var(--twb-color-border-primary)] shadow-[var(--twb-shadow-md)] hover:shadow-[var(--twb-shadow-lg)] hover:scale-[1.02] transition-all duration-300 cursor-pointer'
  };

  return (
    <div
      data-slot="card"
      className={cn(
        "flex flex-col gap-[var(--twb-spacing-6)] rounded-[var(--twb-radius-card)] text-[var(--twb-color-text-primary)]",
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}

/**
 * CardHeader
 * 
 * Top section of card with support for title, description, and action button.
 * Uses CSS Grid for flexible layout (title/description on left, action on right).
 * 
 * @param {React.ComponentProps<"div">} props - Standard div props
 */
function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-[var(--twb-spacing-2)] px-[var(--twb-spacing-6)] pt-[var(--twb-spacing-6)] has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-[var(--twb-spacing-6)]",
        className,
      )}
      {...props}
    />
  );
}

/**
 * CardTitle
 * 
 * Primary heading for the card (h4 element by default).
 * Uses serif font from design system.
 * 
 * @param {React.ComponentProps<"div">} props - Standard div props
 */
function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <h4
      data-slot="card-title"
      className={cn(
        "font-[family-name:var(--twb-font-serif)] text-[length:var(--twb-text-h4)] font-semibold leading-[var(--twb-leading-snug)] text-[var(--twb-color-text-primary)]",
        className
      )}
      {...props}
    />
  );
}

/**
 * CardDescription
 * 
 * Supporting text below the card title.
 * Uses muted text color for visual hierarchy.
 * 
 * @param {React.ComponentProps<"div">} props - Standard div props
 */
function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <p
      data-slot="card-description"
      className={cn(
        "font-[family-name:var(--twb-font-sans)] text-[length:var(--twb-text-body)] text-[var(--twb-color-text-secondary)]",
        className
      )}
      {...props}
    />
  );
}

/**
 * CardAction
 * 
 * Action button or icon positioned in the top-right corner of the card header.
 * Typically used for menu buttons, close buttons, or quick actions.
 * 
 * @param {React.ComponentProps<"div">} props - Standard div props
 */
function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className,
      )}
      {...props}
    />
  );
}

/**
 * CardContent
 * 
 * Main content area of the card with horizontal padding.
 * Auto-adds bottom padding if it's the last child.
 * 
 * @param {React.ComponentProps<"div">} props - Standard div props
 */
function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn(
        "px-[var(--twb-spacing-6)] [&:last-child]:pb-[var(--twb-spacing-6)]",
        className
      )}
      {...props}
    />
  );
}

/**
 * CardFooter
 * 
 * Bottom section of the card for actions, metadata, or additional info.
 * Flexbox layout for horizontal alignment.
 * 
 * @param {React.ComponentProps<"div">} props - Standard div props
 */
function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center gap-[var(--twb-spacing-4)] px-[var(--twb-spacing-6)] pb-[var(--twb-spacing-6)] [.border-t]:pt-[var(--twb-spacing-6)]",
        className
      )}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
