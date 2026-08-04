import type { Product } from "@/db";
import { ProductCard } from "./product-card";
import { EmptyState } from "@/components/ui/empty-state";
import { BagIcon } from "@/components/icons";

export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <EmptyState
        icon={<BagIcon className="h-12 w-12" />}
        title="No fragrances found"
        description="Try a different category or search term."
        ctaLabel="View all fragrances"
        ctaHref="/shop"
      />
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
