import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/lib/site";
import { TempoShell } from "../TempoShell";
import styles from "../tempo.module.css";

/*
 * Tempo privacy policy. This address is the app's Privacy Policy URL in App Store Connect:
 * never move it without a 301.
 */

export const metadata: Metadata = {
  title: "Privacy Policy · Tempo",
  description: "Tempo for Apple Watch collects no data.",
  alternates: { canonical: "https://www.simpleideas.net/tempo/privacy" },
};

export default function TempoPrivacyPage() {
  return (
    <TempoShell>
      <article>
        <h1>Privacy Policy</h1>
        <p className={styles.meta}>Tempo for Apple Watch · Effective date: 3 November 2026</p>

        <p>
          Tempo is a metronome for Apple Watch developed by Simple Ideas (“we”). This policy covers Tempo version 1.0
          and later.
        </p>

        <div className={styles.box}>
          <p>
            <strong>In short: Tempo collects no data.</strong> Nothing you do in the app leaves your watch.
          </p>
        </div>

        <h2>What stays on your watch</h2>
        <p>
          Tempo stores two settings on your watch so they are there next time: the tempo (BPM) and the time signature.
          They never leave the watch and are deleted when you delete the app.
        </p>

        <h2>What Tempo does not do</h2>
        <ul>
          <li>No account, no sign-in and no in-app purchases.</li>
          <li>No ads, analytics, tracking or crash-reporting code.</li>
          <li>No internet connection, and no access to the microphone, location or health data.</li>
        </ul>
        <p>Because we collect nothing, there is nothing for us to share, sell or delete.</p>

        <h2>Contact</h2>
        <p>
          If you email us, we use your message and address only to answer you. Write to{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>

        <h2>Changes</h2>
        <p>If a future version changes any of this, we will update this page and its effective date first.</p>
      </article>
    </TempoShell>
  );
}
