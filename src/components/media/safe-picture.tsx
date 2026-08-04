"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import type { ResponsiveImage } from "@/db";

type SafePictureProps = {
  sources: ResponsiveImage;
  alt: string;
  className?: string;
};

/**
 * Art-directed hero image: mobile/tablet get their own crop, desktop is the
 * <img> fallback so browsers wider than the tablet breakpoint load it directly.
 */
export function SafePicture({ sources, alt, className }: SafePictureProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-gradient-to-br from-ink via-ink-soft to-[#3a2a12] p-4 text-center",
          className
        )}
      >
        <span className="font-display text-sm uppercase tracking-[0.25em] text-gold-light/90 sm:text-base">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <picture className="contents">
      <source media="(max-width: 639px)" srcSet={sources.mobile} />
      <source media="(max-width: 1023px)" srcSet={sources.tablet} />
      <img
        src={sources.desktop}
        alt={alt}
        loading="lazy"
        onError={() => setErrored(true)}
        className={cn("object-cover", className)}
      />
    </picture>
  );
}
