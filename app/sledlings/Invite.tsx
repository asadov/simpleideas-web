import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { StoreBadges } from "@/components/StoreBadges";
import { shareMetadata } from "@/lib/share";
import { SLEDLINGS_STORE } from "@/lib/site";
import { CopyCode } from "./CopyCode";
import { SledlingsShell } from "./SledlingsShell";
import styles from "./sledlings.module.css";

/*
 * The pages behind the game's invite links, which it shares through the phone's share sheet:
 *   /sledlings/join/482K               a room code: three digits and a letter
 *   /sledlings/friend/SwiftOtter-12345  a friend code, SwiftOtter#12345 in the game
 * With the game installed, the phone opens these links in the game (app/.well-known, lib/app-links.ts) and this page
 * is not shown. Without it, or inside an app's own browser, the page shows the code, the steps in the game and an
 * Open Sledlings button (sledlings://…, only on a tap: the page never navigates by itself), and the store badges
 * once lib/site.ts has them. A path that is not a code gets the same page without one, never an error.
 * English only, like the game. Kept out of search engines (noindex here, an X-Robots-Tag header in next.config.ts,
 * not in the sitemap). The page sends the code nowhere: the site has no analytics or outside scripts.
 * Game labels checked against the game (Race-online @ 9b3e5e59): Online › Join with code › Paste, Join;
 * Friends › Add friend › Friend code, Send request.
 */

export type InviteKind = "join" | "friend";
export type InviteParams = Promise<{ code?: string[] }>;

type Code = { shown: string; link: string };

/* A path segment, decoded once; a malformed escape stays as it is (and is then not a code). */
function decode(segment: string) {
  try {
    return decodeURIComponent(segment);
  } catch {
    return segment;
  }
}

/* Loose on purpose: the game checks the code itself. Room codes are shown in capitals. */
function readRoom(raw: string): Code | null {
  if (!/^[0-9]{3}[A-Za-z]$/.test(raw)) return null;
  const code = raw.toUpperCase();
  return { shown: code, link: code };
}

/* Name-digits in the link, Name#digits in the game, with the name's capitals as the link has them. */
function readFriend(raw: string): Code | null {
  const match = /^([A-Za-z]{1,40})-([0-9]{1,10})$/.exec(raw);
  if (!match) return null;
  return { shown: `${match[1]}#${match[2]}`, link: `${match[1]}-${match[2]}` };
}

const INVITES: Record<
  InviteKind,
  {
    kicker: string;
    title: string;
    description: string;
    label: string;
    path: string;
    read: (raw: string) => Code | null;
    steps: ReactNode[];
    long: boolean;
  }
> = {
  join: {
    kicker: "Room invite",
    title: "Join a race in Sledlings",
    description: "A room invite for Sledlings: Kart Rush. Open the game and join the room with its code.",
    label: "Room code",
    path: "join",
    read: readRoom,
    steps: [
      <>
        Open Sledlings → <strong>Online</strong> → <strong>Join with code</strong>.
      </>,
      <>
        Enter the room code, or tap <strong>Paste</strong> after copying it, then tap <strong>Join</strong>.
      </>,
    ],
    long: false,
  },
  friend: {
    kicker: "Friend invite",
    title: "Add a friend in Sledlings",
    description: "A friend invite for Sledlings: Kart Rush. Open the game and add your friend with their friend code.",
    label: "Friend code",
    path: "friend",
    read: readFriend,
    steps: [
      <>
        Open Sledlings → <strong>Friends</strong> → <strong>Add friend</strong>.
      </>,
      <>
        Enter the friend code, or paste it, then tap <strong>Send request</strong>.
      </>,
    ],
    long: true,
  },
};

export function inviteMetadata(kind: InviteKind): Metadata {
  const { title, description, path } = INVITES[kind];
  return {
    title,
    description,
    robots: { index: false, follow: false },
    ...shareMetadata({ card: "sledlings", title, description, url: `https://www.simpleideas.net/sledlings/${path}` }),
  };
}

export async function InvitePage({ kind, params }: { kind: InviteKind; params: InviteParams }) {
  const invite = INVITES[kind];
  const { code: segments } = await params;
  const code = segments?.length === 1 ? invite.read(decode(segments[0])) : null;
  const hasStore = Boolean(SLEDLINGS_STORE.appStore || SLEDLINGS_STORE.googlePlay);

  return (
    <SledlingsShell>
      <Image
        className={styles.icon}
        src="/sledlings/icon.jpg"
        alt="Sledlings: Kart Rush app icon: a fox in goggles and a red scarf on a sled"
        width={512}
        height={512}
        sizes="(max-width: 720px) 72px, 88px"
        preload
      />
      <p className={styles.kicker}>{invite.kicker}</p>
      <h1>{invite.title}</h1>

      {code ? (
        <>
          <CopyCode label={invite.label} code={code.shown} long={invite.long} />
          <a className={styles.button} href={`sledlings://${invite.path}/${code.link}`}>
            Open Sledlings
          </a>
          <p className={styles.meta}>
            Opens the game with the code filled in, if Sledlings is on this phone. Nothing happens? An app may be
            showing this page in its own browser: open the page in Safari or Chrome and tap Open Sledlings again.
          </p>
        </>
      ) : (
        <p className={styles.lede}>Open Sledlings and enter your code.</p>
      )}

      <h2>In the game</h2>
      <ol className={styles.steps}>
        {invite.steps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>

      <h2>Don’t have Sledlings yet?</h2>
      {hasStore ? (
        <>
          <p>Get Sledlings: Kart Rush, free to play. Then tap the invite link again, or enter the code in the game.</p>
          <div className={styles.stores}>
            <StoreBadges store={SLEDLINGS_STORE} />
          </div>
        </>
      ) : (
        <p>
          Sledlings: Kart Rush is coming soon to the App Store and Google Play.{" "}
          <Link href="/sledlings">About the game</Link>
        </p>
      )}
    </SledlingsShell>
  );
}
