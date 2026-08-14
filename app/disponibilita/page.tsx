"use client";

import { useEffect, useState } from "react";
import { camere } from "@/data/config";
import CalendarMonth from "@/components/CalendarMonth";
import WhatsAppButton from "@/components/WhatsAppButton";

type Occupazioni = Record<string, Record<string, boolean>>;

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
        Le date evidenziate sono occupate. Per prenotare le date libere scrivici su WhatsApp.
      </p>

      {!caricato && (
        <p className="mt-10 text-center font-body text-inchiostro/50">Caricamento calendario…</p>
      )}

      {caricato && (
        <div className="mt-14 grid gap-10 sm:grid-cols-2">
          {camere.map((c) => {
            const date = new Set(Object.keys(occupazioni[c.slug] || {}));
            const accentClass = c.accento === "petrolio" ? "bg-petrolio" : "bg-senape";
            return (
              <div key={c.slug}>
                <p className="mb-3 font-display text-2xl text-inchiostro">{c.nome}</p>
                <CalendarMonth occupate={date} accentClass={accentClass} />
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
