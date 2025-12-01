import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maledial",
  description: "Keep track of your Malediction match with just one tap.",
};

const arkhipFont = localFont({
  src: "./Arkhip_font.ttf",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={arkhipFont.className}>
      <body>{children}</body>
    </html>
  );
}
