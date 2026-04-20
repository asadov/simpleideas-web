"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { FadeIn } from "./FadeIn";

const screenshots = [
  { src: "/screenshots/IMG_8721.PNG", alt: "Gameplay" },
  { src: "/screenshots/IMG_8722.PNG", alt: "Gameplay" },
  { src: "/screenshots/IMG_8732.PNG", alt: "Gameplay" },
  { src: "/screenshots/IMG_8741.PNG", alt: "Gameplay" },
  { src: "/screenshots/IMG_8747.PNG", alt: "Gameplay" },
  { src: "/screenshots/IMG_8749.PNG", alt: "Gameplay" },
];

export function Screenshots() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(() =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + screenshots.length) % screenshots.length)), []);
  const next = useCallback(() =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % screenshots.length)), []);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, close, prev, next]);

  return (
    <>
      <section
        id="screenshots"
        style={{
          padding: "6rem 1.5rem",
          background: "var(--card)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ marginBottom: "1rem" }}>
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                }}
              >
                Screenshots
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "var(--fg)",
                marginBottom: "3rem",
              }}
            >
              See it in action
            </h2>
          </FadeIn>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
              gap: "1rem",
            }}
          >
            {screenshots.map((item, i) => (
              <FadeIn key={item.src} delay={i * 0.08}>
                <div
                  onClick={() => setActiveIndex(i)}
                  style={{
                    aspectRatio: "9/16",
                    position: "relative",
                    borderRadius: "12px",
                    overflow: "hidden",
                    border: "1px solid var(--border)",
                    cursor: "pointer",
                    transition: "transform 0.2s, box-shadow 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "scale(1.03)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  }}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    style={{ objectFit: "cover", objectPosition: "top" }}
                    sizes="(max-width: 768px) 45vw, 200px"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {activeIndex !== null && (
        <div
          onClick={close}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(6px)",
          }}
        >
          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            style={{
              position: "absolute",
              left: "1.5rem",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff",
              borderRadius: "50%",
              width: "2.75rem",
              height: "2.75rem",
              fontSize: "1.25rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ‹
          </button>

          {/* Image */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "min(360px, 90vw)",
              aspectRatio: "9/16",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
            }}
          >
            <Image
              src={screenshots[activeIndex].src}
              alt={screenshots[activeIndex].alt}
              fill
              style={{ objectFit: "contain" }}
              sizes="360px"
              priority
            />
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            style={{
              position: "absolute",
              right: "1.5rem",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff",
              borderRadius: "50%",
              width: "2.75rem",
              height: "2.75rem",
              fontSize: "1.25rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ›
          </button>

          {/* Close */}
          <button
            onClick={close}
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "1.5rem",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff",
              borderRadius: "50%",
              width: "2.5rem",
              height: "2.5rem",
              fontSize: "1.1rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ✕
          </button>

          {/* Counter */}
          <div
            style={{
              position: "absolute",
              bottom: "1.5rem",
              color: "rgba(255,255,255,0.6)",
              fontSize: "0.85rem",
            }}
          >
            {activeIndex + 1} / {screenshots.length}
          </div>
        </div>
      )}
    </>
  );
}
