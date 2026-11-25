import type { Metadata } from "next";
import { shareMetadata } from "./share";

export type LegalLang = "tr" | "en";
export type LegalSearchParams = Promise<Record<string, string | string[] | undefined>>;

export const LEGAL_UPDATED = "2026-11-25";
export const DATA_CONTROLLER = "Salih Salihoğlu (Simple Ideas)";

export async function readLegalLang(searchParams: LegalSearchParams): Promise<LegalLang> {
  const value = (await searchParams).lang;
  return (Array.isArray(value) ? value[0] : value) === "en" ? "en" : "tr";
}

export function legalMetadata(path: "/kvkk" | "/cookies", lang: LegalLang): Metadata {
  const title = path === "/kvkk"
    ? { tr: "KVKK Aydınlatma Metni", en: "Personal Data Notice (KVKK)" }
    : { tr: "Çerez ve Yerel Depolama Bilgilendirmesi", en: "Cookies and Local Storage" };
  const description = path === "/kvkk"
    ? {
        tr: "Simple Ideas web sitesinde ve destek yazışmalarında kişisel verilerin nasıl işlendiği, veri sorumlusu ve KVKK kapsamındaki haklarınız.",
        en: "How personal data is handled on the Simple Ideas website and in support correspondence, who the data controller is, and your rights under Türkiye’s KVKK.",
      }
    : {
        tr: "simpleideas.net reklam veya analitik çerezi kullanmaz. Tarayıcınızda tutulan tek bildirim kaydı ve nasıl silineceği.",
        en: "simpleideas.net uses no advertising or analytics cookies. The single notice record kept in your browser, and how to remove it.",
      };
  const url = `https://www.simpleideas.net${path}`;
  const canonical = lang === "en" ? `${url}?lang=en` : url;
  return {
    title: `${title[lang]} · Simple Ideas`,
    description: description[lang],
    alternates: {
      canonical,
      languages: { tr: url, en: `${url}?lang=en`, "x-default": url },
    },
    ...shareMetadata({ card: "studio", title: title[lang], description: description[lang], url: canonical, lang }),
  };
}
