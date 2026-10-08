"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import type { Screenshot } from "@/lib/screenshots";
import styles from "./Screenshots.module.css";

const pad = (n: number) => String(n).padStart(2, "0");

interface ScreenshotsProps {
  items: Screenshot[];
  /** Section eyebrow + heading, rendered in the strip header next to the controls. */
  eyebrow: ReactNode;
  heading: ReactNode;
}

/**
 * 02 · screens — a horizontal strip of portrait shots (1290:2796). Arrow buttons + a
 * "01 — 05 / 12" counter on desktop; scroll-snap swipe with pager dots on phones.
 */
export function Screenshots({ items, eyebrow, heading }: ScreenshotsProps) {
  const stripRef = useRef<HTMLUListElement>(null);
  const [range, setRange] = useState({ first: 1, last: Math.min(5, items.length) });

  const measure = useCallback(() => {
    const strip = stripRef.current;
    if (!strip) return;
    const box = strip.getBoundingClientRect();
    let first = -1;
    let last = -1;
    Array.from(strip.children).forEach((li, i) => {
      const r = li.getBoundingClientRect();
      if (r.left >= box.left - 1 && r.right <= box.right + 1) {
        if (first < 0) first = i;
        last = i;
      }
    });
    if (first >= 0) setRange({ first: first + 1, last: last + 1 });
  }, []);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;
    let raf = 0;
    const schedule = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };
    measure();
    strip.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      strip.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(raf);
    };
  }, [measure]);

  function nav(dir: 1 | -1) {
    const strip = stripRef.current;
    if (!strip) return;
    strip.scrollBy({ left: dir * strip.clientWidth * 0.8, behavior: "smooth" });
  }

  return (
    <>
      <div className={styles.head}>
        <div className={styles.headText}>
          {eyebrow}
          {heading}
        </div>
        <div className={styles.controls}>
          <span className={styles.counter}>
            {pad(range.first)} — {pad(range.last)} / {pad(items.length)}
          </span>
          <button type="button" className={styles.arrow} aria-label="Previous screenshots" onClick={() => nav(-1)}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </button>
          <button type="button" className={styles.arrow} aria-label="Next screenshots" onClick={() => nav(1)}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <span className={styles.swipe} aria-hidden="true">
          Swipe →
        </span>
      </div>

      <ul className={styles.strip} ref={stripRef} aria-label="Gameplay screenshots">
        {items.map((item, i) => (
          <li key={item.src} className={styles.item}>
            <figure className={styles.fig}>
              <div className={styles.shot}>
                <Image
                  className={styles.img}
                  src={item.src}
                  alt={item.alt}
                  width={720}
                  height={1560}
                  sizes="(max-width: 720px) 172px, 196px"
                  loading="lazy"
                />
              </div>
              <figcaption className={styles.cap}>
                <span className={styles.num}>{pad(i + 1)}</span> {item.caption}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <div className={styles.dots} aria-hidden="true">
        {items.map((item, i) => (
          <span key={item.src} className={i + 1 === range.first ? styles.dotOn : styles.dot} />
        ))}
      </div>
    </>
  );
}
