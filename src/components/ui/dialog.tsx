"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog@1.1.6";
import { XIcon } from "lucide-react@0.487.0";

import { cn } from "./utils";
import { filterFigmaProps } from "./filter-figma-props";

function Dialog(
  props: React.ComponentProps<typeof DialogPrimitive.Root>
) {
  const cleanProps = filterFigmaProps(props);
  return <DialogPrimitive.Root data-slot="dialog" {...cleanProps} />;
}

function DialogTrigger(
  props: React.ComponentProps<typeof DialogPrimitive.Trigger>
) {
  const cleanProps = filterFigmaProps(props);
  
  // If asChild is true and there are children, we need to clone the child
  // and filter its props to remove Figma inspector props
  if (cleanProps.asChild && React.isValidElement(cleanProps.children)) {
    const child = cleanProps.children as React.ReactElement;
    const childProps = filterFigmaProps(child.props || {});
    const cleanedChild = React.cloneElement(child, childProps);
    
    return (
      <DialogPrimitive.Trigger data-slot="dialog-trigger" {...cleanProps}>
        {cleanedChild}
      </DialogPrimitive.Trigger>
    );
  }
  
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...cleanProps} />;
}

function DialogPortal(
  props: React.ComponentProps<typeof DialogPrimitive.Portal>
) {
  const cleanProps = filterFigmaProps(props);
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...cleanProps} />;
}

function DialogClose(
  props: React.ComponentProps<typeof DialogPrimitive.Close>
) {
  const cleanProps = filterFigmaProps(props);
  
  // If asChild is true and there are children, we need to clone the child
  // and filter its props to remove Figma inspector props
  if (cleanProps.asChild && React.isValidElement(cleanProps.children)) {
    const child = cleanProps.children as React.ReactElement;
    const childProps = filterFigmaProps(child.props || {});
    const cleanedChild = React.cloneElement(child, childProps);
    
    return (
      <DialogPrimitive.Close data-slot="dialog-close" {...cleanProps}>
        {cleanedChild}
      </DialogPrimitive.Close>
    );
  }
  
  return <DialogPrimitive.Close data-slot="dialog-close" {...cleanProps} />;
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  const cleanProps = filterFigmaProps(props);
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className,
      )}
      {...cleanProps}
    />
  );
}

function DialogContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) {
  const cleanProps = filterFigmaProps(props);
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className,
        )}
        {...cleanProps}
      >
        {children}
        <DialogPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
          <XIcon />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  const cleanProps = filterFigmaProps(props);
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...cleanProps}
    />
  );
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  const cleanProps = filterFigmaProps(props);
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className,
      )}
      {...cleanProps}
    />
  );
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  const cleanProps = filterFigmaProps(props);
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...cleanProps}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  const cleanProps = filterFigmaProps(props);
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...cleanProps}
    />
  );
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};