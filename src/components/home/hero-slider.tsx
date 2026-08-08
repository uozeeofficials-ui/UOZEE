"use client";

import { useCallback, useEffect, useRef, useState, type TouchEvent } from "react";
import type { HeroSlide } from "@/db";
import { SafePicture } from "@/components/media/safe-picture";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

const AUTOPLAY_MS = 6000;

export function HeroSlider({ slides }: { slides: HeroSlide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback(
    (i: number) => {
      setIndex(((i % slides.length) + slides.length) % slides.length);
    },
    [slides.length]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused || slides.length <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, slides.length]);

  function handleTouchStart(event: TouchEvent) {
    touchStartX.current = event.touches[0].clientX;
  }

  function handleTouchEnd(event: TouchEvent) {
    if (touchStartX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      if (delta > 0) prev();
      else next();
    }
    touchStartX.current = null;
  }

  return (
    <section
      className="relative mx-auto my-4 h-[520px] w-[calc(100%-2rem)] overflow-hidden rounded-[24px] border border-white/10 bg-ink shadow-[0_35px_90px_-35px_rgba(0,0,0,0.75)] sm:my-6 sm:h-[500px] sm:w-[calc(100%-3rem)] sm:rounded-[28px] lg:my-8 lg:h-[560px] lg:w-[calc(100%-4rem)] lg:rounded-[32px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          aria-hidden={i !== index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
            i === index ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <SafePicture
            sources={slide.image}
            alt={slide.heading}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/45 to-ink/20" />
        </div>
      ))}

      <button
        type="button"
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-3 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-paper/20 bg-black/20 text-paper backdrop-blur-sm transition hover:bg-black/35 hover:text-paper sm:flex"
      >
        <ChevronLeftIcon className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={next}
        className="absolute right-3 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-paper/20 bg-black/20 text-paper backdrop-blur-sm transition hover:bg-black/35 hover:text-paper sm:flex"
      >
        <ChevronRightIcon className="h-5 w-5" />
      </button>

      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2.5 sm:bottom-5">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={cn(
              "h-2.5 rounded-full transition-all duration-300",
              i === index ? "w-7 bg-gold-light" : "w-2.5 bg-paper/45 hover:bg-paper/70"
            )}
          />
        ))}
      </div>
    </section>
  );
}
