import type { Metadata } from "next";

const SITE = "https://www.simpleideas.net";

/** The 1200×630 cards shown when a page is shared in messengers and on social media. */
const CARDS = {
  aio: { path: "/og-image-free.png", alt: "Almost in Orbit — play free on iPhone and Android" },
  cpa: { path: "/cpa/og.jpg", alt: "Pixel Art Collect — restore great paintings, pixel by pixel" },
  tempo: { path: "/tempo/og.png", alt: "Tempo — haptic metronome for Apple Watch" },
  tuner: { path: "/tuner/og.png", alt: "Tuner Pro Studio — chromatic and guitar tuner for iPhone and iPad" },
  studio: { path: "/og-studio.png", alt: "Simple Ideas" },
} as const;

/**
 * Open Graph and Twitter tags for a page. `url` is the page's canonical address (absolute),
 * `card` the product whose card represents it.
 */
export function shareMetadata({
  card,
  title,
  description,
  url,
  lang = "en",
}: {
  card: keyof typeof CARDS;
  title: string;
  description: string;
  url: string;
  lang?: "en" | "tr";
}): Pick<Metadata, "openGraph" | "twitter"> {
  const image = `${SITE}${CARDS[card].path}`;
  return {
    openGraph: {
      type: "website",
      url,
      siteName: "Simple Ideas",
      locale: lang === "tr" ? "tr_TR" : "en_US",
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: CARDS[card].alt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
