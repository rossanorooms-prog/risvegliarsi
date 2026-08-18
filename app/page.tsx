import Image from "next/image";
import Link from "next/link";
import { camere, servizi, site, galleriaEsterni } from "@/data/config";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reviews from "@/components/Reviews";
import HeroSlideshow from "@/components/HeroSlideshow";
import RoomCarousel from "@/components/RoomCarousel";

// Foto generali per la hero: facciate e ingressi, escludendo i primi piani
// molto tecnici (comignolo, mensole in cotto) che rendono meglio nella
// galleria dedicata che come prima immagine del sito.
const fotoHero = galleriaEsterni.filter((f) =>
  ["facciata-giorno", "facciata-notte", "ingresso-1", "ingresso-2"].some((k) => f.src.includes(k))
);

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex h-[96vh] min-h-[620px] items-end justify-center overflow-hidden">
        <HeroSlideshow foto={fotoHero} />
        <div className="absolute inset-0 bg-gradient-to-t from-inchiostro via-inchiostro/40 to-inchiostro/10" />
        <div className="relative z-10 flex flex-col items-center px-6 pb-20 text-center text-crema">
          <Image
            src="/images/logo-white.png"
            alt={site.nome}
            width={96}
            height={96}
            className="hero-entra mb-6"
            style={{ animationDelay: "0ms" }}
          />
          <p
            className="hero-entra font-body text-xs uppercase tracking-widest2 text-orochiaro"
            style={{ animationDelay: "150ms" }}
          >
            {site.comune} · {site.provincia}
          </p>
          <h1
            className="hero-entra mt-4 font-display text-6xl tracking-wide sm:text-7xl"
            style={{ animationDelay: "280ms" }}
          >
            {site.nome}
          </h1>
          <div className="hero-entra mt-4 h-px w-20 bg-oro/60" style={{ animationDelay: "450ms" }} />
          <p
            className="hero-entra mt-4 font-body text-sm uppercase tracking-widest2 text-crema/80"
            style={{ animationDelay: "550ms" }}
          >
            {site.claim}
          </p>
          <div className="hero-entra mt-10 flex flex-wrap justify-center gap-4" style={{ animationDelay: "700ms" }}>
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
        <p className="mx-auto mt-4 max-w-xl font-body text-inchiostro/70">
          La struttura è stata finemente ristrutturata e ammodernata di recente,
          in un equilibrio curato tra elementi antichi restaurati e comfort
          moderni.
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
                <div
                  key={c.slug}
                  className={`overflow-hidden rounded-sm border-t-2 ${accento} bg-crema shadow-sm transition hover:shadow-xl`}
                >
                  <RoomCarousel foto={c.galleria.slice(0, 5)} />
                  <div className="p-7">
                    <p className="font-display text-3xl text-inchiostro">{c.nome}</p>
                    <p className="mt-2 font-body text-sm uppercase tracking-widest2 text-inchiostro/50">{c.sottotitolo}</p>
                    <Link
                      href={`/camere#${c.slug}`}
                      className="mt-4 inline-block font-body text-sm uppercase tracking-widest2 text-rosso hover:underline"
                    >
                      Scopri tutte le foto →
                    </Link>
                  </div>
                </div>
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

      {/* RECENSIONI */}
      <Reviews />

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
