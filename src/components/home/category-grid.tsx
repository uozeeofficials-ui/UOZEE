import Link from "next/link";
import type { Category } from "@/db";
import { SafeImage } from "@/components/media/safe-image";
import { ArrowRightIcon } from "@/components/icons";

function hrefFor(category: Category) {
  if (category.gender === "all") return "/shop";
  return `/shop?gender=${category.gender}`;
}

export function CategoryGrid({ categories }: { categories: Category[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={hrefFor(category)}
          className="group relative block h-80 overflow-hidden sm:h-96"
        >
          <SafeImage
            src={category.image}
            alt={category.title}
            className="absolute inset-0 h-full w-full transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-paper">
            <h3 className="font-display text-2xl uppercase tracking-[0.05em]">{category.title}</h3>
            <p className="mt-2 text-sm text-paper/80">{category.description}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold-light">
              Shop Now
              <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
