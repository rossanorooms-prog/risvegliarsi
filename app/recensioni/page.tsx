"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/data/config";

export default function RecensioniPage() {
  const [nome, setNome] = useState("");
  const [testo, setTesto] = useState("");
  const [valutazione, setValutazione] = useState(5);
  const [sitoWeb, setSitoWeb] = useState(""); // campo trappola anti-spam
  const [inviando, setInviando] = useState(false);
  const [inviata, setInviata] = useState(false);
  const [errore, setErrore] = useState("");

  async function invia(e: React.FormEvent) {
    e.preventDefault();
    setErrore("");
    setInviando(true);

    try {
      const res = await fetch("/api/recensioni", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, testo, valutazione, sito_web: sitoWeb }),
      });
      const body = await res.json().catch(() => null);
      if (!res.ok || !body?.ok) {
        setErrore(body?.error || "Non sono riuscito a inviare la recensione. Riprova tra poco.");
        setInviando(false);
        return;
      }
      setInviata(true);
    } catch {
      setErrore("Errore di connessione. Controlla la rete e riprova.");
      setInviando(false);
    }
  }

  if (inviata) {
    return (
      <div className="mx-auto max-w-xl px-6 py-24 text-center">
        <h1 className="font-display text-4xl text-inchiostro sm:text-5xl">Grazie!</h1>
        <p className="mx-auto mt-5 max-w-md font-body text-inchiostro/70">
          La tua recensione è stata inviata e comparirà sul sito non appena
          verrà verificata da {site.nome}.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-oro px-7 py-3 font-body text-sm uppercase tracking-widest2 text-inchiostro transition hover:bg-orochiaro"
        >
          Torna alla home
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl px-6 py-16">
      <h1 className="text-center font-display text-4xl text-inchiostro sm:text-5xl">
        Lascia una recensione
      </h1>
      <p className="mx-auto mt-5 max-w-md text-center font-body text-inchiostro/70">
        Sei stato nostro ospite? Raccontaci com&apos;è andata — la tua recensione
        sarà pubblicata dopo una breve verifica.
      </p>

      <form onSubmit={invia} className="mt-10 space-y-6">
        <div>
          <label className="block font-body text-sm text-inchiostro/70">Il tuo nome</label>
          <input
            type="text"
            required
            maxLength={60}
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="mt-2 w-full rounded-lg border border-inchiostro/20 bg-white px-4 py-3 font-body text-inchiostro focus:outline-none focus-visible:ring-2 focus-visible:ring-rosso"
          />
        </div>

        <div>
          <label className="block font-body text-sm text-inchiostro/70">Valutazione</label>
          <div className="mt-2 flex gap-1">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setValutazione(n)}
                aria-label={`${n} stelle`}
                className="text-3xl leading-none text-oro"
              >
                {n <= valutazione ? "★" : "☆"}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block font-body text-sm text-inchiostro/70">La tua recensione</label>
          <textarea
            required
            maxLength={600}
            rows={5}
            value={testo}
            onChange={(e) => setTesto(e.target.value)}
            className="mt-2 w-full rounded-lg border border-inchiostro/20 bg-white px-4 py-3 font-body text-inchiostro focus:outline-none focus-visible:ring-2 focus-visible:ring-rosso"
          />
        </div>

        {/* campo nascosto anti-spam: gli utenti reali non lo vedono e non lo compilano */}
        <input
          type="text"
          name="sito_web"
          value={sitoWeb}
          onChange={(e) => setSitoWeb(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          className="absolute -left-[9999px]"
          aria-hidden="true"
        />

        {errore && <p className="font-body text-sm text-rosso">{errore}</p>}

        <button
          type="submit"
          disabled={inviando}
          className="w-full rounded-full bg-inchiostro px-6 py-3 font-body text-sm uppercase tracking-widest2 text-crema transition hover:bg-inchiostro/90 disabled:opacity-60"
        >
          {inviando ? "Invio in corso…" : "Invia recensione"}
        </button>
      </form>
    </div>
  );
}
