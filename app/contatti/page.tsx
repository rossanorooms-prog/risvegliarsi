import { site } from "@/data/config";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contatti — Risvegliarsi" };

export default function ContattiPage() {
  const mapsQuery = encodeURIComponent(`${site.nome} ${site.comune} ${site.provincia}`);

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 text-center">
      <h1 className="font-display text-4xl text-inchiostro sm:text-5xl">Contatti</h1>
      <p className="mx-auto mt-4 max-w-md font-body text-inchiostro/70">
        Il modo più veloce per parlare con noi è WhatsApp: rispondiamo con la
        disponibilità reale delle camere e ti aiutiamo a organizzare l&apos;arrivo.
      </p>

      <div className="mt-8 flex justify-center">
        <WhatsAppButton fixed={false} />
      </div>

      <div className="mt-14 overflow-hidden rounded-2xl border border-inchiostro/10">
        <iframe
          title="Mappa"
          className="h-80 w-full"
          loading="lazy"
          src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
        />
      </div>

      <p className="mt-6 font-body text-sm text-inchiostro/60">
        {site.comune} ({site.provincia})
      </p>
    </div>
  );
}
