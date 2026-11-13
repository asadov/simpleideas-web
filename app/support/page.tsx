import type { Metadata } from "next";
import Link from "next/link";
import { Starfield } from "@/components/Starfield";
import { StudioNav } from "@/components/StudioNav";
import { SiteFooter } from "@/components/SiteFooter";
import { CONTACT_EMAIL } from "@/lib/site";
import subStyles from "../subpages.module.css";
import styles from "./support.module.css";

export const metadata: Metadata = {
  title: "Support — Almost in Orbit",
  description: "Support for Almost in Orbit. One inbox, one human, fast answers.",
  alternates: { canonical: "/support" },
};

/* The Almost in Orbit game opens this page (MonetizationConfig supportUrl), so it stays about that game first. */
const mailto = (subject: string) => `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;

export default function SupportPage() {
  return (
    <>
      <Starfield variant="sub" />
      <div className={subStyles.nebula} aria-hidden="true" />
      <StudioNav current="/support" />
      <main className={subStyles.frame}>
        <header className={subStyles.pageHead}>
          <span className="node" aria-hidden="true" />
          <span className={subStyles.eyebrow}>Support</span>
          <h1 className={subStyles.h1}>One inbox, one human</h1>
          <p className={subStyles.lede}>
            Stuck, found a bug, or something looks wrong? Email me — the developer answers every message personally,
            usually within a day or two.
          </p>
          <a className={subStyles.btn} href={mailto("Almost in Orbit — support")}>
            Email support
          </a>
          <p>
            We use your email address, message and any attachments to handle your request. Read the{" "}
            <a href="/kvkk?lang=en#processing">personal data notice</a> before sending personal information.
          </p>
        </header>

        <section className={subStyles.section}>
          <span className="node" aria-hidden="true" />
          <h2>Reporting a bug</h2>
          <p>Three things make a bug fixable fast:</p>
          <ul>
            <li>Your device model and OS version (e.g. iPhone 15, iOS 26 / Pixel 8, Android 16)</li>
            <li>What happened, and what you expected to happen</li>
            <li>A screenshot or screen recording, if you can grab one — those are gold</li>
          </ul>
        </section>

        <section className={subStyles.section}>
          <span className="node" aria-hidden="true" />
          <h2>Common questions</h2>

          <h3 className={styles.h3}>I bought the game when it was paid. Do I get Premium?</h3>
          <p>
            Yes, at no extra charge. On iOS 16 or later it turns on automatically with the same Apple Account. On
            Android it turns on when you update the game on the same device where you played the paid version. For
            anything else, such as iOS 15, a reinstall or a new Android device, email us and we&apos;ll sort it out; we
            may ask for a store receipt or order number. The details are in the{" "}
            <Link href="/terms#earlier-buyers">terms of use</Link>.
          </p>

          <h3 className={styles.h3}>How do I restore Premium?</h3>
          <p>
            Open Settings in the game and tap Restore purchases, signed in to the same App Store or Google Play account
            you bought it with. Restoring needs a connection. The store can&apos;t restore gold packs, because they are used
            up when delivered; the gold is part of your save, so cloud save brings it back.
          </p>

          <h3 className={styles.h3}>Does Premium carry over between iPhone and Android?</h3>
          <p>
            No — the App Store and Google Play are separate stores with separate purchases. Premium or gold bought on
            one platform doesn&apos;t unlock anything on the other.
          </p>

          <h3 className={styles.h3}>Where is my progress stored?</h3>
          <p>
            On your device. If you&apos;re signed in to Game Center on iPhone or Play Games on Android, the game also
            keeps a copy of your permanent progress in your own iCloud or Google account, so it survives a reinstall or
            a new phone. That copy never comes to us, and saves don&apos;t move between iPhone and Android.
          </p>

          <h3 className={styles.h3}>How do I turn off analytics or change my ad choices?</h3>
          <p>
            In the game, open Settings, then Support and account, then Privacy and usage data. The{" "}
            <Link href="/privacy#choices">privacy policy</Link> explains each choice.
          </p>

          <h3 className={styles.h3}>Can I get a refund?</h3>
          <p>
            Refunds for Premium, gold packs or the paid game are handled by Apple and Google through their standard
            store processes, on their terms. We can&apos;t process refunds directly, but if something&apos;s broken,
            email us first — we&apos;d rather fix it.
          </p>

          <h3 className={styles.h3}>Do I need an account?</h3>
          <p>
            No account with us, no logins, no passwords to reset. Signing in to Game Center or Play Games is optional
            and only used for cloud save.
          </p>
        </section>

        <section className={subStyles.section}>
          <span className="node" aria-hidden="true" />
          <h2>Other games and apps</h2>
          <ul>
            <li>
              <Link href="/collect-pixel-art">Pixel Art Collect</Link>:{" "}
              <a href={mailto("Pixel Art Collect — support")}>email support</a> · <Link href="/collect-pixel-art/privacy">privacy policy</Link>
            </li>
            <li>
              <Link href="/tempo">Tempo</Link>: questions and answers on its own support page
            </li>
            <li>
              <Link href="/tuner">Tuner Pro Studio</Link>: questions and answers on its own support page
            </li>
          </ul>
        </section>
      </main>
      <SiteFooter variant="space" />
    </>
  );
}
