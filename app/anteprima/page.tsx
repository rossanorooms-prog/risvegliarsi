import Image from "next/image";
import Link from "next/link";
import { camere, servizi, site, galleriaEsterni, cosaFare, galleriaComune } from "@/data/config";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reviews from "@/components/Reviews";

const tagline = [
  { titolo: "Camere curate nei dettagli", testo: "dove comfort e calore si incontrano" },
  { titolo: "Un soggiorno fatto di relax", testo: "vicino alla bellezza delle piccole cose" },
  { titolo: "Scopri il nostro borgo", testo: "e vivi un viaggio tra storia e autenticità" },
  { titolo: "Respira la Sila", testo: "e lasciati avvolgere dalla sua quiete" },
];

// Galleria teaser per la home: alcune foto delle camere + spazi comuni
const teaserFoto = [
  camere[0].galleria[0],
  camere[1].galleria[0],
  galleriaComune[0],
  camere[0].galleria[2] || camere[0].galleria[0],
];

export default function AnteprimaPage() {
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
          <Image src="/images/logo-white.png" alt={site.nome} width={96} height={96} className="mb-6" />
          <p className="font-body text-xs uppercase tracking-widest2 text-orochiaro">
            {site.comune} · {site.provincia}
          </p>
          <h1 className="mt-4 font-display text-6xl tracking-wide sm:text-7xl">{site.nome}</h1>
          <div className="mt-4 h-px w-20 bg-oro/60" />
          <p className="mt-4 font-body text-sm uppercase tracking-widest2 text-crema/80">{site.claim}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/camere" className="rounded-full bg-oro px-7 py-3 font-body text-sm uppercase tracking-widest2 text-inchiostro transition hover:bg-orochiaro">
              Scopri le camere
            </Link>
            <Link href="/disponibilita" className="rounded-full border border-crema/60 px-7 py-3 font-body text-sm uppercase tracking-widest2 text-crema transition hover:bg-crema/10">
              Vedi disponibilità
            </Link>
          </div>
        </div>
      </section>

      {/* COSA TI ASPETTA — narrazione d'apertura */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="font-body text-xs uppercase tracking-widest2 text-oro">Cosa ti aspetta</p>
        <p className="mt-4 font-display text-3xl italic leading-snug text-inchiostro sm:text-4xl">
          Bellezza e raffinatezza nel cuore di {site.comune}
        </p>
        <div className="mx-auto mt-6 h-px w-14 bg-oro/50" />
        <p className="mx-auto mt-6 max-w-xl font-body text-inchiostro/70">
          Le mura di {site.nome} evocano la storia e le tradizioni di un tempo
          passato, che abbiamo voluto unire al comfort moderno: la struttura è
          stata finemente ristrutturata e ammodernata di recente, in un
          equilibrio curato tra elementi antichi restaurati e dettagli
          contemporanei — per rendere il tuo soggiorno unico, avvolto dalla
          tranquillità che solo un piccolo borgo di montagna può offrire.
        </p>
      </section>

      {/* TAGLINE — quattro promesse brevi, come un indice visivo */}
      <section className="border-y border-oro/20 bg-cremascura/50 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:grid-cols-2 md:grid-cols-4">
          {tagline.map((t) => (
            <div key={t.titolo} className="text-center">
              <p className="font-display text-lg text-inchiostro">{t.titolo}</p>
              <p className="mt-2 font-body text-xs text-inchiostro/50">{t.testo}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CAMERE */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-center font-body text-xs uppercase tracking-widest2 text-oro">Le nostre camere</p>
          <h2 className="mb-3 mt-3 text-center font-display text-4xl text-inchiostro sm:text-5xl">
            Scegli l&apos;atmosfera che fa per te
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
                    <p className="mt-2 font-body text-sm text-inchiostro/60">{c.descrizione}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* COSA VISITARE — teaser del territorio direttamente in home */}
      <section className="bg-inchiostro py-24 text-crema">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="font-body text-xs uppercase tracking-widest2 text-orochiaro">Un borgo antico</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Cosa visitare</h2>
          <div className="mx-auto mt-6 h-px w-14 bg-oro/50" />
          <div className="mt-12 grid gap-10 text-left sm:grid-cols-2">
            {cosaFare.slice(0, 4).map((m) => (
              <div key={m.titolo} className="border-t border-crema/15 pt-4">
                <p className="font-display text-xl text-orochiaro">{m.titolo}</p>
                <p className="mt-2 font-body text-sm text-crema/70">{m.testo}</p>
              </div>
            ))}
          </div>
          <Link
            href="/longobucco"
            className="mt-12 inline-block rounded-full border border-crema/60 px-7 py-3 font-body text-sm uppercase tracking-widest2 text-crema transition hover:bg-crema/10"
          >
            Scopri il borgo
          </Link>
        </div>
      </section>

      {/* GALLERIA TEASER */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-center font-body text-xs uppercase tracking-widest2 text-oro">Sei curioso?</p>
          <h2 className="mt-3 text-center font-display text-4xl text-inchiostro sm:text-5xl">
            Fai un giro nella struttura
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {teaserFoto.map((f, i) => (
              <div key={i} className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image src={f.src} alt={f.alt} fill className="object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/camere"
              className="inline-block rounded-full bg-inchiostro px-7 py-3 font-body text-sm uppercase tracking-widest2 text-crema transition hover:bg-inchiostro/90"
            >
              Guarda tutte le foto
            </Link>
          </div>
        </div>
      </section>

      {/* SERVIZI */}
      <section className="bg-cremascura/50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-3 text-center font-display text-4xl text-inchiostro sm:text-5xl">Servizi</h2>
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
