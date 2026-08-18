"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Foto } from "@/data/config";

type Direzione = "sinistra" | "destra" | "su";

export default function Gallery({
  foto,
  direzione = "su",
}: {
  foto: Foto[];
  direzione?: Direzione;
}) {
  const [aperta, setAperta] = useState<number | null>(null);
  const [visibile, setVisibile] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nodo = gridRef.current;
    if (!nodo) return;

    const osservatore = new IntersectionObserver(
      (voci) => {
        if (voci[0]?.isIntersecting) {
          setVisibile(true);
          osservatore.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    osservatore.observe(nodo);
    return () => osservatore.disconnect();
  }, []);

  const nascostaClass =
    direzione === "sinistra"
      ? "-translate-x-10 opacity-0"
      : direzione === "destra"
      ? "translate-x-10 opacity-0"
      : "translate-y-6 opacity-0";

  return (
    <>
      <div ref={gridRef} className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {foto.map((f, i) => (
          <button
            key={f.src}
            onClick={() => setAperta(i)}
            style={{ transitionDelay: `${Math.min(i * 60, 480)}ms` }}
            className={`group relative aspect-[4/3] overflow-hidden rounded-lg bg-cremascura transition-all duration-700 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-rosso ${
              visibile ? "translate-x-0 translate-y-0 opacity-100" : nascostaClass
            }`}
          >
            <Image
              src={f.src}
              alt={f.alt}
              fill
              sizes="(max-width: 640px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {aperta !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-inchiostro/90 p-4"
          onClick={() => setAperta(null)}
        >
          <button
            className="absolute right-5 top-5 text-3xl text-crema"
            onClick={() => setAperta(null)}
            aria-label="Chiudi"
          >
            ×
          </button>
          <div className="relative h-[80vh] w-full max-w-3xl">
            <Image
              src={foto[aperta].src}
              alt={foto[aperta].alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
