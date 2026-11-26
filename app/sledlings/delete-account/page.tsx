import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/site";
import type { LegalLang } from "@/lib/legal";
import { LegalDoc, legalDocMetadata, readLang, type LegalCopy, type SearchParams } from "../LegalDoc";
import styles from "../sledlings.module.css";

/*
 * Sledlings: Kart Rush account deletion page. Google Play asks for this address ("Delete account URL" in Data
 * safety): never move it without a 301. It names the game and the developer as on the store listing, gives the
 * steps in the game (Settings › Services › Privacy & data › Delete account) and by email, how to have play data
 * that Google Analytics already received deleted (Ask to delete my play data), and what is deleted and what is not.
 * English is the default; `?lang=tr` serves Turkish. Keep it in line with the privacy policy (../privacy/page.tsx),
 * sections "analytics", "deleting" and "test-versions".
 *
 * Google Analytics for Firebase (game commit 4ff61637, checked in code): Delete account first switches Share play
 * data off, which stops collection and calls the SDK's resetAnalyticsData (a new app-instance ID). Nothing asks Google
 * to delete data it already has; "Ask to delete my play data" opens an email draft to CONTACT_EMAIL (subject
 * "Sledlings play data deletion") with the app-instance ID, and only while sharing is on. So the page tells players to
 * ask first. An automatic deletion through Google's API is planned; do not promise it until it ships.
 * Labels as in SettingsPanel.cs at that commit. "Within 30 days" is our commitment, as for account deletion by email.
 */

const PAGE_PATH = "/sledlings/delete-account";
const UPDATED = "2026-11-26";

