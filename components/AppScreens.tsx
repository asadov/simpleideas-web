import Image from "next/image";
import styles from "./AppScreens.module.css";

export type AppScreen = {
  /** Path under /public. */
  src: string;
  alt: string;
  caption: string;
};

type Shape = "watch" | "phone";

/* Pixel size of the stored files, so next/image reserves the right box before they load. */
const SIZE: Record<Shape, { width: number; height: number; sizes: string }> = {
  watch: { width: 416, height: 496, sizes: "(max-width: 720px) 40vw, 160px" },
  phone: { width: 720, height: 1564, sizes: "(max-width: 720px) 56vw, 160px" },
};

/**
 * A row of real app screenshots, each in a plain device-shaped frame. Colours come from the page
 * it sits in (--line, --surface, --muted), so it matches the Tempo and Tuner palettes alike.
 * Scrolls sideways on narrow screens instead of shrinking the screens to illegibility.
 */
export function AppScreens({ items, shape, label }: { items: AppScreen[]; shape: Shape; label: string }) {
  const size = SIZE[shape];
  return (
    <ul className={`${styles.row} ${styles[shape]}`} aria-label={label}>
      {items.map((item) => (
        <li key={item.src} className={styles.item}>
          <figure className={styles.fig}>
            <div className={styles.frame}>
              <Image
                className={styles.img}
                src={item.src}
                alt={item.alt}
                width={size.width}
                height={size.height}
                sizes={size.sizes}
              />
            </div>
            <figcaption className={styles.cap}>{item.caption}</figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
