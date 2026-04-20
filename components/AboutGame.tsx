"use client";

import { FadeIn } from "./FadeIn";

const features = [
  {
    icon: "🔁",
    title: "Roguelite Progression",
    desc: "Every run is different. Choose upgrades, adapt your build, and push further each time — permanent upgrades between runs keep every attempt meaningful.",
  },
  {
    icon: "🤖",
    title: "Drone System",
    desc: "Deploy and upgrade combat drones to support your ship. Ice, Fire, Lightning, Poison — four element types across three tiers of power.",
  },
  {
    icon: "🌊",
    title: "40 Waves",
    desc: "Survive 40 escalating waves of enemy formations, boss encounters at waves 10, 20, 30 and 40, and screen-filling final bosses.",
  },
  {
    icon: "🎨",
    title: "Pixel Art Aesthetic",
    desc: "Hand-crafted pixel art visuals with dynamic lighting and particle effects throughout.",
  },
];

export function AboutGame() {
  return (
    <section
      id="game"
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
            About the Game
          </span>
        </div>
        <h2
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: "var(--fg)",
            marginBottom: "1.25rem",
          }}
        >
          Built for mobile. Designed for depth.
        </h2>
        <p
          style={{
            fontSize: "1.05rem",
            color: "var(--fg-muted)",
            maxWidth: "600px",
            lineHeight: 1.7,
            marginBottom: "3.5rem",
          }}
        >
          Almost in Orbit is a portrait-mode roguelite shoot-em-up built in Unity 6. Pilot your
          ship through waves of enemies, choose powerful upgrades between rounds, and see how close
          to orbit you can get.
        </p>
      </FadeIn>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {features.map((feature, i) => (
          <FadeIn key={feature.title} delay={i * 0.1}>
            <div
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "1.75rem",
                height: "100%",
                transition: "border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--accent)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--border)";
                el.style.transform = "translateY(0)";
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{feature.icon}</div>
              <h3
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "var(--fg)",
                  marginBottom: "0.5rem",
                }}
              >
                {feature.title}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--fg-muted)", lineHeight: 1.6 }}>
                {feature.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
