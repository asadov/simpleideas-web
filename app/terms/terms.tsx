import type { ReactNode } from "react";
import { CONTACT_EMAIL } from "@/lib/site";

/*
 * Almost in Orbit terms of use: the text, in English and Turkish. The address
 * https://www.simpleideas.net/terms goes into Google Play ("App-level trader status and Terms of Service"),
 * so never move it without a 301.
 *
 * The ad, Premium and earlier-buyer rules were checked against the game source on 13 November 2026
 * (Assets/_Scripts/GameOverUI.cs, Monetization/InterstitialPolicy, AdMobAds, AppleLegacyOwnership and the
 * then uncommitted AndroidLegacyOwnership for 3.1.1). They must match the privacy policy (../privacy/policy.tsx).
 * If an ad placement, what Premium does or the earlier-buyer check changes, update BOTH languages here and
 * there, and TERMS_EFFECTIVE.
 *
 * The "app-store" section carries Apple's minimum terms for a developer EULA (acknowledgement, scope, support,
 * warranty, product claims, IP claims, legal compliance, third-party terms, third-party beneficiary), at Salih's
 * request, so the page also holds up next to the Standard EULA. Apple's list also asks for a postal address;
 * none is published here (only the name and email already on the privacy page).
 */

export type TermsLang = "en" | "tr";

export const TERMS_EFFECTIVE = "2026-11-13";

export type TermsSection = { id: string; title: string; body: ReactNode };
export type TermsCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  /** The h1 is set in capitals; in Turkish text the game name keeps lang="en" so it never becomes "ORBİT". */
  title: ReactNode;
  lede: string;
  effectiveLabel: string;
  effectiveText: string;
  scope: ReactNode;
  summaryTitle: string;
  summary: ReactNode[];
  contentsLabel: string;
  sections: TermsSection[];
};

const mail = <a href={`mailto:${CONTACT_EMAIL}?subject=Almost%20in%20Orbit%20terms`}>{CONTACT_EMAIL}</a>;

const LINKS = {
  appleEula: "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/",
  appleMediaTerms: "https://www.apple.com/legal/internet-services/itunes/",
  appleMediaTermsTr: "https://www.apple.com/legal/internet-services/itunes/tr/terms.html",
  playTerms: "https://play.google.com/about/play-terms/",
  appleRefund: "https://support.apple.com/118223",
  playRefund: "https://support.google.com/googleplay/answer/2479637",
};

