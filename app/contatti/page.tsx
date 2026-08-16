import { site, titolari } from "@/data/config";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contatti — Risvegliarsi" };

export default function ContattiPage() {
  const mapsQuery = encodeURIComponent(site.indirizzo);

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 text-center">
      <h1 className="font-display text-4xl text-inchiostro sm:text-5xl">Contatti</h1>
      <p className="mx-auto mt-4 max-w-md font-body text-inchiostro/70">
        Il modo più veloce per parlare con noi è WhatsApp: rispondiamo con la
        disponibilità reale delle camere e ti aiutiamo a organizzare l&apos;arrivo.
      </p>

      <p className="mx-auto mt-8 font-display text-2xl italic text-inchiostro">
        Ti accoglieranno i titolari
      </p>
      <div className="mt-6 flex flex-wrap items-start justify-center gap-8">
        {titolari.map((t) => (
          <div key={t.nome} className="flex flex-col items-center gap-2">
            <WhatsAppButton
              fixed={false}
              numero={t.whatsappNumero}
              label={t.nome}
              testoSempreVisibile
            />
            <p className="font-body text-xs text-inchiostro/50">
              +{t.whatsappNumero.replace(/^39/, "39 ")}
            </p>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-16 h-px w-14 bg-oro/50" />

      <h2 className="mt-10 font-display text-3xl text-inchiostro">La posizione</h2>
      <p className="mx-auto mt-4 max-w-md font-body text-inchiostro/70">
        Siamo lungo la strada che porta al centro del paese, a soli 50 metri
        dalla piazza (praticamente di fronte al comune): notti tranquille e
        allo stesso tempo tutto a due passi. Facile da trovare — tra i B&amp;B
        più moderni del paese. Basta arrivare, poggiare le valigie: il
        check-in è immediato.
      </p>

      <div className="mt-14 overflow-hidden rounded-2xl border border-inchiostro/10">
        <iframe
          title="Mappa"
          className="h-80 w-full"
          loading="lazy"
          src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
        />
      </div>

      <p className="mt-6 font-body text-sm text-inchiostro/60">
        {site.indirizzo}
      </p>
    </div>
  );
}
