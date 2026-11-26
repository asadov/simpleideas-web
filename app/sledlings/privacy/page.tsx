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
 * Written on 25 November 2026 from the publisher's facts, then updated the same day to the first online build
 * (TestFlight and Android): anonymous online account with no sign-up, Unity Analytics with a consent question in
 * some regions and a "Share play data" switch, Unity Diagnostics crash reports, in-game account deletion. Linking,
 * purchases and ads are planned and stay in the "planned" block. If the game changes what it sends, update both
 * languages, the account deletion page and POLICY_EFFECTIVE.
 *
 * Checked against the uploaded build 0.16.0 (iOS 45, Android 43) on 25 November 2026: account also created from
 * Settings › Services › Save Progress and resumed at each launch; Cloud Save holds only a public "profile" written
 * automatically; presence Online / In a room / Racing / Offline; Analytics sends a device id (IDFV on iOS,
 * Android-ID-based on Android) and Unity's standard device details; region = device region setting, unknown = off.
 *
 * 0.16.1 (iOS 46, Android 44), checked in code (gpt/maps 54fd952b): Delete account switches sharing off and requests
 * Analytics deletion (retried at next launch); consent card when the device region OR the store country is in the
 * list, or neither is known; engine statistics off (submitAnalytics 0). Diagnostics: owner's decision is "on" for
 * test builds (store build open), so crash reports stay described as sent. Section "test-versions" (was "test-0160") lists how the
 * 0.16 test builds differ; drop it when they are gone.
 *
 * Unity's role, from the owner's Unity Developer Data settings (25 November 2026, reported by the game session):
 * Essential and Additional Recommended Data on; Unity may use the data, aggregated with other developers', for its
 * own benchmarks, insights, models and products and recommendations to us, as an independent controller under
 * Unity's controller-to-controller data protection terms; Unity support access off; no advertising products.
 *
 * Google Analytics for Firebase replaces Unity Analytics (written 26 November 2026, held until the first build with
 * the Firebase config files; game commit 4ff61637 on online/rooms, checked in code; decisions in Race/docs/board.md,
 * "The advisor's answer to the Firebase plan"): one choice, Share play data, for two purposes (how the game is played,
 * measuring our own Google Ads campaigns). On grants analytics_storage, ad_storage and ad_user_data; ad_personalization
 * is always denied; before a choice and while off all four are denied and collection is off. Opt-in list and region
 * rule unchanged (device region or store country, or neither known); an earlier "no" is kept, an earlier "yes" is
 * asked again there. No IDFA/AdSupport, no ATT prompt, AD_ID removed on Android. No user ID is set. Off or Delete
 * account: collection off and resetAnalyticsData. "Ask to delete my play data" emails us the app-instance ID (only
 * while sharing is on). Retention 14 months, Google signals and remarketing off (the owner's property settings).
 * Builds without the config files (0.17.0) send no play data. 0.16.x test builds still use Unity Analytics: section
 * "test-versions".
 * From Google's pages (read 26 November 2026): without AdSupport the iOS SDK collects the IDFV unless Info.plist sets
 * GOOGLE_ANALYTICS_IDFV_COLLECTION_ENABLED = NO, which 4ff61637 does not, so the page names the IDFV (drop it if the
 * game sets the key); IP used for location, then discarded (support.google.com/analytics/answer/11598602); automatic
 * events first_open, session_start, user_engagement, screen_view, app_update, os_update (answer/9234069). Google
 * Analytics for Firebase is a processor under the Google Ads Data Processing Terms (business.safety.google/adsservices)
 * as long as the owner accepts those terms and leaves the data sharing settings off; Google Ads is under Google's
 * controller terms, so the page says "under Google's own terms" there.
 */

const PAGE_PATH = "/sledlings/privacy";
const POLICY_EFFECTIVE = "2026-11-26";

const LINKS = {
  unity: "https://unity.com/legal/game-player-and-app-user-privacy-policy",
  apple: "https://www.apple.com/legal/privacy/",
  google: "https://policies.google.com/privacy",
  googlePartners: "https://policies.google.com/technologies/partner-sites",
};

const mail = <a href={`mailto:${CONTACT_EMAIL}?subject=Sledlings%20privacy`}>{CONTACT_EMAIL}</a>;

/* In-game paths and labels, as the game shows them (in English: the game is English only). */
const SHARE_PATH = "Settings › Services › Privacy & data › Share play data";
const DELETE_PATH = "Settings › Services › Privacy & data › Delete account";
const ASK_PATH = "Settings › Services › Privacy & data › Ask to delete my play data";

const COPY: Record<LegalLang, LegalCopy> = {
  en: {
    metaTitle: "Privacy Policy · Sledlings: Kart Rush",
    metaDescription:
      "What Sledlings: Kart Rush does with data: an anonymous Unity player account for online play, gameplay analytics with Google Analytics for Firebase without names, crash reports, no ads and no chat.",
    title: "Privacy Policy",
    meta: (
      <>
        Sledlings: Kart Rush · Effective date: <time dateTime={POLICY_EFFECTIVE}>26 November 2026</time>
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
      "You can play without an account. Your progress is saved on your device.",
      "Online play needs no sign-up: the first time you open the Online page, Unity creates an anonymous player account for you.",
      "The game sends gameplay analytics to Google Analytics for Firebase, without names or codes, to understand how the game is played and to measure our own Google Ads campaigns. Where the law asks for it, the game asks you first, and everyone can turn it off in Settings.",
      "Crash reports go to Unity.",
      "No ads in the game, no advertising identifier, no personalised advertising, and no chat.",
      <>
        You can delete your account at any time: <strong>{DELETE_PATH}</strong> in the game, or by email. See{" "}
        <Link href="/sledlings/delete-account">how to delete your account</Link>.
      </>,
    ],
    contentsLabel: "On this page",
    sections: [
      {
        id: "players",
        title: "Who the game is for",
        body: (
          <p>
            Sledlings is meant for players aged 13 and over. It is not directed at children. If you believe a child
            under 13 has an online account in the game, write to {mail} and we will delete it.
          </p>
        ),
      },
      {
        id: "alone",
        title: "Playing alone",
        body: (
          <p>
            You can play without an account. Your progress is saved on your device. If you never open the Online page
            and play data sharing is off, the game sends no gameplay data. Crash reports are still sent; see{" "}
            <a href="#crashes">crash reports and technical data</a>.
          </p>
        ),
      },
      {
        id: "online",
        title: "Online play",
        body: (
          <>
            <p>
              Online play starts the first time you open the Online page, or Save Progress in Settings. It needs no
              sign-up: Unity Authentication creates an anonymous player account for you in the background, identified
              by a player ID. You do not give a name, email address or password. After that, the game signs in to this
              account in the background each time it starts, until you delete the account. With the account, these
              are kept with Unity:
            </p>
            <ul>
              <li>
                <strong>A display name</strong> made of two ready-made words that you pick. You cannot type a name of
                your own. Other players see your display name.
              </li>
              <li>
                <strong>A friend code</strong>, which you can give to others so they can add you as a friend.
              </li>
              <li>
                <strong>Your friends list</strong>, with friend requests and the players you block. Friends can invite
                each other to rooms. Your friends see whether you are online, in a room, racing (also when you race
                alone) or offline.
              </li>
              <li>
                <strong>Rooms</strong>, which you open or join with a code. The players in a room see each other’s
                display names and the rider, sled and costumes each one races with. While you race, race data, such as
                each racer’s position, passes between the room’s players through Unity’s servers.
              </li>
              <li>
                <strong>A public profile in Unity Cloud Save</strong>: your player ID, your display name, and the
                rider, sled and costumes you race with. The game saves it automatically, and other players of the game
                can read it. Your progress is not saved there; it stays on your device.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: "analytics",
        title: "Gameplay analytics",
        body: (
          <>
            <p>
              While <strong>Share play data</strong> is on, the game sends gameplay events (“play data”) to Google
              Analytics for Firebase, a Google service. We use them for two things: to understand how the game is
              played, so we can improve it, and to measure our own Google Ads campaigns, for example how many players an
              ad brought to the game. They are never used for personalised advertising. The events contain no names,
              friend codes, room codes, player account IDs or typed text. They are:
            </p>
            <ul>
              <li>the game starting, with its load time, a performance class for the device and how far you have got;</li>
              <li>the tutorial: starting it, its tips and finishing it;</li>
              <li>
                races started and finished, with the course, your place and time, the rider and sled, the items used
                and how smoothly the game ran;
              </li>
              <li>progress milestones;</li>
              <li>settings you change and screens you open;</li>
              <li>coins you earn and spend, and on what;</li>
              <li>online steps, such as creating or joining a room, and linking a sign-in once that comes.</li>
            </ul>
            <p>
              With these events, Google Analytics uses an app-instance ID, a random ID created for the game on your
              device, and on iPhone and iPad also the identifier for vendor (IDFV). It also logs some events by itself,
              such as the first opening, sessions, screens and app updates, and records details such as the app
              version, the device model, its operating system and language, and your approximate location (country,
              region, city). Google uses your IP address to work out that location and, according to Google, does not
              store it. The game does not use the advertising identifier (IDFA on iOS, advertising ID on Android). We
              have set Google Analytics to keep play data for 14 months.
            </p>
            <p>
              <strong>Your choice.</strong> If your device’s region setting or your App Store or Google Play country is
              in the European Economic Area, the United Kingdom, Switzerland, China or Türkiye, or if the game cannot
              tell either, the game asks you when you open it, and sends no play data unless you agree. If you said no
              in an earlier version, your no stands and the game does not ask again; if you said yes, it asks again,
              because the choice now also covers measuring our Google Ads campaigns. Elsewhere, sharing is on by
              default. Every player can change it at <strong>{SHARE_PATH}</strong>. Turning it off stops the collection
              at once and clears the play data and its ID on your device. To have play data that Google already
              received deleted, see <a href="#deleting">keeping and deleting your data</a>.
            </p>
          </>
        ),
      },
      {
        id: "crashes",
        title: "Crash reports and technical data",
        body: (
          <p>
            The game sends crash and error reports to Unity Diagnostics, with an installation ID, so we can find and
            fix problems. They are kept for 90 days. When Unity’s online services start, Unity’s services software may
            also send Unity technical data about how it runs. There is no switch for these in the game, and the Share
            play data choice does not cover them.
          </p>
        ),
      },
      {
        id: "no-ads",
        title: "No ads, no advertising identifier",
        body: (
          <p>
            The game shows no ads today. It does not use the advertising identifier on iOS or Android and does not ask
            for permission to track you. Play data is never used for personalised advertising: the game always tells
            Google that ad personalisation is not allowed, and Google signals and remarketing are off in our Google
            Analytics. The only advertising use of play data is the one described under{" "}
            <a href="#analytics">gameplay analytics</a>: measuring our own Google Ads campaigns, while Share play data
            is on.
          </p>
        ),
      },
      {
        id: "no-chat",
        title: "No chat",
        body: (
          <p>
            There is no chat in Sledlings. Players cannot send typed text to each other. The only messages are four
            fixed phrases and emotes.
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
                per account, kept with Unity, so you can restore your progress on another device. Other players will not be able to read it.
                If the progress on your device and the backup differ, the game will ask you which one to keep.
              </li>
              <li>
                <strong>Purchases.</strong> Costumes will be sold through the App Store and Google Play. Apple or
                Google handles the payment; the game never sees your payment details.
              </li>
              <li>
                <strong>Rewarded ads</strong>, which you choose to watch. They will not be personalised.
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
                Cloud Save) and Unity Diagnostics, and Unity Analytics in the 0.16 test versions. For these services
                Unity handles data on our behalf, as our processor. See the <a href={LINKS.unity}>Unity privacy policy for game players</a>.
              </li>
              <li>
                <strong>Apple</strong> runs the App Store, and Sign in with Apple and Game Center once linking comes.
                See the <a href={LINKS.apple}>Apple Privacy Policy</a>.
              </li>
              <li>
                <strong>Google</strong> runs Google Analytics for Firebase, which receives the play data. For Google
                Analytics, Google handles the data on our behalf, as our processor. When we use play data to measure our
                Google Ads campaigns, Google Ads uses it under Google’s own terms. Google also runs Google Play, and
                Google sign-in and Google Play Games once linking comes. See the{" "}
                <a href={LINKS.google}>Google Privacy Policy</a> and{" "}
                <a href={LINKS.googlePartners}>how Google uses information from apps that use its services</a>.
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
              access to the game’s data, and no advertising products have access to it. The game still shows no ads
              and uses no advertising identifier.
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
              <li>Online data, including your public profile, is kept for as long as your player account exists.</li>
              <li>Play data is kept by Google for 14 months.</li>
              <li>Crash reports are kept for 90 days.</li>
              <li>Progress saved on your device stays there.</li>
            </ul>
            <p>
              To delete your account, open <strong>{DELETE_PATH}</strong> in the game, or email us. This removes your
              Unity player account, your friends list with its requests and blocks, your cloud save with your public
              profile, and any linked sign-ins. It also turns off Share play data, which stops the collection and
              clears the play data and its ID on your device. Your single-player progress on the device stays. The
              steps are on the <Link href="/sledlings/delete-account">account deletion page</Link>.
            </p>
            <p>
              <strong>Play data Google already received</strong> is not linked to your name or player account: we
              can find it only with the play data ID (app-instance ID) of the game on your device. While Share play data is on, open{" "}
              <strong>{ASK_PATH}</strong>: the game opens an email to us with that ID and nothing else about you. Send
              it, and we ask Google to delete that data within 30 days and reply when we have. Do this before you turn
              off Share play data or delete your account, because both clear the ID from your device.
            </p>
          </>
        ),
      },
      {
        id: "test-versions",
        title: "If you test an earlier version",
        body: (
          <>
            <p>
              The test versions 0.16 (TestFlight and Android test builds) send play data to Unity Analytics instead of
              Google Analytics, under the same <strong>Share play data</strong> switch. With the events, Unity’s
              analytics software collects your IP address, an installation ID, a device identifier (on iOS the
              identifier for vendor, IDFV; on Android a value based on the Android ID), your Unity player ID if you have
              used Online, and technical details of the device. Unity keeps this data for 13 months and handles it as
              our processor. Turning the switch off asks Unity to delete it, and from 0.16.1 deleting your account does
              too.
            </p>
            <p>The test version 0.16.0 also differs in three ways:</p>
            <ul>
              <li>
                It asks about play data only when your device’s region setting is in one of the places listed above;
                if it cannot tell the region, sharing starts off without asking.
              </li>
              <li>
                Deleting your account does not delete your analytics data. Turn off <strong>Share play data</strong>{" "}
                for that.
              </li>
              <li>The Unity engine also sends Unity usage statistics about the device.</li>
            </ul>
            <p>Updating to a later version removes these differences.</p>
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
      "Sledlings: Kart Rush verilerle ne yapar: çevrim içi oyun için anonim bir Unity oyuncu hesabı, Google Analytics for Firebase ile isim içermeyen oyun analitiği, çökme raporları; reklam ve sohbet yok.",
    title: "Gizlilik Politikası",
    meta: (
      <>
        <span lang="en">Sledlings: Kart Rush</span> · Yürürlük tarihi:{" "}
        <time dateTime={POLICY_EFFECTIVE}>26 Kasım 2026</time>
      </>
    ),
    intro: (
      <>
        <span lang="en">Sledlings: Kart Rush</span>, Simple Ideas (“biz”) tarafından yayımlanan, iOS ve Android için
        bir kart ve kızak yarışı oyunudur. Simple Ideas, Türkiye’de bağımsız geliştirici olarak çalışan Salih
        Salihoğlu’dur. Bu politika, oyunun verilerle ne yaptığını sade bir dille açıklar.
      </>
    ),
    summaryLabel: "Kısaca",
    summary: [
      "Hesap olmadan oynayabilirsiniz. İlerlemeniz cihazınızda saklanır.",
      "Çevrim içi oyun için kayıt gerekmez: Online sayfasını ilk açtığınızda Unity sizin için anonim bir oyuncu hesabı oluşturur.",
      "Oyun, oyunun nasıl oynandığını anlamak ve kendi Google Ads kampanyalarımızı ölçmek için isim veya kod içermeyen oyun analitiğini Google Analytics for Firebase’e gönderir. Yasanın gerektirdiği yerlerde oyun önce size sorar; bunu herkes Ayarlar’dan kapatabilir.",
      "Çökme raporları Unity’ye gider.",
      "Oyunda reklam yok, reklam tanımlayıcısı yok, kişiselleştirilmiş reklam yok, sohbet yok.",
      <>
        Hesabınızı istediğiniz zaman silebilirsiniz: oyunda <strong lang="en">{DELETE_PATH}</strong> ya da
        e-postayla. Bkz. <Link href="/sledlings/delete-account?lang=tr">hesabınızı nasıl silersiniz</Link>.
      </>,
    ],
    contentsLabel: "Bu sayfada",
    sections: [
      {
        id: "players",
        title: "Oyun kimler için",
        body: (
          <p>
            Sledlings 13 yaş ve üzeri oyuncular içindir; çocuklara yönelik değildir. 13 yaşından küçük bir çocuğun
            oyunda çevrim içi hesabı olduğunu düşünüyorsanız {mail} adresine yazın, hesabı sileriz.
          </p>
        ),
      },
      {
        id: "alone",
        title: "Tek başınıza oynamak",
        body: (
          <p>
            Hesap olmadan oynayabilirsiniz. İlerlemeniz cihazınızda saklanır. Online sayfasını hiç açmazsanız ve oyun
            verisi paylaşımı kapalıysa oyun hiçbir oyun verisi göndermez. Çökme raporları yine de gönderilir; bkz.{" "}
            <a href="#crashes">çökme raporları ve teknik veriler</a>.
          </p>
        ),
      },
      {
        id: "online",
        title: "Çevrim içi oyun",
        body: (
          <>
            <p>
              Çevrim içi oyun, Online sayfasını ya da Ayarlar’daki <span lang="en">Save Progress</span> düğmesini ilk
              açtığınızda başlar ve kayıt gerektirmez: Unity Authentication arka planda sizin için bir oyuncu kimliğiyle
              tanınan anonim bir oyuncu hesabı oluşturur. Ad, e-posta adresi veya şifre vermezsiniz. Bundan sonra oyun,
              siz hesabı silene kadar her açılışta bu hesaba arka planda yeniden bağlanır. Hesapla birlikte şunlar
              Unity’de tutulur:
            </p>
            <ul>
              <li>
                <strong>Görünen ad:</strong> seçtiğiniz iki hazır kelimeden oluşur. Kendiniz bir ad yazamazsınız. Diğer
                oyuncular görünen adınızı görür.
              </li>
              <li>
                <strong>Arkadaş kodu:</strong> sizi arkadaş olarak eklemeleri için başkalarına verebileceğiniz kod.
              </li>
              <li>
                <strong>Arkadaş listeniz</strong>, arkadaşlık istekleri ve engellediğiniz oyuncularla birlikte.
                Arkadaşlar birbirini odalara davet edebilir. Arkadaşlarınız sizin çevrim içi mi, bir odada mı, yarışta
                mı (tek başınıza yarışırken de) yoksa çevrim dışı mı olduğunuzu görür.
              </li>
              <li>
                <strong>Odalar:</strong> bir kodla açtığınız veya katıldığınız odalar. Odadaki oyuncular birbirlerinin
                görünen adını ve her birinin yarıştığı karakteri, kızağı ve kostümleri görür. Yarışırken yarış verileri
                (örneğin her yarışçının konumu) Unity’nin sunucuları üzerinden odadaki oyuncular arasında iletilir.
              </li>
              <li>
                <strong>Unity Cloud Save’de herkese açık bir profil:</strong> oyuncu kimliğiniz, görünen adınız ve
                yarıştığınız karakter, kızak ve kostümler. Oyun bunu kendiliğinden kaydeder ve oyunun diğer oyuncuları
                okuyabilir. İlerlemeniz orada saklanmaz; cihazınızda kalır.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: "analytics",
        title: "Oyun analitiği",
        body: (
          <>
            <p>
              <strong lang="en">Share play data</strong> açıkken oyun, oyun olaylarını (“oyun verileri”) bir Google
              hizmeti olan Google Analytics for Firebase’e gönderir. Bunları iki amaçla kullanırız: oyunun nasıl
              oynandığını anlayıp oyunu geliştirmek ve kendi Google Ads kampanyalarımızı ölçmek (örneğin bir reklamın
              oyuna kaç oyuncu getirdiğini görmek). Kişiselleştirilmiş reklam için asla kullanılmazlar. Olaylar ad,
              arkadaş kodu, oda kodu, oyuncu hesabı kimliği veya yazılmış metin içermez. Olaylar şunlardır:
            </p>
            <ul>
              <li>oyunun açılışı; yüklenme süresi, cihaz için bir performans sınıfı ve oyunda ne kadar ilerlediğinizle;</li>
              <li>eğitim: başlaması, ipuçları ve bitmesi;</li>
              <li>
                başlatılan ve bitirilen yarışlar; parkur, sıranız ve süreniz, karakter ve kızak, kullanılan öğeler ve
                oyunun ne kadar akıcı çalıştığı;
              </li>
              <li>ilerleme aşamaları;</li>
              <li>değiştirdiğiniz ayarlar ve açtığınız ekranlar;</li>
              <li>kazandığınız ve harcadığınız jetonlar ve neye harcadığınız;</li>
              <li>oda açmak veya bir odaya katılmak gibi çevrim içi adımlar ve, geldiğinde, bir giriş bağlamak.</li>
            </ul>
            <p>
              Google Analytics bu olaylarla birlikte, oyun için cihazınızda oluşturulan rastgele bir kimlik olan uygulama
              örneği kimliğini (<span lang="en">app-instance ID</span>), iPhone ve iPad’de ayrıca satıcı tanımlayıcısını
              (IDFV) kullanır. İlk açılış, oturumlar, ekranlar ve uygulama güncellemeleri gibi bazı olayları kendisi
              kaydeder; uygulama sürümü, cihaz modeli, işletim sistemi ve dili ile yaklaşık konumunuz (ülke, bölge,
              şehir) gibi bilgileri de tutar. Google bu konumu belirlemek için IP adresinizi kullanır ve Google’a göre
              IP adresini saklamaz. Oyun reklam tanımlayıcısını (iOS’ta IDFA, Android’de reklam kimliği) kullanmaz.
              Google Analytics’i oyun verilerini 14 ay saklayacak şekilde ayarladık.
            </p>
            <p>
              <strong>Seçim sizin.</strong> Cihazınızın bölge ayarı ya da App Store veya Google Play ülkeniz Avrupa
              Ekonomik Alanı, Birleşik Krallık, İsviçre, Çin veya Türkiye ise ya da oyun ikisini de anlayamazsa, oyun
              açılışta size sorar ve siz kabul etmedikçe oyun verisi göndermez. Önceki bir sürümde hayır dediyseniz
              seçiminiz geçerli kalır ve oyun yeniden sormaz; evet dediyseniz yeniden sorar, çünkü seçim artık Google
              Ads kampanyalarımızın ölçülmesini de kapsar. Diğer bölgelerde paylaşım varsayılan olarak açıktır. Her
              oyuncu bunu <strong lang="en">{SHARE_PATH}</strong> yolundan değiştirebilir. Kapattığınızda toplama hemen
              durur ve cihazınızdaki oyun verileri kimlikleriyle birlikte temizlenir. Google’ın daha önce aldığı oyun
              verilerini sildirmek için bkz. <a href="#deleting">verilerin saklanması ve silinmesi</a>.
            </p>
          </>
        ),
      },
      {
        id: "crashes",
        title: "Çökme raporları ve teknik veriler",
        body: (
          <p>
            Oyun, sorunları bulup düzeltebilmemiz için çökme ve hata raporlarını bir kurulum kimliğiyle birlikte Unity
            Diagnostics’e gönderir. Raporlar 90 gün saklanır. Unity’nin çevrim içi hizmetleri başladığında Unity’nin
            hizmet yazılımı da Unity’ye kendi çalışmasıyla ilgili teknik veriler gönderebilir. Oyunda bunlar için bir
            anahtar yoktur ve <span lang="en">Share play data</span> seçimi bunları kapsamaz.
          </p>
        ),
      },
      {
        id: "no-ads",
        title: "Reklam yok, reklam tanımlayıcısı yok",
        body: (
          <p>
            Oyun bugün reklam göstermez. iOS’ta veya Android’de reklam tanımlayıcısını kullanmaz ve sizi izlemek için
            izin istemez. Oyun verileri kişiselleştirilmiş reklam için asla kullanılmaz: oyun Google’a reklam
            kişiselleştirmesine izin verilmediğini her zaman bildirir; Google Analytics’imizde Google sinyalleri ve
            yeniden pazarlama kapalıdır. Oyun verilerinin reklamla ilgili tek kullanımı{" "}
            <a href="#analytics">oyun analitiği</a> bölümünde anlatılandır: <span lang="en">Share play data</span>{" "}
            açıkken kendi Google Ads kampanyalarımızın ölçülmesi.
          </p>
        ),
      },
      {
        id: "no-chat",
        title: "Sohbet yok",
        body: (
          <p>
            Sledlings’te sohbet yoktur. Oyuncular birbirine yazılı metin gönderemez. Gönderilebilen tek mesajlar dört
            hazır ifade ve emojilerdir.
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
              <li>
                <strong>Satın almalar.</strong> Kostümler App Store ve Google Play üzerinden satılacak. Ödemeyi Apple
                veya Google alır; oyun ödeme bilgilerinizi hiçbir zaman görmez.
              </li>
              <li>
                <strong>Ödüllü reklamlar:</strong> izleyip izlememeyi siz seçersiniz. Kişiselleştirilmeyecekler.
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
                Save), Unity Diagnostics’i ve 0.16 test sürümlerinde Unity Analytics’i çalıştırır. Bu hizmetler için Unity
                verileri bizim
                adımıza, veri işleyen olarak işler. Bkz.{" "}
                <a href={LINKS.unity}>Unity’nin oyunculara yönelik gizlilik politikası</a>.
              </li>
              <li>
                <strong>Apple</strong> App Store’u, hesap bağlama geldiğinde de Apple ile Giriş Yap’ı ve Game Center’ı
                çalıştırır. Bkz. <a href={LINKS.apple}>Apple Gizlilik Politikası</a>.
              </li>
              <li>
                <strong>Google</strong>, oyun verilerini alan Google Analytics for Firebase’i çalıştırır. Google
                Analytics için Google verileri bizim adımıza, veri işleyen olarak işler. Oyun verilerini Google Ads
                kampanyalarımızı ölçmek için kullandığımızda Google Ads bunları Google’ın kendi şartlarına göre
                kullanır. Google ayrıca Google Play’i, hesap bağlama geldiğinde de Google ile girişi ve Google Play
                Games’i çalıştırır. Bkz. <a href={LINKS.google}>Google Gizlilik Politikası</a> ve{" "}
                <a href={LINKS.googlePartners}>Google’ın, hizmetlerini kullanan uygulamalardan gelen bilgileri nasıl
                kullandığı</a>.
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
              ekibinin oyunun verilerine erişimi yoktur; hiçbir reklam ürününün de erişimi yoktur. Oyun hâlâ reklam
              göstermez ve reklam tanımlayıcısı kullanmaz.
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
              <li>Herkese açık profiliniz dahil çevrim içi veriler, oyuncu hesabınız var olduğu sürece saklanır.</li>
              <li>Oyun verileri Google tarafından 14 ay saklanır.</li>
              <li>Çökme raporları 90 gün saklanır.</li>
              <li>Cihazınızda saklanan ilerleme orada kalır.</li>
            </ul>
            <p>
              Hesabınızı silmek için oyunda <strong lang="en">{DELETE_PATH}</strong> yolunu açın ya da bize e-posta
              gönderin. Bu, Unity oyuncu hesabınızı, istekleri ve engellemeleriyle birlikte arkadaş listenizi,
              herkese açık profilinizle birlikte bulut kaydınızı ve bağlı girişleri kaldırır. Ayrıca{" "}
              <span lang="en">Share play data</span> anahtarını kapatır; bu, toplamayı durdurur ve cihazınızdaki oyun
              verilerini kimlikleriyle birlikte temizler. Cihazdaki tek oyunculu ilerlemeniz kalır. Adımlar{" "}
              <Link href="/sledlings/delete-account?lang=tr">hesap silme sayfasında</Link>.
            </p>
            <p>
              <strong>Google’ın daha önce aldığı oyun verileri</strong> adınıza veya oyuncu hesabınıza bağlı değildir:
              onları ancak cihazınızdaki oyunun oyun verisi kimliğiyle (<span lang="en">app-instance ID</span>)
              bulabiliriz. <span lang="en">Share play data</span> açıkken{" "}
              <strong lang="en">{ASK_PATH}</strong> yolunu açın: oyun, bu kimliği içeren ve sizinle ilgili başka hiçbir
              bilgi taşımayan bir e-posta açar. Gönderdiğinizde 30 gün içinde bu verilerin silinmesini Google’dan ister
              ve size yanıt veririz. Bunu <span lang="en">Share play data</span> anahtarını kapatmadan veya hesabınızı
              silmeden önce yapın; ikisi de kimliği cihazınızdan temizler.
            </p>
          </>
        ),
      },
      {
        id: "test-versions",
        title: "Daha eski bir sürümü test ediyorsanız",
        body: (
          <>
            <p>
              0.16 test sürümleri (TestFlight ve Android test derlemeleri) oyun verilerini Google Analytics yerine aynı{" "}
              <strong lang="en">Share play data</strong> anahtarıyla Unity Analytics’e gönderir. Olaylarla birlikte
              Unity’nin analitik yazılımı IP adresinizi, bir kurulum kimliğini, bir cihaz tanımlayıcısını (iOS’ta satıcı
              tanımlayıcısı, IDFV; Android’de Android kimliğine dayalı bir değer), Online’ı kullandıysanız Unity oyuncu
              kimliğinizi ve cihazın teknik bilgilerini toplar. Unity bu verileri 13 ay saklar ve veri işleyenimiz
              olarak işler. Anahtarı kapatmak Unity’den verilerin silinmesini ister; 0.16.1’den itibaren hesabınızı
              silmek de ister.
            </p>
            <p>Test sürümü 0.16.0 ayrıca üç noktada farklıdır:</p>
            <ul>
              <li>
                Oyun verisi paylaşımını yalnızca cihazınızın bölge ayarı yukarıdaki yerlerden biriyse sorar; bölgeyi
                anlayamazsa paylaşım sormadan kapalı başlar.
              </li>
              <li>
                Hesabınızı silmek analitik verilerinizi silmez. Bunun için <strong lang="en">Share play data</strong>{" "}
                anahtarını kapatın.
              </li>
              <li>Unity motoru, Unity’ye cihazla ilgili kullanım istatistikleri de gönderir.</li>
            </ul>
            <p>Daha yeni bir sürüme güncellediğinizde bu farklar ortadan kalkar.</p>
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
