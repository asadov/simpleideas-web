import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/site";
import type { LegalLang } from "@/lib/legal";
import { LegalDoc, legalDocMetadata, readLang, type LegalCopy, type SearchParams } from "../LegalDoc";

/*
 * Sledlings: Kart Rush terms of service. This address goes into Google Play and App Store Connect: never move it
 * without a 301. English is the default; `?lang=tr` serves Turkish.
 *
 * Built on the Almost in Orbit terms (../../terms/terms.tsx): same publisher identity, Türkiye law with the player's
 * mandatory consumer rules reserved, and the "If you got the game from the App Store" section with Apple's minimum
 * EULA terms. Sledlings adds online play (Online Race with other players, friend rooms), fair play, coins and the
 * optional rewarded video, and the conditional paragraph on purchases. Keep it in line with the privacy policy
 * (../privacy/page.tsx).
 *
 * Store version 1.0.0 (facts: Race docs/site/store-build-pages.md at game commit 10de45bb, "Said now for later:
 * purchases" from the owner on 27 November 2026): the first version sells nothing for money; coins are won in races
 * and by watching an optional video; a diamond shop and a gold shop are planned, so "items" already says how
 * purchases would work, without saying they are in the game.
 */

const PAGE_PATH = "/sledlings/terms";
const TERMS_EFFECTIVE = "2026-11-27";

const LINKS = {
  appleEula: "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/",
  appleMediaTerms: "https://www.apple.com/legal/internet-services/itunes/",
  appleMediaTermsTr: "https://www.apple.com/legal/internet-services/itunes/tr/terms.html",
  playTerms: "https://play.google.com/about/play-terms/",
  appleRefund: "https://support.apple.com/118223",
  playRefund: "https://support.google.com/googleplay/answer/2479637",
};

const mail = <a href={`mailto:${CONTACT_EMAIL}?subject=Sledlings%20terms`}>{CONTACT_EMAIL}</a>;

