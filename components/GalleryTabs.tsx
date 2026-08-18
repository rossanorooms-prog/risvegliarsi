"use client";

import { useState } from "react";
import Gallery from "@/components/Gallery";
import type { GalleriaCategoria } from "@/data/config";

export default function GalleryTabs({ categorie }: { categorie: GalleriaCategoria[] }) {
  const [attiva, setAttiva] = useState(categorie[0]?.slug);

  const categoriaAttiva = categorie.find((c) => c.slug === attiva) || categorie[0];

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3">
        {categorie.map((c) => (
          <button
            key={c.slug}
            onClick={() => setAttiva(c.slug)}
            className={`rounded-full border px-5 py-2 font-body text-sm uppercase tracking-widest2 transition ${
              c.slug === categoriaAttiva.slug
                ? "border-inchiostro bg-inchiostro text-crema"
                : "border-inchiostro/20 text-inchiostro/70 hover:border-inchiostro/50"
            }`}
          >
            {c.nome}
            <span className="ml-1.5 opacity-60">({c.foto.length})</span>
          </button>
        ))}
      </div>

      <div className="mt-10">
        <Gallery foto={categoriaAttiva.foto} />
      </div>
    </div>
  );
}
