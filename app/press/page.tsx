import type { Metadata } from "next";
import Link from "next/link";
import { Starfield } from "@/components/Starfield";
import { PressScreenshots } from "@/components/PressScreenshots";
import { screenshots } from "@/lib/screenshots";
import subStyles from "../subpages.module.css";
import styles from "./press.module.css";

export const metadata: Metadata = {
  title: "Press kit — Almost in Orbit",
  description:
    "Press kit for Almost in Orbit: factsheet, descriptions, screenshots and media contact. A premium roguelite space shooter for iOS and Android by Simple Ideas.",
};

export default function PressPage() {
  return (
    <>
      <Starfield variant="sub" />
      <div className={subStyles.nebula} aria-hidden="true" />
      <div className={subStyles.frame}>
        <header className={styles.pageHead}>
          <span className="node" aria-hidden="true" />
          <Link className={subStyles.back} href="/">
            ← Almost in Orbit
          </Link>
          <span className={subStyles.eyebrow}>Press kit · updated July 10, 2026</span>
          <h1 className={subStyles.h1}>Everything you need to cover the game</h1>
          <p className={subStyles.lede}>
            Factsheet, descriptions, screenshots and a direct line to the developer. All of it is free to use in
            articles and videos.
          </p>
        </header>

        <section className={styles.section}>
          <span className="node" aria-hidden="true" />
          <h2 className={styles.h2}>Factsheet</h2>
          <dl className={styles.facts}>
            <div>
              <dt className={styles.dt}>Game</dt>
              <dd className={styles.dd}>Almost in Orbit</dd>
            </div>
            <div>
              <dt className={styles.dt}>Developer</dt>
              <dd className={styles.dd}>Simple Ideas — one-person studio</dd>
            </div>
            <div>
              <dt className={styles.dt}>Based in</dt>
              <dd className={styles.dd}>İzmir, Türkiye</dd>
            </div>
            <div>
              <dt className={styles.dt}>Release</dt>
              <dd className={styles.dd}>July 2026</dd>
            </div>
            <div>
              <dt className={styles.dt}>Platforms</dt>
              <dd className={styles.dd}>iOS · Android</dd>
            </div>
            <div>
              <dt className={styles.dt}>Price</dt>
              <dd className={styles.dd}>$2.99 — premium, no ads, no IAP</dd>
            </div>
            <div>
              <dt className={styles.dt}>Genre</dt>
              <dd className={styles.dd}>Roguelite shoot-&apos;em-up, portrait</dd>
            </div>
            <div>
              <dt className={styles.dt}>Engine</dt>
              <dd className={styles.dd}>Unity</dd>
            </div>
            <div>
              <dt className={styles.dt}>Website</dt>
              <dd className={styles.dd}>
                <a href="https://simpleideas.net">simpleideas.net</a>
              </dd>
            </div>
            <div>
              <dt className={styles.dt}>Press contact</dt>
              <dd className={styles.dd}>
                <a href="mailto:salih@simpleideas.net">salih@simpleideas.net</a>
              </dd>
            </div>
          </dl>
        </section>

        <section className={styles.section}>
          <span className="node" aria-hidden="true" />
          <h2 className={styles.h2}>Description</h2>
          <p>
            <strong>Short.</strong> Almost in Orbit is a handcrafted roguelite space shooter for phones —
            one-thumb controls, branching sector maps, stackable elemental drones and three screen-filling bosses.
            $2.99, no ads, no in-app purchases.
          </p>
          <p>
            <strong>Long.</strong> Almost in Orbit strips the roguelite run down to something you can play with one
            thumb on the bus, then layers real depth on top. Each climb generates a branching sector map: fight
            through choreographed swarm formations, gamble on elite encounters, mine meteor fields for boosts, or
            duck into a shop to reroll your build. Elemental drones — ice, fire, lightning and poison, three tiers
            each — stack into wildly different loadouts, and every sector ends in a multi-phase boss built to fill a
            phone screen. Death sends you home with currency for permanent upgrades, so every run makes the next one
            meaner. It&apos;s a premium game the old way: pay once, own everything, made start to finish by one
            person.
          </p>
        </section>

        <section className={styles.section}>
          <span className="node" aria-hidden="true" />
          <h2 className={styles.h2}>Key features</h2>
          <ul>
            <li>Branching, regenerating sector maps — battles, elites, shops, meteor fields and rest stops</li>
            <li>
              Choreographed enemy swarms in eight formation patterns; full-clearing a wave drops a fire-rate boost
            </li>
            <li>Ice, fire, lightning and poison drones, three tiers each, for wildly different builds</li>
            <li>Three multi-phase bosses: a shielded capital ship, a carrier mothership, a beam-sweeping dreadnought</li>
            <li>Permanent upgrades persist between runs — the sector resets, your arsenal doesn&apos;t</li>
            <li>Premium: $2.99 once. No ads, no in-app purchases, no energy timers</li>
          </ul>
        </section>

        <section className={styles.section}>
          <span className="node" aria-hidden="true" />
          <h2 className={styles.h2}>Media</h2>
          <div className={styles.panel}>
            <span className={styles.chip}>Trailer — lands with launch</span>
            <p className={styles.mut}>A 60-second gameplay trailer will be embedded here at release.</p>
            {/* TRAILER: replace this panel with the YouTube embed once uploaded */}
          </div>
          <PressScreenshots items={screenshots} />
          <p className={styles.mut}>
            A full-resolution bundle (<code className={styles.code}>assets/presskit.zip</code>) will be linked here
            with the launch build. Until then, any image above is fair game.
          </p>
        </section>

        <section className={styles.section}>
          <span className="node" aria-hidden="true" />
          <h2 className={styles.h2}>Videos &amp; streaming</h2>
          <p>
            You&apos;re welcome to publish and monetize videos of Almost in Orbit — Let&apos;s Plays, reviews,
            shorts, anything. No permission needed. A store link in the description is appreciated but not required.
          </p>
        </section>

        <section className={styles.section}>
          <span className="node node--boss" aria-hidden="true" />
          <h2 className={styles.h2}>About Simple Ideas</h2>
          <p>
            Simple Ideas is Salih — a one-person studio in İzmir, Türkiye. Five years of shipping mobile apps, a
            psychology degree, and a lifelong shmup habit that finally became a game. Almost in Orbit is the
            studio&apos;s first title: designed, coded, balanced and launched by the same pair of hands.
          </p>
          <a className={subStyles.btn} href="mailto:salih@simpleideas.net?subject=Press%20%E2%80%94%20Almost%20in%20Orbit">
            Email the developer
          </a>
        </section>

        <footer className={subStyles.footer}>
          <p className={subStyles.footBrand}>Simple Ideas</p>
          <ul className={subStyles.footLinks}>
            <li>
              <Link href="/">Home</Link>
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
          <p className={subStyles.fine}>© 2026 Simple Ideas.</p>
        </footer>
      </div>
    </>
  );
}
