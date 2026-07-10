"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  r: number;
  a: number;
  v: number;
  p: number;
  t: number;
  c: string;
}

export function Starfield({ variant }: { variant: "hero" | "sub" }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    const cx = cv?.getContext("2d");
    if (!cv || !cx) return;

    const RM = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let stars: Star[] = [];
    let W = 0;
    let H = 0;
    let dpr = 1;
    let last = 0;
    let rafId = 0;

    function pickColor(): string {
      if (variant !== "hero") return "233,241,251";
      if (Math.random() < 0.1) return "100,231,240";
      if (Math.random() < 0.05) return "255,180,84";
      return "233,241,251";
    }

    function size() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = cv!.width = window.innerWidth * dpr;
      H = cv!.height = window.innerHeight * dpr;
      const max = variant === "hero" ? 190 : 150;
      const divisor = variant === "hero" ? 8500 : 11000;
      const n = Math.min(max, Math.round((window.innerWidth * window.innerHeight) / divisor));
      stars = Array.from({ length: n }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: variant === "hero" ? (Math.random() * 1.05 + 0.3) * dpr : (Math.random() + 0.35) * dpr,
        a: variant === "hero" ? Math.random() * 0.55 + 0.25 : Math.random() * 0.5 + 0.25,
        v: variant === "hero" ? (Math.random() * 0.35 + 0.12) * dpr : (Math.random() * 0.3 + 0.1) * dpr,
        p: Math.random() * Math.PI * 2,
        t: Math.random() * 1.4 + 0.4,
        c: pickColor(),
      }));
    }

    function draw(now: number) {
      const dt = Math.min((now - last) / 16.7, 3);
      last = now;
      cx!.clearRect(0, 0, W, H);
      const t = now / 1000;
      for (const s of stars) {
        if (!RM) {
          s.y += s.v * dt;
          if (s.y > H + 4) {
            s.y = -4;
            s.x = Math.random() * W;
          }
        }
        const tw = RM ? 1 : 0.62 + 0.38 * Math.sin(t * s.t + s.p);
        cx!.beginPath();
        cx!.fillStyle = `rgba(${s.c},${(s.a * tw).toFixed(3)})`;
        cx!.arc(s.x, s.y, s.r, 0, 6.284);
        cx!.fill();
      }
      if (!RM) rafId = requestAnimationFrame(draw);
    }

    function onResize() {
      size();
      if (RM) draw(performance.now());
    }

    size();
    if (RM) {
      draw(performance.now());
    } else {
      rafId = requestAnimationFrame(draw);
    }
    addEventListener("resize", onResize);

    return () => {
      removeEventListener("resize", onResize);
      cancelAnimationFrame(rafId);
    };
  }, [variant]);

  return <canvas id="stars" ref={canvasRef} aria-hidden="true" />;
}
