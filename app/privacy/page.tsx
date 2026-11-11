import type { Metadata } from "next";
import { Starfield } from "@/components/Starfield";
import { StudioNav } from "@/components/StudioNav";
import { SiteFooter } from "@/components/SiteFooter";
import { POLICY, POLICY_UPDATED, type PolicyLang } from "./policy";
import subStyles from "../subpages.module.css";
import styles from "./privacy.module.css";

/*
 * Almost in Orbit privacy policy. The game opens exactly https://simpleideas.net/privacy
 * (MonetizationConfig.privacyPolicyUrl); the same address is in App Store Connect, Google Play and the
 * AdMob consent message. Never move it without a 301.
 *
 * English is the default; `?lang=tr` selects Turkish. Both languages come from the server HTML
 * (no client-side switch), like the Pixel Art Collect policy. The text lives in ./policy.tsx.
 */

const PAGE_PATH = "/privacy";
const PAGE_URL = `https://www.simpleideas.net${PAGE_PATH}`;
const URLS: Record<PolicyLang, string> = { en: PAGE_URL, tr: `${PAGE_URL}?lang=tr` };

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

async function readLang(searchParams: SearchParams): Promise<PolicyLang> {
  const value = (await searchParams).lang;
  return (Array.isArray(value) ? value[0] : value) === "tr" ? "tr" : "en";
}

export async function generateMetadata({ searchParams }: { searchParams: SearchParams }): Promise<Metadata> {
  const lang = await readLang(searchParams);
  const copy = POLICY[lang];
  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
    alternates: {
      canonical: URLS[lang],
      languages: { en: URLS.en, tr: URLS.tr, "x-default": URLS.en },
    },
  };
}

export default async function PrivacyPage({ searchParams }: { searchParams: SearchParams }) {
  const lang = await readLang(searchParams);
  const copy = POLICY[lang];

  return (
    <>
      <Starfield variant="sub" />
      <div className={subStyles.nebula} aria-hidden="true" />
      <StudioNav current="/privacy" />
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
            {copy.updatedLabel}: <time dateTime={POLICY_UPDATED}>{copy.updatedText}</time>. {copy.scope}
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
          <section
            key={section.id}
            id={section.id}
            className={`${subStyles.section} ${styles.part} ${section.id === "data" ? styles.wide : ""}`}
          >
            <span className="node" aria-hidden="true" />
            <h2>{section.title}</h2>
            {section.id === "data" ? (
              <>
                <div className={styles.tableWrap}>
                  <table className={styles.table} aria-label={copy.tableLabel}>
                    <thead>
                      <tr>
                        <th scope="col">{copy.tableHead.data}</th>
                        <th scope="col">{copy.tableHead.includes}</th>
                        <th scope="col">{copy.tableHead.why}</th>
                        <th scope="col">{copy.tableHead.who}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {copy.rows.map((row) => (
                        <tr key={row.data}>
                          <th scope="row">{row.data}</th>
                          <td data-label={copy.tableHead.includes}>{row.includes}</td>
                          <td data-label={copy.tableHead.why}>{row.why}</td>
                          <td data-label={copy.tableHead.who}>{row.who}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className={styles.tableNote}>{copy.notCollected}</p>
              </>
            ) : (
              section.body
            )}
          </section>
        ))}
      </main>
      <SiteFooter variant="space" />
    </>
  );
}
