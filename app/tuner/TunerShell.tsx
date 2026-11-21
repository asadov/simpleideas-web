import type { ReactNode } from "react";
import { DocumentLang } from "@/components/DocumentLang";
import { SiteFooter } from "@/components/SiteFooter";
import { StudioNav } from "@/components/StudioNav";
import type { LegalLang } from "@/lib/legal";
import styles from "./tuner.module.css";

/** Studio nav (in the Tuner Pro Studio palette), content column and studio footer (same palette) shared by the Tuner Pro Studio pages. */
export function TunerShell({ children, lang = "en" }: { children: ReactNode; lang?: LegalLang }) {
  return (
    <div className={styles.page} lang={lang}>
      <DocumentLang lang={lang} />
      <StudioNav variant="themed" current="/tuner" />

      <main className={`${styles.wrap} ${styles.main} spine-heads`}>
        <div className="spine" aria-hidden="true" />
        {children}
      </main>

      <SiteFooter variant="themed" privacyHref="/tuner/privacy" showTerms={false} lang={lang} />
    </div>
  );
}
