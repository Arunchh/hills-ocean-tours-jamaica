import type { ComponentType, ReactNode, SVGProps } from "react";

type StickerShellProps = {
  label?: string;
  children: ReactNode;
  className?: string;
  accent?: "green" | "gold" | "red" | "black";
};

const accentMap = {
  green: "from-jamaica-green to-jamaica-green-dark",
  gold: "from-jamaica-gold to-jamaica-gold-dark",
  red: "from-rasta-red to-rasta-red-dark",
  black: "from-jamaica-black to-jamaica-black-soft",
};

export function TravelStickerShell({
  label,
  children,
  className = "",
  accent = "green",
}: StickerShellProps) {
  return (
    <div
      className={`travel-sticker pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <div className="travel-sticker__body">
        <div className={`travel-sticker__header bg-gradient-to-br ${accentMap[accent]}`}>
          {label && <span className="travel-sticker__label">{label}</span>}
        </div>
        <div className="travel-sticker__art">{children}</div>
      </div>
    </div>
  );
}

export function StickerPlane(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 80 56" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M8 28c12-2 22-8 34-10 6-1 10 0 14 2l8 4-6 2-10 1 4 8-4 2-6-8-8 1-6 3-4-2 4-6-8 2-6-2z"
        fill="#009b3a"
        stroke="#007a2e"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path d="M52 18c4 2 8 6 10 10" stroke="#fcd116" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M54 16c3 3 6 7 7 11" stroke="#ce1126" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <circle cx="62" cy="14" r="2.5" fill="#fcd116" />
      <path d="M4 30h8M6 26h5M6 34h5" stroke="#007a2e" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

export function StickerVWBus(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 88 52" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="6" y="16" width="76" height="26" rx="8" fill="#fcd116" stroke="#d4a800" strokeWidth="1.5" />
      <path d="M6 28h76" stroke="#d4a800" strokeWidth="1" />
      <rect x="12" y="20" width="14" height="10" rx="2" fill="#87ceeb" stroke="#007a2e" strokeWidth="1" />
      <rect x="30" y="20" width="14" height="10" rx="2" fill="#87ceeb" stroke="#007a2e" strokeWidth="1" />
      <rect x="48" y="20" width="14" height="10" rx="2" fill="#87ceeb" stroke="#007a2e" strokeWidth="1" />
      <rect x="66" y="20" width="10" height="10" rx="2" fill="#87ceeb" stroke="#007a2e" strokeWidth="1" />
      <circle cx="24" cy="42" r="6" fill="#1a1a1a" stroke="#0a0a0a" strokeWidth="1.5" />
      <circle cx="24" cy="42" r="2.5" fill="#fcd116" />
      <circle cx="64" cy="42" r="6" fill="#1a1a1a" stroke="#0a0a0a" strokeWidth="1.5" />
      <circle cx="64" cy="42" r="2.5" fill="#fcd116" />
      <path d="M10 16c2-6 8-10 16-10h36c8 0 14 4 16 10" fill="#009b3a" stroke="#007a2e" strokeWidth="1.2" />
      <rect x="38" y="8" width="12" height="4" rx="1" fill="#ce1126" />
      <path d="M18 6l-2 4M70 6l2 4" stroke="#009b3a" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function StickerBeachSign(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 72 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M36 8v48" stroke="#8B6914" strokeWidth="3" strokeLinecap="round" />
      <path d="M36 56c-2 0-4 2-4 4h8c0-2-2-4-4-4z" fill="#8B6914" />
      <path
        d="M12 18h48l-4 14H16l-4-14z"
        fill="#009b3a"
        stroke="#007a2e"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path d="M18 32h36l-3 12H21l-3-12z" fill="#fcd116" stroke="#d4a800" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M22 12l14-6 14 6" stroke="#8B6914" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <text x="36" y="28" textAnchor="middle" fill="white" fontSize="7" fontWeight="700" fontFamily="system-ui,sans-serif">
        BEACH
      </text>
      <text x="36" y="42" textAnchor="middle" fill="#1a1a1a" fontSize="6" fontWeight="700" fontFamily="system-ui,sans-serif">
        2 km →
      </text>
      <circle cx="58" cy="10" r="5" fill="#ce1126" opacity="0.9" />
      <path d="M56 10h4M58 8v4" stroke="white" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

export function StickerMatador(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 72" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <ellipse cx="32" cy="66" rx="20" ry="3" fill="#0a0a0a" opacity="0.12" />
      <path d="M32 14c-8 0-14 6-14 14v8h28v-8c0-8-6-14-14-14z" fill="#ce1126" />
      <path d="M18 36h28v22c0 4-4 8-14 8s-14-4-14-8V36z" fill="#ce1126" stroke="#a50e1e" strokeWidth="1" />
      <path d="M32 8l6 10h-12l6-10z" fill="#1a1a1a" />
      <path d="M20 28c6-4 16-4 24 0" stroke="#fcd116" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M46 20c8 4 12 12 10 20M18 20c-8 4-12 12-10 20"
        stroke="#fcd116"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="32" cy="22" r="3" fill="#f5edd6" stroke="#d4a800" strokeWidth="0.8" />
      <path d="M44 48l16-8M20 48L4 40" stroke="#009b3a" strokeWidth="2" strokeLinecap="round" />
      <circle cx="48" cy="38" r="4" fill="#fcd116" stroke="#d4a800" strokeWidth="1" />
    </svg>
  );
}

export function StickerPalm(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 56 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M28 24v36" stroke="#8B6914" strokeWidth="3" strokeLinecap="round" />
      <path d="M28 24c-14-10-20-4-18 2 8-2 14 0 18 6" fill="#009b3a" stroke="#007a2e" strokeWidth="0.8" />
      <path d="M28 20c14-8 22-2 20 4-10-2-16 2-20 8" fill="#009b3a" stroke="#007a2e" strokeWidth="0.8" />
      <path d="M28 22c-10-12-4-20 2-18-2 10 0 16 6 20" fill="#007a2e" stroke="#007a2e" strokeWidth="0.8" />
      <path d="M28 22c10-12 16-4 14 2-8-2-12 2-14 8" fill="#007a2e" stroke="#007a2e" strokeWidth="0.8" />
      <ellipse cx="28" cy="58" rx="12" ry="3" fill="#fcd116" opacity="0.5" />
      <circle cx="40" cy="48" r="4" fill="#ce1126" opacity="0.85" />
    </svg>
  );
}

export function StickerPassport(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 52 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="6" y="4" width="40" height="56" rx="4" fill="#009b3a" stroke="#007a2e" strokeWidth="1.5" />
      <rect x="10" y="8" width="32" height="48" rx="2" fill="#007a2e" opacity="0.3" />
      <circle cx="26" cy="28" r="10" stroke="#fcd116" strokeWidth="1.5" fill="none" />
      <text x="26" y="31" textAnchor="middle" fill="#fcd116" fontSize="8" fontWeight="700" fontFamily="system-ui,sans-serif">
        JA
      </text>
      <path d="M14 46h24M14 50h16" stroke="#fcd116" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <rect x="38" y="2" width="12" height="12" rx="6" fill="#ce1126" />
      <path d="M42 8h4M44 6v4" stroke="white" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

export type StickerType = "plane" | "bus" | "beach" | "matador" | "palm" | "passport";

const stickerArt: Record<StickerType, ComponentType<SVGProps<SVGSVGElement>>> = {
  plane: StickerPlane,
  bus: StickerVWBus,
  beach: StickerBeachSign,
  matador: StickerMatador,
  palm: StickerPalm,
  passport: StickerPassport,
};

const stickerLabels: Partial<Record<StickerType, string>> = {
  plane: "FLY MBJ",
  bus: "TOUR BUS",
  beach: "BEACH",
  matador: "ADVENTURE",
  palm: "ISLAND",
  passport: "JAMAICA",
};

const stickerAccents: Record<StickerType, StickerShellProps["accent"]> = {
  plane: "green",
  bus: "gold",
  beach: "green",
  matador: "red",
  palm: "green",
  passport: "black",
};

type TravelStickerProps = {
  type: StickerType;
  label?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizeMap = {
  sm: "travel-sticker--sm",
  md: "travel-sticker--md",
  lg: "travel-sticker--lg",
};

export function TravelSticker({ type, label, className = "", size = "md" }: TravelStickerProps) {
  const Art = stickerArt[type];
  return (
    <TravelStickerShell
      label={label ?? stickerLabels[type]}
      accent={stickerAccents[type]}
      className={`${sizeMap[size]} ${className}`}
    >
      <Art className="h-full w-full" />
    </TravelStickerShell>
  );
}
