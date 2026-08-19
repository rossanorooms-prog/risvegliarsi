import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";
import { site } from "@/data/config";

// Font unico per tutto il sito, in stile Airbnb (Cereal, il font di Airbnb,
// non è open source: Plus Jakarta Sans è l'alternativa gratuita più simile
// per forma geometrica e leggibilità). Pesi più marcati per i titoli.
const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.nome} — ${site.claim} | ${site.comune}`,
  description:
    "Bed & Breakfast a Longobucco (CS): due camere con bagno privato, parcheggio privato e colazione in camera.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${display.variable} ${body.variable}`}>
      <body className="font-body">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
