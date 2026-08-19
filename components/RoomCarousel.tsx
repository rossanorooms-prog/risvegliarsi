"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Foto } from "@/data/config";

export default function RoomCarousel({
  foto,
  intervalloMs = 3200,
}: {
  foto: Foto[];
  intervalloMs?: number;
}) {
  const [indice, setIndice] = useState(0);
  const [inPausa, setInPausa] = useState(false);
  const riprendiTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Trascinamento col dito/mouse
  const trascinando = useRef(false);
  const startX = useRef(0);
  const deltaX = useRef(0);

  const totale = foto.length;

  function vai(nuovoIndice: number) {
    setIndice(((nuovoIndice % totale) + totale) % totale);
  }

  function pausaTemporanea() {
    setInPausa(true);
    if (riprendiTimeout.current) clearTimeout(riprendiTimeout.current);
    riprendiTimeout.current = setTimeout(() => setInPausa(false), 4500);
  }

  // Scorrimento automatico
  useEffect(() => {
    if (totale <= 1 || inPausa) return;
    const timer = setInterval(() => {
      setIndice((i) => (i + 1) % totale);
    }, intervalloMs);
    return () => clearInterval(timer);
  }, [totale, intervalloMs, inPausa]);

  useEffect(() => {
    return () => {
      if (riprendiTimeout.current) clearTimeout(riprendiTimeout.current);
    };
  }, []);

  function onDragStart(clientX: number) {
    trascinando.current = true;
    startX.current = clientX;
    deltaX.current = 0;
    pausaTemporanea();
  }

  function onDragMove(clientX: number) {
    if (!trascinando.current) return;
    deltaX.current = clientX - startX.current;
  }

  function onDragEnd() {
    if (!trascinando.current) return;
    trascinando.current = false;
    const soglia = 40; // px minimi per considerare uno swipe valido
    if (deltaX.current > soglia) vai(indice - 1);
    else if (deltaX.current < -soglia) vai(indice + 1);
    deltaX.current = 0;
  }

  return (
    <div className="group relative select-none overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${indice * 100}%)` }}
        onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
        onTouchMove={(e) => onDragMove(e.touches[0].clientX)}
        onTouchEnd={onDragEnd}
        onMouseDown={(e) => onDragStart(e.clientX)}
        onMouseMove={(e) => onDragMove(e.clientX)}
        onMouseUp={onDragEnd}
        onMouseLeave={() => trascinando.current && onDragEnd()}
      >
        {foto.map((f) => (
          <div key={f.src} className="relative aspect-[4/3] w-full shrink-0">
            <Image
              src={f.src}
              alt={f.alt}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="pointer-events-none object-cover"
              draggable={false}
            />
          </div>
        ))}
      </div>

      {totale > 1 && (
        <>
          {/* Frecce: sempre visibili, comode soprattutto da PC con il mouse */}
          <button
            onClick={() => {
              vai(indice - 1);
              pausaTemporanea();
            }}
            aria-label="Foto precedente"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-inchiostro/50 p-2 text-white opacity-0 transition-opacity group-hover:opacity-100 focus:opacity-100"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M15.5 3.5 7 12l8.5 8.5 1.4-1.4L9.8 12l7.1-7.1z" /></svg>
          </button>
          <button
            onClick={() => {
              vai(indice + 1);
              pausaTemporanea();
            }}
            aria-label="Foto successiva"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-inchiostro/50 p-2 text-white opacity-0 transition-opacity group-hover:opacity-100 focus:opacity-100"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M8.5 3.5 17 12l-8.5 8.5-1.4-1.4L14.2 12 7.1 4.9z" /></svg>
          </button>

          <div className="pointer-events-none absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
            {foto.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full bg-white transition-all ${
                  i === indice ? "w-4 opacity-100" : "w-1.5 opacity-50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
