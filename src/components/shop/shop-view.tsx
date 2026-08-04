"use client";

import { useMemo, useRef, useState, type FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { products } from "@/db";
import { ProductGrid } from "@/components/product/product-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/cn";

type GenderFilter = "all" | "men" | "women";
type SortValue = "featured" | "price-asc" | "price-desc";

const genderTabs: { label: string; value: GenderFilter }[] = [
  { label: "All", value: "all" },
  { label: "Men", value: "men" },
  { label: "Women", value: "women" },
];

export function ShopView() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const genderParam = searchParams.get("gender");
  const gender: GenderFilter = genderParam === "men" || genderParam === "women" ? genderParam : "all";
  const searchQuery = searchParams.get("search") ?? "";

  const searchInputRef = useRef<HTMLInputElement>(null);
  const [bestSellersOnly, setBestSellersOnly] = useState(false);
  const [sort, setSort] = useState<SortValue>("featured");

  function pushParams(next: URLSearchParams) {
    const query = next.toString();
    router.push(`/shop${query ? `?${query}` : ""}`);
  }

  function updateGender(value: GenderFilter) {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "all") params.delete("gender");
    else params.set("gender", value);
    pushParams(params);
  }

  function handleSearchSubmit(event: FormEvent) {
    event.preventDefault();
    const value = searchInputRef.current?.value.trim() ?? "";
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set("search", value);
    else params.delete("search");
    pushParams(params);
  }

  const filtered = useMemo(() => {
    let list = products;
    if (gender !== "all") list = list.filter((product) => product.gender === gender);
    if (bestSellersOnly) list = list.filter((product) => product.isBestSeller);
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      list = list.filter(
        (product) =>
          product.title.toLowerCase().includes(q) || product.description.toLowerCase().includes(q)
      );
    }
    const sorted = [...list];
    if (sort === "price-asc") sorted.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") sorted.sort((a, b) => b.price - a.price);
    return sorted;
  }, [gender, bestSellersOnly, searchQuery, sort]);

  return (
    <div>
      <section className="border-b border-ink/10 bg-paper-dim py-16">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <SectionHeading
            eyebrow="The Full Collection"
            title="Shop All Fragrances"
            align="left"
            className="mx-0"
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-10">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-3">
            {genderTabs.map((tab) => (
              <button
                key={tab.value}
                type="button"
                onClick={() => updateGender(tab.value)}
                className={cn(
                  "border px-5 py-2 text-xs uppercase tracking-[0.16em] transition",
                  gender === tab.value
                    ? "border-ink bg-ink text-paper"
                    : "border-ink/20 text-ink hover:border-ink"
                )}
              >
                {tab.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setBestSellersOnly((v) => !v)}
              className={cn(
                "border px-5 py-2 text-xs uppercase tracking-[0.16em] transition",
                bestSellersOnly ? "border-gold bg-gold text-ink" : "border-ink/20 text-ink hover:border-ink"
              )}
            >
              Best Sellers
            </button>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <form
              key={searchQuery}
              onSubmit={handleSearchSubmit}
              className="flex items-center border border-ink/20 px-3"
            >
              <input
                ref={searchInputRef}
                type="text"
                defaultValue={searchQuery}
                placeholder="Search fragrances..."
                className="w-44 bg-transparent px-2 py-2.5 text-sm outline-none"
              />
            </form>
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value as SortValue)}
              className="border border-ink/20 bg-paper px-3 py-2.5 text-xs uppercase tracking-[0.14em] text-ink outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        <ProductGrid products={filtered} />
      </section>
    </div>
  );
}
