import type { Metadata } from "next";
import Link from "next/link";
import { Starfield } from "@/components/Starfield";
import subStyles from "../subpages.module.css";

export const metadata: Metadata = {
  title: "Privacy policy — Almost in Orbit",
  description: "Privacy policy for Almost in Orbit. The short version: the game collects no data at all.",
};

export default function PrivacyPage() {
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
          <span className={subStyles.eyebrow}>Privacy policy · effective July 10, 2026</span>
          <h1 className={subStyles.h1}>We collect nothing</h1>
          <p className={subStyles.lede}>
            This page exists because app stores require one. It&apos;s refreshingly short, because there&apos;s
            nothing to disclose.
          </p>
        </header>

        <section className={subStyles.section}>
          <span className="node" aria-hidden="true" />
          <h2>What Almost in Orbit collects</h2>
          <p>
            Nothing. The game contains no analytics, no advertising, no tracking, no crash-reporting SDKs and no
            third-party services of any kind. There are no accounts and no logins. The game never asks for personal
            information and sends no data to us — it doesn&apos;t even talk to our servers, because there
            aren&apos;t any.
          </p>
        </section>

        <section className={subStyles.section}>
          <span className="node" aria-hidden="true" />
          <h2>Your save data</h2>
          <p>
            Your progress, permanent upgrades and settings are stored locally on your device and never leave it. If
            your phone backs itself up (iCloud, Google backup), your save may be included in that backup —
            that&apos;s between you and your device, and we have no access to it. Delete the game and the save goes
            with it.
          </p>
        </section>

        <section className={subStyles.section}>
          <span className="node" aria-hidden="true" />
          <h2>Purchases</h2>
          <p>
            Almost in Orbit is a paid app with no in-app purchases. Payment is handled entirely by the Apple App
            Store or Google Play under their own terms and privacy policies. We never see your payment details.
          </p>
        </section>

        <section className={subStyles.section}>
          <span className="node" aria-hidden="true" />
          <h2>Children</h2>
          <p>The game collects no data from anyone — including children.</p>
        </section>

        <section className={subStyles.section}>
          <span className="node" aria-hidden="true" />
          <h2>If this ever changes</h2>
          <p>
            If a future update changes any of the above, we&apos;ll update this page and the date at the top, and
            note it in the store update notes. Questions?{" "}
            <a className={subStyles.mail} href="mailto:salih@simpleideas.net">
              salih@simpleideas.net
            </a>
          </p>
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
              <Link href="/support">Support</Link>
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
