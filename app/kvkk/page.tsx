import { LegalShell } from "@/components/LegalShell";
import { CONTACT_EMAIL } from "@/lib/site";
import { DATA_CONTROLLER, legalMetadata, readLegalLang, type LegalSearchParams } from "@/lib/legal";
import styles from "@/components/LegalShell.module.css";

export async function generateMetadata({ searchParams }: { searchParams: LegalSearchParams }) {
  return legalMetadata("/kvkk", await readLegalLang(searchParams));
}

const purposes = {
  tr: [
    ["Web sitesinin sunulması ve güvenliği", "IP adresi, istenen adres, istek zamanı, tarayıcının gönderdiği cihaz/tarayıcı ve bağlantı bilgileri; sayfalar istenirken barındırma altyapısına otomatik iletilir. Sağlayıcı IP adresinden yaklaşık ülke/şehir bilgisi de türetir.", "Sayfaları cihazınıza ulaştırmak, hizmetin çalışmasını sağlamak ve kötüye kullanımı önlemek. KVKK m.5/2(f): temel hak ve özgürlüklerinize zarar vermemek kaydıyla bu amaçlarla sınırlı meşru menfaat."],
    ["Bildirim tercihinizin hatırlanması", "“Anladım” seçildiğinde tarayıcınızda bildirim sürümü ve zaman bilgileri tutulur. Bu kayıt bize gönderilmez ve kişi/cihaz kimliği içermez.", "Aynı bildirimi tekrar göstermemek. KVKK m.5/2(f): temel hak ve özgürlüklerinize zarar vermemek kaydıyla, seçtiğiniz bildirim tercihini hatırlamakla sınırlı meşru menfaat. Reklam veya takip izni olarak kullanılmaz; ayrıntı ve süre Çerez Bilgilendirmesi’nde yer alır."],
    ["E-posta ile destek ve iletişim", "Gönderdiğiniz e-posta adresi, varsa adınız, mesajınız, ekler ve kendi isteğinizle paylaştığınız ürün/cihaz bilgileri; e-posta yoluyla elde edilir.", "Talebinizi anlamak ve yanıtlamak. Satın aldığınız ürünün hizmetine ilişkin destek için m.5/2(c); genel soruların yanıtlanması ve iletişimin yürütülmesi için m.5/2(f)."],
    ["Başvurular ve hakların korunması", "Talebiniz, kimliğinizi veya ilgili hesabı doğrulamak için gereken ölçülü bilgiler ve yanıt kayıtları; başvuru ve yazışma yoluyla elde edilir.", "Kişisel veri başvurularını sonuçlandırmak için m.5/2(ç); bir hakkın tesisi, kullanılması veya korunması için gerekli kayıtlar bakımından m.5/2(e)."],
  ],
  en: [
    ["Website delivery and security", "IP address, requested URL, request time, and device/browser and connection information sent by your browser; automatically received by the hosting infrastructure when you request a page. The provider also derives approximate country/city information from the IP address.", "Deliver pages to your device, operate the service and prevent abuse. KVKK Article 5(2)(f): legitimate interests limited to these purposes, provided your fundamental rights and freedoms are not harmed."],
    ["Remembering the notice", "Selecting “Got it” saves the notice version and timestamps in your browser. The record is not sent to us and has no person or device identifier.", "Avoid repeating the same notice. KVKK Article 5(2)(f): a legitimate interest limited to remembering your chosen notice preference, provided your fundamental rights and freedoms are not harmed. It is not advertising or tracking consent; the Cookie Information page explains its contents and duration."],
    ["Email support and contact", "Your email address, name if supplied, message, attachments, and product/device details you choose to share; collected through email.", "Understand and answer your request. Article 5(2)(c) for support needed to provide a product you purchased; Article 5(2)(f) for answering general questions and managing correspondence."],
    ["Data requests and protection of rights", "Your request, proportionate information needed to verify your identity or the relevant account, and response records; collected through your request and correspondence.", "Article 5(2)(ç) for responding to personal-data requests; Article 5(2)(e) for records necessary to establish, exercise or protect a right."],
  ],
} as const;

