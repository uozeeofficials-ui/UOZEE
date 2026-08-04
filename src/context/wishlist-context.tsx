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

const STORAGE_KEY = "uozee:wishlist";

type WishlistContextValue = {
  slugs: string[];
  products: Product[];
  count: number;
  has: (slug: string) => boolean;
  toggle: (slug: string) => void;
  remove: (slug: string) => void;
};

const WishlistContext = createContext<WishlistContextValue | null>(null);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [slugs, setSlugs] = useState<string[]>([]);
  const hydrated = useRef(false);

  useEffect(() => {
    // One-time sync from localStorage, which isn't available during SSR — the
    // initial state must stay [] on the server to avoid a hydration mismatch.
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (raw) setSlugs(JSON.parse(raw));
    } catch {
      // ignore corrupted storage
    } finally {
      hydrated.current = true;
    }
  }, []);

  useEffect(() => {
    if (!hydrated.current) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(slugs));
  }, [slugs]);

  const has = useCallback((slug: string) => slugs.includes(slug), [slugs]);

  const toggle = useCallback((slug: string) => {
    setSlugs((prev) =>
      prev.includes(slug) ? prev.filter((item) => item !== slug) : [...prev, slug]
    );
  }, []);

  const remove = useCallback((slug: string) => {
    setSlugs((prev) => prev.filter((item) => item !== slug));
  }, []);

  const products = useMemo(
    () => slugs.map((slug) => getProductBySlug(slug)).filter((p): p is Product => Boolean(p)),
    [slugs]
  );

  const value: WishlistContextValue = {
    slugs,
    products,
    count: slugs.length,
    has,
    toggle,
    remove,
  };

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}

export function useWishlist(): WishlistContextValue {
  const context = useContext(WishlistContext);
  if (!context) throw new Error("useWishlist must be used within a WishlistProvider");
  return context;
}
