import { STORE, type StoreLinks } from "@/lib/site";
import styles from "./StoreBadges.module.css";

/**
 * Official store badges (unaltered artwork), rendered at the same height. Both SVGs fill their
 * viewBox edge to edge (no built-in clear-space), so equal heights give equal visible badges.
 * `store` defaults to Almost in Orbit's links; a badge whose link is not set is left out.
 */
export function StoreBadges({ size = "hero", store = STORE }: { size?: "hero" | "small"; store?: StoreLinks }) {
  return (
    <div className={`${styles.row} ${styles[size]}`}>
      {store.appStore && (
        <a href={store.appStore} className={styles.badge}>
          {/* eslint-disable-next-line @next/next/no-img-element -- official badge artwork; served as-is, never re-encoded */}
          <img className={styles.apple} src="/badges/app-store.svg" alt="Download on the App Store" width={120} height={40} />
        </a>
      )}
      {store.googlePlay && (
        <a href={store.googlePlay} className={styles.badge}>
          {/* eslint-disable-next-line @next/next/no-img-element -- official badge artwork; served as-is, never re-encoded */}
          <img className={styles.google} src="/badges/google-play.svg" alt="Get it on Google Play" width={239} height={71} />
        </a>
      )}
    </div>
  );
}
