import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { JamaicaStripe } from "@/components/ui/JamaicaStripe";

type SubpageHeroProps = {
  title: string;
  description?: string;
  backHref: string;
  backLabel: string;
  eyebrow?: string;
};

export function SubpageHero({ title, description, backHref, backLabel, eyebrow }: SubpageHeroProps) {
  return (
    <div className="safe-top rasta-gradient-bg pb-10 pt-24 sm:pb-12 sm:pt-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Link
          href={backHref}
          className="mb-6 inline-flex min-h-12 touch-manipulation items-center gap-2 rounded-lg px-2 text-sm font-semibold text-jamaica-gold active:text-white sm:hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          {backLabel}
        </Link>
        {eyebrow && (
          <span className="rounded-full bg-jamaica-gold/20 px-3 py-1 text-xs font-bold text-jamaica-gold">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 font-display text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-base leading-relaxed text-jamaica-gold-light/90 sm:text-lg">
            {description}
          </p>
        )}
      </div>
      <JamaicaStripe variant="flag" className="mt-10" />
    </div>
  );
}
