"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

type SafeImageProps = {
  src?: string;
  alt: string;
  className?: string;
  fit?: "cover" | "contain";
};

/**
 * Local placeholder assets are swapped in later; render a branded gradient
 * card instead of a broken-image icon until the real file lands at `src`.
 */
export function SafeImage({ src, alt, className, fit = "cover" }: SafeImageProps) {
  const [errored, setErrored] = useState(false);

  if (!src || errored) {
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
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setErrored(true)}
      className={cn(
        fit === "cover" ? "object-cover" : "object-contain",
        "object-center",
        className
      )}
    />
  );
}
