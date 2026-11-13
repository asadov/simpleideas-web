import type { Metadata } from "next";
import { Starfield } from "@/components/Starfield";
import { StudioNav } from "@/components/StudioNav";
import { SiteFooter } from "@/components/SiteFooter";
import { TERMS, TERMS_EFFECTIVE, type TermsLang } from "./terms";
import subStyles from "../subpages.module.css";
import styles from "../privacy/privacy.module.css";

/*
 * Almost in Orbit terms of use. This address (https://www.simpleideas.net/terms) is entered in Google Play
 * as the app's Terms of Service; never move it without a 301.
 *
 * Same layout and language switch as the privacy policy (../privacy): English is the default and `?lang=tr`
 * selects Turkish, both rendered on the server. The look comes from the privacy page's CSS module on purpose,
 * so the two legal pages stay identical. The text lives in ./terms.tsx.
 */

const PAGE_PATH = "/terms";
const PAGE_URL = `https://www.simpleideas.net${PAGE_PATH}`;
const URLS: Record<TermsLang, string> = { en: PAGE_URL, tr: `${PAGE_URL}?lang=tr` };

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

async function readLang(searchParams: SearchParams): Promise<TermsLang> {
  const value = (await searchParams).lang;
  return (Array.isArray(value) ? value[0] : value) === "tr" ? "tr" : "en";
}

export async function generateMetadata({ searchParams }: { searchParams: SearchParams }): Promise<Metadata> {
  const lang = await readLang(searchParams);
  const copy = TERMS[lang];
  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
    alternates: {
      canonical: URLS[lang],
      languages: { en: URLS.en, tr: URLS.tr, "x-default": URLS.en },
    },
  };
}

export default async function TermsPage({ searchParams }: { searchParams: SearchParams }) {
  const lang = await readLang(searchParams);
  const copy = TERMS[lang];

  return (
    <>
      <Starfield variant="sub" />
      <div className={subStyles.nebula} aria-hidden="true" />
      <StudioNav current={PAGE_PATH} />
      <main className={subStyles.frame} lang={lang}>
        <header className={subStyles.pageHead}>
          <span className="node" aria-hidden="true" />
          <span className={subStyles.eyebrow} lang="en">{copy.eyebrow}</span>
          <h1 className={subStyles.h1}>{copy.title}</h1>
          <nav className={styles.languages} aria-label="Language / Dil">
            <a href={PAGE_PATH} hrefLang="en" lang="en" aria-current={lang === "en" ? "page" : undefined}>
              English
            </a>
            <a href={`${PAGE_PATH}?lang=tr`} hrefLang="tr" lang="tr" aria-current={lang === "tr" ? "page" : undefined}>
              Türkçe
            </a>
          </nav>
          <p className={subStyles.lede}>{copy.lede}</p>
          <p className={styles.meta}>
            {copy.effectiveLabel}: <time dateTime={TERMS_EFFECTIVE}>{copy.effectiveText}</time>. {copy.scope}
          </p>

          <div className={styles.summary}>
            <h2>{copy.summaryTitle}</h2>
            <ul>
              {copy.summary.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <nav className={styles.contents} aria-label={copy.contentsLabel}>
            <h2>{copy.contentsLabel}</h2>
            <ol>
              {copy.sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.title}</a>
                </li>
              ))}
            </ol>
          </nav>
        </header>

        {copy.sections.map((section) => (
          <section key={section.id} id={section.id} className={`${subStyles.section} ${styles.part}`}>
            <span className="node" aria-hidden="true" />
            <h2>{section.title}</h2>
            {section.body}
          </section>
        ))}
      </main>
      <SiteFooter variant="space" />
    </>
  );
}
