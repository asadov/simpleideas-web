/*
 * Sledlings: Kart Rush checks this file before a player goes online (from the build with Quick Play).
 * minimumVersion = the lowest game version allowed online; iosAppStoreId = the game's App Store listing number,
 * used to send an outdated player to the store page. Nothing about any player is in here, and the game sends no
 * player or account identifier with the request.
 *
 * The game follows no redirects, so this must answer 200 at exactly /sledlings/online-version.json (www host).
 * A phone keeps the last floor it read: raise minimumVersion only when the game's side names the new value
 * (after a store release that changes the online room protocol is live), or older builds get locked out.
 * Not in the sitemap. Built once, served as static JSON with the site's short cache (max-age=0, must-revalidate).
 */
export const dynamic = "force-static";

const ONLINE_VERSION = `{
  "minimumVersion": "0.17.0",
  "iosAppStoreId": "6837440171"
}
`;

export function GET() {
  return new Response(ONLINE_VERSION, { headers: { "Content-Type": "application/json" } });
}
