import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { shareMetadata } from "@/lib/share";
import { CONTACT_EMAIL, SLEDLINGS_STORE } from "@/lib/site";
import { AppScreens, type AppScreen } from "@/components/AppScreens";
import { StoreBadges } from "@/components/StoreBadges";
import { SledlingsShell } from "./SledlingsShell";
import styles from "./sledlings.module.css";

/*
 * Sledlings: Kart Rush: game page and support page in one (the store listing's Support and Marketing URL).
 * Matched to the first store version, 1.0.0 (game facts: Race docs/site/store-build-pages.md and docs/store/listing.md
 * at game commit 10de45bb): seven riders and six vehicles, Online Race, rooms from Friends, one optional rewarded video
 * after a race, nothing sold. The store badges appear by themselves once SLEDLINGS_STORE (lib/site.ts) has the links.
 * Public texts never say "bot" (the game's rule): a race has six racers on the grid.
 * Its privacy policy, terms of service and account deletion page live under this address
 * (/sledlings/privacy, /sledlings/terms, /sledlings/delete-account); those addresses go into App Store Connect
 * and Google Play, so never move them without a 301.
 */

/* Captures of the game on a 9:16 phone (stored at 720 × 1280). */
const RACE_SCREENS: AppScreen[] = [
  {
    src: "/sledlings/screens/cupcake-portrait-bounce.jpg",
    alt: "A fox on a sled races down a pink candy course. Lap 1 of 3, 166 km/h, in 1st place of 6, with a hint: hold the left or right side to steer.",
    caption: "Three laps in the candy world",
  },
  {
    src: "/sledlings/screens/raised-shield.jpg",
    alt: "The fox rider on a wooden sled inside a clear blue snow globe shield, on a snowy slope with pine trees.",
    caption: "A snow globe shield keeps hits off",
  },
  {
    src: "/sledlings/screens/held-hot-cocoa.jpg",
    alt: "The fox rider holds up a mug of hot cocoa while sledding through the snow.",
    caption: "Hot cocoa for a boost",
  },
  {
    src: "/sledlings/screens/thrown-snowball.jpg",
    alt: "A snowball flies low over the snow, trailing a blue streak.",
    caption: "A snowball on its way",
  },
];

const MENU_SCREENS: AppScreen[] = [
  {
    src: "/sledlings/screens/adventure-portrait.jpg",
    alt: "The Adventure tab of Choose a Course: World 3 · Sunset, a winding road of course stops with medals, three-lap markers and locked stops ahead.",
    caption: "Adventure: a road of stops with medals",
  },
  {
    src: "/sledlings/screens/races-portrait.jpg",
    alt: "The Races tab of Choose a Course: course cards for Pine Loop and Pine Valley (Snow), Cactus Canyon and Cactus Loop (Sand Dunes), Cupcake Creek (Candy Land) and Cupcake Loop (Candy).",
    caption: "Races: pick a course and go",
  },
];

/* The emblems of the Adventure road's four parts, as their banners name them in the game. */
const ROAD = ["Sunrise", "Midday", "Sunset", "Nightfall"] as const;

type Course = { slug: string; name: string; world: string; kind: string };

/* The course pictures from the game's own course picker, in world order. */
const COURSES: Course[] = [
  { slug: "pine-valley", name: "Pine Valley", world: "Snow", kind: "Downhill run" },
  { slug: "pine-loop", name: "Pine Loop", world: "Snow", kind: "Three-lap circuit" },
  { slug: "lamplight-lane", name: "Lamplight Lane", world: "City", kind: "Downhill run" },
  { slug: "neon-sprint", name: "Neon Sprint", world: "City", kind: "Downhill run" },
  { slug: "neon-loop", name: "Neon Loop", world: "City", kind: "Three-lap circuit" },
  { slug: "cactus-canyon", name: "Cactus Canyon", world: "Dunes", kind: "Downhill run" },
  { slug: "cactus-loop", name: "Cactus Loop", world: "Dunes", kind: "Three-lap circuit" },
  { slug: "cupcake-creek", name: "Cupcake Creek", world: "Candy", kind: "Downhill run" },
  { slug: "cupcake-loop", name: "Cupcake Loop", world: "Candy", kind: "Three-lap circuit" },
  { slug: "pumice-pass", name: "Pumice Pass", world: "Volcano", kind: "Downhill run" },
  { slug: "pumice-loop", name: "Pumice Loop", world: "Volcano", kind: "Three-lap circuit" },
];

