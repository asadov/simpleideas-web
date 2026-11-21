import type { ReactNode } from "react";
import { DocumentLang } from "@/components/DocumentLang";
import { SiteFooter } from "@/components/SiteFooter";
import { StudioNav } from "@/components/StudioNav";
import type { LegalLang } from "@/lib/legal";
import styles from "./tempo.module.css";

/** Studio nav (in the Tempo palette), content column and studio footer (same palette) shared by the Tempo pages. */
export function TempoShell({ children, lang = "en" }: { children: ReactNode; lang?: LegalLang }) {
  return (
    <div className={styles.page} lang={lang}>
      <DocumentLang lang={lang} />
      <StudioNav variant="themed" current="/tempo" />

      <main className={`${styles.wrap} ${styles.main} spine-heads`}>
        <div className="spine" aria-hidden="true" />
        {children}
      </main>

      <SiteFooter variant="themed" privacyHref="/tempo/privacy" showTerms={false} lang={lang} />
    </div>
  );
}
