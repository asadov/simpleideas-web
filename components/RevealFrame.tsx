"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import type { Painting } from "@/lib/paintings";
import styles from "./RevealFrame.module.css";

interface RevealFrameProps {
  painting: Painting;
  /** Frame weight: hero (18px gilt), teaser (14px) or small (10px, collection wall). */
  size?: "hero" | "teaser" | "small";
  /** next/image `sizes` for the original. */
  sizes: string;
  /** Static reveal amount 0–1 (how much of the original shows, top-down). Omit to inherit `--reveal`. */
  reveal?: number;
  /** Draw the 2px gold seam at the reveal line. */
  seam?: boolean;
  /** Collection mode: starts as the pixel wall; reveals on hover/focus, and toggles on tap. */
  interactive?: boolean;
  preload?: boolean;
  className?: string;
}

/**
 * Two stacked images in one gilded frame: the crisp pixel wall underneath, the original on top
 * clipped from the bottom so it "returns" top-down — exactly how a restoration plays out in-game.
 */
export function RevealFrame({
  painting,
  size = "small",
  sizes,
  reveal,
  seam = false,
  interactive = false,
  preload = false,
  className = "",
}: RevealFrameProps) {
  const [open, setOpen] = useState(false);

  const style =
    reveal === undefined ? undefined : ({ "--reveal": `${Math.round(reveal * 1000) / 10}%` } as CSSProperties);

  const pixelAlt = interactive
    ? `${painting.title} as a wall of coloured pixels`
    : `${painting.title} as a wall of coloured pixels, the original restored across the top`;

  const art = (
    <span className={`${styles.frame} ${styles[size]}`}>
      <span className={styles.lip}>
        <span className={styles.box} style={{ aspectRatio: `${painting.width} / ${painting.height}` }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- native 30-ish px grid; must stay unresampled */}
          <img
            className={styles.pixel}
            src={painting.pixel}
            width={painting.pixelWidth}
            height={painting.pixelHeight}
            alt={pixelAlt}
            decoding="async"
          />
          <Image
            className={styles.orig}
            src={painting.src}
            alt=""
            aria-hidden="true"
            fill
            sizes={sizes}
            preload={preload}
          />
          {seam ? <span className={styles.seam} aria-hidden="true" /> : null}
        </span>
      </span>
    </span>
  );

  if (!interactive) {
    return (
      <span className={`${styles.wrap} ${className}`} style={style}>
        {art}
      </span>
    );
  }

  return (
    <button
      type="button"
      className={`${styles.wrap} ${styles.interactive} ${open ? styles.open : ""} ${className}`}
      aria-pressed={open}
      aria-label={`Reveal ${painting.title}`}
      onClick={() => setOpen((value) => !value)}
    >
      {art}
    </button>
  );
}
