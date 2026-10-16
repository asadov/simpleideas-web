import { CONTACT_EMAIL } from "@/lib/site";
import styles from "./privacy.module.css";

const MAIL = <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;

export function PolicyEn() {
  return (
    <article>
      <h1>Privacy Policy</h1>
      <p className={styles.meta}>Pixel Art Collect for iPhone and iPad · Effective date: 16 October 2026</p>

      <p>
        This policy explains what information the Pixel Art Collect game (“the game”) processes, why, and what choices
        you have. The game is developed by Simple Ideas (“we”, “us”). You can reach us at {MAIL}.
      </p>

      <div className={styles.box}>
        <p>
          <strong>In short</strong>
        </p>
        <ul>
          <li>We never ask for your name, email address or phone number.</li>
          <li>
            The game creates an anonymous player account. Linking it with Sign in with Apple is optional and is only
            required before your first purchase.
          </li>
          <li>Payments are handled by Apple. We never see your card or billing details.</li>
          <li>
            The game shows ads through Google AdMob. Ads use your Advertising Identifier only if you allow tracking, and
            in the EEA, the UK and Switzerland personalised ads need your consent.
          </li>
          <li>The game contains no analytics, crash-reporting or attribution SDKs.</li>
          <li>
            You can delete a linked account in the game at any time:{" "}
            <strong>Settings › Player account › Delete account</strong>. If you play as a guest, email us and we will
            delete your anonymous player ID.
          </li>
        </ul>
      </div>

      <h2>1. Information we process</h2>

      <h3>1.1 Player account (Google Firebase Authentication)</h3>
      <p>
        When you first open the game, it signs in anonymously with Google Firebase Authentication. This creates a random
        player ID that does not contain your name, email address or any device identifier. Firebase stores this ID
        together with when the account was created and last signed in. To protect the sign-in service, Firebase may
        also process your IP address and basic information about your device and app version.
      </p>
      <p>
        <strong>Sign in with Apple (optional).</strong> Before your first purchase, the game asks you to link your player
        account with Sign in with Apple, so that your purchases are tied to your account and can be recovered on another
        device. The game does not request your name or email address from Apple. Apple gives the game a sign-in token
        that contains a stable identifier for your Apple Account that is specific to our apps; Firebase uses it to link
        and verify your player account.
      </p>
      <p>
        If you never link your account, nothing about you is stored in our database (see 1.3). Your random player ID and
        its sign-in dates still remain in Firebase Authentication until you ask us to delete them (see 6).
      </p>

      <h3>1.2 Purchases (Apple In-App Purchase)</h3>
      <p>
        All payments are processed by Apple under Apple’s terms and privacy policy. We do not receive your card details,
        your Apple Account email address or your billing address.
      </p>
      <p>
        When you buy an item, the game attaches to the purchase an anonymous token derived from your player ID. Our
        server uses the transaction ID to ask Apple for the current state of the purchase (including refunds) and checks
        that the purchase belongs to your player account before it delivers the item. Apple also sends our server
        notifications about changes such as refunds.
      </p>

      <h3>1.3 Cloud wallet (Google Cloud Firestore, Frankfurt)</h3>
      <p>
        For players who link their account, our server keeps the following in Google Cloud Firestore in the
        europe-west3 region (Frankfurt, Germany), processed by our server functions in the same region:
      </p>
      <ul>
        <li>your player ID and platform (iOS);</li>
        <li>
          purchase records: product, Apple transaction ID, quantities granted and still unused, refund status and when it
          was last checked;
        </li>
        <li>your balance of purchased boosters and whether you own “Remove between-level ads”;</li>
        <li>
          a random installation ID created by the game (not a hardware or advertising identifier), used so that paid
          items are used on one device at a time and can be recovered;
        </li>
        <li>
          when you use a paid booster: a backup of that painting in progress, together with your booster inventory (free
          and purchased counts) and the play state needed to resume it, so the paid result is not lost. This backup is
          updated while that painting continues;
        </li>
        <li>a record of each paid item used, so it is never charged twice.</li>
      </ul>
      <p>The game cannot read or write this database directly; only our server can.</p>

      <h3>1.4 Advertising (Google AdMob)</h3>
      <p>
        The game shows ads between levels and offers optional rewarded ads (for example, extra moves). These ads are
        provided by Google through Google AdMob, using the Google Mobile Ads SDK. They may come from Google’s own
        advertisers or from the third-party ad technology partners that Google works with. Google and these partners may
        collect and process, for advertising purposes (including interest-based advertising, ad measurement, fraud
        prevention and improving their advertising services), information such as your IP address (which may be used to
        estimate your general location), your device type, operating system and settings such as language, the name of
        the app, crash logs and performance data of the ad software (such as app launch time), how you interact with the
        app and its ads (such as app launches, taps and video views), identifiers for your device (the Identifier for
        Vendors, IDFV, and, only if you allow tracking, your Advertising Identifier, IDFA) and information about the ads
        you see. Third-party measurement partners may also collect and process data to measure ads as part of the IAB
        Tech Lab Open Measurement framework.
      </p>
      <ul>
        <li>
          <strong>Tracking permission.</strong> iOS asks whether you allow the game to track you. Only if you allow it
          can the Advertising Identifier be used. You can change this at any time in iOS Settings › Privacy &amp;
          Security › Tracking.
        </li>
        <li>
          <strong>EEA, UK and Switzerland.</strong> Before personalised ads are shown, the game displays a consent form
          provided by Google’s User Messaging Platform. If you do not consent, Google may still show non-personalised ads,
          which are based on context such as the app and your general location rather than on your past activity, or
          limited ads, which do not use personal data to personalise ads. You can review or change your choices at any
          time in <strong>Settings › Privacy choices</strong>, which opens Google’s privacy options form.
        </li>
        <li>
          <strong>Remove between-level ads.</strong> This one-time purchase stops the automatic ads between levels.
          Rewarded ads remain available if you choose to watch them, so the ad software stays active in the game.
        </li>
      </ul>
      <p>
        To learn how Google collects and uses your information, see the{" "}
        <a href="https://policies.google.com/privacy">Google Privacy Policy</a> and{" "}
        <a href="https://policies.google.com/technologies/partner-sites">
          How Google uses information from sites or apps that use its services
        </a>
        . For the EEA, the UK and Switzerland, Google publishes the{" "}
        <a href="https://support.google.com/admob/answer/9012903">list of ad technology partners</a> that may serve and
        measure ads.
      </p>

      <h3>1.5 Information that stays on your device</h3>
      <p>
        Your painting progress and stars, settings such as language and theme, the painting in progress, free boosters
        and the game’s local copy of your account status are stored only on your device. They are not sent to us, with
        one exception: the paid-booster backup described in 1.3 also contains the painting in progress and your booster
        counts. They are included in your device backups (iCloud or computer) if you use them, and they are removed when
        you delete the game.
      </p>
      <p>
        When you share a painting, the game creates the image on your device and opens the iOS share sheet. Where it goes
        next is up to you and the app you choose; we do not receive it. The game does not read your photo library,
        contacts or location.
      </p>

      <h3>1.6 Links to other websites</h3>
      <p>
        Artwork and artist pages link to their sources, such as Wikimedia Commons and museum websites. These open in your
        browser and are governed by those websites’ own policies.
      </p>

      <h3>1.7 What we do not do</h3>
      <p>
        The game contains no analytics, crash-reporting, attribution or marketing SDKs. (The Google Mobile Ads SDK
        described in 1.4 collects its own crash logs and performance data.) We do not ask for your name, email address,
        phone number, contacts, photos or location. We do not sell your personal information for money. Some laws (for
        example in certain US states) may treat the advertising described in 1.4 as “sharing” for targeted advertising;
        you can limit it by not allowing tracking (see 1.4).
      </p>

      <h2>2. Why we use information and our legal bases</h2>
      <ul>
        <li>
          <strong>Providing the game, player accounts, purchases and the cloud wallet</strong> — to perform our agreement
          with you.
        </li>
        <li>
          <strong>Security, preventing fraud and double spending, handling refunds</strong> — our legitimate interest in
          protecting the game and its players, and legal obligations for keeping transaction records.
        </li>
        <li>
          <strong>Advertising</strong> — your consent where the law requires it (the consent form and iOS tracking
          permission); otherwise our legitimate interest in funding a free game with ads.
        </li>
      </ul>

      <h2>3. Who receives information</h2>
      <ul>
        <li>
          <strong>Google (Firebase Authentication, Cloud Firestore, Cloud Functions)</strong> — hosts our player accounts
          and server as our service provider. See{" "}
          <a href="https://firebase.google.com/support/privacy">Privacy and Security in Firebase</a>.
        </li>
        <li>
          <strong>Apple</strong> — processes payments and Sign in with Apple under the{" "}
          <a href="https://www.apple.com/legal/privacy/">Apple Privacy Policy</a>.
        </li>
        <li>
          <strong>Google (AdMob and the User Messaging Platform) and the ad technology partners Google works with</strong>{" "}
          — as described in 1.4.
        </li>
        <li>
          <strong>Authorities</strong> — when the law requires it.
        </li>
      </ul>
      <p>We do not share your information with anyone else.</p>

      <h2>4. International transfers</h2>
      <p>
        Our database and server functions are located in Frankfurt, Germany. Firebase Authentication is a global Google
        service, and Google and its ad technology partners may process information in the United States and other
        countries. These companies use safeguards such as the European Commission’s Standard Contractual Clauses for
        transfers from the EEA and the UK.
      </p>

      <h2>5. How long we keep information</h2>
      <ul>
        <li>
          <strong>Player account and cloud wallet:</strong> for as long as your account exists. They are not deleted
          automatically. You can delete a linked account in the game at any time, and we delete a guest player ID when
          you email us (see 6).
        </li>
        <li>
          <strong>Purchase records:</strong> when you delete your account, the record of each completed purchase
          (product, Apple transaction ID, quantities, refund status and dates) is kept without any link to your player
          account, so that the same purchase can never be claimed again and refunds can be handled. It is kept for as
          long as these purposes require.
        </li>
        <li>
          <strong>Server logs:</strong> our server logs only the type of error, never your player ID or sign-in tokens.
          Google Cloud keeps technical request logs (such as IP address and time of the request) for a limited period,
          normally 30 days.
        </li>
        <li>
          <strong>Advertising data:</strong> kept by Google and its ad technology partners under their own policies.
        </li>
        <li>
          <strong>Data on your device:</strong> until you delete the game.
        </li>
      </ul>

      <h2>6. Deleting your account</h2>
      <p>
        If your player account is linked with Sign in with Apple, open{" "}
        <strong>Settings › Player account › Delete account</strong> in the game. After you confirm and sign in with Apple
        once more, we permanently delete your player account and its link to your Apple Account, revoke the game’s Sign
        in with Apple authorization, and delete your cloud wallet: purchased boosters, “Remove between-level ads”
        ownership, painting backups, installation and usage records. Purchase records are kept without your account as
        described in 5. Your painting progress and free boosters stay on your device, and the game continues with a new
        guest account.
      </p>
      <p>
        If you never linked your account (guest), our database holds nothing about you; only your anonymous player ID and
        its sign-in dates remain in Firebase Authentication (see 1.1). A guest account cannot be deleted from within the
        game: email us at {MAIL} and we will delete it. Because a guest account has no name or email address, we may ask
        you for information that helps us find it (see 7).
      </p>
      <p>
        Deleted purchases cannot be restored later, even with the same Apple Account. Deleting your account does not
        cancel or refund purchases; refunds are handled by Apple at{" "}
        <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>. You can also stop using Sign in with
        Apple with the game in iOS Settings, under your Apple Account › Sign-In &amp; Security › Sign in with Apple. If
        you can no longer open the game, email us and we will help.
      </p>

      <h2>7. Your rights</h2>
      <p>
        Depending on where you live (for example under the EU and UK GDPR or Turkey’s Personal Data Protection Law,
        KVKK), you may have the right to access, correct or delete your information, to restrict or object to its use,
        to receive it in a portable form, and to withdraw consent at any time. You also have the right to complain to
        your data protection authority. To use these rights, email {MAIL}. Because we do not know your name or email
        address, we may ask you for information that lets us find your player account. We answer within the time limits
        set by law.
      </p>

      <h2>8. Children</h2>
      <p>
        The game is not directed at children under 13, or under the minimum age for consenting to data processing in
        your country. We do not knowingly collect personal information from children. If you believe a child has used
        the game and we hold their information, contact us and we will delete it.
      </p>

      <h2>9. Security</h2>
      <p>
        All communication between the game and our server is encrypted (HTTPS). Every request is verified with a
        Firebase sign-in token, the database cannot be accessed directly from the game, and our logs exclude player IDs,
        tokens and purchase receipts. No system is perfectly secure, but we work to protect your information.
      </p>

      <h2>10. Changes to this policy</h2>
      <p>If we change this policy, we will publish the new version on this page with a new effective date.</p>

      <h2>11. Contact</h2>
      <p>Simple Ideas · {MAIL}</p>
    </article>
  );
}
