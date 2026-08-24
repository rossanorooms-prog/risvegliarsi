import Link from "next/link";
import Image from "next/image";
import { camere, site } from "@/data/config";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dove dormire a Longobucco — Risvegliarsi Bed & Benessere",
  description: "Cerchi dove dormire a Longobucco (CS)? Risvegliarsi Bed & Benessere: due camere con bagno privato in una struttura ristrutturata nel centro storico.",
};

export default function DoveDormirePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <Link
        href="/longobucco"
        className="font-body text-sm text-inchiostro/50 underline decoration-inchiostro/20 underline-offset-4 hover:text-rosso"
      >
        ← Longobucco
      </Link>

      <h1 className="mt-4 text-center font-display text-4xl text-inchiostro sm:text-5xl">
        Dove dormire a Longobucco
      </h1>

      <div className="mx-auto mt-4 h-px w-14 bg-oro/50" />

      <p className="mx-auto mt-10 max-w-2xl text-center font-body text-lg leading-relaxed text-inchiostro/80">
        Ecco, diciamocelo: qual è il posto migliore per goderti Longobucco e
        questo angolo di Sila Greca, se non <strong>{site.nome}</strong>? Un
        mix di antico e moderno, in una struttura recentemente ristrutturata
        e ammodernata con cura, proprio nel cuore del paese. Due camere, tutti
        i comfort, e i padroni di casa a due passi per qualsiasi consiglio sul
        borgo. Contattaci per maggiori informazioni.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {camere.map((c) => (
          <Link
            key={c.slug}
            href={`/camere#${c.slug}`}
            className="group block overflow-hidden rounded-sm border-t-2 border-oro/60 bg-cremascura/40 transition hover:shadow-md"
          >
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={c.copertina.src}
                alt={c.copertina.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <p className="font-display text-2xl text-inchiostro">{c.nome}</p>
              <p className="mt-1 font-body text-sm text-inchiostro/60">{c.sottotitolo}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-14 flex flex-wrap justify-center gap-4">
        <Link
          href="/camere"
          className="rounded-full bg-oro px-7 py-3 font-body text-sm uppercase tracking-widest2 text-inchiostro transition hover:bg-orochiaro"
        >
          Scopri le camere
        </Link>
        <WhatsAppButton label="Contattaci" fixed={false} />
      </div>
    </div>
  );
}
