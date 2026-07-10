import type { Metadata } from "next";
import Link from "next/link";
import { Starfield } from "@/components/Starfield";
import { OrbitMark } from "@/components/OrbitMark";
import { GameplayVideo } from "@/components/GameplayVideo";
import { Screenshots } from "@/components/Screenshots";
import { RevealObserver } from "@/components/RevealObserver";
import { screenshots } from "@/lib/screenshots";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Almost in Orbit — a handcrafted roguelite space shooter",
  description:
    "A premium roguelite shmup for iOS and Android. One-thumb controls, elemental drones, branching star maps, three colossal bosses. $2.99 — no ads, no in-app purchases.",
  alternates: { canonical: "https://simpleideas.net/" },
  openGraph: {
    type: "website",
    url: "https://simpleideas.net/",
    siteName: "Simple Ideas",
    title: "Almost in Orbit",
    description: "A handcrafted roguelite space shooter. One thumb, endless swarms, zero ads. $2.99 on iOS and Android.",
    images: [{ url: "https://simpleideas.net/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Almost in Orbit",
    description: "A handcrafted roguelite space shooter. One thumb, endless swarms, zero ads.",
    images: ["https://simpleideas.net/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  name: "Almost in Orbit",
  url: "https://simpleideas.net/",
  image: "https://simpleideas.net/og-image.png",
  description:
    "A handcrafted roguelite space shooter for iOS and Android. One-thumb controls, elemental drones, branching star maps and three colossal bosses. Premium — no ads, no in-app purchases.",
  genre: ["Roguelite", "Shoot 'em up"],
  gamePlatform: ["iOS", "Android"],
  applicationCategory: "GameApplication",
  operatingSystem: "iOS, Android",
  author: {
    "@type": "Organization",
    name: "Simple Ideas",
    url: "https://simpleideas.net/",
    email: "salih@simpleideas.net",
  },
  publisher: { "@type": "Organization", name: "Simple Ideas" },
  offers: { "@type": "Offer", price: "2.99", priceCurrency: "USD" },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Starfield variant="hero" />
      <RevealObserver />
      <div className={styles.nebula} aria-hidden="true" />

      <div className={styles.frame}>
        <header className={styles.hero}>
          <span className="node" aria-hidden="true" />
          <span className={`${styles.eyebrow} ${styles.heroEyebrow}`}>
            <span className={styles.pulse} aria-hidden="true" /> Coming soon <b>· iOS + Android</b>
          </span>
          <h1 className={styles.h1}>
            <span className={styles.row}>Almost</span>
            <span className={styles.row}>In <OrbitMark />rbit</span>
          </h1>
          <p className={styles.tagline}>
            A handcrafted roguelite space shooter. <strong>One thumb, endless swarms, zero ads.</strong>
          </p>

          <div className={styles.cta}>
            <div className={styles.stores}>
              <span className={styles.store}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.05 12.54c-.03-2.89 2.36-4.28 2.47-4.35-1.35-1.97-3.44-2.24-4.18-2.27-1.78-.18-3.47 1.05-4.37 1.05-.9 0-2.29-1.02-3.77-1-1.94.03-3.72 1.13-4.72 2.86-2.01 3.49-.51 8.66 1.45 11.49.96 1.39 2.1 2.94 3.6 2.89 1.45-.06 1.99-.93 3.74-.93s2.24.93 3.77.9c1.56-.03 2.54-1.41 3.49-2.8 1.1-1.61 1.55-3.17 1.58-3.25-.04-.02-3.03-1.16-3.06-4.59zM14.16 4.06c.8-.97 1.34-2.32 1.19-3.66-1.15.05-2.55.77-3.38 1.74-.74.86-1.39 2.23-1.22 3.55 1.29.1 2.6-.65 3.41-1.63z" />
                </svg>
                <span>
                  <small>Coming soon on the</small>
                  <b>App Store</b>
                </span>
              </span>
              <span className={styles.store}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3.6 1.8c-.32.34-.51.86-.51 1.54v17.32c0 .68.19 1.2.52 1.53l.08.08L13.4 12.6v-.22L3.69 1.72l-.09.08zm13.05 7.5-3.24 3.24v.22l3.25 3.25 4.05-2.3c1.16-.66 1.16-1.74 0-2.4l-4.06-2.3v.29zm-.73-.42L4.61 1.24c-.53-.3-1-.26-1.32.05l10.16 10.16 2.47-2.57zm0 6.24-2.47-2.47L3.28 22.71c.32.31.79.35 1.33.05l11.31-6.44v-1.2z" />
                </svg>
                <span>
                  <small>Coming soon on</small>
                  <b>Google Play</b>
                </span>
              </span>
            </div>

            <span className={styles.price}>$2.99 · pay once, own everything</span>
          </div>
        </header>

        {/* ── VIDEO ────────────────────────────────────────── */}
        <section className={styles.section} id="run">
          <span className="node" aria-hidden="true" />
          <div className={styles.runGrid}>
            <div data-reveal>
              <span className={styles.eyebrow}>01 · gameplay</span>
              <h2 className={styles.heading}>Watch a full run</h2>
              <p className={styles.lede}>
                Raw gameplay, captured straight from the device. No cuts, no cinematics — just a ship, a bad
                neighbourhood, and one thumb doing all the work.
              </p>
            </div>
            <GameplayVideo />
          </div>
        </section>

        {/* ── FEATURES ─────────────────────────────────────── */}
        <section className={styles.section} id="game">
          <span className="node" aria-hidden="true" />
          <span data-reveal className={styles.eyebrow}>
            02 · the game
          </span>
          <h2 data-reveal className={styles.heading}>
            Short runs. Long consequences.
          </h2>
          <div className={styles.cards}>
            <article data-reveal className={styles.card}>
              <svg viewBox="0 0 32 32" aria-hidden="true">
                <circle cx={6} cy={26} r={2.5} />
                <circle cx={16} cy={16} r={2.5} />
                <circle cx={8} cy={8} r={2.5} />
                <circle cx={26} cy={6} r={2.5} />
                <circle cx={26} cy={24} r={2.5} />
                <path d="M7.5 23.8 14.5 18M9.7 9.8l4.6 4.4M18.2 14.2 23.9 8M18 17.8l6 4.6" />
              </svg>
              <h3>Chart the sector</h3>
              <p>
                Every run draws a fresh branching map. Battles, elites, shops, meteor fields, places to catch your
                breath — your route, your risk.
              </p>
            </article>
            <article data-reveal className={styles.card}>
              <svg viewBox="0 0 32 32" aria-hidden="true">
                <path d="M16 4l4.5 6.5h-9z" />
                <path d="M7 15l4.5 6.5h-9z" />
                <path d="M25 15l4.5 6.5h-9z" />
                <path d="M16 19l4.5 6.5h-9z" />
              </svg>
              <h3>Swarms with choreography</h3>
              <p>
                Eight formation patterns, from snaking trains to pincer dives. Full-clear a wave and it drops a
                fire-rate boost.
              </p>
            </article>
            <article data-reveal className={styles.card}>
              <svg viewBox="0 0 32 32" aria-hidden="true">
                <circle cx={16} cy={16} r={3} />
                <ellipse cx={16} cy={16} rx={12} ry={5.5} transform="rotate(-20 16 16)" />
                <circle cx={26.5} cy={11.5} r={2} />
                <circle cx={5.5} cy={20} r={2} />
              </svg>
              <h3>Stack your drones</h3>
              <p>Ice, fire, lightning and poison wingmates, three tiers each. They turn a pea-shooter into a light show.</p>
            </article>
            <article data-reveal className={styles.card}>
              <svg viewBox="0 0 32 32" aria-hidden="true">
                <path d="M16 3 5 12v8l11 9 11-9v-8L16 3z" />
                <path d="M16 10v18M11 14h10" />
              </svg>
              <h3>Bosses that fill the screen</h3>
              <p>
                A shielded capital ship. A carrier with a mean door habit. A dreadnought whose beam you will learn to
                respect.
              </p>
            </article>
            <article data-reveal className={styles.card}>
              <svg viewBox="0 0 32 32" aria-hidden="true">
                <path d="M27 16a11 11 0 1 1-3.4-7.9" />
                <path d="M27 4v5.5h-5.5" />
                <path d="M16 22v-9M12 16.5 16 12.5l4 4" />
              </svg>
              <h3>Die richer</h3>
              <p>Every run feeds permanent upgrades between climbs. The sector resets — your arsenal doesn&apos;t.</p>
            </article>
            <article data-reveal className={styles.card}>
              <svg viewBox="0 0 32 32" aria-hidden="true">
                <path d="M16 3l10 4v8c0 7-4.5 11.5-10 14C10.5 26.5 6 22 6 15V7l10-4z" />
                <path d="M11.5 16l3 3 6-6.5" />
              </svg>
              <h3>Premium, full stop</h3>
              <p>
                <b>$2.99 once.</b> No ads, no in-app purchases, no energy timers. The whole game, yours.
              </p>
            </article>
          </div>
        </section>

        {/* ── SCREENSHOTS ──────────────────────────────────── */}
        <section className={styles.section} id="screens">
          <span className="node" aria-hidden="true" />
          <Screenshots items={screenshots} />
        </section>

        {/* ── PRESS ────────────────────────────────────────── */}
        <section className={styles.section} id="press">
          <span className="node" aria-hidden="true" />
          <div data-reveal className={styles.pressBand}>
            <div>
              <span className={styles.eyebrow}>04 · press</span>
              <h2 className={styles.heading}>Writing about mobile games?</h2>
              <p className={styles.lede}>
                The press kit has a factsheet, clean screenshots and the trailer — everything zipped and ready.
              </p>
            </div>
            <Link className={styles.btn} href="/press">
              Get the press kit
            </Link>
          </div>
        </section>

        {/* ── STUDIO ───────────────────────────────────────── */}
        <section className={styles.section} id="studio">
          <span className="node node--boss" aria-hidden="true" />
          <div className={styles.studioGrid}>
            <div data-reveal>
              <span className={styles.eyebrow}>05 · the studio</span>
              <h2 className={styles.heading}>Final boss: the developer</h2>
              <p className={styles.lede}>
                Simple Ideas is Salih — a one-person studio in İzmir, Türkiye. Five years of shipping mobile apps, a
                psychology degree, and a lifelong shmup habit that finally became a game.
              </p>
              <p className={styles.lede}>
                Almost in Orbit is the studio&apos;s first title: designed, coded, balanced and launched by the same
                pair of hands. Open to collaborations and interesting mobile work.
              </p>
              <a className={styles.mail} href="mailto:salih@simpleideas.net">
                salih@simpleideas.net
              </a>
            </div>
            <div data-reveal className={styles.manifest} aria-label="Crew manifest">
              <h3>Crew manifest</h3>
              <ul>
                <li>
                  <span>design</span>
                  <span className={styles.dots} />
                  <span className={styles.who}>Salih</span>
                </li>
                <li>
                  <span>code</span>
                  <span className={styles.dots} />
                  <span className={styles.who}>Salih</span>
                </li>
                <li>
                  <span>art / vfx</span>
                  <span className={styles.dots} />
                  <span className={styles.who}>Salih</span>
                </li>
                <li>
                  <span>balance</span>
                  <span className={styles.dots} />
                  <span className={styles.who}>Salih</span>
                </li>
                <li>
                  <span>marketing</span>
                  <span className={styles.dots} />
                  <span className={styles.who}>Salih</span>
                </li>
                <li>
                  <span>coffee runs</span>
                  <span className={styles.dots} />
                  <span className={styles.who}>also Salih</span>
                </li>
              </ul>
              <p className={styles.crewNote}>crew size: 1 · morale: high</p>
            </div>
          </div>
        </section>

        {/* ── FOOTER ───────────────────────────────────────── */}
        <footer className={styles.footer}>
          <p className={styles.footBrand}>Simple Ideas</p>
          <ul className={styles.footLinks}>
            <li>
              <Link href="/press">Press kit</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy</Link>
            </li>
            <li>
              <Link href="/support">Support</Link>
            </li>
            <li>
              <a href="mailto:salih@simpleideas.net">salih@simpleideas.net</a>
            </li>
          </ul>
          <p className={styles.fine}>
            © 2026 Simple Ideas. Apple and the App Store are trademarks of Apple Inc. Google Play is a trademark of
            Google LLC.
          </p>
        </footer>
      </div>
    </>
  );
}
