"use client";

import { useRef, useState, type PointerEvent } from "react";
import styles from "./Screenshots.module.css";

export interface ScreenshotItem {
  src: string;
  alt: string;
  fileLabel: string;
}

export function Screenshots({ items }: { items: ScreenshotItem[] }) {
  const stripRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, sx: 0, sl: 0 });
  const [failed, setFailed] = useState<boolean[]>(() => items.map(() => false));

  function nav(dir: number) {
    const strip = stripRef.current;
    if (!strip) return;
    strip.scrollBy({ left: dir * strip.clientWidth * 0.8, behavior: "smooth" });
  }

  function onPointerDown(e: PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse") return;
    const strip = stripRef.current;
    if (!strip) return;
    drag.current = { down: true, sx: e.clientX, sl: strip.scrollLeft };
    strip.setPointerCapture(e.pointerId);
  }
  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    if (!drag.current.down) return;
    const strip = stripRef.current;
    if (!strip) return;
    strip.scrollLeft = drag.current.sl - (e.clientX - drag.current.sx);
  }
  function onPointerEnd() {
    drag.current.down = false;
  }

  function markFailed(i: number) {
    setFailed((prev) => prev.map((v, idx) => (idx === i ? true : v)));
  }

  return (
    <>
      <div className={styles.secHead}>
        <div>
          <span data-reveal className={styles.eyebrow}>
            03 · screens
          </span>
          <h2 data-reveal className={styles.heading}>
            In the cockpit
          </h2>
        </div>
        <div data-reveal className={styles.stripNav}>
          <button className={styles.snav} data-dir={-1} aria-label="Previous screenshots" onClick={() => nav(-1)}>
            ‹
          </button>
          <button className={styles.snav} data-dir={1} aria-label="Next screenshots" onClick={() => nav(1)}>
            ›
          </button>
        </div>
      </div>
      <div
        className={styles.strip}
        ref={stripRef}
        aria-label="Gameplay screenshots"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerEnd}
        onPointerCancel={onPointerEnd}
      >
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
      <span className={styles.swipeHint}>swipe →</span>
    </>
  );
}
