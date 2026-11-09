# Website privacy implementation

Updated 9 November 2026.

## Scope

`/kvkk` covers the Simple Ideas website and support correspondence for all products. It links to the separate, existing product policies without changing their app-store URLs. `/cookies` documents the browser storage introduced by the information notice. Both pages render Turkish by default and English with `?lang=en`; `?lang=tr` explicitly selects Turkish.

The website source contains no visitor-analytics SDK, advertising pixel or third-party video embed. Media and fonts are served through the site. Hosting still processes connection data; absence of tracking code is not a claim that hosting receives no personal data.

## Information notice, not a consent management platform

The global `CookieNotice` is informational. “Got it” is not consent to advertising, cross-border transfers or any app's processing. Do not rename the button to “Accept all” or reuse its record as consent.

- No new browser storage is written until the visitor selects “Got it”.
- `simpleideas.privacy-notice` is a first-party localStorage record, not an HTTP cookie.
- It contains only a version, acknowledgment timestamp and expiry timestamp; it is never sent to a server.
- Its lifetime is 180 days. Expired, invalid or obsolete records are ignored and cleaned up on the next read.
- Settings can be reopened from every page footer. Deleting the record shows the notice again.
- Blocked storage leaves the website usable and permits dismissal for the current visit.
- The native dialog provides keyboard focus containment, Escape dismissal and return focus.

If optional analytics, advertising, external embeds or similar services are introduced, reassess their actual data use and legal basis, implement a genuine prior-consent flow where required, and update the inventory. This notice does not gate hypothetical future trackers. Never treat an existing acknowledgment as consent to a new purpose.

## Keep these URLs stable

| Product | Existing app-linked policy |
| --- | --- |
| Almost in Orbit | `/privacy` |
| Pixel Art Collect | `/collect-pixel-art/privacy`, Turkish `?lang=tr` |
| Tempo | `/tempo/privacy` |
| Tuner Pro Studio | `/tuner/privacy` |

Website choices do not alter native application SDK permissions. Product SDK changes require their own code, store disclosures and policy review.

## Operational matters outside this website patch

- Confirm and document the actual KVKK Article 9 arrangements for international providers; EU contractual terms alone should not be presented as a verified Turkish transfer mechanism.
- Confirm support-mail and hosting retention/deletion settings. Do not add unverified fixed retention periods or automatic-deletion promises.
- Recheck product policies whenever the actual shipped SDKs or data use change.

## Verification

Run `npm run build` for the production build and TypeScript validation. Check first visit, acknowledgment and reload, settings reopening and deletion, keyboard close/return focus, and both legal-page languages. Also review a narrow mobile viewport and the independent Tempo, Tuner and Pixel Art Collect policy footers.

Official references: [KVKK information duty](https://www.kvkk.gov.tr/Icerik/4132/aydinlatma-yukumlulugunun-yerine-getirilmesinde-uyulacak-usul-ve-esaslar-hakkinda-teblig), [cookie guide (July 2025)](https://www.kvkk.gov.tr/SharedFolderServer/CMSFiles/fb193dbb-b159-4221-8a7b-3addc083d33f.pdf), [international transfers](https://www.kvkk.gov.tr/Icerik/2053/Yurtdisina-Aktarim).
