"use client";

import { MinusIcon, PlusIcon } from "@/components/icons";

type QuantityStepperProps = {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
};

export function QuantityStepper({ value, onChange, min = 1, max = 10 }: QuantityStepperProps) {
  return (
    <div className="inline-flex items-center gap-3">
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-paper transition hover:bg-gold hover:text-ink disabled:opacity-30 disabled:hover:bg-ink disabled:hover:text-paper"
      >
        <MinusIcon className="h-4 w-4" />
      </button>
      <span className="w-6 text-center text-sm font-medium text-ink">{value}</span>
      <button
        type="button"
        aria-label="Increase quantity"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-paper transition hover:bg-gold hover:text-ink disabled:opacity-30 disabled:hover:bg-ink disabled:hover:text-paper"
      >
        <PlusIcon className="h-4 w-4" />
      </button>
    </div>
  );
}
