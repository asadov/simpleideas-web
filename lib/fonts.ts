import { Exo_2, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

/*
 * Almost in Orbit / studio fonts — applied on <html> in the root layout.
 * The museum fonts live in ./fonts-museum.ts so that only the routes that render
 * museum UI (the home teaser and /collect-pixel-art) declare and preload them.
 */

export const exo2 = Exo_2({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-exo",
});

export const plexSans = IBM_Plex_Sans({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-plex-sans",
});

export const plexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-plex-mono",
});

export const spaceFontVars = `${exo2.variable} ${plexSans.variable} ${plexMono.variable}`;
