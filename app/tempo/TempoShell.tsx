import Link from "next/link";
import type { ReactNode } from "react";
import { CONTACT_EMAIL } from "@/lib/site";
import { LegalLinks } from "@/components/LegalLinks";
import type { LegalLang } from "@/lib/legal";
import styles from "./tempo.module.css";

/** Top bar, content column and footer shared by the Tempo pages. */
export function TempoShell({ children, lang = "en" }: { children: ReactNode; lang?: LegalLang }) {
  const tr = lang === "tr";
  return (
    <div className={styles.page} lang={lang}>
      <header className={styles.bar}>
        <div className={styles.wrap}>
          <p className={styles.brand}>
            <Link href="/tempo" style={{ color: "inherit", textDecoration: "none" }}>
              Tempo
            </Link>
          </p>
          <Link href="/" className={styles.home}>
            Simple Ideas
          </Link>
        </div>
      </header>

      <main className={`${styles.wrap} ${styles.main}`}>{children}</main>

      <footer className={styles.foot}>
        <div className={styles.wrap}>
          <p>
            © 2026 <Link href="/">Simple Ideas</Link> · <Link href={tr ? "/tempo/privacy?lang=tr" : "/tempo/privacy"}>{tr ? "Gizlilik" : "Privacy"}</Link> ·{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
          <LegalLinks lang={lang} />
        </div>
      </footer>
    </div>
  );
}
