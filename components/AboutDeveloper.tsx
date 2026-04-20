"use client";

import { FadeIn } from "./FadeIn";

const skills = [
  { name: "Unity 6", icon: "🎮" },
  { name: "C#", icon: "💻" },
  { name: "Pixel Art", icon: "🎨" },
  { name: "Game Design", icon: "📐" },
];

export function AboutDeveloper() {
  return (
    <section
      id="developer"
      style={{
        padding: "6rem 1.5rem",
        maxWidth: "1100px",
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
            About the Developer
          </span>
        </div>

        <h2
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: "var(--fg)",
            marginBottom: "1.25rem",
          }}
        >
          Solo indie developer,
          <br />
          making games I want to play.
        </h2>

        <p
          style={{
            fontSize: "1rem",
            color: "var(--fg-muted)",
            lineHeight: 1.75,
            marginBottom: "2rem",
            maxWidth: "600px",
          }}
        >
          Hey, I&apos;m Salih — a solo mobile game developer based in İzmir, Turkey. I build
          everything myself: code, art, design, and sound. Almost in Orbit is my first major
          release, a game born from a love of classic shoot-em-ups and the challenge of making
          something deep and replayable for mobile.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem" }}>
          {skills.map((skill) => (
            <span
              key={skill.name}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.375rem",
                padding: "0.4rem 0.875rem",
                borderRadius: "999px",
                background: "var(--card)",
                border: "1px solid var(--border)",
                fontSize: "0.85rem",
                fontWeight: 500,
                color: "var(--fg)",
                cursor: "default",
                transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--accent)";
                el.style.transform = "scale(1.05)";
                el.style.boxShadow = "0 0 12px rgba(0,212,255,0.15)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--border)";
                el.style.transform = "scale(1)";
                el.style.boxShadow = "none";
              }}
            >
              <span>{skill.icon}</span>
              {skill.name}
            </span>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
