import { STORE } from "@/lib/site";
import styles from "./StoreBadges.module.css";

/**
 * Official store badges (unaltered artwork), rendered at the same height. Both SVGs fill their
 * viewBox edge to edge (no built-in clear-space), so equal heights give equal visible badges.
 */
export function StoreBadges({ size = "hero" }: { size?: "hero" | "small" }) {
  return (
    <div className={`${styles.row} ${styles[size]}`}>
      <a href={STORE.appStore} className={styles.badge}>
        {/* eslint-disable-next-line @next/next/no-img-element -- official badge artwork; served as-is, never re-encoded */}
        <img className={styles.apple} src="/badges/app-store.svg" alt="Download on the App Store" width={120} height={40} />
      </a>
      <a href={STORE.googlePlay} className={styles.badge}>
        {/* eslint-disable-next-line @next/next/no-img-element -- official badge artwork; served as-is, never re-encoded */}
        <img className={styles.google} src="/badges/google-play.svg" alt="Get it on Google Play" width={239} height={71} />
      </a>
    </div>
  );
}
