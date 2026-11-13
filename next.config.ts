import type { NextConfig } from "next";

/*
 * Security headers for every response. The site is static marketing and policy pages: no forms, no API,
 * no third-party scripts, fonts or images (next/font self-hosts the fonts). So the policy only allows the
 * site's own origin. 'unsafe-inline' stays for scripts and styles because Next.js inlines its bootstrap
 * scripts and the pages use inline style attributes; without a nonce setup it cannot be removed.
 * frame-ancestors 'none' + X-Frame-Options stop other sites from framing the pages (clickjacking).
 * Production only: the dev server needs eval for hot reloading.
 */
const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "media-src 'self'",
  "font-src 'self'",
  "connect-src 'self'",
  "frame-src 'none'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join("; ");

const SECURITY_HEADERS = [
  { key: "Content-Security-Policy", value: CONTENT_SECURITY_POLICY },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

const nextConfig: NextConfig = {
  // Do not announce the framework (x-powered-by: Next.js).
  poweredByHeader: false,
  async headers() {
    if (process.env.NODE_ENV !== "production") return [];
    return [{ source: "/:path*", headers: SECURITY_HEADERS }];
  },
};

export default nextConfig;
