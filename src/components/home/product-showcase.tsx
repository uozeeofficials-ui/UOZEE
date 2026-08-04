"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Product } from "@/db";
import { ProductGrid } from "@/components/product/product-grid";
import { cn } from "@/lib/cn";

const tabs: { label: string; value: "all" | "men" | "women" }[] = [
  { label: "All Collection", value: "all" },
  { label: "Men Session", value: "men" },
  { label: "Women Session", value: "women" },
];

export function ProductShowcase({ products }: { products: Product[] }) {
  const [tab, setTab] = useState<"all" | "men" | "women">("all");

  const filtered = useMemo(() => {
    if (tab === "all") return products;
    return products.filter((product) => product.gender === tab);
  }, [products, tab]);

  return (
    <div>
      <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
        {tabs.map((t) => (
          <button
            key={t.value}
            type="button"
            onClick={() => setTab(t.value)}
            className={cn(
              "border px-6 py-2.5 text-xs uppercase tracking-[0.18em] transition",
              tab === t.value
                ? "border-ink bg-ink text-paper"
                : "border-ink/20 text-ink hover:border-ink"
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      <ProductGrid products={filtered} />

      <div className="mt-12 text-center">
        <Link
          href="/shop"
          className="inline-flex items-center justify-center rounded-full border border-ink px-9 py-3 text-xs uppercase tracking-[0.2em] text-ink transition hover:bg-ink hover:text-paper"
        >
          View Full Collection
        </Link>
      </div>
    </div>
  );
}
