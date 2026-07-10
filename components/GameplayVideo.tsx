"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./GameplayVideo.module.css";

export function GameplayVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const fail = () => setEmpty(true);
    v.addEventListener("error", fail, true);
    if (v.networkState === 3) fail();
    return () => v.removeEventListener("error", fail, true);
  }, []);

  return (
    <div data-reveal className={styles.phone}>
      <div className={`${styles.screen} ${empty ? styles.empty : ""}`}>
        <video ref={videoRef} src="/assets/gameplay.mp4" poster="/assets/poster.jpg" muted autoPlay loop playsInline />
        <div className={styles.phFallback}>
          <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} aria-hidden="true">
            <circle cx={12} cy={12} r={10} />
            <path d="M10 8.5v7l6-3.5z" />
          </svg>
          <code>assets/gameplay.mp4</code>
        </div>
      </div>
    </div>
  );
}
