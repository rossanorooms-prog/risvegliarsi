import { recensioni } from "@/data/config";

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
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="mb-3 text-center font-display text-4xl text-inchiostro sm:text-5xl">
        Cosa dicono i nostri ospiti
      </h2>
      <div className="mx-auto mb-14 h-px w-14 bg-oro/50" />

      {recensioni.length === 0 ? (
        <p className="mx-auto max-w-md text-center font-body text-inchiostro/50">
          Risvegliarsi ha aperto da poco: le prime recensioni arriveranno presto
          qui, direttamente dai nostri ospiti.
        </p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {recensioni.map((r, i) => (
            <div key={i} className="border-t border-oro/30 pt-4">
              <Stelle n={r.valutazione} />
              <p className="mt-3 font-body text-sm italic text-inchiostro/80">&ldquo;{r.testo}&rdquo;</p>
              <p className="mt-3 font-body text-xs uppercase tracking-widest2 text-inchiostro/40">
                {r.nome} · {r.fonte}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
