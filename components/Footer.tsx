import Link from "next/link";
import Image from "next/image";
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
            <p className="text-crema/40">Dati identificativi</p>
            <p className="mt-1">CIR: 078068-BEI-00004</p>
            <p className="mt-1">CIN: IT078068B4X9HRQYCH</p>
            <p className="mt-1">P.IVA: 03440190787</p>
          </div>
          <div>
            <p className="text-crema/40">Contatti</p>
            {titolari.map((t) => (
              <p key={t.nome} className="mt-1">
                <a
                  href={`https://wa.me/${t.whatsappNumero}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-orochiaro"
                >
                  <svg viewBox="0 0 32 32" className="h-3.5 w-3.5 shrink-0 fill-[#25D366]" aria-hidden="true">
                    <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.393.7 4.62 1.912 6.494L4 29l7.708-1.86A11.94 11.94 0 0 0 16 27c6.628 0 12-5.373 12-12S22.629 3 16.001 3Zm0 21.75c-1.97 0-3.85-.55-5.47-1.51l-.392-.232-4.578 1.104 1.13-4.463-.257-.407A9.71 9.71 0 0 1 5.25 15c0-5.93 4.82-10.75 10.751-10.75S26.75 9.07 26.75 15 21.933 24.75 16.001 24.75Zm5.73-8.02c-.31-.156-1.84-.907-2.126-1.01-.286-.104-.494-.156-.702.156-.208.312-.806 1.01-.988 1.218-.182.208-.364.234-.674.078-.31-.156-1.31-.483-2.497-1.54-.923-.823-1.547-1.84-1.728-2.152-.182-.312-.02-.48.137-.636.14-.14.311-.364.467-.546.156-.182.208-.312.312-.52.104-.208.052-.39-.026-.546-.078-.156-.702-1.69-.962-2.314-.253-.61-.51-.527-.702-.537l-.598-.01c-.208 0-.546.078-.832.39-.286.312-1.09 1.066-1.09 2.6s1.116 3.017 1.272 3.225c.156.208 2.196 3.354 5.322 4.703.744.322 1.324.514 1.776.658.746.238 1.424.204 1.96.124.598-.089 1.84-.752 2.1-1.478.259-.727.259-1.35.182-1.478-.078-.13-.286-.208-.598-.364Z" />
                  </svg>
                  {t.nome}: +{t.whatsappNumero.replace(/^39/, "39 ")}
                </a>
              </p>
            ))}
            <p className="mt-1">
              <a href={`mailto:${site.email}`} className="hover:text-orochiaro">
                {site.email}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-crema/10 pt-6">
          <p className="font-body text-xs text-crema/50 space-x-3">
            <Link href="/privacy" className="hover:text-orochiaro">Privacy</Link>
            <span className="text-crema/20">·</span>
            <Link href="/cookie" className="hover:text-orochiaro">Cookie</Link>
            <span className="text-crema/20">·</span>
            <Link href="/recensioni" className="hover:text-orochiaro">Lascia una recensione</Link>
          </p>

          <p className="mt-4 font-body text-xs text-crema/30">
            © {new Date().getFullYear()} {site.nome}. Tutti i diritti riservati.
          </p>

          <a
            href="https://omnirasoft.it"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 font-body text-xs text-crema/40 transition hover:text-crema/70"
          >
            Powered by
            <Image src="/images/logo-omnirasoft.png" alt="Omnira Soft" width={100} height={21} />
          </a>
        </div>
      </div>
    </footer>
  );
}
