import type { Metadata } from "next";
import type { ReactNode } from "react";
import { CONTACT_EMAIL } from "@/lib/site";
import type { LegalLang } from "@/lib/legal";
import { TunerShell } from "../TunerShell";
import styles from "../tuner.module.css";

/*
 * Tuner Pro Studio privacy policy. This address is the app's Privacy Policy URL in App Store Connect:
 * never move it without a 301. English is the default; `?lang=tr` serves Turkish (for KVKK).
 */

const PAGE_PATH = "/tuner/privacy";
const PAGE_URL = `https://www.simpleideas.net${PAGE_PATH}`;
const URLS: Record<LegalLang, string> = { en: PAGE_URL, tr: `${PAGE_URL}?lang=tr` };

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

async function readLang(searchParams: SearchParams): Promise<LegalLang> {
  const value = (await searchParams).lang;
  return (Array.isArray(value) ? value[0] : value) === "tr" ? "tr" : "en";
}

const mail = <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;

const COPY: Record<
  LegalLang,
  {
    metaTitle: string;
    metaDescription: string;
    title: string;
    meta: string;
    intro: string;
    short: ReactNode;
    micTitle: string;
    mic: string;
    keptTitle: string;
    kept: string;
    notTitle: string;
    not: string[];
    nothing: string;
    contactTitle: string;
    contact: ReactNode;
    changesTitle: string;
    changes: string;
  }
> = {
  en: {
    metaTitle: "Privacy Policy · Tuner Pro Studio",
    metaDescription: "Tuner Pro Studio collects no data. Microphone audio is never recorded or sent.",
    title: "Privacy Policy",
    meta: "Tuner Pro Studio · Effective date: 5 November 2026",
    intro:
      "Tuner Pro Studio is a chromatic and guitar tuner for iPhone and iPad developed by Simple Ideas (“we”). This policy covers Tuner Pro Studio version 1.0 and later.",
    short: (
      <>
        <strong>In short: Tuner Pro Studio collects no data.</strong> Nothing you play or do in the app leaves your
        device.
      </>
    ),
    micTitle: "Microphone",
    mic:
      "The app asks for microphone access only to detect the pitch of the note you play. Sound is analysed in memory on your device as it arrives and is discarded straight away. It is never recorded, saved to a file or sent anywhere. The microphone stops when you leave the app, and you can turn access off at any time in iOS Settings.",
    keptTitle: "What stays on your device",
    kept:
      "The app stores your settings so they are there next time: the A4 reference, in-tune range, noise filter, sharps or flats, haptic and chime switches, the last page you used and the guitar tuning. They never leave your device and are deleted when you delete the app.",
    notTitle: "What Tuner Pro Studio does not do",
    not: [
      "No account, no sign-in and no in-app purchases.",
      "No ads, analytics, tracking or crash-reporting code.",
      "No internet connection, and no access to your location, contacts, photos or health data.",
    ],
    nothing: "Because we collect nothing, there is nothing for us to share, sell or delete.",
    contactTitle: "Contact",
    contact: (
      <>
        If you email us, we use your message and address only to answer you. Write to {mail}. How we handle support
        email is explained in the <a href="/kvkk?lang=en#processing">personal data notice (KVKK)</a>.
      </>
    ),
    changesTitle: "Changes",
    changes: "If a future version changes any of this, we will update this page and its effective date first.",
  },
  tr: {
    metaTitle: "Gizlilik Politikası · Tuner Pro Studio",
    metaDescription: "Tuner Pro Studio hiçbir veri toplamaz. Mikrofon sesi asla kaydedilmez ve gönderilmez.",
    title: "Gizlilik Politikası",
    meta: "Tuner Pro Studio · Yürürlük tarihi: 5 Kasım 2026",
    intro:
      "Tuner Pro Studio, Simple Ideas (“biz”) tarafından geliştirilen, iPhone ve iPad için kromatik ve gitar akort uygulamasıdır. Bu politika Tuner Pro Studio 1.0 ve sonraki sürümleri kapsar.",
    short: (
      <>
        <strong>Kısaca: Tuner Pro Studio hiçbir veri toplamaz.</strong> Çaldığınız ya da uygulamada yaptığınız hiçbir
        şey cihazınızdan çıkmaz.
      </>
    ),
    micTitle: "Mikrofon",
    mic:
      "Uygulama mikrofon erişimini yalnızca çaldığınız notanın perdesini algılamak için ister. Ses, geldiği anda cihazınızın belleğinde analiz edilir ve hemen atılır. Asla kaydedilmez, bir dosyaya yazılmaz ya da bir yere gönderilmez. Uygulamadan çıktığınızda mikrofon durur; erişimi istediğiniz zaman iOS Ayarlar’dan kapatabilirsiniz.",
    keptTitle: "Cihazınızda kalanlar",
    kept:
      "Uygulama, bir sonraki açılışta hazır olsun diye ayarlarınızı saklar: A4 referansı, akort aralığı, gürültü filtresi, diyez ya da bemol gösterimi, titreşim ve zil anahtarları, en son kullandığınız sayfa ve gitar akordu. Bunlar cihazınızdan hiç çıkmaz ve uygulamayı sildiğinizde silinir.",
    notTitle: "Tuner Pro Studio’nun yapmadıkları",
    not: [
      "Hesap, giriş ve uygulama içi satın alım yok.",
      "Reklam, analitik, izleme veya çökme raporlama kodu yok.",
      "İnternet bağlantısı yok; konumunuza, kişilerinize, fotoğraflarınıza ve sağlık verilerinize erişim yok.",
    ],
    nothing: "Hiçbir veri toplamadığımız için paylaşacağımız, satacağımız ya da sileceğimiz bir veri de yok.",
    contactTitle: "İletişim",
    contact: (
      <>
        Bize e-posta gönderirseniz mesajınızı ve adresinizi yalnızca size yanıt vermek için kullanırız. Adresimiz:{" "}
        {mail}. Destek yazışmalarının nasıl işlendiği{" "}
        <a href="/kvkk?lang=tr#processing">KVKK aydınlatma metninde</a> açıklanır.
      </>
    ),
    changesTitle: "Değişiklikler",
    changes:
      "Gelecekteki bir sürüm bunlardan herhangi birini değiştirirse önce bu sayfayı ve yürürlük tarihini güncelleriz.",
  },
};

