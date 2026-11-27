import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/site";
import { DATA_CONTROLLER, type LegalLang } from "@/lib/legal";
import { LegalDoc, legalDocMetadata, readLang, type LegalCopy, type SearchParams } from "../LegalDoc";
import styles from "../sledlings.module.css";

/*
 * Sledlings: Kart Rush privacy policy. This address is the game's Privacy Policy URL in App Store Connect and
 * Google Play, and the game itself links here: never move it without a 301. English is the default; `?lang=tr`
 * serves Turkish (for KVKK).
 *
 * Matched to the first store version, 1.0.0. Facts: Race docs/site/store-build-pages.md (the advisor, game commit
 * 10de45bb, 27 November 2026), checked in the game's code at 10de45bb (gpt/maps) and on online/rooms (tip 2a0158b1,
 * which sets 1.0.0 for store builds). Where the code says more than the doc, the page follows the code:
 * - Consent: Google's consent form (UMP) where Google's SDK requires it (EEA, UK, Switzerland). The game's own question
 *   where Google's form is not needed and the device region or store country is in TR/CN (or the EEA/UK/CH), or
 *   neither is known: on iOS two system alerts, "Share play data?" and "Allow ads and measurement?"; on Android one
 *   "Privacy choices" dialog with two unticked boxes. Everywhere else play data, personalised ads and measurement of
 *   our campaigns start on (Android always; on iOS campaign measurement and the ad ID need Allow in Apple's prompt),
 *   and Meta runs under Limited Data Use. "Manage privacy choices" changes all of it (Google's form or the game's own).
 * - Firebase: analytics_storage with play data; ad_storage + ad_user_data only when our campaigns may be measured;
 *   ad_personalization always denied; no user ID. Identifiers: app-instance ID; IDFV on iOS (not switched off);
 *   on Android the AD_ID permission is present and Firebase's ad ID collection is on, gated by ad_storage.
 *   Retention 14 months, Google signals and remarketing off (the owner's property settings, reported 26 Nov).
 * - AdMob: rewarded video only, offered after a race that paid coins, rated G, npa=1 unless personalisation allowed;
 *   ATT prompt with no screen of ours, first video only, only where personalised ads are allowed.
 * - Meta (store builds): install on both platforms, iOS also activate/deactivate (sessions); ad ID only where
 *   allowed (iOS: ATT authorised); LDU where nobody is asked; on iOS "Ask App Not to Track" stops Meta entirely.
 * - Delete account: in Google-managed regions play data comes back at the next launch from Google's stored answer
 *   (UgsOnline.WithdrawSharing → PlayDataConsent.ResolveProvider), so the page says so. Reported to the advisor.
 * - Room race results: Cloud Save public class (hashed seat IDs, finish order, times), so the page says "public".
 * - No account linking, no cloud backup of progress, nothing sold in store builds.
 * Unity's role, from the owner's Unity Developer Data settings (25 November 2026): see "Unity's own use of the data".
 * If the game changes what it sends, update both languages, the account deletion page, the KVKK entry and
 * POLICY_EFFECTIVE.
 */

const PAGE_PATH = "/sledlings/privacy";
const POLICY_EFFECTIVE = "2026-11-27";

const LINKS = {
  unity: "https://unity.com/legal/game-player-and-app-user-privacy-policy",
  apple: "https://www.apple.com/legal/privacy/",
  google: "https://policies.google.com/privacy",
  googlePartners: "https://policies.google.com/technologies/partner-sites",
  googleAds: "https://policies.google.com/technologies/ads",
  meta: "https://www.facebook.com/privacy/policy/",
};

const mail = <a href={`mailto:${CONTACT_EMAIL}?subject=Sledlings%20privacy`}>{CONTACT_EMAIL}</a>;

/* In-game paths and labels, as the game shows them (in English: the game is English only). */
const CHOICES_PATH = "Settings › Services › Privacy & data › Manage privacy choices";
const TRACKING_PATH = "Settings › Services › Privacy & data › Tracking settings";
const ASK_PATH = "Settings › Services › Privacy & data › Ask to delete my play data";
const DELETE_PATH = "Settings › Services › Privacy & data › Delete account";

