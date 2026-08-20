"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { site } from "@/data/config";

const links = [
  { href: "/camere", label: "Le camere" },
  { href: "/galleria", label: "Galleria" },
  { href: "/servizi", label: "Servizi" },
  { href: "/disponibilita", label: "Disponibilità" },
  { href: "/longobucco", label: "Longobucco" },
  { href: "/contatti", label: "Contatti" },
];

export default function Header() {
  const [aperto, setAperto] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-inchiostro/10 bg-crema/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3" onClick={() => setAperto(false)}>
          <Image src="/images/logo.jpg" alt={site.nome} width={52} height={52} className="rounded-full" />
          <span className="whitespace-nowrap font-display text-xl tracking-wide text-inchiostro lg:text-2xl">{site.nome}</span>
        </Link>

        <div className="flex items-center gap-4 lg:gap-6">
          {/* Nav orizzontale: visibile solo da schermi grandi, dove c'è davvero spazio per tutte le voci */}
          <nav className="hidden gap-4 font-body text-sm uppercase tracking-wide text-inchiostro/80 lg:flex xl:gap-6">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="whitespace-nowrap transition-colors hover:text-rosso">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Su desktop grande: apre solo l'accesso amministratore.
              Su schermi più piccoli: è l'unico modo di navigare, quindi contiene tutto. */}
          <button
            onClick={() => setAperto((v) => !v)}
            aria-label={aperto ? "Chiudi menu" : "Apri menu"}
            aria-expanded={aperto}
            className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 rounded-full transition hover:bg-inchiostro/5"
          >
            <span className={`block h-px w-6 bg-inchiostro transition-transform ${aperto ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-px w-6 bg-inchiostro transition-opacity ${aperto ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-inchiostro transition-transform ${aperto ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {aperto && (
        <div className="border-t border-oro/20 bg-crema">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-4 md:px-8">
            {/* Su schermi piccoli/medi mostriamo anche i link principali, dato che la nav orizzontale è nascosta */}
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setAperto(false)}
                className="border-b border-inchiostro/5 py-3 font-body text-sm uppercase tracking-widest2 text-inchiostro/80 transition-colors hover:text-rosso lg:hidden"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/admin"
              onClick={() => setAperto(false)}
              className="py-3 font-body text-sm uppercase tracking-widest2 text-inchiostro/80 transition-colors hover:text-rosso"
            >
              Area amministratore
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
