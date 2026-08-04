"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { PlayIcon } from "@/components/icons";

type SafeVideoProps = {
  src?: string;
  className?: string;
  label?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
};

export function SafeVideo({
  src,
  className,
  label,
  autoPlay = true,
  loop = true,
  muted = true,
  controls = false,
}: SafeVideoProps) {
  const [errored, setErrored] = useState(false);

  if (!src || errored) {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-ink via-ink-soft to-[#3a2a12]",
          className
        )}
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-light/40 text-gold-light">
          <PlayIcon className="h-5 w-5 translate-x-0.5" />
        </span>
        {label ? (
          <span className="px-4 text-center text-xs uppercase tracking-[0.2em] text-gold-light/80">
            {label}
          </span>
        ) : null}
      </div>
    );
  }

  return (
    <video
      className={cn("object-cover", className)}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline
      controls={controls}
      onError={() => setErrored(true)}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
