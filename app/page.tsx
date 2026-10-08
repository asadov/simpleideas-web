import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Starfield } from "@/components/Starfield";
import { RevealObserver } from "@/components/RevealObserver";
import { StudioNav } from "@/components/StudioNav";
import { SiteFooter } from "@/components/SiteFooter";
import { StoreBadges } from "@/components/StoreBadges";
import { PhoneVideo } from "@/components/PhoneVideo";
import { Screenshots } from "@/components/Screenshots";
import { RevealFrame } from "@/components/RevealFrame";
import { screenshots } from "@/lib/screenshots";
import { greatWave } from "@/lib/paintings";
import { CONTACT_EMAIL, STORE, TRAILER } from "@/lib/site";
import { museumFontVars } from "@/lib/fonts-museum";
import styles from "./page.module.css";

const SITE = "https://simpleideas.net";

export const metadata: Metadata = {
  title: "Almost in Orbit — a handcrafted roguelite space shooter",
  description:
    "Out now on iPhone and Android. A handcrafted roguelite space shooter: one thumb, endless swarms, zero ads. $2.99 — no in-app purchases, no energy timers, plays offline.",
  alternates: { canonical: `${SITE}/` },
  openGraph: {
    type: "website",
    url: `${SITE}/`,
    siteName: "Simple Ideas",
    title: "Almost in Orbit",
    description:
      "Out now on iPhone and Android. A handcrafted roguelite space shooter — one thumb, endless swarms, zero ads. $2.99, pay once.",
    images: [
      {
        url: `${SITE}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Almost in Orbit — out now on iPhone and Android",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Almost in Orbit",
    description: "Out now on iPhone and Android. A handcrafted roguelite space shooter — one thumb, endless swarms, zero ads.",
    images: [`${SITE}/og-image.png`],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  name: "Almost in Orbit",
  url: `${SITE}/`,
  image: `${SITE}/og-image.png`,
  description:
    "A handcrafted roguelite space shooter for iPhone and Android. One-thumb controls, branching sector maps, stackable elemental drones and three colossal bosses. Out now — premium, no ads, no in-app purchases.",
  genre: ["Roguelite", "Shoot 'em up"],
  gamePlatform: ["iOS", "Android"],
  applicationCategory: "GameApplication",
  operatingSystem: "iOS, Android",
  sameAs: [STORE.appStore, STORE.googlePlay],
  author: {
    "@type": "Organization",
    name: "Simple Ideas",
    url: `${SITE}/`,
    email: CONTACT_EMAIL,
  },
  publisher: { "@type": "Organization", name: "Simple Ideas" },
  offers: {
    "@type": "Offer",
    price: "2.99",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: `${SITE}/`,
  },
};

const ICON_PROPS = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

const FEATURES = [
  {
    title: "Chart the sector",
    body:
      "Every run draws a fresh branching map across three sectors. Battles, elites, shops, a place to catch your breath and the odd mystery node — your route, your risk.",
    icon: (
      <svg {...ICON_PROPS}>
        <circle cx="12" cy="3.5" r="2.3" />
        <circle cx="5" cy="12" r="2.3" />
        <circle cx="19" cy="12" r="2.3" />
        <circle cx="12" cy="20.5" r="2.3" />
        <path d="M10.3 5.2 6.7 10M13.7 5.2l3.6 4.8M6.7 14l3.6 4.8M17.3 14l-3.6 4.8" />
      </svg>
    ),
  },
  {
    title: "Swarms with choreography",
    body: "Twelve formation patterns, from snaking trains to pincer dives. Wipe out a whole swarm and it may drop a power-up.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M12 2.5l2 2-2 2-2-2zM7.5 8l2 2-2 2-2-2zM16.5 8l2 2-2 2-2-2zM4 14.5l2 2-2 2-2-2zM20 14.5l2 2-2 2-2-2z" />
        <path d="M12 13v8" />
      </svg>
    ),
  },
  {
    title: "Stack your drones",
    body: "Ice, fire, lightning and acid wingmates, three tiers each. They turn a pea-shooter into a light show.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M12 3l5 10H7z" />
        <path d="M12 13v7" />
        <circle cx="4.5" cy="15" r="2" />
        <circle cx="19.5" cy="15" r="2" />
        <path d="M4.5 18.5v2.5M19.5 18.5v2.5" />
      </svg>
    ),
  },
  {
    title: "Bosses that fill the screen",
    body: "Every sector ends with a colossal boss. One of them has a beam you will learn to respect.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M2 11a10 10 0 0 1 20 0" />
        <path d="M6 11a6 6 0 0 1 12 0" />
        <circle cx="12" cy="9.5" r="1.5" />
        <path d="M12 16l3 5H9z" />
      </svg>
    ),
  },
  {
    title: "Die richer",
    body: "Every run feeds permanent upgrades in the Hangar. The sector resets — your arsenal doesn't.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M4 20V9l8-5 8 5v11" />
        <path d="M12 19v-8M8.5 14.5 12 11l3.5 3.5" />
      </svg>
    ),
  },
  {
    title: "Premium, full stop",
    body: (
      <>
        <span className={styles.goldText}>$2.99 once.</span> No ads, no in-app purchases, no energy timers. Plays
        offline.
      </>
    ),
    gold: true,
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

const CREW = [
  { role: "design", who: "Salih" },
  { role: "code", who: "Salih" },
  { role: "art / vfx", who: "Salih" },
  { role: "balance", who: "Salih" },
  { role: "marketing", who: "Salih" },
  { role: "coffee runs", who: "also Salih" },
];

const pad = (n: number) => String(n).padStart(2, "0");

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Starfield variant="hero" />
      <RevealObserver />
      <div className={styles.nebula} aria-hidden="true" />

      <StudioNav current="/" />

      <main className={styles.main}>
        <div className={styles.spine} aria-hidden="true" />

        {/* ── HERO ─────────────────────────────────────────── */}
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroCopy}>
            <p className={styles.pill}>
              <span className={styles.node} aria-hidden="true" />
              <span className={styles.pulse} aria-hidden="true" />
              <span>Out now · iPhone + Android</span>
            </p>
            <Image
              className={styles.logo}
              src="/aio/logo.png"
              alt="Almost in Orbit"
              width={800}
              height={757}
              sizes="(max-width: 720px) 260px, 360px"
              preload
            />
            <h1 id="hero-title" className={styles.h1}>
              A handcrafted roguelite space shooter.
            </h1>
            <p className={styles.sub}>One thumb. Endless swarms. Zero ads.</p>
            <StoreBadges size="hero" />
            <p className={styles.price}>$2.99 · Pay once, own everything</p>
          </div>

          <div className={styles.heroMedia}>
            <svg className={styles.orbit} viewBox="0 0 640 420" fill="none" aria-hidden="true">
              <ellipse
                cx="320"
                cy="210"
                rx="300"
                ry="86"
                transform="rotate(-22 320 210)"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="2 6"
              />
              <circle cx="596" cy="96" r="4" fill="currentColor" />
            </svg>
            <PhoneVideo
              src={TRAILER.src}
              poster={TRAILER.poster}
              width={TRAILER.width}
              height={TRAILER.height}
              label="Almost in Orbit official trailer"
              caption={`Official trailer · ${TRAILER.duration}`}
            />
          </div>
        </section>

        {/* ── 01 · THE GAME ────────────────────────────────── */}
        <section className={`${styles.section} ${styles.game}`} id="game" aria-labelledby="game-title">
          <p className={styles.eyebrow}>
            <span className={styles.node} aria-hidden="true" />
            <span>
              <b className={styles.num}>01</b> · the game
            </span>
          </p>
          <h2 id="game-title" className={`${styles.h2} ${styles.gameTitle}`} data-reveal>
            Short runs. Long consequences.
          </h2>

          <div className={styles.cards}>
            <span className={`${styles.tick} ${styles.tickTL}`} aria-hidden="true" />
            <span className={`${styles.tick} ${styles.tickTR}`} aria-hidden="true" />
            <span className={`${styles.tick} ${styles.tickBL}`} aria-hidden="true" />
            <span className={`${styles.tick} ${styles.tickBR}`} aria-hidden="true" />
            {FEATURES.map((feature, i) => (
              <article key={feature.title} className={styles.cell} data-reveal>
                <span className={styles.cellIndex} aria-hidden="true">
                  {pad(i + 1)}
                </span>
                <span className={`${styles.icon} ${feature.gold ? styles.iconGold : ""}`}>{feature.icon}</span>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── 02 · SCREENS ─────────────────────────────────── */}
        <section className={styles.section} id="screens" aria-labelledby="screens-title">
          <Screenshots
            items={screenshots}
            eyebrow={
              <p className={styles.eyebrow}>
                <span className={styles.node} aria-hidden="true" />
                <span>
                  <b className={styles.num}>02</b> · screens
                </span>
              </p>
            }
            heading={
              <h2 id="screens-title" className={styles.h2}>
                Straight from the device.
              </h2>
            }
          />
        </section>

        {/* ── 03 · NEXT FROM THE STUDIO ────────────────────── */}
        <section className={styles.section} id="next" aria-labelledby="next-title">
          <h2 id="next-title" className={`${styles.eyebrow} ${styles.eyebrowTitle}`}>
            <span className={styles.node} aria-hidden="true" />
            <span>
              <b className={styles.num}>03</b> · next from the studio
            </span>
          </h2>

          <div className={`museum ${museumFontVars} ${styles.teaser}`} data-reveal>
            <div className={styles.teaserArt}>
              <RevealFrame
                painting={greatWave}
                size="teaser"
                seam
                sizes="(max-width: 720px) 90vw, (max-width: 1100px) 440px, 440px"
                className={styles.teaserFrame}
              />
              <span className={styles.placard}>
                <span className={styles.placardArtist}>{greatWave.artist}</span>
                <span className={styles.placardTitle}>{greatWave.title}</span>
              </span>
            </div>

            <div className={styles.teaserCopy}>
              <Image
                className={styles.teaserIcon}
                src="/cpa/icon.png"
                alt="Collect Pixel Art app icon"
                width={512}
                height={512}
                sizes="72px"
              />
              <h3 className={styles.teaserTitle}>Collect Pixel Art</h3>
              <p className={styles.teaserLede}>Restore famous paintings, pixel by pixel.</p>
              <span className={styles.chip}>Coming soon · iPhone + Android</span>
              <div>
                <Link href="/collect-pixel-art" className={styles.gbtn}>
                  Take a look <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 04 · PRESS ───────────────────────────────────── */}
        <section className={styles.section} id="press" aria-labelledby="press-title">
          <p className={`${styles.eyebrow} ${styles.eyebrowTitle}`}>
            <span className={styles.node} aria-hidden="true" />
            <span>
              <b className={styles.num}>04</b> · press
            </span>
          </p>
          <div className={styles.pressBand} data-reveal>
            <div>
              <h2 id="press-title" className={`${styles.h2} ${styles.pressTitle}`}>
                Writing about mobile games?
              </h2>
              <p>Factsheet, fresh screenshots and the trailer — all in one place.</p>
            </div>
            <Link href="/press" className={styles.btn}>
              Open the press kit
            </Link>
          </div>
        </section>

        {/* ── 05 · THE STUDIO ──────────────────────────────── */}
        <section className={styles.studio} id="studio" aria-labelledby="studio-title">
          <div className={styles.studioCopy}>
            <p className={styles.eyebrow}>
              <span className={`${styles.node} ${styles.nodeBoss}`} aria-hidden="true" />
              <span>
                <b className={styles.num}>05</b> · the studio
              </span>
            </p>
            <h2 id="studio-title" className={`${styles.h2} ${styles.studioTitle}`} data-reveal>
              Final boss: the developer
            </h2>
            <p data-reveal>
              Simple Ideas is Salih — a one-person studio in İzmir, Türkiye. Five years of shipping mobile apps, a
              psychology degree, and a lifelong shmup habit that finally became a game.
            </p>
            <p data-reveal>
              Almost in Orbit is the studio&apos;s first title: designed, coded, balanced and launched by the same pair
              of hands. Collect Pixel Art is next.
            </p>
            <a className={styles.mail} href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
          </div>

          <div className={styles.manifest} data-reveal>
            <span className={`${styles.tick} ${styles.tickTL} ${styles.tickSm}`} aria-hidden="true" />
            <span className={`${styles.tick} ${styles.tickBR} ${styles.tickSm}`} aria-hidden="true" />
            <h3>Crew manifest</h3>
            <ul>
              {CREW.map((row) => (
                <li key={row.role}>
                  <span>{row.role}</span>
                  <span className={styles.leader} aria-hidden="true" />
                  <span className={styles.who}>{row.who}</span>
                </li>
              ))}
            </ul>
            <p className={styles.crewNote}>crew size: 1 · morale: high</p>
          </div>
        </section>
      </main>

      <SiteFooter variant="space" />
    </>
  );
}
