import { StarIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

type RatingStarsProps = {
  rating: number;
  reviewCount?: number;
  className?: string;
};

export function RatingStars({ rating, reviewCount, className }: RatingStarsProps) {
  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      <div className="flex items-center gap-0.5 text-gold">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} filled={i < Math.round(rating)} className="h-3.5 w-3.5" />
        ))}
      </div>
      {reviewCount !== undefined && <span className="text-xs text-muted">({reviewCount})</span>}
    </div>
  );
}
