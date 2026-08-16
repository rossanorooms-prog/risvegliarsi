import Link from "next/link";
import { site } from "@/data/config";

export default function Footer() {
  return (
    <footer className="border-t border-oro/20 bg-inchiostro py-12 text-crema">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="font-display text-3xl tracking-wide">{site.nome}</p>
        <p className="mt-1 font-body text-xs uppercase tracking-widest2 text-orochiaro/80">
          {site.claim}
        </p>

        <div className="mt-8 h-px w-16 bg-oro/50" />

        <div className="mt-8 grid gap-8 font-body text-sm text-crema/70 sm:grid-cols-3">
          <div>
            <p className="text-crema/40">Dove siamo</p>
            <p className="mt-1">{site.indirizzo}</p>
          </div>
          <div>
            <p className="text-crema/40">Contatti</p>
            <p className="mt-1">WhatsApp: +{site.whatsappNumero.replace(/^39/, "39 ")}</p>
          </div>
          <div>
            <p className="text-crema/40">Informazioni legali</p>
            <p className="mt-1 space-x-3">
              <Link href="/privacy" className="hover:text-orochiaro">Privacy</Link>
              <span className="text-crema/20">·</span>
              <Link href="/cookie" className="hover:text-orochiaro">Cookie</Link>
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse items-start justify-between gap-4 border-t border-crema/10 pt-6 sm:flex-row sm:items-center">
          <p className="font-body text-xs text-crema/30">
            © {new Date().getFullYear()} {site.nome}. Tutti i diritti riservati.
          </p>
          <Link href="/admin" className="font-body text-xs text-crema/30 underline decoration-crema/20 underline-offset-4 hover:text-orochiaro">
            Area riservata
          </Link>
        </div>
      </div>
    </footer>
  );
}
