import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/site";
import { DATA_CONTROLLER, type LegalLang } from "@/lib/legal";
import { LegalDoc, legalDocMetadata, readLang, type LegalCopy, type SearchParams } from "../LegalDoc";
import styles from "../sledlings.module.css";

/*
 * Sledlings: Kart Rush privacy policy. This address is the game's Privacy Policy URL in App Store Connect and
 * Google Play: never move it without a 301. English is the default; `?lang=tr` serves Turkish (for KVKK).
 *
 * Written on 25 November 2026 from the publisher's own list of facts about the release build (online play,
 * linking, no chat, planned items), not from a template. Anything planned and not live stays in the "planned"
 * block. If the game changes what it sends, update both languages and POLICY_EFFECTIVE.
 */

const PAGE_PATH = "/sledlings/privacy";
const POLICY_EFFECTIVE = "2026-11-25";

const LINKS = {
  unity: "https://unity.com/legal/game-player-and-app-user-privacy-policy",
  apple: "https://www.apple.com/legal/privacy/",
  google: "https://policies.google.com/privacy",
};

const mail = <a href={`mailto:${CONTACT_EMAIL}?subject=Sledlings%20privacy`}>{CONTACT_EMAIL}</a>;

const COPY: Record<LegalLang, LegalCopy> = {
  en: {
    metaTitle: "Privacy Policy · Sledlings: Kart Rush",
    metaDescription:
      "What Sledlings: Kart Rush does with data: nothing is sent while you play alone; online play uses an anonymous Unity player account; there is no chat.",
    title: "Privacy Policy",
    meta: (
      <>
        Sledlings: Kart Rush · Effective date: <time dateTime={POLICY_EFFECTIVE}>25 November 2026</time>
      </>
    ),
    intro: (
      <>
        Sledlings: Kart Rush is a kart and sled racing game for iOS and Android, published by Simple Ideas (“we”).
        Simple Ideas is Salih Salihoğlu, an independent developer in Türkiye. This
        policy explains, in plain words, what the game does with data.
      </>
    ),
    summaryLabel: "In short",
    summary: [
      "Playing alone needs no account and sends nothing. Your progress is saved on your device.",
      "Nothing goes online until you first open the Online page. Then Unity keeps an anonymous player account for you, with your friends list.",
      "There is no chat. Players can only send four fixed phrases and emotes.",
      "There are no ads, analytics or purchases in the game today. What is planned is listed in its own block below.",
      <>
        You can delete your account at any time, in the game or by email:{" "}
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
            You can play without an account. As long as you do not open the Online page, the game sends nothing: your
            progress is saved on your device.
          </p>
        ),
      },
      {
        id: "online",
        title: "When you go online",
        body: (
          <>
            <p>
              Nothing goes online until you first open the Online page in the game. From then on, the game uses
              Unity’s online services, and these are kept with Unity:
            </p>
            <ul>
              <li>
                <strong>An anonymous player account</strong> (Unity Authentication). It is identified by a player ID
                that Unity creates; you do not give a name, email address or password.
              </li>
              <li>
                <strong>A display name</strong> made of two ready-made words. You cannot type a name of your own.
                Other players see your display name.
              </li>
              <li>
                <strong>A friend code</strong>, which you can give to others so they can add you as a friend.
              </li>
              <li>
                <strong>Your friends list</strong>, with whether each friend is online or offline. Your friends see
                whether you are online or offline too.
              </li>
              <li>
                <strong>Rooms</strong>, which you open or join with a code. While you race in a room, race data, such
                as each racer’s position, passes between the room’s players through Unity’s servers.
              </li>
              <li>
                <strong>Your progress in Unity Cloud Save</strong>, if you choose to save it there.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: "linking",
        title: "Linking a sign-in you already have",
        body: (
          <p>
            You can link your player account to a sign-in you already have: Sign in with Apple, Google, Game Center or
            Google Play Games. When you do, the game receives an identifier for you from that provider, never your
            password. Linking is optional.
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
                <strong>Purchases.</strong> Costumes will be sold through the App Store and Google Play. Apple or
                Google handles the payment; the game never sees your payment details.
              </li>
              <li>
                <strong>Gameplay analytics</strong>, without personal identifiers.
              </li>
              <li>
                <strong>Crash diagnostics.</strong>
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
                <strong>Unity Technologies</strong> runs the online features: the player account, friends, rooms and
                Cloud Save. See the <a href={LINKS.unity}>Unity privacy policy for game players</a>.
              </li>
              <li>
                <strong>Apple</strong> runs the App Store, Sign in with Apple and Game Center. See the{" "}
                <a href={LINKS.apple}>Apple Privacy Policy</a>.
              </li>
              <li>
                <strong>Google</strong> runs Google Play, Google sign-in and Google Play Games. See the{" "}
                <a href={LINKS.google}>Google Privacy Policy</a>.
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
            <p>
              Your online data is kept for as long as your player account exists. When you delete your account, we
              remove the Unity player account, your friends list, your cloud save and your linked sign-ins.
            </p>
            <p>
              You can delete your account in the game or by email. The steps are on the{" "}
              <Link href="/sledlings/delete-account">account deletion page</Link>.
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
      "Sledlings: Kart Rush verilerle ne yapar: tek başınıza oynarken hiçbir şey gönderilmez; çevrim içi oyun anonim bir Unity oyuncu hesabı kullanır; sohbet yoktur.",
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
        Salihoğlu’dur. Bu politika, oyunun verilerle ne yaptığını sade bir dille
        açıklar.
      </>
    ),
    summaryLabel: "Kısaca",
    summary: [
      "Tek başınıza oynamak için hesap gerekmez ve oyun hiçbir şey göndermez. İlerlemeniz cihazınızda saklanır.",
      "Online sayfasını ilk kez açana kadar hiçbir şey çevrim içi olmaz. Açtığınızda Unity sizin için anonim bir oyuncu hesabı ve arkadaş listesi tutar.",
      "Sohbet yoktur. Oyuncular birbirine yalnızca dört hazır ifade ve emoji gönderebilir.",
      "Oyunda bugün reklam, analitik veya satın alma yoktur. Planlananlar aşağıda ayrı bir bölümde listelenir.",
      <>
        Hesabınızı istediğiniz zaman oyunda veya e-postayla silebilirsiniz:{" "}
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
            Hesap olmadan oynayabilirsiniz. Online sayfasını açmadığınız sürece oyun hiçbir şey göndermez:
            ilerlemeniz cihazınızda saklanır.
          </p>
        ),
      },
      {
        id: "online",
        title: "Çevrim içi olduğunuzda",
        body: (
          <>
            <p>
              Oyundaki Online sayfasını ilk kez açana kadar hiçbir şey çevrim içi olmaz. O andan itibaren oyun
              Unity’nin çevrim içi hizmetlerini kullanır ve şunlar Unity’de tutulur:
            </p>
            <ul>
              <li>
                <strong>Anonim bir oyuncu hesabı</strong> (Unity Authentication). Unity’nin oluşturduğu bir oyuncu
                kimliğiyle tanınır; ad, e-posta adresi veya şifre vermezsiniz.
              </li>
              <li>
                <strong>Görünen ad:</strong> iki hazır kelimeden oluşur. Kendiniz bir ad yazamazsınız. Diğer oyuncular
                görünen adınızı görür.
              </li>
              <li>
                <strong>Arkadaş kodu:</strong> sizi arkadaş olarak eklemeleri için başkalarına verebileceğiniz kod.
              </li>
              <li>
                <strong>Arkadaş listeniz</strong> ve her arkadaşın çevrim içi mi çevrim dışı mı olduğu. Arkadaşlarınız
                da sizin çevrim içi mi çevrim dışı mı olduğunuzu görür.
              </li>
              <li>
                <strong>Odalar:</strong> bir kodla açtığınız veya katıldığınız odalar. Bir odada yarışırken yarış
                verileri (örneğin her yarışçının konumu) Unity’nin sunucuları üzerinden odadaki oyuncular arasında
                iletilir.
              </li>
              <li>
                <strong>Unity Cloud Save’deki ilerlemeniz</strong>, orada saklamayı seçerseniz.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: "linking",
        title: "Zaten kullandığınız bir girişi bağlamak",
        body: (
          <p>
            Oyuncu hesabınızı zaten kullandığınız bir girişe bağlayabilirsiniz: Apple ile Giriş Yap, Google, Game
            Center veya Google Play Games. Bağladığınızda oyun, o sağlayıcıdan sizin için bir tanımlayıcı alır; şifrenizi
            asla almaz. Bağlamak isteğe bağlıdır.
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
                <strong>Satın almalar.</strong> Kostümler App Store ve Google Play üzerinden satılacak. Ödemeyi Apple
                veya Google alır; oyun ödeme bilgilerinizi hiçbir zaman görmez.
              </li>
              <li>
                <strong>Oyun analitiği</strong>, kişisel tanımlayıcılar olmadan.
              </li>
              <li>
                <strong>Çökme tanılama.</strong>
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
                <strong>Unity Technologies</strong> çevrim içi özellikleri çalıştırır: oyuncu hesabı, arkadaşlar,
                odalar ve Cloud Save. Bkz. <a href={LINKS.unity}>Unity’nin oyunculara yönelik gizlilik politikası</a>.
              </li>
              <li>
                <strong>Apple</strong> App Store’u, Apple ile Giriş Yap’ı ve Game Center’ı çalıştırır. Bkz.{" "}
                <a href={LINKS.apple}>Apple Gizlilik Politikası</a>.
              </li>
              <li>
                <strong>Google</strong> Google Play’i, Google ile girişi ve Google Play Games’i çalıştırır. Bkz.{" "}
                <a href={LINKS.google}>Google Gizlilik Politikası</a>.
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
            <p>
              Çevrim içi verileriniz, oyuncu hesabınız var olduğu sürece saklanır. Hesabınızı sildiğinizde Unity oyuncu
              hesabını, arkadaş listenizi, bulut kaydınızı ve bağlı girişlerinizi kaldırırız.
            </p>
            <p>
              Hesabınızı oyunda veya e-postayla silebilirsiniz. Adımlar{" "}
              <Link href="/sledlings/delete-account?lang=tr">hesap silme sayfasında</Link>.
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