const COPY: Record<LegalLang, LegalCopy> = {
  en: {
    metaTitle: "Terms of Service · Sledlings: Kart Rush",
    metaDescription:
      "The terms for playing Sledlings: Kart Rush on iOS and Android: your licence, online play with Online Race and friends’ rooms, fair play, coins, ads and your rights.",
    title: "Terms of Service",
    meta: (
      <>
        Sledlings: Kart Rush · Effective date: <time dateTime={TERMS_EFFECTIVE}>27 November 2026</time>
      </>
    ),
    intro: (
      <>
        These are the rules for playing Sledlings: Kart Rush on iOS and Android, written to be short and plain. How the
        game handles data is explained in the <Link href="/sledlings/privacy">privacy policy</Link>.
      </>
    ),
    summaryLabel: "In short",
    summary: [
      "The game is for players aged 13 and over, for personal, non-commercial use. The App Store or Google Play terms also apply.",
      "It is free to play and sells nothing for money. Coins are won in races, or by choosing to watch a video after a race. Coins have no value outside the game.",
      "Online play is optional. In Online Race you meet players you do not know: you can block, mute or report any of them. Race fair: no cheats, no programs that play for you and no modified versions of the game.",
      "If the game sells something in a later version, payments and refunds go through Apple or Google.",
      "Nothing here takes away the consumer rights the law gives you.",
      <>Questions: {mail}</>,
    ],
    contentsLabel: "On this page",
    sections: [
      {
        id: "who",
        title: "Who we are",
        body: (
          <>
            <p>
              Sledlings: Kart Rush is published by Salih Salihoğlu, an independent developer in Türkiye who publishes as
              Simple Ideas (“we”, “us”). Contact: {mail}.
            </p>
            <p>
              These terms apply when you download, install or play the game. They take effect on 27 November 2026. If
              you do not agree with them, please do not use the game.
            </p>
          </>
        ),
      },
      {
        id: "licence",
        title: "Your licence to play",
        body: (
          <>
            <p>
              The game is meant for players aged 13 and over. We give you a personal, non-commercial and
              non-transferable licence to install and play it on devices you own or control. The game, including its
              code, characters, art, music and text, belongs to Simple Ideas or its licensors. The licence lets you play
              it; it does not give you ownership of it.
            </p>
            <p>
              The rules of the store you got the game from also apply. On Google Play that is the{" "}
              <a href={LINKS.playTerms}>Google Play Terms of Service</a>. On the App Store that is{" "}
              <a href={LINKS.appleEula}>Apple’s Standard EULA</a> (Licensed Application End User License Agreement),
              together with the next section. Support for the game comes from us, not from Apple or Google.
            </p>
          </>
        ),
      },
      {
        id: "app-store",
        title: "If you got the game from the App Store",
        body: (
          <>
            <p>On iOS, these points also apply:</p>
            <ul>
              <li>
                These terms are between you and us, not Apple. We, not Apple, are solely responsible for the game and
                its content.
              </li>
              <li>
                Your licence covers Apple-branded devices that you own or control, as allowed by the Usage Rules in the{" "}
                <a href={LINKS.appleMediaTerms}>Apple Media Services Terms and Conditions</a>.
              </li>
              <li>Apple has no obligation to provide maintenance or support for the game.</li>
              <li>
                If the game fails to meet an applicable warranty, you can tell Apple, and Apple will refund the price you
                paid for the game, if any. To the extent the law allows, Apple has no other warranty obligation for the
                game.
              </li>
              <li>
                We, not Apple, are responsible for handling any claims about the game, such as product liability
                claims, claims that it fails to meet a legal or regulatory requirement, consumer protection claims, and
                claims that it infringes someone else’s intellectual property rights.
              </li>
              <li>
                You confirm that you are not located in a country that is subject to a US Government embargo or that the
                US Government has designated as “terrorist supporting”, and that you are not on any US Government list
                of prohibited or restricted parties.
              </li>
              <li>
                When you use the game, you must also follow the terms of other services you use with it, such as Game
                Center or your mobile data plan.
              </li>
              <li>
                Apple and its subsidiaries are third-party beneficiaries of these terms. When you accept them, Apple has
                the right to enforce them against you.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: "online",
        title: "Online play, Online Race and friends’ rooms",
        body: (
          <>
            <p>
              Online play is optional. It starts the first time you press Online Race or Friends in the game, after
              the game asks you to agree. It gives you an anonymous player account, a name made of two words from a
              list, a friend code and a friends list.
            </p>
            <p>
              <strong>Online Race</strong> puts you in a quick race with other players who are searching at the same
              time, people you may not know. They see your name, rider, vehicle and costume, and they can send you a
              friend request.
            </p>
            <p>
              <strong>Friends’ rooms.</strong> You can open a room from Friends, or join one with its code or an
              invite. Anyone who has a room’s code can join it, so share codes only with people you want to race. With{" "}
              <strong>Private room</strong> on, your friends can no longer join from their friends list, but the code
              and invites still work. With <strong>Open to others</strong> on, Online Race players can join too. The
              host can remove a player who came in by code or invite from the room.
            </p>
            <p>
              You can block, mute or report any player. A report opens an email to us in your own mail app; we look at
              the reports we receive and may act on them as described under <a href="#fair-play">fair play</a>.
            </p>
            <p>
              There is no chat. Players can send four fixed phrases and stickers, nothing typed. Online play needs an
              internet connection and runs on Unity’s online services, so it may not always be available.
            </p>
          </>
        ),
      },
      {
        id: "fair-play",
        title: "Fair play",
        body: (
          <>
            <p>When you play, and above all when you race other players, do not:</p>
            <ul>
              <li>use cheats, programs that play for you, or tools that change the game, its memory, its saves or its network traffic;</li>
              <li>use or share a modified version of the game;</li>
              <li>exploit bugs to win races, medals or items, or tamper with race data or results;</li>
              <li>use someone else’s player account, or sell, share or give away your own;</li>
              <li>disrupt rooms or the online service, harass other players, or try to get into data that is not yours;</li>
              <li>send false reports about other players;</li>
              <li>reverse engineer, decompile or disassemble the game, except where the law allows it;</li>
              <li>get purchases without paying, or otherwise get around the purchase system;</li>
              <li>copy, sell, rent or redistribute the game or its content.</li>
            </ul>
            <p>
              If you do any of these, your licence ends, and we may remove you from online play or suspend or delete
              your online account.
            </p>
          </>
        ),
      },
      {
        id: "items",
        title: "Virtual items and purchases",
        body: (
          <>
            <p>
              The game is free to play, and this version sells nothing for money. You win coins in races. After a race
              that paid coins, you can choose to watch a short video ad to double that race’s coins; the game never
              starts an ad by itself.
            </p>
            <ul>
              <li>
                Coins, medals and other in-game items are part of your licence to play, not property you own. They
                have no value in money and cannot be exchanged for cash, or transferred or sold to another player.
              </li>
              <li>
                If a later version offers purchases (for example diamonds or gold), the same applies to diamonds and to
                what they buy. Payment, refunds and billing are then handled by the store that took the payment, Apple
                or Google, under its own terms and policies and as the law allows. Prices are shown in the store before
                you buy. To ask for a refund, use <a href={LINKS.appleRefund}>Apple’s refund request</a> or{" "}
                <a href={LINKS.playRefund}>Google Play’s refund process</a>. The game never sees your payment details.
              </li>
            </ul>
            <p>
              We may change courses, items, balance and other content in updates, for example to fix problems or keep
              races fair.
            </p>
          </>
        ),
      },
      {
        id: "progress",
        title: "Your progress",
        body: (
          <p>
            Your single-player progress is saved on your device only. It can be lost if you delete the game, clear its
            data or lose your device, and we cannot recover it. Your online profile, friends list and the results of
            your races in rooms are kept with your online account until you delete it.
          </p>
        ),
      },
      {
        id: "service",
        title: "Changes to the game and the online service",
        body: (
          <p>
            We may update the game and change, suspend or end online features, for example when a service we rely on
            changes. If we plan to end online play for good, we will say so in the game or on this website in advance
            where we reasonably can. Playing alone does not depend on the online service.
          </p>
        ),
      },
      {
        id: "ending",
        title: "Deleting your account and ending these terms",
        body: (
          <p>
            You can stop playing at any time. You can delete your online account in the game at Settings › Services ›
            Privacy &amp; data › Delete account, or by email; see{" "}
            <Link href="/sledlings/delete-account">how to delete your account</Link>. If you break these terms, your
            licence ends, and we may suspend or delete your online account.
          </p>
        ),
      },
      {
        id: "liability",
        title: "Disclaimer and limits of liability",
        body: (
          <>
            <p>
              We work to keep the game fun and stable, but it is provided “as is” and “as available”. We do not promise
              that it will run without interruptions or errors, on every device, or that features that depend on other
              services, such as online play, cloud save and purchases, will always be available.
            </p>
            <p>
              To the extent the law allows, we are not liable for indirect or consequential losses, or for lost progress
              or in-game items. Nothing in these terms limits or excludes liability where the law does not allow that,
              for example for harm caused intentionally or through gross negligence.
            </p>
          </>
        ),
      },
      {
        id: "consumer",
        title: "Your consumer rights",
        body: (
          <p>
            If you use the game as a consumer, you keep every right that mandatory consumer law gives you where you
            live, for example in the European Union, the United Kingdom or Türkiye. These terms do not limit those
            rights. If part of these terms conflicts with such a law, the law applies and the rest of the terms stays in
            effect.
          </p>
        ),
      },
      {
        id: "law",
        title: "Governing law",
        body: (
          <>
            <p>
              These terms are governed by the law of the Republic of Türkiye. If you are a consumer living in another
              country, the mandatory consumer protection rules of that country still apply to you, and you may be able
              to bring a claim in the courts where you live.
            </p>
            <p>If something goes wrong, please write to us first. Most problems can be solved quickly.</p>
          </>
        ),
      },
      {
        id: "changes",
        title: "Changes to these terms",
        body: (
          <p>
            We may update these terms, for example when the game, the store rules or the law change. The effective date
            at the top of this page shows the current version, and updated terms apply from that date. If you do not
            agree with a change, you can stop playing. Your rights under consumer law are not affected.
          </p>
        ),
      },
      {
        id: "contact",
        title: "Contact",
        body: (
          <p>
            Questions about these terms: {mail}. Questions about data: see the{" "}
            <Link href="/sledlings/privacy">privacy policy</Link>.
          </p>
        ),
      },
    ],
  },
  tr: {
    metaTitle: "Kullanım Şartları · Sledlings: Kart Rush",
    metaDescription:
      "Sledlings: Kart Rush’ı iOS ve Android’de oynamanın şartları: kullanım lisansı, Online Race ve arkadaş odalarıyla çevrim içi oyun, adil oyun, jetonlar, reklamlar ve haklarınız.",
    title: "Kullanım Şartları",
    meta: (
      <>
        <span lang="en">Sledlings: Kart Rush</span> · Yürürlük tarihi:{" "}
        <time dateTime={TERMS_EFFECTIVE}>27 Kasım 2026</time>
      </>
    ),
    intro: (
      <>
        <span lang="en">Sledlings: Kart Rush</span>’ı iOS ve Android’de oynamanın kuralları; kısa ve sade tutuldu.
        Oyunun verileri nasıl işlediği <Link href="/sledlings/privacy?lang=tr">gizlilik politikasında</Link> anlatılır.
      </>
    ),
    summaryLabel: "Kısaca",
    summary: [
      "Oyun 13 yaş ve üzeri oyuncular içindir; kişisel ve ticari olmayan kullanım içindir. App Store veya Google Play şartları da geçerlidir.",
      "Ücretsiz oynanır ve parayla hiçbir şey satmaz. Jetonlar yarışlarda ya da bir yarıştan sonra isteğe bağlı bir video izlenerek kazanılır. Jetonların oyun dışında değeri yoktur.",
      "Çevrim içi oyun isteğe bağlıdır. Online Race’te tanımadığınız oyuncularla karşılaşırsınız: herhangi birini engelleyebilir, sessize alabilir veya bildirebilirsiniz. Adil yarışın: hile, sizin yerinize oynayan programlar veya oyunun değiştirilmiş sürümleri yok.",
      "Oyun ileriki bir sürümde bir şey satarsa ödeme ve iadeler Apple veya Google üzerinden yürür.",
      "Buradaki hiçbir şey yasanın size tanıdığı tüketici haklarını ortadan kaldırmaz.",
      <>Sorularınız için: {mail}</>,
    ],
    contentsLabel: "Bu sayfada",
    sections: [
      {
        id: "who",
        title: "Biz kimiz",
        body: (
          <>
            <p>
              <span lang="en">Sledlings: Kart Rush</span>’ı, Simple Ideas adıyla yayın yapan, Türkiye’de bağımsız bir
              geliştirici olan Salih Salihoğlu yayımlar (“biz”). İletişim: {mail}.
            </p>
            <p>
              Bu şartlar oyunu indirdiğinizde, kurduğunuzda veya oynadığınızda geçerlidir ve 27 Kasım 2026’da yürürlüğe
              girer. Kabul etmiyorsanız lütfen oyunu kullanmayın.
            </p>
          </>
        ),
      },
      {
        id: "licence",
        title: "Oynama lisansınız",
        body: (
          <>
            <p>
              Oyun 13 yaş ve üzeri oyuncular içindir. Size, sahip olduğunuz veya kontrol ettiğiniz cihazlarda oyunu
              kurup oynamanız için kişisel, ticari olmayan ve devredilemez bir lisans veriyoruz. Kodu, karakterleri,
              görselleri, müziği ve metinleriyle oyun Simple Ideas’a veya lisans verenlerine aittir. Lisans oyunu
              oynamanızı sağlar; size oyunun mülkiyetini vermez.
            </p>
            <p>
              Oyunu aldığınız mağazanın kuralları da geçerlidir. Google Play’de bu,{" "}
              <a href={LINKS.playTerms}>Google Play Hizmet Şartları</a>’dır. App Store’da ise{" "}
              <a href={LINKS.appleEula}>Apple’ın Standart Son Kullanıcı Lisans Sözleşmesi</a> (EULA) ile bir sonraki
              bölümdür. Oyunun desteği Apple veya Google’dan değil, bizden gelir.
            </p>
          </>
        ),
      },
      {
        id: "app-store",
        title: "Oyunu App Store’dan aldıysanız",
        body: (
          <>
            <p>iOS’ta ayrıca şunlar geçerlidir:</p>
            <ul>
              <li>
                Bu şartlar Apple ile değil, sizinle bizim aramızdadır. Oyundan ve içeriğinden Apple değil, yalnızca biz
                sorumluyuz.
              </li>
              <li>
                Lisansınız, <a href={LINKS.appleMediaTermsTr}>Apple Medya Hizmetleri Hüküm ve Koşulları</a>’ndaki
                Kullanım Kuralları’nın izin verdiği ölçüde, sahip olduğunuz veya kontrol ettiğiniz Apple markalı cihazları
                kapsar.
              </li>
              <li>Apple’ın oyun için bakım veya destek sağlama yükümlülüğü yoktur.</li>
              <li>
                Oyun geçerli bir garantiyi karşılamazsa Apple’a bildirebilirsiniz; Apple, varsa oyun için ödediğiniz
                bedeli iade eder. Yasaların izin verdiği ölçüde Apple’ın oyunla ilgili başka bir garanti yükümlülüğü
                yoktur.
              </li>
              <li>
                Oyunla ilgili talepleri, örneğin ürün sorumluluğu, yasal veya düzenleyici bir gerekliliğe uymama,
                tüketicinin korunması ve başkasının fikri mülkiyet haklarını ihlal iddialarını Apple değil, biz ele
                alırız.
              </li>
              <li>
                ABD hükümetinin ambargo uyguladığı veya “teröre destek veren” olarak tanımladığı bir ülkede
                bulunmadığınızı ve ABD hükümetinin yasaklı ya da kısıtlı taraflar listelerinin hiçbirinde yer
                almadığınızı beyan edersiniz.
              </li>
              <li>
                Oyunu kullanırken onunla birlikte kullandığınız diğer hizmetlerin, örneğin Game Center’ın veya mobil veri
                tarifenizin şartlarına da uymanız gerekir.
              </li>
              <li>
                Apple ve bağlı şirketleri bu şartların üçüncü taraf lehtarıdır. Şartları kabul ettiğinizde Apple bunları
                size karşı uygulama hakkına sahip olur.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: "online",
        title: "Çevrim içi oyun, Online Race ve arkadaş odaları",
        body: (
          <>
            <p>
              Çevrim içi oyun isteğe bağlıdır. Oyunda <span lang="en">Online Race</span> veya{" "}
              <span lang="en">Friends</span> düğmesine ilk bastığınızda, oyun onayınızı istedikten sonra başlar. Size
              anonim bir oyuncu hesabı, listeden seçilen iki kelimelik bir ad, bir arkadaş kodu ve bir arkadaş listesi
              verir.
            </p>
            <p>
              <strong lang="en">Online Race</strong> sizi aynı anda arama yapan, tanımıyor olabileceğiniz oyuncularla
              hızlı bir yarışa koyar. Bu oyuncular adınızı, karakterinizi, aracınızı ve kostümünüzü görür ve size
              arkadaşlık isteği gönderebilir.
            </p>
            <p>
              <strong>Arkadaş odaları.</strong> <span lang="en">Friends</span> bölümünden bir oda açabilir ya da koduyla
              veya bir davetle bir odaya katılabilirsiniz. Bir odanın kodunu bilen herkes odaya katılabilir; bu yüzden
              kodları yalnızca birlikte yarışmak istediğiniz kişilerle paylaşın. <strong lang="en">Private room</strong>{" "}
              açıkken arkadaşlarınız odaya artık arkadaş listelerinden katılamaz, ama kod ve davetler yine çalışır.{" "}
              <strong lang="en">Open to others</strong> açıkken Online Race oyuncuları da katılabilir. Oda sahibi, kodla
              veya davetle gelen bir oyuncuyu odadan çıkarabilir.
            </p>
            <p>
              Herhangi bir oyuncuyu engelleyebilir, sessize alabilir veya bildirebilirsiniz. Bildirim, kendi e-posta
              uygulamanızda bize gönderilecek bir e-posta açar; aldığımız bildirimlere bakar ve{" "}
              <a href="#fair-play">adil oyun</a> bölümünde anlatıldığı gibi işlem yapabiliriz.
            </p>
            <p>
              Sohbet yoktur. Oyuncular dört hazır ifade ve çıkartma gönderebilir, yazı yazamaz. Çevrim içi oyun internet
              bağlantısı gerektirir ve Unity’nin çevrim içi hizmetleri üzerinde çalışır; bu yüzden her zaman
              kullanılamayabilir.
            </p>
          </>
        ),
      },
      {
        id: "fair-play",
        title: "Adil oyun",
        body: (
          <>
            <p>Oynarken, özellikle de başka oyuncularla yarışırken şunları yapmayın:</p>
            <ul>
              <li>hile, sizin yerinize oynayan programlar ya da oyunu, belleğini, kayıtlarını veya ağ trafiğini değiştiren araçlar kullanmak;</li>
              <li>oyunun değiştirilmiş bir sürümünü kullanmak veya paylaşmak;</li>
              <li>yarış, madalya ya da öğe kazanmak için hatalardan yararlanmak, yarış verilerini veya sonuçlarını kurcalamak;</li>
              <li>başkasının oyuncu hesabını kullanmak ya da kendi hesabınızı satmak, paylaşmak veya başkasına vermek;</li>
              <li>odaları veya çevrim içi hizmeti bozmak, diğer oyunculara rahatsızlık vermek ya da size ait olmayan verilere erişmeye çalışmak;</li>
              <li>diğer oyuncular hakkında asılsız bildirimde bulunmak;</li>
              <li>yasanın izin verdiği durumlar dışında oyunu tersine mühendislikle incelemek, kaynak koda dönüştürmek veya parçalarına ayırmak;</li>
              <li>satın almaları ödeme yapmadan elde etmek ya da satın alma sistemini başka bir yolla aşmak;</li>
              <li>oyunu veya içeriğini kopyalamak, satmak, kiralamak ya da yeniden dağıtmak.</li>
            </ul>
            <p>
              Bunlardan birini yaparsanız lisansınız sona erer; sizi çevrim içi oyundan çıkarabilir, çevrim içi hesabınızı
              askıya alabilir veya silebiliriz.
            </p>
          </>
        ),
      },
      {
        id: "items",
        title: "Sanal öğeler ve satın almalar",
        body: (
          <>
            <p>
              Oyun ücretsiz oynanır ve bu sürüm parayla hiçbir şey satmaz. Jetonları yarışlarda kazanırsınız. Jeton
              kazandıran bir yarıştan sonra, o yarışın jetonlarını ikiye katlamak için kısa bir reklam videosu izlemeyi
              seçebilirsiniz; oyun hiçbir reklamı kendiliğinden başlatmaz.
            </p>
            <ul>
              <li>
                Jetonlar, madalyalar ve diğer oyun içi öğeler sahip olduğunuz bir mülk değil, oynama lisansınızın
                parçasıdır. Parasal değerleri yoktur; nakde çevrilemez, başka bir oyuncuya devredilemez veya
                satılamazlar.
              </li>
              <li>
                İleriki bir sürüm satın alma sunarsa (örneğin elmas veya altın), aynı kural elmaslar ve onlarla alınanlar
                için de geçerlidir. Ödeme, iade ve faturalandırmayı o zaman ödemeyi alan mağaza, yani Apple veya Google,
                kendi şart ve politikalarına göre ve yasanın izin verdiği ölçüde yürütür. Fiyatlar satın almadan önce
                mağazada gösterilir. İade istemek için <a href={LINKS.appleRefund}>Apple’ın iade talebini</a> veya{" "}
                <a href={LINKS.playRefund}>Google Play’in iade sürecini</a> kullanın. Oyun ödeme bilgilerinizi hiçbir
                zaman görmez.
              </li>
            </ul>
            <p>
              Güncellemelerde parkurları, öğeleri, dengeyi ve diğer içeriği değiştirebiliriz; örneğin sorunları
              düzeltmek veya yarışları adil tutmak için.
            </p>
          </>
        ),
      },
      {
        id: "progress",
        title: "İlerlemeniz",
        body: (
          <p>
            Tek oyunculu ilerlemeniz yalnızca cihazınızda saklanır. Oyunu silerseniz, verilerini temizlerseniz veya
            cihazınızı kaybederseniz kaybolabilir ve onu geri getiremeyiz. Çevrim içi profiliniz, arkadaş listeniz ve
            odalardaki yarışlarınızın sonuçları, siz silene kadar çevrim içi hesabınızla birlikte tutulur.
          </p>
        ),
      },
      {
        id: "service",
        title: "Oyunda ve çevrim içi hizmette değişiklikler",
        body: (
          <p>
            Oyunu güncelleyebilir, çevrim içi özellikleri değiştirebilir, askıya alabilir veya sonlandırabiliriz;
            örneğin dayandığımız bir hizmet değiştiğinde. Çevrim içi oyunu tamamen kapatmayı planlarsak, makul ölçüde
            mümkün olduğunda bunu önceden oyunda veya bu web sitesinde duyururuz. Tek başınıza oynamak çevrim içi
            hizmete bağlı değildir.
          </p>
        ),
      },
      {
        id: "ending",
        title: "Hesabınızı silmek ve şartların sona ermesi",
        body: (
          <p>
            İstediğiniz zaman oynamayı bırakabilirsiniz. Çevrim içi hesabınızı oyunda{" "}
            <span lang="en">Settings › Services › Privacy &amp; data › Delete account</span> yolundan veya e-postayla
            silebilirsiniz;
            bkz. <Link href="/sledlings/delete-account?lang=tr">hesabınızı nasıl silersiniz</Link>. Bu şartları ihlal
            ederseniz lisansınız sona erer; çevrim içi hesabınızı askıya alabilir veya silebiliriz.
          </p>
        ),
      },
      {
        id: "liability",
        title: "Sorumluluk reddi ve sınırı",
        body: (
          <>
            <p>
              Oyunu eğlenceli ve kararlı tutmak için çalışırız, ancak oyun “olduğu gibi” ve “mevcut haliyle” sunulur.
              Kesintisiz veya hatasız çalışacağını, her cihazda çalışacağını ya da çevrim içi oyun, bulut kayıt ve satın
              almalar gibi başka hizmetlere bağlı özelliklerin her zaman kullanılabilir olacağını garanti etmeyiz.
            </p>
            <p>
              Yasaların izin verdiği ölçüde dolaylı zararlardan, kaybolan ilerlemeden veya oyun içi öğelerden sorumlu
              değiliz. Bu şartlardaki hiçbir hüküm, yasanın sınırlanmasına izin vermediği sorumluluğu, örneğin kasıtla
              veya ağır ihmalle verilen zararı, sınırlamaz ya da kaldırmaz.
            </p>
          </>
        ),
      },
      {
        id: "consumer",
        title: "Tüketici haklarınız",
        body: (
          <p>
            Oyunu tüketici olarak kullanıyorsanız yaşadığınız yerdeki, örneğin Avrupa Birliği, Birleşik Krallık veya
            Türkiye’deki zorunlu tüketici mevzuatının size tanıdığı tüm haklar saklıdır. Bu şartlar o hakları
            kısıtlamaz. Bu şartların bir kısmı böyle bir yasayla çelişirse yasa uygulanır ve şartların geri kalanı
            geçerliliğini korur.
          </p>
        ),
      },
      {
        id: "law",
        title: "Uygulanacak hukuk",
        body: (
          <>
            <p>
              Bu şartlara Türkiye Cumhuriyeti hukuku uygulanır. Başka bir ülkede yaşayan bir tüketiciyseniz o ülkenin
              zorunlu tüketici koruma kuralları sizin için geçerliliğini korur; o ülkenin yasası izin veriyorsa
              yaşadığınız yerdeki mahkemelere de başvurabilirsiniz.
            </p>
            <p>Bir sorun olursa lütfen önce bize yazın. Çoğu sorun hızla çözülür.</p>
          </>
        ),
      },
      {
        id: "changes",
        title: "Bu şartlardaki değişiklikler",
        body: (
          <p>
            Bu şartları, örneğin oyun, mağaza kuralları veya yasalar değiştiğinde güncelleyebiliriz. Sayfanın başındaki
            yürürlük tarihi güncel sürümü gösterir; güncellenen şartlar o tarihten itibaren geçerlidir. Bir değişikliği
            kabul etmiyorsanız oynamayı bırakabilirsiniz. Tüketici mevzuatından doğan haklarınız etkilenmez.
          </p>
        ),
      },
      {
        id: "contact",
        title: "İletişim",
        body: (
          <p>
            Bu şartlarla ilgili sorular: {mail}. Verilerle ilgili sorular için{" "}
            <Link href="/sledlings/privacy?lang=tr">gizlilik politikasına</Link> bakın.
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

export default async function SledlingsTermsPage({ searchParams }: { searchParams: SearchParams }) {
  const lang = await readLang(searchParams);
  return <LegalDoc path={PAGE_PATH} copy={COPY[lang]} lang={lang} />;
}
