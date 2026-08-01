"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type TourImageCarouselProps = {
  images: string[];
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

export function TourImageCarousel({
  images,
  alt,
  sizes = "(max-width: 1024px) 100vw, 50vw",
  priority = false,
  className = "",
}: TourImageCarouselProps) {
  const slides = images.length > 0 ? images : [];
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const goTo = useCallback(
    (next: number) => {
      setIndex((next + slides.length) % slides.length);
    },
    [slides.length]
  );

  useEffect(() => {
    setIndex(0);
  }, [slides.join("|")]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.changedTouches[0].clientX);
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const delta = e.changedTouches[0].clientX - touchStart;
    if (Math.abs(delta) > 40) {
      goTo(delta > 0 ? index - 1 : index + 1);
    }
    setTouchStart(null);
  };

  if (slides.length <= 1) {
    const src = slides[0] ?? images[0];
    if (!src) return null;
    return (
      <div className={`relative aspect-[16/10] overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes={sizes}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative aspect-[16/10] overflow-hidden ${className}`}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {slides.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-500 ${
            i === index ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <Image
            src={src}
            alt={`${alt} — ${i + 1} of ${slides.length}`}
            fill
            priority={priority && i === 0}
            className="object-cover"
            sizes={sizes}
          />
        </div>
      ))}

      <button
        type="button"
        onClick={() => goTo(index - 1)}
        className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 touch-manipulation items-center justify-center rounded-full bg-jamaica-black/45 text-white backdrop-blur-sm active:bg-jamaica-black/65 sm:h-9 sm:w-9"
        aria-label="Previous photo"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => goTo(index + 1)}
        className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 touch-manipulation items-center justify-center rounded-full bg-jamaica-black/45 text-white backdrop-blur-sm active:bg-jamaica-black/65 sm:h-9 sm:w-9"
        aria-label="Next photo"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute inset-x-0 bottom-3 z-10 flex justify-center gap-1.5">
        {slides.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full touch-manipulation transition-all ${
              i === index ? "w-6 bg-jamaica-gold" : "w-2 bg-white/70"
            }`}
            aria-label={`Photo ${i + 1}`}
            aria-current={i === index}
          />
        ))}
      </div>
    </div>
  );
}
