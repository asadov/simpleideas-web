"use client";

import { useEffect, useRef, useState } from "react";
import {
  COOKIE_NOTICE_STORAGE_KEY,
  createCookieNoticeRecord,
  parseCookieNoticeRecord,
  type CookieLanguage,
} from "@/lib/cookie-preferences";
import styles from "./CookieNotice.module.css";

const OPEN_SETTINGS_EVENT = "simpleideas:open-cookie-settings";

const COPY = {
  en: {
    title: "Privacy & cookies",
    notice: "This website does not use advertising or analytics cookies. If you dismiss this notice, we remember that choice only in this browser for up to 180 days.",
    acknowledge: "Got it",
    settings: "Cookie settings",
    policy: "Cookie notice",
    kvkk: "KVKK information notice",
    settingsTitle: "Your browser storage",
    intro: "There are no optional cookies to accept or reject on this website. This notice does not give permission for data processing in our apps.",
    requiredTitle: "Notice preference",
    requiredStatus: "Stored only after your choice",
    requiredBody: "Selecting “Got it” stores the notice version, acknowledgment time and expiry time in your browser’s local storage. It does not contain an identifier and is not sent to our server.",
    analyticsTitle: "Analytics & advertising",
    unused: "Not used",
    analyticsBody: "This website does not load analytics services, advertising pixels or third-party video players.",
    duration: "Retention: up to 180 days. Expired records are removed when you next visit.",
    saved: "This browser has a saved acknowledgment.",
    unsaved: "No acknowledgment is saved in this browser.",
    unavailable: "Your browser blocked local storage. You can still use the website; this notice may appear again on your next visit.",
    clear: "Delete saved choice",
    cleared: "Your saved choice has been deleted. The notice will appear again.",
    clearFailed: "Your browser did not allow us to delete the record. You can remove this site’s data in your browser settings.",
    close: "Close",
    dismissForNow: "Close for this visit",
  },
  tr: {
    title: "Gizlilik ve çerezler",
    notice: "Bu web sitesi reklam veya analiz çerezi kullanmaz. Bu bildirimi kapatmayı seçerseniz tercihinizi yalnızca bu tarayıcıda en fazla 180 gün hatırlarız.",
    acknowledge: "Anladım",
    settings: "Çerez ayarları",
    policy: "Çerez aydınlatması",
    kvkk: "KVKK aydınlatma metni",
    settingsTitle: "Tarayıcınızdaki kayıtlar",
    intro: "Bu web sitesinde kabul veya reddetmeniz gereken isteğe bağlı çerez bulunmaz. Bu bildirim, uygulamalarımızdaki veri işlemleri için izin vermez.",
    requiredTitle: "Bildirim tercihi",
    requiredStatus: "Yalnızca seçiminizden sonra kaydedilir",
    requiredBody: "“Anladım” seçeneği; bildirim sürümünü, kapatılma zamanını ve geçerlilik bitişini tarayıcınızın yerel depolamasına kaydeder. Bu kayıt bir kimlik bilgisi içermez ve sunucumuza gönderilmez.",
    analyticsTitle: "Analiz ve reklam",
    unused: "Kullanılmıyor",
    analyticsBody: "Bu web sitesi analiz hizmeti, reklam pikseli veya üçüncü taraf video oynatıcısı yüklemez.",
    duration: "Saklama: en fazla 180 gün. Süresi dolan kayıt, sonraki ziyaretinizde silinir.",
    saved: "Bu tarayıcıda bildirimi kapatma tercihiniz kayıtlı.",
    unsaved: "Bu tarayıcıda kaydedilmiş bir bildirim tercihi yok.",
    unavailable: "Tarayıcınız yerel depolamayı engelledi. Siteyi kullanabilirsiniz; bu bildirim sonraki ziyaretinizde yeniden görünebilir.",
    clear: "Kayıtlı tercihimi sil",
    cleared: "Kayıtlı tercihiniz silindi. Bildirim yeniden gösterilecek.",
    clearFailed: "Tarayıcınız kaydı silmemize izin vermedi. Tarayıcı ayarlarından bu sitenin verilerini silebilirsiniz.",
    close: "Kapat",
    dismissForNow: "Bu ziyaret için kapat",
  },
} as const;

