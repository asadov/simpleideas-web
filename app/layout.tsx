import type { Metadata, Viewport } from "next";
import { spaceFontVars } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://simpleideas.net"),
  icons: {
    apple: "/assets/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#060a14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceFontVars}>
      <body>{children}</body>
    </html>
  );
}