export async function generateMetadata({ searchParams }: { searchParams: SearchParams }): Promise<Metadata> {
  const lang = await readLang(searchParams);
  return {
    title: COPY[lang].metaTitle,
    description: COPY[lang].metaDescription,
    alternates: {
      canonical: URLS[lang],
      languages: { en: URLS.en, tr: URLS.tr, "x-default": URLS.en },
    },
  };
}

export default async function TunerPrivacyPage({ searchParams }: { searchParams: SearchParams }) {
  const lang = await readLang(searchParams);
  const copy = COPY[lang];

  return (
    <TunerShell lang={lang}>
      <article>
        <h1>{copy.title}</h1>
        <nav className={styles.languages} aria-label="Language / Dil">
          <a href={PAGE_PATH} hrefLang="en" lang="en" aria-current={lang === "en" ? "page" : undefined}>
            English
          </a>
          <a href={`${PAGE_PATH}?lang=tr`} hrefLang="tr" lang="tr" aria-current={lang === "tr" ? "page" : undefined}>
            Türkçe
          </a>
        </nav>
        <p className={styles.meta}>{copy.meta}</p>

        <p>{copy.intro}</p>

        <div className={styles.box}>
          <p>{copy.short}</p>
        </div>

        <h2>{copy.micTitle}</h2>
        <p>{copy.mic}</p>

        <h2>{copy.keptTitle}</h2>
        <p>{copy.kept}</p>

        <h2>{copy.notTitle}</h2>
        <ul>
          {copy.not.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>{copy.nothing}</p>

        <h2>{copy.contactTitle}</h2>
        <p>{copy.contact}</p>

        <h2>{copy.changesTitle}</h2>
        <p>{copy.changes}</p>
      </article>
    </TunerShell>
  );
}
