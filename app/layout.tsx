import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";
import { site, titolari } from "@/data/config";

// Titoli: serif elegante ravvicinato allo stile del logo (linee sottili,
// alto contrasto, eleganza classica). Testo corrente: sans pulito e leggibile.
const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const body = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.nome} — ${site.claim} | ${site.comune}`,
  description:
    "Bed & Breakfast a Longobucco (CS): due camere con bagno privato, parcheggio privato e colazione in camera.",
  openGraph: {
    title: `${site.nome} — ${site.claim}`,
    description: `Bed & Breakfast a ${site.comune} (${site.provincia}): due camere con bagno privato, parcheggio privato e colazione in camera.`,
    url: site.url,
    siteName: site.nome,
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.nome} — ${site.claim}`,
    description: `Bed & Breakfast a ${site.comune} (${site.provincia}).`,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const datiStrutturati = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: site.nome,
    image: `${site.url}/opengraph-image.png`,
    url: site.url,
    telephone: `+${titolari[0].whatsappNumero}`,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Mazzini 43",
      addressLocality: site.comune,
      addressRegion: site.provincia,
      postalCode: "87066",
      addressCountry: "IT",
    },
  };

  return (
    <html lang="it" className={`${display.variable} ${body.variable}`}>
      <body className="font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(datiStrutturati) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
