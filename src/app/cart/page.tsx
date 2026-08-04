"use client";

import { useState } from "react";
import { useCart } from "@/context/cart-context";
import { CartLineItem } from "@/components/cart/cart-line-item";
import { CartSummary } from "@/components/cart/cart-summary";
import { CheckoutForm } from "@/components/cart/checkout-form";
import { SectionHeading } from "@/components/ui/section-heading";
import { EmptyState } from "@/components/ui/empty-state";
import { BagIcon } from "@/components/icons";

export default function CartPage() {
  const { lines, subtotal, compareSubtotal } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <div>
      <section className="border-b border-ink/10 bg-paper-dim py-16">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <SectionHeading eyebrow="Your Bag" title="Shopping Cart" align="left" className="mx-0" />
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-10">
        {lines.length === 0 ? (
          <EmptyState
            icon={<BagIcon className="h-12 w-12" />}
            title="Your cart is empty"
            description="Add a signature fragrance to get started."
            ctaLabel="Browse Fragrances"
            ctaHref="/shop"
          />
        ) : (
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              {lines.map((line) => (
                <CartLineItem key={`${line.slug}-${line.size}`} line={line} />
              ))}
            </div>

            <div className="space-y-8">
              <CartSummary
                subtotal={subtotal}
                compareSubtotal={compareSubtotal}
                onCheckout={() => setShowCheckout(true)}
              />
              {showCheckout && <CheckoutForm lines={lines} subtotal={subtotal} />}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
