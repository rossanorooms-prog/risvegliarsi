import Image from "next/image";
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

      {/* Foto del parcheggio riservato, proprio all'ingresso */}
      <div className="mx-auto mt-12 max-w-sm overflow-hidden rounded-2xl border border-inchiostro/10 shadow-sm">
        <div className="relative aspect-[4/5] w-full">
          <Image
            src="/images/esterni/parcheggio-riservato.jpg"
            alt="Area di parcheggio riservato agli ospiti, proprio davanti all'ingresso della struttura"
            fill
            className="object-cover"
          />
        </div>
        <p className="bg-cremascura/60 px-4 py-3 text-center font-body text-sm text-inchiostro/70">
          Il parcheggio riservato è proprio davanti all&apos;ingresso della struttura.
        </p>
      </div>

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
