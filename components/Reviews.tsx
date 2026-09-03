"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";

type Recensione = {
  id: string;
  nome: string;
  valutazione: number;
  testo: string;
  data: string;
  approvata: boolean;
};

function Stelle({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5 text-oro" aria-label={`${n} su 5 stelle`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i}>{i < n ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

export default function Reviews() {
  const [recensioni, setRecensioni] = useState<Recensione[]>([]);
  const [caricato, setCaricato] = useState(false);

  useEffect(() => {
    fetch("/api/recensioni")
      .then((r) => r.json())
      .then((res) => {
        if (res.ok) setRecensioni(res.data.filter((r: Recensione) => r.approvata));
        setCaricato(true);
      })
      .catch(() => setCaricato(true));
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <Reveal direzione="destra">
        <h2 className="mb-4 text-center font-display text-4xl text-inchiostro sm:text-5xl">
          Cosa dicono i nostri ospiti
        </h2>
      </Reveal>
      <Reveal direzione="destra" ritardoMs={120}>
        <div className="mx-auto mb-14 h-px w-14 bg-oro/50" />
      </Reveal>

      {caricato && recensioni.length === 0 ? (
        <Reveal direzione="dissolvenza" ritardoMs={200}>
          <p className="mx-auto max-w-md text-center font-body text-inchiostro/50">
            Risvegliarsi ha aperto da poco: le prime recensioni arriveranno presto
            qui, direttamente dai nostri ospiti.
          </p>
        </Reveal>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {recensioni.map((r, i) => (
            <Reveal key={r.id} direzione="su" ritardoMs={(i % 3) * 100}>
              <div className="border-t border-oro/30 pt-4">
                <Stelle n={r.valutazione} />
                <p className="mt-3 font-body text-sm italic text-inchiostro/80">&ldquo;{r.testo}&rdquo;</p>
                <p className="mt-3 font-body text-xs uppercase tracking-widest2 text-inchiostro/40">
                  {r.nome}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      )}

      <div className="mt-12 text-center">
        <Link
          href="/recensioni"
          className="font-body text-sm uppercase tracking-widest2 text-rosso hover:underline"
        >
          Lascia la tua recensione →
        </Link>
      </div>
    </section>
  );
}
