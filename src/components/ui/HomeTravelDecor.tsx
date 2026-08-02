import type { ReactNode } from "react";
import { TravelSticker } from "@/components/ui/TravelSticker";

function StickerFloat({
  children,
  className = "",
  delay = false,
  slow = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: boolean;
  slow?: boolean;
}) {
  return (
    <div
      className={`travel-sticker-float ${delay ? "travel-sticker-float--delay" : ""} ${slow ? "travel-sticker-float--slow" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

/** Floating vintage travel stickers — homepage visual cues for tours, transfers & beach excursions. */
export function HeroTravelDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -right-2 top-[18%] rotate-12 sm:right-4 md:right-8 md:top-[14%] lg:right-16">
        <StickerFloat slow className="hidden sm:block">
          <TravelSticker type="plane" size="lg" />
        </StickerFloat>
      </div>
      <div className="absolute bottom-[28%] left-2 -rotate-6 md:bottom-[32%] md:left-8 lg:left-12">
        <StickerFloat delay className="hidden sm:block">
          <TravelSticker type="bus" size="md" />
        </StickerFloat>
      </div>
      <div className="absolute bottom-[38%] right-4 rotate-6 sm:right-10 md:bottom-[40%] md:right-20">
        <StickerFloat>
          <TravelSticker type="beach" size="sm" />
        </StickerFloat>
      </div>
      <div className="absolute right-[12%] top-[42%] rotate-3 lg:right-[22%]">
        <StickerFloat delay className="hidden md:block">
          <TravelSticker type="palm" size="sm" />
        </StickerFloat>
      </div>
    </div>
  );
}

export function TrustBarTravelDecor() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 -top-14 z-10 flex justify-center gap-3 px-4 sm:-top-16 sm:gap-5 md:gap-8"
      aria-hidden="true"
    >
      <div className="-rotate-6">
        <StickerFloat>
          <TravelSticker type="passport" size="sm" />
        </StickerFloat>
      </div>
      <div className="rotate-3 hidden sm:block">
        <StickerFloat delay>
          <TravelSticker type="plane" size="sm" />
        </StickerFloat>
      </div>
      <div className="-rotate-3">
        <StickerFloat slow>
          <TravelSticker type="bus" size="sm" />
        </StickerFloat>
      </div>
      <div className="rotate-6 hidden sm:block">
        <StickerFloat delay>
          <TravelSticker type="beach" size="sm" />
        </StickerFloat>
      </div>
    </div>
  );
}

export function SectionTravelDecor({
  variant = "left",
}: {
  variant?: "left" | "right" | "center";
}) {
  const position =
    variant === "left"
      ? "left-0 -translate-x-1/4"
      : variant === "right"
        ? "right-0 translate-x-1/4"
        : "left-1/2 -translate-x-1/2";

  return (
    <div
      className={`pointer-events-none absolute top-8 ${position} hidden opacity-90 lg:block`}
      aria-hidden="true"
    >
      {variant === "left" && (
        <div className="-rotate-12">
          <StickerFloat>
            <TravelSticker type="matador" size="md" />
          </StickerFloat>
        </div>
      )}
      {variant === "right" && (
        <div className="rotate-12">
          <StickerFloat slow>
            <TravelSticker type="palm" size="md" />
          </StickerFloat>
        </div>
      )}
      {variant === "center" && (
        <div className="rotate-3">
          <StickerFloat delay>
            <TravelSticker type="bus" size="sm" />
          </StickerFloat>
        </div>
      )}
    </div>
  );
}

export function ExploreStickerRow() {
  return (
    <div
      className="mb-8 flex flex-wrap items-end justify-center gap-3 sm:mb-10 sm:gap-5"
      aria-hidden="true"
    >
      <div className="-rotate-6">
        <StickerFloat>
          <TravelSticker type="plane" size="sm" label="TRANSFERS" />
        </StickerFloat>
      </div>
      <div className="rotate-3">
        <StickerFloat delay>
          <TravelSticker type="bus" size="sm" label="DAY TRIPS" />
        </StickerFloat>
      </div>
      <div className="-rotate-3">
        <StickerFloat slow>
          <TravelSticker type="beach" size="sm" />
        </StickerFloat>
      </div>
      <div className="rotate-6 hidden sm:block">
        <StickerFloat delay>
          <TravelSticker type="matador" size="sm" />
        </StickerFloat>
      </div>
      <div className="-rotate-12 hidden md:block">
        <StickerFloat>
          <TravelSticker type="palm" size="sm" label="BEACH" />
        </StickerFloat>
      </div>
    </div>
  );
}
