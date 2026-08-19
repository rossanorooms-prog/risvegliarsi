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

    // Se la griglia è già (parzialmente) visibile al caricamento, mostrala subito
    const rect = nodo.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisibile(true);
      return;
    }

    const osservatore = new IntersectionObserver(
      (voci) => {
        if (voci[0]?.isIntersecting) {
          setVisibile(true);
          osservatore.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -80px 0px" }
    );

    osservatore.observe(nodo);
    return () => osservatore.disconnect();
  }, []);

  function stileFoto(i: number): React.CSSProperties {
    const base: React.CSSProperties = {
      transitionProperty: "transform, opacity",
      transitionDuration: "700ms",
      transitionTimingFunction: "ease-out",
      transitionDelay: `${Math.min(i * 60, 480)}ms`,
    };
    if (visibile) {
      return { ...base, transform: "translate(0, 0)", opacity: 1 };
    }
    if (direzione === "sinistra") return { ...base, transform: "translateX(-40px)", opacity: 0 };
    if (direzione === "destra") return { ...base, transform: "translateX(40px)", opacity: 0 };
    return { ...base, transform: "translateY(24px)", opacity: 0 };
  }

  return (
    <>
      <div ref={gridRef} className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {foto.map((f, i) => (
          <button
            key={f.src}
            onClick={() => setAperta(i)}
            style={stileFoto(i)}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-cremascura focus:outline-none focus-visible:ring-2 focus-visible:ring-rosso"
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
