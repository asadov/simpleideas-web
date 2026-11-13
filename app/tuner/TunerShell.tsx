import Link from "next/link";
import type { ReactNode } from "react";
import { CONTACT_EMAIL } from "@/lib/site";
import { LegalLinks } from "@/components/LegalLinks";
import { StudioNav } from "@/components/StudioNav";
import type { LegalLang } from "@/lib/legal";
import styles from "./tuner.module.css";

/** Studio nav (in the Tuner Pro Studio palette), content column and footer shared by the Tuner Pro Studio pages. */
export function TunerShell({ children, lang = "en" }: { children: ReactNode; lang?: LegalLang }) {
  const tr = lang === "tr";
  return (
    <div className={styles.page} lang={lang}>
      <StudioNav variant="themed" current="/tuner" />

      <main className={`${styles.wrap} ${styles.main}`}>{children}</main>

      <footer className={styles.foot}>
        <div className={styles.wrap}>
          <p>
            © 2026 <Link href="/">Simple Ideas</Link> · <Link href={tr ? "/tuner/privacy?lang=tr" : "/tuner/privacy"}>{tr ? "Gizlilik" : "Privacy"}</Link> ·{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
          <LegalLinks lang={lang} />
        </div>
      </footer>
    </div>
  );
}
