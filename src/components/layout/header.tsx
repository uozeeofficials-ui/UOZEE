"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";
import { navLinks, siteConfig } from "@/db";
import { useCart } from "@/context/cart-context";
import { useWishlist } from "@/context/wishlist-context";
import { BagIcon, CloseIcon, HeartIcon, MenuIcon, SearchIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

function CountBadge({ value }: { value: number }) {
  return (
    <span className="absolute -top-1 -right-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-gold px-1 text-[10px] font-semibold text-ink">
      {value}
    </span>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();
  const { totalItems } = useCart();
  const { count } = useWishlist();

  function handleSearchSubmit(event: FormEvent) {
    event.preventDefault();
    const q = query.trim();
    setSearchOpen(false);
    setMobileOpen(false);
    router.push(q ? `/shop?search=${encodeURIComponent(q)}` : "/shop");
  }

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={siteConfig.logo} alt={siteConfig.name} className="h-14 w-14 object-contain" />
          <span className="font-display text-2xl tracking-[0.18em] text-ink">{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.16em] text-ink/80 transition hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <form onSubmit={handleSearchSubmit} className="hidden items-center sm:flex">
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onFocus={() => setSearchOpen(true)}
              onBlur={() => !query && setSearchOpen(false)}
              placeholder="Search perfume..."
              className={cn(
                "border-b border-transparent bg-transparent text-sm text-ink outline-none transition-all duration-300",
                searchOpen ? "w-40 border-gold px-1" : "w-0"
              )}
            />
            <button
              type="submit"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
              className="text-ink transition hover:text-gold"
            >
              <SearchIcon className="h-5 w-5" />
            </button>
          </form>

          <Link
            href="/wishlist"
            aria-label="Wishlist"
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-ink transition hover:border-ink hover:bg-ink hover:text-paper"
          >
            <HeartIcon className="h-[18px] w-[18px]" />
            {count > 0 && <CountBadge value={count} />}
          </Link>

          <Link
            href="/cart"
            aria-label="Cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-ink transition hover:border-ink hover:bg-ink hover:text-paper"
          >
            <BagIcon className="h-[18px] w-[18px]" />
            {totalItems > 0 && <CountBadge value={totalItems} />}
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center text-ink md:hidden"
          >
            {mobileOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-ink/10 bg-paper px-4 pb-6 pt-4 md:hidden">
          <form onSubmit={handleSearchSubmit} className="mb-4 flex items-center gap-2 border-b border-ink/15 pb-2">
            <SearchIcon className="h-4 w-4 text-ink/60" />
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search perfume..."
              className="w-full bg-transparent text-sm text-ink outline-none"
            />
          </form>
          <nav className="flex flex-col divide-y divide-ink/10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-sm uppercase tracking-[0.14em] text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
