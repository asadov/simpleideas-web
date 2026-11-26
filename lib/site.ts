export const STORE = {
  appStore: "https://apps.apple.com/app/almost-in-orbit/id6761993412",
  googlePlay: "https://play.google.com/store/apps/details?id=com.simpleideas.almostinorbit",
};

export type StoreLinks = { appStore?: string; googlePlay?: string };

/*
 * Sledlings: Kart Rush store pages. Empty while the game is not in the stores: its invite pages
 * (/sledlings/join, /sledlings/friend) say it is coming soon until a link is set here, then show that store's badge.
 */
export const SLEDLINGS_STORE: StoreLinks = {};

export const CONTACT_EMAIL = "salih@simpleideas.net";

export const TRAILER = {
  // The 3.1.1 App Store preview (886×1920 master), encoded for the web at 720×1560.
  src: "/assets/reel-31.mp4",
  poster: "/assets/poster-31.jpg",
  width: 720,
  height: 1560,
  duration: "0:29",
};
