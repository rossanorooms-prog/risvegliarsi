"use client";

import { useEffect, useState } from "react";
import { camere } from "@/data/config";
import CalendarMonth, { type GiornoInfo } from "@/components/CalendarMonth";

type Occupazioni = Record<string, Record<string, GiornoInfo>>;
type Recensione = {
  id: string;
  nome: string;
  valutazione: number;
  testo: string;
  data: string;
  approvata: boolean;
};

const MESI_LUNGHI = [
  "gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno",
  "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre",
];

function formattaData(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MESI_LUNGHI[m - 1]} ${y}`;
}

// Pannello di dettaglio per un singolo giorno: occupata/libera + note facoltative.
function PannelloGiorno({
  cameraNome,
  dataISO,
  infoIniziale,
  onSalva,
  onChiudi,
}: {
  cameraNome: string;
  dataISO: string;
  infoIniziale?: GiornoInfo;
  onSalva: (info: GiornoInfo | null) => void;
  onChiudi: () => void;
}) {
  const [occupata, setOccupata] = useState(infoIniziale?.occupata ?? true);
  const [nome, setNome] = useState(infoIniziale?.nome ?? "");
  const [persone, setPersone] = useState(infoIniziale?.persone ? String(infoIniziale.persone) : "");
  const [note, setNote] = useState(infoIniziale?.note ?? "");

  function salva() {
    if (!occupata) {
      onSalva(null); // libera il giorno, nessun dettaglio da conservare
      return;
    }
    const personeNum = parseInt(persone, 10);
    onSalva({
      occupata: true,
      ...(nome.trim() ? { nome: nome.trim() } : {}),
      ...(Number.isInteger(personeNum) && personeNum > 0 ? { persone: personeNum } : {}),
      ...(note.trim() ? { note: note.trim() } : {}),
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-inchiostro/50 p-4" onClick={onChiudi}>
      <div
        className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="font-display text-xl text-inchiostro">{cameraNome}</p>
        <p className="font-body text-sm text-inchiostro/50">{formattaData(dataISO)}</p>

        <label className="mt-5 flex items-center gap-2 font-body text-sm text-inchiostro/80">
          <input
            type="checkbox"
            checked={occupata}
            onChange={(e) => setOccupata(e.target.checked)}
            className="h-4 w-4"
          />
          Camera occupata in questa data
        </label>

        {occupata && (
          <div className="mt-4 space-y-4">
            <div>
              <label className="block font-body text-xs uppercase tracking-wide text-inchiostro/50">
                Nome ospite (facoltativo)
              </label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Es. Mario Rossi"
                className="mt-1 w-full rounded-lg border border-inchiostro/20 px-3 py-2 font-body text-sm text-inchiostro focus:outline-none focus-visible:ring-2 focus-visible:ring-rosso"
              />
            </div>
            <div>
              <label className="block font-body text-xs uppercase tracking-wide text-inchiostro/50">
                Numero persone (facoltativo)
              </label>
              <input
                type="number"
                min={1}
                value={persone}
                onChange={(e) => setPersone(e.target.value)}
                placeholder="Es. 2"
                className="mt-1 w-full rounded-lg border border-inchiostro/20 px-3 py-2 font-body text-sm text-inchiostro focus:outline-none focus-visible:ring-2 focus-visible:ring-rosso"
              />
            </div>
            <div>
              <label className="block font-body text-xs uppercase tracking-wide text-inchiostro/50">
                Note (facoltativo)
              </label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={3}
                placeholder="Es. Check-in ore 18, check-out ore 10"
                className="mt-1 w-full rounded-lg border border-inchiostro/20 px-3 py-2 font-body text-sm text-inchiostro focus:outline-none focus-visible:ring-2 focus-visible:ring-rosso"
              />
            </div>
          </div>
        )}

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onChiudi}
            className="font-body text-sm text-inchiostro/60 hover:text-inchiostro"
          >
            Annulla
          </button>
          <button
            onClick={salva}
            className="rounded-full bg-inchiostro px-5 py-2 font-body text-sm uppercase tracking-widest2 text-crema hover:bg-inchiostro/90"
          >
            Salva
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AdminPage() {
  const [autenticato, setAutenticato] = useState<boolean | null>(null);
  const [password, setPassword] = useState("");
  const [errore, setErrore] = useState("");
  const [occupazioni, setOccupazioni] = useState<Occupazioni>({});
  const [erroreSalvataggio, setErroreSalvataggio] = useState("");
  const [recensioni, setRecensioni] = useState<Recensione[]>([]);
  const [erroreRecensioni, setErroreRecensioni] = useState("");
  const [selezione, setSelezione] = useState<{ camera: string; data: string } | null>(null);

  useEffect(() => {
    fetch("/api/admin-auth")
      .then((r) => r.json())
      .then((res) => setAutenticato(Boolean(res.ok)));
  }, []);

  useEffect(() => {
    if (autenticato) {
      fetch("/api/calendar")
        .then((r) => r.json())
        .then((res) => res.ok && setOccupazioni(res.data));
      fetch("/api/recensioni")
        .then((r) => r.json())
        .then((res) => res.ok && setRecensioni(res.data));
    }
  }, [autenticato]);

  async function login(e: React.FormEvent) {
    e.preventDefault();
    setErrore("");
    const res = await fetch("/api/admin-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    const data = await res.json();
    if (data.ok) {
      setAutenticato(true);
    } else {
      setErrore("Password errata.");
    }
  }

  async function logout() {
    await fetch("/api/admin-auth", { method: "DELETE" });
    setAutenticato(false);
  }

  async function salvaGiorno(info: GiornoInfo | null) {
    if (!selezione) return;
    const { camera: cameraSlug, data: dataISO } = selezione;
    setErroreSalvataggio("");
    setSelezione(null);

    // aggiornamento ottimistico
    setOccupazioni((prev) => {
      const copia = { ...prev, [cameraSlug]: { ...(prev[cameraSlug] || {}) } };
      if (info) copia[cameraSlug][dataISO] = info;
      else delete copia[cameraSlug][dataISO];
      return copia;
    });

    try {
      const res = await fetch("/api/calendar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          camera: cameraSlug,
          data: dataISO,
          occupata: Boolean(info?.occupata),
          nome: info?.nome,
          persone: info?.persone,
          note: info?.note,
        }),
      });
      const body = await res.json().catch(() => null);

      if (!res.ok || !body?.ok) {
        setErroreSalvataggio(
          body?.error || "Non sono riuscito a salvare la modifica. Riprova tra poco."
        );
        const check = await fetch("/api/calendar").then((r) => r.json());
        if (check.ok) setOccupazioni(check.data);
      }
    } catch {
      setErroreSalvataggio("Errore di connessione. Controlla la rete e riprova.");
    }
  }

  async function modera(id: string, azione: "approva" | "elimina") {
    setErroreRecensioni("");
    setRecensioni((prev) =>
      azione === "elimina"
        ? prev.filter((r) => r.id !== id)
        : prev.map((r) => (r.id === id ? { ...r, approvata: true } : r))
    );

    try {
      const res = await fetch("/api/recensioni", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, azione }),
      });
      const body = await res.json().catch(() => null);
      if (!res.ok || !body?.ok) {
        setErroreRecensioni(body?.error || "Non sono riuscito a salvare la modifica. Riprova tra poco.");
        const check = await fetch("/api/recensioni").then((r) => r.json());
        if (check.ok) setRecensioni(check.data);
      }
    } catch {
      setErroreRecensioni("Errore di connessione. Controlla la rete e riprova.");
    }
  }

  if (autenticato === null) {
    return <div className="px-6 py-24 text-center font-body text-inchiostro/50">Caricamento…</div>;
  }

  if (!autenticato) {
    return (
      <div className="mx-auto max-w-sm px-6 py-24">
        <h1 className="text-center font-display text-3xl text-inchiostro">Area amministratore</h1>
        <form onSubmit={login} className="mt-8 space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full rounded-lg border border-inchiostro/20 bg-white px-4 py-3 font-body text-inchiostro focus:outline-none focus-visible:ring-2 focus-visible:ring-rosso"
            autoFocus
          />
          {errore && <p className="font-body text-sm text-rosso">{errore}</p>}
          <button
            type="submit"
            className="w-full rounded-full bg-inchiostro px-6 py-3 font-body text-sm uppercase tracking-widest2 text-crema hover:bg-inchiostro/90"
          >
            Entra
          </button>
        </form>
      </div>
    );
  }

  const cameraSelezionata = selezione ? camere.find((c) => c.slug === selezione.camera) : undefined;

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-3xl text-inchiostro sm:text-4xl">Gestione disponibilità</h1>
        <button
          onClick={logout}
          className="font-body text-sm text-inchiostro/60 underline hover:text-rosso"
        >
          Esci
        </button>
      </div>
      <p className="mt-3 font-body text-inchiostro/60">
        Clicca su un giorno per segnarlo occupato o libero, e aggiungere facoltativamente nome
        ospite, numero di persone e note (check-in, check-out, ecc). Le modifiche si salvano
        automaticamente.
      </p>

      <div className="mt-4">
        <a
          href="/api/ical/verde"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-5 font-body text-xs uppercase tracking-widest2 text-inchiostro/50 underline hover:text-rosso"
        >
          Esporta calendario Alba (.ics)
        </a>
        <a
          href="/api/ical/senape"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-xs uppercase tracking-widest2 text-inchiostro/50 underline hover:text-rosso"
        >
          Esporta calendario Tramonto (.ics)
        </a>
      </div>

      {erroreSalvataggio && (
        <div className="mt-6 rounded-md border border-rosso/30 bg-rosso/5 px-4 py-3 font-body text-sm text-rosso">
          {erroreSalvataggio}
        </div>
      )}

      <div className="mt-10 grid gap-10 sm:grid-cols-2">
        {camere.map((c) => {
          const giorniCamera = occupazioni[c.slug] || {};
          return (
            <div key={c.slug}>
              <p className="mb-3 font-display text-2xl text-inchiostro">{c.nome}</p>
              <CalendarMonth
                giorni={giorniCamera}
                editabile
                onSelectGiorno={(dataISO) => setSelezione({ camera: c.slug, data: dataISO })}
              />
            </div>
          );
        })}
      </div>

      {selezione && cameraSelezionata && (
        <PannelloGiorno
          cameraNome={cameraSelezionata.nome}
          dataISO={selezione.data}
          infoIniziale={occupazioni[selezione.camera]?.[selezione.data]}
          onSalva={salvaGiorno}
          onChiudi={() => setSelezione(null)}
        />
      )}

      <div className="mx-auto mt-16 h-px w-full bg-inchiostro/10" />

      <h2 className="mt-16 font-display text-3xl text-inchiostro sm:text-4xl">Recensioni</h2>
      <p className="mt-3 font-body text-inchiostro/60">
        Le recensioni in attesa non sono visibili sul sito finché non le approvi.
      </p>

      {erroreRecensioni && (
        <div className="mt-6 rounded-md border border-rosso/30 bg-rosso/5 px-4 py-3 font-body text-sm text-rosso">
          {erroreRecensioni}
        </div>
      )}

      {recensioni.length === 0 ? (
        <p className="mt-8 font-body text-sm text-inchiostro/50">Nessuna recensione ricevuta finora.</p>
      ) : (
        <div className="mt-8 space-y-4">
          {recensioni.map((r) => (
            <div
              key={r.id}
              className={`rounded-lg border p-5 ${
                r.approvata ? "border-inchiostro/10 bg-white" : "border-oro/40 bg-oro/5"
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="font-display text-lg text-inchiostro">
                    {r.nome}{" "}
                    <span className="font-body text-sm text-oro">{"★".repeat(r.valutazione)}</span>
                  </p>
                  <p className="font-body text-xs text-inchiostro/40">
                    {new Date(r.data).toLocaleDateString("it-IT", { year: "numeric", month: "long", day: "numeric" })}
                    {" · "}
                    {r.approvata ? "pubblicata" : "in attesa di approvazione"}
                  </p>
                </div>
                <div className="flex gap-2">
                  {!r.approvata && (
                    <button
                      onClick={() => modera(r.id, "approva")}
                      className="rounded-full bg-inchiostro px-4 py-1.5 font-body text-xs uppercase tracking-widest2 text-crema hover:bg-inchiostro/90"
                    >
                      Approva
                    </button>
                  )}
                  <button
                    onClick={() => modera(r.id, "elimina")}
                    className="rounded-full border border-rosso/40 px-4 py-1.5 font-body text-xs uppercase tracking-widest2 text-rosso hover:bg-rosso/5"
                  >
                    Elimina
                  </button>
                </div>
              </div>
              <p className="mt-3 font-body text-sm text-inchiostro/80">{r.testo}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
