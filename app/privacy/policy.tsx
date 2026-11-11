import type { ReactNode } from "react";
import { CONTACT_EMAIL } from "@/lib/site";

/*
 * Almost in Orbit privacy policy: the text, in English and Turkish.
 *
 * Applies to version 3.1.0 and later (free to play: Google AdMob ads, Google Analytics for Firebase,
 * Unity IAP purchases). The last section keeps the disclosure for the paid versions up to 3.0.
 *
 * Every statement here was checked against the game source on 11 November 2026
 * (Assets/_Scripts/Monetization, SettingsPopupUI, ProjectSettings, Packages/manifest.json).
 * If the shipped SDKs, the in-game menu names or the analytics settings change, update BOTH
 * languages and POLICY_UPDATED, then recheck the App Privacy and Data safety answers.
 *
 * Published 11 Nov 2026 ahead of game build 20 (Salih's decision): Firebase Crashlytics and optional
 * cloud save through Game Center (iCloud) and Play Games Saved Games. Crashlytics was checked against
 * the uncommitted game code (FirebaseProductAnalytics.cs, manifest/plist defaults, new setting label).
 * Cloud save was checked against Assets/_Scripts/CloudSave and the design note only; the platform
 * backends and the Settings row did not exist yet. When they land, recheck the cloud save paragraphs
 * (what is copied, sign-in, that the player identity goes nowhere) and remove the "added by a game
 * update" sentence from `scope` and the old setting label once every distributed build has both.
 */

export type PolicyLang = "en" | "tr";

export const POLICY_UPDATED = "2026-11-11";

export type DataRow = { data: string; includes: ReactNode; why: string; who: string };
export type PolicySection = { id: string; title: string; body: ReactNode };
export type PolicyCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  lede: string;
  updatedLabel: string;
  updatedText: string;
  scope: string;
  summaryTitle: string;
  summary: ReactNode[];
  contentsLabel: string;
  tableLabel: string;
  tableHead: { data: string; includes: string; why: string; who: string };
  rows: DataRow[];
  notCollected: string;
  sections: PolicySection[];
};

const mail = (
  <a href={`mailto:${CONTACT_EMAIL}?subject=Almost%20in%20Orbit%20privacy`}>{CONTACT_EMAIL}</a>
);

const LINKS = {
  google: "https://policies.google.com/privacy",
  googlePartners: "https://policies.google.com/technologies/partner-sites",
  googleTransfers: "https://policies.google.com/privacy/frameworks",
  firebase: "https://firebase.google.com/support/privacy",
  apple: "https://www.apple.com/legal/privacy/",
  unity: "https://unity.com/legal/privacy-policy",
  kvkk: "https://www.kvkk.gov.tr/",
  ico: "https://ico.org.uk/make-a-complaint/",
};

