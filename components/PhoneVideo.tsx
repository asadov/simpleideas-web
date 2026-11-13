"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./PhoneVideo.module.css";

interface PhoneVideoProps {
  src: string;
  poster: string;
  /** Intrinsic pixel size of the video; the phone screen takes this aspect ratio. */
  width: number;
  height: number;
  label: string;
  caption?: string;
}

/**
 * The hero phone: a screen with the video's own aspect ratio inside a 10px bezel. The trailer is picture only
 * (the site's video files carry no audio track, by choice) and autoplays muted, started programmatically so
 * prefers-reduced-motion users get the poster + a play button instead of a flash of motion.
 */
export function PhoneVideo({ src, poster, width, height, label, caption }: PhoneVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  // Optimistic: no play button in the server HTML; it appears only if playback can't/shouldn't start.
  const [playing, setPlaying] = useState(true);
  // Set only by the viewer's own pause (or reduced motion) — browser/offscreen pauses don't count.
  const holdRef = useRef(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    let inView = false;

    const onPlay = () => setPlaying(true);
    v.addEventListener("play", onPlay);

    const sync = () => {
      if (holdRef.current || !inView || document.hidden) {
        if (!v.paused) v.pause();
        return;
      }
      if (v.paused) v.play().catch(() => setPlaying(false));
    };

    const applyMotion = () => {
      holdRef.current = mq.matches;
      if (mq.matches) setPlaying(false);
      sync();
    };

    v.defaultMuted = true;
    v.muted = true;
    holdRef.current = mq.matches;
    if (mq.matches) setPlaying(false);

    // Play while the phone is on screen, pause when it scrolls away or the tab is hidden.
    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        sync();
      },
      { threshold: 0.25 },
    );
    io.observe(v);
    document.addEventListener("visibilitychange", sync);
    mq.addEventListener("change", applyMotion);

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", sync);
      mq.removeEventListener("change", applyMotion);
      v.removeEventListener("play", onPlay);
    };
  }, []);

  function togglePlay() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      holdRef.current = false;
      v.play().catch(() => {});
    } else {
      holdRef.current = true;
      v.pause();
      setPlaying(false);
    }
  }

  return (
    <figure className={styles.wrap}>
      <div className={styles.frame}>
        <div className={styles.screen} style={{ aspectRatio: `${width} / ${height}` }}>
          <video
            ref={videoRef}
            className={styles.video}
            src={src}
            poster={poster}
            width={width}
            height={height}
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={label}
          />
          {!playing ? (
            <button type="button" className={styles.play} aria-label="Play trailer" onClick={togglePlay}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5.5v13l11-6.5z" />
              </svg>
            </button>
          ) : null}
        </div>
      </div>
      {caption ? <figcaption className={styles.caption}>{caption}</figcaption> : null}
    </figure>
  );
}
