"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { site } from "@/data/config";

const links = [
  { href: "/camere", label: "Le camere" },
  { href: "/servizi", label: "Servizi" },
  { href: "/disponibilita", label: "Disponibilità" },
  { href: "/longobucco", label: "Cosa fare" },
  { href: "/contatti", label: "Contatti" },
  { href: "/admin", label: "Area amministratore" },
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

      {aperto && (
        <div className="border-t border-oro/20 bg-crema">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-4 md:px-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setAperto(false)}
                className="border-b border-inchiostro/5 py-3 font-body text-sm uppercase tracking-widest2 text-inchiostro/80 transition-colors last:border-none hover:text-rosso"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
