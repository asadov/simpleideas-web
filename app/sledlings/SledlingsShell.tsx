import type { ReactNode } from "react";
import { DocumentLang } from "@/components/DocumentLang";
import { SiteFooter } from "@/components/SiteFooter";
import { StudioNav } from "@/components/StudioNav";
import type { LegalLang } from "@/lib/legal";
import styles from "./sledlings.module.css";

/**
 * Studio nav (in the Sledlings palette), content column and studio footer (same palette) shared by the
 * Sledlings pages: the game page, its privacy policy, terms of service and account deletion page.
 */
export function SledlingsShell({ children, lang = "en" }: { children: ReactNode; lang?: LegalLang }) {
  return (
    <div className={styles.page} lang={lang}>
      <DocumentLang lang={lang} />
      <StudioNav variant="themed" current="/sledlings" />

      <main className={`${styles.wrap} ${styles.main} spine-heads`}>
        <div className="spine" aria-hidden="true" />
        {children}
      </main>

      <SiteFooter
        variant="themed"
        privacyHref="/sledlings/privacy"
        termsHref="/sledlings/terms"
        lang={lang}
      />
    </div>
  );
}
