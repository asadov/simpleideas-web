import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/site";
import { AppScreens, type AppScreen } from "@/components/AppScreens";
import { TempoShell } from "./TempoShell";
import styles from "./tempo.module.css";

/* Real Apple Watch simulator captures of the 1.0 build (46 mm, 416 × 496). */
const SCREENS: AppScreen[] = [
  {
    src: "/tempo/screens/1-idle.png",
    alt: "Tempo stopped at 120 BPM with ALLEGRO below the number, four beat dots, the 4/4 button, an orange Play button and TAP.",
    caption: "Digital Crown sets 40 to 240 BPM, with the tempo name below",
  },
  {
    src: "/tempo/screens/2-playing-first-beat.png",
    alt: "Tempo playing 140 BPM in 7/8: the first of seven beat dots is orange and the Play button shows Pause.",
    caption: "Dots follow the bar; the first beat taps harder",
  },
  {
    src: "/tempo/screens/3-time-signatures.png",
    alt: "The Time Signature list on Apple Watch with 2/4, 3/4 and 4/4 visible and 4/4 ticked.",
    caption: "Eight time signatures, from 2/4 to 10/8",
  },
  {
    src: "/tempo/screens/4-slow.png",
    alt: "Tempo playing 66 BPM in 4/4 with ADAGIO below the number; the second of four beat dots is orange.",
    caption: "Slow practice at 66 BPM, Adagio",
  },
];

/*
 * Tempo for Apple Watch: product page and support page in one. This address is the app's
 * Support URL and Marketing URL in App Store Connect: never move it without a 301.
 */

export const metadata: Metadata = {
  title: "Tempo — Haptic metronome for Apple Watch",
  description: "Tempo taps the beat on your wrist. A metronome for Apple Watch with tap tempo and odd time signatures.",
  alternates: { canonical: "https://www.simpleideas.net/tempo" },
};

export default function TempoPage() {
  return (
    <TempoShell>
      <p className={styles.kicker}>Apple Watch</p>
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

      <AppScreens items={SCREENS} shape="watch" label="Tempo screenshots" />

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
