"use client";

import Link from "next/link";
import type { Product } from "@/db";
import { SafeImage } from "@/components/media/safe-image";
import { Price } from "@/components/ui/price";
import { HeartIcon } from "@/components/icons";
import { useCart } from "@/context/cart-context";
import { useWishlist } from "@/context/wishlist-context";
import { cn } from "@/lib/cn";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const { has, toggle } = useWishlist();
  const wishlisted = has(product.slug);

  return (
    <div className="group flex flex-col overflow-hidden border border-ink/10 bg-paper transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(11,11,12,0.35)]">
      <div className="relative aspect-[4/5] overflow-hidden bg-paper-dim">
        <Link href={`/product/${product.slug}`} className="absolute inset-0 block">
          <SafeImage
            src={product.images[0]}
            alt={product.title}
            fit="contain"
            className="absolute inset-0 h-full w-full p-0 transition duration-700 group-hover:scale-105"
          />
        </Link>
        <span className="pointer-events-none absolute left-3 top-3 bg-paper px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink">
          30% off
        </span>
        <button
          type="button"
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          onClick={() => toggle(product.slug)}
          className={cn(
            "absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-paper shadow-md transition hover:scale-105",
            wishlisted ? "text-danger" : "text-ink/50"
          )}
        >
          <HeartIcon filled={wishlisted} className="h-4 w-4" />
        </button>
      </div>

      <div className="flex flex-1 flex-col items-center gap-2 px-5 py-6 text-center">
        {(product.isBestSeller || product.isNew) && (
          <span className="text-[10px] uppercase tracking-[0.2em] text-gold">
            {product.isBestSeller ? "Bestseller" : "New Arrival"}
          </span>
        )}
        <Link href={`/product/${product.slug}`} className="font-display text-lg text-ink">
          {product.title}
        </Link>
        <span className="inline-flex items-center rounded-full bg-ink px-3 py-1 text-[11px] text-paper">
          {product.sizeMl}ml
        </span>
        <Price price={product.price} compareAtPrice={product.compareAtPrice} />
        <button
          type="button"
          onClick={() => addItem(product.slug, product.sizeMl, 1)}
          className="mt-2 w-full rounded-full border border-ink px-4 py-2.5 text-xs uppercase tracking-[0.16em] text-ink transition hover:bg-ink hover:text-paper"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
