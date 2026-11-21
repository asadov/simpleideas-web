import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/site";
import type { LegalLang } from "@/lib/legal";
import { StoreBadges } from "./StoreBadges";
import { CookieSettingsButton } from "./CookieNotice";
import styles from "./SiteFooter.module.css";

type FooterLink = {
  href: string;
  /** Product names stay English (and lang="en", so Turkish uppercase does not turn "i" into "İ"). */
  label: string | Record<LegalLang, string>;
  /** The page has a Turkish version at ?lang=tr. */
  localized?: boolean;
  /** Plain <a> with an explicit ?lang: these pages default to Turkish and read the language on the server. */
  plain?: boolean;
};

const LINKS: FooterLink[] = [
  { href: "/", label: "Almost in Orbit" },
  { href: "/collect-pixel-art", label: "Pixel Art Collect" },
  { href: "/tempo", label: "Tempo" },
  { href: "/tuner", label: "Tuner Pro Studio" },
  { href: "/press", label: { en: "Press kit", tr: "Basın kiti" } },
  { href: "/privacy", label: { en: "Privacy", tr: "Gizlilik" }, localized: true },
  { href: "/terms", label: { en: "Terms", tr: "Kullanım şartları" }, localized: true },
  { href: "/support", label: { en: "Support", tr: "Destek" } },
  { href: "/kvkk", label: { en: "KVKK data notice", tr: "KVKK aydınlatma metni" }, localized: true, plain: true },
  { href: "/cookies", label: { en: "Cookies", tr: "Çerezler" }, localized: true, plain: true },
];

const FINE: Record<LegalLang, string> = {
  en: "© 2026 Simple Ideas. Apple and the App Store are trademarks of Apple Inc. Google Play is a trademark of Google LLC.",
  tr: "© 2026 Simple Ideas. Apple ve App Store, Apple Inc.’in ticari markalarıdır. Google Play, Google LLC’nin ticari markasıdır.",
};

/**
 * The studio footer, on every page.
 * `variant`: space (Almost in Orbit and studio pages, with the store badges), museum (Pixel Art Collect),
 * themed (pages with their own palette: Tempo, Tuner Pro Studio, the policies; coloured from the host page's
 * --line / --text / --muted / --accent or --link, like the nav's themed variant).
 * `privacyHref`: each game has its own policy, so the "Privacy" link follows the page's game.
 * `showTerms`: the terms of use (/terms) are Almost in Orbit's only; pages of other games hide the link.
 * `lang`: Turkish pages get Turkish labels, and links to pages with a Turkish version open that version.
 */
export function SiteFooter({
  variant = "space",
  privacyHref = "/privacy",
  showTerms = true,
  lang = "en",
}: {
  variant?: "space" | "museum" | "themed";
  privacyHref?: string;
  showTerms?: boolean;
  lang?: LegalLang;
}) {
  const hrefFor = (link: FooterLink) => {
    const base = link.href === "/privacy" ? privacyHref : link.href;
    if (link.plain) return `${base}?lang=${lang}`;
    return link.localized && lang === "tr" ? `${base}?lang=tr` : base;
  };

  return (
    <footer className={`${styles.footer} ${styles[variant]}`} lang={lang}>
      <div className={styles.inner}>
        <div className={styles.brandCol}>
          <p className={styles.brand} lang="en">
            Simple Ideas
          </p>
          {variant === "space" ? (
            <div className={styles.badges}>
              <StoreBadges size="small" />
            </div>
          ) : null}
          <p className={styles.fine}>{FINE[lang]}</p>
        </div>
        <ul className={styles.links}>
          {LINKS.filter((link) => showTerms || link.href !== "/terms").map((link) => {
            const name = typeof link.label === "string";
            const label = typeof link.label === "string" ? link.label : link.label[lang];
            return (
              <li key={link.href}>
                {link.plain ? (
                  <a href={hrefFor(link)} className={styles.link}>
                    {label}
                  </a>
                ) : (
                  <Link href={hrefFor(link)} className={styles.link} lang={name ? "en" : undefined}>
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
          <li>
            {/* English pages leave the dialog to the browser's language, as before */}
            <CookieSettingsButton className={styles.link} lang={lang === "tr" ? "tr" : undefined} />
          </li>
          <li>
            <a href={`mailto:${CONTACT_EMAIL}`} className={`${styles.link} ${styles.mail}`}>
              {CONTACT_EMAIL}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
