import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/lib/site";
import { TunerShell } from "../TunerShell";
import styles from "../tuner.module.css";

/*
 * Tuner Pro Studio privacy policy. This address is the app's Privacy Policy URL in App Store Connect:
 * never move it without a 301.
 */

export const metadata: Metadata = {
  title: "Privacy Policy · Tuner Pro Studio",
  description: "Tuner Pro Studio collects no data. Microphone audio is never recorded or sent.",
  alternates: { canonical: "https://www.simpleideas.net/tuner/privacy" },
};

export default function TunerPrivacyPage() {
  return (
    <TunerShell>
      <article>
        <h1>Privacy Policy</h1>
        <p className={styles.meta}>Tuner Pro Studio · Effective date: 5 November 2026</p>

        <p>
          Tuner Pro Studio is a chromatic and guitar tuner for iPhone and iPad developed by Simple Ideas (“we”). This
          policy covers Tuner Pro Studio version 1.0 and later.
        </p>

        <div className={styles.box}>
          <p>
            <strong>In short: Tuner Pro Studio collects no data.</strong> Nothing you play or do in the app leaves your
            device.
          </p>
        </div>

        <h2>Microphone</h2>
        <p>
          The app asks for microphone access only to detect the pitch of the note you play. Sound is analysed in memory
          on your device as it arrives and is discarded straight away. It is never recorded, saved to a file or sent
          anywhere. The microphone stops when you leave the app, and you can turn access off at any time in iOS Settings.
        </p>

        <h2>What stays on your device</h2>
        <p>
          The app stores your settings so they are there next time: the A4 reference, in-tune range, noise filter,
          sharps or flats, haptic and chime switches, the last page you used and the guitar tuning. They never leave your
          device and are deleted when you delete the app.
        </p>

        <h2>What Tuner Pro Studio does not do</h2>
        <ul>
          <li>No account, no sign-in and no in-app purchases.</li>
          <li>No ads, analytics, tracking or crash-reporting code.</li>
          <li>No internet connection, and no access to your location, contacts, photos or health data.</li>
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
    </TunerShell>
  );
}
