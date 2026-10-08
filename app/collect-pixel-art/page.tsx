import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import { StudioNav } from "@/components/StudioNav";
import { SiteFooter } from "@/components/SiteFooter";
import { RevealFrame } from "@/components/RevealFrame";
import { collection, greatWave } from "@/lib/paintings";
import { CONTACT_EMAIL } from "@/lib/site";
import { museumFontVars } from "@/lib/fonts-museum";
import styles from "./cpa.module.css";

const SITE = "https://simpleideas.net";
const PAGE_URL = `${SITE}/collect-pixel-art`;
const OG_IMAGE = `${SITE}/cpa/og.jpg`;
const NOTIFY = `mailto:${CONTACT_EMAIL}?subject=Collect%20Pixel%20Art%20%E2%80%94%20notify%20me`;

const DESCRIPTION =
  "Restore the world's great paintings, pixel by pixel. Tap a colour, collect what matches and watch the original return from the top down. Coming soon to iPhone and Android from Simple Ideas.";

export const metadata: Metadata = {
  title: "Collect Pixel Art — coming soon from Simple Ideas",
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "Simple Ideas",
    title: "Collect Pixel Art",
    description: DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Collect Pixel Art — coming soon to iPhone and Android" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Collect Pixel Art",
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export const viewport: Viewport = {
  themeColor: "#201d1a",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  name: "Collect Pixel Art",
  url: PAGE_URL,
  image: OG_IMAGE,
  description: DESCRIPTION,
  gamePlatform: ["iOS", "Android"],
  applicationCategory: "GameApplication",
  operatingSystem: "iOS, Android",
  author: {
    "@type": "Organization",
    name: "Simple Ideas",
    url: `${SITE}/`,
    email: CONTACT_EMAIL,
  },
  publisher: { "@type": "Organization", name: "Simple Ideas" },
};

const ICON_PROPS = {
  width: 26,
  height: 26,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

const STEPS = [
  { numeral: "I.", title: "The wall falls", body: "A painting breaks into a wall of up to twelve colours." },
  {
    numeral: "II.",
    title: "Tap a colour",
    body: "Matching pixels are collected from the bottom row up. Plan ahead — space is tight.",
  },
  {
    numeral: "III.",
    title: "The painting returns",
    body: "Clear the wall within par for three stars, and the original is revealed, top to bottom.",
  },
];

const FEATURES = [
  {
    title: "Gallery wings",
    body: "Fill wings by art movement, from the Renaissance to Ukiyo-e.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M3 20V10a9 9 0 0 1 18 0v10" />
        <path d="M8 20v-9a4 4 0 0 1 8 0v9" />
        <path d="M2 20h20" />
      </svg>
    ),
  },
  {
    title: "Every painting has a story",
    body: "The artist, the history, a Did you know? and a closer look at the details.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M3 5h6a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H3z" />
        <path d="M21 5h-6a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h7z" />
      </svg>
    ),
  },
  {
    title: "Share your restoration",
    body: "Post the finished work as a story-sized card.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M12 15V4M8 8l4-4 4 4" />
        <path d="M5 13v6h14v-6" />
      </svg>
    ),
  },
  {
    title: "Light or dark galleries",
    body: "Two museum themes. Interface in English and Turkish.",
    icon: (
      <svg {...ICON_PROPS}>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 3.5v17" />
        <path d="M12 3.5a8.5 8.5 0 0 1 0 17z" fill="currentColor" />
      </svg>
    ),
  },
];

