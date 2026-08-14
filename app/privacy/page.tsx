import { site } from "@/data/config";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy — Risvegliarsi" };

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-4xl text-inchiostro sm:text-5xl">
        Informativa sulla Privacy
      </h1>
      <p className="mt-3 font-body text-sm text-inchiostro/50">
        Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT", { year: "numeric", month: "long", day: "numeric" })}
      </p>

      <div className="mt-10 space-y-8 font-body text-inchiostro/80">
        <section>
          <h2 className="font-display text-2xl text-inchiostro">1. Titolare del trattamento</h2>
          <p className="mt-3">
            Il Titolare del trattamento dei dati raccolti tramite questo sito è {site.nome},
            con sede in {site.comune} ({site.provincia}).
            Per qualsiasi richiesta relativa al trattamento dei dati personali è possibile
            contattarci all&apos;indirizzo {site.email} oppure via WhatsApp al numero
            indicato nella pagina Contatti.
          </p>
          <p className="mt-3 rounded-md bg-cremascura/60 p-4 text-sm text-inchiostro/60">
            Nota per il gestore del sito: questa è una bozza generica di informativa privacy.
            Prima della pubblicazione ti consigliamo di farla revisionare da un
            consulente privacy/legale, indicando dati reali del titolare (ragione sociale
            o nominativo, indirizzo completo, eventuale P.IVA) e verificando gli
            strumenti effettivamente in uso sul sito.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-inchiostro">2. Dati raccolti</h2>
          <p className="mt-3">Questo sito raccoglie un numero minimo di dati personali:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong>Dati di navigazione:</strong> informazioni tecniche raccolte
              automaticamente durante la normale navigazione (es. indirizzo IP,
              tipo di browser), utilizzate esclusivamente a fini di sicurezza e
              funzionamento tecnico del sito.
            </li>
            <li>
              <strong>Dati forniti volontariamente:</strong> se ci contatti tramite
              WhatsApp, i dati che ci fornisci nella conversazione (nome, numero di
              telefono, eventuali richieste) sono trattati secondo l&apos;informativa
              privacy di WhatsApp/Meta e da noi utilizzati esclusivamente per
              rispondere alla tua richiesta e gestire un&apos;eventuale prenotazione.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl text-inchiostro">3. Finalità del trattamento</h2>
          <p className="mt-3">
            I dati raccolti sono trattati per: rispondere alle richieste di
            informazioni e disponibilità, gestire eventuali prenotazioni,
            adempiere agli obblighi di legge (inclusa la comunicazione dei dati
            degli ospiti alle autorità di pubblica sicurezza, come previsto dalla
            normativa italiana sulle strutture ricettive).
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-inchiostro">4. Base giuridica</h2>
          <p className="mt-3">
            Il trattamento si basa sull&apos;esecuzione di misure precontrattuali
            e contrattuali (gestione della richiesta/prenotazione), sull&apos;adempimento
            di obblighi legali e, ove applicabile, sul consenso dell&apos;interessato.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-inchiostro">5. Conservazione dei dati</h2>
          <p className="mt-3">
            I dati sono conservati per il tempo necessario a gestire la richiesta
            o la prenotazione e per il periodo previsto dagli obblighi di legge
            applicabili alle strutture ricettive.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-inchiostro">6. Diritti dell&apos;interessato</h2>
          <p className="mt-3">
            In qualità di interessato hai diritto di richiedere in qualsiasi
            momento l&apos;accesso, la rettifica, la cancellazione dei tuoi dati
            personali, la limitazione del trattamento, nonché di opporti al
            trattamento stesso, scrivendo a {site.email}. Hai inoltre diritto di
            proporre reclamo al Garante per la protezione dei dati personali.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-inchiostro">7. Cookie</h2>
          <p className="mt-3">
            Per informazioni sui cookie utilizzati da questo sito, consulta la
            nostra{" "}
            <a href="/cookie" className="text-rosso underline">
              Cookie Policy
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
