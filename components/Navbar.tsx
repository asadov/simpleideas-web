"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Game", href: "#game" },
  { label: "Screenshots", href: "#screenshots" },
  { label: "Developer", href: "#developer" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: "0 1.5rem",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: scrolled || menuOpen ? "var(--bg)" : "transparent",
          borderBottom: scrolled || menuOpen ? "1px solid var(--border)" : "1px solid transparent",
          backdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          style={{
            fontSize: "1.125rem",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "var(--fg)",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          Simple{" "}
          <span style={{ color: "var(--accent)" }}>Ideas</span>
        </a>

        {/* Nav links — desktop only */}
        <ul
          style={{
            gap: "2rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  fontSize: "0.875rem",
                  color: "var(--fg-muted)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--accent)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--fg-muted)")}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: theme toggle + hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "1px solid var(--border)",
                background: "var(--card)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.1rem",
                transition: "border-color 0.2s, background 0.2s",
                flexShrink: 0,
              }}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          )}

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            className="flex md:hidden"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "8px",
              border: "1px solid var(--border)",
              background: "var(--card)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "5px",
              flexShrink: 0,
              padding: 0,
            }}
          >
            <span style={{
              display: "block",
              width: "16px",
              height: "2px",
              background: "var(--fg)",
              borderRadius: "2px",
              transition: "all 0.2s",
              transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
            }} />
            <span style={{
              display: "block",
              width: "16px",
              height: "2px",
              background: "var(--fg)",
              borderRadius: "2px",
              transition: "all 0.2s",
              opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              display: "block",
              width: "16px",
              height: "2px",
              background: "var(--fg)",
              borderRadius: "2px",
              transition: "all 0.2s",
              transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
            }} />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          className="flex md:hidden"
          style={{
            position: "fixed",
            top: "64px",
            left: 0,
            right: 0,
            zIndex: 49,
            background: "var(--bg)",
            borderBottom: "1px solid var(--border)",
            padding: "1rem 1.5rem",
            flexDirection: "column",
            gap: "0",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "0.85rem 0",
                fontSize: "1rem",
                fontWeight: 500,
                color: "var(--fg-muted)",
                textDecoration: "none",
                borderBottom: "1px solid var(--border)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--accent)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--fg-muted)")}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
