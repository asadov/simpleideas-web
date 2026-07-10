import type { Metadata } from "next";
import Link from "next/link";
import { Starfield } from "@/components/Starfield";
import subStyles from "../subpages.module.css";
import styles from "./support.module.css";

export const metadata: Metadata = {
  title: "Support — Almost in Orbit",
  description: "Support for Almost in Orbit. One inbox, one human, fast answers.",
};

export default function SupportPage() {
  return (
    <>
      <Starfield variant="sub" />
      <div className={subStyles.nebula} aria-hidden="true" />
      <div className={subStyles.frame}>
        <header className={subStyles.pageHead}>
          <span className="node" aria-hidden="true" />
          <Link className={subStyles.back} href="/">
            ← Almost in Orbit
          </Link>
          <span className={subStyles.eyebrow}>Support</span>
          <h1 className={subStyles.h1}>One inbox, one human</h1>
          <p className={subStyles.lede}>
            Stuck, found a bug, or something looks wrong? Email me — the developer answers every message personally,
            usually within a day or two.
          </p>
          <a className={subStyles.btn} href="mailto:salih@simpleideas.net?subject=Almost%20in%20Orbit%20%E2%80%94%20support">
            Email support
          </a>
        </header>

        <section className={subStyles.section}>
          <span className="node" aria-hidden="true" />
          <h2>Reporting a bug</h2>
          <p>Three things make a bug fixable fast:</p>
          <ul>
            <li>Your device model and OS version (e.g. iPhone 14, iOS 19 / Pixel 8, Android 16)</li>
            <li>What happened, and what you expected to happen</li>
            <li>A screenshot or screen recording, if you can grab one — those are gold</li>
          </ul>
        </section>

        <section className={subStyles.section}>
          <span className="node" aria-hidden="true" />
          <h2>Common questions</h2>

          <h3 className={styles.h3}>Does one purchase cover both iOS and Android?</h3>
          <p>
            No — the App Store and Google Play are separate stores with separate purchases. Buying the game on one
            platform doesn&apos;t unlock it on the other.
          </p>

          <h3 className={styles.h3}>Where is my progress stored?</h3>
          <p>
            On your device. There&apos;s no account and no cloud service — your save travels with your phone&apos;s
            own backup when you switch devices.
          </p>

          <h3 className={styles.h3}>Can I get a refund?</h3>
          <p>
            Refunds are handled by Apple and Google through their standard store processes, on their terms. We
            can&apos;t process refunds directly, but if something&apos;s broken, email us first — we&apos;d rather
            fix it.
          </p>

          <h3 className={styles.h3}>Do I need an account?</h3>
          <p>No accounts, no logins, no passwords to reset. Download and play.</p>
        </section>

        <footer className={subStyles.footer}>
          <p className={subStyles.footBrand}>Simple Ideas</p>
          <ul className={subStyles.footLinks}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/press">Press kit</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy</Link>
            </li>
            <li>
              <a href="mailto:salih@simpleideas.net">salih@simpleideas.net</a>
            </li>
          </ul>
          <p className={subStyles.fine}>© 2026 Simple Ideas.</p>
        </footer>
      </div>
    </>
  );
}
