"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    type Star = { x: number; y: number; r: number; speed: number; opacity: number };
    const layers: Star[][] = [[], []];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const initStars = () => {
      layers[0].length = 0;
      layers[1].length = 0;
      const area = canvas.width * canvas.height;
      // Layer 1: small, fast (background)
      const count1 = Math.floor(area / 4000);
      for (let i = 0; i < count1; i++) {
        layers[0].push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.2 + 0.2,
          speed: Math.random() * 0.3 + 0.05,
          opacity: Math.random() * 0.6 + 0.2,
        });
      }
      // Layer 2: larger, slow (foreground depth)
      const count2 = Math.floor(area / 12000);
      for (let i = 0; i < count2; i++) {
        layers[1].push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.8 + 1.2,
          speed: Math.random() * 0.12 + 0.02,
          opacity: Math.random() * 0.5 + 0.4,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = document.documentElement.classList.contains("dark");
      const col1 = isDark ? "180, 220, 255" : "20, 20, 60";
      const col2 = isDark ? "140, 210, 255" : "30, 30, 90";

      for (const star of layers[0]) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${col1}, ${star.opacity})`;
        ctx.fill();
        star.y += star.speed;
        if (star.y > canvas.height) { star.y = 0; star.x = Math.random() * canvas.width; }
      }
      for (const star of layers[1]) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${col2}, ${star.opacity})`;
        ctx.fill();
        star.y += star.speed;
        if (star.y > canvas.height) { star.y = 0; star.x = Math.random() * canvas.width; }
      }
      animId = requestAnimationFrame(draw);
    };

    resize();
    initStars();
    draw();

    const observer = new ResizeObserver(() => { resize(); initStars(); });
    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
    />
  );
}

const titleWords = [
  { text: "Almost", accent: false },
  { text: "in", accent: false },
  { text: "Orbit", accent: true },
];

const ctaButtons = [
  {
    label: "App Store",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
    ),
    bg: "#000",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.15)",
  },
  {
    label: "Google Play",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3.18 23.76c.3.17.64.24.99.18l13.2-7.62-2.93-2.93zM.5 1.05C.19 1.37 0 1.86 0 2.5v19c0 .64.19 1.13.5 1.45l.08.07 10.64-10.64v-.25L.58.98zM20.49 10.28l-3-1.74-3.26 3.26 3.26 3.26 3.01-1.74c.86-.5.86-1.32-.01-2.04zM4.17.24L17.37 7.86l-2.93 2.93z" />
      </svg>
    ),
    bg: "var(--card)",
    color: "var(--fg)",
    border: "1px solid var(--border)",
  },
];

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [isTouch, setIsTouch] = useState(true);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 18 });
  const contentX = useTransform(springX, [-1, 1], [-12, 12]);
  const contentY = useTransform(springY, [-1, 1], [-8, 8]);

  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none)").matches);
  }, []);

  useEffect(() => {
    if (isTouch || prefersReducedMotion) return;
    const onMouseMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 2);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [isTouch, prefersReducedMotion, mouseX, mouseY]);

  const enableParallax = !isTouch && !prefersReducedMotion;

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "var(--bg)",
      }}
    >
      <Starfield />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(0,212,255,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <motion.div
        style={{
          position: "relative",
          textAlign: "center",
          padding: "0 1.5rem",
          maxWidth: "700px",
          x: enableParallax ? contentX : 0,
          y: enableParallax ? contentY : 0,
        }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span
            style={{
              display: "inline-block",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--accent)",
              background: "var(--accent-dim)",
              border: "1px solid rgba(0,212,255,0.25)",
              borderRadius: "999px",
              padding: "0.3rem 1rem",
              marginBottom: "1.5rem",
            }}
          >
            Coming Soon · iOS & Android
          </span>
        </motion.div>

        {/* Title — word by word stagger */}
        <h1
          style={{
            fontSize: "clamp(2.5rem, 8vw, 5rem)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            marginBottom: "1.25rem",
          }}
        >
          {titleWords.map((word, i) => (
            <motion.span
              key={word.text}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease: "easeOut" }}
              style={{
                display: "inline-block",
                color: word.accent ? "var(--accent)" : "var(--fg)",
                textShadow: word.accent ? "0 0 40px rgba(0,212,255,0.4)" : "none",
                marginRight: i < titleWords.length - 1 ? "0.3em" : 0,
              }}
            >
              {word.text}
            </motion.span>
          ))}
        </h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            color: "var(--fg-muted)",
            marginBottom: "2.5rem",
            lineHeight: 1.6,
          }}
        >
          A roguelite shoot-em-up. Survive 40 waves, upgrade your drones, and reach orbit.
          <br />
          Coming soon to iOS & Android.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
        >
          {ctaButtons.map((btn, i) => (
            <div key={btn.label} style={{ position: "relative" }}>
              <span
                style={{
                  position: "absolute",
                  top: "-1.6rem",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "var(--accent)",
                  color: "#0a0a0f",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  padding: "0.15rem 0.55rem",
                  borderRadius: "4px",
                  whiteSpace: "nowrap",
                  letterSpacing: "0.07em",
                  animation: `pulse-badge 2s ease-in-out ${i * 0.4}s infinite`,
                }}
              >
                COMING SOON
              </span>
              <button
                disabled
                aria-label={`${btn.label} — coming soon`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 1.75rem",
                  borderRadius: "12px",
                  background: btn.bg,
                  color: btn.color,
                  border: btn.border,
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  cursor: "not-allowed",
                  opacity: 0.6,
                }}
              >
                {btn.icon}
                {btn.label}
              </button>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          style={{
            marginTop: "4rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            color: "var(--fg-muted)",
            fontSize: "0.75rem",
            letterSpacing: "0.1em",
          }}
        >
          <span>SCROLL</span>
          <motion.div
            animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{ width: "1px", height: "32px", background: "var(--accent)", opacity: 0.5 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
