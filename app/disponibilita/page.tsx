"use client";

import { useEffect, useState } from "react";
import { camere } from "@/data/config";
import CalendarMonth from "@/components/CalendarMonth";
import WhatsAppButton from "@/components/WhatsAppButton";

type Occupazioni = Record<string, Record<string, boolean>>;

function toISO(d: Date) {
  return d.toISOString().slice(0, 10);
}

function nottiLibereProssimi30(occupateCamera: Record<string, boolean> | undefined) {
  const oggi = new Date();
  let libere = 0;
  for (let i = 0; i < 30; i++) {
    const d = new Date(oggi);
    d.setDate(oggi.getDate() + i);
    if (!occupateCamera?.[toISO(d)]) libere++;
  }
  return libere;
}

export default function DisponibilitaPage() {
  const [occupazioni, setOccupazioni] = useState<Occupazioni>({});
  const [caricato, setCaricato] = useState(false);

  useEffect(() => {
    fetch("/api/calendar")
      .then((r) => r.json())
      .then((res) => {
        if (res.ok) setOccupazioni(res.data);
        setCaricato(true);
      })
      .catch(() => setCaricato(true));
  }, []);

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-center font-display text-4xl text-inchiostro sm:text-5xl">
        Disponibilità
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-center font-body text-inchiostro/70">
        Verde = libera, rosso = occupata. Per prenotare le date libere scrivici su WhatsApp.
      </p>
      <p className="mx-auto mt-3 max-w-xl text-center font-body text-sm uppercase tracking-widest2 text-rosso">
        Affrettati, le camere si riempiono in fretta
      </p>

      {!caricato && (
        <p className="mt-10 text-center font-body text-inchiostro/50">Caricamento calendario…</p>
      )}

      {caricato && (
        <div className="mt-14 grid gap-10 sm:grid-cols-2">
          {camere.map((c) => {
            const date = new Set(Object.keys(occupazioni[c.slug] || {}));
            const libere = nottiLibereProssimi30(occupazioni[c.slug]);
            return (
              <div key={c.slug}>
                <div className="mb-3 flex items-center justify-between">
                  <p className="font-display text-2xl text-inchiostro">{c.nome}</p>
                  {libere <= 10 && (
                    <span className="rounded-full bg-rosso/10 px-3 py-1 font-body text-xs uppercase tracking-wide text-rosso">
                      Solo {libere} notti libere nei prossimi 30 giorni
                    </span>
                  )}
                </div>
                <CalendarMonth occupate={date} />
              </div>
            );
          })}
        </div>
      )}

      <div className="mt-16 flex justify-center">
        <WhatsAppButton label="Prenota su WhatsApp" fixed={false} />
      </div>
    </div>
  );
}
