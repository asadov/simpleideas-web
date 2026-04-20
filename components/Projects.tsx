"use client";

import { FadeIn } from "./FadeIn";

const projects = [
  {
    title: "Almost in Orbit",
    status: "In Development",
    statusColor: "#00d4ff",
    desc: "A roguelite shoot-em-up mobile game. Survive 40 waves, upgrade drones, and fight your way to orbit. Built in Unity 6 for iOS & Android.",
    tags: ["Unity 6", "C#", "Pixel Art", "Mobile"],
    icon: "🚀",
    coming: false,
  },
  {
    title: "Next Project",
    status: "Future",
    statusColor: "#8888aa",
    desc: "Something new is brewing. Stay tuned.",
    tags: [],
    icon: "✨",
    coming: true,
  },
];

export function Projects() {
  return (
    <section
      id="projects"
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
              Projects
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
            What I&apos;m building
          </h2>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.15}>
              <div
                style={{
                  background: "var(--bg)",
                  border: project.coming ? "1px dashed var(--border)" : "1px solid var(--border)",
                  borderRadius: "20px",
                  padding: "2rem",
                  height: "100%",
                  opacity: project.coming ? 0.6 : 1,
                  transition: "border-color 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  if (!project.coming) {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--accent)";
                    el.style.transform = "translateY(-3px)";
                    el.style.boxShadow = "0 0 0 1px var(--accent), 0 16px 40px rgba(0,212,255,0.1)";
                  }
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--border)";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    marginBottom: "1.25rem",
                    gap: "1rem",
                  }}
                >
                  <div style={{ fontSize: "2.5rem" }}>{project.icon}</div>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: project.statusColor,
                      background: `${project.statusColor}18`,
                      border: `1px solid ${project.statusColor}44`,
                      borderRadius: "999px",
                      padding: "0.25rem 0.75rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {!project.coming && (
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: project.statusColor,
                          display: "inline-block",
                          animation: "pulse-dot 2s ease-in-out infinite",
                          flexShrink: 0,
                        }}
                      />
                    )}
                    {project.status}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "var(--fg)",
                    marginBottom: "0.625rem",
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--fg-muted)",
                    lineHeight: 1.6,
                    marginBottom: "1.25rem",
                  }}
                >
                  {project.desc}
                </p>

                {project.tags.length > 0 && (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--fg-muted)",
                          background: "var(--card)",
                          border: "1px solid var(--border)",
                          borderRadius: "6px",
                          padding: "0.2rem 0.6rem",
                          fontWeight: 500,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
