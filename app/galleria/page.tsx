import { galleria } from "@/data/config";
import GalleryTabs from "@/components/GalleryTabs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galleria foto — B&B Risvegliarsi Longobucco",
  description:
    "Tutte le foto del B&B Risvegliarsi a Longobucco: le camere Alba e Tramonto, gli spazi comuni e l'esterno della struttura ristrutturata nel centro storico.",
};

export default function GalleriaPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-center font-display text-4xl text-inchiostro sm:text-5xl">
        Galleria
      </h1>
      <p className="mx-auto mt-5 max-w-xl text-center font-body text-inchiostro/70">
        Le camere, gli spazi comuni e l&apos;esterno della struttura, per farti
        un&apos;idea prima di arrivare.
      </p>

      <div className="mt-12">
        <GalleryTabs categorie={galleria} />
      </div>
    </div>
  );
}
