/** This records dismissal of an information notice, not consent to tracking. */
export const COOKIE_NOTICE_STORAGE_KEY = "simpleideas.privacy-notice";
export const COOKIE_NOTICE_VERSION = 1;
export const COOKIE_NOTICE_MAX_AGE_DAYS = 180;
export const COOKIE_NOTICE_MAX_AGE_MS = COOKIE_NOTICE_MAX_AGE_DAYS * 24 * 60 * 60 * 1000;

export type CookieLanguage = "en" | "tr";

export interface CookieNoticeRecord {
  version: typeof COOKIE_NOTICE_VERSION;
  acknowledgedAt: number;
  expiresAt: number;
}

export function createCookieNoticeRecord(now = Date.now()): CookieNoticeRecord {
  return {
    version: COOKIE_NOTICE_VERSION,
    acknowledgedAt: now,
    expiresAt: now + COOKIE_NOTICE_MAX_AGE_MS,
  };
}

/** Invalid, future-dated, obsolete or expired records never hide the notice. */
export function parseCookieNoticeRecord(raw: string | null, now = Date.now()): CookieNoticeRecord | null {
  if (!raw) return null;

  try {
    const value: unknown = JSON.parse(raw);
    if (typeof value !== "object" || value === null) return null;
    const record = value as Partial<CookieNoticeRecord>;
    if (
      record.version !== COOKIE_NOTICE_VERSION ||
      typeof record.acknowledgedAt !== "number" ||
      typeof record.expiresAt !== "number" ||
      !Number.isFinite(record.acknowledgedAt) ||
      !Number.isFinite(record.expiresAt) ||
      record.acknowledgedAt < 0 ||
      record.acknowledgedAt > now ||
      record.expiresAt <= now ||
      record.expiresAt - record.acknowledgedAt !== COOKIE_NOTICE_MAX_AGE_MS
    ) {
      return null;
    }
    return record as CookieNoticeRecord;
  } catch {
    return null;
  }
}
