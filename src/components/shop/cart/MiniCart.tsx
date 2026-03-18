import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet";
import { Button } from "../../common/Button";
import { Typography } from "../../common/Typography";
import { useState, useEffect } from "react";
import { ShoppingBag, X, Minus, Plus } from "lucide-react";
import { COLORS } from "../../../constants/theme";
import { Link } from "react-router";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { Separator } from "../../ui/separator";
import { LiveRegion } from "../../common/LiveRegion";

// Mock Cart Item
interface CartItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  image: string;
  description?: string;
}

const INITIAL_ITEMS: CartItem[] = [
  {
    id: "1",
    name: "Belt",
    price: 55.0,
    originalPrice: 65.0,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80",
    description: "This is a simple product.",
  },
  {
    id: "2",
    name: "Album",
    price: 15.0,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1507838153414-b4b713384ebd?auto=format&fit=crop&q=80",
    description: "This is a simple, virtual product.",
  },
  {
    id: "3",
    name: "Beanie",
    price: 18.0,
    originalPrice: 20.0,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&q=80",
    description: "This is a simple product.",
  },
];

/**
 * MiniCart Component
 * 
 * A slide-out drawer (Sheet) displaying the contents of the user's cart.
 * Accessible from the Shop Header.
 * Features:
 * - List of added items with images, prices, and quantities.
 * - Quantity adjustment controls.
 * - Item removal.
 * - Subtotal calculation.
 * - Links to full Cart and Checkout pages.
 * - Screen reader announcements for cart updates (WCAG 4.1.3)
 */
