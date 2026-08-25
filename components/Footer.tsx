import Link from "next/link";
import { site, titolari } from "@/data/config";

const facebookUrl = "https://www.facebook.com/share/1K7nTnLnSc/";

export default function Footer() {
  return (
    <footer className="border-t border-oro/20 bg-petrolioscuro py-12 text-crema">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex items-center gap-4">
          <p className="font-display text-3xl tracking-wide">{site.nome}</p>
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pagina Facebook di Risvegliarsi"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-crema/10 transition hover:bg-crema/20"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-crema">
              <path d="M13.5 21v-7.5h2.5l.4-3H13.5V8.5c0-.87.24-1.46 1.49-1.46H16.5V4.36c-.26-.03-1.15-.11-2.19-.11-2.17 0-3.66 1.32-3.66 3.75v2.5H8.5v3h2.15V21h2.85Z" />
            </svg>
          </a>
        </div>
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
            {titolari.map((t) => (
              <p key={t.nome} className="mt-1">
                <a
                  href={`https://wa.me/${t.whatsappNumero}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orochiaro"
                >
                  WhatsApp {t.nome}: +{t.whatsappNumero.replace(/^39/, "39 ")}
                </a>
              </p>
            ))}
            <p className="mt-1">
              <a href={`mailto:${site.email}`} className="hover:text-orochiaro">
                {site.email}
              </a>
            </p>
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
