"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { useI18n } from "@/i18n/LocaleProvider";
import { localizeHref } from "@/i18n/paths";

const STORAGE_KEY = "promo-banner-dismissed";

export function PromoBanner() {
  const { siteConfig, ui, locale } = useI18n();
  const { promoBanner } = siteConfig;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!promoBanner.enabled) return;
    const dismissed = sessionStorage.getItem(STORAGE_KEY);
    setVisible(!dismissed);
  }, [promoBanner.enabled]);

  if (!promoBanner.enabled || !visible) return null;

  const dismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  };

  return (
    <div className="safe-top fixed inset-x-0 top-0 z-[60] border-b border-white/10 bg-jamaica-green/95 text-white backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-2.5 sm:px-6">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs font-semibold leading-snug sm:text-sm">{promoBanner.message}</p>
            {promoBanner.terms && (
              <p className="mt-1 text-[10px] leading-snug text-white/75 sm:text-xs">
                {promoBanner.terms}
              </p>
            )}
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <Link
              href={localizeHref(promoBanner.ctaHref, locale)}
              className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold hover:bg-white/25"
            >
              {promoBanner.ctaText}
            </Link>
            <button
              type="button"
              onClick={dismiss}
              className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/15"
              aria-label={ui.sections.promoBanner.dismiss}
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