export const MiniCart: React.FC = () => {
  const [items, setItems] = useState<CartItem[]>(INITIAL_ITEMS);
  const [isOpen, setIsOpen] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  // Clear status message after 3 seconds (screen reader already announced it)
  useEffect(() => {
    if (statusMessage) {
      const timer = setTimeout(() => setStatusMessage(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [statusMessage]);

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const updateQuantity = (id: string, delta: number) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + delta);
          
          // Announce quantity change to screen readers (WCAG 4.1.3)
          setStatusMessage(
            `${item.name} quantity updated to ${newQuantity}`
          );
          
          return {
            ...item,
            quantity: newQuantity,
          };
        }
        return item;
      }),
    );
  };

  const removeItem = (id: string) => {
    const item = items.find(i => i.id === id);
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    
    // Announce removal to screen readers (WCAG 4.1.3)
    if (item) {
      const remainingItems = newItems.length;
      setStatusMessage(
        remainingItems === 0
          ? `${item.name} removed from cart. Cart is now empty.`
          : `${item.name} removed from cart. ${remainingItems} item${remainingItems === 1 ? '' : 's'} remaining.`
      );
    }
  };

  return (
    <>
      {/* Live region for screen reader announcements (WCAG 4.1.3) */}
      <LiveRegion message={statusMessage} level="polite" />

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button
            className="p-3 hover:opacity-70 relative focus:outline-none focus:ring-2 focus:ring-[var(--twb-color-paper)]/50 rounded-sm min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Cart"
          >
            <ShoppingBag size={20} color="currentColor" className="text-[var(--twb-color-paper)]" />
            {items.length > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[var(--twb-color-gold)] text-[var(--twb-color-ink)] text-[10px] flex items-center justify-center font-bold">
                {items.reduce((acc, i) => acc + i.quantity, 0)}
              </span>
            )}
          </button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-full sm:w-[480px] bg-[var(--twb-color-bg-primary)] p-0 flex flex-col border-l border-[var(--twb-border-primary)] shadow-2xl [&>button]:hidden"
        >
          <SheetHeader className={`p-5 flex flex-row items-center ${items.length > 0 ? 'justify-between border-b border-[var(--twb-border-secondary)]' : 'justify-end'}`}>
            {items.length > 0 && (
              <SheetTitle className="text-2xl text-[var(--twb-color-text-primary)] font-normal m-0">
                Your cart (items: {items.reduce((acc, i) => acc + i.quantity, 0)})
              </SheetTitle>
            )}
            <SheetClose asChild>
              <button 
                className="p-2 hover:bg-[var(--twb-color-bg-secondary)] rounded-full transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--twb-color-focus-ring)] focus-visible:ring-offset-2" 
                aria-label="Close cart"
              >
                <X size={24} className="text-[var(--twb-color-text-secondary)]" />
              </button>
            </SheetClose>
            <SheetDescription className="sr-only">
              Review your selected items before checkout.
            </SheetDescription>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full">
                <Typography variant="body" className="text-[var(--twb-color-text-primary)] text-lg mb-6">
                  Your cart is currently empty!
                </Typography>
                <Button
                  onClick={() => setIsOpen(false)}
                  className="bg-[var(--twb-color-ink)] text-[var(--twb-color-paper)] hover:bg-[var(--twb-color-ink)]/90 px-8"
                >
                  Start shopping
                </Button>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="flex gap-6">
                  <div className="w-20 h-20 bg-[var(--twb-color-bg-secondary)] overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start">
                      <Typography
                        variant="h4"
                        className="!text-base font-normal underline decoration-1 underline-offset-2 mb-1 cursor-pointer hover:text-[var(--twb-color-plum)]"
                      >
                        {item.name}
                      </Typography>
                      <span className="font-normal text-[var(--twb-color-text-primary)]">
                        R {item.price.toFixed(2)}
                      </span>
                    </div>

                    <div className="mb-2">
                      {item.originalPrice && (
                        <div className="flex gap-2 items-center text-sm mb-1">
                          <span className="line-through text-[var(--twb-color-text-secondary)]">
                            R {item.originalPrice.toFixed(2)}
                          </span>
                          <span className="text-[var(--twb-color-text-primary)]">
                            R {item.price.toFixed(2)}
                          </span>
                        </div>
                      )}

                      {item.originalPrice && (
                        <span className="inline-block border border-[var(--twb-border-primary)] text-[10px] px-1.5 py-0.5 uppercase font-medium mb-2">
                          Save R{" "}
                          {(
                            item.originalPrice - item.price
                          ).toFixed(2)}
                        </span>
                      )}

                      {item.description && (
                        <Typography
                          variant="caption"
                          className="text-[var(--twb-color-text-secondary)] block mb-3"
                        >
                          {item.description}
                        </Typography>
                      )}
                    </div>

                    <div className="flex flex-col items-start gap-2">
                      <div className="flex items-center border border-[var(--twb-border-primary)] h-9 w-28">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, -1)
                          }
                          className="flex-1 h-full flex items-center justify-center hover:bg-[var(--twb-color-bg-secondary)] text-[var(--twb-color-text-secondary)] focus:outline-none focus:bg-[var(--twb-color-bg-secondary)]"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="flex-1 h-full flex items-center justify-center font-medium text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, 1)
                          }
                          className="flex-1 h-full flex items-center justify-center hover:bg-[var(--twb-color-bg-secondary)] text-[var(--twb-color-text-secondary)] focus:outline-none focus:bg-[var(--twb-color-bg-secondary)]"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-xs text-[var(--twb-color-text-secondary)] underline hover:text-[var(--twb-color-text-primary)] mt-1"
                      >
                        Remove item
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {items.length > 0 && (
            <div className="p-6 border-t border-[var(--twb-border-primary)] bg-[var(--twb-color-bg-primary)]">
              <div className="flex justify-between items-center mb-1">
                <span className="text-base font-bold text-[var(--twb-color-text-primary)]">
                  Subtotal
                </span>
                <span className="text-base font-bold text-[var(--twb-color-text-primary)]">
                  R {total.toFixed(2)}
                </span>
              </div>
              <Typography
                variant="caption"
                className="text-[var(--twb-color-text-secondary)] text-xs mb-6 block"
              >
                Shipping, taxes, and discounts calculated at
                checkout.
              </Typography>
              <div className="flex gap-4">
                <Link
                  to="/cart"
                  className="flex-1"
                  onClick={() => setIsOpen(false)}
                >
                  <Button
                    variant="outline"
                    className="w-full border-[var(--twb-border-primary)] hover:bg-[var(--twb-color-bg-secondary)] text-[var(--twb-color-text-primary)] h-12 rounded-none font-normal"
                  >
                    View my cart
                  </Button>
                </Link>
                <Link
                  to="/checkout"
                  className="flex-1"
                  onClick={() => setIsOpen(false)}
                >
                  <Button className="w-full bg-[var(--twb-color-ink)] text-[var(--twb-color-paper)] hover:bg-[var(--twb-color-ink)]/90 h-12 rounded-none font-normal">
                    Go to checkout
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
};