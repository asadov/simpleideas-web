import type { Metadata } from "next";
import type { ReactNode } from "react";
import { shareMetadata } from "@/lib/share";
import type { LegalLang } from "@/lib/legal";
import { SledlingsShell } from "./SledlingsShell";
import styles from "./sledlings.module.css";

/*
 * The layout of the Sledlings legal pages (privacy policy, terms of service, account deletion): title, language
 * switch, effective date, a short summary, the list of sections and the sections themselves. English is the
 * default and `?lang=tr` serves Turkish, both rendered on the server, like the site's other policies.
 */

export type LegalSection = { id: string; title: string; body: ReactNode };

export type LegalCopy = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  /** "Sledlings: Kart Rush · Effective date: …" */
  meta: ReactNode;
  intro: ReactNode;
  summaryLabel: string;
  summary: ReactNode[];
  contentsLabel: string;
  sections: LegalSection[];
};

export type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export async function readLang(searchParams: SearchParams): Promise<LegalLang> {
  const value = (await searchParams).lang;
  return (Array.isArray(value) ? value[0] : value) === "tr" ? "tr" : "en";
}

export function legalDocMetadata(path: string, copy: LegalCopy, lang: LegalLang): Metadata {
  const url = `https://www.simpleideas.net${path}`;
  const urls: Record<LegalLang, string> = { en: url, tr: `${url}?lang=tr` };
  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
    alternates: {
      canonical: urls[lang],
      languages: { en: urls.en, tr: urls.tr, "x-default": urls.en },
    },
    ...shareMetadata({
      card: "sledlings",
      title: copy.metaTitle,
      description: copy.metaDescription,
      url: urls[lang],
      lang,
    }),
  };
}

export function LegalDoc({ path, copy, lang }: { path: string; copy: LegalCopy; lang: LegalLang }) {
  return (
    <SledlingsShell lang={lang}>
      <article>
        <h1>{copy.title}</h1>
        <nav className={styles.languages} aria-label="Language / Dil">
          <a href={path} hrefLang="en" lang="en" aria-current={lang === "en" ? "page" : undefined}>
            English
          </a>
          <a href={`${path}?lang=tr`} hrefLang="tr" lang="tr" aria-current={lang === "tr" ? "page" : undefined}>
            Türkçe
          </a>
        </nav>
        <p className={styles.meta}>{copy.meta}</p>

        <p>{copy.intro}</p>

        <div className={styles.box}>
          <p>
            <strong>{copy.summaryLabel}</strong>
          </p>
          <ul>
            {copy.summary.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <nav className={styles.contents} aria-labelledby="contents-title">
          <h2 id="contents-title">{copy.contentsLabel}</h2>
          <ol>
            {copy.sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.title}</a>
              </li>
            ))}
          </ol>
        </nav>

        {copy.sections.map((section) => (
          <section key={section.id} id={section.id}>
            <h2>{section.title}</h2>
            {section.body}
          </section>
        ))}
      </article>
    </SledlingsShell>
  );
}
