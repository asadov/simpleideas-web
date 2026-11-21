import type { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { StudioNav } from "./StudioNav";
import { LEGAL_UPDATED, type LegalLang } from "@/lib/legal";
import styles from "./LegalShell.module.css";

export function LegalShell({ children, lang, path, title, intro }: {
  children: ReactNode;
  lang: LegalLang;
  path: "/kvkk" | "/cookies";
  title: string;
  intro: string;
}) {
  return (
    <div className={styles.page} lang={lang}>
      <StudioNav variant="themed" current={path} />
      <header className={styles.bar}>
        <nav className={styles.languages} aria-label="Dil / Language">
          <a href={`${path}?lang=tr`} lang="tr" hrefLang="tr" aria-current={lang === "tr" ? "page" : undefined}>TR</a>
          <a href={`${path}?lang=en`} lang="en" hrefLang="en" aria-current={lang === "en" ? "page" : undefined}>EN</a>
        </nav>
      </header>
      <main className={`${styles.main} spine-heads`}>
        <div className="spine" aria-hidden="true" />
        <header className={styles.heading}>
          <p className={styles.eyebrow}>{lang === "tr" ? "Gizlilik ve verileriniz" : "Privacy and your data"}</p>
          <h1>{title}</h1>
          <p className={styles.intro}>{intro}</p>
          <p className={styles.date}>
            {lang === "tr" ? "Son güncelleme: " : "Last updated: "}
            <time dateTime={LEGAL_UPDATED}>{lang === "tr" ? "13 Kasım 2026" : "13 November 2026"}</time>
          </p>
        </header>
        <article className={styles.article}>{children}</article>
      </main>
      <SiteFooter variant="themed" lang={lang} />
    </div>
  );
}
