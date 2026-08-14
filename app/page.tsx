import Image from "next/image";
import Link from "next/link";
import { camere, servizi, site, galleriaEsterni } from "@/data/config";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex h-[92vh] min-h-[560px] items-end justify-center overflow-hidden">
        <Image
          src={galleriaEsterni[0].src}
          alt={galleriaEsterni[0].alt}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-inchiostro/90 via-inchiostro/30 to-inchiostro/10" />
        <div className="relative z-10 flex flex-col items-center px-6 pb-16 text-center text-crema">
          <Image
            src="/images/logo-white.jpg"
            alt={site.nome}
            width={72}
            height={72}
            className="mb-5 rounded-full bg-crema/90 p-2"
          />
          <h1 className="font-display text-5xl tracking-wide sm:text-6xl">{site.nome}</h1>
          <p className="mt-2 font-body text-sm uppercase tracking-widest2 text-crema/80">
            {site.claim} · {site.comune} ({site.provincia})
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/camere"
              className="rounded-full bg-crema px-6 py-3 font-body text-sm uppercase tracking-widest2 text-inchiostro transition hover:bg-white"
            >
              Scopri le camere
            </Link>
            <Link
              href="/disponibilita"
              className="rounded-full border border-crema/70 px-6 py-3 font-body text-sm uppercase tracking-widest2 text-crema transition hover:bg-crema/10"
            >
              Vedi disponibilità
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="font-display text-3xl leading-snug text-inchiostro sm:text-4xl">
          Un piccolo rifugio nel cuore di {site.comune}, tra la Sila e il silenzio.
        </p>
        <p className="mx-auto mt-5 max-w-xl font-body text-inchiostro/70">
          Due camere con bagno privato, parcheggio riservato e tutto il necessario
          per un soggiorno semplice e curato.
        </p>
      </section>

      {/* CAMERE */}
      <section className="bg-cremascura/60 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-10 text-center font-display text-3xl text-inchiostro sm:text-4xl">
            Le camere
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {camere.map((c) => {
              const accento = c.accento === "petrolio" ? "border-petrolio" : "border-senape";
              return (
                <Link
                  key={c.slug}
                  href={`/camere#${c.slug}`}
                  className={`group block overflow-hidden rounded-2xl border-l-4 ${accento} bg-crema shadow-sm transition hover:shadow-md`}
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={c.copertina.src}
                      alt={c.copertina.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="font-display text-2xl text-inchiostro">{c.nome}</p>
                    <p className="mt-1 font-body text-sm text-inchiostro/60">{c.sottotitolo}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVIZI */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-10 text-center font-display text-3xl text-inchiostro sm:text-4xl">
          Servizi
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {servizi.map((s) => (
            <div key={s.titolo}>
              <p className="font-display text-xl text-rosso">{s.titolo}</p>
              <p className="mt-2 font-body text-sm text-inchiostro/70">{s.testo}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="bg-inchiostro py-20 text-center text-crema">
        <p className="font-display text-3xl sm:text-4xl">Vuoi prenotare il tuo soggiorno?</p>
        <p className="mx-auto mt-3 max-w-md font-body text-crema/70">
          Scrivici su WhatsApp: ti rispondiamo con la disponibilità reale delle camere.
        </p>
        <div className="mt-8 flex justify-center">
          <WhatsAppButton label="Scrivici ora" fixed={false} />
        </div>
      </section>
    </>
  );
}