const en: PolicyCopy = {
  metaTitle: "Privacy policy — Almost in Orbit",
  metaDescription:
    "How Almost in Orbit handles data on iOS and Android: ads, usage analytics, purchases, your choices and your rights.",
  eyebrow: "Almost in Orbit · iOS · Android",
  title: "Privacy policy",
  lede: "Almost in Orbit is free to play, with ads and optional purchases. This page explains what leaves your device, who receives it and how to change your choices.",
  updatedLabel: "Last updated",
  updatedText: "11 November 2026",
  scope: "Applies to version 3.1.0 and later. For version 3.0 and earlier (the paid version), see the last section. Crash reports and cloud save are added by a game update; until you have that update, those parts do not apply to you.",
  summaryTitle: "In short",
  summary: [
    "No account with us and no game server of ours. Your progress is saved on your device; with Game Center or Play Games, a copy is kept in your own iCloud or Google account.",
    "Ads come from Google AdMob. Whether they are personalised depends on your choices: the consent message in Europe, the tracking permission on iPhone and the advertising ID setting on Android.",
    "Gameplay statistics and crash reports go to Google (Firebase). This is on by default and you can switch it off in Settings.",
    "Purchases are handled by the App Store or Google Play. We never see your card details.",
    "The game is not directed to children under 13.",
    <>Questions and requests: {mail}</>,
  ],
  contentsLabel: "On this page",
  tableLabel: "Data collected in the game",
  tableHead: { data: "Data", includes: "What it includes", why: "Why", who: "Who receives it" },
  rows: [
    {
      data: "Device identifiers",
      includes:
        "On Android, the advertising ID and the app set ID. On iPhone, the vendor identifier (IDFV), and the advertising identifier (IDFA) only if you allow tracking. On both, an app-instance ID created by Firebase.",
      why: "Showing and measuring ads, limiting how often an ad repeats, preventing fraud, counting players in analytics.",
      who: "Google (AdMob, Firebase) and the ad partners that deliver an ad",
    },
    {
      data: "IP address and approximate location",
      includes:
        "Your IP address reaches these services with every request, and they may work out a country, region or city from it. The game never asks for location permission and never reads GPS.",
      why: "Delivering ads, regional statistics, security.",
      who: "Google (AdMob, Firebase) and ad partners",
    },
    {
      data: "Gameplay activity",
      includes:
        "Events such as starting or finishing the tutorial, runs started and ended, map nodes, sectors and bosses reached, time played, hearts left and what defeated you, upgrades and ships bought with in-game gold, cards and run-shop choices, and opening the shop. Sent only while usage and crash data is on.",
      why: "Balancing difficulty and seeing where players stop.",
      who: "Google (Firebase)",
    },
    {
      data: "Ad activity",
      includes:
        "Which ad offers you saw, accepted or declined, the ads shown and tapped, and the estimated revenue of an ad.",
      why: "Delivering and measuring ads; understanding how ads and Premium work.",
      who: "Google (AdMob, Firebase) and ad partners",
    },
    {
      data: "Purchases",
      includes:
        "The product (Premium or a gold pack), its price and currency, and the store transaction. Never card details.",
      why: "Delivering and restoring what you bought; sales statistics.",
      who: "Apple or Google as the store; Google (Firebase) receives the product, price and currency",
    },
    {
      data: "Device and app information",
      includes: "Device model, operating system version, language and app version.",
      why: "Ads that fit the device, statistics, fixing problems.",
      who: "Google (AdMob, Firebase)",
    },
    {
      data: "Ad software diagnostics",
      includes: "Performance figures such as launch time and hang rate, and crash logs of the ad software.",
      why: "Keeping the ad software working.",
      who: "Google (AdMob)",
    },
    {
      data: "Crash reports",
      includes:
        "When the game crashes or hits an error: the error trace, device model, operating system and app version, random installation IDs created by Firebase, and your last few game events with the sector and map position. Sent only while usage and crash data is on.",
      why: "Finding and fixing crashes.",
      who: "Google (Firebase Crashlytics)",
    },
    {
      data: "Cloud save (optional)",
      includes:
        "Only if you are signed in to Game Center or Play Games: a small file with your gold, permanent upgrades, ships, ion colour, win and run counts, Pressure progress and tutorial state.",
      why: "Keeping your progress when you reinstall the game or change phone.",
      who: "Apple (your iCloud) or Google (your Google account). It does not come to us.",
    },
    {
      data: "Messages you send us",
      includes: "Your email address, your message and anything you attach.",
      why: "Answering you.",
      who: "Us and our email provider",
    },
  ],
  notCollected:
    "The game has no account of its own and no chat. It does not ask for your name, email address, contacts, photos, microphone or location.",
  sections: [
    {
      id: "controller",
      title: "Who is responsible",
      body: (
        <>
          <p>
            Almost in Orbit is made by Salih Salihoğlu, an independent developer in Türkiye who publishes as Simple
            Ideas. He is the data controller for the processing described here as ours. Contact: {mail}.
          </p>
          <p>
            This policy covers the game on iOS and Android. The Simple Ideas website and support email are covered by
            the <a href="/kvkk?lang=en">personal data notice (KVKK)</a>. Our other apps have their own policies.
          </p>
          <p>
            Reading this page is not a consent choice. Advertising choices are made in Google’s consent message
            and, on iPhone, in Apple’s tracking prompt.
          </p>
        </>
      ),
    },
    {
      id: "data",
      title: "What is collected and why",
      body: null, // the data table is rendered here by the page
    },
    {
      id: "device",
      title: "Where your progress is kept",
      body: (
        <>
          <p>
            Your progress, gold, upgrades, ships, settings and tutorial state are saved on your device. We do not run
            game servers.
          </p>
          <p>
            <strong>Cloud save is optional.</strong> If you are signed in to Game Center on iPhone or Play Games on
            Android, the game keeps a copy of your permanent progress in your own iCloud or Google account, so it
            survives a reinstall or a new phone. The copy holds your gold, permanent upgrades, ships, ion colour, win
            and run counts, Pressure progress and tutorial state. Settings, privacy choices, Premium and a run in
            progress are not included. The copy does not come to us, and the game does not pass your Game Center or
            Play Games identity to analytics or ad services. Without sign-in the game plays from the save on your
            device. Saves do not move between iPhone and Android.
          </p>
          <p>
            The device also keeps your usage and crash data setting, your advertising consent choices, whether Premium
            is active, and the references of your most recent gold purchases so that a purchase is never delivered
            twice.
          </p>
          <p>
            Deleting the game deletes the save on the device. With cloud save, your permanent progress, including gold
            you bought, comes back when you sign in again; without it, it is gone. You can delete the cloud copy in
            your iCloud or Play Games settings. Your phone’s own backup may also include the save; we have no access to
            it.
          </p>
        </>
      ),
    },
    {
      id: "ads",
      title: "Ads",
      body: (
        <>
          <p>The free version has three ad placements, all served by Google AdMob:</p>
          <ul>
            <li>an optional rewarded ad that lets you continue once after your first defeat in a run;</li>
            <li>an optional rewarded ad that doubles the gold of a run, offered if you are defeated again after continuing;</li>
            <li>a full-screen ad that may appear when you return to the main menu after a defeat. How often it appears is limited.</li>
          </ul>
          <p>There are no banner ads. Declining an ad never stops you from starting a new run.</p>
          <p>
            Premium, a one-time purchase, removes the full-screen ads and gives the continue without an ad. Doubling
            gold stays an optional rewarded ad for everyone, so the ad software also runs for Premium players.
          </p>
          <p>
            Before any ad is requested, the game checks your consent status with Google’s User Messaging Platform
            and, on iPhone, asks for Apple’s tracking permission. Ads are requested only when that is permitted.
          </p>
          <p>
            Ads may be personalised, which means chosen using your advertising identifier and your activity in other
            apps and websites. This happens only if your choices allow it: your answer in the consent message where it
            is shown, the tracking permission on iPhone and the advertising ID setting on Android. Otherwise Google
            serves non-personalised or limited ads. Those still use data such as your IP address and device
            information, so they are not anonymous.
          </p>
        </>
      ),
    },
    {
      id: "choices",
      title: "Your choices",
      body: (
        <>
          <ul>
            <li>
              <strong>Usage and crash data.</strong> In the game, open Settings, then Support and account, then Privacy
              and usage data. Tap “Optional usage and crash data” (“Optional usage analytics” before the update) to switch
              it OFF or ON. It is ON by default.
            </li>
            <li>
              <strong>Advertising consent.</strong> The same screen has “Advertising privacy choices”. Where
              Google’s consent message applies (the EEA, the United Kingdom and Switzerland), it reopens the
              message so you can change or withdraw your choice.
            </li>
            <li>
              <strong>Tracking on iPhone.</strong> iOS Settings, then Privacy & Security, then Tracking. If you
              choose “Ask App Not to Track”, the advertising identifier (IDFA) is not available to the game
              or its ad partners. The game and its rewarded ads keep working.
            </li>
            <li>
              <strong>Advertising ID on Android.</strong> You can reset or delete your advertising ID in your
              device’s Google settings, under Ads.
            </li>
            <li>
              <strong>Cloud save.</strong> It works only while you are signed in to Game Center or Play Games. Sign out
              there, or do not sign in, and your progress is kept on the device only.
            </li>
            <li>
              <strong>Fewer ads.</strong> Premium removes the full-screen ads.
            </li>
          </ul>
          <p>Buying and restoring purchases never depend on your advertising or analytics choices.</p>
        </>
      ),
    },
    {
      id: "consent",
      title: "The consent message and the tracking prompt",
      body: (
        <>
          <p>
            In the EEA, the United Kingdom and Switzerland, the game shows Google’s consent message the first time
            you reach the main menu. It is available in English and Turkish and offers Consent, Do not consent and
            Manage options. Manage options lists the purposes and the advertising partners. Google maintains that list
            and it can change.
          </p>
          <p>
            Your answer decides whether partners may store or read information on your device for advertising and
            whether ads may be personalised. It does not switch our usage analytics on or off; that is the separate
            setting described above.
          </p>
          <p>
            The standard text of the message can mention precise location. The game does not request location
            permission and does not add GPS coordinates to ad requests.
          </p>
          <p>
            On iPhone, the game asks for tracking permission through Apple’s prompt once, whichever region you are in.
            If tracking requests are switched off in iOS, the prompt does not appear and tracking stays off. Our
            explanation in the prompt reads:
            “This lets us show ads that are more relevant to you and keeps the game free. You can still play with
            Ask App Not to Track.” The consent message and the tracking prompt are separate choices; each can
            limit how ads use your data.
          </p>
        </>
      ),
    },
    {
      id: "analytics",
      title: "Usage analytics and crash reports",
      body: (
        <>
          <p>
            We use Google Analytics for Firebase to see how the game is played: how far players get, where runs end,
            which upgrades are chosen, and how ads and purchases perform. We use this to balance the game.
          </p>
          <p>
            Events are tied to a random app-instance ID, not to your name or to an account, and we do not set a user
            ID. A random reference groups the events of one run. Firebase also records events of its own, such as first
            open, sessions and in-app purchases (product, price and currency). These records are pseudonymous; we do
            not claim they are anonymous.
          </p>
          <p>
            Crash reports use Firebase Crashlytics and follow the same switch. A report holds the error trace, the
            device model, operating system and app version, random installation IDs created by Firebase, and your last
            few game events with the sector and map position, so we can see what happened before the crash. It holds no
            name, no account and no advertising identifier.
          </p>
          <p>
            The advertising features inside Analytics follow your advertising choices: if you decline consent or
            tracking, Analytics is told not to use the data for advertising. In our Analytics settings, Google signals
            and ads personalisation are switched off.
          </p>
          <p>
            Switching usage and crash data OFF stops both from that moment and resets the app-instance ID on your
            device. It does not delete what Google has already received; those records expire as described under
            Retention. A crash report already stored on the device but not yet sent may still be sent if you switch the
            setting on again.
          </p>
        </>
      ),
    },
    {
      id: "purchases",
      title: "Purchases",
      body: (
        <>
          <p>
            The game sells Premium (a one-time purchase) and packs of in-game gold. Payment is handled by the App Store
            or Google Play under their own terms; Unity’s purchasing library on your device talks to the store. We
            never receive your card details and we do not run a purchase server.
          </p>
          <p>
            Whether you own Premium is asked from the store and remembered on your device. “Restore
            purchases” in Settings asks the store again with the same store account. Gold packs are used up when
            delivered and cannot be restored: the gold is added to the save on your device.
          </p>
          <p>
            Bought the game while it was a paid app? On iPhone with iOS 16 or later, the game reads Apple’s signed
            record of your original download on your device and turns Premium on automatically. That check happens on
            the device; we do not receive the record. On Android and on iOS 15 there is no automatic check: write to
            support and we will help. Support may ask for a receipt or an order number; send only what is needed.
          </p>
          <p>Refunds and billing records are handled by the stores.</p>
        </>
      ),
    },
    {
      id: "children",
      title: "Children",
      body: (
        <>
          <p>
            Almost in Orbit is intended for players aged 13 and over and is not directed to children under 13. The game
            does not ask for your age. We do not knowingly collect personal data from children under 13. If you believe
            a child has used the game, write to us so we can look into it.
          </p>
          <p>
            Store family controls such as purchase approval apply under the store’s own rules. Purchase approval
            is not consent to ads or analytics.
          </p>
        </>
      ),
    },
    {
      id: "legal",
      title: "Legal grounds",
      body: (
        <>
          <ul>
            <li>
              <strong>Consent.</strong> Storing or reading information on your device for advertising, and personalised
              ads, where the law requires consent. You give or refuse it in Google’s consent message and, on
              iPhone, in Apple’s tracking prompt, and you can withdraw it at any time.
            </li>
            <li>
              <strong>Legitimate interests.</strong> Usage analytics and crash reports, to balance, fix and improve the
              game; you can object at any time by switching them off. Also ad delivery and measurement that does not need consent, fraud
              prevention and answering support requests.
            </li>
            <li>
              <strong>Providing what you asked for.</strong> Delivering and restoring purchases.
            </li>
            <li>
              <strong>Legal obligations.</strong> Keeping records where the law requires it.
            </li>
          </ul>
          <p>Ad partners explain their own purposes and legal grounds in the consent message and in their notices.</p>
        </>
      ),
    },
    {
      id: "recipients",
      title: "Who receives data, and where",
      body: (
        <>
          <ul>
            <li>
              <strong>Google</strong> (AdMob, User Messaging Platform, Google Analytics for Firebase, Firebase
              Crashlytics): ads, the consent message, analytics and crash reports. <a href={LINKS.google}>Google privacy policy</a>,{" "}
              <a href={LINKS.googlePartners}>how Google uses information from apps that use its services</a>,{" "}
              <a href={LINKS.firebase}>Firebase privacy and security</a>.
            </li>
            <li>
              <strong>Advertising partners</strong> that take part in delivering an ad through AdMob. They are listed
              in Google’s consent message, each with its own notice.
            </li>
            <li>
              <strong>Apple</strong> (App Store, Game Center, iCloud) and <strong>Google</strong> (Google Play, Play
              Games): payments and purchase records, and the optional cloud save.{" "}
              <a href={LINKS.apple}>Apple privacy policy</a>, <a href={LINKS.google}>Google privacy policy</a>.
            </li>
            <li>
              <strong>Unity</strong>: the game engine and its purchasing library.{" "}
              <a href={LINKS.unity}>Unity privacy policy</a>. Unity’s crash, performance and analytics reporting
              is switched off in this version.
            </li>
            <li>
              <strong>Our email provider</strong>, when you write to support.
            </li>
          </ul>
          <p>
            We do not sell your data for money. We may disclose records where the law requires it or to establish,
            exercise or defend legal claims.
          </p>
          <p>
            These providers operate internationally, so data may be processed outside your country, including in the
            United States. Their notices explain the locations and safeguards; see{" "}
            <a href={LINKS.googleTransfers}>Google’s information on transfer frameworks</a>. We do not claim that
            all data stays in Türkiye or in the EEA. According to Google, data sent by its software is encrypted in
            transit.
          </p>
        </>
      ),
    },
    {
      id: "retention",
      title: "Retention",
      body: (
        <>
          <ul>
            <li>
              <strong>On your device:</strong> until you delete the game or its data.
            </li>
            <li>
              <strong>Analytics:</strong> user-level and event-level data is kept for two months in our Analytics
              settings. Aggregated reports, which do not single you out, are kept longer.
            </li>
            <li>
              <strong>Crash reports:</strong> Google keeps them for 90 days.
            </li>
            <li>
              <strong>Cloud save:</strong> in your iCloud or Google account until you delete it.
            </li>
            <li>
              <strong>AdMob and the stores:</strong> under their own policies.
            </li>
            <li>
              <strong>Support emails:</strong> as long as needed to resolve your request and meet legal duties.
            </li>
          </ul>
          <p>
            Uninstalling the game does not erase records held by the providers. Write to us and we will tell you what
            we can find and remove, and which provider handles the rest.
          </p>
        </>
      ),
    },
    {
      id: "rights",
      title: "Your rights",
      body: (
        <>
          <p>
            Depending on where you live, you can ask for access to your data, correction, deletion, restriction or a
            copy, and you can object to processing based on legitimate interests. Where processing relies on consent,
            you can withdraw it at any time; that does not affect what happened before.
          </p>
          <p>
            <strong>Türkiye.</strong> Under Article 11 of the KVKK you can also learn who received your data, ask that
            corrections and deletions be passed on to them, object to a result against you produced solely by automated
            analysis, and seek compensation for unlawful processing. You can complain to the{" "}
            <a href={LINKS.kvkk}>Personal Data Protection Authority (KVKK)</a>.
          </p>
          <p>
            <strong>EEA and United Kingdom.</strong> You can complain to your data protection authority; in the UK that
            is the <a href={LINKS.ico}>ICO</a>.
          </p>
          <p>
            <strong>United States.</strong> Some state laws, such as California’s CCPA, give rights to know,
            delete and correct, and to opt out of the “sale” or “sharing” of personal
            information for targeted advertising. We do not sell personal information for money. Personalised
            advertising through AdMob can count as “sharing” under those laws; you can opt out by declining
            tracking on iPhone or deleting your advertising ID on Android. Using these rights does not change how the
            game treats you.
          </p>
          <p>
            <strong>How to ask.</strong> Write to {mail} and tell us which game and what you want. The game has no
            account of its own, so analytics and crash records are tied only to random IDs that we usually cannot
            connect to you. The surest way to end that link is to switch usage and crash data off, which resets the
            analytics ID. We never ask for
            passwords or card details, and we answer within the time limits set by law.
          </p>
        </>
      ),
    },
    {
      id: "paid-version",
      title: "Version 3.0 and earlier",
      body: (
        <>
          <p>
            Versions up to 3.0 were sold as a paid app. They contain no ads, no analytics of ours and no in-app
            purchases, and the game never asks for personal information.
          </p>
          <p>
            In those versions the Unity engine’s built-in diagnostics can send technical data to Unity
            Technologies while your device is online: crash reports, error logs and basic performance signals, with
            device details such as the phone model and operating system version, and your IP address. Unity uses this
            to keep its engine stable and gives us crash and performance reports. See the{" "}
            <a href={LINKS.unity}>Unity privacy policy</a>. From version 3.1 these Unity diagnostics are switched off.
          </p>
        </>
      ),
    },
    {
      id: "changes",
      title: "Changes and contact",
      body: (
        <>
          <p>
            If an update changes what the game collects, we will update this page and its date first, and ask for a new
            choice where the law requires one.
          </p>
          <p>Questions? {mail}</p>
        </>
      ),
    },
  ],
};

