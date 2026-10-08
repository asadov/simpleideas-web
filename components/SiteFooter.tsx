import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/site";
import { StoreBadges } from "./StoreBadges";
import styles from "./SiteFooter.module.css";

const LINKS = [
  { href: "/", label: "Almost in Orbit" },
  { href: "/collect-pixel-art", label: "Collect Pixel Art" },
  { href: "/press", label: "Press kit" },
  { href: "/privacy", label: "Privacy" },
  { href: "/support", label: "Support" },
] as const;

export function SiteFooter({ variant = "space" }: { variant?: "space" | "museum" }) {
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
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={styles.link}>
                {link.label}
              </Link>
            </li>
          ))}
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
