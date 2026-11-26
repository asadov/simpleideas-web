/*
 * App links: the files that let a phone open www.simpleideas.net links in an installed game instead of the
 * browser. Served by app/.well-known/*: exactly these contents, JSON, status 200, no redirect.
 *
 * Sledlings: Kart Rush opens its room and friend invite links (/sledlings/join/<code>, /sledlings/friend/<name>-<digits>).
 * Contents from the game's handoff (Race-online docs/online/report-invite-links.md, game commit 9b3e5e59). Checked on
 * 2026-11-26 against the game: team HX7YBPKH8M and bundle and package com.sledlings.kartrush (ProjectSettings), and
 * the SHA-256 of the certificate that signed Sledlings-0.16.2-android.apk (a test build).
 * Before Google Play distribution, add Play's app signing certificate (Play Console › App integrity › App signing)
 * next to the test one; keep the test one while test installs still need to open the links.
 */

/* iOS universal links: https://developer.apple.com/documentation/xcode/supporting-associated-domains */
export const APPLE_APP_SITE_ASSOCIATION = {
  applinks: {
    details: [
      {
        appIDs: ["HX7YBPKH8M.com.sledlings.kartrush"],
        components: [{ "/": "/sledlings/join/*" }, { "/": "/sledlings/friend/*" }],
      },
    ],
  },
};

/* Android App Links: https://developer.android.com/training/app-links/configure-assetlinks */
export const ASSET_LINKS = [
  {
    relation: ["delegate_permission/common.handle_all_urls"],
    target: {
      namespace: "android_app",
      package_name: "com.sledlings.kartrush",
      sha256_cert_fingerprints: [
        "01:17:9D:75:A5:2D:56:E8:0F:A5:C6:96:99:1F:FC:35:70:B2:0B:0D:3D:B4:AD:F6:F6:72:ED:3C:D2:AA:C0:D7",
      ],
    },
  },
];
