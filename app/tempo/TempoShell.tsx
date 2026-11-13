import Link from "next/link";
import type { ReactNode } from "react";
import { CONTACT_EMAIL } from "@/lib/site";
import { LegalLinks } from "@/components/LegalLinks";
import { StudioNav } from "@/components/StudioNav";
import type { LegalLang } from "@/lib/legal";
import styles from "./tempo.module.css";

/** Studio nav (in the Tempo palette), content column and footer shared by the Tempo pages. */
export function TempoShell({ children, lang = "en" }: { children: ReactNode; lang?: LegalLang }) {
  const tr = lang === "tr";
  return (
    <div className={styles.page} lang={lang}>
      <StudioNav variant="themed" current="/tempo" />

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
