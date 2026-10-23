import { CONTACT_EMAIL } from "@/lib/site";
import styles from "./privacy.module.css";

const MAIL = <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;

export function PolicyTr() {
  return (
    <article>
      <h1>Gizlilik Politikası</h1>
      <p className={styles.meta}>iPhone ve iPad için Pixel Art Collect · Yürürlük tarihi: 23 Ekim 2026</p>

      <p>
        Bu politika, Pixel Art Collect oyununun (“oyun”) hangi bilgileri, neden işlediğini ve hangi seçeneklere sahip
        olduğunuzu açıklar. Oyunu Simple Ideas (“biz”) geliştirir. Bize {MAIL} adresinden ulaşabilirsiniz.
      </p>

      <div className={styles.box}>
        <p>
          <strong>Kısaca</strong>
        </p>
        <ul>
          <li>Adınızı, e-posta adresinizi veya telefon numaranızı asla istemeyiz.</li>
          <li>
            Oyun anonim bir oyuncu hesabı oluşturur. Hesabı Apple ile Giriş Yap ile bağlamak isteğe bağlıdır; yalnızca
            ilk satın almadan önce gerekir.
          </li>
          <li>Ödemeleri Apple işler. Kart veya fatura bilgilerinizi hiçbir zaman görmeyiz.</li>
          <li>
            Oyun Google AdMob aracılığıyla reklam gösterir. Reklam kimliğiniz yalnızca izlemeye izin verirseniz
            kullanılır; AEA, Birleşik Krallık ve İsviçre’de kişiselleştirilmiş reklamlar onayınızı gerektirir.
          </li>
          <li>
            Ayrı bir analitik, çökme raporlama veya atıf (attribution) SDK’sı kullanmayız. Reklam ve satın alma
            hizmetleri, aşağıda açıkladığımız teknik verileri toplar.
          </li>
          <li>
            Oyuncu hesabınızı, misafir hesap dahil, oyunda istediğiniz zaman silebilirsiniz:{" "}
            <strong>Ayarlar › Oyuncu hesabı › Hesabı sil</strong>.
          </li>
        </ul>
      </div>

      <h2>1. İşlediğimiz bilgiler</h2>

      <h3>1.1 Oyuncu hesabı (Google Firebase Authentication)</h3>
      <p>
        Oyunu ilk açtığınızda oyun, Google Firebase Authentication ile anonim olarak oturum açar. Bu, adınızı, e-posta
        adresinizi veya herhangi bir cihaz tanımlayıcısını içermeyen rastgele bir oyuncu kimliği oluşturur. Firebase bu
        kimliği, hesabın ne zaman oluşturulduğu ve en son ne zaman oturum açtığı bilgisiyle birlikte saklar. Oturum açma
        hizmetini korumak için Firebase IP adresinizi ve cihazınız ile uygulama sürümü hakkındaki temel bilgileri de
        işleyebilir.
      </p>
      <p>
        <strong>Apple ile Giriş Yap (isteğe bağlı).</strong> İlk satın almanızdan önce oyun, oyuncu hesabınızı Apple ile
        Giriş Yap ile bağlamanızı ister; böylece satın aldıklarınız hesabınıza bağlanır ve başka bir cihazda
        kurtarılabilir. Oyun Apple’dan adınızı veya e-posta adresinizi istemez. Apple oyuna, Apple Hesabınız için
        uygulamalarımıza özgü, değişmeyen bir tanımlayıcı içeren bir giriş belirteci verir; Firebase bunu oyuncu
        hesabınızı bağlamak ve doğrulamak için kullanır.
      </p>
      <p>
        Hesabınızı hiç bağlamazsanız veritabanımızda sizinle ilgili hiçbir şey saklanmaz (bkz. 1.3). Rastgele oyuncu
        kimliğiniz ve giriş tarihleri ise hesabınızı silene kadar Firebase Authentication’da kalır (bkz. 6).
      </p>

      <h3>1.2 Satın almalar (Apple Uygulama İçi Satın Alma)</h3>
      <p>
        Tüm ödemeler Apple tarafından, Apple’ın koşulları ve gizlilik politikası kapsamında işlenir. Kart bilgilerinizi,
        Apple Hesabı e-posta adresinizi veya fatura adresinizi almayız.
      </p>
      <p>
        Bir ürün satın aldığınızda oyun, satın almaya oyuncu kimliğinizin kriptografik özetinden türetilmiş bir belirteç ekler.
        Sunucumuz işlem kimliğiyle Apple’a satın almanın güncel durumunu (iadeler dahil) sorar ve ürünü teslim etmeden
        önce satın almanın oyuncu hesabınıza ait olduğunu doğrular. Apple da iade gibi değişiklikleri sunucumuza bildirir.
      </p>

      <h3>1.3 Bulut cüzdanı (Google Cloud Firestore, Frankfurt)</h3>
      <p>
        Hesabını bağlayan oyuncular için sunucumuz, Google Cloud Firestore’da europe-west3 bölgesinde (Frankfurt,
        Almanya) aşağıdakileri saklar; bunlar aynı bölgedeki sunucu işlevlerimizce işlenir:
      </p>
      <ul>
        <li>oyuncu kimliğiniz ve platformunuz (iOS);</li>
        <li>
          satın alma kayıtları: ürün, Apple işlem kimliği, verilen ve henüz kullanılmamış adetler, iade durumu ve en son ne
          zaman kontrol edildiği;
        </li>
        <li>satın aldığınız güçlendiricilerin bakiyesi ve “Bölüm arası reklamları kaldır” ürününe sahip olup olmadığınız;</li>
        <li>
          oyunun oluşturduğu rastgele bir kurulum kimliği (donanım veya reklam tanımlayıcısı değildir); ücretli hakların
          aynı anda tek cihazda kullanılması ve kurtarılabilmesi için kullanılır;
        </li>
        <li>
          ücretli bir güçlendirici kullandığınızda: ücretli sonucun kaybolmaması için devam eden o tablonun yedeği;
          yedekte güçlendirici envanteriniz (ücretsiz ve satın alınmış adetler) ve tabloya devam etmek için gereken oyun
          durumu da bulunur. Bu yedek, o tablo sürdükçe güncellenir;
        </li>
        <li>kullanılan her ücretli hakkın kaydı; böylece hiçbir hak iki kez düşülmez.</li>
      </ul>
      <p>Oyun bu veritabanını doğrudan okuyamaz ve ona yazamaz; bunu yalnızca sunucumuz yapabilir.</p>

      <h3>1.4 Reklamlar (Google AdMob)</h3>
      <p>
        Oyun bölümler arasında reklam gösterir ve isteğe bağlı ödüllü reklamlar sunar (örneğin ek hamle). Bu reklamları
        Google, Google AdMob aracılığıyla ve Google Mobile Ads SDK ile sağlar. Reklamlar Google’ın kendi
        reklamverenlerinden ya da Google’ın çalıştığı üçüncü taraf reklam teknolojisi iş ortaklarından gelebilir. Google
        ve bu iş ortakları, reklam amaçlarıyla (ilgi alanına dayalı reklamcılık, reklam ölçümü, sahtecilik önleme ve
        reklam hizmetlerini geliştirme dahil) IP adresiniz (genel konumunuzu tahmin etmek için kullanılabilir), cihaz
        türü, işletim sistemi ve dil gibi ayarlar, uygulamanın adı, reklam yazılımının çökme kayıtları ve performans
        verileri (örneğin uygulamanın açılış süresi), uygulamayla ve reklamlarıyla etkileşiminiz (örneğin uygulamayı
        açma, dokunma ve video izleme), cihazınıza ait tanımlayıcılar (Satıcı Tanımlayıcısı, IDFV ve yalnızca izlemeye
        izin verirseniz Reklam Tanımlayıcınız, IDFA) ve gördüğünüz reklamlarla ilgili bilgiler gibi bilgileri toplayabilir
        ve işleyebilir. Üçüncü taraf ölçüm ortakları da IAB Tech Lab Open Measurement çerçevesi kapsamında reklamları
        ölçmek için veri toplayıp işleyebilir.
      </p>
      <ul>
        <li>
          <strong>İzleme izni.</strong> iOS, oyunun sizi izlemesine izin verip vermediğinizi sorar. Reklam Tanımlayıcısı
          yalnızca izin verirseniz kullanılabilir. Bu tercihi istediğiniz zaman iOS Ayarlar’daki Gizlilik ve Güvenlik
          bölümünün izleme (Tracking) ayarından değiştirebilirsiniz.
        </li>
        <li>
          <strong>AEA, Birleşik Krallık ve İsviçre.</strong> Kişiselleştirilmiş reklamlar gösterilmeden önce oyun,
          Google’ın User Messaging Platform aracıyla sağlanan bir onay formu gösterir. Onay vermezseniz Google yine de
          kişiselleştirilmemiş reklamlar (geçmiş etkinliğinize değil, uygulama ve genel konumunuz gibi bağlama dayanan
          reklamlar) ya da sınırlı reklamlar (reklamları kişiselleştirmek için kişisel veri kullanmayan reklamlar)
          gösterebilir. Tercihlerinizi istediğiniz zaman <strong>Ayarlar › Gizlilik tercihleri</strong> bölümünden gözden
          geçirebilir veya değiştirebilirsiniz; bu satır Google’ın gizlilik seçenekleri formunu açar.
        </li>
        <li>
          <strong>Bölüm arası reklamları kaldır.</strong> Bu tek seferlik satın alma, bölümler arasında kendiliğinden
          çıkan reklamları durdurur. Ödüllü reklamlar izlemek isterseniz kullanılabilir kalır; bu yüzden reklam yazılımı
          oyunda etkin kalır.
        </li>
      </ul>
      <p>
        Google’ın bilgilerinizi nasıl topladığını ve kullandığını öğrenmek için{" "}
        <a href="https://policies.google.com/privacy?hl=tr">Google Gizlilik Politikası</a>’na ve{" "}
        <a href="https://policies.google.com/technologies/partner-sites?hl=tr">
          Google’ın, hizmetlerini kullanan site ve uygulamalardaki bilgileri nasıl kullandığı
        </a>{" "}
        sayfasına bakabilirsiniz. AEA, Birleşik Krallık ve İsviçre için Google, reklam yayınlayıp ölçebilen{" "}
        <a href="https://support.google.com/admob/answer/9012903?hl=tr">reklam teknolojisi iş ortaklarının listesini</a>{" "}
        yayımlar.
      </p>

      <h3>1.5 Cihazınızda kalan bilgiler</h3>
      <p>
        Tablo ilerlemeniz ve yıldızlarınız, dil ve tema gibi ayarlarınız, devam eden tablo, ücretsiz güçlendiriciler ve
        oyunun hesap durumunuzun yerel kopyası yalnızca cihazınızda saklanır. Bunlar bize gönderilmez; tek istisna 1.3’te
        açıklanan ücretli güçlendirici yedeğidir: bu yedek devam eden tabloyu ve güçlendirici adetlerinizi de içerir.
        Kullanıyorsanız cihaz yedeklerinize (iCloud veya bilgisayar) dahil olurlar ve oyunu sildiğinizde kaldırılırlar.
      </p>
      <p>
        Bir tabloyu paylaştığınızda oyun görseli cihazınızda oluşturur ve iOS paylaşım sayfasını açar. Görselin nereye
        gideceğine siz ve seçtiğiniz uygulama karar verir; biz almayız. Oyun fotoğraf arşivinizi veya kişilerinizi okumaz
        ve konum hizmetlerini kullanmaz. Google, 1.4’te açıklandığı gibi reklam ve onay işlemleri için IP adresinizden
        genel (şehir düzeyinde) konumunuzu tahmin eder.
      </p>

      <h3>1.6 Diğer web sitelerine bağlantılar</h3>
      <p>
        Eser ve ressam sayfaları, Wikimedia Commons ve müze siteleri gibi kaynaklarına bağlantı verir. Bunlar
        tarayıcınızda açılır ve o sitelerin kendi politikalarına tabidir.
      </p>

      <h3>1.7 Yapmadıklarımız</h3>
      <p>
        Ayrı bir analitik, çökme raporlama veya atıf SDK’sı kullanmayız. 1.4’te açıklanan Google Mobile Ads SDK ile
        3’te açıklanan satın alma SDK’sı (Unity IAP) kendi teknik verilerini toplar. Adınızı, e-posta adresinizi, telefon numaranızı,
        kişilerinizi, fotoğraflarınızı veya konumunuzu istemeyiz. Kişisel bilgilerinizi para karşılığında satmayız. Bazı
        yasalar (örneğin ABD’nin bazı eyaletlerinde) 1.4’te açıklanan reklamcılığı hedefli reklamcılık için “paylaşım”
        sayabilir; izlemeye izin vermeyerek bunu sınırlayabilirsiniz (bkz. 1.4).
      </p>

      <h2>2. Bilgileri neden kullanıyoruz ve hukuki dayanaklarımız</h2>
      <ul>
        <li>
          <strong>Oyunu, oyuncu hesaplarını, satın almaları ve bulut cüzdanını sağlamak</strong> — sizinle aramızdaki
          sözleşmenin ifası.
        </li>
        <li>
          <strong>Güvenlik, sahteciliğin ve çifte harcamanın önlenmesi, iadelerin yönetimi</strong> — oyunu ve
          oyuncularını koruma konusundaki meşru menfaatimiz ve işlem kayıtlarının saklanmasına ilişkin yasal
          yükümlülükler.
        </li>
        <li>
          <strong>Reklamlar</strong> — yasanın gerektirdiği durumlarda açık rızanız (onay formu ve iOS izleme izni); diğer
          durumlarda ücretsiz bir oyunu reklamlarla finanse etme konusundaki meşru menfaatimiz.
        </li>
      </ul>

      <h2>3. Bilgileri kimler alır</h2>
      <ul>
        <li>
          <strong>Google (Firebase Authentication, Cloud Firestore, Cloud Functions)</strong> — hizmet sağlayıcımız olarak
          oyuncu hesaplarımızı ve sunucumuzu barındırır. Bkz.{" "}
          <a href="https://firebase.google.com/support/privacy">Firebase’de Gizlilik ve Güvenlik</a>.
        </li>
        <li>
          <strong>Apple</strong> — ödemeleri ve Apple ile Giriş Yap’ı{" "}
          <a href="https://www.apple.com/legal/privacy/tr/">Apple Gizlilik Politikası</a> kapsamında işler.
        </li>
        <li>
          <strong>Unity Technologies (Unity IAP SDK)</strong> — uygulama içi satın alma hizmetini yürütmek ve
          iyileştirmek için teknik satın alma olaylarını alır. Bunlar ürün, fiyat, para birimi, Apple işlem kimliği ve
          makbuz, oyuncu kimliğinizin özetinden türetilmiş belirteç, cihaz tanımlayıcısı (IDFV), oturum tanımlayıcısı,
          cihaz modeli, işletim sistemi, dil ile uygulama ve SDK sürümlerini içerir. Bkz.{" "}
          <a href="https://unity.com/legal/game-player-and-app-user-privacy-policy">Unity Gizlilik Politikası</a> ve{" "}
          <a href="https://docs.unity.com/en-us/iap/privacy-and-consent/overview">Unity IAP gizlilik bilgileri</a>.
        </li>
        <li>
          <strong>Google (AdMob ve User Messaging Platform) ve Google’ın çalıştığı reklam teknolojisi iş ortakları</strong>{" "}
          — 1.4’te açıklandığı gibi.
        </li>
        <li>
          <strong>Resmî makamlar</strong> — yasanın gerektirdiği durumlarda.
        </li>
      </ul>
      <p>
        Google, oyuncu hesabı ve cüzdan verilerimizi kendi veri işleme şartları kapsamında bizim adımıza işler. Apple,
        ödemeleri ve Apple ile Giriş’i kendi gizlilik politikasına göre yürütür. Google ve reklam ortakları reklam
        verilerini kendi politikaları kapsamında işler. Unity, satın alma verilerini Unity Veri İşleme Eki kapsamında;
        bağımsız veri sorumlusu olarak hareket ettiği durumlarda ise kendi gizlilik politikasına göre işler. Bu şartlar
        ve politikalar, her sağlayıcının veri koruma yükümlülüklerini açıklar.
      </p>

      <h2>4. Yurt dışına aktarım</h2>
      <p>
        Veritabanımız ve sunucu işlevlerimiz Frankfurt, Almanya’dadır. Firebase Authentication Amerika Birleşik
        Devletleri’nden işletilir. Google, reklam teknolojisi iş ortakları ve Unity bilgileri Amerika Birleşik Devletleri’nde ve başka
        ülkelerde işleyebilir. Bu şirketler, AEA ve Birleşik Krallık’tan yapılan aktarımlar için Avrupa Komisyonu’nun
        Standart Sözleşme Maddeleri gibi güvenceler kullanır.
      </p>

      <h2>5. Bilgileri ne kadar süre saklıyoruz</h2>
      <ul>
        <li>
          <strong>Oyuncu hesabı ve bulut cüzdanı:</strong> hesabınız var olduğu sürece. Kendiliğinden silinmezler.
          Hesabınızı, bağlı ya da misafir olsun, oyunda istediğiniz zaman silebilirsiniz (bkz. 6).
        </li>
        <li>
          <strong>Satın alma kayıtları:</strong> hesabınızı sildiğinizde, tamamlanan her satın almanın kaydı (ürün, Apple
          işlem kimliği, adetler, iade durumu ve tarihler) oyuncu hesabınızla hiçbir bağlantısı kalmadan saklanır;
          böylece aynı satın alma bir daha talep edilemez ve iadeler yürütülebilir. Bu amaçların gerektirdiği süre boyunca
          saklanır.
        </li>
        <li>
          <strong>Sunucu kayıtları:</strong> sunucumuz yalnızca hata türünü kaydeder; oyuncu kimliğinizi veya giriş
          belirteçlerinizi asla kaydetmez. Google Cloud teknik istek kayıtlarını (IP adresi ve isteğin zamanı gibi)
          sınırlı bir süre, genellikle 30 gün saklar. Firebase, girişte kaydettiği IP adreslerini birkaç hafta saklar.
        </li>
        <li>
          <strong>Reklam verileri:</strong> Google ve reklam teknolojisi iş ortakları tarafından kendi politikalarına göre
          saklanır.
        </li>
        <li>
          <strong>Unity’ye gönderilen teknik satın alma verileri:</strong> 3. bölümde bağlantısı verilen Unity veri işleme
          şartları ve gizlilik politikasına göre saklanır. Bizim adımıza işlenen satın alma verilerine ilişkin talepler
          için bize ulaşabilirsiniz (bkz. 7).
        </li>
        <li>
          <strong>Cihazınızdaki veriler:</strong> oyunu silene kadar.
        </li>
      </ul>

      <h2>6. Hesabınızı silme</h2>
      <p>
        Oyuncu hesabınız Apple ile Giriş Yap ile bağlıysa oyunda <strong>Ayarlar › Oyuncu hesabı › Hesabı sil</strong>{" "}
        yolunu izleyin. Onaylayıp Apple ile bir kez daha giriş yaptıktan sonra oyuncu hesabınızı ve Apple Hesabınızla
        bağlantısını kalıcı olarak siler, oyunun Apple ile Giriş Yap yetkisini iptal eder ve bulut cüzdanınızı sileriz:
        satın alınan güçlendiriciler, “Bölüm arası reklamları kaldır” sahipliği, tablo yedekleri, kurulum ve kullanım
        kayıtları. Satın alma kayıtları 5’te açıklandığı gibi hesabınız olmadan saklanır. Tablo ilerlemeniz ve ücretsiz
        güçlendiricileriniz cihazınızda kalır; oyun yeni bir misafir hesapla devam eder.
      </p>
      <p>
        Hesabınızı hiç bağlamadıysanız (misafir) veritabanımızda sizinle ilgili hiçbir şey yoktur; yalnızca anonim oyuncu
        kimliğiniz ve giriş tarihleri Firebase Authentication’da kalır (bkz. 1.1). Bunu da oyunun içinden silebilirsiniz:{" "}
        <strong>Ayarlar › Oyuncu hesabı › Hesabı sil</strong> yolunu izleyip onaylayın; giriş yapmanız gerekmez. Anonim
        oyuncu kimliğinizi sileriz ve oyun yeni bir misafir hesapla devam eder. Oyunu artık açamıyorsanız {MAIL} adresine
        yazın. Misafir hesabında ad veya e-posta adresi bulunmadığından, hesabı bulmamızı sağlayacak bilgiler isteyebiliriz
        (bkz. 7).
      </p>
      <p>
        Silinen satın almalar, aynı Apple Hesabıyla bile daha sonra geri yüklenemez. Hesabı silmek satın almaları iptal
        etmez veya iade etmez; iadeleri Apple <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>{" "}
        adresinden yürütür. Apple ile Giriş Yap’ı oyunla kullanmayı iOS Ayarlar’da Apple Hesabınızın altındaki Apple ile
        Giriş Yap ayarlarından da durdurabilirsiniz. Oyunu artık açamıyorsanız bize e-posta gönderin, yardımcı olalım.
      </p>

      <h2>7. Haklarınız</h2>
      <p>
        Yaşadığınız yere bağlı olarak (örneğin AB ve Birleşik Krallık GDPR’ı veya 6698 sayılı Kişisel Verilerin Korunması
        Kanunu, KVKK kapsamında) bilgilerinize erişme, düzeltilmesini veya silinmesini isteme, işlenmesini kısıtlama veya
        itiraz etme, taşınabilir biçimde alma ve onayınızı istediğiniz zaman geri çekme haklarına sahip olabilirsiniz.
        Ayrıca veri koruma otoritesine (Türkiye’de Kişisel Verileri Koruma Kurumu) şikâyette bulunma hakkınız vardır. Bu
        hakları kullanmak için {MAIL} adresine yazın. Adınızı veya e-posta adresinizi bilmediğimiz için oyuncu hesabınızı
        bulmamızı sağlayacak bilgiler isteyebiliriz. Yasal süreler içinde yanıt veririz.
      </p>

      <h2>8. Çocuklar</h2>
      <p>
        Oyun 13 yaşın veya ülkenizde veri işlemeye onay verebilmek için gereken asgari yaşın altındaki çocuklara yönelik
        değildir. Çocuklardan bilerek kişisel bilgi toplamayız. Bir çocuğun oyunu kullandığını ve bilgilerinin bizde
        olduğunu düşünüyorsanız bize yazın; bu bilgileri sileriz.
      </p>

      <h2>9. Güvenlik</h2>
      <p>
        Oyun ile sunucumuz arasındaki tüm iletişim şifrelidir (HTTPS). Her istek bir Firebase giriş belirteciyle
        doğrulanır, veritabanına oyundan doğrudan erişilemez ve kayıtlarımız oyuncu kimliklerini, belirteçleri ve satın
        alma makbuzlarını içermez. Hiçbir sistem kusursuz güvenli değildir, ancak bilgilerinizi korumak için çalışırız.
      </p>

      <h2>10. Bu politikadaki değişiklikler</h2>
      <p>Bu politikayı değiştirirsek yeni sürümü yeni bir yürürlük tarihiyle bu sayfada yayımlarız.</p>

      <h2>11. İletişim</h2>
      <p>Simple Ideas · {MAIL}</p>
    </article>
  );
}