const COPY: Record<LegalLang, LegalCopy> = {
  en: {
    metaTitle: "Privacy Policy · Sledlings: Kart Rush",
    metaDescription:
      "What Sledlings: Kart Rush does with data: an anonymous account for online play, play data in Google Analytics for Firebase, optional rewarded video ads from Google AdMob, measurement of our ads by Meta, crash reports, and your choices.",
    title: "Privacy Policy",
    meta: (
      <>
        Sledlings: Kart Rush · Effective date: <time dateTime={POLICY_EFFECTIVE}>27 November 2026</time>
      </>
    ),
    intro: (
      <>
        Sledlings: Kart Rush is a kart and sled racing game for iOS and Android, published by Simple Ideas (“we”).
        Simple Ideas is Salih Salihoğlu, an independent developer in Türkiye. This policy explains, in plain words,
        what the game does with data.
      </>
    ),
    summaryLabel: "In short",
    summary: [
      "You can play alone without an account. Your progress, settings and choices stay on your device.",
      "Online play needs no sign-up: the game asks once, then Unity creates an anonymous account for you. Other players see your name, made of two words from a list, and your rider, vehicle and costume. In Online Race you meet players you do not know, and you can block, mute or report any of them. There is no chat.",
      "Play data about how the game is played goes to Google Analytics for Firebase. Where the law asks for it, the game asks you first; elsewhere it is on until you turn it off. It is never used to show or target ads.",
      "The only ad is a video you choose to watch after a race, from Google AdMob. On iPhone and iPad, Apple’s tracking prompt asks you before an ad can use your advertising identifier.",
      "Meta receives the game’s install, and on iPhone and iPad its sessions, to measure our own ads on Facebook and Instagram, only where allowed.",
      "Crash reports go to Unity. Nothing is sold in the game.",
      <>
        Change your choices at <strong>{CHOICES_PATH}</strong>. Delete your account at <strong>{DELETE_PATH}</strong>{" "}
        or by email: see <Link href="/sledlings/delete-account">how to delete your account</Link>.
      </>,
    ],
    contentsLabel: "On this page",
    sections: [
      {
        id: "players",
        title: "Who the game is for",
        body: (
          <p>
            Sledlings is meant for players aged 13 and over. It is not directed at children, and the ads in it are
            limited to those suitable for general audiences. If you believe a child under 13 has an online account in
            the game, write to {mail} and we will delete it.
          </p>
        ),
      },
      {
        id: "alone",
        title: "Playing alone",
        body: (
          <p>
            You can play without an account. Your progress, your settings and your privacy choices are kept on your
            device. Playing alone sends nothing to the online services described below. Play data, the optional ad
            video and crash reports work in single-player races too, each under its own choice, as described in the
            sections that follow.
          </p>
        ),
      },
      {
        id: "online",
        title: "Online play",
        body: (
          <>
            <p>
              Online play starts the first time you press <strong>Online Race</strong> or <strong>Friends</strong>, or
              open an invite. The game first asks <strong>Play online</strong>: going online creates an anonymous
              account, and other players can see your name, rider and vehicle. When you continue, Unity Authentication
              creates an anonymous player account for you, identified by a player ID. You do not give a name, email
              address or password. After that, the game signs in to this account in the background, until you delete
              it. With the account, these are kept with Unity:
            </p>
            <ul>
              <li>
                <strong>Your name</strong>: two words from a fixed list, such as “Swift Otter”. You cannot type a name
                of your own. Unity adds a few digits to it, and the name with its digits is your{" "}
                <strong>friend code</strong>, which you can give to others so they can add you.
              </li>
              <li>
                <strong>A public profile</strong> in Unity Cloud Save: your player ID, your name, and the rider,
                vehicle and costume you race with. Other players of the game can read it.
              </li>
              <li>
                <strong>The results of your races in rooms</strong>: the finishing order and times, with the racers’
                player IDs in scrambled (hashed) form. They are kept with your profile, in the same public storage.
              </li>
              <li>
                <strong>Your friends list</strong>, with friend requests and the players you block. Your friends see
                whether you are online, in a room, racing or offline.
              </li>
              <li>
                <strong>Rooms</strong>: what a room needs to run a race. While you race, race data, such as each
                racer’s position, passes between the room’s players through Unity’s servers.
              </li>
            </ul>
            <p>
              As with any online service, Unity’s services see your device’s IP address and may work out an
              approximate location from it. Your single-player progress is not saved online; it stays on your device.
            </p>
            <p>
              <strong>Version check.</strong> When you go online, the game first reads a small file from this website
              to check that its version can still race online. The game sends nothing about you or your account with
              that request; like any website, ours receives the request’s IP address (see the{" "}
              <a href="/kvkk?lang=en">personal data notice</a>).
            </p>
          </>
        ),
      },
      {
        id: "other-players",
        title: "Online Race and other players",
        body: (
          <>
            <p>
              <strong>Online Race</strong> puts you in a race with other players who are searching at the same time,
              people you may not know. They see your name, rider, vehicle and costume, and they can send you a friend
              request. In friends’ rooms you race people who have the room’s code or an invite, and the host can also
              let Online Race players in.
            </p>
            <p>
              Tap a player in a race or a room, in your friends list or in the list of players you raced with to{" "}
              <strong>Block</strong>, <strong>Mute</strong> or <strong>Report</strong> them. A room’s host can also
              remove a player from that room. <strong>Report</strong> asks you for a reason, blocks and mutes the
              player at once, and opens an email to us in your own mail app, with both players’ IDs, the reason and
              the app version. Nothing is sent until you send that email; we then also receive your email address, and
              use it only to handle the report.
            </p>
            <p>
              There is no chat. Players cannot send typed text to each other: names come from a fixed list, and the
              only messages are four fixed phrases and a set of stickers.
            </p>
          </>
        ),
      },
      {
        id: "analytics",
        title: "Play data",
        body: (
          <>
            <p>
              “Play data” is the gameplay events the game sends to Google Analytics for Firebase, a Google service,
              so we can understand how the game is played and improve it. Play data is never used to show you ads or
              to target ads at you: the game always tells Google that ad personalisation is not allowed, and Google
              signals and remarketing are off in our Google Analytics. Where you allow ads and measurement (see{" "}
              <a href="#choices">your choices</a>), play data may also be used to measure our own advertising
              campaigns, for example how many players an ad brought to the game. The events contain no names, friend
              codes, room codes, player account IDs or typed text. They are:
            </p>
            <ul>
              <li>the game starting, with its load time and how far you have got;</li>
              <li>the tutorial: starting it, its tips and finishing it;</li>
              <li>
                races started and finished, with the course, the kind of race, your place and time, the rider and
                vehicle, flips, and how smoothly the game ran;
              </li>
              <li>progress milestones, such as medals and finished worlds;</li>
              <li>settings you change and screens you open;</li>
              <li>coins you earn and spend, and on what;</li>
              <li>online steps, such as creating or joining a room, and how well the connection worked.</li>
            </ul>
            <p>
              With these events, Google Analytics uses an app-instance ID, a random ID created for the game on your
              device; on iPhone and iPad also the identifier for vendor (IDFV); and on Android, while our campaigns may
              be measured, also the device’s advertising ID. It also logs some events by itself, such as the first
              opening, sessions, screens and app updates, and records details such as the app version, the device
              model, its operating system and language, and your approximate location (country, region, city). Google
              uses your IP address to work out that location and, according to Google, does not store it. We have set
              Google Analytics to keep play data for 14 months.
            </p>
          </>
        ),
      },
      {
        id: "ads",
        title: "Ads",
        body: (
          <>
            <p>
              The game has one kind of ad: a video you choose to watch. After a race that paid coins, including online
              and room races, the results offer to double that race’s coins if you watch a short video. Watching to the
              end doubles the coins; closing it early changes nothing. There are no banners, and no ad starts by
              itself. The ads come from <strong>Google AdMob</strong>.
            </p>
            <p>
              To show and measure an ad, AdMob receives your IP address (and an approximate location from it),
              technical details of the device and the app, how you interact with the ad, and, where you allow it, the
              device’s advertising identifier. Ads are personalised only where you allow it (see{" "}
              <a href="#choices">your choices</a>); otherwise they are not personalised, though Google still uses some
              data to deliver, count and protect them against fraud. All ads are limited to those suitable for general
              audiences. Google uses this data under its own terms; see{" "}
              <a href={LINKS.googleAds}>how Google uses data in advertising</a>.
            </p>
            <p>
              <strong>Apple’s tracking prompt.</strong> On iPhone and iPad, the advertising identifier (IDFA) is used
              only if you tap Allow in Apple’s own prompt. The game shows no screen of its own before it. The prompt
              appears the first time you choose to watch a video, and only where personalised ads are allowed. The
              video and its reward are the same whatever you answer.
            </p>
          </>
        ),
      },
      {
        id: "meta",
        title: "Measuring our ads on Facebook and Instagram",
        body: (
          <>
            <p>
              We advertise the game on Facebook and Instagram. To measure those ads, the game uses Meta’s software:
              Meta receives a record that the game was installed, on Android and on iOS. On iPhone and iPad it can
              also receive when the game was opened, how long it stayed open and its interruptions. Meta uses this to
              measure our ads. It can receive the advertising identifier where you allow it, and on iPhone and iPad
              only if you allow tracking in Apple’s prompt. Apple’s own install measurement, which counts installs in
              aggregate, works without that identifier.
            </p>
            <p>
              In the European Economic Area, the United Kingdom and Switzerland, Meta runs only if your answer in
              Google’s consent form allows it. Where the game asks you itself, it runs only if you allow ads and
              measurement. Elsewhere it runs with Meta’s Limited Data Use setting applied, unless you turn it off. On
              iPhone and iPad, if you answer Ask App Not to Track in Apple’s prompt, or later turn tracking off, Meta
              stops recording.
            </p>
            <p>
              When you withdraw your choice, the game stops new Meta recording and requests no further sends. A send
              that Meta’s software has already scheduled or started may still send records made while measurement was
              allowed; other records not yet sent stay on the phone while the choice is off. Meta’s software does not
              start again when you next open the game while the choice is off. Meta handles the data under its own
              terms; see the <a href={LINKS.meta}>Meta Privacy Policy</a>.
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
                <strong>In the European Economic Area, the United Kingdom and Switzerland</strong>, Google’s consent
                form appears when you open the game. Your answers there decide play data, personalised ads, the
                measurement of our ads and Meta. Nothing in that list starts before you answer.
              </li>
              <li>
                <strong>Where the game asks you itself</strong>: if your device’s region setting or your App Store or
                Google Play country is in Türkiye or China, or in the European Economic Area, the United Kingdom or
                Switzerland when Google’s form does not appear, or if the game cannot tell either. On iPhone and iPad
                the game asks two questions, <strong>Share play data?</strong> and{" "}
                <strong>Allow ads and measurement?</strong>; on Android one <strong>Privacy choices</strong> window
                with two boxes, both unticked. Nothing starts without your yes.
              </li>
              <li>
                <strong>Everywhere else</strong>, play data, personalised ads and the measurement of our ads are on
                when you first open the game, and Meta runs with Limited Data Use, until you turn them off. On iPhone
                and iPad, personalised ads, the advertising identifier and the measurement of our campaigns still need
                your Allow in Apple’s prompt.
              </li>
            </ul>
            <p>
              You can change your choices at any time at <strong>{CHOICES_PATH}</strong>, which opens Google’s form or
              the game’s own choices. On iPhone and iPad, <strong>{TRACKING_PATH}</strong> opens the game’s tracking
              switch in iOS Settings. Turning play data off stops it at once and resets the analytics data on your
              device, with a new app-instance ID.
            </p>
          </>
        ),
      },
      {
        id: "crashes",
        title: "Crash reports and technical data",
        body: (
          <p>
            The game sends crash and error reports to Unity Diagnostics, with an installation ID and not linked to your
            account, so we can find and fix problems. They are kept for 90 days. When Unity’s online services start,
            Unity’s services software may also send Unity technical data about how it runs. There is no switch for
            these in the game, and your privacy choices do not cover them.
          </p>
        ),
      },
      {
        id: "purchases",
        title: "If the game offers purchases",
        body: (
          <p>
            This version sells nothing. If a later version offers purchases, the payment is made to Apple or Google,
            who handle the card and the receipt. We then receive a record that a purchase was made (what, when and a
            transaction ID) and keep it with your account, so that what you bought can be restored. No card details
            reach us. We will update this policy before that happens.
          </p>
        ),
      },
      {
        id: "planned",
        title: "Planned, not in the game yet",
        body: (
          <div className={styles.planned}>
            <p className={styles.plannedLabel}>Planned · not live</p>
            <p>
              None of the following is in the game today. Before any of it is switched on, we will update this policy
              and its effective date.
            </p>
            <ul>
              <li>
                <strong>Linking a sign-in you already have</strong>: Sign in with Apple, Google, Game Center or Google
                Play Games. The game would receive an identifier for you from that provider, never your password.
                Linking will be optional. There is no sign-in with an email address.
              </li>
              <li>
                <strong>A private cloud backup of your progress</strong> for players who link a sign-in: one backup
                per account, kept with Unity, so you can restore your progress on another device. Other players will
                not be able to read it. If the progress on your device and the backup differ, the game will ask you
                which one to keep.
              </li>
            </ul>
          </div>
        ),
      },
      {
        id: "others",
        title: "Who else handles data",
        body: (
          <>
            <ul>
              <li>
                <strong>Unity Technologies</strong> runs the online features (the player account, friends, rooms and
                Cloud Save) and Unity Diagnostics. For these services Unity handles data on our behalf, as our
                processor. See the <a href={LINKS.unity}>Unity privacy policy for game players</a>.
              </li>
              <li>
                <strong>Google</strong> runs Google Analytics for Firebase, which receives the play data; for it, Google
                handles the data on our behalf, as our processor. Google also runs AdMob, which shows the ads, its
                consent form, and Google Ads, with which we measure our campaigns; for these, Google uses data under its
                own terms. Google also runs Google Play. See the <a href={LINKS.google}>Google Privacy Policy</a> and{" "}
                <a href={LINKS.googlePartners}>how Google uses information from apps that use its services</a>.
              </li>
              <li>
                <strong>Meta Platforms</strong> measures our ads on Facebook and Instagram, under its own terms. See
                the <a href={LINKS.meta}>Meta Privacy Policy</a>.
              </li>
              <li>
                <strong>Apple</strong> runs the App Store, the tracking prompt and its own install measurement. See
                the <a href={LINKS.apple}>Apple Privacy Policy</a>.
              </li>
            </ul>
            <p>Each of them handles data under its own privacy policy.</p>
            <h3>Unity’s own use of the data</h3>
            <p>
              In Unity’s settings for the game, we have turned on Unity’s essential data and its additional recommended
              data. The additional data adds session details and data about how Unity’s engine runs on the device.
            </p>
            <p>
              Unity may also use the game’s data, aggregated and combined with data from other developers, for
              anonymised benchmarks and industry insights, to improve its own models and products, and to give us
              recommendations. For these uses Unity is an independent controller, responsible for them under its own
              privacy policy and the data protection terms we have agreed with Unity. Unity’s support staff have no
              access to the game’s data, and no Unity advertising products have access to it.
            </p>
          </>
        ),
      },
      {
        id: "deleting",
        title: "Keeping and deleting your data",
        body: (
          <>
            <ul>
              <li>
                Online data, including your public profile and the results of your races in rooms, is kept for as long
                as your player account exists.
              </li>
              <li>Play data is kept by Google for 14 months.</li>
              <li>Crash reports are kept for 90 days.</li>
              <li>
                After you turn play data off or delete your account, the game keeps the app-instance ID on your device,
                and only there, for up to 90 days, so you can still ask us to delete that play data.
              </li>
              <li>Progress saved on your device stays there.</li>
            </ul>
            <p>
              To delete your account, open <strong>{DELETE_PATH}</strong> in the game, or email us. This removes your
              anonymous player account, your public profile and the race results kept with it, and your friends list
              with its requests and blocks. It also turns play data off and resets its ID on your device. In the
              European Economic Area, the United Kingdom and Switzerland, your answer in Google’s consent form still
              stands: if it allowed play data, play data starts again with a new ID the next time you open the game,
              unless you change it at <strong>{CHOICES_PATH}</strong>. Your choices for ads and Meta stay as they are.
              Your single-player progress on the device stays. The steps are on the{" "}
              <Link href="/sledlings/delete-account">account deletion page</Link>.
            </p>
            <p>
              <strong>Play data Google already received</strong> is not linked to your name or player account: we can
              find it only with the app-instance ID. Open <strong>{ASK_PATH}</strong>: the game opens an email to us
              with that ID and nothing else about you. Send it, and we ask Google to delete that data within 30 days
              and reply when we have. This also works after you have turned play data off or deleted your account, for
              up to 90 days.
            </p>
          </>
        ),
      },
      {
        id: "rights",
        title: "Your rights",
        body: (
          <p>
            Depending on where you live, for example in the European Union, the United Kingdom or Türkiye (KVKK), you
            may have the right to access, correct or delete your data, and to object to how it is used. Write to {mail}{" "}
            to use these rights. You can also complain to your data protection authority. The data controller is{" "}
            {DATA_CONTROLLER}.
          </p>
        ),
      },
      {
        id: "contact",
        title: "Contact",
        body: (
          <p>
            Questions about this policy: {mail}. If you email us, we use your message and address only to answer you.
            How we handle support email is explained in the{" "}
            <a href="/kvkk?lang=en#processing">personal data notice (KVKK)</a>.
          </p>
        ),
      },
      {
        id: "changes",
        title: "Changes",
        body: (
          <p>
            If the game changes what it does with data, we will update this page and its effective date first.
          </p>
        ),
      },
    ],
  },
  tr: {
    metaTitle: "Gizlilik Politikası · Sledlings: Kart Rush",
    metaDescription:
      "Sledlings: Kart Rush verilerle ne yapar: çevrim içi oyun için anonim bir hesap, Google Analytics for Firebase’teki oyun verileri, Google AdMob’dan isteğe bağlı ödüllü video reklamlar, reklamlarımızın Meta ile ölçülmesi, çökme raporları ve seçimleriniz.",
    title: "Gizlilik Politikası",
    meta: (
      <>
        <span lang="en">Sledlings: Kart Rush</span> · Yürürlük tarihi:{" "}
        <time dateTime={POLICY_EFFECTIVE}>27 Kasım 2026</time>
      </>
    ),
    intro: (
      <>
        <span lang="en">Sledlings: Kart Rush</span>, Simple Ideas (“biz”) tarafından yayımlanan, iOS ve Android için
        bir kart ve kızak yarışı oyunudur. Simple Ideas, Türkiye’de bağımsız geliştirici olarak çalışan Salih
        Salihoğlu’dur. Bu politika, oyunun verilerle ne yaptığını sade bir dille açıklar. Oyun İngilizce olduğu için
        oyundaki adları İngilizce yazıyoruz.
      </>
    ),
    summaryLabel: "Kısaca",
    summary: [
      "Hesap olmadan tek başınıza oynayabilirsiniz. İlerlemeniz, ayarlarınız ve seçimleriniz cihazınızda kalır.",
      "Çevrim içi oyun için kayıt gerekmez: oyun bir kez sorar, sonra Unity sizin için anonim bir hesap oluşturur. Diğer oyuncular listeden seçilen iki kelimelik adınızı, karakterinizi, aracınızı ve kostümünüzü görür. Online Race’te tanımadığınız oyuncularla karşılaşırsınız; herhangi birini engelleyebilir, sessize alabilir veya bildirebilirsiniz. Sohbet yoktur.",
      "Oyunun nasıl oynandığına dair oyun verileri Google Analytics for Firebase’e gider. Yasanın gerektirdiği yerlerde oyun önce size sorar; diğer yerlerde siz kapatana kadar açıktır. Size reklam göstermek veya reklam hedeflemek için asla kullanılmaz.",
      "Tek reklam, bir yarıştan sonra izlemeyi sizin seçtiğiniz, Google AdMob’dan gelen bir videodur. iPhone ve iPad’de bir reklamın reklam tanımlayıcınızı kullanabilmesi için önce Apple’ın izleme sorusu size sorulur.",
      "Meta, kendi reklamlarımızı Facebook ve Instagram’da ölçmek için oyunun kurulumunu, iPhone ve iPad’de ayrıca oturumlarını, yalnızca izin verilen yerlerde alır.",
      "Çökme raporları Unity’ye gider. Oyunda hiçbir şey satılmaz.",
      <>
        Seçimlerinizi <strong lang="en">{CHOICES_PATH}</strong> yolundan değiştirin. Hesabınızı{" "}
        <strong lang="en">{DELETE_PATH}</strong> yolundan veya e-postayla silebilirsiniz: bkz.{" "}
        <Link href="/sledlings/delete-account?lang=tr">hesabınızı nasıl silersiniz</Link>.
      </>,
    ],
    contentsLabel: "Bu sayfada",
    sections: [
      {
        id: "players",
        title: "Oyun kimler için",
        body: (
          <p>
            Sledlings 13 yaş ve üzeri oyuncular içindir; çocuklara yönelik değildir ve içindeki reklamlar genel
            izleyiciye uygun olanlarla sınırlıdır. 13 yaşından küçük bir çocuğun oyunda çevrim içi hesabı olduğunu
            düşünüyorsanız {mail} adresine yazın, hesabı sileriz.
          </p>
        ),
      },
      {
        id: "alone",
        title: "Tek başınıza oynamak",
        body: (
          <p>
            Hesap olmadan oynayabilirsiniz. İlerlemeniz, ayarlarınız ve gizlilik seçimleriniz cihazınızda saklanır.
            Tek başınıza oynamak, aşağıda anlatılan çevrim içi hizmetlere hiçbir şey göndermez. Oyun verileri, isteğe
            bağlı reklam videosu ve çökme raporları tek oyunculu yarışlarda da, her biri kendi seçimine bağlı olarak,
            sonraki bölümlerde anlatıldığı gibi çalışır.
          </p>
        ),
      },
      {
        id: "online",
        title: "Çevrim içi oyun",
        body: (
          <>
            <p>
              Çevrim içi oyun, <strong lang="en">Online Race</strong> veya <strong lang="en">Friends</strong> düğmesine
              ilk bastığınızda ya da bir davet açtığınızda başlar. Oyun önce <strong lang="en">Play online</strong>{" "}
              diye sorar: çevrim içi olmak anonim bir hesap oluşturur ve diğer oyuncular adınızı, karakterinizi ve
              aracınızı görebilir. Devam ettiğinizde Unity Authentication sizin için bir oyuncu kimliğiyle tanınan
              anonim bir oyuncu hesabı oluşturur. Ad, e-posta adresi veya şifre vermezsiniz. Bundan sonra oyun, siz
              hesabı silene kadar bu hesaba arka planda bağlanır. Hesapla birlikte şunlar Unity’de tutulur:
            </p>
            <ul>
              <li>
                <strong>Adınız:</strong> sabit bir listeden iki kelime, örneğin <span lang="en">“Swift Otter”</span>.
                Kendiniz bir ad yazamazsınız. Unity buna birkaç rakam ekler; rakamlarıyla birlikte bu ad, başkalarının
                sizi eklemesi için verebileceğiniz <strong>arkadaş kodunuzdur</strong>.
              </li>
              <li>
                <strong>Unity Cloud Save’de herkese açık bir profil:</strong> oyuncu kimliğiniz, adınız ve yarıştığınız
                karakter, araç ve kostüm. Oyunun diğer oyuncuları okuyabilir.
              </li>
              <li>
                <strong>Odalardaki yarışlarınızın sonuçları:</strong> varış sırası ve süreler, yarışçıların oyuncu
                kimlikleri karıştırılmış (özetlenmiş, <span lang="en">hash</span>) biçimde. Profilinizle birlikte, aynı
                herkese açık alanda tutulur.
              </li>
              <li>
                <strong>Arkadaş listeniz</strong>, arkadaşlık istekleri ve engellediğiniz oyuncularla birlikte.
                Arkadaşlarınız sizin çevrim içi mi, bir odada mı, yarışta mı yoksa çevrim dışı mı olduğunuzu görür.
              </li>
              <li>
                <strong>Odalar:</strong> bir odanın yarış yürütmek için ihtiyaç duyduğu bilgiler. Yarışırken yarış
                verileri (örneğin her yarışçının konumu) Unity’nin sunucuları üzerinden odadaki oyuncular arasında
                iletilir.
              </li>
            </ul>
            <p>
              Her çevrim içi hizmette olduğu gibi Unity’nin hizmetleri cihazınızın IP adresini görür ve buradan yaklaşık
              bir konum çıkarabilir. Tek oyunculu ilerlemeniz çevrim içi kaydedilmez; cihazınızda kalır.
            </p>
            <p>
              <strong>Sürüm kontrolü.</strong> Çevrim içi olduğunuzda oyun, sürümünün hâlâ çevrim içi yarışabildiğini
              anlamak için önce bu web sitesinden küçük bir dosya okur. Oyun bu istekle sizinle veya hesabınızla ilgili
              hiçbir şey göndermez; her web sitesi gibi bizimki de isteğin IP adresini alır (bkz.{" "}
              <a href="/kvkk?lang=tr">KVKK aydınlatma metni</a>).
            </p>
          </>
        ),
      },
      {
        id: "other-players",
        title: "Online Race ve diğer oyuncular",
        body: (
          <>
            <p>
              <strong lang="en">Online Race</strong> sizi aynı anda arama yapan, tanımıyor olabileceğiniz oyuncularla
              aynı yarışa koyar. Bu oyuncular adınızı, karakterinizi, aracınızı ve kostümünüzü görür ve size arkadaşlık
              isteği gönderebilir. Arkadaş odalarında odanın koduna veya bir davete sahip kişilerle yarışırsınız; oda
              sahibi Online Race oyuncularını da odaya alabilir.
            </p>
            <p>
              Bir yarışta veya odada, arkadaş listenizde ya da birlikte yarıştığınız oyuncular listesinde bir oyuncuya
              dokunarak onu <strong lang="en">Block</strong> (engelle), <strong lang="en">Mute</strong> (sessize al)
              veya <strong lang="en">Report</strong> (bildir) seçenekleriyle yönetebilirsiniz. Oda sahibi bir oyuncuyu o
              odadan da çıkarabilir. <strong lang="en">Report</strong> sizden bir neden ister, oyuncuyu hemen engeller ve
              sessize alır, ardından kendi e-posta uygulamanızda bize gönderilecek bir e-posta açar; içinde iki
              oyuncunun kimliği, neden ve uygulama sürümü bulunur. Siz bu e-postayı gönderene kadar hiçbir şey
              gönderilmez; gönderdiğinizde e-posta adresinizi de alırız ve onu yalnızca bildirimi ele almak için
              kullanırız.
            </p>
            <p>
              Sohbet yoktur. Oyuncular birbirine yazılı metin gönderemez: adlar sabit bir listeden gelir, gönderilebilen
              tek mesajlar dört hazır ifade ve bir dizi çıkartmadır.
            </p>
          </>
        ),
      },
      {
        id: "analytics",
        title: "Oyun verileri",
        body: (
          <>
            <p>
              “Oyun verileri”, oyunun nasıl oynandığını anlayıp oyunu geliştirebilmemiz için oyunun bir Google hizmeti
              olan Google Analytics for Firebase’e gönderdiği oyun olaylarıdır. Oyun verileri size reklam göstermek veya
              reklam hedeflemek için asla kullanılmaz: oyun Google’a reklam kişiselleştirmesine izin verilmediğini her
              zaman bildirir; Google Analytics’imizde Google sinyalleri ve yeniden pazarlama kapalıdır. Reklamlara ve
              ölçüme izin verdiğiniz yerlerde (bkz. <a href="#choices">seçimleriniz</a>) oyun verileri kendi reklam
              kampanyalarımızı ölçmek için de kullanılabilir; örneğin bir reklamın oyuna kaç oyuncu getirdiğini görmek
              için. Olaylar ad, arkadaş kodu, oda kodu, oyuncu hesabı kimliği veya yazılmış metin içermez. Olaylar
              şunlardır:
            </p>
            <ul>
              <li>oyunun açılışı; yüklenme süresi ve oyunda ne kadar ilerlediğinizle;</li>
              <li>eğitim: başlaması, ipuçları ve bitmesi;</li>
              <li>
                başlatılan ve bitirilen yarışlar; parkur, yarış türü, sıranız ve süreniz, karakter ve araç, taklalar ve
                oyunun ne kadar akıcı çalıştığı;
              </li>
              <li>madalyalar ve bitirilen dünyalar gibi ilerleme aşamaları;</li>
              <li>değiştirdiğiniz ayarlar ve açtığınız ekranlar;</li>
              <li>kazandığınız ve harcadığınız jetonlar ve neye harcadığınız;</li>
              <li>oda açmak veya bir odaya katılmak gibi çevrim içi adımlar ve bağlantının ne kadar iyi çalıştığı.</li>
            </ul>
            <p>
              Google Analytics bu olaylarla birlikte, oyun için cihazınızda oluşturulan rastgele bir kimlik olan uygulama
              örneği kimliğini (<span lang="en">app-instance ID</span>); iPhone ve iPad’de ayrıca satıcı tanımlayıcısını
              (IDFV); Android’de ise kampanyalarımızın ölçülmesine izin verildiği sürece cihazın reklam kimliğini de
              kullanır. İlk açılış, oturumlar, ekranlar ve uygulama güncellemeleri gibi bazı olayları kendisi kaydeder;
              uygulama sürümü, cihaz modeli, işletim sistemi ve dili ile yaklaşık konumunuz (ülke, bölge, şehir) gibi
              bilgileri de tutar. Google bu konumu belirlemek için IP adresinizi kullanır ve Google’a göre IP adresini
              saklamaz. Google Analytics’i oyun verilerini 14 ay saklayacak şekilde ayarladık.
            </p>
          </>
        ),
      },
      {
        id: "ads",
        title: "Reklamlar",
        body: (
          <>
            <p>
              Oyunda tek tür reklam vardır: izlemeyi sizin seçtiğiniz bir video. Jeton kazandıran bir yarıştan sonra,
              çevrim içi ve oda yarışları da dahil, sonuç ekranı kısa bir video izlerseniz o yarışın jetonlarını ikiye
              katlamayı önerir. Sonuna kadar izlerseniz jetonlar ikiye katlanır; erken kapatırsanız hiçbir şey değişmez.
              Banner reklam yoktur ve hiçbir reklam kendiliğinden başlamaz. Reklamlar{" "}
              <strong>Google AdMob</strong>’dan gelir.
            </p>
            <p>
              Bir reklamı göstermek ve ölçmek için AdMob IP adresinizi (ve buradan yaklaşık bir konumu), cihazın ve
              uygulamanın teknik bilgilerini, reklamla nasıl etkileşime girdiğinizi ve izin verdiğiniz yerlerde cihazın
              reklam tanımlayıcısını alır. Reklamlar yalnızca izin verdiğiniz yerlerde kişiselleştirilir (bkz.{" "}
              <a href="#choices">seçimleriniz</a>); aksi hâlde kişiselleştirilmez, ancak Google bunları sunmak, saymak
              ve dolandırıcılığa karşı korumak için yine bazı verileri kullanır. Tüm reklamlar genel izleyiciye uygun
              olanlarla sınırlıdır. Google bu verileri kendi şartlarına göre kullanır; bkz.{" "}
              <a href={LINKS.googleAds}>Google’ın reklamcılıkta verileri nasıl kullandığı</a>.
            </p>
            <p>
              <strong>Apple’ın izleme sorusu.</strong> iPhone ve iPad’de reklam tanımlayıcısı (IDFA) yalnızca Apple’ın
              kendi sorusunda <span lang="en">Allow</span> (İzin Ver) seçeneğine dokunursanız kullanılır. Oyun bundan
              önce kendine ait bir ekran göstermez. Soru, bir videoyu izlemeyi ilk seçtiğinizde ve yalnızca
              kişiselleştirilmiş reklamlara izin verilen yerlerde çıkar. Video ve ödülü, cevabınız ne olursa olsun
              aynıdır.
            </p>
          </>
        ),
      },
      {
        id: "meta",
        title: "Facebook ve Instagram reklamlarımızın ölçülmesi",
        body: (
          <>
            <p>
              Oyunun reklamını Facebook ve Instagram’da yapıyoruz. Bu reklamları ölçmek için oyun Meta’nın yazılımını
              kullanır: Meta, Android’de ve iOS’ta oyunun kurulduğuna dair bir kayıt alır. iPhone ve iPad’de ayrıca
              oyunun ne zaman açıldığını, ne kadar açık kaldığını ve kesintilerini de alabilir. Meta bunları
              reklamlarımızı ölçmek için kullanır. İzin verdiğiniz yerlerde reklam tanımlayıcısını alabilir; iPhone ve
              iPad’de yalnızca Apple’ın sorusunda izlemeye izin verirseniz. Apple’ın kurulumları toplu olarak sayan kendi
              ölçümü bu tanımlayıcı olmadan çalışır.
            </p>
            <p>
              Avrupa Ekonomik Alanı, Birleşik Krallık ve İsviçre’de Meta yalnızca Google’ın izin formundaki cevabınız
              buna izin veriyorsa çalışır. Oyunun size kendisinin sorduğu yerlerde yalnızca reklamlara ve ölçüme izin
              verirseniz çalışır. Diğer yerlerde, siz kapatmadıkça Meta’nın Sınırlı Veri Kullanımı (
              <span lang="en">Limited Data Use</span>) ayarıyla çalışır. iPhone ve iPad’de Apple’ın sorusunda{" "}
              <span lang="en">Ask App Not to Track</span> (Uygulamadan İzlememesini İste) derseniz ya da izlemeyi
              sonradan kapatırsanız Meta kayıt yapmayı bırakır.
            </p>
            <p>
              Seçiminizi geri aldığınızda oyun yeni Meta kayıtlarını durdurur ve başka gönderim istemez. Meta’nın
              yazılımının önceden planladığı veya başlattığı bir gönderim, ölçüme izin verildiği sırada oluşan kayıtları
              yine de gönderebilir; henüz gönderilmemiş diğer kayıtlar, seçim kapalı kaldıkça telefonda bekler. Seçim
              kapalıyken oyunu bir sonraki açışınızda Meta’nın yazılımı yeniden başlamaz. Meta verileri kendi
              şartlarına göre işler; bkz. <a href={LINKS.meta}>Meta Gizlilik Politikası</a>.
            </p>
          </>
        ),
      },
      {
        id: "choices",
        title: "Seçimleriniz",
        body: (
          <>
            <ul>
              <li>
                <strong>Avrupa Ekonomik Alanı, Birleşik Krallık ve İsviçre’de</strong> oyunu açtığınızda Google’ın izin
                formu çıkar. Oradaki cevaplarınız oyun verilerini, kişiselleştirilmiş reklamları, reklamlarımızın
                ölçülmesini ve Meta’yı belirler. Bunların hiçbiri siz cevap vermeden başlamaz.
              </li>
              <li>
                <strong>Oyunun size kendisinin sorduğu yerler:</strong> cihazınızın bölge ayarı ya da App Store veya
                Google Play ülkeniz Türkiye veya Çin ise, Google’ın formu çıkmadığında Avrupa Ekonomik Alanı, Birleşik
                Krallık veya İsviçre ise ya da oyun ikisini de anlayamazsa. iPhone ve iPad’de oyun iki soru sorar:{" "}
                <strong lang="en">Share play data?</strong> (oyun verilerini paylaş) ve{" "}
                <strong lang="en">Allow ads and measurement?</strong> (reklamlara ve ölçüme izin ver); Android’de ise
                ikisi de işaretsiz iki kutulu tek bir <strong lang="en">Privacy choices</strong> penceresi açılır. Siz
                evet demeden hiçbiri başlamaz.
              </li>
              <li>
                <strong>Diğer her yerde</strong> oyun verileri, kişiselleştirilmiş reklamlar ve reklamlarımızın
                ölçülmesi oyunu ilk açtığınızda açıktır ve Meta Sınırlı Veri Kullanımı ile çalışır; siz kapatana kadar
                böyle kalır. iPhone ve iPad’de kişiselleştirilmiş reklamlar, reklam tanımlayıcısı ve kampanyalarımızın
                ölçülmesi yine de Apple’ın sorusunda izin vermenizi gerektirir.
              </li>
            </ul>
            <p>
              Seçimlerinizi istediğiniz zaman <strong lang="en">{CHOICES_PATH}</strong> yolundan değiştirebilirsiniz;
              bu yol Google’ın formunu ya da oyunun kendi seçimlerini açar. iPhone ve iPad’de{" "}
              <strong lang="en">{TRACKING_PATH}</strong> yolu, iOS Ayarlar’ında oyunun izleme anahtarını açar. Oyun
              verilerini kapattığınızda toplama hemen durur ve cihazınızdaki analitik veriler yeni bir uygulama örneği
              kimliğiyle sıfırlanır.
            </p>
          </>
        ),
      },
      {
        id: "crashes",
        title: "Çökme raporları ve teknik veriler",
        body: (
          <p>
            Oyun, sorunları bulup düzeltebilmemiz için çökme ve hata raporlarını, hesabınıza bağlanmadan, bir kurulum
            kimliğiyle Unity Diagnostics’e gönderir. Raporlar 90 gün saklanır. Unity’nin çevrim içi hizmetleri
            başladığında Unity’nin hizmet yazılımı da Unity’ye kendi çalışmasıyla ilgili teknik veriler gönderebilir.
            Oyunda bunlar için bir anahtar yoktur ve gizlilik seçimleriniz bunları kapsamaz.
          </p>
        ),
      },
      {
        id: "purchases",
        title: "Oyun satın alma sunarsa",
        body: (
          <p>
            Bu sürüm hiçbir şey satmaz. İleriki bir sürüm satın alma sunarsa ödeme, kartı ve makbuzu yöneten Apple’a
            veya Google’a yapılır. Biz bir satın alma yapıldığına dair bir kayıt (ne, ne zaman ve bir işlem kimliği)
            alır ve aldıklarınızın geri yüklenebilmesi için hesabınızla birlikte saklarız. Kart bilgileri bize hiç
            ulaşmaz. Bu olmadan önce bu politikayı güncelleriz.
          </p>
        ),
      },
      {
        id: "planned",
        title: "Planlanan, henüz oyunda olmayanlar",
        body: (
          <div className={styles.planned}>
            <p className={styles.plannedLabel}>Planlanan · henüz yok</p>
            <p>
              Aşağıdakilerin hiçbiri bugün oyunda yoktur. Herhangi biri devreye girmeden önce bu politikayı ve yürürlük
              tarihini güncelleriz.
            </p>
            <ul>
              <li>
                <strong>Zaten kullandığınız bir girişi bağlamak:</strong> Apple ile Giriş Yap, Google, Game Center veya
                Google Play Games. Oyun o sağlayıcıdan sizin için bir tanımlayıcı alacak, şifrenizi asla almayacak.
                Bağlamak isteğe bağlı olacak. E-posta adresiyle giriş yoktur.
              </li>
              <li>
                <strong>İlerlemenizin buluttaki özel yedeği:</strong> giriş bağlayan oyuncular için, hesap başına bir
                yedek. Unity’de tutulacak ve ilerlemenizi başka bir cihazda geri yüklemenizi sağlayacak. Diğer oyuncular
                okuyamayacak. Cihazınızdaki ilerleme ile yedek farklıysa oyun hangisini tutacağınızı soracak.
              </li>
            </ul>
          </div>
        ),
      },
      {
        id: "others",
        title: "Verileri başka kimler işler",
        body: (
          <>
            <ul>
              <li>
                <strong>Unity Technologies</strong> çevrim içi özellikleri (oyuncu hesabı, arkadaşlar, odalar ve Cloud
                Save) ve Unity Diagnostics’i çalıştırır. Bu hizmetler için Unity verileri bizim adımıza, veri işleyen
                olarak işler. Bkz. <a href={LINKS.unity}>Unity’nin oyunculara yönelik gizlilik politikası</a>.
              </li>
              <li>
                <strong>Google</strong>, oyun verilerini alan Google Analytics for Firebase’i çalıştırır; bunun için
                Google verileri bizim adımıza, veri işleyen olarak işler. Google ayrıca reklamları gösteren AdMob’u,
                onun izin formunu ve kampanyalarımızı ölçtüğümüz Google Ads’i çalıştırır; bunlarda Google verileri kendi
                şartlarına göre kullanır. Google, Google Play’i de çalıştırır. Bkz.{" "}
                <a href={LINKS.google}>Google Gizlilik Politikası</a> ve{" "}
                <a href={LINKS.googlePartners}>Google’ın, hizmetlerini kullanan uygulamalardan gelen bilgileri nasıl
                kullandığı</a>.
              </li>
              <li>
                <strong>Meta Platforms</strong>, Facebook ve Instagram’daki reklamlarımızı kendi şartlarına göre ölçer.
                Bkz. <a href={LINKS.meta}>Meta Gizlilik Politikası</a>.
              </li>
              <li>
                <strong>Apple</strong> App Store’u, izleme sorusunu ve kendi kurulum ölçümünü çalıştırır. Bkz.{" "}
                <a href={LINKS.apple}>Apple Gizlilik Politikası</a>.
              </li>
            </ul>
            <p>Her biri verileri kendi gizlilik politikasına göre işler.</p>
            <h3>Unity’nin verileri kendi amaçlarıyla kullanması</h3>
            <p>
              Oyunun Unity ayarlarında Unity’nin temel verilerini ve ek önerilen verilerini açtık. Ek veriler, oturum
              ayrıntılarını ve Unity motorunun cihazda nasıl çalıştığına ilişkin verileri kapsar.
            </p>
            <p>
              Unity, oyunun verilerini toplu hâlde ve diğer geliştiricilerin verileriyle birleştirerek anonimleştirilmiş
              karşılaştırmalar ve sektör analizleri için, kendi modellerini ve ürünlerini geliştirmek için ve bize
              öneriler sunmak için de kullanabilir. Bu kullanımlarda Unity ayrı bir veri sorumlusudur; bunlardan kendi
              gizlilik politikasına ve Unity ile kabul ettiğimiz veri koruma şartlarına göre sorumludur. Unity’nin destek
              ekibinin oyunun verilerine erişimi yoktur; Unity’nin hiçbir reklam ürününün de erişimi yoktur.
            </p>
          </>
        ),
      },
      {
        id: "deleting",
        title: "Verilerin saklanması ve silinmesi",
        body: (
          <>
            <ul>
              <li>
                Herkese açık profiliniz ve odalardaki yarışlarınızın sonuçları dahil çevrim içi veriler, oyuncu hesabınız
                var olduğu sürece saklanır.
              </li>
              <li>Oyun verileri Google tarafından 14 ay saklanır.</li>
              <li>Çökme raporları 90 gün saklanır.</li>
              <li>
                Oyun verilerini kapattıktan veya hesabınızı sildikten sonra, o oyun verilerinin silinmesini yine de
                isteyebilmeniz için oyun uygulama örneği kimliğini en fazla 90 gün boyunca yalnızca cihazınızda tutar.
              </li>
              <li>Cihazınızda saklanan ilerleme orada kalır.</li>
            </ul>
            <p>
              Hesabınızı silmek için oyunda <strong lang="en">{DELETE_PATH}</strong> yolunu açın ya da bize e-posta
              gönderin. Bu, anonim oyuncu hesabınızı, herkese açık profilinizi ve onunla tutulan yarış sonuçlarını,
              istekleri ve engellemeleriyle birlikte arkadaş listenizi kaldırır. Ayrıca oyun verilerini kapatır ve
              cihazınızdaki kimliğini sıfırlar. Avrupa Ekonomik Alanı, Birleşik Krallık ve İsviçre’de Google’ın izin
              formundaki cevabınız geçerli kalır: oyun verilerine izin verdiyse, siz{" "}
              <strong lang="en">{CHOICES_PATH}</strong> yolundan değiştirmedikçe oyun verileri oyunu bir sonraki
              açışınızda yeni bir kimlikle yeniden başlar. Reklam ve Meta seçimleriniz olduğu gibi kalır. Cihazdaki tek
              oyunculu ilerlemeniz kalır. Adımlar{" "}
              <Link href="/sledlings/delete-account?lang=tr">hesap silme sayfasında</Link>.
            </p>
            <p>
              <strong>Google’ın daha önce aldığı oyun verileri</strong> adınıza veya oyuncu hesabınıza bağlı değildir:
              onları ancak uygulama örneği kimliğiyle bulabiliriz. <strong lang="en">{ASK_PATH}</strong> yolunu açın:
              oyun, bu kimliği içeren ve sizinle ilgili başka hiçbir bilgi taşımayan bir e-posta açar. Gönderdiğinizde
              30 gün içinde bu verilerin silinmesini Google’dan ister ve size yanıt veririz. Bu, oyun verilerini
              kapattıktan veya hesabınızı sildikten sonra da 90 güne kadar çalışır.
            </p>
          </>
        ),
      },
      {
        id: "rights",
        title: "Haklarınız",
        body: (
          <p>
            Yaşadığınız yere bağlı olarak (örneğin Avrupa Birliği, Birleşik Krallık veya Türkiye’de KVKK kapsamında)
            verilerinize erişme, bunları düzeltme veya sildirme ve kullanılmalarına itiraz etme hakkınız olabilir. Bu
            haklarınızı kullanmak için {mail} adresine yazın. Ayrıca veri koruma otoritenize şikâyette bulunabilirsiniz.
            Veri sorumlusu: {DATA_CONTROLLER}.
          </p>
        ),
      },
      {
        id: "contact",
        title: "İletişim",
        body: (
          <p>
            Bu politikayla ilgili sorular: {mail}. Bize e-posta gönderirseniz mesajınızı ve adresinizi yalnızca size
            yanıt vermek için kullanırız. Destek yazışmalarının nasıl işlendiği{" "}
            <a href="/kvkk?lang=tr#processing">KVKK aydınlatma metninde</a> açıklanır.
          </p>
        ),
      },
      {
        id: "changes",
        title: "Değişiklikler",
        body: (
          <p>
            Oyun verilerle yaptıklarını değiştirirse önce bu sayfayı ve yürürlük tarihini güncelleriz.
          </p>
        ),
      },
    ],
  },
};

export async function generateMetadata({ searchParams }: { searchParams: SearchParams }): Promise<Metadata> {
  const lang = await readLang(searchParams);
  return legalDocMetadata(PAGE_PATH, COPY[lang], lang);
}

export default async function SledlingsPrivacyPage({ searchParams }: { searchParams: SearchParams }) {
  const lang = await readLang(searchParams);
  return <LegalDoc path={PAGE_PATH} copy={COPY[lang]} lang={lang} />;
}
