"use client";

import type { ReactNode } from "react";
import { CartProvider } from "./cart-context";
import { WishlistProvider } from "./wishlist-context";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <WishlistProvider>{children}</WishlistProvider>
    </CartProvider>
  );
}
