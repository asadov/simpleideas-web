import { Marcellus, Source_Sans_3, Source_Serif_4 } from "next/font/google";

/*
 * Collect Pixel Art "classic museum" fonts. Import this module only from routes that
 * render museum UI; apply `museumFontVars` on the wrapper that needs them.
 */

export const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-marcellus",
});

export const sourceSerif = Source_Serif_4({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-source-serif",
});

export const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-source-sans",
});

export const museumFontVars = `${marcellus.variable} ${sourceSerif.variable} ${sourceSans.variable}`;