const SUBJECT = { en: "Delete my Sledlings account", tr: "Sledlings hesabımı silin" };
const mailFor = (lang: LegalLang) => (
  <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(SUBJECT[lang])}`}>{CONTACT_EMAIL}</a>
);

/* In-game labels, as the game shows them (in English: the game is English only). */
const en = (text: string) => <strong lang="en">{text}</strong>;
const ASK_PATH = "Settings › Services › Privacy & data › Ask to delete my play data";

const COPY: Record<LegalLang, LegalCopy> = {
  en: {
    metaTitle: "Delete your account · Sledlings: Kart Rush",
    metaDescription:
      "How to delete your Sledlings: Kart Rush player account and its data, in the game (Settings › Services › Privacy & data › Delete account) or by email, how to have your play data deleted, and what is deleted.",
    title: "Delete your account",
    meta: (
      <>
        Sledlings: Kart Rush · Simple Ideas · Last updated: <time dateTime={UPDATED}>26 November 2026</time>
      </>
    ),
    intro: (
      <>
        This page explains how to delete your player account in Sledlings: Kart Rush, a game published by Simple Ideas,
        and the data that goes with it. You can do it in the game or by email.
      </>
    ),
    summaryLabel: "In short",
    summary: [
      <>In the game: {en("Settings › Services › Privacy & data › Delete account")}.</>,
      <>By email: write to {mailFor("en")} with your display name and friend code.</>,
      "Deleting removes your Unity player account, your friends list with its requests and blocks, your cloud save with your public profile and any linked sign-ins. It also turns off play data sharing and clears the play data on your device. Your single-player progress on the device stays.",
      <>
        Play data that Google Analytics has already received is deleted when you ask: use {en("Ask to delete my play data")}{" "}
        before you delete your account.
      </>,
    ],
    contentsLabel: "On this page",
    sections: [
      {
        id: "in-game",
        title: "Delete your account in the game",
        body: (
          <>
            <ol className={styles.steps}>
              <li>Open Sledlings: Kart Rush, go to {en("Settings")} and open the {en("Services")} tab.</li>
              <li>Under {en("Privacy & data")}, tap {en("Delete account")}.</li>
              <li>
                The game asks {en("Delete online account?")} Tap {en("Delete account")} to confirm. When it is done,
                the game shows {en("Account deleted")}.
              </li>
            </ol>
            <p>
              If you also want the play data that Google Analytics already has deleted, first follow{" "}
              <a href="#play-data">the steps for your play data</a>, then delete the account.
            </p>
            <p>
              If you have never opened the Online page or Save Progress, you have no player account to delete: the game
              then says there is no signed-in online account on the device.
            </p>
          </>
        ),
      },
      {
        id: "email",
        title: "Delete your account by email",
        body: (
          <>
            <p>
              Write to {mailFor("en")} with the subject “{SUBJECT.en}”. Include your display name and friend code from
              the game, so we can find your account. Your player account is anonymous: without them, we may not be able
              to tell which account is yours.
            </p>
            <p>
              We delete the account within 30 days of your email and reply to confirm when it is done. We do not need
              any other personal details from you.
            </p>
          </>
        ),
      },
      {
        id: "play-data",
        title: "Have your play data deleted",
        body: (
          <>
            <p>
              Play data is the gameplay analytics the game sends to Google Analytics for Firebase while{" "}
              {en("Share play data")} is on (see the <Link href="/sledlings/privacy#analytics">privacy policy</Link>).
              It is not linked to your name or your player account, so we need the play data ID (app-instance ID) of
              the game on your device to find it.
            </p>
            <ol className={styles.steps}>
              <li>
                While {en("Share play data")} is still on, open {en(ASK_PATH)}.
              </li>
              <li>
                The game opens an email to us with the subject {en("Sledlings play data deletion")}, containing the play
                data ID and nothing else about you. Send it.
              </li>
              <li>Within 30 days of your email, we ask Google to delete the play data for that ID and reply to you.</li>
            </ol>
            <p>
              Do this before you turn off {en("Share play data")} or delete your account: both clear the ID from your
              device, and the game then cannot give it to us. Play data that is not deleted on request is kept by Google
              for 14 months.
            </p>
          </>
        ),
      },
      {
        id: "what",
        title: "What is deleted, and what is not",
        body: (
          <>
            <h3>Deleted with your account</h3>
            <ul>
              <li>Your Unity player account, with your display name and friend code</li>
              <li>Your friends list, with its friend requests and the players you blocked</li>
              <li>Your cloud save, with your public profile (display name, rider, sled and costumes)</li>
              <li>Any linked sign-ins</li>
              <li>
                The play data on your device: the game turns off {en("Share play data")}, stops sending play data and
                clears the play data it holds on the device, with its play data ID.
              </li>
            </ul>
            <h3>Not deleted with your account</h3>
            <ul>
              <li>
                Play data Google Analytics has already received. It is deleted when you ask (see{" "}
                <a href="#play-data">above</a>); otherwise Google keeps it for 14 months.
              </li>
              <li>
                Your single-player progress on the device. It stays on your device; deleting the game removes it from
                the device.
              </li>
              <li>Crash reports. They are kept for 90 days.</li>
              <li>
                Emails you exchange with us, which are handled as described in the{" "}
                <a href="/kvkk?lang=en#processing">personal data notice (KVKK)</a>.
              </li>
            </ul>
            <p>A deleted account cannot be restored.</p>
            <p>
              The test versions 0.16 sent play data to Unity Analytics instead. There, turning off{" "}
              {en("Share play data")} asks Unity to delete it, and from 0.16.1 deleting the account does too.
            </p>
          </>
        ),
      },
      {
        id: "more",
        title: "More about your data",
        body: (
          <p>
            The <Link href="/sledlings/privacy">privacy policy</Link> explains what the game does with data and your
            rights. Questions: {mailFor("en")}.
          </p>
        ),
      },
    ],
  },
  tr: {
    metaTitle: "Hesabınızı silin · Sledlings: Kart Rush",
    metaDescription:
      "Sledlings: Kart Rush oyuncu hesabınızı ve verilerini oyunda (Settings › Services › Privacy & data › Delete account) veya e-postayla nasıl silersiniz, oyun verilerinizi nasıl sildirirsiniz ve neler silinir.",
    title: "Hesabınızı silin",
    meta: (
      <>
        <span lang="en">Sledlings: Kart Rush</span> · Simple Ideas · Son güncelleme:{" "}
        <time dateTime={UPDATED}>26 Kasım 2026</time>
      </>
    ),
    intro: (
      <>
        Bu sayfa, Simple Ideas’ın yayımladığı <span lang="en">Sledlings: Kart Rush</span> oyunundaki oyuncu hesabınızı
        ve ona bağlı verileri nasıl sileceğinizi anlatır. Bunu oyunda veya e-postayla yapabilirsiniz. Oyun İngilizce
        olduğu için oyundaki adları İngilizce yazıyoruz.
      </>
    ),
    summaryLabel: "Kısaca",
    summary: [
      <>Oyunda: {en("Settings › Services › Privacy & data › Delete account")}.</>,
      <>E-postayla: görünen adınız ve arkadaş kodunuzla birlikte {mailFor("tr")} adresine yazın.</>,
      "Silme işlemi Unity oyuncu hesabınızı, istekleri ve engellemeleriyle birlikte arkadaş listenizi, herkese açık profilinizle birlikte bulut kaydınızı ve bağlı girişleri kaldırır. Ayrıca oyun verisi paylaşımını kapatır ve cihazınızdaki oyun verilerini temizler. Cihazdaki tek oyunculu ilerlemeniz kalır.",
      <>
        Google Analytics’in daha önce aldığı oyun verileri siz istediğinizde silinir: hesabınızı silmeden önce{" "}
        {en("Ask to delete my play data")} seçeneğini kullanın.
      </>,
    ],
    contentsLabel: "Bu sayfada",
    sections: [
      {
        id: "in-game",
        title: "Hesabınızı oyunda silin",
        body: (
          <>
            <ol className={styles.steps}>
              <li>
                <span lang="en">Sledlings: Kart Rush</span>’ı açın, {en("Settings")} bölümüne gidin ve{" "}
                {en("Services")} sekmesini açın.
              </li>
              <li>
                {en("Privacy & data")} altında {en("Delete account")} seçeneğine dokunun.
              </li>
              <li>
                Oyun {en("Delete online account?")} diye sorar. Onaylamak için {en("Delete account")} düğmesine
                dokunun. İşlem bitince oyun {en("Account deleted")} gösterir.
              </li>
            </ol>
            <p>
              Google Analytics’in daha önce aldığı oyun verilerinin de silinmesini istiyorsanız önce{" "}
              <a href="#play-data">oyun verileriniz için adımları</a> izleyin, sonra hesabı silin.
            </p>
            <p>
              Online sayfasını veya <span lang="en">Save Progress</span> düğmesini hiç açmadıysanız silinecek bir
              oyuncu hesabınız yoktur; oyun bu durumda cihazda oturum açılmış çevrim içi hesap olmadığını söyler.
            </p>
          </>
        ),
      },
      {
        id: "email",
        title: "Hesabınızı e-postayla silin",
        body: (
          <>
            <p>
              {mailFor("tr")} adresine “{SUBJECT.tr}” konusuyla yazın. Hesabınızı bulabilmemiz için oyundaki görünen
              adınızı ve arkadaş kodunuzu ekleyin. Oyuncu hesabınız anonimdir: bunlar olmadan hangi hesabın size ait
              olduğunu anlayamayabiliriz.
            </p>
            <p>
              Hesabı e-postanızdan itibaren 30 gün içinde siler ve tamamlandığında size yanıt veririz. Sizden başka bir
              kişisel bilgi istemeyiz.
            </p>
          </>
        ),
      },
      {
        id: "play-data",
        title: "Oyun verilerinizi sildirin",
        body: (
          <>
            <p>
              Oyun verileri, {en("Share play data")} açıkken oyunun Google Analytics for Firebase’e gönderdiği oyun
              analitiğidir (bkz. <Link href="/sledlings/privacy?lang=tr#analytics">gizlilik politikası</Link>).
              Bu veriler adınıza veya oyuncu hesabınıza bağlı değildir; bu yüzden onları bulmak için cihazınızdaki
              oyunun oyun verisi kimliğine (<span lang="en">app-instance ID</span>) ihtiyacımız var.
            </p>
            <ol className={styles.steps}>
              <li>
                {en("Share play data")} hâlâ açıkken {en(ASK_PATH)} yolunu açın.
              </li>
              <li>
                Oyun, {en("Sledlings play data deletion")} konulu ve oyun verisi kimliğini içeren, sizinle ilgili başka
                hiçbir bilgi taşımayan bir e-posta açar. Bu e-postayı gönderin.
              </li>
              <li>E-postanızdan itibaren 30 gün içinde o kimliğe ait oyun verilerinin silinmesini Google’dan ister ve size yanıt veririz.</li>
            </ol>
            <p>
              Bunu {en("Share play data")} anahtarını kapatmadan veya hesabınızı silmeden önce yapın: ikisi de kimliği
              cihazınızdan temizler ve oyun onu artık bize iletemez. İstek üzerine silinmeyen oyun verileri Google
              tarafından 14 ay saklanır.
            </p>
          </>
        ),
      },
      {
        id: "what",
        title: "Neler silinir, neler silinmez",
        body: (
          <>
            <h3>Hesabınızla birlikte silinenler</h3>
            <ul>
              <li>Görünen adınız ve arkadaş kodunuzla birlikte Unity oyuncu hesabınız</li>
              <li>Arkadaşlık istekleri ve engellediğiniz oyuncularla birlikte arkadaş listeniz</li>
              <li>Herkese açık profilinizle (görünen ad, karakter, kızak ve kostümler) birlikte bulut kaydınız</li>
              <li>Bağlı girişleriniz</li>
              <li>
                Cihazınızdaki oyun verileri: oyun {en("Share play data")} anahtarını kapatır, oyun verisi göndermeyi
                durdurur ve cihazda tuttuğu oyun verilerini, oyun verisi kimliğiyle birlikte temizler.
              </li>
            </ul>
            <h3>Hesabınızla birlikte silinmeyenler</h3>
            <ul>
              <li>
                Google Analytics’in daha önce aldığı oyun verileri. Siz istediğinizde silinir (bkz.{" "}
                <a href="#play-data">yukarısı</a>); aksi hâlde Google bunları 14 ay saklar.
              </li>
              <li>Cihazdaki tek oyunculu ilerlemeniz. Cihazınızda kalır; oyunu sildiğinizde cihazdan da silinir.</li>
              <li>Çökme raporları. 90 gün saklanır.</li>
              <li>
                Bizimle yaptığınız e-posta yazışmaları;{" "}
                <a href="/kvkk?lang=tr#processing">KVKK aydınlatma metninde</a> açıklandığı şekilde işlenir.
              </li>
            </ul>
            <p>Silinen bir hesap geri getirilemez.</p>
            <p>
              0.16 test sürümleri oyun verilerini bunun yerine Unity Analytics’e gönderiyordu. Orada{" "}
              {en("Share play data")} anahtarını kapatmak Unity’den verilerin silinmesini ister; 0.16.1’den itibaren
              hesabı silmek de ister.
            </p>
          </>
        ),
      },
      {
        id: "more",
        title: "Verileriniz hakkında daha fazlası",
        body: (
          <p>
            Oyunun verilerle ne yaptığı ve haklarınız{" "}
            <Link href="/sledlings/privacy?lang=tr">gizlilik politikasında</Link> açıklanır. Sorularınız için:{" "}
            {mailFor("tr")}.
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

export default async function SledlingsDeleteAccountPage({ searchParams }: { searchParams: SearchParams }) {
  const lang = await readLang(searchParams);
  return <LegalDoc path={PAGE_PATH} copy={COPY[lang]} lang={lang} />;
}
