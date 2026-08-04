import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "mx-0 text-left",
        className
      )}
    >
      {eyebrow && <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">{eyebrow}</p>}
      <h2 className="font-display text-3xl uppercase tracking-[0.06em] text-ink sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">{description}</p>
      )}
    </div>
  );
}
