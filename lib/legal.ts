import type { Metadata } from "next";

export type LegalLang = "tr" | "en";
export type LegalSearchParams = Promise<Record<string, string | string[] | undefined>>;

export const LEGAL_UPDATED = "2026-11-13";
export const DATA_CONTROLLER = "Salih Salihoğlu (Simple Ideas)";

export async function readLegalLang(searchParams: LegalSearchParams): Promise<LegalLang> {
  const value = (await searchParams).lang;
  return (Array.isArray(value) ? value[0] : value) === "en" ? "en" : "tr";
}

export function legalMetadata(path: "/kvkk" | "/cookies", lang: LegalLang): Metadata {
  const title = path === "/kvkk"
    ? { tr: "KVKK Aydınlatma Metni", en: "Personal Data Notice (KVKK)" }
    : { tr: "Çerez ve Yerel Depolama Bilgilendirmesi", en: "Cookies and Local Storage" };
  const url = `https://www.simpleideas.net${path}`;
  return {
    title: `${title[lang]} · Simple Ideas`,
    description: lang === "tr"
      ? "Simple Ideas web sitesi, destek iletişimi ve ürünlerinde kişisel veriler, çerezler ve haklarınız."
      : "Personal data, cookies and your rights on the Simple Ideas website and in its products.",
    alternates: {
      canonical: lang === "en" ? `${url}?lang=en` : url,
      languages: { tr: url, en: `${url}?lang=en`, "x-default": url },
    },
  };
}
