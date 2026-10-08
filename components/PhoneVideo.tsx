"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./PhoneVideo.module.css";

interface PhoneVideoProps {
  src: string;
  poster: string;
  /** Intrinsic pixel size of the video (9:16). */
  width: number;
  height: number;
  label: string;
  caption?: string;
}

/**
 * The hero phone: an exact 9:16 screen inside a 10px bezel. The trailer autoplays muted
 * (started programmatically so prefers-reduced-motion users get the poster + a play button
 * instead of a flash of motion), with a 44px sound toggle overlaid bottom-right.
 */
export function PhoneVideo({ src, poster, width, height, label, caption }: PhoneVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [soundOn, setSoundOn] = useState(false);
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

  function toggleSound() {
    const v = videoRef.current;
    if (!v) return;
    const next = !soundOn;
    v.muted = !next;
    setSoundOn(next);
    if (next && v.paused) {
      holdRef.current = false;
      v.play().catch(() => {});
    }
  }

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
        <div className={styles.screen}>
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
          <button
            type="button"
            className={styles.sound}
            aria-pressed={soundOn}
            aria-label={soundOn ? "Turn sound off" : "Turn sound on"}
            onClick={toggleSound}
          >
            {soundOn ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 9.5v5h3.5L12 18V6L7.5 9.5z" />
                <path d="M15 9a4 4 0 0 1 0 6" />
                <path d="M17.5 6.5a7.5 7.5 0 0 1 0 11" />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 9.5v5h3.5L12 18V6L7.5 9.5z" />
                <path d="M15.5 9.5l5 5M20.5 9.5l-5 5" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {caption ? <figcaption className={styles.caption}>{caption}</figcaption> : null}
    </figure>
  );
}
