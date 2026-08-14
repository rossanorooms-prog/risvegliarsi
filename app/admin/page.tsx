"use client";

import { useEffect, useState } from "react";
import { camere } from "@/data/config";
import CalendarMonth from "@/components/CalendarMonth";

type Occupazioni = Record<string, Record<string, boolean>>;

export default function AdminPage() {
  const [autenticato, setAutenticato] = useState<boolean | null>(null);
  const [password, setPassword] = useState("");
  const [errore, setErrore] = useState("");
  const [occupazioni, setOccupazioni] = useState<Occupazioni>({});
  const [erroreSalvataggio, setErroreSalvataggio] = useState("");

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

  async function toggle(cameraSlug: string, dataISO: string, nuovoStato: boolean) {
    setErroreSalvataggio("");

    // aggiornamento ottimistico
    setOccupazioni((prev) => {
      const copia = { ...prev, [cameraSlug]: { ...(prev[cameraSlug] || {}) } };
      if (nuovoStato) copia[cameraSlug][dataISO] = true;
      else delete copia[cameraSlug][dataISO];
      return copia;
    });

    try {
      const res = await fetch("/api/calendar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ camera: cameraSlug, data: dataISO, occupata: nuovoStato }),
      });
      const body = await res.json().catch(() => null);

      if (!res.ok || !body?.ok) {
        setErroreSalvataggio(
          body?.error || "Non sono riuscito a salvare la modifica. Riprova tra poco."
        );
        // ripristino lo stato reale dal server
        const check = await fetch("/api/calendar").then((r) => r.json());
        if (check.ok) setOccupazioni(check.data);
      }
    } catch {
      setErroreSalvataggio("Errore di connessione. Controlla la rete e riprova.");
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
        Clicca su un giorno per segnarlo come occupato o libero. Le modifiche si salvano automaticamente.
      </p>

      {erroreSalvataggio && (
        <div className="mt-6 rounded-md border border-rosso/30 bg-rosso/5 px-4 py-3 font-body text-sm text-rosso">
          {erroreSalvataggio}
        </div>
      )}

      <div className="mt-10 grid gap-10 sm:grid-cols-2">
        {camere.map((c) => {
          const date = new Set(Object.keys(occupazioni[c.slug] || {}));
          const accentClass = c.accento === "petrolio" ? "bg-petrolio" : "bg-senape";
          return (
            <div key={c.slug}>
              <p className="mb-3 font-display text-2xl text-inchiostro">{c.nome}</p>
              <CalendarMonth
                occupate={date}
                editabile
                accentClass={accentClass}
                onToggle={(dataISO, nuovoStato) => toggle(c.slug, dataISO, nuovoStato)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
