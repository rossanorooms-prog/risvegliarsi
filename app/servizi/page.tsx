import { servizi } from "@/data/config";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Servizi — Risvegliarsi" };

export default function ServiziPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-center font-display text-4xl text-inchiostro sm:text-5xl">
        Servizi
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-center font-body text-inchiostro/70">
        Tutto quello che trovi incluso nel soggiorno.
      </p>

      <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {servizi.map((s) => (
          <div key={s.titolo} className="border-t border-inchiostro/10 pt-4">
            <p className="font-display text-2xl text-rosso">{s.titolo}</p>
            <p className="mt-2 font-body text-inchiostro/70">{s.testo}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
