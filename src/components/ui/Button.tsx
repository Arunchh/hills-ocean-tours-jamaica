import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "whatsapp" | "gold";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  external?: boolean;
  fullWidthMobile?: boolean;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-rasta-red text-white shadow-lg shadow-rasta-red/30 hover:bg-rasta-red-dark active:bg-rasta-red-dark",
  secondary:
    "bg-jamaica-green text-white shadow-lg shadow-jamaica-green/25 hover:bg-jamaica-green-dark active:bg-jamaica-green-dark",
  gold:
    "bg-jamaica-gold text-jamaica-black shadow-lg shadow-jamaica-gold/30 hover:bg-jamaica-gold-dark active:bg-jamaica-gold-dark",
  outline:
    "border-2 border-jamaica-gold/80 bg-jamaica-black/20 text-white backdrop-blur-sm hover:bg-jamaica-gold/20 active:bg-jamaica-gold/20",
  whatsapp:
    "bg-jamaica-green text-white shadow-lg shadow-jamaica-green/25 hover:bg-jamaica-green-dark active:bg-jamaica-green-dark",
};

export function Button({
  href,
  onClick,
  variant = "primary",
  children,
  className = "",
  external = false,
  fullWidthMobile = false,
}: ButtonProps) {
  const widthClass = fullWidthMobile ? "w-full sm:w-auto" : "";
  const classes = `inline-flex min-h-12 touch-manipulation items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-bold transition-all duration-200 active:scale-[0.98] sm:text-sm sm:hover:-translate-y-0.5 ${variants[variant]} ${widthClass} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
