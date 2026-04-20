"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Game", href: "#game" },
  { label: "Screenshots", href: "#screenshots" },
  { label: "Developer", href: "#developer" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = navLinks.map((l) => l.href.slice(1));

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);

    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      if (window.scrollY < 100) setActiveSection(null);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -75% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navBg = scrolled || menuOpen;

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
          backgroundColor: navBg ? "var(--bg)" : "transparent",
          borderBottom: navBg ? "1px solid var(--border)" : "1px solid transparent",
          backdropFilter: navBg ? "blur(12px)" : "none",
          WebkitBackdropFilter: navBg ? "blur(12px)" : "none",
          transition: "background-color 0.3s ease, border-color 0.3s ease",
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
          Simple <span style={{ color: "var(--accent)" }}>Ideas</span>
        </a>

        {/* Nav links — desktop only */}
        <ul
          className="hidden md:flex"
          style={{ gap: "2rem", listStyle: "none", margin: 0, padding: 0 }}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={{
                    fontSize: "0.875rem",
                    color: isActive ? "var(--accent)" : "var(--fg-muted)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    paddingBottom: "3px",
                    borderBottom: isActive
                      ? "1px solid var(--accent)"
                      : "1px solid transparent",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--accent)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = isActive
                      ? "var(--accent)"
                      : "var(--fg-muted)")
                  }
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right: theme toggle + hamburger */}
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
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex md:hidden"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "8px",
              border: "1px solid var(--border)",
              background: "var(--card)",
              cursor: "pointer",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "5px",
              flexShrink: 0,
              padding: 0,
            }}
          >
            <span
              style={{
                display: "block",
                width: "16px",
                height: "2px",
                background: "var(--fg)",
                borderRadius: "2px",
                transition: "all 0.2s",
                transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "16px",
                height: "2px",
                background: "var(--fg)",
                borderRadius: "2px",
                transition: "all 0.2s",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: "16px",
                height: "2px",
                background: "var(--fg)",
                borderRadius: "2px",
                transition: "all 0.2s",
                transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer — animated with framer-motion */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden"
            style={{
              position: "fixed",
              top: "64px",
              left: 0,
              right: 0,
              zIndex: 49,
              background: "var(--bg)",
              borderBottom: "1px solid var(--border)",
              padding: "0.5rem 1.5rem 1rem",
            }}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: "block",
                    padding: "0.85rem 0",
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: isActive ? "var(--accent)" : "var(--fg-muted)",
                    textDecoration: "none",
                    borderBottom: "1px solid var(--border)",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--accent)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = isActive
                      ? "var(--accent)"
                      : "var(--fg-muted)")
                  }
                >
                  {link.label}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
