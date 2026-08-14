"use client";

import { useState } from "react";

const MESI = [
  "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
  "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre",
];
const GIORNI = ["L", "M", "M", "G", "V", "S", "D"];

function toISO(y: number, m: number, d: number) {
  const mm = String(m + 1).padStart(2, "0");
  const dd = String(d).padStart(2, "0");
  return `${y}-${mm}-${dd}`;
}

export default function CalendarMonth({
  occupate,
  editabile = false,
  onToggle,
  accentClass = "bg-rosso",
}: {
  occupate: Set<string>;
  editabile?: boolean;
  onToggle?: (dataISO: string, nuovoStato: boolean) => void;
  accentClass?: string;
}) {
  const oggi = new Date();
  const [anno, setAnno] = useState(oggi.getFullYear());
  const [mese, setMese] = useState(oggi.getMonth());

  const primoGiorno = new Date(anno, mese, 1);
  // Lunedì = 0 ... Domenica = 6
  const offset = (primoGiorno.getDay() + 6) % 7;
  const giorniNelMese = new Date(anno, mese + 1, 0).getDate();

  const celle: (number | null)[] = [
    ...Array(offset).fill(null),
    ...Array.from({ length: giorniNelMese }, (_, i) => i + 1),
  ];

  function cambiaMese(delta: number) {
    let m = mese + delta;
    let y = anno;
    if (m < 0) { m = 11; y -= 1; }
    if (m > 11) { m = 0; y += 1; }
    setMese(m);
    setAnno(y);
  }

  const oggiISO = toISO(oggi.getFullYear(), oggi.getMonth(), oggi.getDate());

  return (
    <div className="rounded-xl border border-inchiostro/10 bg-white/60 p-4 sm:p-6">
      <div className="mb-4 flex items-center justify-between">
        <button
          onClick={() => cambiaMese(-1)}
          className="rounded-full px-3 py-1 font-body text-sm text-inchiostro/70 hover:bg-inchiostro/5"
          aria-label="Mese precedente"
        >
          ←
        </button>
        <p className="font-display text-lg tracking-wide text-inchiostro">
          {MESI[mese]} {anno}
        </p>
        <button
          onClick={() => cambiaMese(1)}
          className="rounded-full px-3 py-1 font-body text-sm text-inchiostro/70 hover:bg-inchiostro/5"
          aria-label="Mese successivo"
        >
          →
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 font-body text-xs uppercase tracking-wide text-inchiostro/40">
        {GIORNI.map((g, i) => (
          <div key={i} className="py-1 text-center">{g}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {celle.map((giorno, i) => {
          if (giorno === null) return <div key={i} />;
          const dataISO = toISO(anno, mese, giorno);
          const occupata = occupate.has(dataISO);
          const passato = dataISO < oggiISO;

          const base = "relative aspect-square rounded-md font-body text-sm flex items-center justify-center transition-colors";
          let stile = "text-inchiostro/70 hover:bg-inchiostro/5";
          if (occupata) stile = `${accentClass} text-white`;
          if (passato) stile += " opacity-30";

          if (editabile) {
            return (
              <button
                key={dataISO}
                disabled={passato}
                onClick={() => onToggle?.(dataISO, !occupata)}
                className={`${base} ${stile} ${passato ? "cursor-not-allowed" : "cursor-pointer"}`}
                title={occupata ? "Segna come libera" : "Segna come occupata"}
              >
                {giorno}
              </button>
            );
          }

          return (
            <div key={dataISO} className={`${base} ${stile}`}>
              {giorno}
            </div>
          );
        })}
      </div>
    </div>
  );
}
