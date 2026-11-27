import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/site";
import type { LegalLang } from "@/lib/legal";
import { LegalDoc, legalDocMetadata, readLang, type LegalCopy, type SearchParams } from "../LegalDoc";
import styles from "../sledlings.module.css";

/*
 * Sledlings: Kart Rush account deletion page. Google Play asks for this address ("Delete account URL" in Data
 * safety), and the game's delete dialog links here ("Account deletion help"): never move it without a 301. It names
 * the game and the developer as on the store listing, gives the steps in the game (Settings › Services › Privacy &
 * data › Delete account) and by email, how to have play data that Google Analytics already received deleted (Ask to
 * delete my play data), and what is deleted and what is not. English is the default; `?lang=tr` serves Turkish.
 * Keep it in line with the privacy policy (../privacy/page.tsx), sections "analytics", "choices" and "deleting".
 *
 * Matched to the store version 1.0.0 (game code at 10de45bb and online/rooms 2a0158b1, labels from SettingsPanel.cs
 * and UgsOnline.cs): the dialog "Delete online account?" with Cancel / Delete account / Account deletion help; the
 * result "Online account deleted. Your progress on this device is still here." (the row reads "Delete account" from
 * online/rooms 005fee30 on). Deletion removes the Unity account, Cloud Save (profile and room results), friends,
 * requests and blocks, and withdraws play data (resetAnalyticsData), but in Google-managed regions play data comes
 * back at the next launch from Google's stored answer; ad and Meta choices are not changed. "Ask to delete my play
 * data" emails the app-instance ID(s) (subject "Sledlings play data deletion"); IDs captured at withdrawal or
 * deletion are kept on the device for 90 days, so the request also works afterwards. "Within 30 days" is our
 * commitment, as for account deletion by email.
 */

const PAGE_PATH = "/sledlings/delete-account";
const UPDATED = "2026-11-27";

