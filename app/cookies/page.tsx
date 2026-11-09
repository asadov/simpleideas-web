import { LegalShell } from "@/components/LegalShell";
import { CookieSettingsButton } from "@/components/CookieNotice";
import { COOKIE_NOTICE_MAX_AGE_DAYS, COOKIE_NOTICE_STORAGE_KEY } from "@/lib/cookie-preferences";
import { CONTACT_EMAIL } from "@/lib/site";
import { DATA_CONTROLLER, legalMetadata, readLegalLang, type LegalSearchParams } from "@/lib/legal";
import styles from "@/components/LegalShell.module.css";

export async function generateMetadata({ searchParams }: { searchParams: LegalSearchParams }) {
  return legalMetadata("/cookies", await readLegalLang(searchParams));
}

export default async function CookiesPage({ searchParams }: { searchParams: LegalSearchParams }) {
  const lang = await readLegalLang(searchParams);
  const tr = lang === "tr";
  return (
    <LegalShell lang={lang} path="/cookies"
      title={tr ? "Çerez ve yerel depolama bilgilendirmesi" : "Cookies and local storage"}
      intro={tr
        ? "Bu sayfa simpleideas.net ve www.simpleideas.net ziyaretlerinde tarayıcınızda tutulan kaydı açıklar. Uygulamalarımızın kendi veri kullanımları ayrı gizlilik politikalarında yer alır."
        : "This page explains the browser storage used when visiting simpleideas.net and www.simpleideas.net. Our apps have separate privacy policies for their own data use."}>
      <div className={styles.callout}>
        <p><strong>{tr ? "Web sitesinde reklam veya analitik çerezi kullanmıyoruz." : "This website does not use advertising or analytics cookies."}</strong></p>
        <p>{tr
          ? "Bu nedenle ilk ziyaretteki bildirim bir açık rıza talebi değildir. “Anladım” seçeneği yalnızca bildirimi gördüğünüzü bu tarayıcıda hatırlar; reklam, takip veya uygulama içi veri işlemeye izin vermez."
          : "The first-visit notice is therefore informational, not a consent request. “Got it” only remembers that you have seen the notice in this browser. It does not authorise advertising, tracking or data processing inside our apps."}</p>
      </div>
      <section>
        <h2>{tr ? "1. Hangi teknolojiler kullanılıyor?" : "1. Which technologies are used?"}</h2>
        <p>{tr
          ? "Çerezler, tarayıcının ilgili web sunucusuna geri gönderebildiği küçük kayıtlardır. Yerel depolama (localStorage) ise bu kaydı tarayıcıda tutar ve her web isteğiyle otomatik olarak sunucuya göndermez. Bu sitedeki bildirim için localStorage kullanılır; bildirim bir HTTP çerezi oluşturmaz."
          : "Cookies are small records that a browser can send back to a web server. Local storage (localStorage) keeps a record in the browser without automatically sending it with each web request. Our notice uses localStorage and does not create an HTTP cookie."}</p>
        <p>{tr
          ? "Videolar, görseller ve yazı tipleri site üzerinden sunulur. Sayfalarda üçüncü taraf reklam pikselleri, ziyaretçi analitiği veya gömülü sosyal medya oynatıcıları kullanılmaz."
          : "Videos, images and fonts are served through the website. Pages do not use third-party advertising pixels, visitor analytics or embedded social-media players."}</p>
      </section>
      <section id="storage">
        <h2>{tr ? "2. Tarayıcıda tutulan tek bildirim kaydı" : "2. The notice record stored in your browser"}</h2>
        <dl>
          <dt>{tr ? "Kayıt adı" : "Record name"}</dt><dd><code>{COOKIE_NOTICE_STORAGE_KEY}</code></dd>
          <dt>{tr ? "Tür / sağlayıcı" : "Type / provider"}</dt><dd>{tr ? "Birinci taraf localStorage / Simple Ideas" : "First-party localStorage / Simple Ideas"}</dd>
          <dt>{tr ? "Amaç" : "Purpose"}</dt><dd>{tr ? "Aynı bilgilendirmeyi her ziyaretinizde yeniden göstermemek." : "Avoid showing you the same notice on every visit."}</dd>
          <dt>{tr ? "İçerik" : "Contents"}</dt><dd>{tr ? "Bildirim sürümü, onaylama zamanı ve sona erme zamanı. Ad, e-posta, reklam kimliği veya benzersiz ziyaretçi kimliği içermez." : "Notice version, acknowledgment time and expiry time. No name, email address, advertising ID or unique visitor ID."}</dd>
          <dt>{tr ? "Ne zaman yazılır?" : "When is it written?"}</dt><dd>{tr ? "Yalnızca “Anladım” düğmesine bastığınızda. Sayfayı ziyaret etmek, kaydırmak veya ayrıntıları kapatmak bu kaydı oluşturmaz." : "Only when you select “Got it”. Visiting, scrolling or closing the details does not create it."}</dd>
          <dt>{tr ? "Süre" : "Duration"}</dt><dd>{tr ? `${COOKIE_NOTICE_MAX_AGE_DAYS} gün. Süre dolduktan sonraki ilk ziyarette geçersiz sayılır ve temizlenir; tarayıcı verilerini silerek daha önce kaldırabilirsiniz.` : `${COOKIE_NOTICE_MAX_AGE_DAYS} days. On the first visit after expiry it is treated as invalid and removed; you can clear browser data to remove it sooner.`}</dd>
          <dt>{tr ? "Aktarım" : "Transmission"}</dt><dd>{tr ? "Kayıt sunucumuza veya üçüncü kişilere gönderilmez. Yalnızca kaydedildiği tarayıcı ve site adresinde geçerlidir." : "The record is not sent to our server or third parties. It applies only to the browser and site origin where it was saved."}</dd>
        </dl>
      </section>
      <section>
        <h2>{tr ? "3. Ayarlarınızı yönetme" : "3. Managing your settings"}</h2>
        <p>{tr
          ? "Aşağıdaki düğmeden veya her sayfanın altındaki “Çerez ayarları” bağlantısından bildirim ayrıntılarını açabilir ve kaydı silebilirsiniz. Kaydı silmek bildirimi yeniden gösterir. Tarayıcınız depolamayı engelliyorsa siteyi kullanabilirsiniz; seçim sonraki ziyaretlerde hatırlanmayabilir."
          : "Open the details using the button below or “Cookie settings” in any page footer. You can delete the record to show the notice again. The site remains usable if your browser blocks storage, although your acknowledgment may not be remembered on later visits."}</p>
        <p><CookieSettingsButton lang={lang} /></p>
        <p>{tr
          ? "İsteğe bağlı analitik ve reklam teknolojileri şu anda kullanılmadığı için bu kategoriler için bir izin anahtarı bulunmaz. Gelecekte böyle bir teknoloji eklenirse, bu sayfa ve tercih sistemi gerçek kullanıma göre güncellenmelidir; mevcut bildirim kaydı o teknolojiye verilmiş izin olarak kullanılamaz."
          : "There are no permission switches for analytics or advertising because those optional technologies are not currently used. Adding such a technology requires updating this page and the preference system for its actual use. An existing notice acknowledgment cannot be used as permission for it."}</p>
      </section>
      <section>
        <h2>{tr ? "4. Web istekleri, dış bağlantılar ve uygulamalar" : "4. Web requests, external links and apps"}</h2>
        <p>{tr
          ? "Çerez kullanılmaması, web barındırma altyapısının IP adresiniz ve istenen sayfa gibi bağlantı bilgilerini hiç işlemediği anlamına gelmez. Bu işlemler ve e-posta desteği KVKK aydınlatma metninde açıklanır."
          : "Not using cookies does not mean the hosting infrastructure receives no connection data, such as your IP address and the page you request. The personal data notice explains that processing and email support."} <a href={`/kvkk?lang=${lang}`}>{tr ? "KVKK aydınlatma metni" : "Read the personal data notice"}</a>.</p>
        <p>{tr
          ? "App Store, Google Play veya başka bir dış bağlantıyı açtığınızda ilgili hizmetin kendi politikası uygulanır. Bu sitedeki bildirim kaydı, Pixel Art Collect veya diğer uygulamalardaki reklam, hesap, mikrofon ve analitik tercihlerini yönetmez."
          : "When you open the App Store, Google Play or another external link, that service has its own policy. This website notice does not manage advertising, account, microphone or analytics choices inside Pixel Art Collect or our other apps."}</p>
      </section>
      <section>
        <h2>{tr ? "5. İletişim" : "5. Contact"}</h2>
        <p>{DATA_CONTROLLER} · <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
        <p>{tr ? "Haklarınız ve başvuru yolu için " : "For your rights and how to contact us, see the "}<a href={`/kvkk?lang=${lang}#rights`}>{tr ? "KVKK metninin haklarınız bölümüne" : "rights section of the personal data notice"}</a>{tr ? " bakabilirsiniz." : "."}</p>
      </section>
    </LegalShell>
  );
}
