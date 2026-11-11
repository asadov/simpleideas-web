import Link from "next/link";
import type { ReactNode } from "react";
import { CookieSettingsButton } from "./CookieNotice";
import { CONTACT_EMAIL } from "@/lib/site";
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
      <header className={styles.bar}>
        <Link href="/" className={styles.brand}>Simple Ideas</Link>
        <nav className={styles.languages} aria-label="Dil / Language">
          <a href={`${path}?lang=tr`} lang="tr" hrefLang="tr" aria-current={lang === "tr" ? "page" : undefined}>TR</a>
          <a href={`${path}?lang=en`} lang="en" hrefLang="en" aria-current={lang === "en" ? "page" : undefined}>EN</a>
        </nav>
      </header>
      <main className={styles.main}>
        <header className={styles.heading}>
          <p className={styles.eyebrow}>{lang === "tr" ? "Gizlilik ve verileriniz" : "Privacy and your data"}</p>
          <h1>{title}</h1>
          <p className={styles.intro}>{intro}</p>
          <p className={styles.date}>
            {lang === "tr" ? "Son güncelleme: " : "Last updated: "}
            <time dateTime={LEGAL_UPDATED}>{lang === "tr" ? "11 Kasım 2026" : "11 November 2026"}</time>
          </p>
        </header>
        <article className={styles.article}>{children}</article>
      </main>
      <footer className={styles.footer}>
        <p>© 2026 Simple Ideas</p>
        <nav aria-label={lang === "tr" ? "Gizlilik bağlantıları" : "Privacy links"}>
          <a href={`/kvkk?lang=${lang}`}>{lang === "tr" ? "KVKK aydınlatma metni" : "Personal data notice"}</a>
          <a href={`/cookies?lang=${lang}`}>{lang === "tr" ? "Çerez bilgileri" : "Cookie information"}</a>
          <CookieSettingsButton lang={lang} />
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </nav>
      </footer>
    </div>
  );
}
