import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/site";
import { PolicyEn } from "./PolicyEn";
import { PolicyTr } from "./PolicyTr";
import styles from "./privacy.module.css";

/*
 * Pixel Art Collect privacy policy. The game opens this address as-is for English and appends exactly
 * `?lang=tr` for Turkish, so both languages must come from the server HTML (no client-side switch).
 * The address is written into the app binary, App Store Connect and AdMob: never move it without a 301.
 */

const PAGE_PATH = "/collect-pixel-art/privacy";
const PAGE_URL = `https://www.simpleideas.net${PAGE_PATH}`;

type Lang = "en" | "tr";
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

async function readLang(searchParams: SearchParams): Promise<Lang> {
  const value = (await searchParams).lang;
  return (Array.isArray(value) ? value[0] : value) === "tr" ? "tr" : "en";
}

const COPY = {
  en: {
    title: "Privacy Policy · Pixel Art Collect",
    description: "How the Pixel Art Collect game for iPhone and iPad handles your information.",
    url: PAGE_URL,
  },
  tr: {
    title: "Gizlilik Politikası · Pixel Art Collect",
    description: "iPhone ve iPad için Pixel Art Collect oyununun bilgilerinizi nasıl işlediği.",
    url: `${PAGE_URL}?lang=tr`,
  },
} as const;

export async function generateMetadata({ searchParams }: { searchParams: SearchParams }): Promise<Metadata> {
  const copy = COPY[await readLang(searchParams)];
  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: copy.url,
      languages: { en: COPY.en.url, tr: COPY.tr.url, "x-default": COPY.en.url },
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3e8cd" },
    { media: "(prefers-color-scheme: dark)", color: "#1c1814" },
  ],
};

export default async function PacPrivacyPage({ searchParams }: { searchParams: SearchParams }) {
  const lang = await readLang(searchParams);

  return (
    <div className={styles.page} lang={lang}>
      <header className={styles.bar}>
        <div className={styles.wrap}>
          <p className={styles.brand}>Pixel Art Collect</p>
          <nav className={styles.lang} aria-label="Language / Dil">
            <a href={PAGE_PATH} hrefLang="en" lang="en" aria-current={lang === "en" ? "page" : undefined}>
              EN
            </a>
            <a href={`${PAGE_PATH}?lang=tr`} hrefLang="tr" lang="tr" aria-current={lang === "tr" ? "page" : undefined}>
              TR
            </a>
          </nav>
        </div>
      </header>

      <main className={`${styles.wrap} ${styles.main}`}>{lang === "tr" ? <PolicyTr /> : <PolicyEn />}</main>

      <footer className={styles.foot}>
        <div className={styles.wrap}>
          <p>
            © 2026 <Link href="/">Simple Ideas</Link> · <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