const tr: PolicyCopy = {
  metaTitle: "Gizlilik politikası — Almost in Orbit",
  metaDescription:
    "Almost in Orbit iOS ve Android’de verileri nasıl işler: reklamlar, kullanım analitiği, satın alımlar, tercihleriniz ve haklarınız.",
  eyebrow: "Almost in Orbit · iOS · Android",
  title: "Gizlilik politikası",
  lede: "Almost in Orbit ücretsiz oynanır; reklam ve isteğe bağlı satın alım içerir. Bu sayfa cihazınızdan nelerin çıktığını, kime gittiğini ve tercihlerinizi nasıl değiştireceğinizi anlatır.",
  updatedLabel: "Son güncelleme",
  updatedText: "11 Kasım 2026",
  scope: "3.1.0 ve sonraki sürümler için geçerlidir. 3.0 ve önceki (ücretli) sürümler için son bölüme bakın. Çökme raporları ve bulut kayıt bir oyun güncellemesiyle eklenir; o güncellemeyi alana kadar bu kısımlar sizin için geçerli değildir.",
  summaryTitle: "Kısaca",
  summary: [
    "Bizde hesap açılmaz, bize ait oyun sunucusu yoktur. İlerlemeniz cihazınıza kaydedilir; Game Center veya Play Games kullanıyorsanız bir kopyası kendi iCloud ya da Google hesabınızda tutulur.",
    "Reklamlar Google AdMob’dan gelir. Kişiselleştirilip kişiselleştirilmeyeceği tercihlerinize bağlıdır: Avrupa’da izin mesajı, iPhone’da takip izni, Android’de reklam kimliği ayarı.",
    "Oyun istatistikleri ve çökme raporları Google’a (Firebase) gider. Varsayılan olarak açıktır, Ayarlar’dan kapatabilirsiniz.",
    "Satın alımları App Store veya Google Play yürütür. Kart bilgilerinizi hiç görmeyiz.",
    "Oyun 13 yaşından küçük çocuklara yönelik değildir.",
    <>Soru ve talepler: {mail}</>,
  ],
  contentsLabel: "Bu sayfada",
  tableLabel: "Oyunda toplanan veriler",
  tableHead: { data: "Veri", includes: "Neleri kapsar", why: "Neden", who: "Kime gider" },
  rows: [
    {
      data: "Cihaz tanımlayıcıları",
      includes:
        "Android’de reklam kimliği ve uygulama grubu kimliği (app set ID). iPhone’da satıcı tanımlayıcısı (IDFV) ve yalnızca takibe izin verirseniz reklam tanımlayıcısı (IDFA). İkisinde de Firebase’in oluşturduğu uygulama örneği kimliği.",
      why: "Reklam göstermek ve ölçmek, aynı reklamın tekrarını sınırlamak, sahteciliği önlemek, analitikte oyuncu saymak.",
      who: "Google (AdMob, Firebase) ve reklamı sunan reklam ortakları",
    },
    {
      data: "IP adresi ve yaklaşık konum",
      includes:
        "IP adresiniz her istekte bu hizmetlere ulaşır; bundan ülke, bölge veya şehir çıkarabilirler. Oyun konum izni istemez ve GPS okumaz.",
      why: "Reklam sunmak, bölgesel istatistik, güvenlik.",
      who: "Google (AdMob, Firebase) ve reklam ortakları",
    },
    {
      data: "Oyun etkinliği",
      includes:
        "Öğreticiye başlama veya bitirme, başlayan ve biten koşular, ulaşılan harita düğümleri, sektörler ve boss’lar, oynama süresi, kalan kalp ve sizi neyin yendiği, oyun içi altınla alınan geliştirmeler ve gemiler, kart ve koşu mağazası seçimleri, mağazayı açma gibi olaylar. Yalnızca kullanım ve çökme verileri açıkken gönderilir.",
      why: "Zorluğu dengelemek ve oyuncuların nerede bıraktığını görmek.",
      who: "Google (Firebase)",
    },
    {
      data: "Reklam etkinliği",
      includes:
        "Hangi reklam tekliflerini gördüğünüz, kabul veya reddettiğiniz, gösterilen ve dokunulan reklamlar, bir reklamın tahmini geliri.",
      why: "Reklam sunmak ve ölçmek; reklamların ve Premium’un nasıl çalıştığını anlamak.",
      who: "Google (AdMob, Firebase) ve reklam ortakları",
    },
    {
      data: "Satın alımlar",
      includes: "Ürün (Premium veya altın paketi), fiyatı ve para birimi, mağaza işlemi. Kart bilgisi asla.",
      why: "Aldığınızı teslim etmek ve geri yüklemek; satış istatistiği.",
      who: "Mağaza olarak Apple veya Google; ürün, fiyat ve para birimi Google’a (Firebase) gider",
    },
    {
      data: "Cihaz ve uygulama bilgileri",
      includes: "Cihaz modeli, işletim sistemi sürümü, dil ve uygulama sürümü.",
      why: "Cihaza uygun reklam, istatistik, sorun giderme.",
      who: "Google (AdMob, Firebase)",
    },
    {
      data: "Reklam yazılımı tanılama verileri",
      includes: "Açılış süresi ve takılma oranı gibi performans değerleri ile reklam yazılımının çökme kayıtları.",
      why: "Reklam yazılımının çalışır kalması.",
      who: "Google (AdMob)",
    },
    {
      data: "Çökme raporları",
      includes:
        "Oyun çöktüğünde veya hata verdiğinde: hata izi, cihaz modeli, işletim sistemi ve uygulama sürümü, Firebase’in oluşturduğu rastgele kurulum kimlikleri ve sektör ile harita konumunu içeren son birkaç oyun olayı. Yalnızca kullanım ve çökme verileri açıkken gönderilir.",
      why: "Çökmeleri bulmak ve düzeltmek.",
      who: "Google (Firebase Crashlytics)",
    },
    {
      data: "Bulut kayıt (isteğe bağlı)",
      includes:
        "Yalnızca Game Center veya Play Games’e giriş yaptıysanız: altınınızı, kalıcı geliştirmelerinizi, gemilerinizi, iyon renginizi, zafer ve koşu sayılarınızı, Basınç ilerlemenizi ve öğretici durumunuzu içeren küçük bir dosya.",
      why: "Oyunu yeniden kurduğunuzda veya telefon değiştirdiğinizde ilerlemenizi korumak.",
      who: "Apple (iCloud’unuz) veya Google (Google hesabınız). Bize gelmez.",
    },
    {
      data: "Bize gönderdiğiniz mesajlar",
      includes: "E-posta adresiniz, mesajınız ve eklediğiniz her şey.",
      why: "Size yanıt vermek.",
      who: "Biz ve e-posta sağlayıcımız",
    },
  ],
  notCollected:
    "Oyunun kendine ait bir hesabı ve sohbeti yoktur. Oyun adınızı, e-posta adresinizi, kişilerinizi, fotoğraflarınızı, mikrofonunuzu veya konumunuzu istemez.",
  sections: [
    {
      id: "controller",
      title: "Veri sorumlusu",
      body: (
        <>
          <p>
            Almost in Orbit’i, Türkiye’de Simple Ideas adıyla yayın yapan bağımsız geliştirici Salih Salihoğlu
            geliştirir. Burada bize ait olarak anlatılan işlemenin veri sorumlusu odur. İletişim: {mail}.
          </p>
          <p>
            Bu politika oyunun iOS ve Android sürümlerini kapsar. Simple Ideas web sitesi ve destek e-postası için{" "}
            <a href="/kvkk">KVKK aydınlatma metni</a> geçerlidir. Diğer uygulamalarımızın kendi politikaları vardır.
          </p>
          <p>
            Bu sayfayı okumak bir rıza tercihi değildir. Reklam tercihleri Google’ın izin mesajında ve iPhone’da
            Apple’ın takip izni penceresinde yapılır.
          </p>
        </>
      ),
    },
    {
      id: "data",
      title: "Neler toplanır, neden",
      body: null,
    },
    {
      id: "device",
      title: "İlerlemeniz nerede tutulur",
      body: (
        <>
          <p>
            İlerlemeniz, altınınız, geliştirmeleriniz, gemileriniz, ayarlarınız ve öğretici durumunuz cihazınıza
            kaydedilir. Oyun sunucusu çalıştırmıyoruz.
          </p>
          <p>
            <strong>Bulut kayıt isteğe bağlıdır.</strong> iPhone’da Game Center’a veya Android’de Play Games’e giriş
            yaptıysanız oyun, kalıcı ilerlemenizin bir kopyasını kendi iCloud ya da Google hesabınızda tutar; böylece
            oyunu yeniden kurduğunuzda veya telefon değiştirdiğinizde kaybolmaz. Kopyada altınınız, kalıcı
            geliştirmeleriniz, gemileriniz, iyon renginiz, zafer ve koşu sayılarınız, Basınç ilerlemeniz ve öğretici
            durumunuz bulunur. Ayarlar, gizlilik tercihleri, Premium ve yarım kalan koşu kopyaya girmez. Kopya bize
            gelmez; oyun Game Center veya Play Games kimliğinizi analitik ya da reklam hizmetlerine iletmez. Giriş
            yapmadıysanız oyun cihazınızdaki kayıtla çalışır. Kayıt iPhone ile Android arasında taşınmaz.
          </p>
          <p>
            Cihaz ayrıca kullanım ve çökme verileri ayarınızı, reklam izni tercihlerinizi, Premium’un etkin olup
            olmadığını ve bir satın alımın iki kez teslim edilmemesi için son altın alımlarınızın referanslarını tutar.
          </p>
          <p>
            Oyunu silmek cihazdaki kaydı siler. Bulut kayıt varsa, satın aldığınız altın dahil kalıcı ilerlemeniz
            yeniden giriş yaptığınızda geri gelir; yoksa kaybolur. Buluttaki kopyayı iCloud veya Play Games
            ayarlarınızdan silebilirsiniz. Telefonunuzun kendi yedeği de oyun kaydını içerebilir; bizim ona erişimimiz
            yoktur.
          </p>
        </>
      ),
    },
    {
      id: "ads",
      title: "Reklamlar",
      body: (
        <>
          <p>Ücretsiz sürümde üç reklam yeri vardır; hepsini Google AdMob sunar:</p>
          <ul>
            <li>bir koşudaki ilk yenilgiden sonra bir kez devam etmenizi sağlayan isteğe bağlı ödüllü reklam;</li>
            <li>devam ettikten sonra yeniden yenilirseniz sunulan, o koşunun altınını ikiye katlayan isteğe bağlı ödüllü reklam;</li>
            <li>yenilgiden sonra ana menüye dönerken çıkabilen tam ekran reklam. Ne sıklıkta çıkacağı sınırlıdır.</li>
          </ul>
          <p>Banner reklam yoktur. Bir reklamı reddetmek yeni bir koşuya başlamanızı asla engellemez.</p>
          <p>
            Tek seferlik bir satın alım olan Premium, tam ekran reklamları kaldırır ve devam hakkını reklamsız verir.
            Altını ikiye katlamak herkes için isteğe bağlı ödüllü reklam olarak kalır; bu yüzden reklam yazılımı
            Premium oyuncularda da çalışır.
          </p>
          <p>
            Oyun herhangi bir reklam istemeden önce Google’ın User Messaging Platform hizmetiyle izin durumunuzu
            kontrol eder ve iPhone’da Apple’ın takip iznini sorar. Reklam yalnızca buna izin varsa istenir.
          </p>
          <p>
            Reklamlar kişiselleştirilebilir; yani reklam tanımlayıcınız ve diğer uygulama ve sitelerdeki etkinliğiniz
            kullanılarak seçilebilir. Bu yalnızca tercihleriniz izin veriyorsa olur: gösterildiği yerlerde izin
            mesajına verdiğiniz yanıt, iPhone’da takip izni ve Android’de reklam kimliği ayarı. Aksi halde Google
            kişiselleştirilmemiş veya sınırlı reklam sunar. Bunlar da IP adresiniz ve cihaz bilgileriniz gibi verileri
            kullanır, yani anonim değildir.
          </p>
        </>
      ),
    },
    {
      id: "choices",
      title: "Tercihleriniz",
      body: (
        <>
          <ul>
            <li>
              <strong>Kullanım ve çökme verileri.</strong> Oyunda Ayarlar’ı, ardından Destek ve hesap bölümünden
              Gizlilik ve kullanım verileri’ni açın. “İsteğe bağlı kullanım ve çökme verileri” (güncellemeden önce
              “İsteğe bağlı kullanım analitiği”) satırına dokunarak KAPALI veya AÇIK yapın. Varsayılan olarak AÇIKTIR.
            </li>
            <li>
              <strong>Reklam izni.</strong> Aynı ekranda “Reklam gizlilik tercihleri” bulunur. Google’ın
              izin mesajının geçerli olduğu yerlerde (AEA, Birleşik Krallık ve İsviçre) mesajı yeniden açar; tercihinizi
              değiştirebilir veya geri alabilirsiniz.
            </li>
            <li>
              <strong>iPhone’da takip.</strong> iOS Ayarlar, ardından Gizlilik ve Güvenlik, ardından Takip.
              “Uygulamadan Takip Etmemesini İste” seçerseniz reklam tanımlayıcısı (IDFA) oyuna ve reklam
              ortaklarına verilmez. Oyun ve ödüllü reklamlar çalışmaya devam eder.
            </li>
            <li>
              <strong>Android’de reklam kimliği.</strong> Reklam kimliğinizi cihazınızın Google ayarlarındaki Reklamlar
              bölümünden sıfırlayabilir veya silebilirsiniz.
            </li>
            <li>
              <strong>Bulut kayıt.</strong> Yalnızca Game Center veya Play Games’e giriş yapmışken çalışır. Oradan
              çıkış yaparsanız ya da hiç giriş yapmazsanız ilerlemeniz yalnızca cihazda tutulur.
            </li>
            <li>
              <strong>Daha az reklam.</strong> Premium tam ekran reklamları kaldırır.
            </li>
          </ul>
          <p>Satın alma ve geri yükleme, reklam veya analitik tercihlerinize hiçbir zaman bağlı değildir.</p>
        </>
      ),
    },
    {
      id: "consent",
      title: "İzin mesajı ve takip izni",
      body: (
        <>
          <p>
            AEA, Birleşik Krallık ve İsviçre’de oyun, ana menüye ilk ulaştığınızda Google’ın izin mesajını gösterir.
            Mesaj İngilizce ve Türkçe sunulur; İzin ver, İzin vermeyin ve Seçenekleri yönetin seçeneklerini içerir.
            Seçenekleri yönetin, amaçları ve reklam ortaklarını listeler. Bu listeyi Google tutar ve liste değişebilir.
          </p>
          <p>
            Yanıtınız, ortakların reklam için cihazınızda bilgi saklayıp okuyamayacağını ve reklamların
            kişiselleştirilip kişiselleştirilemeyeceğini belirler. Kullanım analitiğimizi açıp kapatmaz; o, yukarıda
            anlatılan ayrı ayardır.
          </p>
          <p>
            Mesajın standart metninde tam konum geçebilir. Oyun konum izni istemez ve reklam isteklerine GPS
            koordinatı eklemez.
          </p>
          <p>
            iPhone’da oyun, hangi bölgede olursanız olun Apple’ın penceresiyle takip iznini bir kez sorar. iOS’ta
            takip istekleri kapalıysa pencere çıkmaz ve takip kapalı kalır. Penceredeki açıklamamız, iznin size daha
            alakalı reklamlar göstermemizi sağladığını ve oyunu ücretsiz tuttuğunu, izin vermeden de
            oynayabileceğinizi söyler. İzin mesajı ile takip izni ayrı tercihlerdir; her biri reklamların verilerinizi
            nasıl kullanacağını sınırlayabilir.
          </p>
        </>
      ),
    },
    {
      id: "analytics",
      title: "Kullanım analitiği ve çökme raporları",
      body: (
        <>
          <p>
            Oyunun nasıl oynandığını görmek için Google Analytics for Firebase kullanırız: oyuncular nereye kadar
            geliyor, koşular nerede bitiyor, hangi geliştirmeler seçiliyor, reklamlar ve satın alımlar nasıl çalışıyor.
            Bunu oyunu dengelemek için kullanırız.
          </p>
          <p>
            Olaylar adınıza veya bir hesaba değil, rastgele bir uygulama örneği kimliğine bağlıdır; kullanıcı kimliği
            tanımlamayız. Rastgele bir referans aynı koşunun olaylarını gruplar. Firebase ayrıca ilk açılış, oturumlar
            ve uygulama içi satın alımlar (ürün, fiyat ve para birimi) gibi kendi olaylarını kaydeder. Bu kayıtlar
            takma tanımlayıcılıdır; anonim olduklarını iddia etmiyoruz.
          </p>
          <p>
            Çökme raporları Firebase Crashlytics ile gönderilir ve aynı ayara bağlıdır. Bir rapor hata izini, cihaz
            modelini, işletim sistemi ve uygulama sürümünü, Firebase’in oluşturduğu rastgele kurulum kimliklerini ve
            çökmeden önce ne olduğunu görebilmemiz için sektör ile harita konumunu içeren son birkaç oyun olayını
            taşır. Ad, hesap veya reklam tanımlayıcısı içermez.
          </p>
          <p>
            Analytics içindeki reklam özellikleri reklam tercihlerinizi izler: izni veya takibi reddederseniz
            Analytics’e verinin reklam için kullanılmaması bildirilir. Analytics ayarlarımızda Google sinyalleri ve
            reklam kişiselleştirme kapalıdır.
          </p>
          <p>
            Kullanım ve çökme verilerini KAPALI yapmak ikisini de o andan itibaren durdurur ve cihazınızdaki uygulama
            örneği kimliğini sıfırlar. Google’a daha önce ulaşmış kayıtları silmez; bunlar Saklama bölümünde
            anlatıldığı gibi süresi dolunca silinir. Cihazda duran ama henüz gönderilmemiş bir çökme raporu, ayarı
            yeniden açarsanız gönderilebilir.
          </p>
        </>
      ),
    },
    {
      id: "purchases",
      title: "Satın alımlar",
      body: (
        <>
          <p>
            Oyunda Premium (tek seferlik satın alım) ve oyun içi altın paketleri satılır. Ödemeyi kendi koşullarıyla
            App Store veya Google Play yürütür; cihazınızdaki Unity satın alma kütüphanesi mağazayla iletişim kurar.
            Kart bilgilerinizi hiç almayız ve satın alma sunucusu çalıştırmayız.
          </p>
          <p>
            Premium’a sahip olup olmadığınız mağazaya sorulur ve cihazınızda hatırlanır. Ayarlar’daki “Satın
            alımları geri yükle”, aynı mağaza hesabıyla mağazaya yeniden sorar. Altın paketleri teslim edilince
            tüketilir ve geri yüklenemez: altın, cihazınızdaki oyun kaydına eklenir.
          </p>
          <p>
            Oyunu ücretliyken mi aldınız? iOS 16 veya sonrası yüklü iPhone’da oyun, Apple’ın ilk indirmenize ait imzalı
            kaydını cihazınızda okur ve Premium’u kendiliğinden açar. Bu kontrol cihazda yapılır; kaydı biz almayız.
            Android’de ve iOS 15’te otomatik kontrol yoktur: desteğe yazın, yardımcı olalım. Destek bir makbuz veya
            sipariş numarası isteyebilir; yalnızca gerekeni gönderin.
          </p>
          <p>İadeleri ve fatura kayıtlarını mağazalar yürütür.</p>
        </>
      ),
    },
    {
      id: "children",
      title: "Çocuklar",
      body: (
        <>
          <p>
            Almost in Orbit 13 yaş ve üzeri oyuncular içindir; 13 yaşından küçük çocuklara yönelik değildir. Oyun
            yaşınızı sormaz. 13 yaşından küçük çocuklardan bilerek kişisel veri toplamayız. Bir çocuğun oyunu
            kullandığını düşünüyorsanız inceleyebilmemiz için bize yazın.
          </p>
          <p>
            Satın alma onayı gibi mağaza aile denetimleri mağazanın kendi kurallarına göre uygulanır. Satın alma onayı,
            reklam veya analitik için rıza değildir.
          </p>
        </>
      ),
    },
    {
      id: "legal",
      title: "Hukuki sebepler",
      body: (
        <>
          <ul>
            <li>
              <strong>Rıza.</strong> Hukukun rıza aradığı durumlarda, reklam için cihazınızda bilgi saklama veya okuma
              ve kişiselleştirilmiş reklam. Rızayı Google’ın izin mesajında ve iPhone’da Apple’ın takip izni
              penceresinde verir veya reddedersiniz; istediğiniz zaman geri alabilirsiniz.
            </li>
            <li>
              <strong>Meşru menfaat.</strong> Oyunu dengelemek, düzeltmek ve geliştirmek için kullanım analitiği ve
              çökme raporları; kapatarak istediğiniz zaman itiraz edebilirsiniz. Ayrıca rıza gerektirmeyen reklam sunumu ve ölçümü, sahteciliğin
              önlenmesi ve destek taleplerinin yanıtlanması.
            </li>
            <li>
              <strong>Talep ettiğiniz hizmetin sunulması.</strong> Satın alımların teslimi ve geri yüklenmesi.
            </li>
            <li>
              <strong>Hukuki yükümlülükler.</strong> Hukukun gerektirdiği kayıtların tutulması.
            </li>
          </ul>
          <p>Reklam ortakları kendi amaçlarını ve hukuki sebeplerini izin mesajında ve kendi bildirimlerinde açıklar.</p>
        </>
      ),
    },
    {
      id: "recipients",
      title: "Veriler kime, nereye gider",
      body: (
        <>
          <ul>
            <li>
              <strong>Google</strong> (AdMob, User Messaging Platform, Google Analytics for Firebase, Firebase
              Crashlytics): reklamlar, izin mesajı, analitik ve çökme raporları. <a href={`${LINKS.google}?hl=tr`}>Google gizlilik politikası</a>,{" "}
              <a href={`${LINKS.googlePartners}?hl=tr`}>Google’ın, hizmetlerini kullanan uygulamalardan gelen bilgileri nasıl kullandığı</a>,{" "}
              <a href={LINKS.firebase}>Firebase gizlilik ve güvenlik</a>.
            </li>
            <li>
              <strong>Reklam ortakları:</strong> AdMob üzerinden bir reklamın sunulmasına katılan şirketler. Google’ın
              izin mesajında, her biri kendi bildirimiyle listelenir.
            </li>
            <li>
              <strong>Apple</strong> (App Store, Game Center, iCloud) ve <strong>Google</strong> (Google Play, Play
              Games): ödemeler, satın alma kayıtları ve isteğe bağlı bulut kayıt.{" "}
              <a href={`${LINKS.apple}tr/`}>Apple gizlilik politikası</a>,{" "}
              <a href={`${LINKS.google}?hl=tr`}>Google gizlilik politikası</a>.
            </li>
            <li>
              <strong>Unity</strong>: oyun motoru ve satın alma kütüphanesi.{" "}
              <a href={LINKS.unity}>Unity gizlilik politikası</a>. Unity’nin çökme, performans ve analitik raporlaması
              bu sürümde kapalıdır.
            </li>
            <li>
              <strong>E-posta sağlayıcımız:</strong> desteğe yazdığınızda.
            </li>
          </ul>
          <p>
            Verilerinizi para karşılığı satmayız. Hukukun gerektirdiği durumlarda veya bir hakkın tesisi, kullanılması
            ya da korunması için gerekli kayıtları açıklayabiliriz.
          </p>
          <p>
            Bu sağlayıcılar uluslararası çalışır; veriler Amerika Birleşik Devletleri dahil ülkeniz dışında
            işlenebilir. Konumlar ve güvenceler kendi bildirimlerinde açıklanır;{" "}
            <a href={`${LINKS.googleTransfers}?hl=tr`}>Google’ın aktarım çerçeveleri hakkındaki bilgilerine</a>{" "}
            bakabilirsiniz. Tüm verilerin Türkiye’de veya AEA’da kaldığını iddia etmiyoruz. Google’a göre yazılımının
            gönderdiği veriler aktarım sırasında şifrelenir.
          </p>
        </>
      ),
    },
    {
      id: "retention",
      title: "Saklama",
      body: (
        <>
          <ul>
            <li>
              <strong>Cihazınızda:</strong> oyunu veya verilerini silene kadar.
            </li>
            <li>
              <strong>Analitik:</strong> kullanıcı ve olay düzeyindeki veriler Analytics ayarlarımızda iki ay
              saklanır. Sizi tek başınıza göstermeyen toplu raporlar daha uzun tutulur.
            </li>
            <li>
              <strong>Çökme raporları:</strong> Google 90 gün saklar.
            </li>
            <li>
              <strong>Bulut kayıt:</strong> siz silene kadar iCloud veya Google hesabınızda.
            </li>
            <li>
              <strong>AdMob ve mağazalar:</strong> kendi politikalarına göre.
            </li>
            <li>
              <strong>Destek e-postaları:</strong> talebinizi çözmek ve yasal yükümlülükleri karşılamak için gereken
              süre boyunca.
            </li>
          </ul>
          <p>
            Oyunu kaldırmak, sağlayıcılardaki kayıtları silmez. Bize yazın; bulup kaldırabildiklerimizi ve geri kalanı
            hangi sağlayıcının yürüttüğünü söyleyelim.
          </p>
        </>
      ),
    },
    {
      id: "rights",
      title: "Haklarınız",
      body: (
        <>
          <p>
            Yaşadığınız yere göre verilerinize erişim, düzeltme, silme, kısıtlama veya bir kopya isteyebilir, meşru
            menfaate dayalı işlemeye itiraz edebilirsiniz. Rızaya dayalı işlemede rızanızı istediğiniz zaman geri
            alabilirsiniz; bu, öncesini etkilemez.
          </p>
          <p>
            <strong>Türkiye.</strong> KVKK’nın 11. maddesi uyarınca ayrıca verilerinizin kimlere aktarıldığını
            öğrenebilir, düzeltme ve silmenin onlara bildirilmesini isteyebilir, yalnızca otomatik analizle aleyhinize
            çıkan bir sonuca itiraz edebilir ve hukuka aykırı işlemeden doğan zararın giderilmesini talep edebilirsiniz.{" "}
            <a href={LINKS.kvkk}>Kişisel Verileri Koruma Kurulu</a>’na şikâyette bulunabilirsiniz.
          </p>
          <p>
            <strong>AEA ve Birleşik Krallık.</strong> Veri koruma makamınıza şikâyet edebilirsiniz; Birleşik
            Krallık’ta bu makam <a href={LINKS.ico}>ICO</a>’dur.
          </p>
          <p>
            <strong>Amerika Birleşik Devletleri.</strong> Kaliforniya’nın CCPA’sı gibi bazı eyalet yasaları bilme,
            silme ve düzeltme haklarının yanında, kişisel bilgilerin hedefli reklam için “satışından” veya
            “paylaşılmasından” çıkma hakkı verir. Kişisel bilgileri para karşılığı satmayız. AdMob
            üzerinden kişiselleştirilmiş reklam bu yasalarda “paylaşım” sayılabilir; iPhone’da takibi
            reddederek veya Android’de reklam kimliğinizi silerek bunun dışında kalabilirsiniz. Bu hakları kullanmanız
            oyunun size davranışını değiştirmez.
          </p>
          <p>
            <strong>Nasıl başvurulur.</strong> {mail} adresine yazın; hangi oyun olduğunu ve ne istediğinizi belirtin.
            Oyunun kendine ait hesabı olmadığı için analitik ve çökme kayıtları yalnızca rastgele kimliklere bağlıdır
            ve bu kimlikleri çoğunlukla sizinle eşleştiremeyiz. Bu bağı kesmenin en kesin yolu kullanım ve çökme
            verilerini kapatmaktır; bu, analitik kimliğini sıfırlar. Hiçbir zaman şifre veya kart bilgisi istemeyiz ve yasal süreler içinde yanıt veririz.
          </p>
        </>
      ),
    },
    {
      id: "paid-version",
      title: "3.0 ve önceki sürümler",
      body: (
        <>
          <p>
            3.0’a kadarki sürümler ücretli uygulama olarak satıldı. Bu sürümlerde reklam, bize ait analitik ve
            uygulama içi satın alım yoktur; oyun kişisel bilgi istemez.
          </p>
          <p>
            Bu sürümlerde Unity motorunun yerleşik tanılama özelliği, cihazınız çevrimiçiyken Unity Technologies’e
            teknik veri gönderebilir: çökme raporları, hata kayıtları ve temel performans sinyalleri; telefon modeli ve
            işletim sistemi sürümü gibi cihaz bilgileri ve IP adresinizle birlikte. Unity bunu motorunu kararlı tutmak
            için kullanır ve bize çökme ve performans raporları sunar.{" "}
            <a href={LINKS.unity}>Unity gizlilik politikasına</a> bakabilirsiniz. 3.1 sürümünden itibaren bu Unity
            tanılama özelliği kapalıdır.
          </p>
        </>
      ),
    },
    {
      id: "changes",
      title: "Değişiklikler ve iletişim",
      body: (
        <>
          <p>
            Bir güncelleme oyunun topladıklarını değiştirirse önce bu sayfayı ve tarihini günceller, hukukun
            gerektirdiği durumlarda yeni tercih alırız.
          </p>
          <p>Sorularınız için: {mail}</p>
        </>
      ),
    },
  ],
};

export const POLICY: Record<PolicyLang, PolicyCopy> = { en, tr };
