"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "./FadeIn";

const screenshots = [
  { src: "/screenshots/IMG_8721.PNG", alt: "Almost in Orbit gameplay — drone combat" },
  { src: "/screenshots/IMG_8722.PNG", alt: "Almost in Orbit — boss encounter" },
  { src: "/screenshots/IMG_8732.PNG", alt: "Almost in Orbit — upgrade selection screen" },
  { src: "/screenshots/IMG_8741.PNG", alt: "Almost in Orbit — wave progression" },
  { src: "/screenshots/IMG_8747.PNG", alt: "Almost in Orbit — elemental drone effects" },
  { src: "/screenshots/IMG_8749.PNG", alt: "Almost in Orbit — pixel art space combat" },
];

export function Screenshots() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + screenshots.length) % screenshots.length)),
    []
  );
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % screenshots.length)),
    []
  );

  // Keyboard navigation + focus management
  useEffect(() => {
    if (activeIndex === null) return;

    // Focus close button on open
    closeButtonRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      // Focus trap: Tab cycles through prev/close/next
      if (e.key === "Tab") {
        e.preventDefault();
        const focusables = Array.from(
          document.querySelectorAll("[data-lightbox-focusable]")
        ) as HTMLElement[];
        const current = document.activeElement as HTMLElement;
        const idx = focusables.indexOf(current);
        const next = e.shiftKey
          ? (idx - 1 + focusables.length) % focusables.length
          : (idx + 1) % focusables.length;
        focusables[next]?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      // Restore focus to the thumbnail that was clicked
      (triggerRef.current as HTMLElement | null)?.focus();
    };
  }, [activeIndex, close, prev, next]);

  // Mobile carousel: IntersectionObserver for active dot
  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSlide(parseInt(entry.target.getAttribute("data-index") || "0"));
          }
        });
      },
      { root: container, threshold: 0.55 }
    );

    container.querySelectorAll("[data-index]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSlide = (index: number) => {
    const container = carouselRef.current;
    if (!container) return;
    const item = container.querySelector(`[data-index="${index}"]`) as HTMLElement;
    item?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  return (
    <>
      <section
        id="screenshots"
        style={{
          padding: "6rem 0",
          background: "var(--card)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem" }}>
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
                marginBottom: "2.5rem",
              }}
            >
              See it in action
            </h2>
          </FadeIn>
        </div>

        {/* Desktop grid */}
        <div
          className="hidden md:grid"
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 1.5rem",
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            gap: "1rem",
          }}
        >
          {screenshots.map((item, i) => (
            <FadeIn key={item.src} delay={i * 0.08}>
              <div
                role="button"
                tabIndex={0}
                aria-label={`Open ${item.alt}`}
                onClick={(e) => {
                  triggerRef.current = e.currentTarget as HTMLElement;
                  setActiveIndex(i);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    triggerRef.current = e.currentTarget as HTMLElement;
                    setActiveIndex(i);
                  }
                }}
                style={{
                  aspectRatio: "9/16",
                  position: "relative",
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                  cursor: "pointer",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
                  outline: "none",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "scale(1.03)";
                  el.style.boxShadow = "0 0 0 1px var(--accent), 0 8px 32px rgba(0,212,255,0.15)";
                  el.style.borderColor = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "scale(1)";
                  el.style.boxShadow = "none";
                  el.style.borderColor = "var(--border)";
                }}
                onFocus={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 0 0 2px var(--accent)";
                }}
                onBlur={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  sizes="(max-width: 1100px) 20vw, 200px"
                />
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <div
            ref={carouselRef}
            className="no-scrollbar"
            style={{
              display: "flex",
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch" as never,
              gap: "1rem",
              padding: "0 1.5rem",
              paddingRight: "calc(100vw - 72vw - 1.5rem + 1rem)",
            }}
          >
            {screenshots.map((item, i) => (
              <div
                key={item.src}
                data-index={i}
                role="button"
                tabIndex={0}
                aria-label={`Open ${item.alt}`}
                onClick={(e) => {
                  triggerRef.current = e.currentTarget as HTMLElement;
                  setActiveIndex(i);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    triggerRef.current = e.currentTarget as HTMLElement;
                    setActiveIndex(i);
                  }
                }}
                style={{
                  flexShrink: 0,
                  width: "72vw",
                  maxWidth: "280px",
                  aspectRatio: "9/16",
                  position: "relative",
                  borderRadius: "12px",
                  overflow: "hidden",
                  scrollSnapAlign: "center",
                  border: "1px solid var(--border)",
                  cursor: "pointer",
                  outline: "none",
                }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  sizes="72vw"
                />
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.5rem",
              marginTop: "1.25rem",
            }}
          >
            {screenshots.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToSlide(i)}
                aria-label={`Go to screenshot ${i + 1}`}
                style={{
                  width: i === activeSlide ? "1.5rem" : "0.5rem",
                  height: "0.5rem",
                  borderRadius: "999px",
                  background: i === activeSlide ? "var(--accent)" : "var(--border)",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "width 0.3s ease, background 0.3s ease",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            role="dialog"
            aria-modal="true"
            aria-label="Screenshot viewer"
            onClick={close}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 1000,
              background: "rgba(0,0,0,0.88)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
          >
            {/* Prev */}
            <button
              data-lightbox-focusable
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous screenshot"
              style={{
                position: "absolute",
                left: "1.5rem",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#fff",
                borderRadius: "50%",
                width: "2.75rem",
                height: "2.75rem",
                fontSize: "1.35rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ‹
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                width: "min(360px, 82vw)",
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
            </motion.div>

            {/* Next */}
            <button
              data-lightbox-focusable
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next screenshot"
              style={{
                position: "absolute",
                right: "1.5rem",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#fff",
                borderRadius: "50%",
                width: "2.75rem",
                height: "2.75rem",
                fontSize: "1.35rem",
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
              ref={closeButtonRef}
              data-lightbox-focusable
              onClick={close}
              aria-label="Close screenshot viewer"
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
                color: "rgba(255,255,255,0.5)",
                fontSize: "0.85rem",
              }}
            >
              {activeIndex + 1} / {screenshots.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
