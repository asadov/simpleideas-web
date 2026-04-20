import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Almost in Orbit — Roguelite Shoot-em-up for iOS & Android | Simple Ideas",
  description:
    "A portrait-mode roguelite shoot-em-up built in Unity 6. Survive 40 waves, upgrade your drones and elements, and fight your way to orbit. Coming soon to iOS and Android.",
  openGraph: {
    title: "Almost in Orbit — Roguelite Shoot-em-up for iOS & Android | Simple Ideas",
    description:
      "A portrait-mode roguelite shoot-em-up built in Unity 6. Survive 40 waves, upgrade your drones and elements, and fight your way to orbit. Coming soon to iOS and Android.",
    url: "https://simpleideas.net",
    siteName: "Simple Ideas",
    images: [
      {
        url: "https://simpleideas.net/og-image.png",
        width: 1200,
        height: 630,
        alt: "Almost in Orbit — Roguelite Shoot-em-up",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Almost in Orbit — Roguelite Shoot-em-up for iOS & Android | Simple Ideas",
    description:
      "A portrait-mode roguelite shoot-em-up built in Unity 6. Survive 40 waves, upgrade your drones and elements, and fight your way to orbit. Coming soon to iOS and Android.",
    images: ["https://simpleideas.net/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
