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
  const contenitoreRef = useRef<HTMLDivElement>(null);
  const [indice, setIndice] = useState(0);
  const [inPausa, setInPausa] = useState(false);
  const riprendiTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Scorrimento automatico
  useEffect(() => {
    if (foto.length <= 1 || inPausa) return;
    const timer = setInterval(() => {
      setIndice((i) => (i + 1) % foto.length);
    }, intervalloMs);
    return () => clearInterval(timer);
  }, [foto.length, intervalloMs, inPausa]);

  // Porta la foto attiva in vista quando l'indice cambia automaticamente
  useEffect(() => {
    const nodo = contenitoreRef.current;
    if (!nodo) return;
    const figlio = nodo.children[indice] as HTMLElement | undefined;
    figlio?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [indice]);

  function pausaTemporanea() {
    setInPausa(true);
    if (riprendiTimeout.current) clearTimeout(riprendiTimeout.current);
    riprendiTimeout.current = setTimeout(() => setInPausa(false), 4000);
  }

  // Se l'utente scorre a mano, aggiorna l'indice in base alla posizione raggiunta
  function onScroll() {
    const nodo = contenitoreRef.current;
    if (!nodo) return;
    const centroContenitore = nodo.scrollLeft + nodo.clientWidth / 2;
    let piuVicino = 0;
    let distanzaMin = Infinity;
    Array.from(nodo.children).forEach((figlio, i) => {
      const el = figlio as HTMLElement;
      const centroFiglio = el.offsetLeft + el.clientWidth / 2;
      const distanza = Math.abs(centroFiglio - centroContenitore);
      if (distanza < distanzaMin) {
        distanzaMin = distanza;
        piuVicino = i;
      }
    });
    setIndice(piuVicino);
  }

  return (
    <div className="relative">
      <div
        ref={contenitoreRef}
        onScroll={onScroll}
        onPointerDown={pausaTemporanea}
        onTouchStart={pausaTemporanea}
        className="carosello-nascondi-scrollbar flex snap-x snap-mandatory overflow-x-auto scroll-smooth"
      >
        {foto.map((f) => (
          <div key={f.src} className="relative aspect-[4/3] w-full shrink-0 snap-center">
            <Image src={f.src} alt={f.alt} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
          </div>
        ))}
      </div>

      {foto.length > 1 && (
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
      )}
    </div>
  );
}
