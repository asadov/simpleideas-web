import type { Metadata } from "next";
import { Starfield } from "@/components/Starfield";
import { StudioNav } from "@/components/StudioNav";
import { SiteFooter } from "@/components/SiteFooter";
import subStyles from "../subpages.module.css";

export const metadata: Metadata = {
  title: "Privacy policy — Almost in Orbit",
  description:
    "Privacy policy for Almost in Orbit. No accounts, ads or analytics of our own; the Unity engine the game is built on sends Unity technical diagnostics.",
};

export default function PrivacyPage() {
  return (
    <>
      <Starfield variant="sub" />
      <div className={subStyles.nebula} aria-hidden="true" />
      <StudioNav current="/privacy" />
      <main className={subStyles.frame}>
        <header className={subStyles.pageHead}>
          <span className="node" aria-hidden="true" />
          <span className={subStyles.eyebrow}>Privacy policy · updated October 8, 2026</span>
          <h1 className={subStyles.h1}>Short and honest</h1>
          <p className={subStyles.lede}>
            Almost in Orbit has no accounts, no ads and no analytics of its own. The one thing that does leave your
            device comes from the engine the game is built on — here is exactly what that is.
          </p>
        </header>

        <section className={subStyles.section}>
          <span className="node" aria-hidden="true" />
          <h2>What the game itself collects</h2>
          <p>
            Nothing. There are no accounts or logins, no advertising and no analytics or tracking SDKs, and the game
            never asks for personal information. Our own code never sends anything over the network — Simple Ideas
            doesn&apos;t run any game servers.
          </p>
        </section>

        <section className={subStyles.section}>
          <span className="node" aria-hidden="true" />
          <h2>Unity engine diagnostics</h2>
          <p>
            Almost in Orbit is made with the Unity engine. With the settings used in the current version,
            Unity&apos;s built-in engine diagnostics can send technical data to Unity Technologies while your device
            is online: crash reports, error logs and basic performance signals, along with device details such as
            the phone model and operating system version. As with any internet connection, Unity also receives your
            device&apos;s IP address when this happens.
          </p>
          <p>
            Unity uses this data to keep its engine stable, and it gives us crash and performance reports for the
            game. We don&apos;t use it for advertising, we don&apos;t use it to track you across apps, and we
            don&apos;t sell any data. Unity&apos;s side of this is covered by the{" "}
            <a href="https://unity.com/legal/privacy-policy">Unity Privacy Policy</a>.
          </p>
        </section>

        <section className={subStyles.section}>
          <span className="node" aria-hidden="true" />
          <h2>Your save data</h2>
          <p>
            Your progress, permanent upgrades and settings are stored locally on your device and never leave it. If
            your phone backs itself up (iCloud, Google backup), your save may be included in that backup —
            that&apos;s between you and your device, and we have no access to it. Delete the game and the save goes
            with it.
          </p>
        </section>

        <section className={subStyles.section}>
          <span className="node" aria-hidden="true" />
          <h2>Purchases</h2>
          <p>
            Almost in Orbit is a paid app with no in-app purchases. Payment is handled entirely by the Apple App
            Store or Google Play under their own terms and privacy policies. We never see your payment details.
          </p>
        </section>

        <section className={subStyles.section}>
          <span className="node" aria-hidden="true" />
          <h2>Children</h2>
          <p>
            The game itself collects no personal information from anyone, including children. The Unity engine
            diagnostics described above apply to every player.
          </p>
        </section>

        <section className={subStyles.section}>
          <span className="node" aria-hidden="true" />
          <h2>If this ever changes</h2>
          <p>
            If an update changes any of the above — including switching engine diagnostics off — we&apos;ll update
            this page and the date at the top, and note it in the store update notes. Questions?{" "}
            <a className={subStyles.mail} href="mailto:salih@simpleideas.net">
              salih@simpleideas.net
            </a>
          </p>
        </section>
      </main>
      <SiteFooter variant="space" />
    </>
  );
}
