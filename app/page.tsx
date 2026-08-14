import Image from "next/image";
import Link from "next/link";
import { camere, servizi, site, galleriaEsterni } from "@/data/config";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex h-[96vh] min-h-[620px] items-end justify-center overflow-hidden">
        <Image
          src={galleriaEsterni[0].src}
          alt={galleriaEsterni[0].alt}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-inchiostro via-inchiostro/40 to-inchiostro/10" />
        <div className="relative z-10 flex flex-col items-center px-6 pb-20 text-center text-crema">
          <Image
            src="/images/logo-white.png"
            alt={site.nome}
            width={96}
            height={96}
            className="mb-6"
          />
          <p className="font-body text-xs uppercase tracking-widest2 text-orochiaro">
            {site.comune} · {site.provincia}
          </p>
          <h1 className="mt-4 font-display text-6xl tracking-wide sm:text-7xl">{site.nome}</h1>
          <div className="mt-4 h-px w-20 bg-oro/60" />
          <p className="mt-4 font-body text-sm uppercase tracking-widest2 text-crema/80">
            {site.claim}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/camere"
              className="rounded-full bg-oro px-7 py-3 font-body text-sm uppercase tracking-widest2 text-inchiostro transition hover:bg-orochiaro"
            >
              Scopri le camere
            </Link>
            <Link
              href="/disponibilita"
              className="rounded-full border border-crema/60 px-7 py-3 font-body text-sm uppercase tracking-widest2 text-crema transition hover:bg-crema/10"
            >
              Vedi disponibilità
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="font-display text-3xl italic leading-snug text-inchiostro sm:text-4xl">
          Un rifugio raccolto nel cuore di {site.comune}, tra la Sila e il silenzio.
        </p>
        <div className="mx-auto mt-6 h-px w-14 bg-oro/50" />
        <p className="mx-auto mt-6 max-w-xl font-body text-inchiostro/70">
          Due camere con bagno privato, parcheggio riservato e la cura dei dettagli
          che fa la differenza in un soggiorno.
        </p>
      </section>

      {/* CAMERE */}
      <section className="bg-cremascura/50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-3 text-center font-display text-4xl text-inchiostro sm:text-5xl">
            Le camere
          </h2>
          <p className="mx-auto mb-12 max-w-md text-center font-body text-sm text-inchiostro/60">
            Due atmosfere distinte, la stessa cura in ogni dettaglio.
          </p>
          <div className="grid gap-8 sm:grid-cols-2">
            {camere.map((c) => {
              const accento = c.accento === "petrolio" ? "border-petrolio" : "border-senape";
              return (
                <Link
                  key={c.slug}
                  href={`/camere#${c.slug}`}
                  className={`group block overflow-hidden rounded-sm border-t-2 ${accento} bg-crema shadow-sm transition hover:shadow-xl`}
                >
                  <div className="relative h-80 w-full overflow-hidden">
                    <Image
                      src={c.copertina.src}
                      alt={c.copertina.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7">
                    <p className="font-display text-3xl text-inchiostro">{c.nome}</p>
                    <p className="mt-2 font-body text-sm uppercase tracking-widest2 text-inchiostro/50">{c.sottotitolo}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVIZI */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-3 text-center font-display text-4xl text-inchiostro sm:text-5xl">
          Servizi
        </h2>
        <p className="mx-auto mb-14 max-w-md text-center font-body text-sm text-inchiostro/60">
          Tutto quello che trovi incluso nel soggiorno.
        </p>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {servizi.map((s) => (
            <div key={s.titolo} className="border-t border-oro/30 pt-4">
              <p className="font-display text-xl text-inchiostro">{s.titolo}</p>
              <p className="mt-2 font-body text-sm text-inchiostro/70">{s.testo}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="bg-inchiostro py-24 text-center text-crema">
        <p className="font-display text-4xl sm:text-5xl">Vuoi prenotare il tuo soggiorno?</p>
        <div className="mx-auto mt-6 h-px w-14 bg-oro/50" />
        <p className="mx-auto mt-6 max-w-md font-body text-crema/70">
          Scrivici su WhatsApp: ti rispondiamo con la disponibilità reale delle camere.
        </p>
        <div className="mt-10 flex justify-center">
          <WhatsAppButton label="Scrivici ora" fixed={false} />
        </div>
      </section>
    </>
  );
}
