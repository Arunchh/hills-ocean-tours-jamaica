"use client";

import { useEffect } from "react";
import { siteConfig } from "@/config/site-config";

declare global {
  interface Window {
    Tawk_API?: {
      customStyle?: {
        visibility?: {
          desktop?: { position?: string; xOffset?: number; yOffset?: number };
          mobile?: { position?: string; xOffset?: number; yOffset?: number };
        };
      };
    };
    Tawk_LoadStart?: Date;
  }
}

/** Sticky mobile CTA bar height + safe area — keeps tawk bubble above WhatsApp/Call bar */
const TAWK_MOBILE_Y_OFFSET = 72;

export function TawkWidget() {
  const { tawkPropertyId, tawkWidgetId } = siteConfig.communications;

  useEffect(() => {
    if (!tawkPropertyId || !tawkWidgetId) return;

    const scriptSrc = `https://embed.tawk.to/${tawkPropertyId}/${tawkWidgetId}`;
    if (document.querySelector(`script[src="${scriptSrc}"]`)) return;

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();
    window.Tawk_API.customStyle = {
      visibility: {
        desktop: { position: "br", xOffset: 20, yOffset: 20 },
        mobile: {
          position: "br",
          xOffset: 12,
          yOffset: TAWK_MOBILE_Y_OFFSET,
        },
      },
    };

    const script = document.createElement("script");
    script.async = true;
    script.src = scriptSrc;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [tawkPropertyId, tawkWidgetId]);

  return null;
}
