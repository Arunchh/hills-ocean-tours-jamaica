"use client";

import { useEffect } from "react";
import { siteConfig } from "@/config/site-config";

export function TawkWidget() {
  const { tawkPropertyId, tawkWidgetId } = siteConfig.communications;

  useEffect(() => {
    if (!tawkPropertyId || !tawkWidgetId) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://embed.tawk.to/${tawkPropertyId}/${tawkWidgetId}`;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [tawkPropertyId, tawkWidgetId]);

  return null;
}