const en: TermsCopy = {
  metaTitle: "Almost in Orbit — Terms of Use",
  metaDescription:
    "The terms for playing Almost in Orbit on iOS and Android: your licence, ads, Premium, gold packs, earlier buyers and your rights.",
  eyebrow: "Simple Ideas · iOS · Android",
  title: "Almost in Orbit — Terms of Use",
  lede: "These are the rules for playing Almost in Orbit, written to be short and plain. They cover the game on iOS and Android.",
  effectiveLabel: "Effective date",
  effectiveText: "13 November 2026",
  scope: (
    <>
      These terms are written for version 3.1.0 and later, which is free to play. Until your game has that update,
      the parts about ads, Premium and gold packs do not apply to you. How the game handles data is explained in
      the <a href="/privacy">privacy policy</a>.
    </>
  ),
  summaryTitle: "In short",
  summary: [
    "The game is for your own, non-commercial use. The App Store or Google Play terms also apply.",
    "From version 3.1.0 it is free to play. Rewarded ads are optional. Without Premium, a full-screen ad may appear now and then after a defeat. There are no ads during play.",
    "Premium is a one-time purchase that does not expire. Gold packs are in-game currency with no cash value.",
    "Payments and refunds go through Apple or Google.",
    "Bought the paid version (3.0 or earlier)? You get Premium at no extra charge.",
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
            Almost in Orbit is made by Salih Salihoğlu, an independent developer in Türkiye who publishes as Simple
            Ideas (“we”, “us”). Contact: {mail}.
          </p>
          <p>
            These terms apply when you download, install or play Almost in Orbit on iOS or Android. They take effect on
            13 November 2026. If you do not agree with them, please do not use the game.
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
            We give you a personal, non-commercial and non-transferable licence to install and play the game on devices
            you own or control. The game, including its code, art, music and text, belongs to Simple Ideas or its
            licensors. The licence lets you play it; it does not give you ownership of it.
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
              These terms are between you and us, not Apple. We, not Apple, are solely responsible for the game and its
              content.
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
              We, not Apple, are responsible for handling any claims about the game, such as product liability claims,
              claims that it fails to meet a legal or regulatory requirement, consumer protection claims, and claims that
              it infringes someone else’s intellectual property rights.
            </li>
            <li>
              You confirm that you are not located in a country that is subject to a US Government embargo or that the
              US Government has designated as “terrorist supporting”, and that you are not on any US Government list of
              prohibited or restricted parties.
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
      id: "ads",
      title: "Free to play, with ads",
      body: (
        <>
          <p>From version 3.1.0 the game is free to play. Ads come from Google AdMob:</p>
          <ul>
            <li>
              <strong>Optional rewarded ads.</strong> After your first defeat in a run you can watch an ad to continue
              once in that run. If you are defeated again after continuing, you can watch an ad to double the gold from
              that run. Both are your choice. Declining never stops you from starting a new run.
            </li>
            <li>
              <strong>Full-screen ads.</strong> If you do not have Premium, a full-screen ad may appear from time to time
              when you return to the main menu after a defeat. How often it appears is limited.
            </li>
          </ul>
          <p>
            There are no ads during play and no banner ads. How ads use data, and how to change your ad choices, is
            explained in the <a href="/privacy#ads">privacy policy</a>.
          </p>
        </>
      ),
    },
    {
      id: "purchases",
      title: "Purchases",
      body: (
        <>
          <ul>
            <li>
              <strong>Premium</strong> is a one-time purchase and does not expire. It removes the full-screen ads and
              lets you use the one continue per run without watching an ad. It does not give unlimited lives or extra
              continues. Doubling the gold of a run stays an optional rewarded ad for everyone. Premium belongs to your
              App Store or Google Play account and can be restored with the same account, for example after reinstalling.
            </li>
            <li>
              <strong>Gold packs</strong> are consumable virtual currency for use in the game. Gold has no real-money
              value. It cannot be exchanged for cash or for anything outside the game, and it cannot be transferred or
              sold to another player. Bought gold is added to your progress like gold you earn; the store cannot restore
              it later.
            </li>
          </ul>
          <p>
            Payment, refunds and billing are handled by Apple or Google under their own terms and policies. Prices are
            shown in the store before you buy. To ask for a refund, use{" "}
            <a href={LINKS.appleRefund}>Apple’s refund request</a> or{" "}
            <a href={LINKS.playRefund}>Google Play’s refund process</a>. We never see your card details.
          </p>
        </>
      ),
    },
    {
      id: "earlier-buyers",
      title: "If you bought the paid version",
      body: (
        <>
          <p>If you bought the paid version of Almost in Orbit (3.0 or earlier), you get Premium at no extra charge:</p>
          <ul>
            <li>
              <strong>iOS 16 or later:</strong> Premium turns on automatically with the same Apple Account you bought
              the game with.
            </li>
            <li>
              <strong>Android:</strong> Premium turns on automatically when you update the game on the same device
              where you played the paid version.
            </li>
            <li>
              <strong>Anything else</strong>, for example iOS 15, a reinstall or a new Android device: write to{" "}
              <a href="/support">support</a> and we will help. We may ask for a store receipt or order number.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "items",
      title: "Virtual items and progress",
      body: (
        <>
          <p>
            Gold, upgrades, ships and other in-game items have no value outside the game. They are part of your licence
            to play, not property you own. We may change game balance, gold prices, items and other content in updates,
            for example to fix problems or keep the game fair.
          </p>
          <p>
            Your progress is saved on your device. If you use the optional cloud save through Game Center (iCloud) or
            Google Play Games, a copy of your permanent progress is kept in your own account. Without it, your progress,
            including gold you bought, can be lost if you delete the game, clear its data or lose your device. We do not
            keep a copy, so we cannot recover it.
          </p>
        </>
      ),
    },
    {
      id: "rules",
      title: "What is not allowed",
      body: (
        <>
          <ul>
            <li>using cheats, bots or tools that change the game, its memory or its saves;</li>
            <li>using or sharing a modified version of the game;</li>
            <li>reverse engineering, decompiling or disassembling the game, except where the law allows it;</li>
            <li>getting Premium, gold or other purchases without paying, or otherwise getting around the purchase system;</li>
            <li>copying, selling, renting or redistributing the game or its content.</li>
          </ul>
          <p>If you do any of these, your licence ends and we may decline support for that copy of the game.</p>
        </>
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
            services, such as ads, purchases and cloud save, will always be available.
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
          If you use the game as a consumer, you keep every right that mandatory consumer law gives you where you live,
          for example in the European Union, the United Kingdom or Türkiye. These terms do not limit those rights. If
          part of these terms conflicts with such a law, the law applies and the rest of the terms stays in effect.
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
            country, the mandatory consumer protection rules of that country still apply to you, and you may be able to
            bring a claim in the courts where you live.
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
        <>
          <p>
            Questions about these terms, purchases or Premium: the <a href="/support">support page</a> or {mail}.
          </p>
          <p>
            Questions about data: see the <a href="/privacy">privacy policy</a>.
          </p>
        </>
      ),
    },
  ],
};

