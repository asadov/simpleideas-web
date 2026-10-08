import Link from "next/link";
import styles from "./StudioNav.module.css";

const LINKS = [
  { href: "/", label: "Almost in Orbit" },
  { href: "/collect-pixel-art", label: "Collect Pixel Art", chip: "Soon" },
  { href: "/press", label: "Press kit" },
  { href: "/support", label: "Support" },
] as const;

/** The studio's square-pixel mark: three filled squares and one still to collect. */
export function PixelMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" aria-hidden="true" fill="none">
      <rect x="0.75" y="0.75" width="7" height="7" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />
      <rect x="10.25" y="0.75" width="7" height="7" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />
      <rect x="0.75" y="10.25" width="7" height="7" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />
      <rect x="10.25" y="10.25" width="7" height="7" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function StudioNav({
  variant = "space",
  current,
}: {
  variant?: "space" | "museum";
  /** Pathname of the current page, used for aria-current. */
  current: string;
}) {
  return (
    <header className={`${styles.header} ${variant === "museum" ? styles.museum : styles.space}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="Simple Ideas — home">
          <span className={styles.mark}>
            <PixelMark />
          </span>
          <span>Simple Ideas</span>
        </Link>
        <nav aria-label="Studio" className={styles.nav}>
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.link}
              aria-current={link.href === current ? "page" : undefined}
            >
              {link.label}
              {"chip" in link ? <span className={styles.chip}>{link.chip}</span> : null}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