const SUBJECT = { en: "Delete my Sledlings account", tr: "Sledlings hesabımı silin" };
const mailFor = (lang: LegalLang) => (
  <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(SUBJECT[lang])}`}>{CONTACT_EMAIL}</a>
);

/* In-game labels, as the game shows them (in English: the game is English only). */
const en = (text: string) => <strong lang="en">{text}</strong>;
const ASK_PATH = "Settings › Services › Privacy & data › Ask to delete my play data";
const CHOICES_PATH = "Settings › Services › Privacy & data › Manage privacy choices";

const COPY: Record<LegalLang, LegalCopy> = {
  en: {
    metaTitle: "Delete your account · Sledlings: Kart Rush",
    metaDescription:
      "How to delete your Sledlings: Kart Rush player account and its data, in the game (Settings › Services › Privacy & data › Delete account) or by email, how to have your play data deleted, and what is deleted.",
    title: "Delete your account",
    meta: (
      <>
        Sledlings: Kart Rush · Simple Ideas · Last updated: <time dateTime={UPDATED}>27 November 2026</time>
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
      <>By email: write to {mailFor("en")} with your name and friend code from the game.</>,
      "Deleting removes your anonymous player account, your public profile with the results of your races in rooms, and your friends list with its requests and blocks. It also turns play data off on your device. Your single-player progress on the device stays.",
      <>
        Play data that Google Analytics has already received is deleted when you ask: use{" "}
        {en("Ask to delete my play data")}, also after you have deleted your account.
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
                the game shows {en("Online account deleted.")}
              </li>
            </ol>
            <p>
              The same window offers {en("Ask to delete my play data")}, if you also want the play data that Google
              Analytics already has deleted; see <a href="#play-data">the steps for your play data</a>.
            </p>
            <p>
              If you have never gone online (with {en("Online Race")} or {en("Friends")}), you have no player account
              to delete.
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
              Write to {mailFor("en")} with the subject “{SUBJECT.en}”. Include your name and friend code from the game,
              so we can find your account. Your player account is anonymous: without them, we may not be able to tell
              which account is yours.
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
              Play data is the gameplay analytics the game sends to Google Analytics for Firebase (see the{" "}
              <Link href="/sledlings/privacy#analytics">privacy policy</Link>). It is not linked to your name or your
              player account, so we need the game’s app-instance ID from your device to find it.
            </p>
            <ol className={styles.steps}>
              <li>Open {en(ASK_PATH)}.</li>
              <li>
                The game opens an email to us with the subject {en("Sledlings play data deletion")}, containing the
                app-instance ID and nothing else about you. Send it.
              </li>
              <li>Within 30 days of your email, we ask Google to delete the play data for that ID and reply to you.</li>
            </ol>
            <p>
              This works while play data is on, and for up to 90 days after you turn it off or delete your account: the
              game keeps the ID on your device, and only there, for that long. After you have sent the email, tap{" "}
              {en("Sent")} beside the button to remove the kept ID. Play data that is not deleted on request is kept by
              Google for 14 months.
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
              <li>Your anonymous Unity player account, with your name and friend code</li>
              <li>Your public profile (name, rider, vehicle and costume) and the results of your races in rooms</li>
              <li>Your friends list, with its friend requests and the players you blocked</li>
              <li>
                Play data on your device: the game turns play data off and resets its ID. In the European Economic
                Area, the United Kingdom and Switzerland, your answer in Google’s consent form still stands: if it
                allowed play data, play data starts again with a new ID the next time you open the game, unless you
                change it at {en(CHOICES_PATH)}.
              </li>
            </ul>
            <h3>Not deleted with your account</h3>
            <ul>
              <li>
                Play data Google Analytics has already received. It is deleted when you ask (see{" "}
                <a href="#play-data">above</a>); otherwise Google keeps it for 14 months.
              </li>
              <li>
                Your choices for ads and for measuring our ads, which stay on your device. Change them at{" "}
                {en(CHOICES_PATH)}. What Google AdMob and Meta received for ads and their measurement is not linked to
                your player account; they keep it under their own policies.
              </li>
              <li>
                Your single-player progress on the device. It stays on your device; deleting the game removes it from
                the device.
              </li>
              <li>Crash reports. They are kept for 90 days.</li>
              <li>
                Emails you exchange with us, including reports about other players, which are handled as described in
                the <a href="/kvkk?lang=en#processing">personal data notice (KVKK)</a>.
              </li>
            </ul>
            <p>A deleted account cannot be restored.</p>
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
        <time dateTime={UPDATED}>27 Kasım 2026</time>
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
      <>E-postayla: oyundaki adınız ve arkadaş kodunuzla birlikte {mailFor("tr")} adresine yazın.</>,
      "Silme işlemi anonim oyuncu hesabınızı, odalardaki yarışlarınızın sonuçlarıyla birlikte herkese açık profilinizi ve istekleri ve engellemeleriyle birlikte arkadaş listenizi kaldırır. Ayrıca cihazınızda oyun verilerini kapatır. Cihazdaki tek oyunculu ilerlemeniz kalır.",
      <>
        Google Analytics’in daha önce aldığı oyun verileri siz istediğinizde silinir: hesabınızı sildikten sonra da{" "}
        {en("Ask to delete my play data")} seçeneğini kullanabilirsiniz.
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
                dokunun. İşlem bitince oyun {en("Online account deleted.")} gösterir.
              </li>
            </ol>
            <p>
              Google Analytics’in daha önce aldığı oyun verilerinin de silinmesini istiyorsanız aynı pencere{" "}
              {en("Ask to delete my play data")} seçeneğini sunar; bkz.{" "}
              <a href="#play-data">oyun verileriniz için adımlar</a>.
            </p>
            <p>
              Hiç çevrim içi olmadıysanız ({en("Online Race")} veya {en("Friends")} ile) silinecek bir oyuncu hesabınız
              yoktur.
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
              {mailFor("tr")} adresine “{SUBJECT.tr}” konusuyla yazın. Hesabınızı bulabilmemiz için oyundaki adınızı ve
              arkadaş kodunuzu ekleyin. Oyuncu hesabınız anonimdir: bunlar olmadan hangi hesabın size ait olduğunu
              anlayamayabiliriz.
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
              Oyun verileri, oyunun Google Analytics for Firebase’e gönderdiği oyun analitiğidir (bkz.{" "}
              <Link href="/sledlings/privacy?lang=tr#analytics">gizlilik politikası</Link>). Bu veriler adınıza veya
              oyuncu hesabınıza bağlı değildir; bu yüzden onları bulmak için cihazınızdaki oyunun uygulama örneği
              kimliğine (<span lang="en">app-instance ID</span>) ihtiyacımız var.
            </p>
            <ol className={styles.steps}>
              <li>{en(ASK_PATH)} yolunu açın.</li>
              <li>
                Oyun, {en("Sledlings play data deletion")} konulu ve uygulama örneği kimliğini içeren, sizinle ilgili
                başka hiçbir bilgi taşımayan bir e-posta açar. Bu e-postayı gönderin.
              </li>
              <li>E-postanızdan itibaren 30 gün içinde o kimliğe ait oyun verilerinin silinmesini Google’dan ister ve size yanıt veririz.</li>
            </ol>
            <p>
              Bu, oyun verileri açıkken ve onları kapattıktan veya hesabınızı sildikten sonra 90 güne kadar çalışır:
              oyun kimliği bu süre boyunca yalnızca cihazınızda tutar. E-postayı gönderdikten sonra, tutulan kimliği
              kaldırmak için düğmenin yanındaki {en("Sent")} seçeneğine dokunun. İstek üzerine silinmeyen oyun verileri
              Google tarafından 14 ay saklanır.
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
              <li>Adınız ve arkadaş kodunuzla birlikte anonim Unity oyuncu hesabınız</li>
              <li>Herkese açık profiliniz (ad, karakter, araç ve kostüm) ve odalardaki yarışlarınızın sonuçları</li>
              <li>Arkadaşlık istekleri ve engellediğiniz oyuncularla birlikte arkadaş listeniz</li>
              <li>
                Cihazınızdaki oyun verileri: oyun, oyun verilerini kapatır ve kimliğini sıfırlar. Avrupa Ekonomik Alanı,
                Birleşik Krallık ve İsviçre’de Google’ın izin formundaki cevabınız geçerli kalır: oyun verilerine izin
                verdiyse, siz {en(CHOICES_PATH)} yolundan değiştirmedikçe oyun verileri oyunu bir sonraki açışınızda yeni
                bir kimlikle yeniden başlar.
              </li>
            </ul>
            <h3>Hesabınızla birlikte silinmeyenler</h3>
            <ul>
              <li>
                Google Analytics’in daha önce aldığı oyun verileri. Siz istediğinizde silinir (bkz.{" "}
                <a href="#play-data">yukarısı</a>); aksi hâlde Google bunları 14 ay saklar.
              </li>
              <li>
                Cihazınızda kalan reklam ve reklamlarımızın ölçülmesiyle ilgili seçimleriniz. Bunları{" "}
                {en(CHOICES_PATH)} yolundan değiştirebilirsiniz. Google AdMob’un ve Meta’nın reklamlar ve ölçümleri için
                aldıkları oyuncu hesabınıza bağlı değildir; onları kendi politikalarına göre saklarlar.
              </li>
              <li>Cihazdaki tek oyunculu ilerlemeniz. Cihazınızda kalır; oyunu sildiğinizde cihazdan da silinir.</li>
              <li>Çökme raporları. 90 gün saklanır.</li>
              <li>
                Diğer oyuncularla ilgili bildirimler dahil bizimle yaptığınız e-posta yazışmaları;{" "}
                <a href="/kvkk?lang=tr#processing">KVKK aydınlatma metninde</a> açıklandığı şekilde işlenir.
              </li>
            </ul>
            <p>Silinen bir hesap geri getirilemez.</p>
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
