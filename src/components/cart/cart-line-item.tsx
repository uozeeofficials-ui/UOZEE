"use client";

import Link from "next/link";
import { useCart, type ResolvedCartLine } from "@/context/cart-context";
import { SafeImage } from "@/components/media/safe-image";
import { QuantityStepper } from "@/components/ui/quantity-stepper";
import { Price } from "@/components/ui/price";
import { TrashIcon } from "@/components/icons";

export function CartLineItem({ line }: { line: ResolvedCartLine }) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex gap-4 border-b border-ink/10 py-6 first:pt-0">
      <Link
        href={`/product/${line.product.slug}`}
        className="relative h-24 w-24 shrink-0 overflow-hidden bg-paper-dim"
      >
        <SafeImage
          src={line.product.images[0]}
          alt={line.product.title}
          className="absolute inset-0 h-full w-full"
        />
      </Link>

      <div className="flex flex-1 flex-col justify-between gap-3">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Link href={`/product/${line.product.slug}`} className="font-display text-base text-ink">
              {line.product.title}
            </Link>
            <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted">{line.size}ml</p>
          </div>
          <button
            type="button"
            aria-label="Remove item"
            onClick={() => removeItem(line.slug, line.size)}
            className="text-ink/40 transition hover:text-danger"
          >
            <TrashIcon className="h-4 w-4" />
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <QuantityStepper
            value={line.quantity}
            onChange={(qty) => updateQuantity(line.slug, line.size, qty)}
          />
          <Price
            price={line.product.price * line.quantity}
            compareAtPrice={
              line.product.compareAtPrice ? line.product.compareAtPrice * line.quantity : undefined
            }
          />
        </div>
      </div>
    </div>
  );
}
