import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/cn";

type PriceProps = {
  price: number;
  compareAtPrice?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-2xl",
};

export function Price({ price, compareAtPrice, size = "md", className }: PriceProps) {
  return (
    <span className={cn("inline-flex items-center gap-2", sizes[size], className)}>
      <span className="font-semibold text-ink">{formatPrice(price)}</span>
      {compareAtPrice && compareAtPrice > price && (
        <span className="text-[0.85em] text-muted line-through">{formatPrice(compareAtPrice)}</span>
      )}
    </span>
  );
}