export default function CollectPixelArtPage() {
  return (
    <div className={`museum ${museumFontVars} ${styles.page}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <StudioNav variant="museum" current="/collect-pixel-art" />

      <main>
        {/* ── HERO ─────────────────────────────────────────── */}
        <section className={styles.hero} aria-labelledby="cpa-title">
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <Image
                className={styles.appIcon}
                src="/cpa/icon.png"
                alt="Collect Pixel Art app icon"
                width={512}
                height={512}
                sizes="96px"
                preload
              />
              <p className={styles.eyebrow}>A new game from Simple Ideas</p>
              <h1 id="cpa-title" className={styles.h1}>
                Collect Pixel Art
              </h1>
              <p className={styles.lede}>Restore the world&apos;s great paintings, pixel by pixel.</p>
              <p className={styles.body}>
                Each masterpiece crumbles into a wall of coloured pixels. Tap a colour, collect what matches, and watch
                the original return from the top down.
              </p>
              <span className={styles.pill}>Coming soon · iPhone + Android</span>
              <div className={styles.actions}>
                <a href={NOTIFY} className={styles.gb}>
                  Tell me when it&apos;s out
                </a>
                <Link href="/" className={styles.tl}>
                  Meanwhile, play Almost in Orbit
                  <span className={styles.arrow} aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </div>

            <div className={styles.heroArt}>
              <RevealFrame
                painting={greatWave}
                size="hero"
                reveal={0.55}
                seam
                preload
                sizes="(max-width: 720px) 92vw, (max-width: 1100px) 640px, 640px"
                className={styles.heroFrame}
              />
              <span className={`${styles.placard} ${styles.heroPlacard}`}>
                <span className={styles.placardArtist}>{greatWave.artist}</span>
                <span className={styles.placardTitle}>{greatWave.title}</span>
              </span>
            </div>
          </div>
        </section>

        {/* ── HOW IT PLAYS ─────────────────────────────────── */}
        <section className={styles.section} aria-labelledby="how-title">
          <div className={styles.inner}>
            <p className={styles.eyebrow}>The game</p>
            <h2 id="how-title" className={styles.h2}>
              How it plays
            </h2>
            <ol className={styles.steps}>
              {STEPS.map((step) => (
                <li key={step.title} className={styles.step}>
                  <span className={styles.numeral} aria-hidden="true">
                    {step.numeral}
                  </span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── YOUR MUSEUM (light gallery wall) ─────────────── */}
        <section className={`${styles.section} ${styles.wall}`} aria-labelledby="museum-title">
          <div className={styles.inner}>
            <p className={styles.eyebrow}>Your museum</p>
            <h2 id="museum-title" className={styles.h2}>
              Build a museum of your own.
            </h2>
            <ul className={styles.feats}>
              {FEATURES.map((feature) => (
                <li key={feature.title} className={styles.feat}>
                  <span className={styles.featIcon}>{feature.icon}</span>
                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── FROM THE COLLECTION ──────────────────────────── */}
        <section className={styles.section} aria-labelledby="coll-title">
          <div className={styles.inner}>
            <div className={styles.collHead}>
              <div>
                <p className={styles.eyebrow}>Renaissance to Ukiyo-e</p>
                <h2 id="coll-title" className={`${styles.h2} ${styles.collTitle}`}>
                  From the collection
                </h2>
              </div>
              <p className={styles.hint}>
                <span className={styles.hintHover}>Hover a frame to see the original.</span>
                <span className={styles.hintTap}>Tap a frame to see the original.</span>
              </p>
            </div>

            <ul className={styles.pieces}>
              {collection.map((painting) => (
                <li key={painting.slug} className={styles.piece}>
                  <div className={styles.pieceBox}>
                    <RevealFrame
                      painting={painting}
                      size="small"
                      interactive
                      sizes="(max-width: 720px) 45vw, (max-width: 1100px) 44vw, 270px"
                    />
                  </div>
                  <span className={`${styles.placard} ${styles.pieceLabel}`}>
                    <span className={styles.placardArtist}>{painting.artist}</span>
                    <span className={styles.placardTitle}>{painting.title}</span>
                    {painting.year ? <span className={styles.placardYear}>{painting.year}</span> : null}
                  </span>
                </li>
              ))}
            </ul>
            <p className={styles.note}>Every artwork in the game is in the public domain.</p>
          </div>
        </section>

        {/* ── CLOSING CTA ──────────────────────────────────── */}
        <section className={styles.section} aria-labelledby="cta-title">
          <div className={styles.cta}>
            <span className={styles.ornament} aria-hidden="true">
              <i />
              <b />
              <i />
            </span>
            <h2 id="cta-title" className={`${styles.h2} ${styles.ctaTitle}`}>
              Coming soon to iPhone and Android.
            </h2>
            <a href={NOTIFY} className={styles.gb}>
              Tell me when it&apos;s out
            </a>
          </div>
        </section>
      </main>

      <SiteFooter variant="museum" />
    </div>
  );
}
