import { cosaFare, site } from "@/data/config";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Metadata } from "next";

export const metadata: Metadata = { title: `Cosa fare a ${site.comune} — Risvegliarsi` };

export default function LongobuccoPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-center font-display text-4xl text-inchiostro sm:text-5xl">
        Cosa fare a {site.comune}
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-center font-body text-inchiostro/70">
        Qualche idea per il tuo soggiorno. Questa pagina è in aggiornamento:
        se hai suggerimenti su un posto da non perdere, chiedi a noi direttamente.
      </p>

      <div className="mx-auto mt-4 h-px w-14 bg-oro/50" />

      <div className="mt-14 grid gap-10 sm:grid-cols-2">
        {cosaFare.map((m) => (
          <div key={m.titolo} className="border-t border-oro/30 pt-4">
            <p className="font-display text-2xl text-inchiostro">{m.titolo}</p>
            <p className="mt-2 font-body text-sm text-inchiostro/70">{m.testo}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <WhatsAppButton label="Chiedi consigli agli host" fixed={false} />
      </div>
    </div>
  );
}