export default async function KvkkPage({ searchParams }: { searchParams: LegalSearchParams }) {
  const lang = await readLegalLang(searchParams);
  const tr = lang === "tr";
  return (
    <LegalShell lang={lang} path="/kvkk"
      title={tr ? "KVKK aydınlatma metni" : "Personal data notice (KVKK)"}
      intro={tr
        ? "Simple Ideas web sitesi ve tüm ürünlerimiz için yürüttüğümüz destek iletişimi kapsamında, kişisel verilerinizi nasıl işlediğimizi ve haklarınızı açıklar. Ürünlerin uygulama içindeki veri kullanımı aşağıda bağlantıları verilen ayrı politikalarda açıklanır."
        : "This notice explains personal data processing on the Simple Ideas website and in support correspondence for all our products, together with your rights. The separate policies linked below explain processing inside each app."}>
      <div className={styles.callout}>
        <p>{tr
          ? "Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu’nun 10. maddesi kapsamında bilgilendirme amacı taşır. Metni okumak veya web sitesindeki “Anladım” düğmesine basmak açık rıza vermek anlamına gelmez. Web sitesi tercihleri, uygulamaların kendi izinlerini değiştirmez."
          : "This information is provided under Article 10 of Türkiye’s Personal Data Protection Law No. 6698 (KVKK). Reading it or selecting “Got it” on the website is not explicit consent. Website preferences do not change permissions inside our apps."}</p>
      </div>
      <nav className={styles.contents} aria-label={tr ? "Bu sayfada" : "On this page"}>
        <a href="#controller">{tr ? "Veri sorumlusu" : "Controller"}</a>
        <a href="#processing">{tr ? "Veri işleme" : "Processing"}</a>
        <a href="#products">{tr ? "Ürün politikaları" : "Product policies"}</a>
        <a href="#transfers">{tr ? "Alıcılar ve aktarım" : "Recipients and transfers"}</a>
        <a href="#rights">{tr ? "Haklar ve başvuru" : "Rights and requests"}</a>
      </nav>
      <section id="controller">
        <h2>{tr ? "1. Veri sorumlusu ve iletişim" : "1. Data controller and contact"}</h2>
        <dl>
          <dt>{tr ? "Veri sorumlusu" : "Data controller"}</dt><dd>{DATA_CONTROLLER}</dd>
          <dt>{tr ? "E-posta" : "Email"}</dt><dd><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></dd>
          <dt>{tr ? "Web sitesi" : "Website"}</dt><dd>simpleideas.net / www.simpleideas.net</dd>
        </dl>
        <p>{tr
          ? "Simple Ideas, bağımsız geliştirici Salih Salihoğlu’nun kullandığı markadır. Aşağıdaki açıklamalar, amaçlarını ve araçlarını bizim belirlediğimiz web sitesi ve destek işlemlerine ilişkindir. Apple, Google ve diğer bağımsız hizmetlerin kendi işlemleri ayrıca kendi politikalarına tabidir."
          : "Simple Ideas is the brand used by independent developer Salih Salihoğlu. This notice covers website and support processing whose purposes and means we determine. Processing carried out independently by Apple, Google and other services is also described in their own policies."}</p>
      </section>
      <section id="processing">
        <h2>{tr ? "2. Veriler, amaçlar, toplama yöntemleri ve hukuki sebepler" : "2. Data, purposes, collection methods and legal grounds"}</h2>
        <div className={styles.tableWrap} role="region" aria-label={tr ? "Veri işleme tablosu" : "Data processing table"} tabIndex={0}>
          <table>
            <thead><tr><th scope="col">{tr ? "İşlem" : "Activity"}</th><th scope="col">{tr ? "Veri ve toplama yöntemi" : "Data and collection method"}</th><th scope="col">{tr ? "Amaç ve hukuki sebep" : "Purpose and legal ground"}</th></tr></thead>
            <tbody>{purposes[lang].map(([activity, data, purpose]) => <tr key={activity}><th scope="row">{activity}</th><td>{data}</td><td>{purpose}</td></tr>)}</tbody>
          </table>
        </div>
        <p>{tr
          ? "Web sitesinde hesap açma ve doğrudan ödeme bulunmaz; siteye ziyaretçi analitiği veya reklam izleme kodu entegre etmiyoruz. Destek için e-posta gönderirken talebinizle ilgisiz kimlik belgesi, ödeme kartı veya özel nitelikli kişisel veri paylaşmanız gerekmez."
          : "The website has no account registration or direct payment, and we do not integrate visitor-analytics or advertising-tracking code. You do not need to include unrelated identity documents, payment-card details or sensitive personal data in a support email."}</p>
        <p><a href={`/cookies?lang=${lang}`}>{tr ? "Çerez ve yerel depolama bilgilendirmesi" : "Cookies and local storage information"}</a></p>
      </section>
      <section id="products">
        <h2>{tr ? "3. Ürünlerin ayrı gizlilik politikaları" : "3. Separate product privacy policies"}</h2>
        <p>{tr
          ? "Bir ürünün web sayfasını ziyaret etmek ile uygulamayı kullanmak farklı işlemlerdir. Aşağıdaki bağlantılar her ürünün veri türlerini, hizmet sağlayıcılarını, saklama ve silme açıklamalarını içerir. Bu web sitesi bildirimi oyun içi reklam izni veya mikrofon izni yerine geçmez."
          : "Visiting a product webpage is different from using the app. The links below explain each product’s data types, service providers, retention and deletion. This website notice does not replace in-app advertising or microphone permissions."}</p>
        <h3 id="almost-in-orbit">Almost in Orbit</h3>
        <p>{tr
          ? "Ücretsiz sürümün (3.1 ve sonrası) politikası; Google AdMob reklamlarını, Google Analytics for Firebase kullanım analitiğini ve Firebase Crashlytics çökme raporlarını, mağaza satın alımlarını, cihazdaki oyun kayıtlarını, Game Center veya Play Games üzerinden isteğe bağlı bulut kaydı ve oyun içindeki tercihleri açıklar. Aynı sayfa, önceki ücretli sürümlerde Unity motorunun teknik tanılama verilerini de kapsar."
          : "The policy for the free release (3.1 and later) describes Google AdMob ads, Google Analytics for Firebase usage analytics and Firebase Crashlytics crash reports, store purchases, on-device saves, optional cloud save through Game Center or Play Games, and the in-game choices. The same page also covers Unity engine technical diagnostics in the earlier paid versions."} <a href={tr ? "/privacy?lang=tr" : "/privacy"}>{tr ? "Almost in Orbit gizlilik politikası" : "Almost in Orbit privacy policy"}</a>.</p>
        <h3 id="pixel-art-collect">Pixel Art Collect</h3>
        <p>{tr
          ? "Oyuncu kimliği ve hesap doğrulama, isteğe bağlı Apple ile hesap bağlama, satın alma doğrulama ve bulut cüzdanı, Google AdMob reklamları ve ilgili teknik veriler ürün politikasında açıklanır. Anonim girişte oluşturulan oyuncu kimliği, hiçbir veri işlenmediği anlamına gelmez."
          : "The product policy describes player identity and authentication, optional Apple account linking, purchase validation and a cloud wallet, Google AdMob ads and related technical data. Anonymous sign-in still creates a player identifier; it does not mean no data is processed."}</p>
        <p>{tr
          ? "Hesap silme işlemi oyunda Ayarlar › Oyuncu hesabı › Hesabı sil yolundadır. Satın alma kayıtlarının tekrar kullanım ve iade yönetimi için kalan kısmı, hesap silindiğinde otomatik olarak tümüyle ortadan kalkmaz; ürün politikasındaki saklama açıklamasına bakın."
          : "Account deletion is available in Settings › Player account › Delete account. Some transaction records remain for duplicate-use prevention and refunds after account deletion; see the retention explanation in the product policy."} <a href={`/collect-pixel-art/privacy${tr ? "?lang=tr" : ""}`}>{tr ? "Pixel Art Collect gizlilik politikası" : "Pixel Art Collect privacy policy"}</a>.</p>
        <h3 id="tempo">Tempo</h3>
        <p>{tr
          ? "Tempo’nun ürün politikası, BPM ve ölçü ayarlarının Apple Watch üzerinde tutulduğunu ve geliştiriciye gönderilmediğini açıklar. Bize e-posta göndermeniz halinde bu metnin destek iletişimi bölümü uygulanır."
          : "Tempo’s product policy explains that BPM and time-signature settings stay on Apple Watch and are not sent to the developer. If you email us, the support section of this notice applies."} <a href={tr ? "/tempo/privacy?lang=tr" : "/tempo/privacy"}>{tr ? "Tempo gizlilik politikası" : "Tempo privacy policy"}</a>.</p>
        <h3 id="tuner-pro-studio">Tuner Pro Studio</h3>
        <p>{tr
          ? "Mikrofon sesi nota ve akort tespiti için cihaz belleğinde işlenir; ses dosyası oluşturulmaz ve ses sunucuya gönderilmez. Ayarlar cihazda saklanır. Mikrofon erişimini cihaz ayarlarından yönetebilirsiniz."
          : "Microphone audio is processed in device memory to detect pitch and tuning; no audio file is created and audio is not sent to a server. Settings stay on the device. Microphone access can be managed in device settings."} <a href={tr ? "/tuner/privacy?lang=tr" : "/tuner/privacy"}>{tr ? "Tuner Pro Studio gizlilik politikası" : "Tuner Pro Studio privacy policy"}</a>.</p>
      </section>
      <section id="transfers">
        <h2>{tr ? "4. Alıcılar ve aktarım amaçları" : "4. Recipients and purposes of disclosure"}</h2>
        <ul>
          <li><strong><a href="https://vercel.com/legal/privacy-notice">Vercel</a>:</strong> {tr ? "web sitesini barındırmak, sayfa ve dosyaları iletmek ve altyapı güvenliğini sağlamak için bağlantı bilgilerini işler." : "processes connection information to host the website, deliver pages and files, and operate infrastructure security."}</li>
          <li><strong>{tr ? "E-posta hizmet sağlayıcısı:" : "Email service provider:"}</strong> {tr ? "mesajların bize ulaşması, saklanması ve size yanıt gönderilmesi için iletişim içeriğini işler." : "processes correspondence to deliver and store messages and send replies."}</li>
          <li><strong>{tr ? "Yetkili kurumlar ve hakkın korunması için gerekli alıcılar:" : "Competent authorities and recipients needed to protect a right:"}</strong> {tr ? "yalnızca uygulanabilir bir hukuki yükümlülüğün yerine getirilmesi veya bir hakkın tesisi, kullanılması ya da korunması gerektiğinde, gereken kapsamla sınırlı olarak." : "only to the extent necessary to comply with an applicable legal obligation or establish, exercise or protect a right."}</li>
        </ul>
        <p>{tr
          ? "Ürün içindeki Google/Firebase/AdMob, Apple ve Unity işlemlerinin alıcıları ve amaçları ilgili ürün politikasında ayrıca açıklanır. Bir dış mağaza bağlantısına tıkladığınızda o hizmet de bağlantı bilgilerinizi kendi sistemi üzerinden alır."
          : "Recipients and purposes for in-app Google/Firebase/AdMob, Apple and Unity services are described separately in the relevant product policy. An external app store also receives connection information through its own systems when you open its link."}</p>
        <h3>{tr ? "Türkiye dışındaki hizmetler" : "Services outside Türkiye"}</h3>
        <p>{tr
          ? "Vercel gibi yurt dışında altyapısı bulunan hizmetlerin kullanılması, bağlantı bilgilerinin Türkiye dışında işlenmesini içerir. Ürünler için belirtilen yabancı hizmet sağlayıcıların veri kullanımları da ayrıca dikkate alınmalıdır. Türkiye’den yurt dışına kişisel veri aktarımı, KVKK’nın 9. maddesindeki şartlara tabidir; çerez bildiriminin kapatılması bu aktarım için rıza veya uygun güvence oluşturmaz."
          : "Using services with infrastructure outside Türkiye, such as Vercel, involves processing connection information outside Türkiye. The foreign service providers described for each product must also be considered separately. Transfers from Türkiye are subject to the conditions in Article 9 of the KVKK. Dismissing the cookie notice is neither consent nor an appropriate safeguard for such a transfer."}</p>
        <p>{tr
          ? "Verilerinizin hangi alıcılara aktarıldığına ve ilgili işleme ilişkin bilgi talebinizi aşağıdaki başvuru kanalından iletebilirsiniz."
          : "You can request information about the recipients of your data and the relevant processing through the contact channel below."}</p>
      </section>
      <section id="retention">
        <h2>{tr ? "5. Saklama hakkında" : "5. Retention"}</h2>
        <p>{tr
          ? "Bildirim tercihinin tarayıcıdaki kullanım süresi 180 gündür; ayrıntıları çerez sayfasında yer alır. Destek yazışmalarında talebin niteliği, takibinin gerekip gerekmediği, uygulanabilir yasal yükümlülükler ve bir hakkın korunması için gerekli süreler dikkate alınır. Mesaj göndermek, talep kapanır kapanmaz e-postanın otomatik olarak silineceği anlamına gelmez."
          : "The browser notice preference has a 180-day lifetime, as explained on the cookie page. For support correspondence, relevant factors include the nature of the request, any need for follow-up, applicable legal obligations and the period needed to protect a right. Sending a message does not mean the email is automatically deleted as soon as a request is closed."}</p>
        <p>{tr
          ? "Barındırma altyapısının teknik kayıtları ile ürünlerin hesap, işlem ve reklam kayıtları farklı saklama uygulamalarına tabidir. Bunlar için tek bir süre veya tüm verilerin hemen silindiği yönünde genel bir taahhütte bulunmuyoruz. Belirli bir kaydın saklanma durumu veya silinmesi için bize başvurabilirsiniz."
          : "Hosting technical records and product account, transaction and advertising records have different retention arrangements. There is no single period or blanket promise of immediate deletion for all of them. You can contact us about the retention or deletion of a particular record."}</p>
      </section>
      <section id="rights">
        <h2>{tr ? "6. KVKK kapsamındaki haklarınız" : "6. Your rights under the KVKK"}</h2>
        <p>{tr ? "Kanun’un 11. maddesi kapsamında:" : "Under Article 11 of the Law, you may:"}</p>
        <ul>
          <li>{tr ? "Kişisel verilerinizin işlenip işlenmediğini öğrenebilir ve işlenmişse bilgi isteyebilirsiniz." : "Learn whether your personal data is processed and request information about it."}</li>
          <li>{tr ? "İşleme amacını, amaca uygun kullanımı ve yurt içi/yurt dışı alıcıları öğrenebilirsiniz." : "Learn the purpose, whether data is used in line with it, and recipients in Türkiye or abroad."}</li>
          <li>{tr ? "Eksik veya yanlış verilerin düzeltilmesini; kanuni şartlar oluştuğunda silinmesini veya yok edilmesini isteyebilirsiniz." : "Request correction of incomplete or inaccurate data, and deletion or destruction when the legal conditions are met."}</li>
          <li>{tr ? "Düzeltme, silme veya yok etme işlemlerinin verilerin aktarıldığı üçüncü kişilere bildirilmesini talep edebilirsiniz." : "Request notification of those corrections, deletions or destruction to third parties who received the data."}</li>
          <li>{tr ? "Verilerinizin yalnızca otomatik sistemlerle analiz edilmesi sonucunda aleyhinize bir sonuca itiraz edebilirsiniz." : "Object to a result against you arising from analysis exclusively through automated systems."}</li>
          <li>{tr ? "Hukuka aykırı işleme nedeniyle zararınız varsa giderilmesini talep edebilirsiniz." : "Seek compensation for damage caused by unlawful processing."}</li>
        </ul>
        <h3>{tr ? "Nasıl başvurabilirsiniz?" : "How to make a request"}</h3>
        <p>{tr ? "Talebinizi " : "Send your request to "}<a href={`mailto:${CONTACT_EMAIL}?subject=KVKK`}>{CONTACT_EMAIL}</a>{tr
          ? " adresine “KVKK başvurusu” konusuyla gönderebilirsiniz. Hangi ürün veya yazışmayla ilgili başvurduğunuzu ve talebinizi belirtin. Başvurunun size ait olduğunu ve ilgili kaydı doğrulamak için yalnızca gereken bilgileri isteyebiliriz. Kanunda ve ilgili başvuru tebliğinde düzenlenen diğer başvuru haklarınız saklıdır."
          : " with the subject “KVKK request”. Identify the product or correspondence concerned and explain your request. We may ask for only the information needed to verify that it is your request and locate the relevant record. Other application methods provided by the Law and the applicable communiqué remain available."}</p>
        <p>{tr
          ? "Başvurular, niteliğine göre mümkün olan en kısa sürede ve en geç 30 gün içinde sonuçlandırılır. Kural olarak ücretsizdir; ayrıca maliyet gerektiren durumlarda Kurulun belirlediği tarife uygulanabilir. Kanundaki başvuru şartları çerçevesinde Kişisel Verileri Koruma Kuruluna şikâyet hakkınız da vardır."
          : "Requests are resolved as soon as possible and within 30 days. They are generally free; where an additional cost arises, the tariff set by the Board may apply. You may also complain to the Personal Data Protection Board in accordance with the Law’s application requirements."}</p>
      </section>
      <section>
        <h2>{tr ? "7. Değişiklikler ve resmî kaynaklar" : "7. Changes and official sources"}</h2>
        <p>{tr
          ? "Web sitesi veya destek kapsamındaki işleme amaçları değiştiğinde bu metin ve güncelleme tarihi yenilenir. Yeni bir isteğe bağlı takip hizmeti için daha önceki “Anladım” kaydı açık rıza olarak kullanılamaz."
          : "This notice and its date are updated when website or support processing purposes change. A previous “Got it” acknowledgment cannot be used as explicit consent for a new optional tracking service."}</p>
        <ul>
          <li><a href="https://www.kvkk.gov.tr/Icerik/4132/aydinlatma-yukumlulugunun-yerine-getirilmesinde-uyulacak-usul-ve-esaslar-hakkinda-teblig">{tr ? "KVKK — Aydınlatma yükümlülüğüne ilişkin Tebliğ" : "KVKK — Communiqué on the duty to inform (Turkish)"}</a></li>
          <li><a href="https://www.kvkk.gov.tr/Icerik/2036/Ilgili-Kisinin-Haklari">{tr ? "KVKK — İlgili kişinin hakları" : "KVKK — Data subject rights (Turkish)"}</a></li>
          <li><a href="https://www.kvkk.gov.tr/Icerik/2053/Yurtdisina-Aktarim">{tr ? "KVKK — Yurt dışına aktarım" : "KVKK — International transfers (Turkish)"}</a></li>
        </ul>
      </section>
    </LegalShell>
  );
}
