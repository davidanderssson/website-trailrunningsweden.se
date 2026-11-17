import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const archivo = localFont({
  src: "./fonts/Archivo-Bold.ttf",
  weight: "700",
  variable: "--font-archivo",
});

const montserrat = localFont({
  src: "./fonts/Montserrat-Regular.ttf",
  weight: "400",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Webb under uppbyggnad | Trailrunning Sweden",
  description: "Trailrunning Swedens nya webbplats är under uppbyggnad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${archivo.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
