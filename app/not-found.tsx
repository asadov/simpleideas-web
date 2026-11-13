import type { Metadata } from "next";
import Link from "next/link";
import { Starfield } from "@/components/Starfield";
import { StudioNav } from "@/components/StudioNav";
import { SiteFooter } from "@/components/SiteFooter";
import subStyles from "./subpages.module.css";

export const metadata: Metadata = {
  title: "Page not found · Simple Ideas",
  robots: { index: false },
};

/** Shown for any address that does not exist, in the site's own style instead of the bare framework page. */
export default function NotFound() {
  return (
    <>
      <Starfield variant="sub" />
      <div className={subStyles.nebula} aria-hidden="true" />
      <StudioNav current="" />
      <main className={subStyles.frame}>
        <header className={subStyles.pageHead}>
          <span className="node" aria-hidden="true" />
          <span className={subStyles.eyebrow}>404 · off the map</span>
          <h1 className={subStyles.h1}>This page drifted out of orbit</h1>
          <p className={subStyles.lede}>
            The address may be mistyped, or the page has moved. Everything on the site is one click away from here.
          </p>
          <Link className={subStyles.btn} href="/">
            Back to the home page
          </Link>
        </header>

        <section className={subStyles.section}>
          <span className="node" aria-hidden="true" />
          <h2>Looking for something?</h2>
          <ul>
            <li>
              <Link href="/">Almost in Orbit</Link> · <Link href="/privacy">privacy policy</Link> ·{" "}
              <Link href="/terms">terms of use</Link>
            </li>
            <li>
              <Link href="/collect-pixel-art">Pixel Art Collect</Link> ·{" "}
              <Link href="/collect-pixel-art/privacy">privacy policy</Link>
            </li>
            <li>
              <Link href="/tempo">Tempo</Link> · <Link href="/tempo/privacy">privacy policy</Link>
            </li>
            <li>
              <Link href="/tuner">Tuner Pro Studio</Link> · <Link href="/tuner/privacy">privacy policy</Link>
            </li>
            <li>
              <Link href="/press">Press kit</Link> · <Link href="/support">Support</Link>
            </li>
          </ul>
        </section>
      </main>
      <SiteFooter variant="space" />
    </>
  );
}
