"use client";

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "2rem 1.5rem",
        textAlign: "center",
      }}
    >
      <p style={{ fontSize: "0.85rem", color: "var(--fg-muted)" }}>
        © {new Date().getFullYear()}{" "}
        <span style={{ color: "var(--accent)", fontWeight: 600 }}>Simple Ideas</span> · Salih
        Salihoglu · İzmir, Turkey
      </p>
    </footer>
  );
}
