import type { Testimonial } from "@/db";
import { RatingStars } from "@/components/ui/rating-stars";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="flex flex-col gap-4 border border-ink/10 bg-paper p-7">
          <RatingStars rating={testimonial.rating} />
          <p className="text-sm leading-relaxed text-ink/80">&ldquo;{testimonial.quote}&rdquo;</p>
          <div className="mt-auto flex items-center gap-3 pt-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink font-display text-sm text-paper">
              {initials(testimonial.name)}
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">{testimonial.name}</p>
              <p className="text-xs text-muted">{testimonial.location}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
