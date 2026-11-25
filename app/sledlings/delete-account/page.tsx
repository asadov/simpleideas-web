import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/site";
import type { LegalLang } from "@/lib/legal";
import { LegalDoc, legalDocMetadata, readLang, type LegalCopy, type SearchParams } from "../LegalDoc";
import styles from "../sledlings.module.css";

/*
 * Sledlings: Kart Rush account deletion page. Google Play asks for this address ("Delete account URL" in Data
 * safety): never move it without a 301. It names the game and the developer as on the store listing, gives the
 * steps in the game and by email, and says what is deleted and what is not. English is the default; `?lang=tr`
 * serves Turkish. Keep it in line with the privacy policy (../privacy/page.tsx), section "deleting".
 *
 * TODO before launch: the in-game Delete account button does not exist yet. Replace the marked step with its real
 * path, in both languages.
 */

const PAGE_PATH = "/sledlings/delete-account";
const UPDATED = "2026-11-25";

const SUBJECT = { en: "Delete my Sledlings account", tr: "Sledlings hesabımı silin" };
const mailFor = (lang: LegalLang) => (
  <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(SUBJECT[lang])}`}>{CONTACT_EMAIL}</a>
);

/** A step that is not decided yet: visibly marked so it cannot be missed before launch. */
function ToConfirm({ children }: { children: ReactNode }) {
  return <mark className={styles.todo}>{children}</mark>;
}

const COPY: Record<LegalLang, LegalCopy> = {
  en: {
    metaTitle: "Delete your account · Sledlings: Kart Rush",
    metaDescription:
      "How to delete your Sledlings: Kart Rush player account and its data, in the game or by email, and what is deleted.",
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
      <>
        In the game: open the Online page, then <ToConfirm>[to confirm: the Delete account button]</ToConfirm>.
      </>,
      <>By email: write to {mailFor("en")} with your friend code.</>,
      "Deleting removes your Unity player account, your friends list, your cloud save and your linked sign-ins.",
    ],
    contentsLabel: "On this page",
    sections: [
      {
        id: "in-game",
        title: "Delete your account in the game",
        body: (
          <>
            <ol className={styles.steps}>
              <li>Open Sledlings: Kart Rush and tap Online on the home screen.</li>
              <li>
                <ToConfirm>[To confirm: where the Delete account button is, for example Profile &amp; name ›
                Delete account]</ToConfirm>
              </li>
              <li>Confirm that you want to delete your account.</li>
            </ol>
            <p>
              If you have never opened the Online page, you have no player account: nothing has left your device, and
              there is nothing for us to delete.
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
            <h3>Deleted</h3>
            <ul>
              <li>Your Unity player account, with your display name and friend code</li>
              <li>Your friends list</li>
              <li>Your cloud save</li>
              <li>Your linked sign-ins</li>
            </ul>
            <h3>Not affected</h3>
            <ul>
              <li>Progress saved on your device. It never reaches us; deleting the game removes it from your device.</li>
              <li>
                Your Apple, Google, Game Center or Google Play Games account itself. Only its link to the game is
                removed.
              </li>
              <li>
                Emails you exchange with us, which are handled as described in the{" "}
                <a href="/kvkk?lang=en#processing">personal data notice (KVKK)</a>.
              </li>
            </ul>
            <p>
              We do not keep a copy of the deleted data. A deleted account cannot be restored.
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
      "Sledlings: Kart Rush oyuncu hesabınızı ve verilerini oyunda veya e-postayla nasıl silersiniz ve neler silinir.",
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
        ve ona bağlı verileri nasıl sileceğinizi anlatır. Bunu oyunda veya e-postayla yapabilirsiniz.
      </>
    ),
    summaryLabel: "Kısaca",
    summary: [
      <>
        Oyunda: Online sayfasını açın, ardından{" "}
        <ToConfirm>[netleşecek: Hesabı sil (Delete account) düğmesi]</ToConfirm>.
      </>,
      <>E-postayla: arkadaş kodunuzla birlikte {mailFor("tr")} adresine yazın.</>,
      "Silme işlemi Unity oyuncu hesabınızı, arkadaş listenizi, bulut kaydınızı ve bağlı girişlerinizi kaldırır.",
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
                <span lang="en">Sledlings: Kart Rush</span>’ı açın ve ana ekranda <span lang="en">Online</span>’a
                dokunun.
              </li>
              <li>
                <ToConfirm>[Netleşecek: Hesabı sil düğmesinin yeri, örneğin Profile &amp; name › Delete account]</ToConfirm>
              </li>
              <li>Hesabınızı silmek istediğinizi onaylayın.</li>
            </ol>
            <p>
              Online sayfasını hiç açmadıysanız oyuncu hesabınız yoktur: cihazınızdan hiçbir şey çıkmamıştır ve
              silmemiz gereken bir şey yoktur.
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
            <h3>Silinir</h3>
            <ul>
              <li>Görünen adınız ve arkadaş kodunuzla birlikte Unity oyuncu hesabınız</li>
              <li>Arkadaş listeniz</li>
              <li>Bulut kaydınız</li>
              <li>Bağlı girişleriniz</li>
            </ul>
            <h3>Etkilenmez</h3>
            <ul>
              <li>Cihazınızda saklanan ilerleme. Bize hiç ulaşmaz; oyunu sildiğinizde cihazınızdan da silinir.</li>
              <li>
                Apple, Google, Game Center veya Google Play Games hesabınızın kendisi. Yalnızca oyunla bağlantısı
                kaldırılır.
              </li>
              <li>
                Bizimle yaptığınız e-posta yazışmaları;{" "}
                <a href="/kvkk?lang=tr#processing">KVKK aydınlatma metninde</a> açıklandığı şekilde işlenir.
              </li>
            </ul>
            <p>
              Silinen verilerin bir kopyasını tutmayız. Silinen bir hesap geri getirilemez.
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