const SUPPORT_MAIL = `mailto:${CONTACT_EMAIL}?subject=Sledlings%3A%20Kart%20Rush%20%E2%80%94%20support`;

const PAGE_URL = "https://www.simpleideas.net/sledlings";
const TITLE = "Sledlings: Kart Rush — A kart and sled racer for iPhone and Android";
const DESCRIPTION =
  "Seven cute animal riders, eleven courses across five worlds, snowballs to throw, Online Race and rooms to race your friends. Free to play, and nothing is sold.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  ...shareMetadata({ card: "sledlings", title: TITLE, description: DESCRIPTION, url: PAGE_URL }),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  name: "Sledlings: Kart Rush",
  url: PAGE_URL,
  image: "https://www.simpleideas.net/sledlings/og.jpg",
  description:
    "A kart and sled racer for phones: seven animal riders and six vehicles, eleven courses across five worlds, items to throw, drop and block with, an Adventure road of 34 stops, Online Race and rooms to race friends by code.",
  genre: ["Racing", "Kart racing"],
  gamePlatform: ["iOS", "Android"],
  applicationCategory: "GameApplication",
  operatingSystem: "iOS, Android",
  inLanguage: "en",
  author: { "@type": "Organization", name: "Simple Ideas", url: "https://www.simpleideas.net/" },
  publisher: { "@type": "Organization", name: "Simple Ideas" },
};

