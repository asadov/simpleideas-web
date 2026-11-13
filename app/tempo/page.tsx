import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/site";
import { TempoShell } from "./TempoShell";
import styles from "./tempo.module.css";

/*
 * Tempo for Apple Watch: product page and support page in one. This address is the app's
 * Support URL and Marketing URL in App Store Connect: never move it without a 301.
 */

export const metadata: Metadata = {
  title: "Tempo — Haptic metronome for Apple Watch",
  description: "Tempo taps the beat on your wrist. A metronome for Apple Watch with tap tempo and odd time signatures. Coming soon to the App Store.",
  alternates: { canonical: "https://www.simpleideas.net/tempo" },
};

export default function TempoPage() {
  return (
    <TempoShell>
      <p className={styles.kicker}>Apple Watch · Coming soon to the App Store</p>
      <h1>Tempo</h1>
      <p className={styles.lede}>
        A metronome you feel instead of hear. Tempo taps the beat on your wrist, so you can keep time without headphones
        or a clicking speaker.
      </p>
      <a className={styles.button} href={`mailto:${CONTACT_EMAIL}?subject=Tempo%20%E2%80%94%20support`}>
        Email support
      </a>
      <p className={styles.meta}>
        Your email and message are used to answer your request. <a href="/kvkk?lang=en#processing">Personal data notice</a>.
      </p>

      <h2>What it does</h2>
      <ul>
        <li>A light tap on every beat, a stronger tap on the first beat of the bar</li>
        <li>40 to 240 BPM with the Digital Crown, with the classical tempo name below the number</li>
        <li>Tap tempo: tap TAP along with the music</li>
        <li>2/4, 3/4, 4/4, 3/8, 5/8, 6/8, 7/8 and 10/8</li>
        <li>Keeps going when you lower your wrist</li>
        <li>Runs entirely on the watch: no iPhone app, no account</li>
      </ul>

      <h2>Common questions</h2>
      <h3>Why do I hear a short chime on the first beat?</h3>
      <p>
        The stronger first-beat tap is a system haptic, and Apple Watch plays a short chime with it. For vibration only,
        turn on Silent Mode in Control Center.
      </p>
      <h3>Why is the first beat light at fast tempos?</h3>
      <p>
        Above 170 BPM every beat uses the light tap. The stronger pattern is longer and would push the next beat late.
      </p>
      <h3>Does it keep playing with my wrist down?</h3>
      <p>Yes, while Tempo stays open. Pressing the Digital Crown or switching to another app stops the metronome.</p>
      <h3>Which watches are supported?</h3>
      <p>Any Apple Watch running watchOS 11 or later.</p>
      <h3>What data does Tempo collect?</h3>
      <p>
        None. Your tempo and time signature are stored on the watch only. See the{" "}
        <Link href="/tempo/privacy">privacy policy</Link>.
      </p>
      <h3>Something is not working</h3>
      <p>
        Email <a href={`mailto:${CONTACT_EMAIL}?subject=Tempo%20%E2%80%94%20support`}>{CONTACT_EMAIL}</a> with your
        watch model and watchOS version. Every message gets a personal answer.
      </p>
    </TempoShell>
  );
}
