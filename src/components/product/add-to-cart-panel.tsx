"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { Product } from "@/db";
import { useCart } from "@/context/cart-context";
import { useWishlist } from "@/context/wishlist-context";
import { QuantityStepper } from "@/components/ui/quantity-stepper";
import { HeartIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

export function AddToCartPanel({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);
  const router = useRouter();
  const { addItem } = useCart();
  const { has, toggle } = useWishlist();
  const wishlisted = has(product.slug);

  useEffect(() => {
    if (!justAdded) return;
    const id = setTimeout(() => setJustAdded(false), 2000);
    return () => clearTimeout(id);
  }, [justAdded]);

  function handleAddToCart() {
    addItem(product.slug, product.sizeMl, quantity);
    setJustAdded(true);
  }

  function handleBuyNow() {
    addItem(product.slug, product.sizeMl, quantity);
    router.push("/cart");
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink">Quantity</p>
        <QuantityStepper value={quantity} onChange={setQuantity} />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={handleBuyNow}
          className="flex-1 bg-ink px-6 py-3.5 text-xs uppercase tracking-[0.2em] text-paper transition hover:bg-gold hover:text-ink"
        >
          Buy It Now
        </button>
        <button
          type="button"
          onClick={handleAddToCart}
          className="flex-1 border border-ink px-6 py-3.5 text-xs uppercase tracking-[0.2em] text-ink transition hover:bg-ink hover:text-paper"
        >
          {justAdded ? "Added to Cart" : "Add to Cart"}
        </button>
        <button
          type="button"
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          onClick={() => toggle(product.slug)}
          className={cn(
            "flex h-12 w-12 shrink-0 items-center justify-center self-center border transition",
            wishlisted ? "border-danger text-danger" : "border-ink/20 text-ink hover:border-ink"
          )}
        >
          <HeartIcon filled={wishlisted} className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
