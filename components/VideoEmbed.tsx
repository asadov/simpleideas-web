"use client";

import { FadeIn } from "./FadeIn";

export function VideoEmbed() {
  return (
    <section
      id="trailer"
      style={{
        padding: "6rem 1.5rem",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
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
            Trailer
          </span>
        </div>
        <h2
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: "var(--fg)",
            marginBottom: "2rem",
          }}
        >
          Watch Trailer
        </h2>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div
          style={{
            position: "relative",
            aspectRatio: "16/9",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid var(--border)",
            background: "linear-gradient(135deg, #06060f 0%, #0c1525 50%, #06060f 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.25rem",
          }}
        >
          {/* dot grid background */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "radial-gradient(circle, rgba(0,212,255,0.12) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
              opacity: 0.5,
            }}
          />
          {/* center glow */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(0,212,255,0.07) 0%, transparent 70%)",
            }}
          />

          {/* Play button */}
          <div
            style={{
              position: "relative",
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              background: "rgba(0,212,255,0.12)",
              border: "2px solid rgba(0,212,255,0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="rgba(0,212,255,0.85)"
              style={{ marginLeft: "3px" }}
            >
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </div>

          <p
            style={{
              position: "relative",
              fontSize: "0.875rem",
              color: "rgba(0,212,255,0.5)",
              letterSpacing: "0.12em",
              fontWeight: 500,
              textTransform: "uppercase",
            }}
          >
            Trailer coming soon
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
