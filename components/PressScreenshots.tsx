"use client";

import { useState } from "react";
import styles from "./PressScreenshots.module.css";

export interface ScreenshotItem {
  src: string;
  alt: string;
  fileLabel: string;
}

export function PressScreenshots({ items }: { items: ScreenshotItem[] }) {
  const [failed, setFailed] = useState<boolean[]>(() => items.map(() => false));

  function markFailed(i: number) {
    setFailed((prev) => prev.map((v, idx) => (idx === i ? true : v)));
  }

  return (
    <div className={styles.shots}>
      {items.map((item, i) => (
        <figure key={item.src} className={`${styles.shot} ${failed[i] ? styles.empty : ""}`}>
          <img
            loading="lazy"
            src={item.src}
            alt={item.alt}
            onError={() => markFailed(i)}
            onLoad={(e) => {
              if (e.currentTarget.naturalWidth === 0) markFailed(i);
            }}
          />
          <div className={styles.ph}>
            <i />
            <code>{item.fileLabel}</code>
          </div>
        </figure>
      ))}
    </div>
  );
}
