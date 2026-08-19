import { camere, galleriaComune } from "@/data/config";
import Gallery from "@/components/Gallery";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Le camere — Risvegliarsi" };

export default function CamerePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-center font-display text-4xl text-inchiostro sm:text-5xl">
        Le camere
      </h1>
      <p className="mx-auto mt-5 max-w-xl text-center font-body text-inchiostro/70">
        Due camere distinte, ciascuna con bagno privato. Le foto raccontano meglio
        di ogni descrizione lo spazio e l&apos;atmosfera.
      </p>

      {camere.map((c) => {
        const accento = c.accento === "petrolio" ? "text-petrolio border-petrolio" : "text-senape border-senape";
        return (
          <section key={c.slug} id={c.slug} className="mt-20 scroll-mt-24">
            <div className={`border-l-4 pl-5 ${accento}`}>
              <h2 className="font-display text-3xl text-inchiostro sm:text-4xl">{c.nome}</h2>
              <p className="mt-1 font-body text-inchiostro/60">{c.sottotitolo}</p>
            </div>

            <p className="mt-6 max-w-2xl font-body text-inchiostro/80">{c.descrizione}</p>

            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-body text-sm text-inchiostro/70">
              {c.dettagli.map((d) => (
                <li key={d} className="flex items-center gap-2">
                  <span className={`h-1.5 w-1.5 rounded-full ${c.accento === "petrolio" ? "bg-petrolio" : "bg-senape"}`} />
                  {d}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Gallery foto={c.galleria} direzione={c.slug === "verde" ? "sinistra" : "destra"} />
            </div>
          </section>
        );
      })}

      <section className="mt-20">
        <h2 className="font-display text-3xl text-inchiostro sm:text-4xl">Altre foto</h2>
        <div className="mt-8">
          <Gallery foto={galleriaComune} />
        </div>
      </section>

      <div className="mt-16 flex justify-center">
        <WhatsAppButton label="Chiedi disponibilità" fixed={false} />
      </div>
    </div>
  );
}
