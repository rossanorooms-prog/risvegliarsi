import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/config";

const links = [
  { href: "/camere", label: "Le camere" },
  { href: "/servizi", label: "Servizi" },
  { href: "/disponibilita", label: "Disponibilità" },
  { href: "/longobucco", label: "Cosa fare" },
  { href: "/contatti", label: "Contatti" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-inchiostro/10 bg-crema/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logo.jpg" alt={site.nome} width={52} height={52} className="rounded-full" />
          <span className="font-display text-2xl tracking-wide text-inchiostro">{site.nome}</span>
        </Link>
        <nav className="hidden gap-7 font-body text-sm uppercase tracking-widest2 text-inchiostro/80 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-rosso">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
