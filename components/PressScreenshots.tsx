import Image from "next/image";
import type { Screenshot } from "@/lib/screenshots";
import styles from "./PressScreenshots.module.css";

const pad = (n: number) => String(n).padStart(2, "0");

export function PressScreenshots({ items }: { items: Screenshot[] }) {
  return (
    <ul className={styles.grid} aria-label="Screenshots">
      {items.map((item, i) => (
        <li key={item.src}>
          <figure className={styles.fig}>
            <a className={styles.shot} href={item.src} target="_blank" rel="noopener">
              <Image
                className={styles.img}
                src={item.src}
                alt={item.alt}
                width={720}
                height={1560}
                sizes="(max-width: 720px) 45vw, 176px"
                loading="lazy"
              />
            </a>
            <figcaption className={styles.cap}>
              <span className={styles.num}>{pad(i + 1)}</span> {item.caption}
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