function browserLanguage(): CookieLanguage {
  const explicit = new URLSearchParams(window.location.search).get("lang");
  if (explicit === "en" || explicit === "tr") return explicit;
  return navigator.language.toLowerCase().startsWith("tr") ? "tr" : "en";
}

interface OpenSettingsDetail {
  lang?: CookieLanguage;
  trigger?: HTMLElement;
}

/** Safe to render inside a Server Component footer. The notice owns the dialog. */
export function CookieSettingsButton({ className, lang }: { className?: string; lang?: CookieLanguage }) {
  const labelLanguage = lang ?? "en";
  return (
    <button
      type="button"
      className={[styles.settingsLink, className].filter(Boolean).join(" ")}
      aria-haspopup="dialog"
      lang={labelLanguage}
      onClick={(event) => {
        window.dispatchEvent(
          new CustomEvent<OpenSettingsDetail>(OPEN_SETTINGS_EVENT, {
            detail: { lang: lang ?? browserLanguage(), trigger: event.currentTarget },
          }),
        );
      }}
    >
      {COPY[labelLanguage].settings}
    </button>
  );
}

export function CookieNotice() {
  const [lang, setLang] = useState<CookieLanguage>("en");
  const [showNotice, setShowNotice] = useState(false);
  const [saved, setSaved] = useState(false);
  const [storageUnavailable, setStorageUnavailable] = useState(false);
  const [feedback, setFeedback] = useState<"cleared" | "clearFailed" | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const bodyOverflowRef = useRef<string | null>(null);
  const copy = COPY[lang];

  function refreshRecord() {
    try {
      const raw = window.localStorage.getItem(COOKIE_NOTICE_STORAGE_KEY);
      const record = parseCookieNoticeRecord(raw);
      // Delete only our own obsolete record. A first visit creates no browser storage.
      if (raw !== null && !record) window.localStorage.removeItem(COOKIE_NOTICE_STORAGE_KEY);
      setSaved(record !== null);
      setStorageUnavailable(false);
      return record !== null;
    } catch {
      setSaved(false);
      setStorageUnavailable(true);
      return false;
    }
  }

  function openSettings(nextLang = browserLanguage(), trigger?: HTMLElement) {
    setLang(nextLang);
    setFeedback(null);
    refreshRecord();
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    returnFocusRef.current = trigger ?? (document.activeElement instanceof HTMLElement ? document.activeElement : null);
    bodyOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.showModal();
  }

  function restoreAfterDialog() {
    if (bodyOverflowRef.current !== null) {
      document.body.style.overflow = bodyOverflowRef.current;
      bodyOverflowRef.current = null;
    }
    if (returnFocusRef.current?.isConnected) returnFocusRef.current.focus();
    returnFocusRef.current = null;
  }

  useEffect(() => {
    setLang(browserLanguage());
    setShowNotice(!refreshRecord());

    const onOpen = (event: Event) => {
      const detail = (event as CustomEvent<OpenSettingsDetail>).detail;
      openSettings(detail?.lang ?? browserLanguage(), detail?.trigger);
    };
    const onStorage = (event: StorageEvent) => {
      if (event.key === COOKIE_NOTICE_STORAGE_KEY || event.key === null) setShowNotice(!refreshRecord());
    };
    const onLanguage = () => setLang(browserLanguage());
    const onVisibility = () => {
      if (document.visibilityState !== "visible") return;
      setLang(browserLanguage());
      // Re-check expiry on return without reopening a notice dismissed for this visit.
      try {
        const raw = window.localStorage.getItem(COOKIE_NOTICE_STORAGE_KEY);
        if (raw !== null && !parseCookieNoticeRecord(raw)) setShowNotice(!refreshRecord());
      } catch {
        setStorageUnavailable(true);
      }
    };

    window.addEventListener(OPEN_SETTINGS_EVENT, onOpen);
    window.addEventListener("storage", onStorage);
    window.addEventListener("popstate", onLanguage);
    window.addEventListener("languagechange", onLanguage);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      window.removeEventListener(OPEN_SETTINGS_EVENT, onOpen);
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("popstate", onLanguage);
      window.removeEventListener("languagechange", onLanguage);
      document.removeEventListener("visibilitychange", onVisibility);
      restoreAfterDialog();
    };
  }, []);

  function acknowledge() {
    try {
      window.localStorage.setItem(COOKIE_NOTICE_STORAGE_KEY, JSON.stringify(createCookieNoticeRecord()));
      setSaved(true);
      setStorageUnavailable(false);
      setShowNotice(false);
      dialogRef.current?.close();
    } catch {
      setSaved(false);
      setStorageUnavailable(true);
    }
  }

  function clearRecord() {
    try {
      window.localStorage.removeItem(COOKIE_NOTICE_STORAGE_KEY);
      setSaved(false);
      setStorageUnavailable(false);
      setFeedback("cleared");
      setShowNotice(true);
    } catch {
      setFeedback("clearFailed");
    }
  }

  return (
    <>
      {showNotice ? (
        <section className={styles.notice} lang={lang} aria-labelledby="cookie-notice-title">
          <div className={styles.noticeText}>
            <h2 id="cookie-notice-title">{copy.title}</h2>
            <p>{copy.notice}</p>
            <a href={`/cookies?lang=${lang}`}>{copy.policy}</a>
            <span aria-hidden="true"> · </span>
            <a href={`/kvkk?lang=${lang}`}>{copy.kvkk}</a>
            {storageUnavailable ? <p className={styles.status} role="status">{copy.unavailable}</p> : null}
          </div>
          <div className={styles.actions}>
            <button type="button" className={styles.button} onClick={(event) => openSettings(browserLanguage(), event.currentTarget)}>
              {copy.settings}
            </button>
            <button type="button" className={`${styles.button} ${styles.primary}`} onClick={acknowledge}>
              {copy.acknowledge}
            </button>
            {storageUnavailable ? (
              <button type="button" className={styles.textButton} onClick={() => setShowNotice(false)}>{copy.dismissForNow}</button>
            ) : null}
          </div>
        </section>
      ) : null}

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        lang={lang}
        aria-labelledby="cookie-settings-title"
        aria-describedby="cookie-settings-intro"
        onClose={restoreAfterDialog}
      >
        <div className={styles.dialogBody}>
          <div className={styles.dialogHeading}>
            <h2 id="cookie-settings-title">{copy.settingsTitle}</h2>
            <button type="button" className={styles.close} aria-label={copy.close} onClick={() => dialogRef.current?.close()} autoFocus>
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
            </button>
          </div>
          <p id="cookie-settings-intro">{copy.intro}</p>

          <section className={styles.category}>
            <h3>{copy.requiredTitle}</h3>
            <span className={styles.badge}>{copy.requiredStatus}</span>
            <p>{copy.requiredBody}</p>
            <p className={styles.detail}>{copy.duration}</p>
          </section>
          <section className={styles.category}>
            <div className={styles.categoryHeading}><h3>{copy.analyticsTitle}</h3><span className={styles.badge}>{copy.unused}</span></div>
            <p>{copy.analyticsBody}</p>
          </section>

          <p className={styles.detail}>{saved ? copy.saved : copy.unsaved}</p>
          {storageUnavailable ? <p className={styles.status} role="status">{copy.unavailable}</p> : null}
          {feedback ? <p className={styles.status} role="status">{copy[feedback]}</p> : null}
          <div className={styles.policyLinks}>
            <a href={`/cookies?lang=${lang}`}>{copy.policy}</a>
            <a href={`/kvkk?lang=${lang}`}>{copy.kvkk}</a>
          </div>
          <div className={styles.dialogActions}>
            <button type="button" className={styles.button} onClick={clearRecord}>{copy.clear}</button>
            <button type="button" className={`${styles.button} ${styles.primary}`} onClick={() => dialogRef.current?.close()}>{copy.close}</button>
          </div>
        </div>
      </dialog>
    </>
  );
}
