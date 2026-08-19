import Link from "next/link";
import { sottosezioniLongobucco, site } from "@/data/config";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Metadata } from "next";

export const metadata: Metadata = { title: `Longobucco — Risvegliarsi` };

export default function LongobuccoPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-center font-display text-4xl text-inchiostro sm:text-5xl">
        Longobucco
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-center font-body text-inchiostro/70">
        Tutto quello che ti serve sapere sul nostro borgo, per organizzare al meglio il tuo soggiorno.
      </p>

      <div className="mx-auto mt-4 h-px w-14 bg-oro/50" />

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {sottosezioniLongobucco.map((s) => (
          <Link
            key={s.slug}
            href={`/longobucco/${s.slug}`}
            className="block rounded-sm border-t-2 border-oro/60 bg-cremascura/50 p-6 transition hover:bg-cremascura hover:shadow-md"
          >
            <p className="font-display text-2xl text-inchiostro">{s.nome}</p>
            <p className="mt-2 font-body text-sm text-inchiostro/60">{s.descrizioneBreve}</p>
          </Link>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <WhatsAppButton label="Chiedi consigli agli host" fixed={false} />
      </div>
    </div>
  );
}
