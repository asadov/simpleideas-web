import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/site";
import { AppScreens, type AppScreen } from "@/components/AppScreens";
import { TunerShell } from "./TunerShell";
import styles from "./tuner.module.css";

/* Real iPhone simulator captures of the 1.0.0 (4) build (6.9-inch, stored at 720 × 1564). */
const SCREENS: AppScreen[] = [
  {
    src: "/tuner/screens/1-chromatic-in-tune.png",
    alt: "Chromatic mode with the needle centred: A4, 440.0 Hz, +0.1 cent and an In tune label.",
    caption: "Chromatic: note, frequency and cents on a ±50 cent needle",
  },
  {
    src: "/tuner/screens/2-chromatic-off.png",
    alt: "Chromatic mode with the needle to the left in amber: E2, 81.6 Hz, −18.0 cent and the hint Flat · Tune up.",
    caption: "18 cents flat: it tells you which way to turn",
  },
  {
    src: "/tuner/screens/3-guitar-checks.png",
    alt: "Guitar mode in Standard tuning: E4 in tune on a guitar headstock, with green checks on G3, B3 and E4.",
    caption: "Guitar mode: every tuned string keeps its green check",
  },
  {
    src: "/tuner/screens/4-settings.png",
    alt: "Settings sheet: note spelling with sharps or flats, In-tune haptics and In-tune chime switched on, in-tune tolerance ±0.5 cent and the Normal noise filter.",
    caption: "Settings: tolerance, noise filter, tap and chime",
  },
];

/*
 * Tuner Pro Studio: product page and support page in one. This address is the app's
 * Support URL and Marketing URL in App Store Connect: never move it without a 301.
 */

const SUPPORT_MAIL = `mailto:${CONTACT_EMAIL}?subject=Tuner%20Pro%20Studio%20%E2%80%94%20support`;

export const metadata: Metadata = {
  title: "Tuner Pro Studio — Chromatic and guitar tuner for iPhone",
  description:
    "A precise chromatic and guitar tuner for iPhone and iPad. Works offline; your microphone audio is never recorded. Coming soon to the App Store.",
  alternates: { canonical: "https://www.simpleideas.net/tuner" },
};

export default function TunerPage() {
  return (
    <TunerShell>
      <p className={styles.kicker}>iPhone and iPad · Coming soon to the App Store</p>
      <h1>Tuner Pro Studio</h1>
      <p className={styles.lede}>
        A precise chromatic and guitar tuner with a wide, easy-to-read needle. Play one note, centre the needle, and
        you are in tune.
      </p>
      <a className={styles.button} href={SUPPORT_MAIL}>
        Email support
      </a>
      <p className={styles.meta}>
        Your email and message are used to answer your request. <a href="/kvkk?lang=en#processing">Personal data notice</a>.
      </p>

      <AppScreens items={SCREENS} shape="phone" label="Tuner Pro Studio screenshots" />

      <h2>What it does</h2>
      <ul>
        <li>Chromatic mode shows the note, octave, frequency and cents on a ±50 cent needle</li>
        <li>Guitar mode for Standard and Drop D: it detects the string you play, or tap a string to lock it</li>
        <li>Each string you tune gets a green check that stays until you pluck that string again</li>
        <li>A4 reference from 400 to 480 Hz, with 432, 440 and 442 Hz one tap away</li>
        <li>In-tune range from ±0.5 to ±10 cents (±0.5 by default), three noise filters, sharps or flats</li>
        <li>An optional tap and short chime when a note locks in tune</li>
        <li>Works offline: no account, no ads, nothing recorded</li>
      </ul>

      <h2>Common questions</h2>
      <h3>Why does it need the microphone?</h3>
      <p>
        To hear the note you play. The sound is analysed on your device as it arrives and is never recorded, saved or
        sent anywhere. The microphone turns off when you leave the app.
      </p>
      <h3>Can it tune a chord?</h3>
      <p>No. Play one note or one string at a time so the tuner can lock onto it.</p>
      <h3>The reading jumps or does not appear</h3>
      <p>
        Pluck a single string and let it ring, close to the phone. In a loud room, choose the Noisy filter in Settings.
        Very quiet notes are ignored on purpose.
      </p>
      <h3>The string is green but the needle is not exactly at zero</h3>
      <p>
        In Guitar mode, anything inside your in-tune range shows as centred. You can set the range in Settings from ±0.5 to
        ±10 cents.
      </p>
      <h3>How do I turn off the chime or the tap?</h3>
      <p>Open Settings with the slider button at the top right and switch off In-tune chime or In-tune haptics.</p>
      <h3>Which devices are supported?</h3>
      <p>iPhone and iPad with iOS 15 or later.</p>
      <h3>What data does Tuner Pro Studio collect?</h3>
      <p>
        None. Your settings are stored on your device only. See the <Link href="/tuner/privacy">privacy policy</Link>.
      </p>
      <h3>Something is not working</h3>
      <p>
        Email <a href={SUPPORT_MAIL}>{CONTACT_EMAIL}</a> with your device model and iOS version. Every message gets a
        personal answer.
      </p>
    </TunerShell>
  );
}
