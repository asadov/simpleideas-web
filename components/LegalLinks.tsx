import { CookieSettingsButton } from "./CookieNotice";
import type { LegalLang } from "@/lib/legal";
import styles from "./LegalLinks.module.css";

/** Shared by product shells with their own footer, including app-linked policy URLs. */
export function LegalLinks({ lang = "en" }: { lang?: LegalLang }) {
  return (
    <nav className={styles.links} aria-label={lang === "tr" ? "Gizlilik bağlantıları" : "Privacy links"}>
      <a href={`/kvkk?lang=${lang}`}>{lang === "tr" ? "KVKK aydınlatma metni" : "KVKK data notice"}</a>
      <a href={`/cookies?lang=${lang}`}>{lang === "tr" ? "Çerez bilgileri" : "Cookie information"}</a>
      <CookieSettingsButton lang={lang} />
    </nav>
  );
}
