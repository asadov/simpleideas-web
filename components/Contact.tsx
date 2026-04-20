"use client";

import { FadeIn } from "./FadeIn";

const socials = [
  {
    name: "Twitter / X",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    href: "#",
    placeholder: true,
  },
  {
    name: "Instagram",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    href: "#",
    placeholder: true,
  },
  {
    name: "TikTok",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.72a4.84 4.84 0 01-1.01-.03z" />
      </svg>
    ),
    href: "#",
    placeholder: true,
  },
  {
    name: "YouTube",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
      </svg>
    ),
    href: "#",
    placeholder: true,
  },
  {
    name: "itch.io",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3.13 1.338C2.08 1.96.02 4.328 0 4.95v.7c0 .89.835 1.65 1.6 1.65.913 0 1.67-.78 1.67-1.69 0 .91.73 1.69 1.643 1.69.914 0 1.644-.78 1.644-1.69 0 .91.756 1.69 1.67 1.69.435 0 .83-.19 1.12-.5.29-.31.46-.73.46-1.19 0 .91.73 1.69 1.644 1.69.912 0 1.643-.78 1.643-1.69 0 .91.757 1.69 1.67 1.69.914 0 1.644-.78 1.644-1.69 0 .91.757 1.69 1.67 1.69.764 0 1.6-.76 1.6-1.65v-.7c-.02-.622-2.08-2.99-3.13-3.612C17.38.97 6.62.97 3.13 1.338zM8 8.weakness c-.44.002-.888.013-1.335.034C4.905 8.13 3.5 9 3.5 9v8.5c0 1 .5 2.5 2 2.5H18.5c1.5 0 2-.5 2-2.5V9s-1.405-.87-3.165-.966C16.888 8.013 16.44 8.002 16 8H8zm-1 4h10v5H7v-5z" />
      </svg>
    ),
    href: "#",
    placeholder: true,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "6rem 1.5rem",
        maxWidth: "800px",
        margin: "0 auto",
        textAlign: "center",
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
            Contact & Socials
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
          Let&apos;s connect
        </h2>

        <p
          style={{
            fontSize: "1rem",
            color: "var(--fg-muted)",
            lineHeight: 1.7,
            marginBottom: "2.5rem",
          }}
        >
          Have a question, collaboration idea, or just want to say hi?
          <br />
          Reach out anytime.
        </p>

        {/* Email CTA */}
        <a
          href="mailto:social@simpleideas.net"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.625rem",
            padding: "0.875rem 2rem",
            borderRadius: "12px",
            background: "var(--accent)",
            color: "#0a0a0f",
            fontWeight: 700,
            fontSize: "0.95rem",
            textDecoration: "none",
            marginBottom: "3rem",
            transition: "opacity 0.2s, transform 0.2s",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.opacity = "0.9";
            el.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          social@simpleideas.net
        </a>

        {/* Social links */}
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "0.75rem" }}>
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              aria-label={social.name}
              title={social.placeholder ? `${social.name} (coming soon)` : social.name}
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "var(--card)",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--fg-muted)",
                textDecoration: "none",
                transition: "border-color 0.2s, color 0.2s, transform 0.2s",
                opacity: social.placeholder ? 0.6 : 1,
                cursor: social.placeholder ? "not-allowed" : "pointer",
              }}
              onClick={social.placeholder ? (e) => e.preventDefault() : undefined}
              onMouseEnter={(e) => {
                if (!social.placeholder) {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--accent)";
                  el.style.color = "var(--accent)";
                  el.style.transform = "translateY(-2px)";
                }
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--border)";
                el.style.color = "var(--fg-muted)";
                el.style.transform = "translateY(0)";
              }}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <p
          style={{
            marginTop: "1.25rem",
            fontSize: "0.8rem",
            color: "var(--fg-muted)",
          }}
        >
          Social profiles coming soon
        </p>
      </FadeIn>
    </section>
  );
}