const tr: TermsCopy = {
  metaTitle: "Almost in Orbit — Kullanım Şartları",
  metaDescription:
    "Almost in Orbit’i iOS ve Android’de oynamanın şartları: kullanım lisansı, reklamlar, Premium, altın paketleri, eski alıcılar ve haklarınız.",
  eyebrow: "Simple Ideas · iOS · Android",
  title: (
    <>
      <span lang="en">Almost in Orbit</span> — Kullanım Şartları
    </>
  ),
  lede: "Almost in Orbit’i oynamanın kuralları; kısa ve sade tutuldu. Oyunun iOS ve Android sürümlerini kapsar.",
  effectiveLabel: "Yürürlük tarihi",
  effectiveText: "13 Kasım 2026",
  scope: (
    <>
      Bu şartlar, ücretsiz oynanan 3.1.0 ve sonraki sürümler için yazılmıştır. Oyununuz bu güncellemeyi alana
      kadar reklam, Premium ve altın paketleriyle ilgili kısımlar sizin için geçerli değildir. Oyunun verileri nasıl
      işlediği <a href="/privacy?lang=tr">gizlilik politikasında</a> anlatılır.
    </>
  ),
  summaryTitle: "Kısaca",
  summary: [
    "Oyun kişisel ve ticari olmayan kullanımınız içindir. App Store veya Google Play şartları da geçerlidir.",
    "3.1.0 sürümünden itibaren ücretsiz oynanır. Ödüllü reklamlar isteğe bağlıdır. Premium yoksa yenilgiden sonra ara sıra tam ekran reklam çıkabilir. Oyun sırasında reklam yoktur.",
    "Premium tek seferlik bir satın alımdır, süresi dolmaz. Altın paketleri nakit değeri olmayan oyun içi paradır.",
    "Ödeme ve iadeler Apple veya Google üzerinden yürür.",
    "Oyunun ücretli sürümünü (3.0 veya öncesi) mi aldınız? Premium’u ek ücret ödemeden alırsınız.",
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
            Almost in Orbit’i, Türkiye’de Simple Ideas adıyla yayın yapan bağımsız geliştirici Salih Salihoğlu
            geliştirir (“biz”). İletişim: {mail}.
          </p>
          <p>
            Bu şartlar Almost in Orbit’i iOS veya Android’de indirdiğinizde, kurduğunuzda veya oynadığınızda geçerlidir.
            13 Kasım 2026’da yürürlüğe girer. Kabul etmiyorsanız lütfen oyunu kullanmayın.
          </p>
        </>
      ),
    },
    {
      id: "licence",
      title: "Kullanım lisansı",
      body: (
        <>
          <p>
            Size oyunu sahip olduğunuz veya kontrol ettiğiniz cihazlara kurup oynamanız için kişisel, ticari olmayan ve
            devredilemez bir lisans veririz. Kodu, görselleri, müziği ve metinleriyle oyun Simple Ideas’a veya lisans
            verenlerine aittir. Lisans oyunu oynamanızı sağlar; oyunun sahipliğini size vermez.
          </p>
          <p>
            Oyunu aldığınız mağazanın kuralları da geçerlidir. Google Play’de bu,{" "}
            <a href={`${LINKS.playTerms}?hl=tr`}>Google Play Hizmet Şartları</a>’dır. App Store’da Apple’ın{" "}
            <a href={LINKS.appleEula}>Standart Son Kullanıcı Lisans Sözleşmesi</a> (Standard EULA) ve bir sonraki
            bölümdür. Oyunun desteğini Apple veya Google değil, biz veririz.
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
              Lisansınız,{" "}
              <a href={LINKS.appleMediaTermsTr}>Apple Medya Hizmetleri Hüküm ve Koşulları</a>’ndaki Kullanım
              Kuralları’nın izin verdiği ölçüde, sahip olduğunuz veya kontrol ettiğiniz Apple markalı cihazları kapsar.
            </li>
            <li>Apple’ın oyun için bakım veya destek sağlama yükümlülüğü yoktur.</li>
            <li>
              Oyun geçerli bir garantiyi karşılamazsa Apple’a bildirebilirsiniz; Apple, varsa oyun için ödediğiniz
              bedeli iade eder. Yasaların izin verdiği ölçüde Apple’ın oyunla ilgili başka bir garanti yükümlülüğü
              yoktur.
            </li>
            <li>
              Oyunla ilgili talepleri, örneğin ürün sorumluluğu, yasal veya düzenleyici bir gerekliliğe uymama, tüketicinin
              korunması ve başkasının fikri mülkiyet haklarını ihlal iddialarını Apple değil, biz ele alırız.
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
      id: "ads",
      title: "Ücretsiz oyun ve reklamlar",
      body: (
        <>
          <p>Oyun 3.1.0 sürümünden itibaren ücretsiz oynanır. Reklamları Google AdMob sunar:</p>
          <ul>
            <li>
              <strong>İsteğe bağlı ödüllü reklamlar.</strong> Bir koşudaki ilk yenilginizden sonra reklam izleyerek o
              koşuda bir kez devam edebilirsiniz. Devam ettikten sonra yeniden yenilirseniz reklam izleyerek o koşunun
              altınını ikiye katlayabilirsiniz. İkisi de sizin seçiminizdir. Reddetmek yeni bir koşuya başlamanızı asla
              engellemez.
            </li>
            <li>
              <strong>Tam ekran reklamlar.</strong> Premium’unuz yoksa yenilgiden sonra ana menüye dönerken ara sıra tam
              ekran reklam çıkabilir. Ne sıklıkta çıkacağı sınırlıdır.
            </li>
          </ul>
          <p>
            Oyun sırasında reklam ve banner reklam yoktur. Reklamların verileri nasıl kullandığı ve reklam
            tercihlerinizi nasıl değiştireceğiniz <a href="/privacy?lang=tr#ads">gizlilik politikasında</a> anlatılır.
          </p>
        </>
      ),
    },
    {
      id: "purchases",
      title: "Satın almalar",
      body: (
        <>
          <ul>
            <li>
              <strong>Premium</strong> tek seferlik bir satın alımdır ve süresi dolmaz. Tam ekran reklamları kaldırır ve
              koşu başına bir devam hakkını reklam izlemeden kullanmanızı sağlar. Sınırsız can veya ek devam hakkı
              vermez. Koşu altınını ikiye katlamak herkes için isteğe bağlı ödüllü reklam olarak kalır. Premium App
              Store veya Google Play hesabınıza aittir ve aynı hesapla, örneğin yeniden kurduktan sonra, geri
              yüklenebilir.
            </li>
            <li>
              <strong>Altın paketleri</strong> oyun içinde kullanılan, tüketilebilir sanal paradır. Altının gerçek para
              değeri yoktur. Nakde veya oyun dışındaki herhangi bir şeye çevrilemez, başka bir oyuncuya devredilemez ya
              da satılamaz. Satın alınan altın, kazandığınız altın gibi ilerlemenize eklenir; mağaza onu sonradan geri
              yükleyemez.
            </li>
          </ul>
          <p>
            Ödeme, iade ve faturalandırmayı Apple veya Google kendi şartları ve politikalarıyla yürütür. Fiyatlar satın
            almadan önce mağazada gösterilir. İade istemek için{" "}
            <a href="https://support.apple.com/tr-tr/118223">Apple’ın iade talebi</a> sayfasını veya{" "}
            <a href={`${LINKS.playRefund}?hl=tr`}>Google Play’in iade sürecini</a> kullanın. Kart bilgilerinizi hiç
            görmeyiz.
          </p>
        </>
      ),
    },
    {
      id: "earlier-buyers",
      title: "Ücretli sürümü aldıysanız",
      body: (
        <>
          <p>Almost in Orbit’in ücretli sürümünü (3.0 veya öncesi) aldıysanız Premium’u ek ücret ödemeden alırsınız:</p>
          <ul>
            <li>
              <strong>iOS 16 veya sonrası:</strong> Oyunu aldığınız Apple Hesabı ile Premium kendiliğinden açılır.
            </li>
            <li>
              <strong>Android:</strong> Ücretli sürümü oynadığınız cihazda oyunu güncellediğinizde Premium kendiliğinden
              açılır.
            </li>
            <li>
              <strong>Diğer durumlar</strong>, örneğin iOS 15, yeniden kurulum veya yeni bir Android cihaz:{" "}
              <a href="/support">desteğe</a> yazın, yardımcı olalım. Mağaza makbuzu veya sipariş numarası isteyebiliriz.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "items",
      title: "Sanal öğeler ve ilerleme",
      body: (
        <>
          <p>
            Altın, geliştirmeler, gemiler ve diğer oyun içi öğeler oyun dışında değer taşımaz. Sahip olduğunuz bir mal
            değil, oyunu oynama lisansınızın parçasıdır. Oyun dengesini, altın fiyatlarını, öğeleri ve diğer içeriği
            güncellemelerle değiştirebiliriz; örneğin sorunları düzeltmek veya oyunu adil tutmak için.
          </p>
          <p>
            İlerlemeniz cihazınıza kaydedilir. Game Center (iCloud) veya Google Play Games üzerinden isteğe bağlı bulut
            kaydı kullanıyorsanız kalıcı ilerlemenizin bir kopyası kendi hesabınızda tutulur. Bulut kayıt yoksa satın
            aldığınız altın dahil ilerlemeniz, oyunu silerseniz, verilerini temizlerseniz veya cihazınızı kaybederseniz
            kaybolabilir. Biz bir kopya tutmadığımız için onu geri getiremeyiz.
          </p>
        </>
      ),
    },
    {
      id: "rules",
      title: "Yasak kullanım",
      body: (
        <>
          <ul>
            <li>hile, bot veya oyunu, belleğini ya da kayıtlarını değiştiren araçlar kullanmak;</li>
            <li>oyunun değiştirilmiş bir sürümünü kullanmak veya paylaşmak;</li>
            <li>yasanın izin verdiği durumlar dışında oyunu tersine mühendislikle incelemek, kaynak koda çevirmek veya parçalarına ayırmak;</li>
            <li>Premium’u, altını veya diğer satın almaları ödeme yapmadan elde etmek ya da satın alma sistemini başka yollarla aşmak;</li>
            <li>oyunu veya içeriğini kopyalamak, satmak, kiralamak ya da yeniden dağıtmak.</li>
          </ul>
          <p>Bunlardan birini yaparsanız lisansınız sona erer ve oyunun o kopyasına destek vermeyebiliriz.</p>
        </>
      ),
    },
    {
      id: "liability",
      title: "Sorumluluk reddi ve sınırı",
      body: (
        <>
          <p>
            Oyunu eğlenceli ve kararlı tutmak için çalışırız, ancak oyun “olduğu gibi” ve “mevcut haliyle” sunulur.
            Kesintisiz veya hatasız çalışacağını, her cihazda çalışacağını ya da reklamlar, satın almalar ve bulut kayıt
            gibi başka hizmetlere bağlı özelliklerin her zaman kullanılabilir olacağını garanti etmeyiz.
          </p>
          <p>
            Yasaların izin verdiği ölçüde dolaylı zararlardan, kaybolan ilerlemeden veya oyun içi öğelerden sorumlu
            değiliz. Bu şartlardaki hiçbir hüküm, yasanın sınırlanmasına izin vermediği sorumluluğu, örneğin kasıtla veya
            ağır ihmalle verilen zararı, sınırlamaz ya da kaldırmaz.
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
            zorunlu tüketici koruma kuralları sizin için geçerliliğini korur; o ülkenin yasası izin veriyorsa yaşadığınız
            yerdeki mahkemelere de başvurabilirsiniz.
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
        <>
          <p>
            Bu şartlar, satın almalar veya Premium hakkındaki sorular için: <a href="/support">destek sayfası</a> veya{" "}
            {mail}.
          </p>
          <p>
            Verilerle ilgili sorular için <a href="/privacy?lang=tr">gizlilik politikasına</a> bakın.
          </p>
        </>
      ),
    },
  ],
};

export const TERMS: Record<TermsLang, TermsCopy> = { en, tr };
