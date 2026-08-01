"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Locale } from "./config";
import type { LocaleContent, SiteConfig, UiMessages } from "./types";

type I18nContextValue = LocaleContent & {
  locale: Locale;
  ui: UiMessages;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function LocaleProvider({
  locale,
  ui,
  content,
  children,
}: {
  locale: Locale;
  ui: UiMessages;
  content: LocaleContent;
  children: ReactNode;
}) {
  return (
    <I18nContext.Provider value={{ locale, ui, ...content }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nContextValue {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within LocaleProvider");
  }
  return context;
}

export function useSiteConfig(): SiteConfig {
  return useI18n().siteConfig;
}

export function useUi(): UiMessages {
  return useI18n().ui;
}
