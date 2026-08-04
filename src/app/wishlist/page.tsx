"use client";

import { useWishlist } from "@/context/wishlist-context";
import { ProductGrid } from "@/components/product/product-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { EmptyState } from "@/components/ui/empty-state";
import { HeartIcon } from "@/components/icons";

export default function WishlistPage() {
  const { products } = useWishlist();

  return (
    <div>
      <section className="border-b border-ink/10 bg-paper-dim py-16">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <SectionHeading
            eyebrow="Saved For Later"
            title="Your Wishlist"
            align="left"
            className="mx-0"
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-10">
        {products.length === 0 ? (
          <EmptyState
            icon={<HeartIcon className="h-12 w-12" />}
            title="Your wishlist is empty"
            description="Save your favourite fragrances here to find them easily later."
            ctaLabel="Browse Fragrances"
            ctaHref="/shop"
          />
        ) : (
          <ProductGrid products={products} />
        )}
      </section>
    </div>
  );
}
