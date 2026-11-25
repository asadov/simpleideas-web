import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/site";
import type { LegalLang } from "@/lib/legal";
import { LegalDoc, legalDocMetadata, readLang, type LegalCopy, type SearchParams } from "../LegalDoc";
import styles from "../sledlings.module.css";

/*
 * Sledlings: Kart Rush account deletion page. Google Play asks for this address ("Delete account URL" in Data
 * safety): never move it without a 301. It names the game and the developer as on the store listing, gives the
 * steps in the game (Settings › Services › Privacy & data › Delete account, labels as in build 0.16.0) and by email,
 * and says what is
 * deleted and what is not. English is the default; `?lang=tr` serves Turkish. Keep it in line with the privacy
 * policy (../privacy/page.tsx), sections "deleting", "analytics" and "test-0160".
 * From 0.16.1 Delete account also switches Share play data off and requests Analytics deletion (UgsTelemetry
 * DeleteAccountPlayData, retried at next launch); 0.16.0 does not, which the note under the lists says.
 */

const PAGE_PATH = "/sledlings/delete-account";
const UPDATED = "2026-11-25";

const SUBJECT = { en: "Delete my Sledlings account", tr: "Sledlings hesabımı silin" };
const mailFor = (lang: LegalLang) => (
  <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(SUBJECT[lang])}`}>{CONTACT_EMAIL}</a>
);

/* In-game labels, as the game shows them (in English: the game is English only). */
const en = (text: string) => <strong lang="en">{text}</strong>;

const COPY: Record<LegalLang, LegalCopy> = {
  en: {
    metaTitle: "Delete your account · Sledlings: Kart Rush",
    metaDescription:
      "How to delete your Sledlings: Kart Rush player account and its data, in the game (Settings › Services › Privacy & data › Delete account) or by email, and what is deleted.",
    title: "Delete your account",
    meta: (
      <>
        Sledlings: Kart Rush · Simple Ideas · Last updated: <time dateTime={UPDATED}>25 November 2026</time>
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
      "Deleting removes your Unity player account, your friends list with its requests and blocks, your cloud save with your public profile and any linked sign-ins, and asks Unity to delete your gameplay analytics. Your single-player progress on the device stays.",
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
                Your gameplay analytics: the game switches off {en("Share play data")} and asks Unity to delete the
                data. If the request cannot be sent, the game tries again the next time it starts.
              </li>
            </ul>
            <h3>Not deleted with your account</h3>
            <ul>
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
              In the test version 0.16.0, deleting the account does not delete your gameplay analytics. To have Unity
              delete it there, turn off {en("Settings › Services › Privacy & data › Share play data")}.
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
      "Sledlings: Kart Rush oyuncu hesabınızı ve verilerini oyunda (Settings › Services › Privacy & data › Delete account) veya e-postayla nasıl silersiniz ve neler silinir.",
    title: "Hesabınızı silin",
    meta: (
      <>
        <span lang="en">Sledlings: Kart Rush</span> · Simple Ideas · Son güncelleme:{" "}
        <time dateTime={UPDATED}>25 Kasım 2026</time>
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
      "Silme işlemi Unity oyuncu hesabınızı, istekleri ve engellemeleriyle birlikte arkadaş listenizi, herkese açık profilinizle birlikte bulut kaydınızı ve bağlı girişleri kaldırır, ayrıca Unity’den oyun analitiğinizin silinmesini ister. Cihazdaki tek oyunculu ilerlemeniz kalır.",
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
                Oyun analitiğiniz: oyun {en("Share play data")} anahtarını kapatır ve Unity’den verilerin silinmesini
                ister. İstek gönderilemezse oyun bir sonraki açılışta yeniden dener.
              </li>
            </ul>
            <h3>Hesabınızla birlikte silinmeyenler</h3>
            <ul>
              <li>Cihazdaki tek oyunculu ilerlemeniz. Cihazınızda kalır; oyunu sildiğinizde cihazdan da silinir.</li>
              <li>Çökme raporları. 90 gün saklanır.</li>
              <li>
                Bizimle yaptığınız e-posta yazışmaları;{" "}
                <a href="/kvkk?lang=tr#processing">KVKK aydınlatma metninde</a> açıklandığı şekilde işlenir.
              </li>
            </ul>
            <p>Silinen bir hesap geri getirilemez.</p>
            <p>
              Test sürümü 0.16.0’da hesabı silmek oyun analitiğinizi silmez. Orada Unity’nin silmesi için{" "}
              {en("Settings › Services › Privacy & data › Share play data")} anahtarını kapatın.
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
