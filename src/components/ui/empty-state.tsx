import Link from "next/link";
import type { ReactNode } from "react";

type EmptyStateProps = {
  icon?: ReactNode;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function EmptyState({ icon, title, description, ctaLabel, ctaHref }: EmptyStateProps) {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center gap-4 px-4 py-24 text-center">
      {icon && <div className="text-ink/15">{icon}</div>}
      <h2 className="font-display text-2xl text-ink">{title}</h2>
      <p className="text-sm text-muted">{description}</p>
      {ctaLabel && ctaHref && (
        <Link
          href={ctaHref}
          className="mt-2 inline-flex items-center justify-center rounded-full bg-ink px-8 py-3 text-xs uppercase tracking-[0.2em] text-paper transition hover:bg-gold hover:text-ink"
        >
          {ctaLabel}
        </Link>
      )}
    </div>
  );
}
