import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/site";
import { StoreBadges } from "./StoreBadges";
import { CookieSettingsButton } from "./CookieNotice";
import styles from "./SiteFooter.module.css";

const LINKS = [
  { href: "/", label: "Almost in Orbit" },
  { href: "/collect-pixel-art", label: "Pixel Art Collect" },
  { href: "/press", label: "Press kit" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/support", label: "Support" },
  { href: "/kvkk?lang=en", label: "KVKK data notice" },
  { href: "/cookies?lang=en", label: "Cookies" },
] as const;

/**
 * `privacyHref`: each game has its own policy, so the "Privacy" link follows the page's game.
 * `showTerms`: the terms of use (/terms) are Almost in Orbit's only; pages of other games hide the link.
 */
export function SiteFooter({
  variant = "space",
  privacyHref = "/privacy",
  showTerms = true,
}: {
  variant?: "space" | "museum";
  privacyHref?: string;
  showTerms?: boolean;
}) {
  return (
    <footer className={`${styles.footer} ${variant === "museum" ? styles.museum : styles.space}`}>
      <div className={styles.inner}>
        <div className={styles.brandCol}>
          <p className={styles.brand}>Simple Ideas</p>
          {variant === "space" ? (
            <div className={styles.badges}>
              <StoreBadges size="small" />
            </div>
          ) : null}
          <p className={styles.fine}>
            © 2026 Simple Ideas. Apple and the App Store are trademarks of Apple Inc. Google Play is a trademark of
            Google LLC.
          </p>
        </div>
        <ul className={styles.links}>
          {LINKS.filter((link) => showTerms || link.href !== "/terms").map((link) => (
            <li key={link.label}>
              {link.href.startsWith("/kvkk") || link.href.startsWith("/cookies") ? (
                <a href={link.href} className={styles.link}>{link.label}</a>
              ) : (
                <Link href={link.href === "/privacy" ? privacyHref : link.href} className={styles.link}>
                  {link.label}
                </Link>
              )}
            </li>
          ))}
          <li>
            <CookieSettingsButton className={styles.link} />
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
