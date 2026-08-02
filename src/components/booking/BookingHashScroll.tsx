"use client";

import { useEffect } from "react";

/** Scroll to #book when landing on tour pages with hash (e.g. from catalog). */
export function BookingHashScroll() {
  useEffect(() => {
    if (typeof window === "undefined" || window.location.hash !== "#book") return;

    const scroll = () => {
      const el = document.getElementById("book");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    const t = window.setTimeout(scroll, 100);
    return () => window.clearTimeout(t);
  }, []);

  return null;
}
