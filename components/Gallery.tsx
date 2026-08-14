"use client";

import { useState } from "react";
import Image from "next/image";
import type { Foto } from "@/data/config";

export default function Gallery({ foto }: { foto: Foto[] }) {
  const [aperta, setAperta] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {foto.map((f, i) => (
          <button
            key={f.src}
            onClick={() => setAperta(i)}
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
