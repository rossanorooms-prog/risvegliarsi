import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy — Risvegliarsi",
  description: "Informativa sui cookie del sito di Risvegliarsi Bed & Benessere, B&B a Longobucco (CS).",
};

export default function CookiePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-4xl text-inchiostro sm:text-5xl">
        Cookie Policy
      </h1>
      <p className="mt-3 font-body text-sm text-inchiostro/50">
        Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT", { year: "numeric", month: "long", day: "numeric" })}
      </p>

      <div className="mt-10 space-y-8 font-body text-inchiostro/80">
        <section>
          <h2 className="font-display text-2xl text-inchiostro">Cosa sono i cookie</h2>
          <p className="mt-3">
            I cookie sono piccoli file di testo che i siti visitati inviano al
            browser dell&apos;utente, dove vengono memorizzati per essere poi
            ritrasmessi agli stessi siti alla visita successiva.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-inchiostro">Cookie utilizzati da questo sito</h2>
          <p className="mt-3">
            Questo sito, nella sua configurazione base, utilizza esclusivamente:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong>Cookie tecnici necessari</strong>, ad esempio quello che
              mantiene la sessione dell&apos;amministratore autenticato nell&apos;area
              riservata (/admin). Questi cookie sono indispensabili al
              funzionamento del sito e non richiedono consenso.
            </li>
          </ul>
          <p className="mt-3 rounded-md bg-cremascura/60 p-4 text-sm text-inchiostro/60">
            Nota per il gestore del sito: se in futuro vengono aggiunti strumenti
            di terze parti (es. Google Analytics, mappe con cookie di profilazione,
            pixel di Facebook/Meta), questa pagina va aggiornata elencandoli e va
            introdotto un banner di consenso cookie prima che tali cookie vengano
            installati, come richiesto dalla normativa vigente.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-inchiostro">Come gestire i cookie dal browser</h2>
          <p className="mt-3">
            È possibile gestire le preferenze relative ai cookie direttamente
            all&apos;interno del proprio browser ed impedire, ad esempio, che
            terze parti possano installarne. Tramite le impostazioni del browser
            è inoltre possibile eliminare i cookie installati in passato,
            incluso il cookie di sessione dell&apos;area riservata.
          </p>
        </section>
      </div>
    </div>
  );
}
