"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * The studio nav row. On narrow screens it scrolls sideways instead of wrapping into several
 * lines; on load it brings the current page's link into view so it is never hidden off-screen.
 */
export function NavScroll({ className, label, children }: { className: string; label: string; children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = ref.current;
    if (!nav || nav.scrollWidth <= nav.clientWidth) return;
    const current = nav.querySelector<HTMLElement>('[aria-current="page"]');
    if (!current) return;
    nav.scrollLeft = current.offsetLeft - (nav.clientWidth - current.offsetWidth) / 2;
  }, []);

  return (
    <nav ref={ref} aria-label={label} className={className}>
      {children}
    </nav>
  );
}