export default function SledlingsPage() {
  const hasStore = Boolean(SLEDLINGS_STORE.appStore || SLEDLINGS_STORE.googlePlay);
  return (
    <SledlingsShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Image
        className={styles.icon}
        src="/sledlings/app-icon.jpg"
        alt="Sledlings: Kart Rush app icon: a fox in goggles and a red scarf driving an orange kart"
        width={512}
        height={512}
        sizes="(max-width: 720px) 72px, 88px"
        preload
      />
      <p className={styles.kicker}>iPhone and Android · Free to play</p>
      <h1 className={styles.wordmark}>
        <Image
          src="/sledlings/wordmark.webp"
          alt="Sledlings: Kart Rush"
          width={960}
          height={281}
          sizes="(max-width: 720px) 300px, 400px"
          preload
        />
      </h1>
      <p className={styles.lede}>
        A kart and sled racer for phones. Pick one of seven cute animal riders, throw a snowball at the leader and race
        your friends down eleven courses.
      </p>
      {hasStore && (
        <div className={styles.stores}>
          <StoreBadges store={SLEDLINGS_STORE} />
        </div>
      )}
      <a className={styles.button} href={SUPPORT_MAIL}>
        Email support
      </a>
      <p className={styles.meta}>
        Your email and message are used to answer your request. <a href="/kvkk?lang=en#processing">Personal data notice</a>.
      </p>
      <ul className={styles.legal}>
        <li>
          <Link href="/sledlings/privacy">Privacy policy</Link>
        </li>
        <li>
          <Link href="/sledlings/terms">Terms of service</Link>
        </li>
        <li>
          <Link href="/sledlings/delete-account">Delete your account</Link>
        </li>
      </ul>

      <AppScreens items={RACE_SCREENS} shape="phone169" label="Sledlings: Kart Rush screenshots" />

      <h2>The game</h2>
      <ul>
        <li>
          Seven cute animal riders: Cinnamon the fox, Button the husky, Cotton the snow hare, Chestnut the reindeer,
          Nimbus the snow leopard, Dumpling the elephant and Nutmeg the squirrel
        </li>
        <li>Six vehicles, from the Classic Sled to the Red Frame Kart. Start with three riders and two vehicles, and open the rest with the coins you win.</li>
        <li>Eleven courses across five worlds: snow, city, dunes, candy and volcano</li>
        <li>Downhill runs and three-lap circuits, at four times of day</li>
        <li>
          Items to throw, drop and block with: snowballs (one of them homing), an ice slick, an icicle, a snow globe
          shield, and hot cocoa for a boost
        </li>
        <li>An Adventure road of 34 stops with medals to win</li>
        <li>Free races, Online Race for a quick race with whoever is searching, and rooms to race your friends by code</li>
        <li>Free to play, and nothing is sold. One optional video after a race doubles that race’s coins.</li>
        <li>In English</li>
      </ul>

      <h2>Eleven courses, five worlds</h2>
      <p>Every world has a downhill run and a three-lap circuit. The city has one more run.</p>
      <ul className={styles.courses} aria-label="Courses">
        {COURSES.map((course) => (
          <li key={course.slug}>
            <figure className={styles.course}>
              <Image
                className={styles.courseImg}
                src={`/sledlings/courses/${course.slug}.png`}
                alt=""
                width={384}
                height={256}
                sizes="(max-width: 720px) 44vw, 243px"
              />
              <figcaption className={styles.courseCap}>
                <span className={styles.courseName}>{course.name}</span>
                <span className={styles.courseKind}>
                  {course.world} · {course.kind}
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <h2>Adventure and races</h2>
      <p>
        The Adventure is a road of 34 stops with medals to win, from sunrise to nightfall. Free races let you pick a
        course and go. Online Race gives you a quick race with whoever is searching right then, six racers on the grid.
        To race friends, open a room from Friends and share its short code.
      </p>
      <ul className={styles.road} aria-label="The Adventure road">
        {ROAD.map((stage) => (
          <li key={stage}>
            <Image
              className={styles.roadImg}
              src={`/sledlings/worlds/${stage.toLowerCase()}.png`}
              alt=""
              width={176}
              height={176}
              sizes="88px"
            />
            {stage}
          </li>
        ))}
      </ul>
      <AppScreens items={MENU_SCREENS} shape="phone169" label="Sledlings: Kart Rush menus" className={styles.pair} />

      <h2>Common questions</h2>
      {!hasStore && (
        <>
          <h3>Where can I get it?</h3>
          <p>Sledlings is on its way to the App Store and Google Play. This page links to both stores as soon as it is there.</p>
        </>
      )}
      <h3>Does it cost anything?</h3>
      <p>
        No. Sledlings is free to play, and nothing in it is sold. You win coins in races and open riders and vehicles
        with them.
      </p>
      <h3>Are there ads?</h3>
      <p>
        One kind, and only if you choose it: after a race that paid coins, you can watch one short video to double that
        race’s coins. No banners, and no ad ever starts by itself. The ads come from Google AdMob; how they use data is
        in the <Link href="/sledlings/privacy#ads">privacy policy</Link>.
      </p>
      <h3>Do I need an account?</h3>
      <p>
        No. Playing alone needs no account: your progress is saved on your device. Racing online needs no sign-up
        either: the first time you press Online Race or Friends, the game asks once and then gives you an anonymous
        player account.
      </p>
      <h3>Can I chat with other players?</h3>
      <p>
        There is no chat. Names come from a word list, and in a room you can send four fixed phrases and emotes, nothing
        typed. You can block, mute or report any player: tap them in a race or a room, in your friends list or in the
        list of players you raced with.
      </p>
      <h3>How do I delete my account?</h3>
      <p>
        In the game at Settings › Services › Privacy &amp; data › Delete account, or by email. The steps are on the{" "}
        <Link href="/sledlings/delete-account">account deletion page</Link>.
      </p>
      <h3>What data does the game collect?</h3>
      <p>
        Play data about how the game is played, sent to Google Analytics without names or codes; the ad network’s data
        for the optional video; a record of the install (and on iPhone, the app’s sessions) for Meta, to measure our
        own ads; and crash reports. Where the law asks for it, the game asks you first, and everyone can change these
        choices at Settings › Services › Privacy &amp; data › Manage privacy choices. Online play uses an anonymous
        player account. The details are in the <Link href="/sledlings/privacy">privacy policy</Link>.
      </p>
      <h3>Something is not working</h3>
      <p>
        Email <a href={SUPPORT_MAIL}>{CONTACT_EMAIL}</a> with your device model and system version. Every message gets a
        personal answer.
      </p>
    </SledlingsShell>
  );
}
