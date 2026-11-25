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
 */

const PAGE_PATH = "/sledlings/privacy";
const POLICY_EFFECTIVE = "2026-11-25";

const LINKS = {
  unity: "https://unity.com/legal/game-player-and-app-user-privacy-policy",
  apple: "https://www.apple.com/legal/privacy/",
  google: "https://policies.google.com/privacy",
};

const mail = <a href={`mailto:${CONTACT_EMAIL}?subject=Sledlings%20privacy`}>{CONTACT_EMAIL}</a>;

/* In-game paths and labels, as the game shows them (in English: the game is English only). */
const SHARE_PATH = "Settings › Services › Privacy & data › Share play data";
const DELETE_PATH = "Settings › Services › Privacy & data › Delete account";

const COPY: Record<LegalLang, LegalCopy> = {
  en: {
    metaTitle: "Privacy Policy · Sledlings: Kart Rush",
    metaDescription:
      "What Sledlings: Kart Rush does with data: an anonymous Unity player account for online play, gameplay analytics without names, crash reports, no ads and no chat.",
    title: "Privacy Policy",
    meta: (
      <>
        Sledlings: Kart Rush · Effective date: <time dateTime={POLICY_EFFECTIVE}>25 November 2026</time>
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
      "The game sends gameplay analytics, without names or codes, and crash reports. Where the law asks for it, the game asks you first, and everyone can turn analytics off in Settings.",
      "No ads, no advertising identifier, no tracking across apps, and no chat.",
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
            and play data sharing is off, the game sends no gameplay data. Crash reports and Unity’s technical
            statistics are still sent; see <a href="#crashes">crash reports and technical data</a>.
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
              The game sends gameplay events to Unity Analytics, which show us how the game is played. They contain no
              personal identifiers: no names, friend codes, room codes or typed text. The events are:
            </p>
            <ul>
              <li>the game starting, with its load time and a performance class for the device;</li>
              <li>tutorial steps;</li>
              <li>
                races started and finished, with the course, your place and time, the rider and sled, the items used
                and how smoothly the game ran;
              </li>
              <li>progress milestones;</li>
              <li>settings you change and screens you open;</li>
              <li>coins you spend, and on what;</li>
              <li>online steps, such as creating or joining a room.</li>
            </ul>
            <p>
              Alongside these events, Unity’s analytics software collects your IP address, an installation ID, a
              device identifier (on iOS the identifier for vendor, IDFV; on Android a value based on the Android ID),
              your Unity player ID if you have used Online, and technical details of the device, such as its model,
              operating system, language setting and hardware. Unity keeps analytics data for 13 months.
            </p>
            <p>
              <strong>Your choice.</strong> If your device’s region setting is in the European Economic Area, the
              United Kingdom, Switzerland, China or Türkiye, the game asks you when you open it, and sends no analytics
              before you choose. If the game cannot tell the region, sharing starts off. Elsewhere, sharing is on by
              default. Every player can change it at{" "}
              <strong>{SHARE_PATH}</strong>. Turning it off stops the collection and asks Unity to delete your
              analytics data.
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
            fix problems. They are kept for 90 days. Unity’s engine and services software also send Unity technical
            statistics about the device and about how Unity’s software runs. There is no switch for these in the game,
            and the Share play data choice does not cover them.
          </p>
        ),
      },
      {
        id: "no-ads",
        title: "No ads, no tracking",
        body: (
          <p>
            The game shows no ads today and does not use an advertising identifier. It does not track you across other
            companies’ apps or websites.
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
                Cloud Save), Unity Analytics and Unity Diagnostics. See the{" "}
                <a href={LINKS.unity}>Unity privacy policy for game players</a>.
              </li>
              <li>
                <strong>Apple</strong> runs the App Store, and Sign in with Apple and Game Center once linking comes.
                See the <a href={LINKS.apple}>Apple Privacy Policy</a>.
              </li>
              <li>
                <strong>Google</strong> runs Google Play, and Google sign-in and Google Play Games once linking comes.
                See the <a href={LINKS.google}>Google Privacy Policy</a>.
              </li>
            </ul>
            <p>Each of them handles data under its own privacy policy.</p>
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
              <li>Analytics data is kept by Unity for 13 months.</li>
              <li>Crash reports are kept for 90 days.</li>
              <li>Progress saved on your device stays there.</li>
            </ul>
            <p>
              To delete your account, open <strong>{DELETE_PATH}</strong> in the game, or email us. This removes your
              Unity player account, your friends list with its requests and blocks, your cloud save with your public
              profile, and any linked sign-ins. Your single-player progress on the device stays. The steps are on
              the{" "}
              <Link href="/sledlings/delete-account">account deletion page</Link>.
            </p>
            <p>
              To have your analytics data deleted, turn off <strong>Share play data</strong> (see{" "}
              <a href="#analytics">gameplay analytics</a>).
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
      "Sledlings: Kart Rush verilerle ne yapar: çevrim içi oyun için anonim bir Unity oyuncu hesabı, isim içermeyen oyun analitiği, çökme raporları; reklam ve sohbet yok.",
    title: "Gizlilik Politikası",
    meta: (
      <>
        <span lang="en">Sledlings: Kart Rush</span> · Yürürlük tarihi:{" "}
        <time dateTime={POLICY_EFFECTIVE}>25 Kasım 2026</time>
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
      "Oyun, isim veya kod içermeyen oyun analitiği ve çökme raporları gönderir. Yasanın gerektirdiği yerlerde oyun önce size sorar; analitiği herkes Ayarlar’dan kapatabilir.",
      "Reklam yok, reklam tanımlayıcısı yok, uygulamalar arası izleme yok, sohbet yok.",
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
            verisi paylaşımı kapalıysa oyun hiçbir oyun verisi göndermez. Çökme raporları ve Unity’nin teknik
            istatistikleri yine de gönderilir; bkz. <a href="#crashes">çökme raporları ve teknik veriler</a>.
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
              Oyun, oyunun nasıl oynandığını bize gösteren oyun olaylarını Unity Analytics’e gönderir. Bu olaylar kişisel
              tanımlayıcı içermez: ad, arkadaş kodu, oda kodu veya yazılmış metin yoktur. Olaylar şunlardır:
            </p>
            <ul>
              <li>oyunun açılışı; yüklenme süresi ve cihaz için bir performans sınıfıyla;</li>
              <li>eğitim adımları;</li>
              <li>
                başlatılan ve bitirilen yarışlar; parkur, sıranız ve süreniz, karakter ve kızak, kullanılan öğeler ve
                oyunun ne kadar akıcı çalıştığı;
              </li>
              <li>ilerleme aşamaları;</li>
              <li>değiştirdiğiniz ayarlar ve açtığınız ekranlar;</li>
              <li>harcadığınız jetonlar ve neye harcadığınız;</li>
              <li>oda açmak veya bir odaya katılmak gibi çevrim içi adımlar.</li>
            </ul>
            <p>
              Bu olaylarla birlikte Unity’nin analitik yazılımı IP adresinizi, bir kurulum kimliğini, bir cihaz
              tanımlayıcısını (iOS’ta satıcı tanımlayıcısı, IDFV; Android’de Android kimliğine dayalı bir değer),
              Online’ı kullandıysanız Unity oyuncu kimliğinizi ve cihazın modeli, işletim sistemi, dil ayarı ve donanımı
              gibi teknik bilgilerini toplar. Unity analitik verilerini 13 ay saklar.
            </p>
            <p>
              <strong>Seçim sizin.</strong> Cihazınızın bölge ayarı Avrupa Ekonomik Alanı, Birleşik Krallık, İsviçre,
              Çin veya Türkiye ise oyun açılışta size sorar ve siz seçmeden analitik verisi göndermez. Oyun bölgeyi
              anlayamazsa paylaşım kapalı başlar. Diğer bölgelerde paylaşım varsayılan olarak açıktır. Her oyuncu bunu <strong lang="en">{SHARE_PATH}</strong> yolundan
              değiştirebilir. Kapattığınızda toplama durur ve oyun Unity’den analitik verilerinizin silinmesini ister.
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
            Diagnostics’e gönderir. Raporlar 90 gün saklanır. Unity’nin motor ve hizmet yazılımı da Unity’ye cihaz ve
            Unity yazılımının nasıl çalıştığı hakkında teknik istatistikler gönderir. Oyunda bunlar için bir anahtar
            yoktur ve <span lang="en">Share play data</span> seçimi bunları kapsamaz.
          </p>
        ),
      },
      {
        id: "no-ads",
        title: "Reklam ve izleme yok",
        body: (
          <p>
            Oyun bugün reklam göstermez ve reklam tanımlayıcısı kullanmaz. Sizi başka şirketlerin uygulamaları veya web
            siteleri arasında izlemez.
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
                Save), Unity Analytics’i ve Unity Diagnostics’i çalıştırır. Bkz.{" "}
                <a href={LINKS.unity}>Unity’nin oyunculara yönelik gizlilik politikası</a>.
              </li>
              <li>
                <strong>Apple</strong> App Store’u, hesap bağlama geldiğinde de Apple ile Giriş Yap’ı ve Game Center’ı
                çalıştırır. Bkz. <a href={LINKS.apple}>Apple Gizlilik Politikası</a>.
              </li>
              <li>
                <strong>Google</strong> Google Play’i, hesap bağlama geldiğinde de Google ile girişi ve Google Play
                Games’i çalıştırır. Bkz. <a href={LINKS.google}>Google Gizlilik Politikası</a>.
              </li>
            </ul>
            <p>Her biri verileri kendi gizlilik politikasına göre işler.</p>
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
              <li>Analitik verileri Unity tarafından 13 ay saklanır.</li>
              <li>Çökme raporları 90 gün saklanır.</li>
              <li>Cihazınızda saklanan ilerleme orada kalır.</li>
            </ul>
            <p>
              Hesabınızı silmek için oyunda <strong lang="en">{DELETE_PATH}</strong> yolunu açın ya da bize e-posta
              gönderin. Bu, Unity oyuncu hesabınızı, istekleri ve engellemeleriyle birlikte arkadaş listenizi,
              herkese açık profilinizle birlikte bulut kaydınızı ve bağlı girişleri kaldırır. Cihazdaki tek oyunculu ilerlemeniz kalır. Adımlar{" "}
              <Link href="/sledlings/delete-account?lang=tr">hesap silme sayfasında</Link>.
            </p>
            <p>
              Analitik verilerinizin silinmesi için <strong lang="en">Share play data</strong> anahtarını kapatın (bkz.{" "}
              <a href="#analytics">oyun analitiği</a>).
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
