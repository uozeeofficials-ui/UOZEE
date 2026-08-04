"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { getProductBySlug, type Product } from "@/db";

const STORAGE_KEY = "uozee:cart";

export type CartLine = {
  slug: string;
  size: number;
  quantity: number;
};

export type ResolvedCartLine = CartLine & { product: Product };

type CartContextValue = {
  lines: ResolvedCartLine[];
  totalItems: number;
  subtotal: number;
  compareSubtotal: number;
  addItem: (slug: string, size: number, quantity?: number) => void;
  removeItem: (slug: string, size: number) => void;
  updateQuantity: (slug: string, size: number, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartLine[]>([]);
  const hydrated = useRef(false);

  useEffect(() => {
    // One-time sync from localStorage, which isn't available during SSR — the
    // initial state must stay [] on the server to avoid a hydration mismatch.
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (raw) setItems(JSON.parse(raw));
    } catch {
      // ignore corrupted storage
    } finally {
      hydrated.current = true;
    }
  }, []);

  useEffect(() => {
    if (!hydrated.current) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = useCallback((slug: string, size: number, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((line) => line.slug === slug && line.size === size);
      if (existing) {
        return prev.map((line) =>
          line.slug === slug && line.size === size
            ? { ...line, quantity: line.quantity + quantity }
            : line
        );
      }
      return [...prev, { slug, size, quantity }];
    });
  }, []);

  const removeItem = useCallback((slug: string, size: number) => {
    setItems((prev) => prev.filter((line) => !(line.slug === slug && line.size === size)));
  }, []);

  const updateQuantity = useCallback((slug: string, size: number, quantity: number) => {
    setItems((prev) => {
      if (quantity <= 0) {
        return prev.filter((line) => !(line.slug === slug && line.size === size));
      }
      return prev.map((line) =>
        line.slug === slug && line.size === size ? { ...line, quantity } : line
      );
    });
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const lines = useMemo<ResolvedCartLine[]>(() => {
    return items
      .map((line) => {
        const product = getProductBySlug(line.slug);
        return product ? { ...line, product } : null;
      })
      .filter((line): line is ResolvedCartLine => line !== null);
  }, [items]);

  const totalItems = useMemo(
    () => lines.reduce((sum, line) => sum + line.quantity, 0),
    [lines]
  );

  const subtotal = useMemo(
    () => lines.reduce((sum, line) => sum + line.product.price * line.quantity, 0),
    [lines]
  );

  const compareSubtotal = useMemo(
    () =>
      lines.reduce(
        (sum, line) => sum + (line.product.compareAtPrice ?? line.product.price) * line.quantity,
        0
      ),
    [lines]
  );

  const value: CartContextValue = {
    lines,
    totalItems,
    subtotal,
    compareSubtotal,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}
