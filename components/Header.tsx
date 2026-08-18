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
  { href: "/longobucco", label: "Cosa fare a Longobucco" },
  { href: "/contatti", label: "Contatti" },
];

export default function Header() {
  const [aperto, setAperto] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-inchiostro/10 bg-crema/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setAperto(false)}>
          <Image src="/images/logo.jpg" alt={site.nome} width={52} height={52} className="rounded-full" />
          <span className="font-display text-2xl tracking-wide text-inchiostro">{site.nome}</span>
        </Link>

        <div className="flex items-center gap-6">
          {/* Nav orizzontale: visibile solo da tablet in su */}
          <nav className="hidden gap-7 font-body text-sm uppercase tracking-widest2 text-inchiostro/80 md:flex">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="transition-colors hover:text-rosso">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Su desktop: apre solo l'accesso amministratore.
              Su mobile: è l'unico modo di navigare, quindi contiene tutto. */}
          <button
            onClick={() => setAperto((v) => !v)}
            aria-label={aperto ? "Chiudi menu" : "Apri menu"}
            aria-expanded={aperto}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full transition hover:bg-inchiostro/5"
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
            {/* Su mobile mostriamo anche i link principali, dato che la nav orizzontale è nascosta */}
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setAperto(false)}
                className="border-b border-inchiostro/5 py-3 font-body text-sm uppercase tracking-widest2 text-inchiostro/80 transition-colors md:hidden hover:text-rosso"
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
