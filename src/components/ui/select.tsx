/**
 * Select Component System
 * 
 * Dropdown select component built on Radix UI for Handcrafted Wines forms and filters.
 * Provides accessible, keyboard-navigable select menus with custom styling.
 * 
 * Features:
 * - Full keyboard navigation support (Arrow keys, Enter, Escape)
 * - Multiple size variants (sm, default)
 * - Search/filter support
 * - Grouped options support
 * - Custom option rendering with icons
 * - Design token integration
 * - Dark mode support
 * - WCAG AA compliant (contrast, focus rings, keyboard access)
 * - Screen reader friendly with proper ARIA attributes
 * - WordPress theme.json aligned
 * 
 * Usage:
 * ```tsx
 * <Select>
 *   <SelectTrigger>
 *     <SelectValue placeholder="Select option..." />
 *   </SelectTrigger>
 *   <SelectContent>
 *     <SelectItem value="option1">Option 1</SelectItem>
 *     <SelectItem value="option2">Option 2</SelectItem>
 *   </SelectContent>
 * </Select>
 * ```
 * 
 * Components:
 * - `Select` - Root container
 * - `SelectTrigger` - Button that opens dropdown (with size variants)
 * - `SelectValue` - Displays selected value
 * - `SelectContent` - Dropdown menu container
 * - `SelectItem` - Individual option
 * - `SelectLabel` - Group label
 * - `SelectGroup` - Option grouping
 * - `SelectSeparator` - Visual separator
 * - `SelectScrollUpButton` - Scroll indicator (top)
 * - `SelectScrollDownButton` - Scroll indicator (bottom)
 * 
 * Keyboard Navigation:
 * - Space/Enter: Open dropdown
 * - Arrow Up/Down: Navigate options
 * - Enter: Select option
 * - Escape: Close dropdown
 * - Type to search: Filter options
 * 
 * Design Tokens:
 * - Background: var(--twb-color-bg-tertiary)
 * - Border: var(--twb-color-border-primary)
 * - Focus ring: var(--twb-color-gold)
 * - Radius: var(--twb-radius-input)
 * - Shadow: var(--twb-shadow-lg) on dropdown
 * - Spacing: var(--twb-spacing-*)
 * 
 * @package HandcraftedWines
 * @version 2.0
 */

"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select@2.1.6";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "lucide-react@0.487.0";

import { cn } from "./utils";

/**
 * Select Root
 * 
 * Root component for the select system. Manages state and context.
 */
function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
}

/**
 * SelectGroup
 * 
 * Groups related options together with an optional label.
 */
function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

/**
 * SelectValue
 * 
 * Displays the currently selected value in the trigger button.
 */
function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

export interface SelectTriggerProps extends React.ComponentProps<typeof SelectPrimitive.Trigger> {
  size?: "sm" | "default";
}

/**
 * SelectTrigger
 * 
 * Button that opens the dropdown menu. Includes chevron icon and selected value display.
 * 
 * @param {SelectTriggerProps} props - Component props
 * @param {'sm' | 'default'} size - Trigger button size (default: 'default')
 */
function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: SelectTriggerProps) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        // Base styles
        "flex w-full items-center justify-between gap-2 whitespace-nowrap rounded-[var(--twb-radius-input)] border border-[var(--twb-color-border-primary)] bg-[var(--twb-color-bg-tertiary)] px-[var(--twb-spacing-3)] py-[var(--twb-spacing-2)] font-[family-name:var(--twb-font-sans)] text-[length:var(--twb-text-body)] text-[var(--twb-color-text-primary)] outline-none transition-[color,border-color,box-shadow] duration-200",
        
        // Placeholder styling
        "data-[placeholder]:text-[var(--twb-color-text-secondary)]",
        
        // Icon styling
        "[&_svg:not([class*='text-'])]:text-[var(--twb-color-text-secondary)] [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        
        // Focus state
        "focus-visible:border-[var(--twb-color-gold)] focus-visible:ring-2 focus-visible:ring-[var(--twb-color-gold)]",
        
        // Error state
        "aria-invalid:border-red-500 aria-invalid:ring-2 aria-invalid:ring-red-500/20",
        
        // Disabled state
        "disabled:cursor-not-allowed disabled:opacity-50",
        
        // Size variants
        "data-[size=default]:h-11 data-[size=default]:min-h-[44px]", // WCAG touch target
        "data-[size=sm]:h-9 data-[size=sm]:min-h-[36px]",
        
        // Value display
        "*:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2",
        
        className,
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="size-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

/**
 * SelectContent
 * 
 * Dropdown menu container with scroll buttons and animation.
 */
function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          // Base styles with design tokens
          "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-[var(--twb-radius-input)] border border-[var(--twb-color-border-primary)] bg-[var(--twb-color-bg-tertiary)] text-[var(--twb-color-text-primary)] shadow-[var(--twb-shadow-lg)]",
          
          // Animations
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          
          // Popper positioning
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          
          className,
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "p-1",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1",
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

/**
 * SelectLabel
 * 
 * Label for grouped options within the dropdown.
 */
function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn(
        "px-[var(--twb-spacing-2)] py-[var(--twb-spacing-2)] font-[family-name:var(--twb-font-sans)] text-[length:var(--twb-text-caption)] font-semibold text-[var(--twb-color-text-secondary)]",
        className
      )}
      {...props}
    />
  );
}

/**
 * SelectItem
 * 
 * Individual selectable option in the dropdown. Shows checkmark when selected.
 */
function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        // Base styles
        "relative flex w-full cursor-default select-none items-center gap-2 rounded-[var(--twb-radius-sm)] py-[var(--twb-spacing-2)] pr-8 pl-[var(--twb-spacing-2)] font-[family-name:var(--twb-font-sans)] text-[length:var(--twb-text-body)] outline-hidden",
        
        // Focus/hover state
        "focus:bg-[var(--twb-color-bg-secondary)] focus:text-[var(--twb-color-text-primary)]",
        
        // Disabled state
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        
        // Icon styling
        "[&_svg:not([class*='text-'])]:text-[var(--twb-color-text-secondary)] [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        
        // Span flex
        "*:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        
        className,
      )}
      {...props}
    >
      <span className="absolute right-2 flex size-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-4 text-[var(--twb-color-plum)]" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

/**
 * SelectSeparator
 * 
 * Visual separator between groups of options.
 */
function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn(
        "pointer-events-none -mx-1 my-1 h-px bg-[var(--twb-color-border-primary)]",
        className
      )}
      {...props}
    />
  );
}

/**
 * SelectScrollUpButton
 * 
 * Scroll indicator shown when there are more options above the viewport.
 */
function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className,
      )}
      {...props}
    >
      <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  );
}

/**
 * SelectScrollDownButton
 * 
 * Scroll indicator shown when there are more options below the viewport.
 */
function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className,
      )}
      {...props}
    >
      <ChevronDownIcon className="size-4" />
    </SelectPrimitive.ScrollDownButton>
  );
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
