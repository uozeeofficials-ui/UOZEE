"use client";

import { formatPrice } from "@/lib/format";

type CartSummaryProps = {
  subtotal: number;
  compareSubtotal: number;
  onCheckout: () => void;
};

export function CartSummary({ subtotal, compareSubtotal, onCheckout }: CartSummaryProps) {
  const savings = compareSubtotal - subtotal;

  return (
    <div className="border border-ink/10 bg-paper-dim p-6">
      <h3 className="font-display text-lg uppercase tracking-[0.1em] text-ink">Order Summary</h3>
      <div className="mt-5 space-y-3 text-sm">
        <div className="flex justify-between text-ink/80">
          <span>Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        {savings > 0 && (
          <div className="flex justify-between text-gold-dark">
            <span>You Save</span>
            <span>-{formatPrice(savings)}</span>
          </div>
        )}
        <div className="flex justify-between text-ink/60">
          <span>Shipping</span>
          <span>Calculated at delivery</span>
        </div>
      </div>
      <div className="mt-5 flex justify-between border-t border-ink/10 pt-4 text-base font-semibold text-ink">
        <span>Total</span>
        <span>{formatPrice(subtotal)}</span>
      </div>
      <button
        type="button"
        onClick={onCheckout}
        className="mt-6 w-full bg-ink px-6 py-3.5 text-xs uppercase tracking-[0.2em] text-paper transition hover:bg-gold hover:text-ink"
      >
        Place Order
      </button>
    </div>
  );
}
