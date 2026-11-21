"use client";

import { useEffect } from "react";

/**
 * The root layout renders <html lang="en"> for every page, because a layout cannot read ?lang.
 * Pages shown in Turkish set the document language here once they load (the page content itself
 * already carries lang="tr"), and hand it back to English when the visitor moves on to another page.
 */
export function DocumentLang({ lang }: { lang: "en" | "tr" }) {
  useEffect(() => {
    if (lang === "en") return;
    const root = document.documentElement;
    root.lang = lang;
    return () => {
      root.lang = "en";
    };
  }, [lang]);
  return null;
}
