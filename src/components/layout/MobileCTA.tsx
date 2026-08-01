"use client";

import { MessageCircle, Phone, Compass } from "lucide-react";
import { useI18n } from "@/i18n/LocaleProvider";
import { formatUi } from "@/i18n/index";
import { localizeHref } from "@/i18n/paths";
import { formatPhoneLink, formatWhatsAppLink } from "@/lib/utils";

export function MobileCTA() {
  const { siteConfig, ui, locale } = useI18n();
  const whatsappMessage = formatUi(ui.contact.whatsappQuote, {
    business: siteConfig.business.name,
  });

  return (
    <div className="mobile-cta-shell fixed inset-x-0 bottom-0 z-50 md:hidden">
      <div className="pointer-events-none absolute inset-x-0 -top-6 h-6 bg-gradient-to-t from-jamaica-black/80 to-transparent" />
      <div className="jamaica-stripe" />
      <div className="mobile-cta-bar flex gap-1.5 border-t border-white/10 bg-jamaica-black/95 px-2 pt-2 backdrop-blur-md">
        <a
          href={formatWhatsAppLink(siteConfig.business.whatsapp, whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-cta-btn flex min-h-[3rem] flex-[1.4] touch-manipulation items-center justify-center gap-1 rounded-2xl bg-jamaica-green py-2.5 text-xs font-bold leading-none text-white shadow-lg shadow-jamaica-green/25 active:scale-[0.97] sm:text-sm"
        >
          <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span className="truncate">{ui.common.whatsapp}</span>
        </a>
        <a
          href={localizeHref("/#tours", locale)}
          className="mobile-cta-btn flex min-h-[3rem] flex-1 touch-manipulation items-center justify-center gap-1 rounded-2xl bg-rasta-red py-2.5 text-xs font-bold leading-none text-white active:scale-[0.97] sm:text-sm"
        >
          <Compass className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span className="truncate">{ui.common.bookTour}</span>
        </a>
        <a
          href={formatPhoneLink(siteConfig.business.phone)}
          className="mobile-cta-btn flex min-h-[3rem] flex-1 touch-manipulation items-center justify-center gap-1 rounded-2xl bg-jamaica-gold py-2.5 text-xs font-bold leading-none text-jamaica-black active:scale-[0.97] sm:text-sm"
          aria-label={ui.common.call}
        >
          <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span className="sr-only sm:not-sr-only sm:truncate">{ui.common.call}</span>
        </a>
      </div>
    </div>
  );
}
