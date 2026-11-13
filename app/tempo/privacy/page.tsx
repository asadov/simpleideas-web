import type { Metadata } from "next";
import type { ReactNode } from "react";
import { CONTACT_EMAIL } from "@/lib/site";
import type { LegalLang } from "@/lib/legal";
import { TempoShell } from "../TempoShell";
import styles from "../tempo.module.css";

/*
 * Tempo privacy policy. This address is the app's Privacy Policy URL in App Store Connect:
 * never move it without a 301. English is the default; `?lang=tr` serves Turkish (for KVKK).
 */

const PAGE_PATH = "/tempo/privacy";
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
    metaTitle: "Privacy Policy · Tempo",
    metaDescription: "Tempo for Apple Watch collects no data.",
    title: "Privacy Policy",
    meta: "Tempo for Apple Watch · Effective date: 3 November 2026",
    intro:
      "Tempo is a metronome for Apple Watch developed by Simple Ideas (“we”). This policy covers Tempo version 1.0 and later.",
    short: (
      <>
        <strong>In short: Tempo collects no data.</strong> Nothing you do in the app leaves your watch.
      </>
    ),
    keptTitle: "What stays on your watch",
    kept:
      "Tempo stores two settings on your watch so they are there next time: the tempo (BPM) and the time signature. They never leave the watch and are deleted when you delete the app.",
    notTitle: "What Tempo does not do",
    not: [
      "No account, no sign-in and no in-app purchases.",
      "No ads, analytics, tracking or crash-reporting code.",
      "No internet connection, and no access to the microphone, location or health data.",
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
    metaTitle: "Gizlilik Politikası · Tempo",
    metaDescription: "Apple Watch için Tempo hiçbir veri toplamaz.",
    title: "Gizlilik Politikası",
    meta: "Apple Watch için Tempo · Yürürlük tarihi: 3 Kasım 2026",
    intro:
      "Tempo, Simple Ideas (“biz”) tarafından geliştirilen bir Apple Watch metronomudur. Bu politika Tempo 1.0 ve sonraki sürümleri kapsar.",
    short: (
      <>
        <strong>Kısaca: Tempo hiçbir veri toplamaz.</strong> Uygulamada yaptığınız hiçbir şey saatinizden çıkmaz.
      </>
    ),
    keptTitle: "Saatinizde kalanlar",
    kept:
      "Tempo, bir sonraki açılışta hazır olsun diye saatinizde iki ayar saklar: tempo (BPM) ve ölçü. Bu ayarlar saatten hiç çıkmaz ve uygulamayı sildiğinizde silinir.",
    notTitle: "Tempo’nun yapmadıkları",
    not: [
      "Hesap, giriş ve uygulama içi satın alım yok.",
      "Reklam, analitik, izleme veya çökme raporlama kodu yok.",
      "İnternet bağlantısı yok; mikrofona, konuma ve sağlık verilerine erişim yok.",
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

export default async function TempoPrivacyPage({ searchParams }: { searchParams: SearchParams }) {
  const lang = await readLang(searchParams);
  const copy = COPY[lang];

  return (
    <TempoShell lang={lang}>
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
    </TempoShell>
  );
}
