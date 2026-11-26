import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Amiri } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

// Police arabe associée à Cormorant/DM Sans — layouts RTL à venir
const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GuestKit — Conciergerie digitale pour hôtels",
  description:
    "GuestKit donne à votre hôtel sa propre application web accessible par QR code : restaurants, activités, spectacles, plan interactif et demandes à la réception, sans installation.",
  metadataBase: new URL("https://www.guestskit.com"),
  openGraph: {
    title: "GuestKit — Conciergerie digitale pour hôtels",
    description:
      "Une application web à votre image — accessible par QR code, sans téléchargement. Vos clients découvrent l'hôtel, planifient leurs activités et envoient leurs demandes à la réception.",
    url: "https://www.guestskit.com",
    siteName: "GuestKit",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // dir="ltr" : basculer en dir="rtl" par locale pour l'arabe
  return (
    <html
      lang="fr"
      dir="ltr"
      className={`${cormorant.variable} ${dmSans.variable} ${amiri.variable}`}
    >
      <body className="font-sans text-charcoal bg-snow antialiased">{children}</body>
    </html>
  );
}
