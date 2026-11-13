import type { NextConfig } from "next";

/*
 * Name aliases, so every product also answers at a path named after it. The real pages stay where they
 * are: those addresses are written into the games, App Store Connect, Google Play and AdMob.
 * Temporary (307) on purpose: the pending site redesign may give Almost in Orbit its own page at
 * /almost-in-orbit, and a permanent (308) redirect would be cached by browsers forever.
 */
const ALIASES = [
  { source: "/almost-in-orbit", destination: "/" },
  { source: "/almost-in-orbit/privacy", destination: "/privacy" },
  { source: "/almost-in-orbit/terms", destination: "/terms" },
  { source: "/almost-in-orbit/support", destination: "/support" },
  { source: "/almost-in-orbit/press", destination: "/press" },
  { source: "/pixel-art-collect", destination: "/collect-pixel-art" },
  { source: "/pixel-art-collect/privacy", destination: "/collect-pixel-art/privacy" },
  { source: "/tuner-pro-studio", destination: "/tuner" },
  { source: "/tuner-pro-studio/privacy", destination: "/tuner/privacy" },
];

const nextConfig: NextConfig = {
  async redirects() {
    return ALIASES.map((alias) => ({ ...alias, permanent: false }));
  },
};

export default nextConfig;
