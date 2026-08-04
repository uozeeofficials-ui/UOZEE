"use client";

import { useState } from "react";
import { SafeImage } from "@/components/media/safe-image";
import { cn } from "@/lib/cn";

export function ProductGallery({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="relative aspect-square overflow-hidden bg-paper-dim">
        <SafeImage
          src={images[active]}
          alt={title}
          fit="contain"
          className="absolute inset-0 h-full w-full p-0"
        />
      </div>
      {images.length > 1 && (
        <div className="mt-4 flex gap-3">
          {images.map((src, i) => (
            <button
              key={src + i}
              type="button"
              aria-label={`View image ${i + 1}`}
              onClick={() => setActive(i)}
              className={cn(
                "relative h-20 w-20 shrink-0 overflow-hidden border-2 transition",
                i === active ? "border-gold" : "border-transparent"
              )}
            >
              <SafeImage
                src={src}
                alt={`${title} angle ${i + 1}`}
                fit="contain"
                className="absolute inset-0 h-full w-full p-0"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
